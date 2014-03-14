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
        "word": "json2"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient build ByteString from \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e with escaped string.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eFor example - use in YESOD:\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e\n    import Yesod\n    import Data.JSON2       as JSON\n    import Data.JSON2.Blaze as JSON\n    import Blaze.ByteString.Builder (toLazyByteString)\n    --\n    toRepJson :: ToJson a =\u003e a -\u003e RepJson\n    toRepJson =  RepJson . toContent . toLazyByteString . (JSON.blazeJson) . (JSON.toJson)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.JSON2.Blaze",
          "name": "Blaze",
          "package": "json2",
          "source": "src/Data-JSON2-Blaze.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient build ByteString from Json with escaped string For example use in YESOD import Yesod import Data.JSON2 as JSON import Data.JSON2.Blaze as JSON import Blaze.ByteString.Builder toLazyByteString toRepJson ToJson RepJson toRepJson RepJson toContent toLazyByteString JSON.blazeJson JSON.toJson",
          "hierarchy": "Data JSON2 Blaze",
          "module": "Data.JSON2.Blaze",
          "name": "Blaze",
          "package": "json2",
          "partial": "Blaze",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Blaze.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2.Blaze",
          "name": "blazeJson",
          "package": "json2",
          "signature": "Json -\u003e Builder",
          "source": "src/Data-JSON2-Blaze.html#blazeJson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JSON2 Blaze",
          "module": "Data.JSON2.Blaze",
          "name": "blazeJson",
          "normalized": "Json-\u003eBuilder",
          "package": "json2",
          "partial": "Json",
          "signature": "Json-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Blaze.html#v:blazeJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides Instances classes \u003ccode\u003e\u003ca\u003eToJson\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromJson\u003c/a\u003e\u003c/code\u003e for Time.\n\u003c/p\u003e\u003cp\u003eTime transforms to JSON as: \n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e              [\"2011\", \"04\", \"03\"]\n    \u003ccode\u003e\u003ca\u003eTimeOfDay\u003c/a\u003e\u003c/code\u003e        [\"13\", \"12\", \"47\", \".244649\"]\n    \u003ccode\u003e\u003ca\u003eTimeZone\u003c/a\u003e\u003c/code\u003e         \"EEST\"\n    \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e        [\"2011\", \"04\", \"03\", \"13\", \"12\", \"47\", \".244649\"]\n    \u003ccode\u003e\u003ca\u003eZonedTime\u003c/a\u003e\u003c/code\u003e        [\"2011\", \"04\", \"03\", \"13\", \"12\", \"47\", \".244649\", \"EEST\"]\n    \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e          [\"2011\", \"04\", \"03\", \"10\", \"12\", \"47\", \".244777\", \"UTC\"]\n    \u003ccode\u003e\u003ca\u003eNominalDiffTime\u003c/a\u003e\u003c/code\u003e  1.301825863528051e9\n    \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e        1.301825863528051e9\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.JSON2.Instances.Time",
          "name": "Time",
          "package": "json2",
          "source": "src/Data-JSON2-Instances-Time.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Instances classes ToJson and FromJson for Time Time transforms to JSON as Day TimeOfDay TimeZone EEST LocalTime ZonedTime EEST UTCTime UTC NominalDiffTime e9 POSIXTime e9",
          "hierarchy": "Data JSON2 Instances Time",
          "module": "Data.JSON2.Instances.Time",
          "name": "Time",
          "package": "json2",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Instances-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2.Internal",
          "name": "Internal",
          "package": "json2",
          "source": "src/Data-JSON2-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data JSON2 Internal",
          "module": "Data.JSON2.Internal",
          "name": "Internal",
          "package": "json2",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2.Internal",
          "name": "ConvError",
          "package": "json2",
          "source": "src/Data-JSON2-Internal.html#ConvError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data JSON2 Internal",
          "module": "Data.JSON2.Internal",
          "name": "ConvError",
          "package": "json2",
          "partial": "Conv Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#t:ConvError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2.Internal",
          "name": "ConvResult",
          "package": "json2",
          "source": "src/Data-JSON2-Internal.html#ConvResult",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data JSON2 Internal",
          "module": "Data.JSON2.Internal",
          "name": "ConvResult",
          "package": "json2",
          "partial": "Conv Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#t:ConvResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2.Internal",
          "name": "ConvError",
          "package": "json2",
          "signature": "ConvError String String String String",
          "source": "src/Data-JSON2-Internal.html#ConvError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JSON2 Internal",
          "module": "Data.JSON2.Internal",
          "name": "ConvError",
          "package": "json2",
          "partial": "Conv Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#v:ConvError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e number to  \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e values with check bounds.\n checkBoundsEnum (toEnum . round)\n\u003c/p\u003e",
          "module": "Data.JSON2.Internal",
          "name": "checkBoundsEnum",
          "package": "json2",
          "signature": "(Rational -\u003e a) -\u003e Rational -\u003e ConvResult a",
          "source": "src/Data-JSON2-Internal.html#checkBoundsEnum",
          "type": "function"
        },
        "index": {
          "description": "Conversion Rational number to Bounded values with check bounds checkBoundsEnum toEnum round",
          "hierarchy": "Data JSON2 Internal",
          "module": "Data.JSON2.Internal",
          "name": "checkBoundsEnum",
          "normalized": "(Rational-\u003ea)-\u003eRational-\u003eConvResult a",
          "package": "json2",
          "partial": "Bounds Enum",
          "signature": "(Rational-\u003ea)-\u003eRational-\u003eConvResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#v:checkBoundsEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e number to \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e number with check bounds.\n\u003c/p\u003e",
          "module": "Data.JSON2.Internal",
          "name": "checkBoundsIntegral",
          "package": "json2",
          "signature": "(Rational -\u003e a) -\u003e Rational -\u003e ConvResult a",
          "source": "src/Data-JSON2-Internal.html#checkBoundsIntegral",
          "type": "function"
        },
        "index": {
          "description": "Conversion Rational number to Integral number with check bounds",
          "hierarchy": "Data JSON2 Internal",
          "module": "Data.JSON2.Internal",
          "name": "checkBoundsIntegral",
          "normalized": "(Rational-\u003ea)-\u003eRational-\u003eConvResult a",
          "package": "json2",
          "partial": "Bounds Integral",
          "signature": "(Rational-\u003ea)-\u003eRational-\u003eConvResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#v:checkBoundsIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e values with check infinity.\n\u003c/p\u003e",
          "module": "Data.JSON2.Internal",
          "name": "checkInfinite",
          "package": "json2",
          "signature": "(Rational -\u003e a) -\u003e Rational -\u003e ConvResult a",
          "source": "src/Data-JSON2-Internal.html#checkInfinite",
          "type": "function"
        },
        "index": {
          "description": "Conversion Rational to RealFloat values with check infinity",
          "hierarchy": "Data JSON2 Internal",
          "module": "Data.JSON2.Internal",
          "name": "checkInfinite",
          "normalized": "(Rational-\u003ea)-\u003eRational-\u003eConvResult a",
          "package": "json2",
          "partial": "Infinite",
          "signature": "(Rational-\u003ea)-\u003eRational-\u003eConvResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#v:checkInfinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate  conversion error.\n\u003c/p\u003e",
          "module": "Data.JSON2.Internal",
          "name": "mkError",
          "package": "json2",
          "signature": "a -\u003e ConvResult b",
          "source": "src/Data-JSON2-Internal.html#mkError",
          "type": "function"
        },
        "index": {
          "description": "Create conversion error",
          "hierarchy": "Data JSON2 Internal",
          "module": "Data.JSON2.Internal",
          "name": "mkError",
          "normalized": "a-\u003eConvResult b",
          "package": "json2",
          "partial": "Error",
          "signature": "a-\u003eConvResult b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#v:mkError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate  conversion error with message.\n\u003c/p\u003e",
          "module": "Data.JSON2.Internal",
          "name": "mkError'",
          "package": "json2",
          "signature": "String -\u003e a -\u003e ConvResult b",
          "source": "src/Data-JSON2-Internal.html#mkError%27",
          "type": "function"
        },
        "index": {
          "description": "Create conversion error with message",
          "hierarchy": "Data JSON2 Internal",
          "module": "Data.JSON2.Internal",
          "name": "mkError'",
          "normalized": "String-\u003ea-\u003eConvResult b",
          "package": "json2",
          "partial": "Error'",
          "signature": "String-\u003ea-\u003eConvResult b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Internal.html#v:mkError-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2.Parser",
          "name": "Parser",
          "package": "json2",
          "source": "src/Data-JSON2-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data JSON2 Parser",
          "module": "Data.JSON2.Parser",
          "name": "Parser",
          "package": "json2",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.JSON2.Parser",
          "name": "encodeJson",
          "package": "json2",
          "signature": "String -\u003e Json",
          "source": "src/Data-JSON2-Parser.html#encodeJson",
          "type": "function"
        },
        "index": {
          "description": "Encode String to Json",
          "hierarchy": "Data JSON2 Parser",
          "module": "Data.JSON2.Parser",
          "name": "encodeJson",
          "normalized": "String-\u003eJson",
          "package": "json2",
          "partial": "Json",
          "signature": "String-\u003eJson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Parser.html#v:encodeJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses JSON string.\n\u003c/p\u003e",
          "module": "Data.JSON2.Parser",
          "name": "parseJson",
          "package": "json2",
          "signature": "String -\u003e Either ParseError Json",
          "source": "src/Data-JSON2-Parser.html#parseJson",
          "type": "function"
        },
        "index": {
          "description": "Parses JSON string",
          "hierarchy": "Data JSON2 Parser",
          "module": "Data.JSON2.Parser",
          "name": "parseJson",
          "normalized": "String-\u003eEither ParseError Json",
          "package": "json2",
          "partial": "Json",
          "signature": "String-\u003eEither ParseError Json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Parser.html#v:parseJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass and Instances for pretty printing Your data.\n\u003c/p\u003e\u003cp\u003eMinimal definition for instances \u003ccode\u003ePretty\u003c/code\u003e  - method \u003ccode\u003epp\u003c/code\u003e . \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.JSON2.Pretty",
          "name": "Pretty",
          "package": "json2",
          "source": "src/Data-JSON2-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Class and Instances for pretty printing Your data Minimal definition for instances Pretty method pp",
          "hierarchy": "Data JSON2 Pretty",
          "module": "Data.JSON2.Pretty",
          "name": "Pretty",
          "package": "json2",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2.Pretty",
          "name": "Pretty",
          "package": "json2",
          "source": "src/Data-JSON2-Pretty.html#Pretty",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data JSON2 Pretty",
          "module": "Data.JSON2.Pretty",
          "name": "Pretty",
          "package": "json2",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Pretty.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2.Pretty",
          "name": "pp",
          "package": "json2",
          "signature": "a -\u003e Doc",
          "source": "src/Data-JSON2-Pretty.html#pp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data JSON2 Pretty",
          "module": "Data.JSON2.Pretty",
          "name": "pp",
          "normalized": "a-\u003eDoc",
          "package": "json2",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Pretty.html#v:pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2.Pretty",
          "name": "pprint",
          "package": "json2",
          "signature": "a -\u003e String",
          "source": "src/Data-JSON2-Pretty.html#pprint",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data JSON2 Pretty",
          "module": "Data.JSON2.Pretty",
          "name": "pprint",
          "normalized": "a-\u003eString",
          "package": "json2",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Pretty.html#v:pprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSee also: \u003ca\u003ehttp://www.haskell.org/haskellwiki/HXT#The_concept_of_filters\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.JSON2.Query",
          "name": "Query",
          "package": "json2",
          "source": "src/Data-JSON2-Query.html",
          "type": "module"
        },
        "index": {
          "description": "See also http www.haskell.org haskellwiki HXT The concept of filters",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "Query",
          "package": "json2",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2.Query",
          "name": "JFilter",
          "package": "json2",
          "source": "src/Data-JSON2-Query.html#JFilter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "JFilter",
          "package": "json2",
          "partial": "JFilter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#t:JFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcat results two filters.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "(\u003c+\u003e)",
          "package": "json2",
          "signature": "JFilter -\u003e JFilter -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Concat results two filters",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "JFilter-\u003eJFilter-\u003eJFilter",
          "package": "json2",
          "signature": "JFilter-\u003eJFilter-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(f \u003e\u003e\u003e g)\u003c/code\u003e  - Apply filter f, later filter g .\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "(\u003e\u003e\u003e)",
          "package": "json2",
          "signature": "JFilter -\u003e JFilter -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Apply filter later filter",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "JFilter-\u003eJFilter-\u003eJFilter",
          "package": "json2",
          "signature": "JFilter-\u003eJFilter-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTree traversal filter for object and array.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "deep",
          "package": "json2",
          "signature": "JFilter -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#deep",
          "type": "function"
        },
        "index": {
          "description": "Tree traversal filter for object and array",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "deep",
          "normalized": "JFilter-\u003eJFilter",
          "package": "json2",
          "signature": "JFilter-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:deep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2.Query",
          "name": "deepArr",
          "package": "json2",
          "signature": "JFilter -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#deepArr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "deepArr",
          "normalized": "JFilter-\u003eJFilter",
          "package": "json2",
          "partial": "Arr",
          "signature": "JFilter-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:deepArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTree traversal filter for array.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "deepObj",
          "package": "json2",
          "signature": "JFilter -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#deepObj",
          "type": "function"
        },
        "index": {
          "description": "Tree traversal filter for array",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "deepObj",
          "normalized": "JFilter-\u003eJFilter",
          "package": "json2",
          "partial": "Obj",
          "signature": "JFilter-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:deepObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all elements from object and array.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "getChildern",
          "package": "json2",
          "signature": "JFilter",
          "source": "src/Data-JSON2-Query.html#getChildern",
          "type": "function"
        },
        "index": {
          "description": "Get all elements from object and array",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "getChildern",
          "package": "json2",
          "partial": "Childern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getChildern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all elements from array.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "getFromArr",
          "package": "json2",
          "signature": "JFilter",
          "source": "src/Data-JSON2-Query.html#getFromArr",
          "type": "function"
        },
        "index": {
          "description": "Get all elements from array",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "getFromArr",
          "package": "json2",
          "partial": "From Arr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet element from array with index.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "getFromIndex",
          "package": "json2",
          "signature": "Int -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#getFromIndex",
          "type": "function"
        },
        "index": {
          "description": "Get element from array with index",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "getFromIndex",
          "normalized": "Int-\u003eJFilter",
          "package": "json2",
          "partial": "From Index",
          "signature": "Int-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet elements from array with indexes.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "getFromIndexBy",
          "package": "json2",
          "signature": "(Int -\u003e Bool) -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#getFromIndexBy",
          "type": "function"
        },
        "index": {
          "description": "Get elements from array with indexes",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "getFromIndexBy",
          "normalized": "(Int-\u003eBool)-\u003eJFilter",
          "package": "json2",
          "partial": "From Index By",
          "signature": "(Int-\u003eBool)-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromIndexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet elements from array with index by.\n\u003c/p\u003e\u003cp\u003eDEPRECATED use: getFromIndexBy\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "getFromIndexes",
          "package": "json2",
          "signature": "[Int] -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#getFromIndexes",
          "type": "function"
        },
        "index": {
          "description": "Get elements from array with index by DEPRECATED use getFromIndexBy",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "getFromIndexes",
          "normalized": "[Int]-\u003eJFilter",
          "package": "json2",
          "partial": "From Indexes",
          "signature": "[Int]-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromIndexes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet elements from object with key.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "getFromKey",
          "package": "json2",
          "signature": "String -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#getFromKey",
          "type": "function"
        },
        "index": {
          "description": "Get elements from object with key",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "getFromKey",
          "normalized": "String-\u003eJFilter",
          "package": "json2",
          "partial": "From Key",
          "signature": "String-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet elements from object with key by.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "getFromKeyBy",
          "package": "json2",
          "signature": "(String -\u003e Bool) -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#getFromKeyBy",
          "type": "function"
        },
        "index": {
          "description": "Get elements from object with key by",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "getFromKeyBy",
          "normalized": "(String-\u003eBool)-\u003eJFilter",
          "package": "json2",
          "partial": "From Key By",
          "signature": "(String-\u003eBool)-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromKeyBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet elements from object with keys.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "getFromKeys",
          "package": "json2",
          "signature": "[String] -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#getFromKeys",
          "type": "function"
        },
        "index": {
          "description": "Get elements from object with keys",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "getFromKeys",
          "normalized": "[String]-\u003eJFilter",
          "package": "json2",
          "partial": "From Keys",
          "signature": "[String]-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all elements from object.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "getFromObj",
          "package": "json2",
          "signature": "JFilter",
          "source": "src/Data-JSON2-Query.html#getFromObj",
          "type": "function"
        },
        "index": {
          "description": "Get all elements from object",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "getFromObj",
          "package": "json2",
          "partial": "From Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:getFromObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(f \u003ccode\u003e\u003ca\u003eguards\u003c/a\u003e\u003c/code\u003e g )\u003c/code\u003e - If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003eempty\u003c/code\u003e then \u003ccode\u003eempty\u003c/code\u003e else apply \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "guards",
          "package": "json2",
          "signature": "JFilter -\u003e JFilter -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#guards",
          "type": "function"
        },
        "index": {
          "description": "guards If returned empty then empty else apply",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "guards",
          "normalized": "JFilter-\u003eJFilter-\u003eJFilter",
          "package": "json2",
          "signature": "JFilter-\u003eJFilter-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:guards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e arrays.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "isArr",
          "package": "json2",
          "signature": "JFilter",
          "source": "src/Data-JSON2-Query.html#isArr",
          "type": "function"
        },
        "index": {
          "description": "Filter Json arrays",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "isArr",
          "package": "json2",
          "partial": "Arr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter primitive types.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "isAtomic",
          "package": "json2",
          "signature": "JFilter",
          "source": "src/Data-JSON2-Query.html#isAtomic",
          "type": "function"
        },
        "index": {
          "description": "Filter primitive types",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "isAtomic",
          "package": "json2",
          "partial": "Atomic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isAtomic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e Bool.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "isBool",
          "package": "json2",
          "signature": "JFilter",
          "source": "src/Data-JSON2-Query.html#isBool",
          "type": "function"
        },
        "index": {
          "description": "Filter Json Bool",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "isBool",
          "package": "json2",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e False.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "isFalse",
          "package": "json2",
          "signature": "JFilter",
          "source": "src/Data-JSON2-Query.html#isFalse",
          "type": "function"
        },
        "index": {
          "description": "Filter Json False",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "isFalse",
          "package": "json2",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e null.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "isNull",
          "package": "json2",
          "signature": "JFilter",
          "source": "src/Data-JSON2-Query.html#isNull",
          "type": "function"
        },
        "index": {
          "description": "Filter Json null",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "isNull",
          "package": "json2",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e numbers.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "isNum",
          "package": "json2",
          "signature": "JFilter",
          "source": "src/Data-JSON2-Query.html#isNum",
          "type": "function"
        },
        "index": {
          "description": "Filter Json numbers",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "isNum",
          "package": "json2",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicative filter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e numbers.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "isNumBy",
          "package": "json2",
          "signature": "(a -\u003e Bool) -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#isNumBy",
          "type": "function"
        },
        "index": {
          "description": "Predicative filter Json numbers",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "isNumBy",
          "normalized": "(a-\u003eBool)-\u003eJFilter",
          "package": "json2",
          "partial": "Num By",
          "signature": "(a-\u003eBool)-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isNumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e objects.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "isObj",
          "package": "json2",
          "signature": "JFilter",
          "source": "src/Data-JSON2-Query.html#isObj",
          "type": "function"
        },
        "index": {
          "description": "Filter Json objects",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "isObj",
          "package": "json2",
          "partial": "Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e strings.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "isStr",
          "package": "json2",
          "signature": "JFilter",
          "source": "src/Data-JSON2-Query.html#isStr",
          "type": "function"
        },
        "index": {
          "description": "Filter Json strings",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "isStr",
          "package": "json2",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicative filter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e strings.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "isStrBy",
          "package": "json2",
          "signature": "(String -\u003e Bool) -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#isStrBy",
          "type": "function"
        },
        "index": {
          "description": "Predicative filter Json strings",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "isStrBy",
          "normalized": "(String-\u003eBool)-\u003eJFilter",
          "package": "json2",
          "partial": "Str By",
          "signature": "(String-\u003eBool)-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isStrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e True.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "isTrue",
          "package": "json2",
          "signature": "JFilter",
          "source": "src/Data-JSON2-Query.html#isTrue",
          "type": "function"
        },
        "index": {
          "description": "Filter Json True",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "isTrue",
          "package": "json2",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:isTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(f \u003ccode\u003e\u003ca\u003eorElse\u003c/a\u003e\u003c/code\u003e g)\u003c/code\u003e - Apply f, if \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003eempty\u003c/code\u003e apply \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "orElse",
          "package": "json2",
          "signature": "JFilter -\u003e JFilter -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#orElse",
          "type": "function"
        },
        "index": {
          "description": "orElse Apply if returned empty apply",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "orElse",
          "normalized": "JFilter-\u003eJFilter-\u003eJFilter",
          "package": "json2",
          "partial": "Else",
          "signature": "JFilter-\u003eJFilter-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(f \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e g)\u003c/code\u003e - When \u003ccode\u003eg\u003c/code\u003e returned \u003ccode\u003enot empty\u003c/code\u003e, apply \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.JSON2.Query",
          "name": "when",
          "package": "json2",
          "signature": "JFilter -\u003e JFilter -\u003e JFilter",
          "source": "src/Data-JSON2-Query.html#when",
          "type": "function"
        },
        "index": {
          "description": "when When returned not empty apply",
          "hierarchy": "Data JSON2 Query",
          "module": "Data.JSON2.Query",
          "name": "when",
          "normalized": "JFilter-\u003eJFilter-\u003eJFilter",
          "package": "json2",
          "signature": "JFilter-\u003eJFilter-\u003eJFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2-Query.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003col\u003e\u003cli\u003e \u003cem\u003eRenders JSON to String\u003c/em\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eHaskell value has a JSON string:\n\u003c/p\u003e\u003cpre\u003e\n     HASKELL value                             JSON string (toString . toJson)\n    -------------------------------           -----------------------------\n    Just \"bla\" :: Maybe String                \"bla\"\n    Nothing :: Maybe String                   null\n    Left 1 :: Either Int Int                  [[1], []]\n    Right 1 :: Either Int Int                 [[], [1]]\n    'a' :: Char                               97\n    () :: ()                                  []\n    (1, \"bla\") :: (Int, String)               [1, \"bla\"]\n    fromList [1,2,3,4] :: Set Int             [1, 2, 3, 4]\n    fromList [(\"0\",0),(\"1\",10),(\"2\",20)]      {\"0\": 0, \"1\": 10, \"2\": 20}\n        :: Map String Int\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e \u003cem\u003eConversion haskell values from and to JSON\u003c/em\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThis module provides many instances classes \u003ccode\u003e\u003ca\u003eFromJson\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eToJson\u003c/a\u003e\u003c/code\u003e\nfor haskell data types.\nSee instances class \u003ccode\u003e\u003ca\u003eToJson\u003c/a\u003e\u003c/code\u003e for SQL (HDBC) in module  Database.HDBC.JSON2\n(package json2-hdbc).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAdding Instance class ToJson or FromJson\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eTransformation of algebraic product in \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e. For example:\n\u003c/p\u003e\u003cpre\u003e\n    data Person = Person {name :: String, age:: Int}\n        deriving (Typeable, Show, Eq)\n\u003c/pre\u003e\u003cpre\u003e\n    instance ToJson Person where\n        toJson (Person s n) = toJson [toJson s, toJson n]\n\u003c/pre\u003e\u003cpre\u003e\n    instance FromJson Person where\n        safeFromJson (JArray [js, jn])\n                       = return $ Person (fromJson js) (fromJson jn)\n        safeFromJson x = mkError x\n\u003c/pre\u003e\u003cp\u003eConverting \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e values to Json. For example:\n\u003c/p\u003e\u003cpre\u003e\n    data Color = Red | Green | Blue | Black\n        deriving (Typeable, Show, Eq, Enum, Bounded)\n\u003c/pre\u003e\u003cpre\u003e\n    instance ToJson Color where\n        toJson = JNumber . toRational . fromEnum\n    instance FromJson Color where\n        safeFromJson (JNumber x) = checkBoundsEnum (toEnum . round) x\n        safeFromJson x =  mkError x\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.JSON2",
          "name": "JSON2",
          "package": "json2",
          "source": "src/Data-JSON2.html",
          "type": "module"
        },
        "index": {
          "description": "Renders JSON to String Haskell value has JSON string HASKELL value JSON string toString toJson Just bla Maybe String bla Nothing Maybe String null Left Either Int Int Right Either Int Int Char bla Int String bla fromList Set Int fromList Map String Int Conversion haskell values from and to JSON This module provides many instances classes FromJson and ToJson for haskell data types See instances class ToJson for SQL HDBC in module Database.HDBC.JSON2 package json2-hdbc Adding Instance class ToJson or FromJson Transformation of algebraic product in Json For example data Person Person name String age Int deriving Typeable Show Eq instance ToJson Person where toJson Person toJson toJson toJson instance FromJson Person where safeFromJson JArray js jn return Person fromJson js fromJson jn safeFromJson mkError Converting Bounded and Enum values to Json For example data Color Red Green Blue Black deriving Typeable Show Eq Enum Bounded instance ToJson Color where toJson JNumber toRational fromEnum instance FromJson Color where safeFromJson JNumber checkBoundsEnum toEnum round safeFromJson mkError",
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "JSON2",
          "package": "json2",
          "partial": "JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for conversion from \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.JSON2",
          "name": "FromJson",
          "package": "json2",
          "source": "src/Data-JSON2.html#FromJson",
          "type": "class"
        },
        "index": {
          "description": "Class for conversion from Json",
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "FromJson",
          "package": "json2",
          "partial": "From Json",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#t:FromJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2",
          "name": "Json",
          "package": "json2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "Json",
          "package": "json2",
          "partial": "Json",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#t:Json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2",
          "name": "Jsons",
          "package": "json2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "Jsons",
          "package": "json2",
          "partial": "Jsons",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#t:Jsons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for conversion from \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.JSON2",
          "name": "ToJson",
          "package": "json2",
          "source": "src/Data-JSON2.html#ToJson",
          "type": "class"
        },
        "index": {
          "description": "Class for conversion from Json",
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "ToJson",
          "package": "json2",
          "partial": "To Json",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#t:ToJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two  \u003ccode\u003e\u003ca\u003eJObject\u003c/a\u003e\u003c/code\u003e. Other \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e values interpreted as \u003ccode\u003e\u003ca\u003eemptyObj\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ghci \u003e pp $ (\"a\" .= \"old\") += (\"a\" .= \"new\") += (\"bb\" .= \"other\")\n {\"a\": \"new\", \"bb\": \"other\"}\n\u003c/pre\u003e",
          "module": "Data.JSON2",
          "name": "(+=)",
          "package": "json2",
          "signature": "Json -\u003e Json -\u003e Json",
          "source": "src/Data-JSON2.html#%2B%3D",
          "type": "function"
        },
        "index": {
          "description": "Merge two JObject Other Json values interpreted as emptyObj ghci pp old new bb other new bb other",
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "(+=) +=",
          "normalized": "Json-\u003eJson-\u003eJson",
          "package": "json2",
          "signature": "Json-\u003eJson-\u003eJson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:-43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate single \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Data.JSON2",
          "name": "(.=)",
          "package": "json2",
          "signature": "String -\u003e v -\u003e Json",
          "source": "src/Data-JSON2.html#.%3D",
          "type": "function"
        },
        "index": {
          "description": "Create single Json object",
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "(.=) .=",
          "normalized": "String-\u003ea-\u003eJson",
          "package": "json2",
          "signature": "String-\u003ev-\u003eJson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:.-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2",
          "name": "JArray",
          "package": "json2",
          "signature": "JArray [Json]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "JArray",
          "normalized": "JArray[Json]",
          "package": "json2",
          "partial": "JArray",
          "signature": "JArray[Json]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:JArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2",
          "name": "JBool",
          "package": "json2",
          "signature": "JBool !Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "JBool",
          "package": "json2",
          "partial": "JBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:JBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2",
          "name": "JNull",
          "package": "json2",
          "signature": "JNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "JNull",
          "package": "json2",
          "partial": "JNull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:JNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2",
          "name": "JNumber",
          "package": "json2",
          "signature": "JNumber !Rational",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "JNumber",
          "package": "json2",
          "partial": "JNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:JNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2",
          "name": "JObject",
          "package": "json2",
          "signature": "JObject (Map String Json)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "JObject",
          "package": "json2",
          "partial": "JObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:JObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2",
          "name": "JString",
          "package": "json2",
          "signature": "JString String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "JString",
          "package": "json2",
          "partial": "JString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:JString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate empty \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Data.JSON2",
          "name": "emptyObj",
          "package": "json2",
          "signature": "Json",
          "source": "src/Data-JSON2.html#emptyObj",
          "type": "function"
        },
        "index": {
          "description": "Create empty Json object",
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "emptyObj",
          "package": "json2",
          "partial": "Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:emptyObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.JSON2",
          "name": "fromJson",
          "package": "json2",
          "signature": "Json -\u003e a",
          "source": "src/Data-JSON2.html#fromJson",
          "type": "function"
        },
        "index": {
          "description": "Conversion from Json",
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "fromJson",
          "normalized": "Json-\u003ea",
          "package": "json2",
          "partial": "Json",
          "signature": "Json-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:fromJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively merge the two \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e objects.\n\u003c/p\u003e",
          "module": "Data.JSON2",
          "name": "mergeRec",
          "package": "json2",
          "signature": "Json -\u003e Json -\u003e Json",
          "source": "src/Data-JSON2.html#mergeRec",
          "type": "function"
        },
        "index": {
          "description": "Recursively merge the two Json objects",
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "mergeRec",
          "normalized": "Json-\u003eJson-\u003eJson",
          "package": "json2",
          "partial": "Rec",
          "signature": "Json-\u003eJson-\u003eJson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:mergeRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e objects from list.\n\u003c/p\u003e\u003cpre\u003e ghci\u003e  pp $ merges [(\"a\" .= \"old\"), (\"a\" .= \"new\"), (\"bb\" .= \"other\")]\n {\"a\": \"new\", \"bb\": \"other\"}\n\u003c/pre\u003e",
          "module": "Data.JSON2",
          "name": "merges",
          "package": "json2",
          "signature": "[Json] -\u003e Json",
          "source": "src/Data-JSON2.html#merges",
          "type": "function"
        },
        "index": {
          "description": "Merge Json objects from list ghci pp merges old new bb other new bb other",
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "merges",
          "normalized": "[Json]-\u003eJson",
          "package": "json2",
          "signature": "[Json]-\u003eJson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:merges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e object from list.\n\u003c/p\u003e\u003cpre\u003e  ghci\u003e pp $ mkObj [(\"a\", \"old\"), (\"a\", \"new\"), (\"bb\", \"other\")]\n  {\"a\": \"new\", \"bb\": \"other\"}\n\u003c/pre\u003e",
          "module": "Data.JSON2",
          "name": "mkObj",
          "package": "json2",
          "signature": "[(String, v)] -\u003e Json",
          "source": "src/Data-JSON2.html#mkObj",
          "type": "function"
        },
        "index": {
          "description": "Create Json object from list ghci pp mkObj old new bb other new bb other",
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "mkObj",
          "normalized": "[(String,a)]-\u003eJson",
          "package": "json2",
          "partial": "Obj",
          "signature": "[(String,v)]-\u003eJson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:mkObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProjection \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e object to list of \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e\u003cpre\u003e \u003e pp $ projectionObj [\"b\", \"c\", \"b\"] $ mkObj [(\"a\",1),(\"b\", 2), (\"c\", 3)]\n [2, 3, 2]\n\u003c/pre\u003e",
          "module": "Data.JSON2",
          "name": "projectionObj",
          "package": "json2",
          "signature": "[String] -\u003e Json -\u003e Jsons",
          "source": "src/Data-JSON2.html#projectionObj",
          "type": "function"
        },
        "index": {
          "description": "Projection Json object to list of Json pp projectionObj mkObj",
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "projectionObj",
          "normalized": "[String]-\u003eJson-\u003eJsons",
          "package": "json2",
          "partial": "Obj",
          "signature": "[String]-\u003eJson-\u003eJsons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:projectionObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2",
          "name": "safeFromJson",
          "package": "json2",
          "signature": "Json -\u003e ConvResult a",
          "source": "src/Data-JSON2.html#safeFromJson",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "safeFromJson",
          "normalized": "Json-\u003eConvResult a",
          "package": "json2",
          "partial": "From Json",
          "signature": "Json-\u003eConvResult a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:safeFromJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JSON2",
          "name": "toJson",
          "package": "json2",
          "signature": "a -\u003e Json",
          "source": "src/Data-JSON2.html#toJson",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "toJson",
          "normalized": "a-\u003eJson",
          "package": "json2",
          "partial": "Json",
          "signature": "a-\u003eJson",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:toJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders \u003ccode\u003e\u003ca\u003eJson\u003c/a\u003e\u003c/code\u003e to String.\n\u003c/p\u003e",
          "module": "Data.JSON2",
          "name": "toString",
          "package": "json2",
          "signature": "Json -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Renders Json to String",
          "hierarchy": "Data JSON2",
          "module": "Data.JSON2",
          "name": "toString",
          "normalized": "Json-\u003eString",
          "package": "json2",
          "partial": "String",
          "signature": "Json-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json2/docs/Data-JSON2.html#v:toString"
      }
    }
  ]
]