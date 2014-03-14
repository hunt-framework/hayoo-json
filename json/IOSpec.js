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
        "word": "IOSpec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure specification of \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.IOSpec.Fork",
          "name": "Fork",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Fork.html",
          "type": "module"
        },
        "index": {
          "description": "pure specification of forkIO",
          "hierarchy": "Test IOSpec Fork",
          "module": "Test.IOSpec.Fork",
          "name": "Fork",
          "package": "IOSpec",
          "partial": "Fork",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Fork.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn expression of type \u003ccode\u003eIOSpec ForkS a\u003c/code\u003e corresponds to an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n computation that uses \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e and returns a value of\n type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBy itself, \u003ccode\u003e\u003ca\u003eForkS\u003c/a\u003e\u003c/code\u003e is not terribly useful. You will probably want\n to use \u003ccode\u003eIOSpec (ForkS :+: MVarS)\u003c/code\u003e or \u003ccode\u003eIOSpec (ForkS :+: STMS)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.IOSpec.Fork",
          "name": "ForkS",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Fork.html#ForkS",
          "type": "data"
        },
        "index": {
          "description": "An expression of type IOSpec ForkS corresponds to an IO computation that uses forkIO and returns value of type By itself ForkS is not terribly useful You will probably want to use IOSpec ForkS MVarS or IOSpec ForkS STMS",
          "hierarchy": "Test IOSpec Fork",
          "module": "Test.IOSpec.Fork",
          "name": "ForkS",
          "package": "IOSpec",
          "partial": "Fork",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Fork.html#t:ForkS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e function forks off a new thread.\n\u003c/p\u003e",
          "module": "Test.IOSpec.Fork",
          "name": "forkIO",
          "package": "IOSpec",
          "signature": "IOSpec f a -\u003e IOSpec g ThreadId",
          "source": "src/Test-IOSpec-Fork.html#forkIO",
          "type": "function"
        },
        "index": {
          "description": "The forkIO function forks off new thread",
          "hierarchy": "Test IOSpec Fork",
          "module": "Test.IOSpec.Fork",
          "name": "forkIO",
          "normalized": "IOSpec a b-\u003eIOSpec c ThreadId",
          "package": "IOSpec",
          "partial": "IO",
          "signature": "IOSpec f a-\u003eIOSpec g ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Fork.html#v:forkIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure specification of mutable variables.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.IOSpec.IORef",
          "name": "IORef",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-IORef.html",
          "type": "module"
        },
        "index": {
          "description": "pure specification of mutable variables",
          "hierarchy": "Test IOSpec IORef",
          "module": "Test.IOSpec.IORef",
          "name": "IORef",
          "package": "IOSpec",
          "partial": "IORef",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable variable storing a value of type a. Note that the\n types stored by an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e are assumed to be \u003ccode\u003eTypeable\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.IOSpec.IORef",
          "name": "IORef",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-IORef.html#IORef",
          "type": "data"
        },
        "index": {
          "description": "mutable variable storing value of type Note that the types stored by an IORef are assumed to be Typeable",
          "hierarchy": "Test IOSpec IORef",
          "module": "Test.IOSpec.IORef",
          "name": "IORef",
          "package": "IOSpec",
          "partial": "IORef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#t:IORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn expression of type \u003ccode\u003eIOSpec IORefS a\u003c/code\u003e corresponds to an \u003ccode\u003eIO\u003c/code\u003e\n computation that uses mutable references and returns a value of\n type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.IOSpec.IORef",
          "name": "IORefS",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-IORef.html#IORefS",
          "type": "data"
        },
        "index": {
          "description": "An expression of type IOSpec IORefS corresponds to an IO computation that uses mutable references and returns value of type",
          "hierarchy": "Test IOSpec IORef",
          "module": "Test.IOSpec.IORef",
          "name": "IORefS",
          "package": "IOSpec",
          "partial": "IORef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#t:IORefS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emodifyIORef\u003c/a\u003e\u003c/code\u003e function applies a function to the value stored in\n and \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.IOSpec.IORef",
          "name": "modifyIORef",
          "package": "IOSpec",
          "signature": "IORef a -\u003e (a -\u003e a) -\u003e IOSpec f ()",
          "source": "src/Test-IOSpec-IORef.html#modifyIORef",
          "type": "function"
        },
        "index": {
          "description": "The modifyIORef function applies function to the value stored in and IORef",
          "hierarchy": "Test IOSpec IORef",
          "module": "Test.IOSpec.IORef",
          "name": "modifyIORef",
          "normalized": "IORef a-\u003e(a-\u003ea)-\u003eIOSpec b()",
          "package": "IOSpec",
          "partial": "IORef",
          "signature": "IORef a-\u003e(a-\u003ea)-\u003eIOSpec f()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#v:modifyIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enewIORef\u003c/a\u003e\u003c/code\u003e function creates a new mutable variable.\n\u003c/p\u003e",
          "module": "Test.IOSpec.IORef",
          "name": "newIORef",
          "package": "IOSpec",
          "signature": "a -\u003e IOSpec f (IORef a)",
          "source": "src/Test-IOSpec-IORef.html#newIORef",
          "type": "function"
        },
        "index": {
          "description": "The newIORef function creates new mutable variable",
          "hierarchy": "Test IOSpec IORef",
          "module": "Test.IOSpec.IORef",
          "name": "newIORef",
          "normalized": "a-\u003eIOSpec b(IORef a)",
          "package": "IOSpec",
          "partial": "IORef",
          "signature": "a-\u003eIOSpec f(IORef a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#v:newIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadIORef\u003c/a\u003e\u003c/code\u003e function reads the value stored in a mutable variable.\n\u003c/p\u003e",
          "module": "Test.IOSpec.IORef",
          "name": "readIORef",
          "package": "IOSpec",
          "signature": "IORef a -\u003e IOSpec f a",
          "source": "src/Test-IOSpec-IORef.html#readIORef",
          "type": "function"
        },
        "index": {
          "description": "The readIORef function reads the value stored in mutable variable",
          "hierarchy": "Test IOSpec IORef",
          "module": "Test.IOSpec.IORef",
          "name": "readIORef",
          "normalized": "IORef a-\u003eIOSpec b a",
          "package": "IOSpec",
          "partial": "IORef",
          "signature": "IORef a-\u003eIOSpec f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#v:readIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewriteIORef\u003c/a\u003e\u003c/code\u003e function overwrites the value stored in a\n mutable variable.\n\u003c/p\u003e",
          "module": "Test.IOSpec.IORef",
          "name": "writeIORef",
          "package": "IOSpec",
          "signature": "IORef a -\u003e a -\u003e IOSpec f ()",
          "source": "src/Test-IOSpec-IORef.html#writeIORef",
          "type": "function"
        },
        "index": {
          "description": "The writeIORef function overwrites the value stored in mutable variable",
          "hierarchy": "Test IOSpec IORef",
          "module": "Test.IOSpec.IORef",
          "name": "writeIORef",
          "normalized": "IORef a-\u003ea-\u003eIOSpec b()",
          "package": "IOSpec",
          "partial": "IORef",
          "signature": "IORef a-\u003ea-\u003eIOSpec f()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#v:writeIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure specification of basic operations on MVars.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.IOSpec.MVar",
          "name": "MVar",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-MVar.html",
          "type": "module"
        },
        "index": {
          "description": "pure specification of basic operations on MVars",
          "hierarchy": "Test IOSpec MVar",
          "module": "Test.IOSpec.MVar",
          "name": "MVar",
          "package": "IOSpec",
          "partial": "MVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-MVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is a shared, mutable variable.\n\u003c/p\u003e",
          "module": "Test.IOSpec.MVar",
          "name": "MVar",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-MVar.html#MVar",
          "type": "data"
        },
        "index": {
          "description": "An MVar is shared mutable variable",
          "hierarchy": "Test IOSpec MVar",
          "module": "Test.IOSpec.MVar",
          "name": "MVar",
          "package": "IOSpec",
          "partial": "MVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-MVar.html#t:MVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn expression of type \u003ccode\u003eIOSpec MVarS a\u003c/code\u003e corresponds to an \u003ccode\u003eIO\u003c/code\u003e\n computation that uses shared, mutable variables and returns a\n value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBy itself, \u003ccode\u003e\u003ca\u003eMVarS\u003c/a\u003e\u003c/code\u003e is not terribly useful. You will probably want\n to use \u003ccode\u003eIOSpec (ForkS :+: MVarS)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.IOSpec.MVar",
          "name": "MVarS",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-MVar.html#MVarS",
          "type": "data"
        },
        "index": {
          "description": "An expression of type IOSpec MVarS corresponds to an IO computation that uses shared mutable variables and returns value of type By itself MVarS is not terribly useful You will probably want to use IOSpec ForkS MVarS",
          "hierarchy": "Test IOSpec MVar",
          "module": "Test.IOSpec.MVar",
          "name": "MVarS",
          "package": "IOSpec",
          "partial": "MVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-MVar.html#t:MVarS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enewEmptyMVar\u003c/a\u003e\u003c/code\u003e function creates a new \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e that is initially empty.\n\u003c/p\u003e",
          "module": "Test.IOSpec.MVar",
          "name": "newEmptyMVar",
          "package": "IOSpec",
          "signature": "IOSpec f (MVar a)",
          "source": "src/Test-IOSpec-MVar.html#newEmptyMVar",
          "type": "function"
        },
        "index": {
          "description": "The newEmptyMVar function creates new MVar that is initially empty",
          "hierarchy": "Test IOSpec MVar",
          "module": "Test.IOSpec.MVar",
          "name": "newEmptyMVar",
          "package": "IOSpec",
          "partial": "Empty MVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-MVar.html#v:newEmptyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e function fills an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e with a new value. If the\n \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is not empty, the thread is blocked.\n\u003c/p\u003e",
          "module": "Test.IOSpec.MVar",
          "name": "putMVar",
          "package": "IOSpec",
          "signature": "MVar a -\u003e a -\u003e IOSpec f ()",
          "source": "src/Test-IOSpec-MVar.html#putMVar",
          "type": "function"
        },
        "index": {
          "description": "The putMVar function fills an MVar with new value If the MVar is not empty the thread is blocked",
          "hierarchy": "Test IOSpec MVar",
          "module": "Test.IOSpec.MVar",
          "name": "putMVar",
          "normalized": "MVar a-\u003ea-\u003eIOSpec b()",
          "package": "IOSpec",
          "partial": "MVar",
          "signature": "MVar a-\u003ea-\u003eIOSpec f()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-MVar.html#v:putMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e function removes the value stored in an\n \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e. If the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is empty, the thread is blocked.\n\u003c/p\u003e",
          "module": "Test.IOSpec.MVar",
          "name": "takeMVar",
          "package": "IOSpec",
          "signature": "MVar a -\u003e IOSpec f a",
          "source": "src/Test-IOSpec-MVar.html#takeMVar",
          "type": "function"
        },
        "index": {
          "description": "The takeMVar function removes the value stored in an MVar If the MVar is empty the thread is blocked",
          "hierarchy": "Test IOSpec MVar",
          "module": "Test.IOSpec.MVar",
          "name": "takeMVar",
          "normalized": "MVar a-\u003eIOSpec b a",
          "package": "IOSpec",
          "partial": "MVar",
          "signature": "MVar a-\u003eIOSpec f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-MVar.html#v:takeMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.STM",
          "name": "STM",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-STM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test IOSpec STM",
          "module": "Test.IOSpec.STM",
          "name": "STM",
          "package": "IOSpec",
          "partial": "STM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.STM",
          "name": "STM",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-STM.html#STM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test IOSpec STM",
          "module": "Test.IOSpec.STM",
          "name": "STM",
          "package": "IOSpec",
          "partial": "STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#t:STM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn expression of type \u003ccode\u003eIOSpec \u003ccode\u003e\u003ca\u003eSTMS\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e corresponds to an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n computation that may use \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e and returns a value of type\n \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBy itself, \u003ccode\u003e\u003ca\u003eSTMS\u003c/a\u003e\u003c/code\u003e is not terribly useful. You will probably want\n to use \u003ccode\u003eIOSpec (ForkS :+: STMS)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.IOSpec.STM",
          "name": "STMS",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-STM.html#STMS",
          "type": "data"
        },
        "index": {
          "description": "An expression of type IOSpec STMS corresponds to an IO computation that may use atomically and returns value of type By itself STMS is not terribly useful You will probably want to use IOSpec ForkS STMS",
          "hierarchy": "Test IOSpec STM",
          "module": "Test.IOSpec.STM",
          "name": "STMS",
          "package": "IOSpec",
          "partial": "STMS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#t:STMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e is a shared, mutable variable used by STM.\n\u003c/p\u003e",
          "module": "Test.IOSpec.STM",
          "name": "TVar",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-STM.html#TVar",
          "type": "data"
        },
        "index": {
          "description": "TVar is shared mutable variable used by STM",
          "hierarchy": "Test IOSpec STM",
          "module": "Test.IOSpec.STM",
          "name": "TVar",
          "package": "IOSpec",
          "partial": "TVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#t:TVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e function atomically executes an \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Test.IOSpec.STM",
          "name": "atomically",
          "package": "IOSpec",
          "signature": "STM a -\u003e IOSpec f a",
          "source": "src/Test-IOSpec-STM.html#atomically",
          "type": "function"
        },
        "index": {
          "description": "The atomically function atomically executes an STM action",
          "hierarchy": "Test IOSpec STM",
          "module": "Test.IOSpec.STM",
          "name": "atomically",
          "normalized": "STM a-\u003eIOSpec b a",
          "package": "IOSpec",
          "signature": "STM a-\u003eIOSpec f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:atomically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e function checks if its boolean argument holds. If\n the boolean is true, it returns (); otherwise it calls \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.IOSpec.STM",
          "name": "check",
          "package": "IOSpec",
          "signature": "Bool -\u003e STM ()",
          "source": "src/Test-IOSpec-STM.html#check",
          "type": "function"
        },
        "index": {
          "description": "The check function checks if its boolean argument holds If the boolean is true it returns otherwise it calls retry",
          "hierarchy": "Test IOSpec STM",
          "module": "Test.IOSpec.STM",
          "name": "check",
          "normalized": "Bool-\u003eSTM()",
          "package": "IOSpec",
          "signature": "Bool-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enewTVar\u003c/a\u003e\u003c/code\u003e function creates a new transactional variable.\n\u003c/p\u003e",
          "module": "Test.IOSpec.STM",
          "name": "newTVar",
          "package": "IOSpec",
          "signature": "a -\u003e STM (TVar a)",
          "source": "src/Test-IOSpec-STM.html#newTVar",
          "type": "function"
        },
        "index": {
          "description": "The newTVar function creates new transactional variable",
          "hierarchy": "Test IOSpec STM",
          "module": "Test.IOSpec.STM",
          "name": "newTVar",
          "normalized": "a-\u003eSTM(TVar a)",
          "package": "IOSpec",
          "partial": "TVar",
          "signature": "a-\u003eSTM(TVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:newTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eorElse\u003c/a\u003e\u003c/code\u003e function takes two \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e actions \u003ccode\u003estm1\u003c/code\u003e and \u003ccode\u003estm2\u003c/code\u003e and\n performs \u003ccode\u003estm1\u003c/code\u003e. If \u003ccode\u003estm1\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e it performs \u003ccode\u003estm2\u003c/code\u003e. If \u003ccode\u003estm1\u003c/code\u003e\n succeeds, on the other hand, \u003ccode\u003estm2\u003c/code\u003e is not executed.\n\u003c/p\u003e",
          "module": "Test.IOSpec.STM",
          "name": "orElse",
          "package": "IOSpec",
          "signature": "STM a -\u003e STM a -\u003e STM a",
          "source": "src/Test-IOSpec-STM.html#orElse",
          "type": "function"
        },
        "index": {
          "description": "The orElse function takes two STM actions stm1 and stm2 and performs stm1 If stm1 calls retry it performs stm2 If stm1 succeeds on the other hand stm2 is not executed",
          "hierarchy": "Test IOSpec STM",
          "module": "Test.IOSpec.STM",
          "name": "orElse",
          "normalized": "STM a-\u003eSTM a-\u003eSTM a",
          "package": "IOSpec",
          "partial": "Else",
          "signature": "STM a-\u003eSTM a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadTVar\u003c/a\u003e\u003c/code\u003e function reads the value stored in a\n transactional variable.\n\u003c/p\u003e",
          "module": "Test.IOSpec.STM",
          "name": "readTVar",
          "package": "IOSpec",
          "signature": "TVar a -\u003e STM a",
          "source": "src/Test-IOSpec-STM.html#readTVar",
          "type": "function"
        },
        "index": {
          "description": "The readTVar function reads the value stored in transactional variable",
          "hierarchy": "Test IOSpec STM",
          "module": "Test.IOSpec.STM",
          "name": "readTVar",
          "normalized": "TVar a-\u003eSTM a",
          "package": "IOSpec",
          "partial": "TVar",
          "signature": "TVar a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:readTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e function abandons a transaction and retries at some\n later time.\n\u003c/p\u003e",
          "module": "Test.IOSpec.STM",
          "name": "retry",
          "package": "IOSpec",
          "signature": "STM a",
          "source": "src/Test-IOSpec-STM.html#retry",
          "type": "function"
        },
        "index": {
          "description": "The retry function abandons transaction and retries at some later time",
          "hierarchy": "Test IOSpec STM",
          "module": "Test.IOSpec.STM",
          "name": "retry",
          "package": "IOSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewriteTVar\u003c/a\u003e\u003c/code\u003e function overwrites the value stored in a\n transactional variable.\n\u003c/p\u003e",
          "module": "Test.IOSpec.STM",
          "name": "writeTVar",
          "package": "IOSpec",
          "signature": "TVar a -\u003e a -\u003e STM ()",
          "source": "src/Test-IOSpec-STM.html#writeTVar",
          "type": "function"
        },
        "index": {
          "description": "The writeTVar function overwrites the value stored in transactional variable",
          "hierarchy": "Test IOSpec STM",
          "module": "Test.IOSpec.STM",
          "name": "writeTVar",
          "normalized": "TVar a-\u003ea-\u003eSTM()",
          "package": "IOSpec",
          "partial": "TVar",
          "signature": "TVar a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:writeTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a few type signatures to help replace pure\n specifications by their effectful counterparts.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.IOSpec.Surrogate",
          "name": "Surrogate",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Surrogate.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains few type signatures to help replace pure specifications by their effectful counterparts",
          "hierarchy": "Test IOSpec Surrogate",
          "module": "Test.IOSpec.Surrogate",
          "name": "Surrogate",
          "package": "IOSpec",
          "partial": "Surrogate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Surrogate",
          "name": ":+:",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Surrogate.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test IOSpec Surrogate",
          "module": "Test.IOSpec.Surrogate",
          "name": ":+:",
          "package": "IOSpec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Surrogate",
          "name": "ForkS",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Surrogate.html#ForkS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test IOSpec Surrogate",
          "module": "Test.IOSpec.Surrogate",
          "name": "ForkS",
          "package": "IOSpec",
          "partial": "Fork",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t:ForkS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Surrogate",
          "name": "IORefS",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Surrogate.html#IORefS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test IOSpec Surrogate",
          "module": "Test.IOSpec.Surrogate",
          "name": "IORefS",
          "package": "IOSpec",
          "partial": "IORef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t:IORefS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eIOSpec f a\u003c/code\u003e is merely type synonym for \u003ccode\u003eIO a\u003c/code\u003e. Once you've\n tested a module, you can use these definitions to avoid having to\n change your type signatures.\n\u003c/p\u003e\u003cp\u003eNote that because this definition of \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e ignores its \u003ccode\u003ef\u003c/code\u003e\n argument, each of \u003ccode\u003e\u003ca\u003eForkS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMVarS\u003c/a\u003e\u003c/code\u003e, etc., is simply an empty data\n type.\n\u003c/p\u003e",
          "module": "Test.IOSpec.Surrogate",
          "name": "IOSpec",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Surrogate.html#IOSpec",
          "type": "type"
        },
        "index": {
          "description": "The IOSpec is merely type synonym for IO Once you ve tested module you can use these definitions to avoid having to change your type signatures Note that because this definition of IOSpec ignores its argument each of ForkS MVarS etc is simply an empty data type",
          "hierarchy": "Test IOSpec Surrogate",
          "module": "Test.IOSpec.Surrogate",
          "name": "IOSpec",
          "package": "IOSpec",
          "partial": "IOSpec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t:IOSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Surrogate",
          "name": "MVarS",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Surrogate.html#MVarS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test IOSpec Surrogate",
          "module": "Test.IOSpec.Surrogate",
          "name": "MVarS",
          "package": "IOSpec",
          "partial": "MVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t:MVarS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Surrogate",
          "name": "STMS",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Surrogate.html#STMS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test IOSpec Surrogate",
          "module": "Test.IOSpec.Surrogate",
          "name": "STMS",
          "package": "IOSpec",
          "partial": "STMS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t:STMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Surrogate",
          "name": "Teletype",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Surrogate.html#Teletype",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test IOSpec Surrogate",
          "module": "Test.IOSpec.Surrogate",
          "name": "Teletype",
          "package": "IOSpec",
          "partial": "Teletype",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t:Teletype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure specification of getChar and putChar.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.IOSpec.Teletype",
          "name": "Teletype",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Teletype.html",
          "type": "module"
        },
        "index": {
          "description": "pure specification of getChar and putChar",
          "hierarchy": "Test IOSpec Teletype",
          "module": "Test.IOSpec.Teletype",
          "name": "Teletype",
          "package": "IOSpec",
          "partial": "Teletype",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn expression of type \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTeletype\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e corresponds to an \u003ccode\u003eIO\u003c/code\u003e\n computation that may print to or read from stdout and stdin\n respectively.\n\u003c/p\u003e\u003cp\u003eThere is a minor caveat here. I assume that stdin and stdout are\n not buffered. This is not the standard behaviour in many Haskell\n compilers.\n\u003c/p\u003e",
          "module": "Test.IOSpec.Teletype",
          "name": "Teletype",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Teletype.html#Teletype",
          "type": "data"
        },
        "index": {
          "description": "An expression of type IOSpec Teletype corresponds to an IO computation that may print to or read from stdout and stdin respectively There is minor caveat here assume that stdin and stdout are not buffered This is not the standard behaviour in many Haskell compilers",
          "hierarchy": "Test IOSpec Teletype",
          "module": "Test.IOSpec.Teletype",
          "name": "Teletype",
          "package": "IOSpec",
          "partial": "Teletype",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#t:Teletype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetChar\u003c/a\u003e\u003c/code\u003e function can be used to read a character from the\n teletype.\n\u003c/p\u003e",
          "module": "Test.IOSpec.Teletype",
          "name": "getChar",
          "package": "IOSpec",
          "signature": "IOSpec f Char",
          "source": "src/Test-IOSpec-Teletype.html#getChar",
          "type": "function"
        },
        "index": {
          "description": "The getChar function can be used to read character from the teletype",
          "hierarchy": "Test IOSpec Teletype",
          "module": "Test.IOSpec.Teletype",
          "name": "getChar",
          "package": "IOSpec",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#v:getChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Teletype",
          "name": "getLine",
          "package": "IOSpec",
          "signature": "IOSpec f String",
          "source": "src/Test-IOSpec-Teletype.html#getLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec Teletype",
          "module": "Test.IOSpec.Teletype",
          "name": "getLine",
          "package": "IOSpec",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetChar\u003c/a\u003e\u003c/code\u003e function can be used to print a character to the\n teletype.\n\u003c/p\u003e",
          "module": "Test.IOSpec.Teletype",
          "name": "putChar",
          "package": "IOSpec",
          "signature": "Char -\u003e IOSpec f ()",
          "source": "src/Test-IOSpec-Teletype.html#putChar",
          "type": "function"
        },
        "index": {
          "description": "The getChar function can be used to print character to the teletype",
          "hierarchy": "Test IOSpec Teletype",
          "module": "Test.IOSpec.Teletype",
          "name": "putChar",
          "normalized": "Char-\u003eIOSpec a()",
          "package": "IOSpec",
          "partial": "Char",
          "signature": "Char-\u003eIOSpec f()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#v:putChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Teletype",
          "name": "putStr",
          "package": "IOSpec",
          "signature": "String -\u003e IOSpec f ()",
          "source": "src/Test-IOSpec-Teletype.html#putStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec Teletype",
          "module": "Test.IOSpec.Teletype",
          "name": "putStr",
          "normalized": "String-\u003eIOSpec a()",
          "package": "IOSpec",
          "partial": "Str",
          "signature": "String-\u003eIOSpec f()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Teletype",
          "name": "putStrLn",
          "package": "IOSpec",
          "signature": "String -\u003e IOSpec f ()",
          "source": "src/Test-IOSpec-Teletype.html#putStrLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec Teletype",
          "module": "Test.IOSpec.Teletype",
          "name": "putStrLn",
          "normalized": "String-\u003eIOSpec a()",
          "package": "IOSpec",
          "partial": "Str Ln",
          "signature": "String-\u003eIOSpec f()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the basic data types underlying the\n \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e library. Most of the types and classes in this module\n are described in\n \u003ca\u003ehttp://www.cs.nott.ac.uk/~wss/Publications/DataTypesALaCarte.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.IOSpec.Types",
          "name": "Types",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the basic data types underlying the IOSpec library Most of the types and classes in this module are described in http www.cs.nott.ac.uk wss Publications DataTypesALaCarte.pdf",
          "hierarchy": "Test IOSpec Types",
          "module": "Test.IOSpec.Types",
          "name": "Types",
          "package": "IOSpec",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe coproduct of functors\n\u003c/p\u003e",
          "module": "Test.IOSpec.Types",
          "name": ":+:",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Types.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "The coproduct of functors",
          "hierarchy": "Test IOSpec Types",
          "module": "Test.IOSpec.Types",
          "name": ":+:",
          "package": "IOSpec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (:\u003c:) class\n\u003c/p\u003e",
          "module": "Test.IOSpec.Types",
          "name": ":\u003c:",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Types.html#%3A%3C%3A",
          "type": "class"
        },
        "index": {
          "description": "The class",
          "hierarchy": "Test IOSpec Types",
          "module": "Test.IOSpec.Types",
          "name": ":\u003c:",
          "package": "IOSpec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#t::-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e is either a pure value of type \u003ccode\u003ea\u003c/code\u003e\n or some effect, determined by \u003ccode\u003ef\u003c/code\u003e. Crucially, \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e is a\n monad, provided \u003ccode\u003ef\u003c/code\u003e is a functor.\n\u003c/p\u003e",
          "module": "Test.IOSpec.Types",
          "name": "IOSpec",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-Types.html#IOSpec",
          "type": "data"
        },
        "index": {
          "description": "value of type IOSpec is either pure value of type or some effect determined by Crucially IOSpec is monad provided is functor",
          "hierarchy": "Test IOSpec Types",
          "module": "Test.IOSpec.Types",
          "name": "IOSpec",
          "package": "IOSpec",
          "partial": "IOSpec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#t:IOSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Types",
          "name": "Impure",
          "package": "IOSpec",
          "signature": "Impure (f (IOSpec f a))",
          "source": "src/Test-IOSpec-Types.html#IOSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec Types",
          "module": "Test.IOSpec.Types",
          "name": "Impure",
          "package": "IOSpec",
          "partial": "Impure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#v:Impure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Types",
          "name": "Inl",
          "package": "IOSpec",
          "signature": "Inl (f x)",
          "source": "src/Test-IOSpec-Types.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec Types",
          "module": "Test.IOSpec.Types",
          "name": "Inl",
          "package": "IOSpec",
          "partial": "Inl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#v:Inl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Types",
          "name": "Inr",
          "package": "IOSpec",
          "signature": "Inr (g x)",
          "source": "src/Test-IOSpec-Types.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec Types",
          "module": "Test.IOSpec.Types",
          "name": "Inr",
          "package": "IOSpec",
          "partial": "Inr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#v:Inr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Types",
          "name": "Pure",
          "package": "IOSpec",
          "signature": "Pure a",
          "source": "src/Test-IOSpec-Types.html#IOSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec Types",
          "module": "Test.IOSpec.Types",
          "name": "Pure",
          "package": "IOSpec",
          "partial": "Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fold over \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Test.IOSpec.Types",
          "name": "foldIOSpec",
          "package": "IOSpec",
          "signature": "(a -\u003e b) -\u003e (f b -\u003e b) -\u003e IOSpec f a -\u003e b",
          "source": "src/Test-IOSpec-Types.html#foldIOSpec",
          "type": "function"
        },
        "index": {
          "description": "The fold over IOSpec values",
          "hierarchy": "Test IOSpec Types",
          "module": "Test.IOSpec.Types",
          "name": "foldIOSpec",
          "normalized": "(a-\u003eb)-\u003e(c b-\u003eb)-\u003eIOSpec c a-\u003eb",
          "package": "IOSpec",
          "partial": "IOSpec",
          "signature": "(a-\u003eb)-\u003e(f b-\u003eb)-\u003eIOSpec f a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#v:foldIOSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.Types",
          "name": "inject",
          "package": "IOSpec",
          "signature": "g (IOSpec f a) -\u003e IOSpec f a",
          "source": "src/Test-IOSpec-Types.html#inject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec Types",
          "module": "Test.IOSpec.Types",
          "name": "inject",
          "normalized": "a(IOSpec b c)-\u003eIOSpec b c",
          "package": "IOSpec",
          "signature": "g(IOSpec f a)-\u003eIOSpec f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe virtual machine on which the specifications execute.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "VirtualMachine",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-VirtualMachine.html",
          "type": "module"
        },
        "index": {
          "description": "The virtual machine on which the specifications execute",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "VirtualMachine",
          "package": "IOSpec",
          "partial": "Virtual Machine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Data",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-VirtualMachine.html#Data",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Data",
          "package": "IOSpec",
          "partial": "Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e type contains all the primitive effects that are\n observable on the virtual machine.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Effect",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-VirtualMachine.html#Effect",
          "type": "data"
        },
        "index": {
          "description": "The Effect type contains all the primitive effects that are observable on the virtual machine",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Effect",
          "package": "IOSpec",
          "partial": "Effect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Effect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eExecutable\u003c/a\u003e\u003c/code\u003e type class captures all the different types of\n operations that can be executed in the \u003ccode\u003e\u003ca\u003eVM\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Executable",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-VirtualMachine.html#Executable",
          "type": "class"
        },
        "index": {
          "description": "The Executable type class captures all the different types of operations that can be executed in the VM monad",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Executable",
          "package": "IOSpec",
          "partial": "Executable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Executable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Loc",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-VirtualMachine.html#Loc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Loc",
          "package": "IOSpec",
          "partial": "Loc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Scheduler",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-VirtualMachine.html#Scheduler",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Scheduler",
          "package": "IOSpec",
          "partial": "Scheduler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Scheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Step",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-VirtualMachine.html#Step",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Step",
          "package": "IOSpec",
          "partial": "Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Store",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-VirtualMachine.html#Store",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Store",
          "package": "IOSpec",
          "partial": "Store",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "ThreadId",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-VirtualMachine.html#ThreadId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "ThreadId",
          "package": "IOSpec",
          "partial": "Thread Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:ThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVM\u003c/a\u003e\u003c/code\u003e monad is essentially a state monad, modifying the\n store. Besides returning pure values, various primitive effects\n may occur, such as printing characters or failing with an error\n message.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "VM",
          "package": "IOSpec",
          "source": "src/Test-IOSpec-VirtualMachine.html#VM",
          "type": "type"
        },
        "index": {
          "description": "The VM monad is essentially state monad modifying the store Besides returning pure values various primitive effects may occur such as printing characters or failing with an error message",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "VM",
          "package": "IOSpec",
          "partial": "VM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:VM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Block",
          "package": "IOSpec",
          "signature": "Block",
          "source": "src/Test-IOSpec-VirtualMachine.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Block",
          "package": "IOSpec",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Done",
          "package": "IOSpec",
          "signature": "Done a",
          "source": "src/Test-IOSpec-VirtualMachine.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Done",
          "package": "IOSpec",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Fail",
          "package": "IOSpec",
          "signature": "Fail String",
          "source": "src/Test-IOSpec-VirtualMachine.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Fail",
          "package": "IOSpec",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Print",
          "package": "IOSpec",
          "signature": "Print Char (Effect a)",
          "source": "src/Test-IOSpec-VirtualMachine.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Print",
          "package": "IOSpec",
          "partial": "Print",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:Print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "ReadChar",
          "package": "IOSpec",
          "signature": "ReadChar (Char -\u003e Effect a)",
          "source": "src/Test-IOSpec-VirtualMachine.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "ReadChar",
          "normalized": "ReadChar(Char-\u003eEffect a)",
          "package": "IOSpec",
          "partial": "Read Char",
          "signature": "ReadChar(Char-\u003eEffect a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:ReadChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Step",
          "package": "IOSpec",
          "signature": "Step a",
          "source": "src/Test-IOSpec-VirtualMachine.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "Step",
          "package": "IOSpec",
          "partial": "Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ealloc\u003c/a\u003e\u003c/code\u003e function allocate a fresh location on the heap.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "alloc",
          "package": "IOSpec",
          "signature": "VM Loc",
          "source": "src/Test-IOSpec-VirtualMachine.html#alloc",
          "type": "function"
        },
        "index": {
          "description": "The alloc function allocate fresh location on the heap",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "alloc",
          "package": "IOSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:alloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eemptyLoc\u003c/a\u003e\u003c/code\u003e function removes the data stored at a given\n location. This corresponds, for instance, to emptying an \u003ccode\u003eMVar\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "emptyLoc",
          "package": "IOSpec",
          "signature": "Loc -\u003e VM ()",
          "source": "src/Test-IOSpec-VirtualMachine.html#emptyLoc",
          "type": "function"
        },
        "index": {
          "description": "The emptyLoc function removes the data stored at given location This corresponds for instance to emptying an MVar",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "emptyLoc",
          "normalized": "Loc-\u003eVM()",
          "package": "IOSpec",
          "partial": "Loc",
          "signature": "Loc-\u003eVM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:emptyLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eevalIOSpec\u003c/a\u003e\u003c/code\u003e function returns the effects a computation\n yields, but discards the final state of the virtual machine.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "evalIOSpec",
          "package": "IOSpec",
          "signature": "IOSpec f a -\u003e Scheduler -\u003e Effect a",
          "source": "src/Test-IOSpec-VirtualMachine.html#evalIOSpec",
          "type": "function"
        },
        "index": {
          "description": "The evalIOSpec function returns the effects computation yields but discards the final state of the virtual machine",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "evalIOSpec",
          "normalized": "IOSpec a b-\u003eScheduler-\u003eEffect b",
          "package": "IOSpec",
          "partial": "IOSpec",
          "signature": "IOSpec f a-\u003eScheduler-\u003eEffect a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:evalIOSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eexecIOSpec\u003c/a\u003e\u003c/code\u003e returns the final \u003ccode\u003e\u003ca\u003eStore\u003c/a\u003e\u003c/code\u003e after executing a\n computation.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: this function assumes that your computation will\n succeed, without any other visible \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e. If your computation\n reads a character from the teletype, for instance, it will return\n an error.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "execIOSpec",
          "package": "IOSpec",
          "signature": "IOSpec f a -\u003e Scheduler -\u003e Store",
          "source": "src/Test-IOSpec-VirtualMachine.html#execIOSpec",
          "type": "function"
        },
        "index": {
          "description": "The execIOSpec returns the final Store after executing computation Beware this function assumes that your computation will succeed without any other visible Effect If your computation reads character from the teletype for instance it will return an error",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "execIOSpec",
          "normalized": "IOSpec a b-\u003eScheduler-\u003eStore",
          "package": "IOSpec",
          "partial": "IOSpec",
          "signature": "IOSpec f a-\u003eScheduler-\u003eStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:execIOSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efinishThread\u003c/a\u003e\u003c/code\u003e function kills the thread with the specified\n \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "finishThread",
          "package": "IOSpec",
          "signature": "ThreadId -\u003e VM ()",
          "source": "src/Test-IOSpec-VirtualMachine.html#finishThread",
          "type": "function"
        },
        "index": {
          "description": "The finishThread function kills the thread with the specified ThreadId",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "finishThread",
          "normalized": "ThreadId-\u003eVM()",
          "package": "IOSpec",
          "partial": "Thread",
          "signature": "ThreadId-\u003eVM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:finishThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efreshThreadId\u003c/a\u003e\u003c/code\u003e function returns a previously unallocated \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "freshThreadId",
          "package": "IOSpec",
          "signature": "VM ThreadId",
          "source": "src/Test-IOSpec-VirtualMachine.html#freshThreadId",
          "type": "function"
        },
        "index": {
          "description": "The freshThreadId function returns previously unallocated ThreadId",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "freshThreadId",
          "package": "IOSpec",
          "partial": "Thread Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:freshThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "initialStore",
          "package": "IOSpec",
          "signature": "Scheduler -\u003e Store",
          "source": "src/Test-IOSpec-VirtualMachine.html#initialStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "initialStore",
          "normalized": "Scheduler-\u003eStore",
          "package": "IOSpec",
          "partial": "Store",
          "signature": "Scheduler-\u003eStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:initialStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elookupHeap\u003c/a\u003e\u003c/code\u003e function returns the data stored at a given\n heap location, if there is any.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "lookupHeap",
          "package": "IOSpec",
          "signature": "Loc -\u003e VM (Maybe Data)",
          "source": "src/Test-IOSpec-VirtualMachine.html#lookupHeap",
          "type": "function"
        },
        "index": {
          "description": "The lookupHeap function returns the data stored at given heap location if there is any",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "lookupHeap",
          "normalized": "Loc-\u003eVM(Maybe Data)",
          "package": "IOSpec",
          "partial": "Heap",
          "signature": "Loc-\u003eVM(Maybe Data)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:lookupHeap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emainTid\u003c/a\u003e\u003c/code\u003e constant is the \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e of the main process.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "mainTid",
          "package": "IOSpec",
          "signature": "ThreadId",
          "source": "src/Test-IOSpec-VirtualMachine.html#mainTid",
          "type": "function"
        },
        "index": {
          "description": "The mainTid constant is the ThreadId of the main process",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "mainTid",
          "package": "IOSpec",
          "partial": "Tid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:mainTid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "printChar",
          "package": "IOSpec",
          "signature": "Char -\u003e VM ()",
          "source": "src/Test-IOSpec-VirtualMachine.html#printChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "printChar",
          "normalized": "Char-\u003eVM()",
          "package": "IOSpec",
          "partial": "Char",
          "signature": "Char-\u003eVM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:printChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadChar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eprintChar\u003c/a\u003e\u003c/code\u003e functions are the primitive\n counterparts of \u003ccode\u003e\u003ca\u003egetChar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputChar\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eVM\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "readChar",
          "package": "IOSpec",
          "signature": "VM Char",
          "source": "src/Test-IOSpec-VirtualMachine.html#readChar",
          "type": "function"
        },
        "index": {
          "description": "The readChar and printChar functions are the primitive counterparts of getChar and putChar in the VM monad",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "readChar",
          "package": "IOSpec",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:readChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eroundRobin\u003c/a\u003e\u003c/code\u003e scheduler provides a simple round-robin scheduler.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "roundRobin",
          "package": "IOSpec",
          "signature": "Scheduler",
          "source": "src/Test-IOSpec-VirtualMachine.html#roundRobin",
          "type": "function"
        },
        "index": {
          "description": "The roundRobin scheduler provides simple round-robin scheduler",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "roundRobin",
          "package": "IOSpec",
          "partial": "Robin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:roundRobin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003erunIOSpec\u003c/a\u003e\u003c/code\u003e function is the heart of this library.  Given\n the scheduling algorithm you want to use, it will run a value of\n type \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, returning the sequence of observable effects\n together with the final store.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "runIOSpec",
          "package": "IOSpec",
          "signature": "IOSpec f a -\u003e Scheduler -\u003e Effect (a, Store)",
          "source": "src/Test-IOSpec-VirtualMachine.html#runIOSpec",
          "type": "function"
        },
        "index": {
          "description": "The runIOSpec function is the heart of this library Given the scheduling algorithm you want to use it will run value of type IOSpec returning the sequence of observable effects together with the final store",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "runIOSpec",
          "normalized": "IOSpec a b-\u003eScheduler-\u003eEffect(b,Store)",
          "package": "IOSpec",
          "partial": "IOSpec",
          "signature": "IOSpec f a-\u003eScheduler-\u003eEffect(a,Store)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:runIOSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esingleThreaded\u003c/a\u003e\u003c/code\u003e scheduler will never schedule forked\n threads, always scheduling the main thread. Only use this\n scheduler if your code is not concurrent.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "singleThreaded",
          "package": "IOSpec",
          "signature": "Scheduler",
          "source": "src/Test-IOSpec-VirtualMachine.html#singleThreaded",
          "type": "function"
        },
        "index": {
          "description": "The singleThreaded scheduler will never schedule forked threads always scheduling the main thread Only use this scheduler if your code is not concurrent",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "singleThreaded",
          "package": "IOSpec",
          "partial": "Threaded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:singleThreaded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec.VirtualMachine",
          "name": "step",
          "package": "IOSpec",
          "signature": "f a -\u003e VM (Step a)",
          "source": "src/Test-IOSpec-VirtualMachine.html#step",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "step",
          "normalized": "a b-\u003eVM(Step b)",
          "package": "IOSpec",
          "signature": "f a-\u003eVM(Step a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eupdateHeap\u003c/a\u003e\u003c/code\u003e function overwrites a given location with\n new data.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "updateHeap",
          "package": "IOSpec",
          "signature": "Loc -\u003e Data -\u003e VM ()",
          "source": "src/Test-IOSpec-VirtualMachine.html#updateHeap",
          "type": "function"
        },
        "index": {
          "description": "The updateHeap function overwrites given location with new data",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "updateHeap",
          "normalized": "Loc-\u003eData-\u003eVM()",
          "package": "IOSpec",
          "partial": "Heap",
          "signature": "Loc-\u003eData-\u003eVM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:updateHeap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eupdateSoup\u003c/a\u003e\u003c/code\u003e function updates the process associated with a\n given \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "updateSoup",
          "package": "IOSpec",
          "signature": "ThreadId -\u003e IOSpec f a -\u003e VM ()",
          "source": "src/Test-IOSpec-VirtualMachine.html#updateSoup",
          "type": "function"
        },
        "index": {
          "description": "The updateSoup function updates the process associated with given ThreadId",
          "hierarchy": "Test IOSpec VirtualMachine",
          "module": "Test.IOSpec.VirtualMachine",
          "name": "updateSoup",
          "normalized": "ThreadId-\u003eIOSpec a b-\u003eVM()",
          "package": "IOSpec",
          "partial": "Soup",
          "signature": "ThreadId-\u003eIOSpec f a-\u003eVM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:updateSoup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.IOSpec",
          "name": "IOSpec",
          "package": "IOSpec",
          "source": "src/Test-IOSpec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test IOSpec",
          "module": "Test.IOSpec",
          "name": "IOSpec",
          "package": "IOSpec",
          "partial": "IOSpec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec.html#"
      }
    }
  ]
]