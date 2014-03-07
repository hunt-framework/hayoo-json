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
        "word": "stateref"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor",
          "name": "Accessor",
          "package": "stateref",
          "source": "src/Data-Accessor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Accessor",
          "module": "Data.Accessor",
          "name": "Accessor",
          "package": "stateref",
          "partial": "Accessor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-Accessor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor",
          "name": "Accessor",
          "package": "stateref",
          "source": "src/Data-Accessor.html#Accessor",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Accessor",
          "module": "Data.Accessor",
          "name": "Accessor",
          "package": "stateref",
          "partial": "Accessor",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-Accessor.html#t:Accessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor",
          "name": "Getter",
          "package": "stateref",
          "source": "src/Data-Accessor.html#Getter",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Accessor",
          "module": "Data.Accessor",
          "name": "Getter",
          "package": "stateref",
          "partial": "Getter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-Accessor.html#t:Getter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor",
          "name": "Setter",
          "package": "stateref",
          "source": "src/Data-Accessor.html#Setter",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Accessor",
          "module": "Data.Accessor",
          "name": "Setter",
          "package": "stateref",
          "partial": "Setter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-Accessor.html#t:Setter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor",
          "name": "Accessor",
          "package": "stateref",
          "signature": "Accessor (Getter m a, Setter m a)",
          "source": "src/Data-Accessor.html#Accessor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor",
          "module": "Data.Accessor",
          "name": "Accessor",
          "normalized": "Accessor(Getter a b,Setter a b)",
          "package": "stateref",
          "partial": "Accessor",
          "signature": "Accessor(Getter m a,Setter m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-Accessor.html#v:Accessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor",
          "name": "Getter",
          "package": "stateref",
          "signature": "Getter (m a)",
          "source": "src/Data-Accessor.html#Getter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor",
          "module": "Data.Accessor",
          "name": "Getter",
          "package": "stateref",
          "partial": "Getter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-Accessor.html#v:Getter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Accessor",
          "name": "Setter",
          "package": "stateref",
          "signature": "Setter (a -\u003e m ())",
          "source": "src/Data-Accessor.html#Setter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Accessor",
          "module": "Data.Accessor",
          "name": "Setter",
          "normalized": "Setter(a-\u003eb())",
          "package": "stateref",
          "partial": "Setter",
          "signature": "Setter(a-\u003em())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-Accessor.html#v:Setter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports no new symbols of its own.  It defines \n  basic class instances for creating, reading, and writing \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003es, and\n  re-exports \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MRef.Instances",
          "name": "Instances",
          "package": "stateref",
          "source": "src/Data-MRef-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports no new symbols of its own It defines basic class instances for creating reading and writing MVar and re-exports MVar",
          "hierarchy": "Data MRef Instances",
          "module": "Data.MRef.Instances",
          "name": "Instances",
          "package": "stateref",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e (pronounced \"em-var\") is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a a box, which may be empty or full.\n\u003c/p\u003e",
          "module": "Data.MRef.Instances",
          "name": "MVar",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "An MVar pronounced em-var is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
          "hierarchy": "Data MRef Instances",
          "module": "Data.MRef.Instances",
          "name": "MVar",
          "package": "stateref",
          "partial": "MVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Instances.html#t:MVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.MRef.Instances",
          "name": "MonadIO",
          "package": "stateref",
          "type": "class"
        },
        "index": {
          "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
          "hierarchy": "Data MRef Instances",
          "module": "Data.MRef.Instances",
          "name": "MonadIO",
          "package": "stateref",
          "partial": "Monad IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Instances.html#t:MonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad supporting atomic memory transactions.\n\u003c/p\u003e",
          "module": "Data.MRef.Instances",
          "name": "STM",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "monad supporting atomic memory transactions",
          "hierarchy": "Data MRef Instances",
          "module": "Data.MRef.Instances",
          "name": "STM",
          "package": "stateref",
          "partial": "STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Instances.html#t:STM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a box, which may be empty or full.\n\u003c/p\u003e",
          "module": "Data.MRef.Instances",
          "name": "TMVar",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "TMVar is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
          "hierarchy": "Data MRef Instances",
          "module": "Data.MRef.Instances",
          "name": "TMVar",
          "package": "stateref",
          "partial": "TMVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Instances.html#t:TMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShared memory locations that support atomic memory transactions.\n\u003c/p\u003e",
          "module": "Data.MRef.Instances",
          "name": "TVar",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "Shared memory locations that support atomic memory transactions",
          "hierarchy": "Data MRef Instances",
          "module": "Data.MRef.Instances",
          "name": "TVar",
          "package": "stateref",
          "partial": "TVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Instances.html#t:TVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a series of STM actions atomically.\n\u003c/p\u003e\u003cp\u003eYou cannot use \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside an \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e.\n Any attempt to do so will result in a runtime error.  (Reason: allowing\n this would effectively allow a transaction inside a transaction, depending\n on exactly when the thunk is evaluated.)\n\u003c/p\u003e\u003cp\u003eHowever, see \u003ccode\u003e\u003ca\u003enewTVarIO\u003c/a\u003e\u003c/code\u003e, which can be called inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e,\n and which allows top-level TVars to be allocated.\n\u003c/p\u003e",
          "module": "[\"Data.MRef.Instances\",\"Data.StateRef.Instances\"]",
          "name": "atomically",
          "package": "stateref",
          "signature": "STM a -\u003e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateref/docs/Data-MRef-Instances.html#v:atomically\",\"http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#v:atomically\"]"
        },
        "index": {
          "description": "Perform series of STM actions atomically You cannot use atomically inside an unsafePerformIO or unsafeInterleaveIO Any attempt to do so will result in runtime error Reason allowing this would effectively allow transaction inside transaction depending on exactly when the thunk is evaluated However see newTVarIO which can be called inside unsafePerformIO and which allows top-level TVars to be allocated",
          "hierarchy": "Data MRef Instances",
          "module": "Data.MRef.Instances",
          "name": "atomically",
          "normalized": "STM a-\u003eIO a",
          "package": "stateref",
          "signature": "STM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Instances.html#v:atomically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.MRef.Instances",
          "name": "liftIO",
          "package": "stateref",
          "signature": "IO a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Data MRef Instances",
          "module": "Data.MRef.Instances",
          "name": "liftIO",
          "normalized": "IO a-\u003eb a",
          "package": "stateref",
          "partial": "IO",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Instances.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \"MRef\" abstraction, which is a set of\n  type-classes for things that behave like \u003ccode\u003eControl.Concurrent.MVar.MVar\u003c/code\u003es.\n  See the documentation there for more info.  \n\u003c/p\u003e\u003cp\u003eThis interface may be subject to future expansion.  Presently, rather \n  than providing something like \u003ccode\u003eControl.Concurrent.MVar.tryTakeMVar\u003c/code\u003e,\n  instances for \"\u003ccode\u003eData.StateRef.Types.ReadRef\u003c/code\u003e sr m (\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a)\" are\n  provided, giving \u003ccode\u003eData.StateRef.Types.readReference\u003c/code\u003e the same type \n  tryTakeMRef would have if it existed.  There is currently nothing like\n  \u003ccode\u003eControl.Concurrent.MVar.tryPutMVar\u003c/code\u003e, though.  Perhaps there should be.\n  Or, perhaps this is the sort of thing the weird (to me) signature of\n  \u003ccode\u003eData.IORef.atomicModifyIORef\u003c/code\u003e is for, and an argument for a similar\n  signature for \u003ccode\u003eData.StateRef.Types.modifyStateRef\u003c/code\u003e or the addition of\n  a new atomicModifyStateRef function.\n\u003c/p\u003e\u003cp\u003eI would like to resolve these questions in version 0.3 of this package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MRef.Types",
          "name": "Types",
          "package": "stateref",
          "source": "src/Data-MRef-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the MRef abstraction which is set of type-classes for things that behave like Control.Concurrent.MVar.MVar See the documentation there for more info This interface may be subject to future expansion Presently rather than providing something like Control.Concurrent.MVar.tryTakeMVar instances for Data.StateRef.Types.ReadRef sr Maybe are provided giving Data.StateRef.Types.readReference the same type tryTakeMRef would have if it existed There is currently nothing like Control.Concurrent.MVar.tryPutMVar though Perhaps there should be Or perhaps this is the sort of thing the weird to me signature of Data.IORef.atomicModifyIORef is for and an argument for similar signature for Data.StateRef.Types.modifyStateRef or the addition of new atomicModifyStateRef function would like to resolve these questions in version of this package",
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "Types",
          "package": "stateref",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MRef.Types",
          "name": "HasMRef",
          "package": "stateref",
          "source": "src/Data-MRef-Types.html#HasMRef",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "HasMRef",
          "package": "stateref",
          "partial": "Has MRef",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#t:HasMRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MRef.Types",
          "name": "MRef",
          "package": "stateref",
          "source": "src/Data-MRef-Types.html#MRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "MRef",
          "package": "stateref",
          "partial": "MRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#t:MRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MRef.Types",
          "name": "NewMRef",
          "package": "stateref",
          "source": "src/Data-MRef-Types.html#NewMRef",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "NewMRef",
          "package": "stateref",
          "partial": "New MRef",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#t:NewMRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MRef.Types",
          "name": "PutMRef",
          "package": "stateref",
          "source": "src/Data-MRef-Types.html#PutMRef",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "PutMRef",
          "package": "stateref",
          "partial": "Put MRef",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#t:PutMRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MRef.Types",
          "name": "TakeMRef",
          "package": "stateref",
          "source": "src/Data-MRef-Types.html#TakeMRef",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "TakeMRef",
          "package": "stateref",
          "partial": "Take MRef",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#t:TakeMRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MRef.Types",
          "name": "MRef",
          "package": "stateref",
          "signature": "sr -\u003e MRef m a",
          "source": "src/Data-MRef-Types.html#MRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "MRef",
          "normalized": "a-\u003eMRef b c",
          "package": "stateref",
          "partial": "MRef",
          "signature": "sr-\u003eMRef m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#v:MRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MRef.Types",
          "name": "newEmptyMRef",
          "package": "stateref",
          "signature": "m (MRef m a)",
          "source": "src/Data-MRef-Types.html#newEmptyMRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "newEmptyMRef",
          "package": "stateref",
          "partial": "Empty MRef",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#v:newEmptyMRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eControl.Concurrent.MVar.newEmptyMVar\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.MRef.Types",
          "name": "newEmptyMReference",
          "package": "stateref",
          "signature": "m sr",
          "source": "src/Data-MRef-Types.html#newEmptyMReference",
          "type": "method"
        },
        "index": {
          "description": "See Control.Concurrent.MVar.newEmptyMVar",
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "newEmptyMReference",
          "package": "stateref",
          "partial": "Empty MReference",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#v:newEmptyMReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MRef.Types",
          "name": "newMRef",
          "package": "stateref",
          "signature": "a -\u003e m (MRef m a)",
          "source": "src/Data-MRef-Types.html#newMRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "newMRef",
          "normalized": "a-\u003eb(MRef b a)",
          "package": "stateref",
          "partial": "MRef",
          "signature": "a-\u003em(MRef m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#v:newMRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eControl.Concurrent.MVar.newMVar\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.MRef.Types",
          "name": "newMReference",
          "package": "stateref",
          "signature": "a -\u003e m sr",
          "source": "src/Data-MRef-Types.html#newMReference",
          "type": "method"
        },
        "index": {
          "description": "See Control.Concurrent.MVar.newMVar",
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "newMReference",
          "normalized": "a-\u003eb c",
          "package": "stateref",
          "partial": "MReference",
          "signature": "a-\u003em sr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#v:newMReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eControl.Concurrent.MVar.putMVar\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.MRef.Types",
          "name": "putMReference",
          "package": "stateref",
          "signature": "sr -\u003e a -\u003e m ()",
          "source": "src/Data-MRef-Types.html#putMReference",
          "type": "method"
        },
        "index": {
          "description": "See Control.Concurrent.MVar.putMVar",
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "putMReference",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "stateref",
          "partial": "MReference",
          "signature": "sr-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#v:putMReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eControl.Concurrent.MVar.takeMVar\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.MRef.Types",
          "name": "takeMReference",
          "package": "stateref",
          "signature": "sr -\u003e m a",
          "source": "src/Data-MRef-Types.html#takeMReference",
          "type": "method"
        },
        "index": {
          "description": "See Control.Concurrent.MVar.takeMVar",
          "hierarchy": "Data MRef Types",
          "module": "Data.MRef.Types",
          "name": "takeMReference",
          "normalized": "a-\u003eb c",
          "package": "stateref",
          "partial": "MReference",
          "signature": "sr-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef-Types.html#v:takeMReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MRef",
          "name": "MRef",
          "package": "stateref",
          "source": "src/Data-MRef.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data MRef",
          "module": "Data.MRef",
          "name": "MRef",
          "package": "stateref",
          "partial": "MRef",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eputMRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MRef",
          "name": "putMRef",
          "package": "stateref",
          "signature": "MRef m a -\u003e a -\u003e m ()",
          "source": "src/Data-MRef.html#putMRef",
          "type": "function"
        },
        "index": {
          "description": "See putMRef",
          "hierarchy": "Data MRef",
          "module": "Data.MRef",
          "name": "putMRef",
          "normalized": "MRef a b-\u003eb-\u003ea()",
          "package": "stateref",
          "partial": "MRef",
          "signature": "MRef m a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef.html#v:putMRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etakeMRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MRef",
          "name": "takeMRef",
          "package": "stateref",
          "signature": "MRef m a -\u003e m a",
          "source": "src/Data-MRef.html#takeMRef",
          "type": "function"
        },
        "index": {
          "description": "See takeMRef",
          "hierarchy": "Data MRef",
          "module": "Data.MRef",
          "name": "takeMRef",
          "normalized": "MRef a b-\u003ea b",
          "package": "stateref",
          "partial": "MRef",
          "signature": "MRef m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-MRef.html#v:takeMRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports no new symbols of its own.  It defines several \n  basic class instances for creating, reading, and writing standard\n  reference types, and re-exports the types for which it defines instances.\n\u003c/p\u003e\u003cp\u003eTODO: add millions of SPECIALIZE INSTANCE pragmas, for IO monad at\n  a minimum.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StateRef.Instances",
          "name": "Instances",
          "package": "stateref",
          "source": "src/Data-StateRef-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports no new symbols of its own It defines several basic class instances for creating reading and writing standard reference types and re-exports the types for which it defines instances TODO add millions of SPECIALIZE INSTANCE pragmas for IO monad at minimum",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "Instances",
          "package": "stateref",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e represents references to objects that are\n maintained in a foreign language, i.e., that are not part of the\n data structures usually managed by the Haskell storage manager.\n The essential difference between \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003es and vanilla memory\n references of type \u003ccode\u003ePtr a\u003c/code\u003e is that the former may be associated\n with \u003cem\u003efinalizers\u003c/em\u003e. A finalizer is a routine that is invoked when\n the Haskell storage manager detects that - within the Haskell heap\n and stack - there are no more references left that are pointing to\n the \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e.  Typically, the finalizer will, then, invoke\n routines in the foreign language that free the resources bound by\n the foreign object.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e is parameterised in the same way as \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e.  The\n type argument of \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e should normally be an instance of\n class \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StateRef.Instances",
          "name": "ForeignPtr",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "The type ForeignPtr represents references to objects that are maintained in foreign language i.e that are not part of the data structures usually managed by the Haskell storage manager The essential difference between ForeignPtr and vanilla memory references of type Ptr is that the former may be associated with finalizers finalizer is routine that is invoked when the Haskell storage manager detects that within the Haskell heap and stack there are no more references left that are pointing to the ForeignPtr Typically the finalizer will then invoke routines in the foreign language that free the resources bound by the foreign object The ForeignPtr is parameterised in the same way as Ptr The type argument of ForeignPtr should normally be an instance of class Storable",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "ForeignPtr",
          "package": "stateref",
          "partial": "Foreign Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#t:ForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable variable in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
          "module": "Data.StateRef.Instances",
          "name": "IORef",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "mutable variable in the IO monad",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "IORef",
          "package": "stateref",
          "partial": "IORef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#t:IORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e (pronounced \"em-var\") is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a a box, which may be empty or full.\n\u003c/p\u003e",
          "module": "Data.StateRef.Instances",
          "name": "MVar",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "An MVar pronounced em-var is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "MVar",
          "package": "stateref",
          "partial": "MVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#t:MVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.StateRef.Instances",
          "name": "MonadIO",
          "package": "stateref",
          "type": "class"
        },
        "index": {
          "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "MonadIO",
          "package": "stateref",
          "partial": "Monad IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#t:MonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eRealWorld\u003c/code\u003e is deeply magical.  It is \u003cem\u003eprimitive\u003c/em\u003e, but it is not\n \t\u003cem\u003eunlifted\u003c/em\u003e (hence \u003ccode\u003eptrArg\u003c/code\u003e).  We never manipulate values of type\n \t\u003ccode\u003eRealWorld\u003c/code\u003e; it's only used in the type system, to parameterise \u003ccode\u003eState#\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.StateRef.Instances",
          "name": "RealWorld",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "RealWorld is deeply magical It is primitive but it is not unlifted hence ptrArg We never manipulate values of type RealWorld it only used in the type system to parameterise State",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "RealWorld",
          "package": "stateref",
          "partial": "Real World",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#t:RealWorld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strict state-transformer monad.\n A computation of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e s a\u003c/code\u003e transforms an internal state indexed\n by \u003ccode\u003es\u003c/code\u003e, and returns a value of type \u003ccode\u003ea\u003c/code\u003e.\n The \u003ccode\u003es\u003c/code\u003e parameter is either\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e an uninstantiated type variable (inside invocations of \u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e), or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRealWorld\u003c/a\u003e\u003c/code\u003e (inside invocations of \u003ccode\u003eControl.Monad.ST.stToIO\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt serves to keep the internal states of different invocations\n of \u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e separate from each other and from invocations of\n \u003ccode\u003eControl.Monad.ST.stToIO\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e operations are strict in the state (though not in\n values stored in the state).  For example,\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e (writeSTRef _|_ v \u003e\u003e= f) = _|_\u003c/pre\u003e",
          "module": "Data.StateRef.Instances",
          "name": "ST",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "The strict state-transformer monad computation of type ST transforms an internal state indexed by and returns value of type The parameter is either an uninstantiated type variable inside invocations of runST or RealWorld inside invocations of Control.Monad.ST.stToIO It serves to keep the internal states of different invocations of runST separate from each other and from invocations of Control.Monad.ST.stToIO The and operations are strict in the state though not in values stored in the state For example runST writeSTRef",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "ST",
          "package": "stateref",
          "partial": "ST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#t:ST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad supporting atomic memory transactions.\n\u003c/p\u003e",
          "module": "Data.StateRef.Instances",
          "name": "STM",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "monad supporting atomic memory transactions",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "STM",
          "package": "stateref",
          "partial": "STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#t:STM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea value of type \u003ccode\u003eSTRef s a\u003c/code\u003e is a mutable variable in state thread \u003ccode\u003es\u003c/code\u003e,\n containing a value of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.StateRef.Instances",
          "name": "STRef",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "value of type STRef is mutable variable in state thread containing value of type",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "STRef",
          "package": "stateref",
          "partial": "STRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#t:STRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a box, which may be empty or full.\n\u003c/p\u003e",
          "module": "Data.StateRef.Instances",
          "name": "TMVar",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "TMVar is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "TMVar",
          "package": "stateref",
          "partial": "TMVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#t:TMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShared memory locations that support atomic memory transactions.\n\u003c/p\u003e",
          "module": "Data.StateRef.Instances",
          "name": "TVar",
          "package": "stateref",
          "type": "data"
        },
        "index": {
          "description": "Shared memory locations that support atomic memory transactions",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "TVar",
          "package": "stateref",
          "partial": "TVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#t:TVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a state reference that supports reading and writing, and add a\n potentially thread-unsafe \u003ccode\u003e\u003ca\u003eModifyRef\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Data.StateRef.Instances",
          "name": "UnsafeModifyRef",
          "package": "stateref",
          "source": "src/Data-StateRef-Instances-Undecidable.html#UnsafeModifyRef",
          "type": "newtype"
        },
        "index": {
          "description": "Wrap state reference that supports reading and writing and add potentially thread-unsafe ModifyRef instance",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "UnsafeModifyRef",
          "package": "stateref",
          "partial": "Unsafe Modify Ref",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#t:UnsafeModifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StateRef.Instances",
          "name": "UnsafeModifyRef",
          "package": "stateref",
          "signature": "UnsafeModifyRef sr",
          "source": "src/Data-StateRef-Instances-Undecidable.html#UnsafeModifyRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "UnsafeModifyRef",
          "package": "stateref",
          "partial": "Unsafe Modify Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#v:UnsafeModifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.StateRef.Instances",
          "name": "liftIO",
          "package": "stateref",
          "signature": "IO a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Data StateRef Instances",
          "module": "Data.StateRef.Instances",
          "name": "liftIO",
          "normalized": "IO a-\u003eb a",
          "package": "stateref",
          "partial": "IO",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Instances.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StateRef.Types",
          "name": "Types",
          "package": "stateref",
          "source": "src/Data-StateRef-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "Types",
          "package": "stateref",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StateRef.Types",
          "name": "HasRef",
          "package": "stateref",
          "source": "src/Data-StateRef-Types.html#HasRef",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "HasRef",
          "package": "stateref",
          "partial": "Has Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#t:HasRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StateRef.Types",
          "name": "ModifyRef",
          "package": "stateref",
          "source": "src/Data-StateRef-Types.html#ModifyRef",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "ModifyRef",
          "package": "stateref",
          "partial": "Modify Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#t:ModifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation of atomicModifyReference in terms of readReference and writeReference\n\u003c/p\u003e\u003cp\u003eDefault implementation of modifyReference in terms of readReference and writeReference\n\u003c/p\u003e",
          "module": "Data.StateRef.Types",
          "name": "NewRef",
          "package": "stateref",
          "source": "src/Data-StateRef-Types.html#NewRef",
          "type": "class"
        },
        "index": {
          "description": "Default implementation of atomicModifyReference in terms of readReference and writeReference Default implementation of modifyReference in terms of readReference and writeReference",
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "NewRef",
          "package": "stateref",
          "partial": "New Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#t:NewRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StateRef.Types",
          "name": "ReadRef",
          "package": "stateref",
          "source": "src/Data-StateRef-Types.html#ReadRef",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "ReadRef",
          "package": "stateref",
          "partial": "Read Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#t:ReadRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple reference type, hiding the complexity of all these type classes,\n since most of the time the only thing you care about is that you want a reference.\n The full complexity is still there, though, so FFI types or other reference-like\n things can still be made into \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.StateRef.Types",
          "name": "Ref",
          "package": "stateref",
          "source": "src/Data-StateRef-Types.html#Ref",
          "type": "data"
        },
        "index": {
          "description": "simple reference type hiding the complexity of all these type classes since most of the time the only thing you care about is that you want reference The full complexity is still there though so FFI types or other reference-like things can still be made into Ref",
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "Ref",
          "package": "stateref",
          "partial": "Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StateRef.Types",
          "name": "WriteRef",
          "package": "stateref",
          "source": "src/Data-StateRef-Types.html#WriteRef",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "WriteRef",
          "package": "stateref",
          "partial": "Write Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#t:WriteRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StateRef.Types",
          "name": "Ref",
          "package": "stateref",
          "signature": "sr -\u003e Ref m a",
          "source": "src/Data-StateRef-Types.html#Ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "Ref",
          "normalized": "a-\u003eRef b c",
          "package": "stateref",
          "partial": "Ref",
          "signature": "sr-\u003eRef m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#v:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically modify the contents of a reference.  This is\n implemented in a separate class (rather than a function with\n context (ReadRef sr m a, WriteRef sr m a)) because in most\n cases the default implementation cannot act atomically.\n\u003c/p\u003e",
          "module": "Data.StateRef.Types",
          "name": "atomicModifyReference",
          "package": "stateref",
          "signature": "sr -\u003e (a -\u003e (a, b)) -\u003e m b",
          "source": "src/Data-StateRef-Types.html#atomicModifyReference",
          "type": "method"
        },
        "index": {
          "description": "Atomically modify the contents of reference This is implemented in separate class rather than function with context ReadRef sr WriteRef sr because in most cases the default implementation cannot act atomically",
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "atomicModifyReference",
          "normalized": "a-\u003e(b-\u003e(b,c))-\u003ed c",
          "package": "stateref",
          "partial": "Modify Reference",
          "signature": "sr-\u003e(a-\u003e(a,b))-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#v:atomicModifyReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame thing, but don't thread out the extra return.  Could perhaps\n be implemented slightly more efficiently than \u003ccode\u003e\u003ca\u003eatomicModifyReference\u003c/a\u003e\u003c/code\u003e in many cases.\n Note that implementations are expected to be atomic, if at all possible,\n but not strictly required to be.\n\u003c/p\u003e",
          "module": "Data.StateRef.Types",
          "name": "modifyReference",
          "package": "stateref",
          "signature": "sr -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-StateRef-Types.html#modifyReference",
          "type": "method"
        },
        "index": {
          "description": "Same thing but don thread out the extra return Could perhaps be implemented slightly more efficiently than atomicModifyReference in many cases Note that implementations are expected to be atomic if at all possible but not strictly required to be",
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "modifyReference",
          "normalized": "a-\u003e(b-\u003eb)-\u003ec()",
          "package": "stateref",
          "partial": "Reference",
          "signature": "sr-\u003e(a-\u003ea)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#v:modifyReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new mutable reference (of an unspecified implementation type) containing the provided value.\n\u003c/p\u003e",
          "module": "Data.StateRef.Types",
          "name": "newRef",
          "package": "stateref",
          "signature": "a -\u003e m (Ref m a)",
          "source": "src/Data-StateRef-Types.html#newRef",
          "type": "method"
        },
        "index": {
          "description": "Construct new mutable reference of an unspecified implementation type containing the provided value",
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "newRef",
          "normalized": "a-\u003eb(Ref b a)",
          "package": "stateref",
          "partial": "Ref",
          "signature": "a-\u003em(Ref m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new reference to the provided value.\n\u003c/p\u003e",
          "module": "Data.StateRef.Types",
          "name": "newReference",
          "package": "stateref",
          "signature": "a -\u003e m sr",
          "source": "src/Data-StateRef-Types.html#newReference",
          "type": "method"
        },
        "index": {
          "description": "Construct new reference to the provided value",
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "newReference",
          "normalized": "a-\u003eb c",
          "package": "stateref",
          "partial": "Reference",
          "signature": "a-\u003em sr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#v:newReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current value referenced by the given state reference.\n\u003c/p\u003e",
          "module": "Data.StateRef.Types",
          "name": "readReference",
          "package": "stateref",
          "signature": "sr -\u003e m a",
          "source": "src/Data-StateRef-Types.html#readReference",
          "type": "method"
        },
        "index": {
          "description": "Get the current value referenced by the given state reference",
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "readReference",
          "normalized": "a-\u003eb c",
          "package": "stateref",
          "partial": "Reference",
          "signature": "sr-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#v:readReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the existing value of the given reference with the provided value.\n\u003c/p\u003e",
          "module": "Data.StateRef.Types",
          "name": "writeReference",
          "package": "stateref",
          "signature": "sr -\u003e a -\u003e m ()",
          "source": "src/Data-StateRef-Types.html#writeReference",
          "type": "method"
        },
        "index": {
          "description": "Replace the existing value of the given reference with the provided value",
          "hierarchy": "Data StateRef Types",
          "module": "Data.StateRef.Types",
          "name": "writeReference",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "stateref",
          "partial": "Reference",
          "signature": "sr-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef-Types.html#v:writeReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides classes and instances for mutable state\n references.  Various implementation exist in common usage, but\n no way (until now ;-) to define functions using state references\n which don't depend on the specific monad or reference type in use.\n\u003c/p\u003e\u003cp\u003eThese modules use several language extensions, including multi-parameter\n type classes and functional dependencies.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StateRef",
          "name": "StateRef",
          "package": "stateref",
          "source": "src/Data-StateRef.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides classes and instances for mutable state references Various implementation exist in common usage but no way until now to define functions using state references which don depend on the specific monad or reference type in use These modules use several language extensions including multi-parameter type classes and functional dependencies",
          "hierarchy": "Data StateRef",
          "module": "Data.StateRef",
          "name": "StateRef",
          "package": "stateref",
          "partial": "State Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003emodifyReference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StateRef",
          "name": "atomicModifyRef",
          "package": "stateref",
          "signature": "Ref m a -\u003e (a -\u003e (a, b)) -\u003e m b",
          "source": "src/Data-StateRef.html#atomicModifyRef",
          "type": "function"
        },
        "index": {
          "description": "Modify Ref See modifyReference",
          "hierarchy": "Data StateRef",
          "module": "Data.StateRef",
          "name": "atomicModifyRef",
          "normalized": "Ref a b-\u003e(b-\u003e(b,c))-\u003ea c",
          "package": "stateref",
          "partial": "Modify Ref",
          "signature": "Ref m a-\u003e(a-\u003e(a,b))-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef.html#v:atomicModifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \"lapse reader\" (suggestions for better terminology are more \n than welcome), a sort of a time-lapse of the variable.  The first \n motivating instance for this operation was a clock in a simple simulation\n application.  Given a \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e called \"clock\", a useful\n value \"dT\" is yielded by the expression: \u003ccode\u003e\u003ca\u003emkLapseReader\u003c/a\u003e\u003c/code\u003e clock (-)\n\u003c/p\u003e",
          "module": "Data.StateRef",
          "name": "mkLapseReader",
          "package": "stateref",
          "signature": "sr -\u003e (a -\u003e a -\u003e b) -\u003e m (m b)",
          "source": "src/Data-StateRef.html#mkLapseReader",
          "type": "function"
        },
        "index": {
          "description": "Create lapse reader suggestions for better terminology are more than welcome sort of time-lapse of the variable The first motivating instance for this operation was clock in simple simulation application Given TVar Double called clock useful value dT is yielded by the expression mkLapseReader clock",
          "hierarchy": "Data StateRef",
          "module": "Data.StateRef",
          "name": "mkLapseReader",
          "normalized": "a-\u003e(b-\u003eb-\u003ec)-\u003ed(d c)",
          "package": "stateref",
          "partial": "Lapse Reader",
          "signature": "sr-\u003e(a-\u003ea-\u003eb)-\u003em(m b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef.html#v:mkLapseReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003emodifyReference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StateRef",
          "name": "modifyRef",
          "package": "stateref",
          "signature": "Ref m a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-StateRef.html#modifyRef",
          "type": "function"
        },
        "index": {
          "description": "Modify Ref See modifyReference",
          "hierarchy": "Data StateRef",
          "module": "Data.StateRef",
          "name": "modifyRef",
          "normalized": "Ref a b-\u003e(b-\u003eb)-\u003ea()",
          "package": "stateref",
          "partial": "Ref",
          "signature": "Ref m a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef.html#v:modifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a counter - a monadic value which, each time it is\n evaluated, returns the \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e of the previous value returned.\n\u003c/p\u003e",
          "module": "Data.StateRef",
          "name": "newCounter",
          "package": "stateref",
          "signature": "a -\u003e m (m a)",
          "source": "src/Data-StateRef.html#newCounter",
          "type": "function"
        },
        "index": {
          "description": "Construct counter monadic value which each time it is evaluated returns the succ of the previous value returned",
          "hierarchy": "Data StateRef",
          "module": "Data.StateRef",
          "name": "newCounter",
          "normalized": "a-\u003eb(b a)",
          "package": "stateref",
          "partial": "Counter",
          "signature": "a-\u003em(m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef.html#v:newCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003ereadReference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StateRef",
          "name": "readRef",
          "package": "stateref",
          "signature": "Ref m a -\u003e m a",
          "source": "src/Data-StateRef.html#readRef",
          "type": "function"
        },
        "index": {
          "description": "Read Ref See readReference",
          "hierarchy": "Data StateRef",
          "module": "Data.StateRef",
          "name": "readRef",
          "normalized": "Ref a b-\u003ea b",
          "package": "stateref",
          "partial": "Ref",
          "signature": "Ref m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef.html#v:readRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEssentially the same concept as \u003ccode\u003eControl.Monad.State.gets\u003c/code\u003e,\n \u003ccode\u003eControl.Monad.State.asks\u003c/code\u003e, et al. Typically useful to read a field of\n a referenced ADT by passing a record selector as the second argument.\n\u003c/p\u003e",
          "module": "Data.StateRef",
          "name": "readsRef",
          "package": "stateref",
          "signature": "sr -\u003e (a -\u003e b) -\u003e m b",
          "source": "src/Data-StateRef.html#readsRef",
          "type": "function"
        },
        "index": {
          "description": "Essentially the same concept as Control.Monad.State.gets Control.Monad.State.asks et al Typically useful to read field of referenced ADT by passing record selector as the second argument",
          "hierarchy": "Data StateRef",
          "module": "Data.StateRef",
          "name": "readsRef",
          "normalized": "a-\u003e(b-\u003ec)-\u003ed c",
          "package": "stateref",
          "partial": "Ref",
          "signature": "sr-\u003e(a-\u003eb)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef.html#v:readsRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003ewriteReference\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.StateRef",
          "name": "writeRef",
          "package": "stateref",
          "signature": "Ref m a -\u003e a -\u003e m ()",
          "source": "src/Data-StateRef.html#writeRef",
          "type": "function"
        },
        "index": {
          "description": "Write Ref See writeReference",
          "hierarchy": "Data StateRef",
          "module": "Data.StateRef",
          "name": "writeRef",
          "normalized": "Ref a b-\u003eb-\u003ea()",
          "package": "stateref",
          "partial": "Ref",
          "signature": "Ref m a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateref/docs/Data-StateRef.html#v:writeRef"
      }
    }
  ]
]