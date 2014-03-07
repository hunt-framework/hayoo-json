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
        "word": "convertible-text"
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
          "package": "convertible-text",
          "source": "src/Data-Convertible-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "Base",
          "package": "convertible-text",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps any \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e which could occur during a \u003ccode\u003e\u003ca\u003econvertAttempt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "ConversionException",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Base.html#ConversionException",
          "type": "data"
        },
        "index": {
          "description": "Wraps any Exception which could occur during convertAttempt",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "ConversionException",
          "package": "convertible-text",
          "partial": "Conversion Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#t:ConversionException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass that represents something that can attempt a conversion.\nAn \u003ccode\u003eConvertAttempt a b\u003c/code\u003e instance represents an \u003ccode\u003ea\u003c/code\u003e that might be convertible to a \u003ccode\u003eb\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "ConvertAttempt",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Base.html#ConvertAttempt",
          "type": "class"
        },
        "index": {
          "description": "typeclass that represents something that can attempt conversion An ConvertAttempt instance represents an that might be convertible to",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "ConvertAttempt",
          "package": "convertible-text",
          "partial": "Convert Attempt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#t:ConvertAttempt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass that represents something that guarantees a successful conversion.\nA \u003ccode\u003eConvertSuccess a b\u003c/code\u003e instance represents an \u003ccode\u003ea\u003c/code\u003e that can be converted to a \u003ccode\u003eb\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "ConvertSuccess",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Base.html#ConvertSuccess",
          "type": "class"
        },
        "index": {
          "description": "typeclass that represents something that guarantees successful conversion ConvertSuccess instance represents an that can be converted to",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "ConvertSuccess",
          "package": "convertible-text",
          "partial": "Convert Success",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#t:ConvertSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Base",
          "name": "ConversionException",
          "package": "convertible-text",
          "signature": "ConversionException e",
          "source": "src/Data-Convertible-Base.html#ConversionException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "ConversionException",
          "package": "convertible-text",
          "partial": "Conversion Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#v:ConversionException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience synonym for \u003ccode\u003e\u003ca\u003econvertAttempt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "ca",
          "package": "convertible-text",
          "signature": "x -\u003e Attempt y",
          "source": "src/Data-Convertible-Base.html#ca",
          "type": "function"
        },
        "index": {
          "description": "convenience synonym for convertAttempt",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "ca",
          "normalized": "a-\u003eAttempt b",
          "package": "convertible-text",
          "signature": "x-\u003eAttempt y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#v:ca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e, returning \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e on success and \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e on error.\n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "convertAttempt",
          "package": "convertible-text",
          "signature": "a -\u003e Attempt b",
          "source": "src/Data-Convertible-Base.html#convertAttempt",
          "type": "method"
        },
        "index": {
          "description": "Convert to returning Success on success and Failure on error",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "convertAttempt",
          "normalized": "a-\u003eAttempt b",
          "package": "convertible-text",
          "partial": "Attempt",
          "signature": "a-\u003eAttempt b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#v:convertAttempt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003e\u003ca\u003econvertAttempt\u003c/a\u003e\u003c/code\u003e, wrapping any \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003es in a\n \u003ccode\u003e\u003ca\u003eConversionException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "convertAttemptWrap",
          "package": "convertible-text",
          "signature": "a -\u003e m b",
          "source": "src/Data-Convertible-Base.html#convertAttemptWrap",
          "type": "function"
        },
        "index": {
          "description": "Calls convertAttempt wrapping any Exception in ConversionException",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "convertAttemptWrap",
          "normalized": "a-\u003eb c",
          "package": "convertible-text",
          "partial": "Attempt Wrap",
          "signature": "a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#v:convertAttemptWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "convertSuccess",
          "package": "convertible-text",
          "signature": "a -\u003e b",
          "source": "src/Data-Convertible-Base.html#convertSuccess",
          "type": "method"
        },
        "index": {
          "description": "Convert to",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "convertSuccess",
          "normalized": "a-\u003eb",
          "package": "convertible-text",
          "partial": "Success",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#v:convertSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from one type of data to another.  Raises an exception if there is\nan error with the conversion.  For a function that does not raise an exception\nin that case, see \u003ccode\u003e\u003ca\u003econvertAttempt\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "convertUnsafe",
          "package": "convertible-text",
          "signature": "a -\u003e b",
          "source": "src/Data-Convertible-Base.html#convertUnsafe",
          "type": "function"
        },
        "index": {
          "description": "Convert from one type of data to another Raises an exception if there is an error with the conversion For function that does not raise an exception in that case see convertAttempt",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "convertUnsafe",
          "normalized": "a-\u003eb",
          "package": "convertible-text",
          "partial": "Unsafe",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#v:convertUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience synonym for \u003ccode\u003e\u003ca\u003econvertSuccess\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "cs",
          "package": "convertible-text",
          "signature": "x -\u003e y",
          "source": "src/Data-Convertible-Base.html#cs",
          "type": "function"
        },
        "index": {
          "description": "convenience synonym for convertSuccess",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "cs",
          "normalized": "a-\u003eb",
          "package": "convertible-text",
          "signature": "x-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#v:cs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate Haskell to derive \u003ccode\u003e\u003ca\u003eConvertAttempt\u003c/a\u003e\u003c/code\u003e instances from the\n corresponding \u003ccode\u003e\u003ca\u003eConvertSuccess\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e",
          "module": "Data.Convertible.Base",
          "name": "deriveAttempts",
          "package": "convertible-text",
          "signature": "[(Q Type, Q Type)] -\u003e Q [Dec]",
          "source": "src/Data-Convertible-Base.html#deriveAttempts",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell to derive ConvertAttempt instances from the corresponding ConvertSuccess instances",
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "deriveAttempts",
          "normalized": "[(Q Type,Q Type)]-\u003eQ[Dec]",
          "package": "convertible-text",
          "partial": "Attempts",
          "signature": "[(Q Type,Q Type)]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#v:deriveAttempts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Base",
          "name": "failure",
          "package": "convertible-text",
          "signature": "forall v.  e -\u003e f v",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Convertible Base",
          "module": "Data.Convertible.Base",
          "name": "failure",
          "normalized": "a b c-\u003ed e",
          "package": "convertible-text",
          "signature": "forall v. e-\u003ef v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Base.html#v:failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNumeric instances for Convertible for C types.  See comments in\n\u003ca\u003eData.Convertible.Instances.Num\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2009 John Goerzen \u003ca\u003ejgoerzen@complete.org\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAll rights reserved.\n\u003c/p\u003e\u003cp\u003eFor license and copyright information, see the file LICENSE\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances.C",
          "name": "C",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Instances-C.html",
          "type": "module"
        },
        "index": {
          "description": "Numeric instances for Convertible for types See comments in Data.Convertible.Instances.Num Copyright John Goerzen jgoerzen@complete.org All rights reserved For license and copyright information see the file LICENSE",
          "hierarchy": "Data Convertible Instances C",
          "module": "Data.Convertible.Instances.C",
          "name": "C",
          "package": "convertible-text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Instances-C.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstances to convert between Map and association list.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2009 John Goerzen \u003ca\u003ejgoerzen@complete.org\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAll rights reserved.\n\u003c/p\u003e\u003cp\u003eFor license and copyright information, see the file LICENSE\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances.Map",
          "name": "Map",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Instances-Map.html",
          "type": "module"
        },
        "index": {
          "description": "Instances to convert between Map and association list Copyright John Goerzen jgoerzen@complete.org All rights reserved For license and copyright information see the file LICENSE",
          "hierarchy": "Data Convertible Instances Map",
          "module": "Data.Convertible.Instances.Map",
          "name": "Map",
          "package": "convertible-text",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Instances-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNumeric instances for Convertible.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2009 John Goerzen \u003ca\u003ejgoerzen@complete.org\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAll rights reserved.\n\u003c/p\u003e\u003cp\u003eFor license and copyright information, see the file LICENSE\n\u003c/p\u003e\u003cp\u003eThese instances perform conversion between numeric types such as Double, Int, Integer,\nRational, and the like.  Here are some notes about the conversion process:\n\u003c/p\u003e\u003cp\u003eConversions from floating-point types such as Double to integral types are dune via the\n\u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e function.  This is a somewhat arbitrary decision; if you need different\nbehavior, you will have to write your own instance or manually perform the conversion.\n\u003c/p\u003e\u003cp\u003eAll conversions perform bounds checking.  If a value is too large for its destination\ntype, you will get a \u003ccode\u003eConvertError\u003c/code\u003e informing you of this.  Note that this behavior\ndiffers from functions in the Haskell standard libraries, which will perform the\nconversion without error, but give you garbage in the end.\n\u003c/p\u003e\u003cp\u003eConversions do not perform precision checking; loss of precision is implied with certain\nconversions (for instance, Double to Float) and this is not an error.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances.Num",
          "name": "Num",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Instances-Num.html",
          "type": "module"
        },
        "index": {
          "description": "Numeric instances for Convertible Copyright John Goerzen jgoerzen@complete.org All rights reserved For license and copyright information see the file LICENSE These instances perform conversion between numeric types such as Double Int Integer Rational and the like Here are some notes about the conversion process Conversions from floating-point types such as Double to integral types are dune via the truncate function This is somewhat arbitrary decision if you need different behavior you will have to write your own instance or manually perform the conversion All conversions perform bounds checking If value is too large for its destination type you will get ConvertError informing you of this Note that this behavior differs from functions in the Haskell standard libraries which will perform the conversion without error but give you garbage in the end Conversions do not perform precision checking loss of precision is implied with certain conversions for instance Double to Float and this is not an error",
          "hierarchy": "Data Convertible Instances Num",
          "module": "Data.Convertible.Instances.Num",
          "name": "Num",
          "package": "convertible-text",
          "partial": "Num",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Instances-Num.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eConvertSuccess\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eConvertAttempt\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, along\n with instances for bytestrings and text (lazy and strict).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances.String",
          "name": "String",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Instances-String.html",
          "type": "module"
        },
        "index": {
          "description": "Instances of ConvertSuccess and ConvertAttempt for String along with instances for bytestrings and text lazy and strict",
          "hierarchy": "Data Convertible Instances String",
          "module": "Data.Convertible.Instances.String",
          "name": "String",
          "package": "convertible-text",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Instances-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Instances.String",
          "name": "InvalidBoolException",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Instances-String.html#InvalidBoolException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Convertible Instances String",
          "module": "Data.Convertible.Instances.String",
          "name": "InvalidBoolException",
          "package": "convertible-text",
          "partial": "Invalid Bool Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Instances-String.html#t:InvalidBoolException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Instances.String",
          "name": "InvalidDayException",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Instances-String.html#InvalidDayException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Convertible Instances String",
          "module": "Data.Convertible.Instances.String",
          "name": "InvalidDayException",
          "package": "convertible-text",
          "partial": "Invalid Day Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Instances-String.html#t:InvalidDayException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Instances.String",
          "name": "InvalidBoolException",
          "package": "convertible-text",
          "signature": "InvalidBoolException String",
          "source": "src/Data-Convertible-Instances-String.html#InvalidBoolException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Convertible Instances String",
          "module": "Data.Convertible.Instances.String",
          "name": "InvalidBoolException",
          "package": "convertible-text",
          "partial": "Invalid Bool Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Instances-String.html#v:InvalidBoolException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Instances.String",
          "name": "InvalidDayException",
          "package": "convertible-text",
          "signature": "InvalidDayException String",
          "source": "src/Data-Convertible-Instances-String.html#InvalidDayException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Convertible Instances String",
          "module": "Data.Convertible.Instances.String",
          "name": "InvalidDayException",
          "package": "convertible-text",
          "partial": "Invalid Day Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Instances-String.html#v:InvalidDayException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstances to convert amongst \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, strict bytestrings, lazy\n bytestrings, strict text and lazy text.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances.Text",
          "name": "Text",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Instances-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Instances to convert amongst String strict bytestrings lazy bytestrings strict text and lazy text",
          "hierarchy": "Data Convertible Instances Text",
          "module": "Data.Convertible.Instances.Text",
          "name": "Text",
          "package": "convertible-text",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Instances-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstances to convert between various time structures, both old- and new-style.\n\u003c/p\u003e\u003cp\u003eAt present, this module does not do full input validation.  That is, it is possible\nto get an exception rather than a Left result from these functions if your input is\ninvalid, particularly when converting from the old-style System.Time structures.\n\u003c/p\u003e\u003cp\u003eCopyright (C) 2009 John Goerzen \u003ca\u003ejgoerzen@complete.org\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAll rights reserved.\n\u003c/p\u003e\u003cp\u003eFor license and copyright information, see the file LICENSE\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances.Time",
          "name": "Time",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Instances-Time.html",
          "type": "module"
        },
        "index": {
          "description": "Instances to convert between various time structures both old and new-style At present this module does not do full input validation That is it is possible to get an exception rather than Left result from these functions if your input is invalid particularly when converting from the old-style System.Time structures Copyright John Goerzen jgoerzen@complete.org All rights reserved For license and copyright information see the file LICENSE",
          "hierarchy": "Data Convertible Instances Time",
          "module": "Data.Convertible.Instances.Time",
          "name": "Time",
          "package": "convertible-text",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Instances-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCollection of ready-made \u003ccode\u003eConvertSuccess\u003c/code\u003e and \u003ccode\u003eConvertAttempt\u003c/code\u003e instances.  See\neach individual module for more docs:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Instances.C\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Instances.Map\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Instances.Num\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Instances.Time\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Instances.Text\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Instances.String\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eYou can find a list of these instances at \u003ccode\u003eConvertSuccess\u003c/code\u003e and \u003ccode\u003eConvertAttempt\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Instances",
          "name": "Instances",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Collection of ready-made ConvertSuccess and ConvertAttempt instances See each individual module for more docs Data.Convertible.Instances.C Data.Convertible.Instances.Map Data.Convertible.Instances.Num Data.Convertible.Instances.Time Data.Convertible.Instances.Text Data.Convertible.Instances.String You can find list of these instances at ConvertSuccess and ConvertAttempt",
          "hierarchy": "Data Convertible Instances",
          "module": "Data.Convertible.Instances",
          "name": "Instances",
          "package": "convertible-text",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a library to provide a uniform interface for safe conversions between\ndifferent types of data.  To get started reading about it, consult:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Base\u003c/a\u003e for information about the conversions themselves\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Utils\u003c/a\u003e for helpful tools for people writing \u003ccode\u003eConvertible\u003c/code\u003e instances\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eData.Convertible.Instances\u003c/a\u003e for a large collection of ready-built \u003ccode\u003eConvertible\u003c/code\u003e instances\n\u003c/p\u003e\u003cp\u003eYou can import these modules individually, or this module will export the entire library\nfor you.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Convertible.Text",
          "name": "Text",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Text.html",
          "type": "module"
        },
        "index": {
          "description": "This is library to provide uniform interface for safe conversions between different types of data To get started reading about it consult Data.Convertible.Base for information about the conversions themselves Data.Convertible.Utils for helpful tools for people writing Convertible instances Data.Convertible.Instances for large collection of ready-built Convertible instances You can import these modules individually or this module will export the entire library for you",
          "hierarchy": "Data Convertible Text",
          "module": "Data.Convertible.Text",
          "name": "Text",
          "package": "convertible-text",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Utils",
          "name": "Utils",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Convertible Utils",
          "module": "Data.Convertible.Utils",
          "name": "Utils",
          "package": "convertible-text",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Utils",
          "name": "ConvertBoundsException",
          "package": "convertible-text",
          "source": "src/Data-Convertible-Utils.html#ConvertBoundsException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Convertible Utils",
          "module": "Data.Convertible.Utils",
          "name": "ConvertBoundsException",
          "package": "convertible-text",
          "partial": "Convert Bounds Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Utils.html#t:ConvertBoundsException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Convertible.Utils",
          "name": "ConvertBoundsException",
          "package": "convertible-text",
          "signature": "ConvertBoundsException v v a",
          "source": "src/Data-Convertible-Utils.html#ConvertBoundsException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Convertible Utils",
          "module": "Data.Convertible.Utils",
          "name": "ConvertBoundsException",
          "package": "convertible-text",
          "partial": "Convert Bounds Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Utils.html#v:ConvertBoundsException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function to perform bounds checking as part of a conversion.\n\u003c/p\u003e\u003cp\u003eDoes this be examining the bounds of the destination type, converting to the type of\nthe source via \u003ccode\u003esafeConvert\u003c/code\u003e, comparing to the source value.  Results in an error\nif the conversion is out of bounds. \n\u003c/p\u003e",
          "module": "Data.Convertible.Utils",
          "name": "boundedConversion",
          "package": "convertible-text",
          "signature": "(a -\u003e Attempt b)-\u003e a-\u003e Attempt b",
          "type": "function"
        },
        "index": {
          "description": "Utility function to perform bounds checking as part of conversion Does this be examining the bounds of the destination type converting to the type of the source via safeConvert comparing to the source value Results in an error if the conversion is out of bounds",
          "hierarchy": "Data Convertible Utils",
          "module": "Data.Convertible.Utils",
          "name": "boundedConversion",
          "normalized": "(a-\u003eAttempt b)-\u003ea-\u003eAttempt b",
          "package": "convertible-text",
          "partial": "Conversion",
          "signature": "(a-\u003eAttempt b)-\u003ea-\u003eAttempt b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Utils.html#v:boundedConversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful for defining conversions that are implemented in terms of other\nconversions via an intermediary type. Instead of:\n\u003c/p\u003e\u003cpre\u003einstance Convertible CalendarTime POSIXTime where\n    safeConvert a = do r \u003c- safeConvert a\n                       safeConvert (r :: ClockTime)\n\u003c/pre\u003e\u003cp\u003ewe can now write:\n\u003c/p\u003e\u003cpre\u003einstance Convertible CalendarTime POSIXTime where\n    safeConvert = convertVia (undefined::ClockTime)\n\u003c/pre\u003e\u003cp\u003ewhich does the same thing -- converts a CalendarTime to a ClockTime, then a\nClockTime to a POSIXTime, both using existing \u003ccode\u003eConvertible\u003c/code\u003e instances.\n\u003c/p\u003e",
          "module": "Data.Convertible.Utils",
          "name": "convertAttemptVia",
          "package": "convertible-text",
          "signature": "b-\u003e a-\u003e Attempt c",
          "type": "function"
        },
        "index": {
          "description": "Useful for defining conversions that are implemented in terms of other conversions via an intermediary type Instead of instance Convertible CalendarTime POSIXTime where safeConvert do safeConvert safeConvert ClockTime we can now write instance Convertible CalendarTime POSIXTime where safeConvert convertVia undefined ClockTime which does the same thing converts CalendarTime to ClockTime then ClockTime to POSIXTime both using existing Convertible instances",
          "hierarchy": "Data Convertible Utils",
          "module": "Data.Convertible.Utils",
          "name": "convertAttemptVia",
          "normalized": "a-\u003eb-\u003eAttempt c",
          "package": "convertible-text",
          "partial": "Attempt Via",
          "signature": "b-\u003ea-\u003eAttempt c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Utils.html#v:convertAttemptVia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003econvertAttemptVia\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eConvertSuccess\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.Convertible.Utils",
          "name": "convertSuccessVia",
          "package": "convertible-text",
          "signature": "b-\u003e a-\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Same as convertAttemptVia for ConvertSuccess",
          "hierarchy": "Data Convertible Utils",
          "module": "Data.Convertible.Utils",
          "name": "convertSuccessVia",
          "normalized": "a-\u003eb-\u003ec",
          "package": "convertible-text",
          "partial": "Success Via",
          "signature": "b-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Utils.html#v:convertSuccessVia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful for defining \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e instances.  Example:\n\u003c/p\u003e\u003cpre\u003einstance Typeable TimeOfDay where\n    typeOf _ = mkTypeName \"TimeOfDay\"\n\u003c/pre\u003e",
          "module": "Data.Convertible.Utils",
          "name": "mkTypeName",
          "package": "convertible-text",
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
          "package": "convertible-text",
          "partial": "Type Name",
          "signature": "String-\u003eTypeRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/convertible-text/docs/Data-Convertible-Utils.html#v:mkTypeName"
      }
    }
  ]
]