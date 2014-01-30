[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient parsing and serialisation of S-Expressions (as used by Lisp).\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified, e.g.:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.AttoLisp as L\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "module",
        "fct-source": "src/Data-AttoLisp.html",
        "fct-type": "module",
        "title": "AttoLisp"
      },
      "index": {
        "description": "Efficient parsing and serialisation of S-Expressions as used by Lisp This module is intended to be imported qualified e.g import qualified Data.AttoLisp as",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "AttoLisp",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "Atto Lisp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:Failure",
      "description": {
        "fct-descr": "\u003cp\u003eFailure continuation.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "type",
        "fct-source": "src/Data-AttoLisp.html#Failure",
        "fct-type": "type",
        "title": "Failure"
      },
      "index": {
        "description": "Failure continuation",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "Failure",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:FromLisp",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted from an S-expression, with the\n possibility of failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003edata Coord { x :: Double, y :: Double }\n\ninstance FromLisp Coord where\n   parseLisp (\u003ccode\u003e\u003ca\u003eDotList\u003c/a\u003e\u003c/code\u003e [x] y) = pure (Coord x y) \n   -- A non-DotList value is of the wrong shape, so use mzero to fail.\n   parseLisp _          = \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe above instance expects that \u003ccode\u003eCoord 4 5\u003c/code\u003e is encoded as \u003ccode\u003e(4\n . 5)\u003c/code\u003e.  This makes sense for a few special types, but most of the\n time the standard encoding should be used: \u003ccode\u003e(coord 4 5)\u003c/code\u003e.  The\n \u003ccode\u003e\u003ca\u003estruct\u003c/a\u003e\u003c/code\u003e combinator provides special support for this use case:\n\u003c/p\u003e\u003cpre\u003einstance FromLisp Coord where\n   parseLisp = \u003ccode\u003e\u003ca\u003estruct\u003c/a\u003e\u003c/code\u003e \"coord\" Coord\n\u003c/pre\u003e\u003cp\u003eIt uses some special type class magic to figure out the arity of\n its second argument.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "class",
        "fct-source": "src/Data-AttoLisp.html#FromLisp",
        "fct-type": "class",
        "title": "FromLisp"
      },
      "index": {
        "description": "type that can be converted from an S-expression with the possibility of failure When writing an instance use mzero or fail to make conversion fail e.g the value is of the wrong type An example type and instance data Coord Double Double instance FromLisp Coord where parseLisp DotList pure Coord non-DotList value is of the wrong shape so use mzero to fail parseLisp mzero The above instance expects that Coord is encoded as This makes sense for few special types but most of the time the standard encoding should be used coord The struct combinator provides special support for this use case instance FromLisp Coord where parseLisp struct coord Coord It uses some special type class magic to figure out the arity of its second argument",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "FromLisp",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "From Lisp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:Lisp",
      "description": {
        "fct-descr": "\u003cp\u003eA Lisp expression (S-expression).\n\u003c/p\u003e\u003cp\u003eSymbols are case-sensitive.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "data",
        "fct-source": "src/Data-AttoLisp.html#Lisp",
        "fct-type": "data",
        "title": "Lisp"
      },
      "index": {
        "description": "Lisp expression S-expression Symbols are case-sensitive",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "Lisp",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "Lisp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eA continuation-based parser type.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "data",
        "fct-source": "src/Data-AttoLisp.html#Parser",
        "fct-type": "data",
        "title": "Parser"
      },
      "index": {
        "description": "continuation-based parser type",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "Parser",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of running a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "data",
        "fct-source": "src/Data-AttoLisp.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "The result of running Parser",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "Result",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:Success",
      "description": {
        "fct-descr": "\u003cp\u003eSuccess continuation.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "type",
        "fct-source": "src/Data-AttoLisp.html#Success",
        "fct-type": "type",
        "title": "Success"
      },
      "index": {
        "description": "Success continuation",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "Success",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#t:ToLisp",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted to an S-expression.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003edata Coord { x :: Double, y :: Double }\n\ninstance ToLisp Coord where\n   toLisp (Coord x y) = \u003ccode\u003e\u003ca\u003estruct\u003c/a\u003e\u003c/code\u003e \"coord\" [toLisp x, toLisp y]\n\u003c/pre\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "class",
        "fct-source": "src/Data-AttoLisp.html#ToLisp",
        "fct-type": "class",
        "title": "ToLisp"
      },
      "index": {
        "description": "type that can be converted to an S-expression An example type and instance data Coord Double Double instance ToLisp Coord where toLisp Coord struct coord toLisp toLisp",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "ToLisp",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "To Lisp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:DotList",
      "description": {
        "fct-descr": "\u003cp\u003eA list with a non-nil tail: \u003ccode\u003e(foo x\n . 42)\u003c/code\u003e.  The list argument must be\n non-empty and the tail must be non-\u003ccode\u003e\u003ca\u003enil\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "DotList [Lisp] Lisp",
        "fct-source": "src/Data-AttoLisp.html#Lisp",
        "fct-type": "function",
        "title": "DotList"
      },
      "index": {
        "description": "list with non-nil tail foo The list argument must be non-empty and the tail must be non nil",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "DotList",
        "normalized": "DotList[Lisp]Lisp",
        "package": "atto-lisp",
        "partial": "Dot List",
        "signature": "DotList[Lisp]Lisp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:Error",
      "description": {
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Error String",
        "fct-source": "src/Data-AttoLisp.html#Result",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "Error",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:List",
      "description": {
        "fct-descr": "\u003cp\u003eA proper list: \u003ccode\u003e(foo x 42)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "List [Lisp]",
        "fct-source": "src/Data-AttoLisp.html#Lisp",
        "fct-type": "function",
        "title": "List"
      },
      "index": {
        "description": "proper list foo",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "List",
        "normalized": "List[Lisp]",
        "package": "atto-lisp",
        "partial": "List",
        "signature": "List[Lisp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:Number",
      "description": {
        "fct-descr": "\u003cp\u003eA number\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Number Number",
        "fct-source": "src/Data-AttoLisp.html#Lisp",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "number",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "Number",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:String",
      "description": {
        "fct-descr": "\u003cp\u003eA string.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "String Text",
        "fct-source": "src/Data-AttoLisp.html#Lisp",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "string",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "String",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:Success",
      "description": {
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Success a",
        "fct-source": "src/Data-AttoLisp.html#Result",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "Success",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:Symbol",
      "description": {
        "fct-descr": "\u003cp\u003eA symbol (including keyword)\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Symbol Text",
        "fct-source": "src/Data-AttoLisp.html#Lisp",
        "fct-type": "function",
        "title": "Symbol"
      },
      "index": {
        "description": "symbol including keyword",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "Symbol",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "Symbol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:atom",
      "description": {
        "fct-descr": "\u003cp\u003eParse a symbol or a number.  Symbols are expected to be utf8.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Parser Lisp",
        "fct-source": "src/Data-AttoLisp.html#atom",
        "fct-type": "function",
        "title": "atom"
      },
      "index": {
        "description": "Parse symbol or number Symbols are expected to be utf8",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "atom",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:encode",
      "description": {
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-AttoLisp.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "encode",
        "normalized": "a-\u003eByteString",
        "package": "atto-lisp",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:fromLisp",
      "description": {
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Lisp -\u003e Result a",
        "fct-source": "src/Data-AttoLisp.html#fromLisp",
        "fct-type": "function",
        "title": "fromLisp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "fromLisp",
        "normalized": "Lisp-\u003eResult a",
        "package": "atto-lisp",
        "partial": "Lisp",
        "signature": "Lisp-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:fromLispExpr",
      "description": {
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Lisp -\u003e Builder",
        "fct-source": "src/Data-AttoLisp.html#fromLispExpr",
        "fct-type": "function",
        "title": "fromLispExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "fromLispExpr",
        "normalized": "Lisp-\u003eBuilder",
        "package": "atto-lisp",
        "partial": "Lisp Expr",
        "signature": "Lisp-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:isNull",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the expression is \u003ccode\u003enil\u003c/code\u003e or the empty list.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Lisp -\u003e Bool",
        "fct-source": "src/Data-AttoLisp.html#isNull",
        "fct-type": "function",
        "title": "isNull"
      },
      "index": {
        "description": "Returns True if the expression is nil or the empty list",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "isNull",
        "normalized": "Lisp-\u003eBool",
        "package": "atto-lisp",
        "partial": "Null",
        "signature": "Lisp-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:lisp",
      "description": {
        "fct-descr": "\u003cp\u003eParse an arbitrary lisp expression.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Parser Lisp",
        "fct-source": "src/Data-AttoLisp.html#lisp",
        "fct-type": "function",
        "title": "lisp"
      },
      "index": {
        "description": "Parse an arbitrary lisp expression",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "lisp",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:mkStruct",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a Lisp struct in a standardised format.\n\u003c/p\u003e\u003cp\u003eFields in a struct are accessed by position.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Text -\u003e [Lisp] -\u003e Lisp",
        "fct-source": "src/Data-AttoLisp.html#mkStruct",
        "fct-type": "function",
        "title": "mkStruct"
      },
      "index": {
        "description": "Create Lisp struct in standardised format Fields in struct are accessed by position",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "mkStruct",
        "normalized": "Text-\u003e[Lisp]-\u003eLisp",
        "package": "atto-lisp",
        "partial": "Struct",
        "signature": "Text-\u003e[Lisp]-\u003eLisp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:nil",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty list.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Lisp",
        "fct-source": "src/Data-AttoLisp.html#nil",
        "fct-type": "function",
        "title": "nil"
      },
      "index": {
        "description": "The empty list",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "nil",
        "normalized": "",
        "package": "atto-lisp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "(a -\u003e Parser b) -\u003e a -\u003e Result b",
        "fct-source": "src/Data-AttoLisp.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Run Parser",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "parse",
        "normalized": "(a-\u003eParser b)-\u003ea-\u003eResult b",
        "package": "atto-lisp",
        "partial": "",
        "signature": "(a-\u003eParser b)-\u003ea-\u003eResult b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:parseEither",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "(a -\u003e Parser b) -\u003e a -\u003e Either String b",
        "fct-source": "src/Data-AttoLisp.html#parseEither",
        "fct-type": "function",
        "title": "parseEither"
      },
      "index": {
        "description": "Run Parser with an Either result type",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "parseEither",
        "normalized": "(a-\u003eParser b)-\u003ea-\u003eEither String b",
        "package": "atto-lisp",
        "partial": "Either",
        "signature": "(a-\u003eParser b)-\u003ea-\u003eEither String b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:parseLisp",
      "description": {
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Lisp -\u003e Parser a",
        "fct-source": "src/Data-AttoLisp.html#parseLisp",
        "fct-type": "method",
        "title": "parseLisp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "parseLisp",
        "normalized": "Lisp-\u003eParser a",
        "package": "atto-lisp",
        "partial": "Lisp",
        "signature": "Lisp-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:parseMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "(a -\u003e Parser b) -\u003e a -\u003e Maybe b",
        "fct-source": "src/Data-AttoLisp.html#parseMaybe",
        "fct-type": "function",
        "title": "parseMaybe"
      },
      "index": {
        "description": "Run Parser with Maybe result type",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "parseMaybe",
        "normalized": "(a-\u003eParser b)-\u003ea-\u003eMaybe b",
        "package": "atto-lisp",
        "partial": "Maybe",
        "signature": "(a-\u003eParser b)-\u003ea-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:struct",
      "description": {
        "fct-descr": "\u003cp\u003eDecode structure serialised with \u003ccode\u003e\u003ca\u003emkStruct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe second argument should be a function, usually a constructor.\n The resulting parser automatically figures out the arity of the\n function.  For example:\n\u003c/p\u003e\u003cpre\u003edata Foo = Foo Int deriving (Eq, Show)\n\nparseFoo :: Lisp -\u003e \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e Foo\nparseFoo = struct \"foo\" Foo\n\ntest = \u003ccode\u003e\u003ca\u003eparseMaybe\u003c/a\u003e\u003c/code\u003e parseFoo val == Just (Foo 23)\n  where val = \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e [\u003ccode\u003e\u003ca\u003eSymbol\u003c/a\u003e\u003c/code\u003e \"foo\", \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e 23]\n\u003c/pre\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "Text -\u003e f -\u003e Lisp -\u003e Parser a",
        "fct-source": "src/Data-AttoLisp.html#struct",
        "fct-type": "function",
        "title": "struct"
      },
      "index": {
        "description": "Decode structure serialised with mkStruct The second argument should be function usually constructor The resulting parser automatically figures out the arity of the function For example data Foo Foo Int deriving Eq Show parseFoo Lisp Parser Foo parseFoo struct foo Foo test parseMaybe parseFoo val Just Foo where val List Symbol foo Number",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "struct",
        "normalized": "Text-\u003ea-\u003eLisp-\u003eParser b",
        "package": "atto-lisp",
        "partial": "",
        "signature": "Text-\u003ef-\u003eLisp-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:toLisp",
      "description": {
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "a -\u003e Lisp",
        "fct-source": "src/Data-AttoLisp.html#toLisp",
        "fct-type": "method",
        "title": "toLisp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "toLisp",
        "normalized": "a-\u003eLisp",
        "package": "atto-lisp",
        "partial": "Lisp",
        "signature": "a-\u003eLisp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atto-lisp/docs/Data-AttoLisp.html#v:typeMismatch",
      "description": {
        "fct-descr": "\u003cp\u003eFail parsing due to a type mismatch, with a descriptive message.\n\u003c/p\u003e",
        "fct-module": "Data.AttoLisp",
        "fct-package": "atto-lisp",
        "fct-signature": "String-\u003e Lisp-\u003e Parser a",
        "fct-type": "function",
        "title": "typeMismatch"
      },
      "index": {
        "description": "Fail parsing due to type mismatch with descriptive message",
        "hierarchy": "Data AttoLisp",
        "module": "Data.AttoLisp",
        "name": "typeMismatch",
        "normalized": "String-\u003eLisp-\u003eParser a",
        "package": "atto-lisp",
        "partial": "Mismatch",
        "signature": "String-\u003eLisp-\u003eParser a"
      }
    }
  }
]