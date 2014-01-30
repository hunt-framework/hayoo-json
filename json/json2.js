[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Blaze.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient build ByteString from \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e with escaped string.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eFor example - use in YESOD:\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e\n    import Yesod\n    import Data.JSON2       as JSON\n    import Data.JSON2.Blaze as JSON\n    import Blaze.ByteString.Builder (toLazyByteString)\n    --\n    toRepJson :: ToJson a =\u003e a -\u003e RepJson\n    toRepJson =  RepJson . toContent . toLazyByteString . (JSON.blazeJson) . (JSON.toJson)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.JSON2.Blaze",
        "fct-package": "json2",
        "fct-signature": "module",
        "fct-source": "src/Data-JSON2-Blaze.html",
        "fct-type": "module",
        "title": "Blaze"
      },
      "index": {
        "description": "Efficient build ByteString from Json with escaped string For example use in YESOD import Yesod import Data.JSON2 as JSON import Data.JSON2.Blaze as JSON import Blaze.ByteString.Builder toLazyByteString toRepJson ToJson RepJson toRepJson RepJson toContent toLazyByteString JSON.blazeJson JSON.toJson",
        "hierarchy": "Data JSON2 Blaze",
        "module": "Data.JSON2.Blaze",
        "name": "Blaze",
        "normalized": "",
        "package": "json2",
        "partial": "Blaze",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Blaze.html#v:blazeJson",
      "description": {
        "fct-module": "Data.JSON2.Blaze",
        "fct-package": "json2",
        "fct-signature": "Json -\u003e Builder",
        "fct-source": "src/Data-JSON2-Blaze.html#blazeJson",
        "fct-type": "function",
        "title": "blazeJson"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2 Blaze",
        "module": "Data.JSON2.Blaze",
        "name": "blazeJson",
        "normalized": "Json-\u003eBuilder",
        "package": "json2",
        "partial": "Json",
        "signature": "Json-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Instances-Time.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides Instances classes \u003ccode\u003e\u003ca\u003eToJson\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromJson\u003c/a\u003e\u003c/code\u003e for Time.\n\u003c/p\u003e\u003cp\u003eTime transforms to JSON as: \n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e              [\"2011\", \"04\", \"03\"]\n    \u003ccode\u003e\u003ca\u003eTimeOfDay\u003c/a\u003e\u003c/code\u003e        [\"13\", \"12\", \"47\", \".244649\"]\n    \u003ccode\u003e\u003ca\u003eTimeZone\u003c/a\u003e\u003c/code\u003e         \"EEST\"\n    \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e        [\"2011\", \"04\", \"03\", \"13\", \"12\", \"47\", \".244649\"]\n    \u003ccode\u003e\u003ca\u003eZonedTime\u003c/a\u003e\u003c/code\u003e        [\"2011\", \"04\", \"03\", \"13\", \"12\", \"47\", \".244649\", \"EEST\"]\n    \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e          [\"2011\", \"04\", \"03\", \"10\", \"12\", \"47\", \".244777\", \"UTC\"]\n    \u003ccode\u003e\u003ca\u003eNominalDiffTime\u003c/a\u003e\u003c/code\u003e  1.301825863528051e9\n    \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e        1.301825863528051e9\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.JSON2.Instances.Time",
        "fct-package": "json2",
        "fct-signature": "module",
        "fct-source": "src/Data-JSON2-Instances-Time.html",
        "fct-type": "module",
        "title": "Time"
      },
      "index": {
        "description": "This module provides Instances classes ToJson and FromJson for Time Time transforms to JSON as Day TimeOfDay TimeZone EEST LocalTime ZonedTime EEST UTCTime UTC NominalDiffTime e9 POSIXTime e9",
        "hierarchy": "Data JSON2 Instances Time",
        "module": "Data.JSON2.Instances.Time",
        "name": "Time",
        "normalized": "",
        "package": "json2",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#",
      "description": {
        "fct-module": "Data.JSON2.Internal",
        "fct-package": "json2",
        "fct-signature": "module",
        "fct-source": "src/Data-JSON2-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2 Internal",
        "module": "Data.JSON2.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "json2",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#t:ConvError",
      "description": {
        "fct-module": "Data.JSON2.Internal",
        "fct-package": "json2",
        "fct-signature": "data",
        "fct-source": "src/Data-JSON2-Internal.html#ConvError",
        "fct-type": "data",
        "title": "ConvError"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2 Internal",
        "module": "Data.JSON2.Internal",
        "name": "ConvError",
        "normalized": "",
        "package": "json2",
        "partial": "Conv Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#t:ConvResult",
      "description": {
        "fct-module": "Data.JSON2.Internal",
        "fct-package": "json2",
        "fct-signature": "type",
        "fct-source": "src/Data-JSON2-Internal.html#ConvResult",
        "fct-type": "type",
        "title": "ConvResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2 Internal",
        "module": "Data.JSON2.Internal",
        "name": "ConvResult",
        "normalized": "",
        "package": "json2",
        "partial": "Conv Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#v:ConvError",
      "description": {
        "fct-module": "Data.JSON2.Internal",
        "fct-package": "json2",
        "fct-signature": "ConvError String String String String",
        "fct-source": "src/Data-JSON2-Internal.html#ConvError",
        "fct-type": "function",
        "title": "ConvError"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2 Internal",
        "module": "Data.JSON2.Internal",
        "name": "ConvError",
        "normalized": "",
        "package": "json2",
        "partial": "Conv Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#v:checkBoundsEnum",
      "description": {
        "fct-descr": "\u003cp\u003eConversion \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e number to  \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e values with check bounds.\n checkBoundsEnum (toEnum . round)\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Internal",
        "fct-package": "json2",
        "fct-signature": "(Rational -\u003e a) -\u003e Rational -\u003e ConvResult a",
        "fct-source": "src/Data-JSON2-Internal.html#checkBoundsEnum",
        "fct-type": "function",
        "title": "checkBoundsEnum"
      },
      "index": {
        "description": "Conversion Rational number to Bounded values with check bounds checkBoundsEnum toEnum round",
        "hierarchy": "Data JSON2 Internal",
        "module": "Data.JSON2.Internal",
        "name": "checkBoundsEnum",
        "normalized": "(Rational-\u003ea)-\u003eRational-\u003eConvResult a",
        "package": "json2",
        "partial": "Bounds Enum",
        "signature": "(Rational-\u003ea)-\u003eRational-\u003eConvResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#v:checkBoundsIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eConversion \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e number to \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e number with check bounds.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Internal",
        "fct-package": "json2",
        "fct-signature": "(Rational -\u003e a) -\u003e Rational -\u003e ConvResult a",
        "fct-source": "src/Data-JSON2-Internal.html#checkBoundsIntegral",
        "fct-type": "function",
        "title": "checkBoundsIntegral"
      },
      "index": {
        "description": "Conversion Rational number to Integral number with check bounds",
        "hierarchy": "Data JSON2 Internal",
        "module": "Data.JSON2.Internal",
        "name": "checkBoundsIntegral",
        "normalized": "(Rational-\u003ea)-\u003eRational-\u003eConvResult a",
        "package": "json2",
        "partial": "Bounds Integral",
        "signature": "(Rational-\u003ea)-\u003eRational-\u003eConvResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#v:checkInfinite",
      "description": {
        "fct-descr": "\u003cp\u003eConversion \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e values with check infinity.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Internal",
        "fct-package": "json2",
        "fct-signature": "(Rational -\u003e a) -\u003e Rational -\u003e ConvResult a",
        "fct-source": "src/Data-JSON2-Internal.html#checkInfinite",
        "fct-type": "function",
        "title": "checkInfinite"
      },
      "index": {
        "description": "Conversion Rational to RealFloat values with check infinity",
        "hierarchy": "Data JSON2 Internal",
        "module": "Data.JSON2.Internal",
        "name": "checkInfinite",
        "normalized": "(Rational-\u003ea)-\u003eRational-\u003eConvResult a",
        "package": "json2",
        "partial": "Infinite",
        "signature": "(Rational-\u003ea)-\u003eRational-\u003eConvResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#v:mkError",
      "description": {
        "fct-descr": "\u003cp\u003eCreate  conversion error.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Internal",
        "fct-package": "json2",
        "fct-signature": "a -\u003e ConvResult b",
        "fct-source": "src/Data-JSON2-Internal.html#mkError",
        "fct-type": "function",
        "title": "mkError"
      },
      "index": {
        "description": "Create conversion error",
        "hierarchy": "Data JSON2 Internal",
        "module": "Data.JSON2.Internal",
        "name": "mkError",
        "normalized": "a-\u003eConvResult b",
        "package": "json2",
        "partial": "Error",
        "signature": "a-\u003eConvResult b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#v:mkError-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCreate  conversion error with message.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Internal",
        "fct-package": "json2",
        "fct-signature": "String -\u003e a -\u003e ConvResult b",
        "fct-source": "src/Data-JSON2-Internal.html#mkError%27",
        "fct-type": "function",
        "title": "mkError'"
      },
      "index": {
        "description": "Create conversion error with message",
        "hierarchy": "Data JSON2 Internal",
        "module": "Data.JSON2.Internal",
        "name": "mkError'",
        "normalized": "String-\u003ea-\u003eConvResult b",
        "package": "json2",
        "partial": "Error'",
        "signature": "String-\u003ea-\u003eConvResult b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Parser.html#",
      "description": {
        "fct-module": "Data.JSON2.Parser",
        "fct-package": "json2",
        "fct-signature": "module",
        "fct-source": "src/Data-JSON2-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2 Parser",
        "module": "Data.JSON2.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "json2",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Parser.html#v:encodeJson",
      "description": {
        "fct-descr": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Parser",
        "fct-package": "json2",
        "fct-signature": "String -\u003e Json",
        "fct-source": "src/Data-JSON2-Parser.html#encodeJson",
        "fct-type": "function",
        "title": "encodeJson"
      },
      "index": {
        "description": "Encode String to Json",
        "hierarchy": "Data JSON2 Parser",
        "module": "Data.JSON2.Parser",
        "name": "encodeJson",
        "normalized": "String-\u003eJson",
        "package": "json2",
        "partial": "Json",
        "signature": "String-\u003eJson"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Parser.html#v:parseJson",
      "description": {
        "fct-descr": "\u003cp\u003eParses JSON string.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Parser",
        "fct-package": "json2",
        "fct-signature": "String -\u003e Either ParseError Json",
        "fct-source": "src/Data-JSON2-Parser.html#parseJson",
        "fct-type": "function",
        "title": "parseJson"
      },
      "index": {
        "description": "Parses JSON string",
        "hierarchy": "Data JSON2 Parser",
        "module": "Data.JSON2.Parser",
        "name": "parseJson",
        "normalized": "String-\u003eEither ParseError Json",
        "package": "json2",
        "partial": "Json",
        "signature": "String-\u003eEither ParseError Json"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Pretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass and Instances for pretty printing Your data.\n\u003c/p\u003e\u003cp\u003eMinimal definition for instances \u003ccode\u003ePretty\u003c/code\u003e  - method \u003ccode\u003epp\u003c/code\u003e . \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.JSON2.Pretty",
        "fct-package": "json2",
        "fct-signature": "module",
        "fct-source": "src/Data-JSON2-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "Class and Instances for pretty printing Your data Minimal definition for instances Pretty method pp",
        "hierarchy": "Data JSON2 Pretty",
        "module": "Data.JSON2.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "json2",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Pretty.html#t:Pretty",
      "description": {
        "fct-module": "Data.JSON2.Pretty",
        "fct-package": "json2",
        "fct-signature": "class",
        "fct-source": "src/Data-JSON2-Pretty.html#Pretty",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2 Pretty",
        "module": "Data.JSON2.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "json2",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Pretty.html#v:pp",
      "description": {
        "fct-module": "Data.JSON2.Pretty",
        "fct-package": "json2",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Data-JSON2-Pretty.html#pp",
        "fct-type": "method",
        "title": "pp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2 Pretty",
        "module": "Data.JSON2.Pretty",
        "name": "pp",
        "normalized": "a-\u003eDoc",
        "package": "json2",
        "partial": "",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Pretty.html#v:pprint",
      "description": {
        "fct-module": "Data.JSON2.Pretty",
        "fct-package": "json2",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-JSON2-Pretty.html#pprint",
        "fct-type": "method",
        "title": "pprint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2 Pretty",
        "module": "Data.JSON2.Pretty",
        "name": "pprint",
        "normalized": "a-\u003eString",
        "package": "json2",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSee also: \u003ca\u003ehttp://www.haskell.org/haskellwiki/HXT#The_concept_of_filters\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "module",
        "fct-source": "src/Data-JSON2-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "See also http www.haskell.org haskellwiki HXT The concept of filters",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "Query",
        "normalized": "",
        "package": "json2",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#t:JFilter",
      "description": {
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "type",
        "fct-source": "src/Data-JSON2-Query.html#JFilter",
        "fct-type": "type",
        "title": "JFilter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "JFilter",
        "normalized": "",
        "package": "json2",
        "partial": "JFilter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eConcat results two filters.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter -\u003e JFilter -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Concat results two filters",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "JFilter-\u003eJFilter-\u003eJFilter",
        "package": "json2",
        "partial": "",
        "signature": "JFilter-\u003eJFilter-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:-62--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(f \u003e\u003e\u003e g)\u003c/code\u003e  - Apply filter f, later filter g .\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter -\u003e JFilter -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#%3E%3E%3E",
        "fct-type": "function",
        "title": "(\u003e\u003e\u003e)"
      },
      "index": {
        "description": "Apply filter later filter",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
        "normalized": "JFilter-\u003eJFilter-\u003eJFilter",
        "package": "json2",
        "partial": "",
        "signature": "JFilter-\u003eJFilter-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:deep",
      "description": {
        "fct-descr": "\u003cp\u003eTree traversal filter for object and array.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#deep",
        "fct-type": "function",
        "title": "deep"
      },
      "index": {
        "description": "Tree traversal filter for object and array",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "deep",
        "normalized": "JFilter-\u003eJFilter",
        "package": "json2",
        "partial": "",
        "signature": "JFilter-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:deepArr",
      "description": {
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#deepArr",
        "fct-type": "function",
        "title": "deepArr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "deepArr",
        "normalized": "JFilter-\u003eJFilter",
        "package": "json2",
        "partial": "Arr",
        "signature": "JFilter-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:deepObj",
      "description": {
        "fct-descr": "\u003cp\u003eTree traversal filter for array.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#deepObj",
        "fct-type": "function",
        "title": "deepObj"
      },
      "index": {
        "description": "Tree traversal filter for array",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "deepObj",
        "normalized": "JFilter-\u003eJFilter",
        "package": "json2",
        "partial": "Obj",
        "signature": "JFilter-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getChildern",
      "description": {
        "fct-descr": "\u003cp\u003eGet all elements from object and array.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter",
        "fct-source": "src/Data-JSON2-Query.html#getChildern",
        "fct-type": "function",
        "title": "getChildern"
      },
      "index": {
        "description": "Get all elements from object and array",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "getChildern",
        "normalized": "",
        "package": "json2",
        "partial": "Childern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromArr",
      "description": {
        "fct-descr": "\u003cp\u003eGet all elements from array.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter",
        "fct-source": "src/Data-JSON2-Query.html#getFromArr",
        "fct-type": "function",
        "title": "getFromArr"
      },
      "index": {
        "description": "Get all elements from array",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "getFromArr",
        "normalized": "",
        "package": "json2",
        "partial": "From Arr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromIndex",
      "description": {
        "fct-descr": "\u003cp\u003eGet element from array with index.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "Int -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#getFromIndex",
        "fct-type": "function",
        "title": "getFromIndex"
      },
      "index": {
        "description": "Get element from array with index",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "getFromIndex",
        "normalized": "Int-\u003eJFilter",
        "package": "json2",
        "partial": "From Index",
        "signature": "Int-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromIndexBy",
      "description": {
        "fct-descr": "\u003cp\u003eGet elements from array with indexes.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "(Int -\u003e Bool) -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#getFromIndexBy",
        "fct-type": "function",
        "title": "getFromIndexBy"
      },
      "index": {
        "description": "Get elements from array with indexes",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "getFromIndexBy",
        "normalized": "(Int-\u003eBool)-\u003eJFilter",
        "package": "json2",
        "partial": "From Index By",
        "signature": "(Int-\u003eBool)-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromIndexes",
      "description": {
        "fct-descr": "\u003cp\u003eGet elements from array with index by.\n\u003c/p\u003e\u003cp\u003eDEPRECATED use: getFromIndexBy\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "[Int] -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#getFromIndexes",
        "fct-type": "function",
        "title": "getFromIndexes"
      },
      "index": {
        "description": "Get elements from array with index by DEPRECATED use getFromIndexBy",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "getFromIndexes",
        "normalized": "[Int]-\u003eJFilter",
        "package": "json2",
        "partial": "From Indexes",
        "signature": "[Int]-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromKey",
      "description": {
        "fct-descr": "\u003cp\u003eGet elements from object with key.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "String -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#getFromKey",
        "fct-type": "function",
        "title": "getFromKey"
      },
      "index": {
        "description": "Get elements from object with key",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "getFromKey",
        "normalized": "String-\u003eJFilter",
        "package": "json2",
        "partial": "From Key",
        "signature": "String-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromKeyBy",
      "description": {
        "fct-descr": "\u003cp\u003eGet elements from object with key by.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "(String -\u003e Bool) -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#getFromKeyBy",
        "fct-type": "function",
        "title": "getFromKeyBy"
      },
      "index": {
        "description": "Get elements from object with key by",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "getFromKeyBy",
        "normalized": "(String-\u003eBool)-\u003eJFilter",
        "package": "json2",
        "partial": "From Key By",
        "signature": "(String-\u003eBool)-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromKeys",
      "description": {
        "fct-descr": "\u003cp\u003eGet elements from object with keys.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "[String] -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#getFromKeys",
        "fct-type": "function",
        "title": "getFromKeys"
      },
      "index": {
        "description": "Get elements from object with keys",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "getFromKeys",
        "normalized": "[String]-\u003eJFilter",
        "package": "json2",
        "partial": "From Keys",
        "signature": "[String]-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromObj",
      "description": {
        "fct-descr": "\u003cp\u003eGet all elements from object.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter",
        "fct-source": "src/Data-JSON2-Query.html#getFromObj",
        "fct-type": "function",
        "title": "getFromObj"
      },
      "index": {
        "description": "Get all elements from object",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "getFromObj",
        "normalized": "",
        "package": "json2",
        "partial": "From Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:guards",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(f \u003ccode\u003e\u003ca\u003eguards\u003c/a\u003e\u003c/code\u003e g )\u003c/code\u003e - If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003eempty\u003c/code\u003e then \u003ccode\u003eempty\u003c/code\u003e else apply \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter -\u003e JFilter -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#guards",
        "fct-type": "function",
        "title": "guards"
      },
      "index": {
        "description": "guards If returned empty then empty else apply",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "guards",
        "normalized": "JFilter-\u003eJFilter-\u003eJFilter",
        "package": "json2",
        "partial": "",
        "signature": "JFilter-\u003eJFilter-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isArr",
      "description": {
        "fct-descr": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e arrays.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter",
        "fct-source": "src/Data-JSON2-Query.html#isArr",
        "fct-type": "function",
        "title": "isArr"
      },
      "index": {
        "description": "Filter Json arrays",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "isArr",
        "normalized": "",
        "package": "json2",
        "partial": "Arr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isAtomic",
      "description": {
        "fct-descr": "\u003cp\u003eFilter primitive types.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter",
        "fct-source": "src/Data-JSON2-Query.html#isAtomic",
        "fct-type": "function",
        "title": "isAtomic"
      },
      "index": {
        "description": "Filter primitive types",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "isAtomic",
        "normalized": "",
        "package": "json2",
        "partial": "Atomic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isBool",
      "description": {
        "fct-descr": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e Bool.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter",
        "fct-source": "src/Data-JSON2-Query.html#isBool",
        "fct-type": "function",
        "title": "isBool"
      },
      "index": {
        "description": "Filter Json Bool",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "isBool",
        "normalized": "",
        "package": "json2",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isFalse",
      "description": {
        "fct-descr": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e False.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter",
        "fct-source": "src/Data-JSON2-Query.html#isFalse",
        "fct-type": "function",
        "title": "isFalse"
      },
      "index": {
        "description": "Filter Json False",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "isFalse",
        "normalized": "",
        "package": "json2",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isNull",
      "description": {
        "fct-descr": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e null.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter",
        "fct-source": "src/Data-JSON2-Query.html#isNull",
        "fct-type": "function",
        "title": "isNull"
      },
      "index": {
        "description": "Filter Json null",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "isNull",
        "normalized": "",
        "package": "json2",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isNum",
      "description": {
        "fct-descr": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e numbers.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter",
        "fct-source": "src/Data-JSON2-Query.html#isNum",
        "fct-type": "function",
        "title": "isNum"
      },
      "index": {
        "description": "Filter Json numbers",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "isNum",
        "normalized": "",
        "package": "json2",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isNumBy",
      "description": {
        "fct-descr": "\u003cp\u003ePredicative filter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e numbers.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "(a -\u003e Bool) -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#isNumBy",
        "fct-type": "function",
        "title": "isNumBy"
      },
      "index": {
        "description": "Predicative filter Json numbers",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "isNumBy",
        "normalized": "(a-\u003eBool)-\u003eJFilter",
        "package": "json2",
        "partial": "Num By",
        "signature": "(a-\u003eBool)-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isObj",
      "description": {
        "fct-descr": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e objects.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter",
        "fct-source": "src/Data-JSON2-Query.html#isObj",
        "fct-type": "function",
        "title": "isObj"
      },
      "index": {
        "description": "Filter Json objects",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "isObj",
        "normalized": "",
        "package": "json2",
        "partial": "Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isStr",
      "description": {
        "fct-descr": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e strings.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter",
        "fct-source": "src/Data-JSON2-Query.html#isStr",
        "fct-type": "function",
        "title": "isStr"
      },
      "index": {
        "description": "Filter Json strings",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "isStr",
        "normalized": "",
        "package": "json2",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isStrBy",
      "description": {
        "fct-descr": "\u003cp\u003ePredicative filter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e strings.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "(String -\u003e Bool) -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#isStrBy",
        "fct-type": "function",
        "title": "isStrBy"
      },
      "index": {
        "description": "Predicative filter Json strings",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "isStrBy",
        "normalized": "(String-\u003eBool)-\u003eJFilter",
        "package": "json2",
        "partial": "Str By",
        "signature": "(String-\u003eBool)-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isTrue",
      "description": {
        "fct-descr": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e True.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter",
        "fct-source": "src/Data-JSON2-Query.html#isTrue",
        "fct-type": "function",
        "title": "isTrue"
      },
      "index": {
        "description": "Filter Json True",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "isTrue",
        "normalized": "",
        "package": "json2",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:orElse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(f \u003ccode\u003e\u003ca\u003eorElse\u003c/a\u003e\u003c/code\u003e g)\u003c/code\u003e - Apply f, if \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003eempty\u003c/code\u003e apply \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter -\u003e JFilter -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#orElse",
        "fct-type": "function",
        "title": "orElse"
      },
      "index": {
        "description": "orElse Apply if returned empty apply",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "orElse",
        "normalized": "JFilter-\u003eJFilter-\u003eJFilter",
        "package": "json2",
        "partial": "Else",
        "signature": "JFilter-\u003eJFilter-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:when",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(f \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e g)\u003c/code\u003e - When \u003ccode\u003eg\u003c/code\u003e returned \u003ccode\u003enot empty\u003c/code\u003e, apply \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2.Query",
        "fct-package": "json2",
        "fct-signature": "JFilter -\u003e JFilter -\u003e JFilter",
        "fct-source": "src/Data-JSON2-Query.html#when",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "when When returned not empty apply",
        "hierarchy": "Data JSON2 Query",
        "module": "Data.JSON2.Query",
        "name": "when",
        "normalized": "JFilter-\u003eJFilter-\u003eJFilter",
        "package": "json2",
        "partial": "",
        "signature": "JFilter-\u003eJFilter-\u003eJFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003col\u003e\u003cli\u003e \u003cem\u003eRenders JSON to String\u003c/em\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eHaskell value has a JSON string:\n\u003c/p\u003e\u003cpre\u003e\n     HASKELL value                             JSON string (toString . toJson)\n    -------------------------------           -----------------------------\n    Just \"bla\" :: Maybe String                \"bla\"\n    Nothing :: Maybe String                   null\n    Left 1 :: Either Int Int                  [[1], []]\n    Right 1 :: Either Int Int                 [[], [1]]\n    'a' :: Char                               97\n    () :: ()                                  []\n    (1, \"bla\") :: (Int, String)               [1, \"bla\"]\n    fromList [1,2,3,4] :: Set Int             [1, 2, 3, 4]\n    fromList [(\"0\",0),(\"1\",10),(\"2\",20)]      {\"0\": 0, \"1\": 10, \"2\": 20}\n        :: Map String Int\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e \u003cem\u003eConversion haskell values from and to JSON\u003c/em\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThis module provides many instances classes \u003ccode\u003e\u003ca\u003eFromJson\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eToJson\u003c/a\u003e\u003c/code\u003e\nfor haskell data types.\nSee instances class \u003ccode\u003e\u003ca\u003eToJson\u003c/a\u003e\u003c/code\u003e for SQL (HDBC) in module  Database.HDBC.JSON2\n(package json2-hdbc).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAdding Instance class ToJson or FromJson\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eTransformation of algebraic product in \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e. For example:\n\u003c/p\u003e\u003cpre\u003e\n    data Person = Person {name :: String, age:: Int}\n        deriving (Typeable, Show, Eq)\n\u003c/pre\u003e\u003cpre\u003e\n    instance ToJson Person where\n        toJson (Person s n) = toJson [toJson s, toJson n]\n\u003c/pre\u003e\u003cpre\u003e\n    instance FromJson Person where\n        safeFromJson (JArray [js, jn])\n                       = return $ Person (fromJson js) (fromJson jn)\n        safeFromJson x = mkError x\n\u003c/pre\u003e\u003cp\u003eConverting \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e values to Json. For example:\n\u003c/p\u003e\u003cpre\u003e\n    data Color = Red | Green | Blue | Black\n        deriving (Typeable, Show, Eq, Enum, Bounded)\n\u003c/pre\u003e\u003cpre\u003e\n    instance ToJson Color where\n        toJson = JNumber . toRational . fromEnum\n    instance FromJson Color where\n        safeFromJson (JNumber x) = checkBoundsEnum (toEnum . round) x\n        safeFromJson x =  mkError x\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "module",
        "fct-source": "src/Data-JSON2.html",
        "fct-type": "module",
        "title": "JSON2"
      },
      "index": {
        "description": "Renders JSON to String Haskell value has JSON string HASKELL value JSON string toString toJson Just bla Maybe String bla Nothing Maybe String null Left Either Int Int Right Either Int Int Char bla Int String bla fromList Set Int fromList Map String Int Conversion haskell values from and to JSON This module provides many instances classes FromJson and ToJson for haskell data types See instances class ToJson for SQL HDBC in module Database.HDBC.JSON2 package json2-hdbc Adding Instance class ToJson or FromJson Transformation of algebraic product in Json For example data Person Person name String age Int deriving Typeable Show Eq instance ToJson Person where toJson Person toJson toJson toJson instance FromJson Person where safeFromJson JArray js jn return Person fromJson js fromJson jn safeFromJson mkError Converting Bounded and Enum values to Json For example data Color Red Green Blue Black deriving Typeable Show Eq Enum Bounded instance ToJson Color where toJson JNumber toRational fromEnum instance FromJson Color where safeFromJson JNumber checkBoundsEnum toEnum round safeFromJson mkError",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "JSON2",
        "normalized": "",
        "package": "json2",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#t:FromJson",
      "description": {
        "fct-descr": "\u003cp\u003eClass for conversion from \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "class",
        "fct-source": "src/Data-JSON2.html#FromJson",
        "fct-type": "class",
        "title": "FromJson"
      },
      "index": {
        "description": "Class for conversion from Json",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "FromJson",
        "normalized": "",
        "package": "json2",
        "partial": "From Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#t:Json",
      "description": {
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Json"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "Json",
        "normalized": "",
        "package": "json2",
        "partial": "Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#t:Jsons",
      "description": {
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Jsons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "Jsons",
        "normalized": "",
        "package": "json2",
        "partial": "Jsons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#t:ToJson",
      "description": {
        "fct-descr": "\u003cp\u003eClass for conversion from \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "class",
        "fct-source": "src/Data-JSON2.html#ToJson",
        "fct-type": "class",
        "title": "ToJson"
      },
      "index": {
        "description": "Class for conversion from Json",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "ToJson",
        "normalized": "",
        "package": "json2",
        "partial": "To Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:-43--61-",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two  \u003ccode\u003e\u003ca\u003eJObject\u003c/a\u003e\u003c/code\u003e. Other \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e values interpreted as \u003ccode\u003e\u003ca\u003eemptyObj\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ghci \u003e pp $ (\"a\" .= \"old\") += (\"a\" .= \"new\") += (\"bb\" .= \"other\")\n {\"a\": \"new\", \"bb\": \"other\"}\n\u003c/pre\u003e",
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "Json -\u003e Json -\u003e Json",
        "fct-source": "src/Data-JSON2.html#%2B%3D",
        "fct-type": "function",
        "title": "(+=)"
      },
      "index": {
        "description": "Merge two JObject Other Json values interpreted as emptyObj ghci pp old new bb other new bb other",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "(+=) +=",
        "normalized": "Json-\u003eJson-\u003eJson",
        "package": "json2",
        "partial": "",
        "signature": "Json-\u003eJson-\u003eJson"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:.-61-",
      "description": {
        "fct-descr": "\u003cp\u003eCreate single \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "String -\u003e v -\u003e Json",
        "fct-source": "src/Data-JSON2.html#.%3D",
        "fct-type": "function",
        "title": "(.=)"
      },
      "index": {
        "description": "Create single Json object",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "(.=) .=",
        "normalized": "String-\u003ea-\u003eJson",
        "package": "json2",
        "partial": "",
        "signature": "String-\u003ev-\u003eJson"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:JArray",
      "description": {
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "JArray [Json]",
        "fct-type": "function",
        "title": "JArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "JArray",
        "normalized": "JArray[Json]",
        "package": "json2",
        "partial": "JArray",
        "signature": "JArray[Json]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:JBool",
      "description": {
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "JBool !Bool",
        "fct-type": "function",
        "title": "JBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "JBool",
        "normalized": "",
        "package": "json2",
        "partial": "JBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:JNull",
      "description": {
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "JNull",
        "fct-type": "function",
        "title": "JNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "JNull",
        "normalized": "",
        "package": "json2",
        "partial": "JNull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:JNumber",
      "description": {
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "JNumber !Rational",
        "fct-type": "function",
        "title": "JNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "JNumber",
        "normalized": "",
        "package": "json2",
        "partial": "JNumber",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:JObject",
      "description": {
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "JObject (Map String Json)",
        "fct-type": "function",
        "title": "JObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "JObject",
        "normalized": "",
        "package": "json2",
        "partial": "JObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:JString",
      "description": {
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "JString String",
        "fct-type": "function",
        "title": "JString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "JString",
        "normalized": "",
        "package": "json2",
        "partial": "JString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:emptyObj",
      "description": {
        "fct-descr": "\u003cp\u003eCreate empty \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "Json",
        "fct-source": "src/Data-JSON2.html#emptyObj",
        "fct-type": "function",
        "title": "emptyObj"
      },
      "index": {
        "description": "Create empty Json object",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "emptyObj",
        "normalized": "",
        "package": "json2",
        "partial": "Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:fromJson",
      "description": {
        "fct-descr": "\u003cp\u003eConversion from \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "Json -\u003e a",
        "fct-source": "src/Data-JSON2.html#fromJson",
        "fct-type": "function",
        "title": "fromJson"
      },
      "index": {
        "description": "Conversion from Json",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "fromJson",
        "normalized": "Json-\u003ea",
        "package": "json2",
        "partial": "Json",
        "signature": "Json-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:mergeRec",
      "description": {
        "fct-descr": "\u003cp\u003eRecursively merge the two \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e objects.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "Json -\u003e Json -\u003e Json",
        "fct-source": "src/Data-JSON2.html#mergeRec",
        "fct-type": "function",
        "title": "mergeRec"
      },
      "index": {
        "description": "Recursively merge the two Json objects",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "mergeRec",
        "normalized": "Json-\u003eJson-\u003eJson",
        "package": "json2",
        "partial": "Rec",
        "signature": "Json-\u003eJson-\u003eJson"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:merges",
      "description": {
        "fct-descr": "\u003cp\u003eMerge \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e objects from list.\n\u003c/p\u003e\u003cpre\u003e ghci\u003e  pp $ merges [(\"a\" .= \"old\"), (\"a\" .= \"new\"), (\"bb\" .= \"other\")]\n {\"a\": \"new\", \"bb\": \"other\"}\n\u003c/pre\u003e",
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "[Json] -\u003e Json",
        "fct-source": "src/Data-JSON2.html#merges",
        "fct-type": "function",
        "title": "merges"
      },
      "index": {
        "description": "Merge Json objects from list ghci pp merges old new bb other new bb other",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "merges",
        "normalized": "[Json]-\u003eJson",
        "package": "json2",
        "partial": "",
        "signature": "[Json]-\u003eJson"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:mkObj",
      "description": {
        "fct-descr": "\u003cp\u003eCreate \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e object from list.\n\u003c/p\u003e\u003cpre\u003e  ghci\u003e pp $ mkObj [(\"a\", \"old\"), (\"a\", \"new\"), (\"bb\", \"other\")]\n  {\"a\": \"new\", \"bb\": \"other\"}\n\u003c/pre\u003e",
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "[(String, v)] -\u003e Json",
        "fct-source": "src/Data-JSON2.html#mkObj",
        "fct-type": "function",
        "title": "mkObj"
      },
      "index": {
        "description": "Create Json object from list ghci pp mkObj old new bb other new bb other",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "mkObj",
        "normalized": "[(String,a)]-\u003eJson",
        "package": "json2",
        "partial": "Obj",
        "signature": "[(String,v)]-\u003eJson"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:projectionObj",
      "description": {
        "fct-descr": "\u003cp\u003eProjection \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e object to list of \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e\u003cpre\u003e \u003e pp $ projectionObj [\"b\", \"c\", \"b\"] $ mkObj [(\"a\",1),(\"b\", 2), (\"c\", 3)]\n [2, 3, 2]\n\u003c/pre\u003e",
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "[String] -\u003e Json -\u003e Jsons",
        "fct-source": "src/Data-JSON2.html#projectionObj",
        "fct-type": "function",
        "title": "projectionObj"
      },
      "index": {
        "description": "Projection Json object to list of Json pp projectionObj mkObj",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "projectionObj",
        "normalized": "[String]-\u003eJson-\u003eJsons",
        "package": "json2",
        "partial": "Obj",
        "signature": "[String]-\u003eJson-\u003eJsons"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:safeFromJson",
      "description": {
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "Json -\u003e ConvResult a",
        "fct-source": "src/Data-JSON2.html#safeFromJson",
        "fct-type": "method",
        "title": "safeFromJson"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "safeFromJson",
        "normalized": "Json-\u003eConvResult a",
        "package": "json2",
        "partial": "From Json",
        "signature": "Json-\u003eConvResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:toJson",
      "description": {
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "a -\u003e Json",
        "fct-source": "src/Data-JSON2.html#toJson",
        "fct-type": "method",
        "title": "toJson"
      },
      "index": {
        "description": "",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "toJson",
        "normalized": "a-\u003eJson",
        "package": "json2",
        "partial": "Json",
        "signature": "a-\u003eJson"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eRenders \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e to String.\n\u003c/p\u003e",
        "fct-module": "Data.JSON2",
        "fct-package": "json2",
        "fct-signature": "Json -\u003e String",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Renders Json to String",
        "hierarchy": "Data JSON2",
        "module": "Data.JSON2",
        "name": "toString",
        "normalized": "Json-\u003eString",
        "package": "json2",
        "partial": "String",
        "signature": "Json-\u003eString"
      }
    }
  }
]