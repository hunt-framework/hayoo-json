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
        "word": "netclock"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "Client",
          "package": "netclock",
          "source": "src/Network-Netclock-Client.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "Client",
          "package": "netclock",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "BpsChange",
          "package": "netclock",
          "source": "src/Network-Netclock-Client.html#BpsChange",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "BpsChange",
          "package": "netclock",
          "partial": "Bps Change",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#t:BpsChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "BpsChange",
          "package": "netclock",
          "signature": "BpsChange",
          "source": "src/Network-Netclock-Client.html#BpsChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "BpsChange",
          "package": "netclock",
          "partial": "Bps Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:BpsChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "addChange",
          "package": "netclock",
          "signature": "MVar (BpsChange, [BpsChange]) -\u003e BpsChange -\u003e IO ()",
          "source": "src/Network-Netclock-Client.html#addChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "addChange",
          "normalized": "MVar(BpsChange,[BpsChange])-\u003eBpsChange-\u003eIO()",
          "package": "netclock",
          "partial": "Change",
          "signature": "MVar(BpsChange,[BpsChange])-\u003eBpsChange-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:addChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "bpsListen",
          "package": "netclock",
          "signature": "String -\u003e String -\u003e String -\u003e MVar (BpsChange, [BpsChange]) -\u003e IO ()",
          "source": "src/Network-Netclock-Client.html#bpsListen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "bpsListen",
          "normalized": "String-\u003eString-\u003eString-\u003eMVar(BpsChange,[BpsChange])-\u003eIO()",
          "package": "netclock",
          "partial": "Listen",
          "signature": "String-\u003eString-\u003eString-\u003eMVar(BpsChange,[BpsChange])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:bpsListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "bpsListenLoop",
          "package": "netclock",
          "signature": "MVar (BpsChange, [BpsChange]) -\u003e UDP -\u003e IO b",
          "source": "src/Network-Netclock-Client.html#bpsListenLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "bpsListenLoop",
          "normalized": "MVar(BpsChange,[BpsChange])-\u003eUDP-\u003eIO a",
          "package": "netclock",
          "partial": "Listen Loop",
          "signature": "MVar(BpsChange,[BpsChange])-\u003eUDP-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:bpsListenLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "changeBeat",
          "package": "netclock",
          "signature": "Double",
          "source": "src/Network-Netclock-Client.html#BpsChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "changeBeat",
          "package": "netclock",
          "partial": "Beat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:changeBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "changeBps",
          "package": "netclock",
          "signature": "Double",
          "source": "src/Network-Netclock-Client.html#BpsChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "changeBps",
          "package": "netclock",
          "partial": "Bps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:changeBps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "changeTime",
          "package": "netclock",
          "signature": "Double",
          "source": "src/Network-Netclock-Client.html#BpsChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "changeTime",
          "package": "netclock",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:changeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "clocked",
          "package": "netclock",
          "signature": "String -\u003e String -\u003e String -\u003e Int -\u003e (BpsChange -\u003e Int -\u003e IO ()) -\u003e IO ()",
          "source": "src/Network-Netclock-Client.html#clocked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "clocked",
          "normalized": "String-\u003eString-\u003eString-\u003eInt-\u003e(BpsChange-\u003eInt-\u003eIO())-\u003eIO()",
          "package": "netclock",
          "signature": "String-\u003eString-\u003eString-\u003eInt-\u003e(BpsChange-\u003eInt-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:clocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "logicalTime",
          "package": "netclock",
          "signature": "BpsChange -\u003e Double -\u003e Double",
          "source": "src/Network-Netclock-Client.html#logicalTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "logicalTime",
          "normalized": "BpsChange-\u003eDouble-\u003eDouble",
          "package": "netclock",
          "partial": "Time",
          "signature": "BpsChange-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:logicalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "nextChange",
          "package": "netclock",
          "signature": "(BpsChange, [BpsChange]) -\u003e Double -\u003e (BpsChange, [BpsChange])",
          "source": "src/Network-Netclock-Client.html#nextChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "nextChange",
          "normalized": "(BpsChange,[BpsChange])-\u003eDouble-\u003e(BpsChange,[BpsChange])",
          "package": "netclock",
          "partial": "Change",
          "signature": "(BpsChange,[BpsChange])-\u003eDouble-\u003e(BpsChange,[BpsChange])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:nextChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "readChange",
          "package": "netclock",
          "signature": "UDP -\u003e IO BpsChange",
          "source": "src/Network-Netclock-Client.html#readChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "readChange",
          "normalized": "UDP-\u003eIO BpsChange",
          "package": "netclock",
          "partial": "Change",
          "signature": "UDP-\u003eIO BpsChange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:readChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "register",
          "package": "netclock",
          "signature": "String -\u003e String -\u003e String -\u003e Int -\u003e IO UDP",
          "source": "src/Network-Netclock-Client.html#register",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "register",
          "normalized": "String-\u003eString-\u003eString-\u003eInt-\u003eIO UDP",
          "package": "netclock",
          "signature": "String-\u003eString-\u003eString-\u003eInt-\u003eIO UDP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "sched",
          "package": "netclock",
          "signature": "String -\u003e String -\u003e String -\u003e Int -\u003e IO () -\u003e IO ()",
          "source": "src/Network-Netclock-Client.html#sched",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "sched",
          "normalized": "String-\u003eString-\u003eString-\u003eInt-\u003eIO()-\u003eIO()",
          "package": "netclock",
          "signature": "String-\u003eString-\u003eString-\u003eInt-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:sched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "scport",
          "package": "netclock",
          "signature": "Int",
          "source": "src/Network-Netclock-Client.html#scport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "scport",
          "package": "netclock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:scport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "toFloat",
          "package": "netclock",
          "signature": "Datum -\u003e Float",
          "source": "src/Network-Netclock-Client.html#toFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "toFloat",
          "normalized": "Datum-\u003eFloat",
          "package": "netclock",
          "partial": "Float",
          "signature": "Datum-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:toFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "updateBps",
          "package": "netclock",
          "signature": "MVar (BpsChange, [BpsChange]) -\u003e Double -\u003e IO BpsChange",
          "source": "src/Network-Netclock-Client.html#updateBps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "updateBps",
          "normalized": "MVar(BpsChange,[BpsChange])-\u003eDouble-\u003eIO BpsChange",
          "package": "netclock",
          "partial": "Bps",
          "signature": "MVar(BpsChange,[BpsChange])-\u003eDouble-\u003eIO BpsChange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:updateBps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Netclock.Client",
          "name": "waitBeat",
          "package": "netclock",
          "signature": "BpsChange -\u003e Double -\u003e IO ()",
          "source": "src/Network-Netclock-Client.html#waitBeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Netclock Client",
          "module": "Network.Netclock.Client",
          "name": "waitBeat",
          "normalized": "BpsChange-\u003eDouble-\u003eIO()",
          "package": "netclock",
          "partial": "Beat",
          "signature": "BpsChange-\u003eDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netclock/docs/Network-Netclock-Client.html#v:waitBeat"
      }
    }
  ]
]