[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/invariant/docs/Data-Functor-Invariant.html#",
      "description": {
        "fct-module": "Data.Functor.Invariant",
        "fct-package": "invariant",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Invariant.html",
        "fct-type": "module",
        "title": "Invariant"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Invariant",
        "module": "Data.Functor.Invariant",
        "name": "Invariant",
        "normalized": "",
        "package": "invariant",
        "partial": "Invariant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/invariant/docs/Data-Functor-Invariant.html#t:Invariant",
      "description": {
        "fct-descr": "\u003cp\u003eAny \u003ccode\u003e*-\u003e*\u003c/code\u003e type parametric in the argument permits an instance of\n \u003ccode\u003eInvariant\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e invmap id id = id\n invmap f2 f2' . invmap f1 f1' = invmap (f2 . f1) (f1' . f2')\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Invariant",
        "fct-package": "invariant",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Invariant.html#Invariant",
        "fct-type": "class",
        "title": "Invariant"
      },
      "index": {
        "description": "Any type parametric in the argument permits an instance of Invariant Instances should satisfy the following laws invmap id id id invmap f2 f2 invmap f1 f1 invmap f2 f1 f1 f2",
        "hierarchy": "Data Functor Invariant",
        "module": "Data.Functor.Invariant",
        "name": "Invariant",
        "normalized": "",
        "package": "invariant",
        "partial": "Invariant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/invariant/docs/Data-Functor-Invariant.html#t:Invariant2",
      "description": {
        "fct-descr": "\u003cp\u003eAny \u003ccode\u003e*-\u003e*-\u003e*\u003c/code\u003e type parametric in both arguments permits an instance of\n \u003ccode\u003eInvariant2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e invmap2 id id id id = id\n invmap2 f2 f2' g2 g2' . invmap2 f1 f1' g1 g1' =\n   invmap2 (f2 . f1) (f1' . f2') (g2 . g1) (g1' . g2')\n\u003c/pre\u003e",
        "fct-module": "Data.Functor.Invariant",
        "fct-package": "invariant",
        "fct-signature": "class",
        "fct-source": "src/Data-Functor-Invariant.html#Invariant2",
        "fct-type": "class",
        "title": "Invariant2"
      },
      "index": {
        "description": "Any type parametric in both arguments permits an instance of Invariant2 Instances should satisfy the following laws invmap2 id id id id id invmap2 f2 f2 g2 g2 invmap2 f1 f1 g1 g1 invmap2 f2 f1 f1 f2 g2 g1 g1 g2",
        "hierarchy": "Data Functor Invariant",
        "module": "Data.Functor.Invariant",
        "name": "Invariant2",
        "normalized": "",
        "package": "invariant",
        "partial": "Invariant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/invariant/docs/Data-Functor-Invariant.html#v:invmap",
      "description": {
        "fct-module": "Data.Functor.Invariant",
        "fct-package": "invariant",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Functor-Invariant.html#invmap",
        "fct-type": "method",
        "title": "invmap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Invariant",
        "module": "Data.Functor.Invariant",
        "name": "invmap",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ec a-\u003ec b",
        "package": "invariant",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/invariant/docs/Data-Functor-Invariant.html#v:invmap2",
      "description": {
        "fct-module": "Data.Functor.Invariant",
        "fct-package": "invariant",
        "fct-signature": "(a -\u003e c) -\u003e (c -\u003e a) -\u003e (b -\u003e d) -\u003e (d -\u003e b) -\u003e f a b -\u003e f c d",
        "fct-source": "src/Data-Functor-Invariant.html#invmap2",
        "fct-type": "method",
        "title": "invmap2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Invariant",
        "module": "Data.Functor.Invariant",
        "name": "invmap2",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003e(c-\u003ed)-\u003e(d-\u003ec)-\u003ee a c-\u003ee b d",
        "package": "invariant",
        "partial": "",
        "signature": "(a-\u003ec)-\u003e(c-\u003ea)-\u003e(b-\u003ed)-\u003e(d-\u003eb)-\u003ef a b-\u003ef c d"
      }
    }
  }
]