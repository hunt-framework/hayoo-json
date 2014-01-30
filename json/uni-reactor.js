[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple semaphore\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Reactor.BSem",
        "fct-package": "uni-reactor",
        "fct-signature": "module",
        "fct-source": "src/Reactor-BSem.html",
        "fct-type": "module",
        "title": "BSem"
      },
      "index": {
        "description": "simple semaphore",
        "hierarchy": "Reactor BSem",
        "module": "Reactor.BSem",
        "name": "BSem",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "BSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#t:BSem",
      "description": {
        "fct-descr": "\u003cp\u003eA simple lock.\n\u003c/p\u003e",
        "fct-module": "Reactor.BSem",
        "fct-package": "uni-reactor",
        "fct-signature": "data",
        "fct-source": "src/Reactor-BSem.html#BSem",
        "fct-type": "data",
        "title": "BSem"
      },
      "index": {
        "description": "simple lock",
        "hierarchy": "Reactor BSem",
        "module": "Reactor.BSem",
        "name": "BSem",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "BSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#v:newBSem",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new unlocked BSem\n\u003c/p\u003e",
        "fct-module": "Reactor.BSem",
        "fct-package": "uni-reactor",
        "fct-signature": "IO BSem",
        "fct-source": "src/Reactor-BSem.html#newBSem",
        "fct-type": "function",
        "title": "newBSem"
      },
      "index": {
        "description": "Create new unlocked BSem",
        "hierarchy": "Reactor BSem",
        "module": "Reactor.BSem",
        "name": "newBSem",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "BSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#v:newLockedBSem",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new locked BSem\n\u003c/p\u003e",
        "fct-module": "Reactor.BSem",
        "fct-package": "uni-reactor",
        "fct-signature": "IO BSem",
        "fct-source": "src/Reactor-BSem.html#newLockedBSem",
        "fct-type": "function",
        "title": "newLockedBSem"
      },
      "index": {
        "description": "Create new locked BSem",
        "hierarchy": "Reactor BSem",
        "module": "Reactor.BSem",
        "name": "newLockedBSem",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "Locked BSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#v:tryAcquireBSems",
      "description": {
        "fct-descr": "\u003cp\u003etryAcquireBSems attempts to acquire a list of BSems.  If successful it\n returns the action to release them all again.  If unsuccessful it\n returns Nothing, and leaves all the BSems released.\n\u003c/p\u003e",
        "fct-module": "Reactor.BSem",
        "fct-package": "uni-reactor",
        "fct-signature": "[BSem] -\u003e IO (Maybe (IO ()))",
        "fct-source": "src/Reactor-BSem.html#tryAcquireBSems",
        "fct-type": "function",
        "title": "tryAcquireBSems"
      },
      "index": {
        "description": "tryAcquireBSems attempts to acquire list of BSems If successful it returns the action to release them all again If unsuccessful it returns Nothing and leaves all the BSems released",
        "hierarchy": "Reactor BSem",
        "module": "Reactor.BSem",
        "name": "tryAcquireBSems",
        "normalized": "[BSem]-\u003eIO(Maybe(IO()))",
        "package": "uni-reactor",
        "partial": "Acquire BSems",
        "signature": "[BSem]-\u003eIO(Maybe(IO()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#v:tryAcquireBSemsWithError",
      "description": {
        "fct-descr": "\u003cp\u003etryAcquireBSemsWithError is a generalisation of tryAcquireBSems, which\n produces an error message\n\u003c/p\u003e\u003cp\u003eThe first argument extracts an object's BSem; the second gets a String to\n be used as a message if we can't get the object's lock.\n\u003c/p\u003e",
        "fct-module": "Reactor.BSem",
        "fct-package": "uni-reactor",
        "fct-signature": "(object -\u003e BSem) -\u003e (object -\u003e IO String) -\u003e [object] -\u003e IO (WithError (IO ()))",
        "fct-source": "src/Reactor-BSem.html#tryAcquireBSemsWithError",
        "fct-type": "function",
        "title": "tryAcquireBSemsWithError"
      },
      "index": {
        "description": "tryAcquireBSemsWithError is generalisation of tryAcquireBSems which produces an error message The first argument extracts an object BSem the second gets String to be used as message if we can get the object lock",
        "hierarchy": "Reactor BSem",
        "module": "Reactor.BSem",
        "name": "tryAcquireBSemsWithError",
        "normalized": "(a-\u003eBSem)-\u003e(a-\u003eIO String)-\u003e[a]-\u003eIO(WithError(IO()))",
        "package": "uni-reactor",
        "partial": "Acquire BSems With Error",
        "signature": "(object-\u003eBSem)-\u003e(object-\u003eIO String)-\u003e[object]-\u003eIO(WithError(IO()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-BSem.html#v:tryAcquireBSemsWithError1",
      "description": {
        "fct-descr": "\u003cp\u003etryAcquireBSemsWithError1 toBSem getMessIfError objects\n attempts to acquire the BSems in (map toBSem objects).  In\n the event of a (toBSem object) already being acquired, it looks at\n the result of getMessIfError object.  If this is (Just mess)\n it returns an error condition with message (mess), first\n releasing all BSems it has already acquired; if it is (Nothing)\n it goes on to attempt to acquire the BSems for the remaining objects.\n If it gets to the end of the list it returns an action which can be\n used to release all the BSems it has acquired.\n\u003c/p\u003e",
        "fct-module": "Reactor.BSem",
        "fct-package": "uni-reactor",
        "fct-signature": "(object -\u003e IO BSem) -\u003e (object -\u003e IO (Maybe String)) -\u003e [object] -\u003e IO (WithError (IO ()))",
        "fct-source": "src/Reactor-BSem.html#tryAcquireBSemsWithError1",
        "fct-type": "function",
        "title": "tryAcquireBSemsWithError1"
      },
      "index": {
        "description": "tryAcquireBSemsWithError1 toBSem getMessIfError objects attempts to acquire the BSems in map toBSem objects In the event of toBSem object already being acquired it looks at the result of getMessIfError object If this is Just mess it returns an error condition with message mess first releasing all BSems it has already acquired if it is Nothing it goes on to attempt to acquire the BSems for the remaining objects If it gets to the end of the list it returns an action which can be used to release all the BSems it has acquired",
        "hierarchy": "Reactor BSem",
        "module": "Reactor.BSem",
        "name": "tryAcquireBSemsWithError1",
        "normalized": "(a-\u003eIO BSem)-\u003e(a-\u003eIO(Maybe String))-\u003e[a]-\u003eIO(WithError(IO()))",
        "package": "uni-reactor",
        "partial": "Acquire BSems With Error",
        "signature": "(object-\u003eIO BSem)-\u003e(object-\u003eIO(Maybe String))-\u003e[object]-\u003eIO(WithError(IO()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInfoBus implements the \u003ccode\u003e\u003ca\u003eshutdown\u003c/a\u003e\u003c/code\u003e command.  This destroys all the\n things registered via \u003ccode\u003e\u003ca\u003eregisterTool\u003c/a\u003e\u003c/code\u003e and not\n subsequently registered via \u003ccode\u003e\u003ca\u003ederegisterTool\u003c/a\u003e\u003c/code\u003e.  Tools are identified\n by \u003ccode\u003eObjectId\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Reactor.InfoBus",
        "fct-package": "uni-reactor",
        "fct-signature": "module",
        "fct-source": "src/Reactor-InfoBus.html",
        "fct-type": "module",
        "title": "InfoBus"
      },
      "index": {
        "description": "InfoBus implements the shutdown command This destroys all the things registered via registerTool and not subsequently registered via deregisterTool Tools are identified by ObjectId",
        "hierarchy": "Reactor InfoBus",
        "module": "Reactor.InfoBus",
        "name": "InfoBus",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "Info Bus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#v:deregisterTool",
      "description": {
        "fct-module": "Reactor.InfoBus",
        "fct-package": "uni-reactor",
        "fct-signature": "t -\u003e IO ()",
        "fct-source": "src/Reactor-InfoBus.html#deregisterTool",
        "fct-type": "function",
        "title": "deregisterTool"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor InfoBus",
        "module": "Reactor.InfoBus",
        "name": "deregisterTool",
        "normalized": "a-\u003eIO()",
        "package": "uni-reactor",
        "partial": "Tool",
        "signature": "t-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#v:encapsulateWaitTermAct",
      "description": {
        "fct-descr": "\u003cp\u003eencapsulate an action such that shutdown waits for its termination\n\u003c/p\u003e",
        "fct-module": "Reactor.InfoBus",
        "fct-package": "uni-reactor",
        "fct-signature": "IO () -\u003e IO ()",
        "fct-source": "src/Reactor-InfoBus.html#encapsulateWaitTermAct",
        "fct-type": "function",
        "title": "encapsulateWaitTermAct"
      },
      "index": {
        "description": "encapsulate an action such that shutdown waits for its termination",
        "hierarchy": "Reactor InfoBus",
        "module": "Reactor.InfoBus",
        "name": "encapsulateWaitTermAct",
        "normalized": "IO()-\u003eIO()",
        "package": "uni-reactor",
        "partial": "Wait Term Act",
        "signature": "IO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#v:registerDestroyAct",
      "description": {
        "fct-descr": "\u003cp\u003eregister the given action to be done at shutdown.  The returned action\n cancels the registration (without performing the given action).\n\u003c/p\u003e",
        "fct-module": "Reactor.InfoBus",
        "fct-package": "uni-reactor",
        "fct-signature": "IO () -\u003e IO (IO ())",
        "fct-source": "src/Reactor-InfoBus.html#registerDestroyAct",
        "fct-type": "function",
        "title": "registerDestroyAct"
      },
      "index": {
        "description": "register the given action to be done at shutdown The returned action cancels the registration without performing the given action",
        "hierarchy": "Reactor InfoBus",
        "module": "Reactor.InfoBus",
        "name": "registerDestroyAct",
        "normalized": "IO()-\u003eIO(IO())",
        "package": "uni-reactor",
        "partial": "Destroy Act",
        "signature": "IO()-\u003eIO(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#v:registerTool",
      "description": {
        "fct-module": "Reactor.InfoBus",
        "fct-package": "uni-reactor",
        "fct-signature": "t -\u003e IO ()",
        "fct-source": "src/Reactor-InfoBus.html#registerTool",
        "fct-type": "function",
        "title": "registerTool"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor InfoBus",
        "module": "Reactor.InfoBus",
        "name": "registerTool",
        "normalized": "a-\u003eIO()",
        "package": "uni-reactor",
        "partial": "Tool",
        "signature": "t-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#v:registerToolDebug",
      "description": {
        "fct-module": "Reactor.InfoBus",
        "fct-package": "uni-reactor",
        "fct-signature": "String -\u003e t -\u003e IO ()",
        "fct-source": "src/Reactor-InfoBus.html#registerToolDebug",
        "fct-type": "function",
        "title": "registerToolDebug"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor InfoBus",
        "module": "Reactor.InfoBus",
        "name": "registerToolDebug",
        "normalized": "String-\u003ea-\u003eIO()",
        "package": "uni-reactor",
        "partial": "Tool Debug",
        "signature": "String-\u003et-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-InfoBus.html#v:shutdown",
      "description": {
        "fct-module": "Reactor.InfoBus",
        "fct-package": "uni-reactor",
        "fct-signature": "IO ()",
        "fct-source": "src/Reactor-InfoBus.html#shutdown",
        "fct-type": "function",
        "title": "shutdown"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor InfoBus",
        "module": "Reactor.InfoBus",
        "name": "shutdown",
        "normalized": "IO()",
        "package": "uni-reactor",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-Lock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLock is an instance of a typical thing we synchronize with.\n One instance is \u003ccode\u003eBSem\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Reactor.Lock",
        "fct-package": "uni-reactor",
        "fct-signature": "module",
        "fct-source": "src/Reactor-Lock.html",
        "fct-type": "module",
        "title": "Lock"
      },
      "index": {
        "description": "Lock is an instance of typical thing we synchronize with One instance is BSem",
        "hierarchy": "Reactor Lock",
        "module": "Reactor.Lock",
        "name": "Lock",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-Lock.html#t:Lock",
      "description": {
        "fct-module": "Reactor.Lock",
        "fct-package": "uni-reactor",
        "fct-signature": "class",
        "fct-source": "src/Reactor-Lock.html#Lock",
        "fct-type": "class",
        "title": "Lock"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor Lock",
        "module": "Reactor.Lock",
        "name": "Lock",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-Lock.html#v:acquire",
      "description": {
        "fct-descr": "\u003cp\u003eacquire a lock\n\u003c/p\u003e",
        "fct-module": "Reactor.Lock",
        "fct-package": "uni-reactor",
        "fct-signature": "l -\u003e IO ()",
        "fct-source": "src/Reactor-Lock.html#acquire",
        "fct-type": "method",
        "title": "acquire"
      },
      "index": {
        "description": "acquire lock",
        "hierarchy": "Reactor Lock",
        "module": "Reactor.Lock",
        "name": "acquire",
        "normalized": "a-\u003eIO()",
        "package": "uni-reactor",
        "partial": "",
        "signature": "l-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-Lock.html#v:release",
      "description": {
        "fct-descr": "\u003cp\u003erelease a lock\n\u003c/p\u003e",
        "fct-module": "Reactor.Lock",
        "fct-package": "uni-reactor",
        "fct-signature": "l -\u003e IO ()",
        "fct-source": "src/Reactor-Lock.html#release",
        "fct-type": "method",
        "title": "release"
      },
      "index": {
        "description": "release lock",
        "hierarchy": "Reactor Lock",
        "module": "Reactor.Lock",
        "name": "release",
        "normalized": "a-\u003eIO()",
        "package": "uni-reactor",
        "partial": "",
        "signature": "l-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-Lock.html#v:tryAcquire",
      "description": {
        "fct-descr": "\u003cp\u003eacquire a lock and return True, if that can be done at once, otherwise\n return False.\n\u003c/p\u003e",
        "fct-module": "Reactor.Lock",
        "fct-package": "uni-reactor",
        "fct-signature": "l -\u003e IO Bool",
        "fct-source": "src/Reactor-Lock.html#tryAcquire",
        "fct-type": "method",
        "title": "tryAcquire"
      },
      "index": {
        "description": "acquire lock and return True if that can be done at once otherwise return False",
        "hierarchy": "Reactor Lock",
        "module": "Reactor.Lock",
        "name": "tryAcquire",
        "normalized": "a-\u003eIO Bool",
        "package": "uni-reactor",
        "partial": "Acquire",
        "signature": "l-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-MSem.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a much simpler reimplementation of Einar's old Mutex semaphores.\n This is a lock which can be required by a thread which is already holding\n it.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eTSem\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Reactor.MSem",
        "fct-package": "uni-reactor",
        "fct-signature": "module",
        "fct-source": "src/Reactor-MSem.html",
        "fct-type": "module",
        "title": "MSem"
      },
      "index": {
        "description": "This is much simpler reimplementation of Einar old Mutex semaphores This is lock which can be required by thread which is already holding it See also TSem",
        "hierarchy": "Reactor MSem",
        "module": "Reactor.MSem",
        "name": "MSem",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "MSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-MSem.html#t:MSem",
      "description": {
        "fct-module": "Reactor.MSem",
        "fct-package": "uni-reactor",
        "fct-signature": "data",
        "fct-source": "src/Reactor-MSem.html#MSem",
        "fct-type": "data",
        "title": "MSem"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor MSem",
        "module": "Reactor.MSem",
        "name": "MSem",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "MSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-MSem.html#v:newMSem",
      "description": {
        "fct-module": "Reactor.MSem",
        "fct-package": "uni-reactor",
        "fct-signature": "IO MSem",
        "fct-source": "src/Reactor-MSem.html#newMSem",
        "fct-type": "function",
        "title": "newMSem"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor MSem",
        "module": "Reactor.MSem",
        "name": "newMSem",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "MSem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-MSem.html#v:synchronizeWithChoice",
      "description": {
        "fct-module": "Reactor.MSem",
        "fct-package": "uni-reactor",
        "fct-signature": "MSem -\u003e (Bool -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Reactor-MSem.html#synchronizeWithChoice",
        "fct-type": "function",
        "title": "synchronizeWithChoice"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor MSem",
        "module": "Reactor.MSem",
        "name": "synchronizeWithChoice",
        "normalized": "MSem-\u003e(Bool-\u003eIO a)-\u003eIO a",
        "package": "uni-reactor",
        "partial": "With Choice",
        "signature": "MSem-\u003e(Bool-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cul\u003e\u003cli\u003e Reentrant, protected references: an IORef in an MVar, protected by\n - a reentrant monitor.\n -\n - The operations which change the value (setRef, changeRef, withRef)\n - are protected by the monitor, which additionally provides a reentrant\n - synchronize method.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Reactor.ReferenceVariables",
        "fct-package": "uni-reactor",
        "fct-signature": "module",
        "fct-source": "src/Reactor-ReferenceVariables.html",
        "fct-type": "module",
        "title": "ReferenceVariables"
      },
      "index": {
        "description": "Reentrant protected references an IORef in an MVar protected by reentrant monitor The operations which change the value setRef changeRef withRef are protected by the monitor which additionally provides reentrant synchronize method",
        "hierarchy": "Reactor ReferenceVariables",
        "module": "Reactor.ReferenceVariables",
        "name": "ReferenceVariables",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "Reference Variables",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#t:Ref",
      "description": {
        "fct-module": "Reactor.ReferenceVariables",
        "fct-package": "uni-reactor",
        "fct-signature": "data",
        "fct-source": "src/Reactor-ReferenceVariables.html#Ref",
        "fct-type": "data",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor ReferenceVariables",
        "module": "Reactor.ReferenceVariables",
        "name": "Ref",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#v:changeRef",
      "description": {
        "fct-module": "Reactor.ReferenceVariables",
        "fct-package": "uni-reactor",
        "fct-signature": "Ref a -\u003e (a -\u003e a) -\u003e IO ()",
        "fct-source": "src/Reactor-ReferenceVariables.html#changeRef",
        "fct-type": "function",
        "title": "changeRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor ReferenceVariables",
        "module": "Reactor.ReferenceVariables",
        "name": "changeRef",
        "normalized": "Ref a-\u003e(a-\u003ea)-\u003eIO()",
        "package": "uni-reactor",
        "partial": "Ref",
        "signature": "Ref a-\u003e(a-\u003ea)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#v:changeRefM",
      "description": {
        "fct-module": "Reactor.ReferenceVariables",
        "fct-package": "uni-reactor",
        "fct-signature": "Ref a -\u003e (a -\u003e IO a) -\u003e IO ()",
        "fct-source": "src/Reactor-ReferenceVariables.html#changeRefM",
        "fct-type": "function",
        "title": "changeRefM"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor ReferenceVariables",
        "module": "Reactor.ReferenceVariables",
        "name": "changeRefM",
        "normalized": "Ref a-\u003e(a-\u003eIO a)-\u003eIO()",
        "package": "uni-reactor",
        "partial": "Ref",
        "signature": "Ref a-\u003e(a-\u003eIO a)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#v:getRef",
      "description": {
        "fct-module": "Reactor.ReferenceVariables",
        "fct-package": "uni-reactor",
        "fct-signature": "Ref a -\u003e IO a",
        "fct-source": "src/Reactor-ReferenceVariables.html#getRef",
        "fct-type": "function",
        "title": "getRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor ReferenceVariables",
        "module": "Reactor.ReferenceVariables",
        "name": "getRef",
        "normalized": "Ref a-\u003eIO a",
        "package": "uni-reactor",
        "partial": "Ref",
        "signature": "Ref a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#v:newRef",
      "description": {
        "fct-module": "Reactor.ReferenceVariables",
        "fct-package": "uni-reactor",
        "fct-signature": "a -\u003e IO (Ref a)",
        "fct-source": "src/Reactor-ReferenceVariables.html#newRef",
        "fct-type": "function",
        "title": "newRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor ReferenceVariables",
        "module": "Reactor.ReferenceVariables",
        "name": "newRef",
        "normalized": "a-\u003eIO(Ref a)",
        "package": "uni-reactor",
        "partial": "Ref",
        "signature": "a-\u003eIO(Ref a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#v:setRef",
      "description": {
        "fct-module": "Reactor.ReferenceVariables",
        "fct-package": "uni-reactor",
        "fct-signature": "Ref a -\u003e a -\u003e IO ()",
        "fct-source": "src/Reactor-ReferenceVariables.html#setRef",
        "fct-type": "function",
        "title": "setRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor ReferenceVariables",
        "module": "Reactor.ReferenceVariables",
        "name": "setRef",
        "normalized": "Ref a-\u003ea-\u003eIO()",
        "package": "uni-reactor",
        "partial": "Ref",
        "signature": "Ref a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-ReferenceVariables.html#v:withRef",
      "description": {
        "fct-module": "Reactor.ReferenceVariables",
        "fct-package": "uni-reactor",
        "fct-signature": "Ref a -\u003e (a -\u003e b) -\u003e IO b",
        "fct-source": "src/Reactor-ReferenceVariables.html#withRef",
        "fct-type": "function",
        "title": "withRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor ReferenceVariables",
        "module": "Reactor.ReferenceVariables",
        "name": "withRef",
        "normalized": "Ref a-\u003e(a-\u003eb)-\u003eIO b",
        "package": "uni-reactor",
        "partial": "Ref",
        "signature": "Ref a-\u003e(a-\u003eb)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-WithDir.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA function for changing directories in a thread-safe way.\n\u003c/p\u003e\u003cp\u003eWe use an MSem to lock the current directory.  This means that\n withDir can be nested without deadlock (presumably the user knows what\n he's doing).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Reactor.WithDir",
        "fct-package": "uni-reactor",
        "fct-signature": "module",
        "fct-source": "src/Reactor-WithDir.html",
        "fct-type": "module",
        "title": "WithDir"
      },
      "index": {
        "description": "function for changing directories in thread-safe way We use an MSem to lock the current directory This means that withDir can be nested without deadlock presumably the user knows what he doing",
        "hierarchy": "Reactor WithDir",
        "module": "Reactor.WithDir",
        "name": "WithDir",
        "normalized": "",
        "package": "uni-reactor",
        "partial": "With Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-reactor/docs/Reactor-WithDir.html#v:withDir",
      "description": {
        "fct-module": "Reactor.WithDir",
        "fct-package": "uni-reactor",
        "fct-signature": "FilePath -\u003e IO a -\u003e IO a",
        "fct-source": "src/Reactor-WithDir.html#withDir",
        "fct-type": "function",
        "title": "withDir"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactor WithDir",
        "module": "Reactor.WithDir",
        "name": "withDir",
        "normalized": "FilePath-\u003eIO a-\u003eIO a",
        "package": "uni-reactor",
        "partial": "Dir",
        "signature": "FilePath-\u003eIO a-\u003eIO a"
      }
    }
  }
]