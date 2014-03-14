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
        "word": "continue"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Continue.Class",
          "name": "Class",
          "package": "continue",
          "source": "src/Control-Monad-Continue-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Continue Class",
          "module": "Control.Monad.Continue.Class",
          "name": "Class",
          "package": "continue",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for monads that support suspension and continuation\n spots.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue.Class",
          "name": "MonadContinue",
          "package": "continue",
          "source": "src/Control-Monad-Continue-Class.html#MonadContinue",
          "type": "class"
        },
        "index": {
          "description": "Type class for monads that support suspension and continuation spots",
          "hierarchy": "Control Monad Continue Class",
          "module": "Control.Monad.Continue.Class",
          "name": "MonadContinue",
          "package": "continue",
          "partial": "Monad Continue",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue-Class.html#t:MonadContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the given set of continuations and possibly suspend.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue.Class",
          "name": "addCont",
          "package": "continue",
          "signature": "addCont",
          "source": "src/Control-Monad-Continue-Class.html#addCont",
          "type": "method"
        },
        "index": {
          "description": "Add the given set of continuations and possibly suspend",
          "hierarchy": "Control Monad Continue Class",
          "module": "Control.Monad.Continue.Class",
          "name": "addCont",
          "package": "continue",
          "partial": "Cont",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue-Class.html#v:addCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the given set of continuations without suspending.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue.Class",
          "name": "addCont_",
          "package": "continue",
          "signature": "f (m ()) -\u003e m ()",
          "source": "src/Control-Monad-Continue-Class.html#addCont_",
          "type": "function"
        },
        "index": {
          "description": "Add the given set of continuations without suspending",
          "hierarchy": "Control Monad Continue Class",
          "module": "Control.Monad.Continue.Class",
          "name": "addCont_",
          "normalized": "a(b())-\u003eb()",
          "package": "continue",
          "partial": "Cont",
          "signature": "f(m())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue-Class.html#v:addCont_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow to continue here with the given value.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue.Class",
          "name": "continue",
          "package": "continue",
          "signature": "Either e a-\u003e f (Either e a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Allow to continue here with the given value",
          "hierarchy": "Control Monad Continue Class",
          "module": "Control.Monad.Continue.Class",
          "name": "continue",
          "normalized": "Either a b-\u003ec(Either a b)-\u003ed b",
          "package": "continue",
          "signature": "Either e a-\u003ef(Either e a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue-Class.html#v:continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow to continue here.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue.Class",
          "name": "continue_",
          "package": "continue",
          "signature": "f ()-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Allow to continue here",
          "hierarchy": "Control Monad Continue Class",
          "module": "Control.Monad.Continue.Class",
          "name": "continue_",
          "normalized": "a()-\u003eb()",
          "package": "continue",
          "signature": "f()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue-Class.html#v:continue_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuspend with the given value.  Does not register any continuation\n spots.  Note that \u003ccode\u003esuspend mempty\u003c/code\u003e is equivalent to \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue.Class",
          "name": "suspend",
          "package": "continue",
          "signature": "e -\u003e m a",
          "source": "src/Control-Monad-Continue-Class.html#suspend",
          "type": "function"
        },
        "index": {
          "description": "Suspend with the given value Does not register any continuation spots Note that suspend mempty is equivalent to empty",
          "hierarchy": "Control Monad Continue Class",
          "module": "Control.Monad.Continue.Class",
          "name": "suspend",
          "normalized": "a-\u003eb c",
          "package": "continue",
          "signature": "e-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue-Class.html#v:suspend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuspend with \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and register the given continuations.  Note\n that \u003ccode\u003esuspendWith zero\u003c/code\u003e is equivalent to \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue.Class",
          "name": "suspendWith",
          "package": "continue",
          "signature": "f (m a) -\u003e m a",
          "source": "src/Control-Monad-Continue-Class.html#suspendWith",
          "type": "function"
        },
        "index": {
          "description": "Suspend with mempty and register the given continuations Note that suspendWith zero is equivalent to empty",
          "hierarchy": "Control Monad Continue Class",
          "module": "Control.Monad.Continue.Class",
          "name": "suspendWith",
          "normalized": "a(b c)-\u003eb c",
          "package": "continue",
          "partial": "With",
          "signature": "f(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue-Class.html#v:suspendWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library implements a monad transformer for suspendable\n computations, similar and related to free comonads.  It allows to\n write continuation-based web frameworks, command line applications\n and similar interfaces, where you want to reenter a computation at\n arbitrary spots.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Continue",
          "name": "Continue",
          "package": "continue",
          "source": "src/Control-Monad-Continue.html",
          "type": "module"
        },
        "index": {
          "description": "This library implements monad transformer for suspendable computations similar and related to free comonads It allows to write continuation-based web frameworks command line applications and similar interfaces where you want to reenter computation at arbitrary spots",
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "Continue",
          "package": "continue",
          "partial": "Continue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e \u003c!\u003e is associative:             (a \u003c!\u003e b) \u003c!\u003e c = a \u003c!\u003e (b \u003c!\u003e c)\n \u003c$\u003e left-distributes over \u003c!\u003e:  f \u003c$\u003e (a \u003c!\u003e b) = (f \u003c$\u003e a) \u003c!\u003e (f \u003c$\u003e b)\n\u003c/pre\u003e\u003cp\u003eIf extended to an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003e\u003ca\u003e\u003c!\u003e\u003c/a\u003e\u003c/code\u003e should equal \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIdeally, an instance of \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e also satisfies the \"left distributon\" law of\n MonadPlus with respect to \u003ca\u003e.\u003c/a\u003e:\n\u003c/p\u003e\u003cpre\u003e \u003c.\u003e right-distributes over \u003c!\u003e: (a \u003c!\u003e b) \u003c.\u003e c = (a \u003c.\u003e c) \u003c!\u003e (b \u003c.\u003e c)\n\u003c/pre\u003e\u003cp\u003eBut \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e e m\u003c/code\u003e, and \u003ccode\u003eSTM\u003c/code\u003e satisfy the alternative\n \"left catch\" law instead:\n\u003c/p\u003e\u003cpre\u003e pure a \u003c!\u003e b = pure a\n\u003c/pre\u003e\u003cp\u003eHowever, this variation cannot be stated purely in terms of the dependencies of \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen and if MonadPlus is successfully refactored, this class should also\n be refactored to remove these instances.\n\u003c/p\u003e\u003cp\u003eThe right distributive law should extend in the cases where the a \u003ccode\u003e\u003ca\u003eBind\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is\n provided to yield variations of the right distributive law:\n\u003c/p\u003e\u003cpre\u003e (m \u003c!\u003e n) \u003e\u003e- f = (m \u003e\u003e- f) \u003c!\u003e (m \u003e\u003e- f)\n (m \u003c!\u003e n) \u003e\u003e= f = (m \u003e\u003e= f) \u003c!\u003e (m \u003e\u003e= f)\n\u003c/pre\u003e",
          "module": "Control.Monad.Continue",
          "name": "Alt",
          "package": "continue",
          "type": "class"
        },
        "index": {
          "description": "Laws is associative left-distributes over If extended to an Alternative then should equal Ideally an instance of Alt also satisfies the left distributon law of MonadPlus with respect to right-distributes over But Maybe IO Either ErrorT and STM satisfy the alternative left catch law instead pure pure However this variation cannot be stated purely in terms of the dependencies of Alt When and if MonadPlus is successfully refactored this class should also be refactored to remove these instances The right distributive law should extend in the cases where the Bind or Monad is provided to yield variations of the right distributive law",
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "Alt",
          "package": "continue",
          "partial": "Alt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#t:Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eContinueT\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue",
          "name": "Continue",
          "package": "continue",
          "source": "src/Control-Monad-Continue.html#Continue",
          "type": "type"
        },
        "index": {
          "description": "ContinueT over Identity",
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "Continue",
          "package": "continue",
          "partial": "Continue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#t:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis monad transformer adds continuations under \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003ee\u003c/code\u003e-typed\n suspensions to \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue",
          "name": "ContinueT",
          "package": "continue",
          "source": "src/Control-Monad-Continue.html#ContinueT",
          "type": "newtype"
        },
        "index": {
          "description": "This monad transformer adds continuations under and typed suspensions to",
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "ContinueT",
          "package": "continue",
          "partial": "Continue",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#t:ContinueT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for the common case of using \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLast\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e as\n the suspension monoid.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue",
          "name": "LastEx",
          "package": "continue",
          "source": "src/Control-Monad-Continue.html#LastEx",
          "type": "type"
        },
        "index": {
          "description": "Type alias for the common case of using Last SomeException as the suspension monoid",
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "LastEx",
          "package": "continue",
          "partial": "Last Ex",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#t:LastEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e zero \u003c!\u003e m = m\n m \u003c!\u003e zero = m\n\u003c/pre\u003e\u003cp\u003eIf extended to an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e should equal \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue",
          "name": "Plus",
          "package": "continue",
          "type": "class"
        },
        "index": {
          "description": "Laws zero zero If extended to an Alternative then zero should equal empty",
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "Plus",
          "package": "continue",
          "partial": "Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#t:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(\u003ca\u003e|\u003c/a\u003e)\u003c/code\u003e without a required \u003ccode\u003eempty\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Continue",
          "name": "(\u003c!\u003e)",
          "package": "continue",
          "signature": "f a -\u003e f a -\u003e f a",
          "type": "method"
        },
        "index": {
          "description": "without required empty",
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "(\u003c!\u003e) \u003c!\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "continue",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#v:-60--33--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Continue",
          "name": "ContinueT",
          "package": "continue",
          "signature": "ContinueT",
          "source": "src/Control-Monad-Continue.html#ContinueT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "ContinueT",
          "package": "continue",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#v:ContinueT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Continue",
          "name": "many",
          "package": "continue",
          "signature": "f a -\u003e f [a]",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "many",
          "normalized": "a b-\u003ea[b]",
          "package": "continue",
          "signature": "f a-\u003ef[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the given morphism to the underlying monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue",
          "name": "mapContinueT",
          "package": "continue",
          "signature": "(forall a.  m a -\u003e n a)-\u003e ContinueT e f m a-\u003e ContinueT e f n a",
          "type": "function"
        },
        "index": {
          "description": "Apply the given morphism to the underlying monad",
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "mapContinueT",
          "normalized": "(a b c d-\u003ee d)-\u003eContinueT f g c d-\u003eContinueT f g e d",
          "package": "continue",
          "partial": "Continue",
          "signature": "(forall a. m a-\u003en a)-\u003eContinueT e f m a-\u003eContinueT e f n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#v:mapContinueT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e, but tries the second computation only if the\n first one actually suspends.  Note that not running the second\n computation also means that it can't register reentry spots.\n\u003c/p\u003e\u003cp\u003eAs an operator this function is infixr 3.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue",
          "name": "orElse",
          "package": "continue",
          "signature": "ContinueT e f m a -\u003e ContinueT e f m a -\u003e ContinueT e f m a",
          "source": "src/Control-Monad-Continue.html#orElse",
          "type": "function"
        },
        "index": {
          "description": "Similar to but tries the second computation only if the first one actually suspends Note that not running the second computation also means that it can register reentry spots As an operator this function is infixr",
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "orElse",
          "normalized": "ContinueT a b c d-\u003eContinueT a b c d-\u003eContinueT a b c d",
          "package": "continue",
          "partial": "Else",
          "signature": "ContinueT e f m a-\u003eContinueT e f m a-\u003eContinueT e f m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given \u003ccode\u003e\u003ca\u003eContinue\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Continue",
          "name": "runContinue",
          "package": "continue",
          "signature": "Continue e f a -\u003e (Either e a, f (Continue e f a))",
          "source": "src/Control-Monad-Continue.html#runContinue",
          "type": "function"
        },
        "index": {
          "description": "Run the given Continue computation",
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "runContinue",
          "normalized": "Continue a b c-\u003e(Either a c,b(Continue a b c))",
          "package": "continue",
          "partial": "Continue",
          "signature": "Continue e f a-\u003e(Either e a,f(Continue e f a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#v:runContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Continue",
          "name": "runContinueT",
          "package": "continue",
          "signature": "m (Either e a, f (ContinueT e f m a))",
          "source": "src/Control-Monad-Continue.html#ContinueT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "runContinueT",
          "normalized": "a(Either b c,d(ContinueT b d a c))",
          "package": "continue",
          "partial": "Continue",
          "signature": "m(Either e a,f(ContinueT e f m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#v:runContinueT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Continue",
          "name": "some",
          "package": "continue",
          "signature": "f a -\u003e f [a]",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "some",
          "normalized": "a b-\u003ea[b]",
          "package": "continue",
          "signature": "f a-\u003ef[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#v:some"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Continue",
          "name": "zero",
          "package": "continue",
          "signature": "f a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Continue",
          "module": "Control.Monad.Continue",
          "name": "zero",
          "package": "continue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/continue/docs/Control-Monad-Continue.html#v:zero"
      }
    }
  ]
]