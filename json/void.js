[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/void/docs/Data-Void-Unsafe.html#",
      "description": {
        "fct-module": "Data.Void.Unsafe",
        "fct-package": "void",
        "fct-signature": "module",
        "fct-source": "src/Data-Void-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Void Unsafe",
        "module": "Data.Void.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "void",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/void/docs/Data-Void-Unsafe.html#v:unsafeVacuous",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e is uninhabited than any \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e that holds only values of the type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e\n is holding no values.\n\u003c/p\u003e\u003cp\u003eThis is only safe for valid functors that do not perform GADT-like analysis on the argument.\n\u003c/p\u003e",
        "fct-module": "Data.Void.Unsafe",
        "fct-package": "void",
        "fct-signature": "f Void -\u003e f a",
        "fct-source": "src/Data-Void-Unsafe.html#unsafeVacuous",
        "fct-type": "function",
        "title": "unsafeVacuous"
      },
      "index": {
        "description": "If Void is uninhabited than any Functor that holds only values of the type Void is holding no values This is only safe for valid functors that do not perform GADT-like analysis on the argument",
        "hierarchy": "Data Void Unsafe",
        "module": "Data.Void.Unsafe",
        "name": "unsafeVacuous",
        "normalized": "a Void-\u003ea b",
        "package": "void",
        "partial": "Vacuous",
        "signature": "f Void-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/void/docs/Data-Void-Unsafe.html#v:unsafeVacuousM",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e is uninhabited then any \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e that holds values of type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e\n is holding no values.\n\u003c/p\u003e\u003cp\u003eThis is only safe for valid monads that do not perform GADT-like analysis on the argument.\n\u003c/p\u003e",
        "fct-module": "Data.Void.Unsafe",
        "fct-package": "void",
        "fct-signature": "m Void -\u003e m a",
        "fct-source": "src/Data-Void-Unsafe.html#unsafeVacuousM",
        "fct-type": "function",
        "title": "unsafeVacuousM"
      },
      "index": {
        "description": "If Void is uninhabited then any Monad that holds values of type Void is holding no values This is only safe for valid monads that do not perform GADT-like analysis on the argument",
        "hierarchy": "Data Void Unsafe",
        "module": "Data.Void.Unsafe",
        "name": "unsafeVacuousM",
        "normalized": "a Void-\u003ea b",
        "package": "void",
        "partial": "Vacuous",
        "signature": "m Void-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/void/docs/Data-Void.html#",
      "description": {
        "fct-module": "Data.Void",
        "fct-package": "void",
        "fct-signature": "module",
        "fct-source": "src/Data-Void.html",
        "fct-type": "module",
        "title": "Void"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Void",
        "module": "Data.Void",
        "name": "Void",
        "normalized": "",
        "package": "void",
        "partial": "Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/void/docs/Data-Void.html#t:Void",
      "description": {
        "fct-descr": "\u003cp\u003eA logically uninhabited data type.\n\u003c/p\u003e",
        "fct-module": "Data.Void",
        "fct-package": "void",
        "fct-signature": "data",
        "fct-source": "src/Data-Void.html#Void",
        "fct-type": "data",
        "title": "Void"
      },
      "index": {
        "description": "logically uninhabited data type",
        "hierarchy": "Data Void",
        "module": "Data.Void",
        "name": "Void",
        "normalized": "",
        "package": "void",
        "partial": "Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/void/docs/Data-Void.html#v:absurd",
      "description": {
        "fct-descr": "\u003cp\u003eSince \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e values logically don't exist, this witnesses the logical\n reasoning tool of \"ex falso quodlibet\".\n\u003c/p\u003e",
        "fct-module": "Data.Void",
        "fct-package": "void",
        "fct-signature": "Void -\u003e a",
        "fct-source": "src/Data-Void.html#absurd",
        "fct-type": "function",
        "title": "absurd"
      },
      "index": {
        "description": "Since Void values logically don exist this witnesses the logical reasoning tool of ex falso quodlibet",
        "hierarchy": "Data Void",
        "module": "Data.Void",
        "name": "absurd",
        "normalized": "Void-\u003ea",
        "package": "void",
        "partial": "",
        "signature": "Void-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/void/docs/Data-Void.html#v:vacuous",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e is uninhabited then any \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e that holds only values of type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e\n is holding no values.\n\u003c/p\u003e",
        "fct-module": "Data.Void",
        "fct-package": "void",
        "fct-signature": "f Void -\u003e f a",
        "fct-source": "src/Data-Void.html#vacuous",
        "fct-type": "function",
        "title": "vacuous"
      },
      "index": {
        "description": "If Void is uninhabited then any Functor that holds only values of type Void is holding no values",
        "hierarchy": "Data Void",
        "module": "Data.Void",
        "name": "vacuous",
        "normalized": "a Void-\u003ea b",
        "package": "void",
        "partial": "",
        "signature": "f Void-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/void/docs/Data-Void.html#v:vacuousM",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e is uninhabited then any \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e that holds values of type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e\n is holding no values.\n\u003c/p\u003e",
        "fct-module": "Data.Void",
        "fct-package": "void",
        "fct-signature": "m Void -\u003e m a",
        "fct-source": "src/Data-Void.html#vacuousM",
        "fct-type": "function",
        "title": "vacuousM"
      },
      "index": {
        "description": "If Void is uninhabited then any Monad that holds values of type Void is holding no values",
        "hierarchy": "Data Void",
        "module": "Data.Void",
        "name": "vacuousM",
        "normalized": "a Void-\u003ea b",
        "package": "void",
        "partial": "",
        "signature": "m Void-\u003em a"
      }
    }
  }
]