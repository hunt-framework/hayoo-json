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
        "word": "direct-daemonize"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Daemonize",
          "name": "Daemonize",
          "package": "direct-daemonize",
          "source": "src/System-Daemonize.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Daemonize",
          "module": "System.Daemonize",
          "name": "Daemonize",
          "package": "direct-daemonize",
          "partial": "Daemonize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/direct-daemonize/docs/System-Daemonize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Daemonize",
          "name": "DaemonOptions",
          "package": "direct-daemonize",
          "source": "src/System-Daemonize.html#DaemonOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Daemonize",
          "module": "System.Daemonize",
          "name": "DaemonOptions",
          "package": "direct-daemonize",
          "partial": "Daemon Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/direct-daemonize/docs/System-Daemonize.html#t:DaemonOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Daemonize",
          "name": "DaemonOptions",
          "package": "direct-daemonize",
          "signature": "DaemonOptions",
          "source": "src/System-Daemonize.html#DaemonOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Daemonize",
          "module": "System.Daemonize",
          "name": "DaemonOptions",
          "package": "direct-daemonize",
          "partial": "Daemon Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-daemonize/docs/System-Daemonize.html#v:DaemonOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Daemonize",
          "name": "daemonGroupToChangeTo",
          "package": "direct-daemonize",
          "signature": "Maybe String",
          "source": "src/System-Daemonize.html#DaemonOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Daemonize",
          "module": "System.Daemonize",
          "name": "daemonGroupToChangeTo",
          "package": "direct-daemonize",
          "partial": "Group To Change To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-daemonize/docs/System-Daemonize.html#v:daemonGroupToChangeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Daemonize",
          "name": "daemonShouldChangeDirectory",
          "package": "direct-daemonize",
          "signature": "Bool",
          "source": "src/System-Daemonize.html#DaemonOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Daemonize",
          "module": "System.Daemonize",
          "name": "daemonShouldChangeDirectory",
          "package": "direct-daemonize",
          "partial": "Should Change Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-daemonize/docs/System-Daemonize.html#v:daemonShouldChangeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Daemonize",
          "name": "daemonShouldCloseStandardStreams",
          "package": "direct-daemonize",
          "signature": "Bool",
          "source": "src/System-Daemonize.html#DaemonOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Daemonize",
          "module": "System.Daemonize",
          "name": "daemonShouldCloseStandardStreams",
          "package": "direct-daemonize",
          "partial": "Should Close Standard Streams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-daemonize/docs/System-Daemonize.html#v:daemonShouldCloseStandardStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Daemonize",
          "name": "daemonShouldIgnoreSignals",
          "package": "direct-daemonize",
          "signature": "Bool",
          "source": "src/System-Daemonize.html#DaemonOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Daemonize",
          "module": "System.Daemonize",
          "name": "daemonShouldIgnoreSignals",
          "package": "direct-daemonize",
          "partial": "Should Ignore Signals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-daemonize/docs/System-Daemonize.html#v:daemonShouldIgnoreSignals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Daemonize",
          "name": "daemonUserToChangeTo",
          "package": "direct-daemonize",
          "signature": "Maybe String",
          "source": "src/System-Daemonize.html#DaemonOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Daemonize",
          "module": "System.Daemonize",
          "name": "daemonUserToChangeTo",
          "package": "direct-daemonize",
          "partial": "User To Change To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-daemonize/docs/System-Daemonize.html#v:daemonUserToChangeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Daemonize",
          "name": "daemonize",
          "package": "direct-daemonize",
          "signature": "DaemonOptions -\u003e IO a -\u003e (a -\u003e IO ()) -\u003e IO ()",
          "source": "src/System-Daemonize.html#daemonize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Daemonize",
          "module": "System.Daemonize",
          "name": "daemonize",
          "normalized": "DaemonOptions-\u003eIO a-\u003e(a-\u003eIO())-\u003eIO()",
          "package": "direct-daemonize",
          "signature": "DaemonOptions-\u003eIO a-\u003e(a-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-daemonize/docs/System-Daemonize.html#v:daemonize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Daemonize",
          "name": "defaultDaemonOptions",
          "package": "direct-daemonize",
          "signature": "DaemonOptions",
          "source": "src/System-Daemonize.html#defaultDaemonOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Daemonize",
          "module": "System.Daemonize",
          "name": "defaultDaemonOptions",
          "package": "direct-daemonize",
          "partial": "Daemon Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/direct-daemonize/docs/System-Daemonize.html#v:defaultDaemonOptions"
      }
    }
  ]
]