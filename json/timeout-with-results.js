[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines a writer monad for computations that can be interrupted by a\n   timeout. Written partial results are combined using their monoid operation\n   and if a timeout occurs, the result is returned.\n\u003c/p\u003e\u003cp\u003eSeveral utility monoids that force their values to \u003cem\u003eweak head normal form\u003c/em\u003e\n   or to \u003cem\u003enormal form\u003c/em\u003e are provided.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "module",
        "fct-source": "src/System-Timeout-Returning-Writer.html",
        "fct-type": "module",
        "title": "Writer"
      },
      "index": {
        "description": "Defines writer monad for computations that can be interrupted by timeout Written partial results are combined using their monoid operation and if timeout occurs the result is returned Several utility monoids that force their values to weak head normal form or to normal form are provided",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "Writer",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:Last-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA monoid equivalent to \u003ccode\u003e\u003ca\u003eLast\u003c/a\u003e\u003c/code\u003e. In addition, it forces evaluation of\n values inside \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erseq\u003c/a\u003e\u003c/code\u003e. This means that when it is used in\n \u003ccode\u003e\u003ca\u003erunTimeout\u003c/a\u003e\u003c/code\u003e, the computations will be forced in the producing thread,\n not in the consuming one. If you want to force evaluation to NF, wrap\n it inside \u003ccode\u003e\u003ca\u003eNFMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "newtype",
        "fct-source": "src/System-Timeout-Returning-Writer.html#Last%27",
        "fct-type": "newtype",
        "title": "Last'"
      },
      "index": {
        "description": "monoid equivalent to Last In addition it forces evaluation of values inside Maybe using rseq This means that when it is used in runTimeout the computations will be forced in the producing thread not in the consuming one If you want to force evaluation to NF wrap it inside NFMonoid",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "Last'",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "Last'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:MonadTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eMonad for computations that can save partial results\n of type \u003ccode\u003ew\u003c/code\u003e during their evaluation.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "class",
        "fct-source": "src/System-Timeout-Returning-Writer.html#MonadTimeout",
        "fct-type": "class",
        "title": "MonadTimeout"
      },
      "index": {
        "description": "Monad for computations that can save partial results of type during their evaluation",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "MonadTimeout",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "Monad Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:MonadTimeoutWriter",
      "description": {
        "fct-descr": "\u003cp\u003eExtends \u003ccode\u003e\u003ca\u003eMonadTimeout\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eMonadWriter\u003c/a\u003e\u003c/code\u003e. Written values are combined\n together using \u003ccode\u003ew\u003c/code\u003e's monoid. In addition, allows to run a sub-computation\n in a contained environment, without affecting the current partial result.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "class",
        "fct-source": "src/System-Timeout-Returning-Writer.html#MonadTimeoutWriter",
        "fct-type": "class",
        "title": "MonadTimeoutWriter"
      },
      "index": {
        "description": "Extends MonadTimeout to MonadWriter Written values are combined together using monoid In addition allows to run sub-computation in contained environment without affecting the current partial result",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "MonadTimeoutWriter",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "Monad Timeout Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:MonadWriter",
      "description": {
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadWriter"
      },
      "index": {
        "description": "",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "MonadWriter",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "Monad Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:NFMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper monoid that forces each result of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n to \u003cem\u003enormal form\u003c/em\u003e'\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "newtype",
        "fct-source": "src/System-Timeout-Returning-Writer.html#NFMonoid",
        "fct-type": "newtype",
        "title": "NFMonoid"
      },
      "index": {
        "description": "wrapper monoid that forces each result of mappend to normal form",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "NFMonoid",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "NFMonoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:SeqMax",
      "description": {
        "fct-descr": "\u003cp\u003eA monoid whose \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e picks the grater value according to the second\n field of the tuple. \u003ccode\u003eSeqMax Nothing\u003c/code\u003e is the least element of the\n ordering. If the second fields are the same, the left value is preferred.\n In addition, the first field of the selected tuple is forced to evaluate\n using \u003ccode\u003e\u003ca\u003erseq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "newtype",
        "fct-source": "src/System-Timeout-Returning-Writer.html#SeqMax",
        "fct-type": "newtype",
        "title": "SeqMax"
      },
      "index": {
        "description": "monoid whose mappend picks the grater value according to the second field of the tuple SeqMax Nothing is the least element of the ordering If the second fields are the same the left value is preferred In addition the first field of the selected tuple is forced to evaluate using rseq",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "SeqMax",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "Seq Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#t:TimeoutWriter",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e-based implementation of \u003ccode\u003e\u003ca\u003eMonadTimeoutWriter\u003c/a\u003e\u003c/code\u003e.  Calling\n \u003ccode\u003e\u003ca\u003epartialResult\u003c/a\u003e\u003c/code\u003e (or equivalently \u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e) combines the value with any\n previously written values using \u003ccode\u003ew\u003c/code\u003e's monoidal operation.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "data",
        "fct-source": "src/System-Timeout-Returning-Writer.html#TimeoutWriter",
        "fct-type": "data",
        "title": "TimeoutWriter"
      },
      "index": {
        "description": "An IO based implementation of MonadTimeoutWriter Calling partialResult or equivalently tell combines the value with any previously written values using monoidal operation",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "TimeoutWriter",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "Timeout Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:Last-39-",
      "description": {
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "Last'",
        "fct-source": "src/System-Timeout-Returning-Writer.html#Last%27",
        "fct-type": "function",
        "title": "Last'"
      },
      "index": {
        "description": "",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "Last'",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "Last'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:NFMonoid",
      "description": {
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "NFMonoid",
        "fct-source": "src/System-Timeout-Returning-Writer.html#NFMonoid",
        "fct-type": "function",
        "title": "NFMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "NFMonoid",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "NFMonoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:SeqMax",
      "description": {
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "SeqMax (Maybe (a, b))",
        "fct-source": "src/System-Timeout-Returning-Writer.html#SeqMax",
        "fct-type": "function",
        "title": "SeqMax"
      },
      "index": {
        "description": "",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "SeqMax",
        "normalized": "SeqMax(Maybe(a,b))",
        "package": "timeout-with-results",
        "partial": "Seq Max",
        "signature": "SeqMax(Maybe(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:contained",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given computation separately and return its result.\n Does not modify the current result!\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "m r -\u003e m (r, w)",
        "fct-source": "src/System-Timeout-Returning-Writer.html#contained",
        "fct-type": "method",
        "title": "contained"
      },
      "index": {
        "description": "Runs the given computation separately and return its result Does not modify the current result",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "contained",
        "normalized": "a b-\u003ea(b,c)",
        "package": "timeout-with-results",
        "partial": "",
        "signature": "m r-\u003em(r,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:defaultListen",
      "description": {
        "fct-descr": "\u003cp\u003eA default implementation of \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003econtained\u003c/a\u003e\u003c/code\u003e.\n Useful only for authors of implementations of \u003ccode\u003e\u003ca\u003eMonadTimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "m a -\u003e m (a, w)",
        "fct-source": "src/System-Timeout-Returning-Writer.html#defaultListen",
        "fct-type": "function",
        "title": "defaultListen"
      },
      "index": {
        "description": "default implementation of listen using contained Useful only for authors of implementations of MonadTimeout",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "defaultListen",
        "normalized": "a b-\u003ea(b,c)",
        "package": "timeout-with-results",
        "partial": "Listen",
        "signature": "m a-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:defaultPass",
      "description": {
        "fct-descr": "\u003cp\u003eA default implementation of \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003econtained\u003c/a\u003e\u003c/code\u003e.\n Useful only for authors of implementations of \u003ccode\u003e\u003ca\u003eMonadTimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "m (a, w -\u003e w) -\u003e m a",
        "fct-source": "src/System-Timeout-Returning-Writer.html#defaultPass",
        "fct-type": "function",
        "title": "defaultPass"
      },
      "index": {
        "description": "default implementation of pass using contained Useful only for authors of implementations of MonadTimeout",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "defaultPass",
        "normalized": "a(b,c-\u003ec)-\u003ea b",
        "package": "timeout-with-results",
        "partial": "Pass",
        "signature": "m(a,w-\u003ew)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:getLast-39-",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "Maybe a",
        "fct-source": "src/System-Timeout-Returning-Writer.html#Last%27",
        "fct-type": "function",
        "title": "getLast'"
      },
      "index": {
        "description": "",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "getLast'",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "Last'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:getNFMonoid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "a",
        "fct-source": "src/System-Timeout-Returning-Writer.html#NFMonoid",
        "fct-type": "function",
        "title": "getNFMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "getNFMonoid",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "NFMonoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n its output to the value of the computation.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "m a -\u003e m (a, w)",
        "fct-type": "method",
        "title": "listen"
      },
      "index": {
        "description": "listen is an action that executes the action and adds its output to the value of the computation",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "listen",
        "normalized": "a b-\u003ea(b,c)",
        "package": "timeout-with-results",
        "partial": "",
        "signature": "m a-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:partialResult",
      "description": {
        "fct-descr": "\u003cp\u003eStore a new partial result. The precise semantics of what happens\n with the written value is by intent unspecified and left to\n be decided by implementations.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "w -\u003e m ()",
        "fct-source": "src/System-Timeout-Returning-Writer.html#partialResult",
        "fct-type": "method",
        "title": "partialResult"
      },
      "index": {
        "description": "Store new partial result The precise semantics of what happens with the written value is by intent unspecified and left to be decided by implementations",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "partialResult",
        "normalized": "a-\u003eb()",
        "package": "timeout-with-results",
        "partial": "Result",
        "signature": "w-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:pass",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which\n returns a value and a function, and returns the value, applying\n the function to the output.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "m (a, w -\u003e w) -\u003e m a",
        "fct-type": "method",
        "title": "pass"
      },
      "index": {
        "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "pass",
        "normalized": "a(b,c-\u003ec)-\u003ea b",
        "package": "timeout-with-results",
        "partial": "",
        "signature": "m(a,w-\u003ew)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:runTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the given computation with a timeout limit.  Each time a value\n is written, the result of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e with the previous one is evaluated to\n \u003cem\u003eweak head normal form\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "Int-\u003e TimeoutWriter w r-\u003e IO (Maybe r, w)",
        "fct-type": "function",
        "title": "runTimeout"
      },
      "index": {
        "description": "Execute the given computation with timeout limit Each time value is written the result of mappend with the previous one is evaluated to weak head normal form",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "runTimeout",
        "normalized": "Int-\u003eTimeoutWriter a b-\u003eIO(Maybe b,a)",
        "package": "timeout-with-results",
        "partial": "Timeout",
        "signature": "Int-\u003eTimeoutWriter w r-\u003eIO(Maybe r,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:tell",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "w -\u003e m ()",
        "fct-type": "method",
        "title": "tell"
      },
      "index": {
        "description": "tell is an action that produces the output",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "tell",
        "normalized": "a-\u003eb()",
        "package": "timeout-with-results",
        "partial": "",
        "signature": "w-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:withTimeoutWriter",
      "description": {
        "fct-descr": "\u003cp\u003eModify written values using the given function.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "(w' -\u003e w) -\u003e TimeoutWriter w' a -\u003e TimeoutWriter w a",
        "fct-source": "src/System-Timeout-Returning-Writer.html#withTimeoutWriter",
        "fct-type": "function",
        "title": "withTimeoutWriter"
      },
      "index": {
        "description": "Modify written values using the given function",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "withTimeoutWriter",
        "normalized": "(a-\u003eb)-\u003eTimeoutWriter a c-\u003eTimeoutWriter b c",
        "package": "timeout-with-results",
        "partial": "Timeout Writer",
        "signature": "(w'-\u003ew)-\u003eTimeoutWriter w' a-\u003eTimeoutWriter w a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:writer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e (a,w)\u003c/code\u003e embeds a simple writer action.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "(a, w) -\u003e m a",
        "fct-type": "method",
        "title": "writer"
      },
      "index": {
        "description": "writer embeds simple writer action",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "writer",
        "normalized": "(a,b)-\u003ec a",
        "package": "timeout-with-results",
        "partial": "",
        "signature": "(a,w)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning-Writer.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eExplicitly allow interrupting the computation at this point.\n Experimental.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning.Writer",
        "fct-package": "timeout-with-results",
        "fct-signature": "m ()",
        "fct-source": "src/System-Timeout-Returning-Writer.html#yield",
        "fct-type": "method",
        "title": "yield"
      },
      "index": {
        "description": "Explicitly allow interrupting the computation at this point Experimental",
        "hierarchy": "System Timeout Returning Writer",
        "module": "System.Timeout.Returning.Writer",
        "name": "yield",
        "normalized": "a()",
        "package": "timeout-with-results",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines a simple monad for computations that can be interrupted by a\n   timeout, and save partial results before that.\n\u003c/p\u003e\u003cp\u003eIf you need a more powerful mechanism, where you can retrieve and combine\n   previously saved partial results, use module\n   \u003ca\u003eSystem.Timeout.Returning.Writer\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMind that (from documentation of \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e): \"There\n   is no guarantee that the exception will be delivered promptly, although\n   the runtime will endeavour to ensure that arbitrary delays don't occur. In\n   GHC, an exception can only be raised when a thread reaches a safe point,\n   where a safe point is where memory allocation occurs. Some loops do not\n   perform any memory allocation inside the loop and therefore cannot be\n   interrupted by a \u003ccode\u003ethrowTo\u003c/code\u003e.\"\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Timeout.Returning",
        "fct-package": "timeout-with-results",
        "fct-signature": "module",
        "fct-source": "src/System-Timeout-Returning.html",
        "fct-type": "module",
        "title": "Returning"
      },
      "index": {
        "description": "Defines simple monad for computations that can be interrupted by timeout and save partial results before that If you need more powerful mechanism where you can retrieve and combine previously saved partial results use module System.Timeout.Returning.Writer Mind that from documentation of throwTo There is no guarantee that the exception will be delivered promptly although the runtime will endeavour to ensure that arbitrary delays don occur In GHC an exception can only be raised when thread reaches safe point where safe point is where memory allocation occurs Some loops do not perform any memory allocation inside the loop and therefore cannot be interrupted by throwTo",
        "hierarchy": "System Timeout Returning",
        "module": "System.Timeout.Returning",
        "name": "Returning",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "Returning",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#t:MonadTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eMonad for computations that can save partial results\n of type \u003ccode\u003ew\u003c/code\u003e during their evaluation.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning",
        "fct-package": "timeout-with-results",
        "fct-signature": "class",
        "fct-source": "src/System-Timeout-Returning-Writer.html#MonadTimeout",
        "fct-type": "class",
        "title": "MonadTimeout"
      },
      "index": {
        "description": "Monad for computations that can save partial results of type during their evaluation",
        "hierarchy": "System Timeout Returning",
        "module": "System.Timeout.Returning",
        "name": "MonadTimeout",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "Monad Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#t:Timeout",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e-based implementation of \u003ccode\u003e\u003ca\u003eMonadTimeout\u003c/a\u003e\u003c/code\u003e.\n Calling \u003ccode\u003e\u003ca\u003epartialResult\u003c/a\u003e\u003c/code\u003e replaces any previously written value\n with the new one.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning",
        "fct-package": "timeout-with-results",
        "fct-signature": "data",
        "fct-source": "src/System-Timeout-Returning.html#Timeout",
        "fct-type": "data",
        "title": "Timeout"
      },
      "index": {
        "description": "An IO based implementation of MonadTimeout Calling partialResult replaces any previously written value with the new one",
        "hierarchy": "System Timeout Returning",
        "module": "System.Timeout.Returning",
        "name": "Timeout",
        "normalized": "",
        "package": "timeout-with-results",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#v:partialResult",
      "description": {
        "fct-descr": "\u003cp\u003eStore a new partial result. The precise semantics of what happens\n with the written value is by intent unspecified and left to\n be decided by implementations.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning",
        "fct-package": "timeout-with-results",
        "fct-signature": "w -\u003e m ()",
        "fct-source": "src/System-Timeout-Returning-Writer.html#partialResult",
        "fct-type": "method",
        "title": "partialResult"
      },
      "index": {
        "description": "Store new partial result The precise semantics of what happens with the written value is by intent unspecified and left to be decided by implementations",
        "hierarchy": "System Timeout Returning",
        "module": "System.Timeout.Returning",
        "name": "partialResult",
        "normalized": "a-\u003eb()",
        "package": "timeout-with-results",
        "partial": "Result",
        "signature": "w-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#v:runTimeoutNF",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given simple computation with the given timeout.  If the\n computation returns a value, the value is returned.  If it doesn't or\n times out, the last partial result written by \u003ccode\u003e\u003ca\u003epartialResult\u003c/a\u003e\u003c/code\u003e is returned.\n Each partial result is converted to \u003cem\u003enormal form\u003c/em\u003e prior being saved.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning",
        "fct-package": "timeout-with-results",
        "fct-signature": "Int-\u003e Timeout w (Maybe w)-\u003e IO (Maybe w)",
        "fct-type": "function",
        "title": "runTimeoutNF"
      },
      "index": {
        "description": "Runs the given simple computation with the given timeout If the computation returns value the value is returned If it doesn or times out the last partial result written by partialResult is returned Each partial result is converted to normal form prior being saved",
        "hierarchy": "System Timeout Returning",
        "module": "System.Timeout.Returning",
        "name": "runTimeoutNF",
        "normalized": "Int-\u003eTimeout a(Maybe a)-\u003eIO(Maybe a)",
        "package": "timeout-with-results",
        "partial": "Timeout NF",
        "signature": "Int-\u003eTimeout w(Maybe w)-\u003eIO(Maybe w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#v:runTimeoutWHNF",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given simple computation with the given timeout.  If the\n computation returns a value, the value is returned.  If it doesn't or\n times out, the last partial result written by \u003ccode\u003e\u003ca\u003epartialResult\u003c/a\u003e\u003c/code\u003e is returned.\n Each partial result is converted to \u003cem\u003eweak head normal form\u003c/em\u003e prior being\n saved.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning",
        "fct-package": "timeout-with-results",
        "fct-signature": "Int-\u003e Timeout w (Maybe w)-\u003e IO (Maybe w)",
        "fct-type": "function",
        "title": "runTimeoutWHNF"
      },
      "index": {
        "description": "Runs the given simple computation with the given timeout If the computation returns value the value is returned If it doesn or times out the last partial result written by partialResult is returned Each partial result is converted to weak head normal form prior being saved",
        "hierarchy": "System Timeout Returning",
        "module": "System.Timeout.Returning",
        "name": "runTimeoutWHNF",
        "normalized": "Int-\u003eTimeout a(Maybe a)-\u003eIO(Maybe a)",
        "package": "timeout-with-results",
        "partial": "Timeout WHNF",
        "signature": "Int-\u003eTimeout w(Maybe w)-\u003eIO(Maybe w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timeout-with-results/docs/System-Timeout-Returning.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eExplicitly allow interrupting the computation at this point.\n Experimental.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Returning",
        "fct-package": "timeout-with-results",
        "fct-signature": "m ()",
        "fct-source": "src/System-Timeout-Returning-Writer.html#yield",
        "fct-type": "method",
        "title": "yield"
      },
      "index": {
        "description": "Explicitly allow interrupting the computation at this point Experimental",
        "hierarchy": "System Timeout Returning",
        "module": "System.Timeout.Returning",
        "name": "yield",
        "normalized": "a()",
        "package": "timeout-with-results",
        "partial": "",
        "signature": "m()"
      }
    }
  }
]