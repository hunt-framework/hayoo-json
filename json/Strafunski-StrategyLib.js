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
        "word": "Strafunski-StrategyLib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module introduces the MaybeT monad transformer.\n It is basically a simplification of the ErrorT monad transformer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Maybe",
          "name": "Maybe",
          "package": "Strafunski-StrategyLib",
          "source": "src/Control-Monad-Maybe.html",
          "type": "module"
        },
        "index": {
          "description": "This module introduces the MaybeT monad transformer It is basically simplification of the ErrorT monad transformer",
          "hierarchy": "Control Monad Maybe",
          "module": "Control.Monad.Maybe",
          "name": "Maybe",
          "package": "Strafunski-StrategyLib",
          "partial": "Maybe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Maybe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad transformer \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Maybe",
          "name": "MaybeT",
          "package": "Strafunski-StrategyLib",
          "source": "src/Control-Monad-Maybe.html#MaybeT",
          "type": "newtype"
        },
        "index": {
          "description": "The monad transformer MaybeT",
          "hierarchy": "Control Monad Maybe",
          "module": "Control.Monad.Maybe",
          "name": "MaybeT",
          "package": "Strafunski-StrategyLib",
          "partial": "Maybe",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Maybe.html#t:MaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Maybe",
          "name": "MaybeT",
          "package": "Strafunski-StrategyLib",
          "signature": "MaybeT",
          "source": "src/Control-Monad-Maybe.html#MaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Maybe",
          "module": "Control.Monad.Maybe",
          "name": "MaybeT",
          "package": "Strafunski-StrategyLib",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Maybe.html#v:MaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Maybe",
          "name": "runMaybeT",
          "package": "Strafunski-StrategyLib",
          "signature": "m (Maybe a)",
          "source": "src/Control-Monad-Maybe.html#MaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Maybe",
          "module": "Control.Monad.Maybe",
          "name": "runMaybeT",
          "package": "Strafunski-StrategyLib",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Maybe.html#v:runMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module \n provides non-strategic functionality for running monads and unlifting\n monad transformers. In a sense, this is dual to the \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n functionality of the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e classes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Run",
          "name": "Run",
          "package": "Strafunski-StrategyLib",
          "source": "src/Control-Monad-Run.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module provides non-strategic functionality for running monads and unlifting monad transformers In sense this is dual to the return and lift functionality of the Monad and MonadTrans classes",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "Run",
          "package": "Strafunski-StrategyLib",
          "partial": "Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algebra for the error effect of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "ErrorAlg",
          "package": "Strafunski-StrategyLib",
          "source": "src/Control-Monad-Run.html#ErrorAlg",
          "type": "data"
        },
        "index": {
          "description": "The algebra for the error effect of Either and ErrorT",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "ErrorAlg",
          "package": "Strafunski-StrategyLib",
          "partial": "Error Alg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#t:ErrorAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algebra for the non-determinacy effect of '[]' and \u003ccode\u003e\u003ca\u003eListT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "ListAlg",
          "package": "Strafunski-StrategyLib",
          "source": "src/Control-Monad-Run.html#ListAlg",
          "type": "data"
        },
        "index": {
          "description": "The algebra for the non-determinacy effect of and ListT",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "ListAlg",
          "package": "Strafunski-StrategyLib",
          "partial": "List Alg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#t:ListAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algebra for the partiality effect of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "MaybeAlg",
          "package": "Strafunski-StrategyLib",
          "source": "src/Control-Monad-Run.html#MaybeAlg",
          "type": "data"
        },
        "index": {
          "description": "The algebra for the partiality effect of Maybe and MaybeT",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "MaybeAlg",
          "package": "Strafunski-StrategyLib",
          "partial": "Maybe Alg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#t:MaybeAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monads for which a \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e function is defined that\n   executes the computation of the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "MonadRun",
          "package": "Strafunski-StrategyLib",
          "source": "src/Control-Monad-Run.html#MonadRun",
          "type": "class"
        },
        "index": {
          "description": "The class of monads for which run function is defined that executes the computation of the monad",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "MonadRun",
          "package": "Strafunski-StrategyLib",
          "partial": "Monad Run",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#t:MonadRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust as a base monad can be run to remove the monad, so can a transformed\n   monad be unlifted to remove the transformer and obtain the original monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "MonadUnTrans",
          "package": "Strafunski-StrategyLib",
          "source": "src/Control-Monad-Run.html#MonadUnTrans",
          "type": "class"
        },
        "index": {
          "description": "Just as base monad can be run to remove the monad so can transformed monad be unlifted to remove the transformer and obtain the original monad",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "MonadUnTrans",
          "package": "Strafunski-StrategyLib",
          "partial": "Monad Un Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#t:MonadUnTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe algebra for the state effect of \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "StateAlg",
          "package": "Strafunski-StrategyLib",
          "source": "src/Control-Monad-Run.html#StateAlg",
          "type": "data"
        },
        "index": {
          "description": "The algebra for the state effect of State and StateT",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "StateAlg",
          "package": "Strafunski-StrategyLib",
          "partial": "State Alg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#t:StateAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "ErrorAlg",
          "package": "Strafunski-StrategyLib",
          "signature": "ErrorAlg",
          "source": "src/Control-Monad-Run.html#ErrorAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "ErrorAlg",
          "package": "Strafunski-StrategyLib",
          "partial": "Error Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:ErrorAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "ListAlg",
          "package": "Strafunski-StrategyLib",
          "signature": "ListAlg",
          "source": "src/Control-Monad-Run.html#ListAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "ListAlg",
          "package": "Strafunski-StrategyLib",
          "partial": "List Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:ListAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "MaybeAlg",
          "package": "Strafunski-StrategyLib",
          "signature": "MaybeAlg",
          "source": "src/Control-Monad-Run.html#MaybeAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "MaybeAlg",
          "package": "Strafunski-StrategyLib",
          "partial": "Maybe Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:MaybeAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "StateAlg",
          "package": "Strafunski-StrategyLib",
          "signature": "StateAlg",
          "source": "src/Control-Monad-Run.html#StateAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "StateAlg",
          "package": "Strafunski-StrategyLib",
          "partial": "State Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:StateAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "cons",
          "package": "Strafunski-StrategyLib",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Control-Monad-Run.html#ListAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eb",
          "package": "Strafunski-StrategyLib",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einitial state\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "first",
          "package": "Strafunski-StrategyLib",
          "signature": "s",
          "source": "src/Control-Monad-Run.html#StateAlg",
          "type": "function"
        },
        "index": {
          "description": "initial state",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "first",
          "package": "Strafunski-StrategyLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "just",
          "package": "Strafunski-StrategyLib",
          "signature": "a -\u003e b",
          "source": "src/Control-Monad-Run.html#MaybeAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "just",
          "normalized": "a-\u003eb",
          "package": "Strafunski-StrategyLib",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "left",
          "package": "Strafunski-StrategyLib",
          "signature": "e -\u003e b",
          "source": "src/Control-Monad-Run.html#ErrorAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "left",
          "normalized": "a-\u003eb",
          "package": "Strafunski-StrategyLib",
          "signature": "e-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialization of \u003ccode\u003e\u003ca\u003emswitch\u003c/a\u003e\u003c/code\u003e for MaybeT.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "mayswitch",
          "package": "Strafunski-StrategyLib",
          "signature": "[MaybeT m b] -\u003e m b -\u003e m b",
          "source": "src/Control-Monad-Run.html#mayswitch",
          "type": "function"
        },
        "index": {
          "description": "Specialization of mswitch for MaybeT",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "mayswitch",
          "normalized": "[MaybeT a b]-\u003ea b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "[MaybeT m b]-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:mayswitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic function choice combinator that confines the partiality effect\n   to the first argument. This is a variation on \u003ccode\u003emchoice\u003c/code\u003e which\n   allows the partiality effect to spread to both arguments and to the\n   result.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "mchoice'",
          "package": "Strafunski-StrategyLib",
          "signature": "(a -\u003e t m b) -\u003e (a -\u003e m b) -\u003e a -\u003e m b",
          "source": "src/Control-Monad-Run.html#mchoice%27",
          "type": "function"
        },
        "index": {
          "description": "Monadic function choice combinator that confines the partiality effect to the first argument This is variation on mchoice which allows the partiality effect to spread to both arguments and to the result",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "mchoice'",
          "normalized": "(a-\u003eb c d)-\u003e(a-\u003ec d)-\u003ea-\u003ec d",
          "package": "Strafunski-StrategyLib",
          "signature": "(a-\u003et m b)-\u003e(a-\u003em b)-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:mchoice-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic function choice combinator. Generalization of \u003ccode\u003e\u003ca\u003emchoice'\u003c/a\u003e\u003c/code\u003e that\n   takes a list of choice arguments rather than a single one.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "mchoices",
          "package": "Strafunski-StrategyLib",
          "signature": "[a -\u003e t m b] -\u003e (a -\u003e m b) -\u003e a -\u003e m b",
          "source": "src/Control-Monad-Run.html#mchoices",
          "type": "function"
        },
        "index": {
          "description": "Monadic function choice combinator Generalization of mchoice that takes list of choice arguments rather than single one",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "mchoices",
          "normalized": "[a-\u003eb c d]-\u003e(a-\u003ec d)-\u003ea-\u003ec d",
          "package": "Strafunski-StrategyLib",
          "signature": "[a-\u003et m b]-\u003e(a-\u003em b)-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:mchoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic choice combinator that confines the partiality effect to\n   the first argument. This is a variation on \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e which allows\n   the partiality effect to spread to both arguments and to the result.\t  \n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "mplus'",
          "package": "Strafunski-StrategyLib",
          "signature": "t m b -\u003e m b -\u003e m b",
          "source": "src/Control-Monad-Run.html#mplus%27",
          "type": "function"
        },
        "index": {
          "description": "Monadic choice combinator that confines the partiality effect to the first argument This is variation on mplus which allows the partiality effect to spread to both arguments and to the result",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "mplus'",
          "normalized": "a b c-\u003eb c-\u003eb c",
          "package": "Strafunski-StrategyLib",
          "signature": "t m b-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:mplus-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExchange one monad by another.\n   This function runs one monad, and puts its value in another. This is\n   basically a monadic version of the \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e function itself. Note that the two\n   monads are unrelated, so none of the effects of the incoming monad are\n   transferred to the result monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "mrun",
          "package": "Strafunski-StrategyLib",
          "signature": "s a b -\u003e m a -\u003e m' b",
          "source": "src/Control-Monad-Run.html#mrun",
          "type": "function"
        },
        "index": {
          "description": "Exchange one monad by another This function runs one monad and puts its value in another This is basically monadic version of the run function itself Note that the two monads are unrelated so none of the effects of the incoming monad are transferred to the result monad",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "mrun",
          "normalized": "a b c-\u003ed b-\u003ee c",
          "package": "Strafunski-StrategyLib",
          "signature": "s a b-\u003em a-\u003em' b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:mrun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic choice combinator. Generalization of \u003ccode\u003e\u003ca\u003emplus'\u003c/a\u003e\u003c/code\u003e that takes a list\n   of choice arguments rather than a single one.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "mswitch",
          "package": "Strafunski-StrategyLib",
          "signature": "[t m b]-\u003e m b-\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Monadic choice combinator Generalization of mplus that takes list of choice arguments rather than single one",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "mswitch",
          "normalized": "[a b c]-\u003eb c-\u003eb c",
          "package": "Strafunski-StrategyLib",
          "signature": "[t m b]-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:mswitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation variant of \u003ccode\u003e\u003ca\u003emswitch\u003c/a\u003e\u003c/code\u003e where the unlift is postponed\n   to the very end.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "mswitch'",
          "package": "Strafunski-StrategyLib",
          "signature": "[t m b] -\u003e m b -\u003e m b",
          "source": "src/Control-Monad-Run.html#mswitch%27",
          "type": "function"
        },
        "index": {
          "description": "Implementation variant of mswitch where the unlift is postponed to the very end",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "mswitch'",
          "normalized": "[a b c]-\u003eb c-\u003eb c",
          "package": "Strafunski-StrategyLib",
          "signature": "[t m b]-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:mswitch-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation variant of \u003ccode\u003e\u003ca\u003emswitch\u003c/a\u003e\u003c/code\u003e in terms of foldr.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "mswitch0",
          "package": "Strafunski-StrategyLib",
          "signature": "[t m b] -\u003e m b -\u003e m b",
          "source": "src/Control-Monad-Run.html#mswitch0",
          "type": "function"
        },
        "index": {
          "description": "Implementation variant of mswitch in terms of foldr",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "mswitch0",
          "normalized": "[a b c]-\u003eb c-\u003eb c",
          "package": "Strafunski-StrategyLib",
          "signature": "[t m b]-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:mswitch0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation variant of \u003ccode\u003e\u003ca\u003emswitch\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003emplus'\u003c/a\u003e\u003c/code\u003e expanded:\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "mswitch1",
          "package": "Strafunski-StrategyLib",
          "signature": "[t m b] -\u003e m b -\u003e m b",
          "source": "src/Control-Monad-Run.html#mswitch1",
          "type": "function"
        },
        "index": {
          "description": "Implementation variant of mswitch with mplus expanded",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "mswitch1",
          "normalized": "[a b c]-\u003eb c-\u003eb c",
          "package": "Strafunski-StrategyLib",
          "signature": "[t m b]-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:mswitch1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estate transformer\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "next",
          "package": "Strafunski-StrategyLib",
          "signature": "(a, s) -\u003e b",
          "source": "src/Control-Monad-Run.html#StateAlg",
          "type": "function"
        },
        "index": {
          "description": "state transformer",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "next",
          "normalized": "(a,b)-\u003ec",
          "package": "Strafunski-StrategyLib",
          "signature": "(a,s)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "nil",
          "package": "Strafunski-StrategyLib",
          "signature": "b",
          "source": "src/Control-Monad-Run.html#ListAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "nil",
          "package": "Strafunski-StrategyLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "nothing",
          "package": "Strafunski-StrategyLib",
          "signature": "b",
          "source": "src/Control-Monad-Run.html#MaybeAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "nothing",
          "package": "Strafunski-StrategyLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Run",
          "name": "right",
          "package": "Strafunski-StrategyLib",
          "signature": "a -\u003e b",
          "source": "src/Control-Monad-Run.html#ErrorAlg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "right",
          "normalized": "a-\u003eb",
          "package": "Strafunski-StrategyLib",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe overloaded function run takes as first argument an \u003ca\u003ealgebra\u003c/a\u003e which\n captures the ingredients necessary to run the particular monad at hand.\n This algebra is parameterized with the domain and co-domain of run.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "run",
          "package": "Strafunski-StrategyLib",
          "signature": "s a b -\u003e m a -\u003e b",
          "source": "src/Control-Monad-Run.html#run",
          "type": "method"
        },
        "index": {
          "description": "The overloaded function run takes as first argument an algebra which captures the ingredients necessary to run the particular monad at hand This algebra is parameterized with the domain and co-domain of run",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "run",
          "normalized": "a b c-\u003ed b-\u003ec",
          "package": "Strafunski-StrategyLib",
          "signature": "s a b-\u003em a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe overloaded function \u003ccode\u003e\u003ca\u003eunlift\u003c/a\u003e\u003c/code\u003e for monad transformers takes as first \n   argument an \u003ca\u003ealgebra\u003c/a\u003e just like the run function for base monads. For\n   each monad transformer, the same algebra is used as for the base monad\n   of which the transformer is the parameterized variant.\n\u003c/p\u003e",
          "module": "Control.Monad.Run",
          "name": "unlift",
          "package": "Strafunski-StrategyLib",
          "signature": "s a b -\u003e t m a -\u003e m b",
          "source": "src/Control-Monad-Run.html#unlift",
          "type": "method"
        },
        "index": {
          "description": "The overloaded function unlift for monad transformers takes as first argument an algebra just like the run function for base monads For each monad transformer the same algebra is used as for the base monad of which the transformer is the parameterized variant",
          "hierarchy": "Control Monad Run",
          "module": "Control.Monad.Run",
          "name": "unlift",
          "normalized": "a b c-\u003ed e b-\u003ee c",
          "package": "Strafunski-StrategyLib",
          "signature": "s a b-\u003et m a-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Control-Monad-Run.html#v:unlift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module\n defines a generic algorithm for import chasing. This algorithm is not\n strategic in nature itself, but usually it will be instantiated with\n strategic functions for a particular object language.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "ChaseImports",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ChaseImports.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module defines generic algorithm for import chasing This algorithm is not strategic in nature itself but usually it will be instantiated with strategic functions for particular object language",
          "hierarchy": "Data Generics Strafunski StrategyLib ChaseImports",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "ChaseImports",
          "package": "Strafunski-StrategyLib",
          "partial": "Chase Imports",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ChaseImports.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of names of chaseable things. Synonym of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "ChaseName",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ChaseImports.html#ChaseName",
          "type": "type"
        },
        "index": {
          "description": "The type of names of chaseable things Synonym of String",
          "hierarchy": "Data Generics Strafunski StrategyLib ChaseImports",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "ChaseName",
          "package": "Strafunski-StrategyLib",
          "partial": "Chase Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ChaseImports.html#t:ChaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a file from a number of possible directories, given a\n   base name and a list of possible extensions. Returns the content\n   of the file it found.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "chaseFile",
          "package": "Strafunski-StrategyLib",
          "signature": "[FilePath]-\u003e String-\u003e [String]-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Read file from number of possible directories given base name and list of possible extensions Returns the content of the file it found",
          "hierarchy": "Data Generics Strafunski StrategyLib ChaseImports",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "chaseFile",
          "normalized": "[FilePath]-\u003eString-\u003e[String]-\u003eIO String",
          "package": "Strafunski-StrategyLib",
          "partial": "File",
          "signature": "[FilePath]-\u003eString-\u003e[String]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ChaseImports.html#v:chaseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic import chasing function. The type of the final result is a\n   parameter, which will usually be instantiated to a list of parsed\n   modules.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "chaseWith",
          "package": "Strafunski-StrategyLib",
          "signature": "[FilePath]-\u003e [ChaseName]-\u003e [ChaseName]-\u003e accu-\u003e ([FilePath] -\u003e ChaseName -\u003e IO (Either cu String))-\u003e (cu -\u003e [ChaseName])-\u003e (ChaseName -\u003e [ChaseName] -\u003e cu -\u003e accu -\u003e IO accu)-\u003e (ChaseName -\u003e accu -\u003e IO accu)-\u003e IO accu",
          "type": "function"
        },
        "index": {
          "description": "generic import chasing function The type of the final result is parameter which will usually be instantiated to list of parsed modules",
          "hierarchy": "Data Generics Strafunski StrategyLib ChaseImports",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "chaseWith",
          "normalized": "[FilePath]-\u003e[ChaseName]-\u003e[ChaseName]-\u003ea-\u003e([FilePath]-\u003eChaseName-\u003eIO(Either b String))-\u003e(b-\u003e[ChaseName])-\u003e(ChaseName-\u003e[ChaseName]-\u003eb-\u003ea-\u003eIO a)-\u003e(ChaseName-\u003ea-\u003eIO a)-\u003eIO a",
          "package": "Strafunski-StrategyLib",
          "partial": "With",
          "signature": "[FilePath]-\u003e[ChaseName]-\u003e[ChaseName]-\u003eaccu-\u003e([FilePath]-\u003eChaseName-\u003eIO(Either cu String))-\u003e(cu-\u003e[ChaseName])-\u003e(ChaseName-\u003e[ChaseName]-\u003ecu-\u003eaccu-\u003eIO accu)-\u003e(ChaseName-\u003eaccu-\u003eIO accu)-\u003eIO accu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ChaseImports.html#v:chaseWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a file in a number of possible directories, given a\n   base name and a list of possible extensions. Returns the full\n   name of the file it found.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "findFile",
          "package": "Strafunski-StrategyLib",
          "signature": "[FilePath]-\u003e String-\u003e [String]-\u003e IO FilePath",
          "type": "function"
        },
        "index": {
          "description": "Find file in number of possible directories given base name and list of possible extensions Returns the full name of the file it found",
          "hierarchy": "Data Generics Strafunski StrategyLib ChaseImports",
          "module": "Data.Generics.Strafunski.StrategyLib.ChaseImports",
          "name": "findFile",
          "normalized": "[FilePath]-\u003eString-\u003e[String]-\u003eIO FilePath",
          "package": "Strafunski-StrategyLib",
          "partial": "File",
          "signature": "[FilePath]-\u003eString-\u003e[String]-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ChaseImports.html#v:findFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module\n provides combinators which allow one to use strategies to construct\n generic containers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "ContainerTheme",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module provides combinators which allow one to use strategies to construct generic containers",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "ContainerTheme",
          "package": "Strafunski-StrategyLib",
          "partial": "Container Theme",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "Coder",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#Coder",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "Coder",
          "package": "Strafunski-StrategyLib",
          "partial": "Coder",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#t:Coder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "GList",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#GList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "GList",
          "package": "Strafunski-StrategyLib",
          "partial": "GList",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#t:GList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of generic maps\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "GMap",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#GMap",
          "type": "type"
        },
        "index": {
          "description": "Type of generic maps",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "GMap",
          "package": "Strafunski-StrategyLib",
          "partial": "GMap",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#t:GMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of generic sets\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "GSet",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#GSet",
          "type": "type"
        },
        "index": {
          "description": "Type of generic sets",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "GSet",
          "package": "Strafunski-StrategyLib",
          "partial": "GSet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#t:GSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "addGList",
          "package": "Strafunski-StrategyLib",
          "signature": "t -\u003e GList -\u003e GList",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#addGList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "addGList",
          "normalized": "a-\u003eGList-\u003eGList",
          "package": "Strafunski-StrategyLib",
          "partial": "GList",
          "signature": "t-\u003eGList-\u003eGList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:addGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an element to a generic set\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "addGSet",
          "package": "Strafunski-StrategyLib",
          "signature": "t -\u003e GSet -\u003e GSet",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#addGSet",
          "type": "function"
        },
        "index": {
          "description": "Add an element to generic set",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "addGSet",
          "normalized": "a-\u003eGSet-\u003eGSet",
          "package": "Strafunski-StrategyLib",
          "partial": "GSet",
          "signature": "t-\u003eGSet-\u003eGSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:addGSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether an element with given key is contained in a generic map\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "containsGMap",
          "package": "Strafunski-StrategyLib",
          "signature": "t -\u003e GMap v -\u003e Bool",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#containsGMap",
          "type": "function"
        },
        "index": {
          "description": "Test whether an element with given key is contained in generic map",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "containsGMap",
          "normalized": "a-\u003eGMap b-\u003eBool",
          "package": "Strafunski-StrategyLib",
          "partial": "GMap",
          "signature": "t-\u003eGMap v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:containsGMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a given element is contained in a generic set\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "containsGSet",
          "package": "Strafunski-StrategyLib",
          "signature": "t -\u003e GSet -\u003e Bool",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#containsGSet",
          "type": "function"
        },
        "index": {
          "description": "Test whether given element is contained in generic set",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "containsGSet",
          "normalized": "a-\u003eGSet-\u003eBool",
          "package": "Strafunski-StrategyLib",
          "partial": "GSet",
          "signature": "t-\u003eGSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:containsGSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "elemsGList",
          "package": "Strafunski-StrategyLib",
          "signature": "(t -\u003e ()) -\u003e GList -\u003e [t]",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#elemsGList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "elemsGList",
          "normalized": "(a-\u003e())-\u003eGList-\u003e[a]",
          "package": "Strafunski-StrategyLib",
          "partial": "GList",
          "signature": "(t-\u003e())-\u003eGList-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:elemsGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "emptyGList",
          "package": "Strafunski-StrategyLib",
          "signature": "GList",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#emptyGList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "emptyGList",
          "package": "Strafunski-StrategyLib",
          "partial": "GList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:emptyGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty generic map\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "emptyGMap",
          "package": "Strafunski-StrategyLib",
          "signature": "GMap v",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#emptyGMap",
          "type": "function"
        },
        "index": {
          "description": "Empty generic map",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "emptyGMap",
          "package": "Strafunski-StrategyLib",
          "partial": "GMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:emptyGMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty generic set.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "emptyGSet",
          "package": "Strafunski-StrategyLib",
          "signature": "GSet",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#emptyGSet",
          "type": "function"
        },
        "index": {
          "description": "Empty generic set",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "emptyGSet",
          "package": "Strafunski-StrategyLib",
          "partial": "GSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:emptyGSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "enCode",
          "package": "Strafunski-StrategyLib",
          "signature": "Coder -\u003e x -\u003e Coder",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#enCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "enCode",
          "normalized": "Coder-\u003ea-\u003eCoder",
          "package": "Strafunski-StrategyLib",
          "partial": "Code",
          "signature": "Coder-\u003ex-\u003eCoder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:enCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompletely filled generic set\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "fullGSet",
          "package": "Strafunski-StrategyLib",
          "signature": "GSet",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#fullGSet",
          "type": "function"
        },
        "index": {
          "description": "Completely filled generic set",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "fullGSet",
          "package": "Strafunski-StrategyLib",
          "partial": "GSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:fullGSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "getCode",
          "package": "Strafunski-StrategyLib",
          "signature": "Coder -\u003e x -\u003e Maybe Int",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#getCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "getCode",
          "normalized": "Coder-\u003ea-\u003eMaybe Int",
          "package": "Strafunski-StrategyLib",
          "partial": "Code",
          "signature": "Coder-\u003ex-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:getCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "getGList",
          "package": "Strafunski-StrategyLib",
          "signature": "Integer -\u003e GList -\u003e Maybe t",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#getGList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "getGList",
          "normalized": "Integer-\u003eGList-\u003eMaybe a",
          "package": "Strafunski-StrategyLib",
          "partial": "GList",
          "signature": "Integer-\u003eGList-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:getGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the value for a given key from a generic map\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "getGMap",
          "package": "Strafunski-StrategyLib",
          "signature": "t -\u003e GMap v -\u003e Maybe v",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#getGMap",
          "type": "function"
        },
        "index": {
          "description": "Obtain the value for given key from generic map",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "getGMap",
          "normalized": "a-\u003eGMap b-\u003eMaybe b",
          "package": "Strafunski-StrategyLib",
          "partial": "GMap",
          "signature": "t-\u003eGMap v-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:getGMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "indxGList",
          "package": "Strafunski-StrategyLib",
          "signature": "(t, t1) -\u003e t",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#indxGList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "indxGList",
          "normalized": "(a,a)-\u003ea",
          "package": "Strafunski-StrategyLib",
          "partial": "GList",
          "signature": "(t,t)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:indxGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "mapGListTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP Maybe -\u003e GList -\u003e GList",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#mapGListTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "mapGListTP",
          "normalized": "TP Maybe-\u003eGList-\u003eGList",
          "package": "Strafunski-StrategyLib",
          "partial": "GList TP",
          "signature": "TP Maybe-\u003eGList-\u003eGList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:mapGListTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "mapGListTU",
          "package": "Strafunski-StrategyLib",
          "signature": "(t -\u003e ()) -\u003e TU a Maybe -\u003e GList -\u003e [Maybe a]",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#mapGListTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "mapGListTU",
          "normalized": "(a-\u003e())-\u003eTU b Maybe-\u003eGList-\u003e[Maybe b]",
          "package": "Strafunski-StrategyLib",
          "partial": "GList TU",
          "signature": "(t-\u003e())-\u003eTU a Maybe-\u003eGList-\u003e[Maybe a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:mapGListTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointwise modification of monomorphic functions\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "modify",
          "package": "Strafunski-StrategyLib",
          "signature": "(x -\u003e y) -\u003e x -\u003e y -\u003e x -\u003e y",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Pointwise modification of monomorphic functions",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "modify",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb-\u003ea-\u003eb",
          "package": "Strafunski-StrategyLib",
          "signature": "(x-\u003ey)-\u003ex-\u003ey-\u003ex-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointwise modification of type-preserving strategies\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "modifyTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e t -\u003e m t -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#modifyTP",
          "type": "function"
        },
        "index": {
          "description": "Pointwise modification of type-preserving strategies",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "modifyTP",
          "normalized": "TP a-\u003eb-\u003ea b-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003et-\u003em t-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:modifyTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointwise modification of type-unifying strategies\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "modifyTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e t -\u003e m a -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#modifyTU",
          "type": "function"
        },
        "index": {
          "description": "Pointwise modification of type-unifying strategies",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "modifyTU",
          "normalized": "TU a b-\u003ec-\u003eb a-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU a m-\u003et-\u003em a-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:modifyTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "nextCode",
          "package": "Strafunski-StrategyLib",
          "signature": "Coder -\u003e (Int, Coder)",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#nextCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "nextCode",
          "normalized": "Coder-\u003e(Int,Coder)",
          "package": "Strafunski-StrategyLib",
          "partial": "Code",
          "signature": "Coder-\u003e(Int,Coder)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:nextCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "noCode",
          "package": "Strafunski-StrategyLib",
          "signature": "Coder",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#noCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "noCode",
          "package": "Strafunski-StrategyLib",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:noCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "nth",
          "package": "Strafunski-StrategyLib",
          "signature": "[a] -\u003e Integer -\u003e a",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#nth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "nth",
          "normalized": "[a]-\u003eInteger-\u003ea",
          "package": "Strafunski-StrategyLib",
          "signature": "[a]-\u003eInteger-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:nth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "putGList",
          "package": "Strafunski-StrategyLib",
          "signature": "Integer -\u003e t -\u003e GList -\u003e GList",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#putGList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "putGList",
          "normalized": "Integer-\u003ea-\u003eGList-\u003eGList",
          "package": "Strafunski-StrategyLib",
          "partial": "GList",
          "signature": "Integer-\u003et-\u003eGList-\u003eGList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:putGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an entry with given key and value to a generic map\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "putGMap",
          "package": "Strafunski-StrategyLib",
          "signature": "t -\u003e v -\u003e GMap v -\u003e GMap v",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#putGMap",
          "type": "function"
        },
        "index": {
          "description": "Add an entry with given key and value to generic map",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "putGMap",
          "normalized": "a-\u003eb-\u003eGMap b-\u003eGMap b",
          "package": "Strafunski-StrategyLib",
          "partial": "GMap",
          "signature": "t-\u003ev-\u003eGMap v-\u003eGMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:putGMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an element from a generic map (my key)\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "removeGMap",
          "package": "Strafunski-StrategyLib",
          "signature": "t -\u003e GMap v -\u003e GMap v",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#removeGMap",
          "type": "function"
        },
        "index": {
          "description": "Remove an element from generic map my key",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "removeGMap",
          "normalized": "a-\u003eGMap b-\u003eGMap b",
          "package": "Strafunski-StrategyLib",
          "partial": "GMap",
          "signature": "t-\u003eGMap v-\u003eGMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:removeGMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an element from a generic set\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "removeGSet",
          "package": "Strafunski-StrategyLib",
          "signature": "t -\u003e GSet -\u003e GSet",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#removeGSet",
          "type": "function"
        },
        "index": {
          "description": "Remove an element from generic set",
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "removeGSet",
          "normalized": "a-\u003eGSet-\u003eGSet",
          "package": "Strafunski-StrategyLib",
          "partial": "GSet",
          "signature": "t-\u003eGSet-\u003eGSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:removeGSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "setCode",
          "package": "Strafunski-StrategyLib",
          "signature": "Coder -\u003e x -\u003e Int -\u003e Coder",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#setCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "setCode",
          "normalized": "Coder-\u003ea-\u003eInt-\u003eCoder",
          "package": "Strafunski-StrategyLib",
          "partial": "Code",
          "signature": "Coder-\u003ex-\u003eInt-\u003eCoder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:setCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "sizeGList",
          "package": "Strafunski-StrategyLib",
          "signature": "(t, t1) -\u003e t1",
          "source": "src/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#sizeGList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib ContainerTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.ContainerTheme",
          "name": "sizeGList",
          "normalized": "(a,a)-\u003ea",
          "package": "Strafunski-StrategyLib",
          "partial": "GList",
          "signature": "(t,t)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-ContainerTheme.html#v:sizeGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module\n provides combinators to localize monadic effects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "EffectTheme",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-EffectTheme.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module provides combinators to localize monadic effects",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "EffectTheme",
          "package": "Strafunski-StrategyLib",
          "partial": "Effect Theme",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocalize the partiality effect in a type-preserving strategy. A\n   default value must be supplied to be used to recover from\n   failure. Since this default parameter is universally quantified,\n   only \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e and 'error ...' can be used to instantiate it.\n   See also 'unsafeGuaranteeSuccessTP.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "guaranteeSuccessTP",
          "package": "Strafunski-StrategyLib",
          "signature": "(forall a.  a)-\u003e TP (t m)-\u003e TP m",
          "type": "function"
        },
        "index": {
          "description": "Localize the partiality effect in type-preserving strategy default value must be supplied to be used to recover from failure Since this default parameter is universally quantified only undefined and error can be used to instantiate it See also unsafeGuaranteeSuccessTP",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "guaranteeSuccessTP",
          "normalized": "(a b c)-\u003eTP(d e)-\u003eTP e",
          "package": "Strafunski-StrategyLib",
          "partial": "Success TP",
          "signature": "(forall a. a)-\u003eTP(t m)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:guaranteeSuccessTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocalize the partiality effect in a type-unifying strategy. A\n   default value must be supplied to be used to recover from\n   failure. \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "guaranteeSuccessTU",
          "package": "Strafunski-StrategyLib",
          "signature": "a-\u003e TU a (t m)-\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "Localize the partiality effect in type-unifying strategy default value must be supplied to be used to recover from failure",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "guaranteeSuccessTU",
          "normalized": "a-\u003eTU a(b c)-\u003eTU a c",
          "package": "Strafunski-StrategyLib",
          "partial": "Success TU",
          "signature": "a-\u003eTU a(t m)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:guaranteeSuccessTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an effect to the monad in a type-preserving strategy. \n   The monads are related by a monad transformer, so the effects of the\n   incoming monad are preserved in the result monad. We use the \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n   function of the monad transformer.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "liftTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP (t m)",
          "source": "src/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#liftTP",
          "type": "function"
        },
        "index": {
          "description": "Add an effect to the monad in type-preserving strategy The monads are related by monad transformer so the effects of the incoming monad are preserved in the result monad We use the lift function of the monad transformer",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "liftTP",
          "normalized": "TP a-\u003eTP(b a)",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP(t m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:liftTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an effect to the monad in a type-unifying strategy. \n   The monads are related by a monad transformer, so the effects of the\n   incoming monad are preserved in the result monad. We use the \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n   function of the monad transformer.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "liftTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e TU a (t m)",
          "source": "src/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#liftTU",
          "type": "function"
        },
        "index": {
          "description": "Add an effect to the monad in type-unifying strategy The monads are related by monad transformer so the effects of the incoming monad are preserved in the result monad We use the lift function of the monad transformer",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "liftTU",
          "normalized": "TU a b-\u003eTU a(c b)",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU a m-\u003eTU a(t m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:liftTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocalize the state of a type-preserving strategy. The first argument\n   represents the initial state.  \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "localStateTP",
          "package": "Strafunski-StrategyLib",
          "signature": "s -\u003e TP (t m) -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#localStateTP",
          "type": "function"
        },
        "index": {
          "description": "Localize the state of type-preserving strategy The first argument represents the initial state",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "localStateTP",
          "normalized": "a-\u003eTP(b c)-\u003eTP c",
          "package": "Strafunski-StrategyLib",
          "partial": "State TP",
          "signature": "s-\u003eTP(t m)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:localStateTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocalize the state of a type-unifying strategy. The first argument\n   represents the initial state.  \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "localStateTU",
          "package": "Strafunski-StrategyLib",
          "signature": "s -\u003e TU a (t m) -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#localStateTU",
          "type": "function"
        },
        "index": {
          "description": "Localize the state of type-unifying strategy The first argument represents the initial state",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "localStateTU",
          "normalized": "a-\u003eTU b(c d)-\u003eTU b d",
          "package": "Strafunski-StrategyLib",
          "partial": "State TU",
          "signature": "s-\u003eTU a(t m)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:localStateTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the monad in a type-preserving strategy, given a monad\n   algebra (see \u003ccode\u003e\u003ca\u003eMonadRun\u003c/a\u003e\u003c/code\u003e) for the monad that is replaced. The two \n   monads are unrelated, so none of the effects in the monad that is\n   replaced carry over to the one that replaces it.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "mrunTP",
          "package": "Strafunski-StrategyLib",
          "signature": "(forall a.  s a a) -\u003e TP m -\u003e TP m'",
          "source": "src/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#mrunTP",
          "type": "function"
        },
        "index": {
          "description": "Replace the monad in type-preserving strategy given monad algebra see MonadRun for the monad that is replaced The two monads are unrelated so none of the effects in the monad that is replaced carry over to the one that replaces it",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "mrunTP",
          "normalized": "(a b c d d)-\u003eTP e-\u003eTP f",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "(forall a. s a a)-\u003eTP m-\u003eTP m'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:mrunTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the monad in a type-unifying strategy, given a monad\n   algebra (see \u003ccode\u003e\u003ca\u003eMonadRun\u003c/a\u003e\u003c/code\u003e) for the monad that is replaced. The two \n   monads are unrelated, so none of the effects in the monad that is\n   replaced carry over to the one that replaces it.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "mrunTU",
          "package": "Strafunski-StrategyLib",
          "signature": "s a a -\u003e TU a m -\u003e TU a m'",
          "source": "src/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#mrunTU",
          "type": "function"
        },
        "index": {
          "description": "Replace the monad in type-unifying strategy given monad algebra see MonadRun for the monad that is replaced The two monads are unrelated so none of the effects in the monad that is replaced carry over to the one that replaces it",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "mrunTU",
          "normalized": "a b b-\u003eTU b c-\u003eTU b d",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "s a a-\u003eTU a m-\u003eTU a m'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:mrunTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove an effect from the monad of a type-preserving strategy.\n   The monads are related by a monad untransformer (see \u003ccode\u003e\u003ca\u003eMonadUnTrans\u003c/a\u003e\u003c/code\u003e),\n   so the effects of the incoming monad are preserved in the result\n   monad, except for the effect for which a monad algebra is supplied.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "unliftTP",
          "package": "Strafunski-StrategyLib",
          "signature": "(forall a.  s a a) -\u003e TP (t m) -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#unliftTP",
          "type": "function"
        },
        "index": {
          "description": "remove an effect from the monad of type-preserving strategy The monads are related by monad untransformer see MonadUnTrans so the effects of the incoming monad are preserved in the result monad except for the effect for which monad algebra is supplied",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "unliftTP",
          "normalized": "(a b c d d)-\u003eTP(e f)-\u003eTP f",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "(forall a. s a a)-\u003eTP(t m)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:unliftTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove an effect from the monad of a type-unifying strategy.\n   The monads are related by a monad untransformer (see \u003ccode\u003e\u003ca\u003eMonadUnTrans\u003c/a\u003e\u003c/code\u003e),\n   so the effects of the incoming monad are preserved in the result\n   monad, except for the effect for which a monad algebra is supplied.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "unliftTU",
          "package": "Strafunski-StrategyLib",
          "signature": "s a a -\u003e TU a (t m) -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#unliftTU",
          "type": "function"
        },
        "index": {
          "description": "remove an effect from the monad of type-unifying strategy The monads are related by monad untransformer see MonadUnTrans so the effects of the incoming monad are preserved in the result monad except for the effect for which monad algebra is supplied",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "unliftTU",
          "normalized": "a b b-\u003eTU b(c d)-\u003eTU b d",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "s a a-\u003eTU a(t m)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:unliftTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe version of \u003ccode\u003e\u003ca\u003eguaranteeSuccessTP\u003c/a\u003e\u003c/code\u003e. This version uses uses \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\n   to recover from failure. For the type-preserving case, this is the only\n   possible default value.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "unsafeGuaranteeSuccessTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP (t m) -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#unsafeGuaranteeSuccessTP",
          "type": "function"
        },
        "index": {
          "description": "Unsafe version of guaranteeSuccessTP This version uses uses undefined to recover from failure For the type-preserving case this is the only possible default value",
          "hierarchy": "Data Generics Strafunski StrategyLib EffectTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.EffectTheme",
          "name": "unsafeGuaranteeSuccessTP",
          "normalized": "TP(a b)-\u003eTP b",
          "package": "Strafunski-StrategyLib",
          "partial": "Guarantee Success TP",
          "signature": "TP(t m)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-EffectTheme.html#v:unsafeGuaranteeSuccessTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module \n defines combinators that iterate until some kind of fixpoint is reached.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "FixpointTheme",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module defines combinators that iterate until some kind of fixpoint is reached",
          "hierarchy": "Data Generics Strafunski StrategyLib FixpointTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "FixpointTheme",
          "package": "Strafunski-StrategyLib",
          "partial": "Fixpoint Theme",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExhaustive repeated application according to the left-most\n   innermost traversal strategy, implemented in a more \n   efficient way.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "innermost",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#innermost",
          "type": "function"
        },
        "index": {
          "description": "Exhaustive repeated application according to the left-most innermost traversal strategy implemented in more efficient way",
          "hierarchy": "Data Generics Strafunski StrategyLib FixpointTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "innermost",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#v:innermost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExhaustive repeated application according to the left-most\n   innermost traversal strategy, implemented in a naive way.\n   Use \u003ccode\u003e\u003ca\u003einnermost\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "innermost'",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#innermost%27",
          "type": "function"
        },
        "index": {
          "description": "Exhaustive repeated application according to the left-most innermost traversal strategy implemented in naive way Use innermost instead",
          "hierarchy": "Data Generics Strafunski StrategyLib FixpointTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "innermost'",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#v:innermost-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExhaustive repeated application according to the left-most\n   outermost traversal strategy.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "outermost",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#outermost",
          "type": "function"
        },
        "index": {
          "description": "Exhaustive repeated application according to the left-most outermost traversal strategy",
          "hierarchy": "Data Generics Strafunski StrategyLib FixpointTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "outermost",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#v:outermost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExhaustive repeated application throughout the input term.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "reduce",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#reduce",
          "type": "function"
        },
        "index": {
          "description": "Exhaustive repeated application throughout the input term",
          "hierarchy": "Data Generics Strafunski StrategyLib FixpointTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "reduce",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#v:reduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExhaustive repeated application at the root of the input term\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "repeatTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#repeatTP",
          "type": "function"
        },
        "index": {
          "description": "Exhaustive repeated application at the root of the input term",
          "hierarchy": "Data Generics Strafunski StrategyLib FixpointTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FixpointTheme",
          "name": "repeatTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FixpointTheme.html#v:repeatTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module \n defines combinators to wire up control and data flow. Whenever possible,\n we define the combinators in an overloaded fashion but we provide\n type-specialised variants for TP and TU for convenience.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "FlowTheme",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module defines combinators to wire up control and data flow Whenever possible we define the combinators in an overloaded fashion but we provide type-specialised variants for TP and TU for convenience",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "FlowTheme",
          "package": "Strafunski-StrategyLib",
          "partial": "Flow Theme",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType guard (function type), i.e., guard that does not observe values\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "TypeGuard",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#TypeGuard",
          "type": "type"
        },
        "index": {
          "description": "Type guard function type i.e guard that does not observe values",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "TypeGuard",
          "package": "Strafunski-StrategyLib",
          "partial": "Type Guard",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#t:TypeGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf predicate \u003ccode\u003eg\u003c/code\u003e holds for the input term, return it as output term,\n   otherwise fail.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "filterTP",
          "package": "Strafunski-StrategyLib",
          "signature": "(t -\u003e Bool) -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#filterTP",
          "type": "function"
        },
        "index": {
          "description": "If predicate holds for the input term return it as output term otherwise fail",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "filterTP",
          "normalized": "(a-\u003eBool)-\u003eTP b",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "(t-\u003eBool)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:filterTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf predicate \u003ccode\u003eg\u003c/code\u003e holds for the input term, return it as output value,\n   otherwise fail.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "filterTU",
          "package": "Strafunski-StrategyLib",
          "signature": "(t -\u003e Bool) -\u003e TU t m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#filterTU",
          "type": "function"
        },
        "index": {
          "description": "If predicate holds for the input term return it as output value otherwise fail",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "filterTU",
          "normalized": "(a-\u003eBool)-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "(t-\u003eBool)-\u003eTU t m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:filterTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003ec\u003c/code\u003e succeeds, pass its value to the then-clause \u003ccode\u003et\u003c/code\u003e, \n   otherwise revert to the else-clause \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "ifS",
          "package": "Strafunski-StrategyLib",
          "signature": "TU u m -\u003e (u -\u003e s m) -\u003e s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#ifS",
          "type": "function"
        },
        "index": {
          "description": "If succeeds pass its value to the then-clause otherwise revert to the else-clause",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "ifS",
          "normalized": "TU a b-\u003e(a-\u003ec b)-\u003ec b-\u003ec b",
          "package": "Strafunski-StrategyLib",
          "signature": "TU u m-\u003e(u-\u003es m)-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:ifS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003ec\u003c/code\u003e succeeds, pass its value to the then-clause \u003ccode\u003et\u003c/code\u003e, \n   otherwise revert to the else-clause \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "ifTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TU u m -\u003e (u -\u003e TP m) -\u003e TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#ifTP",
          "type": "function"
        },
        "index": {
          "description": "If succeeds pass its value to the then-clause otherwise revert to the else-clause",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "ifTP",
          "normalized": "TU a b-\u003e(a-\u003eTP b)-\u003eTP b-\u003eTP b",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TU u m-\u003e(u-\u003eTP m)-\u003eTP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:ifTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003ec\u003c/code\u003e succeeds, pass its value to the then-clause \u003ccode\u003et\u003c/code\u003e, \n   otherwise revert to the else-clause \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "ifTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU u m -\u003e (u -\u003e TU u' m) -\u003e TU u' m -\u003e TU u' m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#ifTU",
          "type": "function"
        },
        "index": {
          "description": "If succeeds pass its value to the then-clause otherwise revert to the else-clause",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "ifTU",
          "normalized": "TU a b-\u003e(a-\u003eTU c b)-\u003eTU c b-\u003eTU c b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU u m-\u003e(u-\u003eTU u' m)-\u003eTU u' m-\u003eTU u' m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:ifTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuard then-clause \u003ccode\u003et\u003c/code\u003e by the void-valued type-unifying\n   condition \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "ifthenS",
          "package": "Strafunski-StrategyLib",
          "signature": "TU () m -\u003e s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#ifthenS",
          "type": "function"
        },
        "index": {
          "description": "Guard then-clause by the void-valued type-unifying condition",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "ifthenS",
          "normalized": "TU()a-\u003eb a-\u003eb a",
          "package": "Strafunski-StrategyLib",
          "signature": "TU()m-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:ifthenS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuard type-preserving then-clause \u003ccode\u003et\u003c/code\u003e by the void-valued type-unifying\n   condition \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "ifthenTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TU () m -\u003e TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#ifthenTP",
          "type": "function"
        },
        "index": {
          "description": "Guard type-preserving then-clause by the void-valued type-unifying condition",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "ifthenTP",
          "normalized": "TU()a-\u003eTP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TU()m-\u003eTP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:ifthenTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuard type-unifying then-clause \u003ccode\u003et\u003c/code\u003e by the void-valued type-unifying\n   condition \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "ifthenTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU () m -\u003e TU u m -\u003e TU u m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#ifthenTU",
          "type": "function"
        },
        "index": {
          "description": "Guard type-unifying then-clause by the void-valued type-unifying condition",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "ifthenTU",
          "normalized": "TU()a-\u003eTU b a-\u003eTU b a",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU()m-\u003eTU u m-\u003eTU u m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:ifthenTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert the success-value of strategy \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "notS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#notS",
          "type": "function"
        },
        "index": {
          "description": "Invert the success-value of strategy",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "notS",
          "normalized": "a b-\u003eTP b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:notS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert the success-value of type-preserving strategy \u003ccode\u003es\u003c/code\u003e. Its output\n   term (in case of success) will be ignored.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "notTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#notTP",
          "type": "function"
        },
        "index": {
          "description": "Invert the success-value of type-preserving strategy Its output term in case of success will be ignored",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "notTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:notTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert the success-value of type-unifying strategy \u003ccode\u003es\u003c/code\u003e. Its output\n   value (in case of success) will be ignored.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "notTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU u m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#notTU",
          "type": "function"
        },
        "index": {
          "description": "Invert the success-value of type-unifying strategy Its output value in case of success will be ignored",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "notTU",
          "normalized": "TU a b-\u003eTP b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU u m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:notTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest for a strategy's success in a type-preserving context.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "testS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#testS",
          "type": "function"
        },
        "index": {
          "description": "Test for strategy success in type-preserving context",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "testS",
          "normalized": "a b-\u003eTP b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:testS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest for a type-preserving strategy's success in a\n   type-preserving context.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "testTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#testTP",
          "type": "function"
        },
        "index": {
          "description": "Test for type-preserving strategy success in type-preserving context",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "testTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:testTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest for a type-unifying strategy's success in a \n   type-preserving context.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "testTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#testTU",
          "type": "function"
        },
        "index": {
          "description": "Test for type-unifying strategy success in type-preserving context",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "testTU",
          "normalized": "TU a b-\u003eTP b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU a m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:testTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf predicate \u003ccode\u003eg\u003c/code\u003e holds for the input term, \n   return 1 otherwise return 0.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "tickTU",
          "package": "Strafunski-StrategyLib",
          "signature": "(t -\u003e Bool) -\u003e TU n m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#tickTU",
          "type": "function"
        },
        "index": {
          "description": "If predicate holds for the input term return otherwise return",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "tickTU",
          "normalized": "(a-\u003eBool)-\u003eTU b c",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "(t-\u003eBool)-\u003eTU n m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:tickTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt a strategy \u003ccode\u003es\u003c/code\u003e, but recover if it fails.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "tryS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#tryS",
          "type": "function"
        },
        "index": {
          "description": "Attempt strategy but recover if it fails",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "tryS",
          "normalized": "a b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:tryS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt a type-preserving strategy \u003ccode\u003es\u003c/code\u003e, but if it fails, return the\n   input term unchanged.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "tryTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#tryTP",
          "type": "function"
        },
        "index": {
          "description": "Attempt type-preserving strategy but if it fails return the input term unchanged",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "tryTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:tryTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt a type-unifying strategy \u003ccode\u003es\u003c/code\u003e, but if it fails, return the\n   \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e element of a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "tryTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU u m -\u003e TU u m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#tryTU",
          "type": "function"
        },
        "index": {
          "description": "Attempt type-unifying strategy but if it fails return the mempty element of Monoid",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "tryTU",
          "normalized": "TU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU u m-\u003eTU u m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:tryTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf type guard holds for the input term, return it as output term,\n   otherwise fail. \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "typeFilterTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TypeGuard t -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#typeFilterTP",
          "type": "function"
        },
        "index": {
          "description": "If type guard holds for the input term return it as output term otherwise fail",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "typeFilterTP",
          "normalized": "TypeGuard a-\u003eTP b",
          "package": "Strafunski-StrategyLib",
          "partial": "Filter TP",
          "signature": "TypeGuard t-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:typeFilterTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf type guard holds for the input term, return it as output value,\n   otherwise fail. \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "typeFilterTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TypeGuard t -\u003e TU t m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#typeFilterTU",
          "type": "function"
        },
        "index": {
          "description": "If type guard holds for the input term return it as output value otherwise fail",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "typeFilterTU",
          "normalized": "TypeGuard a-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "Filter TU",
          "signature": "TypeGuard t-\u003eTU t m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:typeFilterTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType guard (function). \n   Typical usage:\n\u003c/p\u003e\u003cpre\u003e \n   full_tdTU (typeTickTU (typeGuard::TypeGuard MyType))\n\u003c/pre\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "typeGuard",
          "package": "Strafunski-StrategyLib",
          "signature": "TypeGuard a",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#typeGuard",
          "type": "function"
        },
        "index": {
          "description": "Type guard function Typical usage full tdTU typeTickTU typeGuard TypeGuard MyType",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "typeGuard",
          "package": "Strafunski-StrategyLib",
          "partial": "Guard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:typeGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf type guard holds for the input term, \n   return 1 otherwise return 0.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "typeTickTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TypeGuard t -\u003e TU n m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#typeTickTU",
          "type": "function"
        },
        "index": {
          "description": "If type guard holds for the input term return otherwise return",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "typeTickTU",
          "normalized": "TypeGuard a-\u003eTU b c",
          "package": "Strafunski-StrategyLib",
          "partial": "Tick TU",
          "signature": "TypeGuard t-\u003eTU n m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:typeTickTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSucceed if exactly one argument strategy succeeds.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "xchoiceS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#xchoiceS",
          "type": "function"
        },
        "index": {
          "description": "Succeed if exactly one argument strategy succeeds",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "xchoiceS",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:xchoiceS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSucceed if exactly one argument strategy succeeds.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "xchoiceTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#xchoiceTP",
          "type": "function"
        },
        "index": {
          "description": "Succeed if exactly one argument strategy succeeds",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "xchoiceTP",
          "normalized": "TP a-\u003eTP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:xchoiceTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSucceed if exactly one argument strategy succeeds.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "xchoiceTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU u m -\u003e TU u m -\u003e TU u m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#xchoiceTU",
          "type": "function"
        },
        "index": {
          "description": "Succeed if exactly one argument strategy succeeds",
          "hierarchy": "Data Generics Strafunski StrategyLib FlowTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.FlowTheme",
          "name": "xchoiceTU",
          "normalized": "TU a b-\u003eTU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU u m-\u003eTU u m-\u003eTU u m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-FlowTheme.html#v:xchoiceTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module\n defines a number combinators for keyhole operations, i.e. for operations\n that have ordinary parametric or adhoc polymorhpic types, but employ\n strategies inside.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "KeyholeTheme",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module defines number combinators for keyhole operations i.e for operations that have ordinary parametric or adhoc polymorhpic types but employ strategies inside",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "KeyholeTheme",
          "package": "Strafunski-StrategyLib",
          "partial": "Keyhole Theme",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the focus assuming it is an element in a list. \n   Fails if no deletion can be performed.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "deleteFocus",
          "package": "Strafunski-StrategyLib",
          "signature": "(f -\u003e Maybe f)-\u003e t-\u003e Maybe t",
          "type": "function"
        },
        "index": {
          "description": "Delete the focus assuming it is an element in list Fails if no deletion can be performed",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "deleteFocus",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eMaybe b",
          "package": "Strafunski-StrategyLib",
          "partial": "Focus",
          "signature": "(f-\u003eMaybe f)-\u003et-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:deleteFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the argument function to the unique subterm of the input term.\n   Fail if the input term has more subterms or if the subterm is not of\n   the appropriate type. This is a keyhole version of the traversal\n   combinator \u003ccode\u003e\u003ca\u003einjTP\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "inj",
          "package": "Strafunski-StrategyLib",
          "signature": "(c -\u003e m c) -\u003e x -\u003e m x",
          "source": "src/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#inj",
          "type": "function"
        },
        "index": {
          "description": "Apply the argument function to the unique subterm of the input term Fail if the input term has more subterms or if the subterm is not of the appropriate type This is keyhole version of the traversal combinator injTP",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "inj",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "Strafunski-StrategyLib",
          "signature": "(c-\u003em c)-\u003ex-\u003em x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:inj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut all nodes of a certain type into a list.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "listify",
          "package": "Strafunski-StrategyLib",
          "signature": "x -\u003e [y]",
          "source": "src/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#listify",
          "type": "function"
        },
        "index": {
          "description": "Put all nodes of certain type into list",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "listify",
          "normalized": "a-\u003e[b]",
          "package": "Strafunski-StrategyLib",
          "signature": "x-\u003e[y]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:listify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "markHost",
          "package": "Strafunski-StrategyLib",
          "signature": "(f -\u003e Bool)-\u003e (h -\u003e h)-\u003e t-\u003e Maybe t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "markHost",
          "normalized": "(a-\u003eBool)-\u003e(b-\u003eb)-\u003ec-\u003eMaybe c",
          "package": "Strafunski-StrategyLib",
          "partial": "Host",
          "signature": "(f-\u003eBool)-\u003e(h-\u003eh)-\u003et-\u003eMaybe t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:markHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the identified focus.\n   Fails if no subterm can be replaced.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "replaceFocus",
          "package": "Strafunski-StrategyLib",
          "signature": "(t -\u003e Maybe t) -\u003e t' -\u003e Maybe t'",
          "source": "src/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#replaceFocus",
          "type": "function"
        },
        "index": {
          "description": "Replace the identified focus Fails if no subterm can be replaced",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "replaceFocus",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eMaybe b",
          "package": "Strafunski-StrategyLib",
          "partial": "Focus",
          "signature": "(t-\u003eMaybe t)-\u003et'-\u003eMaybe t'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:replaceFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect the identified focus.\n   Fails if no subterm can be selected.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "selectFocus",
          "package": "Strafunski-StrategyLib",
          "signature": "(f -\u003e Maybe f)-\u003e t-\u003e Maybe f",
          "type": "function"
        },
        "index": {
          "description": "Select the identified focus Fails if no subterm can be selected",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "selectFocus",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eMaybe a",
          "package": "Strafunski-StrategyLib",
          "partial": "Focus",
          "signature": "(f-\u003eMaybe f)-\u003et-\u003eMaybe f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:selectFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the host of the focused entity, i.e. a superterm of the\n   focussed subterm.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "selectHost",
          "package": "Strafunski-StrategyLib",
          "signature": "(f -\u003e Maybe f)-\u003e (h -\u003e Maybe h)-\u003e t-\u003e Maybe h",
          "type": "function"
        },
        "index": {
          "description": "Find the host of the focused entity i.e superterm of the focussed subterm",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "selectHost",
          "normalized": "(a-\u003eMaybe a)-\u003e(b-\u003eMaybe b)-\u003ec-\u003eMaybe b",
          "package": "Strafunski-StrategyLib",
          "partial": "Host",
          "signature": "(f-\u003eMaybe f)-\u003e(h-\u003eMaybe h)-\u003et-\u003eMaybe h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:selectHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut all nodes of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a list. This is a type-specialization\n   of \u003ccode\u003e\u003ca\u003elistify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "strings",
          "package": "Strafunski-StrategyLib",
          "signature": "x -\u003e [String]",
          "source": "src/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#strings",
          "type": "function"
        },
        "index": {
          "description": "Put all nodes of type String into list This is type-specialization of listify",
          "hierarchy": "Data Generics Strafunski StrategyLib KeyholeTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.KeyholeTheme",
          "name": "strings",
          "normalized": "a-\u003e[String]",
          "package": "Strafunski-StrategyLib",
          "signature": "x-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-KeyholeTheme.html#v:strings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module \n defines combinators to define metrics extractors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "MetricsTheme",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module defines combinators to define metrics extractors",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "MetricsTheme",
          "package": "Strafunski-StrategyLib",
          "partial": "Metrics Theme",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of metric names\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "MetricName",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#MetricName",
          "type": "type"
        },
        "index": {
          "description": "The type of metric names",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "MetricName",
          "package": "Strafunski-StrategyLib",
          "partial": "Metric Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#t:MetricName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of metrics\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "Metrics",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#Metrics",
          "type": "type"
        },
        "index": {
          "description": "The type of metrics",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "Metrics",
          "package": "Strafunski-StrategyLib",
          "partial": "Metrics",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#t:Metrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric algorithm for computing nesting depth\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "depthWith",
          "package": "Strafunski-StrategyLib",
          "signature": "TU () m-\u003e TU Int m",
          "type": "function"
        },
        "index": {
          "description": "Generic algorithm for computing nesting depth",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "depthWith",
          "normalized": "TU()a-\u003eTU Int a",
          "package": "Strafunski-StrategyLib",
          "partial": "With",
          "signature": "TU()m-\u003eTU Int m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:depthWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate \u003ccode\u003e\u003ca\u003eMetrics\u003c/a\u003e\u003c/code\u003e with\ninitTypeMetrics \t:: MetricName -\u003e a -\u003e Metrics\ninitTypeMetrics key _   =  incMetrics1 key initMetrics0\n\u003c/p\u003e\u003cp\u003eIncrement metric with the given name with the given value.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "incMetrics",
          "package": "Strafunski-StrategyLib",
          "signature": "MetricName -\u003e Integer -\u003e Metrics -\u003e Metrics",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#incMetrics",
          "type": "function"
        },
        "index": {
          "description": "Create Metrics with initTypeMetrics MetricName Metrics initTypeMetrics key incMetrics1 key initMetrics0 Increment metric with the given name with the given value",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "incMetrics",
          "normalized": "MetricName-\u003eInteger-\u003eMetrics-\u003eMetrics",
          "package": "Strafunski-StrategyLib",
          "partial": "Metrics",
          "signature": "MetricName-\u003eInteger-\u003eMetrics-\u003eMetrics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:incMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement metric with the given name by 1.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "incMetrics1",
          "package": "Strafunski-StrategyLib",
          "signature": "MetricName -\u003e Metrics -\u003e Metrics",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#incMetrics1",
          "type": "function"
        },
        "index": {
          "description": "Increment metric with the given name by",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "incMetrics1",
          "normalized": "MetricName-\u003eMetrics-\u003eMetrics",
          "package": "Strafunski-StrategyLib",
          "partial": "Metrics",
          "signature": "MetricName-\u003eMetrics-\u003eMetrics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:incMetrics1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate \u003ccode\u003e\u003ca\u003eMetrics\u003c/a\u003e\u003c/code\u003e with given initial value for all metrics.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "initMetrics",
          "package": "Strafunski-StrategyLib",
          "signature": "Integer -\u003e Metrics",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#initMetrics",
          "type": "function"
        },
        "index": {
          "description": "Create Metrics with given initial value for all metrics",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "initMetrics",
          "normalized": "Integer-\u003eMetrics",
          "package": "Strafunski-StrategyLib",
          "partial": "Metrics",
          "signature": "Integer-\u003eMetrics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:initMetrics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate \u003ccode\u003e\u003ca\u003eMetrics\u003c/a\u003e\u003c/code\u003e with 0 as initial value for all metrics.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "initMetrics0",
          "package": "Strafunski-StrategyLib",
          "signature": "Metrics",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#initMetrics0",
          "type": "function"
        },
        "index": {
          "description": "Create Metrics with as initial value for all metrics",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "initMetrics0",
          "package": "Strafunski-StrategyLib",
          "partial": "Metrics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:initMetrics0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint value of metric with the given name.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "putMetricLn",
          "package": "Strafunski-StrategyLib",
          "signature": "MetricName -\u003e Metrics -\u003e IO ()",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#putMetricLn",
          "type": "function"
        },
        "index": {
          "description": "Print value of metric with the given name",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "putMetricLn",
          "normalized": "MetricName-\u003eMetrics-\u003eIO()",
          "package": "Strafunski-StrategyLib",
          "partial": "Metric Ln",
          "signature": "MetricName-\u003eMetrics-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:putMetricLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditionally collect type-based metrics.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "typeMetric",
          "package": "Strafunski-StrategyLib",
          "signature": "TU Metrics m-\u003e (MetricName, a -\u003e ())-\u003e TU Metrics m",
          "type": "function"
        },
        "index": {
          "description": "Additionally collect type-based metrics",
          "hierarchy": "Data Generics Strafunski StrategyLib MetricsTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.MetricsTheme",
          "name": "typeMetric",
          "normalized": "TU Metrics a-\u003e(MetricName,b-\u003e())-\u003eTU Metrics a",
          "package": "Strafunski-StrategyLib",
          "partial": "Metric",
          "signature": "TU Metrics m-\u003e(MetricName,a-\u003e())-\u003eTU Metrics m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MetricsTheme.html#v:typeMetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "StrategyPrimitives",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "StrategyPrimitives",
          "package": "Strafunski-StrategyLib",
          "partial": "Strategy Primitives",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "TP",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#TP",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "TP",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#t:TP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "TU",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#TU",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "TU",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#t:TU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "Term",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-TermRep.html#Term",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "Term",
          "package": "Strafunski-StrategyLib",
          "partial": "Term",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "adhocTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e (t -\u003e m t) -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#adhocTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "adhocTP",
          "normalized": "TP a-\u003e(b-\u003ea b)-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003e(t-\u003em t)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:adhocTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "adhocTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e (t -\u003e m a) -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#adhocTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "adhocTU",
          "normalized": "TU a b-\u003e(c-\u003eb a)-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU a m-\u003e(t-\u003em a)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:adhocTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "allTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#allTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "allTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:allTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "allTU",
          "package": "Strafunski-StrategyLib",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#allTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "allTU",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:allTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "allTU'",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#allTU%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "allTU'",
          "normalized": "TU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU'",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:allTU-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "anyTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#anyTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "anyTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:anyTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "anyTU",
          "package": "Strafunski-StrategyLib",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#anyTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "anyTU",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:anyTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "anyTU'",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#anyTU%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "anyTU'",
          "normalized": "TU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU'",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:anyTU-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "applyTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e x -\u003e m x",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#applyTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "applyTP",
          "normalized": "TP a-\u003eb-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003ex-\u003em x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:applyTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "applyTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e x -\u003e m a",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#applyTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "applyTU",
          "normalized": "TU a b-\u003ec-\u003eb a",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU a m-\u003ex-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:applyTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "choiceTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#choiceTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "choiceTP",
          "normalized": "TP a-\u003eTP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:choiceTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "choiceTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#choiceTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "choiceTU",
          "normalized": "TU a b-\u003eTU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU a m-\u003eTU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:choiceTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "injTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#injTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "injTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:injTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "mchoicesTP",
          "package": "Strafunski-StrategyLib",
          "signature": "[TP (t m)] -\u003e TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#mchoicesTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "mchoicesTP",
          "normalized": "[TP(a b)]-\u003eTP b-\u003eTP b",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "[TP(t m)]-\u003eTP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:mchoicesTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "mchoicesTU",
          "package": "Strafunski-StrategyLib",
          "signature": "[TU a (t m)] -\u003e TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#mchoicesTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "mchoicesTU",
          "normalized": "[TU a(b c)]-\u003eTU a c-\u003eTU a c",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "[TU a(t m)]-\u003eTU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:mchoicesTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "msubstTP",
          "package": "Strafunski-StrategyLib",
          "signature": "(forall t.  m t -\u003e m' t) -\u003e TP m -\u003e TP m'",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#msubstTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "msubstTP",
          "normalized": "(a b c d-\u003ee d)-\u003eTP c-\u003eTP e",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "(forall t. m t-\u003em' t)-\u003eTP m-\u003eTP m'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:msubstTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "msubstTU",
          "package": "Strafunski-StrategyLib",
          "signature": "(m a -\u003e m' a) -\u003e TU a m -\u003e TU a m'",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#msubstTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "msubstTU",
          "normalized": "(a b-\u003ec b)-\u003eTU b a-\u003eTU b c",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "(m a-\u003em' a)-\u003eTU a m-\u003eTU a m'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:msubstTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "oneTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#oneTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "oneTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:oneTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "oneTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#oneTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "oneTU",
          "normalized": "TU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:oneTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "paraTP",
          "package": "Strafunski-StrategyLib",
          "signature": "(forall t.  t -\u003e m t) -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#paraTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "paraTP",
          "normalized": "(a b c-\u003ed c)-\u003eTP d",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "(forall t. t-\u003em t)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:paraTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "paraTU",
          "package": "Strafunski-StrategyLib",
          "signature": "(forall t.  t -\u003e m a) -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#paraTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "paraTU",
          "normalized": "(a b c-\u003ed e)-\u003eTU e d",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "(forall t. t-\u003em a)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:paraTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "passTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e (a -\u003e TP m) -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#passTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "passTP",
          "normalized": "TU a b-\u003e(a-\u003eTP b)-\u003eTP b",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TU a m-\u003e(a-\u003eTP m)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:passTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "passTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e (a -\u003e TU b m) -\u003e TU b m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#passTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "passTU",
          "normalized": "TU a b-\u003e(a-\u003eTU c b)-\u003eTU c b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU a m-\u003e(a-\u003eTU b m)-\u003eTU b m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:passTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "seqTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#seqTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "seqTP",
          "normalized": "TP a-\u003eTP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:seqTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "seqTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#seqTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "seqTU",
          "normalized": "TP a-\u003eTU b a-\u003eTU b a",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TP m-\u003eTU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:seqTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "someTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#someTP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "someTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:someTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "someTU",
          "package": "Strafunski-StrategyLib",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#someTU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "someTU",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:someTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "someTU'",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#someTU%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving StrategyPrimitives",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.StrategyPrimitives",
          "name": "someTU'",
          "normalized": "TU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU'",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-StrategyPrimitives.html#v:someTU-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.TermRep",
          "name": "TermRep",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-TermRep.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving TermRep",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.TermRep",
          "name": "TermRep",
          "package": "Strafunski-StrategyLib",
          "partial": "Term Rep",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-TermRep.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.TermRep",
          "name": "Term",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-Models-Deriving-TermRep.html#Term",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib Models Deriving TermRep",
          "module": "Data.Generics.Strafunski.StrategyLib.Models.Deriving.TermRep",
          "name": "Term",
          "package": "Strafunski-StrategyLib",
          "partial": "Term",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-Models-Deriving-TermRep.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module\n defines auxilliary monadic functions, some of which serve as parametric\n polymorphic prototypes for actual strategy combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "MonadicFunctions",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module defines auxilliary monadic functions some of which serve as parametric polymorphic prototypes for actual strategy combinators",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "MonadicFunctions",
          "package": "Strafunski-StrategyLib",
          "partial": "Monadic Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity type constructor.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "Id",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#Id",
          "type": "newtype"
        },
        "index": {
          "description": "Identity type constructor",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "Id",
          "package": "Strafunski-StrategyLib",
          "partial": "Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "Id",
          "package": "Strafunski-StrategyLib",
          "signature": "Id a",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "Id",
          "package": "Strafunski-StrategyLib",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType guard described by the argument type of a function.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "argtype",
          "package": "Strafunski-StrategyLib",
          "signature": "(x -\u003e y) -\u003e x -\u003e m ()",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#argtype",
          "type": "function"
        },
        "index": {
          "description": "Type guard described by the argument type of function",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "argtype",
          "normalized": "(a-\u003eb)-\u003ea-\u003ec()",
          "package": "Strafunski-StrategyLib",
          "signature": "(x-\u003ey)-\u003ex-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:argtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA kind of monadic conditional.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "ifM",
          "package": "Strafunski-StrategyLib",
          "signature": "m a -\u003e (a -\u003e m c) -\u003e m c -\u003e m c",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#ifM",
          "type": "function"
        },
        "index": {
          "description": "kind of monadic conditional",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "ifM",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c-\u003ea c",
          "package": "Strafunski-StrategyLib",
          "signature": "m a-\u003e(a-\u003em c)-\u003em c-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:ifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoice combinator for monadic functions\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "mchoice",
          "package": "Strafunski-StrategyLib",
          "signature": "(a -\u003e m b) -\u003e (a -\u003e m b) -\u003e a -\u003e m b",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#mchoice",
          "type": "function"
        },
        "index": {
          "description": "Choice combinator for monadic functions",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "mchoice",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003eb c)-\u003ea-\u003eb c",
          "package": "Strafunski-StrategyLib",
          "signature": "(a-\u003em b)-\u003e(a-\u003em b)-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:mchoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential composition with value passing; a kind of monadic let.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "mlet",
          "package": "Strafunski-StrategyLib",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e a -\u003e m c) -\u003e a -\u003e m c",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#mlet",
          "type": "function"
        },
        "index": {
          "description": "Sequential composition with value passing kind of monadic let",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "mlet",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ea-\u003eb d)-\u003ea-\u003eb d",
          "package": "Strafunski-StrategyLib",
          "signature": "(a-\u003em b)-\u003e(b-\u003ea-\u003em c)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:mlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential composition of monadic functions\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "mseq",
          "package": "Strafunski-StrategyLib",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#mseq",
          "type": "function"
        },
        "index": {
          "description": "Sequential composition of monadic functions",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "mseq",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
          "package": "Strafunski-StrategyLib",
          "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:mseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce success. If the argument value corresponds to failure, \n   a run-time error will occur.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "succeed",
          "package": "Strafunski-StrategyLib",
          "signature": "Maybe x -\u003e x",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#succeed",
          "type": "function"
        },
        "index": {
          "description": "Force success If the argument value corresponds to failure run-time error will occur",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "succeed",
          "normalized": "Maybe a-\u003ea",
          "package": "Strafunski-StrategyLib",
          "signature": "Maybe x-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:succeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap identity type constructor\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "unId",
          "package": "Strafunski-StrategyLib",
          "signature": "Id a -\u003e a",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#unId",
          "type": "function"
        },
        "index": {
          "description": "Unwrap identity type constructor",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "unId",
          "normalized": "Id a-\u003ea",
          "package": "Strafunski-StrategyLib",
          "partial": "Id",
          "signature": "Id a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:unId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType guard described by a type of a value.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "valtype",
          "package": "Strafunski-StrategyLib",
          "signature": "x -\u003e x -\u003e m ()",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#valtype",
          "type": "function"
        },
        "index": {
          "description": "Type guard described by type of value",
          "hierarchy": "Data Generics Strafunski StrategyLib MonadicFunctions",
          "module": "Data.Generics.Strafunski.StrategyLib.MonadicFunctions",
          "name": "valtype",
          "normalized": "a-\u003ea-\u003eb()",
          "package": "Strafunski-StrategyLib",
          "signature": "x-\u003ex-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MonadicFunctions.html#v:valtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module\n defines additional instances of the Monoid class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.MoreMonoids",
          "name": "MoreMonoids",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-MoreMonoids.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module defines additional instances of the Monoid class",
          "hierarchy": "Data Generics Strafunski StrategyLib MoreMonoids",
          "module": "Data.Generics.Strafunski.StrategyLib.MoreMonoids",
          "name": "MoreMonoids",
          "package": "Strafunski-StrategyLib",
          "partial": "More Monoids",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-MoreMonoids.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module\n provides algorithms to collect names and their types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "NameTheme",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-NameTheme.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module provides algorithms to collect names and their types",
          "hierarchy": "Data Generics Strafunski StrategyLib NameTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "NameTheme",
          "package": "Strafunski-StrategyLib",
          "partial": "Name Theme",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-NameTheme.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulate declarations for focus \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "boundTypedNames",
          "package": "Strafunski-StrategyLib",
          "signature": "TU [(name, tpe)] Identity -\u003e (f -\u003e Maybe f) -\u003e t -\u003e Maybe ([(name, tpe)], f)",
          "source": "src/Data-Generics-Strafunski-StrategyLib-NameTheme.html#boundTypedNames",
          "type": "function"
        },
        "index": {
          "description": "Accumulate declarations for focus",
          "hierarchy": "Data Generics Strafunski StrategyLib NameTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "boundTypedNames",
          "normalized": "TU[(a,b)]Identity-\u003e(c-\u003eMaybe c)-\u003ed-\u003eMaybe([(a,b)],c)",
          "package": "Strafunski-StrategyLib",
          "partial": "Typed Names",
          "signature": "TU[(name,tpe)]Identity-\u003e(f-\u003eMaybe f)-\u003et-\u003eMaybe([(name,tpe)],f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-NameTheme.html#v:boundTypedNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric free name analysis algorithm (without types)\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "freeNames",
          "package": "Strafunski-StrategyLib",
          "signature": "TU [(name, tpe)] Identity-\u003e TU [name] Identity-\u003e t-\u003e [name]",
          "type": "function"
        },
        "index": {
          "description": "Generic free name analysis algorithm without types",
          "hierarchy": "Data Generics Strafunski StrategyLib NameTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "freeNames",
          "normalized": "TU[(a,b)]Identity-\u003eTU[a]Identity-\u003ec-\u003e[a]",
          "package": "Strafunski-StrategyLib",
          "partial": "Names",
          "signature": "TU[(name,tpe)]Identity-\u003eTU[name]Identity-\u003et-\u003e[name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-NameTheme.html#v:freeNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric free name analysis algorithm with types\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "freeTypedNames",
          "package": "Strafunski-StrategyLib",
          "signature": "TU [(name, tpe)] Identity-\u003e TU [name] Identity-\u003e [(name, tpe)]-\u003e t-\u003e [(name, tpe)]",
          "type": "function"
        },
        "index": {
          "description": "Generic free name analysis algorithm with types",
          "hierarchy": "Data Generics Strafunski StrategyLib NameTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.NameTheme",
          "name": "freeTypedNames",
          "normalized": "TU[(a,b)]Identity-\u003eTU[a]Identity-\u003e[(a,b)]-\u003ec-\u003e[(a,b)]",
          "package": "Strafunski-StrategyLib",
          "partial": "Typed Names",
          "signature": "TU[(name,tpe)]Identity-\u003eTU[name]Identity-\u003e[(name,tpe)]-\u003et-\u003e[(name,tpe)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-NameTheme.html#v:freeTypedNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module\n overloads basic combinators to enable uniform treatment of TU and TP\n strategies. The overloading scheme is motivated in the \n \u003ca\u003e... Polymorphic Symphony\u003c/a\u003e paper. The names in the present module\n deviate from the paper in that they are postfixed by an \u003ca\u003e...S\u003c/a\u003e \n in order to rule out name clashes and to avoid labour-intensive\n resolution. The class constraints in this module seem to be outrageous\n but this has to do with a type inferencing bug for class hierarchies\n in hugs. This bug is removed in the October 2002 release.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "OverloadingTheme",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module overloads basic combinators to enable uniform treatment of TU and TP strategies The overloading scheme is motivated in the Polymorphic Symphony paper The names in the present module deviate from the paper in that they are postfixed by an in order to rule out name clashes and to avoid labour-intensive resolution The class constraints in this module seem to be outrageous but this has to do with type inferencing bug for class hierarchies in hugs This bug is removed in the October release",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "OverloadingTheme",
          "package": "Strafunski-StrategyLib",
          "partial": "Overloading Theme",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverload completely unconstrained strategy combinators \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "Strategy",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#Strategy",
          "type": "class"
        },
        "index": {
          "description": "Overload completely unconstrained strategy combinators",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "Strategy",
          "package": "Strafunski-StrategyLib",
          "partial": "Strategy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#t:Strategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverload apply and adhoc combinators\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "StrategyApply",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#StrategyApply",
          "type": "class"
        },
        "index": {
          "description": "Overload apply and adhoc combinators",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "StrategyApply",
          "package": "Strafunski-StrategyLib",
          "partial": "Strategy Apply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#t:StrategyApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverload msubst combinator (Experimental)\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "StrategyMSubst",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#StrategyMSubst",
          "type": "class"
        },
        "index": {
          "description": "Overload msubst combinator Experimental",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "StrategyMSubst",
          "package": "Strafunski-StrategyLib",
          "partial": "Strategy MSubst",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#t:StrategyMSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverload basic combinators which might involve a monoid\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "StrategyMonoid",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#StrategyMonoid",
          "type": "class"
        },
        "index": {
          "description": "Overload basic combinators which might involve monoid",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "StrategyMonoid",
          "package": "Strafunski-StrategyLib",
          "partial": "Strategy Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#t:StrategyMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverload basic combinators which involve MonadPlus\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "StrategyPlus",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#StrategyPlus",
          "type": "class"
        },
        "index": {
          "description": "Overload basic combinators which involve MonadPlus",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "StrategyPlus",
          "package": "Strafunski-StrategyLib",
          "partial": "Strategy Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#t:StrategyPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDynamic type case\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "adhocS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e (t -\u003e m x) -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#adhocS",
          "type": "method"
        },
        "index": {
          "description": "Dynamic type case",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "adhocS",
          "normalized": "a b-\u003e(c-\u003eb d)-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003e(t-\u003em x)-\u003es m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:adhocS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush down to all children             \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "allS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#allS",
          "type": "method"
        },
        "index": {
          "description": "Push down to all children",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "allS",
          "normalized": "a b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003es m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:allS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrategy application\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "applyS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e t -\u003e m x",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#applyS",
          "type": "method"
        },
        "index": {
          "description": "Strategy application",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "applyS",
          "normalized": "a b-\u003ec-\u003eb d",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003et-\u003em x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:applyS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoice             \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "choiceS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#choiceS",
          "type": "method"
        },
        "index": {
          "description": "Choice",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "choiceS",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003es m-\u003es m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:choiceS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine sequentially        \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "combS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#combS",
          "type": "method"
        },
        "index": {
          "description": "Combine sequentially",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "combS",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003es m-\u003es m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:combS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFailure\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "failS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#failS",
          "type": "method"
        },
        "index": {
          "description": "Failure",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "failS",
          "package": "Strafunski-StrategyLib",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:failS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverloaded lifting with failure \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "monoS",
          "package": "Strafunski-StrategyLib",
          "signature": "(t -\u003e m x) -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#monoS",
          "type": "function"
        },
        "index": {
          "description": "Overloaded lifting with failure",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "monoS",
          "normalized": "(a-\u003eb c)-\u003ed b",
          "package": "Strafunski-StrategyLib",
          "signature": "(t-\u003em x)-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:monoS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitute one monad for another\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "msubstS",
          "package": "Strafunski-StrategyLib",
          "signature": "(forall t.  m t -\u003e m' t) -\u003e s m -\u003e s m'",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#msubstS",
          "type": "method"
        },
        "index": {
          "description": "Substitute one monad for another",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "msubstS",
          "normalized": "(a b c d-\u003ee d)-\u003ef c-\u003ef e",
          "package": "Strafunski-StrategyLib",
          "signature": "(forall t. m t-\u003em' t)-\u003es m-\u003es m'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:msubstS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush down to a single child\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "oneS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#oneS",
          "type": "method"
        },
        "index": {
          "description": "Push down to single child",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "oneS",
          "normalized": "a b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003es m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:oneS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential composition with value passing        \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "passS",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e (a -\u003e s m) -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#passS",
          "type": "method"
        },
        "index": {
          "description": "Sequential composition with value passing",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "passS",
          "normalized": "TU a b-\u003e(a-\u003ec b)-\u003ec b",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m-\u003e(a-\u003es m)-\u003es m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:passS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential composition          \n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "seqS",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#seqS",
          "type": "method"
        },
        "index": {
          "description": "Sequential composition",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "seqS",
          "normalized": "TP a-\u003eb a-\u003eb a",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m-\u003es m-\u003es m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:seqS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity (success)\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "skipS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#skipS",
          "type": "method"
        },
        "index": {
          "description": "Identity success",
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "skipS",
          "package": "Strafunski-StrategyLib",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:skipS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "voidS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e TU () m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#voidS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib OverloadingTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.OverloadingTheme",
          "name": "voidS",
          "normalized": "a b-\u003eTU()b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003eTU()m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-OverloadingTheme.html#v:voidS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. In this module, we\n define path combinator to constrain selection and transformation of nodes or\n subtrees by path conditions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "PathTheme",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-PathTheme.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal In this module we define path combinator to constrain selection and transformation of nodes or subtrees by path conditions",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "PathTheme",
          "package": "Strafunski-StrategyLib",
          "partial": "Path Theme",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect or transform a node above a node where a condition holds. The\n   distance between guard and application node is minimized.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "aboveS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e TU () m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-PathTheme.html#aboveS",
          "type": "function"
        },
        "index": {
          "description": "Select or transform node above node where condition holds The distance between guard and application node is minimized",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "aboveS",
          "normalized": "a b-\u003eTU()b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003eTU()m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:aboveS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation strictly above a node where a condition holds.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "aboveTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TU () m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-PathTheme.html#aboveTP",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation strictly above node where condition holds",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "aboveTP",
          "normalized": "TP a-\u003eTU()a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTU()m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:aboveTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect or transform a node above or at a node where a condition holds.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "aboveeqS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e TU () m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-PathTheme.html#aboveeqS",
          "type": "function"
        },
        "index": {
          "description": "Select or transform node above or at node where condition holds",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "aboveeqS",
          "normalized": "a b-\u003eTU()b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003eTU()m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:aboveeqS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation above or at a node where a condition holds.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "aboveeqTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TU () m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-PathTheme.html#aboveeqTP",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation above or at node where condition holds",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "aboveeqTP",
          "normalized": "TP a-\u003eTU()a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTU()m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:aboveeqTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect or transform a node below a node where a condition holds.\n We find the top-most node which admits selection or transformation\n below the top-most node which meets the condition. Thus, the\n distance between guard and application node is minimized.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "belowS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e TU () m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-PathTheme.html#belowS",
          "type": "function"
        },
        "index": {
          "description": "Select or transform node below node where condition holds We find the top-most node which admits selection or transformation below the top-most node which meets the condition Thus the distance between guard and application node is minimized",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "belowS",
          "normalized": "a b-\u003eTU()b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003eTU()m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:belowS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation strictly below a node where a condition holds.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "belowTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TU () m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-PathTheme.html#belowTP",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation strictly below node where condition holds",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "belowTP",
          "normalized": "TP a-\u003eTU()a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTU()m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:belowTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect or transform a node below or at a node where a condition holds.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "beloweqS",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e TU () m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-PathTheme.html#beloweqS",
          "type": "function"
        },
        "index": {
          "description": "Select or transform node below or at node where condition holds",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "beloweqS",
          "normalized": "a b-\u003eTU()b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003eTU()m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:beloweqS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation below or at a node where a condition holds.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "beloweqTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TU () m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-PathTheme.html#beloweqTP",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation below or at node where condition holds",
          "hierarchy": "Data Generics Strafunski StrategyLib PathTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.PathTheme",
          "name": "beloweqTP",
          "normalized": "TP a-\u003eTU()a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTU()m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-PathTheme.html#v:beloweqTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module \n defines generic refactoring functionality. See the paper \u003ca\u003eTowards\n Generic Refactoring\u003c/a\u003e by Ralf Laemmel. See also \n generic-refactoring in the examples directory.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "RefactoringTheme",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module defines generic refactoring functionality See the paper Towards Generic Refactoring by Ralf Laemmel See also generic-refactoring in the examples directory",
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "RefactoringTheme",
          "package": "Strafunski-StrategyLib",
          "partial": "Refactoring Theme",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of abstractions\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "Abstraction",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#Abstraction",
          "type": "class"
        },
        "index": {
          "description": "Class of abstractions",
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "Abstraction",
          "package": "Strafunski-StrategyLib",
          "partial": "Abstraction",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#t:Abstraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "constrAbstr",
          "package": "Strafunski-StrategyLib",
          "signature": "name -\u003e [(name, tpe)] -\u003e apply -\u003e Maybe abstr",
          "source": "src/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#constrAbstr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "constrAbstr",
          "normalized": "a-\u003e[(a,b)]-\u003ec-\u003eMaybe d",
          "package": "Strafunski-StrategyLib",
          "partial": "Abstr",
          "signature": "name-\u003e[(name,tpe)]-\u003eapply-\u003eMaybe abstr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:constrAbstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "constrApply",
          "package": "Strafunski-StrategyLib",
          "signature": "name -\u003e [(name, tpe)] -\u003e Maybe apply",
          "source": "src/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#constrApply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "constrApply",
          "normalized": "a-\u003e[(a,b)]-\u003eMaybe c",
          "package": "Strafunski-StrategyLib",
          "partial": "Apply",
          "signature": "name-\u003e[(name,tpe)]-\u003eMaybe apply",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:constrApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an unused abstraction\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "eliminate",
          "package": "Strafunski-StrategyLib",
          "signature": "TU [(name, tpe)] Identity-\u003e TU [name] Identity-\u003e (abstr -\u003e Maybe abstr)-\u003e prog-\u003e Maybe prog",
          "type": "function"
        },
        "index": {
          "description": "Remove an unused abstraction",
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "eliminate",
          "normalized": "TU[(a,b)]Identity-\u003eTU[a]Identity-\u003e(c-\u003eMaybe c)-\u003ed-\u003eMaybe d",
          "package": "Strafunski-StrategyLib",
          "signature": "TU[(name,tpe)]Identity-\u003eTU[name]Identity-\u003e(abstr-\u003eMaybe abstr)-\u003eprog-\u003eMaybe prog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:eliminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract an abstraction\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "extract",
          "package": "Strafunski-StrategyLib",
          "signature": "TU [(name, tpe)] Identity-\u003e TU [name] Identity-\u003e (apply -\u003e Maybe apply)-\u003e ([abstr] -\u003e [abstr])-\u003e ([abstr] -\u003e Maybe [abstr])-\u003e ([(name, tpe)] -\u003e apply -\u003e Bool)-\u003e name-\u003e prog-\u003e Maybe prog",
          "type": "function"
        },
        "index": {
          "description": "Extract an abstraction",
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "extract",
          "normalized": "TU[(a,b)]Identity-\u003eTU[a]Identity-\u003e(c-\u003eMaybe c)-\u003e([d]-\u003e[d])-\u003e([d]-\u003eMaybe[d])-\u003e([(a,b)]-\u003ec-\u003eBool)-\u003ea-\u003ee-\u003eMaybe e",
          "package": "Strafunski-StrategyLib",
          "signature": "TU[(name,tpe)]Identity-\u003eTU[name]Identity-\u003e(apply-\u003eMaybe apply)-\u003e([abstr]-\u003e[abstr])-\u003e([abstr]-\u003eMaybe[abstr])-\u003e([(name,tpe)]-\u003eapply-\u003eBool)-\u003ename-\u003eprog-\u003eMaybe prog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "getAbstrBody",
          "package": "Strafunski-StrategyLib",
          "signature": "abstr -\u003e Maybe apply",
          "source": "src/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#getAbstrBody",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "getAbstrBody",
          "normalized": "a-\u003eMaybe b",
          "package": "Strafunski-StrategyLib",
          "partial": "Abstr Body",
          "signature": "abstr-\u003eMaybe apply",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:getAbstrBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "getAbstrName",
          "package": "Strafunski-StrategyLib",
          "signature": "abstr -\u003e Maybe name",
          "source": "src/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#getAbstrName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "getAbstrName",
          "normalized": "a-\u003eMaybe b",
          "package": "Strafunski-StrategyLib",
          "partial": "Abstr Name",
          "signature": "abstr-\u003eMaybe name",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:getAbstrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "getAbstrParas",
          "package": "Strafunski-StrategyLib",
          "signature": "abstr -\u003e Maybe [(name, tpe)]",
          "source": "src/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#getAbstrParas",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "getAbstrParas",
          "normalized": "a-\u003eMaybe[(b,c)]",
          "package": "Strafunski-StrategyLib",
          "partial": "Abstr Paras",
          "signature": "abstr-\u003eMaybe[(name,tpe)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:getAbstrParas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "getApplyName",
          "package": "Strafunski-StrategyLib",
          "signature": "apply -\u003e Maybe name",
          "source": "src/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#getApplyName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "getApplyName",
          "normalized": "a-\u003eMaybe b",
          "package": "Strafunski-StrategyLib",
          "partial": "Apply Name",
          "signature": "apply-\u003eMaybe name",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:getApplyName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "getApplyParas",
          "package": "Strafunski-StrategyLib",
          "signature": "apply -\u003e Maybe [(name, tpe)]",
          "source": "src/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#getApplyParas",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "getApplyParas",
          "normalized": "a-\u003eMaybe[(b,c)]",
          "package": "Strafunski-StrategyLib",
          "partial": "Apply Paras",
          "signature": "apply-\u003eMaybe[(name,tpe)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:getApplyParas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new abstraction\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "introduce",
          "package": "Strafunski-StrategyLib",
          "signature": "TU [(name, tpe)] Identity-\u003e TU [name] Identity-\u003e ([abstr] -\u003e Maybe [abstr])-\u003e abstr-\u003e prog-\u003e Maybe prog",
          "type": "function"
        },
        "index": {
          "description": "Insert new abstraction",
          "hierarchy": "Data Generics Strafunski StrategyLib RefactoringTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.RefactoringTheme",
          "name": "introduce",
          "normalized": "TU[(a,b)]Identity-\u003eTU[a]Identity-\u003e([c]-\u003eMaybe[c])-\u003ec-\u003ed-\u003eMaybe d",
          "package": "Strafunski-StrategyLib",
          "signature": "TU[(name,tpe)]Identity-\u003eTU[name]Identity-\u003e([abstr]-\u003eMaybe[abstr])-\u003eabstr-\u003eprog-\u003eMaybe prog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-RefactoringTheme.html#v:introduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module \n indicates how some strategy combinators could be denoted via infix\n combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "StrategyInfix",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module indicates how some strategy combinators could be denoted via infix combinators",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyInfix",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "StrategyInfix",
          "package": "Strafunski-StrategyLib",
          "partial": "Strategy Infix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDynamic type-case\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "(-+)",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e (t -\u003e m x) -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#-%2B",
          "type": "function"
        },
        "index": {
          "description": "Dynamic type-case",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyInfix",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "(-+) -+",
          "normalized": "a b-\u003e(c-\u003eb d)-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003e(t-\u003em x)-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#v:-45--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential composition\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "(\u003e\u003e\u003e)",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Sequential composition",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyInfix",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "TP a-\u003eb a-\u003eb a",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential composition, ignoring value from first strategy\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "(\u003e\u003e\u003e-)",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#%3E%3E%3E-",
          "type": "function"
        },
        "index": {
          "description": "Sequential composition ignoring value from first strategy",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyInfix",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "(\u003e\u003e\u003e-) \u003e\u003e\u003e-",
          "normalized": "TU a b-\u003ec b-\u003ec b",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m-\u003es m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#v:-62--62--62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential composition with value passing\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "(\u003e\u003e\u003e=)",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e (a -\u003e s m) -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#%3E%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "Sequential composition with value passing",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyInfix",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyInfix",
          "name": "(\u003e\u003e\u003e=) \u003e\u003e\u003e=",
          "normalized": "TU a b-\u003e(a-\u003ec b)-\u003ec b",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m-\u003e(a-\u003es m)-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyInfix.html#v:-62--62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal.  This is the\n top-level module of the library. One only needs to import this module to\n use the entire library. Some base modules are exported as well because\n they are commonly used.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "StrategyLib",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyLib.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This is the top-level module of the library One only needs to import this module to use the entire library Some base modules are exported as well because they are commonly used",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyLib",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "StrategyLib",
          "package": "Strafunski-StrategyLib",
          "partial": "Strategy Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity functor and monad.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "Identity",
          "package": "Strafunski-StrategyLib",
          "type": "newtype"
        },
        "index": {
          "description": "Identity functor and monad",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyLib",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "Identity",
          "package": "Strafunski-StrategyLib",
          "partial": "Identity",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyLib.html#t:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state monad parameterized by the type \u003ccode\u003es\u003c/code\u003e of the state to carry.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "State",
          "package": "Strafunski-StrategyLib",
          "type": "type"
        },
        "index": {
          "description": "state monad parameterized by the type of the state to carry The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyLib",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "State",
          "package": "Strafunski-StrategyLib",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyLib.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e - The state.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "StateT",
          "package": "Strafunski-StrategyLib",
          "type": "newtype"
        },
        "index": {
          "description": "state transformer monad parameterized by The state The inner monad The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyLib",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "StateT",
          "package": "Strafunski-StrategyLib",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyLib.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "Identity",
          "package": "Strafunski-StrategyLib",
          "signature": "Identity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyLib",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "Identity",
          "package": "Strafunski-StrategyLib",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyLib.html#v:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "StateT",
          "package": "Strafunski-StrategyLib",
          "signature": "StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyLib",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "StateT",
          "package": "Strafunski-StrategyLib",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyLib.html#v:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "runIdentity",
          "package": "Strafunski-StrategyLib",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyLib",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "runIdentity",
          "package": "Strafunski-StrategyLib",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyLib.html#v:runIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "runStateT",
          "package": "Strafunski-StrategyLib",
          "signature": "s -\u003e m (a, s)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyLib",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyLib",
          "name": "runStateT",
          "normalized": "a-\u003eb(c,a)",
          "package": "Strafunski-StrategyLib",
          "partial": "State",
          "signature": "s-\u003em(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyLib.html#v:runStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module\n is basically a wrapper for the strategy primitives plus some extra\n basic strategy combinators that can be defined immediately in terms\n of the primitive ones.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "StrategyPrelude",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module is basically wrapper for the strategy primitives plus some extra basic strategy combinators that can be defined immediately in terms of the primitive ones",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "StrategyPrelude",
          "package": "Strafunski-StrategyLib",
          "partial": "Strategy Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest for compound term, i.e. having at least one subterm.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "com",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#com",
          "type": "function"
        },
        "index": {
          "description": "Test for compound term i.e having at least one subterm",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "com",
          "package": "Strafunski-StrategyLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:com"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-unifying monadic constant strategy. Always performs the argument\n   computation \u003ccode\u003ea\u003c/code\u003e, independent of the incoming term. This is a monadic\n   variation of \u003ccode\u003e\u003ca\u003econstTU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "compTU",
          "package": "Strafunski-StrategyLib",
          "signature": "m a -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#compTU",
          "type": "function"
        },
        "index": {
          "description": "Type-unifying monadic constant strategy Always performs the argument computation independent of the incoming term This is monadic variation of constTU",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "compTU",
          "normalized": "a b-\u003eTU b a",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "m a-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:compTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest for constant term, i.e. having no subterms.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "con",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#con",
          "type": "function"
        },
        "index": {
          "description": "Test for constant term i.e having no subterms",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "con",
          "package": "Strafunski-StrategyLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-unifying constant strategy. Always returns the argument value \u003ccode\u003ea\u003c/code\u003e,\n   independent of the incoming term.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "constTU",
          "package": "Strafunski-StrategyLib",
          "signature": "a -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#constTU",
          "type": "function"
        },
        "index": {
          "description": "Type-unifying constant strategy Always returns the argument value independent of the incoming term",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "constTU",
          "normalized": "a-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "a-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:constTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential ccomposition of monomorphic function and type-unifying strategy.\n   In other words, after the type-unifying strategy \u003ccode\u003es\u003c/code\u003e has been applied, \n   the monomorphic function \u003ccode\u003ef\u003c/code\u003e is applied to the resulting value.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "dotTU",
          "package": "Strafunski-StrategyLib",
          "signature": "(a -\u003e b) -\u003e TU a m -\u003e TU b m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#dotTU",
          "type": "function"
        },
        "index": {
          "description": "Sequential ccomposition of monomorphic function and type-unifying strategy In other words after the type-unifying strategy has been applied the monomorphic function is applied to the resulting value",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "dotTU",
          "normalized": "(a-\u003eb)-\u003eTU a c-\u003eTU b c",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "(a-\u003eb)-\u003eTU a m-\u003eTU b m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:dotTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-preserving failure. Always fails, independent of the incoming\n   term. Uses \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e to model partiality.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "failTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#failTP",
          "type": "function"
        },
        "index": {
          "description": "Type-preserving failure Always fails independent of the incoming term Uses MonadPlus to model partiality",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "failTP",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:failTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-unifying failure. Always fails, independent of the incoming\n   term. Uses \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e to model partiality.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "failTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#failTU",
          "type": "function"
        },
        "index": {
          "description": "Type-unifying failure Always fails independent of the incoming term Uses MonadPlus to model partiality",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "failTU",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:failTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-preserving identity. Returns the incoming term without change.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "idTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#idTP",
          "type": "function"
        },
        "index": {
          "description": "Type-preserving identity Returns the incoming term without change",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "idTP",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:idTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the monomorphic, type-preserving argument function, if its \n   input type matches the input term's type. Otherwise, fail.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "monoTP",
          "package": "Strafunski-StrategyLib",
          "signature": "(a -\u003e m a) -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#monoTP",
          "type": "function"
        },
        "index": {
          "description": "Apply the monomorphic type-preserving argument function if its input type matches the input term type Otherwise fail",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "monoTP",
          "normalized": "(a-\u003eb a)-\u003eTP b",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "(a-\u003em a)-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:monoTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the monomorphic, type-unifying argument function, if its \n   input type matches the input term's type. Otherwise, fail.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "monoTU",
          "package": "Strafunski-StrategyLib",
          "signature": "(a -\u003e m b) -\u003e TU b m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#monoTU",
          "type": "function"
        },
        "index": {
          "description": "Apply the monomorphic type-unifying argument function if its input type matches the input term type Otherwise fail",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "monoTU",
          "normalized": "(a-\u003eb c)-\u003eTU c b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "(a-\u003em b)-\u003eTU b m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:monoTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel combination of two type-unifying strategies with a binary\n   combinator. In other words, the values resulting from applying the\n   type-unifying strategies are combined to a final value by applying\n   the combinator \u003ccode\u003eo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "op2TU",
          "package": "Strafunski-StrategyLib",
          "signature": "(a -\u003e b -\u003e c) -\u003e TU a m -\u003e TU b m -\u003e TU c m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#op2TU",
          "type": "function"
        },
        "index": {
          "description": "Parallel combination of two type-unifying strategies with binary combinator In other words the values resulting from applying the type-unifying strategies are combined to final value by applying the combinator",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "op2TU",
          "normalized": "(a-\u003eb-\u003ec)-\u003eTU a d-\u003eTU b d-\u003eTU c d",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "(a-\u003eb-\u003ec)-\u003eTU a m-\u003eTU b m-\u003eTU c m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:op2TU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce a type-preserving strategy to a type-unifying one that\n   ignores its result term and returns void, but retains its \n   monadic effects.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "voidTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TU () m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#voidTP",
          "type": "function"
        },
        "index": {
          "description": "Reduce type-preserving strategy to type-unifying one that ignores its result term and returns void but retains its monadic effects",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "voidTP",
          "normalized": "TP a-\u003eTU()a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTU()m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:voidTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce a type-unifying strategy to a type-unifying one that\n   ignores its result value and returns void, but retains its \n   monadic effects.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "voidTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU u m -\u003e TU () m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#voidTU",
          "type": "function"
        },
        "index": {
          "description": "Reduce type-unifying strategy to type-unifying one that ignores its result value and returns void but retains its monadic effects",
          "hierarchy": "Data Generics Strafunski StrategyLib StrategyPrelude",
          "module": "Data.Generics.Strafunski.StrategyLib.StrategyPrelude",
          "name": "voidTU",
          "normalized": "TU a b-\u003eTU()b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU u m-\u003eTU()m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-StrategyPrelude.html#v:voidTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of \u003ccode\u003eStrategyLib\u003c/code\u003e, a library of functional strategy\n combinators, including combinators for generic traversal. This module defines\n traversal schemes. Such schemes have formed the core of StrategyLib\n since its first release. The portfolio as it stands now captures part\n of the design in the paper \u003ca\u003e... Polymorphic Symphony\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "TraversalTheme",
          "package": "Strafunski-StrategyLib",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of StrategyLib library of functional strategy combinators including combinators for generic traversal This module defines traversal schemes Such schemes have formed the core of StrategyLib since its first release The portfolio as it stands now captures part of the design in the paper Polymorphic Symphony",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "TraversalTheme",
          "package": "Strafunski-StrategyLib",
          "partial": "Traversal Theme",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive completion of full type-preserving one-layer traverasal\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "all_recTU",
          "package": "Strafunski-StrategyLib",
          "signature": "(t -\u003e TU a m -\u003e TU a m)-\u003e t-\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "Recursive completion of full type-preserving one-layer traverasal",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "all_recTU",
          "normalized": "(a-\u003eTU b c-\u003eTU b c)-\u003ea-\u003eTU b c",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "(t-\u003eTU a m-\u003eTU a m)-\u003et-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:all_recTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eanyTP\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "anyTP'",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#anyTP%27",
          "type": "function"
        },
        "index": {
          "description": "Use anyTP instead",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "anyTP'",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP'",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:anyTP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-specialised version of \u003ccode\u003e\u003ca\u003ecrush\u003c/a\u003e\u003c/code\u003e, which works with lists instead of\n   any arbitrary monoid.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "collect",
          "package": "Strafunski-StrategyLib",
          "signature": "TU [a] m -\u003e TU [a] m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#collect",
          "type": "function"
        },
        "index": {
          "description": "Type-specialised version of crush which works with lists instead of any arbitrary monoid",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "collect",
          "normalized": "TU[a]b-\u003eTU[a]b",
          "package": "Strafunski-StrategyLib",
          "signature": "TU[a]m-\u003eTU[a]m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003efull_tdTU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "crush",
          "package": "Strafunski-StrategyLib",
          "signature": "TU u m -\u003e TU u m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#crush",
          "type": "function"
        },
        "index": {
          "description": "See full tdTU",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "crush",
          "normalized": "TU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "signature": "TU u m-\u003eTU u m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:crush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull type-preserving traversal in bottom-up order.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "full_buTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#full_buTP",
          "type": "function"
        },
        "index": {
          "description": "Full type-preserving traversal in bottom-up order",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "full_buTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:full_buTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull top-down traversal (overloaded between \u003ccode\u003e\u003ca\u003eTU\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTP\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "full_td",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#full_td",
          "type": "function"
        },
        "index": {
          "description": "Full top-down traversal overloaded between TU and TP",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "full_td",
          "normalized": "a b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:full_td"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull type-preserving traversal in top-down order.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "full_tdTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#full_tdTP",
          "type": "function"
        },
        "index": {
          "description": "Full type-preserving traversal in top-down order",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "full_tdTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:full_tdTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull type-unifying traversal in top-down order.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "full_tdTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#full_tdTU",
          "type": "function"
        },
        "index": {
          "description": "Full type-unifying traversal in top-down order",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "full_tdTU",
          "normalized": "TU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:full_tdTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-hit bottom-up traversal (overloaded between \u003ccode\u003e\u003ca\u003eTU\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTP\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_bu",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#once_bu",
          "type": "function"
        },
        "index": {
          "description": "One-hit bottom-up traversal overloaded between TU and TP",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_bu",
          "normalized": "a b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:once_bu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom-up type-preserving traversal that performs its argument\n   strategy at most once.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_buTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#once_buTP",
          "type": "function"
        },
        "index": {
          "description": "Bottom-up type-preserving traversal that performs its argument strategy at most once",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_buTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:once_buTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom-up type-unifying traversal that performs its argument\n   strategy at most once.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_buTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#once_buTU",
          "type": "function"
        },
        "index": {
          "description": "Bottom-up type-unifying traversal that performs its argument strategy at most once",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_buTU",
          "normalized": "TU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:once_buTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-hit top-down traversal with environment propagation \n   (overloaded between \u003ccode\u003e\u003ca\u003eTU\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTP\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_pe",
          "package": "Strafunski-StrategyLib",
          "signature": "(e -\u003e s m) -\u003e (e -\u003e TU e m) -\u003e e -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#once_pe",
          "type": "function"
        },
        "index": {
          "description": "One-hit top-down traversal with environment propagation overloaded between TU and TP",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_pe",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003eTU a c)-\u003ea-\u003eb c",
          "package": "Strafunski-StrategyLib",
          "signature": "(e-\u003es m)-\u003e(e-\u003eTU e m)-\u003ee-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:once_pe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-down type-unifying traversal with propagation of an environment.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_peTU",
          "package": "Strafunski-StrategyLib",
          "signature": "e-\u003e (e -\u003e TU e m)-\u003e (e -\u003e TU a m)-\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "Top-down type-unifying traversal with propagation of an environment",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_peTU",
          "normalized": "a-\u003e(a-\u003eTU a b)-\u003e(a-\u003eTU c b)-\u003eTU c b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "e-\u003e(e-\u003eTU e m)-\u003e(e-\u003eTU a m)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:once_peTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-hit top-down traversal (overloaded between \u003ccode\u003e\u003ca\u003eTU\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTP\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_td",
          "package": "Strafunski-StrategyLib",
          "signature": "s m -\u003e s m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#once_td",
          "type": "function"
        },
        "index": {
          "description": "One-hit top-down traversal overloaded between TU and TP",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_td",
          "normalized": "a b-\u003ea b",
          "package": "Strafunski-StrategyLib",
          "signature": "s m-\u003es m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:once_td"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-down type-preserving traversal that performs its argument\n   strategy at most once.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_tdTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#once_tdTP",
          "type": "function"
        },
        "index": {
          "description": "Top-down type-preserving traversal that performs its argument strategy at most once",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_tdTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:once_tdTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-down type-unifying traversal that performs its argument\n   strategy at most once.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_tdTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#once_tdTU",
          "type": "function"
        },
        "index": {
          "description": "Top-down type-unifying traversal that performs its argument strategy at most once",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "once_tdTU",
          "normalized": "TU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:once_tdTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive completion of type-preserving one-layer traversal that\n   succeeds exactly once.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "one_recTU",
          "package": "Strafunski-StrategyLib",
          "signature": "(t -\u003e TU a m -\u003e TU a m)-\u003e t-\u003e TU a m",
          "type": "function"
        },
        "index": {
          "description": "Recursive completion of type-preserving one-layer traversal that succeeds exactly once",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "one_recTU",
          "normalized": "(a-\u003eTU b c-\u003eTU b c)-\u003ea-\u003eTU b c",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "(t-\u003eTU a m-\u003eTU a m)-\u003et-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:one_recTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eonce_tdTU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "select",
          "package": "Strafunski-StrategyLib",
          "signature": "TU u m -\u003e TU u m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#select",
          "type": "function"
        },
        "index": {
          "description": "See once tdTU",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "select",
          "normalized": "TU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "signature": "TU u m-\u003eTU u m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eonce_peTU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "selectenv",
          "package": "Strafunski-StrategyLib",
          "signature": "e -\u003e (e -\u003e TU e m) -\u003e (e -\u003e TU a m) -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#selectenv",
          "type": "function"
        },
        "index": {
          "description": "See once peTU",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "selectenv",
          "normalized": "a-\u003e(a-\u003eTU a b)-\u003e(a-\u003eTU c b)-\u003eTU c b",
          "package": "Strafunski-StrategyLib",
          "signature": "e-\u003e(e-\u003eTU e m)-\u003e(e-\u003eTU a m)-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:selectenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003esomeTP\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "someTP'",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#someTP%27",
          "type": "function"
        },
        "index": {
          "description": "Use someTP instead",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "someTP'",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP'",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:someTP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-down type-preserving traversal that is cut of below nodes\n   where the argument strategy succeeds.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "stop_tdTP",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#stop_tdTP",
          "type": "function"
        },
        "index": {
          "description": "Top-down type-preserving traversal that is cut of below nodes where the argument strategy succeeds",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "stop_tdTP",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "partial": "TP",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:stop_tdTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-down type-unifying traversal that is cut of below nodes\n   where the argument strategy succeeds.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "stop_tdTU",
          "package": "Strafunski-StrategyLib",
          "signature": "TU a m -\u003e TU a m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#stop_tdTU",
          "type": "function"
        },
        "index": {
          "description": "Top-down type-unifying traversal that is cut of below nodes where the argument strategy succeeds",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "stop_tdTU",
          "normalized": "TU a b-\u003eTU a b",
          "package": "Strafunski-StrategyLib",
          "partial": "TU",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:stop_tdTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003efull_tdTP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "topdown",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m -\u003e TP m",
          "source": "src/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#topdown",
          "type": "function"
        },
        "index": {
          "description": "See full tdTP",
          "hierarchy": "Data Generics Strafunski StrategyLib TraversalTheme",
          "module": "Data.Generics.Strafunski.StrategyLib.TraversalTheme",
          "name": "topdown",
          "normalized": "TP a-\u003eTP a",
          "package": "Strafunski-StrategyLib",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Strafunski-StrategyLib/docs/Data-Generics-Strafunski-StrategyLib-TraversalTheme.html#v:topdown"
      }
    }
  ]
]