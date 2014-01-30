[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOverloads the standard operations on MVars, Chans, and threads,\nas defined in Control.Concurrent. This module is name-for-name\nswappable with Control.Concurrent unless ghc-specific \noperations like \u003ccode\u003emergeIO\u003c/code\u003e or \u003ccode\u003ethreadWaitRead\u003c/code\u003e are used.\n\u003c/p\u003e\u003cp\u003eThe standard operations on \u003ccode\u003eMVar\u003c/code\u003e and \u003ccode\u003eChan\u003c/code\u003e (such as\n\u003ccode\u003e\u003ca\u003enewEmptyMVar\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003eputChan\u003c/code\u003e) are overloaded over the\n\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e class. A monad \u003ccode\u003em\u003c/code\u003e is declared an instance of\n\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e by defining a function\n\u003c/p\u003e\u003cpre\u003e liftIO :: IO a -\u003e m a\n\u003c/pre\u003e\u003cp\u003eThe explicit concurrency operations over threads are\navailable if a monad \u003ccode\u003em\u003c/code\u003e is declared an instance of the\n\u003ccode\u003e\u003ca\u003eHasFork\u003c/a\u003e\u003c/code\u003e class, by defining a function\n\u003c/p\u003e\u003cpre\u003e fork :: m () -\u003e m ThreadId\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Example use.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSuppose you define a new monad (EIO say) which is like\n\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e except that it provides an environment too.\nYou will need to declare EIO and instance of the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class. In \naddition, you can declare it in the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e class. For example:\n\u003c/p\u003e\u003cpre\u003e  newtype EIO a = EIO {useEnv :: Env -\u003e IO a}\n\t\n  instance MonadIO EIO where\n    liftIO m = EIO $ (\\_ -\u003e m)\n\u003c/pre\u003e\u003cp\u003eNow the standard operations on \u003ccode\u003eMVar\u003c/code\u003e and \u003ccode\u003eChan\u003c/code\u003e (such as\n\u003ccode\u003e\u003ca\u003enewEmptyMVar\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003eputChan\u003c/code\u003e are immediately available as\nEIO operations. To enable EIO to fork explicit threads, and to\naccess operations such as \u003ccode\u003e\u003ca\u003ekillThread\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e, use\nthe declaration\n\u003c/p\u003e\u003cpre\u003e  instance HasFork EIO where\n    fork em = EIO $ \\e -\u003e forkIO (em `useEnv` e)\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Notes.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003eMVar\u003c/code\u003e operations do not include: withMVar, modifyMVar, or \naddMVarFinalizer. Consider using TMVars for these instead. In particular,\nmodifyMVar seems to promise atomicity, but it is NOT atomic. In\ncontrast TMVars can be used just like MVars, and they\nwill behave the way you expect (module Control.Concurrent.STM.MonadIO).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-MonadIO.html",
        "fct-type": "module",
        "title": "MonadIO"
      },
      "index": {
        "description": "Overloads the standard operations on MVars Chans and threads as defined in Control.Concurrent This module is name-for-name swappable with Control.Concurrent unless ghc-specific operations like mergeIO or threadWaitRead are used The standard operations on MVar and Chan such as newEmptyMVar or putChan are overloaded over the MonadIO class monad is declared an instance of MonadIO by defining function liftIO IO The explicit concurrency operations over threads are available if monad is declared an instance of the HasFork class by defining function fork ThreadId Example use Suppose you define new monad EIO say which is like IO except that it provides an environment too You will need to declare EIO and instance of the Monad class In addition you can declare it in the MonadIO class For example newtype EIO EIO useEnv Env IO instance MonadIO EIO where liftIO EIO Now the standard operations on MVar and Chan such as newEmptyMVar or putChan are immediately available as EIO operations To enable EIO to fork explicit threads and to access operations such as killThread and threadDelay use the declaration instance HasFork EIO where fork em EIO forkIO em useEnv Notes The MVar operations do not include withMVar modifyMVar or addMVarFinalizer Consider using TMVars for these instead In particular modifyMVar seems to promise atomicity but it is NOT atomic In contrast TMVars can be used just like MVars and they will behave the way you expect module Control.Concurrent.STM.MonadIO",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "MonadIO",
        "normalized": "",
        "package": "monadIO",
        "partial": "Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#t:Chan",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Chan"
      },
      "index": {
        "description": "Chan is an abstract type representing an unbounded FIFO channel",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "Chan",
        "normalized": "",
        "package": "monadIO",
        "partial": "Chan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#t:HasFork",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-MonadIO.html#HasFork",
        "fct-type": "class",
        "title": "HasFork"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "HasFork",
        "normalized": "",
        "package": "monadIO",
        "partial": "Has Fork",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#t:MVar",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e (pronounced \"em-var\") is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a a box, which may be empty or full.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "MVar"
      },
      "index": {
        "description": "An MVar pronounced em-var is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "MVar",
        "normalized": "",
        "package": "monadIO",
        "partial": "MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#t:MonadIO",
      "description": {
        "fct-descr": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadIO"
      },
      "index": {
        "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "MonadIO",
        "normalized": "",
        "package": "monadIO",
        "partial": "Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#t:ThreadId",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e is an abstract type representing a handle to a thread.\n\u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, where\nthe \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance implements an arbitrary total ordering over\n\u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003es. The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance lets you convert an arbitrary-valued\n\u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e to string form; showing a \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e value is occasionally\nuseful when debugging or diagnosing the behaviour of a concurrent\nprogram.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: in GHC, if you have a \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e, you essentially have\na pointer to the thread itself.  This means the thread itself can't be\ngarbage collected until you drop the \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e.\nThis misfeature will hopefully be corrected at a later date.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Hugs does not provide any operations on other threads;\nit defines \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e as a synonym for ().\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ThreadId"
      },
      "index": {
        "description": "ThreadId is an abstract type representing handle to thread ThreadId is an instance of Eq Ord and Show where the Ord instance implements an arbitrary total ordering over ThreadId The Show instance lets you convert an arbitrary-valued ThreadId to string form showing ThreadId value is occasionally useful when debugging or diagnosing the behaviour of concurrent program Note in GHC if you have ThreadId you essentially have pointer to the thread itself This means the thread itself can be garbage collected until you drop the ThreadId This misfeature will hopefully be corrected at later date Note Hugs does not provide any operations on other threads it defines ThreadId as synonym for",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "ThreadId",
        "normalized": "",
        "package": "monadIO",
        "partial": "Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:dupChan",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "Chan a -\u003e io (Chan a)",
        "fct-source": "src/Control-Concurrent-MonadIO.html#dupChan",
        "fct-type": "function",
        "title": "dupChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "dupChan",
        "normalized": "Chan a-\u003eb(Chan a)",
        "package": "monadIO",
        "partial": "Chan",
        "signature": "Chan a-\u003eio(Chan a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:fork",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "io () -\u003e io ThreadId",
        "fct-source": "src/Control-Concurrent-MonadIO.html#fork",
        "fct-type": "method",
        "title": "fork"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "fork",
        "normalized": "a()-\u003ea ThreadId",
        "package": "monadIO",
        "partial": "",
        "signature": "io()-\u003eio ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:forkIO",
      "description": {
        "fct-descr": "\u003cp\u003eIncluded to maintain name-for-name compatibility\n   with Control.Concurrent\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "IO () -\u003e IO ThreadId",
        "fct-source": "src/Control-Concurrent-MonadIO.html#forkIO",
        "fct-type": "function",
        "title": "forkIO"
      },
      "index": {
        "description": "Included to maintain name-for-name compatibility with Control.Concurrent",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "forkIO",
        "normalized": "IO()-\u003eIO ThreadId",
        "package": "monadIO",
        "partial": "IO",
        "signature": "IO()-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:getChanContents",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "Chan a -\u003e io [a]",
        "fct-source": "src/Control-Concurrent-MonadIO.html#getChanContents",
        "fct-type": "function",
        "title": "getChanContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "getChanContents",
        "normalized": "Chan a-\u003eb[a]",
        "package": "monadIO",
        "partial": "Chan Contents",
        "signature": "Chan a-\u003eio[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:isEmptyChan",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "Chan a -\u003e io Bool",
        "fct-source": "src/Control-Concurrent-MonadIO.html#isEmptyChan",
        "fct-type": "function",
        "title": "isEmptyChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "isEmptyChan",
        "normalized": "Chan a-\u003eb Bool",
        "package": "monadIO",
        "partial": "Empty Chan",
        "signature": "Chan a-\u003eio Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:isEmptyMVar",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "MVar a -\u003e io Bool",
        "fct-source": "src/Control-Concurrent-MonadIO.html#isEmptyMVar",
        "fct-type": "function",
        "title": "isEmptyMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "isEmptyMVar",
        "normalized": "MVar a-\u003eb Bool",
        "package": "monadIO",
        "partial": "Empty MVar",
        "signature": "MVar a-\u003eio Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:killThread",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "ThreadId -\u003e io ()",
        "fct-source": "src/Control-Concurrent-MonadIO.html#killThread",
        "fct-type": "function",
        "title": "killThread"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "killThread",
        "normalized": "ThreadId-\u003ea()",
        "package": "monadIO",
        "partial": "Thread",
        "signature": "ThreadId-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "IO a -\u003e m a",
        "fct-type": "method",
        "title": "liftIO"
      },
      "index": {
        "description": "Lift computation from the IO monad",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "liftIO",
        "normalized": "IO a-\u003eb a",
        "package": "monadIO",
        "partial": "IO",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:myThreadId",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "io ThreadId",
        "fct-source": "src/Control-Concurrent-MonadIO.html#myThreadId",
        "fct-type": "function",
        "title": "myThreadId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "myThreadId",
        "normalized": "",
        "package": "monadIO",
        "partial": "Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:newChan",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "io (Chan a)",
        "fct-source": "src/Control-Concurrent-MonadIO.html#newChan",
        "fct-type": "function",
        "title": "newChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "newChan",
        "normalized": "",
        "package": "monadIO",
        "partial": "Chan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:newEmptyMVar",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "io (MVar a)",
        "fct-source": "src/Control-Concurrent-MonadIO.html#newEmptyMVar",
        "fct-type": "function",
        "title": "newEmptyMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "newEmptyMVar",
        "normalized": "",
        "package": "monadIO",
        "partial": "Empty MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:newMVar",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "a -\u003e io (MVar a)",
        "fct-source": "src/Control-Concurrent-MonadIO.html#newMVar",
        "fct-type": "function",
        "title": "newMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "newMVar",
        "normalized": "a-\u003eb(MVar a)",
        "package": "monadIO",
        "partial": "MVar",
        "signature": "a-\u003eio(MVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:putMVar",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "MVar a -\u003e a -\u003e io ()",
        "fct-source": "src/Control-Concurrent-MonadIO.html#putMVar",
        "fct-type": "function",
        "title": "putMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "putMVar",
        "normalized": "MVar a-\u003ea-\u003eb()",
        "package": "monadIO",
        "partial": "MVar",
        "signature": "MVar a-\u003ea-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:readChan",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "Chan a -\u003e io a",
        "fct-source": "src/Control-Concurrent-MonadIO.html#readChan",
        "fct-type": "function",
        "title": "readChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "readChan",
        "normalized": "Chan a-\u003eb a",
        "package": "monadIO",
        "partial": "Chan",
        "signature": "Chan a-\u003eio a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:readMVar",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "MVar a -\u003e io a",
        "fct-source": "src/Control-Concurrent-MonadIO.html#readMVar",
        "fct-type": "function",
        "title": "readMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "readMVar",
        "normalized": "MVar a-\u003eb a",
        "package": "monadIO",
        "partial": "MVar",
        "signature": "MVar a-\u003eio a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:swapMVar",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "MVar a -\u003e a -\u003e io a",
        "fct-source": "src/Control-Concurrent-MonadIO.html#swapMVar",
        "fct-type": "function",
        "title": "swapMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "swapMVar",
        "normalized": "MVar a-\u003ea-\u003eb a",
        "package": "monadIO",
        "partial": "MVar",
        "signature": "MVar a-\u003ea-\u003eio a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:takeMVar",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "MVar a -\u003e io a",
        "fct-source": "src/Control-Concurrent-MonadIO.html#takeMVar",
        "fct-type": "function",
        "title": "takeMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "takeMVar",
        "normalized": "MVar a-\u003eb a",
        "package": "monadIO",
        "partial": "MVar",
        "signature": "MVar a-\u003eio a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:threadDelay",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "Int -\u003e io ()",
        "fct-source": "src/Control-Concurrent-MonadIO.html#threadDelay",
        "fct-type": "function",
        "title": "threadDelay"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "threadDelay",
        "normalized": "Int-\u003ea()",
        "package": "monadIO",
        "partial": "Delay",
        "signature": "Int-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:throwTo",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "ThreadId -\u003e e -\u003e io ()",
        "fct-source": "src/Control-Concurrent-MonadIO.html#throwTo",
        "fct-type": "function",
        "title": "throwTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "throwTo",
        "normalized": "ThreadId-\u003ea-\u003eb()",
        "package": "monadIO",
        "partial": "To",
        "signature": "ThreadId-\u003ee-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:tryPutMVar",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "MVar a -\u003e a -\u003e io Bool",
        "fct-source": "src/Control-Concurrent-MonadIO.html#tryPutMVar",
        "fct-type": "function",
        "title": "tryPutMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "tryPutMVar",
        "normalized": "MVar a-\u003ea-\u003eb Bool",
        "package": "monadIO",
        "partial": "Put MVar",
        "signature": "MVar a-\u003ea-\u003eio Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:tryTakeMVar",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "MVar a -\u003e io (Maybe a)",
        "fct-source": "src/Control-Concurrent-MonadIO.html#tryTakeMVar",
        "fct-type": "function",
        "title": "tryTakeMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "tryTakeMVar",
        "normalized": "MVar a-\u003eb(Maybe a)",
        "package": "monadIO",
        "partial": "Take MVar",
        "signature": "MVar a-\u003eio(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:unGetChan",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "Chan a -\u003e a -\u003e io ()",
        "fct-source": "src/Control-Concurrent-MonadIO.html#unGetChan",
        "fct-type": "function",
        "title": "unGetChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "unGetChan",
        "normalized": "Chan a-\u003ea-\u003eb()",
        "package": "monadIO",
        "partial": "Get Chan",
        "signature": "Chan a-\u003ea-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:writeChan",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "Chan a -\u003e a -\u003e io ()",
        "fct-source": "src/Control-Concurrent-MonadIO.html#writeChan",
        "fct-type": "function",
        "title": "writeChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "writeChan",
        "normalized": "Chan a-\u003ea-\u003eb()",
        "package": "monadIO",
        "partial": "Chan",
        "signature": "Chan a-\u003ea-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:writeList2Chan",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "Chan a -\u003e [a] -\u003e io ()",
        "fct-source": "src/Control-Concurrent-MonadIO.html#writeList2Chan",
        "fct-type": "function",
        "title": "writeList2Chan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "writeList2Chan",
        "normalized": "Chan a-\u003e[a]-\u003eb()",
        "package": "monadIO",
        "partial": "List Chan",
        "signature": "Chan a-\u003e[a]-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:yield",
      "description": {
        "fct-module": "Control.Concurrent.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "io ()",
        "fct-source": "src/Control-Concurrent-MonadIO.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MonadIO",
        "module": "Control.Concurrent.MonadIO",
        "name": "yield",
        "normalized": "a()",
        "package": "monadIO",
        "partial": "",
        "signature": "io()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOverloads the standard operations on TVars, and TMVars as defined\nin Control.Concurrent.STM.\n\u003c/p\u003e\u003cp\u003eTVars and MVars are often thought of as variables to be \nused in the STM monad. But in practice, they should be used\njust as frequently (if not more so) in any IO-like monad, with STM \nbeing used purely when a new atomic transaction is being defined.\nThus we reverse the naming convention, and use\nthe plain access names when in the IO-like monad, and use an explicit STM \nsuffix when using the variables tentatively within the STM monad itself.\n\u003c/p\u003e\u003cp\u003eTMVars are particularly valuable when used in an IO-like monad,\nbecause operations like readTMVar and modifyTMvar\ncan guarantee the atomicity of the operation (unlike the corresponding\noperations over MVars).\n\u003c/p\u003e\u003cp\u003eThe standard operations on \u003ccode\u003eTVar\u003c/code\u003e and \u003ccode\u003eTMVar\u003c/code\u003e (such as\n\u003ccode\u003e\u003ca\u003ewriteTVar\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enewEmptyTMVar\u003c/a\u003e\u003c/code\u003e) are overloaded over the\n\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e class. A monad \u003ccode\u003em\u003c/code\u003e is declared an instance of\n\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e by defining a function\n\u003c/p\u003e\u003cpre\u003e liftIO :: IO a -\u003e m a\n\u003c/pre\u003e\u003cp\u003eIt also overloads the \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e function, so that STM transactions\ncan be defined from within any MonadIO monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html",
        "fct-type": "module",
        "title": "MonadIO"
      },
      "index": {
        "description": "Overloads the standard operations on TVars and TMVars as defined in Control.Concurrent.STM TVars and MVars are often thought of as variables to be used in the STM monad But in practice they should be used just as frequently if not more so in any IO-like monad with STM being used purely when new atomic transaction is being defined Thus we reverse the naming convention and use the plain access names when in the IO-like monad and use an explicit STM suffix when using the variables tentatively within the STM monad itself TMVars are particularly valuable when used in an IO-like monad because operations like readTMVar and modifyTMvar can guarantee the atomicity of the operation unlike the corresponding operations over MVars The standard operations on TVar and TMVar such as writeTVar or newEmptyTMVar are overloaded over the MonadIO class monad is declared an instance of MonadIO by defining function liftIO IO It also overloads the atomically function so that STM transactions can be defined from within any MonadIO monad",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "MonadIO",
        "normalized": "",
        "package": "monadIO",
        "partial": "Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#t:STM",
      "description": {
        "fct-descr": "\u003cp\u003eA monad supporting atomic memory transactions.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "STM"
      },
      "index": {
        "description": "monad supporting atomic memory transactions",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "STM",
        "normalized": "",
        "package": "monadIO",
        "partial": "STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#t:TMVar",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a box, which may be empty or full.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "TMVar"
      },
      "index": {
        "description": "TMVar is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "TMVar",
        "normalized": "",
        "package": "monadIO",
        "partial": "TMVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#t:TVar",
      "description": {
        "fct-descr": "\u003cp\u003eShared memory locations that support atomic memory transactions.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "TVar"
      },
      "index": {
        "description": "Shared memory locations that support atomic memory transactions",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "TVar",
        "normalized": "",
        "package": "monadIO",
        "partial": "TVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:always",
      "description": {
        "fct-descr": "\u003cp\u003ealways is a variant of alwaysSucceeds in which the invariant is\n expressed as an STM Bool action that must return True.  Returning\n False or raising an exception are both treated as invariant failures.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "STM Bool -\u003e STM ()",
        "fct-type": "function",
        "title": "always"
      },
      "index": {
        "description": "always is variant of alwaysSucceeds in which the invariant is expressed as an STM Bool action that must return True Returning False or raising an exception are both treated as invariant failures",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "always",
        "normalized": "STM Bool-\u003eSTM()",
        "package": "monadIO",
        "partial": "",
        "signature": "STM Bool-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:alwaysSucceeds",
      "description": {
        "fct-descr": "\u003cp\u003ealwaysSucceeds adds a new invariant that must be true when passed\n to alwaysSucceeds, at the end of the current transaction, and at\n the end of every subsequent transaction.  If it fails at any\n of those points then the transaction violating it is aborted\n and the exception raised by the invariant is propagated.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "STM a -\u003e STM ()",
        "fct-type": "function",
        "title": "alwaysSucceeds"
      },
      "index": {
        "description": "alwaysSucceeds adds new invariant that must be true when passed to alwaysSucceeds at the end of the current transaction and at the end of every subsequent transaction If it fails at any of those points then the transaction violating it is aborted and the exception raised by the invariant is propagated",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "alwaysSucceeds",
        "normalized": "STM a-\u003eSTM()",
        "package": "monadIO",
        "partial": "Succeeds",
        "signature": "STM a-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:atomically",
      "description": {
        "fct-descr": "\u003cp\u003eThe atomically function allows STM to be called directly from any\n monad which contains IO, i.e. is a member of MonadIO.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "STM a -\u003e io a",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#atomically",
        "fct-type": "function",
        "title": "atomically"
      },
      "index": {
        "description": "The atomically function allows STM to be called directly from any monad which contains IO i.e is member of MonadIO",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "atomically",
        "normalized": "STM a-\u003eb a",
        "package": "monadIO",
        "partial": "",
        "signature": "STM a-\u003eio a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:catchSTM",
      "description": {
        "fct-descr": "\u003cp\u003eException handling within STM actions.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "STM a -\u003e (e -\u003e STM a) -\u003e STM a",
        "fct-type": "function",
        "title": "catchSTM"
      },
      "index": {
        "description": "Exception handling within STM actions",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "catchSTM",
        "normalized": "STM a-\u003e(b-\u003eSTM a)-\u003eSTM a",
        "package": "monadIO",
        "partial": "STM",
        "signature": "STM a-\u003e(e-\u003eSTM a)-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:check",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "Bool -\u003e STM a",
        "fct-type": "function",
        "title": "check"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "check",
        "normalized": "Bool-\u003eSTM a",
        "package": "monadIO",
        "partial": "",
        "signature": "Bool-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:isEmptyTMVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e io Bool",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#isEmptyTMVar",
        "fct-type": "function",
        "title": "isEmptyTMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "isEmptyTMVar",
        "normalized": "TMVar a-\u003eb Bool",
        "package": "monadIO",
        "partial": "Empty TMVar",
        "signature": "TMVar a-\u003eio Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:isEmptyTMVarSTM",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e STM Bool",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#isEmptyTMVarSTM",
        "fct-type": "function",
        "title": "isEmptyTMVarSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "isEmptyTMVarSTM",
        "normalized": "TMVar a-\u003eSTM Bool",
        "package": "monadIO",
        "partial": "Empty TMVar STM",
        "signature": "TMVar a-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:modifyTMVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e (a -\u003e a) -\u003e io (a, a)",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#modifyTMVar",
        "fct-type": "function",
        "title": "modifyTMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "modifyTMVar",
        "normalized": "TMVar a-\u003e(a-\u003ea)-\u003eb(a,a)",
        "package": "monadIO",
        "partial": "TMVar",
        "signature": "TMVar a-\u003e(a-\u003ea)-\u003eio(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:modifyTMVar_",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e (a -\u003e a) -\u003e io ()",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#modifyTMVar_",
        "fct-type": "function",
        "title": "modifyTMVar_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "modifyTMVar_",
        "normalized": "TMVar a-\u003e(a-\u003ea)-\u003eb()",
        "package": "monadIO",
        "partial": "TMVar",
        "signature": "TMVar a-\u003e(a-\u003ea)-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:modifyTVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodifyTVar\u003c/a\u003e\u003c/code\u003e is an atomic update operation which provides both\n the former value and the newly computed value as a result.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TVar a -\u003e (a -\u003e a) -\u003e io (a, a)",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#modifyTVar",
        "fct-type": "function",
        "title": "modifyTVar"
      },
      "index": {
        "description": "modifyTVar is an atomic update operation which provides both the former value and the newly computed value as result",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "modifyTVar",
        "normalized": "TVar a-\u003e(a-\u003ea)-\u003eb(a,a)",
        "package": "monadIO",
        "partial": "TVar",
        "signature": "TVar a-\u003e(a-\u003ea)-\u003eio(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:modifyTVar_",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TVar a -\u003e (a -\u003e a) -\u003e io ()",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#modifyTVar_",
        "fct-type": "function",
        "title": "modifyTVar_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "modifyTVar_",
        "normalized": "TVar a-\u003e(a-\u003ea)-\u003eb()",
        "package": "monadIO",
        "partial": "TVar",
        "signature": "TVar a-\u003e(a-\u003ea)-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:newEmptyTMVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "io (TMVar a)",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#newEmptyTMVar",
        "fct-type": "function",
        "title": "newEmptyTMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "newEmptyTMVar",
        "normalized": "",
        "package": "monadIO",
        "partial": "Empty TMVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:newEmptyTMVarSTM",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "STM (TMVar a)",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#newEmptyTMVarSTM",
        "fct-type": "function",
        "title": "newEmptyTMVarSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "newEmptyTMVarSTM",
        "normalized": "",
        "package": "monadIO",
        "partial": "Empty TMVar STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:newTMVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "a -\u003e io (TMVar a)",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#newTMVar",
        "fct-type": "function",
        "title": "newTMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "newTMVar",
        "normalized": "a-\u003eb(TMVar a)",
        "package": "monadIO",
        "partial": "TMVar",
        "signature": "a-\u003eio(TMVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:newTMVarSTM",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "a -\u003e STM (TMVar a)",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#newTMVarSTM",
        "fct-type": "function",
        "title": "newTMVarSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "newTMVarSTM",
        "normalized": "a-\u003eSTM(TMVar a)",
        "package": "monadIO",
        "partial": "TMVar STM",
        "signature": "a-\u003eSTM(TMVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:newTVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "a -\u003e io (TVar a)",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#newTVar",
        "fct-type": "function",
        "title": "newTVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "newTVar",
        "normalized": "a-\u003eb(TVar a)",
        "package": "monadIO",
        "partial": "TVar",
        "signature": "a-\u003eio(TVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:newTVarSTM",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "a -\u003e STM (TVar a)",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#newTVarSTM",
        "fct-type": "function",
        "title": "newTVarSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "newTVarSTM",
        "normalized": "a-\u003eSTM(TVar a)",
        "package": "monadIO",
        "partial": "TVar STM",
        "signature": "a-\u003eSTM(TVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:orElse",
      "description": {
        "fct-descr": "\u003cp\u003eCompose two alternative STM actions (GHC only).  If the first action\n completes without retrying then it forms the result of the orElse.\n Otherwise, if the first action retries, then the second action is\n tried in its place.  If both actions retry then the orElse as a\n whole retries.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "STM a -\u003e STM a -\u003e STM a",
        "fct-type": "function",
        "title": "orElse"
      },
      "index": {
        "description": "Compose two alternative STM actions GHC only If the first action completes without retrying then it forms the result of the orElse Otherwise if the first action retries then the second action is tried in its place If both actions retry then the orElse as whole retries",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "orElse",
        "normalized": "STM a-\u003eSTM a-\u003eSTM a",
        "package": "monadIO",
        "partial": "Else",
        "signature": "STM a-\u003eSTM a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:putTMVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e a -\u003e io ()",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#putTMVar",
        "fct-type": "function",
        "title": "putTMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "putTMVar",
        "normalized": "TMVar a-\u003ea-\u003eb()",
        "package": "monadIO",
        "partial": "TMVar",
        "signature": "TMVar a-\u003ea-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:putTMVarSTM",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e a -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#putTMVarSTM",
        "fct-type": "function",
        "title": "putTMVarSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "putTMVarSTM",
        "normalized": "TMVar a-\u003ea-\u003eSTM()",
        "package": "monadIO",
        "partial": "TMVar STM",
        "signature": "TMVar a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:readTMVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e io a",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#readTMVar",
        "fct-type": "function",
        "title": "readTMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "readTMVar",
        "normalized": "TMVar a-\u003eb a",
        "package": "monadIO",
        "partial": "TMVar",
        "signature": "TMVar a-\u003eio a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:readTMVarSTM",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e STM a",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#readTMVarSTM",
        "fct-type": "function",
        "title": "readTMVarSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "readTMVarSTM",
        "normalized": "TMVar a-\u003eSTM a",
        "package": "monadIO",
        "partial": "TMVar STM",
        "signature": "TMVar a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:readTVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TVar a -\u003e io a",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#readTVar",
        "fct-type": "function",
        "title": "readTVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "readTVar",
        "normalized": "TVar a-\u003eb a",
        "package": "monadIO",
        "partial": "TVar",
        "signature": "TVar a-\u003eio a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:readTVarSTM",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TVar a -\u003e STM a",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#readTVarSTM",
        "fct-type": "function",
        "title": "readTVarSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "readTVarSTM",
        "normalized": "TVar a-\u003eSTM a",
        "package": "monadIO",
        "partial": "TVar STM",
        "signature": "TVar a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:registerDelay",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "Int -\u003e io (TVar Bool)",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#registerDelay",
        "fct-type": "function",
        "title": "registerDelay"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "registerDelay",
        "normalized": "Int-\u003ea(TVar Bool)",
        "package": "monadIO",
        "partial": "Delay",
        "signature": "Int-\u003eio(TVar Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:retry",
      "description": {
        "fct-descr": "\u003cp\u003eRetry execution of the current memory transaction because it has seen\n values in TVars which mean that it should not continue (e.g. the TVars\n represent a shared buffer that is now empty).  The implementation may\n block the thread until one of the TVars that it has read from has been\n udpated. (GHC only)\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "STM a",
        "fct-type": "function",
        "title": "retry"
      },
      "index": {
        "description": "Retry execution of the current memory transaction because it has seen values in TVars which mean that it should not continue e.g the TVars represent shared buffer that is now empty The implementation may block the thread until one of the TVars that it has read from has been udpated GHC only",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "retry",
        "normalized": "",
        "package": "monadIO",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:swapTMVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e a -\u003e io a",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#swapTMVar",
        "fct-type": "function",
        "title": "swapTMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "swapTMVar",
        "normalized": "TMVar a-\u003ea-\u003eb a",
        "package": "monadIO",
        "partial": "TMVar",
        "signature": "TMVar a-\u003ea-\u003eio a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:swapTMVarSTM",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e a -\u003e STM a",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#swapTMVarSTM",
        "fct-type": "function",
        "title": "swapTMVarSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "swapTMVarSTM",
        "normalized": "TMVar a-\u003ea-\u003eSTM a",
        "package": "monadIO",
        "partial": "TMVar STM",
        "signature": "TMVar a-\u003ea-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:takeTMVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e io a",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#takeTMVar",
        "fct-type": "function",
        "title": "takeTMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "takeTMVar",
        "normalized": "TMVar a-\u003eb a",
        "package": "monadIO",
        "partial": "TMVar",
        "signature": "TMVar a-\u003eio a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:takeTMVarSTM",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e STM a",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#takeTMVarSTM",
        "fct-type": "function",
        "title": "takeTMVarSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "takeTMVarSTM",
        "normalized": "TMVar a-\u003eSTM a",
        "package": "monadIO",
        "partial": "TMVar STM",
        "signature": "TMVar a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:tryPutTMVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e a -\u003e io Bool",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#tryPutTMVar",
        "fct-type": "function",
        "title": "tryPutTMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "tryPutTMVar",
        "normalized": "TMVar a-\u003ea-\u003eb Bool",
        "package": "monadIO",
        "partial": "Put TMVar",
        "signature": "TMVar a-\u003ea-\u003eio Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:tryPutTMVarSTM",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e a -\u003e STM Bool",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#tryPutTMVarSTM",
        "fct-type": "function",
        "title": "tryPutTMVarSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "tryPutTMVarSTM",
        "normalized": "TMVar a-\u003ea-\u003eSTM Bool",
        "package": "monadIO",
        "partial": "Put TMVar STM",
        "signature": "TMVar a-\u003ea-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:tryTakeTMVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e io (Maybe a)",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#tryTakeTMVar",
        "fct-type": "function",
        "title": "tryTakeTMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "tryTakeTMVar",
        "normalized": "TMVar a-\u003eb(Maybe a)",
        "package": "monadIO",
        "partial": "Take TMVar",
        "signature": "TMVar a-\u003eio(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:tryTakeTMVarSTM",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TMVar a -\u003e STM (Maybe a)",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#tryTakeTMVarSTM",
        "fct-type": "function",
        "title": "tryTakeTMVarSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "tryTakeTMVarSTM",
        "normalized": "TMVar a-\u003eSTM(Maybe a)",
        "package": "monadIO",
        "partial": "Take TMVar STM",
        "signature": "TMVar a-\u003eSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:writeTVar",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TVar a -\u003e a -\u003e io ()",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#writeTVar",
        "fct-type": "function",
        "title": "writeTVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "writeTVar",
        "normalized": "TVar a-\u003ea-\u003eb()",
        "package": "monadIO",
        "partial": "TVar",
        "signature": "TVar a-\u003ea-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:writeTVarSTM",
      "description": {
        "fct-module": "Control.Concurrent.STM.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "TVar a -\u003e a -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-MonadIO.html#writeTVarSTM",
        "fct-type": "function",
        "title": "writeTVarSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM MonadIO",
        "module": "Control.Concurrent.STM.MonadIO",
        "name": "writeTVarSTM",
        "normalized": "TVar a-\u003ea-\u003eSTM()",
        "package": "monadIO",
        "partial": "TVar STM",
        "signature": "TVar a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-StdInOut.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA low-tech concurrent interface to the console. When multiple threads\nwant input, they send messages to the console with the format\n\u003c/p\u003e\u003cpre\u003e  \u003cthread-id\u003e:request\n\u003c/pre\u003e\u003cp\u003eThe user supplies input to any requesting thread in a similar way:\n\u003c/p\u003e\u003cpre\u003e  \u003cthread-id\u003e:response\n\u003c/pre\u003e\u003cp\u003eAt any time, the user can enter \u003ccode\u003e!!\u003c/code\u003e to obtain a listing of all the\nactive prompts. Any input not of either of these forms is discarded.\n\u003c/p\u003e\u003cpre\u003e example :: IO ()\n example = setupStdinout processes\n \n processes :: IO ()\n processes = do\n     forkIO $ (prompt \"Enter something\" \u003e\u003e return ())\n     forkIO $ (prompt \"Something else\" \u003e\u003e return ())\n     prompt \"quit\"      -- When the main thread dies,\n     return ()          -- the whole interaction ends\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.StdInOut",
        "fct-package": "monadIO",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-StdInOut.html",
        "fct-type": "module",
        "title": "StdInOut"
      },
      "index": {
        "description": "low-tech concurrent interface to the console When multiple threads want input they send messages to the console with the format thread-id request The user supplies input to any requesting thread in similar way thread-id response At any time the user can enter to obtain listing of all the active prompts Any input not of either of these forms is discarded example IO example setupStdinout processes processes IO processes do forkIO prompt Enter something return forkIO prompt Something else return prompt quit When the main thread dies return the whole interaction ends",
        "hierarchy": "Control Concurrent StdInOut",
        "module": "Control.Concurrent.StdInOut",
        "name": "StdInOut",
        "normalized": "",
        "package": "monadIO",
        "partial": "Std In Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-StdInOut.html#v:prompt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eprompt\u003c/a\u003e\u003c/code\u003e is the main user level function of the module. The function\n prints its argument on stdout, prefixed by its process number. The user \n similarly selects the recipient by prefixing the process number,\n e.g. \u003ca\u003e23:\u003c/a\u003e. Active prompts will reprompt when !! is entered. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.StdInOut",
        "fct-package": "monadIO",
        "fct-signature": "String -\u003e io String",
        "fct-source": "src/Control-Concurrent-StdInOut.html#prompt",
        "fct-type": "function",
        "title": "prompt"
      },
      "index": {
        "description": "prompt is the main user level function of the module The function prints its argument on stdout prefixed by its process number The user similarly selects the recipient by prefixing the process number e.g Active prompts will reprompt when is entered",
        "hierarchy": "Control Concurrent StdInOut",
        "module": "Control.Concurrent.StdInOut",
        "name": "prompt",
        "normalized": "String-\u003ea String",
        "package": "monadIO",
        "partial": "",
        "signature": "String-\u003eio String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-StdInOut.html#v:putStrLine",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eputStrLine\u003c/a\u003e\u003c/code\u003e sends output to stdout, ensuring that lines are whole\n and uninterrupted (including the final newline).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.StdInOut",
        "fct-package": "monadIO",
        "fct-signature": "String -\u003e io ()",
        "fct-source": "src/Control-Concurrent-StdInOut.html#putStrLine",
        "fct-type": "function",
        "title": "putStrLine"
      },
      "index": {
        "description": "putStrLine sends output to stdout ensuring that lines are whole and uninterrupted including the final newline",
        "hierarchy": "Control Concurrent StdInOut",
        "module": "Control.Concurrent.StdInOut",
        "name": "putStrLine",
        "normalized": "String-\u003ea()",
        "package": "monadIO",
        "partial": "Str Line",
        "signature": "String-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-StdInOut.html#v:setupStdInOut",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetupStdInOut\u003c/a\u003e\u003c/code\u003e establishes the context for \u003ccode\u003e\u003ca\u003eprompt\u003c/a\u003e\u003c/code\u003e, by running\n   a daemon while its argument is executing. The daemon is terminated\n   once the argument to \u003ccode\u003e\u003ca\u003esetupStdInOut\u003c/a\u003e\u003c/code\u003e finishes.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.StdInOut",
        "fct-package": "monadIO",
        "fct-signature": "IO a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-StdInOut.html#setupStdInOut",
        "fct-type": "function",
        "title": "setupStdInOut"
      },
      "index": {
        "description": "setupStdInOut establishes the context for prompt by running daemon while its argument is executing The daemon is terminated once the argument to setupStdInOut finishes",
        "hierarchy": "Control Concurrent StdInOut",
        "module": "Control.Concurrent.StdInOut",
        "name": "setupStdInOut",
        "normalized": "IO a-\u003eIO a",
        "package": "monadIO",
        "partial": "Std In Out",
        "signature": "IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOverloads the standard operations on IORefs,\nas defined in Data.IORef. This module is name-for-name\nswappable with Data.IORef unless ghc-specific \noperations like weak pointers are used.\n\u003c/p\u003e\u003cp\u003eThe standard operations on \u003ccode\u003eIORef\u003c/code\u003e (such as\n\u003ccode\u003e\u003ca\u003enewIORef\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003emodifyIORef\u003c/a\u003e\u003c/code\u003e) are overloaded over the\n\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e class. A monad \u003ccode\u003em\u003c/code\u003e is declared an instance of\n\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e by defining a function\n\u003c/p\u003e\u003cpre\u003e liftIO :: IO a -\u003e m a\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.IORef.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "module",
        "fct-source": "src/Data-IORef-MonadIO.html",
        "fct-type": "module",
        "title": "MonadIO"
      },
      "index": {
        "description": "Overloads the standard operations on IORefs as defined in Data.IORef This module is name-for-name swappable with Data.IORef unless ghc-specific operations like weak pointers are used The standard operations on IORef such as newIORef or modifyIORef are overloaded over the MonadIO class monad is declared an instance of MonadIO by defining function liftIO IO",
        "hierarchy": "Data IORef MonadIO",
        "module": "Data.IORef.MonadIO",
        "name": "MonadIO",
        "normalized": "",
        "package": "monadIO",
        "partial": "Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#t:IORef",
      "description": {
        "fct-descr": "\u003cp\u003eA mutable variable in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Data.IORef.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IORef"
      },
      "index": {
        "description": "mutable variable in the IO monad",
        "hierarchy": "Data IORef MonadIO",
        "module": "Data.IORef.MonadIO",
        "name": "IORef",
        "normalized": "",
        "package": "monadIO",
        "partial": "IORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#t:MonadIO",
      "description": {
        "fct-descr": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.IORef.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadIO"
      },
      "index": {
        "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
        "hierarchy": "Data IORef MonadIO",
        "module": "Data.IORef.MonadIO",
        "name": "MonadIO",
        "normalized": "",
        "package": "monadIO",
        "partial": "Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#v:atomicModifyIORef",
      "description": {
        "fct-module": "Data.IORef.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "IORef a -\u003e (a -\u003e (a, b)) -\u003e io b",
        "fct-source": "src/Data-IORef-MonadIO.html#atomicModifyIORef",
        "fct-type": "function",
        "title": "atomicModifyIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IORef MonadIO",
        "module": "Data.IORef.MonadIO",
        "name": "atomicModifyIORef",
        "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003ec b",
        "package": "monadIO",
        "partial": "Modify IORef",
        "signature": "IORef a-\u003e(a-\u003e(a,b))-\u003eio b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Data.IORef.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "IO a -\u003e m a",
        "fct-type": "method",
        "title": "liftIO"
      },
      "index": {
        "description": "Lift computation from the IO monad",
        "hierarchy": "Data IORef MonadIO",
        "module": "Data.IORef.MonadIO",
        "name": "liftIO",
        "normalized": "IO a-\u003eb a",
        "package": "monadIO",
        "partial": "IO",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#v:modifyIORef",
      "description": {
        "fct-module": "Data.IORef.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "IORef a -\u003e (a -\u003e a) -\u003e io ()",
        "fct-source": "src/Data-IORef-MonadIO.html#modifyIORef",
        "fct-type": "function",
        "title": "modifyIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IORef MonadIO",
        "module": "Data.IORef.MonadIO",
        "name": "modifyIORef",
        "normalized": "IORef a-\u003e(a-\u003ea)-\u003eb()",
        "package": "monadIO",
        "partial": "IORef",
        "signature": "IORef a-\u003e(a-\u003ea)-\u003eio()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#v:newIORef",
      "description": {
        "fct-module": "Data.IORef.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "a -\u003e io (IORef a)",
        "fct-source": "src/Data-IORef-MonadIO.html#newIORef",
        "fct-type": "function",
        "title": "newIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IORef MonadIO",
        "module": "Data.IORef.MonadIO",
        "name": "newIORef",
        "normalized": "a-\u003eb(IORef a)",
        "package": "monadIO",
        "partial": "IORef",
        "signature": "a-\u003eio(IORef a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#v:readIORef",
      "description": {
        "fct-module": "Data.IORef.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "IORef a -\u003e io a",
        "fct-source": "src/Data-IORef-MonadIO.html#readIORef",
        "fct-type": "function",
        "title": "readIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IORef MonadIO",
        "module": "Data.IORef.MonadIO",
        "name": "readIORef",
        "normalized": "IORef a-\u003eb a",
        "package": "monadIO",
        "partial": "IORef",
        "signature": "IORef a-\u003eio a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#v:writeIORef",
      "description": {
        "fct-module": "Data.IORef.MonadIO",
        "fct-package": "monadIO",
        "fct-signature": "IORef a -\u003e a -\u003e io ()",
        "fct-source": "src/Data-IORef-MonadIO.html#writeIORef",
        "fct-type": "function",
        "title": "writeIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data IORef MonadIO",
        "module": "Data.IORef.MonadIO",
        "name": "writeIORef",
        "normalized": "IORef a-\u003ea-\u003eb()",
        "package": "monadIO",
        "partial": "IORef",
        "signature": "IORef a-\u003ea-\u003eio()"
      }
    }
  }
]