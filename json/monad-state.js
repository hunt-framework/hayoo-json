[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#",
      "description": {
        "fct-module": "Control.Monad.Abort.Class",
        "fct-package": "monad-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Abort-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort Class",
        "module": "Control.Monad.Abort.Class",
        "name": "Class",
        "normalized": "",
        "package": "monad-state",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#t:Abort",
      "description": {
        "fct-descr": "\u003cp\u003eAn abort monad, parametrized by the type \u003ccode\u003er\u003c/code\u003e of the value to return.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Abort.Class",
        "fct-package": "monad-state",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Abort"
      },
      "index": {
        "description": "An abort monad parametrized by the type of the value to return",
        "hierarchy": "Control Monad Abort Class",
        "module": "Control.Monad.Abort.Class",
        "name": "Abort",
        "normalized": "",
        "package": "monad-state",
        "partial": "Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#t:AbortT",
      "description": {
        "fct-descr": "\u003cp\u003eAn abort monad transformer parametrized by\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - the value that will ultimately be returned; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - the inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAbortT\u003c/a\u003e\u003c/code\u003e type wraps a monadic value that is either\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er\u003c/code\u003e, which indicates that the monadic computation has\n     terminated with result \u003ccode\u003er\u003c/code\u003e and so all further steps in the computation\n     should be ignored; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, which indicates that the computation is proceding normally\n     and that its current value is \u003ccode\u003ea\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Abort.Class",
        "fct-package": "monad-state",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "AbortT"
      },
      "index": {
        "description": "An abort monad transformer parametrized by the value that will ultimately be returned and the inner monad The AbortT type wraps monadic value that is either Left which indicates that the monadic computation has terminated with result and so all further steps in the computation should be ignored or Right which indicates that the computation is proceding normally and that its current value is",
        "hierarchy": "Control Monad Abort Class",
        "module": "Control.Monad.Abort.Class",
        "name": "AbortT",
        "normalized": "",
        "package": "monad-state",
        "partial": "Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#t:MonadAbort",
      "description": {
        "fct-module": "Control.Monad.Abort.Class",
        "fct-package": "monad-state",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Abort-Class.html#MonadAbort",
        "fct-type": "class",
        "title": "MonadAbort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort Class",
        "module": "Control.Monad.Abort.Class",
        "name": "MonadAbort",
        "normalized": "",
        "package": "monad-state",
        "partial": "Monad Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#v:AbortT",
      "description": {
        "fct-module": "Control.Monad.Abort.Class",
        "fct-package": "monad-state",
        "fct-signature": "AbortT",
        "fct-type": "function",
        "title": "AbortT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort Class",
        "module": "Control.Monad.Abort.Class",
        "name": "AbortT",
        "normalized": "",
        "package": "monad-state",
        "partial": "Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#v:abort",
      "description": {
        "fct-module": "Control.Monad.Abort.Class",
        "fct-package": "monad-state",
        "fct-signature": "AbortResultType m -\u003e m a",
        "fct-source": "src/Control-Monad-Abort-Class.html#abort",
        "fct-type": "method",
        "title": "abort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort Class",
        "module": "Control.Monad.Abort.Class",
        "name": "abort",
        "normalized": "AbortResultType a-\u003ea b",
        "package": "monad-state",
        "partial": "",
        "signature": "AbortResultType m-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Class.html#v:unwrapAbortT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Abort.Class",
        "fct-package": "monad-state",
        "fct-signature": "m (Either r a)",
        "fct-type": "function",
        "title": "unwrapAbortT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort Class",
        "module": "Control.Monad.Abort.Class",
        "name": "unwrapAbortT",
        "normalized": "",
        "package": "monad-state",
        "partial": "Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Instances.html#",
      "description": {
        "fct-module": "Control.Monad.Abort.Instances",
        "fct-package": "monad-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Abort-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort Instances",
        "module": "Control.Monad.Abort.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "monad-state",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort-Instances.html#v:mapAbortT",
      "description": {
        "fct-module": "Control.Monad.Abort.Instances",
        "fct-package": "monad-state",
        "fct-signature": "(m (Either r a) -\u003e n (Either r' b)) -\u003e AbortT r m a -\u003e AbortT r' n b",
        "fct-source": "src/Control-Monad-Abort-Instances.html#mapAbortT",
        "fct-type": "function",
        "title": "mapAbortT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort Instances",
        "module": "Control.Monad.Abort.Instances",
        "name": "mapAbortT",
        "normalized": "(a(Either b c)-\u003ed(Either e f))-\u003eAbortT b a c-\u003eAbortT e d f",
        "package": "monad-state",
        "partial": "Abort",
        "signature": "(m(Either r a)-\u003en(Either r' b))-\u003eAbortT r m a-\u003eAbortT r' n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#",
      "description": {
        "fct-module": "Control.Monad.Abort",
        "fct-package": "monad-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Abort.html",
        "fct-type": "module",
        "title": "Abort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort",
        "module": "Control.Monad.Abort",
        "name": "Abort",
        "normalized": "",
        "package": "monad-state",
        "partial": "Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#t:Abort",
      "description": {
        "fct-descr": "\u003cp\u003eAn abort monad, parametrized by the type \u003ccode\u003er\u003c/code\u003e of the value to return.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Abort",
        "fct-package": "monad-state",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Abort"
      },
      "index": {
        "description": "An abort monad parametrized by the type of the value to return",
        "hierarchy": "Control Monad Abort",
        "module": "Control.Monad.Abort",
        "name": "Abort",
        "normalized": "",
        "package": "monad-state",
        "partial": "Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#t:AbortT",
      "description": {
        "fct-descr": "\u003cp\u003eAn abort monad transformer parametrized by\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - the value that will ultimately be returned; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - the inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAbortT\u003c/a\u003e\u003c/code\u003e type wraps a monadic value that is either\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er\u003c/code\u003e, which indicates that the monadic computation has\n     terminated with result \u003ccode\u003er\u003c/code\u003e and so all further steps in the computation\n     should be ignored; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, which indicates that the computation is proceding normally\n     and that its current value is \u003ccode\u003ea\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Abort",
        "fct-package": "monad-state",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "AbortT"
      },
      "index": {
        "description": "An abort monad transformer parametrized by the value that will ultimately be returned and the inner monad The AbortT type wraps monadic value that is either Left which indicates that the monadic computation has terminated with result and so all further steps in the computation should be ignored or Right which indicates that the computation is proceding normally and that its current value is",
        "hierarchy": "Control Monad Abort",
        "module": "Control.Monad.Abort",
        "name": "AbortT",
        "normalized": "",
        "package": "monad-state",
        "partial": "Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#t:MonadAbort",
      "description": {
        "fct-module": "Control.Monad.Abort",
        "fct-package": "monad-state",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Abort-Class.html#MonadAbort",
        "fct-type": "class",
        "title": "MonadAbort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort",
        "module": "Control.Monad.Abort",
        "name": "MonadAbort",
        "normalized": "",
        "package": "monad-state",
        "partial": "Monad Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#v:AbortT",
      "description": {
        "fct-module": "Control.Monad.Abort",
        "fct-package": "monad-state",
        "fct-signature": "AbortT",
        "fct-type": "function",
        "title": "AbortT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort",
        "module": "Control.Monad.Abort",
        "name": "AbortT",
        "normalized": "",
        "package": "monad-state",
        "partial": "Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#v:abort",
      "description": {
        "fct-module": "Control.Monad.Abort",
        "fct-package": "monad-state",
        "fct-signature": "AbortResultType m -\u003e m a",
        "fct-source": "src/Control-Monad-Abort-Class.html#abort",
        "fct-type": "method",
        "title": "abort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort",
        "module": "Control.Monad.Abort",
        "name": "abort",
        "normalized": "AbortResultType a-\u003ea b",
        "package": "monad-state",
        "partial": "",
        "signature": "AbortResultType m-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#v:mapAbortT",
      "description": {
        "fct-module": "Control.Monad.Abort",
        "fct-package": "monad-state",
        "fct-signature": "(m (Either r a) -\u003e n (Either r' b)) -\u003e AbortT r m a -\u003e AbortT r' n b",
        "fct-source": "src/Control-Monad-Abort-Instances.html#mapAbortT",
        "fct-type": "function",
        "title": "mapAbortT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort",
        "module": "Control.Monad.Abort",
        "name": "mapAbortT",
        "normalized": "(a(Either b c)-\u003ed(Either e f))-\u003eAbortT b a c-\u003eAbortT e d f",
        "package": "monad-state",
        "partial": "Abort",
        "signature": "(m(Either r a)-\u003en(Either r' b))-\u003eAbortT r m a-\u003eAbortT r' n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#v:runAbort",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the abort monad computation and return the resulting value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Abort",
        "fct-package": "monad-state",
        "fct-signature": "Abort r r-\u003e r",
        "fct-type": "function",
        "title": "runAbort"
      },
      "index": {
        "description": "Execute the abort monad computation and return the resulting value",
        "hierarchy": "Control Monad Abort",
        "module": "Control.Monad.Abort",
        "name": "runAbort",
        "normalized": "Abort a a-\u003ea",
        "package": "monad-state",
        "partial": "Abort",
        "signature": "Abort r r-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#v:runAbortT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the abort monad computation and return the resulting\n   (monadic) value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Abort",
        "fct-package": "monad-state",
        "fct-signature": "AbortT r m r-\u003e m r",
        "fct-type": "function",
        "title": "runAbortT"
      },
      "index": {
        "description": "Execute the abort monad computation and return the resulting monadic value",
        "hierarchy": "Control Monad Abort",
        "module": "Control.Monad.Abort",
        "name": "runAbortT",
        "normalized": "AbortT a b a-\u003eb a",
        "package": "monad-state",
        "partial": "Abort",
        "signature": "AbortT r m r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Abort.html#v:unwrapAbortT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Abort",
        "fct-package": "monad-state",
        "fct-signature": "m (Either r a)",
        "fct-type": "function",
        "title": "unwrapAbortT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Abort",
        "module": "Control.Monad.Abort",
        "name": "unwrapAbortT",
        "normalized": "",
        "package": "monad-state",
        "partial": "Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Record.html",
        "fct-type": "module",
        "title": "Record"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "Record",
        "normalized": "",
        "package": "monad-state",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#t::-45--45--62-",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Record.html#%3A--%3E",
        "fct-type": "newtype",
        "title": ":--\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": ":--\u003e",
        "normalized": "",
        "package": "monad-state",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#t:MLens",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Record.html#MLens",
        "fct-type": "class",
        "title": "MLens"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "MLens",
        "normalized": "",
        "package": "monad-state",
        "partial": "MLens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-36-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodL\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(f :-\u003e a) -\u003e (a -\u003e a) -\u003e f -\u003e f",
        "fct-source": "src/Control-Monad-Record.html#%24%3A",
        "fct-type": "function",
        "title": "($:)"
      },
      "index": {
        "description": "modL",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "($:) $:",
        "normalized": "(a-\u003eb)-\u003e(b-\u003eb)-\u003ea-\u003ea",
        "package": "monad-state",
        "partial": "",
        "signature": "(f-\u003ea)-\u003e(a-\u003ea)-\u003ef-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-36-::",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(StateType m :-\u003e a) -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Control-Monad-Record.html#%24%3A%3A",
        "fct-type": "function",
        "title": "($::)"
      },
      "index": {
        "description": "modM",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "($::) $::",
        "normalized": "(StateType a-\u003eb)-\u003e(b-\u003eb)-\u003ea()",
        "package": "monad-state",
        "partial": "",
        "signature": "(StateType m-\u003ea)-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60--36-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodMAbort\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "l (StateType m) b -\u003e (MLensA l b :-\u003e a) -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Control-Monad-Record.html#%3C%24%3A",
        "fct-type": "function",
        "title": "(\u003c$:)"
      },
      "index": {
        "description": "modMAbort",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(\u003c$:) \u003c$:",
        "normalized": "a(StateType b)c-\u003e(MLensA a c-\u003ed)-\u003e(d-\u003ed)-\u003eb()",
        "package": "monad-state",
        "partial": "",
        "signature": "l(StateType m)b-\u003e(MLensA l b-\u003ea)-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60--45--62-",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "l (MLensA l' a') a -\u003e l' f a' -\u003e f :--\u003e MLensA l a",
        "fct-source": "src/Control-Monad-Record.html#%3C-%3E",
        "fct-type": "function",
        "title": "(\u003c-\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(\u003c-\u003e) \u003c-\u003e",
        "normalized": "a(MLensA b c)d-\u003eb e c-\u003ee-\u003eMLensA a d",
        "package": "monad-state",
        "partial": "",
        "signature": "l(MLensA l' a')a-\u003el' f a'-\u003ef-\u003eMLensA l a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60--60-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetMAbort\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "r -\u003e l (StateType (AbortT r m)) b -\u003e (MLensA l b :-\u003e a) -\u003e AbortT r m a",
        "fct-source": "src/Control-Monad-Record.html#%3C%3C%3A",
        "fct-type": "function",
        "title": "(\u003c\u003c:)"
      },
      "index": {
        "description": "getMAbort",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(\u003c\u003c:) \u003c\u003c:",
        "normalized": "a-\u003eb(StateType(AbortT a c))d-\u003e(MLensA b d-\u003ee)-\u003eAbortT a c e",
        "package": "monad-state",
        "partial": "",
        "signature": "r-\u003el(StateType(AbortT r m))b-\u003e(MLensA l b-\u003ea)-\u003eAbortT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60--60-::",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetMAbort\u003c/a\u003e\u003c/code\u003e ()\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "l (StateType (AbortT r m)) b -\u003e (MLensA l b :-\u003e a) -\u003e AbortT () m a",
        "fct-source": "src/Control-Monad-Record.html#%3C%3C%3A%3A",
        "fct-type": "function",
        "title": "(\u003c\u003c::)"
      },
      "index": {
        "description": "getMAbort",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(\u003c\u003c::) \u003c\u003c::",
        "normalized": "a(StateType(AbortT b c))d-\u003e(MLensA a d-\u003ee)-\u003eAbortT()c e",
        "package": "monad-state",
        "partial": "",
        "signature": "l(StateType(AbortT r m))b-\u003e(MLensA l b-\u003ea)-\u003eAbortT()m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60--61-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetMAbort\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "l (StateType m) b -\u003e (MLensA l b :-\u003e a) -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-Record.html#%3C%3D%3A",
        "fct-type": "function",
        "title": "(\u003c=:)"
      },
      "index": {
        "description": "setMAbort",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(\u003c=:) \u003c=:",
        "normalized": "a(StateType b)c-\u003e(MLensA a c-\u003ed)-\u003ed-\u003eb()",
        "package": "monad-state",
        "partial": "",
        "signature": "l(StateType m)b-\u003e(MLensA l b-\u003ea)-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetL\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(f :-\u003e a) -\u003e f -\u003e a",
        "fct-source": "src/Control-Monad-Record.html#%3C%3A",
        "fct-type": "function",
        "title": "(\u003c:)"
      },
      "index": {
        "description": "getL",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(\u003c:) \u003c:",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "monad-state",
        "partial": "",
        "signature": "(f-\u003ea)-\u003ef-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60-:-60-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easkM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(EnvType m :-\u003e a) -\u003e m a",
        "fct-source": "src/Control-Monad-Record.html#%3C%3A%3C",
        "fct-type": "function",
        "title": "(\u003c:\u003c)"
      },
      "index": {
        "description": "askM",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(\u003c:\u003c) \u003c:\u003c",
        "normalized": "(EnvType a-\u003eb)-\u003ea b",
        "package": "monad-state",
        "partial": "",
        "signature": "(EnvType m-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-60-::",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(StateType m :-\u003e a) -\u003e m a",
        "fct-source": "src/Control-Monad-Record.html#%3C%3A%3A",
        "fct-type": "function",
        "title": "(\u003c::)"
      },
      "index": {
        "description": "getM",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(\u003c::) \u003c::",
        "normalized": "(StateType a-\u003eb)-\u003ea b",
        "package": "monad-state",
        "partial": "",
        "signature": "(StateType m-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-61-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetL\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(f :-\u003e a) -\u003e a -\u003e f -\u003e f",
        "fct-source": "src/Control-Monad-Record.html#%3D%3A",
        "fct-type": "function",
        "title": "(=:)"
      },
      "index": {
        "description": "setL",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(=:) =:",
        "normalized": "(a-\u003eb)-\u003eb-\u003ea-\u003ea",
        "package": "monad-state",
        "partial": "",
        "signature": "(f-\u003ea)-\u003ea-\u003ef-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-61-::",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(StateType m :-\u003e a) -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-Record.html#%3D%3A%3A",
        "fct-type": "function",
        "title": "(=::)"
      },
      "index": {
        "description": "setM",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(=::) =::",
        "normalized": "(StateType a-\u003eb)-\u003eb-\u003ea()",
        "package": "monad-state",
        "partial": "",
        "signature": "(StateType m-\u003ea)-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-62--36--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftSubMaybeState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "l s a -\u003e StateT (MLensA l a) m a1 -\u003e MaybeT (StateT s m) a1",
        "fct-source": "src/Control-Monad-Record.html#%3E%24%24%3E",
        "fct-type": "function",
        "title": "(\u003e$$\u003e)"
      },
      "index": {
        "description": "liftSubMaybeState",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(\u003e$$\u003e) \u003e$$\u003e",
        "normalized": "a b c-\u003eStateT(MLensA a c)d c-\u003eMaybeT(StateT b d)c",
        "package": "monad-state",
        "partial": "",
        "signature": "l s a-\u003eStateT(MLensA l a)m a-\u003eMaybeT(StateT s m)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-62--36--60-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(StateType m :-\u003e s) -\u003e StateT s m a -\u003e m a",
        "fct-source": "src/Control-Monad-Record.html#%3E%24%3C",
        "fct-type": "function",
        "title": "(\u003e$\u003c)"
      },
      "index": {
        "description": "liftState",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(\u003e$\u003c) \u003e$\u003c",
        "normalized": "(StateType a-\u003eb)-\u003eStateT b a c-\u003ea c",
        "package": "monad-state",
        "partial": "",
        "signature": "(StateType m-\u003es)-\u003eStateT s m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:-62--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftSubState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(s :-\u003e s') -\u003e StateT s' m a -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Record.html#%3E%24%3E",
        "fct-type": "function",
        "title": "(\u003e$\u003e)"
      },
      "index": {
        "description": "liftSubState",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "(\u003e$\u003e) \u003e$\u003e",
        "normalized": "(a-\u003eb)-\u003eStateT b c d-\u003eStateT a c d",
        "package": "monad-state",
        "partial": "",
        "signature": "(s-\u003es')-\u003eStateT s' m a-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:MaybeLens",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "MaybeLens",
        "fct-source": "src/Control-Monad-Record.html#%3A--%3E",
        "fct-type": "function",
        "title": "MaybeLens"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "MaybeLens",
        "normalized": "",
        "package": "monad-state",
        "partial": "Maybe Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:askM",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(EnvType m :-\u003e a) -\u003e m a",
        "fct-source": "src/Control-Monad-Record.html#askM",
        "fct-type": "function",
        "title": "askM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "askM",
        "normalized": "(EnvType a-\u003eb)-\u003ea b",
        "package": "monad-state",
        "partial": "",
        "signature": "(EnvType m-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:getM",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(StateType m :-\u003e a) -\u003e m a",
        "fct-source": "src/Control-Monad-Record.html#getM",
        "fct-type": "function",
        "title": "getM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "getM",
        "normalized": "(StateType a-\u003eb)-\u003ea b",
        "package": "monad-state",
        "partial": "",
        "signature": "(StateType m-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:getMAbort",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "r -\u003e l (StateType (AbortT r m)) b -\u003e (MLensA l b :-\u003e a) -\u003e AbortT r m a",
        "fct-source": "src/Control-Monad-Record.html#getMAbort",
        "fct-type": "function",
        "title": "getMAbort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "getMAbort",
        "normalized": "a-\u003eb(StateType(AbortT a c))d-\u003e(MLensA b d-\u003ee)-\u003eAbortT a c e",
        "package": "monad-state",
        "partial": "MAbort",
        "signature": "r-\u003el(StateType(AbortT r m))b-\u003e(MLensA l b-\u003ea)-\u003eAbortT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:liftState",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(StateType m :-\u003e s) -\u003e StateT s m a -\u003e m a",
        "fct-source": "src/Control-Monad-Record.html#liftState",
        "fct-type": "function",
        "title": "liftState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "liftState",
        "normalized": "(StateType a-\u003eb)-\u003eStateT b a c-\u003ea c",
        "package": "monad-state",
        "partial": "State",
        "signature": "(StateType m-\u003es)-\u003eStateT s m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:liftSubMaybeState",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "l (StateType (t m)) a -\u003e StateT (MLensA l a) m a1 -\u003e MaybeT (t m) a1",
        "fct-source": "src/Control-Monad-Record.html#liftSubMaybeState",
        "fct-type": "function",
        "title": "liftSubMaybeState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "liftSubMaybeState",
        "normalized": "a(StateType(b c))d-\u003eStateT(MLensA a d)c d-\u003eMaybeT(b c)d",
        "package": "monad-state",
        "partial": "Sub Maybe State",
        "signature": "l(StateType(t m))a-\u003eStateT(MLensA l a)m a-\u003eMaybeT(t m)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:liftSubState",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(StateType (t m) :-\u003e s) -\u003e StateT s m a -\u003e t m a",
        "fct-source": "src/Control-Monad-Record.html#liftSubState",
        "fct-type": "function",
        "title": "liftSubState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "liftSubState",
        "normalized": "(StateType(a b)-\u003ec)-\u003eStateT c b d-\u003ea b d",
        "package": "monad-state",
        "partial": "Sub State",
        "signature": "(StateType(t m)-\u003es)-\u003eStateT s m a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:maybeAbort",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "r -\u003e Maybe a -\u003e AbortT r m a",
        "fct-source": "src/Control-Monad-Record.html#maybeAbort",
        "fct-type": "function",
        "title": "maybeAbort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "maybeAbort",
        "normalized": "a-\u003eMaybe b-\u003eAbortT a c b",
        "package": "monad-state",
        "partial": "Abort",
        "signature": "r-\u003eMaybe a-\u003eAbortT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:maybeAbortM",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "AbortResultType (t m) -\u003e MaybeT m a -\u003e t m a",
        "fct-source": "src/Control-Monad-Record.html#maybeAbortM",
        "fct-type": "function",
        "title": "maybeAbortM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "maybeAbortM",
        "normalized": "AbortResultType(a b)-\u003eMaybeT b c-\u003ea b c",
        "package": "monad-state",
        "partial": "Abort",
        "signature": "AbortResultType(t m)-\u003eMaybeT m a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:modM",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(StateType m :-\u003e a) -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Control-Monad-Record.html#modM",
        "fct-type": "function",
        "title": "modM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "modM",
        "normalized": "(StateType a-\u003eb)-\u003e(b-\u003eb)-\u003ea()",
        "package": "monad-state",
        "partial": "",
        "signature": "(StateType m-\u003ea)-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:modMAbort",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "l (StateType m) b -\u003e (MLensA l b :-\u003e a) -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Control-Monad-Record.html#modMAbort",
        "fct-type": "function",
        "title": "modMAbort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "modMAbort",
        "normalized": "a(StateType b)c-\u003e(MLensA a c-\u003ed)-\u003e(d-\u003ed)-\u003eb()",
        "package": "monad-state",
        "partial": "MAbort",
        "signature": "l(StateType m)b-\u003e(MLensA l b-\u003ea)-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:setM",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "(StateType m :-\u003e a) -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-Record.html#setM",
        "fct-type": "function",
        "title": "setM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "setM",
        "normalized": "(StateType a-\u003eb)-\u003eb-\u003ea()",
        "package": "monad-state",
        "partial": "",
        "signature": "(StateType m-\u003ea)-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:setMAbort",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "l (StateType m) b -\u003e (MLensA l b :-\u003e a) -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-Record.html#setMAbort",
        "fct-type": "function",
        "title": "setMAbort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "setMAbort",
        "normalized": "a(StateType b)c-\u003e(MLensA a c-\u003ed)-\u003ed-\u003eb()",
        "package": "monad-state",
        "partial": "MAbort",
        "signature": "l(StateType m)b-\u003e(MLensA l b-\u003ea)-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:toLens",
      "description": {
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "l f a -\u003e f :-\u003e Maybe (MLensA l a)",
        "fct-source": "src/Control-Monad-Record.html#toLens",
        "fct-type": "method",
        "title": "toLens"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "toLens",
        "normalized": "a b c-\u003eb-\u003eMaybe(MLensA a c)",
        "package": "monad-state",
        "partial": "Lens",
        "signature": "l f a-\u003ef-\u003eMaybe(MLensA l a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Record.html#v:unMaybeLens",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Record",
        "fct-package": "monad-state",
        "fct-signature": "f :-\u003e Maybe a",
        "fct-source": "src/Control-Monad-Record.html#%3A--%3E",
        "fct-type": "function",
        "title": "unMaybeLens"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Record",
        "module": "Control.Monad.Record",
        "name": "unMaybeLens",
        "normalized": "a-\u003eMaybe b",
        "package": "monad-state",
        "partial": "Maybe Lens",
        "signature": "f-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#",
      "description": {
        "fct-module": "Control.Monad.Runnable",
        "fct-package": "monad-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Runnable.html",
        "fct-type": "module",
        "title": "Runnable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Runnable",
        "module": "Control.Monad.Runnable",
        "name": "Runnable",
        "normalized": "",
        "package": "monad-state",
        "partial": "Runnable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#t:MonadRunnable",
      "description": {
        "fct-descr": "\u003cp\u003eMonads that can be run in the IO monad\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Runnable",
        "fct-package": "monad-state",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Runnable.html#MonadRunnable",
        "fct-type": "class",
        "title": "MonadRunnable"
      },
      "index": {
        "description": "Monads that can be run in the IO monad",
        "hierarchy": "Control Monad Runnable",
        "module": "Control.Monad.Runnable",
        "name": "MonadRunnable",
        "normalized": "",
        "package": "monad-state",
        "partial": "Monad Runnable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#t:RunnableContainer",
      "description": {
        "fct-module": "Control.Monad.Runnable",
        "fct-package": "monad-state",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Runnable.html#RunnableContainer",
        "fct-type": "class",
        "title": "RunnableContainer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Runnable",
        "module": "Control.Monad.Runnable",
        "name": "RunnableContainer",
        "normalized": "",
        "package": "monad-state",
        "partial": "Runnable Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#v:construct",
      "description": {
        "fct-module": "Control.Monad.Runnable",
        "fct-package": "monad-state",
        "fct-signature": "ConstructType m a -\u003e m a",
        "fct-source": "src/Control-Monad-Runnable.html#construct",
        "fct-type": "method",
        "title": "construct"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Runnable",
        "module": "Control.Monad.Runnable",
        "name": "construct",
        "normalized": "ConstructType a b-\u003ea b",
        "package": "monad-state",
        "partial": "",
        "signature": "ConstructType m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#v:rcToIO",
      "description": {
        "fct-module": "Control.Monad.Runnable",
        "fct-package": "monad-state",
        "fct-signature": "m a -\u003e IO a",
        "fct-source": "src/Control-Monad-Runnable.html#rcToIO",
        "fct-type": "method",
        "title": "rcToIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Runnable",
        "module": "Control.Monad.Runnable",
        "name": "rcToIO",
        "normalized": "a b-\u003eIO b",
        "package": "monad-state",
        "partial": "To IO",
        "signature": "m a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#v:run",
      "description": {
        "fct-module": "Control.Monad.Runnable",
        "fct-package": "monad-state",
        "fct-signature": "m a -\u003e RunData m -\u003e RunContainer m (ConstructType m a)",
        "fct-source": "src/Control-Monad-Runnable.html#run",
        "fct-type": "method",
        "title": "run"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Runnable",
        "module": "Control.Monad.Runnable",
        "name": "run",
        "normalized": "a b-\u003eRunData a-\u003eRunContainer a(ConstructType a b)",
        "package": "monad-state",
        "partial": "",
        "signature": "m a-\u003eRunData m-\u003eRunContainer m(ConstructType m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Runnable.html#v:runData",
      "description": {
        "fct-module": "Control.Monad.Runnable",
        "fct-package": "monad-state",
        "fct-signature": "m (RunData m)",
        "fct-source": "src/Control-Monad-Runnable.html#runData",
        "fct-type": "method",
        "title": "runData"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Runnable",
        "module": "Control.Monad.Runnable",
        "name": "runData",
        "normalized": "",
        "package": "monad-state",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#",
      "description": {
        "fct-module": "Control.Monad.Short",
        "fct-package": "monad-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Short.html",
        "fct-type": "module",
        "title": "Short"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Short",
        "module": "Control.Monad.Short",
        "name": "Short",
        "normalized": "",
        "package": "monad-state",
        "partial": "Short",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#t:MonadErrorShortable",
      "description": {
        "fct-module": "Control.Monad.Short",
        "fct-package": "monad-state",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Short.html#MonadErrorShortable",
        "fct-type": "type",
        "title": "MonadErrorShortable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Short",
        "module": "Control.Monad.Short",
        "name": "MonadErrorShortable",
        "normalized": "",
        "package": "monad-state",
        "partial": "Monad Error Shortable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#t:MonadShort",
      "description": {
        "fct-descr": "\u003cp\u003eMinimal complete definition: unError\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Short",
        "fct-package": "monad-state",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Short.html#MonadShort",
        "fct-type": "class",
        "title": "MonadShort"
      },
      "index": {
        "description": "Minimal complete definition unError",
        "hierarchy": "Control Monad Short",
        "module": "Control.Monad.Short",
        "name": "MonadShort",
        "normalized": "",
        "package": "monad-state",
        "partial": "Monad Short",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#t:MonadShortable",
      "description": {
        "fct-module": "Control.Monad.Short",
        "fct-package": "monad-state",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Short.html#MonadShortable",
        "fct-type": "type",
        "title": "MonadShortable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Short",
        "module": "Control.Monad.Short",
        "name": "MonadShortable",
        "normalized": "",
        "package": "monad-state",
        "partial": "Monad Shortable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#v:short",
      "description": {
        "fct-module": "Control.Monad.Short",
        "fct-package": "monad-state",
        "fct-signature": "m a -\u003e MonadShortable r m a",
        "fct-source": "src/Control-Monad-Short.html#short",
        "fct-type": "function",
        "title": "short"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Short",
        "module": "Control.Monad.Short",
        "name": "short",
        "normalized": "a b-\u003eMonadShortable c a b",
        "package": "monad-state",
        "partial": "",
        "signature": "m a-\u003eMonadShortable r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#v:unError",
      "description": {
        "fct-module": "Control.Monad.Short",
        "fct-package": "monad-state",
        "fct-signature": "r -\u003e MonadErrorShortable m a -\u003e MonadShortable r m a",
        "fct-source": "src/Control-Monad-Short.html#unError",
        "fct-type": "method",
        "title": "unError"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Short",
        "module": "Control.Monad.Short",
        "name": "unError",
        "normalized": "a-\u003eMonadErrorShortable b c-\u003eMonadShortable a b c",
        "package": "monad-state",
        "partial": "Error",
        "signature": "r-\u003eMonadErrorShortable m a-\u003eMonadShortable r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#v:unErrorShort",
      "description": {
        "fct-module": "Control.Monad.Short",
        "fct-package": "monad-state",
        "fct-signature": "r -\u003e MonadErrorShortable m r -\u003e m r",
        "fct-source": "src/Control-Monad-Short.html#unErrorShort",
        "fct-type": "method",
        "title": "unErrorShort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Short",
        "module": "Control.Monad.Short",
        "name": "unErrorShort",
        "normalized": "a-\u003eMonadErrorShortable b a-\u003eb a",
        "package": "monad-state",
        "partial": "Error Short",
        "signature": "r-\u003eMonadErrorShortable m r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#v:unErrorShort_",
      "description": {
        "fct-module": "Control.Monad.Short",
        "fct-package": "monad-state",
        "fct-signature": "MonadErrorShortable m () -\u003e m ()",
        "fct-source": "src/Control-Monad-Short.html#unErrorShort_",
        "fct-type": "method",
        "title": "unErrorShort_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Short",
        "module": "Control.Monad.Short",
        "name": "unErrorShort_",
        "normalized": "MonadErrorShortable a()-\u003ea()",
        "package": "monad-state",
        "partial": "Error Short",
        "signature": "MonadErrorShortable m()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#v:unError_",
      "description": {
        "fct-module": "Control.Monad.Short",
        "fct-package": "monad-state",
        "fct-signature": "MonadErrorShortable m a -\u003e MonadShortable () m a",
        "fct-source": "src/Control-Monad-Short.html#unError_",
        "fct-type": "method",
        "title": "unError_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Short",
        "module": "Control.Monad.Short",
        "name": "unError_",
        "normalized": "MonadErrorShortable a b-\u003eMonadShortable()a b",
        "package": "monad-state",
        "partial": "Error",
        "signature": "MonadErrorShortable m a-\u003eMonadShortable()m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/Control-Monad-Short.html#v:unShort",
      "description": {
        "fct-module": "Control.Monad.Short",
        "fct-package": "monad-state",
        "fct-signature": "MonadShortable r m r -\u003e m r",
        "fct-source": "src/Control-Monad-Short.html#unShort",
        "fct-type": "function",
        "title": "unShort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Short",
        "module": "Control.Monad.Short",
        "name": "unShort",
        "normalized": "MonadShortable a b a-\u003eb a",
        "package": "monad-state",
        "partial": "Short",
        "signature": "MonadShortable r m r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/System-Timeout-Monad.html#",
      "description": {
        "fct-module": "System.Timeout.Monad",
        "fct-package": "monad-state",
        "fct-signature": "module",
        "fct-source": "src/System-Timeout-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "",
        "hierarchy": "System Timeout Monad",
        "module": "System.Timeout.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "monad-state",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/System-Timeout-Monad.html#v:timeoutM",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003etimeoutM\u003c/a\u003e\u003c/code\u003e, but the result is the same monad, making passing the data needed to run the monad unnecessary\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Monad",
        "fct-package": "monad-state",
        "fct-signature": "i -\u003e m a -\u003e m (Maybe (m a))",
        "fct-source": "src/System-Timeout-Monad.html#timeoutM",
        "fct-type": "function",
        "title": "timeoutM"
      },
      "index": {
        "description": "Equivalent to timeoutM but the result is the same monad making passing the data needed to run the monad unnecessary",
        "hierarchy": "System Timeout Monad",
        "module": "System.Timeout.Monad",
        "name": "timeoutM",
        "normalized": "a-\u003eb c-\u003eb(Maybe(b c))",
        "package": "monad-state",
        "partial": "",
        "signature": "i-\u003em a-\u003em(Maybe(m a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/System-Timeout-Monad.html#v:timeoutR",
      "description": {
        "fct-descr": "\u003cp\u003eRun an action that is runnable in the IO monad within a time limit\n\u003c/p\u003e\u003cp\u003eThe time limit is specified in microseconds, and is subject to the same sas \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e.  \n Finally, the action to be run itself is passed.  The result is an IO action, which is\n normally lifted with \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e to be run in the same IO (see \u003ccode\u003e\u003ca\u003etimeoutM\u003c/a\u003e\u003c/code\u003e).  The action,\n when run, returns the resulting monadic value if it was run in time.  Conceptually,\n one can think of this as running a local monad, perhaps a copy, in the IO monad;\n the effects of running in the IO monad are unavoidably irreversible, but the resulting monadic\n value can be optionally ignored, in which case it is not evaluated in the parent monad\n and no effects are present in the outer layers of the monad.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Monad",
        "fct-package": "monad-state",
        "fct-signature": "i -\u003e m a -\u003e RunData m -\u003e IO (Maybe (m a))",
        "fct-source": "src/System-Timeout-Monad.html#timeoutR",
        "fct-type": "function",
        "title": "timeoutR"
      },
      "index": {
        "description": "Run an action that is runnable in the IO monad within time limit The time limit is specified in microseconds and is subject to the same sas timeout Finally the action to be run itself is passed The result is an IO action which is normally lifted with liftIO to be run in the same IO see timeoutM The action when run returns the resulting monadic value if it was run in time Conceptually one can think of this as running local monad perhaps copy in the IO monad the effects of running in the IO monad are unavoidably irreversible but the resulting monadic value can be optionally ignored in which case it is not evaluated in the parent monad and no effects are present in the outer layers of the monad",
        "hierarchy": "System Timeout Monad",
        "module": "System.Timeout.Monad",
        "name": "timeoutR",
        "normalized": "a-\u003eb c-\u003eRunData b-\u003eIO(Maybe(b c))",
        "package": "monad-state",
        "partial": "",
        "signature": "i-\u003em a-\u003eRunData m-\u003eIO(Maybe(m a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-state/docs/System-Timeout-Monad.html#v:timeoutVoid",
      "description": {
        "fct-descr": "\u003cp\u003eIf the void action runs in time, it is run and \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e is returned; otherwise \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e is returned when running the action in time does not succeed\n\u003c/p\u003e\u003cp\u003eFor example, to run a void action within one second,\n one might write\n\u003c/p\u003e\u003cpre\u003e succeeded \u003c- timeoutVoid\n\u003c/pre\u003e\u003cp\u003eThe effects of \u003ca\u003eaction\u003c/a\u003e will be fully executed if succeeded\n is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e; if succeeded is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the action could not run\n in time, and only global IO actions that were performed while\n the local monad was being evaluated will be run.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Monad",
        "fct-package": "monad-state",
        "fct-signature": "i -\u003e m () -\u003e m Bool",
        "fct-source": "src/System-Timeout-Monad.html#timeoutVoid",
        "fct-type": "function",
        "title": "timeoutVoid"
      },
      "index": {
        "description": "If the void action runs in time it is run and True is returned otherwise False is returned when running the action in time does not succeed For example to run void action within one second one might write succeeded timeoutVoid The effects of action will be fully executed if succeeded is True if succeeded is False the action could not run in time and only global IO actions that were performed while the local monad was being evaluated will be run",
        "hierarchy": "System Timeout Monad",
        "module": "System.Timeout.Monad",
        "name": "timeoutVoid",
        "normalized": "a-\u003eb()-\u003eb Bool",
        "package": "monad-state",
        "partial": "Void",
        "signature": "i-\u003em()-\u003em Bool"
      }
    }
  }
]