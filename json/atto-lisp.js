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
        "word": "atto-lisp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient parsing and serialisation of S-Expressions (as used by Lisp).\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified, e.g.:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.AttoLisp as L\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.AttoLisp",
          "name": "AttoLisp",
          "package": "atto-lisp",
          "source": "src/Data-AttoLisp.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient parsing and serialisation of S-Expressions as used by Lisp This module is intended to be imported qualified e.g import qualified Data.AttoLisp as",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "AttoLisp",
          "package": "atto-lisp",
          "partial": "Atto Lisp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailure continuation.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "Failure",
          "package": "atto-lisp",
          "source": "src/Data-AttoLisp.html#Failure",
          "type": "type"
        },
        "index": {
          "description": "Failure continuation",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "Failure",
          "package": "atto-lisp",
          "partial": "Failure",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from an S-expression, with the\n possibility of failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003edata Coord { x :: Double, y :: Double }\n\ninstance FromLisp Coord where\n   parseLisp (\u003ccode\u003e\u003ca\u003eDotList\u003c/a\u003e\u003c/code\u003e [x] y) = pure (Coord x y) \n   -- A non-DotList value is of the wrong shape, so use mzero to fail.\n   parseLisp _          = \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe above instance expects that \u003ccode\u003eCoord 4 5\u003c/code\u003e is encoded as \u003ccode\u003e(4\n . 5)\u003c/code\u003e.  This makes sense for a few special types, but most of the\n time the standard encoding should be used: \u003ccode\u003e(coord 4 5)\u003c/code\u003e.  The\n \u003ccode\u003e\u003ca\u003estruct\u003c/a\u003e\u003c/code\u003e combinator provides special support for this use case:\n\u003c/p\u003e\u003cpre\u003einstance FromLisp Coord where\n   parseLisp = \u003ccode\u003e\u003ca\u003estruct\u003c/a\u003e\u003c/code\u003e \"coord\" Coord\n\u003c/pre\u003e\u003cp\u003eIt uses some special type class magic to figure out the arity of\n its second argument.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "FromLisp",
          "package": "atto-lisp",
          "source": "src/Data-AttoLisp.html#FromLisp",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from an S-expression with the possibility of failure When writing an instance use mzero or fail to make conversion fail e.g the value is of the wrong type An example type and instance data Coord Double Double instance FromLisp Coord where parseLisp DotList pure Coord non-DotList value is of the wrong shape so use mzero to fail parseLisp mzero The above instance expects that Coord is encoded as This makes sense for few special types but most of the time the standard encoding should be used coord The struct combinator provides special support for this use case instance FromLisp Coord where parseLisp struct coord Coord It uses some special type class magic to figure out the arity of its second argument",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "FromLisp",
          "package": "atto-lisp",
          "partial": "From Lisp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:FromLisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Lisp expression (S-expression).\n\u003c/p\u003e\u003cp\u003eSymbols are case-sensitive.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "Lisp",
          "package": "atto-lisp",
          "source": "src/Data-AttoLisp.html#Lisp",
          "type": "data"
        },
        "index": {
          "description": "Lisp expression S-expression Symbols are case-sensitive",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "Lisp",
          "package": "atto-lisp",
          "partial": "Lisp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:Lisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA continuation-based parser type.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "Parser",
          "package": "atto-lisp",
          "source": "src/Data-AttoLisp.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "continuation-based parser type",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "Parser",
          "package": "atto-lisp",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of running a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "Result",
          "package": "atto-lisp",
          "source": "src/Data-AttoLisp.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of running Parser",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "Result",
          "package": "atto-lisp",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccess continuation.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "Success",
          "package": "atto-lisp",
          "source": "src/Data-AttoLisp.html#Success",
          "type": "type"
        },
        "index": {
          "description": "Success continuation",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "Success",
          "package": "atto-lisp",
          "partial": "Success",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to an S-expression.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003edata Coord { x :: Double, y :: Double }\n\ninstance ToLisp Coord where\n   toLisp (Coord x y) = \u003ccode\u003e\u003ca\u003estruct\u003c/a\u003e\u003c/code\u003e \"coord\" [toLisp x, toLisp y]\n\u003c/pre\u003e",
          "module": "Data.AttoLisp",
          "name": "ToLisp",
          "package": "atto-lisp",
          "source": "src/Data-AttoLisp.html#ToLisp",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to an S-expression An example type and instance data Coord Double Double instance ToLisp Coord where toLisp Coord struct coord toLisp toLisp",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "ToLisp",
          "package": "atto-lisp",
          "partial": "To Lisp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:ToLisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list with a non-nil tail: \u003ccode\u003e(foo x\n . 42)\u003c/code\u003e.  The list argument must be\n non-empty and the tail must be non-\u003ccode\u003e\u003ca\u003enil\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "DotList",
          "package": "atto-lisp",
          "signature": "DotList [Lisp] Lisp",
          "source": "src/Data-AttoLisp.html#Lisp",
          "type": "function"
        },
        "index": {
          "description": "list with non-nil tail foo The list argument must be non-empty and the tail must be non nil",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "DotList",
          "normalized": "DotList[Lisp]Lisp",
          "package": "atto-lisp",
          "partial": "Dot List",
          "signature": "DotList[Lisp]Lisp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:DotList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoLisp",
          "name": "Error",
          "package": "atto-lisp",
          "signature": "Error String",
          "source": "src/Data-AttoLisp.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "Error",
          "package": "atto-lisp",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA proper list: \u003ccode\u003e(foo x 42)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "List",
          "package": "atto-lisp",
          "signature": "List [Lisp]",
          "source": "src/Data-AttoLisp.html#Lisp",
          "type": "function"
        },
        "index": {
          "description": "proper list foo",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "List",
          "normalized": "List[Lisp]",
          "package": "atto-lisp",
          "partial": "List",
          "signature": "List[Lisp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA number\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "Number",
          "package": "atto-lisp",
          "signature": "Number Number",
          "source": "src/Data-AttoLisp.html#Lisp",
          "type": "function"
        },
        "index": {
          "description": "number",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "Number",
          "package": "atto-lisp",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "String",
          "package": "atto-lisp",
          "signature": "String Text",
          "source": "src/Data-AttoLisp.html#Lisp",
          "type": "function"
        },
        "index": {
          "description": "string",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "String",
          "package": "atto-lisp",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoLisp",
          "name": "Success",
          "package": "atto-lisp",
          "signature": "Success a",
          "source": "src/Data-AttoLisp.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "Success",
          "package": "atto-lisp",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA symbol (including keyword)\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "Symbol",
          "package": "atto-lisp",
          "signature": "Symbol Text",
          "source": "src/Data-AttoLisp.html#Lisp",
          "type": "function"
        },
        "index": {
          "description": "symbol including keyword",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "Symbol",
          "package": "atto-lisp",
          "partial": "Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a symbol or a number.  Symbols are expected to be utf8.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "atom",
          "package": "atto-lisp",
          "signature": "Parser Lisp",
          "source": "src/Data-AttoLisp.html#atom",
          "type": "function"
        },
        "index": {
          "description": "Parse symbol or number Symbols are expected to be utf8",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "atom",
          "package": "atto-lisp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoLisp",
          "name": "encode",
          "package": "atto-lisp",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-AttoLisp.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "atto-lisp",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoLisp",
          "name": "fromLisp",
          "package": "atto-lisp",
          "signature": "Lisp -\u003e Result a",
          "source": "src/Data-AttoLisp.html#fromLisp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "fromLisp",
          "normalized": "Lisp-\u003eResult a",
          "package": "atto-lisp",
          "partial": "Lisp",
          "signature": "Lisp-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:fromLisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoLisp",
          "name": "fromLispExpr",
          "package": "atto-lisp",
          "signature": "Lisp -\u003e Builder",
          "source": "src/Data-AttoLisp.html#fromLispExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "fromLispExpr",
          "normalized": "Lisp-\u003eBuilder",
          "package": "atto-lisp",
          "partial": "Lisp Expr",
          "signature": "Lisp-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:fromLispExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the expression is \u003ccode\u003enil\u003c/code\u003e or the empty list.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "isNull",
          "package": "atto-lisp",
          "signature": "Lisp -\u003e Bool",
          "source": "src/Data-AttoLisp.html#isNull",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the expression is nil or the empty list",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "isNull",
          "normalized": "Lisp-\u003eBool",
          "package": "atto-lisp",
          "partial": "Null",
          "signature": "Lisp-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:isNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an arbitrary lisp expression.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "lisp",
          "package": "atto-lisp",
          "signature": "Parser Lisp",
          "source": "src/Data-AttoLisp.html#lisp",
          "type": "function"
        },
        "index": {
          "description": "Parse an arbitrary lisp expression",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "lisp",
          "package": "atto-lisp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:lisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Lisp struct in a standardised format.\n\u003c/p\u003e\u003cp\u003eFields in a struct are accessed by position.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "mkStruct",
          "package": "atto-lisp",
          "signature": "Text -\u003e [Lisp] -\u003e Lisp",
          "source": "src/Data-AttoLisp.html#mkStruct",
          "type": "function"
        },
        "index": {
          "description": "Create Lisp struct in standardised format Fields in struct are accessed by position",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "mkStruct",
          "normalized": "Text-\u003e[Lisp]-\u003eLisp",
          "package": "atto-lisp",
          "partial": "Struct",
          "signature": "Text-\u003e[Lisp]-\u003eLisp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:mkStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty list.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "nil",
          "package": "atto-lisp",
          "signature": "Lisp",
          "source": "src/Data-AttoLisp.html#nil",
          "type": "function"
        },
        "index": {
          "description": "The empty list",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "nil",
          "package": "atto-lisp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "parse",
          "package": "atto-lisp",
          "signature": "(a -\u003e Parser b) -\u003e a -\u003e Result b",
          "source": "src/Data-AttoLisp.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Run Parser",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "parse",
          "normalized": "(a-\u003eParser b)-\u003ea-\u003eResult b",
          "package": "atto-lisp",
          "signature": "(a-\u003eParser b)-\u003ea-\u003eResult b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "parseEither",
          "package": "atto-lisp",
          "signature": "(a -\u003e Parser b) -\u003e a -\u003e Either String b",
          "source": "src/Data-AttoLisp.html#parseEither",
          "type": "function"
        },
        "index": {
          "description": "Run Parser with an Either result type",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "parseEither",
          "normalized": "(a-\u003eParser b)-\u003ea-\u003eEither String b",
          "package": "atto-lisp",
          "partial": "Either",
          "signature": "(a-\u003eParser b)-\u003ea-\u003eEither String b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:parseEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoLisp",
          "name": "parseLisp",
          "package": "atto-lisp",
          "signature": "Lisp -\u003e Parser a",
          "source": "src/Data-AttoLisp.html#parseLisp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "parseLisp",
          "normalized": "Lisp-\u003eParser a",
          "package": "atto-lisp",
          "partial": "Lisp",
          "signature": "Lisp-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:parseLisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "parseMaybe",
          "package": "atto-lisp",
          "signature": "(a -\u003e Parser b) -\u003e a -\u003e Maybe b",
          "source": "src/Data-AttoLisp.html#parseMaybe",
          "type": "function"
        },
        "index": {
          "description": "Run Parser with Maybe result type",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "parseMaybe",
          "normalized": "(a-\u003eParser b)-\u003ea-\u003eMaybe b",
          "package": "atto-lisp",
          "partial": "Maybe",
          "signature": "(a-\u003eParser b)-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:parseMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode structure serialised with \u003ccode\u003e\u003ca\u003emkStruct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe second argument should be a function, usually a constructor.\n The resulting parser automatically figures out the arity of the\n function.  For example:\n\u003c/p\u003e\u003cpre\u003edata Foo = Foo Int deriving (Eq, Show)\n\nparseFoo :: Lisp -\u003e \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e Foo\nparseFoo = struct \"foo\" Foo\n\ntest = \u003ccode\u003e\u003ca\u003eparseMaybe\u003c/a\u003e\u003c/code\u003e parseFoo val == Just (Foo 23)\n  where val = \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e [\u003ccode\u003e\u003ca\u003eSymbol\u003c/a\u003e\u003c/code\u003e \"foo\", \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e 23]\n\u003c/pre\u003e",
          "module": "Data.AttoLisp",
          "name": "struct",
          "package": "atto-lisp",
          "signature": "Text -\u003e f -\u003e Lisp -\u003e Parser a",
          "source": "src/Data-AttoLisp.html#struct",
          "type": "function"
        },
        "index": {
          "description": "Decode structure serialised with mkStruct The second argument should be function usually constructor The resulting parser automatically figures out the arity of the function For example data Foo Foo Int deriving Eq Show parseFoo Lisp Parser Foo parseFoo struct foo Foo test parseMaybe parseFoo val Just Foo where val List Symbol foo Number",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "struct",
          "normalized": "Text-\u003ea-\u003eLisp-\u003eParser b",
          "package": "atto-lisp",
          "signature": "Text-\u003ef-\u003eLisp-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoLisp",
          "name": "toLisp",
          "package": "atto-lisp",
          "signature": "a -\u003e Lisp",
          "source": "src/Data-AttoLisp.html#toLisp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "toLisp",
          "normalized": "a-\u003eLisp",
          "package": "atto-lisp",
          "partial": "Lisp",
          "signature": "a-\u003eLisp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:toLisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail parsing due to a type mismatch, with a descriptive message.\n\u003c/p\u003e",
          "module": "Data.AttoLisp",
          "name": "typeMismatch",
          "package": "atto-lisp",
          "signature": "String-\u003e Lisp-\u003e Parser a",
          "type": "function"
        },
        "index": {
          "description": "Fail parsing due to type mismatch with descriptive message",
          "hierarchy": "Data AttoLisp",
          "module": "Data.AttoLisp",
          "name": "typeMismatch",
          "normalized": "String-\u003eLisp-\u003eParser a",
          "package": "atto-lisp",
          "partial": "Mismatch",
          "signature": "String-\u003eLisp-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:typeMismatch"
      }
    }
  ]
]