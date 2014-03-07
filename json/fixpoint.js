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
        "word": "fixpoint"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fixpoint.Algorithms",
          "name": "Algorithms",
          "package": "fixpoint",
          "source": "src/Data-Fixpoint-Algorithms.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fixpoint Algorithms",
          "module": "Data.Fixpoint.Algorithms",
          "name": "Algorithms",
          "package": "fixpoint",
          "partial": "Algorithms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint-Algorithms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fixpoint.Algorithms",
          "name": "size",
          "package": "fixpoint",
          "signature": "t -\u003e Int",
          "source": "src/Data-Fixpoint-Algorithms.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fixpoint Algorithms",
          "module": "Data.Fixpoint.Algorithms",
          "name": "size",
          "normalized": "a-\u003eInt",
          "package": "fixpoint",
          "signature": "t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint-Algorithms.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fixpoint",
          "name": "Fixpoint",
          "package": "fixpoint",
          "source": "src/Data-Fixpoint.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fixpoint",
          "module": "Data.Fixpoint",
          "name": "Fixpoint",
          "package": "fixpoint",
          "partial": "Fixpoint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of data types representable by fixpoints.\n\u003c/p\u003e",
          "module": "Data.Fixpoint",
          "name": "Fixpoint",
          "package": "fixpoint",
          "source": "src/Data-Fixpoint-Base.html#Fixpoint",
          "type": "class"
        },
        "index": {
          "description": "The class of data types representable by fixpoints",
          "hierarchy": "Data Fixpoint",
          "module": "Data.Fixpoint",
          "name": "Fixpoint",
          "package": "fixpoint",
          "partial": "Fixpoint",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#t:Fixpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnamorphism (same as \u003ccode\u003e\u003ca\u003eunfold\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Fixpoint",
          "name": "ana",
          "package": "fixpoint",
          "signature": "(s -\u003e Pre t s) -\u003e s -\u003e t",
          "source": "src/Data-Fixpoint-Base.html#ana",
          "type": "function"
        },
        "index": {
          "description": "Anamorphism same as unfold",
          "hierarchy": "Data Fixpoint",
          "module": "Data.Fixpoint",
          "name": "ana",
          "normalized": "(a-\u003ePre b a)-\u003ea-\u003eb",
          "package": "fixpoint",
          "signature": "(s-\u003ePre t s)-\u003es-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:ana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatamorphism (same as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Fixpoint",
          "name": "cata",
          "package": "fixpoint",
          "signature": "(Pre t s -\u003e s) -\u003e t -\u003e s",
          "source": "src/Data-Fixpoint-Base.html#cata",
          "type": "function"
        },
        "index": {
          "description": "Catamorphism same as fold",
          "hierarchy": "Data Fixpoint",
          "module": "Data.Fixpoint",
          "name": "cata",
          "normalized": "(Pre a b-\u003eb)-\u003ea-\u003eb",
          "package": "fixpoint",
          "signature": "(Pre t s-\u003es)-\u003et-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:cata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatamorphism (same as \u003ccode\u003e\u003ca\u003ecata\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Fixpoint",
          "name": "fold",
          "package": "fixpoint",
          "signature": "(Pre t s -\u003e s) -\u003e t -\u003e s",
          "source": "src/Data-Fixpoint-Base.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Catamorphism same as cata",
          "hierarchy": "Data Fixpoint",
          "module": "Data.Fixpoint",
          "name": "fold",
          "normalized": "(Pre a b-\u003eb)-\u003ea-\u003eb",
          "package": "fixpoint",
          "signature": "(Pre t s-\u003es)-\u003et-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHylomorphism\n\u003c/p\u003e",
          "module": "Data.Fixpoint",
          "name": "hylo",
          "package": "fixpoint",
          "signature": "(Pre t s -\u003e s) -\u003e (p -\u003e Pre t p) -\u003e p -\u003e s",
          "source": "src/Data-Fixpoint-Base.html#hylo",
          "type": "function"
        },
        "index": {
          "description": "Hylomorphism",
          "hierarchy": "Data Fixpoint",
          "module": "Data.Fixpoint",
          "name": "hylo",
          "normalized": "(Pre a b-\u003eb)-\u003e(c-\u003ePre a c)-\u003ec-\u003eb",
          "package": "fixpoint",
          "signature": "(Pre t s-\u003es)-\u003e(p-\u003ePre t p)-\u003ep-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:hylo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInjection from the underlying functor into the data type.\n\u003c/p\u003e",
          "module": "Data.Fixpoint",
          "name": "inject",
          "package": "fixpoint",
          "signature": "Pre t t -\u003e t",
          "source": "src/Data-Fixpoint-Base.html#inject",
          "type": "method"
        },
        "index": {
          "description": "Injection from the underlying functor into the data type",
          "hierarchy": "Data Fixpoint",
          "module": "Data.Fixpoint",
          "name": "inject",
          "normalized": "Pre a a-\u003ea",
          "package": "fixpoint",
          "signature": "Pre t t-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParamorphism\n\u003c/p\u003e",
          "module": "Data.Fixpoint",
          "name": "para",
          "package": "fixpoint",
          "signature": "(Pre t (t, s) -\u003e s) -\u003e t -\u003e s",
          "source": "src/Data-Fixpoint-Base.html#para",
          "type": "function"
        },
        "index": {
          "description": "Paramorphism",
          "hierarchy": "Data Fixpoint",
          "module": "Data.Fixpoint",
          "name": "para",
          "normalized": "(Pre a(a,b)-\u003eb)-\u003ea-\u003eb",
          "package": "fixpoint",
          "signature": "(Pre t(t,s)-\u003es)-\u003et-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProjection from the data type to its underlying functor.\n\u003c/p\u003e",
          "module": "Data.Fixpoint",
          "name": "project",
          "package": "fixpoint",
          "signature": "t -\u003e Pre t t",
          "source": "src/Data-Fixpoint-Base.html#project",
          "type": "method"
        },
        "index": {
          "description": "Projection from the data type to its underlying functor",
          "hierarchy": "Data Fixpoint",
          "module": "Data.Fixpoint",
          "name": "project",
          "normalized": "a-\u003ePre a a",
          "package": "fixpoint",
          "signature": "t-\u003ePre t t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnamorphism (same as \u003ccode\u003e\u003ca\u003eana\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Fixpoint",
          "name": "unfold",
          "package": "fixpoint",
          "signature": "(s -\u003e Pre t s) -\u003e s -\u003e t",
          "source": "src/Data-Fixpoint-Base.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "Anamorphism same as ana",
          "hierarchy": "Data Fixpoint",
          "module": "Data.Fixpoint",
          "name": "unfold",
          "normalized": "(a-\u003ePre b a)-\u003ea-\u003eb",
          "package": "fixpoint",
          "signature": "(s-\u003ePre t s)-\u003es-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fixpoint/docs/Data-Fixpoint.html#v:unfold"
      }
    }
  ]
]