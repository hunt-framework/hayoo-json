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
        "word": "Transhare"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is my answer to the pattern discussed in\n http:\u003cem/\u003eblog.ezyang.com\u003cem\u003e2011\u003c/em\u003e06\u003cem\u003ea-pattern-for-increasing-sharing\u003c/em\u003e about maximizing sharing when\n transforming an algebraic data type.\n\u003c/p\u003e\u003cp\u003eThe' \u003ccode\u003e\u003ca\u003eTranshare\u003c/a\u003e\u003c/code\u003e class is a kind of degerate case of \u003ccode\u003eTraverse\u003c/code\u003e building on a new \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e\n data type called \u003ccode\u003e\u003ca\u003eTransResult\u003c/a\u003e\u003c/code\u003e defined below.  The result \u003ccode\u003e\u003ca\u003etransM\u003c/a\u003e\u003c/code\u003e is a way to lift a\n parsimonious transformer 'a -\u003e Maybe a', which indicates identity with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, to work on a\n container with maximized sharing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Transhare",
          "name": "Transhare",
          "package": "Transhare",
          "source": "src/Data-Transhare.html",
          "type": "module"
        },
        "index": {
          "description": "This module is my answer to the pattern discussed in http blog.ezyang.com a-pattern-for-increasing-sharing about maximizing sharing when transforming an algebraic data type The Transhare class is kind of degerate case of Traverse building on new Applicative data type called TransResult defined below The result transM is way to lift parsimonious transformer Maybe which indicates identity with Nothing to work on container with maximized sharing",
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "Transhare",
          "package": "Transhare",
          "partial": "Transhare",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTransM\u003c/a\u003e\u003c/code\u003e is a parsimonious transformer that can return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when the transformation is an identity.\n\u003c/p\u003e\u003cp\u003eIf the result is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e then the result \u003ccode\u003et\u003c/code\u003e might or might not be identical to the argument.\n\u003c/p\u003e",
          "module": "Data.Transhare",
          "name": "TransM",
          "package": "Transhare",
          "source": "src/Data-Transhare.html#TransM",
          "type": "type"
        },
        "index": {
          "description": "TransM is parsimonious transformer that can return Nothing when the transformation is an identity If the result is Just then the result might or might not be identical to the argument",
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "TransM",
          "package": "Transhare",
          "partial": "Trans",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#t:TransM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTransR\u003c/a\u003e\u003c/code\u003e is a parsimonious transformer that returns (Original x) only if x is the original argument.\n\u003c/p\u003e\u003cp\u003eThis must follow the law that TransMR . TransRM . t = t\n\u003c/p\u003e\u003cp\u003eThe disadvantage of \u003ccode\u003e\u003ca\u003eTransR\u003c/a\u003e\u003c/code\u003e compared to \u003ccode\u003e\u003ca\u003eTransM\u003c/a\u003e\u003c/code\u003e is ensuring the above law and that sharing for\n Original results is actually being done.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTransR\u003c/a\u003e\u003c/code\u003e which implement sharing correctly are \u003ca\u003eproper implementations\u003c/a\u003e of \u003ccode\u003e\u003ca\u003eTransR\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Transhare",
          "name": "TransR",
          "package": "Transhare",
          "source": "src/Data-Transhare.html#TransR",
          "type": "type"
        },
        "index": {
          "description": "TransR is parsimonious transformer that returns Original only if is the original argument This must follow the law that TransMR TransRM The disadvantage of TransR compared to TransM is ensuring the above law and that sharing for Original results is actually being done TransR which implement sharing correctly are proper implementations of TransR",
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "TransR",
          "package": "Transhare",
          "partial": "Trans",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#t:TransR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Transhare",
          "name": "TransResult",
          "package": "Transhare",
          "source": "src/Data-Transhare.html#TransResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "TransResult",
          "package": "Transhare",
          "partial": "Trans Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#t:TransResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Transhare",
          "name": "Transhare",
          "package": "Transhare",
          "source": "src/Data-Transhare.html#Transhare",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "Transhare",
          "package": "Transhare",
          "partial": "Transhare",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#t:Transhare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Transhare",
          "name": "Original",
          "package": "Transhare",
          "signature": "Original",
          "source": "src/Data-Transhare.html#TransResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "Original",
          "package": "Transhare",
          "partial": "Original",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:Original"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Transhare",
          "name": "Transformed",
          "package": "Transhare",
          "signature": "Transformed",
          "source": "src/Data-Transhare.html#TransResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "Transformed",
          "package": "Transhare",
          "partial": "Transformed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:Transformed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efromO\u003c/a\u003e\u003c/code\u003e is a helper function used with Applicative to ensure the \u003ccode\u003e\u003ca\u003eTransR\u003c/a\u003e\u003c/code\u003e computed by \u003ccode\u003e\u003ca\u003etransR\u003c/a\u003e\u003c/code\u003e\n are proper implementations.\n\u003c/p\u003e",
          "module": "Data.Transhare",
          "name": "fromO",
          "package": "Transhare",
          "signature": "a -\u003e TransResult a -\u003e TransResult a",
          "source": "src/Data-Transhare.html#fromO",
          "type": "function"
        },
        "index": {
          "description": "fromO is helper function used with Applicative to ensure the TransR computed by transR are proper implementations",
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "fromO",
          "normalized": "a-\u003eTransResult a-\u003eTransResult a",
          "package": "Transhare",
          "signature": "a-\u003eTransResult a-\u003eTransResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:fromO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Transhare",
          "name": "getTrans",
          "package": "Transhare",
          "signature": "a",
          "source": "src/Data-Transhare.html#TransResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "getTrans",
          "package": "Transhare",
          "partial": "Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:getTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Transhare",
          "name": "transM",
          "package": "Transhare",
          "signature": "TransM a -\u003e TransM (f a)",
          "source": "src/Data-Transhare.html#transM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "transM",
          "normalized": "TransM a-\u003eTransM(b a)",
          "package": "Transhare",
          "signature": "TransM a-\u003eTransM(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:transM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etransMR\u003c/a\u003e\u003c/code\u003e creates a proper implementation of \u003ccode\u003e\u003ca\u003etransR\u003c/a\u003e\u003c/code\u003e from any \u003ccode\u003e\u003ca\u003etransM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Transhare",
          "name": "transMR",
          "package": "Transhare",
          "signature": "TransM a -\u003e TransR a",
          "source": "src/Data-Transhare.html#transMR",
          "type": "function"
        },
        "index": {
          "description": "transMR creates proper implementation of transR from any transM",
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "transMR",
          "normalized": "TransM a-\u003eTransR a",
          "package": "Transhare",
          "partial": "MR",
          "signature": "TransM a-\u003eTransR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:transMR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Transhare",
          "name": "transR",
          "package": "Transhare",
          "signature": "TransR a -\u003e TransR (f a)",
          "source": "src/Data-Transhare.html#transR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "transR",
          "normalized": "TransR a-\u003eTransR(b a)",
          "package": "Transhare",
          "signature": "TransR a-\u003eTransR(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:transR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etransRM\u003c/a\u003e\u003c/code\u003e creates a proper implementation of \u003ccode\u003e\u003ca\u003etransM\u003c/a\u003e\u003c/code\u003e only from a proper implementation of \u003ccode\u003e\u003ca\u003etransR\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Transhare",
          "name": "transRM",
          "package": "Transhare",
          "signature": "TransR a -\u003e TransM a",
          "source": "src/Data-Transhare.html#transRM",
          "type": "function"
        },
        "index": {
          "description": "transRM creates proper implementation of transM only from proper implementation of transR",
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "transRM",
          "normalized": "TransR a-\u003eTransM a",
          "package": "Transhare",
          "partial": "RM",
          "signature": "TransR a-\u003eTransM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:transRM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Transhare",
          "name": "transResult_laws",
          "package": "Transhare",
          "signature": "Bool",
          "source": "src/Data-Transhare.html#transResult_laws",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Transhare",
          "module": "Data.Transhare",
          "name": "transResult_laws",
          "package": "Transhare",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:transResult_laws"
      }
    }
  ]
]