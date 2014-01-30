[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA state monad which allows the state to be saved and restored on a\n stack.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations with implicit access to a\n read/write state, with additional operations for pushing the\n current state on a stack and later restoring the state from the top\n of the stack.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Same as for the usual state monad; the state\n and accompanying stack of saved states are threaded through\n computations.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Remembering state while emitting commands for some\n system which itself has saveable/restorable state, such as OpenGL\n or Cairo.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSimple example:\n\u003c/p\u003e\u003cpre\u003e ghci\u003e let p = get \u003e\u003e= liftIO . print\n ghci\u003e evalStateStackT (put 2 \u003e\u003e p \u003e\u003e save \u003e\u003e put 3 \u003e\u003e p \u003e\u003e restore \u003e\u003e p) 0\n 2\n 3\n 2\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-StateStack.html",
        "fct-type": "module",
        "title": "StateStack"
      },
      "index": {
        "description": "state monad which allows the state to be saved and restored on stack Computation type Computations with implicit access to read write state with additional operations for pushing the current state on stack and later restoring the state from the top of the stack Binding strategy Same as for the usual state monad the state and accompanying stack of saved states are threaded through computations Useful for Remembering state while emitting commands for some system which itself has saveable restorable state such as OpenGL or Cairo Simple example ghci let get liftIO print ghci evalStateStackT put save put restore",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "StateStack",
        "normalized": "",
        "package": "statestack",
        "partial": "State Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#t:MonadStateStack",
      "description": {
        "fct-descr": "\u003cp\u003eClass of monads which support a state along with a stack for\n   saving and restoring states.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-StateStack.html#MonadStateStack",
        "fct-type": "class",
        "title": "MonadStateStack"
      },
      "index": {
        "description": "Class of monads which support state along with stack for saving and restoring states",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "MonadStateStack",
        "normalized": "",
        "package": "statestack",
        "partial": "Monad State Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#t:StateStack",
      "description": {
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-StateStack.html#StateStack",
        "fct-type": "type",
        "title": "StateStack"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "StateStack",
        "normalized": "",
        "package": "statestack",
        "partial": "State Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#t:StateStackT",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer which adds a save/restorable state to an\n   existing monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-StateStack.html#StateStackT",
        "fct-type": "newtype",
        "title": "StateStackT"
      },
      "index": {
        "description": "monad transformer which adds save restorable state to an existing monad",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "StateStackT",
        "normalized": "",
        "package": "statestack",
        "partial": "State Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:StateStackT",
      "description": {
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "StateStackT",
        "fct-source": "src/Control-Monad-StateStack.html#StateStackT",
        "fct-type": "function",
        "title": "StateStackT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "StateStackT",
        "normalized": "",
        "package": "statestack",
        "partial": "State Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:evalStateStack",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunStateStack\u003c/a\u003e\u003c/code\u003e, but discard the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "StateStack s a -\u003e s -\u003e a",
        "fct-source": "src/Control-Monad-StateStack.html#evalStateStack",
        "fct-type": "function",
        "title": "evalStateStack"
      },
      "index": {
        "description": "Like runStateStack but discard the final state",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "evalStateStack",
        "normalized": "StateStack a b-\u003ea-\u003eb",
        "package": "statestack",
        "partial": "State Stack",
        "signature": "StateStack s a-\u003es-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:evalStateStackT",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunStateStackT\u003c/a\u003e\u003c/code\u003e, but discard the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "StateStackT s m a -\u003e s -\u003e m a",
        "fct-source": "src/Control-Monad-StateStack.html#evalStateStackT",
        "fct-type": "function",
        "title": "evalStateStackT"
      },
      "index": {
        "description": "Like runStateStackT but discard the final state",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "evalStateStackT",
        "normalized": "StateStackT a b c-\u003ea-\u003eb c",
        "package": "statestack",
        "partial": "State Stack",
        "signature": "StateStackT s m a-\u003es-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:execStateStack",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunStateStack\u003c/a\u003e\u003c/code\u003e, but discard the return value and yield\n   only the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "StateStack s a -\u003e s -\u003e s",
        "fct-source": "src/Control-Monad-StateStack.html#execStateStack",
        "fct-type": "function",
        "title": "execStateStack"
      },
      "index": {
        "description": "Like runStateStack but discard the return value and yield only the final state",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "execStateStack",
        "normalized": "StateStack a b-\u003ea-\u003ea",
        "package": "statestack",
        "partial": "State Stack",
        "signature": "StateStack s a-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:execStateStackT",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunStateStackT\u003c/a\u003e\u003c/code\u003e, but discard the return value and yield\n   only the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "StateStackT s m a -\u003e s -\u003e m s",
        "fct-source": "src/Control-Monad-StateStack.html#execStateStackT",
        "fct-type": "function",
        "title": "execStateStackT"
      },
      "index": {
        "description": "Like runStateStackT but discard the return value and yield only the final state",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "execStateStackT",
        "normalized": "StateStackT a b c-\u003ea-\u003eb a",
        "package": "statestack",
        "partial": "State Stack",
        "signature": "StateStackT s m a-\u003es-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:liftState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eStateT\u003c/code\u003e computations can always be lifted to \u003ccode\u003eStateStackT\u003c/code\u003e\n   computations which do not manipulate the state stack.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "StateT s m a -\u003e StateStackT s m a",
        "fct-source": "src/Control-Monad-StateStack.html#liftState",
        "fct-type": "function",
        "title": "liftState"
      },
      "index": {
        "description": "StateT computations can always be lifted to StateStackT computations which do not manipulate the state stack",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "liftState",
        "normalized": "StateT a b c-\u003eStateStackT a b c",
        "package": "statestack",
        "partial": "State",
        "signature": "StateT s m a-\u003eStateStackT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:restore",
      "description": {
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "restore",
        "fct-source": "src/Control-Monad-StateStack.html#restore",
        "fct-type": "method",
        "title": "restore"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "restore",
        "normalized": "",
        "package": "statestack",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:runStateStack",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003eStateStack\u003c/code\u003e computation from an initial state, resulting\n   in a pair of the final return value and final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "StateStack s a -\u003e s -\u003e (a, s)",
        "fct-source": "src/Control-Monad-StateStack.html#runStateStack",
        "fct-type": "function",
        "title": "runStateStack"
      },
      "index": {
        "description": "Run StateStack computation from an initial state resulting in pair of the final return value and final state",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "runStateStack",
        "normalized": "StateStack a b-\u003ea-\u003e(b,a)",
        "package": "statestack",
        "partial": "State Stack",
        "signature": "StateStack s a-\u003es-\u003e(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:runStateStackT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003eStateStackT\u003c/code\u003e computation from an initial state, resulting\n   in a computation of the underlying monad which yields the return\n   value and final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "StateStackT s m a -\u003e s -\u003e m (a, s)",
        "fct-source": "src/Control-Monad-StateStack.html#runStateStackT",
        "fct-type": "function",
        "title": "runStateStackT"
      },
      "index": {
        "description": "Run StateStackT computation from an initial state resulting in computation of the underlying monad which yields the return value and final state",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "runStateStackT",
        "normalized": "StateStackT a b c-\u003ea-\u003eb(c,a)",
        "package": "statestack",
        "partial": "State Stack",
        "signature": "StateStackT s m a-\u003es-\u003em(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:save",
      "description": {
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "save",
        "fct-source": "src/Control-Monad-StateStack.html#save",
        "fct-type": "method",
        "title": "save"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "save",
        "normalized": "",
        "package": "statestack",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:unStateStackT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.StateStack",
        "fct-package": "statestack",
        "fct-signature": "StateT (s, [s]) m a",
        "fct-source": "src/Control-Monad-StateStack.html#StateStackT",
        "fct-type": "function",
        "title": "unStateStackT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad StateStack",
        "module": "Control.Monad.StateStack",
        "name": "unStateStackT",
        "normalized": "StateT(a,[a])b c",
        "package": "statestack",
        "partial": "State Stack",
        "signature": "StateT(s,[s])m a"
      }
    }
  }
]