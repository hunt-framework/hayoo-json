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
        "word": "star-to-star-contra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eYet another Cofunctor class declaration -- all the definitions on hackage\n carry so much luggage (which mostly subsumes the rest of this package)!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Functor.Contra",
          "name": "Contra",
          "package": "star-to-star-contra",
          "source": "src/Control-Functor-Contra.html",
          "type": "module"
        },
        "index": {
          "description": "Yet another Cofunctor class declaration all the definitions on hackage carry so much luggage which mostly subsumes the rest of this package",
          "hierarchy": "Control Functor Contra",
          "module": "Control.Functor.Contra",
          "name": "Contra",
          "package": "star-to-star-contra",
          "partial": "Contra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/star-to-star-contra/docs/Control-Functor-Contra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Functor.Contra",
          "name": "Cofunctor",
          "package": "star-to-star-contra",
          "source": "src/Control-Functor-Contra.html#Cofunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Functor Contra",
          "module": "Control.Functor.Contra",
          "name": "Cofunctor",
          "package": "star-to-star-contra",
          "partial": "Cofunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/star-to-star-contra/docs/Control-Functor-Contra.html#t:Cofunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Functor.Contra",
          "name": "cofmap",
          "package": "star-to-star-contra",
          "signature": "(b -\u003e a) -\u003e f a -\u003e f b",
          "source": "src/Control-Functor-Contra.html#cofmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Functor Contra",
          "module": "Control.Functor.Contra",
          "name": "cofmap",
          "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
          "package": "star-to-star-contra",
          "signature": "(b-\u003ea)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/star-to-star-contra/docs/Control-Functor-Contra.html#v:cofmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstances for the fundamental * -\u003e * types that require\n contravariance. Another O is defined to disambiguate the two valid Functor\n and Cofunctor instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StarToStar.Contra",
          "name": "Contra",
          "package": "star-to-star-contra",
          "source": "src/Data-StarToStar-Contra.html",
          "type": "module"
        },
        "index": {
          "description": "Instances for the fundamental types that require contravariance Another is defined to disambiguate the two valid Functor and Cofunctor instances",
          "hierarchy": "Data StarToStar Contra",
          "module": "Data.StarToStar.Contra",
          "name": "Contra",
          "package": "star-to-star-contra",
          "partial": "Contra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/star-to-star-contra/docs/Data-StarToStar-Contra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Contra",
          "name": "O",
          "package": "star-to-star-contra",
          "source": "src/Data-StarToStar-Contra.html#O",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data StarToStar Contra",
          "module": "Data.StarToStar.Contra",
          "name": "O",
          "package": "star-to-star-contra",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/star-to-star-contra/docs/Data-StarToStar-Contra.html#t:O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Contra",
          "name": "O",
          "package": "star-to-star-contra",
          "signature": "O (f (g a))",
          "source": "src/Data-StarToStar-Contra.html#O",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StarToStar Contra",
          "module": "Data.StarToStar.Contra",
          "name": "O",
          "package": "star-to-star-contra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/star-to-star-contra/docs/Data-StarToStar-Contra.html#v:O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Contra",
          "name": "fromO",
          "package": "star-to-star-contra",
          "signature": "O f g a -\u003e f (g a)",
          "source": "src/Data-StarToStar-Contra.html#fromO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StarToStar Contra",
          "module": "Data.StarToStar.Contra",
          "name": "fromO",
          "normalized": "O a b c-\u003ea(b c)",
          "package": "star-to-star-contra",
          "signature": "O f g a-\u003ef(g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/star-to-star-contra/docs/Data-StarToStar-Contra.html#v:fromO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Contra",
          "name": "onO",
          "package": "star-to-star-contra",
          "signature": "(f (g a) -\u003e b) -\u003e O f g a -\u003e b",
          "source": "src/Data-StarToStar-Contra.html#onO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StarToStar Contra",
          "module": "Data.StarToStar.Contra",
          "name": "onO",
          "normalized": "(a(b c)-\u003ed)-\u003eO a b c-\u003ed",
          "package": "star-to-star-contra",
          "signature": "(f(g a)-\u003eb)-\u003eO f g a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/star-to-star-contra/docs/Data-StarToStar-Contra.html#v:onO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Contra",
          "name": "toO",
          "package": "star-to-star-contra",
          "signature": "f (g a) -\u003e O f g a",
          "source": "src/Data-StarToStar-Contra.html#toO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StarToStar Contra",
          "module": "Data.StarToStar.Contra",
          "name": "toO",
          "normalized": "a(b c)-\u003eO a b c",
          "package": "star-to-star-contra",
          "signature": "f(g a)-\u003eO f g a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/star-to-star-contra/docs/Data-StarToStar-Contra.html#v:toO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StarToStar.Contra",
          "name": "underO",
          "package": "star-to-star-contra",
          "signature": "(f (g a) -\u003e h (i b)) -\u003e O f g a -\u003e O h i b",
          "source": "src/Data-StarToStar-Contra.html#underO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StarToStar Contra",
          "module": "Data.StarToStar.Contra",
          "name": "underO",
          "normalized": "(a(b c)-\u003ed(e f))-\u003eO a b c-\u003eO d e f",
          "package": "star-to-star-contra",
          "signature": "(f(g a)-\u003eh(i b))-\u003eO f g a-\u003eO h i b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/star-to-star-contra/docs/Data-StarToStar-Contra.html#v:underO"
      }
    }
  ]
]