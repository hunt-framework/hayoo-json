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
        "word": "convertible"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Base",
          "name": "Base",
          "package": "convertible",
          "source": "src/Data-Convertible-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "Base",
          "package": "convertible",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow we indicate that there was an error. \n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "ConvertError",
          "package": "convertible",
          "source": "src/Data-Convertible-Base.html#ConvertError",
          "type": "data"
        },
        "index": {
          "description": "How we indicate that there was an error",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "ConvertError",
          "package": "convertible",
          "partial": "Convert Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#t:ConvertError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a safe conversion via \u003ccode\u003e\u003ca\u003esafeConvert\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "ConvertResult",
          "package": "convertible",
          "source": "src/Data-Convertible-Base.html#ConvertResult",
          "type": "type"
        },
        "index": {
          "description": "The result of safe conversion via safeConvert",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "ConvertResult",
          "package": "convertible",
          "partial": "Convert Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#t:ConvertResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass that represents something that can be converted.\nA \u003ccode\u003eConvertible a b\u003c/code\u003e instance represents an \u003ccode\u003ea\u003c/code\u003e that can be converted to a \u003ccode\u003eb\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "Convertible",
          "package": "convertible",
          "source": "src/Data-Convertible-Base.html#Convertible",
          "type": "class"
        },
        "index": {
          "description": "typeclass that represents something that can be converted Convertible instance represents an that can be converted to",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "Convertible",
          "package": "convertible",
          "partial": "Convertible",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#t:Convertible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Base",
          "name": "ConvertError",
          "package": "convertible",
          "signature": "ConvertError",
          "source": "src/Data-Convertible-Base.html#ConvertError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "ConvertError",
          "package": "convertible",
          "partial": "Convert Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#v:ConvertError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Base",
          "name": "convDestType",
          "package": "convertible",
          "signature": "String",
          "source": "src/Data-Convertible-Base.html#ConvertError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "convDestType",
          "package": "convertible",
          "partial": "Dest Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#v:convDestType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Base",
          "name": "convError",
          "package": "convertible",
          "signature": "String -\u003e a -\u003e ConvertResult b",
          "source": "src/Data-Convertible-Base.html#convError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "convError",
          "normalized": "String-\u003ea-\u003eConvertResult b",
          "package": "convertible",
          "partial": "Error",
          "signature": "String-\u003ea-\u003eConvertResult b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#v:convError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Base",
          "name": "convErrorMessage",
          "package": "convertible",
          "signature": "String",
          "source": "src/Data-Convertible-Base.html#ConvertError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "convErrorMessage",
          "package": "convertible",
          "partial": "Error Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#v:convErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Base",
          "name": "convSourceType",
          "package": "convertible",
          "signature": "String",
          "source": "src/Data-Convertible-Base.html#ConvertError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "convSourceType",
          "package": "convertible",
          "partial": "Source Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#v:convSourceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Base",
          "name": "convSourceValue",
          "package": "convertible",
          "signature": "String",
          "source": "src/Data-Convertible-Base.html#ConvertError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "convSourceValue",
          "package": "convertible",
          "partial": "Source Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#v:convSourceValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from one type of data to another.  Raises an exception if there is\nan error with the conversion.  For a function that does not raise an exception\nin that case, see \u003ccode\u003e\u003ca\u003esafeConvert\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "convert",
          "package": "convertible",
          "signature": "a -\u003e b",
          "source": "src/Data-Convertible-Base.html#convert",
          "type": "function"
        },
        "index": {
          "description": "Convert from one type of data to another Raises an exception if there is an error with the conversion For function that does not raise an exception in that case see safeConvert",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "convert",
          "normalized": "a-\u003eb",
          "package": "convertible",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Base",
          "name": "prettyConvertError",
          "package": "convertible",
          "signature": "ConvertError -\u003e String",
          "source": "src/Data-Convertible-Base.html#prettyConvertError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "prettyConvertError",
          "normalized": "ConvertError-\u003eString",
          "package": "convertible",
          "partial": "Convert Error",
          "signature": "ConvertError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#v:prettyConvertError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e, returning Right on success and Left on error.\n       For a simpler interface, see \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "safeConvert",
          "package": "convertible",
          "signature": "a -\u003e ConvertResult b",
          "source": "src/Data-Convertible-Base.html#safeConvert",
          "type": "method"
        },
        "index": {
          "description": "Convert to returning Right on success and Left on error For simpler interface see convert",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "safeConvert",
          "normalized": "a-\u003eConvertResult b",
          "package": "convertible",
          "partial": "Convert",
          "signature": "a-\u003eConvertResult b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Base.html#v:safeConvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNumeric instances for Convertible for C types.  See comments in\n\u003ca\u003eData.Convertible.Instances.Num\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2009-2011 John Goerzen \u003ca\u003ejgoerzen@complete.org\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAll rights reserved.\n\u003c/p\u003e\u003cp\u003eFor license and copyright information, see the file LICENSE\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances.C",
          "name": "C",
          "package": "convertible",
          "source": "src/Data-Convertible-Instances-C.html",
          "type": "module"
        },
        "index": {
          "description": "Numeric instances for Convertible for types See comments in Data.Convertible.Instances.Num Copyright John Goerzen jgoerzen@complete.org All rights reserved For license and copyright information see the file LICENSE",
          "hierarchy": "Data Convertible Instances C",
          "module": "Data.Convertible.Instances.C",
          "name": "C",
          "package": "convertible",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Instances-C.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstances to convert between Map and association list.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2009-2011 John Goerzen \u003ca\u003ejgoerzen@complete.org\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAll rights reserved.\n\u003c/p\u003e\u003cp\u003eFor license and copyright information, see the file LICENSE\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances.Map",
          "name": "Map",
          "package": "convertible",
          "source": "src/Data-Convertible-Instances-Map.html",
          "type": "module"
        },
        "index": {
          "description": "Instances to convert between Map and association list Copyright John Goerzen jgoerzen@complete.org All rights reserved For license and copyright information see the file LICENSE",
          "hierarchy": "Data Convertible Instances Map",
          "module": "Data.Convertible.Instances.Map",
          "name": "Map",
          "package": "convertible",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Instances-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNumeric instances for Convertible.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2009-2011 John Goerzen \u003ca\u003ejgoerzen@complete.org\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAll rights reserved.\n\u003c/p\u003e\u003cp\u003eFor license and copyright information, see the file LICENSE\n\u003c/p\u003e\u003cp\u003eThese instances perform conversion between numeric types such as Double, Int, Integer,\nRational, and the like.  Here are some notes about the conversion process:\n\u003c/p\u003e\u003cp\u003eConversions from floating-point types such as Double to integral types are done via the\n\u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e function.  This is a somewhat arbitrary decision; if you need different\nbehavior, you will have to write your own instance or manually perform the conversion.\n\u003c/p\u003e\u003cp\u003eAll conversions perform bounds checking.  If a value is too large for its destination\ntype, you will get a \u003ccode\u003e\u003ca\u003eConvertError\u003c/a\u003e\u003c/code\u003e informing you of this.  Note that this behavior\ndiffers from functions in the Haskell standard libraries, which will perform the\nconversion without error, but give you garbage in the end.\n\u003c/p\u003e\u003cp\u003eConversions do not perform precision checking; loss of precision is implied with certain\nconversions (for instance, Double to Float) and this is not an error.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances.Num",
          "name": "Num",
          "package": "convertible",
          "source": "src/Data-Convertible-Instances-Num.html",
          "type": "module"
        },
        "index": {
          "description": "Numeric instances for Convertible Copyright John Goerzen jgoerzen@complete.org All rights reserved For license and copyright information see the file LICENSE These instances perform conversion between numeric types such as Double Int Integer Rational and the like Here are some notes about the conversion process Conversions from floating-point types such as Double to integral types are done via the truncate function This is somewhat arbitrary decision if you need different behavior you will have to write your own instance or manually perform the conversion All conversions perform bounds checking If value is too large for its destination type you will get ConvertError informing you of this Note that this behavior differs from functions in the Haskell standard libraries which will perform the conversion without error but give you garbage in the end Conversions do not perform precision checking loss of precision is implied with certain conversions for instance Double to Float and this is not an error",
          "hierarchy": "Data Convertible Instances Num",
          "module": "Data.Convertible.Instances.Num",
          "name": "Num",
          "package": "convertible",
          "partial": "Num",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Instances-Num.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eText instances for Convertible.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2011 MailRank, Inc. \u003ca\u003ebos@mailrank.com\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAll rights reserved.\n\u003c/p\u003e\u003cp\u003eFor license and copyright information, see the file COPYRIGHT\n\u003c/p\u003e\u003cp\u003eThese instances perform conversion between text-like types such as\nText, ByteString, and the like.\n\u003c/p\u003e\u003cp\u003eThe instances do \u003cem\u003enot\u003c/em\u003e include conversions between ByteString and\nText or String, since such conversions cannot safely be performed\nwithout knowing the encoding of the ByteString.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances.Text",
          "name": "Text",
          "package": "convertible",
          "source": "src/Data-Convertible-Instances-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Text instances for Convertible Copyright MailRank Inc bos@mailrank.com All rights reserved For license and copyright information see the file COPYRIGHT These instances perform conversion between text-like types such as Text ByteString and the like The instances do not include conversions between ByteString and Text or String since such conversions cannot safely be performed without knowing the encoding of the ByteString",
          "hierarchy": "Data Convertible Instances Text",
          "module": "Data.Convertible.Instances.Text",
          "name": "Text",
          "package": "convertible",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Instances-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstances to convert between various time structures, both old- and new-style.\n\u003c/p\u003e\u003cp\u003eAt present, this module does not do full input validation.  That is, it is possible\nto get an exception rather than a Left result from these functions if your input is\ninvalid, particularly when converting from the old-style System.Time structures.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2009-2011 John Goerzen \u003ca\u003ejgoerzen@complete.org\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAll rights reserved.\n\u003c/p\u003e\u003cp\u003eFor license and copyright information, see the file LICENSE\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances.Time",
          "name": "Time",
          "package": "convertible",
          "source": "src/Data-Convertible-Instances-Time.html",
          "type": "module"
        },
        "index": {
          "description": "Instances to convert between various time structures both old and new-style At present this module does not do full input validation That is it is possible to get an exception rather than Left result from these functions if your input is invalid particularly when converting from the old-style System.Time structures Copyright John Goerzen jgoerzen@complete.org All rights reserved For license and copyright information see the file LICENSE",
          "hierarchy": "Data Convertible Instances Time",
          "module": "Data.Convertible.Instances.Time",
          "name": "Time",
          "package": "convertible",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Instances-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCollection of ready-made \u003ccode\u003e\u003ca\u003eConvertible\u003c/a\u003e\u003c/code\u003e instances.  See\neach individual module for more docs:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Instances.C\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Instances.Map\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Instances.Num\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Instances.Time\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eYou can find a list of these instances at \u003ccode\u003e\u003ca\u003eConvertible\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances",
          "name": "Instances",
          "package": "convertible",
          "source": "src/Data-Convertible-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Collection of ready-made Convertible instances See each individual module for more docs Data.Convertible.Instances.C Data.Convertible.Instances.Map Data.Convertible.Instances.Num Data.Convertible.Instances.Time You can find list of these instances at Convertible",
          "hierarchy": "Data Convertible Instances",
          "module": "Data.Convertible.Instances",
          "name": "Instances",
          "package": "convertible",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Utils",
          "name": "Utils",
          "package": "convertible",
          "source": "src/Data-Convertible-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Convertible Utils",
          "module": "Data.Convertible.Utils",
          "name": "Utils",
          "package": "convertible",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function to perform bounds checking as part of a conversion.\n\u003c/p\u003e\u003cp\u003eDoes this be examining the bounds of the destination type, converting to the type of\nthe source via \u003ccode\u003e\u003ca\u003esafeConvert\u003c/a\u003e\u003c/code\u003e, comparing to the source value.  Results in an error\nif the conversion is out of bounds. \n\u003c/p\u003e",
          "module": "Data.Convertible.Utils",
          "name": "boundedConversion",
          "package": "convertible",
          "signature": "(a -\u003e ConvertResult b)-\u003e a-\u003e ConvertResult b",
          "type": "function"
        },
        "index": {
          "description": "Utility function to perform bounds checking as part of conversion Does this be examining the bounds of the destination type converting to the type of the source via safeConvert comparing to the source value Results in an error if the conversion is out of bounds",
          "hierarchy": "Data Convertible Utils",
          "module": "Data.Convertible.Utils",
          "name": "boundedConversion",
          "normalized": "(a-\u003eConvertResult b)-\u003ea-\u003eConvertResult b",
          "package": "convertible",
          "partial": "Conversion",
          "signature": "(a-\u003eConvertResult b)-\u003ea-\u003eConvertResult b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Utils.html#v:boundedConversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful for defining conversions that are implemented in terms of other\nconversions via an intermediary type. Instead of:\n\u003c/p\u003e\u003cpre\u003einstance Convertible CalendarTime POSIXTime where\n    safeConvert a = do r \u003c- safeConvert a\n                       safeConvert (r :: ClockTime)\n\u003c/pre\u003e\u003cp\u003ewe can now write:\n\u003c/p\u003e\u003cpre\u003einstance Convertible CalendarTime POSIXTime where\n    safeConvert = convertVia (undefined::ClockTime)\n\u003c/pre\u003e\u003cp\u003ewhich does the same thing -- converts a CalendarTime to a ClockTime, then a\nClockTime to a POSIXTime, both using existing \u003ccode\u003e\u003ca\u003eConvertible\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e",
          "module": "Data.Convertible.Utils",
          "name": "convertVia",
          "package": "convertible",
          "signature": "b-\u003e a-\u003e ConvertResult c",
          "type": "function"
        },
        "index": {
          "description": "Useful for defining conversions that are implemented in terms of other conversions via an intermediary type Instead of instance Convertible CalendarTime POSIXTime where safeConvert do safeConvert safeConvert ClockTime we can now write instance Convertible CalendarTime POSIXTime where safeConvert convertVia undefined ClockTime which does the same thing converts CalendarTime to ClockTime then ClockTime to POSIXTime both using existing Convertible instances",
          "hierarchy": "Data Convertible Utils",
          "module": "Data.Convertible.Utils",
          "name": "convertVia",
          "normalized": "a-\u003eb-\u003eConvertResult c",
          "package": "convertible",
          "partial": "Via",
          "signature": "b-\u003ea-\u003eConvertResult c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Utils.html#v:convertVia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful for defining \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e instances.  Example:\n\u003c/p\u003e\u003cpre\u003einstance Typeable TimeOfDay where\n    typeOf _ = mkTypeName \"TimeOfDay\"\n\u003c/pre\u003e",
          "module": "Data.Convertible.Utils",
          "name": "mkTypeName",
          "package": "convertible",
          "signature": "String -\u003e TypeRep",
          "source": "src/Data-Convertible-Utils.html#mkTypeName",
          "type": "function"
        },
        "index": {
          "description": "Useful for defining Typeable instances Example instance Typeable TimeOfDay where typeOf mkTypeName TimeOfDay",
          "hierarchy": "Data Convertible Utils",
          "module": "Data.Convertible.Utils",
          "name": "mkTypeName",
          "normalized": "String-\u003eTypeRep",
          "package": "convertible",
          "partial": "Type Name",
          "signature": "String-\u003eTypeRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible-Utils.html#v:mkTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a library to provide a uniform interface for safe conversions between\ndifferent types of data.  To get started reading about it, consult:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Base\u003c/a\u003e for information about the conversions themselves\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Utils\u003c/a\u003e for helpful tools for people writing \u003ccode\u003e\u003ca\u003eConvertible\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Instances\u003c/a\u003e for a large collection of ready-built \u003ccode\u003e\u003ca\u003eConvertible\u003c/a\u003e\u003c/code\u003e instances\n\u003c/p\u003e\u003cp\u003eYou can import these modules individually, or this module will export the entire library\nfor you.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible",
          "name": "Convertible",
          "package": "convertible",
          "source": "src/Data-Convertible.html",
          "type": "module"
        },
        "index": {
          "description": "This is library to provide uniform interface for safe conversions between different types of data To get started reading about it consult Data.Convertible.Base for information about the conversions themselves Data.Convertible.Utils for helpful tools for people writing Convertible instances Data.Convertible.Instances for large collection of ready-built Convertible instances You can import these modules individually or this module will export the entire library for you",
          "hierarchy": "Data Convertible",
          "module": "Data.Convertible",
          "name": "Convertible",
          "package": "convertible",
          "partial": "Convertible",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible/docs/Data-Convertible.html#"
      }
    }
  ]
]