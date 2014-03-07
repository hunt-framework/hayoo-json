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
        "word": "rev-state"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RevState.Class",
          "name": "Class",
          "package": "rev-state",
          "source": "src/Control-Monad-RevState-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad RevState Class",
          "module": "Control.Monad.RevState.Class",
          "name": "Class",
          "package": "rev-state",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-RevState-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RevState.Class",
          "name": "MonadRevState",
          "package": "rev-state",
          "source": "src/Control-Monad-RevState-Class.html#MonadRevState",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad RevState Class",
          "module": "Control.Monad.RevState.Class",
          "name": "MonadRevState",
          "package": "rev-state",
          "partial": "Monad Rev State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-RevState-Class.html#t:MonadRevState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RevState.Class",
          "name": "get",
          "package": "rev-state",
          "signature": "m s",
          "source": "src/Control-Monad-RevState-Class.html#get",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad RevState Class",
          "module": "Control.Monad.RevState.Class",
          "name": "get",
          "package": "rev-state",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-RevState-Class.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RevState.Class",
          "name": "gets",
          "package": "rev-state",
          "signature": "(s -\u003e a) -\u003e m a",
          "source": "src/Control-Monad-RevState-Class.html#gets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RevState Class",
          "module": "Control.Monad.RevState.Class",
          "name": "gets",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "rev-state",
          "signature": "(s-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-RevState-Class.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RevState.Class",
          "name": "modify",
          "package": "rev-state",
          "signature": "(s -\u003e s) -\u003e m ()",
          "source": "src/Control-Monad-RevState-Class.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad RevState Class",
          "module": "Control.Monad.RevState.Class",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "rev-state",
          "signature": "(s-\u003es)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-RevState-Class.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RevState.Class",
          "name": "put",
          "package": "rev-state",
          "signature": "s -\u003e m ()",
          "source": "src/Control-Monad-RevState-Class.html#put",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad RevState Class",
          "module": "Control.Monad.RevState.Class",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "rev-state",
          "signature": "s-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-RevState-Class.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RevState.Class",
          "name": "state",
          "package": "rev-state",
          "signature": "(s -\u003e (a, s)) -\u003e m a",
          "source": "src/Control-Monad-RevState-Class.html#state",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad RevState Class",
          "module": "Control.Monad.RevState.Class",
          "name": "state",
          "normalized": "(a-\u003e(b,a))-\u003ec b",
          "package": "rev-state",
          "signature": "(s-\u003e(a,s))-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-RevState-Class.html#v:state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RevState",
          "name": "RevState",
          "package": "rev-state",
          "source": "src/Control-Monad-RevState.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad RevState",
          "module": "Control.Monad.RevState",
          "name": "RevState",
          "package": "rev-state",
          "partial": "Rev State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-RevState.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "RevState",
          "package": "rev-state",
          "source": "src/Control-Monad-Trans-RevState.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "RevState",
          "package": "rev-state",
          "partial": "Rev State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "State",
          "package": "rev-state",
          "source": "src/Control-Monad-Trans-RevState.html#State",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "State",
          "package": "rev-state",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "StateT",
          "package": "rev-state",
          "source": "src/Control-Monad-Trans-RevState.html#StateT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "StateT",
          "package": "rev-state",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "StateT",
          "package": "rev-state",
          "signature": "StateT",
          "source": "src/Control-Monad-Trans-RevState.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "StateT",
          "package": "rev-state",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "evalState",
          "package": "rev-state",
          "signature": "State s a -\u003e s -\u003e a",
          "source": "src/Control-Monad-Trans-RevState.html#evalState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "evalState",
          "normalized": "State a b-\u003ea-\u003eb",
          "package": "rev-state",
          "partial": "State",
          "signature": "State s a-\u003es-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:evalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "evalStateT",
          "package": "rev-state",
          "signature": "StateT s m a -\u003e s -\u003e m a",
          "source": "src/Control-Monad-Trans-RevState.html#evalStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "evalStateT",
          "normalized": "StateT a b c-\u003ea-\u003eb c",
          "package": "rev-state",
          "partial": "State",
          "signature": "StateT s m a-\u003es-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:evalStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "execState",
          "package": "rev-state",
          "signature": "State s a -\u003e s -\u003e s",
          "source": "src/Control-Monad-Trans-RevState.html#execState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "execState",
          "normalized": "State a b-\u003ea-\u003ea",
          "package": "rev-state",
          "partial": "State",
          "signature": "State s a-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:execState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "execStateT",
          "package": "rev-state",
          "signature": "StateT s m a -\u003e s -\u003e m s",
          "source": "src/Control-Monad-Trans-RevState.html#execStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "execStateT",
          "normalized": "StateT a b c-\u003ea-\u003eb a",
          "package": "rev-state",
          "partial": "State",
          "signature": "StateT s m a-\u003es-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:execStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "get",
          "package": "rev-state",
          "signature": "StateT s m s",
          "source": "src/Control-Monad-Trans-RevState.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "get",
          "package": "rev-state",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "gets",
          "package": "rev-state",
          "signature": "(s -\u003e a) -\u003e StateT s m a",
          "source": "src/Control-Monad-Trans-RevState.html#gets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "gets",
          "normalized": "(a-\u003eb)-\u003eStateT a c b",
          "package": "rev-state",
          "signature": "(s-\u003ea)-\u003eStateT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "mapState",
          "package": "rev-state",
          "signature": "((a, s) -\u003e (b, s)) -\u003e State s a -\u003e State s b",
          "source": "src/Control-Monad-Trans-RevState.html#mapState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "mapState",
          "normalized": "((a,b)-\u003e(c,b))-\u003eState b a-\u003eState b c",
          "package": "rev-state",
          "partial": "State",
          "signature": "((a,s)-\u003e(b,s))-\u003eState s a-\u003eState s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:mapState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "mapStateT",
          "package": "rev-state",
          "signature": "(m (a, s) -\u003e n (b, s)) -\u003e StateT s m a -\u003e StateT s n b",
          "source": "src/Control-Monad-Trans-RevState.html#mapStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "mapStateT",
          "normalized": "(a(b,c)-\u003ed(e,c))-\u003eStateT c a b-\u003eStateT c d e",
          "package": "rev-state",
          "partial": "State",
          "signature": "(m(a,s)-\u003en(b,s))-\u003eStateT s m a-\u003eStateT s n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:mapStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "modify",
          "package": "rev-state",
          "signature": "(s -\u003e s) -\u003e StateT s m ()",
          "source": "src/Control-Monad-Trans-RevState.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eStateT a b()",
          "package": "rev-state",
          "signature": "(s-\u003es)-\u003eStateT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "put",
          "package": "rev-state",
          "signature": "s -\u003e StateT s m ()",
          "source": "src/Control-Monad-Trans-RevState.html#put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "put",
          "normalized": "a-\u003eStateT a b()",
          "package": "rev-state",
          "signature": "s-\u003eStateT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "runState",
          "package": "rev-state",
          "signature": "State s a -\u003e s -\u003e (a, s)",
          "source": "src/Control-Monad-Trans-RevState.html#runState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "runState",
          "normalized": "State a b-\u003ea-\u003e(b,a)",
          "package": "rev-state",
          "partial": "State",
          "signature": "State s a-\u003es-\u003e(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:runState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "runStateT",
          "package": "rev-state",
          "signature": "s -\u003e m (a, s)",
          "source": "src/Control-Monad-Trans-RevState.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "runStateT",
          "normalized": "a-\u003eb(c,a)",
          "package": "rev-state",
          "partial": "State",
          "signature": "s-\u003em(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:runStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "state",
          "package": "rev-state",
          "signature": "(s -\u003e (a, s)) -\u003e StateT s m a",
          "source": "src/Control-Monad-Trans-RevState.html#state",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "state",
          "normalized": "(a-\u003e(b,a))-\u003eStateT a c b",
          "package": "rev-state",
          "signature": "(s-\u003e(a,s))-\u003eStateT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "withState",
          "package": "rev-state",
          "signature": "(s -\u003e s) -\u003e State s a -\u003e State s a",
          "source": "src/Control-Monad-Trans-RevState.html#withState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "withState",
          "normalized": "(a-\u003ea)-\u003eState a b-\u003eState a b",
          "package": "rev-state",
          "partial": "State",
          "signature": "(s-\u003es)-\u003eState s a-\u003eState s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:withState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RevState",
          "name": "withStateT",
          "package": "rev-state",
          "signature": "(s -\u003e s) -\u003e StateT s m a -\u003e StateT s m a",
          "source": "src/Control-Monad-Trans-RevState.html#withStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RevState",
          "module": "Control.Monad.Trans.RevState",
          "name": "withStateT",
          "normalized": "(a-\u003ea)-\u003eStateT a b c-\u003eStateT a b c",
          "package": "rev-state",
          "partial": "State",
          "signature": "(s-\u003es)-\u003eStateT s m a-\u003eStateT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rev-state/docs/Control-Monad-Trans-RevState.html#v:withStateT"
      }
    }
  ]
]