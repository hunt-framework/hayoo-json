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
        "word": "log-domain"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Log",
          "name": "Log",
          "package": "log-domain",
          "source": "src/Numeric-Log.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Log",
          "module": "Numeric.Log",
          "name": "Log",
          "package": "log-domain",
          "partial": "Log",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLog\u003c/code\u003e-domain \u003ccode\u003eFloat\u003c/code\u003e and \u003ccode\u003eDouble\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Numeric.Log",
          "name": "Log",
          "package": "log-domain",
          "source": "src/Numeric-Log.html#Log",
          "type": "newtype"
        },
        "index": {
          "description": "Log domain Float and Double values",
          "hierarchy": "Numeric Log",
          "module": "Numeric.Log",
          "name": "Log",
          "package": "log-domain",
          "partial": "Log",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#t:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis provides \u003ccode\u003elog1p\u003c/code\u003e and \u003ccode\u003eexpm1\u003c/code\u003e for working more accurately with small numbers.\n\u003c/p\u003e",
          "module": "Numeric.Log",
          "name": "Precise",
          "package": "log-domain",
          "source": "src/Numeric-Log.html#Precise",
          "type": "class"
        },
        "index": {
          "description": "This provides log1p and expm1 for working more accurately with small numbers",
          "hierarchy": "Numeric Log",
          "module": "Numeric.Log",
          "name": "Precise",
          "package": "log-domain",
          "partial": "Precise",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#t:Precise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Log",
          "name": "Exp",
          "package": "log-domain",
          "signature": "Exp",
          "source": "src/Numeric-Log.html#Log",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Log",
          "module": "Numeric.Log",
          "name": "Exp",
          "package": "log-domain",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#v:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Taylor series for exp(x) is given by\n\u003c/p\u003e\u003cpre\u003e exp(x) = 1 + x + x^2/2! + ...\n\u003c/pre\u003e\u003cp\u003eWhen \u003ccode\u003ex\u003c/code\u003e is small, the leading 1 consumes all of the available precision.\n\u003c/p\u003e\u003cp\u003eThis computes:\n\u003c/p\u003e\u003cpre\u003e exp(x) - 1 = x + x^2/2! + ..\n\u003c/pre\u003e\u003cp\u003ewhich can afford you a great deal of additional precision if you move things around\n algebraically to provide the 1 by other means.\n\u003c/p\u003e",
          "module": "Numeric.Log",
          "name": "expm1",
          "package": "log-domain",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Log.html#expm1",
          "type": "method"
        },
        "index": {
          "description": "The Taylor series for exp is given by exp When is small the leading consumes all of the available precision This computes exp which can afford you great deal of additional precision if you move things around algebraically to provide the by other means",
          "hierarchy": "Numeric Log",
          "module": "Numeric.Log",
          "name": "expm1",
          "normalized": "a-\u003ea",
          "package": "log-domain",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#v:expm1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Log",
          "name": "ln",
          "package": "log-domain",
          "signature": "a",
          "source": "src/Numeric-Log.html#Log",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Log",
          "module": "Numeric.Log",
          "name": "ln",
          "package": "log-domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#v:ln"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes \u003ccode\u003elog(1 + x)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis is far enough from 0 that the Taylor series is defined.\n\u003c/p\u003e",
          "module": "Numeric.Log",
          "name": "log1p",
          "package": "log-domain",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Log.html#log1p",
          "type": "method"
        },
        "index": {
          "description": "Computes log This is far enough from that the Taylor series is defined",
          "hierarchy": "Numeric Log",
          "module": "Numeric.Log",
          "name": "log1p",
          "normalized": "a-\u003ea",
          "package": "log-domain",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#v:log1p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently and accurately compute the sum of a set of log-domain numbers\n\u003c/p\u003e\u003cp\u003eWhile folding with \u003ccode\u003e(+)\u003c/code\u003e accomplishes the same end, it requires an\n additional \u003ccode\u003en-2\u003c/code\u003e logarithms to sum \u003ccode\u003en\u003c/code\u003e terms. In addition,\n here we introduce fewer opportunities for round-off error.\n\u003c/p\u003e\u003cp\u003eWhile for small quantities the naive sum accumulates error,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet xs = Prelude.replicate 40000 (Exp 1e-4) :: [Log Float]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ePrelude.sum xs\n\u003c/code\u003e\u003c/strong\u003e40001.3\n\u003c/pre\u003e\u003cp\u003eThis sum gives a more accurate result,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eNumeric.Log.sum xs\n\u003c/code\u003e\u003c/strong\u003e40004.01\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNB:\u003c/em\u003e This does require two passes over the data.\n\u003c/p\u003e",
          "module": "Numeric.Log",
          "name": "sum",
          "package": "log-domain",
          "signature": "f (Log a) -\u003e Log a",
          "source": "src/Numeric-Log.html#sum",
          "type": "function"
        },
        "index": {
          "description": "Efficiently and accurately compute the sum of set of log-domain numbers While folding with accomplishes the same end it requires an additional n-2 logarithms to sum terms In addition here we introduce fewer opportunities for round-off error While for small quantities the naive sum accumulates error let xs Prelude.replicate Exp e-4 Log Float Prelude.sum xs This sum gives more accurate result Numeric.Log.sum xs NB This does require two passes over the data",
          "hierarchy": "Numeric Log",
          "module": "Numeric.Log",
          "name": "sum",
          "normalized": "a(Log b)-\u003eLog b",
          "package": "log-domain",
          "signature": "f(Log a)-\u003eLog a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#v:sum"
      }
    }
  ]
]