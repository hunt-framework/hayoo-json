[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Master.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe master process doesn't do any work except\n    managing the slaves. The master process is handled entirely by the library\n    in \u003ccode\u003e\u003ca\u003einitMaster\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Network.Master",
        "fct-package": "net-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Network-Master.html",
        "fct-type": "module",
        "title": "Master"
      },
      "index": {
        "description": "The master process doesn do any work except managing the slaves The master process is handled entirely by the library in initMaster",
        "hierarchy": "Control Concurrent Network Master",
        "module": "Control.Concurrent.Network.Master",
        "name": "Master",
        "normalized": "",
        "package": "net-concurrent",
        "partial": "Master",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Master.html#v:initMaster",
      "description": {
        "fct-descr": "\u003cp\u003eThe master process. Only returns when all slaves have\n   closed connection.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.Master",
        "fct-package": "net-concurrent",
        "fct-signature": "Int -\u003e PortID -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Network-Master.html#initMaster",
        "fct-type": "function",
        "title": "initMaster"
      },
      "index": {
        "description": "The master process Only returns when all slaves have closed connection",
        "hierarchy": "Control Concurrent Network Master",
        "module": "Control.Concurrent.Network.Master",
        "name": "initMaster",
        "normalized": "Int-\u003ePortID-\u003eIO()",
        "package": "net-concurrent",
        "partial": "Master",
        "signature": "Int-\u003ePortID-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNetwork variables.\n    Communication is done by using \u003ccode\u003eNVar\u003c/code\u003e variables similar to \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e in Concurrent.\n\u003c/p\u003e\u003cp\u003eEvery read and every write results in network transaction with the master process,\n    so handle with care.\n\u003c/p\u003e\u003cp\u003eThis is done with a push style implementation so \u003ccode\u003e\u003ca\u003eputNVar\u003c/a\u003e\u003c/code\u003e propagets the value to\n    the master process, but other slaves won't get automatically notified\n    about the change. The next \u003ccode\u003e\u003ca\u003etakeNVar\u003c/a\u003e\u003c/code\u003e will result in the updated value.\n\u003c/p\u003e\u003cp\u003eTo save network bandwith and load on the master, it is possible to wait for an\n    \u003ccode\u003eNVar\u003c/code\u003e to change value using \u003ccode\u003e\u003ca\u003epollWithOp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Network.NVar",
        "fct-package": "net-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Network-NVar.html",
        "fct-type": "module",
        "title": "NVar"
      },
      "index": {
        "description": "Network variables Communication is done by using NVar variables similar to MVar in Concurrent Every read and every write results in network transaction with the master process so handle with care This is done with push style implementation so putNVar propagets the value to the master process but other slaves won get automatically notified about the change The next takeNVar will result in the updated value To save network bandwith and load on the master it is possible to wait for an NVar to change value using pollWithOp",
        "hierarchy": "Control Concurrent Network NVar",
        "module": "Control.Concurrent.Network.NVar",
        "name": "NVar",
        "normalized": "",
        "package": "net-concurrent",
        "partial": "NVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:newNVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new empty \u003ccode\u003eNVar\u003c/code\u003e on the master. Doesn't block the caller.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.NVar",
        "fct-package": "net-concurrent",
        "fct-signature": "NCContext -\u003e String -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Network-NVar.html#newNVar",
        "fct-type": "function",
        "title": "newNVar"
      },
      "index": {
        "description": "Creates new empty NVar on the master Doesn block the caller",
        "hierarchy": "Control Concurrent Network NVar",
        "module": "Control.Concurrent.Network.NVar",
        "name": "newNVar",
        "normalized": "NCContext-\u003eString-\u003eIO()",
        "package": "net-concurrent",
        "partial": "NVar",
        "signature": "NCContext-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:pollWithOp",
      "description": {
        "fct-descr": "\u003cp\u003ePolls while the given condition is true for \u003ccode\u003eNVar\u003c/code\u003e called \u003ccode\u003ename\u003c/code\u003e.\n    As this call doesn't return while the condition is true, it's much\n    more efficient than busy waiting in the slave generating network\n    traffic.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.NVar",
        "fct-package": "net-concurrent",
        "fct-signature": "NCContext -\u003e String -\u003e Equality -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Network-NVar.html#pollWithOp",
        "fct-type": "function",
        "title": "pollWithOp"
      },
      "index": {
        "description": "Polls while the given condition is true for NVar called name As this call doesn return while the condition is true it much more efficient than busy waiting in the slave generating network traffic",
        "hierarchy": "Control Concurrent Network NVar",
        "module": "Control.Concurrent.Network.NVar",
        "name": "pollWithOp",
        "normalized": "NCContext-\u003eString-\u003eEquality-\u003ea-\u003eIO()",
        "package": "net-concurrent",
        "partial": "With Op",
        "signature": "NCContext-\u003eString-\u003eEquality-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:putNVar",
      "description": {
        "fct-descr": "\u003cp\u003ePuts a value into \u003ccode\u003eNVar\u003c/code\u003e specified by the name.\n   If the \u003ccode\u003eNVar\u003c/code\u003e doesn't exist this blocks the caller until it's\n    created potentially by an  other slave.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e already has a value this blocks the caller until\n    an other slave calls \u003ccode\u003e\u003ca\u003etakeNVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e is empty this returns immediately after the network\n    transactions.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.NVar",
        "fct-package": "net-concurrent",
        "fct-signature": "NCContext -\u003e String -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Network-NVar.html#putNVar",
        "fct-type": "function",
        "title": "putNVar"
      },
      "index": {
        "description": "Puts value into NVar specified by the name If the NVar doesn exist this blocks the caller until it created potentially by an other slave If the NVar already has value this blocks the caller until an other slave calls takeNVar If the NVar is empty this returns immediately after the network transactions",
        "hierarchy": "Control Concurrent Network NVar",
        "module": "Control.Concurrent.Network.NVar",
        "name": "putNVar",
        "normalized": "NCContext-\u003eString-\u003ea-\u003eIO()",
        "package": "net-concurrent",
        "partial": "NVar",
        "signature": "NCContext-\u003eString-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:readNVar",
      "description": {
        "fct-descr": "\u003cp\u003eLike with \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003es this takes an \u003ccode\u003eNVar\u003c/code\u003e put's the taken value back,\n   and returns it.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.NVar",
        "fct-package": "net-concurrent",
        "fct-signature": "NCContext -\u003e String -\u003e IO a",
        "fct-source": "src/Control-Concurrent-Network-NVar.html#readNVar",
        "fct-type": "function",
        "title": "readNVar"
      },
      "index": {
        "description": "Like with MVar this takes an NVar put the taken value back and returns it",
        "hierarchy": "Control Concurrent Network NVar",
        "module": "Control.Concurrent.Network.NVar",
        "name": "readNVar",
        "normalized": "NCContext-\u003eString-\u003eIO a",
        "package": "net-concurrent",
        "partial": "NVar",
        "signature": "NCContext-\u003eString-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:takeNVar",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the latest value of \u003ccode\u003eNVar\u003c/code\u003e from the master.\n   If the \u003ccode\u003eNVar\u003c/code\u003e doesn't exist this blocks the caller until it's\n    created potentially by an other slave.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e is empty this blocks the caller until\n    an other slave calls \u003ccode\u003e\u003ca\u003eputNVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e has a value this returns immediately after the network\n    transactions.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.NVar",
        "fct-package": "net-concurrent",
        "fct-signature": "NCContext -\u003e String -\u003e IO a",
        "fct-source": "src/Control-Concurrent-Network-NVar.html#takeNVar",
        "fct-type": "function",
        "title": "takeNVar"
      },
      "index": {
        "description": "Takes the latest value of NVar from the master If the NVar doesn exist this blocks the caller until it created potentially by an other slave If the NVar is empty this blocks the caller until an other slave calls putNVar If the NVar has value this returns immediately after the network transactions",
        "hierarchy": "Control Concurrent Network NVar",
        "module": "Control.Concurrent.Network.NVar",
        "name": "takeNVar",
        "normalized": "NCContext-\u003eString-\u003eIO a",
        "package": "net-concurrent",
        "partial": "NVar",
        "signature": "NCContext-\u003eString-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:tryPutNVar",
      "description": {
        "fct-descr": "\u003cp\u003eTries to put a value into \u003ccode\u003eNVar\u003c/code\u003e specified by the name.\n   If the \u003ccode\u003eNVar\u003c/code\u003e doesn't exist returns \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e already has a value returns \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e and\n    leaves the value untouched.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e is empty this sets it to the specified value\n    and returns \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.NVar",
        "fct-package": "net-concurrent",
        "fct-signature": "NCContext -\u003e String -\u003e a -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-Network-NVar.html#tryPutNVar",
        "fct-type": "function",
        "title": "tryPutNVar"
      },
      "index": {
        "description": "Tries to put value into NVar specified by the name If the NVar doesn exist returns IO False If the NVar already has value returns IO False and leaves the value untouched If the NVar is empty this sets it to the specified value and returns IO True",
        "hierarchy": "Control Concurrent Network NVar",
        "module": "Control.Concurrent.Network.NVar",
        "name": "tryPutNVar",
        "normalized": "NCContext-\u003eString-\u003ea-\u003eIO Bool",
        "package": "net-concurrent",
        "partial": "Put NVar",
        "signature": "NCContext-\u003eString-\u003ea-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:tryTakeNVar",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the latest value of \u003ccode\u003eNVar\u003c/code\u003e from the master.\n   If the \u003ccode\u003eNVar\u003c/code\u003e doesn't exist this blocks the caller until it's\n    created potentially by an other slave.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e is empty this blocks the caller until\n    an other slave calls \u003ccode\u003e\u003ca\u003eputNVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e has a value this returns immediately after the network\n    transactions.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.NVar",
        "fct-package": "net-concurrent",
        "fct-signature": "NCContext -\u003e String -\u003e IO (Maybe a)",
        "fct-source": "src/Control-Concurrent-Network-NVar.html#tryTakeNVar",
        "fct-type": "function",
        "title": "tryTakeNVar"
      },
      "index": {
        "description": "Takes the latest value of NVar from the master If the NVar doesn exist this blocks the caller until it created potentially by an other slave If the NVar is empty this blocks the caller until an other slave calls putNVar If the NVar has value this returns immediately after the network transactions",
        "hierarchy": "Control Concurrent Network NVar",
        "module": "Control.Concurrent.Network.NVar",
        "name": "tryTakeNVar",
        "normalized": "NCContext-\u003eString-\u003eIO(Maybe a)",
        "package": "net-concurrent",
        "partial": "Take NVar",
        "signature": "NCContext-\u003eString-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Process.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral idea is having one dedicated master process and an arbitrary\n    number of slave processes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Network.Process",
        "fct-package": "net-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Network-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "General idea is having one dedicated master process and an arbitrary number of slave processes",
        "hierarchy": "Control Concurrent Network Process",
        "module": "Control.Concurrent.Network.Process",
        "name": "Process",
        "normalized": "",
        "package": "net-concurrent",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Process.html#v:initProcess",
      "description": {
        "fct-descr": "\u003cp\u003eConvinience function. It calls either \u003ccode\u003e\u003ca\u003einitMaster\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003einitSlave\u003c/a\u003e\u003c/code\u003e depending on whether we have -m on the command line\n   or not. If -m is specified the following argument should be the\n   number of slaves to wait for.\n\u003c/p\u003e\u003cp\u003eReturns in the slave processes with the NC context.\n   Does not return in the master process.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.Process",
        "fct-package": "net-concurrent",
        "fct-signature": "IO NCContext",
        "fct-source": "src/Control-Concurrent-Network-Process.html#initProcess",
        "fct-type": "function",
        "title": "initProcess"
      },
      "index": {
        "description": "Convinience function It calls either initMaster or initSlave depending on whether we have on the command line or not If is specified the following argument should be the number of slaves to wait for Returns in the slave processes with the NC context Does not return in the master process",
        "hierarchy": "Control Concurrent Network Process",
        "module": "Control.Concurrent.Network.Process",
        "name": "initProcess",
        "normalized": "",
        "package": "net-concurrent",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSlave processes have a single connection towards the master for simplicity.\n   Communication is done by using \u003ccode\u003eNVar\u003c/code\u003e variables similar to \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e in Concurrent.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Network.Slave",
        "fct-package": "net-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Network-Slave.html",
        "fct-type": "module",
        "title": "Slave"
      },
      "index": {
        "description": "Slave processes have single connection towards the master for simplicity Communication is done by using NVar variables similar to MVar in Concurrent",
        "hierarchy": "Control Concurrent Network Slave",
        "module": "Control.Concurrent.Network.Slave",
        "name": "Slave",
        "normalized": "",
        "package": "net-concurrent",
        "partial": "Slave",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#t:NCContext",
      "description": {
        "fct-descr": "\u003cp\u003ethe NC Context\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.Slave",
        "fct-package": "net-concurrent",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Network-Slave.html#NCContext",
        "fct-type": "data",
        "title": "NCContext"
      },
      "index": {
        "description": "the NC Context",
        "hierarchy": "Control Concurrent Network Slave",
        "module": "Control.Concurrent.Network.Slave",
        "name": "NCContext",
        "normalized": "",
        "package": "net-concurrent",
        "partial": "NCContext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#v:NCC",
      "description": {
        "fct-module": "Control.Concurrent.Network.Slave",
        "fct-package": "net-concurrent",
        "fct-signature": "NCC",
        "fct-source": "src/Control-Concurrent-Network-Slave.html#NCContext",
        "fct-type": "function",
        "title": "NCC"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Network Slave",
        "module": "Control.Concurrent.Network.Slave",
        "name": "NCC",
        "normalized": "",
        "package": "net-concurrent",
        "partial": "NCC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#v:hdl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.Network.Slave",
        "fct-package": "net-concurrent",
        "fct-signature": "MVar Handle",
        "fct-source": "src/Control-Concurrent-Network-Slave.html#NCContext",
        "fct-type": "function",
        "title": "hdl"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Network Slave",
        "module": "Control.Concurrent.Network.Slave",
        "name": "hdl",
        "normalized": "",
        "package": "net-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#v:initSlave",
      "description": {
        "fct-descr": "\u003cp\u003eInitialises a slave process returning the NC context.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.Slave",
        "fct-package": "net-concurrent",
        "fct-signature": "HostName -\u003e PortID -\u003e IO NCContext",
        "fct-source": "src/Control-Concurrent-Network-Slave.html#initSlave",
        "fct-type": "function",
        "title": "initSlave"
      },
      "index": {
        "description": "Initialises slave process returning the NC context",
        "hierarchy": "Control Concurrent Network Slave",
        "module": "Control.Concurrent.Network.Slave",
        "name": "initSlave",
        "normalized": "HostName-\u003ePortID-\u003eIO NCContext",
        "package": "net-concurrent",
        "partial": "Slave",
        "signature": "HostName-\u003ePortID-\u003eIO NCContext"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#v:numSlaves",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of slaves\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.Slave",
        "fct-package": "net-concurrent",
        "fct-signature": "NCContext -\u003e IO Int",
        "fct-source": "src/Control-Concurrent-Network-Slave.html#numSlaves",
        "fct-type": "function",
        "title": "numSlaves"
      },
      "index": {
        "description": "Number of slaves",
        "hierarchy": "Control Concurrent Network Slave",
        "module": "Control.Concurrent.Network.Slave",
        "name": "numSlaves",
        "normalized": "NCContext-\u003eIO Int",
        "package": "net-concurrent",
        "partial": "Slaves",
        "signature": "NCContext-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#v:printMsg",
      "description": {
        "fct-descr": "\u003cp\u003ePrints a message on master\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.Slave",
        "fct-package": "net-concurrent",
        "fct-signature": "NCContext -\u003e String -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Network-Slave.html#printMsg",
        "fct-type": "function",
        "title": "printMsg"
      },
      "index": {
        "description": "Prints message on master",
        "hierarchy": "Control Concurrent Network Slave",
        "module": "Control.Concurrent.Network.Slave",
        "name": "printMsg",
        "normalized": "NCContext-\u003eString-\u003eIO()",
        "package": "net-concurrent",
        "partial": "Msg",
        "signature": "NCContext-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#v:slaveID",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the slave ID of the caller\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Network.Slave",
        "fct-package": "net-concurrent",
        "fct-signature": "NCContext -\u003e IO Int",
        "fct-source": "src/Control-Concurrent-Network-Slave.html#slaveID",
        "fct-type": "function",
        "title": "slaveID"
      },
      "index": {
        "description": "Returns the slave ID of the caller",
        "hierarchy": "Control Concurrent Network Slave",
        "module": "Control.Concurrent.Network.Slave",
        "name": "slaveID",
        "normalized": "NCContext-\u003eIO Int",
        "package": "net-concurrent",
        "partial": "ID",
        "signature": "NCContext-\u003eIO Int"
      }
    }
  }
]