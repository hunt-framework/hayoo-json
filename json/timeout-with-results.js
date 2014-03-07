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
        "word": "timeout-with-results"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines a writer monad for computations that can be interrupted by a\n   timeout. Written partial results are combined using their monoid operation\n   and if a timeout occurs, the result is returned.\n\u003c/p\u003e\u003cp\u003eSeveral utility monoids that force their values to \u003cem\u003eweak head normal form\u003c/em\u003e\n   or to \u003cem\u003enormal form\u003c/em\u003e are provided.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "Writer",
          "package": "timeout-with-results",
          "source": "src/System-Timeout-Returning-Writer.html",
          "type": "module"
        },
        "index": {
          "description": "Defines writer monad for computations that can be interrupted by timeout Written partial results are combined using their monoid operation and if timeout occurs the result is returned Several utility monoids that force their values to weak head normal form or to normal form are provided",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "Writer",
          "package": "timeout-with-results",
          "partial": "Writer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monoid equivalent to \u003ccode\u003e\u003ca\u003eLast\u003c/a\u003e\u003c/code\u003e. In addition, it forces evaluation of\n values inside \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erseq\u003c/a\u003e\u003c/code\u003e. This means that when it is used in\n \u003ccode\u003e\u003ca\u003erunTimeout\u003c/a\u003e\u003c/code\u003e, the computations will be forced in the producing thread,\n not in the consuming one. If you want to force evaluation to NF, wrap\n it inside \u003ccode\u003e\u003ca\u003eNFMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "Last'",
          "package": "timeout-with-results",
          "source": "src/System-Timeout-Returning-Writer.html#Last%27",
          "type": "newtype"
        },
        "index": {
          "description": "monoid equivalent to Last In addition it forces evaluation of values inside Maybe using rseq This means that when it is used in runTimeout the computations will be forced in the producing thread not in the consuming one If you want to force evaluation to NF wrap it inside NFMonoid",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "Last'",
          "package": "timeout-with-results",
          "partial": "Last'",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:Last-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad for computations that can save partial results\n of type \u003ccode\u003ew\u003c/code\u003e during their evaluation.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "MonadTimeout",
          "package": "timeout-with-results",
          "source": "src/System-Timeout-Returning-Writer.html#MonadTimeout",
          "type": "class"
        },
        "index": {
          "description": "Monad for computations that can save partial results of type during their evaluation",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "MonadTimeout",
          "package": "timeout-with-results",
          "partial": "Monad Timeout",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:MonadTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtends \u003ccode\u003e\u003ca\u003eMonadTimeout\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eMonadWriter\u003c/a\u003e\u003c/code\u003e. Written values are combined\n together using \u003ccode\u003ew\u003c/code\u003e's monoid. In addition, allows to run a sub-computation\n in a contained environment, without affecting the current partial result.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "MonadTimeoutWriter",
          "package": "timeout-with-results",
          "source": "src/System-Timeout-Returning-Writer.html#MonadTimeoutWriter",
          "type": "class"
        },
        "index": {
          "description": "Extends MonadTimeout to MonadWriter Written values are combined together using monoid In addition allows to run sub-computation in contained environment without affecting the current partial result",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "MonadTimeoutWriter",
          "package": "timeout-with-results",
          "partial": "Monad Timeout Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:MonadTimeoutWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Timeout.Returning.Writer",
          "name": "MonadWriter",
          "package": "timeout-with-results",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "MonadWriter",
          "package": "timeout-with-results",
          "partial": "Monad Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:MonadWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper monoid that forces each result of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n to \u003cem\u003enormal form\u003c/em\u003e'\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "NFMonoid",
          "package": "timeout-with-results",
          "source": "src/System-Timeout-Returning-Writer.html#NFMonoid",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper monoid that forces each result of mappend to normal form",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "NFMonoid",
          "package": "timeout-with-results",
          "partial": "NFMonoid",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:NFMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monoid whose \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e picks the grater value according to the second\n field of the tuple. \u003ccode\u003eSeqMax Nothing\u003c/code\u003e is the least element of the\n ordering. If the second fields are the same, the left value is preferred.\n In addition, the first field of the selected tuple is forced to evaluate\n using \u003ccode\u003e\u003ca\u003erseq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "SeqMax",
          "package": "timeout-with-results",
          "source": "src/System-Timeout-Returning-Writer.html#SeqMax",
          "type": "newtype"
        },
        "index": {
          "description": "monoid whose mappend picks the grater value according to the second field of the tuple SeqMax Nothing is the least element of the ordering If the second fields are the same the left value is preferred In addition the first field of the selected tuple is forced to evaluate using rseq",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "SeqMax",
          "package": "timeout-with-results",
          "partial": "Seq Max",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:SeqMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e-based implementation of \u003ccode\u003e\u003ca\u003eMonadTimeoutWriter\u003c/a\u003e\u003c/code\u003e.  Calling\n \u003ccode\u003e\u003ca\u003epartialResult\u003c/a\u003e\u003c/code\u003e (or equivalently \u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e) combines the value with any\n previously written values using \u003ccode\u003ew\u003c/code\u003e's monoidal operation.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "TimeoutWriter",
          "package": "timeout-with-results",
          "source": "src/System-Timeout-Returning-Writer.html#TimeoutWriter",
          "type": "data"
        },
        "index": {
          "description": "An IO based implementation of MonadTimeoutWriter Calling partialResult or equivalently tell combines the value with any previously written values using monoidal operation",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "TimeoutWriter",
          "package": "timeout-with-results",
          "partial": "Timeout Writer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:TimeoutWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Timeout.Returning.Writer",
          "name": "Last'",
          "package": "timeout-with-results",
          "signature": "Last'",
          "source": "src/System-Timeout-Returning-Writer.html#Last%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "Last'",
          "package": "timeout-with-results",
          "partial": "Last'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:Last-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Timeout.Returning.Writer",
          "name": "NFMonoid",
          "package": "timeout-with-results",
          "signature": "NFMonoid",
          "source": "src/System-Timeout-Returning-Writer.html#NFMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "NFMonoid",
          "package": "timeout-with-results",
          "partial": "NFMonoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:NFMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Timeout.Returning.Writer",
          "name": "SeqMax",
          "package": "timeout-with-results",
          "signature": "SeqMax (Maybe (a, b))",
          "source": "src/System-Timeout-Returning-Writer.html#SeqMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "SeqMax",
          "normalized": "SeqMax(Maybe(a,b))",
          "package": "timeout-with-results",
          "partial": "Seq Max",
          "signature": "SeqMax(Maybe(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:SeqMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given computation separately and return its result.\n Does not modify the current result!\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "contained",
          "package": "timeout-with-results",
          "signature": "m r -\u003e m (r, w)",
          "source": "src/System-Timeout-Returning-Writer.html#contained",
          "type": "method"
        },
        "index": {
          "description": "Runs the given computation separately and return its result Does not modify the current result",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "contained",
          "normalized": "a b-\u003ea(b,c)",
          "package": "timeout-with-results",
          "signature": "m r-\u003em(r,w)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:contained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default implementation of \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003econtained\u003c/a\u003e\u003c/code\u003e.\n Useful only for authors of implementations of \u003ccode\u003e\u003ca\u003eMonadTimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "defaultListen",
          "package": "timeout-with-results",
          "signature": "m a -\u003e m (a, w)",
          "source": "src/System-Timeout-Returning-Writer.html#defaultListen",
          "type": "function"
        },
        "index": {
          "description": "default implementation of listen using contained Useful only for authors of implementations of MonadTimeout",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "defaultListen",
          "normalized": "a b-\u003ea(b,c)",
          "package": "timeout-with-results",
          "partial": "Listen",
          "signature": "m a-\u003em(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:defaultListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default implementation of \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003econtained\u003c/a\u003e\u003c/code\u003e.\n Useful only for authors of implementations of \u003ccode\u003e\u003ca\u003eMonadTimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "defaultPass",
          "package": "timeout-with-results",
          "signature": "m (a, w -\u003e w) -\u003e m a",
          "source": "src/System-Timeout-Returning-Writer.html#defaultPass",
          "type": "function"
        },
        "index": {
          "description": "default implementation of pass using contained Useful only for authors of implementations of MonadTimeout",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "defaultPass",
          "normalized": "a(b,c-\u003ec)-\u003ea b",
          "package": "timeout-with-results",
          "partial": "Pass",
          "signature": "m(a,w-\u003ew)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:defaultPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Timeout.Returning.Writer",
          "name": "getLast'",
          "package": "timeout-with-results",
          "signature": "Maybe a",
          "source": "src/System-Timeout-Returning-Writer.html#Last%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "getLast'",
          "package": "timeout-with-results",
          "partial": "Last'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:getLast-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Timeout.Returning.Writer",
          "name": "getNFMonoid",
          "package": "timeout-with-results",
          "signature": "a",
          "source": "src/System-Timeout-Returning-Writer.html#NFMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "getNFMonoid",
          "package": "timeout-with-results",
          "partial": "NFMonoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:getNFMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n its output to the value of the computation.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "listen",
          "package": "timeout-with-results",
          "signature": "m a -\u003e m (a, w)",
          "type": "method"
        },
        "index": {
          "description": "listen is an action that executes the action and adds its output to the value of the computation",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "listen",
          "normalized": "a b-\u003ea(b,c)",
          "package": "timeout-with-results",
          "signature": "m a-\u003em(a,w)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a new partial result. The precise semantics of what happens\n with the written value is by intent unspecified and left to\n be decided by implementations.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "partialResult",
          "package": "timeout-with-results",
          "signature": "w -\u003e m ()",
          "source": "src/System-Timeout-Returning-Writer.html#partialResult",
          "type": "method"
        },
        "index": {
          "description": "Store new partial result The precise semantics of what happens with the written value is by intent unspecified and left to be decided by implementations",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "partialResult",
          "normalized": "a-\u003eb()",
          "package": "timeout-with-results",
          "partial": "Result",
          "signature": "w-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:partialResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which\n returns a value and a function, and returns the value, applying\n the function to the output.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "pass",
          "package": "timeout-with-results",
          "signature": "m (a, w -\u003e w) -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "pass",
          "normalized": "a(b,c-\u003ec)-\u003ea b",
          "package": "timeout-with-results",
          "signature": "m(a,w-\u003ew)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the given computation with a timeout limit.  Each time a value\n is written, the result of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e with the previous one is evaluated to\n \u003cem\u003eweak head normal form\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "runTimeout",
          "package": "timeout-with-results",
          "signature": "Int-\u003e TimeoutWriter w r-\u003e IO (Maybe r, w)",
          "type": "function"
        },
        "index": {
          "description": "Execute the given computation with timeout limit Each time value is written the result of mappend with the previous one is evaluated to weak head normal form",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "runTimeout",
          "normalized": "Int-\u003eTimeoutWriter a b-\u003eIO(Maybe b,a)",
          "package": "timeout-with-results",
          "partial": "Timeout",
          "signature": "Int-\u003eTimeoutWriter w r-\u003eIO(Maybe r,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:runTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "tell",
          "package": "timeout-with-results",
          "signature": "w -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "tell is an action that produces the output",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "tell",
          "normalized": "a-\u003eb()",
          "package": "timeout-with-results",
          "signature": "w-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify written values using the given function.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "withTimeoutWriter",
          "package": "timeout-with-results",
          "signature": "(w' -\u003e w) -\u003e TimeoutWriter w' a -\u003e TimeoutWriter w a",
          "source": "src/System-Timeout-Returning-Writer.html#withTimeoutWriter",
          "type": "function"
        },
        "index": {
          "description": "Modify written values using the given function",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "withTimeoutWriter",
          "normalized": "(a-\u003eb)-\u003eTimeoutWriter a c-\u003eTimeoutWriter b c",
          "package": "timeout-with-results",
          "partial": "Timeout Writer",
          "signature": "(w'-\u003ew)-\u003eTimeoutWriter w' a-\u003eTimeoutWriter w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:withTimeoutWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e (a,w)\u003c/code\u003e embeds a simple writer action.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "writer",
          "package": "timeout-with-results",
          "signature": "(a, w) -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "writer embeds simple writer action",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "writer",
          "normalized": "(a,b)-\u003ec a",
          "package": "timeout-with-results",
          "signature": "(a,w)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicitly allow interrupting the computation at this point.\n Experimental.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning.Writer",
          "name": "yield",
          "package": "timeout-with-results",
          "signature": "m ()",
          "source": "src/System-Timeout-Returning-Writer.html#yield",
          "type": "method"
        },
        "index": {
          "description": "Explicitly allow interrupting the computation at this point Experimental",
          "hierarchy": "System Timeout Returning Writer",
          "module": "System.Timeout.Returning.Writer",
          "name": "yield",
          "normalized": "a()",
          "package": "timeout-with-results",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines a simple monad for computations that can be interrupted by a\n   timeout, and save partial results before that.\n\u003c/p\u003e\u003cp\u003eIf you need a more powerful mechanism, where you can retrieve and combine\n   previously saved partial results, use module\n   \u003ca\u003eSystem.Timeout.Returning.Writer\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMind that (from documentation of \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e): \"There\n   is no guarantee that the exception will be delivered promptly, although\n   the runtime will endeavour to ensure that arbitrary delays don't occur. In\n   GHC, an exception can only be raised when a thread reaches a safe point,\n   where a safe point is where memory allocation occurs. Some loops do not\n   perform any memory allocation inside the loop and therefore cannot be\n   interrupted by a \u003ccode\u003ethrowTo\u003c/code\u003e.\"\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Timeout.Returning",
          "name": "Returning",
          "package": "timeout-with-results",
          "source": "src/System-Timeout-Returning.html",
          "type": "module"
        },
        "index": {
          "description": "Defines simple monad for computations that can be interrupted by timeout and save partial results before that If you need more powerful mechanism where you can retrieve and combine previously saved partial results use module System.Timeout.Returning.Writer Mind that from documentation of throwTo There is no guarantee that the exception will be delivered promptly although the runtime will endeavour to ensure that arbitrary delays don occur In GHC an exception can only be raised when thread reaches safe point where safe point is where memory allocation occurs Some loops do not perform any memory allocation inside the loop and therefore cannot be interrupted by throwTo",
          "hierarchy": "System Timeout Returning",
          "module": "System.Timeout.Returning",
          "name": "Returning",
          "package": "timeout-with-results",
          "partial": "Returning",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad for computations that can save partial results\n of type \u003ccode\u003ew\u003c/code\u003e during their evaluation.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning",
          "name": "MonadTimeout",
          "package": "timeout-with-results",
          "source": "src/System-Timeout-Returning-Writer.html#MonadTimeout",
          "type": "class"
        },
        "index": {
          "description": "Monad for computations that can save partial results of type during their evaluation",
          "hierarchy": "System Timeout Returning",
          "module": "System.Timeout.Returning",
          "name": "MonadTimeout",
          "package": "timeout-with-results",
          "partial": "Monad Timeout",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#t:MonadTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e-based implementation of \u003ccode\u003e\u003ca\u003eMonadTimeout\u003c/a\u003e\u003c/code\u003e.\n Calling \u003ccode\u003e\u003ca\u003epartialResult\u003c/a\u003e\u003c/code\u003e replaces any previously written value\n with the new one.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning",
          "name": "Timeout",
          "package": "timeout-with-results",
          "source": "src/System-Timeout-Returning.html#Timeout",
          "type": "data"
        },
        "index": {
          "description": "An IO based implementation of MonadTimeout Calling partialResult replaces any previously written value with the new one",
          "hierarchy": "System Timeout Returning",
          "module": "System.Timeout.Returning",
          "name": "Timeout",
          "package": "timeout-with-results",
          "partial": "Timeout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#t:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a new partial result. The precise semantics of what happens\n with the written value is by intent unspecified and left to\n be decided by implementations.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning",
          "name": "partialResult",
          "package": "timeout-with-results",
          "signature": "w -\u003e m ()",
          "source": "src/System-Timeout-Returning-Writer.html#partialResult",
          "type": "method"
        },
        "index": {
          "description": "Store new partial result The precise semantics of what happens with the written value is by intent unspecified and left to be decided by implementations",
          "hierarchy": "System Timeout Returning",
          "module": "System.Timeout.Returning",
          "name": "partialResult",
          "normalized": "a-\u003eb()",
          "package": "timeout-with-results",
          "partial": "Result",
          "signature": "w-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#v:partialResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given simple computation with the given timeout.  If the\n computation returns a value, the value is returned.  If it doesn't or\n times out, the last partial result written by \u003ccode\u003e\u003ca\u003epartialResult\u003c/a\u003e\u003c/code\u003e is returned.\n Each partial result is converted to \u003cem\u003enormal form\u003c/em\u003e prior being saved.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning",
          "name": "runTimeoutNF",
          "package": "timeout-with-results",
          "signature": "Int-\u003e Timeout w (Maybe w)-\u003e IO (Maybe w)",
          "type": "function"
        },
        "index": {
          "description": "Runs the given simple computation with the given timeout If the computation returns value the value is returned If it doesn or times out the last partial result written by partialResult is returned Each partial result is converted to normal form prior being saved",
          "hierarchy": "System Timeout Returning",
          "module": "System.Timeout.Returning",
          "name": "runTimeoutNF",
          "normalized": "Int-\u003eTimeout a(Maybe a)-\u003eIO(Maybe a)",
          "package": "timeout-with-results",
          "partial": "Timeout NF",
          "signature": "Int-\u003eTimeout w(Maybe w)-\u003eIO(Maybe w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#v:runTimeoutNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given simple computation with the given timeout.  If the\n computation returns a value, the value is returned.  If it doesn't or\n times out, the last partial result written by \u003ccode\u003e\u003ca\u003epartialResult\u003c/a\u003e\u003c/code\u003e is returned.\n Each partial result is converted to \u003cem\u003eweak head normal form\u003c/em\u003e prior being\n saved.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning",
          "name": "runTimeoutWHNF",
          "package": "timeout-with-results",
          "signature": "Int-\u003e Timeout w (Maybe w)-\u003e IO (Maybe w)",
          "type": "function"
        },
        "index": {
          "description": "Runs the given simple computation with the given timeout If the computation returns value the value is returned If it doesn or times out the last partial result written by partialResult is returned Each partial result is converted to weak head normal form prior being saved",
          "hierarchy": "System Timeout Returning",
          "module": "System.Timeout.Returning",
          "name": "runTimeoutWHNF",
          "normalized": "Int-\u003eTimeout a(Maybe a)-\u003eIO(Maybe a)",
          "package": "timeout-with-results",
          "partial": "Timeout WHNF",
          "signature": "Int-\u003eTimeout w(Maybe w)-\u003eIO(Maybe w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#v:runTimeoutWHNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicitly allow interrupting the computation at this point.\n Experimental.\n\u003c/p\u003e",
          "module": "System.Timeout.Returning",
          "name": "yield",
          "package": "timeout-with-results",
          "signature": "m ()",
          "source": "src/System-Timeout-Returning-Writer.html#yield",
          "type": "method"
        },
        "index": {
          "description": "Explicitly allow interrupting the computation at this point Experimental",
          "hierarchy": "System Timeout Returning",
          "module": "System.Timeout.Returning",
          "name": "yield",
          "normalized": "a()",
          "package": "timeout-with-results",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#v:yield"
      }
    }
  ]
]