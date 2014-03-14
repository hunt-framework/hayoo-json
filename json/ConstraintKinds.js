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
        "word": "ConstraintKinds"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Applicative",
          "name": "Applicative",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Applicative.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Applicative",
          "module": "Control.ConstraintKinds.Applicative",
          "name": "Applicative",
          "package": "ConstraintKinds",
          "partial": "Applicative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Applicative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Applicative",
          "name": "Applicative",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Applicative.html#Applicative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Applicative",
          "module": "Control.ConstraintKinds.Applicative",
          "name": "Applicative",
          "package": "ConstraintKinds",
          "partial": "Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Applicative.html#t:Applicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Applicative",
          "name": "(\u003c*\u003e)",
          "package": "ConstraintKinds",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Control-ConstraintKinds-Applicative.html#%3C%2A%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Applicative",
          "module": "Control.ConstraintKinds.Applicative",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "ConstraintKinds",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Applicative.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function to actions.\n This function may be used as a value for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance.\n liftA :: (ApplicativeConstraint f a, ApplicativeConstraint f (a -\u003e b), ApplicativeConstraint f b, Applicative f) =\u003e (a -\u003e b) -\u003e f a -\u003e f b\n\u003c/p\u003e",
          "module": "Control.ConstraintKinds.Applicative",
          "name": "liftA",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Control-ConstraintKinds-Applicative.html#liftA",
          "type": "function"
        },
        "index": {
          "description": "Lift function to actions This function may be used as value for fmap in Functor instance liftA ApplicativeConstraint ApplicativeConstraint ApplicativeConstraint Applicative",
          "hierarchy": "Control ConstraintKinds Applicative",
          "module": "Control.ConstraintKinds.Applicative",
          "name": "liftA",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "ConstraintKinds",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Applicative.html#v:liftA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a binary function to actions.\n liftA2 :: (FunctorConstraint f a, FunctorConstraint f (b -\u003e c), Applicative f) =\u003e (a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c\n\u003c/p\u003e",
          "module": "Control.ConstraintKinds.Applicative",
          "name": "liftA2",
          "package": "ConstraintKinds",
          "signature": "(a1 -\u003e a -\u003e b) -\u003e f a1 -\u003e f a -\u003e f b",
          "source": "src/Control-ConstraintKinds-Applicative.html#liftA2",
          "type": "function"
        },
        "index": {
          "description": "Lift binary function to actions liftA2 FunctorConstraint FunctorConstraint Applicative",
          "hierarchy": "Control ConstraintKinds Applicative",
          "module": "Control.ConstraintKinds.Applicative",
          "name": "liftA2",
          "normalized": "(a-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec b",
          "package": "ConstraintKinds",
          "signature": "(a-\u003ea-\u003eb)-\u003ef a-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Applicative.html#v:liftA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a ternary function to actions.\n liftA3 :: (FunctorConstraint f a, FunctorConstraint f (b -\u003e c -\u003e d), Applicative f)=\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d\n\u003c/p\u003e",
          "module": "Control.ConstraintKinds.Applicative",
          "name": "liftA3",
          "package": "ConstraintKinds",
          "signature": "(a2 -\u003e a1 -\u003e a -\u003e b) -\u003e f a2 -\u003e f a1 -\u003e f a -\u003e f b",
          "source": "src/Control-ConstraintKinds-Applicative.html#liftA3",
          "type": "function"
        },
        "index": {
          "description": "Lift ternary function to actions liftA3 FunctorConstraint FunctorConstraint Applicative",
          "hierarchy": "Control ConstraintKinds Applicative",
          "module": "Control.ConstraintKinds.Applicative",
          "name": "liftA3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "ConstraintKinds",
          "signature": "(a-\u003ea-\u003ea-\u003eb)-\u003ef a-\u003ef a-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Applicative.html#v:liftA3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Filterable",
          "name": "Filterable",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Filterable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Filterable",
          "module": "Control.ConstraintKinds.Filterable",
          "name": "Filterable",
          "package": "ConstraintKinds",
          "partial": "Filterable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Filterable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Filterable",
          "name": "Filterable",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Filterable.html#Filterable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Filterable",
          "module": "Control.ConstraintKinds.Filterable",
          "name": "Filterable",
          "package": "ConstraintKinds",
          "partial": "Filterable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Filterable.html#t:Filterable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Filterable",
          "name": "filter",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e Bool) -\u003e f a -\u003e f a",
          "source": "src/Control-ConstraintKinds-Filterable.html#filter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Filterable",
          "module": "Control.ConstraintKinds.Filterable",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "ConstraintKinds",
          "signature": "(a-\u003eBool)-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Filterable.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Filterable",
          "name": "ifilter",
          "package": "ConstraintKinds",
          "signature": "(Int -\u003e a -\u003e Bool) -\u003e f a -\u003e f a",
          "source": "src/Control-ConstraintKinds-Filterable.html#ifilter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Filterable",
          "module": "Control.ConstraintKinds.Filterable",
          "name": "ifilter",
          "normalized": "(Int-\u003ea-\u003eBool)-\u003eb a-\u003eb a",
          "package": "ConstraintKinds",
          "signature": "(Int-\u003ea-\u003eBool)-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Filterable.html#v:ifilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Foldable",
          "name": "Foldable",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Foldable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Foldable",
          "module": "Control.ConstraintKinds.Foldable",
          "name": "Foldable",
          "package": "ConstraintKinds",
          "partial": "Foldable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Foldable",
          "name": "Foldable",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Foldable.html#Foldable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Foldable",
          "module": "Control.ConstraintKinds.Foldable",
          "name": "Foldable",
          "package": "ConstraintKinds",
          "partial": "Foldable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#t:Foldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Foldable",
          "name": "fold",
          "package": "ConstraintKinds",
          "signature": "t m -\u003e m",
          "source": "src/Control-ConstraintKinds-Foldable.html#fold",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Foldable",
          "module": "Control.ConstraintKinds.Foldable",
          "name": "fold",
          "normalized": "a b-\u003eb",
          "package": "ConstraintKinds",
          "signature": "t m-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldMap",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e m) -\u003e t a -\u003e m",
          "source": "src/Control-ConstraintKinds-Foldable.html#foldMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Foldable",
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldMap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "ConstraintKinds",
          "partial": "Map",
          "signature": "(a-\u003em)-\u003et a-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldl",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e t b -\u003e a",
          "source": "src/Control-ConstraintKinds-Foldable.html#foldl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Foldable",
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "ConstraintKinds",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003et b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldl'",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e t b -\u003e a",
          "source": "src/Control-ConstraintKinds-Foldable.html#foldl%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Foldable",
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "ConstraintKinds",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003et b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldl1",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e a -\u003e a) -\u003e t a -\u003e a",
          "source": "src/Control-ConstraintKinds-Foldable.html#foldl1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Foldable",
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "ConstraintKinds",
          "signature": "(a-\u003ea-\u003ea)-\u003et a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldr",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e t a -\u003e b",
          "source": "src/Control-ConstraintKinds-Foldable.html#foldr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Foldable",
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "ConstraintKinds",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003et a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldr'",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e t a -\u003e b",
          "source": "src/Control-ConstraintKinds-Foldable.html#foldr%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Foldable",
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "ConstraintKinds",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003et a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldr1",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e a -\u003e a) -\u003e t a -\u003e a",
          "source": "src/Control-ConstraintKinds-Foldable.html#foldr1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Foldable",
          "module": "Control.ConstraintKinds.Foldable",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
          "package": "ConstraintKinds",
          "signature": "(a-\u003ea-\u003ea)-\u003et a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Foldable",
          "name": "toList",
          "package": "ConstraintKinds",
          "signature": "t a -\u003e [a]",
          "source": "src/Control-ConstraintKinds-Foldable.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Foldable",
          "module": "Control.ConstraintKinds.Foldable",
          "name": "toList",
          "normalized": "a b-\u003e[b]",
          "package": "ConstraintKinds",
          "partial": "List",
          "signature": "t a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Functor",
          "name": "Functor",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Functor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Functor",
          "module": "Control.ConstraintKinds.Functor",
          "name": "Functor",
          "package": "ConstraintKinds",
          "partial": "Functor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Functor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Functor",
          "name": "Functor",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Functor.html#Functor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Functor",
          "module": "Control.ConstraintKinds.Functor",
          "name": "Functor",
          "package": "ConstraintKinds",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Functor.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ConstraintKinds.Functor",
          "name": "(\u003c$\u003e)",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Control-ConstraintKinds-Functor.html#%3C%24%3E",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for fmap",
          "hierarchy": "Control ConstraintKinds Functor",
          "module": "Control.ConstraintKinds.Functor",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "ConstraintKinds",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Functor.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Functor",
          "name": "fmap",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Control-ConstraintKinds-Functor.html#fmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Functor",
          "module": "Control.ConstraintKinds.Functor",
          "name": "fmap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "ConstraintKinds",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Functor.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Monad",
          "name": "Monad",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Monad",
          "module": "Control.ConstraintKinds.Monad",
          "name": "Monad",
          "package": "ConstraintKinds",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Monad",
          "name": "Monad",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Monad.html#Monad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Monad",
          "module": "Control.ConstraintKinds.Monad",
          "name": "Monad",
          "package": "ConstraintKinds",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Monad",
          "name": "(\u003e\u003e)",
          "package": "ConstraintKinds",
          "signature": "m a -\u003e m b -\u003e m b",
          "source": "src/Control-ConstraintKinds-Monad.html#%3E%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Monad",
          "module": "Control.ConstraintKinds.Monad",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "ConstraintKinds",
          "signature": "m a-\u003em b-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Monad",
          "name": "(\u003e\u003e=)",
          "package": "ConstraintKinds",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Control-ConstraintKinds-Monad.html#%3E%3E%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Monad",
          "module": "Control.ConstraintKinds.Monad",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "ConstraintKinds",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Monad",
          "name": "fail",
          "package": "ConstraintKinds",
          "signature": "String -\u003e m a",
          "source": "src/Control-ConstraintKinds-Monad.html#fail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Monad",
          "module": "Control.ConstraintKinds.Monad",
          "name": "fail",
          "normalized": "String-\u003ea b",
          "package": "ConstraintKinds",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Monad",
          "name": "ifThenElse",
          "package": "ConstraintKinds",
          "signature": "Bool -\u003e a -\u003e a -\u003e a",
          "source": "src/Control-ConstraintKinds-Monad.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Monad",
          "module": "Control.ConstraintKinds.Monad",
          "name": "ifThenElse",
          "normalized": "Bool-\u003ea-\u003ea-\u003ea",
          "package": "ConstraintKinds",
          "partial": "Then Else",
          "signature": "Bool-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Monad",
          "name": "join",
          "package": "ConstraintKinds",
          "signature": "m (m a) -\u003e m a",
          "source": "src/Control-ConstraintKinds-Monad.html#join",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Monad",
          "module": "Control.ConstraintKinds.Monad",
          "name": "join",
          "normalized": "a(a b)-\u003ea b",
          "package": "ConstraintKinds",
          "signature": "m(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Monad",
          "name": "return",
          "package": "ConstraintKinds",
          "signature": "a -\u003e m a",
          "source": "src/Control-ConstraintKinds-Monad.html#return",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Monad",
          "module": "Control.ConstraintKinds.Monad",
          "name": "return",
          "normalized": "a-\u003eb a",
          "package": "ConstraintKinds",
          "signature": "a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Partitionable",
          "name": "Partitionable",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Partitionable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Partitionable",
          "module": "Control.ConstraintKinds.Partitionable",
          "name": "Partitionable",
          "package": "ConstraintKinds",
          "partial": "Partitionable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Partitionable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Partitionable",
          "name": "Partitionable",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Partitionable.html#Partitionable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Partitionable",
          "module": "Control.ConstraintKinds.Partitionable",
          "name": "Partitionable",
          "package": "ConstraintKinds",
          "partial": "Partitionable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Partitionable.html#t:Partitionable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Partitionable",
          "name": "partition",
          "package": "ConstraintKinds",
          "signature": "Int -\u003e t a -\u003e [t a]",
          "source": "src/Control-ConstraintKinds-Partitionable.html#partition",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Partitionable",
          "module": "Control.ConstraintKinds.Partitionable",
          "name": "partition",
          "normalized": "Int-\u003ea b-\u003e[a b]",
          "package": "ConstraintKinds",
          "signature": "Int-\u003et a-\u003e[t a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Partitionable.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Pointed",
          "name": "Pointed",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Pointed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Pointed",
          "module": "Control.ConstraintKinds.Pointed",
          "name": "Pointed",
          "package": "ConstraintKinds",
          "partial": "Pointed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Pointed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Pointed",
          "name": "Pointed",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Pointed.html#Pointed",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Pointed",
          "module": "Control.ConstraintKinds.Pointed",
          "name": "Pointed",
          "package": "ConstraintKinds",
          "partial": "Pointed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Pointed.html#t:Pointed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Pointed",
          "name": "point",
          "package": "ConstraintKinds",
          "signature": "a -\u003e f a",
          "source": "src/Control-ConstraintKinds-Pointed.html#point",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Pointed",
          "module": "Control.ConstraintKinds.Pointed",
          "name": "point",
          "normalized": "a-\u003eb a",
          "package": "ConstraintKinds",
          "signature": "a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Pointed.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Traversable",
          "name": "Traversable",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Traversable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Traversable",
          "module": "Control.ConstraintKinds.Traversable",
          "name": "Traversable",
          "package": "ConstraintKinds",
          "partial": "Traversable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Traversable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Traversable",
          "name": "Traversable",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds-Traversable.html#Traversable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Traversable",
          "module": "Control.ConstraintKinds.Traversable",
          "name": "Traversable",
          "package": "ConstraintKinds",
          "partial": "Traversable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Traversable.html#t:Traversable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Traversable",
          "name": "mapM",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e m b) -\u003e t a -\u003e m (t b)",
          "source": "src/Control-ConstraintKinds-Traversable.html#mapM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Traversable",
          "module": "Control.ConstraintKinds.Traversable",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "ConstraintKinds",
          "signature": "(a-\u003em b)-\u003et a-\u003em(t b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Traversable.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Traversable",
          "name": "sequence",
          "package": "ConstraintKinds",
          "signature": "t (m a) -\u003e m (t a)",
          "source": "src/Control-ConstraintKinds-Traversable.html#sequence",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Traversable",
          "module": "Control.ConstraintKinds.Traversable",
          "name": "sequence",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "ConstraintKinds",
          "signature": "t(m a)-\u003em(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Traversable.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Traversable",
          "name": "sequenceA",
          "package": "ConstraintKinds",
          "signature": "t (f a) -\u003e f (t a)",
          "source": "src/Control-ConstraintKinds-Traversable.html#sequenceA",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Traversable",
          "module": "Control.ConstraintKinds.Traversable",
          "name": "sequenceA",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "ConstraintKinds",
          "signature": "t(f a)-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Traversable.html#v:sequenceA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds.Traversable",
          "name": "traverse",
          "package": "ConstraintKinds",
          "signature": "(a -\u003e f b) -\u003e t a -\u003e f (t b)",
          "source": "src/Control-ConstraintKinds-Traversable.html#traverse",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds Traversable",
          "module": "Control.ConstraintKinds.Traversable",
          "name": "traverse",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "ConstraintKinds",
          "signature": "(a-\u003ef b)-\u003et a-\u003ef(t b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Traversable.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ConstraintKinds",
          "name": "ConstraintKinds",
          "package": "ConstraintKinds",
          "source": "src/Control-ConstraintKinds.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control ConstraintKinds",
          "module": "Control.ConstraintKinds",
          "name": "ConstraintKinds",
          "package": "ConstraintKinds",
          "partial": "Constraint Kinds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds.html#"
      }
    }
  ]
]