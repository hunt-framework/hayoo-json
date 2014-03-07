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
        "word": "void"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Void.Unsafe",
          "name": "Unsafe",
          "package": "void",
          "source": "src/Data-Void-Unsafe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Void Unsafe",
          "module": "Data.Void.Unsafe",
          "name": "Unsafe",
          "package": "void",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/void/docs/Data-Void-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e is uninhabited than any \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e that holds only values of the type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e\n is holding no values.\n\u003c/p\u003e\u003cp\u003eThis is only safe for valid functors that do not perform GADT-like analysis on the argument.\n\u003c/p\u003e",
          "module": "Data.Void.Unsafe",
          "name": "unsafeVacuous",
          "package": "void",
          "signature": "f Void -\u003e f a",
          "source": "src/Data-Void-Unsafe.html#unsafeVacuous",
          "type": "function"
        },
        "index": {
          "description": "If Void is uninhabited than any Functor that holds only values of the type Void is holding no values This is only safe for valid functors that do not perform GADT-like analysis on the argument",
          "hierarchy": "Data Void Unsafe",
          "module": "Data.Void.Unsafe",
          "name": "unsafeVacuous",
          "normalized": "a Void-\u003ea b",
          "package": "void",
          "partial": "Vacuous",
          "signature": "f Void-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/void/docs/Data-Void-Unsafe.html#v:unsafeVacuous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e is uninhabited then any \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e that holds values of type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e\n is holding no values.\n\u003c/p\u003e\u003cp\u003eThis is only safe for valid monads that do not perform GADT-like analysis on the argument.\n\u003c/p\u003e",
          "module": "Data.Void.Unsafe",
          "name": "unsafeVacuousM",
          "package": "void",
          "signature": "m Void -\u003e m a",
          "source": "src/Data-Void-Unsafe.html#unsafeVacuousM",
          "type": "function"
        },
        "index": {
          "description": "If Void is uninhabited then any Monad that holds values of type Void is holding no values This is only safe for valid monads that do not perform GADT-like analysis on the argument",
          "hierarchy": "Data Void Unsafe",
          "module": "Data.Void.Unsafe",
          "name": "unsafeVacuousM",
          "normalized": "a Void-\u003ea b",
          "package": "void",
          "partial": "Vacuous",
          "signature": "m Void-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/void/docs/Data-Void-Unsafe.html#v:unsafeVacuousM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Void",
          "name": "Void",
          "package": "void",
          "source": "src/Data-Void.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Void",
          "module": "Data.Void",
          "name": "Void",
          "package": "void",
          "partial": "Void",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/void/docs/Data-Void.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA logically uninhabited data type.\n\u003c/p\u003e",
          "module": "Data.Void",
          "name": "Void",
          "package": "void",
          "source": "src/Data-Void.html#Void",
          "type": "data"
        },
        "index": {
          "description": "logically uninhabited data type",
          "hierarchy": "Data Void",
          "module": "Data.Void",
          "name": "Void",
          "package": "void",
          "partial": "Void",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/void/docs/Data-Void.html#t:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e values logically don't exist, this witnesses the logical\n reasoning tool of \"ex falso quodlibet\".\n\u003c/p\u003e",
          "module": "Data.Void",
          "name": "absurd",
          "package": "void",
          "signature": "Void -\u003e a",
          "source": "src/Data-Void.html#absurd",
          "type": "function"
        },
        "index": {
          "description": "Since Void values logically don exist this witnesses the logical reasoning tool of ex falso quodlibet",
          "hierarchy": "Data Void",
          "module": "Data.Void",
          "name": "absurd",
          "normalized": "Void-\u003ea",
          "package": "void",
          "signature": "Void-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/void/docs/Data-Void.html#v:absurd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e is uninhabited then any \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e that holds only values of type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e\n is holding no values.\n\u003c/p\u003e",
          "module": "Data.Void",
          "name": "vacuous",
          "package": "void",
          "signature": "f Void -\u003e f a",
          "source": "src/Data-Void.html#vacuous",
          "type": "function"
        },
        "index": {
          "description": "If Void is uninhabited then any Functor that holds only values of type Void is holding no values",
          "hierarchy": "Data Void",
          "module": "Data.Void",
          "name": "vacuous",
          "normalized": "a Void-\u003ea b",
          "package": "void",
          "signature": "f Void-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/void/docs/Data-Void.html#v:vacuous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e is uninhabited then any \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e that holds values of type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e\n is holding no values.\n\u003c/p\u003e",
          "module": "Data.Void",
          "name": "vacuousM",
          "package": "void",
          "signature": "m Void -\u003e m a",
          "source": "src/Data-Void.html#vacuousM",
          "type": "function"
        },
        "index": {
          "description": "If Void is uninhabited then any Monad that holds values of type Void is holding no values",
          "hierarchy": "Data Void",
          "module": "Data.Void",
          "name": "vacuousM",
          "normalized": "a Void-\u003ea b",
          "package": "void",
          "signature": "m Void-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/void/docs/Data-Void.html#v:vacuousM"
      }
    }
  ]
]