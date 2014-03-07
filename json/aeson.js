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
        "word": "aeson"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficiently serialize a JSON value.\n\u003c/p\u003e\u003cp\u003eMost frequently, you'll probably want to encode straight to UTF-8\n (the standard JSON encoding) using \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou can use the conversions to \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es when embedding JSON messages as\n parts of a protocol.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aeson.Encode",
          "name": "Encode",
          "package": "aeson",
          "source": "src/Data-Aeson-Encode.html",
          "type": "module"
        },
        "index": {
          "description": "Efficiently serialize JSON value Most frequently you ll probably want to encode straight to UTF-8 the standard JSON encoding using encode You can use the conversions to Builder when embedding JSON messages as parts of protocol",
          "hierarchy": "Data Aeson Encode",
          "module": "Data.Aeson.Encode",
          "name": "Encode",
          "package": "aeson",
          "partial": "Encode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Encode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e as a UTF-8 encoded \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Encode\",\"Data.Aeson\"]",
          "name": "encode",
          "package": "aeson",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Aeson-Encode.html#encode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Encode.html#v:encode\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:encode\"]"
        },
        "index": {
          "description": "Encode JSON Value as UTF-8 encoded ByteString",
          "hierarchy": "Data Aeson Encode",
          "module": "Data.Aeson.Encode",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "aeson",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Encode.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e, which can be embedded efficiently\n in a text-based protocol.\n\u003c/p\u003e",
          "module": "Data.Aeson.Encode",
          "name": "encodeToTextBuilder",
          "package": "aeson",
          "signature": "Value -\u003e Builder",
          "source": "src/Data-Aeson-Encode.html#encodeToTextBuilder",
          "type": "function"
        },
        "index": {
          "description": "Encode JSON Value to Builder which can be embedded efficiently in text-based protocol",
          "hierarchy": "Data Aeson Encode",
          "module": "Data.Aeson.Encode",
          "name": "encodeToTextBuilder",
          "normalized": "Value-\u003eBuilder",
          "package": "aeson",
          "partial": "To Text Builder",
          "signature": "Value-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Encode.html#v:encodeToTextBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eencodeToTextBuilder\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aeson.Encode",
          "name": "fromValue",
          "package": "aeson",
          "signature": "Value -\u003e Builder",
          "source": "src/Data-Aeson-Encode.html#fromValue",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use encodeToTextBuilder instead",
          "hierarchy": "Data Aeson Encode",
          "module": "Data.Aeson.Encode",
          "name": "fromValue",
          "normalized": "Value-\u003eBuilder",
          "package": "aeson",
          "partial": "Value",
          "signature": "Value-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Encode.html#v:fromValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: This module will be \u003cem\u003eREMOVED\u003c/em\u003e in version 0.7.0.0. Please switch to GHC generics or Data.Aeson.TH instead. These alternatives are less buggy, faster, and more configurable.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eJSON handling using \u003ccode\u003e\u003ca\u003eGenerics\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is based on the \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e package originally written\n by Lennart Augustsson.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aeson.Generic",
          "name": "Generic",
          "package": "aeson",
          "source": "src/Data-Aeson-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated This module will be REMOVED in version Please switch to GHC generics or Data.Aeson.TH instead These alternatives are less buggy faster and more configurable JSON handling using Generics This is based on the Generic package originally written by Lennart Augustsson",
          "hierarchy": "Data Aeson Generic",
          "module": "Data.Aeson.Generic",
          "name": "Generic",
          "package": "aeson",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently deserialize a JSON value from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThis function parses immediately, but defers conversion.  See\n \u003ccode\u003e\u003ca\u003ejson\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.Aeson.Generic",
          "name": "decode",
          "package": "aeson",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Data-Aeson-Generic.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Efficiently deserialize JSON value from lazy ByteString If this fails due to incomplete or invalid input Nothing is returned This function parses immediately but defers conversion See json for details",
          "hierarchy": "Data Aeson Generic",
          "module": "Data.Aeson.Generic",
          "name": "decode",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "aeson",
          "signature": "ByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Generic.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently deserialize a JSON value from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThis function parses and performs conversion immediately.  See\n \u003ccode\u003e\u003ca\u003ejson'\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.Aeson.Generic",
          "name": "decode'",
          "package": "aeson",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Data-Aeson-Generic.html#decode%27",
          "type": "function"
        },
        "index": {
          "description": "Efficiently deserialize JSON value from lazy ByteString If this fails due to incomplete or invalid input Nothing is returned This function parses and performs conversion immediately See json for details",
          "hierarchy": "Data Aeson Generic",
          "module": "Data.Aeson.Generic",
          "name": "decode'",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "aeson",
          "signature": "ByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Generic.html#v:decode-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently serialize a JSON value as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.Generic",
          "name": "encode",
          "package": "aeson",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Aeson-Generic.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Efficiently serialize JSON value as lazy ByteString",
          "hierarchy": "Data Aeson Generic",
          "module": "Data.Aeson.Generic",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "aeson",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Generic.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Generic",
          "name": "fromJSON",
          "package": "aeson",
          "signature": "Value -\u003e Result a",
          "source": "src/Data-Aeson-Generic.html#fromJSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aeson Generic",
          "module": "Data.Aeson.Generic",
          "name": "fromJSON",
          "normalized": "Value-\u003eResult a",
          "package": "aeson",
          "partial": "JSON",
          "signature": "Value-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Generic.html#v:fromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Generic",
          "name": "toJSON",
          "package": "aeson",
          "signature": "a -\u003e Value",
          "source": "src/Data-Aeson-Generic.html#toJSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aeson Generic",
          "module": "Data.Aeson.Generic",
          "name": "toJSON",
          "normalized": "a-\u003eValue",
          "package": "aeson",
          "partial": "JSON",
          "signature": "a-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Generic.html#v:toJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficiently and correctly parse a JSON string.  The string must be\n encoded as UTF-8.\n\u003c/p\u003e\u003cp\u003eIt can be useful to think of parsing as occurring in two phases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Identification of the textual boundaries of a JSON value.  This\n   is always strict, so that an invalid JSON document can be\n   rejected as soon as possible.\n\u003c/li\u003e\u003cli\u003e Conversion of a JSON value to a Haskell value.  This may be\n   either immediate (strict) or deferred (lazy); see below for\n   details.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe question of whether to choose a lazy or strict parser is\n subtle, but it can have significant performance implications,\n resulting in changes in CPU use and memory footprint of 30% to 50%,\n or occasionally more.  Measure the performance of your application\n with each!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aeson.Parser",
          "name": "Parser",
          "package": "aeson",
          "source": "src/Data-Aeson-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Efficiently and correctly parse JSON string The string must be encoded as UTF-8 It can be useful to think of parsing as occurring in two phases Identification of the textual boundaries of JSON value This is always strict so that an invalid JSON document can be rejected as soon as possible Conversion of JSON value to Haskell value This may be either immediate strict or deferred lazy see below for details The question of whether to choose lazy or strict parser is subtle but it can have significant performance implications resulting in changes in CPU use and memory footprint of to or occasionally more Measure the performance of your application with each",
          "hierarchy": "Data Aeson Parser",
          "module": "Data.Aeson.Parser",
          "name": "Parser",
          "package": "aeson",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a top-level JSON value.  This must be either an object or\n an array, per RFC 4627.\n\u003c/p\u003e\u003cp\u003eThe conversion of a parsed value to a Haskell value is deferred\n until the Haskell value is needed.  This may improve performance if\n only a subset of the results of conversions are needed, but at a\n cost in thunk allocation.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Parser\",\"Data.Aeson\"]",
          "name": "json",
          "package": "aeson",
          "signature": "Parser Value",
          "source": "src/Data-Aeson-Parser-Internal.html#json",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#v:json\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:json\"]"
        },
        "index": {
          "description": "Parse top-level JSON value This must be either an object or an array per RFC The conversion of parsed value to Haskell value is deferred until the Haskell value is needed This may improve performance if only subset of the results of conversions are needed but at cost in thunk allocation",
          "hierarchy": "Data Aeson Parser",
          "module": "Data.Aeson.Parser",
          "name": "json",
          "package": "aeson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a top-level JSON value.  This must be either an object or\n an array, per RFC 4627.\n\u003c/p\u003e\u003cp\u003eThis is a strict version of \u003ccode\u003e\u003ca\u003ejson\u003c/a\u003e\u003c/code\u003e which avoids building up thunks\n during parsing; it performs all conversions immediately.  Prefer\n this version if most of the JSON data needs to be accessed.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Parser\",\"Data.Aeson\"]",
          "name": "json'",
          "package": "aeson",
          "signature": "Parser Value",
          "source": "src/Data-Aeson-Parser-Internal.html#json%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#v:json-39-\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:json-39-\"]"
        },
        "index": {
          "description": "Parse top-level JSON value This must be either an object or an array per RFC This is strict version of json which avoids building up thunks during parsing it performs all conversions immediately Prefer this version if most of the JSON data needs to be accessed",
          "hierarchy": "Data Aeson Parser",
          "module": "Data.Aeson.Parser",
          "name": "json'",
          "package": "aeson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#v:json-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a quoted JSON string.\n\u003c/p\u003e",
          "module": "Data.Aeson.Parser",
          "name": "jstring",
          "package": "aeson",
          "signature": "Parser Text",
          "source": "src/Data-Aeson-Parser-Internal.html#jstring",
          "type": "function"
        },
        "index": {
          "description": "Parse quoted JSON string",
          "hierarchy": "Data Aeson Parser",
          "module": "Data.Aeson.Parser",
          "name": "jstring",
          "package": "aeson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#v:jstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any JSON value.  You should usually \u003ccode\u003e\u003ca\u003ejson\u003c/a\u003e\u003c/code\u003e in preference to\n this function, as this function relaxes the object-or-array\n requirement of RFC 4627.\n\u003c/p\u003e\u003cp\u003eIn particular, be careful in using this function if you think your\n code might interoperate with Javascript.  A na&#239;ve Javascript\n library that parses JSON data using \u003ccode\u003eeval\u003c/code\u003e is vulnerable to attack\n unless the encoded data represents an object or an array.  JSON\n implementations in other languages conform to that same restriction\n to preserve interoperability and security.\n\u003c/p\u003e",
          "module": "Data.Aeson.Parser",
          "name": "value",
          "package": "aeson",
          "signature": "Parser Value",
          "source": "src/Data-Aeson-Parser-Internal.html#value",
          "type": "function"
        },
        "index": {
          "description": "Parse any JSON value You should usually json in preference to this function as this function relaxes the object-or-array requirement of RFC In particular be careful in using this function if you think your code might interoperate with Javascript na ve Javascript library that parses JSON data using eval is vulnerable to attack unless the encoded data represents an object or an array JSON implementations in other languages conform to that same restriction to preserve interoperability and security",
          "hierarchy": "Data Aeson Parser",
          "module": "Data.Aeson.Parser",
          "name": "value",
          "package": "aeson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e. See also \u003ccode\u003e\u003ca\u003ejson'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.Parser",
          "name": "value'",
          "package": "aeson",
          "signature": "Parser Value",
          "source": "src/Data-Aeson-Parser-Internal.html#value%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of value See also json",
          "hierarchy": "Data Aeson Parser",
          "module": "Data.Aeson.Parser",
          "name": "value'",
          "package": "aeson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#v:value-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to mechanically derive \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instances. Note that\nyou need to enable the \u003ccode\u003eTemplateHaskell\u003c/code\u003e language extension in order to use this\nmodule.\n\u003c/p\u003e\u003cp\u003eAn example shows how instances are generated for arbitrary data types. First we\ndefine a data type:\n\u003c/p\u003e\u003cpre\u003e\ndata D a = Nullary\n         | Unary Int\n         | Product String Char a\n         | Record { testOne   :: Double\n                  , testTwo   :: Bool\n                  , testThree :: D a\n                  } deriving Eq\n\u003c/pre\u003e\u003cp\u003eNext we derive the necessary instances. Note that we make use of the\nfeature to change record field names. In this case we drop the first 4\ncharacters of every field name. We also modify constructor names by\nlower-casing them:\n\u003c/p\u003e\u003cpre\u003e\n$(\u003ccode\u003e\u003ca\u003ederiveJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e{\u003ccode\u003e\u003ca\u003efieldLabelModifier\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003edrop\u003c/code\u003e 4, \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e = map toLower} ''D)\n\u003c/pre\u003e\u003cp\u003eNow we can use the newly created instances.\n\u003c/p\u003e\u003cpre\u003e\nd :: D \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\nd = Record { testOne = 3.14159\n           , testTwo = \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n           , testThree = Product \"test\" 'A' 123\n           }\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromJSON (toJSON d) == Success d\n\u003c/code\u003e\u003c/strong\u003e\u003e True\n\u003c/pre\u003e\u003cp\u003ePlease note that you can derive instances for tuples using the following syntax:\n\u003c/p\u003e\u003cpre\u003e\n-- FromJSON and ToJSON instances for 4-tuples.\n$(\u003ccode\u003e\u003ca\u003ederiveJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e ''(,,,))\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Aeson.TH",
          "name": "TH",
          "package": "aeson",
          "source": "src/Data-Aeson-TH.html",
          "type": "module"
        },
        "index": {
          "description": "Functions to mechanically derive ToJSON and FromJSON instances Note that you need to enable the TemplateHaskell language extension in order to use this module An example shows how instances are generated for arbitrary data types First we define data type data Nullary Unary Int Product String Char Record testOne Double testTwo Bool testThree deriving Eq Next we derive the necessary instances Note that we make use of the feature to change record field names In this case we drop the first characters of every field name We also modify constructor names by lower-casing them deriveJSON defaultOptions fieldLabelModifier drop constructorTagModifier map toLower Now we can use the newly created instances Int Record testOne testTwo True testThree Product test fromJSON toJSON Success True Please note that you can derive instances for tuples using the following syntax FromJSON and ToJSON instances for tuples deriveJSON defaultOptions",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "TH",
          "package": "aeson",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions that specify how to encode/decode your datatype to/from JSON.\n\u003c/p\u003e",
          "module": "Data.Aeson.TH",
          "name": "Options",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#Options",
          "type": "data"
        },
        "index": {
          "description": "Options that specify how to encode decode your datatype to from JSON",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "Options",
          "package": "aeson",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies how to encode constructors of a sum datatype.\n\u003c/p\u003e",
          "module": "Data.Aeson.TH",
          "name": "SumEncoding",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
          "type": "data"
        },
        "index": {
          "description": "Specifies how to encode constructors of sum datatype",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "SumEncoding",
          "package": "aeson",
          "partial": "Sum Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#t:SumEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constructor will be encoded to an object with a single\n field named after the constructor tag (modified by the\n \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e) which maps to the encoded contents of\n the constructor.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "ObjectWithSingleField",
          "package": "aeson",
          "signature": "ObjectWithSingleField",
          "source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:ObjectWithSingleField\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:ObjectWithSingleField\"]"
        },
        "index": {
          "description": "constructor will be encoded to an object with single field named after the constructor tag modified by the constructorTagModifier which maps to the encoded contents of the constructor",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "ObjectWithSingleField",
          "package": "aeson",
          "partial": "Object With Single Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:ObjectWithSingleField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "Options",
          "package": "aeson",
          "signature": "Options",
          "source": "src/Data-Aeson-Types-Internal.html#Options",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:Options\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Options\"]"
        },
        "index": {
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "Options",
          "package": "aeson",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constructor will be encoded to an object with a field\n \u003ccode\u003e\u003ca\u003etagFieldName\u003c/a\u003e\u003c/code\u003e which specifies the constructor tag (modified by\n the \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e). If the constructor is a record\n the encoded record fields will be unpacked into this object. So\n make sure that your record doesn't have a field with the same\n label as the \u003ccode\u003e\u003ca\u003etagFieldName\u003c/a\u003e\u003c/code\u003e. Otherwise the tag gets overwritten\n by the encoded value of that field! If the constructor is not a\n record the encoded constructor contents will be stored under\n the \u003ccode\u003e\u003ca\u003econtentsFieldName\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "TaggedObject",
          "package": "aeson",
          "signature": "TaggedObject",
          "source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:TaggedObject\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:TaggedObject\"]"
        },
        "index": {
          "description": "constructor will be encoded to an object with field tagFieldName which specifies the constructor tag modified by the constructorTagModifier If the constructor is record the encoded record fields will be unpacked into this object So make sure that your record doesn have field with the same label as the tagFieldName Otherwise the tag gets overwritten by the encoded value of that field If the constructor is not record the encoded constructor contents will be stored under the contentsFieldName field",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "TaggedObject",
          "package": "aeson",
          "partial": "Tagged Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:TaggedObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constructor will be encoded to a 2-element array where the\n first element is the tag of the constructor (modified by the\n \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e) and the second element the encoded\n contents of the constructor.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "TwoElemArray",
          "package": "aeson",
          "signature": "TwoElemArray",
          "source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:TwoElemArray\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:TwoElemArray\"]"
        },
        "index": {
          "description": "constructor will be encoded to element array where the first element is the tag of the constructor modified by the constructorTagModifier and the second element the encoded contents of the constructor",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "TwoElemArray",
          "package": "aeson",
          "partial": "Two Elem Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:TwoElemArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e the constructors of a datatype, with \u003cem\u003eall\u003c/em\u003e\n nullary constructors, will be encoded to just a string with\n the constructor tag. If \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e the encoding will always\n follow the \u003ccode\u003e\u003ca\u003esumEncoding\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "allNullaryToStringTag",
          "package": "aeson",
          "signature": "Bool",
          "source": "src/Data-Aeson-Types-Internal.html#Options",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:allNullaryToStringTag\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:allNullaryToStringTag\"]"
        },
        "index": {
          "description": "If True the constructors of datatype with all nullary constructors will be encoded to just string with the constructor tag If False the encoding will always follow the sumEncoding",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "allNullaryToStringTag",
          "package": "aeson",
          "partial": "Nullary To String Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:allNullaryToStringTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction applied to constructor tags which could be handy\n for lower-casing them for example.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "constructorTagModifier",
          "package": "aeson",
          "signature": "String -\u003e String",
          "source": "src/Data-Aeson-Types-Internal.html#Options",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:constructorTagModifier\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:constructorTagModifier\"]"
        },
        "index": {
          "description": "Function applied to constructor tags which could be handy for lower-casing them for example",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "constructorTagModifier",
          "normalized": "String-\u003eString",
          "package": "aeson",
          "partial": "Tag Modifier",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:constructorTagModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "contentsFieldName",
          "package": "aeson",
          "signature": "String",
          "source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:contentsFieldName\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:contentsFieldName\"]"
        },
        "index": {
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "contentsFieldName",
          "package": "aeson",
          "partial": "Field Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:contentsFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault encoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e\n { \u003ccode\u003e\u003ca\u003efieldLabelModifier\u003c/a\u003e\u003c/code\u003e      = id\n , \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e  = id\n , \u003ccode\u003e\u003ca\u003eallNullaryToStringTag\u003c/a\u003e\u003c/code\u003e   = True\n , \u003ccode\u003e\u003ca\u003eomitNothingFields\u003c/a\u003e\u003c/code\u003e       = False\n , \u003ccode\u003e\u003ca\u003esumEncoding\u003c/a\u003e\u003c/code\u003e             = \u003ccode\u003e\u003ca\u003edefaultTaggedObject\u003c/a\u003e\u003c/code\u003e\n }\n\u003c/pre\u003e",
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "defaultOptions",
          "package": "aeson",
          "signature": "Options",
          "source": "src/Data-Aeson-Types-Internal.html#defaultOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:defaultOptions\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:defaultOptions\"]"
        },
        "index": {
          "description": "Default encoding Options Options fieldLabelModifier id constructorTagModifier id allNullaryToStringTag True omitNothingFields False sumEncoding defaultTaggedObject",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "defaultOptions",
          "package": "aeson",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:defaultOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault \u003ccode\u003e\u003ca\u003eTaggedObject\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eSumEncoding\u003c/a\u003e\u003c/code\u003e options:\n\u003c/p\u003e\u003cpre\u003e\n defaultTaggedObject = \u003ccode\u003e\u003ca\u003eTaggedObject\u003c/a\u003e\u003c/code\u003e\n                       { \u003ccode\u003e\u003ca\u003etagFieldName\u003c/a\u003e\u003c/code\u003e      = \"tag\"\n                       , \u003ccode\u003e\u003ca\u003econtentsFieldName\u003c/a\u003e\u003c/code\u003e = \"contents\"\n                       }\n\u003c/pre\u003e",
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "defaultTaggedObject",
          "package": "aeson",
          "signature": "SumEncoding",
          "source": "src/Data-Aeson-Types-Internal.html#defaultTaggedObject",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:defaultTaggedObject\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:defaultTaggedObject\"]"
        },
        "index": {
          "description": "Default TaggedObject SumEncoding options defaultTaggedObject TaggedObject tagFieldName tag contentsFieldName contents",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "defaultTaggedObject",
          "package": "aeson",
          "partial": "Tagged Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:defaultTaggedObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance declaration for the given data type.\n\u003c/p\u003e",
          "module": "Data.Aeson.TH",
          "name": "deriveFromJSON",
          "package": "aeson",
          "signature": "Options-\u003e Name-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Generates FromJSON instance declaration for the given data type",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "deriveFromJSON",
          "normalized": "Options-\u003eName-\u003eQ[Dec]",
          "package": "aeson",
          "partial": "From JSON",
          "signature": "Options-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:deriveFromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates both \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance declarations for the given\n data type.\n\u003c/p\u003e\u003cp\u003eThis is a convienience function which is equivalent to calling both\n \u003ccode\u003e\u003ca\u003ederiveToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ederiveFromJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.TH",
          "name": "deriveJSON",
          "package": "aeson",
          "signature": "Options-\u003e Name-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Generates both ToJSON and FromJSON instance declarations for the given data type This is convienience function which is equivalent to calling both deriveToJSON and deriveFromJSON",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "deriveJSON",
          "normalized": "Options-\u003eName-\u003eQ[Dec]",
          "package": "aeson",
          "partial": "JSON",
          "signature": "Options-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:deriveJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance declaration for the given data type.\n\u003c/p\u003e",
          "module": "Data.Aeson.TH",
          "name": "deriveToJSON",
          "package": "aeson",
          "signature": "Options-\u003e Name-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Generates ToJSON instance declaration for the given data type",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "deriveToJSON",
          "normalized": "Options-\u003eName-\u003eQ[Dec]",
          "package": "aeson",
          "partial": "To JSON",
          "signature": "Options-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:deriveToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction applied to field labels.\n Handy for removing common record prefixes for example.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "fieldLabelModifier",
          "package": "aeson",
          "signature": "String -\u003e String",
          "source": "src/Data-Aeson-Types-Internal.html#Options",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:fieldLabelModifier\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:fieldLabelModifier\"]"
        },
        "index": {
          "description": "Function applied to field labels Handy for removing common record prefixes for example",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "fieldLabelModifier",
          "normalized": "String-\u003eString",
          "package": "aeson",
          "partial": "Label Modifier",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:fieldLabelModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a lambda expression which parses the JSON encoding of the given\n data type.\n\u003c/p\u003e",
          "module": "Data.Aeson.TH",
          "name": "mkParseJSON",
          "package": "aeson",
          "signature": "Options-\u003e Name-\u003e Q Exp",
          "type": "function"
        },
        "index": {
          "description": "Generates lambda expression which parses the JSON encoding of the given data type",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "mkParseJSON",
          "normalized": "Options-\u003eName-\u003eQ Exp",
          "package": "aeson",
          "partial": "Parse JSON",
          "signature": "Options-\u003eName-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:mkParseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a lambda expression which encodes the given data type as JSON.\n\u003c/p\u003e",
          "module": "Data.Aeson.TH",
          "name": "mkToJSON",
          "package": "aeson",
          "signature": "Options-\u003e Name-\u003e Q Exp",
          "type": "function"
        },
        "index": {
          "description": "Generates lambda expression which encodes the given data type as JSON",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "mkToJSON",
          "normalized": "Options-\u003eName-\u003eQ Exp",
          "package": "aeson",
          "partial": "To JSON",
          "signature": "Options-\u003eName-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:mkToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e record fields with a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e value will be\n omitted from the resulting object. If \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e the resulting\n object will include those fields mapping to \u003ccode\u003enull\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "omitNothingFields",
          "package": "aeson",
          "signature": "Bool",
          "source": "src/Data-Aeson-Types-Internal.html#Options",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:omitNothingFields\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:omitNothingFields\"]"
        },
        "index": {
          "description": "If True record fields with Nothing value will be omitted from the resulting object If False the resulting object will include those fields mapping to null",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "omitNothingFields",
          "package": "aeson",
          "partial": "Nothing Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:omitNothingFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies how to encode constructors of a sum datatype.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "sumEncoding",
          "package": "aeson",
          "signature": "SumEncoding",
          "source": "src/Data-Aeson-Types-Internal.html#Options",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:sumEncoding\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:sumEncoding\"]"
        },
        "index": {
          "description": "Specifies how to encode constructors of sum datatype",
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "sumEncoding",
          "package": "aeson",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:sumEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.TH\",\"Data.Aeson.Types\"]",
          "name": "tagFieldName",
          "package": "aeson",
          "signature": "String",
          "source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:tagFieldName\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:tagFieldName\"]"
        },
        "index": {
          "hierarchy": "Data Aeson TH",
          "module": "Data.Aeson.TH",
          "name": "tagFieldName",
          "package": "aeson",
          "partial": "Field Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:tagFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for working with JSON data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aeson.Types",
          "name": "Types",
          "package": "aeson",
          "source": "src/Data-Aeson-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types for working with JSON data",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Types",
          "package": "aeson",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON \"array\" (sequence).\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Array",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#Array",
          "type": "type"
        },
        "index": {
          "description": "JSON array sequence",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Array",
          "package": "aeson",
          "partial": "Array",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e that uses the same non-standard\n serialization format as Microsoft .NET, whose \u003ccode\u003eSystem.DateTime\u003c/code\u003e\n type is by default serialized to JSON as in the following example:\n\u003c/p\u003e\u003cpre\u003e /Date(1302547608878)/\n\u003c/pre\u003e\u003cp\u003eThe number represents milliseconds since the Unix epoch.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "DotNetTime",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#DotNetTime",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper for UTCTime that uses the same non-standard serialization format as Microsoft NET whose System.DateTime type is by default serialized to JSON as in the following example Date The number represents milliseconds since the Unix epoch",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "DotNetTime",
          "package": "aeson",
          "partial": "Dot Net Time",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:DotNetTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from JSON, with the possibility of\n failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003eempty\u003c/code\u003e, \u003ccode\u003emzero\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance FromJSON Coord where\n   parseJSON (\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e v) = Coord    \u003ccode\u003e\u003c$\u003e\u003c/code\u003e\n                          v \u003ccode\u003e.:\u003c/code\u003e \"x\" \u003ccode\u003e\u003c*\u003e\u003c/code\u003e\n                          v \u003ccode\u003e.:\u003c/code\u003e \"y\"\n\n-- A non-\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e value is of the wrong type, so use \u003ccode\u003emzero\u003c/code\u003e to fail.\n   parseJSON _          = \u003ccode\u003emzero\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003eText\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003efromJSON\u003c/code\u003e function that parses to\n any type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions, \u003ccode\u003eparseJSON\u003c/code\u003e will have a default\n generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use this, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your datatype and\n declare a \u003ccode\u003eFromJSON\u003c/code\u003e instance for your datatype without giving a definition\n for \u003ccode\u003eparseJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance FromJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic decoding using \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance FromJSON Coord where\n     parseJSON = \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Aeson.Types",
          "name": "FromJSON",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Class.html#FromJSON",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from JSON with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if an Object is missing required key or the value is of the wrong type An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance FromJSON Coord where parseJSON Object Coord non Object value is of the wrong type so use mzero to fail parseJSON mzero Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your FromJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic fromJSON function that parses to any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions parseJSON will have default generic implementation To use this simply add deriving Generic clause to your datatype and declare FromJSON instance for your datatype without giving definition for parseJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance FromJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic decoding using genericParseJSON applied to your encoding decoding Options instance FromJSON Coord where parseJSON genericParseJSON defaultOptions",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "FromJSON",
          "package": "aeson",
          "partial": "From JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:FromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of generic representation types (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e) that can be converted from JSON.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "GFromJSON",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Class.html#GFromJSON",
          "type": "class"
        },
        "index": {
          "description": "Class of generic representation types Rep that can be converted from JSON",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "GFromJSON",
          "package": "aeson",
          "partial": "GFrom JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:GFromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of generic representation types (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e) that can be converted to JSON.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "GToJSON",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Class.html#GToJSON",
          "type": "class"
        },
        "index": {
          "description": "Class of generic representation types Rep that can be converted to JSON",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "GToJSON",
          "package": "aeson",
          "partial": "GTo JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:GToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON \"object\" (key/value map).\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Object",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#Object",
          "type": "type"
        },
        "index": {
          "description": "JSON object key value map",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Object",
          "package": "aeson",
          "partial": "Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions that specify how to encode/decode your datatype to/from JSON.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Options",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#Options",
          "type": "data"
        },
        "index": {
          "description": "Options that specify how to encode decode your datatype to from JSON",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Options",
          "package": "aeson",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key/value pair for an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Pair",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#Pair",
          "type": "type"
        },
        "index": {
          "description": "key value pair for an Object",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Pair",
          "package": "aeson",
          "partial": "Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA continuation-based parser type.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Parser",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "continuation-based parser type",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Parser",
          "package": "aeson",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of running a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Result",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of running Parser",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Result",
          "package": "aeson",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies how to encode constructors of a sum datatype.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "SumEncoding",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
          "type": "data"
        },
        "index": {
          "description": "Specifies how to encode constructors of sum datatype",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "SumEncoding",
          "package": "aeson",
          "partial": "Sum Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:SumEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to JSON.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance ToJSON Coord where\n   toJSON (Coord x y) = \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e [\"x\" \u003ccode\u003e.=\u003c/code\u003e x, \"y\" \u003ccode\u003e.=\u003c/code\u003e y]\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003eText\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003etoJSON\u003c/code\u003e function that accepts any\n type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions (GHC 7.2 and newer),\n \u003ccode\u003etoJSON\u003c/code\u003e will have a default generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use the latter option, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your\n datatype and declare a \u003ccode\u003eToJSON\u003c/code\u003e instance for your datatype without giving a\n definition for \u003ccode\u003etoJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance ToJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic encoding using \u003ccode\u003e\u003ca\u003egenericToJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance ToJSON Coord where\n     toJSON = \u003ccode\u003e\u003ca\u003egenericToJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Aeson.Types",
          "name": "ToJSON",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Class.html#ToJSON",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to JSON An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance ToJSON Coord where toJSON Coord object Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your ToJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic toJSON function that accepts any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions GHC and newer toJSON will have default generic implementation To use the latter option simply add deriving Generic clause to your datatype and declare ToJSON instance for your datatype without giving definition for toJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance ToJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic encoding using genericToJSON applied to your encoding decoding Options instance ToJSON Coord where toJSON genericToJSON defaultOptions",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "ToJSON",
          "package": "aeson",
          "partial": "To JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:ToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON value represented as a Haskell value.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "Value",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#Value",
          "type": "data"
        },
        "index": {
          "description": "JSON value represented as Haskell value",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Value",
          "package": "aeson",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for use in combination with \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e to provide default\n values for optional JSON object fields.\n\u003c/p\u003e\u003cp\u003eThis combinator is most useful if the key and value can be absent\n from an object without affecting its validity and we know a default\n value to assign in that case.  If the key and value are mandatory,\n use '(.:)' instead.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e v1 \u003c- o \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e \"opt_field_with_dfl\" .!= \"default_val\"\n v2 \u003c- o \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e  \"mandatory_field\"\n v3 \u003c- o \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e \"opt_field2\"\n\u003c/pre\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "(.!=)",
          "package": "aeson",
          "signature": "Parser (Maybe a) -\u003e a -\u003e Parser a",
          "source": "src/Data-Aeson-Types-Instances.html#.%21%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:.-33--61-\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:.-33--61-\"]"
        },
        "index": {
          "description": "Helper for use in combination with to provide default values for optional JSON object fields This combinator is most useful if the key and value can be absent from an object without affecting its validity and we know default value to assign in that case If the key and value are mandatory use instead Example usage v1 opt field with dfl default val v2 mandatory field v3 opt field2",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "(.!=) .!=",
          "normalized": "Parser(Maybe a)-\u003ea-\u003eParser a",
          "package": "aeson",
          "signature": "Parser(Maybe a)-\u003ea-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:.-33--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e from a key and a value.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "(.=)",
          "package": "aeson",
          "signature": "Text -\u003e a -\u003e Pair",
          "source": "src/Data-Aeson-Types-Instances.html#.%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:.-61-\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:.-61-\"]"
        },
        "index": {
          "description": "Construct Pair from key and value",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "(.=) .=",
          "normalized": "Text-\u003ea-\u003ePair",
          "package": "aeson",
          "signature": "Text-\u003ea-\u003ePair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:.-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value associated with the given key of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the key is not present or the value cannot\n be converted to the desired type.\n\u003c/p\u003e\u003cp\u003eThis accessor is appropriate if the key and value \u003cem\u003emust\u003c/em\u003e be present\n in an object for it to be valid.  If the key and value are\n optional, use '(.:?)' instead.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "(.:)",
          "package": "aeson",
          "signature": "Object -\u003e Text -\u003e Parser a",
          "source": "src/Data-Aeson-Types-Instances.html#.%3A",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:.:\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:.:\"]"
        },
        "index": {
          "description": "Retrieve the value associated with the given key of an Object The result is empty if the key is not present or the value cannot be converted to the desired type This accessor is appropriate if the key and value must be present in an object for it to be valid If the key and value are optional use instead",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "(.:) .:",
          "normalized": "Object-\u003eText-\u003eParser a",
          "package": "aeson",
          "signature": "Object-\u003eText-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value associated with the given key of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not present, or \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if\n the value cannot be converted to the desired type.\n\u003c/p\u003e\u003cp\u003eThis accessor is most useful if the key and value can be absent\n from an object without affecting its validity.  If the key and\n value are mandatory, use '(.:)' instead.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "(.:?)",
          "package": "aeson",
          "signature": "Object -\u003e Text -\u003e Parser (Maybe a)",
          "source": "src/Data-Aeson-Types-Instances.html#.%3A%3F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:.:-63-\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:.:-63-\"]"
        },
        "index": {
          "description": "Retrieve the value associated with the given key of an Object The result is Nothing if the key is not present or empty if the value cannot be converted to the desired type This accessor is most useful if the key and value can be absent from an object without affecting its validity If the key and value are mandatory use instead",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "(.:?) .:?",
          "normalized": "Object-\u003eText-\u003eParser(Maybe a)",
          "package": "aeson",
          "signature": "Object-\u003eText-\u003eParser(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:.:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Array",
          "package": "aeson",
          "signature": "Array !Array",
          "source": "src/Data-Aeson-Types-Internal.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Array\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Array\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Array",
          "package": "aeson",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Bool",
          "package": "aeson",
          "signature": "Bool !Bool",
          "source": "src/Data-Aeson-Types-Internal.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Bool\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Bool\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Bool",
          "package": "aeson",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "DotNetTime",
          "package": "aeson",
          "signature": "DotNetTime",
          "source": "src/Data-Aeson-Types-Internal.html#DotNetTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:DotNetTime\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:DotNetTime\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "DotNetTime",
          "package": "aeson",
          "partial": "Dot Net Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:DotNetTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Error",
          "package": "aeson",
          "signature": "Error String",
          "source": "src/Data-Aeson-Types-Internal.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Error\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Error\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Error",
          "package": "aeson",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Null",
          "package": "aeson",
          "signature": "Null",
          "source": "src/Data-Aeson-Types-Internal.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Null\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Null\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Null",
          "package": "aeson",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Number",
          "package": "aeson",
          "signature": "Number !Scientific",
          "source": "src/Data-Aeson-Types-Internal.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Number\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Number\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Number",
          "package": "aeson",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Object",
          "package": "aeson",
          "signature": "Object !Object",
          "source": "src/Data-Aeson-Types-Internal.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Object\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Object\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Object",
          "package": "aeson",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "String",
          "package": "aeson",
          "signature": "String !Text",
          "source": "src/Data-Aeson-Types-Internal.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:String\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:String\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "String",
          "package": "aeson",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "Success",
          "package": "aeson",
          "signature": "Success a",
          "source": "src/Data-Aeson-Types-Internal.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Success\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Success\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "Success",
          "package": "aeson",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty array.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "emptyArray",
          "package": "aeson",
          "signature": "Value",
          "source": "src/Data-Aeson-Types-Internal.html#emptyArray",
          "type": "function"
        },
        "index": {
          "description": "The empty array",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "emptyArray",
          "package": "aeson",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:emptyArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty object.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "emptyObject",
          "package": "aeson",
          "signature": "Value",
          "source": "src/Data-Aeson-Types-Internal.html#emptyObject",
          "type": "function"
        },
        "index": {
          "description": "The empty object",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "emptyObject",
          "package": "aeson",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:emptyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "fromDotNetTime",
          "package": "aeson",
          "signature": "UTCTime",
          "source": "src/Data-Aeson-Types-Internal.html#DotNetTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:fromDotNetTime\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:fromDotNetTime\"]"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "fromDotNetTime",
          "package": "aeson",
          "partial": "Dot Net Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:fromDotNetTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value from JSON, failing if the types do not match.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "fromJSON",
          "package": "aeson",
          "signature": "Value -\u003e Result a",
          "source": "src/Data-Aeson-Types-Instances.html#fromJSON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:fromJSON\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:fromJSON\"]"
        },
        "index": {
          "description": "Convert value from JSON failing if the types do not match",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "fromJSON",
          "normalized": "Value-\u003eResult a",
          "package": "aeson",
          "partial": "JSON",
          "signature": "Value-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:fromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method (applied to \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e) is used as the\n default generic implementation of \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "gParseJSON",
          "package": "aeson",
          "signature": "Options -\u003e Value -\u003e Parser (f a)",
          "source": "src/Data-Aeson-Types-Class.html#gParseJSON",
          "type": "method"
        },
        "index": {
          "description": "This method applied to defaultOptions is used as the default generic implementation of parseJSON",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "gParseJSON",
          "normalized": "Options-\u003eValue-\u003eParser(a b)",
          "package": "aeson",
          "partial": "Parse JSON",
          "signature": "Options-\u003eValue-\u003eParser(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:gParseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method (applied to \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e) is used as the\n default generic implementation of \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "gToJSON",
          "package": "aeson",
          "signature": "Options -\u003e f a -\u003e Value",
          "source": "src/Data-Aeson-Types-Class.html#gToJSON",
          "type": "method"
        },
        "index": {
          "description": "This method applied to defaultOptions is used as the default generic implementation of toJSON",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "gToJSON",
          "normalized": "Options-\u003ea b-\u003eValue",
          "package": "aeson",
          "partial": "To JSON",
          "signature": "Options-\u003ef a-\u003eValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:gToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA configurable generic JSON decoder. This function applied to\n \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e is used as the default for \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e when the\n type is an instance of \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "genericParseJSON",
          "package": "aeson",
          "signature": "Options -\u003e Value -\u003e Parser a",
          "source": "src/Data-Aeson-Types-Class.html#genericParseJSON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:genericParseJSON\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:genericParseJSON\"]"
        },
        "index": {
          "description": "configurable generic JSON decoder This function applied to defaultOptions is used as the default for parseJSON when the type is an instance of Generic",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "genericParseJSON",
          "normalized": "Options-\u003eValue-\u003eParser a",
          "package": "aeson",
          "partial": "Parse JSON",
          "signature": "Options-\u003eValue-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:genericParseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA configurable generic JSON encoder. This function applied to\n \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e is used as the default for \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e when the type\n is an instance of \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "genericToJSON",
          "package": "aeson",
          "signature": "Options -\u003e a -\u003e Value",
          "source": "src/Data-Aeson-Types-Class.html#genericToJSON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:genericToJSON\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:genericToJSON\"]"
        },
        "index": {
          "description": "configurable generic JSON encoder This function applied to defaultOptions is used as the default for toJSON when the type is an instance of Generic",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "genericToJSON",
          "normalized": "Options-\u003ea-\u003eValue",
          "package": "aeson",
          "partial": "To JSON",
          "signature": "Options-\u003ea-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:genericToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the inner \u003ccode\u003eParser\u003c/code\u003e failed, modify the failure message using the\n provided function. This allows you to create more descriptive error messages.\n For example:\n\u003c/p\u003e\u003cpre\u003e parseJSON (Object o) = modifyFailure\n     (\"Parsing of the Foo value failed: \" ++)\n     (Foo \u003c$\u003e o .: \"someField\")\n\u003c/pre\u003e\u003cp\u003eSince 0.6.2.0\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "modifyFailure",
          "package": "aeson",
          "signature": "(String -\u003e String) -\u003e Parser a -\u003e Parser a",
          "source": "src/Data-Aeson-Types-Internal.html#modifyFailure",
          "type": "function"
        },
        "index": {
          "description": "If the inner Parser failed modify the failure message using the provided function This allows you to create more descriptive error messages For example parseJSON Object modifyFailure Parsing of the Foo value failed Foo someField Since",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "modifyFailure",
          "normalized": "(String-\u003eString)-\u003eParser a-\u003eParser a",
          "package": "aeson",
          "partial": "Failure",
          "signature": "(String-\u003eString)-\u003eParser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:modifyFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e from a list of name/value \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003es.  If duplicate\n keys arise, earlier keys and their associated values win.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "object",
          "package": "aeson",
          "signature": "[Pair] -\u003e Value",
          "source": "src/Data-Aeson-Types-Internal.html#object",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:object\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:object\"]"
        },
        "index": {
          "description": "Create Value from list of name value Pair If duplicate keys arise earlier keys and their associated values win",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "object",
          "normalized": "[Pair]-\u003eValue",
          "package": "aeson",
          "signature": "[Pair]-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "parse",
          "package": "aeson",
          "signature": "(a -\u003e Parser b) -\u003e a -\u003e Result b",
          "source": "src/Data-Aeson-Types-Internal.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Run Parser",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "parse",
          "normalized": "(a-\u003eParser b)-\u003ea-\u003eResult b",
          "package": "aeson",
          "signature": "(a-\u003eParser b)-\u003ea-\u003eResult b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "parseEither",
          "package": "aeson",
          "signature": "(a -\u003e Parser b) -\u003e a -\u003e Either String b",
          "source": "src/Data-Aeson-Types-Internal.html#parseEither",
          "type": "function"
        },
        "index": {
          "description": "Run Parser with an Either result type",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "parseEither",
          "normalized": "(a-\u003eParser b)-\u003ea-\u003eEither String b",
          "package": "aeson",
          "partial": "Either",
          "signature": "(a-\u003eParser b)-\u003ea-\u003eEither String b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:parseEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Types",
          "name": "parseJSON",
          "package": "aeson",
          "signature": "Value -\u003e Parser a",
          "source": "src/Data-Aeson-Types-Class.html#parseJSON",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "parseJSON",
          "normalized": "Value-\u003eParser a",
          "package": "aeson",
          "partial": "JSON",
          "signature": "Value-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:parseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "parseMaybe",
          "package": "aeson",
          "signature": "(a -\u003e Parser b) -\u003e a -\u003e Maybe b",
          "source": "src/Data-Aeson-Types-Internal.html#parseMaybe",
          "type": "function"
        },
        "index": {
          "description": "Run Parser with Maybe result type",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "parseMaybe",
          "normalized": "(a-\u003eParser b)-\u003ea-\u003eMaybe b",
          "package": "aeson",
          "partial": "Maybe",
          "signature": "(a-\u003eParser b)-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:parseMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Types",
          "name": "toJSON",
          "package": "aeson",
          "signature": "a -\u003e Value",
          "source": "src/Data-Aeson-Types-Class.html#toJSON",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "toJSON",
          "normalized": "a-\u003eValue",
          "package": "aeson",
          "partial": "JSON",
          "signature": "a-\u003eValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:toJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail parsing due to a type mismatch, with a descriptive message.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "typeMismatch",
          "package": "aeson",
          "signature": "String-\u003e Value-\u003e Parser a",
          "type": "function"
        },
        "index": {
          "description": "Fail parsing due to type mismatch with descriptive message",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "typeMismatch",
          "normalized": "String-\u003eValue-\u003eParser a",
          "package": "aeson",
          "partial": "Mismatch",
          "signature": "String-\u003eValue-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:typeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewithArray expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is an \u003ccode\u003eArray\u003c/code\u003e\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "withArray",
          "package": "aeson",
          "signature": "String -\u003e (Array -\u003e Parser a) -\u003e Value -\u003e Parser a",
          "source": "src/Data-Aeson-Types-Instances.html#withArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withArray\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:withArray\"]"
        },
        "index": {
          "description": "withArray expected value applies to the Array when value is an Array and fails using typeMismatch expected otherwise",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "withArray",
          "normalized": "String-\u003e(Array-\u003eParser a)-\u003eValue-\u003eParser a",
          "package": "aeson",
          "partial": "Array",
          "signature": "String-\u003e(Array-\u003eParser a)-\u003eValue-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewithBool expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is a \u003ccode\u003eBool\u003c/code\u003e\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "withBool",
          "package": "aeson",
          "signature": "String -\u003e (Bool -\u003e Parser a) -\u003e Value -\u003e Parser a",
          "source": "src/Data-Aeson-Types-Instances.html#withBool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withBool\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:withBool\"]"
        },
        "index": {
          "description": "withBool expected value applies to the Bool when value is Bool and fails using typeMismatch expected otherwise",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "withBool",
          "normalized": "String-\u003e(Bool-\u003eParser a)-\u003eValue-\u003eParser a",
          "package": "aeson",
          "partial": "Bool",
          "signature": "String-\u003e(Bool-\u003eParser a)-\u003eValue-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use withScientific instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003ccode\u003ewithNumber expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e.\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "withNumber",
          "package": "aeson",
          "signature": "String -\u003e (Number -\u003e Parser a) -\u003e Value -\u003e Parser a",
          "source": "src/Data-Aeson-Types-Instances.html#withNumber",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withNumber\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:withNumber\"]"
        },
        "index": {
          "description": "Deprecated Use withScientific instead withNumber expected value applies to the Number when value is Number and fails using typeMismatch expected otherwise",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "withNumber",
          "normalized": "String-\u003e(Number-\u003eParser a)-\u003eValue-\u003eParser a",
          "package": "aeson",
          "partial": "Number",
          "signature": "String-\u003e(Number-\u003eParser a)-\u003eValue-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewithObject expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is an \u003ccode\u003eObject\u003c/code\u003e\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "withObject",
          "package": "aeson",
          "signature": "String -\u003e (Object -\u003e Parser a) -\u003e Value -\u003e Parser a",
          "source": "src/Data-Aeson-Types-Instances.html#withObject",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withObject\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:withObject\"]"
        },
        "index": {
          "description": "withObject expected value applies to the Object when value is an Object and fails using typeMismatch expected otherwise",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "withObject",
          "normalized": "String-\u003e(Object-\u003eParser a)-\u003eValue-\u003eParser a",
          "package": "aeson",
          "partial": "Object",
          "signature": "String-\u003e(Object-\u003eParser a)-\u003eValue-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewithScientific expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eScientific\u003c/a\u003e\u003c/code\u003e number when \u003ccode\u003evalue\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e.\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.Aeson.Types",
          "name": "withScientific",
          "package": "aeson",
          "signature": "String -\u003e (Scientific -\u003e Parser a) -\u003e Value -\u003e Parser a",
          "source": "src/Data-Aeson-Types-Instances.html#withScientific",
          "type": "function"
        },
        "index": {
          "description": "withScientific expected value applies to the Scientific number when value is Number and fails using typeMismatch expected otherwise",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "withScientific",
          "normalized": "String-\u003e(Scientific-\u003eParser a)-\u003eValue-\u003eParser a",
          "package": "aeson",
          "partial": "Scientific",
          "signature": "String-\u003e(Scientific-\u003eParser a)-\u003eValue-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withScientific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewithText expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is a \u003ccode\u003eString\u003c/code\u003e\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "[\"Data.Aeson.Types\",\"Data.Aeson\"]",
          "name": "withText",
          "package": "aeson",
          "signature": "String -\u003e (Text -\u003e Parser a) -\u003e Value -\u003e Parser a",
          "source": "src/Data-Aeson-Types-Instances.html#withText",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withText\",\"http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:withText\"]"
        },
        "index": {
          "description": "withText expected value applies to the Text when value is String and fails using typeMismatch expected otherwise",
          "hierarchy": "Data Aeson Types",
          "module": "Data.Aeson.Types",
          "name": "withText",
          "normalized": "String-\u003e(Text-\u003eParser a)-\u003eValue-\u003eParser a",
          "package": "aeson",
          "partial": "Text",
          "signature": "String-\u003e(Text-\u003eParser a)-\u003eValue-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes and functions for working efficiently with JSON data.\n\u003c/p\u003e\u003cp\u003e(A note on naming: in Greek mythology, Aeson was the father of Jason.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aeson",
          "name": "Aeson",
          "package": "aeson",
          "source": "src/Data-Aeson.html",
          "type": "module"
        },
        "index": {
          "description": "Types and functions for working efficiently with JSON data note on naming in Greek mythology Aeson was the father of Jason",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "Aeson",
          "package": "aeson",
          "partial": "Aeson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON \"array\" (sequence).\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "Array",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#Array",
          "type": "type"
        },
        "index": {
          "description": "JSON array sequence",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "Array",
          "package": "aeson",
          "partial": "Array",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e that uses the same non-standard\n serialization format as Microsoft .NET, whose \u003ccode\u003eSystem.DateTime\u003c/code\u003e\n type is by default serialized to JSON as in the following example:\n\u003c/p\u003e\u003cpre\u003e /Date(1302547608878)/\n\u003c/pre\u003e\u003cp\u003eThe number represents milliseconds since the Unix epoch.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "DotNetTime",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#DotNetTime",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper for UTCTime that uses the same non-standard serialization format as Microsoft NET whose System.DateTime type is by default serialized to JSON as in the following example Date The number represents milliseconds since the Unix epoch",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "DotNetTime",
          "package": "aeson",
          "partial": "Dot Net Time",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:DotNetTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from JSON, with the possibility of\n failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003eempty\u003c/code\u003e, \u003ccode\u003emzero\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance FromJSON Coord where\n   parseJSON (\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e v) = Coord    \u003ccode\u003e\u003c$\u003e\u003c/code\u003e\n                          v \u003ccode\u003e.:\u003c/code\u003e \"x\" \u003ccode\u003e\u003c*\u003e\u003c/code\u003e\n                          v \u003ccode\u003e.:\u003c/code\u003e \"y\"\n\n-- A non-\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e value is of the wrong type, so use \u003ccode\u003emzero\u003c/code\u003e to fail.\n   parseJSON _          = \u003ccode\u003emzero\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003eText\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003efromJSON\u003c/code\u003e function that parses to\n any type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions, \u003ccode\u003eparseJSON\u003c/code\u003e will have a default\n generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use this, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your datatype and\n declare a \u003ccode\u003eFromJSON\u003c/code\u003e instance for your datatype without giving a definition\n for \u003ccode\u003eparseJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance FromJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic decoding using \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance FromJSON Coord where\n     parseJSON = \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Aeson",
          "name": "FromJSON",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Class.html#FromJSON",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from JSON with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if an Object is missing required key or the value is of the wrong type An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance FromJSON Coord where parseJSON Object Coord non Object value is of the wrong type so use mzero to fail parseJSON mzero Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your FromJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic fromJSON function that parses to any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions parseJSON will have default generic implementation To use this simply add deriving Generic clause to your datatype and declare FromJSON instance for your datatype without giving definition for parseJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance FromJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic decoding using genericParseJSON applied to your encoding decoding Options instance FromJSON Coord where parseJSON genericParseJSON defaultOptions",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "FromJSON",
          "package": "aeson",
          "partial": "From JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:FromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of generic representation types (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e) that can be converted from JSON.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "GFromJSON",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Class.html#GFromJSON",
          "type": "class"
        },
        "index": {
          "description": "Class of generic representation types Rep that can be converted from JSON",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "GFromJSON",
          "package": "aeson",
          "partial": "GFrom JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:GFromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of generic representation types (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e) that can be converted to JSON.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "GToJSON",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Class.html#GToJSON",
          "type": "class"
        },
        "index": {
          "description": "Class of generic representation types Rep that can be converted to JSON",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "GToJSON",
          "package": "aeson",
          "partial": "GTo JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:GToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON \"object\" (key/value map).\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "Object",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#Object",
          "type": "type"
        },
        "index": {
          "description": "JSON object key value map",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "Object",
          "package": "aeson",
          "partial": "Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of running a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "Result",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of running Parser",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "Result",
          "package": "aeson",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to JSON.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance ToJSON Coord where\n   toJSON (Coord x y) = \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e [\"x\" \u003ccode\u003e.=\u003c/code\u003e x, \"y\" \u003ccode\u003e.=\u003c/code\u003e y]\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003eText\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003etoJSON\u003c/code\u003e function that accepts any\n type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions (GHC 7.2 and newer),\n \u003ccode\u003etoJSON\u003c/code\u003e will have a default generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use the latter option, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your\n datatype and declare a \u003ccode\u003eToJSON\u003c/code\u003e instance for your datatype without giving a\n definition for \u003ccode\u003etoJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance ToJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic encoding using \u003ccode\u003e\u003ca\u003egenericToJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance ToJSON Coord where\n     toJSON = \u003ccode\u003e\u003ca\u003egenericToJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Aeson",
          "name": "ToJSON",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Class.html#ToJSON",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to JSON An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance ToJSON Coord where toJSON Coord object Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your ToJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic toJSON function that accepts any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions GHC and newer toJSON will have default generic implementation To use the latter option simply add deriving Generic clause to your datatype and declare ToJSON instance for your datatype without giving definition for toJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance ToJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic encoding using genericToJSON applied to your encoding decoding Options instance ToJSON Coord where toJSON genericToJSON defaultOptions",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "ToJSON",
          "package": "aeson",
          "partial": "To JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:ToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON value represented as a Haskell value.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "Value",
          "package": "aeson",
          "source": "src/Data-Aeson-Types-Internal.html#Value",
          "type": "data"
        },
        "index": {
          "description": "JSON value represented as Haskell value",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "Value",
          "package": "aeson",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently deserialize a JSON value from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThe input must consist solely of a JSON document, with no trailing\n data except for whitespace. This restriction is necessary to ensure\n that if data is being lazily read from a file handle, the file\n handle will be closed in a timely fashion once the document has\n been parsed.\n\u003c/p\u003e\u003cp\u003eThis function parses immediately, but defers conversion.  See\n \u003ccode\u003e\u003ca\u003ejson\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "decode",
          "package": "aeson",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Data-Aeson.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Efficiently deserialize JSON value from lazy ByteString If this fails due to incomplete or invalid input Nothing is returned The input must consist solely of JSON document with no trailing data except for whitespace This restriction is necessary to ensure that if data is being lazily read from file handle the file handle will be closed in timely fashion once the document has been parsed This function parses immediately but defers conversion See json for details",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "decode",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "aeson",
          "signature": "ByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently deserialize a JSON value from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThe input must consist solely of a JSON document, with no trailing\n data except for whitespace. This restriction is necessary to ensure\n that if data is being lazily read from a file handle, the file\n handle will be closed in a timely fashion once the document has\n been parsed.\n\u003c/p\u003e\u003cp\u003eThis function parses and performs conversion immediately.  See\n \u003ccode\u003e\u003ca\u003ejson'\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "decode'",
          "package": "aeson",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Data-Aeson.html#decode%27",
          "type": "function"
        },
        "index": {
          "description": "Efficiently deserialize JSON value from lazy ByteString If this fails due to incomplete or invalid input Nothing is returned The input must consist solely of JSON document with no trailing data except for whitespace This restriction is necessary to ensure that if data is being lazily read from file handle the file handle will be closed in timely fashion once the document has been parsed This function parses and performs conversion immediately See json for details",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "decode'",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "aeson",
          "signature": "ByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:decode-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently deserialize a JSON value from a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThe input must consist solely of a JSON document, with no trailing\n data except for whitespace.\n\u003c/p\u003e\u003cp\u003eThis function parses immediately, but defers conversion.  See\n \u003ccode\u003e\u003ca\u003ejson\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "decodeStrict",
          "package": "aeson",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Data-Aeson.html#decodeStrict",
          "type": "function"
        },
        "index": {
          "description": "Efficiently deserialize JSON value from strict ByteString If this fails due to incomplete or invalid input Nothing is returned The input must consist solely of JSON document with no trailing data except for whitespace This function parses immediately but defers conversion See json for details",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "decodeStrict",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "aeson",
          "partial": "Strict",
          "signature": "ByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:decodeStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently deserialize a JSON value from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThe input must consist solely of a JSON document, with no trailing\n data except for whitespace.\n\u003c/p\u003e\u003cp\u003eThis function parses and performs conversion immediately.  See\n \u003ccode\u003e\u003ca\u003ejson'\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "decodeStrict'",
          "package": "aeson",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Data-Aeson.html#decodeStrict%27",
          "type": "function"
        },
        "index": {
          "description": "Efficiently deserialize JSON value from lazy ByteString If this fails due to incomplete or invalid input Nothing is returned The input must consist solely of JSON document with no trailing data except for whitespace This function parses and performs conversion immediately See json for details",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "decodeStrict'",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "aeson",
          "partial": "Strict'",
          "signature": "ByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:decodeStrict-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e but returns an error message when decoding fails.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "eitherDecode",
          "package": "aeson",
          "signature": "ByteString -\u003e Either String a",
          "source": "src/Data-Aeson.html#eitherDecode",
          "type": "function"
        },
        "index": {
          "description": "Like decode but returns an error message when decoding fails",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "eitherDecode",
          "normalized": "ByteString-\u003eEither String a",
          "package": "aeson",
          "partial": "Decode",
          "signature": "ByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:eitherDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode'\u003c/a\u003e\u003c/code\u003e but returns an error message when decoding fails.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "eitherDecode'",
          "package": "aeson",
          "signature": "ByteString -\u003e Either String a",
          "source": "src/Data-Aeson.html#eitherDecode%27",
          "type": "function"
        },
        "index": {
          "description": "Like decode but returns an error message when decoding fails",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "eitherDecode'",
          "normalized": "ByteString-\u003eEither String a",
          "package": "aeson",
          "partial": "Decode'",
          "signature": "ByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:eitherDecode-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeStrict\u003c/a\u003e\u003c/code\u003e but returns an error message when decoding fails.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "eitherDecodeStrict",
          "package": "aeson",
          "signature": "ByteString -\u003e Either String a",
          "source": "src/Data-Aeson.html#eitherDecodeStrict",
          "type": "function"
        },
        "index": {
          "description": "Like decodeStrict but returns an error message when decoding fails",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "eitherDecodeStrict",
          "normalized": "ByteString-\u003eEither String a",
          "package": "aeson",
          "partial": "Decode Strict",
          "signature": "ByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:eitherDecodeStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeStrict'\u003c/a\u003e\u003c/code\u003e but returns an error message when decoding fails.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "eitherDecodeStrict'",
          "package": "aeson",
          "signature": "ByteString -\u003e Either String a",
          "source": "src/Data-Aeson.html#eitherDecodeStrict%27",
          "type": "function"
        },
        "index": {
          "description": "Like decodeStrict but returns an error message when decoding fails",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "eitherDecodeStrict'",
          "normalized": "ByteString-\u003eEither String a",
          "package": "aeson",
          "partial": "Decode Strict'",
          "signature": "ByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:eitherDecodeStrict-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method (applied to \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e) is used as the\n default generic implementation of \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "gParseJSON",
          "package": "aeson",
          "signature": "Options -\u003e Value -\u003e Parser (f a)",
          "source": "src/Data-Aeson-Types-Class.html#gParseJSON",
          "type": "method"
        },
        "index": {
          "description": "This method applied to defaultOptions is used as the default generic implementation of parseJSON",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "gParseJSON",
          "normalized": "Options-\u003eValue-\u003eParser(a b)",
          "package": "aeson",
          "partial": "Parse JSON",
          "signature": "Options-\u003eValue-\u003eParser(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:gParseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method (applied to \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e) is used as the\n default generic implementation of \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson",
          "name": "gToJSON",
          "package": "aeson",
          "signature": "Options -\u003e f a -\u003e Value",
          "source": "src/Data-Aeson-Types-Class.html#gToJSON",
          "type": "method"
        },
        "index": {
          "description": "This method applied to defaultOptions is used as the default generic implementation of toJSON",
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "gToJSON",
          "normalized": "Options-\u003ea b-\u003eValue",
          "package": "aeson",
          "partial": "To JSON",
          "signature": "Options-\u003ef a-\u003eValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:gToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson",
          "name": "parseJSON",
          "package": "aeson",
          "signature": "Value -\u003e Parser a",
          "source": "src/Data-Aeson-Types-Class.html#parseJSON",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "parseJSON",
          "normalized": "Value-\u003eParser a",
          "package": "aeson",
          "partial": "JSON",
          "signature": "Value-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:parseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson",
          "name": "toJSON",
          "package": "aeson",
          "signature": "a -\u003e Value",
          "source": "src/Data-Aeson-Types-Class.html#toJSON",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Aeson",
          "module": "Data.Aeson",
          "name": "toJSON",
          "normalized": "a-\u003eValue",
          "package": "aeson",
          "partial": "JSON",
          "signature": "a-\u003eValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:toJSON"
      }
    }
  ]
]