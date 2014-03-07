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
        "word": "uni-reactor"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple semaphore\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Reactor.BSem",
          "name": "BSem",
          "package": "uni-reactor",
          "source": "src/Reactor-BSem.html",
          "type": "module"
        },
        "index": {
          "description": "simple semaphore",
          "hierarchy": "Reactor BSem",
          "module": "Reactor.BSem",
          "name": "BSem",
          "package": "uni-reactor",
          "partial": "BSem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple lock.\n\u003c/p\u003e",
          "module": "Reactor.BSem",
          "name": "BSem",
          "package": "uni-reactor",
          "source": "src/Reactor-BSem.html#BSem",
          "type": "data"
        },
        "index": {
          "description": "simple lock",
          "hierarchy": "Reactor BSem",
          "module": "Reactor.BSem",
          "name": "BSem",
          "package": "uni-reactor",
          "partial": "BSem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#t:BSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new unlocked BSem\n\u003c/p\u003e",
          "module": "Reactor.BSem",
          "name": "newBSem",
          "package": "uni-reactor",
          "signature": "IO BSem",
          "source": "src/Reactor-BSem.html#newBSem",
          "type": "function"
        },
        "index": {
          "description": "Create new unlocked BSem",
          "hierarchy": "Reactor BSem",
          "module": "Reactor.BSem",
          "name": "newBSem",
          "package": "uni-reactor",
          "partial": "BSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#v:newBSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new locked BSem\n\u003c/p\u003e",
          "module": "Reactor.BSem",
          "name": "newLockedBSem",
          "package": "uni-reactor",
          "signature": "IO BSem",
          "source": "src/Reactor-BSem.html#newLockedBSem",
          "type": "function"
        },
        "index": {
          "description": "Create new locked BSem",
          "hierarchy": "Reactor BSem",
          "module": "Reactor.BSem",
          "name": "newLockedBSem",
          "package": "uni-reactor",
          "partial": "Locked BSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#v:newLockedBSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etryAcquireBSems attempts to acquire a list of BSems.  If successful it\n returns the action to release them all again.  If unsuccessful it\n returns Nothing, and leaves all the BSems released.\n\u003c/p\u003e",
          "module": "Reactor.BSem",
          "name": "tryAcquireBSems",
          "package": "uni-reactor",
          "signature": "[BSem] -\u003e IO (Maybe (IO ()))",
          "source": "src/Reactor-BSem.html#tryAcquireBSems",
          "type": "function"
        },
        "index": {
          "description": "tryAcquireBSems attempts to acquire list of BSems If successful it returns the action to release them all again If unsuccessful it returns Nothing and leaves all the BSems released",
          "hierarchy": "Reactor BSem",
          "module": "Reactor.BSem",
          "name": "tryAcquireBSems",
          "normalized": "[BSem]-\u003eIO(Maybe(IO()))",
          "package": "uni-reactor",
          "partial": "Acquire BSems",
          "signature": "[BSem]-\u003eIO(Maybe(IO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#v:tryAcquireBSems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etryAcquireBSemsWithError is a generalisation of tryAcquireBSems, which\n produces an error message\n\u003c/p\u003e\u003cp\u003eThe first argument extracts an object's BSem; the second gets a String to\n be used as a message if we can't get the object's lock.\n\u003c/p\u003e",
          "module": "Reactor.BSem",
          "name": "tryAcquireBSemsWithError",
          "package": "uni-reactor",
          "signature": "(object -\u003e BSem) -\u003e (object -\u003e IO String) -\u003e [object] -\u003e IO (WithError (IO ()))",
          "source": "src/Reactor-BSem.html#tryAcquireBSemsWithError",
          "type": "function"
        },
        "index": {
          "description": "tryAcquireBSemsWithError is generalisation of tryAcquireBSems which produces an error message The first argument extracts an object BSem the second gets String to be used as message if we can get the object lock",
          "hierarchy": "Reactor BSem",
          "module": "Reactor.BSem",
          "name": "tryAcquireBSemsWithError",
          "normalized": "(a-\u003eBSem)-\u003e(a-\u003eIO String)-\u003e[a]-\u003eIO(WithError(IO()))",
          "package": "uni-reactor",
          "partial": "Acquire BSems With Error",
          "signature": "(object-\u003eBSem)-\u003e(object-\u003eIO String)-\u003e[object]-\u003eIO(WithError(IO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#v:tryAcquireBSemsWithError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etryAcquireBSemsWithError1 toBSem getMessIfError objects\n attempts to acquire the BSems in (map toBSem objects).  In\n the event of a (toBSem object) already being acquired, it looks at\n the result of getMessIfError object.  If this is (Just mess)\n it returns an error condition with message (mess), first\n releasing all BSems it has already acquired; if it is (Nothing)\n it goes on to attempt to acquire the BSems for the remaining objects.\n If it gets to the end of the list it returns an action which can be\n used to release all the BSems it has acquired.\n\u003c/p\u003e",
          "module": "Reactor.BSem",
          "name": "tryAcquireBSemsWithError1",
          "package": "uni-reactor",
          "signature": "(object -\u003e IO BSem) -\u003e (object -\u003e IO (Maybe String)) -\u003e [object] -\u003e IO (WithError (IO ()))",
          "source": "src/Reactor-BSem.html#tryAcquireBSemsWithError1",
          "type": "function"
        },
        "index": {
          "description": "tryAcquireBSemsWithError1 toBSem getMessIfError objects attempts to acquire the BSems in map toBSem objects In the event of toBSem object already being acquired it looks at the result of getMessIfError object If this is Just mess it returns an error condition with message mess first releasing all BSems it has already acquired if it is Nothing it goes on to attempt to acquire the BSems for the remaining objects If it gets to the end of the list it returns an action which can be used to release all the BSems it has acquired",
          "hierarchy": "Reactor BSem",
          "module": "Reactor.BSem",
          "name": "tryAcquireBSemsWithError1",
          "normalized": "(a-\u003eIO BSem)-\u003e(a-\u003eIO(Maybe String))-\u003e[a]-\u003eIO(WithError(IO()))",
          "package": "uni-reactor",
          "partial": "Acquire BSems With Error",
          "signature": "(object-\u003eIO BSem)-\u003e(object-\u003eIO(Maybe String))-\u003e[object]-\u003eIO(WithError(IO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#v:tryAcquireBSemsWithError1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInfoBus implements the \u003ccode\u003e\u003ca\u003eshutdown\u003c/a\u003e\u003c/code\u003e command.  This destroys all the\n things registered via \u003ccode\u003e\u003ca\u003eregisterTool\u003c/a\u003e\u003c/code\u003e and not\n subsequently registered via \u003ccode\u003e\u003ca\u003ederegisterTool\u003c/a\u003e\u003c/code\u003e.  Tools are identified\n by \u003ccode\u003eObjectId\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Reactor.InfoBus",
          "name": "InfoBus",
          "package": "uni-reactor",
          "source": "src/Reactor-InfoBus.html",
          "type": "module"
        },
        "index": {
          "description": "InfoBus implements the shutdown command This destroys all the things registered via registerTool and not subsequently registered via deregisterTool Tools are identified by ObjectId",
          "hierarchy": "Reactor InfoBus",
          "module": "Reactor.InfoBus",
          "name": "InfoBus",
          "package": "uni-reactor",
          "partial": "Info Bus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.InfoBus",
          "name": "deregisterTool",
          "package": "uni-reactor",
          "signature": "t -\u003e IO ()",
          "source": "src/Reactor-InfoBus.html#deregisterTool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor InfoBus",
          "module": "Reactor.InfoBus",
          "name": "deregisterTool",
          "normalized": "a-\u003eIO()",
          "package": "uni-reactor",
          "partial": "Tool",
          "signature": "t-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#v:deregisterTool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencapsulate an action such that shutdown waits for its termination\n\u003c/p\u003e",
          "module": "Reactor.InfoBus",
          "name": "encapsulateWaitTermAct",
          "package": "uni-reactor",
          "signature": "IO () -\u003e IO ()",
          "source": "src/Reactor-InfoBus.html#encapsulateWaitTermAct",
          "type": "function"
        },
        "index": {
          "description": "encapsulate an action such that shutdown waits for its termination",
          "hierarchy": "Reactor InfoBus",
          "module": "Reactor.InfoBus",
          "name": "encapsulateWaitTermAct",
          "normalized": "IO()-\u003eIO()",
          "package": "uni-reactor",
          "partial": "Wait Term Act",
          "signature": "IO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#v:encapsulateWaitTermAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eregister the given action to be done at shutdown.  The returned action\n cancels the registration (without performing the given action).\n\u003c/p\u003e",
          "module": "Reactor.InfoBus",
          "name": "registerDestroyAct",
          "package": "uni-reactor",
          "signature": "IO () -\u003e IO (IO ())",
          "source": "src/Reactor-InfoBus.html#registerDestroyAct",
          "type": "function"
        },
        "index": {
          "description": "register the given action to be done at shutdown The returned action cancels the registration without performing the given action",
          "hierarchy": "Reactor InfoBus",
          "module": "Reactor.InfoBus",
          "name": "registerDestroyAct",
          "normalized": "IO()-\u003eIO(IO())",
          "package": "uni-reactor",
          "partial": "Destroy Act",
          "signature": "IO()-\u003eIO(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#v:registerDestroyAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.InfoBus",
          "name": "registerTool",
          "package": "uni-reactor",
          "signature": "t -\u003e IO ()",
          "source": "src/Reactor-InfoBus.html#registerTool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor InfoBus",
          "module": "Reactor.InfoBus",
          "name": "registerTool",
          "normalized": "a-\u003eIO()",
          "package": "uni-reactor",
          "partial": "Tool",
          "signature": "t-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#v:registerTool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.InfoBus",
          "name": "registerToolDebug",
          "package": "uni-reactor",
          "signature": "String -\u003e t -\u003e IO ()",
          "source": "src/Reactor-InfoBus.html#registerToolDebug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor InfoBus",
          "module": "Reactor.InfoBus",
          "name": "registerToolDebug",
          "normalized": "String-\u003ea-\u003eIO()",
          "package": "uni-reactor",
          "partial": "Tool Debug",
          "signature": "String-\u003et-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#v:registerToolDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.InfoBus",
          "name": "shutdown",
          "package": "uni-reactor",
          "signature": "IO ()",
          "source": "src/Reactor-InfoBus.html#shutdown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor InfoBus",
          "module": "Reactor.InfoBus",
          "name": "shutdown",
          "normalized": "IO()",
          "package": "uni-reactor",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#v:shutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLock is an instance of a typical thing we synchronize with.\n One instance is \u003ccode\u003eBSem\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Reactor.Lock",
          "name": "Lock",
          "package": "uni-reactor",
          "source": "src/Reactor-Lock.html",
          "type": "module"
        },
        "index": {
          "description": "Lock is an instance of typical thing we synchronize with One instance is BSem",
          "hierarchy": "Reactor Lock",
          "module": "Reactor.Lock",
          "name": "Lock",
          "package": "uni-reactor",
          "partial": "Lock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-Lock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.Lock",
          "name": "Lock",
          "package": "uni-reactor",
          "source": "src/Reactor-Lock.html#Lock",
          "type": "class"
        },
        "index": {
          "hierarchy": "Reactor Lock",
          "module": "Reactor.Lock",
          "name": "Lock",
          "package": "uni-reactor",
          "partial": "Lock",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-Lock.html#t:Lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eacquire a lock\n\u003c/p\u003e",
          "module": "Reactor.Lock",
          "name": "acquire",
          "package": "uni-reactor",
          "signature": "l -\u003e IO ()",
          "source": "src/Reactor-Lock.html#acquire",
          "type": "method"
        },
        "index": {
          "description": "acquire lock",
          "hierarchy": "Reactor Lock",
          "module": "Reactor.Lock",
          "name": "acquire",
          "normalized": "a-\u003eIO()",
          "package": "uni-reactor",
          "signature": "l-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-Lock.html#v:acquire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erelease a lock\n\u003c/p\u003e",
          "module": "Reactor.Lock",
          "name": "release",
          "package": "uni-reactor",
          "signature": "l -\u003e IO ()",
          "source": "src/Reactor-Lock.html#release",
          "type": "method"
        },
        "index": {
          "description": "release lock",
          "hierarchy": "Reactor Lock",
          "module": "Reactor.Lock",
          "name": "release",
          "normalized": "a-\u003eIO()",
          "package": "uni-reactor",
          "signature": "l-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-Lock.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eacquire a lock and return True, if that can be done at once, otherwise\n return False.\n\u003c/p\u003e",
          "module": "Reactor.Lock",
          "name": "tryAcquire",
          "package": "uni-reactor",
          "signature": "l -\u003e IO Bool",
          "source": "src/Reactor-Lock.html#tryAcquire",
          "type": "method"
        },
        "index": {
          "description": "acquire lock and return True if that can be done at once otherwise return False",
          "hierarchy": "Reactor Lock",
          "module": "Reactor.Lock",
          "name": "tryAcquire",
          "normalized": "a-\u003eIO Bool",
          "package": "uni-reactor",
          "partial": "Acquire",
          "signature": "l-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-Lock.html#v:tryAcquire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a much simpler reimplementation of Einar's old Mutex semaphores.\n This is a lock which can be required by a thread which is already holding\n it.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eTSem\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Reactor.MSem",
          "name": "MSem",
          "package": "uni-reactor",
          "source": "src/Reactor-MSem.html",
          "type": "module"
        },
        "index": {
          "description": "This is much simpler reimplementation of Einar old Mutex semaphores This is lock which can be required by thread which is already holding it See also TSem",
          "hierarchy": "Reactor MSem",
          "module": "Reactor.MSem",
          "name": "MSem",
          "package": "uni-reactor",
          "partial": "MSem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-MSem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.MSem",
          "name": "MSem",
          "package": "uni-reactor",
          "source": "src/Reactor-MSem.html#MSem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Reactor MSem",
          "module": "Reactor.MSem",
          "name": "MSem",
          "package": "uni-reactor",
          "partial": "MSem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-MSem.html#t:MSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.MSem",
          "name": "newMSem",
          "package": "uni-reactor",
          "signature": "IO MSem",
          "source": "src/Reactor-MSem.html#newMSem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor MSem",
          "module": "Reactor.MSem",
          "name": "newMSem",
          "package": "uni-reactor",
          "partial": "MSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-MSem.html#v:newMSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.MSem",
          "name": "synchronizeWithChoice",
          "package": "uni-reactor",
          "signature": "MSem -\u003e (Bool -\u003e IO a) -\u003e IO a",
          "source": "src/Reactor-MSem.html#synchronizeWithChoice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor MSem",
          "module": "Reactor.MSem",
          "name": "synchronizeWithChoice",
          "normalized": "MSem-\u003e(Bool-\u003eIO a)-\u003eIO a",
          "package": "uni-reactor",
          "partial": "With Choice",
          "signature": "MSem-\u003e(Bool-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-MSem.html#v:synchronizeWithChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cul\u003e\u003cli\u003e Reentrant, protected references: an IORef in an MVar, protected by\n - a reentrant monitor.\n -\n - The operations which change the value (setRef, changeRef, withRef)\n - are protected by the monitor, which additionally provides a reentrant\n - synchronize method.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Reactor.ReferenceVariables",
          "name": "ReferenceVariables",
          "package": "uni-reactor",
          "source": "src/Reactor-ReferenceVariables.html",
          "type": "module"
        },
        "index": {
          "description": "Reentrant protected references an IORef in an MVar protected by reentrant monitor The operations which change the value setRef changeRef withRef are protected by the monitor which additionally provides reentrant synchronize method",
          "hierarchy": "Reactor ReferenceVariables",
          "module": "Reactor.ReferenceVariables",
          "name": "ReferenceVariables",
          "package": "uni-reactor",
          "partial": "Reference Variables",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.ReferenceVariables",
          "name": "Ref",
          "package": "uni-reactor",
          "source": "src/Reactor-ReferenceVariables.html#Ref",
          "type": "data"
        },
        "index": {
          "hierarchy": "Reactor ReferenceVariables",
          "module": "Reactor.ReferenceVariables",
          "name": "Ref",
          "package": "uni-reactor",
          "partial": "Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.ReferenceVariables",
          "name": "changeRef",
          "package": "uni-reactor",
          "signature": "Ref a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/Reactor-ReferenceVariables.html#changeRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor ReferenceVariables",
          "module": "Reactor.ReferenceVariables",
          "name": "changeRef",
          "normalized": "Ref a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "uni-reactor",
          "partial": "Ref",
          "signature": "Ref a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#v:changeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.ReferenceVariables",
          "name": "changeRefM",
          "package": "uni-reactor",
          "signature": "Ref a -\u003e (a -\u003e IO a) -\u003e IO ()",
          "source": "src/Reactor-ReferenceVariables.html#changeRefM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor ReferenceVariables",
          "module": "Reactor.ReferenceVariables",
          "name": "changeRefM",
          "normalized": "Ref a-\u003e(a-\u003eIO a)-\u003eIO()",
          "package": "uni-reactor",
          "partial": "Ref",
          "signature": "Ref a-\u003e(a-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#v:changeRefM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.ReferenceVariables",
          "name": "getRef",
          "package": "uni-reactor",
          "signature": "Ref a -\u003e IO a",
          "source": "src/Reactor-ReferenceVariables.html#getRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor ReferenceVariables",
          "module": "Reactor.ReferenceVariables",
          "name": "getRef",
          "normalized": "Ref a-\u003eIO a",
          "package": "uni-reactor",
          "partial": "Ref",
          "signature": "Ref a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#v:getRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.ReferenceVariables",
          "name": "newRef",
          "package": "uni-reactor",
          "signature": "a -\u003e IO (Ref a)",
          "source": "src/Reactor-ReferenceVariables.html#newRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor ReferenceVariables",
          "module": "Reactor.ReferenceVariables",
          "name": "newRef",
          "normalized": "a-\u003eIO(Ref a)",
          "package": "uni-reactor",
          "partial": "Ref",
          "signature": "a-\u003eIO(Ref a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.ReferenceVariables",
          "name": "setRef",
          "package": "uni-reactor",
          "signature": "Ref a -\u003e a -\u003e IO ()",
          "source": "src/Reactor-ReferenceVariables.html#setRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor ReferenceVariables",
          "module": "Reactor.ReferenceVariables",
          "name": "setRef",
          "normalized": "Ref a-\u003ea-\u003eIO()",
          "package": "uni-reactor",
          "partial": "Ref",
          "signature": "Ref a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#v:setRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.ReferenceVariables",
          "name": "withRef",
          "package": "uni-reactor",
          "signature": "Ref a -\u003e (a -\u003e b) -\u003e IO b",
          "source": "src/Reactor-ReferenceVariables.html#withRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor ReferenceVariables",
          "module": "Reactor.ReferenceVariables",
          "name": "withRef",
          "normalized": "Ref a-\u003e(a-\u003eb)-\u003eIO b",
          "package": "uni-reactor",
          "partial": "Ref",
          "signature": "Ref a-\u003e(a-\u003eb)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#v:withRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA function for changing directories in a thread-safe way.\n\u003c/p\u003e\u003cp\u003eWe use an MSem to lock the current directory.  This means that\n withDir can be nested without deadlock (presumably the user knows what\n he's doing).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Reactor.WithDir",
          "name": "WithDir",
          "package": "uni-reactor",
          "source": "src/Reactor-WithDir.html",
          "type": "module"
        },
        "index": {
          "description": "function for changing directories in thread-safe way We use an MSem to lock the current directory This means that withDir can be nested without deadlock presumably the user knows what he doing",
          "hierarchy": "Reactor WithDir",
          "module": "Reactor.WithDir",
          "name": "WithDir",
          "package": "uni-reactor",
          "partial": "With Dir",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-WithDir.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactor.WithDir",
          "name": "withDir",
          "package": "uni-reactor",
          "signature": "FilePath -\u003e IO a -\u003e IO a",
          "source": "src/Reactor-WithDir.html#withDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactor WithDir",
          "module": "Reactor.WithDir",
          "name": "withDir",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "uni-reactor",
          "partial": "Dir",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-WithDir.html#v:withDir"
      }
    }
  ]
]