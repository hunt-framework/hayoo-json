[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Fork.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure specification of \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.IOSpec.Fork",
        "fct-package": "IOSpec",
        "fct-signature": "module",
        "fct-source": "src/Test-IOSpec-Fork.html",
        "fct-type": "module",
        "title": "Fork"
      },
      "index": {
        "description": "pure specification of forkIO",
        "hierarchy": "Test IOSpec Fork",
        "module": "Test.IOSpec.Fork",
        "name": "Fork",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Fork",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Fork.html#t:ForkS",
      "description": {
        "fct-descr": "\u003cp\u003eAn expression of type \u003ccode\u003eIOSpec ForkS a\u003c/code\u003e corresponds to an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n computation that uses \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e and returns a value of\n type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBy itself, \u003ccode\u003e\u003ca\u003eForkS\u003c/a\u003e\u003c/code\u003e is not terribly useful. You will probably want\n to use \u003ccode\u003eIOSpec (ForkS :+: MVarS)\u003c/code\u003e or \u003ccode\u003eIOSpec (ForkS :+: STMS)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.Fork",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-Fork.html#ForkS",
        "fct-type": "data",
        "title": "ForkS"
      },
      "index": {
        "description": "An expression of type IOSpec ForkS corresponds to an IO computation that uses forkIO and returns value of type By itself ForkS is not terribly useful You will probably want to use IOSpec ForkS MVarS or IOSpec ForkS STMS",
        "hierarchy": "Test IOSpec Fork",
        "module": "Test.IOSpec.Fork",
        "name": "ForkS",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Fork",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Fork.html#v:forkIO",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e function forks off a new thread.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.Fork",
        "fct-package": "IOSpec",
        "fct-signature": "IOSpec f a -\u003e IOSpec g ThreadId",
        "fct-source": "src/Test-IOSpec-Fork.html#forkIO",
        "fct-type": "function",
        "title": "forkIO"
      },
      "index": {
        "description": "The forkIO function forks off new thread",
        "hierarchy": "Test IOSpec Fork",
        "module": "Test.IOSpec.Fork",
        "name": "forkIO",
        "normalized": "IOSpec a b-\u003eIOSpec c ThreadId",
        "package": "IOSpec",
        "partial": "IO",
        "signature": "IOSpec f a-\u003eIOSpec g ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure specification of mutable variables.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.IOSpec.IORef",
        "fct-package": "IOSpec",
        "fct-signature": "module",
        "fct-source": "src/Test-IOSpec-IORef.html",
        "fct-type": "module",
        "title": "IORef"
      },
      "index": {
        "description": "pure specification of mutable variables",
        "hierarchy": "Test IOSpec IORef",
        "module": "Test.IOSpec.IORef",
        "name": "IORef",
        "normalized": "",
        "package": "IOSpec",
        "partial": "IORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#t:IORef",
      "description": {
        "fct-descr": "\u003cp\u003eA mutable variable storing a value of type a. Note that the\n types stored by an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e are assumed to be \u003ccode\u003eTypeable\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.IORef",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-IORef.html#IORef",
        "fct-type": "data",
        "title": "IORef"
      },
      "index": {
        "description": "mutable variable storing value of type Note that the types stored by an IORef are assumed to be Typeable",
        "hierarchy": "Test IOSpec IORef",
        "module": "Test.IOSpec.IORef",
        "name": "IORef",
        "normalized": "",
        "package": "IOSpec",
        "partial": "IORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#t:IORefS",
      "description": {
        "fct-descr": "\u003cp\u003eAn expression of type \u003ccode\u003eIOSpec IORefS a\u003c/code\u003e corresponds to an \u003ccode\u003eIO\u003c/code\u003e\n computation that uses mutable references and returns a value of\n type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.IORef",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-IORef.html#IORefS",
        "fct-type": "data",
        "title": "IORefS"
      },
      "index": {
        "description": "An expression of type IOSpec IORefS corresponds to an IO computation that uses mutable references and returns value of type",
        "hierarchy": "Test IOSpec IORef",
        "module": "Test.IOSpec.IORef",
        "name": "IORefS",
        "normalized": "",
        "package": "IOSpec",
        "partial": "IORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#v:modifyIORef",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emodifyIORef\u003c/a\u003e\u003c/code\u003e function applies a function to the value stored in\n and \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.IORef",
        "fct-package": "IOSpec",
        "fct-signature": "IORef a -\u003e (a -\u003e a) -\u003e IOSpec f ()",
        "fct-source": "src/Test-IOSpec-IORef.html#modifyIORef",
        "fct-type": "function",
        "title": "modifyIORef"
      },
      "index": {
        "description": "The modifyIORef function applies function to the value stored in and IORef",
        "hierarchy": "Test IOSpec IORef",
        "module": "Test.IOSpec.IORef",
        "name": "modifyIORef",
        "normalized": "IORef a-\u003e(a-\u003ea)-\u003eIOSpec b()",
        "package": "IOSpec",
        "partial": "IORef",
        "signature": "IORef a-\u003e(a-\u003ea)-\u003eIOSpec f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#v:newIORef",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enewIORef\u003c/a\u003e\u003c/code\u003e function creates a new mutable variable.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.IORef",
        "fct-package": "IOSpec",
        "fct-signature": "a -\u003e IOSpec f (IORef a)",
        "fct-source": "src/Test-IOSpec-IORef.html#newIORef",
        "fct-type": "function",
        "title": "newIORef"
      },
      "index": {
        "description": "The newIORef function creates new mutable variable",
        "hierarchy": "Test IOSpec IORef",
        "module": "Test.IOSpec.IORef",
        "name": "newIORef",
        "normalized": "a-\u003eIOSpec b(IORef a)",
        "package": "IOSpec",
        "partial": "IORef",
        "signature": "a-\u003eIOSpec f(IORef a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#v:readIORef",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadIORef\u003c/a\u003e\u003c/code\u003e function reads the value stored in a mutable variable.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.IORef",
        "fct-package": "IOSpec",
        "fct-signature": "IORef a -\u003e IOSpec f a",
        "fct-source": "src/Test-IOSpec-IORef.html#readIORef",
        "fct-type": "function",
        "title": "readIORef"
      },
      "index": {
        "description": "The readIORef function reads the value stored in mutable variable",
        "hierarchy": "Test IOSpec IORef",
        "module": "Test.IOSpec.IORef",
        "name": "readIORef",
        "normalized": "IORef a-\u003eIOSpec b a",
        "package": "IOSpec",
        "partial": "IORef",
        "signature": "IORef a-\u003eIOSpec f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-IORef.html#v:writeIORef",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewriteIORef\u003c/a\u003e\u003c/code\u003e function overwrites the value stored in a\n mutable variable.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.IORef",
        "fct-package": "IOSpec",
        "fct-signature": "IORef a -\u003e a -\u003e IOSpec f ()",
        "fct-source": "src/Test-IOSpec-IORef.html#writeIORef",
        "fct-type": "function",
        "title": "writeIORef"
      },
      "index": {
        "description": "The writeIORef function overwrites the value stored in mutable variable",
        "hierarchy": "Test IOSpec IORef",
        "module": "Test.IOSpec.IORef",
        "name": "writeIORef",
        "normalized": "IORef a-\u003ea-\u003eIOSpec b()",
        "package": "IOSpec",
        "partial": "IORef",
        "signature": "IORef a-\u003ea-\u003eIOSpec f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-MVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure specification of basic operations on MVars.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.IOSpec.MVar",
        "fct-package": "IOSpec",
        "fct-signature": "module",
        "fct-source": "src/Test-IOSpec-MVar.html",
        "fct-type": "module",
        "title": "MVar"
      },
      "index": {
        "description": "pure specification of basic operations on MVars",
        "hierarchy": "Test IOSpec MVar",
        "module": "Test.IOSpec.MVar",
        "name": "MVar",
        "normalized": "",
        "package": "IOSpec",
        "partial": "MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-MVar.html#t:MVar",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is a shared, mutable variable.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.MVar",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-MVar.html#MVar",
        "fct-type": "data",
        "title": "MVar"
      },
      "index": {
        "description": "An MVar is shared mutable variable",
        "hierarchy": "Test IOSpec MVar",
        "module": "Test.IOSpec.MVar",
        "name": "MVar",
        "normalized": "",
        "package": "IOSpec",
        "partial": "MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-MVar.html#t:MVarS",
      "description": {
        "fct-descr": "\u003cp\u003eAn expression of type \u003ccode\u003eIOSpec MVarS a\u003c/code\u003e corresponds to an \u003ccode\u003eIO\u003c/code\u003e\n computation that uses shared, mutable variables and returns a\n value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBy itself, \u003ccode\u003e\u003ca\u003eMVarS\u003c/a\u003e\u003c/code\u003e is not terribly useful. You will probably want\n to use \u003ccode\u003eIOSpec (ForkS :+: MVarS)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.MVar",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-MVar.html#MVarS",
        "fct-type": "data",
        "title": "MVarS"
      },
      "index": {
        "description": "An expression of type IOSpec MVarS corresponds to an IO computation that uses shared mutable variables and returns value of type By itself MVarS is not terribly useful You will probably want to use IOSpec ForkS MVarS",
        "hierarchy": "Test IOSpec MVar",
        "module": "Test.IOSpec.MVar",
        "name": "MVarS",
        "normalized": "",
        "package": "IOSpec",
        "partial": "MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-MVar.html#v:newEmptyMVar",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enewEmptyMVar\u003c/a\u003e\u003c/code\u003e function creates a new \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e that is initially empty.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.MVar",
        "fct-package": "IOSpec",
        "fct-signature": "IOSpec f (MVar a)",
        "fct-source": "src/Test-IOSpec-MVar.html#newEmptyMVar",
        "fct-type": "function",
        "title": "newEmptyMVar"
      },
      "index": {
        "description": "The newEmptyMVar function creates new MVar that is initially empty",
        "hierarchy": "Test IOSpec MVar",
        "module": "Test.IOSpec.MVar",
        "name": "newEmptyMVar",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Empty MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-MVar.html#v:putMVar",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e function fills an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e with a new value. If the\n \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is not empty, the thread is blocked.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.MVar",
        "fct-package": "IOSpec",
        "fct-signature": "MVar a -\u003e a -\u003e IOSpec f ()",
        "fct-source": "src/Test-IOSpec-MVar.html#putMVar",
        "fct-type": "function",
        "title": "putMVar"
      },
      "index": {
        "description": "The putMVar function fills an MVar with new value If the MVar is not empty the thread is blocked",
        "hierarchy": "Test IOSpec MVar",
        "module": "Test.IOSpec.MVar",
        "name": "putMVar",
        "normalized": "MVar a-\u003ea-\u003eIOSpec b()",
        "package": "IOSpec",
        "partial": "MVar",
        "signature": "MVar a-\u003ea-\u003eIOSpec f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-MVar.html#v:takeMVar",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e function removes the value stored in an\n \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e. If the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is empty, the thread is blocked.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.MVar",
        "fct-package": "IOSpec",
        "fct-signature": "MVar a -\u003e IOSpec f a",
        "fct-source": "src/Test-IOSpec-MVar.html#takeMVar",
        "fct-type": "function",
        "title": "takeMVar"
      },
      "index": {
        "description": "The takeMVar function removes the value stored in an MVar If the MVar is empty the thread is blocked",
        "hierarchy": "Test IOSpec MVar",
        "module": "Test.IOSpec.MVar",
        "name": "takeMVar",
        "normalized": "MVar a-\u003eIOSpec b a",
        "package": "IOSpec",
        "partial": "MVar",
        "signature": "MVar a-\u003eIOSpec f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#",
      "description": {
        "fct-module": "Test.IOSpec.STM",
        "fct-package": "IOSpec",
        "fct-signature": "module",
        "fct-source": "src/Test-IOSpec-STM.html",
        "fct-type": "module",
        "title": "STM"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec STM",
        "module": "Test.IOSpec.STM",
        "name": "STM",
        "normalized": "",
        "package": "IOSpec",
        "partial": "STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#t:STM",
      "description": {
        "fct-module": "Test.IOSpec.STM",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-STM.html#STM",
        "fct-type": "data",
        "title": "STM"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec STM",
        "module": "Test.IOSpec.STM",
        "name": "STM",
        "normalized": "",
        "package": "IOSpec",
        "partial": "STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#t:STMS",
      "description": {
        "fct-descr": "\u003cp\u003eAn expression of type \u003ccode\u003eIOSpec \u003ccode\u003e\u003ca\u003eSTMS\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e corresponds to an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n computation that may use \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e and returns a value of type\n \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBy itself, \u003ccode\u003e\u003ca\u003eSTMS\u003c/a\u003e\u003c/code\u003e is not terribly useful. You will probably want\n to use \u003ccode\u003eIOSpec (ForkS :+: STMS)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.STM",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-STM.html#STMS",
        "fct-type": "data",
        "title": "STMS"
      },
      "index": {
        "description": "An expression of type IOSpec STMS corresponds to an IO computation that may use atomically and returns value of type By itself STMS is not terribly useful You will probably want to use IOSpec ForkS STMS",
        "hierarchy": "Test IOSpec STM",
        "module": "Test.IOSpec.STM",
        "name": "STMS",
        "normalized": "",
        "package": "IOSpec",
        "partial": "STMS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#t:TVar",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e is a shared, mutable variable used by STM.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.STM",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-STM.html#TVar",
        "fct-type": "data",
        "title": "TVar"
      },
      "index": {
        "description": "TVar is shared mutable variable used by STM",
        "hierarchy": "Test IOSpec STM",
        "module": "Test.IOSpec.STM",
        "name": "TVar",
        "normalized": "",
        "package": "IOSpec",
        "partial": "TVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:atomically",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e function atomically executes an \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.STM",
        "fct-package": "IOSpec",
        "fct-signature": "STM a -\u003e IOSpec f a",
        "fct-source": "src/Test-IOSpec-STM.html#atomically",
        "fct-type": "function",
        "title": "atomically"
      },
      "index": {
        "description": "The atomically function atomically executes an STM action",
        "hierarchy": "Test IOSpec STM",
        "module": "Test.IOSpec.STM",
        "name": "atomically",
        "normalized": "STM a-\u003eIOSpec b a",
        "package": "IOSpec",
        "partial": "",
        "signature": "STM a-\u003eIOSpec f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:check",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e function checks if its boolean argument holds. If\n the boolean is true, it returns (); otherwise it calls \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.STM",
        "fct-package": "IOSpec",
        "fct-signature": "Bool -\u003e STM ()",
        "fct-source": "src/Test-IOSpec-STM.html#check",
        "fct-type": "function",
        "title": "check"
      },
      "index": {
        "description": "The check function checks if its boolean argument holds If the boolean is true it returns otherwise it calls retry",
        "hierarchy": "Test IOSpec STM",
        "module": "Test.IOSpec.STM",
        "name": "check",
        "normalized": "Bool-\u003eSTM()",
        "package": "IOSpec",
        "partial": "",
        "signature": "Bool-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:newTVar",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enewTVar\u003c/a\u003e\u003c/code\u003e function creates a new transactional variable.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.STM",
        "fct-package": "IOSpec",
        "fct-signature": "a -\u003e STM (TVar a)",
        "fct-source": "src/Test-IOSpec-STM.html#newTVar",
        "fct-type": "function",
        "title": "newTVar"
      },
      "index": {
        "description": "The newTVar function creates new transactional variable",
        "hierarchy": "Test IOSpec STM",
        "module": "Test.IOSpec.STM",
        "name": "newTVar",
        "normalized": "a-\u003eSTM(TVar a)",
        "package": "IOSpec",
        "partial": "TVar",
        "signature": "a-\u003eSTM(TVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:orElse",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eorElse\u003c/a\u003e\u003c/code\u003e function takes two \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e actions \u003ccode\u003estm1\u003c/code\u003e and \u003ccode\u003estm2\u003c/code\u003e and\n performs \u003ccode\u003estm1\u003c/code\u003e. If \u003ccode\u003estm1\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e it performs \u003ccode\u003estm2\u003c/code\u003e. If \u003ccode\u003estm1\u003c/code\u003e\n succeeds, on the other hand, \u003ccode\u003estm2\u003c/code\u003e is not executed.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.STM",
        "fct-package": "IOSpec",
        "fct-signature": "STM a -\u003e STM a -\u003e STM a",
        "fct-source": "src/Test-IOSpec-STM.html#orElse",
        "fct-type": "function",
        "title": "orElse"
      },
      "index": {
        "description": "The orElse function takes two STM actions stm1 and stm2 and performs stm1 If stm1 calls retry it performs stm2 If stm1 succeeds on the other hand stm2 is not executed",
        "hierarchy": "Test IOSpec STM",
        "module": "Test.IOSpec.STM",
        "name": "orElse",
        "normalized": "STM a-\u003eSTM a-\u003eSTM a",
        "package": "IOSpec",
        "partial": "Else",
        "signature": "STM a-\u003eSTM a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:readTVar",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadTVar\u003c/a\u003e\u003c/code\u003e function reads the value stored in a\n transactional variable.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.STM",
        "fct-package": "IOSpec",
        "fct-signature": "TVar a -\u003e STM a",
        "fct-source": "src/Test-IOSpec-STM.html#readTVar",
        "fct-type": "function",
        "title": "readTVar"
      },
      "index": {
        "description": "The readTVar function reads the value stored in transactional variable",
        "hierarchy": "Test IOSpec STM",
        "module": "Test.IOSpec.STM",
        "name": "readTVar",
        "normalized": "TVar a-\u003eSTM a",
        "package": "IOSpec",
        "partial": "TVar",
        "signature": "TVar a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:retry",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e function abandons a transaction and retries at some\n later time.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.STM",
        "fct-package": "IOSpec",
        "fct-signature": "STM a",
        "fct-source": "src/Test-IOSpec-STM.html#retry",
        "fct-type": "function",
        "title": "retry"
      },
      "index": {
        "description": "The retry function abandons transaction and retries at some later time",
        "hierarchy": "Test IOSpec STM",
        "module": "Test.IOSpec.STM",
        "name": "retry",
        "normalized": "",
        "package": "IOSpec",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-STM.html#v:writeTVar",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewriteTVar\u003c/a\u003e\u003c/code\u003e function overwrites the value stored in a\n transactional variable.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.STM",
        "fct-package": "IOSpec",
        "fct-signature": "TVar a -\u003e a -\u003e STM ()",
        "fct-source": "src/Test-IOSpec-STM.html#writeTVar",
        "fct-type": "function",
        "title": "writeTVar"
      },
      "index": {
        "description": "The writeTVar function overwrites the value stored in transactional variable",
        "hierarchy": "Test IOSpec STM",
        "module": "Test.IOSpec.STM",
        "name": "writeTVar",
        "normalized": "TVar a-\u003ea-\u003eSTM()",
        "package": "IOSpec",
        "partial": "TVar",
        "signature": "TVar a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a few type signatures to help replace pure\n specifications by their effectful counterparts.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.IOSpec.Surrogate",
        "fct-package": "IOSpec",
        "fct-signature": "module",
        "fct-source": "src/Test-IOSpec-Surrogate.html",
        "fct-type": "module",
        "title": "Surrogate"
      },
      "index": {
        "description": "This module contains few type signatures to help replace pure specifications by their effectful counterparts",
        "hierarchy": "Test IOSpec Surrogate",
        "module": "Test.IOSpec.Surrogate",
        "name": "Surrogate",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Surrogate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t::-43-:",
      "description": {
        "fct-module": "Test.IOSpec.Surrogate",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-Surrogate.html#%3A%2B%3A",
        "fct-type": "data",
        "title": ":+:"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Surrogate",
        "module": "Test.IOSpec.Surrogate",
        "name": ":+:",
        "normalized": "",
        "package": "IOSpec",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t:ForkS",
      "description": {
        "fct-module": "Test.IOSpec.Surrogate",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-Surrogate.html#ForkS",
        "fct-type": "data",
        "title": "ForkS"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Surrogate",
        "module": "Test.IOSpec.Surrogate",
        "name": "ForkS",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Fork",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t:IORefS",
      "description": {
        "fct-module": "Test.IOSpec.Surrogate",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-Surrogate.html#IORefS",
        "fct-type": "data",
        "title": "IORefS"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Surrogate",
        "module": "Test.IOSpec.Surrogate",
        "name": "IORefS",
        "normalized": "",
        "package": "IOSpec",
        "partial": "IORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t:IOSpec",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eIOSpec f a\u003c/code\u003e is merely type synonym for \u003ccode\u003eIO a\u003c/code\u003e. Once you've\n tested a module, you can use these definitions to avoid having to\n change your type signatures.\n\u003c/p\u003e\u003cp\u003eNote that because this definition of \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e ignores its \u003ccode\u003ef\u003c/code\u003e\n argument, each of \u003ccode\u003e\u003ca\u003eForkS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMVarS\u003c/a\u003e\u003c/code\u003e, etc., is simply an empty data\n type.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.Surrogate",
        "fct-package": "IOSpec",
        "fct-signature": "type",
        "fct-source": "src/Test-IOSpec-Surrogate.html#IOSpec",
        "fct-type": "type",
        "title": "IOSpec"
      },
      "index": {
        "description": "The IOSpec is merely type synonym for IO Once you ve tested module you can use these definitions to avoid having to change your type signatures Note that because this definition of IOSpec ignores its argument each of ForkS MVarS etc is simply an empty data type",
        "hierarchy": "Test IOSpec Surrogate",
        "module": "Test.IOSpec.Surrogate",
        "name": "IOSpec",
        "normalized": "",
        "package": "IOSpec",
        "partial": "IOSpec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t:MVarS",
      "description": {
        "fct-module": "Test.IOSpec.Surrogate",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-Surrogate.html#MVarS",
        "fct-type": "data",
        "title": "MVarS"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Surrogate",
        "module": "Test.IOSpec.Surrogate",
        "name": "MVarS",
        "normalized": "",
        "package": "IOSpec",
        "partial": "MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t:STMS",
      "description": {
        "fct-module": "Test.IOSpec.Surrogate",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-Surrogate.html#STMS",
        "fct-type": "data",
        "title": "STMS"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Surrogate",
        "module": "Test.IOSpec.Surrogate",
        "name": "STMS",
        "normalized": "",
        "package": "IOSpec",
        "partial": "STMS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Surrogate.html#t:Teletype",
      "description": {
        "fct-module": "Test.IOSpec.Surrogate",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-Surrogate.html#Teletype",
        "fct-type": "data",
        "title": "Teletype"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Surrogate",
        "module": "Test.IOSpec.Surrogate",
        "name": "Teletype",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Teletype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure specification of getChar and putChar.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.IOSpec.Teletype",
        "fct-package": "IOSpec",
        "fct-signature": "module",
        "fct-source": "src/Test-IOSpec-Teletype.html",
        "fct-type": "module",
        "title": "Teletype"
      },
      "index": {
        "description": "pure specification of getChar and putChar",
        "hierarchy": "Test IOSpec Teletype",
        "module": "Test.IOSpec.Teletype",
        "name": "Teletype",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Teletype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#t:Teletype",
      "description": {
        "fct-descr": "\u003cp\u003eAn expression of type \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTeletype\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e corresponds to an \u003ccode\u003eIO\u003c/code\u003e\n computation that may print to or read from stdout and stdin\n respectively.\n\u003c/p\u003e\u003cp\u003eThere is a minor caveat here. I assume that stdin and stdout are\n not buffered. This is not the standard behaviour in many Haskell\n compilers.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.Teletype",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-Teletype.html#Teletype",
        "fct-type": "data",
        "title": "Teletype"
      },
      "index": {
        "description": "An expression of type IOSpec Teletype corresponds to an IO computation that may print to or read from stdout and stdin respectively There is minor caveat here assume that stdin and stdout are not buffered This is not the standard behaviour in many Haskell compilers",
        "hierarchy": "Test IOSpec Teletype",
        "module": "Test.IOSpec.Teletype",
        "name": "Teletype",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Teletype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#v:getChar",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetChar\u003c/a\u003e\u003c/code\u003e function can be used to read a character from the\n teletype.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.Teletype",
        "fct-package": "IOSpec",
        "fct-signature": "IOSpec f Char",
        "fct-source": "src/Test-IOSpec-Teletype.html#getChar",
        "fct-type": "function",
        "title": "getChar"
      },
      "index": {
        "description": "The getChar function can be used to read character from the teletype",
        "hierarchy": "Test IOSpec Teletype",
        "module": "Test.IOSpec.Teletype",
        "name": "getChar",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#v:getLine",
      "description": {
        "fct-module": "Test.IOSpec.Teletype",
        "fct-package": "IOSpec",
        "fct-signature": "IOSpec f String",
        "fct-source": "src/Test-IOSpec-Teletype.html#getLine",
        "fct-type": "function",
        "title": "getLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Teletype",
        "module": "Test.IOSpec.Teletype",
        "name": "getLine",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#v:putChar",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetChar\u003c/a\u003e\u003c/code\u003e function can be used to print a character to the\n teletype.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.Teletype",
        "fct-package": "IOSpec",
        "fct-signature": "Char -\u003e IOSpec f ()",
        "fct-source": "src/Test-IOSpec-Teletype.html#putChar",
        "fct-type": "function",
        "title": "putChar"
      },
      "index": {
        "description": "The getChar function can be used to print character to the teletype",
        "hierarchy": "Test IOSpec Teletype",
        "module": "Test.IOSpec.Teletype",
        "name": "putChar",
        "normalized": "Char-\u003eIOSpec a()",
        "package": "IOSpec",
        "partial": "Char",
        "signature": "Char-\u003eIOSpec f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#v:putStr",
      "description": {
        "fct-module": "Test.IOSpec.Teletype",
        "fct-package": "IOSpec",
        "fct-signature": "String -\u003e IOSpec f ()",
        "fct-source": "src/Test-IOSpec-Teletype.html#putStr",
        "fct-type": "function",
        "title": "putStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Teletype",
        "module": "Test.IOSpec.Teletype",
        "name": "putStr",
        "normalized": "String-\u003eIOSpec a()",
        "package": "IOSpec",
        "partial": "Str",
        "signature": "String-\u003eIOSpec f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Teletype.html#v:putStrLn",
      "description": {
        "fct-module": "Test.IOSpec.Teletype",
        "fct-package": "IOSpec",
        "fct-signature": "String -\u003e IOSpec f ()",
        "fct-source": "src/Test-IOSpec-Teletype.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Teletype",
        "module": "Test.IOSpec.Teletype",
        "name": "putStrLn",
        "normalized": "String-\u003eIOSpec a()",
        "package": "IOSpec",
        "partial": "Str Ln",
        "signature": "String-\u003eIOSpec f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the basic data types underlying the\n \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e library. Most of the types and classes in this module\n are described in\n \u003ca\u003ehttp://www.cs.nott.ac.uk/~wss/Publications/DataTypesALaCarte.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.IOSpec.Types",
        "fct-package": "IOSpec",
        "fct-signature": "module",
        "fct-source": "src/Test-IOSpec-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "This module contains the basic data types underlying the IOSpec library Most of the types and classes in this module are described in http www.cs.nott.ac.uk wss Publications DataTypesALaCarte.pdf",
        "hierarchy": "Test IOSpec Types",
        "module": "Test.IOSpec.Types",
        "name": "Types",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#t::-43-:",
      "description": {
        "fct-descr": "\u003cp\u003eThe coproduct of functors\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.Types",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-Types.html#%3A%2B%3A",
        "fct-type": "data",
        "title": ":+:"
      },
      "index": {
        "description": "The coproduct of functors",
        "hierarchy": "Test IOSpec Types",
        "module": "Test.IOSpec.Types",
        "name": ":+:",
        "normalized": "",
        "package": "IOSpec",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#t::-60-:",
      "description": {
        "fct-descr": "\u003cp\u003eThe (:\u003c:) class\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.Types",
        "fct-package": "IOSpec",
        "fct-signature": "class",
        "fct-source": "src/Test-IOSpec-Types.html#%3A%3C%3A",
        "fct-type": "class",
        "title": ":\u003c:"
      },
      "index": {
        "description": "The class",
        "hierarchy": "Test IOSpec Types",
        "module": "Test.IOSpec.Types",
        "name": ":\u003c:",
        "normalized": "",
        "package": "IOSpec",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#t:IOSpec",
      "description": {
        "fct-descr": "\u003cp\u003eA value of type \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e is either a pure value of type \u003ccode\u003ea\u003c/code\u003e\n or some effect, determined by \u003ccode\u003ef\u003c/code\u003e. Crucially, \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e is a\n monad, provided \u003ccode\u003ef\u003c/code\u003e is a functor.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.Types",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-Types.html#IOSpec",
        "fct-type": "data",
        "title": "IOSpec"
      },
      "index": {
        "description": "value of type IOSpec is either pure value of type or some effect determined by Crucially IOSpec is monad provided is functor",
        "hierarchy": "Test IOSpec Types",
        "module": "Test.IOSpec.Types",
        "name": "IOSpec",
        "normalized": "",
        "package": "IOSpec",
        "partial": "IOSpec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#v:Impure",
      "description": {
        "fct-module": "Test.IOSpec.Types",
        "fct-package": "IOSpec",
        "fct-signature": "Impure (f (IOSpec f a))",
        "fct-source": "src/Test-IOSpec-Types.html#IOSpec",
        "fct-type": "function",
        "title": "Impure"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Types",
        "module": "Test.IOSpec.Types",
        "name": "Impure",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Impure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#v:Inl",
      "description": {
        "fct-module": "Test.IOSpec.Types",
        "fct-package": "IOSpec",
        "fct-signature": "Inl (f x)",
        "fct-source": "src/Test-IOSpec-Types.html#%3A%2B%3A",
        "fct-type": "function",
        "title": "Inl"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Types",
        "module": "Test.IOSpec.Types",
        "name": "Inl",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Inl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#v:Inr",
      "description": {
        "fct-module": "Test.IOSpec.Types",
        "fct-package": "IOSpec",
        "fct-signature": "Inr (g x)",
        "fct-source": "src/Test-IOSpec-Types.html#%3A%2B%3A",
        "fct-type": "function",
        "title": "Inr"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Types",
        "module": "Test.IOSpec.Types",
        "name": "Inr",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Inr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#v:Pure",
      "description": {
        "fct-module": "Test.IOSpec.Types",
        "fct-package": "IOSpec",
        "fct-signature": "Pure a",
        "fct-source": "src/Test-IOSpec-Types.html#IOSpec",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Types",
        "module": "Test.IOSpec.Types",
        "name": "Pure",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#v:foldIOSpec",
      "description": {
        "fct-descr": "\u003cp\u003eThe fold over \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.Types",
        "fct-package": "IOSpec",
        "fct-signature": "(a -\u003e b) -\u003e (f b -\u003e b) -\u003e IOSpec f a -\u003e b",
        "fct-source": "src/Test-IOSpec-Types.html#foldIOSpec",
        "fct-type": "function",
        "title": "foldIOSpec"
      },
      "index": {
        "description": "The fold over IOSpec values",
        "hierarchy": "Test IOSpec Types",
        "module": "Test.IOSpec.Types",
        "name": "foldIOSpec",
        "normalized": "(a-\u003eb)-\u003e(c b-\u003eb)-\u003eIOSpec c a-\u003eb",
        "package": "IOSpec",
        "partial": "IOSpec",
        "signature": "(a-\u003eb)-\u003e(f b-\u003eb)-\u003eIOSpec f a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-Types.html#v:inject",
      "description": {
        "fct-module": "Test.IOSpec.Types",
        "fct-package": "IOSpec",
        "fct-signature": "g (IOSpec f a) -\u003e IOSpec f a",
        "fct-source": "src/Test-IOSpec-Types.html#inject",
        "fct-type": "function",
        "title": "inject"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec Types",
        "module": "Test.IOSpec.Types",
        "name": "inject",
        "normalized": "a(IOSpec b c)-\u003eIOSpec b c",
        "package": "IOSpec",
        "partial": "",
        "signature": "g(IOSpec f a)-\u003eIOSpec f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe virtual machine on which the specifications execute.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "module",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html",
        "fct-type": "module",
        "title": "VirtualMachine"
      },
      "index": {
        "description": "The virtual machine on which the specifications execute",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "VirtualMachine",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Virtual Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Data",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "type",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Data",
        "fct-type": "type",
        "title": "Data"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "Data",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Effect",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e type contains all the primitive effects that are\n observable on the virtual machine.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Effect",
        "fct-type": "data",
        "title": "Effect"
      },
      "index": {
        "description": "The Effect type contains all the primitive effects that are observable on the virtual machine",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "Effect",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Effect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Executable",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eExecutable\u003c/a\u003e\u003c/code\u003e type class captures all the different types of\n operations that can be executed in the \u003ccode\u003e\u003ca\u003eVM\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "class",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Executable",
        "fct-type": "class",
        "title": "Executable"
      },
      "index": {
        "description": "The Executable type class captures all the different types of operations that can be executed in the VM monad",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "Executable",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Executable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Loc",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "type",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Loc",
        "fct-type": "type",
        "title": "Loc"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "Loc",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Scheduler",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Scheduler",
        "fct-type": "data",
        "title": "Scheduler"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "Scheduler",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Scheduler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Step",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Step",
        "fct-type": "data",
        "title": "Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "Step",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:Store",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Store",
        "fct-type": "data",
        "title": "Store"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "Store",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:ThreadId",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "data",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#ThreadId",
        "fct-type": "data",
        "title": "ThreadId"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "ThreadId",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#t:VM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVM\u003c/a\u003e\u003c/code\u003e monad is essentially a state monad, modifying the\n store. Besides returning pure values, various primitive effects\n may occur, such as printing characters or failing with an error\n message.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "type",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#VM",
        "fct-type": "type",
        "title": "VM"
      },
      "index": {
        "description": "The VM monad is essentially state monad modifying the store Besides returning pure values various primitive effects may occur such as printing characters or failing with an error message",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "VM",
        "normalized": "",
        "package": "IOSpec",
        "partial": "VM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:Block",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "Block",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Step",
        "fct-type": "function",
        "title": "Block"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "Block",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:Done",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "Done a",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Effect",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "Done",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:Fail",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "Fail String",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Effect",
        "fct-type": "function",
        "title": "Fail"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "Fail",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:Print",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "Print Char (Effect a)",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Effect",
        "fct-type": "function",
        "title": "Print"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "Print",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Print",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:ReadChar",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "ReadChar (Char -\u003e Effect a)",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Effect",
        "fct-type": "function",
        "title": "ReadChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "ReadChar",
        "normalized": "ReadChar(Char-\u003eEffect a)",
        "package": "IOSpec",
        "partial": "Read Char",
        "signature": "ReadChar(Char-\u003eEffect a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:Step",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "Step a",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#Step",
        "fct-type": "function",
        "title": "Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "Step",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:alloc",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ealloc\u003c/a\u003e\u003c/code\u003e function allocate a fresh location on the heap.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "VM Loc",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#alloc",
        "fct-type": "function",
        "title": "alloc"
      },
      "index": {
        "description": "The alloc function allocate fresh location on the heap",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "alloc",
        "normalized": "",
        "package": "IOSpec",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:emptyLoc",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eemptyLoc\u003c/a\u003e\u003c/code\u003e function removes the data stored at a given\n location. This corresponds, for instance, to emptying an \u003ccode\u003eMVar\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "Loc -\u003e VM ()",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#emptyLoc",
        "fct-type": "function",
        "title": "emptyLoc"
      },
      "index": {
        "description": "The emptyLoc function removes the data stored at given location This corresponds for instance to emptying an MVar",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "emptyLoc",
        "normalized": "Loc-\u003eVM()",
        "package": "IOSpec",
        "partial": "Loc",
        "signature": "Loc-\u003eVM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:evalIOSpec",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eevalIOSpec\u003c/a\u003e\u003c/code\u003e function returns the effects a computation\n yields, but discards the final state of the virtual machine.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "IOSpec f a -\u003e Scheduler -\u003e Effect a",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#evalIOSpec",
        "fct-type": "function",
        "title": "evalIOSpec"
      },
      "index": {
        "description": "The evalIOSpec function returns the effects computation yields but discards the final state of the virtual machine",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "evalIOSpec",
        "normalized": "IOSpec a b-\u003eScheduler-\u003eEffect b",
        "package": "IOSpec",
        "partial": "IOSpec",
        "signature": "IOSpec f a-\u003eScheduler-\u003eEffect a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:execIOSpec",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eexecIOSpec\u003c/a\u003e\u003c/code\u003e returns the final \u003ccode\u003e\u003ca\u003eStore\u003c/a\u003e\u003c/code\u003e after executing a\n computation.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: this function assumes that your computation will\n succeed, without any other visible \u003ccode\u003e\u003ca\u003eEffect\u003c/a\u003e\u003c/code\u003e. If your computation\n reads a character from the teletype, for instance, it will return\n an error.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "IOSpec f a -\u003e Scheduler -\u003e Store",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#execIOSpec",
        "fct-type": "function",
        "title": "execIOSpec"
      },
      "index": {
        "description": "The execIOSpec returns the final Store after executing computation Beware this function assumes that your computation will succeed without any other visible Effect If your computation reads character from the teletype for instance it will return an error",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "execIOSpec",
        "normalized": "IOSpec a b-\u003eScheduler-\u003eStore",
        "package": "IOSpec",
        "partial": "IOSpec",
        "signature": "IOSpec f a-\u003eScheduler-\u003eStore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:finishThread",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efinishThread\u003c/a\u003e\u003c/code\u003e function kills the thread with the specified\n \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "ThreadId -\u003e VM ()",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#finishThread",
        "fct-type": "function",
        "title": "finishThread"
      },
      "index": {
        "description": "The finishThread function kills the thread with the specified ThreadId",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "finishThread",
        "normalized": "ThreadId-\u003eVM()",
        "package": "IOSpec",
        "partial": "Thread",
        "signature": "ThreadId-\u003eVM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:freshThreadId",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efreshThreadId\u003c/a\u003e\u003c/code\u003e function returns a previously unallocated \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "VM ThreadId",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#freshThreadId",
        "fct-type": "function",
        "title": "freshThreadId"
      },
      "index": {
        "description": "The freshThreadId function returns previously unallocated ThreadId",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "freshThreadId",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:initialStore",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "Scheduler -\u003e Store",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#initialStore",
        "fct-type": "function",
        "title": "initialStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "initialStore",
        "normalized": "Scheduler-\u003eStore",
        "package": "IOSpec",
        "partial": "Store",
        "signature": "Scheduler-\u003eStore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:lookupHeap",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elookupHeap\u003c/a\u003e\u003c/code\u003e function returns the data stored at a given\n heap location, if there is any.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "Loc -\u003e VM (Maybe Data)",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#lookupHeap",
        "fct-type": "function",
        "title": "lookupHeap"
      },
      "index": {
        "description": "The lookupHeap function returns the data stored at given heap location if there is any",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "lookupHeap",
        "normalized": "Loc-\u003eVM(Maybe Data)",
        "package": "IOSpec",
        "partial": "Heap",
        "signature": "Loc-\u003eVM(Maybe Data)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:mainTid",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emainTid\u003c/a\u003e\u003c/code\u003e constant is the \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e of the main process.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "ThreadId",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#mainTid",
        "fct-type": "function",
        "title": "mainTid"
      },
      "index": {
        "description": "The mainTid constant is the ThreadId of the main process",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "mainTid",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Tid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:printChar",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "Char -\u003e VM ()",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#printChar",
        "fct-type": "function",
        "title": "printChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "printChar",
        "normalized": "Char-\u003eVM()",
        "package": "IOSpec",
        "partial": "Char",
        "signature": "Char-\u003eVM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:readChar",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadChar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eprintChar\u003c/a\u003e\u003c/code\u003e functions are the primitive\n counterparts of \u003ccode\u003e\u003ca\u003egetChar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputChar\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eVM\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "VM Char",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#readChar",
        "fct-type": "function",
        "title": "readChar"
      },
      "index": {
        "description": "The readChar and printChar functions are the primitive counterparts of getChar and putChar in the VM monad",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "readChar",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:roundRobin",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eroundRobin\u003c/a\u003e\u003c/code\u003e scheduler provides a simple round-robin scheduler.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "Scheduler",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#roundRobin",
        "fct-type": "function",
        "title": "roundRobin"
      },
      "index": {
        "description": "The roundRobin scheduler provides simple round-robin scheduler",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "roundRobin",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Robin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:runIOSpec",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003erunIOSpec\u003c/a\u003e\u003c/code\u003e function is the heart of this library.  Given\n the scheduling algorithm you want to use, it will run a value of\n type \u003ccode\u003e\u003ca\u003eIOSpec\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, returning the sequence of observable effects\n together with the final store.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "IOSpec f a -\u003e Scheduler -\u003e Effect (a, Store)",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#runIOSpec",
        "fct-type": "function",
        "title": "runIOSpec"
      },
      "index": {
        "description": "The runIOSpec function is the heart of this library Given the scheduling algorithm you want to use it will run value of type IOSpec returning the sequence of observable effects together with the final store",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "runIOSpec",
        "normalized": "IOSpec a b-\u003eScheduler-\u003eEffect(b,Store)",
        "package": "IOSpec",
        "partial": "IOSpec",
        "signature": "IOSpec f a-\u003eScheduler-\u003eEffect(a,Store)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:singleThreaded",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esingleThreaded\u003c/a\u003e\u003c/code\u003e scheduler will never schedule forked\n threads, always scheduling the main thread. Only use this\n scheduler if your code is not concurrent.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "Scheduler",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#singleThreaded",
        "fct-type": "function",
        "title": "singleThreaded"
      },
      "index": {
        "description": "The singleThreaded scheduler will never schedule forked threads always scheduling the main thread Only use this scheduler if your code is not concurrent",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "singleThreaded",
        "normalized": "",
        "package": "IOSpec",
        "partial": "Threaded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:step",
      "description": {
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "f a -\u003e VM (Step a)",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#step",
        "fct-type": "method",
        "title": "step"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "step",
        "normalized": "a b-\u003eVM(Step b)",
        "package": "IOSpec",
        "partial": "",
        "signature": "f a-\u003eVM(Step a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:updateHeap",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eupdateHeap\u003c/a\u003e\u003c/code\u003e function overwrites a given location with\n new data.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "Loc -\u003e Data -\u003e VM ()",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#updateHeap",
        "fct-type": "function",
        "title": "updateHeap"
      },
      "index": {
        "description": "The updateHeap function overwrites given location with new data",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "updateHeap",
        "normalized": "Loc-\u003eData-\u003eVM()",
        "package": "IOSpec",
        "partial": "Heap",
        "signature": "Loc-\u003eData-\u003eVM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec-VirtualMachine.html#v:updateSoup",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eupdateSoup\u003c/a\u003e\u003c/code\u003e function updates the process associated with a\n given \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.IOSpec.VirtualMachine",
        "fct-package": "IOSpec",
        "fct-signature": "ThreadId -\u003e IOSpec f a -\u003e VM ()",
        "fct-source": "src/Test-IOSpec-VirtualMachine.html#updateSoup",
        "fct-type": "function",
        "title": "updateSoup"
      },
      "index": {
        "description": "The updateSoup function updates the process associated with given ThreadId",
        "hierarchy": "Test IOSpec VirtualMachine",
        "module": "Test.IOSpec.VirtualMachine",
        "name": "updateSoup",
        "normalized": "ThreadId-\u003eIOSpec a b-\u003eVM()",
        "package": "IOSpec",
        "partial": "Soup",
        "signature": "ThreadId-\u003eIOSpec f a-\u003eVM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IOSpec/docs/Test-IOSpec.html#",
      "description": {
        "fct-module": "Test.IOSpec",
        "fct-package": "IOSpec",
        "fct-signature": "module",
        "fct-source": "src/Test-IOSpec.html",
        "fct-type": "module",
        "title": "IOSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Test IOSpec",
        "module": "Test.IOSpec",
        "name": "IOSpec",
        "normalized": "",
        "package": "IOSpec",
        "partial": "IOSpec",
        "signature": ""
      }
    }
  }
]