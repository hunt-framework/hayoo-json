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
        "word": "concurrent-state"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneralizes \u003ccode\u003eforkIO\u003c/code\u003e to MonadIO.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "Fork",
          "package": "concurrent-state",
          "source": "src/Control-Concurrent-Lifted-Fork.html",
          "type": "module"
        },
        "index": {
          "description": "Generalizes forkIO to MonadIO",
          "hierarchy": "Control Concurrent Lifted Fork",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "Fork",
          "package": "concurrent-state",
          "partial": "Fork",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralize \u003ccode\u003eforkIO\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "MonadFork",
          "package": "concurrent-state",
          "source": "src/Control-Concurrent-Lifted-Fork.html#MonadFork",
          "type": "class"
        },
        "index": {
          "description": "Generalize forkIO to MonadIO",
          "hierarchy": "Control Concurrent Lifted Fork",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "MonadFork",
          "package": "concurrent-state",
          "partial": "Monad Fork",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#t:MonadFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "fork",
          "package": "concurrent-state",
          "signature": "m () -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Lifted-Fork.html#fork",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent Lifted Fork",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "fork",
          "normalized": "a()-\u003ea ThreadId",
          "package": "concurrent-state",
          "signature": "m()-\u003em ThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003eforkFinally\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "forkFinally",
          "package": "concurrent-state",
          "signature": "m a -\u003e (Either SomeException a -\u003e m ()) -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Lifted-Fork.html#forkFinally",
          "type": "function"
        },
        "index": {
          "description": "Generalized forkFinally",
          "hierarchy": "Control Concurrent Lifted Fork",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "forkFinally",
          "normalized": "a b-\u003e(Either SomeException b-\u003ea())-\u003ea ThreadId",
          "package": "concurrent-state",
          "partial": "Finally",
          "signature": "m a-\u003e(Either SomeException a-\u003em())-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#v:forkFinally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "forkOS",
          "package": "concurrent-state",
          "signature": "m () -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Lifted-Fork.html#forkOS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent Lifted Fork",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "forkOS",
          "normalized": "a()-\u003ea ThreadId",
          "package": "concurrent-state",
          "partial": "OS",
          "signature": "m()-\u003em ThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#v:forkOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "forkOn",
          "package": "concurrent-state",
          "signature": "Int -\u003e m () -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Lifted-Fork.html#forkOn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent Lifted Fork",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "forkOn",
          "normalized": "Int-\u003ea()-\u003ea ThreadId",
          "package": "concurrent-state",
          "partial": "On",
          "signature": "Int-\u003em()-\u003em ThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#v:forkOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003eforkOnWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "forkOnWithUnmask",
          "package": "concurrent-state",
          "signature": "Int -\u003e ((forall a.  m a -\u003e m a) -\u003e m ()) -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Lifted-Fork.html#forkOnWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Generalized forkOnWithUnmask",
          "hierarchy": "Control Concurrent Lifted Fork",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "forkOnWithUnmask",
          "normalized": "Int-\u003e((a b c d-\u003ec d)-\u003ec())-\u003ec ThreadId",
          "package": "concurrent-state",
          "partial": "On With Unmask",
          "signature": "Int-\u003e((forall a. m a-\u003em a)-\u003em())-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#v:forkOnWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003eforkIOWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "forkWithUnmask",
          "package": "concurrent-state",
          "signature": "((forall a.  m a -\u003e m a) -\u003e m ()) -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Lifted-Fork.html#forkWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Generalized forkIOWithUnmask",
          "hierarchy": "Control Concurrent Lifted Fork",
          "module": "Control.Concurrent.Lifted.Fork",
          "name": "forkWithUnmask",
          "normalized": "((a b c d-\u003ec d)-\u003ec())-\u003ec ThreadId",
          "package": "concurrent-state",
          "partial": "With Unmask",
          "signature": "((forall a. m a-\u003em a)-\u003em())-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#v:forkWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent RWS monad, combining a Reader, a Writer, and a State monad.\n\u003c/p\u003e\u003cp\u003eThis module performs computations lazily. For a strict version, see\n \u003ca\u003eControl.Monad.RWS.Concurrent.Strict\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "Lazy",
          "package": "concurrent-state",
          "source": "src/Control-Monad-RWS-Concurrent-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Concurrent RWS monad combining Reader Writer and State monad This module performs computations lazily For strict version see Control.Monad.RWS.Concurrent.Strict",
          "hierarchy": "Control Monad RWS Concurrent Lazy",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "Lazy",
          "package": "concurrent-state",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concurrent monad transformer reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e to an\n inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003etransformers\u003c/code\u003e' \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e, with the exception of\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e constraint on every instance, which is necessary to\n perform STM actions.\n\u003c/p\u003e",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "RWSC",
          "package": "concurrent-state",
          "source": "src/Control-Monad-RWS-Concurrent-Lazy.html#RWSC",
          "type": "data"
        },
        "index": {
          "description": "concurrent monad transformer reading an environment of type collecting output of type and updating state of type to an inner monad This is very similar to transformers RWST with the exception of the MonadIO constraint on every instance which is necessary to perform STM actions",
          "hierarchy": "Control Monad RWS Concurrent Lazy",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "RWSC",
          "package": "concurrent-state",
          "partial": "RWSC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#t:RWSC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a concurrent RWS monad computation as a function, discarding\n the final state.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RWS.Concurrent.Lazy\",\"Control.Monad.RWS.Concurrent.Strict\"]",
          "name": "evalRWSC",
          "package": "concurrent-state",
          "signature": "RWSC r w s m a-\u003e r-\u003e TVar s-\u003e TVar w-\u003e m (a, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:evalRWSC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:evalRWSC\"]"
        },
        "index": {
          "description": "Unwrap concurrent RWS monad computation as function discarding the final state",
          "hierarchy": "Control Monad RWS Concurrent Lazy",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "evalRWSC",
          "normalized": "RWSC a b c d e-\u003ea-\u003eTVar c-\u003eTVar b-\u003ed(e,b)",
          "package": "concurrent-state",
          "partial": "RWSC",
          "signature": "RWSC r w s m a-\u003er-\u003eTVar s-\u003eTVar w-\u003em(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:evalRWSC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun multiple RWS operations on the same value, returning the final\n output and the return values of each operation.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RWS.Concurrent.Lazy\",\"Control.Monad.RWS.Concurrent.Strict\"]",
          "name": "evalRWSCs",
          "package": "concurrent-state",
          "signature": "[RWSC r w s m a]-\u003e r-\u003e s-\u003e m ([a], w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:evalRWSCs\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:evalRWSCs\"]"
        },
        "index": {
          "description": "Run multiple RWS operations on the same value returning the final output and the return values of each operation",
          "hierarchy": "Control Monad RWS Concurrent Lazy",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "evalRWSCs",
          "normalized": "[RWSC a b c d e]-\u003ea-\u003ec-\u003ed([e],b)",
          "package": "concurrent-state",
          "partial": "RWSCs",
          "signature": "[RWSC r w s m a]-\u003er-\u003es-\u003em([a],w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:evalRWSCs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a concurrent RWS monad computation as a function, discarding\n the return value.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RWS.Concurrent.Lazy\",\"Control.Monad.RWS.Concurrent.Strict\"]",
          "name": "execRWSC",
          "package": "concurrent-state",
          "signature": "RWSC r w s m a-\u003e r-\u003e TVar s-\u003e TVar w-\u003e m (s, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:execRWSC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:execRWSC\"]"
        },
        "index": {
          "description": "Unwrap concurrent RWS monad computation as function discarding the return value",
          "hierarchy": "Control Monad RWS Concurrent Lazy",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "execRWSC",
          "normalized": "RWSC a b c d e-\u003ea-\u003eTVar c-\u003eTVar b-\u003ed(c,b)",
          "package": "concurrent-state",
          "partial": "RWSC",
          "signature": "RWSC r w s m a-\u003er-\u003eTVar s-\u003eTVar w-\u003em(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:execRWSC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun multiple RWS operations on the same value, returning the final\n state and the return values of each operation.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RWS.Concurrent.Lazy\",\"Control.Monad.RWS.Concurrent.Strict\"]",
          "name": "execRWSCs",
          "package": "concurrent-state",
          "signature": "[RWSC r w s m a]-\u003e r-\u003e s-\u003e m (s, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:execRWSCs\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:execRWSCs\"]"
        },
        "index": {
          "description": "Run multiple RWS operations on the same value returning the final state and the return values of each operation",
          "hierarchy": "Control Monad RWS Concurrent Lazy",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "execRWSCs",
          "normalized": "[RWSC a b c d e]-\u003ea-\u003ec-\u003ed(c,b)",
          "package": "concurrent-state",
          "partial": "RWSCs",
          "signature": "[RWSC r w s m a]-\u003er-\u003es-\u003em(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:execRWSCs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "liftCallCC",
          "package": "concurrent-state",
          "signature": "((((a, TVar s, TVar w) -\u003e m (b, TVar s, TVar w)) -\u003e m (a, TVar s, TVar w)) -\u003e m (a, TVar s, TVar w)) -\u003e ((a -\u003e RWSC r w s m b) -\u003e RWSC r w s m a) -\u003e RWSC r w s m a",
          "source": "src/Control-Monad-RWS-Concurrent-Lazy.html#liftCallCC",
          "type": "function"
        },
        "index": {
          "description": "Uniform lifting of callCC operation to the new monad",
          "hierarchy": "Control Monad RWS Concurrent Lazy",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "liftCallCC",
          "normalized": "((((a,TVar b,TVar c)-\u003ed(e,TVar b,TVar c))-\u003ed(a,TVar b,TVar c))-\u003ed(a,TVar b,TVar c))-\u003e((a-\u003eRWSC f c b d e)-\u003eRWSC f c b d a)-\u003eRWSC f c b d a",
          "package": "concurrent-state",
          "partial": "Call CC",
          "signature": "((((a,TVar s,TVar w)-\u003em(b,TVar s,TVar w))-\u003em(a,TVar s,TVar w))-\u003em(a,TVar s,TVar w))-\u003e((a-\u003eRWSC r w s m b)-\u003eRWSC r w s m a)-\u003eRWSC r w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:liftCallCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "liftCatch",
          "package": "concurrent-state",
          "signature": "(m (a, TVar s, TVar w) -\u003e (e -\u003e m (a, TVar s, TVar w)) -\u003e m (a, TVar s, TVar w)) -\u003e RWSC l w s m a -\u003e (e -\u003e RWSC l w s m a) -\u003e RWSC l w s m a",
          "source": "src/Control-Monad-RWS-Concurrent-Lazy.html#liftCatch",
          "type": "function"
        },
        "index": {
          "description": "Lift catchError operation to the new monad",
          "hierarchy": "Control Monad RWS Concurrent Lazy",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "liftCatch",
          "normalized": "(a(b,TVar c,TVar d)-\u003e(e-\u003ea(b,TVar c,TVar d))-\u003ea(b,TVar c,TVar d))-\u003eRWSC f d c a b-\u003e(e-\u003eRWSC f d c a b)-\u003eRWSC f d c a b",
          "package": "concurrent-state",
          "partial": "Catch",
          "signature": "(m(a,TVar s,TVar w)-\u003e(e-\u003em(a,TVar s,TVar w))-\u003em(a,TVar s,TVar w))-\u003eRWSC l w s m a-\u003e(e-\u003eRWSC l w s m a)-\u003eRWSC l w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:liftCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the inner computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWSC\u003c/a\u003e\u003c/code\u003e f m) r w s = f (\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e m r w s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "mapRWSC",
          "package": "concurrent-state",
          "signature": "(m (a, TVar s, TVar w) -\u003e n (b, TVar s, TVar w)) -\u003e RWSC r w s m a -\u003e RWSC r w s n b",
          "source": "src/Control-Monad-RWS-Concurrent-Lazy.html#mapRWSC",
          "type": "function"
        },
        "index": {
          "description": "Map the inner computation using the given function runRWSC mapRWSC runRWSC",
          "hierarchy": "Control Monad RWS Concurrent Lazy",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "mapRWSC",
          "normalized": "(a(b,TVar c,TVar d)-\u003ee(f,TVar c,TVar d))-\u003eRWSC g d c a b-\u003eRWSC g d c e f",
          "package": "concurrent-state",
          "partial": "RWSC",
          "signature": "(m(a,TVar s,TVar w)-\u003en(b,TVar s,TVar w))-\u003eRWSC r w s m a-\u003eRWSC r w s n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:mapRWSC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a concurrent RWS monad computation as a function.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RWS.Concurrent.Lazy\",\"Control.Monad.RWS.Concurrent.Strict\"]",
          "name": "runRWSC",
          "package": "concurrent-state",
          "signature": "RWSC r w s m a-\u003e r-\u003e TVar s-\u003e TVar w-\u003e m (a, s, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:runRWSC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:runRWSC\"]"
        },
        "index": {
          "description": "Unwrap concurrent RWS monad computation as function",
          "hierarchy": "Control Monad RWS Concurrent Lazy",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "runRWSC",
          "normalized": "RWSC a b c d e-\u003ea-\u003eTVar c-\u003eTVar b-\u003ed(e,c,b)",
          "package": "concurrent-state",
          "partial": "RWSC",
          "signature": "RWSC r w s m a-\u003er-\u003eTVar s-\u003eTVar w-\u003em(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:runRWSC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun multiple RWS operations on the same value, returning the resultant\n state, output, and the value produced by each operation.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RWS.Concurrent.Lazy\",\"Control.Monad.RWS.Concurrent.Strict\"]",
          "name": "runRWSCs",
          "package": "concurrent-state",
          "signature": "[RWSC r w s m a]-\u003e r-\u003e s-\u003e m ([a], s, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:runRWSCs\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:runRWSCs\"]"
        },
        "index": {
          "description": "Run multiple RWS operations on the same value returning the resultant state output and the value produced by each operation",
          "hierarchy": "Control Monad RWS Concurrent Lazy",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "runRWSCs",
          "normalized": "[RWSC a b c d e]-\u003ea-\u003ec-\u003ed([e],c,b)",
          "package": "concurrent-state",
          "partial": "RWSCs",
          "signature": "[RWSC r w s m a]-\u003er-\u003es-\u003em([a],s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:runRWSCs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWSC\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment and\n state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWSC\u003c/a\u003e\u003c/code\u003e f m) r s w = uncurry3 (\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e m) (f r s w)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "withRWSC",
          "package": "concurrent-state",
          "signature": "(r' -\u003e TVar s -\u003e TVar w -\u003e (r, TVar s, TVar w)) -\u003e RWSC r w s m a -\u003e RWSC r' w s m a",
          "source": "src/Control-Monad-RWS-Concurrent-Lazy.html#withRWSC",
          "type": "function"
        },
        "index": {
          "description": "withRWSC executes action with an initial environment and state modified by applying runRWSC withRWSC uncurry3 runRWSC",
          "hierarchy": "Control Monad RWS Concurrent Lazy",
          "module": "Control.Monad.RWS.Concurrent.Lazy",
          "name": "withRWSC",
          "normalized": "(a-\u003eTVar b-\u003eTVar c-\u003e(d,TVar b,TVar c))-\u003eRWSC d c b e f-\u003eRWSC a c b e f",
          "package": "concurrent-state",
          "partial": "RWSC",
          "signature": "(r'-\u003eTVar s-\u003eTVar w-\u003e(r,TVar s,TVar w))-\u003eRWSC r w s m a-\u003eRWSC r' w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:withRWSC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent RWS monad, combining a Reader, a Writer, and a State monad.\n\u003c/p\u003e\u003cp\u003eThis module performs computations strictly. For a lazy version, see\n \u003ca\u003eControl.Monad.RWS.Concurrent.Lazy\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RWS.Concurrent.Strict",
          "name": "Strict",
          "package": "concurrent-state",
          "source": "src/Control-Monad-RWS-Concurrent-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Concurrent RWS monad combining Reader Writer and State monad This module performs computations strictly For lazy version see Control.Monad.RWS.Concurrent.Lazy",
          "hierarchy": "Control Monad RWS Concurrent Strict",
          "module": "Control.Monad.RWS.Concurrent.Strict",
          "name": "Strict",
          "package": "concurrent-state",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concurrent monad transformer reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e to an\n inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003etransformers\u003c/code\u003e' \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e, with the exception of\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e constraint on every instance, which is necessary to\n perform STM actions.\n\u003c/p\u003e",
          "module": "Control.Monad.RWS.Concurrent.Strict",
          "name": "RWSC",
          "package": "concurrent-state",
          "source": "src/Control-Monad-RWS-Concurrent-Strict.html#RWSC",
          "type": "data"
        },
        "index": {
          "description": "concurrent monad transformer reading an environment of type collecting output of type and updating state of type to an inner monad This is very similar to transformers RWST with the exception of the MonadIO constraint on every instance which is necessary to perform STM actions",
          "hierarchy": "Control Monad RWS Concurrent Strict",
          "module": "Control.Monad.RWS.Concurrent.Strict",
          "name": "RWSC",
          "package": "concurrent-state",
          "partial": "RWSC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#t:RWSC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.RWS.Concurrent.Strict",
          "name": "liftCallCC",
          "package": "concurrent-state",
          "signature": "((((a, TVar s, TVar w) -\u003e m (b, TVar s, TVar w)) -\u003e m (a, TVar s, TVar w)) -\u003e m (a, TVar s, TVar w)) -\u003e ((a -\u003e RWSC r w s m b) -\u003e RWSC r w s m a) -\u003e RWSC r w s m a",
          "source": "src/Control-Monad-RWS-Concurrent-Strict.html#liftCallCC",
          "type": "function"
        },
        "index": {
          "description": "Uniform lifting of callCC operation to the new monad",
          "hierarchy": "Control Monad RWS Concurrent Strict",
          "module": "Control.Monad.RWS.Concurrent.Strict",
          "name": "liftCallCC",
          "normalized": "((((a,TVar b,TVar c)-\u003ed(e,TVar b,TVar c))-\u003ed(a,TVar b,TVar c))-\u003ed(a,TVar b,TVar c))-\u003e((a-\u003eRWSC f c b d e)-\u003eRWSC f c b d a)-\u003eRWSC f c b d a",
          "package": "concurrent-state",
          "partial": "Call CC",
          "signature": "((((a,TVar s,TVar w)-\u003em(b,TVar s,TVar w))-\u003em(a,TVar s,TVar w))-\u003em(a,TVar s,TVar w))-\u003e((a-\u003eRWSC r w s m b)-\u003eRWSC r w s m a)-\u003eRWSC r w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:liftCallCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.RWS.Concurrent.Strict",
          "name": "liftCatch",
          "package": "concurrent-state",
          "signature": "(m (a, TVar s, TVar w) -\u003e (e -\u003e m (a, TVar s, TVar w)) -\u003e m (a, TVar s, TVar w)) -\u003e RWSC l w s m a -\u003e (e -\u003e RWSC l w s m a) -\u003e RWSC l w s m a",
          "source": "src/Control-Monad-RWS-Concurrent-Strict.html#liftCatch",
          "type": "function"
        },
        "index": {
          "description": "Lift catchError operation to the new monad",
          "hierarchy": "Control Monad RWS Concurrent Strict",
          "module": "Control.Monad.RWS.Concurrent.Strict",
          "name": "liftCatch",
          "normalized": "(a(b,TVar c,TVar d)-\u003e(e-\u003ea(b,TVar c,TVar d))-\u003ea(b,TVar c,TVar d))-\u003eRWSC f d c a b-\u003e(e-\u003eRWSC f d c a b)-\u003eRWSC f d c a b",
          "package": "concurrent-state",
          "partial": "Catch",
          "signature": "(m(a,TVar s,TVar w)-\u003e(e-\u003em(a,TVar s,TVar w))-\u003em(a,TVar s,TVar w))-\u003eRWSC l w s m a-\u003e(e-\u003eRWSC l w s m a)-\u003eRWSC l w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:liftCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the inner computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWSC\u003c/a\u003e\u003c/code\u003e f m) r w s = f (\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e m r w s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.RWS.Concurrent.Strict",
          "name": "mapRWSC",
          "package": "concurrent-state",
          "signature": "(m (a, TVar s, TVar w) -\u003e n (b, TVar s, TVar w)) -\u003e RWSC r w s m a -\u003e RWSC r w s n b",
          "source": "src/Control-Monad-RWS-Concurrent-Strict.html#mapRWSC",
          "type": "function"
        },
        "index": {
          "description": "Map the inner computation using the given function runRWSC mapRWSC runRWSC",
          "hierarchy": "Control Monad RWS Concurrent Strict",
          "module": "Control.Monad.RWS.Concurrent.Strict",
          "name": "mapRWSC",
          "normalized": "(a(b,TVar c,TVar d)-\u003ee(f,TVar c,TVar d))-\u003eRWSC g d c a b-\u003eRWSC g d c e f",
          "package": "concurrent-state",
          "partial": "RWSC",
          "signature": "(m(a,TVar s,TVar w)-\u003en(b,TVar s,TVar w))-\u003eRWSC r w s m a-\u003eRWSC r w s n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:mapRWSC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWSC\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment and\n state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWSC\u003c/a\u003e\u003c/code\u003e f m) r s w = uncurry3 (\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e m) (f r s w)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.RWS.Concurrent.Strict",
          "name": "withRWSC",
          "package": "concurrent-state",
          "signature": "(r' -\u003e TVar s -\u003e TVar w -\u003e (r, TVar s, TVar w)) -\u003e RWSC r w s m a -\u003e RWSC r' w s m a",
          "source": "src/Control-Monad-RWS-Concurrent-Strict.html#withRWSC",
          "type": "function"
        },
        "index": {
          "description": "withRWSC executes action with an initial environment and state modified by applying runRWSC withRWSC uncurry3 runRWSC",
          "hierarchy": "Control Monad RWS Concurrent Strict",
          "module": "Control.Monad.RWS.Concurrent.Strict",
          "name": "withRWSC",
          "normalized": "(a-\u003eTVar b-\u003eTVar c-\u003e(d,TVar b,TVar c))-\u003eRWSC d c b e f-\u003eRWSC a c b e f",
          "package": "concurrent-state",
          "partial": "RWSC",
          "signature": "(r'-\u003eTVar s-\u003eTVar w-\u003e(r,TVar s,TVar w))-\u003eRWSC r w s m a-\u003eRWSC r' w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:withRWSC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent RWS monad, combining a Reader, a Writer, and a State monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RWS.Concurrent",
          "name": "Concurrent",
          "package": "concurrent-state",
          "source": "src/Control-Monad-RWS-Concurrent.html",
          "type": "module"
        },
        "index": {
          "description": "Concurrent RWS monad combining Reader Writer and State monad",
          "hierarchy": "Control Monad RWS Concurrent",
          "module": "Control.Monad.RWS.Concurrent",
          "name": "Concurrent",
          "package": "concurrent-state",
          "partial": "Concurrent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent state monad, providing a State-like interface but allowing\n for multiple threads to operate on the same value simultaneously.\n\u003c/p\u003e\u003cp\u003eThis module performs state computations lazily. For a strict version,\n see \u003ca\u003eControl.Monad.State.Concurrent.Strict\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "Lazy",
          "package": "concurrent-state",
          "source": "src/Control-Monad-State-Concurrent-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Concurrent state monad providing State-like interface but allowing for multiple threads to operate on the same value simultaneously This module performs state computations lazily For strict version see Control.Monad.State.Concurrent.Strict",
          "hierarchy": "Control Monad State Concurrent Lazy",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "Lazy",
          "package": "concurrent-state",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concurrent state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e - The state. This is contained in a \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e performs\n actions atomically on the held \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003etransformers\u003c/code\u003e' \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e, with the exception of\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e constraint on every instance, which is necessary to\n perform STM actions.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "StateC",
          "package": "concurrent-state",
          "source": "src/Control-Monad-State-Concurrent-Lazy.html#StateC",
          "type": "data"
        },
        "index": {
          "description": "concurrent state transformer monad parameterized by The state This is contained in TVar The inner monad The return function leaves the state unchanged while performs actions atomically on the held TVar This is very similar to transformers StateT with the exception of the MonadIO constraint on every instance which is necessary to perform STM actions",
          "hierarchy": "Control Monad State Concurrent Lazy",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "StateC",
          "package": "concurrent-state",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#t:StateC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a concurrent state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStateC\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateC\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.State.Concurrent.Lazy\",\"Control.Monad.State.Concurrent.Strict\"]",
          "name": "evalStateC",
          "package": "concurrent-state",
          "signature": "StateC s m a-\u003e TVar s-\u003e m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:evalStateC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:evalStateC\"]"
        },
        "index": {
          "description": "Evaluate concurrent state computation with the given initial state and return the final value discarding the final state evalStateC liftM fst runStateC",
          "hierarchy": "Control Monad State Concurrent Lazy",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "evalStateC",
          "normalized": "StateC a b c-\u003eTVar a-\u003eb c",
          "package": "concurrent-state",
          "partial": "State",
          "signature": "StateC s m a-\u003eTVar s-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:evalStateC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun multiple state operations on the same value, returning all values\n produced by each operation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStatesC\u003c/a\u003e\u003c/code\u003e ms s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStatesC\u003c/a\u003e\u003c/code\u003e ms s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.State.Concurrent.Lazy\",\"Control.Monad.State.Concurrent.Strict\"]",
          "name": "evalStatesC",
          "package": "concurrent-state",
          "signature": "[StateC s m a]-\u003e s-\u003e m [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:evalStatesC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:evalStatesC\"]"
        },
        "index": {
          "description": "Run multiple state operations on the same value returning all values produced by each operation evalStatesC ms liftM fst runStatesC ms",
          "hierarchy": "Control Monad State Concurrent Lazy",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "evalStatesC",
          "normalized": "[StateC a b c]-\u003ea-\u003eb[c]",
          "package": "concurrent-state",
          "partial": "States",
          "signature": "[StateC s m a]-\u003es-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:evalStatesC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a concurrent state computation with the given initial state and return\n the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStateC\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateC\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.State.Concurrent.Lazy\",\"Control.Monad.State.Concurrent.Strict\"]",
          "name": "execStateC",
          "package": "concurrent-state",
          "signature": "StateC s m a-\u003e TVar s-\u003e m s",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:execStateC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:execStateC\"]"
        },
        "index": {
          "description": "Execute concurrent state computation with the given initial state and return the final state discarding the final value execStateC liftM snd runStateC",
          "hierarchy": "Control Monad State Concurrent Lazy",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "execStateC",
          "normalized": "StateC a b c-\u003eTVar a-\u003eb a",
          "package": "concurrent-state",
          "partial": "State",
          "signature": "StateC s m a-\u003eTVar s-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:execStateC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun multiple state operations on the same value, returning the\n resultant state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStatesC\u003c/a\u003e\u003c/code\u003e ms s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStatesC\u003c/a\u003e\u003c/code\u003e ms s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.State.Concurrent.Lazy\",\"Control.Monad.State.Concurrent.Strict\"]",
          "name": "execStatesC",
          "package": "concurrent-state",
          "signature": "[StateC s m a]-\u003e s-\u003e m s",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:execStatesC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:execStatesC\"]"
        },
        "index": {
          "description": "Run multiple state operations on the same value returning the resultant state execStatesC ms liftM snd runStatesC ms",
          "hierarchy": "Control Monad State Concurrent Lazy",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "execStatesC",
          "normalized": "[StateC a b c]-\u003ea-\u003eb a",
          "package": "concurrent-state",
          "partial": "States",
          "signature": "[StateC s m a]-\u003es-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:execStatesC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "liftCallCC",
          "package": "concurrent-state",
          "signature": "((((a, TVar s) -\u003e m (b, TVar s)) -\u003e m (a, TVar s)) -\u003e m (a, TVar s)) -\u003e ((a -\u003e StateC s m b) -\u003e StateC s m a) -\u003e StateC s m a",
          "source": "src/Control-Monad-State-Concurrent-Lazy.html#liftCallCC",
          "type": "function"
        },
        "index": {
          "description": "Uniform lifting of callCC operation to the new monad",
          "hierarchy": "Control Monad State Concurrent Lazy",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "liftCallCC",
          "normalized": "((((a,TVar b)-\u003ec(d,TVar b))-\u003ec(a,TVar b))-\u003ec(a,TVar b))-\u003e((a-\u003eStateC b c d)-\u003eStateC b c a)-\u003eStateC b c a",
          "package": "concurrent-state",
          "partial": "Call CC",
          "signature": "((((a,TVar s)-\u003em(b,TVar s))-\u003em(a,TVar s))-\u003em(a,TVar s))-\u003e((a-\u003eStateC s m b)-\u003eStateC s m a)-\u003eStateC s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:liftCallCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "liftCatch",
          "package": "concurrent-state",
          "signature": "(m (a, TVar s) -\u003e (e -\u003e m (a, TVar s)) -\u003e m (a, TVar s)) -\u003e StateC s m a -\u003e (e -\u003e StateC s m a) -\u003e StateC s m a",
          "source": "src/Control-Monad-State-Concurrent-Lazy.html#liftCatch",
          "type": "function"
        },
        "index": {
          "description": "Lift catchError operation to the new monad",
          "hierarchy": "Control Monad State Concurrent Lazy",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "liftCatch",
          "normalized": "(a(b,TVar c)-\u003e(d-\u003ea(b,TVar c))-\u003ea(b,TVar c))-\u003eStateC c a b-\u003e(d-\u003eStateC c a b)-\u003eStateC c a b",
          "package": "concurrent-state",
          "partial": "Catch",
          "signature": "(m(a,TVar s)-\u003e(e-\u003em(a,TVar s))-\u003em(a,TVar s))-\u003eStateC s m a-\u003e(e-\u003eStateC s m a)-\u003eStateC s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:liftCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003elisten\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "liftListen",
          "package": "concurrent-state",
          "signature": "(m (a, TVar s) -\u003e m ((a, TVar s), w)) -\u003e StateC s m a -\u003e StateC s m (a, w)",
          "source": "src/Control-Monad-State-Concurrent-Lazy.html#liftListen",
          "type": "function"
        },
        "index": {
          "description": "Lift listen operation to the new monad",
          "hierarchy": "Control Monad State Concurrent Lazy",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "liftListen",
          "normalized": "(a(b,TVar c)-\u003ea((b,TVar c),d))-\u003eStateC c a b-\u003eStateC c a(b,d)",
          "package": "concurrent-state",
          "partial": "Listen",
          "signature": "(m(a,TVar s)-\u003em((a,TVar s),w))-\u003eStateC s m a-\u003eStateC s m(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:liftListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003epass\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "liftPass",
          "package": "concurrent-state",
          "signature": "(m ((a, TVar s), b) -\u003e m (a, TVar s)) -\u003e StateC s m (a, b) -\u003e StateC s m a",
          "source": "src/Control-Monad-State-Concurrent-Lazy.html#liftPass",
          "type": "function"
        },
        "index": {
          "description": "Lift pass operation to the new monad",
          "hierarchy": "Control Monad State Concurrent Lazy",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "liftPass",
          "normalized": "(a((b,TVar c),d)-\u003ea(b,TVar c))-\u003eStateC c a(b,d)-\u003eStateC c a b",
          "package": "concurrent-state",
          "partial": "Pass",
          "signature": "(m((a,TVar s),b)-\u003em(a,TVar s))-\u003eStateC s m(a,b)-\u003eStateC s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:liftPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a concurrent state monad computation as a function.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.State.Concurrent.Lazy\",\"Control.Monad.State.Concurrent.Strict\"]",
          "name": "runStateC",
          "package": "concurrent-state",
          "signature": "StateC s m a-\u003e TVar s-\u003e m (a, s)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:runStateC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:runStateC\"]"
        },
        "index": {
          "description": "Unwrap concurrent state monad computation as function",
          "hierarchy": "Control Monad State Concurrent Lazy",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "runStateC",
          "normalized": "StateC a b c-\u003eTVar a-\u003eb(c,a)",
          "package": "concurrent-state",
          "partial": "State",
          "signature": "StateC s m a-\u003eTVar s-\u003em(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:runStateC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun multiple state operations on the same value, returning the\n resultant state and the value produced by each operation.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.State.Concurrent.Lazy\",\"Control.Monad.State.Concurrent.Strict\"]",
          "name": "runStatesC",
          "package": "concurrent-state",
          "signature": "[StateC s m a]-\u003e s-\u003e m ([a], s)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:runStatesC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:runStatesC\"]"
        },
        "index": {
          "description": "Run multiple state operations on the same value returning the resultant state and the value produced by each operation",
          "hierarchy": "Control Monad State Concurrent Lazy",
          "module": "Control.Monad.State.Concurrent.Lazy",
          "name": "runStatesC",
          "normalized": "[StateC a b c]-\u003ea-\u003eb([c],a)",
          "package": "concurrent-state",
          "partial": "States",
          "signature": "[StateC s m a]-\u003es-\u003em([a],s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:runStatesC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent state monad, providing a State-like interface but allowing\n for multiple threads to operate on the same value simultaneously.\n\u003c/p\u003e\u003cp\u003eThis module performs state computations strictly. For a lazy version,\n see \u003ca\u003eControl.Monad.State.Concurrent.Lazy\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State.Concurrent.Strict",
          "name": "Strict",
          "package": "concurrent-state",
          "source": "src/Control-Monad-State-Concurrent-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Concurrent state monad providing State-like interface but allowing for multiple threads to operate on the same value simultaneously This module performs state computations strictly For lazy version see Control.Monad.State.Concurrent.Lazy",
          "hierarchy": "Control Monad State Concurrent Strict",
          "module": "Control.Monad.State.Concurrent.Strict",
          "name": "Strict",
          "package": "concurrent-state",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concurrent state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e - The state. This is contained in a \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e performs\n actions atomically on the held \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003etransformers\u003c/code\u003e' \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e, with the exception of\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e constraint on every instance, which is necessary to\n perform STM actions.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Concurrent.Strict",
          "name": "StateC",
          "package": "concurrent-state",
          "source": "src/Control-Monad-State-Concurrent-Strict.html#StateC",
          "type": "data"
        },
        "index": {
          "description": "concurrent state transformer monad parameterized by The state This is contained in TVar The inner monad The return function leaves the state unchanged while performs actions atomically on the held TVar This is very similar to transformers StateT with the exception of the MonadIO constraint on every instance which is necessary to perform STM actions",
          "hierarchy": "Control Monad State Concurrent Strict",
          "module": "Control.Monad.State.Concurrent.Strict",
          "name": "StateC",
          "package": "concurrent-state",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#t:StateC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Concurrent.Strict",
          "name": "liftCallCC",
          "package": "concurrent-state",
          "signature": "((((a, TVar s) -\u003e m (b, TVar s)) -\u003e m (a, TVar s)) -\u003e m (a, TVar s)) -\u003e ((a -\u003e StateC s m b) -\u003e StateC s m a) -\u003e StateC s m a",
          "source": "src/Control-Monad-State-Concurrent-Strict.html#liftCallCC",
          "type": "function"
        },
        "index": {
          "description": "Uniform lifting of callCC operation to the new monad",
          "hierarchy": "Control Monad State Concurrent Strict",
          "module": "Control.Monad.State.Concurrent.Strict",
          "name": "liftCallCC",
          "normalized": "((((a,TVar b)-\u003ec(d,TVar b))-\u003ec(a,TVar b))-\u003ec(a,TVar b))-\u003e((a-\u003eStateC b c d)-\u003eStateC b c a)-\u003eStateC b c a",
          "package": "concurrent-state",
          "partial": "Call CC",
          "signature": "((((a,TVar s)-\u003em(b,TVar s))-\u003em(a,TVar s))-\u003em(a,TVar s))-\u003e((a-\u003eStateC s m b)-\u003eStateC s m a)-\u003eStateC s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:liftCallCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Concurrent.Strict",
          "name": "liftCatch",
          "package": "concurrent-state",
          "signature": "(m (a, TVar s) -\u003e (e -\u003e m (a, TVar s)) -\u003e m (a, TVar s)) -\u003e StateC s m a -\u003e (e -\u003e StateC s m a) -\u003e StateC s m a",
          "source": "src/Control-Monad-State-Concurrent-Strict.html#liftCatch",
          "type": "function"
        },
        "index": {
          "description": "Lift catchError operation to the new monad",
          "hierarchy": "Control Monad State Concurrent Strict",
          "module": "Control.Monad.State.Concurrent.Strict",
          "name": "liftCatch",
          "normalized": "(a(b,TVar c)-\u003e(d-\u003ea(b,TVar c))-\u003ea(b,TVar c))-\u003eStateC c a b-\u003e(d-\u003eStateC c a b)-\u003eStateC c a b",
          "package": "concurrent-state",
          "partial": "Catch",
          "signature": "(m(a,TVar s)-\u003e(e-\u003em(a,TVar s))-\u003em(a,TVar s))-\u003eStateC s m a-\u003e(e-\u003eStateC s m a)-\u003eStateC s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:liftCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003elisten\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Concurrent.Strict",
          "name": "liftListen",
          "package": "concurrent-state",
          "signature": "(m (a, TVar s) -\u003e m ((a, TVar s), w)) -\u003e StateC s m a -\u003e StateC s m (a, w)",
          "source": "src/Control-Monad-State-Concurrent-Strict.html#liftListen",
          "type": "function"
        },
        "index": {
          "description": "Lift listen operation to the new monad",
          "hierarchy": "Control Monad State Concurrent Strict",
          "module": "Control.Monad.State.Concurrent.Strict",
          "name": "liftListen",
          "normalized": "(a(b,TVar c)-\u003ea((b,TVar c),d))-\u003eStateC c a b-\u003eStateC c a(b,d)",
          "package": "concurrent-state",
          "partial": "Listen",
          "signature": "(m(a,TVar s)-\u003em((a,TVar s),w))-\u003eStateC s m a-\u003eStateC s m(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:liftListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003epass\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.State.Concurrent.Strict",
          "name": "liftPass",
          "package": "concurrent-state",
          "signature": "(m ((a, TVar s), b) -\u003e m (a, TVar s)) -\u003e StateC s m (a, b) -\u003e StateC s m a",
          "source": "src/Control-Monad-State-Concurrent-Strict.html#liftPass",
          "type": "function"
        },
        "index": {
          "description": "Lift pass operation to the new monad",
          "hierarchy": "Control Monad State Concurrent Strict",
          "module": "Control.Monad.State.Concurrent.Strict",
          "name": "liftPass",
          "normalized": "(a((b,TVar c),d)-\u003ea(b,TVar c))-\u003eStateC c a(b,d)-\u003eStateC c a b",
          "package": "concurrent-state",
          "partial": "Pass",
          "signature": "(m((a,TVar s),b)-\u003em(a,TVar s))-\u003eStateC s m(a,b)-\u003eStateC s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:liftPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent state monad, providing a State-like interface but allowing\n for multiple threads to operate on the same value simultaneously.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State.Concurrent",
          "name": "Concurrent",
          "package": "concurrent-state",
          "source": "src/Control-Monad-State-Concurrent.html",
          "type": "module"
        },
        "index": {
          "description": "Concurrent state monad providing State-like interface but allowing for multiple threads to operate on the same value simultaneously",
          "hierarchy": "Control Monad State Concurrent",
          "module": "Control.Monad.State.Concurrent",
          "name": "Concurrent",
          "package": "concurrent-state",
          "partial": "Concurrent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad whose actions produce an output.\n\u003c/p\u003e\u003cp\u003eThis module builds output lazily. For a strict version, see\n \u003ca\u003eControl.Monad.Writer.Concurrent.Strict\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "Lazy",
          "package": "concurrent-state",
          "source": "src/Control-Monad-Writer-Concurrent-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "monad whose actions produce an output This module builds output lazily For strict version see Control.Monad.Writer.Concurrent.Strict",
          "hierarchy": "Control Monad Writer Concurrent Lazy",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "Lazy",
          "package": "concurrent-state",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concurrent monad transformer collecting output of type \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003etransformers\u003c/code\u003e' \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e, with the exception of\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e constraint on every instance, which is necessary to\n perform STM actions.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "WriterC",
          "package": "concurrent-state",
          "source": "src/Control-Monad-Writer-Concurrent-Lazy.html#WriterC",
          "type": "data"
        },
        "index": {
          "description": "concurrent monad transformer collecting output of type This is very similar to transformers WriterT with the exception of the MonadIO constraint on every instance which is necessary to perform STM actions",
          "hierarchy": "Control Monad Writer Concurrent Lazy",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "WriterC",
          "package": "concurrent-state",
          "partial": "Writer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#t:WriterC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a concurrent Writer monad computation as a function, discarding\n the return value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriterC\u003c/a\u003e\u003c/code\u003e m w = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriterC\u003c/a\u003e\u003c/code\u003e m w)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.Writer.Concurrent.Lazy\",\"Control.Monad.Writer.Concurrent.Strict\"]",
          "name": "execWriterC",
          "package": "concurrent-state",
          "signature": "WriterC w m a-\u003e TVar w-\u003e m w",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:execWriterC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:execWriterC\"]"
        },
        "index": {
          "description": "Unwrap concurrent Writer monad computation as function discarding the return value execWriterC liftM snd runWriterC",
          "hierarchy": "Control Monad Writer Concurrent Lazy",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "execWriterC",
          "normalized": "WriterC a b c-\u003eTVar a-\u003eb a",
          "package": "concurrent-state",
          "partial": "Writer",
          "signature": "WriterC w m a-\u003eTVar w-\u003em w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:execWriterC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun multiple Writer operations on the same value, returning the\n resultant output.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Writer.Concurrent.Lazy\",\"Control.Monad.Writer.Concurrent.Strict\"]",
          "name": "execWritersC",
          "package": "concurrent-state",
          "signature": "[WriterC w m a]-\u003e m w",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:execWritersC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:execWritersC\"]"
        },
        "index": {
          "description": "Run multiple Writer operations on the same value returning the resultant output",
          "hierarchy": "Control Monad Writer Concurrent Lazy",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "execWritersC",
          "normalized": "[WriterC a b c]-\u003eb a",
          "package": "concurrent-state",
          "partial": "Writers",
          "signature": "[WriterC w m a]-\u003em w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:execWritersC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "liftCallCC",
          "package": "concurrent-state",
          "signature": "((((a, TVar w) -\u003e m (b, TVar w)) -\u003e m (a, TVar w)) -\u003e m (a, TVar w)) -\u003e ((a -\u003e WriterC w m b) -\u003e WriterC w m a) -\u003e WriterC w m a",
          "source": "src/Control-Monad-Writer-Concurrent-Lazy.html#liftCallCC",
          "type": "function"
        },
        "index": {
          "description": "Lift callCC operation to the new monad",
          "hierarchy": "Control Monad Writer Concurrent Lazy",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "liftCallCC",
          "normalized": "((((a,TVar b)-\u003ec(d,TVar b))-\u003ec(a,TVar b))-\u003ec(a,TVar b))-\u003e((a-\u003eWriterC b c d)-\u003eWriterC b c a)-\u003eWriterC b c a",
          "package": "concurrent-state",
          "partial": "Call CC",
          "signature": "((((a,TVar w)-\u003em(b,TVar w))-\u003em(a,TVar w))-\u003em(a,TVar w))-\u003e((a-\u003eWriterC w m b)-\u003eWriterC w m a)-\u003eWriterC w m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:liftCallCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "liftCatch",
          "package": "concurrent-state",
          "signature": "(m (a, TVar w) -\u003e (e -\u003e m (a, TVar w)) -\u003e m (a, TVar w)) -\u003e WriterC w m a -\u003e (e -\u003e WriterC w m a) -\u003e WriterC w m a",
          "source": "src/Control-Monad-Writer-Concurrent-Lazy.html#liftCatch",
          "type": "function"
        },
        "index": {
          "description": "Lift catchError operation to the new monad",
          "hierarchy": "Control Monad Writer Concurrent Lazy",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "liftCatch",
          "normalized": "(a(b,TVar c)-\u003e(d-\u003ea(b,TVar c))-\u003ea(b,TVar c))-\u003eWriterC c a b-\u003e(d-\u003eWriterC c a b)-\u003eWriterC c a b",
          "package": "concurrent-state",
          "partial": "Catch",
          "signature": "(m(a,TVar w)-\u003e(e-\u003em(a,TVar w))-\u003em(a,TVar w))-\u003eWriterC w m a-\u003e(e-\u003eWriterC w m a)-\u003eWriterC w m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:liftCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap both the return value and output of a computation using the given\n function.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "mapWriterC",
          "package": "concurrent-state",
          "signature": "(m (a, TVar w) -\u003e n (b, TVar w)) -\u003e WriterC w m a -\u003e WriterC w n b",
          "source": "src/Control-Monad-Writer-Concurrent-Lazy.html#mapWriterC",
          "type": "function"
        },
        "index": {
          "description": "Map both the return value and output of computation using the given function",
          "hierarchy": "Control Monad Writer Concurrent Lazy",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "mapWriterC",
          "normalized": "(a(b,TVar c)-\u003ed(e,TVar c))-\u003eWriterC c a b-\u003eWriterC c d e",
          "package": "concurrent-state",
          "partial": "Writer",
          "signature": "(m(a,TVar w)-\u003en(b,TVar w))-\u003eWriterC w m a-\u003eWriterC w n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:mapWriterC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a concurrent Writer monad computation as a function.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Writer.Concurrent.Lazy\",\"Control.Monad.Writer.Concurrent.Strict\"]",
          "name": "runWriterC",
          "package": "concurrent-state",
          "signature": "WriterC w m a-\u003e TVar w-\u003e m (a, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:runWriterC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:runWriterC\"]"
        },
        "index": {
          "description": "Unwrap concurrent Writer monad computation as function",
          "hierarchy": "Control Monad Writer Concurrent Lazy",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "runWriterC",
          "normalized": "WriterC a b c-\u003eTVar a-\u003eb(c,a)",
          "package": "concurrent-state",
          "partial": "Writer",
          "signature": "WriterC w m a-\u003eTVar w-\u003em(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:runWriterC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun multiple Writer operations on the same value, returning the\n resultant output and the value produced by each operation.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Writer.Concurrent.Lazy\",\"Control.Monad.Writer.Concurrent.Strict\"]",
          "name": "runWritersC",
          "package": "concurrent-state",
          "signature": "[WriterC w m a]-\u003e m ([a], w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:runWritersC\",\"http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:runWritersC\"]"
        },
        "index": {
          "description": "Run multiple Writer operations on the same value returning the resultant output and the value produced by each operation",
          "hierarchy": "Control Monad Writer Concurrent Lazy",
          "module": "Control.Monad.Writer.Concurrent.Lazy",
          "name": "runWritersC",
          "normalized": "[WriterC a b c]-\u003eb([c],a)",
          "package": "concurrent-state",
          "partial": "Writers",
          "signature": "[WriterC w m a]-\u003em([a],w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:runWritersC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad whose actions produce an output.\n\u003c/p\u003e\u003cp\u003eThis module builds output strictly. For a lazy version, see\n \u003ca\u003eControl.Monad.Writer.Concurrent.Lazy\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Writer.Concurrent.Strict",
          "name": "Strict",
          "package": "concurrent-state",
          "source": "src/Control-Monad-Writer-Concurrent-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "monad whose actions produce an output This module builds output strictly For lazy version see Control.Monad.Writer.Concurrent.Lazy",
          "hierarchy": "Control Monad Writer Concurrent Strict",
          "module": "Control.Monad.Writer.Concurrent.Strict",
          "name": "Strict",
          "package": "concurrent-state",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concurrent monad transformer collecting output of type \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003etransformers\u003c/code\u003e' \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e, with the exception of\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e constraint on every instance, which is necessary to\n perform STM actions.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Concurrent.Strict",
          "name": "WriterC",
          "package": "concurrent-state",
          "source": "src/Control-Monad-Writer-Concurrent-Strict.html#WriterC",
          "type": "data"
        },
        "index": {
          "description": "concurrent monad transformer collecting output of type This is very similar to transformers WriterT with the exception of the MonadIO constraint on every instance which is necessary to perform STM actions",
          "hierarchy": "Control Monad Writer Concurrent Strict",
          "module": "Control.Monad.Writer.Concurrent.Strict",
          "name": "WriterC",
          "package": "concurrent-state",
          "partial": "Writer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#t:WriterC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Concurrent.Strict",
          "name": "liftCallCC",
          "package": "concurrent-state",
          "signature": "((((a, TVar w) -\u003e m (b, TVar w)) -\u003e m (a, TVar w)) -\u003e m (a, TVar w)) -\u003e ((a -\u003e WriterC w m b) -\u003e WriterC w m a) -\u003e WriterC w m a",
          "source": "src/Control-Monad-Writer-Concurrent-Strict.html#liftCallCC",
          "type": "function"
        },
        "index": {
          "description": "Lift callCC operation to the new monad",
          "hierarchy": "Control Monad Writer Concurrent Strict",
          "module": "Control.Monad.Writer.Concurrent.Strict",
          "name": "liftCallCC",
          "normalized": "((((a,TVar b)-\u003ec(d,TVar b))-\u003ec(a,TVar b))-\u003ec(a,TVar b))-\u003e((a-\u003eWriterC b c d)-\u003eWriterC b c a)-\u003eWriterC b c a",
          "package": "concurrent-state",
          "partial": "Call CC",
          "signature": "((((a,TVar w)-\u003em(b,TVar w))-\u003em(a,TVar w))-\u003em(a,TVar w))-\u003e((a-\u003eWriterC w m b)-\u003eWriterC w m a)-\u003eWriterC w m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:liftCallCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Concurrent.Strict",
          "name": "liftCatch",
          "package": "concurrent-state",
          "signature": "(m (a, TVar w) -\u003e (e -\u003e m (a, TVar w)) -\u003e m (a, TVar w)) -\u003e WriterC w m a -\u003e (e -\u003e WriterC w m a) -\u003e WriterC w m a",
          "source": "src/Control-Monad-Writer-Concurrent-Strict.html#liftCatch",
          "type": "function"
        },
        "index": {
          "description": "Lift catchError operation to the new monad",
          "hierarchy": "Control Monad Writer Concurrent Strict",
          "module": "Control.Monad.Writer.Concurrent.Strict",
          "name": "liftCatch",
          "normalized": "(a(b,TVar c)-\u003e(d-\u003ea(b,TVar c))-\u003ea(b,TVar c))-\u003eWriterC c a b-\u003e(d-\u003eWriterC c a b)-\u003eWriterC c a b",
          "package": "concurrent-state",
          "partial": "Catch",
          "signature": "(m(a,TVar w)-\u003e(e-\u003em(a,TVar w))-\u003em(a,TVar w))-\u003eWriterC w m a-\u003e(e-\u003eWriterC w m a)-\u003eWriterC w m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:liftCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap both the return value and output of a computation using the given\n function.\n\u003c/p\u003e",
          "module": "Control.Monad.Writer.Concurrent.Strict",
          "name": "mapWriterC",
          "package": "concurrent-state",
          "signature": "(m (a, TVar w) -\u003e n (b, TVar w)) -\u003e WriterC w m a -\u003e WriterC w n b",
          "source": "src/Control-Monad-Writer-Concurrent-Strict.html#mapWriterC",
          "type": "function"
        },
        "index": {
          "description": "Map both the return value and output of computation using the given function",
          "hierarchy": "Control Monad Writer Concurrent Strict",
          "module": "Control.Monad.Writer.Concurrent.Strict",
          "name": "mapWriterC",
          "normalized": "(a(b,TVar c)-\u003ed(e,TVar c))-\u003eWriterC c a b-\u003eWriterC c d e",
          "package": "concurrent-state",
          "partial": "Writer",
          "signature": "(m(a,TVar w)-\u003en(b,TVar w))-\u003eWriterC w m a-\u003eWriterC w n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:mapWriterC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad whose actions produce an output.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Writer.Concurrent",
          "name": "Concurrent",
          "package": "concurrent-state",
          "source": "src/Control-Monad-Writer-Concurrent.html",
          "type": "module"
        },
        "index": {
          "description": "monad whose actions produce an output",
          "hierarchy": "Control Monad Writer Concurrent",
          "module": "Control.Monad.Writer.Concurrent",
          "name": "Concurrent",
          "package": "concurrent-state",
          "partial": "Concurrent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent.html#"
      }
    }
  ]
]