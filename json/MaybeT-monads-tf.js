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
        "word": "MaybeT-monads-tf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e monad.  See\n\u003ca\u003ehttp://www.haskell.org/haskellwiki/New_monads/MaybeT\u003c/a\u003e for more widely-used\nversion.  Our \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance and our implementation of \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e are\nborrowed from there.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which may fail or return nothing.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Failure returns the value \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, bypassing any\nbound functions which follow.  Success returns a value wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Building computations from steps which may fail.  No error\ninformation is returned.  (If error information is required, see\n\u003ccode\u003eControl.Monad.Error\u003c/code\u003e.)\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Control.Monad.Maybe",
          "name": "Maybe",
          "package": "MaybeT-monads-tf",
          "source": "src/Control-Monad-Maybe.html",
          "type": "module"
        },
        "index": {
          "description": "The MaybeT monad See http www.haskell.org haskellwiki New monads MaybeT for more widely-used version Our Functor instance and our implementation of are borrowed from there Computation type Computations which may fail or return nothing Binding strategy Failure returns the value Nothing bypassing any bound functions which follow Success returns value wrapped in Just Useful for Building computations from steps which may fail No error information is returned If error information is required see Control.Monad.Error",
          "hierarchy": "Control Monad Maybe",
          "module": "Control.Monad.Maybe",
          "name": "Maybe",
          "package": "MaybeT-monads-tf",
          "partial": "Maybe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MaybeT-monads-tf/docs/Control-Monad-Maybe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parameterizable maybe monad, obtained by composing an arbitrary\n monad with the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eComputations are actions that may produce a value or fail.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function yields a successful computation, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n sequences two subcomputations, failing on the first error.\n\u003c/p\u003e",
          "module": "Control.Monad.Maybe",
          "name": "MaybeT",
          "package": "MaybeT-monads-tf",
          "type": "newtype"
        },
        "index": {
          "description": "The parameterizable maybe monad obtained by composing an arbitrary monad with the Maybe monad Computations are actions that may produce value or fail The return function yields successful computation while sequences two subcomputations failing on the first error",
          "hierarchy": "Control Monad Maybe",
          "module": "Control.Monad.Maybe",
          "name": "MaybeT",
          "package": "MaybeT-monads-tf",
          "partial": "Maybe",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MaybeT-monads-tf/docs/Control-Monad-Maybe.html#t:MaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Maybe",
          "name": "MaybeT",
          "package": "MaybeT-monads-tf",
          "signature": "MaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Maybe",
          "module": "Control.Monad.Maybe",
          "name": "MaybeT",
          "package": "MaybeT-monads-tf",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MaybeT-monads-tf/docs/Control-Monad-Maybe.html#v:MaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Maybe",
          "name": "runMaybeT",
          "package": "MaybeT-monads-tf",
          "signature": "m (Maybe a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Maybe",
          "module": "Control.Monad.Maybe",
          "name": "runMaybeT",
          "package": "MaybeT-monads-tf",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MaybeT-monads-tf/docs/Control-Monad-Maybe.html#v:runMaybeT"
      }
    }
  ]
]