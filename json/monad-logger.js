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
        "word": "monad-logger"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the facilities needed for a decoupled logging system.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadLogger\u003c/a\u003e\u003c/code\u003e class is implemented by monads that give access to a\n logging facility.  If you're defining a custom monad, then you may define an\n instance of \u003ccode\u003e\u003ca\u003eMonadLogger\u003c/a\u003e\u003c/code\u003e that routes the log messages to the appropriate\n place (e.g., that's what \u003ccode\u003eyesod-core\u003c/code\u003e's \u003ccode\u003eGHandler\u003c/code\u003e does).  Otherwise, you\n may use the \u003ccode\u003e\u003ca\u003eLoggingT\u003c/a\u003e\u003c/code\u003e monad included in this module (see\n \u003ccode\u003e\u003ca\u003erunStderrLoggingT\u003c/a\u003e\u003c/code\u003e). To simply discard log message, use \u003ccode\u003e\u003ca\u003eNoLoggingT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs a user of the logging facility, we provide you some convenient Template\n Haskell splices that use the \u003ccode\u003e\u003ca\u003eMonadLogger\u003c/a\u003e\u003c/code\u003e class.  They will record their\n source file and position, which is very helpful when debugging.  See\n \u003ccode\u003e\u003ca\u003elogDebug\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Logger",
          "name": "Logger",
          "package": "monad-logger",
          "source": "src/Control-Monad-Logger.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the facilities needed for decoupled logging system The MonadLogger class is implemented by monads that give access to logging facility If you re defining custom monad then you may define an instance of MonadLogger that routes the log messages to the appropriate place e.g that what yesod-core GHandler does Otherwise you may use the LoggingT monad included in this module see runStderrLoggingT To simply discard log message use NoLoggingT As user of the logging facility we provide you some convenient Template Haskell splices that use the MonadLogger class They will record their source file and position which is very helpful when debugging See logDebug for more information",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "Logger",
          "package": "monad-logger",
          "partial": "Logger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "Loc",
          "package": "monad-logger",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "Loc",
          "package": "monad-logger",
          "partial": "Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "LogLevel",
          "package": "monad-logger",
          "source": "src/Control-Monad-Logger.html#LogLevel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "LogLevel",
          "package": "monad-logger",
          "partial": "Log Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#t:LogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "LogSource",
          "package": "monad-logger",
          "source": "src/Control-Monad-Logger.html#LogSource",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "LogSource",
          "package": "monad-logger",
          "partial": "Log Source",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#t:LogSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad transformer that adds a new logging function.\n\u003c/p\u003e\u003cp\u003eSince 0.2.2\n\u003c/p\u003e",
          "module": "Control.Monad.Logger",
          "name": "LoggingT",
          "package": "monad-logger",
          "source": "src/Control-Monad-Logger.html#LoggingT",
          "type": "newtype"
        },
        "index": {
          "description": "Monad transformer that adds new logging function Since",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "LoggingT",
          "package": "monad-logger",
          "partial": "Logging",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#t:LoggingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "MonadLogger",
          "package": "monad-logger",
          "source": "src/Control-Monad-Logger.html#MonadLogger",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "MonadLogger",
          "package": "monad-logger",
          "partial": "Monad Logger",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#t:MonadLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad transformer that disables logging.\n\u003c/p\u003e\u003cp\u003eSince 0.2.4\n\u003c/p\u003e",
          "module": "Control.Monad.Logger",
          "name": "NoLoggingT",
          "package": "monad-logger",
          "source": "src/Control-Monad-Logger.html#NoLoggingT",
          "type": "newtype"
        },
        "index": {
          "description": "Monad transformer that disables logging Since",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "NoLoggingT",
          "package": "monad-logger",
          "partial": "No Logging",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#t:NoLoggingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "LevelDebug",
          "package": "monad-logger",
          "signature": "LevelDebug",
          "source": "src/Control-Monad-Logger.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "LevelDebug",
          "package": "monad-logger",
          "partial": "Level Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:LevelDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "LevelError",
          "package": "monad-logger",
          "signature": "LevelError",
          "source": "src/Control-Monad-Logger.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "LevelError",
          "package": "monad-logger",
          "partial": "Level Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:LevelError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "LevelInfo",
          "package": "monad-logger",
          "signature": "LevelInfo",
          "source": "src/Control-Monad-Logger.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "LevelInfo",
          "package": "monad-logger",
          "partial": "Level Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:LevelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "LevelOther",
          "package": "monad-logger",
          "signature": "LevelOther Text",
          "source": "src/Control-Monad-Logger.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "LevelOther",
          "package": "monad-logger",
          "partial": "Level Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:LevelOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "LevelWarn",
          "package": "monad-logger",
          "signature": "LevelWarn",
          "source": "src/Control-Monad-Logger.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "LevelWarn",
          "package": "monad-logger",
          "partial": "Level Warn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:LevelWarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "LoggingT",
          "package": "monad-logger",
          "signature": "LoggingT",
          "source": "src/Control-Monad-Logger.html#LoggingT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "LoggingT",
          "package": "monad-logger",
          "partial": "Logging",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:LoggingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "NoLoggingT",
          "package": "monad-logger",
          "signature": "NoLoggingT",
          "source": "src/Control-Monad-Logger.html#NoLoggingT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "NoLoggingT",
          "package": "monad-logger",
          "partial": "No Logging",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:NoLoggingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "defaultLogStr",
          "package": "monad-logger",
          "signature": "Loc -\u003e LogSource -\u003e LogLevel -\u003e LogStr -\u003e LogStr",
          "source": "src/Control-Monad-Logger.html#defaultLogStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "defaultLogStr",
          "normalized": "Loc-\u003eLogSource-\u003eLogLevel-\u003eLogStr-\u003eLogStr",
          "package": "monad-logger",
          "partial": "Log Str",
          "signature": "Loc-\u003eLogSource-\u003eLogLevel-\u003eLogStr-\u003eLogStr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:defaultLogStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a location into an Exp.\n\u003c/p\u003e\u003cp\u003eSince 0.3.1\n\u003c/p\u003e",
          "module": "Control.Monad.Logger",
          "name": "liftLoc",
          "package": "monad-logger",
          "signature": "Loc -\u003e Q Exp",
          "source": "src/Control-Monad-Logger.html#liftLoc",
          "type": "function"
        },
        "index": {
          "description": "Lift location into an Exp Since",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "liftLoc",
          "normalized": "Loc-\u003eQ Exp",
          "package": "monad-logger",
          "partial": "Loc",
          "signature": "Loc-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:liftLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a function that takes a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and logs a \u003ccode\u003e\u003ca\u003eLevelDebug\u003c/a\u003e\u003c/code\u003e message. Usage:\n\u003c/p\u003e\u003cpre\u003e $(logDebug) \"This is a debug log message\"\n\u003c/pre\u003e",
          "module": "Control.Monad.Logger",
          "name": "logDebug",
          "package": "monad-logger",
          "signature": "Q Exp",
          "source": "src/Control-Monad-Logger.html#logDebug",
          "type": "function"
        },
        "index": {
          "description": "Generates function that takes Text and logs LevelDebug message Usage logDebug This is debug log message",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logDebug",
          "package": "monad-logger",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "logDebugN",
          "package": "monad-logger",
          "signature": "Text -\u003e m ()",
          "source": "src/Control-Monad-Logger.html#logDebugN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logDebugN",
          "normalized": "Text-\u003ea()",
          "package": "monad-logger",
          "partial": "Debug",
          "signature": "Text-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logDebugN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "logDebugNS",
          "package": "monad-logger",
          "signature": "Text -\u003e Text -\u003e m ()",
          "source": "src/Control-Monad-Logger.html#logDebugNS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logDebugNS",
          "normalized": "Text-\u003eText-\u003ea()",
          "package": "monad-logger",
          "partial": "Debug NS",
          "signature": "Text-\u003eText-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logDebugNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a function that takes a \u003ccode\u003e\u003ca\u003eLogSource\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and logs a \u003ccode\u003e\u003ca\u003eLevelDebug\u003c/a\u003e\u003c/code\u003e message. Usage:\n\u003c/p\u003e\u003cpre\u003e $logDebugS \"SomeSource\" \"This is a debug log message\"\n\u003c/pre\u003e",
          "module": "Control.Monad.Logger",
          "name": "logDebugS",
          "package": "monad-logger",
          "signature": "Q Exp",
          "source": "src/Control-Monad-Logger.html#logDebugS",
          "type": "function"
        },
        "index": {
          "description": "Generates function that takes LogSource and Text and logs LevelDebug message Usage logDebugS SomeSource This is debug log message",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logDebugS",
          "package": "monad-logger",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logDebugS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogDebug\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Logger",
          "name": "logError",
          "package": "monad-logger",
          "signature": "Q Exp",
          "source": "src/Control-Monad-Logger.html#logError",
          "type": "function"
        },
        "index": {
          "description": "See logDebug",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logError",
          "package": "monad-logger",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "logErrorN",
          "package": "monad-logger",
          "signature": "Text -\u003e m ()",
          "source": "src/Control-Monad-Logger.html#logErrorN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logErrorN",
          "normalized": "Text-\u003ea()",
          "package": "monad-logger",
          "partial": "Error",
          "signature": "Text-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logErrorN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "logErrorNS",
          "package": "monad-logger",
          "signature": "Text -\u003e Text -\u003e m ()",
          "source": "src/Control-Monad-Logger.html#logErrorNS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logErrorNS",
          "normalized": "Text-\u003eText-\u003ea()",
          "package": "monad-logger",
          "partial": "Error NS",
          "signature": "Text-\u003eText-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logErrorNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogDebugS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Logger",
          "name": "logErrorS",
          "package": "monad-logger",
          "signature": "Q Exp",
          "source": "src/Control-Monad-Logger.html#logErrorS",
          "type": "function"
        },
        "index": {
          "description": "See logDebugS",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logErrorS",
          "package": "monad-logger",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logErrorS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogDebug\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Logger",
          "name": "logInfo",
          "package": "monad-logger",
          "signature": "Q Exp",
          "source": "src/Control-Monad-Logger.html#logInfo",
          "type": "function"
        },
        "index": {
          "description": "See logDebug",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logInfo",
          "package": "monad-logger",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "logInfoN",
          "package": "monad-logger",
          "signature": "Text -\u003e m ()",
          "source": "src/Control-Monad-Logger.html#logInfoN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logInfoN",
          "normalized": "Text-\u003ea()",
          "package": "monad-logger",
          "partial": "Info",
          "signature": "Text-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logInfoN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "logInfoNS",
          "package": "monad-logger",
          "signature": "Text -\u003e Text -\u003e m ()",
          "source": "src/Control-Monad-Logger.html#logInfoNS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logInfoNS",
          "normalized": "Text-\u003eText-\u003ea()",
          "package": "monad-logger",
          "partial": "Info NS",
          "signature": "Text-\u003eText-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logInfoNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogDebugS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Logger",
          "name": "logInfoS",
          "package": "monad-logger",
          "signature": "Q Exp",
          "source": "src/Control-Monad-Logger.html#logInfoS",
          "type": "function"
        },
        "index": {
          "description": "See logDebugS",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logInfoS",
          "package": "monad-logger",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logInfoS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a function that takes a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and logs a \u003ccode\u003e\u003ca\u003eLevelOther\u003c/a\u003e\u003c/code\u003e message. Usage:\n\u003c/p\u003e\u003cpre\u003e $(logOther \"My new level\") \"This is a log message\"\n\u003c/pre\u003e",
          "module": "Control.Monad.Logger",
          "name": "logOther",
          "package": "monad-logger",
          "signature": "Text -\u003e Q Exp",
          "source": "src/Control-Monad-Logger.html#logOther",
          "type": "function"
        },
        "index": {
          "description": "Generates function that takes Text and logs LevelOther message Usage logOther My new level This is log message",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logOther",
          "normalized": "Text-\u003eQ Exp",
          "package": "monad-logger",
          "partial": "Other",
          "signature": "Text-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "logOtherN",
          "package": "monad-logger",
          "signature": "LogLevel -\u003e Text -\u003e m ()",
          "source": "src/Control-Monad-Logger.html#logOtherN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logOtherN",
          "normalized": "LogLevel-\u003eText-\u003ea()",
          "package": "monad-logger",
          "partial": "Other",
          "signature": "LogLevel-\u003eText-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logOtherN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "logOtherNS",
          "package": "monad-logger",
          "signature": "Text -\u003e LogLevel -\u003e Text -\u003e m ()",
          "source": "src/Control-Monad-Logger.html#logOtherNS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logOtherNS",
          "normalized": "Text-\u003eLogLevel-\u003eText-\u003ea()",
          "package": "monad-logger",
          "partial": "Other NS",
          "signature": "Text-\u003eLogLevel-\u003eText-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logOtherNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a function that takes a \u003ccode\u003e\u003ca\u003eLogSource\u003c/a\u003e\u003c/code\u003e, a level name and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and logs a \u003ccode\u003e\u003ca\u003eLevelOther\u003c/a\u003e\u003c/code\u003e message. Usage:\n\u003c/p\u003e\u003cpre\u003e $logOtherS \"SomeSource\" \"My new level\" \"This is a log message\"\n\u003c/pre\u003e",
          "module": "Control.Monad.Logger",
          "name": "logOtherS",
          "package": "monad-logger",
          "signature": "Q Exp",
          "source": "src/Control-Monad-Logger.html#logOtherS",
          "type": "function"
        },
        "index": {
          "description": "Generates function that takes LogSource level name and Text and logs LevelOther message Usage logOtherS SomeSource My new level This is log message",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logOtherS",
          "package": "monad-logger",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logOtherS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogDebug\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Logger",
          "name": "logWarn",
          "package": "monad-logger",
          "signature": "Q Exp",
          "source": "src/Control-Monad-Logger.html#logWarn",
          "type": "function"
        },
        "index": {
          "description": "See logDebug",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logWarn",
          "package": "monad-logger",
          "partial": "Warn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logWarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "logWarnN",
          "package": "monad-logger",
          "signature": "Text -\u003e m ()",
          "source": "src/Control-Monad-Logger.html#logWarnN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logWarnN",
          "normalized": "Text-\u003ea()",
          "package": "monad-logger",
          "partial": "Warn",
          "signature": "Text-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logWarnN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "logWarnNS",
          "package": "monad-logger",
          "signature": "Text -\u003e Text -\u003e m ()",
          "source": "src/Control-Monad-Logger.html#logWarnNS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logWarnNS",
          "normalized": "Text-\u003eText-\u003ea()",
          "package": "monad-logger",
          "partial": "Warn NS",
          "signature": "Text-\u003eText-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logWarnNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogDebugS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Logger",
          "name": "logWarnS",
          "package": "monad-logger",
          "signature": "Q Exp",
          "source": "src/Control-Monad-Logger.html#logWarnS",
          "type": "function"
        },
        "index": {
          "description": "See logDebugS",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "logWarnS",
          "package": "monad-logger",
          "partial": "Warn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logWarnS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "monadLoggerLog",
          "package": "monad-logger",
          "signature": "Loc -\u003e LogSource -\u003e LogLevel -\u003e msg -\u003e m ()",
          "source": "src/Control-Monad-Logger.html#monadLoggerLog",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "monadLoggerLog",
          "normalized": "Loc-\u003eLogSource-\u003eLogLevel-\u003ea-\u003eb()",
          "package": "monad-logger",
          "partial": "Logger Log",
          "signature": "Loc-\u003eLogSource-\u003eLogLevel-\u003emsg-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:monadLoggerLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "runLoggingT",
          "package": "monad-logger",
          "signature": "(Loc -\u003e LogSource -\u003e LogLevel -\u003e LogStr -\u003e IO ()) -\u003e m a",
          "source": "src/Control-Monad-Logger.html#LoggingT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "runLoggingT",
          "normalized": "(Loc-\u003eLogSource-\u003eLogLevel-\u003eLogStr-\u003eIO())-\u003ea b",
          "package": "monad-logger",
          "partial": "Logging",
          "signature": "(Loc-\u003eLogSource-\u003eLogLevel-\u003eLogStr-\u003eIO())-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:runLoggingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Logger",
          "name": "runNoLoggingT",
          "package": "monad-logger",
          "signature": "m a",
          "source": "src/Control-Monad-Logger.html#NoLoggingT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "runNoLoggingT",
          "package": "monad-logger",
          "partial": "No Logging",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:runNoLoggingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a block using a \u003ccode\u003eMonadLogger\u003c/code\u003e instance which prints to stderr.\n\u003c/p\u003e\u003cp\u003eSince 0.2.2\n\u003c/p\u003e",
          "module": "Control.Monad.Logger",
          "name": "runStderrLoggingT",
          "package": "monad-logger",
          "signature": "LoggingT m a -\u003e m a",
          "source": "src/Control-Monad-Logger.html#runStderrLoggingT",
          "type": "function"
        },
        "index": {
          "description": "Run block using MonadLogger instance which prints to stderr Since",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "runStderrLoggingT",
          "normalized": "LoggingT a b-\u003ea b",
          "package": "monad-logger",
          "partial": "Stderr Logging",
          "signature": "LoggingT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:runStderrLoggingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a block using a \u003ccode\u003eMonadLogger\u003c/code\u003e instance which prints to stdout.\n\u003c/p\u003e\u003cp\u003eSince 0.2.2\n\u003c/p\u003e",
          "module": "Control.Monad.Logger",
          "name": "runStdoutLoggingT",
          "package": "monad-logger",
          "signature": "LoggingT m a -\u003e m a",
          "source": "src/Control-Monad-Logger.html#runStdoutLoggingT",
          "type": "function"
        },
        "index": {
          "description": "Run block using MonadLogger instance which prints to stdout Since",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "runStdoutLoggingT",
          "normalized": "LoggingT a b-\u003ea b",
          "package": "monad-logger",
          "partial": "Stdout Logging",
          "signature": "LoggingT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:runStdoutLoggingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWithin the \u003ccode\u003e\u003ca\u003eLoggingT\u003c/a\u003e\u003c/code\u003e monad, capture all log messages to a bounded\n   channel of the indicated size, and only actually log them if there is an\n   exception.\n\u003c/p\u003e\u003cp\u003eSince 0.3.2\n\u003c/p\u003e",
          "module": "Control.Monad.Logger",
          "name": "withChannelLogger",
          "package": "monad-logger",
          "signature": "Int-\u003e LoggingT m a-\u003e LoggingT m a",
          "type": "function"
        },
        "index": {
          "description": "Within the LoggingT monad capture all log messages to bounded channel of the indicated size and only actually log them if there is an exception Since",
          "hierarchy": "Control Monad Logger",
          "module": "Control.Monad.Logger",
          "name": "withChannelLogger",
          "normalized": "Int-\u003eLoggingT a b-\u003eLoggingT a b",
          "package": "monad-logger",
          "partial": "Channel Logger",
          "signature": "Int-\u003eLoggingT m a-\u003eLoggingT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:withChannelLogger"
      }
    }
  ]
]