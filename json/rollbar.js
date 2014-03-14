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
        "word": "rollbar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rollbar.MonadLogger",
          "name": "MonadLogger",
          "package": "rollbar",
          "source": "src/Rollbar-MonadLogger.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Rollbar MonadLogger",
          "module": "Rollbar.MonadLogger",
          "name": "MonadLogger",
          "package": "rollbar",
          "partial": "Monad Logger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rollbar/docs/Rollbar-MonadLogger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereport errors to rollbar.com and log them with monad-logger\n\u003c/p\u003e",
          "module": "Rollbar.MonadLogger",
          "name": "reportErrorS",
          "package": "rollbar",
          "signature": "Text-\u003e Text-\u003e HostName-\u003e Text-\u003e (Text -\u003e Text -\u003e m ())-\u003e Text-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "report errors to rollbar.com and log them with monad-logger",
          "hierarchy": "Rollbar MonadLogger",
          "module": "Rollbar.MonadLogger",
          "name": "reportErrorS",
          "normalized": "Text-\u003eText-\u003eHostName-\u003eText-\u003e(Text-\u003eText-\u003ea())-\u003eText-\u003ea()",
          "package": "rollbar",
          "partial": "Error",
          "signature": "Text-\u003eText-\u003eHostName-\u003eText-\u003e(Text-\u003eText-\u003em())-\u003eText-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rollbar/docs/Rollbar-MonadLogger.html#v:reportErrorS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain entry point to the application.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Rollbar",
          "name": "Rollbar",
          "package": "rollbar",
          "source": "src/Rollbar.html",
          "type": "module"
        },
        "index": {
          "description": "Main entry point to the application",
          "hierarchy": "Rollbar",
          "module": "Rollbar",
          "name": "Rollbar",
          "package": "rollbar",
          "partial": "Rollbar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rollbar/docs/Rollbar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereport errors to rollbar.com and log them to stdout\n\u003c/p\u003e",
          "module": "Rollbar",
          "name": "reportErrorS",
          "package": "rollbar",
          "signature": "Text-\u003e Text-\u003e HostName-\u003e Text-\u003e Text-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "report errors to rollbar.com and log them to stdout",
          "hierarchy": "Rollbar",
          "module": "Rollbar",
          "name": "reportErrorS",
          "normalized": "Text-\u003eText-\u003eHostName-\u003eText-\u003eText-\u003ea()",
          "package": "rollbar",
          "partial": "Error",
          "signature": "Text-\u003eText-\u003eHostName-\u003eText-\u003eText-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rollbar/docs/Rollbar.html#v:reportErrorS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused by Rollbar.MonadLogger to pass a custom logger\n\u003c/p\u003e",
          "module": "Rollbar",
          "name": "reportLoggerErrorS",
          "package": "rollbar",
          "signature": "Text-\u003e Text-\u003e HostName-\u003e Text-\u003e (Text -\u003e Text -\u003e m ())-\u003e Text-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "used by Rollbar.MonadLogger to pass custom logger",
          "hierarchy": "Rollbar",
          "module": "Rollbar",
          "name": "reportLoggerErrorS",
          "normalized": "Text-\u003eText-\u003eHostName-\u003eText-\u003e(Text-\u003eText-\u003ea())-\u003eText-\u003ea()",
          "package": "rollbar",
          "partial": "Logger Error",
          "signature": "Text-\u003eText-\u003eHostName-\u003eText-\u003e(Text-\u003eText-\u003em())-\u003eText-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rollbar/docs/Rollbar.html#v:reportLoggerErrorS"
      }
    }
  ]
]