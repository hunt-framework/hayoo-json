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
        "word": "strict-concurrency"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnbounded, element-strict channels. Elements will be evaluated to\n WHNF on entering the channel. For some concurrency applications, this\n is more desirable than passing an unevaluted thunk through the channel\n (for instance, it guarantees the node willl be evaluated to WHNF in a\n worker thead).\n\u003c/p\u003e\u003cp\u003eElement-strict channes may potentially use more memory than lazy\n channels\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "Strict",
          "package": "strict-concurrency",
          "source": "src/Control-Concurrent-Chan-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Unbounded element-strict channels Elements will be evaluated to WHNF on entering the channel For some concurrency applications this is more desirable than passing an unevaluted thunk through the channel for instance it guarantees the node willl be evaluated to WHNF in worker thead Element-strict channes may potentially use more memory than lazy channels",
          "hierarchy": "Control Concurrent Chan Strict",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "Strict",
          "package": "strict-concurrency",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-Chan-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "Chan",
          "package": "strict-concurrency",
          "source": "src/Control-Concurrent-Chan-Strict.html#Chan",
          "type": "data"
        },
        "index": {
          "description": "Chan is an abstract type representing an unbounded FIFO channel",
          "hierarchy": "Control Concurrent Chan Strict",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "Chan",
          "package": "strict-concurrency",
          "partial": "Chan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-Chan-Strict.html#t:Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuplicate a \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e: the duplicate channel begins empty, but data written to\n either channel from then on will be available from both.  Hence this creates\n a kind of broadcast channel, where data written by anyone is seen by\n everyone else.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "dupChan",
          "package": "strict-concurrency",
          "signature": "Chan a -\u003e IO (Chan a)",
          "source": "src/Control-Concurrent-Chan-Strict.html#dupChan",
          "type": "function"
        },
        "index": {
          "description": "Duplicate Chan the duplicate channel begins empty but data written to either channel from then on will be available from both Hence this creates kind of broadcast channel where data written by anyone is seen by everyone else",
          "hierarchy": "Control Concurrent Chan Strict",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "dupChan",
          "normalized": "Chan a-\u003eIO(Chan a)",
          "package": "strict-concurrency",
          "partial": "Chan",
          "signature": "Chan a-\u003eIO(Chan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-Chan-Strict.html#v:dupChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a lazy list representing the contents of the supplied\n \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e, much like \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "getChanContents",
          "package": "strict-concurrency",
          "signature": "Chan a -\u003e IO [a]",
          "source": "src/Control-Concurrent-Chan-Strict.html#getChanContents",
          "type": "function"
        },
        "index": {
          "description": "Return lazy list representing the contents of the supplied Chan much like hGetContents",
          "hierarchy": "Control Concurrent Chan Strict",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "getChanContents",
          "normalized": "Chan a-\u003eIO[a]",
          "package": "strict-concurrency",
          "partial": "Chan Contents",
          "signature": "Chan a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-Chan-Strict.html#v:getChanContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "isEmptyChan",
          "package": "strict-concurrency",
          "signature": "Chan a -\u003e IO Bool",
          "source": "src/Control-Concurrent-Chan-Strict.html#isEmptyChan",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied Chan is empty",
          "hierarchy": "Control Concurrent Chan Strict",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "isEmptyChan",
          "normalized": "Chan a-\u003eIO Bool",
          "package": "strict-concurrency",
          "partial": "Empty Chan",
          "signature": "Chan a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-Chan-Strict.html#v:isEmptyChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "newChan",
          "package": "strict-concurrency",
          "signature": "IO (Chan a)",
          "source": "src/Control-Concurrent-Chan-Strict.html#newChan",
          "type": "function"
        },
        "index": {
          "description": "Build and returns new instance of Chan",
          "hierarchy": "Control Concurrent Chan Strict",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "newChan",
          "package": "strict-concurrency",
          "partial": "Chan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-Chan-Strict.html#v:newChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "readChan",
          "package": "strict-concurrency",
          "signature": "Chan a -\u003e IO a",
          "source": "src/Control-Concurrent-Chan-Strict.html#readChan",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the Chan",
          "hierarchy": "Control Concurrent Chan Strict",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "readChan",
          "normalized": "Chan a-\u003eIO a",
          "package": "strict-concurrency",
          "partial": "Chan",
          "signature": "Chan a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-Chan-Strict.html#v:readChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a data item back onto a channel, where it will be the next item read.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "unGetChan",
          "package": "strict-concurrency",
          "signature": "Chan a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Chan-Strict.html#unGetChan",
          "type": "function"
        },
        "index": {
          "description": "Put data item back onto channel where it will be the next item read",
          "hierarchy": "Control Concurrent Chan Strict",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "unGetChan",
          "normalized": "Chan a-\u003ea-\u003eIO()",
          "package": "strict-concurrency",
          "partial": "Get Chan",
          "signature": "Chan a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-Chan-Strict.html#v:unGetChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "writeChan",
          "package": "strict-concurrency",
          "signature": "Chan a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Chan-Strict.html#writeChan",
          "type": "function"
        },
        "index": {
          "description": "Write value to Chan",
          "hierarchy": "Control Concurrent Chan Strict",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "writeChan",
          "normalized": "Chan a-\u003ea-\u003eIO()",
          "package": "strict-concurrency",
          "partial": "Chan",
          "signature": "Chan a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-Chan-Strict.html#v:writeChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an entire list of items to a \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "writeList2Chan",
          "package": "strict-concurrency",
          "signature": "Chan a -\u003e [a] -\u003e IO ()",
          "source": "src/Control-Concurrent-Chan-Strict.html#writeList2Chan",
          "type": "function"
        },
        "index": {
          "description": "Write an entire list of items to Chan",
          "hierarchy": "Control Concurrent Chan Strict",
          "module": "Control.Concurrent.Chan.Strict",
          "name": "writeList2Chan",
          "normalized": "Chan a-\u003e[a]-\u003eIO()",
          "package": "strict-concurrency",
          "partial": "List Chan",
          "signature": "Chan a-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-Chan-Strict.html#v:writeList2Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSynchronising, strict variables\n\u003c/p\u003e\u003cp\u003eValues placed in an MVar are evaluated to head normal form\n before being placed in the MVar, preventing a common source of\n space-leaks involving synchronising variables.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "Strict",
          "package": "strict-concurrency",
          "source": "src/Control-Concurrent-MVar-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Synchronising strict variables Values placed in an MVar are evaluated to head normal form before being placed in the MVar preventing common source of space-leaks involving synchronising variables",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "Strict",
          "package": "strict-concurrency",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e (pronounced \"em-var\") is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a a box, which may be empty or full.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "MVar",
          "package": "strict-concurrency",
          "type": "data"
        },
        "index": {
          "description": "An MVar pronounced em-var is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "MVar",
          "package": "strict-concurrency",
          "partial": "MVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#t:MVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a finalizer to an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e (GHC only).  See \u003ca\u003eForeign.ForeignPtr\u003c/a\u003e and\n \u003ca\u003eSystem.Mem.Weak\u003c/a\u003e for more about finalizers.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "addMVarFinalizer",
          "package": "strict-concurrency",
          "signature": "MVar a -\u003e IO () -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Add finalizer to an MVar GHC only See Foreign.ForeignPtr and System.Mem.Weak for more about finalizers",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "addMVarFinalizer",
          "normalized": "MVar a-\u003eIO()-\u003eIO()",
          "package": "strict-concurrency",
          "partial": "MVar Finalizer",
          "signature": "MVar a-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:addMVarFinalizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a given \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e\u003cp\u003eNotice that the boolean value returned  is just a snapshot of\n the state of the MVar. By the time you get to react on its result,\n the MVar may have been filled (or emptied) - so be extremely\n careful when using this operation.   Use \u003ccode\u003e\u003ca\u003etryTakeMVar\u003c/a\u003e\u003c/code\u003e instead if possible.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "isEmptyMVar",
          "package": "strict-concurrency",
          "signature": "MVar a -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Check whether given MVar is empty Notice that the boolean value returned is just snapshot of the state of the MVar By the time you get to react on its result the MVar may have been filled or emptied so be extremely careful when using this operation Use tryTakeMVar instead if possible",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "isEmptyMVar",
          "normalized": "MVar a-\u003eIO Bool",
          "package": "strict-concurrency",
          "partial": "Empty MVar",
          "signature": "MVar a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:isEmptyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA slight variation on \u003ccode\u003e\u003ca\u003emodifyMVar_\u003c/a\u003e\u003c/code\u003e that allows a value to be\n  returned (\u003ccode\u003eb\u003c/code\u003e) in addition to the modified value of the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "modifyMVar",
          "package": "strict-concurrency",
          "signature": "MVar a -\u003e (a -\u003e IO (a, b)) -\u003e IO b",
          "source": "src/Control-Concurrent-MVar-Strict.html#modifyMVar",
          "type": "function"
        },
        "index": {
          "description": "slight variation on modifyMVar that allows value to be returned in addition to the modified value of the MVar",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "modifyMVar",
          "normalized": "MVar a-\u003e(a-\u003eIO(a,b))-\u003eIO b",
          "package": "strict-concurrency",
          "partial": "MVar",
          "signature": "MVar a-\u003e(a-\u003eIO(a,b))-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:modifyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe wrapper for modifying the contents of an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.  Like \u003ccode\u003e\u003ca\u003ewithMVar\u003c/a\u003e\u003c/code\u003e, \n  \u003ccode\u003e\u003ca\u003emodifyMVar\u003c/a\u003e\u003c/code\u003e will replace the original contents of the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e if an\n  exception is raised during the operation.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "modifyMVar_",
          "package": "strict-concurrency",
          "signature": "MVar a -\u003e (a -\u003e IO a) -\u003e IO ()",
          "source": "src/Control-Concurrent-MVar-Strict.html#modifyMVar_",
          "type": "function"
        },
        "index": {
          "description": "safe wrapper for modifying the contents of an MVar Like withMVar modifyMVar will replace the original contents of the MVar if an exception is raised during the operation",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "modifyMVar_",
          "normalized": "MVar a-\u003e(a-\u003eIO a)-\u003eIO()",
          "package": "strict-concurrency",
          "partial": "MVar",
          "signature": "MVar a-\u003e(a-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:modifyMVar_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e which is initially empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "newEmptyMVar",
          "package": "strict-concurrency",
          "signature": "IO (MVar a)",
          "type": "function"
        },
        "index": {
          "description": "Create an MVar which is initially empty",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "newEmptyMVar",
          "package": "strict-concurrency",
          "partial": "Empty MVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:newEmptyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e which contains the supplied value.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "newMVar",
          "package": "strict-concurrency",
          "signature": "a -\u003e IO (MVar a)",
          "source": "src/Control-Concurrent-MVar-Strict.html#newMVar",
          "type": "function"
        },
        "index": {
          "description": "Create an MVar which contains the supplied value",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "newMVar",
          "normalized": "a-\u003eIO(MVar a)",
          "package": "strict-concurrency",
          "partial": "MVar",
          "signature": "a-\u003eIO(MVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:newMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a value into an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.  If the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is currently full,\n \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e will wait until it becomes empty.\n\u003c/p\u003e\u003cp\u003eThere are two further important properties of \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e is single-wakeup.  That is, if there are multiple\n     threads blocked in \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e, and the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e becomes empty,\n     only one thread will be woken up.  The runtime guarantees that\n     the woken thread completes its \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/li\u003e\u003cli\u003e When multiple threads are blocked on an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e, they are\n     woken up in FIFO order.  This is useful for providing\n     fairness properties of abstractions built using \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "putMVar",
          "package": "strict-concurrency",
          "signature": "MVar a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-MVar-Strict.html#putMVar",
          "type": "function"
        },
        "index": {
          "description": "Put value into an MVar If the MVar is currently full putMVar will wait until it becomes empty There are two further important properties of putMVar putMVar is single-wakeup That is if there are multiple threads blocked in putMVar and the MVar becomes empty only one thread will be woken up The runtime guarantees that the woken thread completes its putMVar operation When multiple threads are blocked on an MVar they are woken up in FIFO order This is useful for providing fairness properties of abstractions built using MVar",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "putMVar",
          "normalized": "MVar a-\u003ea-\u003eIO()",
          "package": "strict-concurrency",
          "partial": "MVar",
          "signature": "MVar a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:putMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a combination of \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e; ie. it takes the value\n  from the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e, puts it back, and also returns it.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "readMVar",
          "package": "strict-concurrency",
          "signature": "MVar a -\u003e IO a",
          "source": "src/Control-Concurrent-MVar-Strict.html#readMVar",
          "type": "function"
        },
        "index": {
          "description": "This is combination of takeMVar and putMVar ie it takes the value from the MVar puts it back and also returns it",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "readMVar",
          "normalized": "MVar a-\u003eIO a",
          "package": "strict-concurrency",
          "partial": "MVar",
          "signature": "MVar a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:readMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a value from an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e, put a new value into the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e and\n  return the value taken. Note that there is a race condition whereby\n  another process can put something in the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e after the take\n  happens but before the put does.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "swapMVar",
          "package": "strict-concurrency",
          "signature": "MVar a -\u003e a -\u003e IO a",
          "source": "src/Control-Concurrent-MVar-Strict.html#swapMVar",
          "type": "function"
        },
        "index": {
          "description": "Take value from an MVar put new value into the MVar and return the value taken Note that there is race condition whereby another process can put something in the MVar after the take happens but before the put does",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "swapMVar",
          "normalized": "MVar a-\u003ea-\u003eIO a",
          "package": "strict-concurrency",
          "partial": "MVar",
          "signature": "MVar a-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:swapMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the contents of the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.  If the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is currently\n empty, \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e will wait until it is full.  After a \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e,\n the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is left empty.\n\u003c/p\u003e\u003cp\u003eThere are two further important properties of \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e is single-wakeup.  That is, if there are multiple\n     threads blocked in \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e, and the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e becomes full,\n     only one thread will be woken up.  The runtime guarantees that\n     the woken thread completes its \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/li\u003e\u003cli\u003e When multiple threads are blocked on an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e, they are\n     woken up in FIFO order.  This is useful for providing\n     fairness properties of abstractions built using \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "takeMVar",
          "package": "strict-concurrency",
          "signature": "MVar a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Return the contents of the MVar If the MVar is currently empty takeMVar will wait until it is full After takeMVar the MVar is left empty There are two further important properties of takeMVar takeMVar is single-wakeup That is if there are multiple threads blocked in takeMVar and the MVar becomes full only one thread will be woken up The runtime guarantees that the woken thread completes its takeMVar operation When multiple threads are blocked on an MVar they are woken up in FIFO order This is useful for providing fairness properties of abstractions built using MVar",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "takeMVar",
          "normalized": "MVar a-\u003eIO a",
          "package": "strict-concurrency",
          "partial": "MVar",
          "signature": "MVar a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:takeMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA non-blocking version of \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003etryPutMVar\u003c/a\u003e\u003c/code\u003e function\n attempts to put the value \u003ccode\u003ea\u003c/code\u003e into the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e, returning \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if\n it was successful, or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "tryPutMVar",
          "package": "strict-concurrency",
          "signature": "MVar a -\u003e a -\u003e IO Bool",
          "source": "src/Control-Concurrent-MVar-Strict.html#tryPutMVar",
          "type": "function"
        },
        "index": {
          "description": "non-blocking version of putMVar The tryPutMVar function attempts to put the value into the MVar returning True if it was successful or False otherwise",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "tryPutMVar",
          "normalized": "MVar a-\u003ea-\u003eIO Bool",
          "package": "strict-concurrency",
          "partial": "Put MVar",
          "signature": "MVar a-\u003ea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:tryPutMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA non-blocking version of \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003etryTakeMVar\u003c/a\u003e\u003c/code\u003e function\n returns immediately, with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e was empty, or\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e was full with contents \u003ccode\u003ea\u003c/code\u003e.  After \u003ccode\u003e\u003ca\u003etryTakeMVar\u003c/a\u003e\u003c/code\u003e,\n the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is left empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "tryTakeMVar",
          "package": "strict-concurrency",
          "signature": "MVar a -\u003e IO (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "non-blocking version of takeMVar The tryTakeMVar function returns immediately with Nothing if the MVar was empty or Just if the MVar was full with contents After tryTakeMVar the MVar is left empty",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "tryTakeMVar",
          "normalized": "MVar a-\u003eIO(Maybe a)",
          "package": "strict-concurrency",
          "partial": "Take MVar",
          "signature": "MVar a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:tryTakeMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithMVar\u003c/a\u003e\u003c/code\u003e is a safe wrapper for operating on the contents of an\n  \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.  This operation is exception-safe: it will replace the\n  original contents of the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e if an exception is raised (see\n  \u003ca\u003eControl.Exception\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "withMVar",
          "package": "strict-concurrency",
          "signature": "MVar a -\u003e (a -\u003e IO b) -\u003e IO b",
          "source": "src/Control-Concurrent-MVar-Strict.html#withMVar",
          "type": "function"
        },
        "index": {
          "description": "withMVar is safe wrapper for operating on the contents of an MVar This operation is exception-safe it will replace the original contents of the MVar if an exception is raised see Control.Exception",
          "hierarchy": "Control Concurrent MVar Strict",
          "module": "Control.Concurrent.MVar.Strict",
          "name": "withMVar",
          "normalized": "MVar a-\u003e(a-\u003eIO b)-\u003eIO b",
          "package": "strict-concurrency",
          "partial": "MVar",
          "signature": "MVar a-\u003e(a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/strict-concurrency/docs/Control-Concurrent-MVar-Strict.html#v:withMVar"
      }
    }
  ]
]