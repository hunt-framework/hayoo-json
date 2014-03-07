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
        "word": "HLogger"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Logs a message signaling that an action must be taken.\n",
          "module": "HLogger",
          "name": "logAlert",
          "package": "HLogger",
          "signature": "HLoggerState -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Logs message signaling that an action must be taken",
          "hierarchy": "HLogger",
          "module": "HLogger",
          "name": "logAlert",
          "normalized": "HLoggerState-\u003eString-\u003eIO()",
          "package": "HLogger",
          "partial": "Alert",
          "signature": "HLoggerState-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLogger/docs/HLogger.html#v:logAlert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Logs a message signaling that a critical error has occurred.\n",
          "module": "HLogger",
          "name": "logCritical",
          "package": "HLogger",
          "signature": "HLoggerState -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Logs message signaling that critical error has occurred",
          "hierarchy": "HLogger",
          "module": "HLogger",
          "name": "logCritical",
          "normalized": "HLoggerState-\u003eString-\u003eIO()",
          "package": "HLogger",
          "partial": "Critical",
          "signature": "HLoggerState-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLogger/docs/HLogger.html#v:logCritical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Logs a debug message. Debug messages are the least significant messages.\n",
          "module": "HLogger",
          "name": "logDebug",
          "package": "HLogger",
          "signature": "HLoggerState -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Logs debug message Debug messages are the least significant messages",
          "hierarchy": "HLogger",
          "module": "HLogger",
          "name": "logDebug",
          "normalized": "HLoggerState-\u003eString-\u003eIO()",
          "package": "HLogger",
          "partial": "Debug",
          "signature": "HLoggerState-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLogger/docs/HLogger.html#v:logDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Logs a message signaling that the system is unusable.\n",
          "module": "HLogger",
          "name": "logEmergency",
          "package": "HLogger",
          "signature": "HLoggerState -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Logs message signaling that the system is unusable",
          "hierarchy": "HLogger",
          "module": "HLogger",
          "name": "logEmergency",
          "normalized": "HLoggerState-\u003eString-\u003eIO()",
          "package": "HLogger",
          "partial": "Emergency",
          "signature": "HLoggerState-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLogger/docs/HLogger.html#v:logEmergency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Logs a message signaling that a non-critical error has occurred.\n",
          "module": "HLogger",
          "name": "logError",
          "package": "HLogger",
          "signature": "HLoggerState -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Logs message signaling that non-critical error has occurred",
          "hierarchy": "HLogger",
          "module": "HLogger",
          "name": "logError",
          "normalized": "HLoggerState-\u003eString-\u003eIO()",
          "package": "HLogger",
          "partial": "Error",
          "signature": "HLoggerState-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLogger/docs/HLogger.html#v:logError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Logs a purely informational message. Use logNotice instead of the\n   information message is significant.\n",
          "module": "HLogger",
          "name": "logInfo",
          "package": "HLogger",
          "signature": "HLoggerState -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Logs purely informational message Use logNotice instead of the information message is significant",
          "hierarchy": "HLogger",
          "module": "HLogger",
          "name": "logInfo",
          "normalized": "HLoggerState-\u003eString-\u003eIO()",
          "package": "HLogger",
          "partial": "Info",
          "signature": "HLoggerState-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLogger/docs/HLogger.html#v:logInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Logs a significant purely informational message.\n",
          "module": "HLogger",
          "name": "logNotice",
          "package": "HLogger",
          "signature": "HLoggerState -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Logs significant purely informational message",
          "hierarchy": "HLogger",
          "module": "HLogger",
          "name": "logNotice",
          "normalized": "HLoggerState-\u003eString-\u003eIO()",
          "package": "HLogger",
          "partial": "Notice",
          "signature": "HLoggerState-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLogger/docs/HLogger.html#v:logNotice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Logs a message signaling a warning condition.\n",
          "module": "HLogger",
          "name": "logWarning",
          "package": "HLogger",
          "signature": "HLoggerState -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Logs message signaling warning condition",
          "hierarchy": "HLogger",
          "module": "HLogger",
          "name": "logWarning",
          "normalized": "HLoggerState-\u003eString-\u003eIO()",
          "package": "HLogger",
          "partial": "Warning",
          "signature": "HLoggerState-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLogger/docs/HLogger.html#v:logWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Call start to get the initial logging state. It takes a String, \u003ctt\u003eprefix\u003c/tt\u003e,\n as its configuration input and creates a file \u003ctt\u003eprefix-YYYYMMDDHHMM.log\u003c/tt\u003e in\n the current directory. It will use UTC time on system that supports it, and\n local time otherwise.\n",
          "module": "HLogger",
          "name": "startLogger",
          "package": "HLogger",
          "signature": "String -\u003e IO HLoggerState",
          "type": "function"
        },
        "index": {
          "description": "Call start to get the initial logging state It takes String prefix as its configuration input and creates file prefix-YYYYMMDDHHMM.log in the current directory It will use UTC time on system that supports it and local time otherwise",
          "hierarchy": "HLogger",
          "module": "HLogger",
          "name": "startLogger",
          "normalized": "String-\u003eIO HLoggerState",
          "package": "HLogger",
          "partial": "Logger",
          "signature": "String-\u003eIO HLoggerState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLogger/docs/HLogger.html#v:startLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Stops the logger by closing the log file and exiting the logging thread.\n",
          "module": "HLogger",
          "name": "stopLogger",
          "package": "HLogger",
          "signature": "HLoggerState -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Stops the logger by closing the log file and exiting the logging thread",
          "hierarchy": "HLogger",
          "module": "HLogger",
          "name": "stopLogger",
          "normalized": "HLoggerState-\u003eIO()",
          "package": "HLogger",
          "partial": "Logger",
          "signature": "HLoggerState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HLogger/docs/HLogger.html#v:stopLogger"
      }
    }
  ]
]