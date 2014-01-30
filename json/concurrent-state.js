[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneralizes \u003ccode\u003eforkIO\u003c/code\u003e to MonadIO.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Lifted.Fork",
        "fct-package": "concurrent-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Lifted-Fork.html",
        "fct-type": "module",
        "title": "Fork"
      },
      "index": {
        "description": "Generalizes forkIO to MonadIO",
        "hierarchy": "Control Concurrent Lifted Fork",
        "module": "Control.Concurrent.Lifted.Fork",
        "name": "Fork",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Fork",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#t:MonadFork",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralize \u003ccode\u003eforkIO\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted.Fork",
        "fct-package": "concurrent-state",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-Lifted-Fork.html#MonadFork",
        "fct-type": "class",
        "title": "MonadFork"
      },
      "index": {
        "description": "Generalize forkIO to MonadIO",
        "hierarchy": "Control Concurrent Lifted Fork",
        "module": "Control.Concurrent.Lifted.Fork",
        "name": "MonadFork",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Monad Fork",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#v:fork",
      "description": {
        "fct-module": "Control.Concurrent.Lifted.Fork",
        "fct-package": "concurrent-state",
        "fct-signature": "m () -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted-Fork.html#fork",
        "fct-type": "method",
        "title": "fork"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Lifted Fork",
        "module": "Control.Concurrent.Lifted.Fork",
        "name": "fork",
        "normalized": "a()-\u003ea ThreadId",
        "package": "concurrent-state",
        "partial": "",
        "signature": "m()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#v:forkFinally",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003eforkFinally\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted.Fork",
        "fct-package": "concurrent-state",
        "fct-signature": "m a -\u003e (Either SomeException a -\u003e m ()) -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted-Fork.html#forkFinally",
        "fct-type": "function",
        "title": "forkFinally"
      },
      "index": {
        "description": "Generalized forkFinally",
        "hierarchy": "Control Concurrent Lifted Fork",
        "module": "Control.Concurrent.Lifted.Fork",
        "name": "forkFinally",
        "normalized": "a b-\u003e(Either SomeException b-\u003ea())-\u003ea ThreadId",
        "package": "concurrent-state",
        "partial": "Finally",
        "signature": "m a-\u003e(Either SomeException a-\u003em())-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#v:forkOS",
      "description": {
        "fct-module": "Control.Concurrent.Lifted.Fork",
        "fct-package": "concurrent-state",
        "fct-signature": "m () -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted-Fork.html#forkOS",
        "fct-type": "method",
        "title": "forkOS"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Lifted Fork",
        "module": "Control.Concurrent.Lifted.Fork",
        "name": "forkOS",
        "normalized": "a()-\u003ea ThreadId",
        "package": "concurrent-state",
        "partial": "OS",
        "signature": "m()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#v:forkOn",
      "description": {
        "fct-module": "Control.Concurrent.Lifted.Fork",
        "fct-package": "concurrent-state",
        "fct-signature": "Int -\u003e m () -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted-Fork.html#forkOn",
        "fct-type": "method",
        "title": "forkOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Lifted Fork",
        "module": "Control.Concurrent.Lifted.Fork",
        "name": "forkOn",
        "normalized": "Int-\u003ea()-\u003ea ThreadId",
        "package": "concurrent-state",
        "partial": "On",
        "signature": "Int-\u003em()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#v:forkOnWithUnmask",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003eforkOnWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted.Fork",
        "fct-package": "concurrent-state",
        "fct-signature": "Int -\u003e ((forall a.  m a -\u003e m a) -\u003e m ()) -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted-Fork.html#forkOnWithUnmask",
        "fct-type": "function",
        "title": "forkOnWithUnmask"
      },
      "index": {
        "description": "Generalized forkOnWithUnmask",
        "hierarchy": "Control Concurrent Lifted Fork",
        "module": "Control.Concurrent.Lifted.Fork",
        "name": "forkOnWithUnmask",
        "normalized": "Int-\u003e((a b c d-\u003ec d)-\u003ec())-\u003ec ThreadId",
        "package": "concurrent-state",
        "partial": "On With Unmask",
        "signature": "Int-\u003e((forall a. m a-\u003em a)-\u003em())-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Concurrent-Lifted-Fork.html#v:forkWithUnmask",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003eforkIOWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted.Fork",
        "fct-package": "concurrent-state",
        "fct-signature": "((forall a.  m a -\u003e m a) -\u003e m ()) -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted-Fork.html#forkWithUnmask",
        "fct-type": "function",
        "title": "forkWithUnmask"
      },
      "index": {
        "description": "Generalized forkIOWithUnmask",
        "hierarchy": "Control Concurrent Lifted Fork",
        "module": "Control.Concurrent.Lifted.Fork",
        "name": "forkWithUnmask",
        "normalized": "((a b c d-\u003ec d)-\u003ec())-\u003ec ThreadId",
        "package": "concurrent-state",
        "partial": "With Unmask",
        "signature": "((forall a. m a-\u003em a)-\u003em())-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent RWS monad, combining a Reader, a Writer, and a State monad.\n\u003c/p\u003e\u003cp\u003eThis module performs computations lazily. For a strict version, see\n \u003ca\u003eControl.Monad.RWS.Concurrent.Strict\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-RWS-Concurrent-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Concurrent RWS monad combining Reader Writer and State monad This module performs computations lazily For strict version see Control.Monad.RWS.Concurrent.Strict",
        "hierarchy": "Control Monad RWS Concurrent Lazy",
        "module": "Control.Monad.RWS.Concurrent.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#t:RWSC",
      "description": {
        "fct-descr": "\u003cp\u003eA concurrent monad transformer reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e to an\n inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003etransformers\u003c/code\u003e' \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e, with the exception of\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e constraint on every instance, which is necessary to\n perform STM actions.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-RWS-Concurrent-Lazy.html#RWSC",
        "fct-type": "data",
        "title": "RWSC"
      },
      "index": {
        "description": "concurrent monad transformer reading an environment of type collecting output of type and updating state of type to an inner monad This is very similar to transformers RWST with the exception of the MonadIO constraint on every instance which is necessary to perform STM actions",
        "hierarchy": "Control Monad RWS Concurrent Lazy",
        "module": "Control.Monad.RWS.Concurrent.Lazy",
        "name": "RWSC",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "RWSC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:evalRWSC",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a concurrent RWS monad computation as a function, discarding\n the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "RWSC r w s m a-\u003e r-\u003e TVar s-\u003e TVar w-\u003e m (a, w)",
        "fct-type": "function",
        "title": "evalRWSC"
      },
      "index": {
        "description": "Unwrap concurrent RWS monad computation as function discarding the final state",
        "hierarchy": "Control Monad RWS Concurrent Lazy",
        "module": "Control.Monad.RWS.Concurrent.Lazy",
        "name": "evalRWSC",
        "normalized": "RWSC a b c d e-\u003ea-\u003eTVar c-\u003eTVar b-\u003ed(e,b)",
        "package": "concurrent-state",
        "partial": "RWSC",
        "signature": "RWSC r w s m a-\u003er-\u003eTVar s-\u003eTVar w-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:evalRWSCs",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple RWS operations on the same value, returning the final\n output and the return values of each operation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "[RWSC r w s m a]-\u003e r-\u003e s-\u003e m ([a], w)",
        "fct-type": "function",
        "title": "evalRWSCs"
      },
      "index": {
        "description": "Run multiple RWS operations on the same value returning the final output and the return values of each operation",
        "hierarchy": "Control Monad RWS Concurrent Lazy",
        "module": "Control.Monad.RWS.Concurrent.Lazy",
        "name": "evalRWSCs",
        "normalized": "[RWSC a b c d e]-\u003ea-\u003ec-\u003ed([e],b)",
        "package": "concurrent-state",
        "partial": "RWSCs",
        "signature": "[RWSC r w s m a]-\u003er-\u003es-\u003em([a],w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:execRWSC",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a concurrent RWS monad computation as a function, discarding\n the return value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "RWSC r w s m a-\u003e r-\u003e TVar s-\u003e TVar w-\u003e m (s, w)",
        "fct-type": "function",
        "title": "execRWSC"
      },
      "index": {
        "description": "Unwrap concurrent RWS monad computation as function discarding the return value",
        "hierarchy": "Control Monad RWS Concurrent Lazy",
        "module": "Control.Monad.RWS.Concurrent.Lazy",
        "name": "execRWSC",
        "normalized": "RWSC a b c d e-\u003ea-\u003eTVar c-\u003eTVar b-\u003ed(c,b)",
        "package": "concurrent-state",
        "partial": "RWSC",
        "signature": "RWSC r w s m a-\u003er-\u003eTVar s-\u003eTVar w-\u003em(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:execRWSCs",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple RWS operations on the same value, returning the final\n state and the return values of each operation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "[RWSC r w s m a]-\u003e r-\u003e s-\u003e m (s, w)",
        "fct-type": "function",
        "title": "execRWSCs"
      },
      "index": {
        "description": "Run multiple RWS operations on the same value returning the final state and the return values of each operation",
        "hierarchy": "Control Monad RWS Concurrent Lazy",
        "module": "Control.Monad.RWS.Concurrent.Lazy",
        "name": "execRWSCs",
        "normalized": "[RWSC a b c d e]-\u003ea-\u003ec-\u003ed(c,b)",
        "package": "concurrent-state",
        "partial": "RWSCs",
        "signature": "[RWSC r w s m a]-\u003er-\u003es-\u003em(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "((((a, TVar s, TVar w) -\u003e m (b, TVar s, TVar w)) -\u003e m (a, TVar s, TVar w)) -\u003e m (a, TVar s, TVar w)) -\u003e ((a -\u003e RWSC r w s m b) -\u003e RWSC r w s m a) -\u003e RWSC r w s m a",
        "fct-source": "src/Control-Monad-RWS-Concurrent-Lazy.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Uniform lifting of callCC operation to the new monad",
        "hierarchy": "Control Monad RWS Concurrent Lazy",
        "module": "Control.Monad.RWS.Concurrent.Lazy",
        "name": "liftCallCC",
        "normalized": "((((a,TVar b,TVar c)-\u003ed(e,TVar b,TVar c))-\u003ed(a,TVar b,TVar c))-\u003ed(a,TVar b,TVar c))-\u003e((a-\u003eRWSC f c b d e)-\u003eRWSC f c b d a)-\u003eRWSC f c b d a",
        "package": "concurrent-state",
        "partial": "Call CC",
        "signature": "((((a,TVar s,TVar w)-\u003em(b,TVar s,TVar w))-\u003em(a,TVar s,TVar w))-\u003em(a,TVar s,TVar w))-\u003e((a-\u003eRWSC r w s m b)-\u003eRWSC r w s m a)-\u003eRWSC r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "(m (a, TVar s, TVar w) -\u003e (e -\u003e m (a, TVar s, TVar w)) -\u003e m (a, TVar s, TVar w)) -\u003e RWSC l w s m a -\u003e (e -\u003e RWSC l w s m a) -\u003e RWSC l w s m a",
        "fct-source": "src/Control-Monad-RWS-Concurrent-Lazy.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad RWS Concurrent Lazy",
        "module": "Control.Monad.RWS.Concurrent.Lazy",
        "name": "liftCatch",
        "normalized": "(a(b,TVar c,TVar d)-\u003e(e-\u003ea(b,TVar c,TVar d))-\u003ea(b,TVar c,TVar d))-\u003eRWSC f d c a b-\u003e(e-\u003eRWSC f d c a b)-\u003eRWSC f d c a b",
        "package": "concurrent-state",
        "partial": "Catch",
        "signature": "(m(a,TVar s,TVar w)-\u003e(e-\u003em(a,TVar s,TVar w))-\u003em(a,TVar s,TVar w))-\u003eRWSC l w s m a-\u003e(e-\u003eRWSC l w s m a)-\u003eRWSC l w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:mapRWSC",
      "description": {
        "fct-descr": "\u003cp\u003eMap the inner computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWSC\u003c/a\u003e\u003c/code\u003e f m) r w s = f (\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e m r w s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "(m (a, TVar s, TVar w) -\u003e n (b, TVar s, TVar w)) -\u003e RWSC r w s m a -\u003e RWSC r w s n b",
        "fct-source": "src/Control-Monad-RWS-Concurrent-Lazy.html#mapRWSC",
        "fct-type": "function",
        "title": "mapRWSC"
      },
      "index": {
        "description": "Map the inner computation using the given function runRWSC mapRWSC runRWSC",
        "hierarchy": "Control Monad RWS Concurrent Lazy",
        "module": "Control.Monad.RWS.Concurrent.Lazy",
        "name": "mapRWSC",
        "normalized": "(a(b,TVar c,TVar d)-\u003ee(f,TVar c,TVar d))-\u003eRWSC g d c a b-\u003eRWSC g d c e f",
        "package": "concurrent-state",
        "partial": "RWSC",
        "signature": "(m(a,TVar s,TVar w)-\u003en(b,TVar s,TVar w))-\u003eRWSC r w s m a-\u003eRWSC r w s n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:runRWSC",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a concurrent RWS monad computation as a function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "RWSC r w s m a-\u003e r-\u003e TVar s-\u003e TVar w-\u003e m (a, s, w)",
        "fct-type": "function",
        "title": "runRWSC"
      },
      "index": {
        "description": "Unwrap concurrent RWS monad computation as function",
        "hierarchy": "Control Monad RWS Concurrent Lazy",
        "module": "Control.Monad.RWS.Concurrent.Lazy",
        "name": "runRWSC",
        "normalized": "RWSC a b c d e-\u003ea-\u003eTVar c-\u003eTVar b-\u003ed(e,c,b)",
        "package": "concurrent-state",
        "partial": "RWSC",
        "signature": "RWSC r w s m a-\u003er-\u003eTVar s-\u003eTVar w-\u003em(a,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:runRWSCs",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple RWS operations on the same value, returning the resultant\n state, output, and the value produced by each operation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "[RWSC r w s m a]-\u003e r-\u003e s-\u003e m ([a], s, w)",
        "fct-type": "function",
        "title": "runRWSCs"
      },
      "index": {
        "description": "Run multiple RWS operations on the same value returning the resultant state output and the value produced by each operation",
        "hierarchy": "Control Monad RWS Concurrent Lazy",
        "module": "Control.Monad.RWS.Concurrent.Lazy",
        "name": "runRWSCs",
        "normalized": "[RWSC a b c d e]-\u003ea-\u003ec-\u003ed([e],c,b)",
        "package": "concurrent-state",
        "partial": "RWSCs",
        "signature": "[RWSC r w s m a]-\u003er-\u003es-\u003em([a],s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Lazy.html#v:withRWSC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWSC\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment and\n state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWSC\u003c/a\u003e\u003c/code\u003e f m) r s w = uncurry3 (\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e m) (f r s w)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "(r' -\u003e TVar s -\u003e TVar w -\u003e (r, TVar s, TVar w)) -\u003e RWSC r w s m a -\u003e RWSC r' w s m a",
        "fct-source": "src/Control-Monad-RWS-Concurrent-Lazy.html#withRWSC",
        "fct-type": "function",
        "title": "withRWSC"
      },
      "index": {
        "description": "withRWSC executes action with an initial environment and state modified by applying runRWSC withRWSC uncurry3 runRWSC",
        "hierarchy": "Control Monad RWS Concurrent Lazy",
        "module": "Control.Monad.RWS.Concurrent.Lazy",
        "name": "withRWSC",
        "normalized": "(a-\u003eTVar b-\u003eTVar c-\u003e(d,TVar b,TVar c))-\u003eRWSC d c b e f-\u003eRWSC a c b e f",
        "package": "concurrent-state",
        "partial": "RWSC",
        "signature": "(r'-\u003eTVar s-\u003eTVar w-\u003e(r,TVar s,TVar w))-\u003eRWSC r w s m a-\u003eRWSC r' w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent RWS monad, combining a Reader, a Writer, and a State monad.\n\u003c/p\u003e\u003cp\u003eThis module performs computations strictly. For a lazy version, see\n \u003ca\u003eControl.Monad.RWS.Concurrent.Lazy\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-RWS-Concurrent-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Concurrent RWS monad combining Reader Writer and State monad This module performs computations strictly For lazy version see Control.Monad.RWS.Concurrent.Lazy",
        "hierarchy": "Control Monad RWS Concurrent Strict",
        "module": "Control.Monad.RWS.Concurrent.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#t:RWSC",
      "description": {
        "fct-descr": "\u003cp\u003eA concurrent monad transformer reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e to an\n inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003etransformers\u003c/code\u003e' \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e, with the exception of\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e constraint on every instance, which is necessary to\n perform STM actions.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-RWS-Concurrent-Strict.html#RWSC",
        "fct-type": "data",
        "title": "RWSC"
      },
      "index": {
        "description": "concurrent monad transformer reading an environment of type collecting output of type and updating state of type to an inner monad This is very similar to transformers RWST with the exception of the MonadIO constraint on every instance which is necessary to perform STM actions",
        "hierarchy": "Control Monad RWS Concurrent Strict",
        "module": "Control.Monad.RWS.Concurrent.Strict",
        "name": "RWSC",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "RWSC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:evalRWSC",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a concurrent RWS monad computation as a function, discarding\n the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "RWSC r w s m a-\u003e r-\u003e TVar s-\u003e TVar w-\u003e m (a, w)",
        "fct-type": "function",
        "title": "evalRWSC"
      },
      "index": {
        "description": "Unwrap concurrent RWS monad computation as function discarding the final state",
        "hierarchy": "Control Monad RWS Concurrent Strict",
        "module": "Control.Monad.RWS.Concurrent.Strict",
        "name": "evalRWSC",
        "normalized": "RWSC a b c d e-\u003ea-\u003eTVar c-\u003eTVar b-\u003ed(e,b)",
        "package": "concurrent-state",
        "partial": "RWSC",
        "signature": "RWSC r w s m a-\u003er-\u003eTVar s-\u003eTVar w-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:evalRWSCs",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple RWS operations on the same value, returning the final\n output and the return values of each operation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "[RWSC r w s m a]-\u003e r-\u003e s-\u003e m ([a], w)",
        "fct-type": "function",
        "title": "evalRWSCs"
      },
      "index": {
        "description": "Run multiple RWS operations on the same value returning the final output and the return values of each operation",
        "hierarchy": "Control Monad RWS Concurrent Strict",
        "module": "Control.Monad.RWS.Concurrent.Strict",
        "name": "evalRWSCs",
        "normalized": "[RWSC a b c d e]-\u003ea-\u003ec-\u003ed([e],b)",
        "package": "concurrent-state",
        "partial": "RWSCs",
        "signature": "[RWSC r w s m a]-\u003er-\u003es-\u003em([a],w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:execRWSC",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a concurrent RWS monad computation as a function, discarding\n the return value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "RWSC r w s m a-\u003e r-\u003e TVar s-\u003e TVar w-\u003e m (s, w)",
        "fct-type": "function",
        "title": "execRWSC"
      },
      "index": {
        "description": "Unwrap concurrent RWS monad computation as function discarding the return value",
        "hierarchy": "Control Monad RWS Concurrent Strict",
        "module": "Control.Monad.RWS.Concurrent.Strict",
        "name": "execRWSC",
        "normalized": "RWSC a b c d e-\u003ea-\u003eTVar c-\u003eTVar b-\u003ed(c,b)",
        "package": "concurrent-state",
        "partial": "RWSC",
        "signature": "RWSC r w s m a-\u003er-\u003eTVar s-\u003eTVar w-\u003em(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:execRWSCs",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple RWS operations on the same value, returning the final\n state and the return values of each operation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "[RWSC r w s m a]-\u003e r-\u003e s-\u003e m (s, w)",
        "fct-type": "function",
        "title": "execRWSCs"
      },
      "index": {
        "description": "Run multiple RWS operations on the same value returning the final state and the return values of each operation",
        "hierarchy": "Control Monad RWS Concurrent Strict",
        "module": "Control.Monad.RWS.Concurrent.Strict",
        "name": "execRWSCs",
        "normalized": "[RWSC a b c d e]-\u003ea-\u003ec-\u003ed(c,b)",
        "package": "concurrent-state",
        "partial": "RWSCs",
        "signature": "[RWSC r w s m a]-\u003er-\u003es-\u003em(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "((((a, TVar s, TVar w) -\u003e m (b, TVar s, TVar w)) -\u003e m (a, TVar s, TVar w)) -\u003e m (a, TVar s, TVar w)) -\u003e ((a -\u003e RWSC r w s m b) -\u003e RWSC r w s m a) -\u003e RWSC r w s m a",
        "fct-source": "src/Control-Monad-RWS-Concurrent-Strict.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Uniform lifting of callCC operation to the new monad",
        "hierarchy": "Control Monad RWS Concurrent Strict",
        "module": "Control.Monad.RWS.Concurrent.Strict",
        "name": "liftCallCC",
        "normalized": "((((a,TVar b,TVar c)-\u003ed(e,TVar b,TVar c))-\u003ed(a,TVar b,TVar c))-\u003ed(a,TVar b,TVar c))-\u003e((a-\u003eRWSC f c b d e)-\u003eRWSC f c b d a)-\u003eRWSC f c b d a",
        "package": "concurrent-state",
        "partial": "Call CC",
        "signature": "((((a,TVar s,TVar w)-\u003em(b,TVar s,TVar w))-\u003em(a,TVar s,TVar w))-\u003em(a,TVar s,TVar w))-\u003e((a-\u003eRWSC r w s m b)-\u003eRWSC r w s m a)-\u003eRWSC r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "(m (a, TVar s, TVar w) -\u003e (e -\u003e m (a, TVar s, TVar w)) -\u003e m (a, TVar s, TVar w)) -\u003e RWSC l w s m a -\u003e (e -\u003e RWSC l w s m a) -\u003e RWSC l w s m a",
        "fct-source": "src/Control-Monad-RWS-Concurrent-Strict.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad RWS Concurrent Strict",
        "module": "Control.Monad.RWS.Concurrent.Strict",
        "name": "liftCatch",
        "normalized": "(a(b,TVar c,TVar d)-\u003e(e-\u003ea(b,TVar c,TVar d))-\u003ea(b,TVar c,TVar d))-\u003eRWSC f d c a b-\u003e(e-\u003eRWSC f d c a b)-\u003eRWSC f d c a b",
        "package": "concurrent-state",
        "partial": "Catch",
        "signature": "(m(a,TVar s,TVar w)-\u003e(e-\u003em(a,TVar s,TVar w))-\u003em(a,TVar s,TVar w))-\u003eRWSC l w s m a-\u003e(e-\u003eRWSC l w s m a)-\u003eRWSC l w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:mapRWSC",
      "description": {
        "fct-descr": "\u003cp\u003eMap the inner computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWSC\u003c/a\u003e\u003c/code\u003e f m) r w s = f (\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e m r w s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "(m (a, TVar s, TVar w) -\u003e n (b, TVar s, TVar w)) -\u003e RWSC r w s m a -\u003e RWSC r w s n b",
        "fct-source": "src/Control-Monad-RWS-Concurrent-Strict.html#mapRWSC",
        "fct-type": "function",
        "title": "mapRWSC"
      },
      "index": {
        "description": "Map the inner computation using the given function runRWSC mapRWSC runRWSC",
        "hierarchy": "Control Monad RWS Concurrent Strict",
        "module": "Control.Monad.RWS.Concurrent.Strict",
        "name": "mapRWSC",
        "normalized": "(a(b,TVar c,TVar d)-\u003ee(f,TVar c,TVar d))-\u003eRWSC g d c a b-\u003eRWSC g d c e f",
        "package": "concurrent-state",
        "partial": "RWSC",
        "signature": "(m(a,TVar s,TVar w)-\u003en(b,TVar s,TVar w))-\u003eRWSC r w s m a-\u003eRWSC r w s n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:runRWSC",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a concurrent RWS monad computation as a function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "RWSC r w s m a-\u003e r-\u003e TVar s-\u003e TVar w-\u003e m (a, s, w)",
        "fct-type": "function",
        "title": "runRWSC"
      },
      "index": {
        "description": "Unwrap concurrent RWS monad computation as function",
        "hierarchy": "Control Monad RWS Concurrent Strict",
        "module": "Control.Monad.RWS.Concurrent.Strict",
        "name": "runRWSC",
        "normalized": "RWSC a b c d e-\u003ea-\u003eTVar c-\u003eTVar b-\u003ed(e,c,b)",
        "package": "concurrent-state",
        "partial": "RWSC",
        "signature": "RWSC r w s m a-\u003er-\u003eTVar s-\u003eTVar w-\u003em(a,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:runRWSCs",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple RWS operations on the same value, returning the resultant\n state, output, and the value produced by each operation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "[RWSC r w s m a]-\u003e r-\u003e s-\u003e m ([a], s, w)",
        "fct-type": "function",
        "title": "runRWSCs"
      },
      "index": {
        "description": "Run multiple RWS operations on the same value returning the resultant state output and the value produced by each operation",
        "hierarchy": "Control Monad RWS Concurrent Strict",
        "module": "Control.Monad.RWS.Concurrent.Strict",
        "name": "runRWSCs",
        "normalized": "[RWSC a b c d e]-\u003ea-\u003ec-\u003ed([e],c,b)",
        "package": "concurrent-state",
        "partial": "RWSCs",
        "signature": "[RWSC r w s m a]-\u003er-\u003es-\u003em([a],s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent-Strict.html#v:withRWSC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWSC\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment and\n state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWSC\u003c/a\u003e\u003c/code\u003e f m) r s w = uncurry3 (\u003ccode\u003e\u003ca\u003erunRWSC\u003c/a\u003e\u003c/code\u003e m) (f r s w)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "(r' -\u003e TVar s -\u003e TVar w -\u003e (r, TVar s, TVar w)) -\u003e RWSC r w s m a -\u003e RWSC r' w s m a",
        "fct-source": "src/Control-Monad-RWS-Concurrent-Strict.html#withRWSC",
        "fct-type": "function",
        "title": "withRWSC"
      },
      "index": {
        "description": "withRWSC executes action with an initial environment and state modified by applying runRWSC withRWSC uncurry3 runRWSC",
        "hierarchy": "Control Monad RWS Concurrent Strict",
        "module": "Control.Monad.RWS.Concurrent.Strict",
        "name": "withRWSC",
        "normalized": "(a-\u003eTVar b-\u003eTVar c-\u003e(d,TVar b,TVar c))-\u003eRWSC d c b e f-\u003eRWSC a c b e f",
        "package": "concurrent-state",
        "partial": "RWSC",
        "signature": "(r'-\u003eTVar s-\u003eTVar w-\u003e(r,TVar s,TVar w))-\u003eRWSC r w s m a-\u003eRWSC r' w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-RWS-Concurrent.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent RWS monad, combining a Reader, a Writer, and a State monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.RWS.Concurrent",
        "fct-package": "concurrent-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-RWS-Concurrent.html",
        "fct-type": "module",
        "title": "Concurrent"
      },
      "index": {
        "description": "Concurrent RWS monad combining Reader Writer and State monad",
        "hierarchy": "Control Monad RWS Concurrent",
        "module": "Control.Monad.RWS.Concurrent",
        "name": "Concurrent",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Concurrent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent state monad, providing a State-like interface but allowing\n for multiple threads to operate on the same value simultaneously.\n\u003c/p\u003e\u003cp\u003eThis module performs state computations lazily. For a strict version,\n see \u003ca\u003eControl.Monad.State.Concurrent.Strict\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-State-Concurrent-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Concurrent state monad providing State-like interface but allowing for multiple threads to operate on the same value simultaneously This module performs state computations lazily For strict version see Control.Monad.State.Concurrent.Strict",
        "hierarchy": "Control Monad State Concurrent Lazy",
        "module": "Control.Monad.State.Concurrent.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#t:StateC",
      "description": {
        "fct-descr": "\u003cp\u003eA concurrent state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e - The state. This is contained in a \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e performs\n actions atomically on the held \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003etransformers\u003c/code\u003e' \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e, with the exception of\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e constraint on every instance, which is necessary to\n perform STM actions.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-State-Concurrent-Lazy.html#StateC",
        "fct-type": "data",
        "title": "StateC"
      },
      "index": {
        "description": "concurrent state transformer monad parameterized by The state This is contained in TVar The inner monad The return function leaves the state unchanged while performs actions atomically on the held TVar This is very similar to transformers StateT with the exception of the MonadIO constraint on every instance which is necessary to perform STM actions",
        "hierarchy": "Control Monad State Concurrent Lazy",
        "module": "Control.Monad.State.Concurrent.Lazy",
        "name": "StateC",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:evalStateC",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a concurrent state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStateC\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateC\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "StateC s m a-\u003e TVar s-\u003e m a",
        "fct-type": "function",
        "title": "evalStateC"
      },
      "index": {
        "description": "Evaluate concurrent state computation with the given initial state and return the final value discarding the final state evalStateC liftM fst runStateC",
        "hierarchy": "Control Monad State Concurrent Lazy",
        "module": "Control.Monad.State.Concurrent.Lazy",
        "name": "evalStateC",
        "normalized": "StateC a b c-\u003eTVar a-\u003eb c",
        "package": "concurrent-state",
        "partial": "State",
        "signature": "StateC s m a-\u003eTVar s-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:evalStatesC",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple state operations on the same value, returning all values\n produced by each operation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStatesC\u003c/a\u003e\u003c/code\u003e ms s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStatesC\u003c/a\u003e\u003c/code\u003e ms s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "[StateC s m a]-\u003e s-\u003e m [a]",
        "fct-type": "function",
        "title": "evalStatesC"
      },
      "index": {
        "description": "Run multiple state operations on the same value returning all values produced by each operation evalStatesC ms liftM fst runStatesC ms",
        "hierarchy": "Control Monad State Concurrent Lazy",
        "module": "Control.Monad.State.Concurrent.Lazy",
        "name": "evalStatesC",
        "normalized": "[StateC a b c]-\u003ea-\u003eb[c]",
        "package": "concurrent-state",
        "partial": "States",
        "signature": "[StateC s m a]-\u003es-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:execStateC",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a concurrent state computation with the given initial state and return\n the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStateC\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateC\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "StateC s m a-\u003e TVar s-\u003e m s",
        "fct-type": "function",
        "title": "execStateC"
      },
      "index": {
        "description": "Execute concurrent state computation with the given initial state and return the final state discarding the final value execStateC liftM snd runStateC",
        "hierarchy": "Control Monad State Concurrent Lazy",
        "module": "Control.Monad.State.Concurrent.Lazy",
        "name": "execStateC",
        "normalized": "StateC a b c-\u003eTVar a-\u003eb a",
        "package": "concurrent-state",
        "partial": "State",
        "signature": "StateC s m a-\u003eTVar s-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:execStatesC",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple state operations on the same value, returning the\n resultant state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStatesC\u003c/a\u003e\u003c/code\u003e ms s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStatesC\u003c/a\u003e\u003c/code\u003e ms s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "[StateC s m a]-\u003e s-\u003e m s",
        "fct-type": "function",
        "title": "execStatesC"
      },
      "index": {
        "description": "Run multiple state operations on the same value returning the resultant state execStatesC ms liftM snd runStatesC ms",
        "hierarchy": "Control Monad State Concurrent Lazy",
        "module": "Control.Monad.State.Concurrent.Lazy",
        "name": "execStatesC",
        "normalized": "[StateC a b c]-\u003ea-\u003eb a",
        "package": "concurrent-state",
        "partial": "States",
        "signature": "[StateC s m a]-\u003es-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "((((a, TVar s) -\u003e m (b, TVar s)) -\u003e m (a, TVar s)) -\u003e m (a, TVar s)) -\u003e ((a -\u003e StateC s m b) -\u003e StateC s m a) -\u003e StateC s m a",
        "fct-source": "src/Control-Monad-State-Concurrent-Lazy.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Uniform lifting of callCC operation to the new monad",
        "hierarchy": "Control Monad State Concurrent Lazy",
        "module": "Control.Monad.State.Concurrent.Lazy",
        "name": "liftCallCC",
        "normalized": "((((a,TVar b)-\u003ec(d,TVar b))-\u003ec(a,TVar b))-\u003ec(a,TVar b))-\u003e((a-\u003eStateC b c d)-\u003eStateC b c a)-\u003eStateC b c a",
        "package": "concurrent-state",
        "partial": "Call CC",
        "signature": "((((a,TVar s)-\u003em(b,TVar s))-\u003em(a,TVar s))-\u003em(a,TVar s))-\u003e((a-\u003eStateC s m b)-\u003eStateC s m a)-\u003eStateC s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "(m (a, TVar s) -\u003e (e -\u003e m (a, TVar s)) -\u003e m (a, TVar s)) -\u003e StateC s m a -\u003e (e -\u003e StateC s m a) -\u003e StateC s m a",
        "fct-source": "src/Control-Monad-State-Concurrent-Lazy.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad State Concurrent Lazy",
        "module": "Control.Monad.State.Concurrent.Lazy",
        "name": "liftCatch",
        "normalized": "(a(b,TVar c)-\u003e(d-\u003ea(b,TVar c))-\u003ea(b,TVar c))-\u003eStateC c a b-\u003e(d-\u003eStateC c a b)-\u003eStateC c a b",
        "package": "concurrent-state",
        "partial": "Catch",
        "signature": "(m(a,TVar s)-\u003e(e-\u003em(a,TVar s))-\u003em(a,TVar s))-\u003eStateC s m a-\u003e(e-\u003eStateC s m a)-\u003eStateC s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:liftListen",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003elisten\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "(m (a, TVar s) -\u003e m ((a, TVar s), w)) -\u003e StateC s m a -\u003e StateC s m (a, w)",
        "fct-source": "src/Control-Monad-State-Concurrent-Lazy.html#liftListen",
        "fct-type": "function",
        "title": "liftListen"
      },
      "index": {
        "description": "Lift listen operation to the new monad",
        "hierarchy": "Control Monad State Concurrent Lazy",
        "module": "Control.Monad.State.Concurrent.Lazy",
        "name": "liftListen",
        "normalized": "(a(b,TVar c)-\u003ea((b,TVar c),d))-\u003eStateC c a b-\u003eStateC c a(b,d)",
        "package": "concurrent-state",
        "partial": "Listen",
        "signature": "(m(a,TVar s)-\u003em((a,TVar s),w))-\u003eStateC s m a-\u003eStateC s m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:liftPass",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003epass\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "(m ((a, TVar s), b) -\u003e m (a, TVar s)) -\u003e StateC s m (a, b) -\u003e StateC s m a",
        "fct-source": "src/Control-Monad-State-Concurrent-Lazy.html#liftPass",
        "fct-type": "function",
        "title": "liftPass"
      },
      "index": {
        "description": "Lift pass operation to the new monad",
        "hierarchy": "Control Monad State Concurrent Lazy",
        "module": "Control.Monad.State.Concurrent.Lazy",
        "name": "liftPass",
        "normalized": "(a((b,TVar c),d)-\u003ea(b,TVar c))-\u003eStateC c a(b,d)-\u003eStateC c a b",
        "package": "concurrent-state",
        "partial": "Pass",
        "signature": "(m((a,TVar s),b)-\u003em(a,TVar s))-\u003eStateC s m(a,b)-\u003eStateC s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:runStateC",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a concurrent state monad computation as a function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "StateC s m a-\u003e TVar s-\u003e m (a, s)",
        "fct-type": "function",
        "title": "runStateC"
      },
      "index": {
        "description": "Unwrap concurrent state monad computation as function",
        "hierarchy": "Control Monad State Concurrent Lazy",
        "module": "Control.Monad.State.Concurrent.Lazy",
        "name": "runStateC",
        "normalized": "StateC a b c-\u003eTVar a-\u003eb(c,a)",
        "package": "concurrent-state",
        "partial": "State",
        "signature": "StateC s m a-\u003eTVar s-\u003em(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Lazy.html#v:runStatesC",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple state operations on the same value, returning the\n resultant state and the value produced by each operation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "[StateC s m a]-\u003e s-\u003e m ([a], s)",
        "fct-type": "function",
        "title": "runStatesC"
      },
      "index": {
        "description": "Run multiple state operations on the same value returning the resultant state and the value produced by each operation",
        "hierarchy": "Control Monad State Concurrent Lazy",
        "module": "Control.Monad.State.Concurrent.Lazy",
        "name": "runStatesC",
        "normalized": "[StateC a b c]-\u003ea-\u003eb([c],a)",
        "package": "concurrent-state",
        "partial": "States",
        "signature": "[StateC s m a]-\u003es-\u003em([a],s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent state monad, providing a State-like interface but allowing\n for multiple threads to operate on the same value simultaneously.\n\u003c/p\u003e\u003cp\u003eThis module performs state computations strictly. For a lazy version,\n see \u003ca\u003eControl.Monad.State.Concurrent.Lazy\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-State-Concurrent-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Concurrent state monad providing State-like interface but allowing for multiple threads to operate on the same value simultaneously This module performs state computations strictly For lazy version see Control.Monad.State.Concurrent.Lazy",
        "hierarchy": "Control Monad State Concurrent Strict",
        "module": "Control.Monad.State.Concurrent.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#t:StateC",
      "description": {
        "fct-descr": "\u003cp\u003eA concurrent state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e - The state. This is contained in a \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e performs\n actions atomically on the held \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003etransformers\u003c/code\u003e' \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e, with the exception of\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e constraint on every instance, which is necessary to\n perform STM actions.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-State-Concurrent-Strict.html#StateC",
        "fct-type": "data",
        "title": "StateC"
      },
      "index": {
        "description": "concurrent state transformer monad parameterized by The state This is contained in TVar The inner monad The return function leaves the state unchanged while performs actions atomically on the held TVar This is very similar to transformers StateT with the exception of the MonadIO constraint on every instance which is necessary to perform STM actions",
        "hierarchy": "Control Monad State Concurrent Strict",
        "module": "Control.Monad.State.Concurrent.Strict",
        "name": "StateC",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:evalStateC",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a concurrent state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStateC\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateC\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "StateC s m a-\u003e TVar s-\u003e m a",
        "fct-type": "function",
        "title": "evalStateC"
      },
      "index": {
        "description": "Evaluate concurrent state computation with the given initial state and return the final value discarding the final state evalStateC liftM fst runStateC",
        "hierarchy": "Control Monad State Concurrent Strict",
        "module": "Control.Monad.State.Concurrent.Strict",
        "name": "evalStateC",
        "normalized": "StateC a b c-\u003eTVar a-\u003eb c",
        "package": "concurrent-state",
        "partial": "State",
        "signature": "StateC s m a-\u003eTVar s-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:evalStatesC",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple state operations on the same value, returning all values\n produced by each operation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStatesC\u003c/a\u003e\u003c/code\u003e ms s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStatesC\u003c/a\u003e\u003c/code\u003e ms s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "[StateC s m a]-\u003e s-\u003e m [a]",
        "fct-type": "function",
        "title": "evalStatesC"
      },
      "index": {
        "description": "Run multiple state operations on the same value returning all values produced by each operation evalStatesC ms liftM fst runStatesC ms",
        "hierarchy": "Control Monad State Concurrent Strict",
        "module": "Control.Monad.State.Concurrent.Strict",
        "name": "evalStatesC",
        "normalized": "[StateC a b c]-\u003ea-\u003eb[c]",
        "package": "concurrent-state",
        "partial": "States",
        "signature": "[StateC s m a]-\u003es-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:execStateC",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a concurrent state computation with the given initial state and return\n the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStateC\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateC\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "StateC s m a-\u003e TVar s-\u003e m s",
        "fct-type": "function",
        "title": "execStateC"
      },
      "index": {
        "description": "Execute concurrent state computation with the given initial state and return the final state discarding the final value execStateC liftM snd runStateC",
        "hierarchy": "Control Monad State Concurrent Strict",
        "module": "Control.Monad.State.Concurrent.Strict",
        "name": "execStateC",
        "normalized": "StateC a b c-\u003eTVar a-\u003eb a",
        "package": "concurrent-state",
        "partial": "State",
        "signature": "StateC s m a-\u003eTVar s-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:execStatesC",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple state operations on the same value, returning the\n resultant state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStatesC\u003c/a\u003e\u003c/code\u003e ms s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStatesC\u003c/a\u003e\u003c/code\u003e ms s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "[StateC s m a]-\u003e s-\u003e m s",
        "fct-type": "function",
        "title": "execStatesC"
      },
      "index": {
        "description": "Run multiple state operations on the same value returning the resultant state execStatesC ms liftM snd runStatesC ms",
        "hierarchy": "Control Monad State Concurrent Strict",
        "module": "Control.Monad.State.Concurrent.Strict",
        "name": "execStatesC",
        "normalized": "[StateC a b c]-\u003ea-\u003eb a",
        "package": "concurrent-state",
        "partial": "States",
        "signature": "[StateC s m a]-\u003es-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "((((a, TVar s) -\u003e m (b, TVar s)) -\u003e m (a, TVar s)) -\u003e m (a, TVar s)) -\u003e ((a -\u003e StateC s m b) -\u003e StateC s m a) -\u003e StateC s m a",
        "fct-source": "src/Control-Monad-State-Concurrent-Strict.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Uniform lifting of callCC operation to the new monad",
        "hierarchy": "Control Monad State Concurrent Strict",
        "module": "Control.Monad.State.Concurrent.Strict",
        "name": "liftCallCC",
        "normalized": "((((a,TVar b)-\u003ec(d,TVar b))-\u003ec(a,TVar b))-\u003ec(a,TVar b))-\u003e((a-\u003eStateC b c d)-\u003eStateC b c a)-\u003eStateC b c a",
        "package": "concurrent-state",
        "partial": "Call CC",
        "signature": "((((a,TVar s)-\u003em(b,TVar s))-\u003em(a,TVar s))-\u003em(a,TVar s))-\u003e((a-\u003eStateC s m b)-\u003eStateC s m a)-\u003eStateC s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "(m (a, TVar s) -\u003e (e -\u003e m (a, TVar s)) -\u003e m (a, TVar s)) -\u003e StateC s m a -\u003e (e -\u003e StateC s m a) -\u003e StateC s m a",
        "fct-source": "src/Control-Monad-State-Concurrent-Strict.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad State Concurrent Strict",
        "module": "Control.Monad.State.Concurrent.Strict",
        "name": "liftCatch",
        "normalized": "(a(b,TVar c)-\u003e(d-\u003ea(b,TVar c))-\u003ea(b,TVar c))-\u003eStateC c a b-\u003e(d-\u003eStateC c a b)-\u003eStateC c a b",
        "package": "concurrent-state",
        "partial": "Catch",
        "signature": "(m(a,TVar s)-\u003e(e-\u003em(a,TVar s))-\u003em(a,TVar s))-\u003eStateC s m a-\u003e(e-\u003eStateC s m a)-\u003eStateC s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:liftListen",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003elisten\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "(m (a, TVar s) -\u003e m ((a, TVar s), w)) -\u003e StateC s m a -\u003e StateC s m (a, w)",
        "fct-source": "src/Control-Monad-State-Concurrent-Strict.html#liftListen",
        "fct-type": "function",
        "title": "liftListen"
      },
      "index": {
        "description": "Lift listen operation to the new monad",
        "hierarchy": "Control Monad State Concurrent Strict",
        "module": "Control.Monad.State.Concurrent.Strict",
        "name": "liftListen",
        "normalized": "(a(b,TVar c)-\u003ea((b,TVar c),d))-\u003eStateC c a b-\u003eStateC c a(b,d)",
        "package": "concurrent-state",
        "partial": "Listen",
        "signature": "(m(a,TVar s)-\u003em((a,TVar s),w))-\u003eStateC s m a-\u003eStateC s m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:liftPass",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003epass\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "(m ((a, TVar s), b) -\u003e m (a, TVar s)) -\u003e StateC s m (a, b) -\u003e StateC s m a",
        "fct-source": "src/Control-Monad-State-Concurrent-Strict.html#liftPass",
        "fct-type": "function",
        "title": "liftPass"
      },
      "index": {
        "description": "Lift pass operation to the new monad",
        "hierarchy": "Control Monad State Concurrent Strict",
        "module": "Control.Monad.State.Concurrent.Strict",
        "name": "liftPass",
        "normalized": "(a((b,TVar c),d)-\u003ea(b,TVar c))-\u003eStateC c a(b,d)-\u003eStateC c a b",
        "package": "concurrent-state",
        "partial": "Pass",
        "signature": "(m((a,TVar s),b)-\u003em(a,TVar s))-\u003eStateC s m(a,b)-\u003eStateC s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:runStateC",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a concurrent state monad computation as a function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "StateC s m a-\u003e TVar s-\u003e m (a, s)",
        "fct-type": "function",
        "title": "runStateC"
      },
      "index": {
        "description": "Unwrap concurrent state monad computation as function",
        "hierarchy": "Control Monad State Concurrent Strict",
        "module": "Control.Monad.State.Concurrent.Strict",
        "name": "runStateC",
        "normalized": "StateC a b c-\u003eTVar a-\u003eb(c,a)",
        "package": "concurrent-state",
        "partial": "State",
        "signature": "StateC s m a-\u003eTVar s-\u003em(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent-Strict.html#v:runStatesC",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple state operations on the same value, returning the\n resultant state and the value produced by each operation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.State.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "[StateC s m a]-\u003e s-\u003e m ([a], s)",
        "fct-type": "function",
        "title": "runStatesC"
      },
      "index": {
        "description": "Run multiple state operations on the same value returning the resultant state and the value produced by each operation",
        "hierarchy": "Control Monad State Concurrent Strict",
        "module": "Control.Monad.State.Concurrent.Strict",
        "name": "runStatesC",
        "normalized": "[StateC a b c]-\u003ea-\u003eb([c],a)",
        "package": "concurrent-state",
        "partial": "States",
        "signature": "[StateC s m a]-\u003es-\u003em([a],s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-State-Concurrent.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent state monad, providing a State-like interface but allowing\n for multiple threads to operate on the same value simultaneously.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.State.Concurrent",
        "fct-package": "concurrent-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-State-Concurrent.html",
        "fct-type": "module",
        "title": "Concurrent"
      },
      "index": {
        "description": "Concurrent state monad providing State-like interface but allowing for multiple threads to operate on the same value simultaneously",
        "hierarchy": "Control Monad State Concurrent",
        "module": "Control.Monad.State.Concurrent",
        "name": "Concurrent",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Concurrent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad whose actions produce an output.\n\u003c/p\u003e\u003cp\u003eThis module builds output lazily. For a strict version, see\n \u003ca\u003eControl.Monad.Writer.Concurrent.Strict\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Writer-Concurrent-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "monad whose actions produce an output This module builds output lazily For strict version see Control.Monad.Writer.Concurrent.Strict",
        "hierarchy": "Control Monad Writer Concurrent Lazy",
        "module": "Control.Monad.Writer.Concurrent.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#t:WriterC",
      "description": {
        "fct-descr": "\u003cp\u003eA concurrent monad transformer collecting output of type \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003etransformers\u003c/code\u003e' \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e, with the exception of\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e constraint on every instance, which is necessary to\n perform STM actions.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Writer-Concurrent-Lazy.html#WriterC",
        "fct-type": "data",
        "title": "WriterC"
      },
      "index": {
        "description": "concurrent monad transformer collecting output of type This is very similar to transformers WriterT with the exception of the MonadIO constraint on every instance which is necessary to perform STM actions",
        "hierarchy": "Control Monad Writer Concurrent Lazy",
        "module": "Control.Monad.Writer.Concurrent.Lazy",
        "name": "WriterC",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:execWriterC",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a concurrent Writer monad computation as a function, discarding\n the return value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriterC\u003c/a\u003e\u003c/code\u003e m w = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriterC\u003c/a\u003e\u003c/code\u003e m w)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "WriterC w m a-\u003e TVar w-\u003e m w",
        "fct-type": "function",
        "title": "execWriterC"
      },
      "index": {
        "description": "Unwrap concurrent Writer monad computation as function discarding the return value execWriterC liftM snd runWriterC",
        "hierarchy": "Control Monad Writer Concurrent Lazy",
        "module": "Control.Monad.Writer.Concurrent.Lazy",
        "name": "execWriterC",
        "normalized": "WriterC a b c-\u003eTVar a-\u003eb a",
        "package": "concurrent-state",
        "partial": "Writer",
        "signature": "WriterC w m a-\u003eTVar w-\u003em w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:execWritersC",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple Writer operations on the same value, returning the\n resultant output.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "[WriterC w m a]-\u003e m w",
        "fct-type": "function",
        "title": "execWritersC"
      },
      "index": {
        "description": "Run multiple Writer operations on the same value returning the resultant output",
        "hierarchy": "Control Monad Writer Concurrent Lazy",
        "module": "Control.Monad.Writer.Concurrent.Lazy",
        "name": "execWritersC",
        "normalized": "[WriterC a b c]-\u003eb a",
        "package": "concurrent-state",
        "partial": "Writers",
        "signature": "[WriterC w m a]-\u003em w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "((((a, TVar w) -\u003e m (b, TVar w)) -\u003e m (a, TVar w)) -\u003e m (a, TVar w)) -\u003e ((a -\u003e WriterC w m b) -\u003e WriterC w m a) -\u003e WriterC w m a",
        "fct-source": "src/Control-Monad-Writer-Concurrent-Lazy.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Lift callCC operation to the new monad",
        "hierarchy": "Control Monad Writer Concurrent Lazy",
        "module": "Control.Monad.Writer.Concurrent.Lazy",
        "name": "liftCallCC",
        "normalized": "((((a,TVar b)-\u003ec(d,TVar b))-\u003ec(a,TVar b))-\u003ec(a,TVar b))-\u003e((a-\u003eWriterC b c d)-\u003eWriterC b c a)-\u003eWriterC b c a",
        "package": "concurrent-state",
        "partial": "Call CC",
        "signature": "((((a,TVar w)-\u003em(b,TVar w))-\u003em(a,TVar w))-\u003em(a,TVar w))-\u003e((a-\u003eWriterC w m b)-\u003eWriterC w m a)-\u003eWriterC w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "(m (a, TVar w) -\u003e (e -\u003e m (a, TVar w)) -\u003e m (a, TVar w)) -\u003e WriterC w m a -\u003e (e -\u003e WriterC w m a) -\u003e WriterC w m a",
        "fct-source": "src/Control-Monad-Writer-Concurrent-Lazy.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Writer Concurrent Lazy",
        "module": "Control.Monad.Writer.Concurrent.Lazy",
        "name": "liftCatch",
        "normalized": "(a(b,TVar c)-\u003e(d-\u003ea(b,TVar c))-\u003ea(b,TVar c))-\u003eWriterC c a b-\u003e(d-\u003eWriterC c a b)-\u003eWriterC c a b",
        "package": "concurrent-state",
        "partial": "Catch",
        "signature": "(m(a,TVar w)-\u003e(e-\u003em(a,TVar w))-\u003em(a,TVar w))-\u003eWriterC w m a-\u003e(e-\u003eWriterC w m a)-\u003eWriterC w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:mapWriterC",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and output of a computation using the given\n function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "(m (a, TVar w) -\u003e n (b, TVar w)) -\u003e WriterC w m a -\u003e WriterC w n b",
        "fct-source": "src/Control-Monad-Writer-Concurrent-Lazy.html#mapWriterC",
        "fct-type": "function",
        "title": "mapWriterC"
      },
      "index": {
        "description": "Map both the return value and output of computation using the given function",
        "hierarchy": "Control Monad Writer Concurrent Lazy",
        "module": "Control.Monad.Writer.Concurrent.Lazy",
        "name": "mapWriterC",
        "normalized": "(a(b,TVar c)-\u003ed(e,TVar c))-\u003eWriterC c a b-\u003eWriterC c d e",
        "package": "concurrent-state",
        "partial": "Writer",
        "signature": "(m(a,TVar w)-\u003en(b,TVar w))-\u003eWriterC w m a-\u003eWriterC w n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:runWriterC",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a concurrent Writer monad computation as a function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "WriterC w m a-\u003e TVar w-\u003e m (a, w)",
        "fct-type": "function",
        "title": "runWriterC"
      },
      "index": {
        "description": "Unwrap concurrent Writer monad computation as function",
        "hierarchy": "Control Monad Writer Concurrent Lazy",
        "module": "Control.Monad.Writer.Concurrent.Lazy",
        "name": "runWriterC",
        "normalized": "WriterC a b c-\u003eTVar a-\u003eb(c,a)",
        "package": "concurrent-state",
        "partial": "Writer",
        "signature": "WriterC w m a-\u003eTVar w-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Lazy.html#v:runWritersC",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple Writer operations on the same value, returning the\n resultant output and the value produced by each operation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Lazy",
        "fct-package": "concurrent-state",
        "fct-signature": "[WriterC w m a]-\u003e m ([a], w)",
        "fct-type": "function",
        "title": "runWritersC"
      },
      "index": {
        "description": "Run multiple Writer operations on the same value returning the resultant output and the value produced by each operation",
        "hierarchy": "Control Monad Writer Concurrent Lazy",
        "module": "Control.Monad.Writer.Concurrent.Lazy",
        "name": "runWritersC",
        "normalized": "[WriterC a b c]-\u003eb([c],a)",
        "package": "concurrent-state",
        "partial": "Writers",
        "signature": "[WriterC w m a]-\u003em([a],w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad whose actions produce an output.\n\u003c/p\u003e\u003cp\u003eThis module builds output strictly. For a lazy version, see\n \u003ca\u003eControl.Monad.Writer.Concurrent.Lazy\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Writer-Concurrent-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "monad whose actions produce an output This module builds output strictly For lazy version see Control.Monad.Writer.Concurrent.Lazy",
        "hierarchy": "Control Monad Writer Concurrent Strict",
        "module": "Control.Monad.Writer.Concurrent.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#t:WriterC",
      "description": {
        "fct-descr": "\u003cp\u003eA concurrent monad transformer collecting output of type \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is very similar to \u003ccode\u003etransformers\u003c/code\u003e' \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e, with the exception of\n the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e constraint on every instance, which is necessary to\n perform STM actions.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Writer-Concurrent-Strict.html#WriterC",
        "fct-type": "data",
        "title": "WriterC"
      },
      "index": {
        "description": "concurrent monad transformer collecting output of type This is very similar to transformers WriterT with the exception of the MonadIO constraint on every instance which is necessary to perform STM actions",
        "hierarchy": "Control Monad Writer Concurrent Strict",
        "module": "Control.Monad.Writer.Concurrent.Strict",
        "name": "WriterC",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:execWriterC",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a concurrent Writer monad computation as a function, discarding\n the return value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriterC\u003c/a\u003e\u003c/code\u003e m w = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriterC\u003c/a\u003e\u003c/code\u003e m w)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "WriterC w m a-\u003e TVar w-\u003e m w",
        "fct-type": "function",
        "title": "execWriterC"
      },
      "index": {
        "description": "Unwrap concurrent Writer monad computation as function discarding the return value execWriterC liftM snd runWriterC",
        "hierarchy": "Control Monad Writer Concurrent Strict",
        "module": "Control.Monad.Writer.Concurrent.Strict",
        "name": "execWriterC",
        "normalized": "WriterC a b c-\u003eTVar a-\u003eb a",
        "package": "concurrent-state",
        "partial": "Writer",
        "signature": "WriterC w m a-\u003eTVar w-\u003em w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:execWritersC",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple Writer operations on the same value, returning the\n resultant output.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "[WriterC w m a]-\u003e m w",
        "fct-type": "function",
        "title": "execWritersC"
      },
      "index": {
        "description": "Run multiple Writer operations on the same value returning the resultant output",
        "hierarchy": "Control Monad Writer Concurrent Strict",
        "module": "Control.Monad.Writer.Concurrent.Strict",
        "name": "execWritersC",
        "normalized": "[WriterC a b c]-\u003eb a",
        "package": "concurrent-state",
        "partial": "Writers",
        "signature": "[WriterC w m a]-\u003em w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "((((a, TVar w) -\u003e m (b, TVar w)) -\u003e m (a, TVar w)) -\u003e m (a, TVar w)) -\u003e ((a -\u003e WriterC w m b) -\u003e WriterC w m a) -\u003e WriterC w m a",
        "fct-source": "src/Control-Monad-Writer-Concurrent-Strict.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Lift callCC operation to the new monad",
        "hierarchy": "Control Monad Writer Concurrent Strict",
        "module": "Control.Monad.Writer.Concurrent.Strict",
        "name": "liftCallCC",
        "normalized": "((((a,TVar b)-\u003ec(d,TVar b))-\u003ec(a,TVar b))-\u003ec(a,TVar b))-\u003e((a-\u003eWriterC b c d)-\u003eWriterC b c a)-\u003eWriterC b c a",
        "package": "concurrent-state",
        "partial": "Call CC",
        "signature": "((((a,TVar w)-\u003em(b,TVar w))-\u003em(a,TVar w))-\u003em(a,TVar w))-\u003e((a-\u003eWriterC w m b)-\u003eWriterC w m a)-\u003eWriterC w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "(m (a, TVar w) -\u003e (e -\u003e m (a, TVar w)) -\u003e m (a, TVar w)) -\u003e WriterC w m a -\u003e (e -\u003e WriterC w m a) -\u003e WriterC w m a",
        "fct-source": "src/Control-Monad-Writer-Concurrent-Strict.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Writer Concurrent Strict",
        "module": "Control.Monad.Writer.Concurrent.Strict",
        "name": "liftCatch",
        "normalized": "(a(b,TVar c)-\u003e(d-\u003ea(b,TVar c))-\u003ea(b,TVar c))-\u003eWriterC c a b-\u003e(d-\u003eWriterC c a b)-\u003eWriterC c a b",
        "package": "concurrent-state",
        "partial": "Catch",
        "signature": "(m(a,TVar w)-\u003e(e-\u003em(a,TVar w))-\u003em(a,TVar w))-\u003eWriterC w m a-\u003e(e-\u003eWriterC w m a)-\u003eWriterC w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:mapWriterC",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and output of a computation using the given\n function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "(m (a, TVar w) -\u003e n (b, TVar w)) -\u003e WriterC w m a -\u003e WriterC w n b",
        "fct-source": "src/Control-Monad-Writer-Concurrent-Strict.html#mapWriterC",
        "fct-type": "function",
        "title": "mapWriterC"
      },
      "index": {
        "description": "Map both the return value and output of computation using the given function",
        "hierarchy": "Control Monad Writer Concurrent Strict",
        "module": "Control.Monad.Writer.Concurrent.Strict",
        "name": "mapWriterC",
        "normalized": "(a(b,TVar c)-\u003ed(e,TVar c))-\u003eWriterC c a b-\u003eWriterC c d e",
        "package": "concurrent-state",
        "partial": "Writer",
        "signature": "(m(a,TVar w)-\u003en(b,TVar w))-\u003eWriterC w m a-\u003eWriterC w n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:runWriterC",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a concurrent Writer monad computation as a function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "WriterC w m a-\u003e TVar w-\u003e m (a, w)",
        "fct-type": "function",
        "title": "runWriterC"
      },
      "index": {
        "description": "Unwrap concurrent Writer monad computation as function",
        "hierarchy": "Control Monad Writer Concurrent Strict",
        "module": "Control.Monad.Writer.Concurrent.Strict",
        "name": "runWriterC",
        "normalized": "WriterC a b c-\u003eTVar a-\u003eb(c,a)",
        "package": "concurrent-state",
        "partial": "Writer",
        "signature": "WriterC w m a-\u003eTVar w-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent-Strict.html#v:runWritersC",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple Writer operations on the same value, returning the\n resultant output and the value produced by each operation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent.Strict",
        "fct-package": "concurrent-state",
        "fct-signature": "[WriterC w m a]-\u003e m ([a], w)",
        "fct-type": "function",
        "title": "runWritersC"
      },
      "index": {
        "description": "Run multiple Writer operations on the same value returning the resultant output and the value produced by each operation",
        "hierarchy": "Control Monad Writer Concurrent Strict",
        "module": "Control.Monad.Writer.Concurrent.Strict",
        "name": "runWritersC",
        "normalized": "[WriterC a b c]-\u003eb([c],a)",
        "package": "concurrent-state",
        "partial": "Writers",
        "signature": "[WriterC w m a]-\u003em([a],w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-state/docs/Control-Monad-Writer-Concurrent.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad whose actions produce an output.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Writer.Concurrent",
        "fct-package": "concurrent-state",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Writer-Concurrent.html",
        "fct-type": "module",
        "title": "Concurrent"
      },
      "index": {
        "description": "monad whose actions produce an output",
        "hierarchy": "Control Monad Writer Concurrent",
        "module": "Control.Monad.Writer.Concurrent",
        "name": "Concurrent",
        "normalized": "",
        "package": "concurrent-state",
        "partial": "Concurrent",
        "signature": ""
      }
    }
  }
]