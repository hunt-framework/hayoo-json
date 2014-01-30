[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#",
      "description": {
        "fct-module": "Numeric.Log",
        "fct-package": "log-domain",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Log.html",
        "fct-type": "module",
        "title": "Log"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Log",
        "module": "Numeric.Log",
        "name": "Log",
        "normalized": "",
        "package": "log-domain",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#t:Log",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eLog\u003c/code\u003e-domain \u003ccode\u003eFloat\u003c/code\u003e and \u003ccode\u003eDouble\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Numeric.Log",
        "fct-package": "log-domain",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-Log.html#Log",
        "fct-type": "newtype",
        "title": "Log"
      },
      "index": {
        "description": "Log domain Float and Double values",
        "hierarchy": "Numeric Log",
        "module": "Numeric.Log",
        "name": "Log",
        "normalized": "",
        "package": "log-domain",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#t:Precise",
      "description": {
        "fct-descr": "\u003cp\u003eThis provides \u003ccode\u003elog1p\u003c/code\u003e and \u003ccode\u003eexpm1\u003c/code\u003e for working more accurately with small numbers.\n\u003c/p\u003e",
        "fct-module": "Numeric.Log",
        "fct-package": "log-domain",
        "fct-signature": "class",
        "fct-source": "src/Numeric-Log.html#Precise",
        "fct-type": "class",
        "title": "Precise"
      },
      "index": {
        "description": "This provides log1p and expm1 for working more accurately with small numbers",
        "hierarchy": "Numeric Log",
        "module": "Numeric.Log",
        "name": "Precise",
        "normalized": "",
        "package": "log-domain",
        "partial": "Precise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#v:Exp",
      "description": {
        "fct-module": "Numeric.Log",
        "fct-package": "log-domain",
        "fct-signature": "Exp",
        "fct-source": "src/Numeric-Log.html#Log",
        "fct-type": "function",
        "title": "Exp"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Log",
        "module": "Numeric.Log",
        "name": "Exp",
        "normalized": "",
        "package": "log-domain",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#v:expm1",
      "description": {
        "fct-descr": "\u003cp\u003eThe Taylor series for exp(x) is given by\n\u003c/p\u003e\u003cpre\u003e exp(x) = 1 + x + x^2/2! + ...\n\u003c/pre\u003e\u003cp\u003eWhen \u003ccode\u003ex\u003c/code\u003e is small, the leading 1 consumes all of the available precision.\n\u003c/p\u003e\u003cp\u003eThis computes:\n\u003c/p\u003e\u003cpre\u003e exp(x) - 1 = x + x^2/2! + ..\n\u003c/pre\u003e\u003cp\u003ewhich can afford you a great deal of additional precision if you move things around\n algebraically to provide the 1 by other means.\n\u003c/p\u003e",
        "fct-module": "Numeric.Log",
        "fct-package": "log-domain",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Numeric-Log.html#expm1",
        "fct-type": "method",
        "title": "expm1"
      },
      "index": {
        "description": "The Taylor series for exp is given by exp When is small the leading consumes all of the available precision This computes exp which can afford you great deal of additional precision if you move things around algebraically to provide the by other means",
        "hierarchy": "Numeric Log",
        "module": "Numeric.Log",
        "name": "expm1",
        "normalized": "a-\u003ea",
        "package": "log-domain",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#v:ln",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Log",
        "fct-package": "log-domain",
        "fct-signature": "a",
        "fct-source": "src/Numeric-Log.html#Log",
        "fct-type": "function",
        "title": "ln"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Log",
        "module": "Numeric.Log",
        "name": "ln",
        "normalized": "",
        "package": "log-domain",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#v:log1p",
      "description": {
        "fct-descr": "\u003cp\u003eComputes \u003ccode\u003elog(1 + x)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis is far enough from 0 that the Taylor series is defined.\n\u003c/p\u003e",
        "fct-module": "Numeric.Log",
        "fct-package": "log-domain",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Numeric-Log.html#log1p",
        "fct-type": "method",
        "title": "log1p"
      },
      "index": {
        "description": "Computes log This is far enough from that the Taylor series is defined",
        "hierarchy": "Numeric Log",
        "module": "Numeric.Log",
        "name": "log1p",
        "normalized": "a-\u003ea",
        "package": "log-domain",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/log-domain/docs/Numeric-Log.html#v:sum",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently and accurately compute the sum of a set of log-domain numbers\n\u003c/p\u003e\u003cp\u003eWhile folding with \u003ccode\u003e(+)\u003c/code\u003e accomplishes the same end, it requires an\n additional \u003ccode\u003en-2\u003c/code\u003e logarithms to sum \u003ccode\u003en\u003c/code\u003e terms. In addition,\n here we introduce fewer opportunities for round-off error.\n\u003c/p\u003e\u003cp\u003eWhile for small quantities the naive sum accumulates error,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet xs = Prelude.replicate 40000 (Exp 1e-4) :: [Log Float]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ePrelude.sum xs\n\u003c/code\u003e\u003c/strong\u003e40001.3\n\u003c/pre\u003e\u003cp\u003eThis sum gives a more accurate result,\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eNumeric.Log.sum xs\n\u003c/code\u003e\u003c/strong\u003e40004.01\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNB:\u003c/em\u003e This does require two passes over the data.\n\u003c/p\u003e",
        "fct-module": "Numeric.Log",
        "fct-package": "log-domain",
        "fct-signature": "f (Log a) -\u003e Log a",
        "fct-source": "src/Numeric-Log.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "Efficiently and accurately compute the sum of set of log-domain numbers While folding with accomplishes the same end it requires an additional n-2 logarithms to sum terms In addition here we introduce fewer opportunities for round-off error While for small quantities the naive sum accumulates error let xs Prelude.replicate Exp e-4 Log Float Prelude.sum xs This sum gives more accurate result Numeric.Log.sum xs NB This does require two passes over the data",
        "hierarchy": "Numeric Log",
        "module": "Numeric.Log",
        "name": "sum",
        "normalized": "a(Log b)-\u003eLog b",
        "package": "log-domain",
        "partial": "",
        "signature": "f(Log a)-\u003eLog a"
      }
    }
  }
]