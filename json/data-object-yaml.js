[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAs a bit of background, this package is built on a few other packages I wrote.\nyaml is a low-level wrapper around the C libyaml library, with an enumerator\ninterface. data-object is a package defining a data type:\n\u003c/p\u003e\u003cpre\u003e\n    data Object k v = Scalar v\n                    | Sequence [Object k v]\n                    | Mapping [(k, Object k v)]\n\u003c/pre\u003e\u003cp\u003eIn other words, it can represent JSON data fully, and YAML data almost fully.\nIn particular, it doesn't handle cyclical aliases, which I hope doesn't really\noccur too much in real life.\n\u003c/p\u003e\u003cp\u003eAnother package to deal with is failure: it basically replaces using an Either\nfor error-handling into a typeclass. It has instances for Maybe, IO and lists\n    by default.\n\u003c/p\u003e\u003cp\u003eThe last package is convertible-text, which is a fork of John Goerzen's\nconvertible package. The difference is it supports both conversions that are\nguaranteed to succeed (Int -\u003e String) and ones which may fail (String -\u003e Int),\nand also supports various textual datatypes (String, lazy/strict ByteString,\nlazy/string Text).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eYamlScalar and YamlObject\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWe have a \u003ccode\u003etype YamlObject = Object YamlScalar YamlScalar\u003c/code\u003e, where a YamlScalar\nis just a ByteString value with a tag and a style. A \"style\" is how the data\nwas represented in the underlying YAML file: single quoted, double quoted, etc.\n\u003c/p\u003e\u003cp\u003eThen there is an IsYamlScalar typeclass, which provides fromYamlScalar and\ntoYamlScalar conversion functions. There are instances for all the\n\"text-like\" datatypes: String, ByteString and Text. The built-in instances\nall assume a UTF-8 data encoding. And around this we have toYamlObject and\nfromYamlObject functions, which do exactly what they sound like.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEncoding and decoding\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThere are two encoding files: encode and encodeFile. You can guess the\ndifferent: the former produces a ByteString (strict) and the latter writes to a\nfile. They both take an Object, whose keys and values must be an instance of\nIsYamlScalar. So, for example:\n\u003c/p\u003e\u003cpre\u003e\n    encodeFile \u003ca\u003emyfile.yaml\u003c/a\u003e $ Mapping\n        [ (\u003ca\u003eMichael\u003c/a\u003e, Mapping\n            [ (\u003ca\u003eage\u003c/a\u003e, Scalar \u003ca\u003e26\u003c/a\u003e)\n            , (\u003ca\u003ecolor\u003c/a\u003e, Scalar \u003ca\u003eblue\u003c/a\u003e)\n            ])\n        , (\u003ca\u003eEliezer\u003c/a\u003e, Mapping\n            [ (\u003ca\u003eage\u003c/a\u003e, Scalar \u003ca\u003e2\u003c/a\u003e)\n            , (\u003ca\u003ecolor\u003c/a\u003e, Scalar \u003ca\u003egreen\u003c/a\u003e)\n            ])\n        ]\n\u003c/pre\u003e\u003cp\u003edecoding is only slightly more complicated, since the decoding can fail. In\nparticular, the return type is an IO wrapped around a Failure. For example, you\ncould use:\n\u003c/p\u003e\u003cpre\u003e\n    maybeObject \u003c- decodeFile \u003ca\u003emyfile.yaml\u003c/a\u003e\n    case maybeObject of\n        Nothing -\u003e putStrLn \u003ca\u003eError parsing YAML file.\u003c/a\u003e\n        Just object -\u003e putStrLn \u003ca\u003eSuccessfully parsed.\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003eIf you just want to throw any parse errors as IO exception, you can use join:\n\u003c/p\u003e\u003cpre\u003e\n    import Control.Monad (join)\n    object \u003c- join $ decodeFile \u003ca\u003emyfile.yaml\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003eThis takes advantage of the IO instance of Failure.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eParsing an Object\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eIn order to pull the data out of an Object, you can use the helper functions\nfrom Data.Object. For example:\n\u003c/p\u003e\u003cpre\u003e\n    import Data.Object\n    import Data.Object.Yaml\n    import Control.Monad\n\nmain = do\n        object \u003c- join $ decodeFile \u003ca\u003emyfile.yaml\u003c/a\u003e\n        people \u003c- fromMapping object\n        michael \u003c- lookupMapping \u003ca\u003eMichael\u003c/a\u003e people\n        age \u003c- lookupScalar \u003ca\u003eage\u003c/a\u003e michael\n        putStrLn $ \u003ca\u003eMichael is \u003c/a\u003e ++ age ++ \u003ca\u003e years old.\u003c/a\u003e\n\u003c/pre\u003e\u003cp\u003elookupScalar and friends implement Maybe, so you can test for optional \nattributes by switching on Nothing/Just a:\n\u003c/p\u003e\u003cpre\u003e\n    name \u003c- lookupScalar \u003ca\u003emiddleName\u003c/a\u003e michael :: Maybe String\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAnd that's it\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThere's really not more to know about this library. Enjoy!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "module",
        "fct-source": "src/Data-Object-Yaml.html",
        "fct-type": "module",
        "title": "Yaml"
      },
      "index": {
        "description": "As bit of background this package is built on few other packages wrote yaml is low-level wrapper around the libyaml library with an enumerator interface data-object is package defining data type data Object Scalar Sequence Object Mapping Object In other words it can represent JSON data fully and YAML data almost fully In particular it doesn handle cyclical aliases which hope doesn really occur too much in real life Another package to deal with is failure it basically replaces using an Either for error-handling into typeclass It has instances for Maybe IO and lists by default The last package is convertible-text which is fork of John Goerzen convertible package The difference is it supports both conversions that are guaranteed to succeed Int String and ones which may fail String Int and also supports various textual datatypes String lazy strict ByteString lazy string Text YamlScalar and YamlObject We have type YamlObject Object YamlScalar YamlScalar where YamlScalar is just ByteString value with tag and style style is how the data was represented in the underlying YAML file single quoted double quoted etc Then there is an IsYamlScalar typeclass which provides fromYamlScalar and toYamlScalar conversion functions There are instances for all the text-like datatypes String ByteString and Text The built-in instances all assume UTF-8 data encoding And around this we have toYamlObject and fromYamlObject functions which do exactly what they sound like Encoding and decoding There are two encoding files encode and encodeFile You can guess the different the former produces ByteString strict and the latter writes to file They both take an Object whose keys and values must be an instance of IsYamlScalar So for example encodeFile myfile.yaml Mapping Michael Mapping age Scalar color Scalar blue Eliezer Mapping age Scalar color Scalar green decoding is only slightly more complicated since the decoding can fail In particular the return type is an IO wrapped around Failure For example you could use maybeObject decodeFile myfile.yaml case maybeObject of Nothing putStrLn Error parsing YAML file Just object putStrLn Successfully parsed If you just want to throw any parse errors as IO exception you can use join import Control.Monad join object join decodeFile myfile.yaml This takes advantage of the IO instance of Failure Parsing an Object In order to pull the data out of an Object you can use the helper functions from Data.Object For example import Data.Object import Data.Object.Yaml import Control.Monad main do object join decodeFile myfile.yaml people fromMapping object michael lookupMapping Michael people age lookupScalar age michael putStrLn Michael is age years old lookupScalar and friends implement Maybe so you can test for optional attributes by switching on Nothing Just name lookupScalar middleName michael Maybe String And that it There really not more to know about this library Enjoy",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "Yaml",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "Yaml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#t:IsYamlScalar",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "class",
        "fct-source": "src/Data-Object-Yaml.html#IsYamlScalar",
        "fct-type": "class",
        "title": "IsYamlScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "IsYamlScalar",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "Is Yaml Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#t:ParseException",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "data",
        "fct-source": "src/Data-Object-Yaml.html#ParseException",
        "fct-type": "data",
        "title": "ParseException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "ParseException",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "Parse Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#t:YamlObject",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "type",
        "fct-source": "src/Data-Object-Yaml.html#YamlObject",
        "fct-type": "type",
        "title": "YamlObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "YamlObject",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "Yaml Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#t:YamlScalar",
      "description": {
        "fct-descr": "\u003cp\u003eEquality depends on \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e, not \u003ccode\u003e\u003ca\u003estyle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "data",
        "fct-source": "src/Data-Object-Yaml.html#YamlScalar",
        "fct-type": "data",
        "title": "YamlScalar"
      },
      "index": {
        "description": "Equality depends on value and tag not style",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "YamlScalar",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "Yaml Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:InvalidYaml",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "InvalidYaml (Maybe String)",
        "fct-source": "src/Data-Object-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "InvalidYaml"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "InvalidYaml",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "Invalid Yaml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:NonScalarKey",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "NonScalarKey",
        "fct-source": "src/Data-Object-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "NonScalarKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "NonScalarKey",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "Non Scalar Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:UnexpectedEvent",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "UnexpectedEvent",
        "fct-source": "src/Data-Object-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "UnexpectedEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "UnexpectedEvent",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "Unexpected Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:UnknownAlias",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "UnknownAlias",
        "fct-source": "src/Data-Object-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "UnknownAlias"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "UnknownAlias",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "Unknown Alias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:YamlScalar",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "YamlScalar",
        "fct-source": "src/Data-Object-Yaml.html#YamlScalar",
        "fct-type": "function",
        "title": "YamlScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "YamlScalar",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "Yaml Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:_anchorName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "AnchorName",
        "fct-source": "src/Data-Object-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "_anchorName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "_anchorName",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:_expected",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "Maybe Event",
        "fct-source": "src/Data-Object-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "_expected"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "_expected",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:_received",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "Maybe Event",
        "fct-source": "src/Data-Object-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "_received"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "_received",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:decode",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "ByteString -\u003e m (Object k v)",
        "fct-source": "src/Data-Object-Yaml.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "decode",
        "normalized": "ByteString-\u003ea(Object b c)",
        "package": "data-object-yaml",
        "partial": "",
        "signature": "ByteString-\u003em(Object k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:decodeFile",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "FilePath -\u003e IO (m (Object k v))",
        "fct-source": "src/Data-Object-Yaml.html#decodeFile",
        "fct-type": "function",
        "title": "decodeFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "decodeFile",
        "normalized": "FilePath-\u003eIO(a(Object b c))",
        "package": "data-object-yaml",
        "partial": "File",
        "signature": "FilePath-\u003eIO(m(Object k v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:encode",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "Object k v -\u003e ByteString",
        "fct-source": "src/Data-Object-Yaml.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "encode",
        "normalized": "Object a b-\u003eByteString",
        "package": "data-object-yaml",
        "partial": "",
        "signature": "Object k v-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:encodeFile",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "FilePath -\u003e Object k v -\u003e IO ()",
        "fct-source": "src/Data-Object-Yaml.html#encodeFile",
        "fct-type": "function",
        "title": "encodeFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "encodeFile",
        "normalized": "FilePath-\u003eObject a b-\u003eIO()",
        "package": "data-object-yaml",
        "partial": "File",
        "signature": "FilePath-\u003eObject k v-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:fromYamlObject",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "YamlObject -\u003e Object k v",
        "fct-source": "src/Data-Object-Yaml.html#fromYamlObject",
        "fct-type": "function",
        "title": "fromYamlObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "fromYamlObject",
        "normalized": "YamlObject-\u003eObject a b",
        "package": "data-object-yaml",
        "partial": "Yaml Object",
        "signature": "YamlObject-\u003eObject k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:fromYamlScalar",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "YamlScalar -\u003e a",
        "fct-source": "src/Data-Object-Yaml.html#fromYamlScalar",
        "fct-type": "method",
        "title": "fromYamlScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "fromYamlScalar",
        "normalized": "YamlScalar-\u003ea",
        "package": "data-object-yaml",
        "partial": "Yaml Scalar",
        "signature": "YamlScalar-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:style",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "Style",
        "fct-source": "src/Data-Object-Yaml.html#YamlScalar",
        "fct-type": "function",
        "title": "style"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "style",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:tag",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "Tag",
        "fct-source": "src/Data-Object-Yaml.html#YamlScalar",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "tag",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:toYamlObject",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "Object k v -\u003e YamlObject",
        "fct-source": "src/Data-Object-Yaml.html#toYamlObject",
        "fct-type": "function",
        "title": "toYamlObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "toYamlObject",
        "normalized": "Object a b-\u003eYamlObject",
        "package": "data-object-yaml",
        "partial": "Yaml Object",
        "signature": "Object k v-\u003eYamlObject"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:toYamlScalar",
      "description": {
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "a -\u003e YamlScalar",
        "fct-source": "src/Data-Object-Yaml.html#toYamlScalar",
        "fct-type": "method",
        "title": "toYamlScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "toYamlScalar",
        "normalized": "a-\u003eYamlScalar",
        "package": "data-object-yaml",
        "partial": "Yaml Scalar",
        "signature": "a-\u003eYamlScalar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object-yaml/docs/Data-Object-Yaml.html#v:value",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Object.Yaml",
        "fct-package": "data-object-yaml",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Object-Yaml.html#YamlScalar",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object Yaml",
        "module": "Data.Object.Yaml",
        "name": "value",
        "normalized": "",
        "package": "data-object-yaml",
        "partial": "",
        "signature": ""
      }
    }
  }
]