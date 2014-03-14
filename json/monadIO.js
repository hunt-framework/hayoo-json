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
        "word": "monadIO"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOverloads the standard operations on MVars, Chans, and threads,\nas defined in Control.Concurrent. This module is name-for-name\nswappable with Control.Concurrent unless ghc-specific \noperations like \u003ccode\u003emergeIO\u003c/code\u003e or \u003ccode\u003ethreadWaitRead\u003c/code\u003e are used.\n\u003c/p\u003e\u003cp\u003eThe standard operations on \u003ccode\u003eMVar\u003c/code\u003e and \u003ccode\u003eChan\u003c/code\u003e (such as\n\u003ccode\u003e\u003ca\u003enewEmptyMVar\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003eputChan\u003c/code\u003e) are overloaded over the\n\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e class. A monad \u003ccode\u003em\u003c/code\u003e is declared an instance of\n\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e by defining a function\n\u003c/p\u003e\u003cpre\u003e liftIO :: IO a -\u003e m a\n\u003c/pre\u003e\u003cp\u003eThe explicit concurrency operations over threads are\navailable if a monad \u003ccode\u003em\u003c/code\u003e is declared an instance of the\n\u003ccode\u003e\u003ca\u003eHasFork\u003c/a\u003e\u003c/code\u003e class, by defining a function\n\u003c/p\u003e\u003cpre\u003e fork :: m () -\u003e m ThreadId\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Example use.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSuppose you define a new monad (EIO say) which is like\n\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e except that it provides an environment too.\nYou will need to declare EIO and instance of the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class. In \naddition, you can declare it in the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e class. For example:\n\u003c/p\u003e\u003cpre\u003e  newtype EIO a = EIO {useEnv :: Env -\u003e IO a}\n\t\n  instance MonadIO EIO where\n    liftIO m = EIO $ (\\_ -\u003e m)\n\u003c/pre\u003e\u003cp\u003eNow the standard operations on \u003ccode\u003eMVar\u003c/code\u003e and \u003ccode\u003eChan\u003c/code\u003e (such as\n\u003ccode\u003e\u003ca\u003enewEmptyMVar\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003eputChan\u003c/code\u003e are immediately available as\nEIO operations. To enable EIO to fork explicit threads, and to\naccess operations such as \u003ccode\u003e\u003ca\u003ekillThread\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e, use\nthe declaration\n\u003c/p\u003e\u003cpre\u003e  instance HasFork EIO where\n    fork em = EIO $ \\e -\u003e forkIO (em `useEnv` e)\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Notes.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003eMVar\u003c/code\u003e operations do not include: withMVar, modifyMVar, or \naddMVarFinalizer. Consider using TMVars for these instead. In particular,\nmodifyMVar seems to promise atomicity, but it is NOT atomic. In\ncontrast TMVars can be used just like MVars, and they\nwill behave the way you expect (module Control.Concurrent.STM.MonadIO).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.MonadIO",
          "name": "MonadIO",
          "package": "monadIO",
          "source": "src/Control-Concurrent-MonadIO.html",
          "type": "module"
        },
        "index": {
          "description": "Overloads the standard operations on MVars Chans and threads as defined in Control.Concurrent This module is name-for-name swappable with Control.Concurrent unless ghc-specific operations like mergeIO or threadWaitRead are used The standard operations on MVar and Chan such as newEmptyMVar or putChan are overloaded over the MonadIO class monad is declared an instance of MonadIO by defining function liftIO IO The explicit concurrency operations over threads are available if monad is declared an instance of the HasFork class by defining function fork ThreadId Example use Suppose you define new monad EIO say which is like IO except that it provides an environment too You will need to declare EIO and instance of the Monad class In addition you can declare it in the MonadIO class For example newtype EIO EIO useEnv Env IO instance MonadIO EIO where liftIO EIO Now the standard operations on MVar and Chan such as newEmptyMVar or putChan are immediately available as EIO operations To enable EIO to fork explicit threads and to access operations such as killThread and threadDelay use the declaration instance HasFork EIO where fork em EIO forkIO em useEnv Notes The MVar operations do not include withMVar modifyMVar or addMVarFinalizer Consider using TMVars for these instead In particular modifyMVar seems to promise atomicity but it is NOT atomic In contrast TMVars can be used just like MVars and they will behave the way you expect module Control.Concurrent.STM.MonadIO",
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "MonadIO",
          "package": "monadIO",
          "partial": "Monad IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MonadIO",
          "name": "Chan",
          "package": "monadIO",
          "type": "data"
        },
        "index": {
          "description": "Chan is an abstract type representing an unbounded FIFO channel",
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "Chan",
          "package": "monadIO",
          "partial": "Chan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#t:Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "HasFork",
          "package": "monadIO",
          "source": "src/Control-Concurrent-MonadIO.html#HasFork",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "HasFork",
          "package": "monadIO",
          "partial": "Has Fork",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#t:HasFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e (pronounced \"em-var\") is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a a box, which may be empty or full.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MonadIO",
          "name": "MVar",
          "package": "monadIO",
          "type": "data"
        },
        "index": {
          "description": "An MVar pronounced em-var is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "MVar",
          "package": "monadIO",
          "partial": "MVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#t:MVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Concurrent.MonadIO",
          "name": "MonadIO",
          "package": "monadIO",
          "type": "class"
        },
        "index": {
          "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "MonadIO",
          "package": "monadIO",
          "partial": "Monad IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#t:MonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e is an abstract type representing a handle to a thread.\n\u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, where\nthe \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance implements an arbitrary total ordering over\n\u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003es. The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance lets you convert an arbitrary-valued\n\u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e to string form; showing a \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e value is occasionally\nuseful when debugging or diagnosing the behaviour of a concurrent\nprogram.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: in GHC, if you have a \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e, you essentially have\na pointer to the thread itself.  This means the thread itself can't be\ngarbage collected until you drop the \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e.\nThis misfeature will hopefully be corrected at a later date.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Hugs does not provide any operations on other threads;\nit defines \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e as a synonym for ().\n\u003c/p\u003e",
          "module": "Control.Concurrent.MonadIO",
          "name": "ThreadId",
          "package": "monadIO",
          "type": "data"
        },
        "index": {
          "description": "ThreadId is an abstract type representing handle to thread ThreadId is an instance of Eq Ord and Show where the Ord instance implements an arbitrary total ordering over ThreadId The Show instance lets you convert an arbitrary-valued ThreadId to string form showing ThreadId value is occasionally useful when debugging or diagnosing the behaviour of concurrent program Note in GHC if you have ThreadId you essentially have pointer to the thread itself This means the thread itself can be garbage collected until you drop the ThreadId This misfeature will hopefully be corrected at later date Note Hugs does not provide any operations on other threads it defines ThreadId as synonym for",
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "ThreadId",
          "package": "monadIO",
          "partial": "Thread Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#t:ThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "dupChan",
          "package": "monadIO",
          "signature": "Chan a -\u003e io (Chan a)",
          "source": "src/Control-Concurrent-MonadIO.html#dupChan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "dupChan",
          "normalized": "Chan a-\u003eb(Chan a)",
          "package": "monadIO",
          "partial": "Chan",
          "signature": "Chan a-\u003eio(Chan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:dupChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "fork",
          "package": "monadIO",
          "signature": "io () -\u003e io ThreadId",
          "source": "src/Control-Concurrent-MonadIO.html#fork",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "fork",
          "normalized": "a()-\u003ea ThreadId",
          "package": "monadIO",
          "signature": "io()-\u003eio ThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncluded to maintain name-for-name compatibility\n   with Control.Concurrent\n\u003c/p\u003e",
          "module": "Control.Concurrent.MonadIO",
          "name": "forkIO",
          "package": "monadIO",
          "signature": "IO () -\u003e IO ThreadId",
          "source": "src/Control-Concurrent-MonadIO.html#forkIO",
          "type": "function"
        },
        "index": {
          "description": "Included to maintain name-for-name compatibility with Control.Concurrent",
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "forkIO",
          "normalized": "IO()-\u003eIO ThreadId",
          "package": "monadIO",
          "partial": "IO",
          "signature": "IO()-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:forkIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "getChanContents",
          "package": "monadIO",
          "signature": "Chan a -\u003e io [a]",
          "source": "src/Control-Concurrent-MonadIO.html#getChanContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "getChanContents",
          "normalized": "Chan a-\u003eb[a]",
          "package": "monadIO",
          "partial": "Chan Contents",
          "signature": "Chan a-\u003eio[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:getChanContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "isEmptyChan",
          "package": "monadIO",
          "signature": "Chan a -\u003e io Bool",
          "source": "src/Control-Concurrent-MonadIO.html#isEmptyChan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "isEmptyChan",
          "normalized": "Chan a-\u003eb Bool",
          "package": "monadIO",
          "partial": "Empty Chan",
          "signature": "Chan a-\u003eio Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:isEmptyChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "isEmptyMVar",
          "package": "monadIO",
          "signature": "MVar a -\u003e io Bool",
          "source": "src/Control-Concurrent-MonadIO.html#isEmptyMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "isEmptyMVar",
          "normalized": "MVar a-\u003eb Bool",
          "package": "monadIO",
          "partial": "Empty MVar",
          "signature": "MVar a-\u003eio Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:isEmptyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "killThread",
          "package": "monadIO",
          "signature": "ThreadId -\u003e io ()",
          "source": "src/Control-Concurrent-MonadIO.html#killThread",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "killThread",
          "normalized": "ThreadId-\u003ea()",
          "package": "monadIO",
          "partial": "Thread",
          "signature": "ThreadId-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:killThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MonadIO",
          "name": "liftIO",
          "package": "monadIO",
          "signature": "IO a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "liftIO",
          "normalized": "IO a-\u003eb a",
          "package": "monadIO",
          "partial": "IO",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "myThreadId",
          "package": "monadIO",
          "signature": "io ThreadId",
          "source": "src/Control-Concurrent-MonadIO.html#myThreadId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "myThreadId",
          "package": "monadIO",
          "partial": "Thread Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:myThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "newChan",
          "package": "monadIO",
          "signature": "io (Chan a)",
          "source": "src/Control-Concurrent-MonadIO.html#newChan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "newChan",
          "package": "monadIO",
          "partial": "Chan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:newChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "newEmptyMVar",
          "package": "monadIO",
          "signature": "io (MVar a)",
          "source": "src/Control-Concurrent-MonadIO.html#newEmptyMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "newEmptyMVar",
          "package": "monadIO",
          "partial": "Empty MVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:newEmptyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "newMVar",
          "package": "monadIO",
          "signature": "a -\u003e io (MVar a)",
          "source": "src/Control-Concurrent-MonadIO.html#newMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "newMVar",
          "normalized": "a-\u003eb(MVar a)",
          "package": "monadIO",
          "partial": "MVar",
          "signature": "a-\u003eio(MVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:newMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "putMVar",
          "package": "monadIO",
          "signature": "MVar a -\u003e a -\u003e io ()",
          "source": "src/Control-Concurrent-MonadIO.html#putMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "putMVar",
          "normalized": "MVar a-\u003ea-\u003eb()",
          "package": "monadIO",
          "partial": "MVar",
          "signature": "MVar a-\u003ea-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:putMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "readChan",
          "package": "monadIO",
          "signature": "Chan a -\u003e io a",
          "source": "src/Control-Concurrent-MonadIO.html#readChan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "readChan",
          "normalized": "Chan a-\u003eb a",
          "package": "monadIO",
          "partial": "Chan",
          "signature": "Chan a-\u003eio a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:readChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "readMVar",
          "package": "monadIO",
          "signature": "MVar a -\u003e io a",
          "source": "src/Control-Concurrent-MonadIO.html#readMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "readMVar",
          "normalized": "MVar a-\u003eb a",
          "package": "monadIO",
          "partial": "MVar",
          "signature": "MVar a-\u003eio a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:readMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "swapMVar",
          "package": "monadIO",
          "signature": "MVar a -\u003e a -\u003e io a",
          "source": "src/Control-Concurrent-MonadIO.html#swapMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "swapMVar",
          "normalized": "MVar a-\u003ea-\u003eb a",
          "package": "monadIO",
          "partial": "MVar",
          "signature": "MVar a-\u003ea-\u003eio a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:swapMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "takeMVar",
          "package": "monadIO",
          "signature": "MVar a -\u003e io a",
          "source": "src/Control-Concurrent-MonadIO.html#takeMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "takeMVar",
          "normalized": "MVar a-\u003eb a",
          "package": "monadIO",
          "partial": "MVar",
          "signature": "MVar a-\u003eio a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:takeMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "threadDelay",
          "package": "monadIO",
          "signature": "Int -\u003e io ()",
          "source": "src/Control-Concurrent-MonadIO.html#threadDelay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "threadDelay",
          "normalized": "Int-\u003ea()",
          "package": "monadIO",
          "partial": "Delay",
          "signature": "Int-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:threadDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "throwTo",
          "package": "monadIO",
          "signature": "ThreadId -\u003e e -\u003e io ()",
          "source": "src/Control-Concurrent-MonadIO.html#throwTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "throwTo",
          "normalized": "ThreadId-\u003ea-\u003eb()",
          "package": "monadIO",
          "partial": "To",
          "signature": "ThreadId-\u003ee-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:throwTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "tryPutMVar",
          "package": "monadIO",
          "signature": "MVar a -\u003e a -\u003e io Bool",
          "source": "src/Control-Concurrent-MonadIO.html#tryPutMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "tryPutMVar",
          "normalized": "MVar a-\u003ea-\u003eb Bool",
          "package": "monadIO",
          "partial": "Put MVar",
          "signature": "MVar a-\u003ea-\u003eio Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:tryPutMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "tryTakeMVar",
          "package": "monadIO",
          "signature": "MVar a -\u003e io (Maybe a)",
          "source": "src/Control-Concurrent-MonadIO.html#tryTakeMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "tryTakeMVar",
          "normalized": "MVar a-\u003eb(Maybe a)",
          "package": "monadIO",
          "partial": "Take MVar",
          "signature": "MVar a-\u003eio(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:tryTakeMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "unGetChan",
          "package": "monadIO",
          "signature": "Chan a -\u003e a -\u003e io ()",
          "source": "src/Control-Concurrent-MonadIO.html#unGetChan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "unGetChan",
          "normalized": "Chan a-\u003ea-\u003eb()",
          "package": "monadIO",
          "partial": "Get Chan",
          "signature": "Chan a-\u003ea-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:unGetChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "writeChan",
          "package": "monadIO",
          "signature": "Chan a -\u003e a -\u003e io ()",
          "source": "src/Control-Concurrent-MonadIO.html#writeChan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "writeChan",
          "normalized": "Chan a-\u003ea-\u003eb()",
          "package": "monadIO",
          "partial": "Chan",
          "signature": "Chan a-\u003ea-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:writeChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "writeList2Chan",
          "package": "monadIO",
          "signature": "Chan a -\u003e [a] -\u003e io ()",
          "source": "src/Control-Concurrent-MonadIO.html#writeList2Chan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "writeList2Chan",
          "normalized": "Chan a-\u003e[a]-\u003eb()",
          "package": "monadIO",
          "partial": "List Chan",
          "signature": "Chan a-\u003e[a]-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:writeList2Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MonadIO",
          "name": "yield",
          "package": "monadIO",
          "signature": "io ()",
          "source": "src/Control-Concurrent-MonadIO.html#yield",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MonadIO",
          "module": "Control.Concurrent.MonadIO",
          "name": "yield",
          "normalized": "a()",
          "package": "monadIO",
          "signature": "io()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-MonadIO.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOverloads the standard operations on TVars, and TMVars as defined\nin Control.Concurrent.STM.\n\u003c/p\u003e\u003cp\u003eTVars and MVars are often thought of as variables to be \nused in the STM monad. But in practice, they should be used\njust as frequently (if not more so) in any IO-like monad, with STM \nbeing used purely when a new atomic transaction is being defined.\nThus we reverse the naming convention, and use\nthe plain access names when in the IO-like monad, and use an explicit STM \nsuffix when using the variables tentatively within the STM monad itself.\n\u003c/p\u003e\u003cp\u003eTMVars are particularly valuable when used in an IO-like monad,\nbecause operations like readTMVar and modifyTMvar\ncan guarantee the atomicity of the operation (unlike the corresponding\noperations over MVars).\n\u003c/p\u003e\u003cp\u003eThe standard operations on \u003ccode\u003eTVar\u003c/code\u003e and \u003ccode\u003eTMVar\u003c/code\u003e (such as\n\u003ccode\u003e\u003ca\u003ewriteTVar\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enewEmptyTMVar\u003c/a\u003e\u003c/code\u003e) are overloaded over the\n\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e class. A monad \u003ccode\u003em\u003c/code\u003e is declared an instance of\n\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e by defining a function\n\u003c/p\u003e\u003cpre\u003e liftIO :: IO a -\u003e m a\n\u003c/pre\u003e\u003cp\u003eIt also overloads the \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e function, so that STM transactions\ncan be defined from within any MonadIO monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "MonadIO",
          "package": "monadIO",
          "source": "src/Control-Concurrent-STM-MonadIO.html",
          "type": "module"
        },
        "index": {
          "description": "Overloads the standard operations on TVars and TMVars as defined in Control.Concurrent.STM TVars and MVars are often thought of as variables to be used in the STM monad But in practice they should be used just as frequently if not more so in any IO-like monad with STM being used purely when new atomic transaction is being defined Thus we reverse the naming convention and use the plain access names when in the IO-like monad and use an explicit STM suffix when using the variables tentatively within the STM monad itself TMVars are particularly valuable when used in an IO-like monad because operations like readTMVar and modifyTMvar can guarantee the atomicity of the operation unlike the corresponding operations over MVars The standard operations on TVar and TMVar such as writeTVar or newEmptyTMVar are overloaded over the MonadIO class monad is declared an instance of MonadIO by defining function liftIO IO It also overloads the atomically function so that STM transactions can be defined from within any MonadIO monad",
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "MonadIO",
          "package": "monadIO",
          "partial": "Monad IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad supporting atomic memory transactions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "STM",
          "package": "monadIO",
          "type": "data"
        },
        "index": {
          "description": "monad supporting atomic memory transactions",
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "STM",
          "package": "monadIO",
          "partial": "STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#t:STM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a box, which may be empty or full.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "TMVar",
          "package": "monadIO",
          "type": "data"
        },
        "index": {
          "description": "TMVar is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "TMVar",
          "package": "monadIO",
          "partial": "TMVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#t:TMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShared memory locations that support atomic memory transactions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "TVar",
          "package": "monadIO",
          "type": "data"
        },
        "index": {
          "description": "Shared memory locations that support atomic memory transactions",
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "TVar",
          "package": "monadIO",
          "partial": "TVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#t:TVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealways is a variant of alwaysSucceeds in which the invariant is\n expressed as an STM Bool action that must return True.  Returning\n False or raising an exception are both treated as invariant failures.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "always",
          "package": "monadIO",
          "signature": "STM Bool -\u003e STM ()",
          "type": "function"
        },
        "index": {
          "description": "always is variant of alwaysSucceeds in which the invariant is expressed as an STM Bool action that must return True Returning False or raising an exception are both treated as invariant failures",
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "always",
          "normalized": "STM Bool-\u003eSTM()",
          "package": "monadIO",
          "signature": "STM Bool-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealwaysSucceeds adds a new invariant that must be true when passed\n to alwaysSucceeds, at the end of the current transaction, and at\n the end of every subsequent transaction.  If it fails at any\n of those points then the transaction violating it is aborted\n and the exception raised by the invariant is propagated.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "alwaysSucceeds",
          "package": "monadIO",
          "signature": "STM a -\u003e STM ()",
          "type": "function"
        },
        "index": {
          "description": "alwaysSucceeds adds new invariant that must be true when passed to alwaysSucceeds at the end of the current transaction and at the end of every subsequent transaction If it fails at any of those points then the transaction violating it is aborted and the exception raised by the invariant is propagated",
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "alwaysSucceeds",
          "normalized": "STM a-\u003eSTM()",
          "package": "monadIO",
          "partial": "Succeeds",
          "signature": "STM a-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:alwaysSucceeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe atomically function allows STM to be called directly from any\n monad which contains IO, i.e. is a member of MonadIO.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "atomically",
          "package": "monadIO",
          "signature": "STM a -\u003e io a",
          "source": "src/Control-Concurrent-STM-MonadIO.html#atomically",
          "type": "function"
        },
        "index": {
          "description": "The atomically function allows STM to be called directly from any monad which contains IO i.e is member of MonadIO",
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "atomically",
          "normalized": "STM a-\u003eb a",
          "package": "monadIO",
          "signature": "STM a-\u003eio a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:atomically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException handling within STM actions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "catchSTM",
          "package": "monadIO",
          "signature": "STM a -\u003e (e -\u003e STM a) -\u003e STM a",
          "type": "function"
        },
        "index": {
          "description": "Exception handling within STM actions",
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "catchSTM",
          "normalized": "STM a-\u003e(b-\u003eSTM a)-\u003eSTM a",
          "package": "monadIO",
          "partial": "STM",
          "signature": "STM a-\u003e(e-\u003eSTM a)-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:catchSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "check",
          "package": "monadIO",
          "signature": "Bool -\u003e STM a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "check",
          "normalized": "Bool-\u003eSTM a",
          "package": "monadIO",
          "signature": "Bool-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "isEmptyTMVar",
          "package": "monadIO",
          "signature": "TMVar a -\u003e io Bool",
          "source": "src/Control-Concurrent-STM-MonadIO.html#isEmptyTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "isEmptyTMVar",
          "normalized": "TMVar a-\u003eb Bool",
          "package": "monadIO",
          "partial": "Empty TMVar",
          "signature": "TMVar a-\u003eio Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:isEmptyTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "isEmptyTMVarSTM",
          "package": "monadIO",
          "signature": "TMVar a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-MonadIO.html#isEmptyTMVarSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "isEmptyTMVarSTM",
          "normalized": "TMVar a-\u003eSTM Bool",
          "package": "monadIO",
          "partial": "Empty TMVar STM",
          "signature": "TMVar a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:isEmptyTMVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "modifyTMVar",
          "package": "monadIO",
          "signature": "TMVar a -\u003e (a -\u003e a) -\u003e io (a, a)",
          "source": "src/Control-Concurrent-STM-MonadIO.html#modifyTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "modifyTMVar",
          "normalized": "TMVar a-\u003e(a-\u003ea)-\u003eb(a,a)",
          "package": "monadIO",
          "partial": "TMVar",
          "signature": "TMVar a-\u003e(a-\u003ea)-\u003eio(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:modifyTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "modifyTMVar_",
          "package": "monadIO",
          "signature": "TMVar a -\u003e (a -\u003e a) -\u003e io ()",
          "source": "src/Control-Concurrent-STM-MonadIO.html#modifyTMVar_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "modifyTMVar_",
          "normalized": "TMVar a-\u003e(a-\u003ea)-\u003eb()",
          "package": "monadIO",
          "partial": "TMVar",
          "signature": "TMVar a-\u003e(a-\u003ea)-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:modifyTMVar_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodifyTVar\u003c/a\u003e\u003c/code\u003e is an atomic update operation which provides both\n the former value and the newly computed value as a result.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "modifyTVar",
          "package": "monadIO",
          "signature": "TVar a -\u003e (a -\u003e a) -\u003e io (a, a)",
          "source": "src/Control-Concurrent-STM-MonadIO.html#modifyTVar",
          "type": "function"
        },
        "index": {
          "description": "modifyTVar is an atomic update operation which provides both the former value and the newly computed value as result",
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "modifyTVar",
          "normalized": "TVar a-\u003e(a-\u003ea)-\u003eb(a,a)",
          "package": "monadIO",
          "partial": "TVar",
          "signature": "TVar a-\u003e(a-\u003ea)-\u003eio(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:modifyTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "modifyTVar_",
          "package": "monadIO",
          "signature": "TVar a -\u003e (a -\u003e a) -\u003e io ()",
          "source": "src/Control-Concurrent-STM-MonadIO.html#modifyTVar_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "modifyTVar_",
          "normalized": "TVar a-\u003e(a-\u003ea)-\u003eb()",
          "package": "monadIO",
          "partial": "TVar",
          "signature": "TVar a-\u003e(a-\u003ea)-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:modifyTVar_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "newEmptyTMVar",
          "package": "monadIO",
          "signature": "io (TMVar a)",
          "source": "src/Control-Concurrent-STM-MonadIO.html#newEmptyTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "newEmptyTMVar",
          "package": "monadIO",
          "partial": "Empty TMVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:newEmptyTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "newEmptyTMVarSTM",
          "package": "monadIO",
          "signature": "STM (TMVar a)",
          "source": "src/Control-Concurrent-STM-MonadIO.html#newEmptyTMVarSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "newEmptyTMVarSTM",
          "package": "monadIO",
          "partial": "Empty TMVar STM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:newEmptyTMVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "newTMVar",
          "package": "monadIO",
          "signature": "a -\u003e io (TMVar a)",
          "source": "src/Control-Concurrent-STM-MonadIO.html#newTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "newTMVar",
          "normalized": "a-\u003eb(TMVar a)",
          "package": "monadIO",
          "partial": "TMVar",
          "signature": "a-\u003eio(TMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:newTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "newTMVarSTM",
          "package": "monadIO",
          "signature": "a -\u003e STM (TMVar a)",
          "source": "src/Control-Concurrent-STM-MonadIO.html#newTMVarSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "newTMVarSTM",
          "normalized": "a-\u003eSTM(TMVar a)",
          "package": "monadIO",
          "partial": "TMVar STM",
          "signature": "a-\u003eSTM(TMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:newTMVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "newTVar",
          "package": "monadIO",
          "signature": "a -\u003e io (TVar a)",
          "source": "src/Control-Concurrent-STM-MonadIO.html#newTVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "newTVar",
          "normalized": "a-\u003eb(TVar a)",
          "package": "monadIO",
          "partial": "TVar",
          "signature": "a-\u003eio(TVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:newTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "newTVarSTM",
          "package": "monadIO",
          "signature": "a -\u003e STM (TVar a)",
          "source": "src/Control-Concurrent-STM-MonadIO.html#newTVarSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "newTVarSTM",
          "normalized": "a-\u003eSTM(TVar a)",
          "package": "monadIO",
          "partial": "TVar STM",
          "signature": "a-\u003eSTM(TVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:newTVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two alternative STM actions (GHC only).  If the first action\n completes without retrying then it forms the result of the orElse.\n Otherwise, if the first action retries, then the second action is\n tried in its place.  If both actions retry then the orElse as a\n whole retries.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "orElse",
          "package": "monadIO",
          "signature": "STM a -\u003e STM a -\u003e STM a",
          "type": "function"
        },
        "index": {
          "description": "Compose two alternative STM actions GHC only If the first action completes without retrying then it forms the result of the orElse Otherwise if the first action retries then the second action is tried in its place If both actions retry then the orElse as whole retries",
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "orElse",
          "normalized": "STM a-\u003eSTM a-\u003eSTM a",
          "package": "monadIO",
          "partial": "Else",
          "signature": "STM a-\u003eSTM a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "putTMVar",
          "package": "monadIO",
          "signature": "TMVar a -\u003e a -\u003e io ()",
          "source": "src/Control-Concurrent-STM-MonadIO.html#putTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "putTMVar",
          "normalized": "TMVar a-\u003ea-\u003eb()",
          "package": "monadIO",
          "partial": "TMVar",
          "signature": "TMVar a-\u003ea-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:putTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "putTMVarSTM",
          "package": "monadIO",
          "signature": "TMVar a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-MonadIO.html#putTMVarSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "putTMVarSTM",
          "normalized": "TMVar a-\u003ea-\u003eSTM()",
          "package": "monadIO",
          "partial": "TMVar STM",
          "signature": "TMVar a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:putTMVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "readTMVar",
          "package": "monadIO",
          "signature": "TMVar a -\u003e io a",
          "source": "src/Control-Concurrent-STM-MonadIO.html#readTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "readTMVar",
          "normalized": "TMVar a-\u003eb a",
          "package": "monadIO",
          "partial": "TMVar",
          "signature": "TMVar a-\u003eio a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:readTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "readTMVarSTM",
          "package": "monadIO",
          "signature": "TMVar a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-MonadIO.html#readTMVarSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "readTMVarSTM",
          "normalized": "TMVar a-\u003eSTM a",
          "package": "monadIO",
          "partial": "TMVar STM",
          "signature": "TMVar a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:readTMVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "readTVar",
          "package": "monadIO",
          "signature": "TVar a -\u003e io a",
          "source": "src/Control-Concurrent-STM-MonadIO.html#readTVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "readTVar",
          "normalized": "TVar a-\u003eb a",
          "package": "monadIO",
          "partial": "TVar",
          "signature": "TVar a-\u003eio a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:readTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "readTVarSTM",
          "package": "monadIO",
          "signature": "TVar a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-MonadIO.html#readTVarSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "readTVarSTM",
          "normalized": "TVar a-\u003eSTM a",
          "package": "monadIO",
          "partial": "TVar STM",
          "signature": "TVar a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:readTVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "registerDelay",
          "package": "monadIO",
          "signature": "Int -\u003e io (TVar Bool)",
          "source": "src/Control-Concurrent-STM-MonadIO.html#registerDelay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "registerDelay",
          "normalized": "Int-\u003ea(TVar Bool)",
          "package": "monadIO",
          "partial": "Delay",
          "signature": "Int-\u003eio(TVar Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:registerDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetry execution of the current memory transaction because it has seen\n values in TVars which mean that it should not continue (e.g. the TVars\n represent a shared buffer that is now empty).  The implementation may\n block the thread until one of the TVars that it has read from has been\n udpated. (GHC only)\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "retry",
          "package": "monadIO",
          "signature": "STM a",
          "type": "function"
        },
        "index": {
          "description": "Retry execution of the current memory transaction because it has seen values in TVars which mean that it should not continue e.g the TVars represent shared buffer that is now empty The implementation may block the thread until one of the TVars that it has read from has been udpated GHC only",
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "retry",
          "package": "monadIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "swapTMVar",
          "package": "monadIO",
          "signature": "TMVar a -\u003e a -\u003e io a",
          "source": "src/Control-Concurrent-STM-MonadIO.html#swapTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "swapTMVar",
          "normalized": "TMVar a-\u003ea-\u003eb a",
          "package": "monadIO",
          "partial": "TMVar",
          "signature": "TMVar a-\u003ea-\u003eio a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:swapTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "swapTMVarSTM",
          "package": "monadIO",
          "signature": "TMVar a -\u003e a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-MonadIO.html#swapTMVarSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "swapTMVarSTM",
          "normalized": "TMVar a-\u003ea-\u003eSTM a",
          "package": "monadIO",
          "partial": "TMVar STM",
          "signature": "TMVar a-\u003ea-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:swapTMVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "takeTMVar",
          "package": "monadIO",
          "signature": "TMVar a -\u003e io a",
          "source": "src/Control-Concurrent-STM-MonadIO.html#takeTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "takeTMVar",
          "normalized": "TMVar a-\u003eb a",
          "package": "monadIO",
          "partial": "TMVar",
          "signature": "TMVar a-\u003eio a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:takeTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "takeTMVarSTM",
          "package": "monadIO",
          "signature": "TMVar a -\u003e STM a",
          "source": "src/Control-Concurrent-STM-MonadIO.html#takeTMVarSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "takeTMVarSTM",
          "normalized": "TMVar a-\u003eSTM a",
          "package": "monadIO",
          "partial": "TMVar STM",
          "signature": "TMVar a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:takeTMVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "tryPutTMVar",
          "package": "monadIO",
          "signature": "TMVar a -\u003e a -\u003e io Bool",
          "source": "src/Control-Concurrent-STM-MonadIO.html#tryPutTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "tryPutTMVar",
          "normalized": "TMVar a-\u003ea-\u003eb Bool",
          "package": "monadIO",
          "partial": "Put TMVar",
          "signature": "TMVar a-\u003ea-\u003eio Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:tryPutTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "tryPutTMVarSTM",
          "package": "monadIO",
          "signature": "TMVar a -\u003e a -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-MonadIO.html#tryPutTMVarSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "tryPutTMVarSTM",
          "normalized": "TMVar a-\u003ea-\u003eSTM Bool",
          "package": "monadIO",
          "partial": "Put TMVar STM",
          "signature": "TMVar a-\u003ea-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:tryPutTMVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "tryTakeTMVar",
          "package": "monadIO",
          "signature": "TMVar a -\u003e io (Maybe a)",
          "source": "src/Control-Concurrent-STM-MonadIO.html#tryTakeTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "tryTakeTMVar",
          "normalized": "TMVar a-\u003eb(Maybe a)",
          "package": "monadIO",
          "partial": "Take TMVar",
          "signature": "TMVar a-\u003eio(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:tryTakeTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "tryTakeTMVarSTM",
          "package": "monadIO",
          "signature": "TMVar a -\u003e STM (Maybe a)",
          "source": "src/Control-Concurrent-STM-MonadIO.html#tryTakeTMVarSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "tryTakeTMVarSTM",
          "normalized": "TMVar a-\u003eSTM(Maybe a)",
          "package": "monadIO",
          "partial": "Take TMVar STM",
          "signature": "TMVar a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:tryTakeTMVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "writeTVar",
          "package": "monadIO",
          "signature": "TVar a -\u003e a -\u003e io ()",
          "source": "src/Control-Concurrent-STM-MonadIO.html#writeTVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "writeTVar",
          "normalized": "TVar a-\u003ea-\u003eb()",
          "package": "monadIO",
          "partial": "TVar",
          "signature": "TVar a-\u003ea-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:writeTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "writeTVarSTM",
          "package": "monadIO",
          "signature": "TVar a -\u003e a -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-MonadIO.html#writeTVarSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM MonadIO",
          "module": "Control.Concurrent.STM.MonadIO",
          "name": "writeTVarSTM",
          "normalized": "TVar a-\u003ea-\u003eSTM()",
          "package": "monadIO",
          "partial": "TVar STM",
          "signature": "TVar a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-STM-MonadIO.html#v:writeTVarSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA low-tech concurrent interface to the console. When multiple threads\nwant input, they send messages to the console with the format\n\u003c/p\u003e\u003cpre\u003e  \u003cthread-id\u003e:request\n\u003c/pre\u003e\u003cp\u003eThe user supplies input to any requesting thread in a similar way:\n\u003c/p\u003e\u003cpre\u003e  \u003cthread-id\u003e:response\n\u003c/pre\u003e\u003cp\u003eAt any time, the user can enter \u003ccode\u003e!!\u003c/code\u003e to obtain a listing of all the\nactive prompts. Any input not of either of these forms is discarded.\n\u003c/p\u003e\u003cpre\u003e example :: IO ()\n example = setupStdinout processes\n \n processes :: IO ()\n processes = do\n     forkIO $ (prompt \"Enter something\" \u003e\u003e return ())\n     forkIO $ (prompt \"Something else\" \u003e\u003e return ())\n     prompt \"quit\"      -- When the main thread dies,\n     return ()          -- the whole interaction ends\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.StdInOut",
          "name": "StdInOut",
          "package": "monadIO",
          "source": "src/Control-Concurrent-StdInOut.html",
          "type": "module"
        },
        "index": {
          "description": "low-tech concurrent interface to the console When multiple threads want input they send messages to the console with the format thread-id request The user supplies input to any requesting thread in similar way thread-id response At any time the user can enter to obtain listing of all the active prompts Any input not of either of these forms is discarded example IO example setupStdinout processes processes IO processes do forkIO prompt Enter something return forkIO prompt Something else return prompt quit When the main thread dies return the whole interaction ends",
          "hierarchy": "Control Concurrent StdInOut",
          "module": "Control.Concurrent.StdInOut",
          "name": "StdInOut",
          "package": "monadIO",
          "partial": "Std In Out",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-StdInOut.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eprompt\u003c/a\u003e\u003c/code\u003e is the main user level function of the module. The function\n prints its argument on stdout, prefixed by its process number. The user \n similarly selects the recipient by prefixing the process number,\n e.g. \u003ca\u003e23:\u003c/a\u003e. Active prompts will reprompt when !! is entered. \n\u003c/p\u003e",
          "module": "Control.Concurrent.StdInOut",
          "name": "prompt",
          "package": "monadIO",
          "signature": "String -\u003e io String",
          "source": "src/Control-Concurrent-StdInOut.html#prompt",
          "type": "function"
        },
        "index": {
          "description": "prompt is the main user level function of the module The function prints its argument on stdout prefixed by its process number The user similarly selects the recipient by prefixing the process number e.g Active prompts will reprompt when is entered",
          "hierarchy": "Control Concurrent StdInOut",
          "module": "Control.Concurrent.StdInOut",
          "name": "prompt",
          "normalized": "String-\u003ea String",
          "package": "monadIO",
          "signature": "String-\u003eio String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-StdInOut.html#v:prompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eputStrLine\u003c/a\u003e\u003c/code\u003e sends output to stdout, ensuring that lines are whole\n and uninterrupted (including the final newline).\n\u003c/p\u003e",
          "module": "Control.Concurrent.StdInOut",
          "name": "putStrLine",
          "package": "monadIO",
          "signature": "String -\u003e io ()",
          "source": "src/Control-Concurrent-StdInOut.html#putStrLine",
          "type": "function"
        },
        "index": {
          "description": "putStrLine sends output to stdout ensuring that lines are whole and uninterrupted including the final newline",
          "hierarchy": "Control Concurrent StdInOut",
          "module": "Control.Concurrent.StdInOut",
          "name": "putStrLine",
          "normalized": "String-\u003ea()",
          "package": "monadIO",
          "partial": "Str Line",
          "signature": "String-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-StdInOut.html#v:putStrLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetupStdInOut\u003c/a\u003e\u003c/code\u003e establishes the context for \u003ccode\u003e\u003ca\u003eprompt\u003c/a\u003e\u003c/code\u003e, by running\n   a daemon while its argument is executing. The daemon is terminated\n   once the argument to \u003ccode\u003e\u003ca\u003esetupStdInOut\u003c/a\u003e\u003c/code\u003e finishes.\n\u003c/p\u003e",
          "module": "Control.Concurrent.StdInOut",
          "name": "setupStdInOut",
          "package": "monadIO",
          "signature": "IO a -\u003e IO a",
          "source": "src/Control-Concurrent-StdInOut.html#setupStdInOut",
          "type": "function"
        },
        "index": {
          "description": "setupStdInOut establishes the context for prompt by running daemon while its argument is executing The daemon is terminated once the argument to setupStdInOut finishes",
          "hierarchy": "Control Concurrent StdInOut",
          "module": "Control.Concurrent.StdInOut",
          "name": "setupStdInOut",
          "normalized": "IO a-\u003eIO a",
          "package": "monadIO",
          "partial": "Std In Out",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Control-Concurrent-StdInOut.html#v:setupStdInOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOverloads the standard operations on IORefs,\nas defined in Data.IORef. This module is name-for-name\nswappable with Data.IORef unless ghc-specific \noperations like weak pointers are used.\n\u003c/p\u003e\u003cp\u003eThe standard operations on \u003ccode\u003eIORef\u003c/code\u003e (such as\n\u003ccode\u003e\u003ca\u003enewIORef\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003emodifyIORef\u003c/a\u003e\u003c/code\u003e) are overloaded over the\n\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e class. A monad \u003ccode\u003em\u003c/code\u003e is declared an instance of\n\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e by defining a function\n\u003c/p\u003e\u003cpre\u003e liftIO :: IO a -\u003e m a\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.IORef.MonadIO",
          "name": "MonadIO",
          "package": "monadIO",
          "source": "src/Data-IORef-MonadIO.html",
          "type": "module"
        },
        "index": {
          "description": "Overloads the standard operations on IORefs as defined in Data.IORef This module is name-for-name swappable with Data.IORef unless ghc-specific operations like weak pointers are used The standard operations on IORef such as newIORef or modifyIORef are overloaded over the MonadIO class monad is declared an instance of MonadIO by defining function liftIO IO",
          "hierarchy": "Data IORef MonadIO",
          "module": "Data.IORef.MonadIO",
          "name": "MonadIO",
          "package": "monadIO",
          "partial": "Monad IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable variable in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
          "module": "Data.IORef.MonadIO",
          "name": "IORef",
          "package": "monadIO",
          "type": "data"
        },
        "index": {
          "description": "mutable variable in the IO monad",
          "hierarchy": "Data IORef MonadIO",
          "module": "Data.IORef.MonadIO",
          "name": "IORef",
          "package": "monadIO",
          "partial": "IORef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#t:IORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.IORef.MonadIO",
          "name": "MonadIO",
          "package": "monadIO",
          "type": "class"
        },
        "index": {
          "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
          "hierarchy": "Data IORef MonadIO",
          "module": "Data.IORef.MonadIO",
          "name": "MonadIO",
          "package": "monadIO",
          "partial": "Monad IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#t:MonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.MonadIO",
          "name": "atomicModifyIORef",
          "package": "monadIO",
          "signature": "IORef a -\u003e (a -\u003e (a, b)) -\u003e io b",
          "source": "src/Data-IORef-MonadIO.html#atomicModifyIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IORef MonadIO",
          "module": "Data.IORef.MonadIO",
          "name": "atomicModifyIORef",
          "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003ec b",
          "package": "monadIO",
          "partial": "Modify IORef",
          "signature": "IORef a-\u003e(a-\u003e(a,b))-\u003eio b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#v:atomicModifyIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.IORef.MonadIO",
          "name": "liftIO",
          "package": "monadIO",
          "signature": "IO a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Data IORef MonadIO",
          "module": "Data.IORef.MonadIO",
          "name": "liftIO",
          "normalized": "IO a-\u003eb a",
          "package": "monadIO",
          "partial": "IO",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.MonadIO",
          "name": "modifyIORef",
          "package": "monadIO",
          "signature": "IORef a -\u003e (a -\u003e a) -\u003e io ()",
          "source": "src/Data-IORef-MonadIO.html#modifyIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IORef MonadIO",
          "module": "Data.IORef.MonadIO",
          "name": "modifyIORef",
          "normalized": "IORef a-\u003e(a-\u003ea)-\u003eb()",
          "package": "monadIO",
          "partial": "IORef",
          "signature": "IORef a-\u003e(a-\u003ea)-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#v:modifyIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.MonadIO",
          "name": "newIORef",
          "package": "monadIO",
          "signature": "a -\u003e io (IORef a)",
          "source": "src/Data-IORef-MonadIO.html#newIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IORef MonadIO",
          "module": "Data.IORef.MonadIO",
          "name": "newIORef",
          "normalized": "a-\u003eb(IORef a)",
          "package": "monadIO",
          "partial": "IORef",
          "signature": "a-\u003eio(IORef a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#v:newIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.MonadIO",
          "name": "readIORef",
          "package": "monadIO",
          "signature": "IORef a -\u003e io a",
          "source": "src/Data-IORef-MonadIO.html#readIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IORef MonadIO",
          "module": "Data.IORef.MonadIO",
          "name": "readIORef",
          "normalized": "IORef a-\u003eb a",
          "package": "monadIO",
          "partial": "IORef",
          "signature": "IORef a-\u003eio a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#v:readIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.MonadIO",
          "name": "writeIORef",
          "package": "monadIO",
          "signature": "IORef a -\u003e a -\u003e io ()",
          "source": "src/Data-IORef-MonadIO.html#writeIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IORef MonadIO",
          "module": "Data.IORef.MonadIO",
          "name": "writeIORef",
          "normalized": "IORef a-\u003ea-\u003eb()",
          "package": "monadIO",
          "partial": "IORef",
          "signature": "IORef a-\u003ea-\u003eio()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadIO/docs/Data-IORef-MonadIO.html#v:writeIORef"
      }
    }
  ]
]