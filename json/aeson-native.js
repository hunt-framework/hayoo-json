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
        "word": "aeson-native"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficiently serialize a JSON value as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n encoded as UTF-8.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aeson.Encode",
          "name": "Encode",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Encode.html",
          "type": "module"
        },
        "index": {
          "description": "Efficiently serialize JSON value as lazy ByteString encoded as UTF-8",
          "hierarchy": "Data Aeson Encode",
          "module": "Data.Aeson.Encode",
          "name": "Encode",
          "package": "aeson-native",
          "partial": "Encode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Encode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently serialize a JSON value as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Encode\",\"Data.Aeson\"]",
          "name": "encode",
          "package": "aeson-native",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Aeson-Encode.html#encode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Encode.html#v:encode\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:encode\"]"
        },
        "index": {
          "description": "Efficiently serialize JSON value as lazy ByteString",
          "hierarchy": "Data Aeson Encode",
          "module": "Data.Aeson.Encode",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "aeson-native",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Encode.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a JSON value to a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.Encode",
          "name": "fromValue",
          "package": "aeson-native",
          "signature": "Value -\u003e Builder",
          "source": "src/Data-Aeson-Encode.html#fromValue",
          "type": "function"
        },
        "index": {
          "description": "Encode JSON value to Builder",
          "hierarchy": "Data Aeson Encode",
          "module": "Data.Aeson.Encode",
          "name": "fromValue",
          "normalized": "Value-\u003eBuilder",
          "package": "aeson-native",
          "partial": "Value",
          "signature": "Value-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Encode.html#v:fromValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJSON handling using \u003ccode\u003eData.Generics\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is based on the \u003ccode\u003eText.JSON.Generic\u003c/code\u003e package originally written\n by Lennart Augustsson.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aeson.Generic",
          "name": "Generic",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "JSON handling using Data.Generics This is based on the Text.JSON.Generic package originally written by Lennart Augustsson",
          "hierarchy": "Data Aeson Generic",
          "module": "Data.Aeson.Generic",
          "name": "Generic",
          "package": "aeson-native",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Generic",
          "name": "fromJSON",
          "package": "aeson-native",
          "signature": "Value -\u003e Result a",
          "source": "src/Data-Aeson-Generic.html#fromJSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aeson Generic",
          "module": "Data.Aeson.Generic",
          "name": "fromJSON",
          "normalized": "Value-\u003eResult a",
          "package": "aeson-native",
          "partial": "JSON",
          "signature": "Value-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Generic.html#v:fromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Generic",
          "name": "toJSON",
          "package": "aeson-native",
          "signature": "a -\u003e Value",
          "source": "src/Data-Aeson-Generic.html#toJSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aeson Generic",
          "module": "Data.Aeson.Generic",
          "name": "toJSON",
          "normalized": "a-\u003eValue",
          "package": "aeson-native",
          "partial": "JSON",
          "signature": "a-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Generic.html#v:toJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficiently and correctly parse a JSON string.  The string must be\n encoded as UTF-8.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aeson.Parser",
          "name": "Parser",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Efficiently and correctly parse JSON string The string must be encoded as UTF-8",
          "hierarchy": "Data Aeson Parser",
          "module": "Data.Aeson.Parser",
          "name": "Parser",
          "package": "aeson-native",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a top-level JSON value.  This must be either an object or\n an array.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Parser\",\"Data.Aeson\"]",
          "name": "json",
          "package": "aeson-native",
          "signature": "Parser Value",
          "source": "src/Data-Aeson-Parser.html#json",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Parser.html#v:json\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:json\"]"
        },
        "index": {
          "description": "Parse top-level JSON value This must be either an object or an array",
          "hierarchy": "Data Aeson Parser",
          "module": "Data.Aeson.Parser",
          "name": "json",
          "package": "aeson-native",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Parser.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any JSON value.  Use \u003ccode\u003e\u003ca\u003ejson\u003c/a\u003e\u003c/code\u003e in preference to this function\n if you are parsing data from an untrusted source.\n\u003c/p\u003e",
          "module": "Data.Aeson.Parser",
          "name": "value",
          "package": "aeson-native",
          "signature": "Parser Value",
          "source": "src/Data-Aeson-Parser.html#value",
          "type": "function"
        },
        "index": {
          "description": "Parse any JSON value Use json in preference to this function if you are parsing data from an untrusted source",
          "hierarchy": "Data Aeson Parser",
          "module": "Data.Aeson.Parser",
          "name": "value",
          "package": "aeson-native",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Parser.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for working with JSON data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aeson.Types",
          "name": "Types",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types for working with JSON data",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Types",
          "package": "aeson-native",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON \"array\" (sequence).\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Array",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#Array",
          "type": "type"
        },
        "index": {
          "description": "JSON array sequence",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Array",
          "package": "aeson-native",
          "partial": "Array",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e that uses the same non-standard\n serialization format as Microsoft .NET, whose \u003ccode\u003eSystem.DateTime\u003c/code\u003e\n type is by default serialized to JSON as in the following example:\n\u003c/p\u003e\u003cpre\u003e /Date(1302547608878)/\n\u003c/pre\u003e\u003cp\u003eThe number represents milliseconds since the Unix epoch.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "DotNetTime",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#DotNetTime",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper for UTCTime that uses the same non-standard serialization format as Microsoft NET whose System.DateTime type is by default serialized to JSON as in the following example Date The number represents milliseconds since the Unix epoch",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "DotNetTime",
          "package": "aeson-native",
          "partial": "Dot Net Time",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#t:DotNetTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from JSON, with the possibility of\n failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003edata Coord { x :: Double, y :: Double }\n\ninstance FromJSON Coord where\n   parseJSON (\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e v) = Coord \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e\n                         v \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"x\" \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n                         v \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"y\"\n\n-- A non-\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e value is of the wrong type, so use \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e to fail.\n   parseJSON _          = \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Aeson.Types",
          "name": "FromJSON",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#FromJSON",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from JSON with the possibility of failure When writing an instance use mzero or fail to make conversion fail e.g if an Object is missing required key or the value is of the wrong type An example type and instance data Coord Double Double instance FromJSON Coord where parseJSON Object Coord non Object value is of the wrong type so use mzero to fail parseJSON mzero",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "FromJSON",
          "package": "aeson-native",
          "partial": "From JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#t:FromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON \"object\" (key/value map).\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Object",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#Object",
          "type": "type"
        },
        "index": {
          "description": "JSON object key value map",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Object",
          "package": "aeson-native",
          "partial": "Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key/value pair for an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Pair",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#Pair",
          "type": "type"
        },
        "index": {
          "description": "key value pair for an Object",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Pair",
          "package": "aeson-native",
          "partial": "Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#t:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA continuation-based parser type.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Parser",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "continuation-based parser type",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Parser",
          "package": "aeson-native",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of running a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Result",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of running Parser",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Result",
          "package": "aeson-native",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to JSON.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003edata Coord { x :: Double, y :: Double }\n\ninstance ToJSON Coord where\n   toJSON (Coord x y) = \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e [\"x\" \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e x, \"y\" \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e y]\n\u003c/pre\u003e",
          "module": "Data.Aeson.Types",
          "name": "ToJSON",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#ToJSON",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to JSON An example type and instance data Coord Double Double instance ToJSON Coord where toJSON Coord object",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "ToJSON",
          "package": "aeson-native",
          "partial": "To JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#t:ToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON value represented as a Haskell value.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Value",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#Value",
          "type": "data"
        },
        "index": {
          "description": "JSON value represented as Haskell value",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Value",
          "package": "aeson-native",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e from a key and a value.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "(.=)",
          "package": "aeson-native",
          "signature": "Text -\u003e a -\u003e Pair",
          "source": "src/Data-Aeson-Types.html#.%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:.-61-\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:.-61-\"]"
        },
        "index": {
          "description": "Construct Pair from key and value",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "(.=) .=",
          "normalized": "Text-\u003ea-\u003ePair",
          "package": "aeson-native",
          "signature": "Text-\u003ea-\u003ePair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:.-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value associated with the given key of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the key is not present or the value cannot\n be converted to the desired type.\n\u003c/p\u003e\u003cp\u003eThis accessor is appropriate if the key and value \u003cem\u003emust\u003c/em\u003e be present\n in an object for it to be valid.  If the key and value are\n optional, use '(.:?)' instead.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "(.:)",
          "package": "aeson-native",
          "signature": "Object -\u003e Text -\u003e Parser a",
          "source": "src/Data-Aeson-Types.html#.%3A",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:.:\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:.:\"]"
        },
        "index": {
          "description": "Retrieve the value associated with the given key of an Object The result is empty if the key is not present or the value cannot be converted to the desired type This accessor is appropriate if the key and value must be present in an object for it to be valid If the key and value are optional use instead",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "(.:) .:",
          "normalized": "Object-\u003eText-\u003eParser a",
          "package": "aeson-native",
          "signature": "Object-\u003eText-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value associated with the given key of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not present, or \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if\n the value cannot be converted to the desired type.\n\u003c/p\u003e\u003cp\u003eThis accessor is most useful if the key and value can be absent\n from an object without affecting its validity.  If the key and\n value are mandatory, use '(.:)' instead.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "(.:?)",
          "package": "aeson-native",
          "signature": "Object -\u003e Text -\u003e Parser (Maybe a)",
          "source": "src/Data-Aeson-Types.html#.%3A%3F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:.:-63-\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:.:-63-\"]"
        },
        "index": {
          "description": "Retrieve the value associated with the given key of an Object The result is Nothing if the key is not present or empty if the value cannot be converted to the desired type This accessor is most useful if the key and value can be absent from an object without affecting its validity If the key and value are mandatory use instead",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "(.:?) .:?",
          "normalized": "Object-\u003eText-\u003eParser(Maybe a)",
          "package": "aeson-native",
          "signature": "Object-\u003eText-\u003eParser(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:.:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Array",
          "package": "aeson-native",
          "signature": "Array Array",
          "source": "src/Data-Aeson-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Array\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:Array\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Array",
          "package": "aeson-native",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Bool",
          "package": "aeson-native",
          "signature": "Bool !Bool",
          "source": "src/Data-Aeson-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Bool\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:Bool\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Bool",
          "package": "aeson-native",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "DotNetTime",
          "package": "aeson-native",
          "signature": "DotNetTime",
          "source": "src/Data-Aeson-Types.html#DotNetTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:DotNetTime\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:DotNetTime\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "DotNetTime",
          "package": "aeson-native",
          "partial": "Dot Net Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:DotNetTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Error",
          "package": "aeson-native",
          "signature": "Error String",
          "source": "src/Data-Aeson-Types.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Error\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:Error\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Error",
          "package": "aeson-native",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Null",
          "package": "aeson-native",
          "signature": "Null",
          "source": "src/Data-Aeson-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Null\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:Null\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Null",
          "package": "aeson-native",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Number",
          "package": "aeson-native",
          "signature": "Number Number",
          "source": "src/Data-Aeson-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Number\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:Number\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Number",
          "package": "aeson-native",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Object",
          "package": "aeson-native",
          "signature": "Object Object",
          "source": "src/Data-Aeson-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Object\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:Object\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Object",
          "package": "aeson-native",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "String",
          "package": "aeson-native",
          "signature": "String Text",
          "source": "src/Data-Aeson-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:String\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:String\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "String",
          "package": "aeson-native",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Success",
          "package": "aeson-native",
          "signature": "Success a",
          "source": "src/Data-Aeson-Types.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Success\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:Success\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Success",
          "package": "aeson-native",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty array.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "emptyArray",
          "package": "aeson-native",
          "signature": "Value",
          "source": "src/Data-Aeson-Types.html#emptyArray",
          "type": "function"
        },
        "index": {
          "description": "The empty array",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "emptyArray",
          "package": "aeson-native",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:emptyArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty object.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "emptyObject",
          "package": "aeson-native",
          "signature": "Value",
          "source": "src/Data-Aeson-Types.html#emptyObject",
          "type": "function"
        },
        "index": {
          "description": "The empty object",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "emptyObject",
          "package": "aeson-native",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:emptyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "fromDotNetTime",
          "package": "aeson-native",
          "signature": "UTCTime",
          "source": "src/Data-Aeson-Types.html#DotNetTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:fromDotNetTime\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:fromDotNetTime\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "fromDotNetTime",
          "package": "aeson-native",
          "partial": "Dot Net Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:fromDotNetTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value from JSON, failing if the types do not match.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "fromJSON",
          "package": "aeson-native",
          "signature": "Value -\u003e Result a",
          "source": "src/Data-Aeson-Types.html#fromJSON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:fromJSON\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:fromJSON\"]"
        },
        "index": {
          "description": "Convert value from JSON failing if the types do not match",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "fromJSON",
          "normalized": "Value-\u003eResult a",
          "package": "aeson-native",
          "partial": "JSON",
          "signature": "Value-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:fromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e from a list of name/value \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003es.  If duplicate\n keys arise, earlier keys and their associated values win.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "object",
          "package": "aeson-native",
          "signature": "[Pair] -\u003e Value",
          "source": "src/Data-Aeson-Types.html#object",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:object\",\"http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:object\"]"
        },
        "index": {
          "description": "Create Value from list of name value Pair If duplicate keys arise earlier keys and their associated values win",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "object",
          "normalized": "[Pair]-\u003eValue",
          "package": "aeson-native",
          "signature": "[Pair]-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "parse",
          "package": "aeson-native",
          "signature": "(a -\u003e Parser b) -\u003e a -\u003e Result b",
          "source": "src/Data-Aeson-Types.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Run Parser",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "parse",
          "normalized": "(a-\u003eParser b)-\u003ea-\u003eResult b",
          "package": "aeson-native",
          "signature": "(a-\u003eParser b)-\u003ea-\u003eResult b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "parseEither",
          "package": "aeson-native",
          "signature": "(a -\u003e Parser b) -\u003e a -\u003e Either String b",
          "source": "src/Data-Aeson-Types.html#parseEither",
          "type": "function"
        },
        "index": {
          "description": "Run Parser with an Either result type",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "parseEither",
          "normalized": "(a-\u003eParser b)-\u003ea-\u003eEither String b",
          "package": "aeson-native",
          "partial": "Either",
          "signature": "(a-\u003eParser b)-\u003ea-\u003eEither String b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:parseEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Types",
          "name": "parseJSON",
          "package": "aeson-native",
          "signature": "Value -\u003e Parser a",
          "source": "src/Data-Aeson-Types.html#parseJSON",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "parseJSON",
          "normalized": "Value-\u003eParser a",
          "package": "aeson-native",
          "partial": "JSON",
          "signature": "Value-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:parseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "parseMaybe",
          "package": "aeson-native",
          "signature": "(a -\u003e Parser b) -\u003e a -\u003e Maybe b",
          "source": "src/Data-Aeson-Types.html#parseMaybe",
          "type": "function"
        },
        "index": {
          "description": "Run Parser with Maybe result type",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "parseMaybe",
          "normalized": "(a-\u003eParser b)-\u003ea-\u003eMaybe b",
          "package": "aeson-native",
          "partial": "Maybe",
          "signature": "(a-\u003eParser b)-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:parseMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Types",
          "name": "toJSON",
          "package": "aeson-native",
          "signature": "a -\u003e Value",
          "source": "src/Data-Aeson-Types.html#toJSON",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "toJSON",
          "normalized": "a-\u003eValue",
          "package": "aeson-native",
          "partial": "JSON",
          "signature": "a-\u003eValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:toJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail parsing due to a type mismatch, with a descriptive message.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "typeMismatch",
          "package": "aeson-native",
          "signature": "String-\u003e Value-\u003e Parser a",
          "type": "function"
        },
        "index": {
          "description": "Fail parsing due to type mismatch with descriptive message",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "typeMismatch",
          "normalized": "String-\u003eValue-\u003eParser a",
          "package": "aeson-native",
          "partial": "Mismatch",
          "signature": "String-\u003eValue-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson-Types.html#v:typeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes and functions for working efficiently with JSON data.\n\u003c/p\u003e\u003cp\u003e(A note on naming: in Greek mythology, Aeson was the father of Jason.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aeson",
          "name": "Aeson",
          "package": "aeson-native",
          "source": "src/Data-Aeson.html",
          "type": "module"
        },
        "index": {
          "description": "Types and functions for working efficiently with JSON data note on naming in Greek mythology Aeson was the father of Jason",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "Aeson",
          "package": "aeson-native",
          "partial": "Aeson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON \"array\" (sequence).\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "Array",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#Array",
          "type": "type"
        },
        "index": {
          "description": "JSON array sequence",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "Array",
          "package": "aeson-native",
          "partial": "Array",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e that uses the same non-standard\n serialization format as Microsoft .NET, whose \u003ccode\u003eSystem.DateTime\u003c/code\u003e\n type is by default serialized to JSON as in the following example:\n\u003c/p\u003e\u003cpre\u003e /Date(1302547608878)/\n\u003c/pre\u003e\u003cp\u003eThe number represents milliseconds since the Unix epoch.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "DotNetTime",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#DotNetTime",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper for UTCTime that uses the same non-standard serialization format as Microsoft NET whose System.DateTime type is by default serialized to JSON as in the following example Date The number represents milliseconds since the Unix epoch",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "DotNetTime",
          "package": "aeson-native",
          "partial": "Dot Net Time",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#t:DotNetTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from JSON, with the possibility of\n failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003edata Coord { x :: Double, y :: Double }\n\ninstance FromJSON Coord where\n   parseJSON (\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e v) = Coord \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e\n                         v \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"x\" \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n                         v \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"y\"\n\n-- A non-\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e value is of the wrong type, so use \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e to fail.\n   parseJSON _          = \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Aeson",
          "name": "FromJSON",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#FromJSON",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from JSON with the possibility of failure When writing an instance use mzero or fail to make conversion fail e.g if an Object is missing required key or the value is of the wrong type An example type and instance data Coord Double Double instance FromJSON Coord where parseJSON Object Coord non Object value is of the wrong type so use mzero to fail parseJSON mzero",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "FromJSON",
          "package": "aeson-native",
          "partial": "From JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#t:FromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON \"object\" (key/value map).\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "Object",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#Object",
          "type": "type"
        },
        "index": {
          "description": "JSON object key value map",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "Object",
          "package": "aeson-native",
          "partial": "Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of running a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "Result",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of running Parser",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "Result",
          "package": "aeson-native",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to JSON.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003edata Coord { x :: Double, y :: Double }\n\ninstance ToJSON Coord where\n   toJSON (Coord x y) = \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e [\"x\" \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e x, \"y\" \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e y]\n\u003c/pre\u003e",
          "module": "Data.Aeson",
          "name": "ToJSON",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#ToJSON",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to JSON An example type and instance data Coord Double Double instance ToJSON Coord where toJSON Coord object",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "ToJSON",
          "package": "aeson-native",
          "partial": "To JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#t:ToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON value represented as a Haskell value.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "Value",
          "package": "aeson-native",
          "source": "src/Data-Aeson-Types.html#Value",
          "type": "data"
        },
        "index": {
          "description": "JSON value represented as Haskell value",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "Value",
          "package": "aeson-native",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson",
          "name": "parseJSON",
          "package": "aeson-native",
          "signature": "Value -\u003e Parser a",
          "source": "src/Data-Aeson-Types.html#parseJSON",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "parseJSON",
          "normalized": "Value-\u003eParser a",
          "package": "aeson-native",
          "partial": "JSON",
          "signature": "Value-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:parseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson",
          "name": "toJSON",
          "package": "aeson-native",
          "signature": "a -\u003e Value",
          "source": "src/Data-Aeson-Types.html#toJSON",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "toJSON",
          "normalized": "a-\u003eValue",
          "package": "aeson-native",
          "partial": "JSON",
          "signature": "a-\u003eValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aeson-native/docs/Data-Aeson.html#v:toJSON"
      }
    }
  ]
]