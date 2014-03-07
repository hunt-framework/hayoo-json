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
        "word": "monad-logger-syslog"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.MonadLogger.Syslog",
          "name": "Syslog",
          "package": "monad-logger-syslog",
          "source": "src/System-Log-MonadLogger-Syslog.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Log MonadLogger Syslog",
          "module": "System.Log.MonadLogger.Syslog",
          "name": "Syslog",
          "package": "monad-logger-syslog",
          "partial": "Syslog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger-syslog/docs/System-Log-MonadLogger-Syslog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.MonadLogger.Syslog",
          "name": "levelToPriority",
          "package": "monad-logger-syslog",
          "signature": "LogLevel -\u003e Priority",
          "source": "src/System-Log-MonadLogger-Syslog.html#levelToPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log MonadLogger Syslog",
          "module": "System.Log.MonadLogger.Syslog",
          "name": "levelToPriority",
          "normalized": "LogLevel-\u003ePriority",
          "package": "monad-logger-syslog",
          "partial": "To Priority",
          "signature": "LogLevel-\u003ePriority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger-syslog/docs/System-Log-MonadLogger-Syslog.html#v:levelToPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.MonadLogger.Syslog",
          "name": "runSyslogLoggingT",
          "package": "monad-logger-syslog",
          "signature": "LoggingT m a -\u003e m a",
          "source": "src/System-Log-MonadLogger-Syslog.html#runSyslogLoggingT",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log MonadLogger Syslog",
          "module": "System.Log.MonadLogger.Syslog",
          "name": "runSyslogLoggingT",
          "normalized": "LoggingT a b-\u003ea b",
          "package": "monad-logger-syslog",
          "partial": "Syslog Logging",
          "signature": "LoggingT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger-syslog/docs/System-Log-MonadLogger-Syslog.html#v:runSyslogLoggingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.MonadLogger.Syslog",
          "name": "syslogOutput",
          "package": "monad-logger-syslog",
          "signature": "Loc -\u003e LogSource -\u003e LogLevel -\u003e LogStr -\u003e IO ()",
          "source": "src/System-Log-MonadLogger-Syslog.html#syslogOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log MonadLogger Syslog",
          "module": "System.Log.MonadLogger.Syslog",
          "name": "syslogOutput",
          "normalized": "Loc-\u003eLogSource-\u003eLogLevel-\u003eLogStr-\u003eIO()",
          "package": "monad-logger-syslog",
          "partial": "Output",
          "signature": "Loc-\u003eLogSource-\u003eLogLevel-\u003eLogStr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger-syslog/docs/System-Log-MonadLogger-Syslog.html#v:syslogOutput"
      }
    }
  ]
]