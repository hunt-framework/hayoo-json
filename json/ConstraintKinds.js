[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Applicative.html#",
      "description": {
        "fct-module": "Control.ConstraintKinds.Applicative",
        "fct-package": "ConstraintKinds",
        "fct-signature": "module",
        "fct-source": "src/Control-ConstraintKinds-Applicative.html",
        "fct-type": "module",
        "title": "Applicative"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Applicative",
        "module": "Control.ConstraintKinds.Applicative",
        "name": "Applicative",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Applicative.html#t:Applicative",
      "description": {
        "fct-module": "Control.ConstraintKinds.Applicative",
        "fct-package": "ConstraintKinds",
        "fct-signature": "class",
        "fct-source": "src/Control-ConstraintKinds-Applicative.html#Applicative",
        "fct-type": "class",
        "title": "Applicative"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Applicative",
        "module": "Control.ConstraintKinds.Applicative",
        "name": "Applicative",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Applicative.html#v:-60--42--62-",
      "description": {
        "fct-module": "Control.ConstraintKinds.Applicative",
        "fct-package": "ConstraintKinds",
        "fct-signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Control-ConstraintKinds-Applicative.html#%3C%2A%3E",
        "fct-type": "method",
        "title": "(\u003c*\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Applicative",
        "module": "Control.ConstraintKinds.Applicative",
        "name": "(\u003c*\u003e) \u003c*\u003e",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "f(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Applicative.html#v:liftA",
      "description": {
        "fct-descr": "\u003cp\u003eLift a function to actions.\n This function may be used as a value for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance.\n liftA :: (ApplicativeConstraint f a, ApplicativeConstraint f (a -\u003e b), ApplicativeConstraint f b, Applicative f) =\u003e (a -\u003e b) -\u003e f a -\u003e f b\n\u003c/p\u003e",
        "fct-module": "Control.ConstraintKinds.Applicative",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Control-ConstraintKinds-Applicative.html#liftA",
        "fct-type": "function",
        "title": "liftA"
      },
      "index": {
        "description": "Lift function to actions This function may be used as value for fmap in Functor instance liftA ApplicativeConstraint ApplicativeConstraint ApplicativeConstraint Applicative",
        "hierarchy": "Control ConstraintKinds Applicative",
        "module": "Control.ConstraintKinds.Applicative",
        "name": "liftA",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Applicative.html#v:liftA2",
      "description": {
        "fct-descr": "\u003cp\u003eLift a binary function to actions.\n liftA2 :: (FunctorConstraint f a, FunctorConstraint f (b -\u003e c), Applicative f) =\u003e (a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c\n\u003c/p\u003e",
        "fct-module": "Control.ConstraintKinds.Applicative",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a1 -\u003e a -\u003e b) -\u003e f a1 -\u003e f a -\u003e f b",
        "fct-source": "src/Control-ConstraintKinds-Applicative.html#liftA2",
        "fct-type": "function",
        "title": "liftA2"
      },
      "index": {
        "description": "Lift binary function to actions liftA2 FunctorConstraint FunctorConstraint Applicative",
        "hierarchy": "Control ConstraintKinds Applicative",
        "module": "Control.ConstraintKinds.Applicative",
        "name": "liftA2",
        "normalized": "(a-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec b",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003ea-\u003eb)-\u003ef a-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Applicative.html#v:liftA3",
      "description": {
        "fct-descr": "\u003cp\u003eLift a ternary function to actions.\n liftA3 :: (FunctorConstraint f a, FunctorConstraint f (b -\u003e c -\u003e d), Applicative f)=\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d\n\u003c/p\u003e",
        "fct-module": "Control.ConstraintKinds.Applicative",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a2 -\u003e a1 -\u003e a -\u003e b) -\u003e f a2 -\u003e f a1 -\u003e f a -\u003e f b",
        "fct-source": "src/Control-ConstraintKinds-Applicative.html#liftA3",
        "fct-type": "function",
        "title": "liftA3"
      },
      "index": {
        "description": "Lift ternary function to actions liftA3 FunctorConstraint FunctorConstraint Applicative",
        "hierarchy": "Control ConstraintKinds Applicative",
        "module": "Control.ConstraintKinds.Applicative",
        "name": "liftA3",
        "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea-\u003eb)-\u003ef a-\u003ef a-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Filterable.html#",
      "description": {
        "fct-module": "Control.ConstraintKinds.Filterable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "module",
        "fct-source": "src/Control-ConstraintKinds-Filterable.html",
        "fct-type": "module",
        "title": "Filterable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Filterable",
        "module": "Control.ConstraintKinds.Filterable",
        "name": "Filterable",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Filterable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Filterable.html#t:Filterable",
      "description": {
        "fct-module": "Control.ConstraintKinds.Filterable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "class",
        "fct-source": "src/Control-ConstraintKinds-Filterable.html#Filterable",
        "fct-type": "class",
        "title": "Filterable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Filterable",
        "module": "Control.ConstraintKinds.Filterable",
        "name": "Filterable",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Filterable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Filterable.html#v:filter",
      "description": {
        "fct-module": "Control.ConstraintKinds.Filterable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e Bool) -\u003e f a -\u003e f a",
        "fct-source": "src/Control-ConstraintKinds-Filterable.html#filter",
        "fct-type": "method",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Filterable",
        "module": "Control.ConstraintKinds.Filterable",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Filterable.html#v:ifilter",
      "description": {
        "fct-module": "Control.ConstraintKinds.Filterable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(Int -\u003e a -\u003e Bool) -\u003e f a -\u003e f a",
        "fct-source": "src/Control-ConstraintKinds-Filterable.html#ifilter",
        "fct-type": "method",
        "title": "ifilter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Filterable",
        "module": "Control.ConstraintKinds.Filterable",
        "name": "ifilter",
        "normalized": "(Int-\u003ea-\u003eBool)-\u003eb a-\u003eb a",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(Int-\u003ea-\u003eBool)-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#",
      "description": {
        "fct-module": "Control.ConstraintKinds.Foldable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "module",
        "fct-source": "src/Control-ConstraintKinds-Foldable.html",
        "fct-type": "module",
        "title": "Foldable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Foldable",
        "module": "Control.ConstraintKinds.Foldable",
        "name": "Foldable",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Foldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#t:Foldable",
      "description": {
        "fct-module": "Control.ConstraintKinds.Foldable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "class",
        "fct-source": "src/Control-ConstraintKinds-Foldable.html#Foldable",
        "fct-type": "class",
        "title": "Foldable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Foldable",
        "module": "Control.ConstraintKinds.Foldable",
        "name": "Foldable",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Foldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:fold",
      "description": {
        "fct-module": "Control.ConstraintKinds.Foldable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "t m -\u003e m",
        "fct-source": "src/Control-ConstraintKinds-Foldable.html#fold",
        "fct-type": "method",
        "title": "fold"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Foldable",
        "module": "Control.ConstraintKinds.Foldable",
        "name": "fold",
        "normalized": "a b-\u003eb",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "t m-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldMap",
      "description": {
        "fct-module": "Control.ConstraintKinds.Foldable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e m) -\u003e t a -\u003e m",
        "fct-source": "src/Control-ConstraintKinds-Foldable.html#foldMap",
        "fct-type": "method",
        "title": "foldMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Foldable",
        "module": "Control.ConstraintKinds.Foldable",
        "name": "foldMap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
        "package": "ConstraintKinds",
        "partial": "Map",
        "signature": "(a-\u003em)-\u003et a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldl",
      "description": {
        "fct-module": "Control.ConstraintKinds.Foldable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e t b -\u003e a",
        "fct-source": "src/Control-ConstraintKinds-Foldable.html#foldl",
        "fct-type": "method",
        "title": "foldl"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Foldable",
        "module": "Control.ConstraintKinds.Foldable",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003et b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldl-39-",
      "description": {
        "fct-module": "Control.ConstraintKinds.Foldable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e t b -\u003e a",
        "fct-source": "src/Control-ConstraintKinds-Foldable.html#foldl%27",
        "fct-type": "method",
        "title": "foldl'"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Foldable",
        "module": "Control.ConstraintKinds.Foldable",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003et b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldl1",
      "description": {
        "fct-module": "Control.ConstraintKinds.Foldable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e t a -\u003e a",
        "fct-source": "src/Control-ConstraintKinds-Foldable.html#foldl1",
        "fct-type": "method",
        "title": "foldl1"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Foldable",
        "module": "Control.ConstraintKinds.Foldable",
        "name": "foldl1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003et a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldr",
      "description": {
        "fct-module": "Control.ConstraintKinds.Foldable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e t a -\u003e b",
        "fct-source": "src/Control-ConstraintKinds-Foldable.html#foldr",
        "fct-type": "method",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Foldable",
        "module": "Control.ConstraintKinds.Foldable",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003et a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldr-39-",
      "description": {
        "fct-module": "Control.ConstraintKinds.Foldable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e t a -\u003e b",
        "fct-source": "src/Control-ConstraintKinds-Foldable.html#foldr%27",
        "fct-type": "method",
        "title": "foldr'"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Foldable",
        "module": "Control.ConstraintKinds.Foldable",
        "name": "foldr'",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003et a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:foldr1",
      "description": {
        "fct-module": "Control.ConstraintKinds.Foldable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e t a -\u003e a",
        "fct-source": "src/Control-ConstraintKinds-Foldable.html#foldr1",
        "fct-type": "method",
        "title": "foldr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Foldable",
        "module": "Control.ConstraintKinds.Foldable",
        "name": "foldr1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003et a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Foldable.html#v:toList",
      "description": {
        "fct-module": "Control.ConstraintKinds.Foldable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "t a -\u003e [a]",
        "fct-source": "src/Control-ConstraintKinds-Foldable.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Foldable",
        "module": "Control.ConstraintKinds.Foldable",
        "name": "toList",
        "normalized": "a b-\u003e[b]",
        "package": "ConstraintKinds",
        "partial": "List",
        "signature": "t a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Functor.html#",
      "description": {
        "fct-module": "Control.ConstraintKinds.Functor",
        "fct-package": "ConstraintKinds",
        "fct-signature": "module",
        "fct-source": "src/Control-ConstraintKinds-Functor.html",
        "fct-type": "module",
        "title": "Functor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Functor",
        "module": "Control.ConstraintKinds.Functor",
        "name": "Functor",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Functor.html#t:Functor",
      "description": {
        "fct-module": "Control.ConstraintKinds.Functor",
        "fct-package": "ConstraintKinds",
        "fct-signature": "class",
        "fct-source": "src/Control-ConstraintKinds-Functor.html#Functor",
        "fct-type": "class",
        "title": "Functor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Functor",
        "module": "Control.ConstraintKinds.Functor",
        "name": "Functor",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Functor.html#v:-60--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.ConstraintKinds.Functor",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Control-ConstraintKinds-Functor.html#%3C%24%3E",
        "fct-type": "function",
        "title": "(\u003c$\u003e)"
      },
      "index": {
        "description": "An infix synonym for fmap",
        "hierarchy": "Control ConstraintKinds Functor",
        "module": "Control.ConstraintKinds.Functor",
        "name": "(\u003c$\u003e) \u003c$\u003e",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Functor.html#v:fmap",
      "description": {
        "fct-module": "Control.ConstraintKinds.Functor",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Control-ConstraintKinds-Functor.html#fmap",
        "fct-type": "method",
        "title": "fmap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Functor",
        "module": "Control.ConstraintKinds.Functor",
        "name": "fmap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#",
      "description": {
        "fct-module": "Control.ConstraintKinds.Monad",
        "fct-package": "ConstraintKinds",
        "fct-signature": "module",
        "fct-source": "src/Control-ConstraintKinds-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Monad",
        "module": "Control.ConstraintKinds.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#t:Monad",
      "description": {
        "fct-module": "Control.ConstraintKinds.Monad",
        "fct-package": "ConstraintKinds",
        "fct-signature": "class",
        "fct-source": "src/Control-ConstraintKinds-Monad.html#Monad",
        "fct-type": "class",
        "title": "Monad"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Monad",
        "module": "Control.ConstraintKinds.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#v:-62--62-",
      "description": {
        "fct-module": "Control.ConstraintKinds.Monad",
        "fct-package": "ConstraintKinds",
        "fct-signature": "m a -\u003e m b -\u003e m b",
        "fct-source": "src/Control-ConstraintKinds-Monad.html#%3E%3E",
        "fct-type": "method",
        "title": "(\u003e\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Monad",
        "module": "Control.ConstraintKinds.Monad",
        "name": "(\u003e\u003e) \u003e\u003e",
        "normalized": "a b-\u003ea c-\u003ea c",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "m a-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#v:-62--62--61-",
      "description": {
        "fct-module": "Control.ConstraintKinds.Monad",
        "fct-package": "ConstraintKinds",
        "fct-signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-ConstraintKinds-Monad.html#%3E%3E%3D",
        "fct-type": "method",
        "title": "(\u003e\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Monad",
        "module": "Control.ConstraintKinds.Monad",
        "name": "(\u003e\u003e=) \u003e\u003e=",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#v:fail",
      "description": {
        "fct-module": "Control.ConstraintKinds.Monad",
        "fct-package": "ConstraintKinds",
        "fct-signature": "String -\u003e m a",
        "fct-source": "src/Control-ConstraintKinds-Monad.html#fail",
        "fct-type": "method",
        "title": "fail"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Monad",
        "module": "Control.ConstraintKinds.Monad",
        "name": "fail",
        "normalized": "String-\u003ea b",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "String-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#v:ifThenElse",
      "description": {
        "fct-module": "Control.ConstraintKinds.Monad",
        "fct-package": "ConstraintKinds",
        "fct-signature": "Bool -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Control-ConstraintKinds-Monad.html#ifThenElse",
        "fct-type": "function",
        "title": "ifThenElse"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Monad",
        "module": "Control.ConstraintKinds.Monad",
        "name": "ifThenElse",
        "normalized": "Bool-\u003ea-\u003ea-\u003ea",
        "package": "ConstraintKinds",
        "partial": "Then Else",
        "signature": "Bool-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#v:join",
      "description": {
        "fct-module": "Control.ConstraintKinds.Monad",
        "fct-package": "ConstraintKinds",
        "fct-signature": "m (m a) -\u003e m a",
        "fct-source": "src/Control-ConstraintKinds-Monad.html#join",
        "fct-type": "method",
        "title": "join"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Monad",
        "module": "Control.ConstraintKinds.Monad",
        "name": "join",
        "normalized": "a(a b)-\u003ea b",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "m(m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Monad.html#v:return",
      "description": {
        "fct-module": "Control.ConstraintKinds.Monad",
        "fct-package": "ConstraintKinds",
        "fct-signature": "a -\u003e m a",
        "fct-source": "src/Control-ConstraintKinds-Monad.html#return",
        "fct-type": "method",
        "title": "return"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Monad",
        "module": "Control.ConstraintKinds.Monad",
        "name": "return",
        "normalized": "a-\u003eb a",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Partitionable.html#",
      "description": {
        "fct-module": "Control.ConstraintKinds.Partitionable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "module",
        "fct-source": "src/Control-ConstraintKinds-Partitionable.html",
        "fct-type": "module",
        "title": "Partitionable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Partitionable",
        "module": "Control.ConstraintKinds.Partitionable",
        "name": "Partitionable",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Partitionable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Partitionable.html#t:Partitionable",
      "description": {
        "fct-module": "Control.ConstraintKinds.Partitionable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "class",
        "fct-source": "src/Control-ConstraintKinds-Partitionable.html#Partitionable",
        "fct-type": "class",
        "title": "Partitionable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Partitionable",
        "module": "Control.ConstraintKinds.Partitionable",
        "name": "Partitionable",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Partitionable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Partitionable.html#v:partition",
      "description": {
        "fct-module": "Control.ConstraintKinds.Partitionable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "Int -\u003e t a -\u003e [t a]",
        "fct-source": "src/Control-ConstraintKinds-Partitionable.html#partition",
        "fct-type": "method",
        "title": "partition"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Partitionable",
        "module": "Control.ConstraintKinds.Partitionable",
        "name": "partition",
        "normalized": "Int-\u003ea b-\u003e[a b]",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "Int-\u003et a-\u003e[t a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Pointed.html#",
      "description": {
        "fct-module": "Control.ConstraintKinds.Pointed",
        "fct-package": "ConstraintKinds",
        "fct-signature": "module",
        "fct-source": "src/Control-ConstraintKinds-Pointed.html",
        "fct-type": "module",
        "title": "Pointed"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Pointed",
        "module": "Control.ConstraintKinds.Pointed",
        "name": "Pointed",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Pointed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Pointed.html#t:Pointed",
      "description": {
        "fct-module": "Control.ConstraintKinds.Pointed",
        "fct-package": "ConstraintKinds",
        "fct-signature": "class",
        "fct-source": "src/Control-ConstraintKinds-Pointed.html#Pointed",
        "fct-type": "class",
        "title": "Pointed"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Pointed",
        "module": "Control.ConstraintKinds.Pointed",
        "name": "Pointed",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Pointed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Pointed.html#v:point",
      "description": {
        "fct-module": "Control.ConstraintKinds.Pointed",
        "fct-package": "ConstraintKinds",
        "fct-signature": "a -\u003e f a",
        "fct-source": "src/Control-ConstraintKinds-Pointed.html#point",
        "fct-type": "method",
        "title": "point"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Pointed",
        "module": "Control.ConstraintKinds.Pointed",
        "name": "point",
        "normalized": "a-\u003eb a",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Traversable.html#",
      "description": {
        "fct-module": "Control.ConstraintKinds.Traversable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "module",
        "fct-source": "src/Control-ConstraintKinds-Traversable.html",
        "fct-type": "module",
        "title": "Traversable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Traversable",
        "module": "Control.ConstraintKinds.Traversable",
        "name": "Traversable",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Traversable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Traversable.html#t:Traversable",
      "description": {
        "fct-module": "Control.ConstraintKinds.Traversable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "class",
        "fct-source": "src/Control-ConstraintKinds-Traversable.html#Traversable",
        "fct-type": "class",
        "title": "Traversable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Traversable",
        "module": "Control.ConstraintKinds.Traversable",
        "name": "Traversable",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Traversable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Traversable.html#v:mapM",
      "description": {
        "fct-module": "Control.ConstraintKinds.Traversable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e m b) -\u003e t a -\u003e m (t b)",
        "fct-source": "src/Control-ConstraintKinds-Traversable.html#mapM",
        "fct-type": "method",
        "title": "mapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Traversable",
        "module": "Control.ConstraintKinds.Traversable",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003em b)-\u003et a-\u003em(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Traversable.html#v:sequence",
      "description": {
        "fct-module": "Control.ConstraintKinds.Traversable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "t (m a) -\u003e m (t a)",
        "fct-source": "src/Control-ConstraintKinds-Traversable.html#sequence",
        "fct-type": "method",
        "title": "sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Traversable",
        "module": "Control.ConstraintKinds.Traversable",
        "name": "sequence",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "t(m a)-\u003em(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Traversable.html#v:sequenceA",
      "description": {
        "fct-module": "Control.ConstraintKinds.Traversable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "t (f a) -\u003e f (t a)",
        "fct-source": "src/Control-ConstraintKinds-Traversable.html#sequenceA",
        "fct-type": "method",
        "title": "sequenceA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Traversable",
        "module": "Control.ConstraintKinds.Traversable",
        "name": "sequenceA",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "t(f a)-\u003ef(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds-Traversable.html#v:traverse",
      "description": {
        "fct-module": "Control.ConstraintKinds.Traversable",
        "fct-package": "ConstraintKinds",
        "fct-signature": "(a -\u003e f b) -\u003e t a -\u003e f (t b)",
        "fct-source": "src/Control-ConstraintKinds-Traversable.html#traverse",
        "fct-type": "method",
        "title": "traverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds Traversable",
        "module": "Control.ConstraintKinds.Traversable",
        "name": "traverse",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "ConstraintKinds",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003et a-\u003ef(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ConstraintKinds/docs/Control-ConstraintKinds.html#",
      "description": {
        "fct-module": "Control.ConstraintKinds",
        "fct-package": "ConstraintKinds",
        "fct-signature": "module",
        "fct-source": "src/Control-ConstraintKinds.html",
        "fct-type": "module",
        "title": "ConstraintKinds"
      },
      "index": {
        "description": "",
        "hierarchy": "Control ConstraintKinds",
        "module": "Control.ConstraintKinds",
        "name": "ConstraintKinds",
        "normalized": "",
        "package": "ConstraintKinds",
        "partial": "Constraint Kinds",
        "signature": ""
      }
    }
  }
]