[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Encode.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficiently serialize a JSON value.\n\u003c/p\u003e\u003cp\u003eMost frequently, you'll probably want to encode straight to UTF-8\n (the standard JSON encoding) using \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou can use the conversions to \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es when embedding JSON messages as\n parts of a protocol.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Aeson.Encode",
        "fct-package": "aeson",
        "fct-signature": "module",
        "fct-source": "src/Data-Aeson-Encode.html",
        "fct-type": "module",
        "title": "Encode"
      },
      "index": {
        "description": "Efficiently serialize JSON value Most frequently you ll probably want to encode straight to UTF-8 the standard JSON encoding using encode You can use the conversions to Builder when embedding JSON messages as parts of protocol",
        "hierarchy": "Data Aeson Encode",
        "module": "Data.Aeson.Encode",
        "name": "Encode",
        "normalized": "",
        "package": "aeson",
        "partial": "Encode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Encode.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e as a UTF-8 encoded \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Encode",
        "fct-package": "aeson",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Aeson-Encode.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode JSON Value as UTF-8 encoded ByteString",
        "hierarchy": "Data Aeson Encode",
        "module": "Data.Aeson.Encode",
        "name": "encode",
        "normalized": "a-\u003eByteString",
        "package": "aeson",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Encode.html#v:encodeToTextBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e, which can be embedded efficiently\n in a text-based protocol.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Encode",
        "fct-package": "aeson",
        "fct-signature": "Value -\u003e Builder",
        "fct-source": "src/Data-Aeson-Encode.html#encodeToTextBuilder",
        "fct-type": "function",
        "title": "encodeToTextBuilder"
      },
      "index": {
        "description": "Encode JSON Value to Builder which can be embedded efficiently in text-based protocol",
        "hierarchy": "Data Aeson Encode",
        "module": "Data.Aeson.Encode",
        "name": "encodeToTextBuilder",
        "normalized": "Value-\u003eBuilder",
        "package": "aeson",
        "partial": "To Text Builder",
        "signature": "Value-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Encode.html#v:fromValue",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eencodeToTextBuilder\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Aeson.Encode",
        "fct-package": "aeson",
        "fct-signature": "Value -\u003e Builder",
        "fct-source": "src/Data-Aeson-Encode.html#fromValue",
        "fct-type": "function",
        "title": "fromValue"
      },
      "index": {
        "description": "Deprecated Use encodeToTextBuilder instead",
        "hierarchy": "Data Aeson Encode",
        "module": "Data.Aeson.Encode",
        "name": "fromValue",
        "normalized": "Value-\u003eBuilder",
        "package": "aeson",
        "partial": "Value",
        "signature": "Value-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Generic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: This module will be \u003cem\u003eREMOVED\u003c/em\u003e in version 0.7.0.0. Please switch to GHC generics or Data.Aeson.TH instead. These alternatives are less buggy, faster, and more configurable.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eJSON handling using \u003ccode\u003e\u003ca\u003eGenerics\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is based on the \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e package originally written\n by Lennart Augustsson.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Aeson.Generic",
        "fct-package": "aeson",
        "fct-signature": "module",
        "fct-source": "src/Data-Aeson-Generic.html",
        "fct-type": "module",
        "title": "Generic"
      },
      "index": {
        "description": "Deprecated This module will be REMOVED in version Please switch to GHC generics or Data.Aeson.TH instead These alternatives are less buggy faster and more configurable JSON handling using Generics This is based on the Generic package originally written by Lennart Augustsson",
        "hierarchy": "Data Aeson Generic",
        "module": "Data.Aeson.Generic",
        "name": "Generic",
        "normalized": "",
        "package": "aeson",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Generic.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently deserialize a JSON value from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThis function parses immediately, but defers conversion.  See\n \u003ccode\u003e\u003ca\u003ejson\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Generic",
        "fct-package": "aeson",
        "fct-signature": "ByteString -\u003e Maybe a",
        "fct-source": "src/Data-Aeson-Generic.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Efficiently deserialize JSON value from lazy ByteString If this fails due to incomplete or invalid input Nothing is returned This function parses immediately but defers conversion See json for details",
        "hierarchy": "Data Aeson Generic",
        "module": "Data.Aeson.Generic",
        "name": "decode",
        "normalized": "ByteString-\u003eMaybe a",
        "package": "aeson",
        "partial": "",
        "signature": "ByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Generic.html#v:decode-39-",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently deserialize a JSON value from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThis function parses and performs conversion immediately.  See\n \u003ccode\u003e\u003ca\u003ejson'\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Generic",
        "fct-package": "aeson",
        "fct-signature": "ByteString -\u003e Maybe a",
        "fct-source": "src/Data-Aeson-Generic.html#decode%27",
        "fct-type": "function",
        "title": "decode'"
      },
      "index": {
        "description": "Efficiently deserialize JSON value from lazy ByteString If this fails due to incomplete or invalid input Nothing is returned This function parses and performs conversion immediately See json for details",
        "hierarchy": "Data Aeson Generic",
        "module": "Data.Aeson.Generic",
        "name": "decode'",
        "normalized": "ByteString-\u003eMaybe a",
        "package": "aeson",
        "partial": "",
        "signature": "ByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Generic.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently serialize a JSON value as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Generic",
        "fct-package": "aeson",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Aeson-Generic.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Efficiently serialize JSON value as lazy ByteString",
        "hierarchy": "Data Aeson Generic",
        "module": "Data.Aeson.Generic",
        "name": "encode",
        "normalized": "a-\u003eByteString",
        "package": "aeson",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Generic.html#v:fromJSON",
      "description": {
        "fct-module": "Data.Aeson.Generic",
        "fct-package": "aeson",
        "fct-signature": "Value -\u003e Result a",
        "fct-source": "src/Data-Aeson-Generic.html#fromJSON",
        "fct-type": "function",
        "title": "fromJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Generic",
        "module": "Data.Aeson.Generic",
        "name": "fromJSON",
        "normalized": "Value-\u003eResult a",
        "package": "aeson",
        "partial": "JSON",
        "signature": "Value-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Generic.html#v:toJSON",
      "description": {
        "fct-module": "Data.Aeson.Generic",
        "fct-package": "aeson",
        "fct-signature": "a -\u003e Value",
        "fct-source": "src/Data-Aeson-Generic.html#toJSON",
        "fct-type": "function",
        "title": "toJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Generic",
        "module": "Data.Aeson.Generic",
        "name": "toJSON",
        "normalized": "a-\u003eValue",
        "package": "aeson",
        "partial": "JSON",
        "signature": "a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficiently and correctly parse a JSON string.  The string must be\n encoded as UTF-8.\n\u003c/p\u003e\u003cp\u003eIt can be useful to think of parsing as occurring in two phases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Identification of the textual boundaries of a JSON value.  This\n   is always strict, so that an invalid JSON document can be\n   rejected as soon as possible.\n\u003c/li\u003e\u003cli\u003e Conversion of a JSON value to a Haskell value.  This may be\n   either immediate (strict) or deferred (lazy); see below for\n   details.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe question of whether to choose a lazy or strict parser is\n subtle, but it can have significant performance implications,\n resulting in changes in CPU use and memory footprint of 30% to 50%,\n or occasionally more.  Measure the performance of your application\n with each!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Aeson.Parser",
        "fct-package": "aeson",
        "fct-signature": "module",
        "fct-source": "src/Data-Aeson-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Efficiently and correctly parse JSON string The string must be encoded as UTF-8 It can be useful to think of parsing as occurring in two phases Identification of the textual boundaries of JSON value This is always strict so that an invalid JSON document can be rejected as soon as possible Conversion of JSON value to Haskell value This may be either immediate strict or deferred lazy see below for details The question of whether to choose lazy or strict parser is subtle but it can have significant performance implications resulting in changes in CPU use and memory footprint of to or occasionally more Measure the performance of your application with each",
        "hierarchy": "Data Aeson Parser",
        "module": "Data.Aeson.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "aeson",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#v:json",
      "description": {
        "fct-descr": "\u003cp\u003eParse a top-level JSON value.  This must be either an object or\n an array, per RFC 4627.\n\u003c/p\u003e\u003cp\u003eThe conversion of a parsed value to a Haskell value is deferred\n until the Haskell value is needed.  This may improve performance if\n only a subset of the results of conversions are needed, but at a\n cost in thunk allocation.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Parser",
        "fct-package": "aeson",
        "fct-signature": "Parser Value",
        "fct-source": "src/Data-Aeson-Parser-Internal.html#json",
        "fct-type": "function",
        "title": "json"
      },
      "index": {
        "description": "Parse top-level JSON value This must be either an object or an array per RFC The conversion of parsed value to Haskell value is deferred until the Haskell value is needed This may improve performance if only subset of the results of conversions are needed but at cost in thunk allocation",
        "hierarchy": "Data Aeson Parser",
        "module": "Data.Aeson.Parser",
        "name": "json",
        "normalized": "",
        "package": "aeson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#v:json-39-",
      "description": {
        "fct-descr": "\u003cp\u003eParse a top-level JSON value.  This must be either an object or\n an array, per RFC 4627.\n\u003c/p\u003e\u003cp\u003eThis is a strict version of \u003ccode\u003e\u003ca\u003ejson\u003c/a\u003e\u003c/code\u003e which avoids building up thunks\n during parsing; it performs all conversions immediately.  Prefer\n this version if most of the JSON data needs to be accessed.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Parser",
        "fct-package": "aeson",
        "fct-signature": "Parser Value",
        "fct-source": "src/Data-Aeson-Parser-Internal.html#json%27",
        "fct-type": "function",
        "title": "json'"
      },
      "index": {
        "description": "Parse top-level JSON value This must be either an object or an array per RFC This is strict version of json which avoids building up thunks during parsing it performs all conversions immediately Prefer this version if most of the JSON data needs to be accessed",
        "hierarchy": "Data Aeson Parser",
        "module": "Data.Aeson.Parser",
        "name": "json'",
        "normalized": "",
        "package": "aeson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#v:jstring",
      "description": {
        "fct-descr": "\u003cp\u003eParse a quoted JSON string.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Parser",
        "fct-package": "aeson",
        "fct-signature": "Parser Text",
        "fct-source": "src/Data-Aeson-Parser-Internal.html#jstring",
        "fct-type": "function",
        "title": "jstring"
      },
      "index": {
        "description": "Parse quoted JSON string",
        "hierarchy": "Data Aeson Parser",
        "module": "Data.Aeson.Parser",
        "name": "jstring",
        "normalized": "",
        "package": "aeson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eParse any JSON value.  You should usually \u003ccode\u003e\u003ca\u003ejson\u003c/a\u003e\u003c/code\u003e in preference to\n this function, as this function relaxes the object-or-array\n requirement of RFC 4627.\n\u003c/p\u003e\u003cp\u003eIn particular, be careful in using this function if you think your\n code might interoperate with Javascript.  A na&#239;ve Javascript\n library that parses JSON data using \u003ccode\u003eeval\u003c/code\u003e is vulnerable to attack\n unless the encoded data represents an object or an array.  JSON\n implementations in other languages conform to that same restriction\n to preserve interoperability and security.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Parser",
        "fct-package": "aeson",
        "fct-signature": "Parser Value",
        "fct-source": "src/Data-Aeson-Parser-Internal.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "Parse any JSON value You should usually json in preference to this function as this function relaxes the object-or-array requirement of RFC In particular be careful in using this function if you think your code might interoperate with Javascript na ve Javascript library that parses JSON data using eval is vulnerable to attack unless the encoded data represents an object or an array JSON implementations in other languages conform to that same restriction to preserve interoperability and security",
        "hierarchy": "Data Aeson Parser",
        "module": "Data.Aeson.Parser",
        "name": "value",
        "normalized": "",
        "package": "aeson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Parser.html#v:value-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e. See also \u003ccode\u003e\u003ca\u003ejson'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Parser",
        "fct-package": "aeson",
        "fct-signature": "Parser Value",
        "fct-source": "src/Data-Aeson-Parser-Internal.html#value%27",
        "fct-type": "function",
        "title": "value'"
      },
      "index": {
        "description": "Strict version of value See also json",
        "hierarchy": "Data Aeson Parser",
        "module": "Data.Aeson.Parser",
        "name": "value'",
        "normalized": "",
        "package": "aeson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions to mechanically derive \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instances. Note that\nyou need to enable the \u003ccode\u003eTemplateHaskell\u003c/code\u003e language extension in order to use this\nmodule.\n\u003c/p\u003e\u003cp\u003eAn example shows how instances are generated for arbitrary data types. First we\ndefine a data type:\n\u003c/p\u003e\u003cpre\u003e\ndata D a = Nullary\n         | Unary Int\n         | Product String Char a\n         | Record { testOne   :: Double\n                  , testTwo   :: Bool\n                  , testThree :: D a\n                  } deriving Eq\n\u003c/pre\u003e\u003cp\u003eNext we derive the necessary instances. Note that we make use of the\nfeature to change record field names. In this case we drop the first 4\ncharacters of every field name. We also modify constructor names by\nlower-casing them:\n\u003c/p\u003e\u003cpre\u003e\n$(\u003ccode\u003e\u003ca\u003ederiveJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e{\u003ccode\u003e\u003ca\u003efieldLabelModifier\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003edrop\u003c/code\u003e 4, \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e = map toLower} ''D)\n\u003c/pre\u003e\u003cp\u003eNow we can use the newly created instances.\n\u003c/p\u003e\u003cpre\u003e\nd :: D \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\nd = Record { testOne = 3.14159\n           , testTwo = \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n           , testThree = Product \"test\" 'A' 123\n           }\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromJSON (toJSON d) == Success d\n\u003c/code\u003e\u003c/strong\u003e\u003e True\n\u003c/pre\u003e\u003cp\u003ePlease note that you can derive instances for tuples using the following syntax:\n\u003c/p\u003e\u003cpre\u003e\n-- FromJSON and ToJSON instances for 4-tuples.\n$(\u003ccode\u003e\u003ca\u003ederiveJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e ''(,,,))\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "module",
        "fct-source": "src/Data-Aeson-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "Functions to mechanically derive ToJSON and FromJSON instances Note that you need to enable the TemplateHaskell language extension in order to use this module An example shows how instances are generated for arbitrary data types First we define data type data Nullary Unary Int Product String Char Record testOne Double testTwo Bool testThree deriving Eq Next we derive the necessary instances Note that we make use of the feature to change record field names In this case we drop the first characters of every field name We also modify constructor names by lower-casing them deriveJSON defaultOptions fieldLabelModifier drop constructorTagModifier map toLower Now we can use the newly created instances Int Record testOne testTwo True testThree Product test fromJSON toJSON Success True Please note that you can derive instances for tuples using the following syntax FromJSON and ToJSON instances for tuples deriveJSON defaultOptions",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "TH",
        "normalized": "",
        "package": "aeson",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#t:Options",
      "description": {
        "fct-descr": "\u003cp\u003eOptions that specify how to encode/decode your datatype to/from JSON.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "data",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "data",
        "title": "Options"
      },
      "index": {
        "description": "Options that specify how to encode decode your datatype to from JSON",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "Options",
        "normalized": "",
        "package": "aeson",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#t:SumEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies how to encode constructors of a sum datatype.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "data",
        "fct-source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
        "fct-type": "data",
        "title": "SumEncoding"
      },
      "index": {
        "description": "Specifies how to encode constructors of sum datatype",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "SumEncoding",
        "normalized": "",
        "package": "aeson",
        "partial": "Sum Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:ObjectWithSingleField",
      "description": {
        "fct-descr": "\u003cp\u003eA constructor will be encoded to an object with a single\n field named after the constructor tag (modified by the\n \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e) which maps to the encoded contents of\n the constructor.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "ObjectWithSingleField",
        "fct-source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
        "fct-type": "function",
        "title": "ObjectWithSingleField"
      },
      "index": {
        "description": "constructor will be encoded to an object with single field named after the constructor tag modified by the constructorTagModifier which maps to the encoded contents of the constructor",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "ObjectWithSingleField",
        "normalized": "",
        "package": "aeson",
        "partial": "Object With Single Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:Options",
      "description": {
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "Options",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "function",
        "title": "Options"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "Options",
        "normalized": "",
        "package": "aeson",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:TaggedObject",
      "description": {
        "fct-descr": "\u003cp\u003eA constructor will be encoded to an object with a field\n \u003ccode\u003e\u003ca\u003etagFieldName\u003c/a\u003e\u003c/code\u003e which specifies the constructor tag (modified by\n the \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e). If the constructor is a record\n the encoded record fields will be unpacked into this object. So\n make sure that your record doesn't have a field with the same\n label as the \u003ccode\u003e\u003ca\u003etagFieldName\u003c/a\u003e\u003c/code\u003e. Otherwise the tag gets overwritten\n by the encoded value of that field! If the constructor is not a\n record the encoded constructor contents will be stored under\n the \u003ccode\u003e\u003ca\u003econtentsFieldName\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "TaggedObject",
        "fct-source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
        "fct-type": "function",
        "title": "TaggedObject"
      },
      "index": {
        "description": "constructor will be encoded to an object with field tagFieldName which specifies the constructor tag modified by the constructorTagModifier If the constructor is record the encoded record fields will be unpacked into this object So make sure that your record doesn have field with the same label as the tagFieldName Otherwise the tag gets overwritten by the encoded value of that field If the constructor is not record the encoded constructor contents will be stored under the contentsFieldName field",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "TaggedObject",
        "normalized": "",
        "package": "aeson",
        "partial": "Tagged Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:TwoElemArray",
      "description": {
        "fct-descr": "\u003cp\u003eA constructor will be encoded to a 2-element array where the\n first element is the tag of the constructor (modified by the\n \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e) and the second element the encoded\n contents of the constructor.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "TwoElemArray",
        "fct-source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
        "fct-type": "function",
        "title": "TwoElemArray"
      },
      "index": {
        "description": "constructor will be encoded to element array where the first element is the tag of the constructor modified by the constructorTagModifier and the second element the encoded contents of the constructor",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "TwoElemArray",
        "normalized": "",
        "package": "aeson",
        "partial": "Two Elem Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:allNullaryToStringTag",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e the constructors of a datatype, with \u003cem\u003eall\u003c/em\u003e\n nullary constructors, will be encoded to just a string with\n the constructor tag. If \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e the encoding will always\n follow the \u003ccode\u003e\u003ca\u003esumEncoding\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "Bool",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "function",
        "title": "allNullaryToStringTag"
      },
      "index": {
        "description": "If True the constructors of datatype with all nullary constructors will be encoded to just string with the constructor tag If False the encoding will always follow the sumEncoding",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "allNullaryToStringTag",
        "normalized": "",
        "package": "aeson",
        "partial": "Nullary To String Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:constructorTagModifier",
      "description": {
        "fct-descr": "\u003cp\u003eFunction applied to constructor tags which could be handy\n for lower-casing them for example.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "function",
        "title": "constructorTagModifier"
      },
      "index": {
        "description": "Function applied to constructor tags which could be handy for lower-casing them for example",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "constructorTagModifier",
        "normalized": "String-\u003eString",
        "package": "aeson",
        "partial": "Tag Modifier",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:contentsFieldName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "String",
        "fct-source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
        "fct-type": "function",
        "title": "contentsFieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "contentsFieldName",
        "normalized": "",
        "package": "aeson",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:defaultOptions",
      "description": {
        "fct-descr": "\u003cp\u003eDefault encoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e\n { \u003ccode\u003e\u003ca\u003efieldLabelModifier\u003c/a\u003e\u003c/code\u003e      = id\n , \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e  = id\n , \u003ccode\u003e\u003ca\u003eallNullaryToStringTag\u003c/a\u003e\u003c/code\u003e   = True\n , \u003ccode\u003e\u003ca\u003eomitNothingFields\u003c/a\u003e\u003c/code\u003e       = False\n , \u003ccode\u003e\u003ca\u003esumEncoding\u003c/a\u003e\u003c/code\u003e             = \u003ccode\u003e\u003ca\u003edefaultTaggedObject\u003c/a\u003e\u003c/code\u003e\n }\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "Options",
        "fct-source": "src/Data-Aeson-Types-Internal.html#defaultOptions",
        "fct-type": "function",
        "title": "defaultOptions"
      },
      "index": {
        "description": "Default encoding Options Options fieldLabelModifier id constructorTagModifier id allNullaryToStringTag True omitNothingFields False sumEncoding defaultTaggedObject",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "defaultOptions",
        "normalized": "",
        "package": "aeson",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:defaultTaggedObject",
      "description": {
        "fct-descr": "\u003cp\u003eDefault \u003ccode\u003e\u003ca\u003eTaggedObject\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eSumEncoding\u003c/a\u003e\u003c/code\u003e options:\n\u003c/p\u003e\u003cpre\u003e\n defaultTaggedObject = \u003ccode\u003e\u003ca\u003eTaggedObject\u003c/a\u003e\u003c/code\u003e\n                       { \u003ccode\u003e\u003ca\u003etagFieldName\u003c/a\u003e\u003c/code\u003e      = \"tag\"\n                       , \u003ccode\u003e\u003ca\u003econtentsFieldName\u003c/a\u003e\u003c/code\u003e = \"contents\"\n                       }\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "SumEncoding",
        "fct-source": "src/Data-Aeson-Types-Internal.html#defaultTaggedObject",
        "fct-type": "function",
        "title": "defaultTaggedObject"
      },
      "index": {
        "description": "Default TaggedObject SumEncoding options defaultTaggedObject TaggedObject tagFieldName tag contentsFieldName contents",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "defaultTaggedObject",
        "normalized": "",
        "package": "aeson",
        "partial": "Tagged Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:deriveFromJSON",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance declaration for the given data type.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "Options-\u003e Name-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "deriveFromJSON"
      },
      "index": {
        "description": "Generates FromJSON instance declaration for the given data type",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "deriveFromJSON",
        "normalized": "Options-\u003eName-\u003eQ[Dec]",
        "package": "aeson",
        "partial": "From JSON",
        "signature": "Options-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:deriveJSON",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates both \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance declarations for the given\n data type.\n\u003c/p\u003e\u003cp\u003eThis is a convienience function which is equivalent to calling both\n \u003ccode\u003e\u003ca\u003ederiveToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ederiveFromJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "Options-\u003e Name-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "deriveJSON"
      },
      "index": {
        "description": "Generates both ToJSON and FromJSON instance declarations for the given data type This is convienience function which is equivalent to calling both deriveToJSON and deriveFromJSON",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "deriveJSON",
        "normalized": "Options-\u003eName-\u003eQ[Dec]",
        "package": "aeson",
        "partial": "JSON",
        "signature": "Options-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:deriveToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance declaration for the given data type.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "Options-\u003e Name-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "deriveToJSON"
      },
      "index": {
        "description": "Generates ToJSON instance declaration for the given data type",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "deriveToJSON",
        "normalized": "Options-\u003eName-\u003eQ[Dec]",
        "package": "aeson",
        "partial": "To JSON",
        "signature": "Options-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:fieldLabelModifier",
      "description": {
        "fct-descr": "\u003cp\u003eFunction applied to field labels.\n Handy for removing common record prefixes for example.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "function",
        "title": "fieldLabelModifier"
      },
      "index": {
        "description": "Function applied to field labels Handy for removing common record prefixes for example",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "fieldLabelModifier",
        "normalized": "String-\u003eString",
        "package": "aeson",
        "partial": "Label Modifier",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:mkParseJSON",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a lambda expression which parses the JSON encoding of the given\n data type.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "Options-\u003e Name-\u003e Q Exp",
        "fct-type": "function",
        "title": "mkParseJSON"
      },
      "index": {
        "description": "Generates lambda expression which parses the JSON encoding of the given data type",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "mkParseJSON",
        "normalized": "Options-\u003eName-\u003eQ Exp",
        "package": "aeson",
        "partial": "Parse JSON",
        "signature": "Options-\u003eName-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:mkToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a lambda expression which encodes the given data type as JSON.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "Options-\u003e Name-\u003e Q Exp",
        "fct-type": "function",
        "title": "mkToJSON"
      },
      "index": {
        "description": "Generates lambda expression which encodes the given data type as JSON",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "mkToJSON",
        "normalized": "Options-\u003eName-\u003eQ Exp",
        "package": "aeson",
        "partial": "To JSON",
        "signature": "Options-\u003eName-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:omitNothingFields",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e record fields with a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e value will be\n omitted from the resulting object. If \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e the resulting\n object will include those fields mapping to \u003ccode\u003enull\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "Bool",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "function",
        "title": "omitNothingFields"
      },
      "index": {
        "description": "If True record fields with Nothing value will be omitted from the resulting object If False the resulting object will include those fields mapping to null",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "omitNothingFields",
        "normalized": "",
        "package": "aeson",
        "partial": "Nothing Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:sumEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies how to encode constructors of a sum datatype.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "SumEncoding",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "function",
        "title": "sumEncoding"
      },
      "index": {
        "description": "Specifies how to encode constructors of sum datatype",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "sumEncoding",
        "normalized": "",
        "package": "aeson",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-TH.html#v:tagFieldName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Aeson.TH",
        "fct-package": "aeson",
        "fct-signature": "String",
        "fct-source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
        "fct-type": "function",
        "title": "tagFieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson TH",
        "module": "Data.Aeson.TH",
        "name": "tagFieldName",
        "normalized": "",
        "package": "aeson",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for working with JSON data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "module",
        "fct-source": "src/Data-Aeson-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Types for working with JSON data",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Types",
        "normalized": "",
        "package": "aeson",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Array",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON \"array\" (sequence).\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "type",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Array",
        "fct-type": "type",
        "title": "Array"
      },
      "index": {
        "description": "JSON array sequence",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Array",
        "normalized": "",
        "package": "aeson",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:DotNetTime",
      "description": {
        "fct-descr": "\u003cp\u003eA newtype wrapper for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e that uses the same non-standard\n serialization format as Microsoft .NET, whose \u003ccode\u003eSystem.DateTime\u003c/code\u003e\n type is by default serialized to JSON as in the following example:\n\u003c/p\u003e\u003cpre\u003e /Date(1302547608878)/\n\u003c/pre\u003e\u003cp\u003eThe number represents milliseconds since the Unix epoch.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Aeson-Types-Internal.html#DotNetTime",
        "fct-type": "newtype",
        "title": "DotNetTime"
      },
      "index": {
        "description": "newtype wrapper for UTCTime that uses the same non-standard serialization format as Microsoft NET whose System.DateTime type is by default serialized to JSON as in the following example Date The number represents milliseconds since the Unix epoch",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "DotNetTime",
        "normalized": "",
        "package": "aeson",
        "partial": "Dot Net Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:FromJSON",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted from JSON, with the possibility of\n failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003eempty\u003c/code\u003e, \u003ccode\u003emzero\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance FromJSON Coord where\n   parseJSON (\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e v) = Coord    \u003ccode\u003e\u003c$\u003e\u003c/code\u003e\n                          v \u003ccode\u003e.:\u003c/code\u003e \"x\" \u003ccode\u003e\u003c*\u003e\u003c/code\u003e\n                          v \u003ccode\u003e.:\u003c/code\u003e \"y\"\n\n-- A non-\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e value is of the wrong type, so use \u003ccode\u003emzero\u003c/code\u003e to fail.\n   parseJSON _          = \u003ccode\u003emzero\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003eText\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003efromJSON\u003c/code\u003e function that parses to\n any type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions, \u003ccode\u003eparseJSON\u003c/code\u003e will have a default\n generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use this, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your datatype and\n declare a \u003ccode\u003eFromJSON\u003c/code\u003e instance for your datatype without giving a definition\n for \u003ccode\u003eparseJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance FromJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic decoding using \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance FromJSON Coord where\n     parseJSON = \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "class",
        "fct-source": "src/Data-Aeson-Types-Class.html#FromJSON",
        "fct-type": "class",
        "title": "FromJSON"
      },
      "index": {
        "description": "type that can be converted from JSON with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if an Object is missing required key or the value is of the wrong type An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance FromJSON Coord where parseJSON Object Coord non Object value is of the wrong type so use mzero to fail parseJSON mzero Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your FromJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic fromJSON function that parses to any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions parseJSON will have default generic implementation To use this simply add deriving Generic clause to your datatype and declare FromJSON instance for your datatype without giving definition for parseJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance FromJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic decoding using genericParseJSON applied to your encoding decoding Options instance FromJSON Coord where parseJSON genericParseJSON defaultOptions",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "FromJSON",
        "normalized": "",
        "package": "aeson",
        "partial": "From JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:GFromJSON",
      "description": {
        "fct-descr": "\u003cp\u003eClass of generic representation types (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e) that can be converted from JSON.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "class",
        "fct-source": "src/Data-Aeson-Types-Class.html#GFromJSON",
        "fct-type": "class",
        "title": "GFromJSON"
      },
      "index": {
        "description": "Class of generic representation types Rep that can be converted from JSON",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "GFromJSON",
        "normalized": "",
        "package": "aeson",
        "partial": "GFrom JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:GToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eClass of generic representation types (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e) that can be converted to JSON.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "class",
        "fct-source": "src/Data-Aeson-Types-Class.html#GToJSON",
        "fct-type": "class",
        "title": "GToJSON"
      },
      "index": {
        "description": "Class of generic representation types Rep that can be converted to JSON",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "GToJSON",
        "normalized": "",
        "package": "aeson",
        "partial": "GTo JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON \"object\" (key/value map).\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "type",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Object",
        "fct-type": "type",
        "title": "Object"
      },
      "index": {
        "description": "JSON object key value map",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Object",
        "normalized": "",
        "package": "aeson",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Options",
      "description": {
        "fct-descr": "\u003cp\u003eOptions that specify how to encode/decode your datatype to/from JSON.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "data",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "data",
        "title": "Options"
      },
      "index": {
        "description": "Options that specify how to encode decode your datatype to from JSON",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Options",
        "normalized": "",
        "package": "aeson",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Pair",
      "description": {
        "fct-descr": "\u003cp\u003eA key/value pair for an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "type",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Pair",
        "fct-type": "type",
        "title": "Pair"
      },
      "index": {
        "description": "key value pair for an Object",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Pair",
        "normalized": "",
        "package": "aeson",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eA continuation-based parser type.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "data",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Parser",
        "fct-type": "data",
        "title": "Parser"
      },
      "index": {
        "description": "continuation-based parser type",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Parser",
        "normalized": "",
        "package": "aeson",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of running a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "data",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "The result of running Parser",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Result",
        "normalized": "",
        "package": "aeson",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:SumEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies how to encode constructors of a sum datatype.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "data",
        "fct-source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
        "fct-type": "data",
        "title": "SumEncoding"
      },
      "index": {
        "description": "Specifies how to encode constructors of sum datatype",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "SumEncoding",
        "normalized": "",
        "package": "aeson",
        "partial": "Sum Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:ToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted to JSON.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance ToJSON Coord where\n   toJSON (Coord x y) = \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e [\"x\" \u003ccode\u003e.=\u003c/code\u003e x, \"y\" \u003ccode\u003e.=\u003c/code\u003e y]\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003eText\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003etoJSON\u003c/code\u003e function that accepts any\n type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions (GHC 7.2 and newer),\n \u003ccode\u003etoJSON\u003c/code\u003e will have a default generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use the latter option, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your\n datatype and declare a \u003ccode\u003eToJSON\u003c/code\u003e instance for your datatype without giving a\n definition for \u003ccode\u003etoJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance ToJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic encoding using \u003ccode\u003e\u003ca\u003egenericToJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance ToJSON Coord where\n     toJSON = \u003ccode\u003e\u003ca\u003egenericToJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "class",
        "fct-source": "src/Data-Aeson-Types-Class.html#ToJSON",
        "fct-type": "class",
        "title": "ToJSON"
      },
      "index": {
        "description": "type that can be converted to JSON An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance ToJSON Coord where toJSON Coord object Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your ToJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic toJSON function that accepts any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions GHC and newer toJSON will have default generic implementation To use the latter option simply add deriving Generic clause to your datatype and declare ToJSON instance for your datatype without giving definition for toJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance ToJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic encoding using genericToJSON applied to your encoding decoding Options instance ToJSON Coord where toJSON genericToJSON defaultOptions",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "ToJSON",
        "normalized": "",
        "package": "aeson",
        "partial": "To JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON value represented as a Haskell value.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "data",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "JSON value represented as Haskell value",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Value",
        "normalized": "",
        "package": "aeson",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:.-33--61-",
      "description": {
        "fct-descr": "\u003cp\u003eHelper for use in combination with \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e to provide default\n values for optional JSON object fields.\n\u003c/p\u003e\u003cp\u003eThis combinator is most useful if the key and value can be absent\n from an object without affecting its validity and we know a default\n value to assign in that case.  If the key and value are mandatory,\n use '(.:)' instead.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e v1 \u003c- o \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e \"opt_field_with_dfl\" .!= \"default_val\"\n v2 \u003c- o \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e  \"mandatory_field\"\n v3 \u003c- o \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e \"opt_field2\"\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Parser (Maybe a) -\u003e a -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#.%21%3D",
        "fct-type": "function",
        "title": "(.!=)"
      },
      "index": {
        "description": "Helper for use in combination with to provide default values for optional JSON object fields This combinator is most useful if the key and value can be absent from an object without affecting its validity and we know default value to assign in that case If the key and value are mandatory use instead Example usage v1 opt field with dfl default val v2 mandatory field v3 opt field2",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "(.!=) .!=",
        "normalized": "Parser(Maybe a)-\u003ea-\u003eParser a",
        "package": "aeson",
        "partial": "",
        "signature": "Parser(Maybe a)-\u003ea-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:.-61-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e from a key and a value.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Text -\u003e a -\u003e Pair",
        "fct-source": "src/Data-Aeson-Types-Instances.html#.%3D",
        "fct-type": "function",
        "title": "(.=)"
      },
      "index": {
        "description": "Construct Pair from key and value",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "(.=) .=",
        "normalized": "Text-\u003ea-\u003ePair",
        "package": "aeson",
        "partial": "",
        "signature": "Text-\u003ea-\u003ePair"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:.:",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the value associated with the given key of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the key is not present or the value cannot\n be converted to the desired type.\n\u003c/p\u003e\u003cp\u003eThis accessor is appropriate if the key and value \u003cem\u003emust\u003c/em\u003e be present\n in an object for it to be valid.  If the key and value are\n optional, use '(.:?)' instead.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Object -\u003e Text -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#.%3A",
        "fct-type": "function",
        "title": "(.:)"
      },
      "index": {
        "description": "Retrieve the value associated with the given key of an Object The result is empty if the key is not present or the value cannot be converted to the desired type This accessor is appropriate if the key and value must be present in an object for it to be valid If the key and value are optional use instead",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "(.:) .:",
        "normalized": "Object-\u003eText-\u003eParser a",
        "package": "aeson",
        "partial": "",
        "signature": "Object-\u003eText-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:.:-63-",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the value associated with the given key of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not present, or \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if\n the value cannot be converted to the desired type.\n\u003c/p\u003e\u003cp\u003eThis accessor is most useful if the key and value can be absent\n from an object without affecting its validity.  If the key and\n value are mandatory, use '(.:)' instead.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Object -\u003e Text -\u003e Parser (Maybe a)",
        "fct-source": "src/Data-Aeson-Types-Instances.html#.%3A%3F",
        "fct-type": "function",
        "title": "(.:?)"
      },
      "index": {
        "description": "Retrieve the value associated with the given key of an Object The result is Nothing if the key is not present or empty if the value cannot be converted to the desired type This accessor is most useful if the key and value can be absent from an object without affecting its validity If the key and value are mandatory use instead",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "(.:?) .:?",
        "normalized": "Object-\u003eText-\u003eParser(Maybe a)",
        "package": "aeson",
        "partial": "",
        "signature": "Object-\u003eText-\u003eParser(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Array",
      "description": {
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Array !Array",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Array",
        "normalized": "",
        "package": "aeson",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Bool",
      "description": {
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Bool !Bool",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Bool",
        "normalized": "",
        "package": "aeson",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:DotNetTime",
      "description": {
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "DotNetTime",
        "fct-source": "src/Data-Aeson-Types-Internal.html#DotNetTime",
        "fct-type": "function",
        "title": "DotNetTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "DotNetTime",
        "normalized": "",
        "package": "aeson",
        "partial": "Dot Net Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Error",
      "description": {
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Error String",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Result",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Error",
        "normalized": "",
        "package": "aeson",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Null",
      "description": {
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Null",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "Null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Null",
        "normalized": "",
        "package": "aeson",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Number",
      "description": {
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Number !Scientific",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Number",
        "normalized": "",
        "package": "aeson",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Object",
      "description": {
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Object !Object",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "Object"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Object",
        "normalized": "",
        "package": "aeson",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:ObjectWithSingleField",
      "description": {
        "fct-descr": "\u003cp\u003eA constructor will be encoded to an object with a single\n field named after the constructor tag (modified by the\n \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e) which maps to the encoded contents of\n the constructor.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "ObjectWithSingleField",
        "fct-source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
        "fct-type": "function",
        "title": "ObjectWithSingleField"
      },
      "index": {
        "description": "constructor will be encoded to an object with single field named after the constructor tag modified by the constructorTagModifier which maps to the encoded contents of the constructor",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "ObjectWithSingleField",
        "normalized": "",
        "package": "aeson",
        "partial": "Object With Single Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Options",
      "description": {
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Options",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "function",
        "title": "Options"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Options",
        "normalized": "",
        "package": "aeson",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:String",
      "description": {
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "String !Text",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "String",
        "normalized": "",
        "package": "aeson",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:Success",
      "description": {
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Success a",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Result",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "Success",
        "normalized": "",
        "package": "aeson",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:TaggedObject",
      "description": {
        "fct-descr": "\u003cp\u003eA constructor will be encoded to an object with a field\n \u003ccode\u003e\u003ca\u003etagFieldName\u003c/a\u003e\u003c/code\u003e which specifies the constructor tag (modified by\n the \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e). If the constructor is a record\n the encoded record fields will be unpacked into this object. So\n make sure that your record doesn't have a field with the same\n label as the \u003ccode\u003e\u003ca\u003etagFieldName\u003c/a\u003e\u003c/code\u003e. Otherwise the tag gets overwritten\n by the encoded value of that field! If the constructor is not a\n record the encoded constructor contents will be stored under\n the \u003ccode\u003e\u003ca\u003econtentsFieldName\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "TaggedObject",
        "fct-source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
        "fct-type": "function",
        "title": "TaggedObject"
      },
      "index": {
        "description": "constructor will be encoded to an object with field tagFieldName which specifies the constructor tag modified by the constructorTagModifier If the constructor is record the encoded record fields will be unpacked into this object So make sure that your record doesn have field with the same label as the tagFieldName Otherwise the tag gets overwritten by the encoded value of that field If the constructor is not record the encoded constructor contents will be stored under the contentsFieldName field",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "TaggedObject",
        "normalized": "",
        "package": "aeson",
        "partial": "Tagged Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:TwoElemArray",
      "description": {
        "fct-descr": "\u003cp\u003eA constructor will be encoded to a 2-element array where the\n first element is the tag of the constructor (modified by the\n \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e) and the second element the encoded\n contents of the constructor.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "TwoElemArray",
        "fct-source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
        "fct-type": "function",
        "title": "TwoElemArray"
      },
      "index": {
        "description": "constructor will be encoded to element array where the first element is the tag of the constructor modified by the constructorTagModifier and the second element the encoded contents of the constructor",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "TwoElemArray",
        "normalized": "",
        "package": "aeson",
        "partial": "Two Elem Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:allNullaryToStringTag",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e the constructors of a datatype, with \u003cem\u003eall\u003c/em\u003e\n nullary constructors, will be encoded to just a string with\n the constructor tag. If \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e the encoding will always\n follow the \u003ccode\u003e\u003ca\u003esumEncoding\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Bool",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "function",
        "title": "allNullaryToStringTag"
      },
      "index": {
        "description": "If True the constructors of datatype with all nullary constructors will be encoded to just string with the constructor tag If False the encoding will always follow the sumEncoding",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "allNullaryToStringTag",
        "normalized": "",
        "package": "aeson",
        "partial": "Nullary To String Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:constructorTagModifier",
      "description": {
        "fct-descr": "\u003cp\u003eFunction applied to constructor tags which could be handy\n for lower-casing them for example.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "function",
        "title": "constructorTagModifier"
      },
      "index": {
        "description": "Function applied to constructor tags which could be handy for lower-casing them for example",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "constructorTagModifier",
        "normalized": "String-\u003eString",
        "package": "aeson",
        "partial": "Tag Modifier",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:contentsFieldName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "String",
        "fct-source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
        "fct-type": "function",
        "title": "contentsFieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "contentsFieldName",
        "normalized": "",
        "package": "aeson",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:defaultOptions",
      "description": {
        "fct-descr": "\u003cp\u003eDefault encoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e\n { \u003ccode\u003e\u003ca\u003efieldLabelModifier\u003c/a\u003e\u003c/code\u003e      = id\n , \u003ccode\u003e\u003ca\u003econstructorTagModifier\u003c/a\u003e\u003c/code\u003e  = id\n , \u003ccode\u003e\u003ca\u003eallNullaryToStringTag\u003c/a\u003e\u003c/code\u003e   = True\n , \u003ccode\u003e\u003ca\u003eomitNothingFields\u003c/a\u003e\u003c/code\u003e       = False\n , \u003ccode\u003e\u003ca\u003esumEncoding\u003c/a\u003e\u003c/code\u003e             = \u003ccode\u003e\u003ca\u003edefaultTaggedObject\u003c/a\u003e\u003c/code\u003e\n }\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Options",
        "fct-source": "src/Data-Aeson-Types-Internal.html#defaultOptions",
        "fct-type": "function",
        "title": "defaultOptions"
      },
      "index": {
        "description": "Default encoding Options Options fieldLabelModifier id constructorTagModifier id allNullaryToStringTag True omitNothingFields False sumEncoding defaultTaggedObject",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "defaultOptions",
        "normalized": "",
        "package": "aeson",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:defaultTaggedObject",
      "description": {
        "fct-descr": "\u003cp\u003eDefault \u003ccode\u003e\u003ca\u003eTaggedObject\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eSumEncoding\u003c/a\u003e\u003c/code\u003e options:\n\u003c/p\u003e\u003cpre\u003e\n defaultTaggedObject = \u003ccode\u003e\u003ca\u003eTaggedObject\u003c/a\u003e\u003c/code\u003e\n                       { \u003ccode\u003e\u003ca\u003etagFieldName\u003c/a\u003e\u003c/code\u003e      = \"tag\"\n                       , \u003ccode\u003e\u003ca\u003econtentsFieldName\u003c/a\u003e\u003c/code\u003e = \"contents\"\n                       }\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "SumEncoding",
        "fct-source": "src/Data-Aeson-Types-Internal.html#defaultTaggedObject",
        "fct-type": "function",
        "title": "defaultTaggedObject"
      },
      "index": {
        "description": "Default TaggedObject SumEncoding options defaultTaggedObject TaggedObject tagFieldName tag contentsFieldName contents",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "defaultTaggedObject",
        "normalized": "",
        "package": "aeson",
        "partial": "Tagged Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:emptyArray",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty array.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Value",
        "fct-source": "src/Data-Aeson-Types-Internal.html#emptyArray",
        "fct-type": "function",
        "title": "emptyArray"
      },
      "index": {
        "description": "The empty array",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "emptyArray",
        "normalized": "",
        "package": "aeson",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:emptyObject",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty object.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Value",
        "fct-source": "src/Data-Aeson-Types-Internal.html#emptyObject",
        "fct-type": "function",
        "title": "emptyObject"
      },
      "index": {
        "description": "The empty object",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "emptyObject",
        "normalized": "",
        "package": "aeson",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:fieldLabelModifier",
      "description": {
        "fct-descr": "\u003cp\u003eFunction applied to field labels.\n Handy for removing common record prefixes for example.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "function",
        "title": "fieldLabelModifier"
      },
      "index": {
        "description": "Function applied to field labels Handy for removing common record prefixes for example",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "fieldLabelModifier",
        "normalized": "String-\u003eString",
        "package": "aeson",
        "partial": "Label Modifier",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:fromDotNetTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "UTCTime",
        "fct-source": "src/Data-Aeson-Types-Internal.html#DotNetTime",
        "fct-type": "function",
        "title": "fromDotNetTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "fromDotNetTime",
        "normalized": "",
        "package": "aeson",
        "partial": "Dot Net Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:fromJSON",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value from JSON, failing if the types do not match.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Value -\u003e Result a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#fromJSON",
        "fct-type": "function",
        "title": "fromJSON"
      },
      "index": {
        "description": "Convert value from JSON failing if the types do not match",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "fromJSON",
        "normalized": "Value-\u003eResult a",
        "package": "aeson",
        "partial": "JSON",
        "signature": "Value-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:gParseJSON",
      "description": {
        "fct-descr": "\u003cp\u003eThis method (applied to \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e) is used as the\n default generic implementation of \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Options -\u003e Value -\u003e Parser (f a)",
        "fct-source": "src/Data-Aeson-Types-Class.html#gParseJSON",
        "fct-type": "method",
        "title": "gParseJSON"
      },
      "index": {
        "description": "This method applied to defaultOptions is used as the default generic implementation of parseJSON",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "gParseJSON",
        "normalized": "Options-\u003eValue-\u003eParser(a b)",
        "package": "aeson",
        "partial": "Parse JSON",
        "signature": "Options-\u003eValue-\u003eParser(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:gToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eThis method (applied to \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e) is used as the\n default generic implementation of \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Options -\u003e f a -\u003e Value",
        "fct-source": "src/Data-Aeson-Types-Class.html#gToJSON",
        "fct-type": "method",
        "title": "gToJSON"
      },
      "index": {
        "description": "This method applied to defaultOptions is used as the default generic implementation of toJSON",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "gToJSON",
        "normalized": "Options-\u003ea b-\u003eValue",
        "package": "aeson",
        "partial": "To JSON",
        "signature": "Options-\u003ef a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:genericParseJSON",
      "description": {
        "fct-descr": "\u003cp\u003eA configurable generic JSON decoder. This function applied to\n \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e is used as the default for \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e when the\n type is an instance of \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Options -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Class.html#genericParseJSON",
        "fct-type": "function",
        "title": "genericParseJSON"
      },
      "index": {
        "description": "configurable generic JSON decoder This function applied to defaultOptions is used as the default for parseJSON when the type is an instance of Generic",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "genericParseJSON",
        "normalized": "Options-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Parse JSON",
        "signature": "Options-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:genericToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eA configurable generic JSON encoder. This function applied to\n \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e is used as the default for \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e when the type\n is an instance of \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Options -\u003e a -\u003e Value",
        "fct-source": "src/Data-Aeson-Types-Class.html#genericToJSON",
        "fct-type": "function",
        "title": "genericToJSON"
      },
      "index": {
        "description": "configurable generic JSON encoder This function applied to defaultOptions is used as the default for toJSON when the type is an instance of Generic",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "genericToJSON",
        "normalized": "Options-\u003ea-\u003eValue",
        "package": "aeson",
        "partial": "To JSON",
        "signature": "Options-\u003ea-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:modifyFailure",
      "description": {
        "fct-descr": "\u003cp\u003eIf the inner \u003ccode\u003eParser\u003c/code\u003e failed, modify the failure message using the\n provided function. This allows you to create more descriptive error messages.\n For example:\n\u003c/p\u003e\u003cpre\u003e parseJSON (Object o) = modifyFailure\n     (\"Parsing of the Foo value failed: \" ++)\n     (Foo \u003c$\u003e o .: \"someField\")\n\u003c/pre\u003e\u003cp\u003eSince 0.6.2.0\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "(String -\u003e String) -\u003e Parser a -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Internal.html#modifyFailure",
        "fct-type": "function",
        "title": "modifyFailure"
      },
      "index": {
        "description": "If the inner Parser failed modify the failure message using the provided function This allows you to create more descriptive error messages For example parseJSON Object modifyFailure Parsing of the Foo value failed Foo someField Since",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "modifyFailure",
        "normalized": "(String-\u003eString)-\u003eParser a-\u003eParser a",
        "package": "aeson",
        "partial": "Failure",
        "signature": "(String-\u003eString)-\u003eParser a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:object",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e from a list of name/value \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003es.  If duplicate\n keys arise, earlier keys and their associated values win.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "[Pair] -\u003e Value",
        "fct-source": "src/Data-Aeson-Types-Internal.html#object",
        "fct-type": "function",
        "title": "object"
      },
      "index": {
        "description": "Create Value from list of name value Pair If duplicate keys arise earlier keys and their associated values win",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "object",
        "normalized": "[Pair]-\u003eValue",
        "package": "aeson",
        "partial": "",
        "signature": "[Pair]-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:omitNothingFields",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e record fields with a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e value will be\n omitted from the resulting object. If \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e the resulting\n object will include those fields mapping to \u003ccode\u003enull\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Bool",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "function",
        "title": "omitNothingFields"
      },
      "index": {
        "description": "If True record fields with Nothing value will be omitted from the resulting object If False the resulting object will include those fields mapping to null",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "omitNothingFields",
        "normalized": "",
        "package": "aeson",
        "partial": "Nothing Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "(a -\u003e Parser b) -\u003e a -\u003e Result b",
        "fct-source": "src/Data-Aeson-Types-Internal.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Run Parser",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "parse",
        "normalized": "(a-\u003eParser b)-\u003ea-\u003eResult b",
        "package": "aeson",
        "partial": "",
        "signature": "(a-\u003eParser b)-\u003ea-\u003eResult b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:parseEither",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "(a -\u003e Parser b) -\u003e a -\u003e Either String b",
        "fct-source": "src/Data-Aeson-Types-Internal.html#parseEither",
        "fct-type": "function",
        "title": "parseEither"
      },
      "index": {
        "description": "Run Parser with an Either result type",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "parseEither",
        "normalized": "(a-\u003eParser b)-\u003ea-\u003eEither String b",
        "package": "aeson",
        "partial": "Either",
        "signature": "(a-\u003eParser b)-\u003ea-\u003eEither String b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:parseJSON",
      "description": {
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Class.html#parseJSON",
        "fct-type": "method",
        "title": "parseJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "parseJSON",
        "normalized": "Value-\u003eParser a",
        "package": "aeson",
        "partial": "JSON",
        "signature": "Value-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:parseMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "(a -\u003e Parser b) -\u003e a -\u003e Maybe b",
        "fct-source": "src/Data-Aeson-Types-Internal.html#parseMaybe",
        "fct-type": "function",
        "title": "parseMaybe"
      },
      "index": {
        "description": "Run Parser with Maybe result type",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "parseMaybe",
        "normalized": "(a-\u003eParser b)-\u003ea-\u003eMaybe b",
        "package": "aeson",
        "partial": "Maybe",
        "signature": "(a-\u003eParser b)-\u003ea-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:sumEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies how to encode constructors of a sum datatype.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "SumEncoding",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Options",
        "fct-type": "function",
        "title": "sumEncoding"
      },
      "index": {
        "description": "Specifies how to encode constructors of sum datatype",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "sumEncoding",
        "normalized": "",
        "package": "aeson",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:tagFieldName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "String",
        "fct-source": "src/Data-Aeson-Types-Internal.html#SumEncoding",
        "fct-type": "function",
        "title": "tagFieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "tagFieldName",
        "normalized": "",
        "package": "aeson",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:toJSON",
      "description": {
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "a -\u003e Value",
        "fct-source": "src/Data-Aeson-Types-Class.html#toJSON",
        "fct-type": "method",
        "title": "toJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "toJSON",
        "normalized": "a-\u003eValue",
        "package": "aeson",
        "partial": "JSON",
        "signature": "a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:typeMismatch",
      "description": {
        "fct-descr": "\u003cp\u003eFail parsing due to a type mismatch, with a descriptive message.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "String-\u003e Value-\u003e Parser a",
        "fct-type": "function",
        "title": "typeMismatch"
      },
      "index": {
        "description": "Fail parsing due to type mismatch with descriptive message",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "typeMismatch",
        "normalized": "String-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Mismatch",
        "signature": "String-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withArray",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithArray expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is an \u003ccode\u003eArray\u003c/code\u003e\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e (Array -\u003e Parser a) -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#withArray",
        "fct-type": "function",
        "title": "withArray"
      },
      "index": {
        "description": "withArray expected value applies to the Array when value is an Array and fails using typeMismatch expected otherwise",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "withArray",
        "normalized": "String-\u003e(Array-\u003eParser a)-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Array",
        "signature": "String-\u003e(Array-\u003eParser a)-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withBool",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithBool expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is a \u003ccode\u003eBool\u003c/code\u003e\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e (Bool -\u003e Parser a) -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#withBool",
        "fct-type": "function",
        "title": "withBool"
      },
      "index": {
        "description": "withBool expected value applies to the Bool when value is Bool and fails using typeMismatch expected otherwise",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "withBool",
        "normalized": "String-\u003e(Bool-\u003eParser a)-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Bool",
        "signature": "String-\u003e(Bool-\u003eParser a)-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withNumber",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use withScientific instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003ccode\u003ewithNumber expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e.\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e (Number -\u003e Parser a) -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#withNumber",
        "fct-type": "function",
        "title": "withNumber"
      },
      "index": {
        "description": "Deprecated Use withScientific instead withNumber expected value applies to the Number when value is Number and fails using typeMismatch expected otherwise",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "withNumber",
        "normalized": "String-\u003e(Number-\u003eParser a)-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Number",
        "signature": "String-\u003e(Number-\u003eParser a)-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withObject",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithObject expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is an \u003ccode\u003eObject\u003c/code\u003e\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e (Object -\u003e Parser a) -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#withObject",
        "fct-type": "function",
        "title": "withObject"
      },
      "index": {
        "description": "withObject expected value applies to the Object when value is an Object and fails using typeMismatch expected otherwise",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "withObject",
        "normalized": "String-\u003e(Object-\u003eParser a)-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Object",
        "signature": "String-\u003e(Object-\u003eParser a)-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withScientific",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithScientific expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eScientific\u003c/a\u003e\u003c/code\u003e number when \u003ccode\u003evalue\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e.\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e (Scientific -\u003e Parser a) -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#withScientific",
        "fct-type": "function",
        "title": "withScientific"
      },
      "index": {
        "description": "withScientific expected value applies to the Scientific number when value is Number and fails using typeMismatch expected otherwise",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "withScientific",
        "normalized": "String-\u003e(Scientific-\u003eParser a)-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Scientific",
        "signature": "String-\u003e(Scientific-\u003eParser a)-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson-Types.html#v:withText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithText expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is a \u003ccode\u003eString\u003c/code\u003e\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.Types",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e (Text -\u003e Parser a) -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#withText",
        "fct-type": "function",
        "title": "withText"
      },
      "index": {
        "description": "withText expected value applies to the Text when value is String and fails using typeMismatch expected otherwise",
        "hierarchy": "Data Aeson Types",
        "module": "Data.Aeson.Types",
        "name": "withText",
        "normalized": "String-\u003e(Text-\u003eParser a)-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Text",
        "signature": "String-\u003e(Text-\u003eParser a)-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes and functions for working efficiently with JSON data.\n\u003c/p\u003e\u003cp\u003e(A note on naming: in Greek mythology, Aeson was the father of Jason.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "module",
        "fct-source": "src/Data-Aeson.html",
        "fct-type": "module",
        "title": "Aeson"
      },
      "index": {
        "description": "Types and functions for working efficiently with JSON data note on naming in Greek mythology Aeson was the father of Jason",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "Aeson",
        "normalized": "",
        "package": "aeson",
        "partial": "Aeson",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:Array",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON \"array\" (sequence).\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "type",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Array",
        "fct-type": "type",
        "title": "Array"
      },
      "index": {
        "description": "JSON array sequence",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "Array",
        "normalized": "",
        "package": "aeson",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:DotNetTime",
      "description": {
        "fct-descr": "\u003cp\u003eA newtype wrapper for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e that uses the same non-standard\n serialization format as Microsoft .NET, whose \u003ccode\u003eSystem.DateTime\u003c/code\u003e\n type is by default serialized to JSON as in the following example:\n\u003c/p\u003e\u003cpre\u003e /Date(1302547608878)/\n\u003c/pre\u003e\u003cp\u003eThe number represents milliseconds since the Unix epoch.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Aeson-Types-Internal.html#DotNetTime",
        "fct-type": "newtype",
        "title": "DotNetTime"
      },
      "index": {
        "description": "newtype wrapper for UTCTime that uses the same non-standard serialization format as Microsoft NET whose System.DateTime type is by default serialized to JSON as in the following example Date The number represents milliseconds since the Unix epoch",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "DotNetTime",
        "normalized": "",
        "package": "aeson",
        "partial": "Dot Net Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:FromJSON",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted from JSON, with the possibility of\n failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003eempty\u003c/code\u003e, \u003ccode\u003emzero\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance FromJSON Coord where\n   parseJSON (\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e v) = Coord    \u003ccode\u003e\u003c$\u003e\u003c/code\u003e\n                          v \u003ccode\u003e.:\u003c/code\u003e \"x\" \u003ccode\u003e\u003c*\u003e\u003c/code\u003e\n                          v \u003ccode\u003e.:\u003c/code\u003e \"y\"\n\n-- A non-\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e value is of the wrong type, so use \u003ccode\u003emzero\u003c/code\u003e to fail.\n   parseJSON _          = \u003ccode\u003emzero\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003eText\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003efromJSON\u003c/code\u003e function that parses to\n any type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions, \u003ccode\u003eparseJSON\u003c/code\u003e will have a default\n generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use this, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your datatype and\n declare a \u003ccode\u003eFromJSON\u003c/code\u003e instance for your datatype without giving a definition\n for \u003ccode\u003eparseJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance FromJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic decoding using \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance FromJSON Coord where\n     parseJSON = \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "class",
        "fct-source": "src/Data-Aeson-Types-Class.html#FromJSON",
        "fct-type": "class",
        "title": "FromJSON"
      },
      "index": {
        "description": "type that can be converted from JSON with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if an Object is missing required key or the value is of the wrong type An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance FromJSON Coord where parseJSON Object Coord non Object value is of the wrong type so use mzero to fail parseJSON mzero Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your FromJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic fromJSON function that parses to any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions parseJSON will have default generic implementation To use this simply add deriving Generic clause to your datatype and declare FromJSON instance for your datatype without giving definition for parseJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance FromJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic decoding using genericParseJSON applied to your encoding decoding Options instance FromJSON Coord where parseJSON genericParseJSON defaultOptions",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "FromJSON",
        "normalized": "",
        "package": "aeson",
        "partial": "From JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:GFromJSON",
      "description": {
        "fct-descr": "\u003cp\u003eClass of generic representation types (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e) that can be converted from JSON.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "class",
        "fct-source": "src/Data-Aeson-Types-Class.html#GFromJSON",
        "fct-type": "class",
        "title": "GFromJSON"
      },
      "index": {
        "description": "Class of generic representation types Rep that can be converted from JSON",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "GFromJSON",
        "normalized": "",
        "package": "aeson",
        "partial": "GFrom JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:GToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eClass of generic representation types (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e) that can be converted to JSON.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "class",
        "fct-source": "src/Data-Aeson-Types-Class.html#GToJSON",
        "fct-type": "class",
        "title": "GToJSON"
      },
      "index": {
        "description": "Class of generic representation types Rep that can be converted to JSON",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "GToJSON",
        "normalized": "",
        "package": "aeson",
        "partial": "GTo JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON \"object\" (key/value map).\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "type",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Object",
        "fct-type": "type",
        "title": "Object"
      },
      "index": {
        "description": "JSON object key value map",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "Object",
        "normalized": "",
        "package": "aeson",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of running a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "data",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "The result of running Parser",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "Result",
        "normalized": "",
        "package": "aeson",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:ToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted to JSON.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance ToJSON Coord where\n   toJSON (Coord x y) = \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e [\"x\" \u003ccode\u003e.=\u003c/code\u003e x, \"y\" \u003ccode\u003e.=\u003c/code\u003e y]\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003eText\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003etoJSON\u003c/code\u003e function that accepts any\n type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions (GHC 7.2 and newer),\n \u003ccode\u003etoJSON\u003c/code\u003e will have a default generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use the latter option, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your\n datatype and declare a \u003ccode\u003eToJSON\u003c/code\u003e instance for your datatype without giving a\n definition for \u003ccode\u003etoJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance ToJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic encoding using \u003ccode\u003e\u003ca\u003egenericToJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance ToJSON Coord where\n     toJSON = \u003ccode\u003e\u003ca\u003egenericToJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "class",
        "fct-source": "src/Data-Aeson-Types-Class.html#ToJSON",
        "fct-type": "class",
        "title": "ToJSON"
      },
      "index": {
        "description": "type that can be converted to JSON An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance ToJSON Coord where toJSON Coord object Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your ToJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic toJSON function that accepts any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions GHC and newer toJSON will have default generic implementation To use the latter option simply add deriving Generic clause to your datatype and declare ToJSON instance for your datatype without giving definition for toJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance ToJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic encoding using genericToJSON applied to your encoding decoding Options instance ToJSON Coord where toJSON genericToJSON defaultOptions",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "ToJSON",
        "normalized": "",
        "package": "aeson",
        "partial": "To JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON value represented as a Haskell value.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "data",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "JSON value represented as Haskell value",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "Value",
        "normalized": "",
        "package": "aeson",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:.-33--61-",
      "description": {
        "fct-descr": "\u003cp\u003eHelper for use in combination with \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e to provide default\n values for optional JSON object fields.\n\u003c/p\u003e\u003cp\u003eThis combinator is most useful if the key and value can be absent\n from an object without affecting its validity and we know a default\n value to assign in that case.  If the key and value are mandatory,\n use '(.:)' instead.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e v1 \u003c- o \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e \"opt_field_with_dfl\" .!= \"default_val\"\n v2 \u003c- o \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e  \"mandatory_field\"\n v3 \u003c- o \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e \"opt_field2\"\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Parser (Maybe a) -\u003e a -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#.%21%3D",
        "fct-type": "function",
        "title": "(.!=)"
      },
      "index": {
        "description": "Helper for use in combination with to provide default values for optional JSON object fields This combinator is most useful if the key and value can be absent from an object without affecting its validity and we know default value to assign in that case If the key and value are mandatory use instead Example usage v1 opt field with dfl default val v2 mandatory field v3 opt field2",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "(.!=) .!=",
        "normalized": "Parser(Maybe a)-\u003ea-\u003eParser a",
        "package": "aeson",
        "partial": "",
        "signature": "Parser(Maybe a)-\u003ea-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:.-61-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e from a key and a value.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Text -\u003e a -\u003e Pair",
        "fct-source": "src/Data-Aeson-Types-Instances.html#.%3D",
        "fct-type": "function",
        "title": "(.=)"
      },
      "index": {
        "description": "Construct Pair from key and value",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "(.=) .=",
        "normalized": "Text-\u003ea-\u003ePair",
        "package": "aeson",
        "partial": "",
        "signature": "Text-\u003ea-\u003ePair"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:.:",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the value associated with the given key of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the key is not present or the value cannot\n be converted to the desired type.\n\u003c/p\u003e\u003cp\u003eThis accessor is appropriate if the key and value \u003cem\u003emust\u003c/em\u003e be present\n in an object for it to be valid.  If the key and value are\n optional, use '(.:?)' instead.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Object -\u003e Text -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#.%3A",
        "fct-type": "function",
        "title": "(.:)"
      },
      "index": {
        "description": "Retrieve the value associated with the given key of an Object The result is empty if the key is not present or the value cannot be converted to the desired type This accessor is appropriate if the key and value must be present in an object for it to be valid If the key and value are optional use instead",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "(.:) .:",
        "normalized": "Object-\u003eText-\u003eParser a",
        "package": "aeson",
        "partial": "",
        "signature": "Object-\u003eText-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:.:-63-",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the value associated with the given key of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not present, or \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if\n the value cannot be converted to the desired type.\n\u003c/p\u003e\u003cp\u003eThis accessor is most useful if the key and value can be absent\n from an object without affecting its validity.  If the key and\n value are mandatory, use '(.:)' instead.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Object -\u003e Text -\u003e Parser (Maybe a)",
        "fct-source": "src/Data-Aeson-Types-Instances.html#.%3A%3F",
        "fct-type": "function",
        "title": "(.:?)"
      },
      "index": {
        "description": "Retrieve the value associated with the given key of an Object The result is Nothing if the key is not present or empty if the value cannot be converted to the desired type This accessor is most useful if the key and value can be absent from an object without affecting its validity If the key and value are mandatory use instead",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "(.:?) .:?",
        "normalized": "Object-\u003eText-\u003eParser(Maybe a)",
        "package": "aeson",
        "partial": "",
        "signature": "Object-\u003eText-\u003eParser(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Array",
      "description": {
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Array !Array",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "Array",
        "normalized": "",
        "package": "aeson",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Bool",
      "description": {
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Bool !Bool",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "Bool",
        "normalized": "",
        "package": "aeson",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:DotNetTime",
      "description": {
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "DotNetTime",
        "fct-source": "src/Data-Aeson-Types-Internal.html#DotNetTime",
        "fct-type": "function",
        "title": "DotNetTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "DotNetTime",
        "normalized": "",
        "package": "aeson",
        "partial": "Dot Net Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Error",
      "description": {
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Error String",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Result",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "Error",
        "normalized": "",
        "package": "aeson",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Null",
      "description": {
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Null",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "Null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "Null",
        "normalized": "",
        "package": "aeson",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Number",
      "description": {
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Number !Scientific",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "Number",
        "normalized": "",
        "package": "aeson",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Object",
      "description": {
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Object !Object",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "Object"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "Object",
        "normalized": "",
        "package": "aeson",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:String",
      "description": {
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "String !Text",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Value",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "String",
        "normalized": "",
        "package": "aeson",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:Success",
      "description": {
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Success a",
        "fct-source": "src/Data-Aeson-Types-Internal.html#Result",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "Success",
        "normalized": "",
        "package": "aeson",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently deserialize a JSON value from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThe input must consist solely of a JSON document, with no trailing\n data except for whitespace. This restriction is necessary to ensure\n that if data is being lazily read from a file handle, the file\n handle will be closed in a timely fashion once the document has\n been parsed.\n\u003c/p\u003e\u003cp\u003eThis function parses immediately, but defers conversion.  See\n \u003ccode\u003e\u003ca\u003ejson\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "ByteString -\u003e Maybe a",
        "fct-source": "src/Data-Aeson.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Efficiently deserialize JSON value from lazy ByteString If this fails due to incomplete or invalid input Nothing is returned The input must consist solely of JSON document with no trailing data except for whitespace This restriction is necessary to ensure that if data is being lazily read from file handle the file handle will be closed in timely fashion once the document has been parsed This function parses immediately but defers conversion See json for details",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "decode",
        "normalized": "ByteString-\u003eMaybe a",
        "package": "aeson",
        "partial": "",
        "signature": "ByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:decode-39-",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently deserialize a JSON value from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThe input must consist solely of a JSON document, with no trailing\n data except for whitespace. This restriction is necessary to ensure\n that if data is being lazily read from a file handle, the file\n handle will be closed in a timely fashion once the document has\n been parsed.\n\u003c/p\u003e\u003cp\u003eThis function parses and performs conversion immediately.  See\n \u003ccode\u003e\u003ca\u003ejson'\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "ByteString -\u003e Maybe a",
        "fct-source": "src/Data-Aeson.html#decode%27",
        "fct-type": "function",
        "title": "decode'"
      },
      "index": {
        "description": "Efficiently deserialize JSON value from lazy ByteString If this fails due to incomplete or invalid input Nothing is returned The input must consist solely of JSON document with no trailing data except for whitespace This restriction is necessary to ensure that if data is being lazily read from file handle the file handle will be closed in timely fashion once the document has been parsed This function parses and performs conversion immediately See json for details",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "decode'",
        "normalized": "ByteString-\u003eMaybe a",
        "package": "aeson",
        "partial": "",
        "signature": "ByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:decodeStrict",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently deserialize a JSON value from a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThe input must consist solely of a JSON document, with no trailing\n data except for whitespace.\n\u003c/p\u003e\u003cp\u003eThis function parses immediately, but defers conversion.  See\n \u003ccode\u003e\u003ca\u003ejson\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "ByteString -\u003e Maybe a",
        "fct-source": "src/Data-Aeson.html#decodeStrict",
        "fct-type": "function",
        "title": "decodeStrict"
      },
      "index": {
        "description": "Efficiently deserialize JSON value from strict ByteString If this fails due to incomplete or invalid input Nothing is returned The input must consist solely of JSON document with no trailing data except for whitespace This function parses immediately but defers conversion See json for details",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "decodeStrict",
        "normalized": "ByteString-\u003eMaybe a",
        "package": "aeson",
        "partial": "Strict",
        "signature": "ByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:decodeStrict-39-",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently deserialize a JSON value from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThe input must consist solely of a JSON document, with no trailing\n data except for whitespace.\n\u003c/p\u003e\u003cp\u003eThis function parses and performs conversion immediately.  See\n \u003ccode\u003e\u003ca\u003ejson'\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "ByteString -\u003e Maybe a",
        "fct-source": "src/Data-Aeson.html#decodeStrict%27",
        "fct-type": "function",
        "title": "decodeStrict'"
      },
      "index": {
        "description": "Efficiently deserialize JSON value from lazy ByteString If this fails due to incomplete or invalid input Nothing is returned The input must consist solely of JSON document with no trailing data except for whitespace This function parses and performs conversion immediately See json for details",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "decodeStrict'",
        "normalized": "ByteString-\u003eMaybe a",
        "package": "aeson",
        "partial": "Strict'",
        "signature": "ByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:eitherDecode",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e but returns an error message when decoding fails.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "ByteString -\u003e Either String a",
        "fct-source": "src/Data-Aeson.html#eitherDecode",
        "fct-type": "function",
        "title": "eitherDecode"
      },
      "index": {
        "description": "Like decode but returns an error message when decoding fails",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "eitherDecode",
        "normalized": "ByteString-\u003eEither String a",
        "package": "aeson",
        "partial": "Decode",
        "signature": "ByteString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:eitherDecode-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecode'\u003c/a\u003e\u003c/code\u003e but returns an error message when decoding fails.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "ByteString -\u003e Either String a",
        "fct-source": "src/Data-Aeson.html#eitherDecode%27",
        "fct-type": "function",
        "title": "eitherDecode'"
      },
      "index": {
        "description": "Like decode but returns an error message when decoding fails",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "eitherDecode'",
        "normalized": "ByteString-\u003eEither String a",
        "package": "aeson",
        "partial": "Decode'",
        "signature": "ByteString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:eitherDecodeStrict",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeStrict\u003c/a\u003e\u003c/code\u003e but returns an error message when decoding fails.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "ByteString -\u003e Either String a",
        "fct-source": "src/Data-Aeson.html#eitherDecodeStrict",
        "fct-type": "function",
        "title": "eitherDecodeStrict"
      },
      "index": {
        "description": "Like decodeStrict but returns an error message when decoding fails",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "eitherDecodeStrict",
        "normalized": "ByteString-\u003eEither String a",
        "package": "aeson",
        "partial": "Decode Strict",
        "signature": "ByteString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:eitherDecodeStrict-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecodeStrict'\u003c/a\u003e\u003c/code\u003e but returns an error message when decoding fails.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "ByteString -\u003e Either String a",
        "fct-source": "src/Data-Aeson.html#eitherDecodeStrict%27",
        "fct-type": "function",
        "title": "eitherDecodeStrict'"
      },
      "index": {
        "description": "Like decodeStrict but returns an error message when decoding fails",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "eitherDecodeStrict'",
        "normalized": "ByteString-\u003eEither String a",
        "package": "aeson",
        "partial": "Decode Strict'",
        "signature": "ByteString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e as a UTF-8 encoded \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Aeson-Encode.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode JSON Value as UTF-8 encoded ByteString",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "encode",
        "normalized": "a-\u003eByteString",
        "package": "aeson",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:fromDotNetTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "UTCTime",
        "fct-source": "src/Data-Aeson-Types-Internal.html#DotNetTime",
        "fct-type": "function",
        "title": "fromDotNetTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "fromDotNetTime",
        "normalized": "",
        "package": "aeson",
        "partial": "Dot Net Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:fromJSON",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value from JSON, failing if the types do not match.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Value -\u003e Result a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#fromJSON",
        "fct-type": "function",
        "title": "fromJSON"
      },
      "index": {
        "description": "Convert value from JSON failing if the types do not match",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "fromJSON",
        "normalized": "Value-\u003eResult a",
        "package": "aeson",
        "partial": "JSON",
        "signature": "Value-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:gParseJSON",
      "description": {
        "fct-descr": "\u003cp\u003eThis method (applied to \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e) is used as the\n default generic implementation of \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Options -\u003e Value -\u003e Parser (f a)",
        "fct-source": "src/Data-Aeson-Types-Class.html#gParseJSON",
        "fct-type": "method",
        "title": "gParseJSON"
      },
      "index": {
        "description": "This method applied to defaultOptions is used as the default generic implementation of parseJSON",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "gParseJSON",
        "normalized": "Options-\u003eValue-\u003eParser(a b)",
        "package": "aeson",
        "partial": "Parse JSON",
        "signature": "Options-\u003eValue-\u003eParser(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:gToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eThis method (applied to \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e) is used as the\n default generic implementation of \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Options -\u003e f a -\u003e Value",
        "fct-source": "src/Data-Aeson-Types-Class.html#gToJSON",
        "fct-type": "method",
        "title": "gToJSON"
      },
      "index": {
        "description": "This method applied to defaultOptions is used as the default generic implementation of toJSON",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "gToJSON",
        "normalized": "Options-\u003ea b-\u003eValue",
        "package": "aeson",
        "partial": "To JSON",
        "signature": "Options-\u003ef a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:genericParseJSON",
      "description": {
        "fct-descr": "\u003cp\u003eA configurable generic JSON decoder. This function applied to\n \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e is used as the default for \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e when the\n type is an instance of \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Options -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Class.html#genericParseJSON",
        "fct-type": "function",
        "title": "genericParseJSON"
      },
      "index": {
        "description": "configurable generic JSON decoder This function applied to defaultOptions is used as the default for parseJSON when the type is an instance of Generic",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "genericParseJSON",
        "normalized": "Options-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Parse JSON",
        "signature": "Options-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:genericToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eA configurable generic JSON encoder. This function applied to\n \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e is used as the default for \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e when the type\n is an instance of \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Options -\u003e a -\u003e Value",
        "fct-source": "src/Data-Aeson-Types-Class.html#genericToJSON",
        "fct-type": "function",
        "title": "genericToJSON"
      },
      "index": {
        "description": "configurable generic JSON encoder This function applied to defaultOptions is used as the default for toJSON when the type is an instance of Generic",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "genericToJSON",
        "normalized": "Options-\u003ea-\u003eValue",
        "package": "aeson",
        "partial": "To JSON",
        "signature": "Options-\u003ea-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:json",
      "description": {
        "fct-descr": "\u003cp\u003eParse a top-level JSON value.  This must be either an object or\n an array, per RFC 4627.\n\u003c/p\u003e\u003cp\u003eThe conversion of a parsed value to a Haskell value is deferred\n until the Haskell value is needed.  This may improve performance if\n only a subset of the results of conversions are needed, but at a\n cost in thunk allocation.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Parser Value",
        "fct-source": "src/Data-Aeson-Parser-Internal.html#json",
        "fct-type": "function",
        "title": "json"
      },
      "index": {
        "description": "Parse top-level JSON value This must be either an object or an array per RFC The conversion of parsed value to Haskell value is deferred until the Haskell value is needed This may improve performance if only subset of the results of conversions are needed but at cost in thunk allocation",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "json",
        "normalized": "",
        "package": "aeson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:json-39-",
      "description": {
        "fct-descr": "\u003cp\u003eParse a top-level JSON value.  This must be either an object or\n an array, per RFC 4627.\n\u003c/p\u003e\u003cp\u003eThis is a strict version of \u003ccode\u003e\u003ca\u003ejson\u003c/a\u003e\u003c/code\u003e which avoids building up thunks\n during parsing; it performs all conversions immediately.  Prefer\n this version if most of the JSON data needs to be accessed.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Parser Value",
        "fct-source": "src/Data-Aeson-Parser-Internal.html#json%27",
        "fct-type": "function",
        "title": "json'"
      },
      "index": {
        "description": "Parse top-level JSON value This must be either an object or an array per RFC This is strict version of json which avoids building up thunks during parsing it performs all conversions immediately Prefer this version if most of the JSON data needs to be accessed",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "json'",
        "normalized": "",
        "package": "aeson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:object",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e from a list of name/value \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003es.  If duplicate\n keys arise, earlier keys and their associated values win.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "[Pair] -\u003e Value",
        "fct-source": "src/Data-Aeson-Types-Internal.html#object",
        "fct-type": "function",
        "title": "object"
      },
      "index": {
        "description": "Create Value from list of name value Pair If duplicate keys arise earlier keys and their associated values win",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "object",
        "normalized": "[Pair]-\u003eValue",
        "package": "aeson",
        "partial": "",
        "signature": "[Pair]-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:parseJSON",
      "description": {
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Class.html#parseJSON",
        "fct-type": "method",
        "title": "parseJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "parseJSON",
        "normalized": "Value-\u003eParser a",
        "package": "aeson",
        "partial": "JSON",
        "signature": "Value-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:toJSON",
      "description": {
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "a -\u003e Value",
        "fct-source": "src/Data-Aeson-Types-Class.html#toJSON",
        "fct-type": "method",
        "title": "toJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "toJSON",
        "normalized": "a-\u003eValue",
        "package": "aeson",
        "partial": "JSON",
        "signature": "a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:withArray",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithArray expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is an \u003ccode\u003eArray\u003c/code\u003e\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e (Array -\u003e Parser a) -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#withArray",
        "fct-type": "function",
        "title": "withArray"
      },
      "index": {
        "description": "withArray expected value applies to the Array when value is an Array and fails using typeMismatch expected otherwise",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "withArray",
        "normalized": "String-\u003e(Array-\u003eParser a)-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Array",
        "signature": "String-\u003e(Array-\u003eParser a)-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:withBool",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithBool expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is a \u003ccode\u003eBool\u003c/code\u003e\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e (Bool -\u003e Parser a) -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#withBool",
        "fct-type": "function",
        "title": "withBool"
      },
      "index": {
        "description": "withBool expected value applies to the Bool when value is Bool and fails using typeMismatch expected otherwise",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "withBool",
        "normalized": "String-\u003e(Bool-\u003eParser a)-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Bool",
        "signature": "String-\u003e(Bool-\u003eParser a)-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:withNumber",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use withScientific instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003ccode\u003ewithNumber expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e.\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e (Number -\u003e Parser a) -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#withNumber",
        "fct-type": "function",
        "title": "withNumber"
      },
      "index": {
        "description": "Deprecated Use withScientific instead withNumber expected value applies to the Number when value is Number and fails using typeMismatch expected otherwise",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "withNumber",
        "normalized": "String-\u003e(Number-\u003eParser a)-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Number",
        "signature": "String-\u003e(Number-\u003eParser a)-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:withObject",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithObject expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is an \u003ccode\u003eObject\u003c/code\u003e\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e (Object -\u003e Parser a) -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#withObject",
        "fct-type": "function",
        "title": "withObject"
      },
      "index": {
        "description": "withObject expected value applies to the Object when value is an Object and fails using typeMismatch expected otherwise",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "withObject",
        "normalized": "String-\u003e(Object-\u003eParser a)-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Object",
        "signature": "String-\u003e(Object-\u003eParser a)-\u003eValue-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson/docs/Data-Aeson.html#v:withText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewithText expected f value\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003evalue\u003c/code\u003e is a \u003ccode\u003eString\u003c/code\u003e\n   and fails using \u003ccode\u003e\u003ccode\u003e\u003ca\u003etypeMismatch\u003c/a\u003e\u003c/code\u003e expected\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson",
        "fct-package": "aeson",
        "fct-signature": "String -\u003e (Text -\u003e Parser a) -\u003e Value -\u003e Parser a",
        "fct-source": "src/Data-Aeson-Types-Instances.html#withText",
        "fct-type": "function",
        "title": "withText"
      },
      "index": {
        "description": "withText expected value applies to the Text when value is String and fails using typeMismatch expected otherwise",
        "hierarchy": "Data Aeson",
        "module": "Data.Aeson",
        "name": "withText",
        "normalized": "String-\u003e(Text-\u003eParser a)-\u003eValue-\u003eParser a",
        "package": "aeson",
        "partial": "Text",
        "signature": "String-\u003e(Text-\u003eParser a)-\u003eValue-\u003eParser a"
      }
    }
  }
]