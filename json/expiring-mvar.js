[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#",
      "description": {
        "fct-module": "Control.Concurrent.MVar.Expiring",
        "fct-package": "expiring-mvar",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-MVar-Expiring.html",
        "fct-type": "module",
        "title": "Expiring"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent MVar Expiring",
        "module": "Control.Concurrent.MVar.Expiring",
        "name": "Expiring",
        "normalized": "",
        "package": "expiring-mvar",
        "partial": "Expiring",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#t:ExpiringMVar",
      "description": {
        "fct-descr": "\u003cp\u003eAn ExpiringMVar contains a value that will be thrown out after\n   a given period of time. The timer can be reset before the value\n   expires. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Expiring",
        "fct-package": "expiring-mvar",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-MVar-Expiring.html#ExpiringMVar",
        "fct-type": "data",
        "title": "ExpiringMVar"
      },
      "index": {
        "description": "An ExpiringMVar contains value that will be thrown out after given period of time The timer can be reset before the value expires",
        "hierarchy": "Control Concurrent MVar Expiring",
        "module": "Control.Concurrent.MVar.Expiring",
        "name": "ExpiringMVar",
        "normalized": "",
        "package": "expiring-mvar",
        "partial": "Expiring MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:cancelExpiration",
      "description": {
        "fct-descr": "\u003cp\u003eIf you decide that a value should never expire, you can cancel the timer. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Expiring",
        "fct-package": "expiring-mvar",
        "fct-signature": "ExpiringMVar a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-MVar-Expiring.html#cancelExpiration",
        "fct-type": "function",
        "title": "cancelExpiration"
      },
      "index": {
        "description": "If you decide that value should never expire you can cancel the timer",
        "hierarchy": "Control Concurrent MVar Expiring",
        "module": "Control.Concurrent.MVar.Expiring",
        "name": "cancelExpiration",
        "normalized": "ExpiringMVar a-\u003eIO()",
        "package": "expiring-mvar",
        "partial": "Expiration",
        "signature": "ExpiringMVar a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:changeExpiration",
      "description": {
        "fct-descr": "\u003cp\u003eIf the value hasn't yet expired, change the timer and reset it. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Expiring",
        "fct-package": "expiring-mvar",
        "fct-signature": "Int-\u003e ExpiringMVar a-\u003e IO (ExpiringMVar a)",
        "fct-type": "function",
        "title": "changeExpiration"
      },
      "index": {
        "description": "If the value hasn yet expired change the timer and reset it",
        "hierarchy": "Control Concurrent MVar Expiring",
        "module": "Control.Concurrent.MVar.Expiring",
        "name": "changeExpiration",
        "normalized": "Int-\u003eExpiringMVar a-\u003eIO(ExpiringMVar a)",
        "package": "expiring-mvar",
        "partial": "Expiration",
        "signature": "Int-\u003eExpiringMVar a-\u003eIO(ExpiringMVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:isExpiredMVar",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine whether an MVar has expired. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Expiring",
        "fct-package": "expiring-mvar",
        "fct-signature": "ExpiringMVar a -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-MVar-Expiring.html#isExpiredMVar",
        "fct-type": "function",
        "title": "isExpiredMVar"
      },
      "index": {
        "description": "Determine whether an MVar has expired",
        "hierarchy": "Control Concurrent MVar Expiring",
        "module": "Control.Concurrent.MVar.Expiring",
        "name": "isExpiredMVar",
        "normalized": "ExpiringMVar a-\u003eIO Bool",
        "package": "expiring-mvar",
        "partial": "Expired MVar",
        "signature": "ExpiringMVar a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:newExpiringMVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new value that is set to be thrown away after a minimum period of time. Each call to newExpiringMVar spawns a thread that runs until the value expires. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Expiring",
        "fct-package": "expiring-mvar",
        "fct-signature": "a-\u003e Int-\u003e IO (ExpiringMVar a)",
        "fct-type": "function",
        "title": "newExpiringMVar"
      },
      "index": {
        "description": "Create new value that is set to be thrown away after minimum period of time Each call to newExpiringMVar spawns thread that runs until the value expires",
        "hierarchy": "Control Concurrent MVar Expiring",
        "module": "Control.Concurrent.MVar.Expiring",
        "name": "newExpiringMVar",
        "normalized": "a-\u003eInt-\u003eIO(ExpiringMVar a)",
        "package": "expiring-mvar",
        "partial": "Expiring MVar",
        "signature": "a-\u003eInt-\u003eIO(ExpiringMVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:readExpiringMVar",
      "description": {
        "fct-descr": "\u003cp\u003eIf the value has not yet expired, you are able to retrieve it.\n   Reading the value does not expire it. In other words, readExpiringMVar behaves like readMVar.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Expiring",
        "fct-package": "expiring-mvar",
        "fct-signature": "ExpiringMVar a -\u003e IO (Maybe a)",
        "fct-source": "src/Control-Concurrent-MVar-Expiring.html#readExpiringMVar",
        "fct-type": "function",
        "title": "readExpiringMVar"
      },
      "index": {
        "description": "If the value has not yet expired you are able to retrieve it Reading the value does not expire it In other words readExpiringMVar behaves like readMVar",
        "hierarchy": "Control Concurrent MVar Expiring",
        "module": "Control.Concurrent.MVar.Expiring",
        "name": "readExpiringMVar",
        "normalized": "ExpiringMVar a-\u003eIO(Maybe a)",
        "package": "expiring-mvar",
        "partial": "Expiring MVar",
        "signature": "ExpiringMVar a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:removeExpiredMVars",
      "description": {
        "fct-descr": "\u003cp\u003eFor a collection of ExpiringMVars, filter out the ones that have expired, and put the remaining ExpiringMVars in a new collection. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Expiring",
        "fct-package": "expiring-mvar",
        "fct-signature": "t (ExpiringMVar a) -\u003e IO (f (ExpiringMVar a))",
        "fct-source": "src/Control-Concurrent-MVar-Expiring.html#removeExpiredMVars",
        "fct-type": "function",
        "title": "removeExpiredMVars"
      },
      "index": {
        "description": "For collection of ExpiringMVars filter out the ones that have expired and put the remaining ExpiringMVars in new collection",
        "hierarchy": "Control Concurrent MVar Expiring",
        "module": "Control.Concurrent.MVar.Expiring",
        "name": "removeExpiredMVars",
        "normalized": "a(ExpiringMVar b)-\u003eIO(c(ExpiringMVar b))",
        "package": "expiring-mvar",
        "partial": "Expired MVars",
        "signature": "t(ExpiringMVar a)-\u003eIO(f(ExpiringMVar a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/expiring-mvar/docs/Control-Concurrent-MVar-Expiring.html#v:resetExpiringMVarTimer",
      "description": {
        "fct-descr": "\u003cp\u003eIf the value has not yet expired, reset the timer. If the value expired,\n   no timer is created. \n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Expiring",
        "fct-package": "expiring-mvar",
        "fct-signature": "ExpiringMVar a -\u003e IO (ExpiringMVar a)",
        "fct-source": "src/Control-Concurrent-MVar-Expiring.html#resetExpiringMVarTimer",
        "fct-type": "function",
        "title": "resetExpiringMVarTimer"
      },
      "index": {
        "description": "If the value has not yet expired reset the timer If the value expired no timer is created",
        "hierarchy": "Control Concurrent MVar Expiring",
        "module": "Control.Concurrent.MVar.Expiring",
        "name": "resetExpiringMVarTimer",
        "normalized": "ExpiringMVar a-\u003eIO(ExpiringMVar a)",
        "package": "expiring-mvar",
        "partial": "Expiring MVar Timer",
        "signature": "ExpiringMVar a-\u003eIO(ExpiringMVar a)"
      }
    }
  }
]