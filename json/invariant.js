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
        "word": "invariant"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Invariant",
          "name": "Invariant",
          "package": "invariant",
          "source": "src/Data-Functor-Invariant.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Functor Invariant",
          "module": "Data.Functor.Invariant",
          "name": "Invariant",
          "package": "invariant",
          "partial": "Invariant",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/invariant/docs/Data-Functor-Invariant.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny \u003ccode\u003e*-\u003e*\u003c/code\u003e type parametric in the argument permits an instance of\n \u003ccode\u003eInvariant\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e invmap id id = id\n invmap f2 f2' . invmap f1 f1' = invmap (f2 . f1) (f1' . f2')\n\u003c/pre\u003e",
          "module": "Data.Functor.Invariant",
          "name": "Invariant",
          "package": "invariant",
          "source": "src/Data-Functor-Invariant.html#Invariant",
          "type": "class"
        },
        "index": {
          "description": "Any type parametric in the argument permits an instance of Invariant Instances should satisfy the following laws invmap id id id invmap f2 f2 invmap f1 f1 invmap f2 f1 f1 f2",
          "hierarchy": "Data Functor Invariant",
          "module": "Data.Functor.Invariant",
          "name": "Invariant",
          "package": "invariant",
          "partial": "Invariant",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/invariant/docs/Data-Functor-Invariant.html#t:Invariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny \u003ccode\u003e*-\u003e*-\u003e*\u003c/code\u003e type parametric in both arguments permits an instance of\n \u003ccode\u003eInvariant2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e invmap2 id id id id = id\n invmap2 f2 f2' g2 g2' . invmap2 f1 f1' g1 g1' =\n   invmap2 (f2 . f1) (f1' . f2') (g2 . g1) (g1' . g2')\n\u003c/pre\u003e",
          "module": "Data.Functor.Invariant",
          "name": "Invariant2",
          "package": "invariant",
          "source": "src/Data-Functor-Invariant.html#Invariant2",
          "type": "class"
        },
        "index": {
          "description": "Any type parametric in both arguments permits an instance of Invariant2 Instances should satisfy the following laws invmap2 id id id id id invmap2 f2 f2 g2 g2 invmap2 f1 f1 g1 g1 invmap2 f2 f1 f1 f2 g2 g1 g1 g2",
          "hierarchy": "Data Functor Invariant",
          "module": "Data.Functor.Invariant",
          "name": "Invariant2",
          "package": "invariant",
          "partial": "Invariant",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/invariant/docs/Data-Functor-Invariant.html#t:Invariant2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Invariant",
          "name": "invmap",
          "package": "invariant",
          "signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e f a -\u003e f b",
          "source": "src/Data-Functor-Invariant.html#invmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Invariant",
          "module": "Data.Functor.Invariant",
          "name": "invmap",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ec a-\u003ec b",
          "package": "invariant",
          "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/invariant/docs/Data-Functor-Invariant.html#v:invmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Invariant",
          "name": "invmap2",
          "package": "invariant",
          "signature": "(a -\u003e c) -\u003e (c -\u003e a) -\u003e (b -\u003e d) -\u003e (d -\u003e b) -\u003e f a b -\u003e f c d",
          "source": "src/Data-Functor-Invariant.html#invmap2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Invariant",
          "module": "Data.Functor.Invariant",
          "name": "invmap2",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003e(c-\u003ed)-\u003e(d-\u003ec)-\u003ee a c-\u003ee b d",
          "package": "invariant",
          "signature": "(a-\u003ec)-\u003e(c-\u003ea)-\u003e(b-\u003ed)-\u003e(d-\u003eb)-\u003ef a b-\u003ef c d",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/invariant/docs/Data-Functor-Invariant.html#v:invmap2"
      }
    }
  ]
]