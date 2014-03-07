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
        "word": "net-concurrent"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe master process doesn't do any work except\n    managing the slaves. The master process is handled entirely by the library\n    in \u003ccode\u003e\u003ca\u003einitMaster\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Network.Master",
          "name": "Master",
          "package": "net-concurrent",
          "source": "src/Control-Concurrent-Network-Master.html",
          "type": "module"
        },
        "index": {
          "description": "The master process doesn do any work except managing the slaves The master process is handled entirely by the library in initMaster",
          "hierarchy": "Control Concurrent Network Master",
          "module": "Control.Concurrent.Network.Master",
          "name": "Master",
          "package": "net-concurrent",
          "partial": "Master",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Master.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe master process. Only returns when all slaves have\n   closed connection.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.Master",
          "name": "initMaster",
          "package": "net-concurrent",
          "signature": "Int -\u003e PortID -\u003e IO ()",
          "source": "src/Control-Concurrent-Network-Master.html#initMaster",
          "type": "function"
        },
        "index": {
          "description": "The master process Only returns when all slaves have closed connection",
          "hierarchy": "Control Concurrent Network Master",
          "module": "Control.Concurrent.Network.Master",
          "name": "initMaster",
          "normalized": "Int-\u003ePortID-\u003eIO()",
          "package": "net-concurrent",
          "partial": "Master",
          "signature": "Int-\u003ePortID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Master.html#v:initMaster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNetwork variables.\n    Communication is done by using \u003ccode\u003eNVar\u003c/code\u003e variables similar to \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e in Concurrent.\n\u003c/p\u003e\u003cp\u003eEvery read and every write results in network transaction with the master process,\n    so handle with care.\n\u003c/p\u003e\u003cp\u003eThis is done with a push style implementation so \u003ccode\u003e\u003ca\u003eputNVar\u003c/a\u003e\u003c/code\u003e propagets the value to\n    the master process, but other slaves won't get automatically notified\n    about the change. The next \u003ccode\u003e\u003ca\u003etakeNVar\u003c/a\u003e\u003c/code\u003e will result in the updated value.\n\u003c/p\u003e\u003cp\u003eTo save network bandwith and load on the master, it is possible to wait for an\n    \u003ccode\u003eNVar\u003c/code\u003e to change value using \u003ccode\u003e\u003ca\u003epollWithOp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Network.NVar",
          "name": "NVar",
          "package": "net-concurrent",
          "source": "src/Control-Concurrent-Network-NVar.html",
          "type": "module"
        },
        "index": {
          "description": "Network variables Communication is done by using NVar variables similar to MVar in Concurrent Every read and every write results in network transaction with the master process so handle with care This is done with push style implementation so putNVar propagets the value to the master process but other slaves won get automatically notified about the change The next takeNVar will result in the updated value To save network bandwith and load on the master it is possible to wait for an NVar to change value using pollWithOp",
          "hierarchy": "Control Concurrent Network NVar",
          "module": "Control.Concurrent.Network.NVar",
          "name": "NVar",
          "package": "net-concurrent",
          "partial": "NVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new empty \u003ccode\u003eNVar\u003c/code\u003e on the master. Doesn't block the caller.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.NVar",
          "name": "newNVar",
          "package": "net-concurrent",
          "signature": "NCContext -\u003e String -\u003e IO ()",
          "source": "src/Control-Concurrent-Network-NVar.html#newNVar",
          "type": "function"
        },
        "index": {
          "description": "Creates new empty NVar on the master Doesn block the caller",
          "hierarchy": "Control Concurrent Network NVar",
          "module": "Control.Concurrent.Network.NVar",
          "name": "newNVar",
          "normalized": "NCContext-\u003eString-\u003eIO()",
          "package": "net-concurrent",
          "partial": "NVar",
          "signature": "NCContext-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:newNVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolls while the given condition is true for \u003ccode\u003eNVar\u003c/code\u003e called \u003ccode\u003ename\u003c/code\u003e.\n    As this call doesn't return while the condition is true, it's much\n    more efficient than busy waiting in the slave generating network\n    traffic.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.NVar",
          "name": "pollWithOp",
          "package": "net-concurrent",
          "signature": "NCContext -\u003e String -\u003e Equality -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Network-NVar.html#pollWithOp",
          "type": "function"
        },
        "index": {
          "description": "Polls while the given condition is true for NVar called name As this call doesn return while the condition is true it much more efficient than busy waiting in the slave generating network traffic",
          "hierarchy": "Control Concurrent Network NVar",
          "module": "Control.Concurrent.Network.NVar",
          "name": "pollWithOp",
          "normalized": "NCContext-\u003eString-\u003eEquality-\u003ea-\u003eIO()",
          "package": "net-concurrent",
          "partial": "With Op",
          "signature": "NCContext-\u003eString-\u003eEquality-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:pollWithOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts a value into \u003ccode\u003eNVar\u003c/code\u003e specified by the name.\n   If the \u003ccode\u003eNVar\u003c/code\u003e doesn't exist this blocks the caller until it's\n    created potentially by an  other slave.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e already has a value this blocks the caller until\n    an other slave calls \u003ccode\u003e\u003ca\u003etakeNVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e is empty this returns immediately after the network\n    transactions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.NVar",
          "name": "putNVar",
          "package": "net-concurrent",
          "signature": "NCContext -\u003e String -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-Network-NVar.html#putNVar",
          "type": "function"
        },
        "index": {
          "description": "Puts value into NVar specified by the name If the NVar doesn exist this blocks the caller until it created potentially by an other slave If the NVar already has value this blocks the caller until an other slave calls takeNVar If the NVar is empty this returns immediately after the network transactions",
          "hierarchy": "Control Concurrent Network NVar",
          "module": "Control.Concurrent.Network.NVar",
          "name": "putNVar",
          "normalized": "NCContext-\u003eString-\u003ea-\u003eIO()",
          "package": "net-concurrent",
          "partial": "NVar",
          "signature": "NCContext-\u003eString-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:putNVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike with \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003es this takes an \u003ccode\u003eNVar\u003c/code\u003e put's the taken value back,\n   and returns it.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.NVar",
          "name": "readNVar",
          "package": "net-concurrent",
          "signature": "NCContext -\u003e String -\u003e IO a",
          "source": "src/Control-Concurrent-Network-NVar.html#readNVar",
          "type": "function"
        },
        "index": {
          "description": "Like with MVar this takes an NVar put the taken value back and returns it",
          "hierarchy": "Control Concurrent Network NVar",
          "module": "Control.Concurrent.Network.NVar",
          "name": "readNVar",
          "normalized": "NCContext-\u003eString-\u003eIO a",
          "package": "net-concurrent",
          "partial": "NVar",
          "signature": "NCContext-\u003eString-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:readNVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the latest value of \u003ccode\u003eNVar\u003c/code\u003e from the master.\n   If the \u003ccode\u003eNVar\u003c/code\u003e doesn't exist this blocks the caller until it's\n    created potentially by an other slave.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e is empty this blocks the caller until\n    an other slave calls \u003ccode\u003e\u003ca\u003eputNVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e has a value this returns immediately after the network\n    transactions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.NVar",
          "name": "takeNVar",
          "package": "net-concurrent",
          "signature": "NCContext -\u003e String -\u003e IO a",
          "source": "src/Control-Concurrent-Network-NVar.html#takeNVar",
          "type": "function"
        },
        "index": {
          "description": "Takes the latest value of NVar from the master If the NVar doesn exist this blocks the caller until it created potentially by an other slave If the NVar is empty this blocks the caller until an other slave calls putNVar If the NVar has value this returns immediately after the network transactions",
          "hierarchy": "Control Concurrent Network NVar",
          "module": "Control.Concurrent.Network.NVar",
          "name": "takeNVar",
          "normalized": "NCContext-\u003eString-\u003eIO a",
          "package": "net-concurrent",
          "partial": "NVar",
          "signature": "NCContext-\u003eString-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:takeNVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to put a value into \u003ccode\u003eNVar\u003c/code\u003e specified by the name.\n   If the \u003ccode\u003eNVar\u003c/code\u003e doesn't exist returns \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e already has a value returns \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e and\n    leaves the value untouched.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e is empty this sets it to the specified value\n    and returns \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.NVar",
          "name": "tryPutNVar",
          "package": "net-concurrent",
          "signature": "NCContext -\u003e String -\u003e a -\u003e IO Bool",
          "source": "src/Control-Concurrent-Network-NVar.html#tryPutNVar",
          "type": "function"
        },
        "index": {
          "description": "Tries to put value into NVar specified by the name If the NVar doesn exist returns IO False If the NVar already has value returns IO False and leaves the value untouched If the NVar is empty this sets it to the specified value and returns IO True",
          "hierarchy": "Control Concurrent Network NVar",
          "module": "Control.Concurrent.Network.NVar",
          "name": "tryPutNVar",
          "normalized": "NCContext-\u003eString-\u003ea-\u003eIO Bool",
          "package": "net-concurrent",
          "partial": "Put NVar",
          "signature": "NCContext-\u003eString-\u003ea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:tryPutNVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the latest value of \u003ccode\u003eNVar\u003c/code\u003e from the master.\n   If the \u003ccode\u003eNVar\u003c/code\u003e doesn't exist this blocks the caller until it's\n    created potentially by an other slave.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e is empty this blocks the caller until\n    an other slave calls \u003ccode\u003e\u003ca\u003eputNVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eNVar\u003c/code\u003e has a value this returns immediately after the network\n    transactions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.NVar",
          "name": "tryTakeNVar",
          "package": "net-concurrent",
          "signature": "NCContext -\u003e String -\u003e IO (Maybe a)",
          "source": "src/Control-Concurrent-Network-NVar.html#tryTakeNVar",
          "type": "function"
        },
        "index": {
          "description": "Takes the latest value of NVar from the master If the NVar doesn exist this blocks the caller until it created potentially by an other slave If the NVar is empty this blocks the caller until an other slave calls putNVar If the NVar has value this returns immediately after the network transactions",
          "hierarchy": "Control Concurrent Network NVar",
          "module": "Control.Concurrent.Network.NVar",
          "name": "tryTakeNVar",
          "normalized": "NCContext-\u003eString-\u003eIO(Maybe a)",
          "package": "net-concurrent",
          "partial": "Take NVar",
          "signature": "NCContext-\u003eString-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-NVar.html#v:tryTakeNVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral idea is having one dedicated master process and an arbitrary\n    number of slave processes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Network.Process",
          "name": "Process",
          "package": "net-concurrent",
          "source": "src/Control-Concurrent-Network-Process.html",
          "type": "module"
        },
        "index": {
          "description": "General idea is having one dedicated master process and an arbitrary number of slave processes",
          "hierarchy": "Control Concurrent Network Process",
          "module": "Control.Concurrent.Network.Process",
          "name": "Process",
          "package": "net-concurrent",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvinience function. It calls either \u003ccode\u003e\u003ca\u003einitMaster\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003einitSlave\u003c/a\u003e\u003c/code\u003e depending on whether we have -m on the command line\n   or not. If -m is specified the following argument should be the\n   number of slaves to wait for.\n\u003c/p\u003e\u003cp\u003eReturns in the slave processes with the NC context.\n   Does not return in the master process.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.Process",
          "name": "initProcess",
          "package": "net-concurrent",
          "signature": "IO NCContext",
          "source": "src/Control-Concurrent-Network-Process.html#initProcess",
          "type": "function"
        },
        "index": {
          "description": "Convinience function It calls either initMaster or initSlave depending on whether we have on the command line or not If is specified the following argument should be the number of slaves to wait for Returns in the slave processes with the NC context Does not return in the master process",
          "hierarchy": "Control Concurrent Network Process",
          "module": "Control.Concurrent.Network.Process",
          "name": "initProcess",
          "package": "net-concurrent",
          "partial": "Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Process.html#v:initProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSlave processes have a single connection towards the master for simplicity.\n   Communication is done by using \u003ccode\u003eNVar\u003c/code\u003e variables similar to \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e in Concurrent.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Network.Slave",
          "name": "Slave",
          "package": "net-concurrent",
          "source": "src/Control-Concurrent-Network-Slave.html",
          "type": "module"
        },
        "index": {
          "description": "Slave processes have single connection towards the master for simplicity Communication is done by using NVar variables similar to MVar in Concurrent",
          "hierarchy": "Control Concurrent Network Slave",
          "module": "Control.Concurrent.Network.Slave",
          "name": "Slave",
          "package": "net-concurrent",
          "partial": "Slave",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe NC Context\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.Slave",
          "name": "NCContext",
          "package": "net-concurrent",
          "source": "src/Control-Concurrent-Network-Slave.html#NCContext",
          "type": "data"
        },
        "index": {
          "description": "the NC Context",
          "hierarchy": "Control Concurrent Network Slave",
          "module": "Control.Concurrent.Network.Slave",
          "name": "NCContext",
          "package": "net-concurrent",
          "partial": "NCContext",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#t:NCContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Network.Slave",
          "name": "NCC",
          "package": "net-concurrent",
          "signature": "NCC",
          "source": "src/Control-Concurrent-Network-Slave.html#NCContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Network Slave",
          "module": "Control.Concurrent.Network.Slave",
          "name": "NCC",
          "package": "net-concurrent",
          "partial": "NCC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#v:NCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Network.Slave",
          "name": "hdl",
          "package": "net-concurrent",
          "signature": "MVar Handle",
          "source": "src/Control-Concurrent-Network-Slave.html#NCContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Network Slave",
          "module": "Control.Concurrent.Network.Slave",
          "name": "hdl",
          "package": "net-concurrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#v:hdl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialises a slave process returning the NC context.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.Slave",
          "name": "initSlave",
          "package": "net-concurrent",
          "signature": "HostName -\u003e PortID -\u003e IO NCContext",
          "source": "src/Control-Concurrent-Network-Slave.html#initSlave",
          "type": "function"
        },
        "index": {
          "description": "Initialises slave process returning the NC context",
          "hierarchy": "Control Concurrent Network Slave",
          "module": "Control.Concurrent.Network.Slave",
          "name": "initSlave",
          "normalized": "HostName-\u003ePortID-\u003eIO NCContext",
          "package": "net-concurrent",
          "partial": "Slave",
          "signature": "HostName-\u003ePortID-\u003eIO NCContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#v:initSlave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of slaves\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.Slave",
          "name": "numSlaves",
          "package": "net-concurrent",
          "signature": "NCContext -\u003e IO Int",
          "source": "src/Control-Concurrent-Network-Slave.html#numSlaves",
          "type": "function"
        },
        "index": {
          "description": "Number of slaves",
          "hierarchy": "Control Concurrent Network Slave",
          "module": "Control.Concurrent.Network.Slave",
          "name": "numSlaves",
          "normalized": "NCContext-\u003eIO Int",
          "package": "net-concurrent",
          "partial": "Slaves",
          "signature": "NCContext-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#v:numSlaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints a message on master\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.Slave",
          "name": "printMsg",
          "package": "net-concurrent",
          "signature": "NCContext -\u003e String -\u003e IO ()",
          "source": "src/Control-Concurrent-Network-Slave.html#printMsg",
          "type": "function"
        },
        "index": {
          "description": "Prints message on master",
          "hierarchy": "Control Concurrent Network Slave",
          "module": "Control.Concurrent.Network.Slave",
          "name": "printMsg",
          "normalized": "NCContext-\u003eString-\u003eIO()",
          "package": "net-concurrent",
          "partial": "Msg",
          "signature": "NCContext-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#v:printMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the slave ID of the caller\n\u003c/p\u003e",
          "module": "Control.Concurrent.Network.Slave",
          "name": "slaveID",
          "package": "net-concurrent",
          "signature": "NCContext -\u003e IO Int",
          "source": "src/Control-Concurrent-Network-Slave.html#slaveID",
          "type": "function"
        },
        "index": {
          "description": "Returns the slave ID of the caller",
          "hierarchy": "Control Concurrent Network Slave",
          "module": "Control.Concurrent.Network.Slave",
          "name": "slaveID",
          "normalized": "NCContext-\u003eIO Int",
          "package": "net-concurrent",
          "partial": "ID",
          "signature": "NCContext-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/net-concurrent/docs/Control-Concurrent-Network-Slave.html#v:slaveID"
      }
    }
  ]
]