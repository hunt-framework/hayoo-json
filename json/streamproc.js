[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamproc/docs/Control-Arrow-SP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA continuation-based monadic stream processor implemented as\n   an \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e John Hughes, \"\u003cem\u003eGeneralising Monads to Arrows\u003c/em\u003e\":\n     \u003ca\u003ehttp://www.ittc.ku.edu/Projects/SLDG/filing_cabinet/Hughes_Generalizing_Monads_to_Arrows.pdf\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Magnus Carlsson, Thomas Hallgren, \"Fudgets--Purely\n     Functional Processes with applications to Graphical\n     User Interfaces\":\n     \u003ca\u003ehttp://www.cs.chalmers.se/~hallgren/Thesis/\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.SP",
        "fct-package": "streamproc",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-SP.html",
        "fct-type": "module",
        "title": "SP"
      },
      "index": {
        "description": "continuation-based monadic stream processor implemented as an Arrow References John Hughes Generalising Monads to Arrows http www.ittc.ku.edu Projects SLDG filing cabinet Hughes Generalizing Monads to Arrows.pdf Magnus Carlsson Thomas Hallgren Fudgets--Purely Functional Processes with applications to Graphical User Interfaces http www.cs.chalmers.se hallgren Thesis",
        "hierarchy": "Control Arrow SP",
        "module": "Control.Arrow.SP",
        "name": "SP",
        "normalized": "",
        "package": "streamproc",
        "partial": "SP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamproc/docs/Control-Arrow-SP.html#t:SP",
      "description": {
        "fct-descr": "\u003cp\u003eA generic stream processor.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.SP",
        "fct-package": "streamproc",
        "fct-signature": "data",
        "fct-source": "src/Control-Arrow-SP.html#SP",
        "fct-type": "data",
        "title": "SP"
      },
      "index": {
        "description": "generic stream processor",
        "hierarchy": "Control Arrow SP",
        "module": "Control.Arrow.SP",
        "name": "SP",
        "normalized": "",
        "package": "streamproc",
        "partial": "SP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamproc/docs/Control-Arrow-SP.html#v:Block",
      "description": {
        "fct-module": "Control.Arrow.SP",
        "fct-package": "streamproc",
        "fct-signature": "Block (m (SP m i o))",
        "fct-source": "src/Control-Arrow-SP.html#SP",
        "fct-type": "function",
        "title": "Block"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow SP",
        "module": "Control.Arrow.SP",
        "name": "Block",
        "normalized": "",
        "package": "streamproc",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamproc/docs/Control-Arrow-SP.html#v:Get",
      "description": {
        "fct-module": "Control.Arrow.SP",
        "fct-package": "streamproc",
        "fct-signature": "Get (i -\u003e SP m i o)",
        "fct-source": "src/Control-Arrow-SP.html#SP",
        "fct-type": "function",
        "title": "Get"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow SP",
        "module": "Control.Arrow.SP",
        "name": "Get",
        "normalized": "Get(a-\u003eSP b a c)",
        "package": "streamproc",
        "partial": "Get",
        "signature": "Get(i-\u003eSP m i o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamproc/docs/Control-Arrow-SP.html#v:Put",
      "description": {
        "fct-module": "Control.Arrow.SP",
        "fct-package": "streamproc",
        "fct-signature": "Put o (SP m i o)",
        "fct-source": "src/Control-Arrow-SP.html#SP",
        "fct-type": "function",
        "title": "Put"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow SP",
        "module": "Control.Arrow.SP",
        "name": "Put",
        "normalized": "",
        "package": "streamproc",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamproc/docs/Control-Arrow-SP.html#v:mapSP",
      "description": {
        "fct-descr": "\u003cp\u003eUse a monadic transformer to map a stream.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.SP",
        "fct-package": "streamproc",
        "fct-signature": "(i -\u003e m o) -\u003e SP m i o",
        "fct-source": "src/Control-Arrow-SP.html#mapSP",
        "fct-type": "function",
        "title": "mapSP"
      },
      "index": {
        "description": "Use monadic transformer to map stream",
        "hierarchy": "Control Arrow SP",
        "module": "Control.Arrow.SP",
        "name": "mapSP",
        "normalized": "(a-\u003eb c)-\u003eSP b a c",
        "package": "streamproc",
        "partial": "SP",
        "signature": "(i-\u003em o)-\u003eSP m i o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/streamproc/docs/Control-Arrow-SP.html#v:runSP",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a stream processor.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.SP",
        "fct-package": "streamproc",
        "fct-signature": "SP m () () -\u003e m ()",
        "fct-source": "src/Control-Arrow-SP.html#runSP",
        "fct-type": "function",
        "title": "runSP"
      },
      "index": {
        "description": "Evaluate stream processor",
        "hierarchy": "Control Arrow SP",
        "module": "Control.Arrow.SP",
        "name": "runSP",
        "normalized": "SP a()()-\u003ea()",
        "package": "streamproc",
        "partial": "SP",
        "signature": "SP m()()-\u003em()"
      }
    }
  }
]