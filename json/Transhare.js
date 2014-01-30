[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is my answer to the pattern discussed in\n http:\u003cem/\u003eblog.ezyang.com\u003cem\u003e2011\u003c/em\u003e06\u003cem\u003ea-pattern-for-increasing-sharing\u003c/em\u003e about maximizing sharing when\n transforming an algebraic data type.\n\u003c/p\u003e\u003cp\u003eThe' \u003ccode\u003e\u003ca\u003eTranshare\u003c/a\u003e\u003c/code\u003e class is a kind of degerate case of \u003ccode\u003eTraverse\u003c/code\u003e building on a new \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e\n data type called \u003ccode\u003e\u003ca\u003eTransResult\u003c/a\u003e\u003c/code\u003e defined below.  The result \u003ccode\u003e\u003ca\u003etransM\u003c/a\u003e\u003c/code\u003e is a way to lift a\n parsimonious transformer 'a -\u003e Maybe a', which indicates identity with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, to work on a\n container with maximized sharing.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "module",
        "fct-source": "src/Data-Transhare.html",
        "fct-type": "module",
        "title": "Transhare"
      },
      "index": {
        "description": "This module is my answer to the pattern discussed in http blog.ezyang.com a-pattern-for-increasing-sharing about maximizing sharing when transforming an algebraic data type The Transhare class is kind of degerate case of Traverse building on new Applicative data type called TransResult defined below The result transM is way to lift parsimonious transformer Maybe which indicates identity with Nothing to work on container with maximized sharing",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "Transhare",
        "normalized": "",
        "package": "Transhare",
        "partial": "Transhare",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#t:TransM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTransM\u003c/a\u003e\u003c/code\u003e is a parsimonious transformer that can return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when the transformation is an identity.\n\u003c/p\u003e\u003cp\u003eIf the result is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e then the result \u003ccode\u003et\u003c/code\u003e might or might not be identical to the argument.\n\u003c/p\u003e",
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "type",
        "fct-source": "src/Data-Transhare.html#TransM",
        "fct-type": "type",
        "title": "TransM"
      },
      "index": {
        "description": "TransM is parsimonious transformer that can return Nothing when the transformation is an identity If the result is Just then the result might or might not be identical to the argument",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "TransM",
        "normalized": "",
        "package": "Transhare",
        "partial": "Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#t:TransR",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTransR\u003c/a\u003e\u003c/code\u003e is a parsimonious transformer that returns (Original x) only if x is the original argument.\n\u003c/p\u003e\u003cp\u003eThis must follow the law that TransMR . TransRM . t = t\n\u003c/p\u003e\u003cp\u003eThe disadvantage of \u003ccode\u003e\u003ca\u003eTransR\u003c/a\u003e\u003c/code\u003e compared to \u003ccode\u003e\u003ca\u003eTransM\u003c/a\u003e\u003c/code\u003e is ensuring the above law and that sharing for\n Original results is actually being done.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTransR\u003c/a\u003e\u003c/code\u003e which implement sharing correctly are \u003ca\u003eproper implementations\u003c/a\u003e of \u003ccode\u003e\u003ca\u003eTransR\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "type",
        "fct-source": "src/Data-Transhare.html#TransR",
        "fct-type": "type",
        "title": "TransR"
      },
      "index": {
        "description": "TransR is parsimonious transformer that returns Original only if is the original argument This must follow the law that TransMR TransRM The disadvantage of TransR compared to TransM is ensuring the above law and that sharing for Original results is actually being done TransR which implement sharing correctly are proper implementations of TransR",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "TransR",
        "normalized": "",
        "package": "Transhare",
        "partial": "Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#t:TransResult",
      "description": {
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "data",
        "fct-source": "src/Data-Transhare.html#TransResult",
        "fct-type": "data",
        "title": "TransResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "TransResult",
        "normalized": "",
        "package": "Transhare",
        "partial": "Trans Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#t:Transhare",
      "description": {
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "class",
        "fct-source": "src/Data-Transhare.html#Transhare",
        "fct-type": "class",
        "title": "Transhare"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "Transhare",
        "normalized": "",
        "package": "Transhare",
        "partial": "Transhare",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:Original",
      "description": {
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "Original",
        "fct-source": "src/Data-Transhare.html#TransResult",
        "fct-type": "function",
        "title": "Original"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "Original",
        "normalized": "",
        "package": "Transhare",
        "partial": "Original",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:Transformed",
      "description": {
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "Transformed",
        "fct-source": "src/Data-Transhare.html#TransResult",
        "fct-type": "function",
        "title": "Transformed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "Transformed",
        "normalized": "",
        "package": "Transhare",
        "partial": "Transformed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:fromO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efromO\u003c/a\u003e\u003c/code\u003e is a helper function used with Applicative to ensure the \u003ccode\u003e\u003ca\u003eTransR\u003c/a\u003e\u003c/code\u003e computed by \u003ccode\u003e\u003ca\u003etransR\u003c/a\u003e\u003c/code\u003e\n are proper implementations.\n\u003c/p\u003e",
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "a -\u003e TransResult a -\u003e TransResult a",
        "fct-source": "src/Data-Transhare.html#fromO",
        "fct-type": "function",
        "title": "fromO"
      },
      "index": {
        "description": "fromO is helper function used with Applicative to ensure the TransR computed by transR are proper implementations",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "fromO",
        "normalized": "a-\u003eTransResult a-\u003eTransResult a",
        "package": "Transhare",
        "partial": "",
        "signature": "a-\u003eTransResult a-\u003eTransResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:getTrans",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "a",
        "fct-source": "src/Data-Transhare.html#TransResult",
        "fct-type": "function",
        "title": "getTrans"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "getTrans",
        "normalized": "",
        "package": "Transhare",
        "partial": "Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:transM",
      "description": {
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "TransM a -\u003e TransM (f a)",
        "fct-source": "src/Data-Transhare.html#transM",
        "fct-type": "method",
        "title": "transM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "transM",
        "normalized": "TransM a-\u003eTransM(b a)",
        "package": "Transhare",
        "partial": "",
        "signature": "TransM a-\u003eTransM(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:transMR",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etransMR\u003c/a\u003e\u003c/code\u003e creates a proper implementation of \u003ccode\u003e\u003ca\u003etransR\u003c/a\u003e\u003c/code\u003e from any \u003ccode\u003e\u003ca\u003etransM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "TransM a -\u003e TransR a",
        "fct-source": "src/Data-Transhare.html#transMR",
        "fct-type": "function",
        "title": "transMR"
      },
      "index": {
        "description": "transMR creates proper implementation of transR from any transM",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "transMR",
        "normalized": "TransM a-\u003eTransR a",
        "package": "Transhare",
        "partial": "MR",
        "signature": "TransM a-\u003eTransR a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:transR",
      "description": {
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "TransR a -\u003e TransR (f a)",
        "fct-source": "src/Data-Transhare.html#transR",
        "fct-type": "method",
        "title": "transR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "transR",
        "normalized": "TransR a-\u003eTransR(b a)",
        "package": "Transhare",
        "partial": "",
        "signature": "TransR a-\u003eTransR(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:transRM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etransRM\u003c/a\u003e\u003c/code\u003e creates a proper implementation of \u003ccode\u003e\u003ca\u003etransM\u003c/a\u003e\u003c/code\u003e only from a proper implementation of \u003ccode\u003e\u003ca\u003etransR\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "TransR a -\u003e TransM a",
        "fct-source": "src/Data-Transhare.html#transRM",
        "fct-type": "function",
        "title": "transRM"
      },
      "index": {
        "description": "transRM creates proper implementation of transM only from proper implementation of transR",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "transRM",
        "normalized": "TransR a-\u003eTransM a",
        "package": "Transhare",
        "partial": "RM",
        "signature": "TransR a-\u003eTransM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Transhare/docs/Data-Transhare.html#v:transResult_laws",
      "description": {
        "fct-module": "Data.Transhare",
        "fct-package": "Transhare",
        "fct-signature": "Bool",
        "fct-source": "src/Data-Transhare.html#transResult_laws",
        "fct-type": "function",
        "title": "transResult_laws"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Transhare",
        "module": "Data.Transhare",
        "name": "transResult_laws",
        "normalized": "",
        "package": "Transhare",
        "partial": "Result",
        "signature": ""
      }
    }
  }
]