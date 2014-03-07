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
        "word": "backward-state"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBackward state monad and transformer, in which \u003ccode\u003em \u003e\u003e n\u003c/code\u003e passes the incoming\n state to n, then passes \u003ccode\u003en\u003c/code\u003e's resulting state to \u003ccode\u003em\u003c/code\u003e.  This can only work\n lazily.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "BackwardState",
          "package": "backward-state",
          "source": "src/Control-Monad-Trans-BackwardState.html",
          "type": "module"
        },
        "index": {
          "description": "Backward state monad and transformer in which passes the incoming state to then passes resulting state to This can only work lazily",
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "BackwardState",
          "package": "backward-state",
          "partial": "Backward State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.BackwardState",
          "name": "BackwardState",
          "package": "backward-state",
          "source": "src/Control-Monad-Trans-BackwardState.html#BackwardState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "BackwardState",
          "package": "backward-state",
          "partial": "Backward State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#t:BackwardState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.BackwardState",
          "name": "BackwardStateT",
          "package": "backward-state",
          "source": "src/Control-Monad-Trans-BackwardState.html#BackwardStateT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "BackwardStateT",
          "package": "backward-state",
          "partial": "Backward State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#t:BackwardStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.BackwardState",
          "name": "BackwardStateT",
          "package": "backward-state",
          "signature": "BackwardStateT",
          "source": "src/Control-Monad-Trans-BackwardState.html#BackwardStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "BackwardStateT",
          "package": "backward-state",
          "partial": "Backward State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#v:BackwardStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.BackwardState",
          "name": "evalBackwardState",
          "package": "backward-state",
          "signature": "BackwardState s a -\u003e s -\u003e a",
          "source": "src/Control-Monad-Trans-BackwardState.html#evalBackwardState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "evalBackwardState",
          "normalized": "BackwardState a b-\u003ea-\u003eb",
          "package": "backward-state",
          "partial": "Backward State",
          "signature": "BackwardState s a-\u003es-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#v:evalBackwardState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.BackwardState",
          "name": "evalBackwardStateT",
          "package": "backward-state",
          "signature": "BackwardStateT s m a -\u003e s -\u003e m a",
          "source": "src/Control-Monad-Trans-BackwardState.html#evalBackwardStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "evalBackwardStateT",
          "normalized": "BackwardStateT a b c-\u003ea-\u003eb c",
          "package": "backward-state",
          "partial": "Backward State",
          "signature": "BackwardStateT s m a-\u003es-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#v:evalBackwardStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.BackwardState",
          "name": "execBackwardState",
          "package": "backward-state",
          "signature": "BackwardState s a -\u003e s -\u003e s",
          "source": "src/Control-Monad-Trans-BackwardState.html#execBackwardState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "execBackwardState",
          "normalized": "BackwardState a b-\u003ea-\u003ea",
          "package": "backward-state",
          "partial": "Backward State",
          "signature": "BackwardState s a-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#v:execBackwardState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.BackwardState",
          "name": "execBackwardStateT",
          "package": "backward-state",
          "signature": "BackwardStateT s m a -\u003e s -\u003e m s",
          "source": "src/Control-Monad-Trans-BackwardState.html#execBackwardStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "execBackwardStateT",
          "normalized": "BackwardStateT a b c-\u003ea-\u003eb a",
          "package": "backward-state",
          "partial": "Backward State",
          "signature": "BackwardStateT s m a-\u003es-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#v:execBackwardStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.BackwardState",
          "name": "get",
          "package": "backward-state",
          "signature": "BackwardStateT s m s",
          "source": "src/Control-Monad-Trans-BackwardState.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "get",
          "package": "backward-state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.BackwardState",
          "name": "modify",
          "package": "backward-state",
          "signature": "(s -\u003e s) -\u003e BackwardStateT s m ()",
          "source": "src/Control-Monad-Trans-BackwardState.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eBackwardStateT a b()",
          "package": "backward-state",
          "signature": "(s-\u003es)-\u003eBackwardStateT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.BackwardState",
          "name": "put",
          "package": "backward-state",
          "signature": "s -\u003e BackwardStateT s m ()",
          "source": "src/Control-Monad-Trans-BackwardState.html#put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "put",
          "normalized": "a-\u003eBackwardStateT a b()",
          "package": "backward-state",
          "signature": "s-\u003eBackwardStateT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.BackwardState",
          "name": "runBackwardState",
          "package": "backward-state",
          "signature": "BackwardState s a -\u003e s -\u003e (a, s)",
          "source": "src/Control-Monad-Trans-BackwardState.html#runBackwardState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "runBackwardState",
          "normalized": "BackwardState a b-\u003ea-\u003e(b,a)",
          "package": "backward-state",
          "partial": "Backward State",
          "signature": "BackwardState s a-\u003es-\u003e(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#v:runBackwardState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.BackwardState",
          "name": "runBackwardStateT",
          "package": "backward-state",
          "signature": "s -\u003e m (a, s)",
          "source": "src/Control-Monad-Trans-BackwardState.html#BackwardStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans BackwardState",
          "module": "Control.Monad.Trans.BackwardState",
          "name": "runBackwardStateT",
          "normalized": "a-\u003eb(c,a)",
          "package": "backward-state",
          "partial": "Backward State",
          "signature": "s-\u003em(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backward-state/docs/Control-Monad-Trans-BackwardState.html#v:runBackwardStateT"
      }
    }
  ]
]