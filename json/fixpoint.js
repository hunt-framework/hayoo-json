[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint-Algorithms.html#",
      "description": {
        "fct-module": "Data.Fixpoint.Algorithms",
        "fct-package": "fixpoint",
        "fct-signature": "module",
        "fct-source": "src/Data-Fixpoint-Algorithms.html",
        "fct-type": "module",
        "title": "Algorithms"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fixpoint Algorithms",
        "module": "Data.Fixpoint.Algorithms",
        "name": "Algorithms",
        "normalized": "",
        "package": "fixpoint",
        "partial": "Algorithms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint-Algorithms.html#v:size",
      "description": {
        "fct-module": "Data.Fixpoint.Algorithms",
        "fct-package": "fixpoint",
        "fct-signature": "t -\u003e Int",
        "fct-source": "src/Data-Fixpoint-Algorithms.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fixpoint Algorithms",
        "module": "Data.Fixpoint.Algorithms",
        "name": "size",
        "normalized": "a-\u003eInt",
        "package": "fixpoint",
        "partial": "",
        "signature": "t-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#",
      "description": {
        "fct-module": "Data.Fixpoint",
        "fct-package": "fixpoint",
        "fct-signature": "module",
        "fct-source": "src/Data-Fixpoint.html",
        "fct-type": "module",
        "title": "Fixpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fixpoint",
        "module": "Data.Fixpoint",
        "name": "Fixpoint",
        "normalized": "",
        "package": "fixpoint",
        "partial": "Fixpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#t:Fixpoint",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of data types representable by fixpoints.\n\u003c/p\u003e",
        "fct-module": "Data.Fixpoint",
        "fct-package": "fixpoint",
        "fct-signature": "class",
        "fct-source": "src/Data-Fixpoint-Base.html#Fixpoint",
        "fct-type": "class",
        "title": "Fixpoint"
      },
      "index": {
        "description": "The class of data types representable by fixpoints",
        "hierarchy": "Data Fixpoint",
        "module": "Data.Fixpoint",
        "name": "Fixpoint",
        "normalized": "",
        "package": "fixpoint",
        "partial": "Fixpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:ana",
      "description": {
        "fct-descr": "\u003cp\u003eAnamorphism (same as \u003ccode\u003e\u003ca\u003eunfold\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.Fixpoint",
        "fct-package": "fixpoint",
        "fct-signature": "(s -\u003e Pre t s) -\u003e s -\u003e t",
        "fct-source": "src/Data-Fixpoint-Base.html#ana",
        "fct-type": "function",
        "title": "ana"
      },
      "index": {
        "description": "Anamorphism same as unfold",
        "hierarchy": "Data Fixpoint",
        "module": "Data.Fixpoint",
        "name": "ana",
        "normalized": "(a-\u003ePre b a)-\u003ea-\u003eb",
        "package": "fixpoint",
        "partial": "",
        "signature": "(s-\u003ePre t s)-\u003es-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:cata",
      "description": {
        "fct-descr": "\u003cp\u003eCatamorphism (same as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.Fixpoint",
        "fct-package": "fixpoint",
        "fct-signature": "(Pre t s -\u003e s) -\u003e t -\u003e s",
        "fct-source": "src/Data-Fixpoint-Base.html#cata",
        "fct-type": "function",
        "title": "cata"
      },
      "index": {
        "description": "Catamorphism same as fold",
        "hierarchy": "Data Fixpoint",
        "module": "Data.Fixpoint",
        "name": "cata",
        "normalized": "(Pre a b-\u003eb)-\u003ea-\u003eb",
        "package": "fixpoint",
        "partial": "",
        "signature": "(Pre t s-\u003es)-\u003et-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eCatamorphism (same as \u003ccode\u003e\u003ca\u003ecata\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.Fixpoint",
        "fct-package": "fixpoint",
        "fct-signature": "(Pre t s -\u003e s) -\u003e t -\u003e s",
        "fct-source": "src/Data-Fixpoint-Base.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Catamorphism same as cata",
        "hierarchy": "Data Fixpoint",
        "module": "Data.Fixpoint",
        "name": "fold",
        "normalized": "(Pre a b-\u003eb)-\u003ea-\u003eb",
        "package": "fixpoint",
        "partial": "",
        "signature": "(Pre t s-\u003es)-\u003et-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:hylo",
      "description": {
        "fct-descr": "\u003cp\u003eHylomorphism\n\u003c/p\u003e",
        "fct-module": "Data.Fixpoint",
        "fct-package": "fixpoint",
        "fct-signature": "(Pre t s -\u003e s) -\u003e (p -\u003e Pre t p) -\u003e p -\u003e s",
        "fct-source": "src/Data-Fixpoint-Base.html#hylo",
        "fct-type": "function",
        "title": "hylo"
      },
      "index": {
        "description": "Hylomorphism",
        "hierarchy": "Data Fixpoint",
        "module": "Data.Fixpoint",
        "name": "hylo",
        "normalized": "(Pre a b-\u003eb)-\u003e(c-\u003ePre a c)-\u003ec-\u003eb",
        "package": "fixpoint",
        "partial": "",
        "signature": "(Pre t s-\u003es)-\u003e(p-\u003ePre t p)-\u003ep-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:inject",
      "description": {
        "fct-descr": "\u003cp\u003eInjection from the underlying functor into the data type.\n\u003c/p\u003e",
        "fct-module": "Data.Fixpoint",
        "fct-package": "fixpoint",
        "fct-signature": "Pre t t -\u003e t",
        "fct-source": "src/Data-Fixpoint-Base.html#inject",
        "fct-type": "method",
        "title": "inject"
      },
      "index": {
        "description": "Injection from the underlying functor into the data type",
        "hierarchy": "Data Fixpoint",
        "module": "Data.Fixpoint",
        "name": "inject",
        "normalized": "Pre a a-\u003ea",
        "package": "fixpoint",
        "partial": "",
        "signature": "Pre t t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:para",
      "description": {
        "fct-descr": "\u003cp\u003eParamorphism\n\u003c/p\u003e",
        "fct-module": "Data.Fixpoint",
        "fct-package": "fixpoint",
        "fct-signature": "(Pre t (t, s) -\u003e s) -\u003e t -\u003e s",
        "fct-source": "src/Data-Fixpoint-Base.html#para",
        "fct-type": "function",
        "title": "para"
      },
      "index": {
        "description": "Paramorphism",
        "hierarchy": "Data Fixpoint",
        "module": "Data.Fixpoint",
        "name": "para",
        "normalized": "(Pre a(a,b)-\u003eb)-\u003ea-\u003eb",
        "package": "fixpoint",
        "partial": "",
        "signature": "(Pre t(t,s)-\u003es)-\u003et-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:project",
      "description": {
        "fct-descr": "\u003cp\u003eProjection from the data type to its underlying functor.\n\u003c/p\u003e",
        "fct-module": "Data.Fixpoint",
        "fct-package": "fixpoint",
        "fct-signature": "t -\u003e Pre t t",
        "fct-source": "src/Data-Fixpoint-Base.html#project",
        "fct-type": "method",
        "title": "project"
      },
      "index": {
        "description": "Projection from the data type to its underlying functor",
        "hierarchy": "Data Fixpoint",
        "module": "Data.Fixpoint",
        "name": "project",
        "normalized": "a-\u003ePre a a",
        "package": "fixpoint",
        "partial": "",
        "signature": "t-\u003ePre t t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:unfold",
      "description": {
        "fct-descr": "\u003cp\u003eAnamorphism (same as \u003ccode\u003e\u003ca\u003eana\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.Fixpoint",
        "fct-package": "fixpoint",
        "fct-signature": "(s -\u003e Pre t s) -\u003e s -\u003e t",
        "fct-source": "src/Data-Fixpoint-Base.html#unfold",
        "fct-type": "function",
        "title": "unfold"
      },
      "index": {
        "description": "Anamorphism same as ana",
        "hierarchy": "Data Fixpoint",
        "module": "Data.Fixpoint",
        "name": "unfold",
        "normalized": "(a-\u003ePre b a)-\u003ea-\u003eb",
        "package": "fixpoint",
        "partial": "",
        "signature": "(s-\u003ePre t s)-\u003es-\u003et"
      }
    }
  }
]