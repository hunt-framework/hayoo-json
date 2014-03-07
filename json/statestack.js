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
        "word": "statestack"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA state monad which allows the state to be saved and restored on a\n stack.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations with implicit access to a\n read/write state, with additional operations for pushing the\n current state on a stack and later restoring the state from the top\n of the stack.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Same as for the usual state monad; the state\n and accompanying stack of saved states are threaded through\n computations.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Remembering state while emitting commands for some\n system which itself has saveable/restorable state, such as OpenGL\n or Cairo.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSimple example:\n\u003c/p\u003e\u003cpre\u003e ghci\u003e let p = get \u003e\u003e= liftIO . print\n ghci\u003e evalStateStackT (put 2 \u003e\u003e p \u003e\u003e save \u003e\u003e put 3 \u003e\u003e p \u003e\u003e restore \u003e\u003e p) 0\n 2\n 3\n 2\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Monad.StateStack",
          "name": "StateStack",
          "package": "statestack",
          "source": "src/Control-Monad-StateStack.html",
          "type": "module"
        },
        "index": {
          "description": "state monad which allows the state to be saved and restored on stack Computation type Computations with implicit access to read write state with additional operations for pushing the current state on stack and later restoring the state from the top of the stack Binding strategy Same as for the usual state monad the state and accompanying stack of saved states are threaded through computations Useful for Remembering state while emitting commands for some system which itself has saveable restorable state such as OpenGL or Cairo Simple example ghci let get liftIO print ghci evalStateStackT put save put restore",
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "StateStack",
          "package": "statestack",
          "partial": "State Stack",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of monads which support a state along with a stack for\n   saving and restoring states.\n\u003c/p\u003e",
          "module": "Control.Monad.StateStack",
          "name": "MonadStateStack",
          "package": "statestack",
          "source": "src/Control-Monad-StateStack.html#MonadStateStack",
          "type": "class"
        },
        "index": {
          "description": "Class of monads which support state along with stack for saving and restoring states",
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "MonadStateStack",
          "package": "statestack",
          "partial": "Monad State Stack",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#t:MonadStateStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.StateStack",
          "name": "StateStack",
          "package": "statestack",
          "source": "src/Control-Monad-StateStack.html#StateStack",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "StateStack",
          "package": "statestack",
          "partial": "State Stack",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#t:StateStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer which adds a save/restorable state to an\n   existing monad.\n\u003c/p\u003e",
          "module": "Control.Monad.StateStack",
          "name": "StateStackT",
          "package": "statestack",
          "source": "src/Control-Monad-StateStack.html#StateStackT",
          "type": "newtype"
        },
        "index": {
          "description": "monad transformer which adds save restorable state to an existing monad",
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "StateStackT",
          "package": "statestack",
          "partial": "State Stack",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#t:StateStackT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.StateStack",
          "name": "StateStackT",
          "package": "statestack",
          "signature": "StateStackT",
          "source": "src/Control-Monad-StateStack.html#StateStackT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "StateStackT",
          "package": "statestack",
          "partial": "State Stack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:StateStackT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunStateStack\u003c/a\u003e\u003c/code\u003e, but discard the final state.\n\u003c/p\u003e",
          "module": "Control.Monad.StateStack",
          "name": "evalStateStack",
          "package": "statestack",
          "signature": "StateStack s a -\u003e s -\u003e a",
          "source": "src/Control-Monad-StateStack.html#evalStateStack",
          "type": "function"
        },
        "index": {
          "description": "Like runStateStack but discard the final state",
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "evalStateStack",
          "normalized": "StateStack a b-\u003ea-\u003eb",
          "package": "statestack",
          "partial": "State Stack",
          "signature": "StateStack s a-\u003es-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:evalStateStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunStateStackT\u003c/a\u003e\u003c/code\u003e, but discard the final state.\n\u003c/p\u003e",
          "module": "Control.Monad.StateStack",
          "name": "evalStateStackT",
          "package": "statestack",
          "signature": "StateStackT s m a -\u003e s -\u003e m a",
          "source": "src/Control-Monad-StateStack.html#evalStateStackT",
          "type": "function"
        },
        "index": {
          "description": "Like runStateStackT but discard the final state",
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "evalStateStackT",
          "normalized": "StateStackT a b c-\u003ea-\u003eb c",
          "package": "statestack",
          "partial": "State Stack",
          "signature": "StateStackT s m a-\u003es-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:evalStateStackT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunStateStack\u003c/a\u003e\u003c/code\u003e, but discard the return value and yield\n   only the final state.\n\u003c/p\u003e",
          "module": "Control.Monad.StateStack",
          "name": "execStateStack",
          "package": "statestack",
          "signature": "StateStack s a -\u003e s -\u003e s",
          "source": "src/Control-Monad-StateStack.html#execStateStack",
          "type": "function"
        },
        "index": {
          "description": "Like runStateStack but discard the return value and yield only the final state",
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "execStateStack",
          "normalized": "StateStack a b-\u003ea-\u003ea",
          "package": "statestack",
          "partial": "State Stack",
          "signature": "StateStack s a-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:execStateStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunStateStackT\u003c/a\u003e\u003c/code\u003e, but discard the return value and yield\n   only the final state.\n\u003c/p\u003e",
          "module": "Control.Monad.StateStack",
          "name": "execStateStackT",
          "package": "statestack",
          "signature": "StateStackT s m a -\u003e s -\u003e m s",
          "source": "src/Control-Monad-StateStack.html#execStateStackT",
          "type": "function"
        },
        "index": {
          "description": "Like runStateStackT but discard the return value and yield only the final state",
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "execStateStackT",
          "normalized": "StateStackT a b c-\u003ea-\u003eb a",
          "package": "statestack",
          "partial": "State Stack",
          "signature": "StateStackT s m a-\u003es-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:execStateStackT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eStateT\u003c/code\u003e computations can always be lifted to \u003ccode\u003eStateStackT\u003c/code\u003e\n   computations which do not manipulate the state stack.\n\u003c/p\u003e",
          "module": "Control.Monad.StateStack",
          "name": "liftState",
          "package": "statestack",
          "signature": "StateT s m a -\u003e StateStackT s m a",
          "source": "src/Control-Monad-StateStack.html#liftState",
          "type": "function"
        },
        "index": {
          "description": "StateT computations can always be lifted to StateStackT computations which do not manipulate the state stack",
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "liftState",
          "normalized": "StateT a b c-\u003eStateStackT a b c",
          "package": "statestack",
          "partial": "State",
          "signature": "StateT s m a-\u003eStateStackT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:liftState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.StateStack",
          "name": "restore",
          "package": "statestack",
          "signature": "restore",
          "source": "src/Control-Monad-StateStack.html#restore",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "restore",
          "package": "statestack",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003eStateStack\u003c/code\u003e computation from an initial state, resulting\n   in a pair of the final return value and final state.\n\u003c/p\u003e",
          "module": "Control.Monad.StateStack",
          "name": "runStateStack",
          "package": "statestack",
          "signature": "StateStack s a -\u003e s -\u003e (a, s)",
          "source": "src/Control-Monad-StateStack.html#runStateStack",
          "type": "function"
        },
        "index": {
          "description": "Run StateStack computation from an initial state resulting in pair of the final return value and final state",
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "runStateStack",
          "normalized": "StateStack a b-\u003ea-\u003e(b,a)",
          "package": "statestack",
          "partial": "State Stack",
          "signature": "StateStack s a-\u003es-\u003e(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:runStateStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003eStateStackT\u003c/code\u003e computation from an initial state, resulting\n   in a computation of the underlying monad which yields the return\n   value and final state.\n\u003c/p\u003e",
          "module": "Control.Monad.StateStack",
          "name": "runStateStackT",
          "package": "statestack",
          "signature": "StateStackT s m a -\u003e s -\u003e m (a, s)",
          "source": "src/Control-Monad-StateStack.html#runStateStackT",
          "type": "function"
        },
        "index": {
          "description": "Run StateStackT computation from an initial state resulting in computation of the underlying monad which yields the return value and final state",
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "runStateStackT",
          "normalized": "StateStackT a b c-\u003ea-\u003eb(c,a)",
          "package": "statestack",
          "partial": "State Stack",
          "signature": "StateStackT s m a-\u003es-\u003em(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:runStateStackT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.StateStack",
          "name": "save",
          "package": "statestack",
          "signature": "save",
          "source": "src/Control-Monad-StateStack.html#save",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "save",
          "package": "statestack",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.StateStack",
          "name": "unStateStackT",
          "package": "statestack",
          "signature": "StateT (s, [s]) m a",
          "source": "src/Control-Monad-StateStack.html#StateStackT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad StateStack",
          "module": "Control.Monad.StateStack",
          "name": "unStateStackT",
          "normalized": "StateT(a,[a])b c",
          "package": "statestack",
          "partial": "State Stack",
          "signature": "StateT(s,[s])m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/statestack/docs/Control-Monad-StateStack.html#v:unStateStackT"
      }
    }
  ]
]