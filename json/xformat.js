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
        "word": "xformat"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an extensible, type-indexed function for reading\n well-typed values from a string with a format descriptor. This may be\n considered a Haskell variant of the C \u003ccode\u003escanf\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eIf you are primarily interested in using this library, you will want to see\n \u003ccode\u003e\u003ca\u003ereadsf\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadf\u003c/a\u003e\u003c/code\u003e, the more user-friendly functions.\n\u003c/p\u003e\u003cp\u003eIf you are also interested in extending this library with your own format\n descriptors, you should read about the \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XFormat.Read",
          "name": "Read",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines an extensible type-indexed function for reading well-typed values from string with format descriptor This may be considered Haskell variant of the scanf function If you are primarily interested in using this library you will want to see readsf and readf the more user-friendly functions If you are also interested in extending this library with your own format descriptors you should read about the Format class",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Read",
          "package": "xformat",
          "partial": "Read",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative pair. First parse a \u003ccode\u003ea\u003c/code\u003e-type format and then a \u003ccode\u003eb\u003c/code\u003e-type\n format.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": ":%:",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#%3A%25%3A",
          "type": "data"
        },
        "index": {
          "description": "Right-associative pair First parse type format and then type format",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": ":%:",
          "package": "xformat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t::-37-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a character.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "CharF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#CharF",
          "type": "data"
        },
        "index": {
          "description": "Parse character",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "CharF",
          "package": "xformat",
          "partial": "Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:CharF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one of the optional formats in a list.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "ChoiceF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#ChoiceF",
          "type": "data"
        },
        "index": {
          "description": "Parse one of the optional formats in list",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "ChoiceF",
          "package": "xformat",
          "partial": "Choice",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:ChoiceF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "DoubleF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#DoubleF",
          "type": "data"
        },
        "index": {
          "description": "Parse Double",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "DoubleF",
          "package": "xformat",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:DoubleF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one of two formats in a fully symmetric choice.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "EitherF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#EitherF",
          "type": "data"
        },
        "index": {
          "description": "Parse one of two formats in fully symmetric choice",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "EitherF",
          "package": "xformat",
          "partial": "Either",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:EitherF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one of two formats, trying the left one first.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "EitherLF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#EitherLF",
          "type": "data"
        },
        "index": {
          "description": "Parse one of two formats trying the left one first",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "EitherLF",
          "package": "xformat",
          "partial": "Either LF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:EitherLF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "FloatF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#FloatF",
          "type": "data"
        },
        "index": {
          "description": "Parse Float",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "FloatF",
          "package": "xformat",
          "partial": "Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:FloatF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class provides the signature for an extensible, type-indexed function\n that uses a format descriptor to parse a string input and return a well-typed\n value. The type variable \u003ccode\u003ed\u003c/code\u003e is the format descriptor, and the variable \u003ccode\u003ea\u003c/code\u003e\n is the type of the value to be read from the input.\n\u003c/p\u003e\u003cp\u003eAn instance of \u003ccode\u003eFormat\u003c/code\u003e adds a (type) case to the function. Before defining\n an instance, you must first define a format descriptor for your specific type\n and expected input. The descriptor is often very simple. See the descriptors\n in this module for examples.\n\u003c/p\u003e\u003cp\u003eHere is the instance for types that are instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n   data \u003ccode\u003e\u003ca\u003eReadF\u003c/a\u003e\u003c/code\u003e a = \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e -- Format descriptor\n\u003c/pre\u003e\u003cpre\u003e\n   instance (\u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e a) =\u003e Format (\u003ccode\u003e\u003ca\u003eReadF\u003c/a\u003e\u003c/code\u003e a) a where\n     \u003ccode\u003e\u003ca\u003ereadpf\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereadS_to_P\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ereads\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNote that you will need some of the combinators (such as \u003ccode\u003e\u003ca\u003ereadS_to_P\u003c/a\u003e\u003c/code\u003e) in\n \u003ca\u003eText.ParserCombinators.ReadP\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "Format",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#Format",
          "type": "class"
        },
        "index": {
          "description": "This class provides the signature for an extensible type-indexed function that uses format descriptor to parse string input and return well-typed value The type variable is the format descriptor and the variable is the type of the value to be read from the input An instance of Format adds type case to the function Before defining an instance you must first define format descriptor for your specific type and expected input The descriptor is often very simple See the descriptors in this module for examples Here is the instance for types that are instances of Read data ReadF Read Format descriptor instance Read Format ReadF where readpf Read readS to reads Note that you will need some of the combinators such as readS to in Text.ParserCombinators.ReadP",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Format",
          "package": "xformat",
          "partial": "Format",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "IntF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#IntF",
          "type": "data"
        },
        "index": {
          "description": "Parse an Int",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "IntF",
          "package": "xformat",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:IntF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "IntegerF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#IntegerF",
          "type": "data"
        },
        "index": {
          "description": "Parse an Integer",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "IntegerF",
          "package": "xformat",
          "partial": "Integer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:IntegerF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an optional value.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "MaybeF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#MaybeF",
          "type": "data"
        },
        "index": {
          "description": "Parse an optional value",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "MaybeF",
          "package": "xformat",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:MaybeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a value whose type is an instance of the class \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "NumF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#NumF",
          "type": "data"
        },
        "index": {
          "description": "Parse value whose type is an instance of the class Num",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "NumF",
          "package": "xformat",
          "partial": "Num",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:NumF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a value whose type is an instance of the class \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "ReadF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#ReadF",
          "type": "data"
        },
        "index": {
          "description": "Parse value whose type is an instance of the class Read",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "ReadF",
          "package": "xformat",
          "partial": "Read",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:ReadF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse zero or more whitespace characters. Stop when a non-whitespace\n character is reached.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "SpaceF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#SpaceF",
          "type": "data"
        },
        "index": {
          "description": "Parse zero or more whitespace characters Stop when non-whitespace character is reached",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "SpaceF",
          "package": "xformat",
          "partial": "Space",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:SpaceF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string. Reads until the end of the input.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "StringF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#StringF",
          "type": "data"
        },
        "index": {
          "description": "Parse string Reads until the end of the input",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "StringF",
          "package": "xformat",
          "partial": "String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:StringF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a format of one type wrapped by two other formats of a different\n type.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "WrapF",
          "package": "xformat",
          "source": "src/Text-XFormat-Read.html#WrapF",
          "type": "data"
        },
        "index": {
          "description": "Parse format of one type wrapped by two other formats of different type",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "WrapF",
          "package": "xformat",
          "partial": "Wrap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#t:WrapF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative pair. This is a shorter, functional equivalent to the\n type \u003ccode\u003e(:%:)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "(%)",
          "package": "xformat",
          "signature": "a -\u003e b -\u003e a :%: b",
          "source": "src/Text-XFormat-Read.html#%25",
          "type": "function"
        },
        "index": {
          "description": "Right-associative pair This is shorter functional equivalent to the type",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "(%) %",
          "normalized": "a-\u003eb-\u003ea b",
          "package": "xformat",
          "signature": "a-\u003eb-\u003ea b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:-37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": ":%:",
          "package": "xformat",
          "signature": "a :%: b",
          "source": "src/Text-XFormat-Read.html#%3A%25%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": ":%:",
          "package": "xformat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v::-37-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "Char",
          "package": "xformat",
          "signature": "Char",
          "source": "src/Text-XFormat-Read.html#CharF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Char",
          "package": "xformat",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "Choice",
          "package": "xformat",
          "signature": "Choice [a]",
          "source": "src/Text-XFormat-Read.html#ChoiceF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Choice",
          "normalized": "Choice[a]",
          "package": "xformat",
          "partial": "Choice",
          "signature": "Choice[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:Choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "Double",
          "package": "xformat",
          "signature": "Double",
          "source": "src/Text-XFormat-Read.html#DoubleF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Double",
          "package": "xformat",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "Either",
          "package": "xformat",
          "signature": "Either a b",
          "source": "src/Text-XFormat-Read.html#EitherF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Either",
          "package": "xformat",
          "partial": "Either",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:Either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "EitherL",
          "package": "xformat",
          "signature": "EitherL a b",
          "source": "src/Text-XFormat-Read.html#EitherLF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "EitherL",
          "package": "xformat",
          "partial": "Either",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:EitherL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "Float",
          "package": "xformat",
          "signature": "Float",
          "source": "src/Text-XFormat-Read.html#FloatF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Float",
          "package": "xformat",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "Int",
          "package": "xformat",
          "signature": "Int",
          "source": "src/Text-XFormat-Read.html#IntF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Int",
          "package": "xformat",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "Integer",
          "package": "xformat",
          "signature": "Integer",
          "source": "src/Text-XFormat-Read.html#IntegerF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Integer",
          "package": "xformat",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "Maybe",
          "package": "xformat",
          "signature": "Maybe a",
          "source": "src/Text-XFormat-Read.html#MaybeF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Maybe",
          "package": "xformat",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "Num",
          "package": "xformat",
          "signature": "Num",
          "source": "src/Text-XFormat-Read.html#NumF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Num",
          "package": "xformat",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:Num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "Read",
          "package": "xformat",
          "signature": "Read",
          "source": "src/Text-XFormat-Read.html#ReadF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Read",
          "package": "xformat",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "Space",
          "package": "xformat",
          "signature": "Space",
          "source": "src/Text-XFormat-Read.html#SpaceF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Space",
          "package": "xformat",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:Space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "String",
          "package": "xformat",
          "signature": "String",
          "source": "src/Text-XFormat-Read.html#StringF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "String",
          "package": "xformat",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Read",
          "name": "Wrap",
          "package": "xformat",
          "signature": "Wrap outer inner outer",
          "source": "src/Text-XFormat-Read.html#WrapF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "Wrap",
          "package": "xformat",
          "partial": "Wrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a format descriptor \u003ccode\u003ed\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, return an optional result of\n the type \u003ccode\u003ea\u003c/code\u003e. This function simply returns the head of the list from \u003ccode\u003e\u003ca\u003ereadsf\u003c/a\u003e\u003c/code\u003e\n if it was successful.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "readf",
          "package": "xformat",
          "signature": "d -\u003e String -\u003e Maybe a",
          "source": "src/Text-XFormat-Read.html#readf",
          "type": "function"
        },
        "index": {
          "description": "Given format descriptor and String return an optional result of the type This function simply returns the head of the list from readsf if it was successful",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "readf",
          "normalized": "a-\u003eString-\u003eMaybe b",
          "package": "xformat",
          "signature": "d-\u003eString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:readf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a format descriptor \u003ccode\u003ed\u003c/code\u003e, return a \u003ccode\u003e\u003ca\u003eReadP\u003c/a\u003e\u003c/code\u003e parser for a type \u003ccode\u003ea\u003c/code\u003e.\n This function may not be very useful outside of defining an instance for\n \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e. Instead, consider using \u003ccode\u003e\u003ca\u003ereadsf\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ereadf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "readpf",
          "package": "xformat",
          "signature": "d -\u003e ReadP a",
          "source": "src/Text-XFormat-Read.html#readpf",
          "type": "method"
        },
        "index": {
          "description": "Given format descriptor return ReadP parser for type This function may not be very useful outside of defining an instance for Format Instead consider using readsf or readf",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "readpf",
          "normalized": "a-\u003eReadP b",
          "package": "xformat",
          "signature": "d-\u003eReadP a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:readpf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a format descriptor \u003ccode\u003ed\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, return a list of successes\n for the type \u003ccode\u003ea\u003c/code\u003e, i.e. \u003ccode\u003e[(a, \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e)]\u003c/code\u003e. This function simply transforms the\n \u003ccode\u003e\u003ca\u003eReadP\u003c/a\u003e\u003c/code\u003e parser of \u003ccode\u003e\u003ca\u003ereadpf\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eReadS\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.XFormat.Read",
          "name": "readsf",
          "package": "xformat",
          "signature": "d -\u003e ReadS a",
          "source": "src/Text-XFormat-Read.html#readsf",
          "type": "function"
        },
        "index": {
          "description": "Given format descriptor and String return list of successes for the type i.e String This function simply transforms the ReadP parser of readpf to ReadS function",
          "hierarchy": "Text XFormat Read",
          "module": "Text.XFormat.Read",
          "name": "readsf",
          "normalized": "a-\u003eReadS b",
          "package": "xformat",
          "signature": "d-\u003eReadS a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Read.html#v:readsf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an extensible, type-indexed function for showing\n well-typed values with a format descriptor. This may be considered a Haskell\n variant of the C \u003ccode\u003eprintf\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eIf you are primarily interested in using this library, you will want to see\n \u003ccode\u003e\u003ca\u003eshowsf\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eshowf\u003c/a\u003e\u003c/code\u003e, the more user-friendly functions.\n\u003c/p\u003e\u003cp\u003eIf you are also interested in extending this library with your own format\n descriptors, you should read about the \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XFormat.Show",
          "name": "Show",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines an extensible type-indexed function for showing well-typed values with format descriptor This may be considered Haskell variant of the printf function If you are primarily interested in using this library you will want to see showsf and showf the more user-friendly functions If you are also interested in extending this library with your own format descriptors you should read about the Format class",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Show",
          "package": "xformat",
          "partial": "Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative pair. First print a \u003ccode\u003ea\u003c/code\u003e-type format and then a \u003ccode\u003eb\u003c/code\u003e-type\n format.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": ":%:",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#%3A%25%3A",
          "type": "data"
        },
        "index": {
          "description": "Right-associative pair First print type format and then type format",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": ":%:",
          "package": "xformat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t::-37-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for a format descriptor that composes two descriptors. Used in\n \u003ccode\u003einstance (\u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e d1 f1, \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e d2 f2) =\u003e \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e (d1 :%: d2) (f1 :.:\n f2)\u003c/code\u003e for example.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": ":.:",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#%3A.%3A",
          "type": "newtype"
        },
        "index": {
          "description": "Wrapper for format descriptor that composes two descriptors Used in instance Format d1 f1 Format d2 f2 Format d1 d2 f1 f2 for example",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": ":.:",
          "package": "xformat",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t::.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eAlignF\u003c/a\u003e\u003c/code\u003e but chop off the output if it extends past the column\n width.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "AlignChopF",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#AlignChopF",
          "type": "data"
        },
        "index": {
          "description": "Same as AlignF but chop off the output if it extends past the column width",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "AlignChopF",
          "package": "xformat",
          "partial": "Align Chop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:AlignChopF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a format aligned left or right within a column of the given width.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "AlignF",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#AlignF",
          "type": "data"
        },
        "index": {
          "description": "Print format aligned left or right within column of the given width",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "AlignF",
          "package": "xformat",
          "partial": "Align",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:AlignF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Apply",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#Apply",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Apply",
          "package": "xformat",
          "partial": "Apply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for a format descriptor that takes an argument. Used in \u003ccode\u003einstance\n (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eShowF\u003c/a\u003e\u003c/code\u003e a) (Arr a)\u003c/code\u003e for example.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "Arr",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#Arr",
          "type": "newtype"
        },
        "index": {
          "description": "Wrapper for format descriptor that takes an argument Used in instance Show Format ShowF Arr for example",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Arr",
          "package": "xformat",
          "partial": "Arr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:Arr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a character argument.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "CharF",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#CharF",
          "type": "data"
        },
        "index": {
          "description": "Print character argument",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "CharF",
          "package": "xformat",
          "partial": "Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:CharF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirection (left or right) used for \u003ccode\u003e\u003ca\u003eAlignF\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAlignChopF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "Dir",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#Dir",
          "type": "data"
        },
        "index": {
          "description": "Direction left or right used for AlignF and AlignChopF",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Dir",
          "package": "xformat",
          "partial": "Dir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:Dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "DoubleF",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#DoubleF",
          "type": "data"
        },
        "index": {
          "description": "Print Double argument",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "DoubleF",
          "package": "xformat",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:DoubleF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "FloatF",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#FloatF",
          "type": "data"
        },
        "index": {
          "description": "Print Float argument",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "FloatF",
          "package": "xformat",
          "partial": "Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:FloatF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class provides the signature for an extensible, type-indexed function\n that uses a format descriptor to print a variable number of well-typed\n arguments to a string. The type variable \u003ccode\u003ed\u003c/code\u003e is the format descriptor, and\n the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e variable \u003ccode\u003ef\u003c/code\u003e determines the type of the value to be shown.\n\u003c/p\u003e\u003cp\u003eAn instance of \u003ccode\u003eFormat\u003c/code\u003e adds a (type) case to the function. Before defining\n an instance, you must first define a format descriptor for your specific type\n and expected input. The descriptor is often very simple. See the descriptors\n in this module for examples.\n\u003c/p\u003e\u003cp\u003eHere is the instance for types that are instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n   data \u003ccode\u003e\u003ca\u003eShowF\u003c/a\u003e\u003c/code\u003e a = \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e -- Format descriptor\n\u003c/pre\u003e\u003cpre\u003e\n   instance (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e a) =\u003e Format (\u003ccode\u003e\u003ca\u003eShowF\u003c/a\u003e\u003c/code\u003e a) (\u003ccode\u003e\u003ca\u003eArr\u003c/a\u003e\u003c/code\u003e a) where\n     \u003ccode\u003e\u003ca\u003eshowsf'\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eArr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eshows\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArr\u003c/a\u003e\u003c/code\u003e type is one of several \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e wrappers necessary for defining\n these instances.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "Format",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#Format",
          "type": "class"
        },
        "index": {
          "description": "This class provides the signature for an extensible type-indexed function that uses format descriptor to print variable number of well-typed arguments to string The type variable is the format descriptor and the Functor variable determines the type of the value to be shown An instance of Format adds type case to the function Before defining an instance you must first define format descriptor for your specific type and expected input The descriptor is often very simple See the descriptors in this module for examples Here is the instance for types that are instances of Show data ShowF Show Format descriptor instance Show Format ShowF Arr where showsf Show Arr shows The Arr type is one of several Functor wrappers necessary for defining these instances",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Format",
          "package": "xformat",
          "partial": "Format",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for a format constant that does not take any arguments. Used in\n \u003ccode\u003einstance \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e Id\u003c/code\u003e for example.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "Id",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#Id",
          "type": "newtype"
        },
        "index": {
          "description": "Wrapper for format constant that does not take any arguments Used in instance Format String Id for example",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Id",
          "package": "xformat",
          "partial": "Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "IntF",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#IntF",
          "type": "data"
        },
        "index": {
          "description": "Print an Int argument",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "IntF",
          "package": "xformat",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:IntF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "IntegerF",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#IntegerF",
          "type": "data"
        },
        "index": {
          "description": "Print an Integer argument",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "IntegerF",
          "package": "xformat",
          "partial": "Integer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:IntegerF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint an argument whose type is an instance of the class \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "NumF",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#NumF",
          "type": "data"
        },
        "index": {
          "description": "Print an argument whose type is an instance of the class Num",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "NumF",
          "package": "xformat",
          "partial": "Num",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:NumF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint an argument whose type is an instance of the class \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "ShowF",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#ShowF",
          "type": "data"
        },
        "index": {
          "description": "Print an argument whose type is an instance of the class Show",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "ShowF",
          "package": "xformat",
          "partial": "Show",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:ShowF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a specified number of spaces.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "SpacesF",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#SpacesF",
          "type": "data"
        },
        "index": {
          "description": "Print specified number of spaces",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "SpacesF",
          "package": "xformat",
          "partial": "Spaces",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:SpacesF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a string argument.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "StringF",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#StringF",
          "type": "data"
        },
        "index": {
          "description": "Print string argument",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "StringF",
          "package": "xformat",
          "partial": "String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:StringF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a format of one type wrapped by two other formats of a different\n type.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "WrapF",
          "package": "xformat",
          "source": "src/Text-XFormat-Show.html#WrapF",
          "type": "data"
        },
        "index": {
          "description": "Print format of one type wrapped by two other formats of different type",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "WrapF",
          "package": "xformat",
          "partial": "Wrap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#t:WrapF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative pair. This is a shorter, functional equivalent to the\n type \u003ccode\u003e(:%:)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "(%)",
          "package": "xformat",
          "signature": "a -\u003e b -\u003e a :%: b",
          "source": "src/Text-XFormat-Show.html#%25",
          "type": "function"
        },
        "index": {
          "description": "Right-associative pair This is shorter functional equivalent to the type",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "(%) %",
          "normalized": "a-\u003eb-\u003ea b",
          "package": "xformat",
          "signature": "a-\u003eb-\u003ea b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:-37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelpful function for defining instances of composed format descriptors.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "(\u003c\u003e)",
          "package": "xformat",
          "signature": "f (b -\u003e c) -\u003e g (a -\u003e b) -\u003e :.: f g (a -\u003e c)",
          "source": "src/Text-XFormat-Show.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "Helpful function for defining instances of composed format descriptors",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a(b-\u003ec)-\u003ed(e-\u003eb)-\u003ea d(e-\u003ec)",
          "package": "xformat",
          "signature": "f(b-\u003ec)-\u003eg(a-\u003eb)-\u003ef g(a-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": ":%:",
          "package": "xformat",
          "signature": "a :%: b",
          "source": "src/Text-XFormat-Show.html#%3A%25%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": ":%:",
          "package": "xformat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v::-37-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Align",
          "package": "xformat",
          "signature": "Align Dir Int a",
          "source": "src/Text-XFormat-Show.html#AlignF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Align",
          "package": "xformat",
          "partial": "Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "AlignChop",
          "package": "xformat",
          "signature": "AlignChop Dir Int a",
          "source": "src/Text-XFormat-Show.html#AlignChopF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "AlignChop",
          "package": "xformat",
          "partial": "Align Chop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:AlignChop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Arr",
          "package": "xformat",
          "signature": "Arr (a -\u003e b)",
          "source": "src/Text-XFormat-Show.html#Arr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Arr",
          "normalized": "Arr(a-\u003eb)",
          "package": "xformat",
          "partial": "Arr",
          "signature": "Arr(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Arr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Char",
          "package": "xformat",
          "signature": "Char",
          "source": "src/Text-XFormat-Show.html#CharF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Char",
          "package": "xformat",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Comp",
          "package": "xformat",
          "signature": "Comp (f (g a))",
          "source": "src/Text-XFormat-Show.html#%3A.%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Comp",
          "package": "xformat",
          "partial": "Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Double",
          "package": "xformat",
          "signature": "Double",
          "source": "src/Text-XFormat-Show.html#DoubleF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Double",
          "package": "xformat",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Float",
          "package": "xformat",
          "signature": "Float",
          "source": "src/Text-XFormat-Show.html#FloatF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Float",
          "package": "xformat",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Id",
          "package": "xformat",
          "signature": "Id a",
          "source": "src/Text-XFormat-Show.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Id",
          "package": "xformat",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Int",
          "package": "xformat",
          "signature": "Int",
          "source": "src/Text-XFormat-Show.html#IntF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Int",
          "package": "xformat",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Integer",
          "package": "xformat",
          "signature": "Integer",
          "source": "src/Text-XFormat-Show.html#IntegerF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Integer",
          "package": "xformat",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "L",
          "package": "xformat",
          "signature": "L",
          "source": "src/Text-XFormat-Show.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "L",
          "package": "xformat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Num",
          "package": "xformat",
          "signature": "Num",
          "source": "src/Text-XFormat-Show.html#NumF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Num",
          "package": "xformat",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "R",
          "package": "xformat",
          "signature": "R",
          "source": "src/Text-XFormat-Show.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "R",
          "package": "xformat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Show",
          "package": "xformat",
          "signature": "Show",
          "source": "src/Text-XFormat-Show.html#ShowF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Show",
          "package": "xformat",
          "partial": "Show",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Spaces",
          "package": "xformat",
          "signature": "Spaces Int",
          "source": "src/Text-XFormat-Show.html#SpacesF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Spaces",
          "package": "xformat",
          "partial": "Spaces",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Spaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "String",
          "package": "xformat",
          "signature": "String",
          "source": "src/Text-XFormat-Show.html#StringF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "String",
          "package": "xformat",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "Wrap",
          "package": "xformat",
          "signature": "Wrap outer inner outer",
          "source": "src/Text-XFormat-Show.html#WrapF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "Wrap",
          "package": "xformat",
          "partial": "Wrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XFormat.Show",
          "name": "apply",
          "package": "xformat",
          "signature": "f a -\u003e b",
          "source": "src/Text-XFormat-Show.html#apply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "apply",
          "normalized": "a b-\u003ec",
          "package": "xformat",
          "signature": "f a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a format descriptor \u003ccode\u003ed\u003c/code\u003e and a variable number of arguments\n represented by \u003ccode\u003ea\u003c/code\u003e (and determined by \u003ccode\u003ed\u003c/code\u003e), return a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e result. This\n function is the same as \u003ccode\u003e\u003ca\u003eshowsf\u003c/a\u003e\u003c/code\u003e but has already been applied to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n input.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "showf",
          "package": "xformat",
          "signature": "d -\u003e a",
          "source": "src/Text-XFormat-Show.html#showf",
          "type": "function"
        },
        "index": {
          "description": "Given format descriptor and variable number of arguments represented by and determined by return String result This function is the same as showsf but has already been applied to String input",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "showf",
          "normalized": "a-\u003eb",
          "package": "xformat",
          "signature": "d-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:showf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a format descriptor \u003ccode\u003ed\u003c/code\u003e, a variable number of arguments represented\n by \u003ccode\u003ea\u003c/code\u003e (and determined by \u003ccode\u003ed\u003c/code\u003e), and a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, return a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e result.\n This function removes the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e wrappers from the output of \u003ccode\u003e\u003ca\u003eshowsf'\u003c/a\u003e\u003c/code\u003e to\n get the variable number of arguments.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "showsf",
          "package": "xformat",
          "signature": "d -\u003e a",
          "source": "src/Text-XFormat-Show.html#showsf",
          "type": "function"
        },
        "index": {
          "description": "Given format descriptor variable number of arguments represented by and determined by and String return String result This function removes the Functor wrappers from the output of showsf to get the variable number of arguments",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "showsf",
          "normalized": "a-\u003eb",
          "package": "xformat",
          "signature": "d-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:showsf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a format descriptor \u003ccode\u003ed\u003c/code\u003e, return a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e wrapping a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e -\u003e\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e type. This function may not be very useful outside of defining an\n instance for \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e. Instead, consider using \u003ccode\u003e\u003ca\u003eshowsf\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshowf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XFormat.Show",
          "name": "showsf'",
          "package": "xformat",
          "signature": "d -\u003e f ShowS",
          "source": "src/Text-XFormat-Show.html#showsf%27",
          "type": "method"
        },
        "index": {
          "description": "Given format descriptor return Functor wrapping String String type This function may not be very useful outside of defining an instance for Format Instead consider using showsf or showf",
          "hierarchy": "Text XFormat Show",
          "module": "Text.XFormat.Show",
          "name": "showsf'",
          "normalized": "a-\u003eb ShowS",
          "package": "xformat",
          "signature": "d-\u003ef ShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xformat/docs/Text-XFormat-Show.html#v:showsf-39-"
      }
    }
  ]
]