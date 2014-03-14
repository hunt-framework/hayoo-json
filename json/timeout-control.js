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
        "word": "timeout-control"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdd updatable timeout functionality to a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e transformer stack layered on \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Timeout.Control",
          "name": "Control",
          "package": "timeout-control",
          "source": "src/System-Timeout-Control.html",
          "type": "module"
        },
        "index": {
          "description": "Add updatable timeout functionality to Monad transformer stack layered on IO",
          "hierarchy": "System Timeout Control",
          "module": "System.Timeout.Control",
          "name": "Control",
          "package": "timeout-control",
          "partial": "Control",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timeout-control/docs/System-Timeout-Control.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA duration measured in microseconds\n\u003c/p\u003e",
          "module": "System.Timeout.Control",
          "name": "Microseconds",
          "package": "timeout-control",
          "source": "src/System-Timeout-Control.html#Microseconds",
          "type": "newtype"
        },
        "index": {
          "description": "duration measured in microseconds",
          "hierarchy": "System Timeout Control",
          "module": "System.Timeout.Control",
          "name": "Microseconds",
          "package": "timeout-control",
          "partial": "Microseconds",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/timeout-control/docs/System-Timeout-Control.html#t:Microseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Timeout.Control",
          "name": "Timeout",
          "package": "timeout-control",
          "source": "src/System-Timeout-Control.html#Timeout",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Timeout Control",
          "module": "System.Timeout.Control",
          "name": "Timeout",
          "package": "timeout-control",
          "partial": "Timeout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timeout-control/docs/System-Timeout-Control.html#t:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Timeout.Control",
          "name": "TimeoutException",
          "package": "timeout-control",
          "source": "src/System-Timeout-Control.html#TimeoutException",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Timeout Control",
          "module": "System.Timeout.Control",
          "name": "TimeoutException",
          "package": "timeout-control",
          "partial": "Timeout Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timeout-control/docs/System-Timeout-Control.html#t:TimeoutException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Timeout.Control",
          "name": "Microseconds",
          "package": "timeout-control",
          "signature": "Microseconds Int",
          "source": "src/System-Timeout-Control.html#Microseconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Timeout Control",
          "module": "System.Timeout.Control",
          "name": "Microseconds",
          "package": "timeout-control",
          "partial": "Microseconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-control/docs/System-Timeout-Control.html#v:Microseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe system event manager was unavailable\n\u003c/p\u003e",
          "module": "System.Timeout.Control",
          "name": "MissingSystemEventManagerException",
          "package": "timeout-control",
          "signature": "MissingSystemEventManagerException",
          "source": "src/System-Timeout-Control.html#TimeoutException",
          "type": "function"
        },
        "index": {
          "description": "The system event manager was unavailable",
          "hierarchy": "System Timeout Control",
          "module": "System.Timeout.Control",
          "name": "MissingSystemEventManagerException",
          "package": "timeout-control",
          "partial": "Missing System Event Manager Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-control/docs/System-Timeout-Control.html#v:MissingSystemEventManagerException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA timeout occurred\n\u003c/p\u003e",
          "module": "System.Timeout.Control",
          "name": "TimeoutException",
          "package": "timeout-control",
          "signature": "TimeoutException Unique",
          "source": "src/System-Timeout-Control.html#TimeoutException",
          "type": "function"
        },
        "index": {
          "description": "timeout occurred",
          "hierarchy": "System Timeout Control",
          "module": "System.Timeout.Control",
          "name": "TimeoutException",
          "package": "timeout-control",
          "partial": "Timeout Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-control/docs/System-Timeout-Control.html#v:TimeoutException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the timeout transformer\n\u003c/p\u003e",
          "module": "System.Timeout.Control",
          "name": "runTimeout",
          "package": "timeout-control",
          "signature": "Microseconds-\u003e Timeout m a-\u003e m (Either TimeoutException a)",
          "type": "function"
        },
        "index": {
          "description": "Run the timeout transformer",
          "hierarchy": "System Timeout Control",
          "module": "System.Timeout.Control",
          "name": "runTimeout",
          "normalized": "Microseconds-\u003eTimeout a b-\u003ea(Either TimeoutException b)",
          "package": "timeout-control",
          "partial": "Timeout",
          "signature": "Microseconds-\u003eTimeout m a-\u003em(Either TimeoutException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-control/docs/System-Timeout-Control.html#v:runTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the timeout duration\n\u003c/p\u003e",
          "module": "System.Timeout.Control",
          "name": "updateTimeout",
          "package": "timeout-control",
          "signature": "Microseconds-\u003e Timeout m ()",
          "type": "function"
        },
        "index": {
          "description": "Reset the timeout duration",
          "hierarchy": "System Timeout Control",
          "module": "System.Timeout.Control",
          "name": "updateTimeout",
          "normalized": "Microseconds-\u003eTimeout a()",
          "package": "timeout-control",
          "partial": "Timeout",
          "signature": "Microseconds-\u003eTimeout m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timeout-control/docs/System-Timeout-Control.html#v:updateTimeout"
      }
    }
  ]
]