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
        "word": "schedyield"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.SchedYield",
          "name": "SchedYield",
          "package": "schedyield",
          "source": "src/System-Posix-SchedYield.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Posix SchedYield",
          "module": "System.Posix.SchedYield",
          "name": "SchedYield",
          "package": "schedyield",
          "partial": "Sched Yield",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/schedyield/docs/System-Posix-SchedYield.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esched_yield yields processor and waits until all other processes, with a comparable or better nice value, could execute at least one time slice.\n\u003c/p\u003e",
          "module": "System.Posix.SchedYield",
          "name": "sched_yield",
          "package": "schedyield",
          "signature": "IO ()",
          "source": "src/System-Posix-SchedYield.html#sched_yield",
          "type": "function"
        },
        "index": {
          "description": "sched yield yields processor and waits until all other processes with comparable or better nice value could execute at least one time slice",
          "hierarchy": "System Posix SchedYield",
          "module": "System.Posix.SchedYield",
          "name": "sched_yield",
          "normalized": "IO()",
          "package": "schedyield",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/schedyield/docs/System-Posix-SchedYield.html#v:sched_yield"
      }
    }
  ]
]