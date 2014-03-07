[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "type": "word",
        "word": "data-object-yaml"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAs a bit of background, this package is built on a few other packages I wrote.\nyaml is a low-level wrapper around the C libyaml library, with an enumerator\ninterface. data-object is a package defining a data type:\n\u003c/p\u003e\u003cpre\u003e\n    data Object k v = Scalar v\n                    | Sequence [Object k v]\n                    | Mapping [(k, Object k v)]\n\u003c/pre\u003e\u003cp\u003eIn other words, it can represent JSON data fully, and YAML data almost fully.\nIn particular, it doesn't handle cyclical aliases, which I hope doesn't really\noccur too much in real life.\n\u003c/p\u003e\u003cp\u003eAnother package to deal with is failure: it basically replaces using an Either\nfor error-handling into a typeclass. It has instances for Maybe, IO and lists\n    by default.\n\u003c/p\u003e\u003cp\u003eThe last package is convertible-text, which is a fork of John Goerzen's\nconvertible package. The difference is it supports both conversions that are\nguaranteed to succeed (Int -\u003e String) and ones which may fail (String -\u003e Int),\nand also supports various textual datatypes (String, lazy/strict ByteString,\nlazy/string Text).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eYamlScalar and YamlObject\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWe have a \u003ccode\u003etype YamlObject = Object YamlScalar YamlScalar\u003c/code\u003e, where a YamlScalar\nis just a ByteString value with a tag and a style. A \"style\" is how the data\nwas represented in the underlying YAML file: single quoted, double quoted, etc.\n\u003c/p\u003e\u003cp\u003eThen there is an IsYamlScalar typeclass, which provides fromYamlScalar and\ntoYamlScalar conversion functions. There are instances for all the\n\"text-like\" datatypes: String, ByteString and Text. The built-in instances\nall assume a UTF-8 data encoding. And around this we have toYamlObject and\nfromYamlObject functions, which do exactly what they sound like.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEncoding and decoding\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThere are two encoding files: encode and encodeFile. You can guess the\ndifferent: the former produces a ByteString (strict) and the latter writes to a\nfile. They both take an Object, whose keys and values must be an instance of\nIsYamlScalar. So, for example:\n\u003c/p\u003e\u003cpre\u003e\n    encodeFile \u003ca\u003emyfile.yaml\u003c/a\u003e $ Mapping\n        [ (\u003ca\u003eMichael\u003c/a\u003e, Mapping\n            [ (\u003ca\u003eage\u003c/a\u003e, Scalar \u003ca\u003e26\u003c/a\u003e)\n            , (\u003ca\u003ecolor\u003c/a\u003e, Scalar \u003ca\u003eblue\u003c/a\u003e)\n            ])\n        , (\u003ca\u003eEliezer\u003c/a\u003e, Mapping\n            [ (\u003ca\u003eage\u003c/a\u003e, Scalar \u003ca\u003e2\u003c/a\u003e)\n            , (\u003ca\u003ecolor\u003c/a\u003e, Scalar \u003ca\u003egreen\u003c/a\u003e)\n            ])\n        ]\n\u003c/pre\u003e\u003cp\u003edecoding is only slightly more complicated, since the decoding can fail. In\nparticular, the return type is an IO wrapped around a Failure. For example, you\ncould use:\n\u003c/p\u003e\u003cpre\u003e\n    maybeObject \u003c- decodeFile \u003ca\u003emyfile.yaml\u003c/a\u003e\n    case maybeObject of\n        Nothing -\u003e putStrLn \u003ca\u003eError parsing YAML file.\u003c/a\u003e\n        Just object -\u003e putStrLn \u003ca\u003eSuccessfully parsed.\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003eIf you just want to throw any parse errors as IO exception, you can use join:\n\u003c/p\u003e\u003cpre\u003e\n    import Control.Monad (join)\n    object \u003c- join $ decodeFile \u003ca\u003emyfile.yaml\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003eThis takes advantage of the IO instance of Failure.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eParsing an Object\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eIn order to pull the data out of an Object, you can use the helper functions\nfrom Data.Object. For example:\n\u003c/p\u003e\u003cpre\u003e\n    import Data.Object\n    import Data.Object.Yaml\n    import Control.Monad\n\nmain = do\n        object \u003c- join $ decodeFile \u003ca\u003emyfile.yaml\u003c/a\u003e\n        people \u003c- fromMapping object\n        michael \u003c- lookupMapping \u003ca\u003eMichael\u003c/a\u003e people\n        age \u003c- lookupScalar \u003ca\u003eage\u003c/a\u003e michael\n        putStrLn $ \u003ca\u003eMichael is \u003c/a\u003e ++ age ++ \u003ca\u003e years old.\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003elookupScalar and friends implement Maybe, so you can test for optional \nattributes by switching on Nothing/Just a:\n\u003c/p\u003e\u003cpre\u003e\n    name \u003c- lookupScalar \u003ca\u003emiddleName\u003c/a\u003e michael :: Maybe String\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAnd that's it\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThere's really not more to know about this library. Enjoy!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Object.Yaml",
          "name": "Yaml",
          "package": "data-object-yaml",
          "source": "src/Data-Object-Yaml.html",
          "type": "module"
        },
        "index": {
          "description": "As bit of background this package is built on few other packages wrote yaml is low-level wrapper around the libyaml library with an enumerator interface data-object is package defining data type data Object Scalar Sequence Object Mapping Object In other words it can represent JSON data fully and YAML data almost fully In particular it doesn handle cyclical aliases which hope doesn really occur too much in real life Another package to deal with is failure it basically replaces using an Either for error-handling into typeclass It has instances for Maybe IO and lists by default The last package is convertible-text which is fork of John Goerzen convertible package The difference is it supports both conversions that are guaranteed to succeed Int String and ones which may fail String Int and also supports various textual datatypes String lazy strict ByteString lazy string Text YamlScalar and YamlObject We have type YamlObject Object YamlScalar YamlScalar where YamlScalar is just ByteString value with tag and style style is how the data was represented in the underlying YAML file single quoted double quoted etc Then there is an IsYamlScalar typeclass which provides fromYamlScalar and toYamlScalar conversion functions There are instances for all the text-like datatypes String ByteString and Text The built-in instances all assume UTF-8 data encoding And around this we have toYamlObject and fromYamlObject functions which do exactly what they sound like Encoding and decoding There are two encoding files encode and encodeFile You can guess the different the former produces ByteString strict and the latter writes to file They both take an Object whose keys and values must be an instance of IsYamlScalar So for example encodeFile myfile.yaml Mapping Michael Mapping age Scalar color Scalar blue Eliezer Mapping age Scalar color Scalar green decoding is only slightly more complicated since the decoding can fail In particular the return type is an IO wrapped around Failure For example you could use maybeObject decodeFile myfile.yaml case maybeObject of Nothing putStrLn Error parsing YAML file Just object putStrLn Successfully parsed If you just want to throw any parse errors as IO exception you can use join import Control.Monad join object join decodeFile myfile.yaml This takes advantage of the IO instance of Failure Parsing an Object In order to pull the data out of an Object you can use the helper functions from Data.Object For example import Data.Object import Data.Object.Yaml import Control.Monad main do object join decodeFile myfile.yaml people fromMapping object michael lookupMapping Michael people age lookupScalar age michael putStrLn Michael is age years old lookupScalar and friends implement Maybe so you can test for optional attributes by switching on Nothing Just name lookupScalar middleName michael Maybe String And that it There really not more to know about this library Enjoy",
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "Yaml",
          "package": "data-object-yaml",
          "partial": "Yaml",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "IsYamlScalar",
          "package": "data-object-yaml",
          "source": "src/Data-Object-Yaml.html#IsYamlScalar",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "IsYamlScalar",
          "package": "data-object-yaml",
          "partial": "Is Yaml Scalar",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#t:IsYamlScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "ParseException",
          "package": "data-object-yaml",
          "source": "src/Data-Object-Yaml.html#ParseException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "ParseException",
          "package": "data-object-yaml",
          "partial": "Parse Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#t:ParseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "YamlObject",
          "package": "data-object-yaml",
          "source": "src/Data-Object-Yaml.html#YamlObject",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "YamlObject",
          "package": "data-object-yaml",
          "partial": "Yaml Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#t:YamlObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality depends on \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, not \u003ccode\u003e\u003ca\u003estyle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Object.Yaml",
          "name": "YamlScalar",
          "package": "data-object-yaml",
          "source": "src/Data-Object-Yaml.html#YamlScalar",
          "type": "data"
        },
        "index": {
          "description": "Equality depends on value and tag not style",
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "YamlScalar",
          "package": "data-object-yaml",
          "partial": "Yaml Scalar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#t:YamlScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "InvalidYaml",
          "package": "data-object-yaml",
          "signature": "InvalidYaml (Maybe String)",
          "source": "src/Data-Object-Yaml.html#ParseException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "InvalidYaml",
          "package": "data-object-yaml",
          "partial": "Invalid Yaml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:InvalidYaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "NonScalarKey",
          "package": "data-object-yaml",
          "signature": "NonScalarKey",
          "source": "src/Data-Object-Yaml.html#ParseException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "NonScalarKey",
          "package": "data-object-yaml",
          "partial": "Non Scalar Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:NonScalarKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "UnexpectedEvent",
          "package": "data-object-yaml",
          "signature": "UnexpectedEvent",
          "source": "src/Data-Object-Yaml.html#ParseException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "UnexpectedEvent",
          "package": "data-object-yaml",
          "partial": "Unexpected Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:UnexpectedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "UnknownAlias",
          "package": "data-object-yaml",
          "signature": "UnknownAlias",
          "source": "src/Data-Object-Yaml.html#ParseException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "UnknownAlias",
          "package": "data-object-yaml",
          "partial": "Unknown Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:UnknownAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "YamlScalar",
          "package": "data-object-yaml",
          "signature": "YamlScalar",
          "source": "src/Data-Object-Yaml.html#YamlScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "YamlScalar",
          "package": "data-object-yaml",
          "partial": "Yaml Scalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:YamlScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "_anchorName",
          "package": "data-object-yaml",
          "signature": "AnchorName",
          "source": "src/Data-Object-Yaml.html#ParseException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "_anchorName",
          "package": "data-object-yaml",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:_anchorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "_expected",
          "package": "data-object-yaml",
          "signature": "Maybe Event",
          "source": "src/Data-Object-Yaml.html#ParseException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "_expected",
          "package": "data-object-yaml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:_expected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "_received",
          "package": "data-object-yaml",
          "signature": "Maybe Event",
          "source": "src/Data-Object-Yaml.html#ParseException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "_received",
          "package": "data-object-yaml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:_received"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "decode",
          "package": "data-object-yaml",
          "signature": "ByteString -\u003e m (Object k v)",
          "source": "src/Data-Object-Yaml.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "decode",
          "normalized": "ByteString-\u003ea(Object b c)",
          "package": "data-object-yaml",
          "signature": "ByteString-\u003em(Object k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "decodeFile",
          "package": "data-object-yaml",
          "signature": "FilePath -\u003e IO (m (Object k v))",
          "source": "src/Data-Object-Yaml.html#decodeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "decodeFile",
          "normalized": "FilePath-\u003eIO(a(Object b c))",
          "package": "data-object-yaml",
          "partial": "File",
          "signature": "FilePath-\u003eIO(m(Object k v))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:decodeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "encode",
          "package": "data-object-yaml",
          "signature": "Object k v -\u003e ByteString",
          "source": "src/Data-Object-Yaml.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "encode",
          "normalized": "Object a b-\u003eByteString",
          "package": "data-object-yaml",
          "signature": "Object k v-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "encodeFile",
          "package": "data-object-yaml",
          "signature": "FilePath -\u003e Object k v -\u003e IO ()",
          "source": "src/Data-Object-Yaml.html#encodeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "encodeFile",
          "normalized": "FilePath-\u003eObject a b-\u003eIO()",
          "package": "data-object-yaml",
          "partial": "File",
          "signature": "FilePath-\u003eObject k v-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:encodeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "fromYamlObject",
          "package": "data-object-yaml",
          "signature": "YamlObject -\u003e Object k v",
          "source": "src/Data-Object-Yaml.html#fromYamlObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "fromYamlObject",
          "normalized": "YamlObject-\u003eObject a b",
          "package": "data-object-yaml",
          "partial": "Yaml Object",
          "signature": "YamlObject-\u003eObject k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:fromYamlObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "fromYamlScalar",
          "package": "data-object-yaml",
          "signature": "YamlScalar -\u003e a",
          "source": "src/Data-Object-Yaml.html#fromYamlScalar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "fromYamlScalar",
          "normalized": "YamlScalar-\u003ea",
          "package": "data-object-yaml",
          "partial": "Yaml Scalar",
          "signature": "YamlScalar-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:fromYamlScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "style",
          "package": "data-object-yaml",
          "signature": "Style",
          "source": "src/Data-Object-Yaml.html#YamlScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "style",
          "package": "data-object-yaml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "tag",
          "package": "data-object-yaml",
          "signature": "Tag",
          "source": "src/Data-Object-Yaml.html#YamlScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "tag",
          "package": "data-object-yaml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "toYamlObject",
          "package": "data-object-yaml",
          "signature": "Object k v -\u003e YamlObject",
          "source": "src/Data-Object-Yaml.html#toYamlObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "toYamlObject",
          "normalized": "Object a b-\u003eYamlObject",
          "package": "data-object-yaml",
          "partial": "Yaml Object",
          "signature": "Object k v-\u003eYamlObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:toYamlObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "toYamlScalar",
          "package": "data-object-yaml",
          "signature": "a -\u003e YamlScalar",
          "source": "src/Data-Object-Yaml.html#toYamlScalar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "toYamlScalar",
          "normalized": "a-\u003eYamlScalar",
          "package": "data-object-yaml",
          "partial": "Yaml Scalar",
          "signature": "a-\u003eYamlScalar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:toYamlScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object.Yaml",
          "name": "value",
          "package": "data-object-yaml",
          "signature": "ByteString",
          "source": "src/Data-Object-Yaml.html#YamlScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object Yaml",
          "module": "Data.Object.Yaml",
          "name": "value",
          "package": "data-object-yaml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:value"
      }
    }
  ]
]