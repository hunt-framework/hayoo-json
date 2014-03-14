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
        "word": "hstatsd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "StatsD",
          "package": "hstatsd",
          "source": "src/Network-StatsD.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "StatsD",
          "package": "hstatsd",
          "partial": "Stats",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "Stat",
          "package": "hstatsd",
          "source": "src/Network-StatsD.html#Stat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "Stat",
          "package": "hstatsd",
          "partial": "Stat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#t:Stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "StatsD",
          "package": "hstatsd",
          "source": "src/Network-StatsD.html#StatsD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "StatsD",
          "package": "hstatsd",
          "partial": "Stats",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#t:StatsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "Stat",
          "package": "hstatsd",
          "signature": "Stat",
          "source": "src/Network-StatsD.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "Stat",
          "package": "hstatsd",
          "partial": "Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#v:Stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "bucket",
          "package": "hstatsd",
          "signature": "Text",
          "source": "src/Network-StatsD.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "bucket",
          "package": "hstatsd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#v:bucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "closeStatsD",
          "package": "hstatsd",
          "signature": "StatsD -\u003e IO ()",
          "source": "src/Network-StatsD.html#closeStatsD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "closeStatsD",
          "normalized": "StatsD-\u003eIO()",
          "package": "hstatsd",
          "partial": "Stats",
          "signature": "StatsD-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#v:closeStatsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "mkStatsD",
          "package": "hstatsd",
          "signature": "Socket -\u003e [String] -\u003e StatsD",
          "source": "src/Network-StatsD.html#mkStatsD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "mkStatsD",
          "normalized": "Socket-\u003e[String]-\u003eStatsD",
          "package": "hstatsd",
          "partial": "Stats",
          "signature": "Socket-\u003e[String]-\u003eStatsD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#v:mkStatsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "openStatsD",
          "package": "hstatsd",
          "signature": "HostName -\u003e ServiceName -\u003e [String] -\u003e IO StatsD",
          "source": "src/Network-StatsD.html#openStatsD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "openStatsD",
          "normalized": "HostName-\u003eServiceName-\u003e[String]-\u003eIO StatsD",
          "package": "hstatsd",
          "partial": "Stats",
          "signature": "HostName-\u003eServiceName-\u003e[String]-\u003eIO StatsD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#v:openStatsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "push",
          "package": "hstatsd",
          "signature": "StatsD -\u003e [Stat] -\u003e IO ()",
          "source": "src/Network-StatsD.html#push",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "push",
          "normalized": "StatsD-\u003e[Stat]-\u003eIO()",
          "package": "hstatsd",
          "signature": "StatsD-\u003e[Stat]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "sample",
          "package": "hstatsd",
          "signature": "(Maybe Double)",
          "source": "src/Network-StatsD.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "sample",
          "package": "hstatsd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "showStat",
          "package": "hstatsd",
          "signature": "Stat -\u003e String",
          "source": "src/Network-StatsD.html#showStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "showStat",
          "normalized": "Stat-\u003eString",
          "package": "hstatsd",
          "partial": "Stat",
          "signature": "Stat-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#v:showStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "stat",
          "package": "hstatsd",
          "signature": "[String] -\u003e a -\u003e String -\u003e Maybe Double -\u003e Stat",
          "source": "src/Network-StatsD.html#stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "stat",
          "normalized": "[String]-\u003ea-\u003eString-\u003eMaybe Double-\u003eStat",
          "package": "hstatsd",
          "signature": "[String]-\u003ea-\u003eString-\u003eMaybe Double-\u003eStat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#v:stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "unit",
          "package": "hstatsd",
          "signature": "Text",
          "source": "src/Network-StatsD.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "unit",
          "package": "hstatsd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.StatsD",
          "name": "val",
          "package": "hstatsd",
          "signature": "Text",
          "source": "src/Network-StatsD.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network StatsD",
          "module": "Network.StatsD",
          "name": "val",
          "package": "hstatsd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hstatsd/docs/Network-StatsD.html#v:val"
      }
    }
  ]
]