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
        "word": "transformers-supply"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations that require a supply of values.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Applicative values are functions that consume an input\n from a supply to produce a value.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Providing a supply of unique names or other values to\n computations needing them.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e Identical to the underlying implementation (if any) of\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e s a\u003c/code\u003e &#160; or &#160; \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e s f a\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eDifference from \u003ca\u003eControl.Monad.Trans.Supply\u003c/a\u003e:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e defined in this\n module is not, and cannot be an instance of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e. See the \u003ca\u003eApplicative vs\n Monad\u003c/a\u003e section below for an in-depth explanation.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e s a\u003c/code\u003e applicative represents a computation that consumes a\n supply of \u003ccode\u003es\u003c/code\u003e's to produce a value of type \u003ccode\u003ea\u003c/code\u003e. One example use is to\n simplify computations that require the generation of unique names. The\n \u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e applicative can be used to provide a stream of unique names to such\n a computation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Applicative.Supply",
          "name": "Supply",
          "package": "transformers-supply",
          "source": "src/Control-Applicative-Supply.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations that require supply of values Binding strategy Applicative values are functions that consume an input from supply to produce value Useful for Providing supply of unique names or other values to computations needing them Zero and plus Identical to the underlying implementation if any of empty and Example type Supply or SupplyT Difference from Control.Monad.Trans.Supply SupplyT defined in this module is not and cannot be an instance of Monad See the Applicative vs Monad section below for an in-depth explanation The Supply applicative represents computation that consumes supply of to produce value of type One example use is to simplify computations that require the generation of unique names The Supply applicative can be used to provide stream of unique names to such computation",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "Supply",
          "package": "transformers-supply",
          "partial": "Supply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Supply applicative.\n\u003c/p\u003e\u003cp\u003eComputations consume values of type \u003ccode\u003es\u003c/code\u003e from a supply of values.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e ignores the supply of values, while \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e passes the supply to the\n second argument after the first argument is done consuming values.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "Supply",
          "package": "transformers-supply",
          "source": "src/Control-Applicative-Supply.html#Supply",
          "type": "type"
        },
        "index": {
          "description": "The Supply applicative Computations consume values of type from supply of values pure ignores the supply of values while passes the supply to the second argument after the first argument is done consuming values",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "Supply",
          "package": "transformers-supply",
          "partial": "Supply",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#t:Supply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Supply transformer.\n\u003c/p\u003e\u003cp\u003eComposes Supply with an underlying applicative, identical to using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCompose\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e f a\u003c/code\u003e, but this implementation avoids the\n need to explicitly wrap \u003ccode\u003e\u003ca\u003edemand\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e everywhere.\n\u003c/p\u003e\u003cp\u003eThe resulting SupplyT value has an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance if the underlying\n applicative has an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "SupplyT",
          "package": "transformers-supply",
          "source": "src/Control-Applicative-Supply.html#SupplyT",
          "type": "data"
        },
        "index": {
          "description": "The Supply transformer Composes Supply with an underlying applicative identical to using Compose Supply but this implementation avoids the need to explicitly wrap demand in pure everywhere The resulting SupplyT value has an Alternative instance if the underlying applicative has an Alternative instance",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "SupplyT",
          "package": "transformers-supply",
          "partial": "Supply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#t:SupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemand an \u003ccode\u003es\u003c/code\u003e value from the supply.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "demand",
          "package": "transformers-supply",
          "signature": "SupplyT s f s",
          "source": "src/Control-Applicative-Supply.html#demand",
          "type": "function"
        },
        "index": {
          "description": "Demand an value from the supply",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "demand",
          "package": "transformers-supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#v:demand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply a non-applicative construction function with an \u003ccode\u003es\u003c/code\u003e value from\n the supply and automatically lift its result into the \u003ccode\u003ef\u003c/code\u003e applicative that\n \u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e wraps.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "provide",
          "package": "transformers-supply",
          "signature": "(s -\u003e a) -\u003e SupplyT s f a",
          "source": "src/Control-Applicative-Supply.html#provide",
          "type": "function"
        },
        "index": {
          "description": "Supply non-applicative construction function with an value from the supply and automatically lift its result into the applicative that SupplyT wraps",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "provide",
          "normalized": "(a-\u003eb)-\u003eSupplyT a c b",
          "package": "transformers-supply",
          "signature": "(s-\u003ea)-\u003eSupplyT s f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#v:provide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a supply consuming computation from a list until the computation\n finishes or the list runs out. If the list does not contain sufficient\n elements, \u003ccode\u003erunListSupply\u003c/code\u003e returns uncompleted computation.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "runListSupply",
          "package": "transformers-supply",
          "signature": "Supply s a -\u003e [s] -\u003e Either (Supply s a) a",
          "source": "src/Control-Applicative-Supply.html#runListSupply",
          "type": "function"
        },
        "index": {
          "description": "Feed supply consuming computation from list until the computation finishes or the list runs out If the list does not contain sufficient elements runListSupply returns uncompleted computation",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "runListSupply",
          "normalized": "Supply a b-\u003e[a]-\u003eEither(Supply a b)b",
          "package": "transformers-supply",
          "partial": "List Supply",
          "signature": "Supply s a-\u003e[s]-\u003eEither(Supply s a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#v:runListSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a supply consuming computation from a list until the computation\n finishes or the list runs out. If the list does not contain sufficient\n elements, \u003ccode\u003erunListSupplyT\u003c/code\u003e returns uncompleted computation.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "runListSupplyT",
          "package": "transformers-supply",
          "signature": "SupplyT s f a -\u003e [s] -\u003e Either (SupplyT s f a) (f a)",
          "source": "src/Control-Applicative-Supply.html#runListSupplyT",
          "type": "function"
        },
        "index": {
          "description": "Feed supply consuming computation from list until the computation finishes or the list runs out If the list does not contain sufficient elements runListSupplyT returns uncompleted computation",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "runListSupplyT",
          "normalized": "SupplyT a b c-\u003e[a]-\u003eEither(SupplyT a b c)(b c)",
          "package": "transformers-supply",
          "partial": "List Supply",
          "signature": "SupplyT s f a-\u003e[s]-\u003eEither(SupplyT s f a)(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#v:runListSupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a supply consuming computation from a monadic action until the\n computation finishes.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "runMonadSupply",
          "package": "transformers-supply",
          "signature": "Supply s a -\u003e m s -\u003e m a",
          "source": "src/Control-Applicative-Supply.html#runMonadSupply",
          "type": "function"
        },
        "index": {
          "description": "Feed supply consuming computation from monadic action until the computation finishes",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "runMonadSupply",
          "normalized": "Supply a b-\u003ec a-\u003ec b",
          "package": "transformers-supply",
          "partial": "Monad Supply",
          "signature": "Supply s a-\u003em s-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#v:runMonadSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a supply consuming computation from a monadic action until the\n computation finishes.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "runMonadSupplyT",
          "package": "transformers-supply",
          "signature": "SupplyT s f a -\u003e m s -\u003e m (f a)",
          "source": "src/Control-Applicative-Supply.html#runMonadSupplyT",
          "type": "function"
        },
        "index": {
          "description": "Feed supply consuming computation from monadic action until the computation finishes",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "runMonadSupplyT",
          "normalized": "SupplyT a b c-\u003ed a-\u003ed(b c)",
          "package": "transformers-supply",
          "partial": "Monad Supply",
          "signature": "SupplyT s f a-\u003em s-\u003em(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#v:runMonadSupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a supply consuming computation, using a generation function and\n initial value to compute the values consumed by the \u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "runSupply",
          "package": "transformers-supply",
          "signature": "Supply s a -\u003e (s -\u003e s) -\u003e s -\u003e a",
          "source": "src/Control-Applicative-Supply.html#runSupply",
          "type": "function"
        },
        "index": {
          "description": "Run supply consuming computation using generation function and initial value to compute the values consumed by the Supply computation",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "runSupply",
          "normalized": "Supply a b-\u003e(a-\u003ea)-\u003ea-\u003eb",
          "package": "transformers-supply",
          "partial": "Supply",
          "signature": "Supply s a-\u003e(s-\u003es)-\u003es-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#v:runSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a supply consuming computation, using a generation function and\n initial value to compute the values consumed by the \u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "runSupplyT",
          "package": "transformers-supply",
          "signature": "SupplyT s f a -\u003e (s -\u003e s) -\u003e s -\u003e f a",
          "source": "src/Control-Applicative-Supply.html#runSupplyT",
          "type": "function"
        },
        "index": {
          "description": "Run supply consuming computation using generation function and initial value to compute the values consumed by the SupplyT computation",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "runSupplyT",
          "normalized": "SupplyT a b c-\u003e(a-\u003ea)-\u003ea-\u003eb c",
          "package": "transformers-supply",
          "partial": "Supply",
          "signature": "SupplyT s f a-\u003e(s-\u003es)-\u003es-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#v:runSupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply a construction function with an \u003ccode\u003es\u003c/code\u003e value from the supply.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "supply",
          "package": "transformers-supply",
          "signature": "(s -\u003e f a) -\u003e SupplyT s f a",
          "source": "src/Control-Applicative-Supply.html#supply",
          "type": "function"
        },
        "index": {
          "description": "Supply construction function with an value from the supply",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "supply",
          "normalized": "(a-\u003eb c)-\u003eSupplyT a b c",
          "package": "transformers-supply",
          "signature": "(s-\u003ef a)-\u003eSupplyT s f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#v:supply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the type of values consumed by a \u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "withSupply",
          "package": "transformers-supply",
          "signature": "(s' -\u003e s) -\u003e Supply s a -\u003e Supply s' a",
          "source": "src/Control-Applicative-Supply.html#withSupply",
          "type": "function"
        },
        "index": {
          "description": "Change the type of values consumed by Supply computation",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "withSupply",
          "normalized": "(a-\u003eb)-\u003eSupply b c-\u003eSupply a c",
          "package": "transformers-supply",
          "partial": "Supply",
          "signature": "(s'-\u003es)-\u003eSupply s a-\u003eSupply s' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#v:withSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the type of values consumed by a \u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "Control.Applicative.Supply",
          "name": "withSupplyT",
          "package": "transformers-supply",
          "signature": "(s' -\u003e s) -\u003e SupplyT s f a -\u003e SupplyT s' f a",
          "source": "src/Control-Applicative-Supply.html#withSupplyT",
          "type": "function"
        },
        "index": {
          "description": "Change the type of values consumed by SupplyT computation",
          "hierarchy": "Control Applicative Supply",
          "module": "Control.Applicative.Supply",
          "name": "withSupplyT",
          "normalized": "(a-\u003eb)-\u003eSupplyT b c d-\u003eSupplyT a c d",
          "package": "transformers-supply",
          "partial": "Supply",
          "signature": "(s'-\u003es)-\u003eSupplyT s f a-\u003eSupplyT s' f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Applicative-Supply.html#v:withSupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSee \u003ca\u003eControl.Monad.Supply\u003c/a\u003e for documentation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Supply.Class",
          "name": "Class",
          "package": "transformers-supply",
          "source": "src/Control-Monad-Supply-Class.html",
          "type": "module"
        },
        "index": {
          "description": "See Control.Monad.Supply for documentation",
          "hierarchy": "Control Monad Supply Class",
          "module": "Control.Monad.Supply.Class",
          "name": "Class",
          "package": "transformers-supply",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadSupply\u003c/a\u003e\u003c/code\u003e class provides access to the functions needed to\n construct supply-consuming computations in a monad transformer stack.\n\u003c/p\u003e",
          "module": "Control.Monad.Supply.Class",
          "name": "MonadSupply",
          "package": "transformers-supply",
          "source": "src/Control-Monad-Supply-Class.html#MonadSupply",
          "type": "class"
        },
        "index": {
          "description": "The MonadSupply class provides access to the functions needed to construct supply-consuming computations in monad transformer stack",
          "hierarchy": "Control Monad Supply Class",
          "module": "Control.Monad.Supply.Class",
          "name": "MonadSupply",
          "package": "transformers-supply",
          "partial": "Monad Supply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply-Class.html#t:MonadSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemand an \u003ccode\u003es\u003c/code\u003e value from the supply.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Supply.Class\",\"Control.Monad.Supply\"]",
          "name": "demand",
          "package": "transformers-supply",
          "signature": "m s",
          "source": "src/Control-Monad-Supply-Class.html#demand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply-Class.html#v:demand\",\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:demand\"]"
        },
        "index": {
          "description": "Demand an value from the supply",
          "hierarchy": "Control Monad Supply Class",
          "module": "Control.Monad.Supply.Class",
          "name": "demand",
          "package": "transformers-supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply-Class.html#v:demand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a non-monadic construction function with an \u003ccode\u003es\u003c/code\u003e value from the\n supply and automatically lift its result into the \u003ccode\u003ef\u003c/code\u003e monad that\n \u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e wraps.\n\u003c/p\u003e",
          "module": "Control.Monad.Supply.Class",
          "name": "provide",
          "package": "transformers-supply",
          "signature": "(s -\u003e a) -\u003e m a",
          "source": "src/Control-Monad-Supply-Class.html#provide",
          "type": "method"
        },
        "index": {
          "description": "Provide non-monadic construction function with an value from the supply and automatically lift its result into the monad that SupplyT wraps",
          "hierarchy": "Control Monad Supply Class",
          "module": "Control.Monad.Supply.Class",
          "name": "provide",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "transformers-supply",
          "signature": "(s-\u003ea)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply-Class.html#v:provide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply a construction function with an \u003ccode\u003es\u003c/code\u003e value from the supply,\n the \u003ccode\u003ef\u003c/code\u003e in the function's type refers to the monad wrapped by \u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Supply.Class",
          "name": "supply",
          "package": "transformers-supply",
          "signature": "(s -\u003e f a) -\u003e m a",
          "source": "src/Control-Monad-Supply-Class.html#supply",
          "type": "method"
        },
        "index": {
          "description": "Supply construction function with an value from the supply the in the function type refers to the monad wrapped by SupplyT",
          "hierarchy": "Control Monad Supply Class",
          "module": "Control.Monad.Supply.Class",
          "name": "supply",
          "normalized": "(a-\u003eb c)-\u003ed c",
          "package": "transformers-supply",
          "signature": "(s-\u003ef a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply-Class.html#v:supply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations that require a supply of values.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Applicative values are functions that consume an input\n from a supply to produce a value.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Providing a supply of unique names or other values to\n computations needing them.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e Identical to the underlying implementations (if any) of\n \u003ccode\u003eempty\u003c/code\u003e, \u003ccode\u003e\u003c|\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e s a\u003c/code\u003e monad represents a computation that consumes a supply of\n \u003ccode\u003es\u003c/code\u003e's to produce a value of type \u003ccode\u003ea\u003c/code\u003e. One example use is to simplify\n computations that require the generation of unique names. The \u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e monad\n can be used to provide a stream of unique names to such a computation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Supply",
          "name": "Supply",
          "package": "transformers-supply",
          "source": "src/Control-Monad-Supply.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations that require supply of values Binding strategy Applicative values are functions that consume an input from supply to produce value Useful for Providing supply of unique names or other values to computations needing them Zero and plus Identical to the underlying implementations if any of empty mzero and mplus The Supply monad represents computation that consumes supply of to produce value of type One example use is to simplify computations that require the generation of unique names The Supply monad can be used to provide stream of unique names to such computation",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "Supply",
          "package": "transformers-supply",
          "partial": "Supply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadSupply\u003c/a\u003e\u003c/code\u003e class provides access to the functions needed to\n construct supply-consuming computations in a monad transformer stack.\n\u003c/p\u003e",
          "module": "Control.Monad.Supply",
          "name": "MonadSupply",
          "package": "transformers-supply",
          "source": "src/Control-Monad-Supply-Class.html#MonadSupply",
          "type": "class"
        },
        "index": {
          "description": "The MonadSupply class provides access to the functions needed to construct supply-consuming computations in monad transformer stack",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "MonadSupply",
          "package": "transformers-supply",
          "partial": "Monad Supply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#t:MonadSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Supply monad.\n\u003c/p\u003e\u003cp\u003eComputations consume values of type \u003ccode\u003es\u003c/code\u003e from a supply of values.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e ignores the supply of values, while \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e passes the supply to the\n second argument after the first argument is done consuming values.\n\u003c/p\u003e",
          "module": "Control.Monad.Supply",
          "name": "Supply",
          "package": "transformers-supply",
          "source": "src/Control-Monad-Trans-Supply.html#Supply",
          "type": "type"
        },
        "index": {
          "description": "The Supply monad Computations consume values of type from supply of values return ignores the supply of values while passes the supply to the second argument after the first argument is done consuming values",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "Supply",
          "package": "transformers-supply",
          "partial": "Supply",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#t:Supply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Supply transformer.\n\u003c/p\u003e\u003cp\u003eComposes Supply with an underlying monad, allowing it to be used monad in\n transformer stacks.\n\u003c/p\u003e\u003cp\u003eThe resulting SupplyT value has \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instances if\n the underlying monad has such these instances.\n\u003c/p\u003e",
          "module": "Control.Monad.Supply",
          "name": "SupplyT",
          "package": "transformers-supply",
          "source": "src/Control-Monad-Trans-Supply.html#SupplyT",
          "type": "data"
        },
        "index": {
          "description": "The Supply transformer Composes Supply with an underlying monad allowing it to be used monad in transformer stacks The resulting SupplyT value has Alternative and MonadPlus instances if the underlying monad has such these instances",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "SupplyT",
          "package": "transformers-supply",
          "partial": "Supply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#t:SupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a non-monadic construction function with an \u003ccode\u003es\u003c/code\u003e value from the\n supply and automatically lift its result into the \u003ccode\u003ef\u003c/code\u003e monad that\n \u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e wraps.\n\u003c/p\u003e",
          "module": "Control.Monad.Supply",
          "name": "provide",
          "package": "transformers-supply",
          "signature": "(s -\u003e a) -\u003e m a",
          "source": "src/Control-Monad-Supply-Class.html#provide",
          "type": "method"
        },
        "index": {
          "description": "Provide non-monadic construction function with an value from the supply and automatically lift its result into the monad that SupplyT wraps",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "provide",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "transformers-supply",
          "signature": "(s-\u003ea)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:provide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a supply consuming computation from a list until the computation\n finishes or the list runs out. If the list does not contain sufficient\n elements, \u003ccode\u003erunListSupply\u003c/code\u003e returns uncompleted computation.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Supply\",\"Control.Monad.Trans.Supply\"]",
          "name": "runListSupply",
          "package": "transformers-supply",
          "signature": "Supply s a -\u003e [s] -\u003e Either (Supply s a) a",
          "source": "src/Control-Monad-Trans-Supply.html#runListSupply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:runListSupply\",\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#v:runListSupply\"]"
        },
        "index": {
          "description": "Feed supply consuming computation from list until the computation finishes or the list runs out If the list does not contain sufficient elements runListSupply returns uncompleted computation",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "runListSupply",
          "normalized": "Supply a b-\u003e[a]-\u003eEither(Supply a b)b",
          "package": "transformers-supply",
          "partial": "List Supply",
          "signature": "Supply s a-\u003e[s]-\u003eEither(Supply s a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:runListSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a supply consuming computation from a list until the computation\n finishes or the list runs out. If the list does not contain sufficient\n elements, \u003ccode\u003erunListSupplyT\u003c/code\u003e returns uncompleted computation.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Supply\",\"Control.Monad.Trans.Supply\"]",
          "name": "runListSupplyT",
          "package": "transformers-supply",
          "signature": "SupplyT s m a -\u003e [s] -\u003e m (Either (SupplyT s m a) a)",
          "source": "src/Control-Monad-Trans-Supply.html#runListSupplyT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:runListSupplyT\",\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#v:runListSupplyT\"]"
        },
        "index": {
          "description": "Feed supply consuming computation from list until the computation finishes or the list runs out If the list does not contain sufficient elements runListSupplyT returns uncompleted computation",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "runListSupplyT",
          "normalized": "SupplyT a b c-\u003e[a]-\u003eb(Either(SupplyT a b c)c)",
          "package": "transformers-supply",
          "partial": "List Supply",
          "signature": "SupplyT s m a-\u003e[s]-\u003em(Either(SupplyT s m a)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:runListSupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a supply consuming computation from a monadic action until the\n computation finishes.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Supply\",\"Control.Monad.Trans.Supply\"]",
          "name": "runMonadSupply",
          "package": "transformers-supply",
          "signature": "Supply s a -\u003e m s -\u003e m a",
          "source": "src/Control-Monad-Trans-Supply.html#runMonadSupply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:runMonadSupply\",\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#v:runMonadSupply\"]"
        },
        "index": {
          "description": "Feed supply consuming computation from monadic action until the computation finishes",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "runMonadSupply",
          "normalized": "Supply a b-\u003ec a-\u003ec b",
          "package": "transformers-supply",
          "partial": "Monad Supply",
          "signature": "Supply s a-\u003em s-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:runMonadSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a supply consuming computation from a monadic action until the\n computation finishes.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Supply\",\"Control.Monad.Trans.Supply\"]",
          "name": "runMonadSupplyT",
          "package": "transformers-supply",
          "signature": "SupplyT s m a -\u003e m s -\u003e m a",
          "source": "src/Control-Monad-Trans-Supply.html#runMonadSupplyT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:runMonadSupplyT\",\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#v:runMonadSupplyT\"]"
        },
        "index": {
          "description": "Feed supply consuming computation from monadic action until the computation finishes",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "runMonadSupplyT",
          "normalized": "SupplyT a b c-\u003eb a-\u003eb c",
          "package": "transformers-supply",
          "partial": "Monad Supply",
          "signature": "SupplyT s m a-\u003em s-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:runMonadSupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a supply consuming computation, using a generation function and\n initial value to compute the values consumed by the \u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Supply\",\"Control.Monad.Trans.Supply\"]",
          "name": "runSupply",
          "package": "transformers-supply",
          "signature": "Supply s a -\u003e (s -\u003e s) -\u003e s -\u003e a",
          "source": "src/Control-Monad-Trans-Supply.html#runSupply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:runSupply\",\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#v:runSupply\"]"
        },
        "index": {
          "description": "Run supply consuming computation using generation function and initial value to compute the values consumed by the Supply computation",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "runSupply",
          "normalized": "Supply a b-\u003e(a-\u003ea)-\u003ea-\u003eb",
          "package": "transformers-supply",
          "partial": "Supply",
          "signature": "Supply s a-\u003e(s-\u003es)-\u003es-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:runSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a supply consuming computation, using a generation function and\n initial value to compute the values consumed by the \u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Supply\",\"Control.Monad.Trans.Supply\"]",
          "name": "runSupplyT",
          "package": "transformers-supply",
          "signature": "SupplyT s m a -\u003e (s -\u003e s) -\u003e s -\u003e m a",
          "source": "src/Control-Monad-Trans-Supply.html#runSupplyT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:runSupplyT\",\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#v:runSupplyT\"]"
        },
        "index": {
          "description": "Run supply consuming computation using generation function and initial value to compute the values consumed by the SupplyT computation",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "runSupplyT",
          "normalized": "SupplyT a b c-\u003e(a-\u003ea)-\u003ea-\u003eb c",
          "package": "transformers-supply",
          "partial": "Supply",
          "signature": "SupplyT s m a-\u003e(s-\u003es)-\u003es-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:runSupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply a construction function with an \u003ccode\u003es\u003c/code\u003e value from the supply,\n the \u003ccode\u003ef\u003c/code\u003e in the function's type refers to the monad wrapped by \u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Supply",
          "name": "supply",
          "package": "transformers-supply",
          "signature": "(s -\u003e f a) -\u003e m a",
          "source": "src/Control-Monad-Supply-Class.html#supply",
          "type": "method"
        },
        "index": {
          "description": "Supply construction function with an value from the supply the in the function type refers to the monad wrapped by SupplyT",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "supply",
          "normalized": "(a-\u003eb c)-\u003ed c",
          "package": "transformers-supply",
          "signature": "(s-\u003ef a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:supply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the type of values consumed by a \u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Supply\",\"Control.Monad.Trans.Supply\"]",
          "name": "withSupply",
          "package": "transformers-supply",
          "signature": "(s' -\u003e s) -\u003e Supply s a -\u003e Supply s' a",
          "source": "src/Control-Monad-Trans-Supply.html#withSupply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:withSupply\",\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#v:withSupply\"]"
        },
        "index": {
          "description": "Change the type of values consumed by Supply computation",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "withSupply",
          "normalized": "(a-\u003eb)-\u003eSupply b c-\u003eSupply a c",
          "package": "transformers-supply",
          "partial": "Supply",
          "signature": "(s'-\u003es)-\u003eSupply s a-\u003eSupply s' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:withSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the type of values consumed by a \u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Supply\",\"Control.Monad.Trans.Supply\"]",
          "name": "withSupplyT",
          "package": "transformers-supply",
          "signature": "(s' -\u003e s) -\u003e SupplyT s f a -\u003e SupplyT s' f a",
          "source": "src/Control-Monad-Trans-Supply.html#withSupplyT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:withSupplyT\",\"http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#v:withSupplyT\"]"
        },
        "index": {
          "description": "Change the type of values consumed by SupplyT computation",
          "hierarchy": "Control Monad Supply",
          "module": "Control.Monad.Supply",
          "name": "withSupplyT",
          "normalized": "(a-\u003eb)-\u003eSupplyT b c d-\u003eSupplyT a c d",
          "package": "transformers-supply",
          "partial": "Supply",
          "signature": "(s'-\u003es)-\u003eSupplyT s f a-\u003eSupplyT s' f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Supply.html#v:withSupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations that require a supply of values.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Applicative values are functions that consume an input\n from a supply to produce a value.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Providing a supply of unique names or other values to\n computations needing them.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e Identical to the underlying implementations (if any) of\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e s a\u003c/code\u003e &#160; or &#160; \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e s f a\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eDifference from \u003ca\u003eControl.Applicative.Supply\u003c/a\u003e:\u003c/dt\u003e\u003cdd\u003e The \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance\n of \u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e defined in this module requires that the wrapped type is an\n instance of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e. See the \u003ca\u003eApplicative vs Monad\u003c/a\u003e section below for an\n in-depth explanation.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e s a\u003c/code\u003e monad represents a computation that consumes a supply of\n \u003ccode\u003es\u003c/code\u003e's to produce a value of type \u003ccode\u003ea\u003c/code\u003e. One example use is to simplify\n computations that require the generation of unique names. The \u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e monad\n can be used to provide a stream of unique names to such a computation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Supply",
          "name": "Supply",
          "package": "transformers-supply",
          "source": "src/Control-Monad-Trans-Supply.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations that require supply of values Binding strategy Applicative values are functions that consume an input from supply to produce value Useful for Providing supply of unique names or other values to computations needing them Zero and plus Identical to the underlying implementations if any of empty mzero and mplus Example type Supply or SupplyT Difference from Control.Applicative.Supply The Applicative instance of SupplyT defined in this module requires that the wrapped type is an instance of Monad See the Applicative vs Monad section below for an in-depth explanation The Supply monad represents computation that consumes supply of to produce value of type One example use is to simplify computations that require the generation of unique names The Supply monad can be used to provide stream of unique names to such computation",
          "hierarchy": "Control Monad Trans Supply",
          "module": "Control.Monad.Trans.Supply",
          "name": "Supply",
          "package": "transformers-supply",
          "partial": "Supply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Supply monad.\n\u003c/p\u003e\u003cp\u003eComputations consume values of type \u003ccode\u003es\u003c/code\u003e from a supply of values.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e ignores the supply of values, while \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e passes the supply to the\n second argument after the first argument is done consuming values.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Supply",
          "name": "Supply",
          "package": "transformers-supply",
          "source": "src/Control-Monad-Trans-Supply.html#Supply",
          "type": "type"
        },
        "index": {
          "description": "The Supply monad Computations consume values of type from supply of values return ignores the supply of values while passes the supply to the second argument after the first argument is done consuming values",
          "hierarchy": "Control Monad Trans Supply",
          "module": "Control.Monad.Trans.Supply",
          "name": "Supply",
          "package": "transformers-supply",
          "partial": "Supply",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#t:Supply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Supply transformer.\n\u003c/p\u003e\u003cp\u003eComposes Supply with an underlying monad, allowing it to be used monad in\n transformer stacks.\n\u003c/p\u003e\u003cp\u003eThe resulting SupplyT value has \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instances if\n the underlying monad has such these instances.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Supply",
          "name": "SupplyT",
          "package": "transformers-supply",
          "source": "src/Control-Monad-Trans-Supply.html#SupplyT",
          "type": "data"
        },
        "index": {
          "description": "The Supply transformer Composes Supply with an underlying monad allowing it to be used monad in transformer stacks The resulting SupplyT value has Alternative and MonadPlus instances if the underlying monad has such these instances",
          "hierarchy": "Control Monad Trans Supply",
          "module": "Control.Monad.Trans.Supply",
          "name": "SupplyT",
          "package": "transformers-supply",
          "partial": "Supply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#t:SupplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemand an \u003ccode\u003es\u003c/code\u003e value from the supply.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Supply",
          "name": "demand",
          "package": "transformers-supply",
          "signature": "SupplyT s m s",
          "source": "src/Control-Monad-Trans-Supply.html#demand",
          "type": "function"
        },
        "index": {
          "description": "Demand an value from the supply",
          "hierarchy": "Control Monad Trans Supply",
          "module": "Control.Monad.Trans.Supply",
          "name": "demand",
          "package": "transformers-supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#v:demand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply a non-monadic construction function with an \u003ccode\u003es\u003c/code\u003e value from the\n supply and automatically lift its result into the \u003ccode\u003em\u003c/code\u003e monad that \u003ccode\u003e\u003ca\u003eSupplyT\u003c/a\u003e\u003c/code\u003e\n wraps.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Supply",
          "name": "provide",
          "package": "transformers-supply",
          "signature": "(s -\u003e a) -\u003e SupplyT s m a",
          "source": "src/Control-Monad-Trans-Supply.html#provide",
          "type": "function"
        },
        "index": {
          "description": "Supply non-monadic construction function with an value from the supply and automatically lift its result into the monad that SupplyT wraps",
          "hierarchy": "Control Monad Trans Supply",
          "module": "Control.Monad.Trans.Supply",
          "name": "provide",
          "normalized": "(a-\u003eb)-\u003eSupplyT a c b",
          "package": "transformers-supply",
          "signature": "(s-\u003ea)-\u003eSupplyT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#v:provide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply a construction function with an \u003ccode\u003es\u003c/code\u003e value from the supply.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Supply",
          "name": "supply",
          "package": "transformers-supply",
          "signature": "(s -\u003e m a) -\u003e SupplyT s m a",
          "source": "src/Control-Monad-Trans-Supply.html#supply",
          "type": "function"
        },
        "index": {
          "description": "Supply construction function with an value from the supply",
          "hierarchy": "Control Monad Trans Supply",
          "module": "Control.Monad.Trans.Supply",
          "name": "supply",
          "normalized": "(a-\u003eb c)-\u003eSupplyT a b c",
          "package": "transformers-supply",
          "signature": "(s-\u003em a)-\u003eSupplyT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/transformers-supply/docs/Control-Monad-Trans-Supply.html#v:supply"
      }
    }
  ]
]