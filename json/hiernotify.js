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
        "word": "hiernotify"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hiernotify.Polling",
          "name": "Polling",
          "package": "hiernotify",
          "source": "src/System-Hiernotify-Polling.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "Polling",
          "package": "hiernotify",
          "partial": "Polling",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration for notifiers. Minimal configuration to build a notifier.\n\u003c/p\u003e",
          "module": "System.Hiernotify.Polling",
          "name": "Configuration",
          "package": "hiernotify",
          "source": "src/System-Hiernotify.html#Configuration",
          "type": "data"
        },
        "index": {
          "description": "Configuration for notifiers Minimal configuration to build notifier",
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "Configuration",
          "package": "hiernotify",
          "partial": "Configuration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#t:Configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hiernotify.Polling",
          "name": "Difference",
          "package": "hiernotify",
          "source": "src/System-Hiernotify.html#Difference",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "Difference",
          "package": "hiernotify",
          "partial": "Difference",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#t:Difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference datatype containing a difference as three sets of paths. This datatype is the core content of a notification of changes in a hierarchy.\n\u003c/p\u003e",
          "module": "System.Hiernotify.Polling",
          "name": "DifferenceP",
          "package": "hiernotify",
          "source": "src/System-Hiernotify.html#DifferenceP",
          "type": "data"
        },
        "index": {
          "description": "Difference datatype containing difference as three sets of paths This datatype is the core content of notification of changes in hierarchy",
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "DifferenceP",
          "package": "hiernotify",
          "partial": "Difference",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#t:DifferenceP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract notifiers. A Notifier is an object controlling a hierarchy. \n\u003c/p\u003e\u003cp\u003eIts difference method will block until a Difference is available and at least a time of peace has elapsed.\n\u003c/p\u003e\u003cp\u003eReading a difference must result internally in deleting the difference and updating the list of paths. \n The list of paths read together with the difference is always the list of paths to which the difference will be applied.\n\u003c/p\u003e",
          "module": "System.Hiernotify.Polling",
          "name": "Notifier",
          "package": "hiernotify",
          "source": "src/System-Hiernotify.html#Notifier",
          "type": "data"
        },
        "index": {
          "description": "Abstract notifiers Notifier is an object controlling hierarchy Its difference method will block until Difference is available and at least time of peace has elapsed Reading difference must result internally in deleting the difference and updating the list of paths The list of paths read together with the difference is always the list of paths to which the difference will be applied",
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "Notifier",
          "package": "hiernotify",
          "partial": "Notifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#t:Notifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hiernotify.Polling",
          "name": "Configuration",
          "package": "hiernotify",
          "signature": "Configuration",
          "source": "src/System-Hiernotify.html#Configuration",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "Configuration",
          "package": "hiernotify",
          "partial": "Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#v:Configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hiernotify.Polling",
          "name": "DifferenceP",
          "package": "hiernotify",
          "signature": "DifferenceP",
          "source": "src/System-Hiernotify.html#DifferenceP",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "DifferenceP",
          "package": "hiernotify",
          "partial": "Difference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#v:DifferenceP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hiernotify.Polling",
          "name": "Notifier",
          "package": "hiernotify",
          "signature": "Notifier",
          "source": "src/System-Hiernotify.html#Notifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "Notifier",
          "package": "hiernotify",
          "partial": "Notifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#v:Notifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFiles appeared\n\u003c/p\u003e",
          "module": "System.Hiernotify.Polling",
          "name": "created",
          "package": "hiernotify",
          "signature": "[a]",
          "source": "src/System-Hiernotify.html#DifferenceP",
          "type": "function"
        },
        "index": {
          "description": "Files appeared",
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "created",
          "normalized": "[a]",
          "package": "hiernotify",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#v:created"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFiles disappeared\n\u003c/p\u003e",
          "module": "System.Hiernotify.Polling",
          "name": "deleted",
          "package": "hiernotify",
          "signature": "[a]",
          "source": "src/System-Hiernotify.html#DifferenceP",
          "type": "function"
        },
        "index": {
          "description": "Files disappeared",
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "deleted",
          "normalized": "[a]",
          "package": "hiernotify",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#v:deleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblock until next difference \n\u003c/p\u003e",
          "module": "System.Hiernotify.Polling",
          "name": "difference",
          "package": "hiernotify",
          "signature": "IO (Difference, [FilePath])",
          "source": "src/System-Hiernotify.html#Notifier",
          "type": "function"
        },
        "index": {
          "description": "block until next difference",
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "difference",
          "normalized": "IO(Difference,[FilePath])",
          "package": "hiernotify",
          "signature": "IO(Difference,[FilePath])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a polling notifier , given an interval in seconds\n\u003c/p\u003e",
          "module": "System.Hiernotify.Polling",
          "name": "mkPollNotifier",
          "package": "hiernotify",
          "signature": "Int-\u003e Configuration-\u003e IO Notifier",
          "type": "function"
        },
        "index": {
          "description": "make polling notifier given an interval in seconds",
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "mkPollNotifier",
          "normalized": "Int-\u003eConfiguration-\u003eIO Notifier",
          "package": "hiernotify",
          "partial": "Poll Notifier",
          "signature": "Int-\u003eConfiguration-\u003eIO Notifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#v:mkPollNotifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFiles modified\n\u003c/p\u003e",
          "module": "System.Hiernotify.Polling",
          "name": "modified",
          "package": "hiernotify",
          "signature": "[a]",
          "source": "src/System-Hiernotify.html#DifferenceP",
          "type": "function"
        },
        "index": {
          "description": "Files modified",
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "modified",
          "normalized": "[a]",
          "package": "hiernotify",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#v:modified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for file paths, positive must be included \n\u003c/p\u003e",
          "module": "System.Hiernotify.Polling",
          "name": "select",
          "package": "hiernotify",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-Hiernotify.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "filter for file paths positive must be included",
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "select",
          "normalized": "FilePath-\u003eBool",
          "package": "hiernotify",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eminimum time lapse in seconds where nothing changes before a difference is released\n\u003c/p\u003e",
          "module": "System.Hiernotify.Polling",
          "name": "silence",
          "package": "hiernotify",
          "signature": "Int64",
          "source": "src/System-Hiernotify.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "minimum time lapse in seconds where nothing changes before difference is released",
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "silence",
          "package": "hiernotify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#v:silence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estop the notification daemon \n\u003c/p\u003e",
          "module": "System.Hiernotify.Polling",
          "name": "stop",
          "package": "hiernotify",
          "signature": "IO ()",
          "source": "src/System-Hiernotify.html#Notifier",
          "type": "function"
        },
        "index": {
          "description": "stop the notification daemon",
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "stop",
          "normalized": "IO()",
          "package": "hiernotify",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edirectory at the top of the hierarchy under control\n\u003c/p\u003e",
          "module": "System.Hiernotify.Polling",
          "name": "top",
          "package": "hiernotify",
          "signature": "FilePath",
          "source": "src/System-Hiernotify.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "directory at the top of the hierarchy under control",
          "hierarchy": "System Hiernotify Polling",
          "module": "System.Hiernotify.Polling",
          "name": "top",
          "package": "hiernotify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hiernotify/docs/System-Hiernotify-Polling.html#v:top"
      }
    }
  ]
]