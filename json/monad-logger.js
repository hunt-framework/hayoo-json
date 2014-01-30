[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the facilities needed for a decoupled logging system.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadLogger\u003c/a\u003e\u003c/code\u003e class is implemented by monads that give access to a\n logging facility.  If you're defining a custom monad, then you may define an\n instance of \u003ccode\u003e\u003ca\u003eMonadLogger\u003c/a\u003e\u003c/code\u003e that routes the log messages to the appropriate\n place (e.g., that's what \u003ccode\u003eyesod-core\u003c/code\u003e's \u003ccode\u003eGHandler\u003c/code\u003e does).  Otherwise, you\n may use the \u003ccode\u003e\u003ca\u003eLoggingT\u003c/a\u003e\u003c/code\u003e monad included in this module (see\n \u003ccode\u003e\u003ca\u003erunStderrLoggingT\u003c/a\u003e\u003c/code\u003e). To simply discard log message, use \u003ccode\u003e\u003ca\u003eNoLoggingT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs a user of the logging facility, we provide you some convenient Template\n Haskell splices that use the \u003ccode\u003e\u003ca\u003eMonadLogger\u003c/a\u003e\u003c/code\u003e class.  They will record their\n source file and position, which is very helpful when debugging.  See\n \u003ccode\u003e\u003ca\u003elogDebug\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Logger.html",
        "fct-type": "module",
        "title": "Logger"
      },
      "index": {
        "description": "This module provides the facilities needed for decoupled logging system The MonadLogger class is implemented by monads that give access to logging facility If you re defining custom monad then you may define an instance of MonadLogger that routes the log messages to the appropriate place e.g that what yesod-core GHandler does Otherwise you may use the LoggingT monad included in this module see runStderrLoggingT To simply discard log message use NoLoggingT As user of the logging facility we provide you some convenient Template Haskell splices that use the MonadLogger class They will record their source file and position which is very helpful when debugging See logDebug for more information",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "Logger",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#t:Loc",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Loc"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "Loc",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#t:LogLevel",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Logger.html#LogLevel",
        "fct-type": "data",
        "title": "LogLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "LogLevel",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Log Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#t:LogSource",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Logger.html#LogSource",
        "fct-type": "type",
        "title": "LogSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "LogSource",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Log Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#t:LoggingT",
      "description": {
        "fct-descr": "\u003cp\u003eMonad transformer that adds a new logging function.\n\u003c/p\u003e\u003cp\u003eSince 0.2.2\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Logger.html#LoggingT",
        "fct-type": "newtype",
        "title": "LoggingT"
      },
      "index": {
        "description": "Monad transformer that adds new logging function Since",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "LoggingT",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Logging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#t:MonadLogger",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Logger.html#MonadLogger",
        "fct-type": "class",
        "title": "MonadLogger"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "MonadLogger",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Monad Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#t:NoLoggingT",
      "description": {
        "fct-descr": "\u003cp\u003eMonad transformer that disables logging.\n\u003c/p\u003e\u003cp\u003eSince 0.2.4\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Logger.html#NoLoggingT",
        "fct-type": "newtype",
        "title": "NoLoggingT"
      },
      "index": {
        "description": "Monad transformer that disables logging Since",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "NoLoggingT",
        "normalized": "",
        "package": "monad-logger",
        "partial": "No Logging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:LevelDebug",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "LevelDebug",
        "fct-source": "src/Control-Monad-Logger.html#LogLevel",
        "fct-type": "function",
        "title": "LevelDebug"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "LevelDebug",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Level Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:LevelError",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "LevelError",
        "fct-source": "src/Control-Monad-Logger.html#LogLevel",
        "fct-type": "function",
        "title": "LevelError"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "LevelError",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Level Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:LevelInfo",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "LevelInfo",
        "fct-source": "src/Control-Monad-Logger.html#LogLevel",
        "fct-type": "function",
        "title": "LevelInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "LevelInfo",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Level Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:LevelOther",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "LevelOther Text",
        "fct-source": "src/Control-Monad-Logger.html#LogLevel",
        "fct-type": "function",
        "title": "LevelOther"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "LevelOther",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Level Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:LevelWarn",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "LevelWarn",
        "fct-source": "src/Control-Monad-Logger.html#LogLevel",
        "fct-type": "function",
        "title": "LevelWarn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "LevelWarn",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Level Warn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:LoggingT",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "LoggingT",
        "fct-source": "src/Control-Monad-Logger.html#LoggingT",
        "fct-type": "function",
        "title": "LoggingT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "LoggingT",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Logging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:NoLoggingT",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "NoLoggingT",
        "fct-source": "src/Control-Monad-Logger.html#NoLoggingT",
        "fct-type": "function",
        "title": "NoLoggingT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "NoLoggingT",
        "normalized": "",
        "package": "monad-logger",
        "partial": "No Logging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:defaultLogStr",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Loc -\u003e LogSource -\u003e LogLevel -\u003e LogStr -\u003e LogStr",
        "fct-source": "src/Control-Monad-Logger.html#defaultLogStr",
        "fct-type": "function",
        "title": "defaultLogStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "defaultLogStr",
        "normalized": "Loc-\u003eLogSource-\u003eLogLevel-\u003eLogStr-\u003eLogStr",
        "package": "monad-logger",
        "partial": "Log Str",
        "signature": "Loc-\u003eLogSource-\u003eLogLevel-\u003eLogStr-\u003eLogStr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:liftLoc",
      "description": {
        "fct-descr": "\u003cp\u003eLift a location into an Exp.\n\u003c/p\u003e\u003cp\u003eSince 0.3.1\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Loc -\u003e Q Exp",
        "fct-source": "src/Control-Monad-Logger.html#liftLoc",
        "fct-type": "function",
        "title": "liftLoc"
      },
      "index": {
        "description": "Lift location into an Exp Since",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "liftLoc",
        "normalized": "Loc-\u003eQ Exp",
        "package": "monad-logger",
        "partial": "Loc",
        "signature": "Loc-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logDebug",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a function that takes a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and logs a \u003ccode\u003e\u003ca\u003eLevelDebug\u003c/a\u003e\u003c/code\u003e message. Usage:\n\u003c/p\u003e\u003cpre\u003e $(logDebug) \"This is a debug log message\"\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Q Exp",
        "fct-source": "src/Control-Monad-Logger.html#logDebug",
        "fct-type": "function",
        "title": "logDebug"
      },
      "index": {
        "description": "Generates function that takes Text and logs LevelDebug message Usage logDebug This is debug log message",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logDebug",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logDebugN",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Text -\u003e m ()",
        "fct-source": "src/Control-Monad-Logger.html#logDebugN",
        "fct-type": "function",
        "title": "logDebugN"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logDebugN",
        "normalized": "Text-\u003ea()",
        "package": "monad-logger",
        "partial": "Debug",
        "signature": "Text-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logDebugNS",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Text -\u003e Text -\u003e m ()",
        "fct-source": "src/Control-Monad-Logger.html#logDebugNS",
        "fct-type": "function",
        "title": "logDebugNS"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logDebugNS",
        "normalized": "Text-\u003eText-\u003ea()",
        "package": "monad-logger",
        "partial": "Debug NS",
        "signature": "Text-\u003eText-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logDebugS",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a function that takes a \u003ccode\u003e\u003ca\u003eLogSource\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and logs a \u003ccode\u003e\u003ca\u003eLevelDebug\u003c/a\u003e\u003c/code\u003e message. Usage:\n\u003c/p\u003e\u003cpre\u003e $logDebugS \"SomeSource\" \"This is a debug log message\"\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Q Exp",
        "fct-source": "src/Control-Monad-Logger.html#logDebugS",
        "fct-type": "function",
        "title": "logDebugS"
      },
      "index": {
        "description": "Generates function that takes LogSource and Text and logs LevelDebug message Usage logDebugS SomeSource This is debug log message",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logDebugS",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logError",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogDebug\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Q Exp",
        "fct-source": "src/Control-Monad-Logger.html#logError",
        "fct-type": "function",
        "title": "logError"
      },
      "index": {
        "description": "See logDebug",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logError",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logErrorN",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Text -\u003e m ()",
        "fct-source": "src/Control-Monad-Logger.html#logErrorN",
        "fct-type": "function",
        "title": "logErrorN"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logErrorN",
        "normalized": "Text-\u003ea()",
        "package": "monad-logger",
        "partial": "Error",
        "signature": "Text-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logErrorNS",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Text -\u003e Text -\u003e m ()",
        "fct-source": "src/Control-Monad-Logger.html#logErrorNS",
        "fct-type": "function",
        "title": "logErrorNS"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logErrorNS",
        "normalized": "Text-\u003eText-\u003ea()",
        "package": "monad-logger",
        "partial": "Error NS",
        "signature": "Text-\u003eText-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logErrorS",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogDebugS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Q Exp",
        "fct-source": "src/Control-Monad-Logger.html#logErrorS",
        "fct-type": "function",
        "title": "logErrorS"
      },
      "index": {
        "description": "See logDebugS",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logErrorS",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logInfo",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogDebug\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Q Exp",
        "fct-source": "src/Control-Monad-Logger.html#logInfo",
        "fct-type": "function",
        "title": "logInfo"
      },
      "index": {
        "description": "See logDebug",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logInfo",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logInfoN",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Text -\u003e m ()",
        "fct-source": "src/Control-Monad-Logger.html#logInfoN",
        "fct-type": "function",
        "title": "logInfoN"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logInfoN",
        "normalized": "Text-\u003ea()",
        "package": "monad-logger",
        "partial": "Info",
        "signature": "Text-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logInfoNS",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Text -\u003e Text -\u003e m ()",
        "fct-source": "src/Control-Monad-Logger.html#logInfoNS",
        "fct-type": "function",
        "title": "logInfoNS"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logInfoNS",
        "normalized": "Text-\u003eText-\u003ea()",
        "package": "monad-logger",
        "partial": "Info NS",
        "signature": "Text-\u003eText-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logInfoS",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogDebugS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Q Exp",
        "fct-source": "src/Control-Monad-Logger.html#logInfoS",
        "fct-type": "function",
        "title": "logInfoS"
      },
      "index": {
        "description": "See logDebugS",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logInfoS",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logOther",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a function that takes a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and logs a \u003ccode\u003e\u003ca\u003eLevelOther\u003c/a\u003e\u003c/code\u003e message. Usage:\n\u003c/p\u003e\u003cpre\u003e $(logOther \"My new level\") \"This is a log message\"\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Text -\u003e Q Exp",
        "fct-source": "src/Control-Monad-Logger.html#logOther",
        "fct-type": "function",
        "title": "logOther"
      },
      "index": {
        "description": "Generates function that takes Text and logs LevelOther message Usage logOther My new level This is log message",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logOther",
        "normalized": "Text-\u003eQ Exp",
        "package": "monad-logger",
        "partial": "Other",
        "signature": "Text-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logOtherN",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "LogLevel -\u003e Text -\u003e m ()",
        "fct-source": "src/Control-Monad-Logger.html#logOtherN",
        "fct-type": "function",
        "title": "logOtherN"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logOtherN",
        "normalized": "LogLevel-\u003eText-\u003ea()",
        "package": "monad-logger",
        "partial": "Other",
        "signature": "LogLevel-\u003eText-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logOtherNS",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Text -\u003e LogLevel -\u003e Text -\u003e m ()",
        "fct-source": "src/Control-Monad-Logger.html#logOtherNS",
        "fct-type": "function",
        "title": "logOtherNS"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logOtherNS",
        "normalized": "Text-\u003eLogLevel-\u003eText-\u003ea()",
        "package": "monad-logger",
        "partial": "Other NS",
        "signature": "Text-\u003eLogLevel-\u003eText-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logOtherS",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a function that takes a \u003ccode\u003e\u003ca\u003eLogSource\u003c/a\u003e\u003c/code\u003e, a level name and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and logs a \u003ccode\u003e\u003ca\u003eLevelOther\u003c/a\u003e\u003c/code\u003e message. Usage:\n\u003c/p\u003e\u003cpre\u003e $logOtherS \"SomeSource\" \"My new level\" \"This is a log message\"\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Q Exp",
        "fct-source": "src/Control-Monad-Logger.html#logOtherS",
        "fct-type": "function",
        "title": "logOtherS"
      },
      "index": {
        "description": "Generates function that takes LogSource level name and Text and logs LevelOther message Usage logOtherS SomeSource My new level This is log message",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logOtherS",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logWarn",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogDebug\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Q Exp",
        "fct-source": "src/Control-Monad-Logger.html#logWarn",
        "fct-type": "function",
        "title": "logWarn"
      },
      "index": {
        "description": "See logDebug",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logWarn",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Warn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logWarnN",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Text -\u003e m ()",
        "fct-source": "src/Control-Monad-Logger.html#logWarnN",
        "fct-type": "function",
        "title": "logWarnN"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logWarnN",
        "normalized": "Text-\u003ea()",
        "package": "monad-logger",
        "partial": "Warn",
        "signature": "Text-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logWarnNS",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Text -\u003e Text -\u003e m ()",
        "fct-source": "src/Control-Monad-Logger.html#logWarnNS",
        "fct-type": "function",
        "title": "logWarnNS"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logWarnNS",
        "normalized": "Text-\u003eText-\u003ea()",
        "package": "monad-logger",
        "partial": "Warn NS",
        "signature": "Text-\u003eText-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:logWarnS",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elogDebugS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Q Exp",
        "fct-source": "src/Control-Monad-Logger.html#logWarnS",
        "fct-type": "function",
        "title": "logWarnS"
      },
      "index": {
        "description": "See logDebugS",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "logWarnS",
        "normalized": "",
        "package": "monad-logger",
        "partial": "Warn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:monadLoggerLog",
      "description": {
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Loc -\u003e LogSource -\u003e LogLevel -\u003e msg -\u003e m ()",
        "fct-source": "src/Control-Monad-Logger.html#monadLoggerLog",
        "fct-type": "method",
        "title": "monadLoggerLog"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "monadLoggerLog",
        "normalized": "Loc-\u003eLogSource-\u003eLogLevel-\u003ea-\u003eb()",
        "package": "monad-logger",
        "partial": "Logger Log",
        "signature": "Loc-\u003eLogSource-\u003eLogLevel-\u003emsg-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:runLoggingT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "(Loc -\u003e LogSource -\u003e LogLevel -\u003e LogStr -\u003e IO ()) -\u003e m a",
        "fct-source": "src/Control-Monad-Logger.html#LoggingT",
        "fct-type": "function",
        "title": "runLoggingT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "runLoggingT",
        "normalized": "(Loc-\u003eLogSource-\u003eLogLevel-\u003eLogStr-\u003eIO())-\u003ea b",
        "package": "monad-logger",
        "partial": "Logging",
        "signature": "(Loc-\u003eLogSource-\u003eLogLevel-\u003eLogStr-\u003eIO())-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:runNoLoggingT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "m a",
        "fct-source": "src/Control-Monad-Logger.html#NoLoggingT",
        "fct-type": "function",
        "title": "runNoLoggingT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "runNoLoggingT",
        "normalized": "",
        "package": "monad-logger",
        "partial": "No Logging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:runStderrLoggingT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a block using a \u003ccode\u003eMonadLogger\u003c/code\u003e instance which prints to stderr.\n\u003c/p\u003e\u003cp\u003eSince 0.2.2\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "LoggingT m a -\u003e m a",
        "fct-source": "src/Control-Monad-Logger.html#runStderrLoggingT",
        "fct-type": "function",
        "title": "runStderrLoggingT"
      },
      "index": {
        "description": "Run block using MonadLogger instance which prints to stderr Since",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "runStderrLoggingT",
        "normalized": "LoggingT a b-\u003ea b",
        "package": "monad-logger",
        "partial": "Stderr Logging",
        "signature": "LoggingT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:runStdoutLoggingT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a block using a \u003ccode\u003eMonadLogger\u003c/code\u003e instance which prints to stdout.\n\u003c/p\u003e\u003cp\u003eSince 0.2.2\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "LoggingT m a -\u003e m a",
        "fct-source": "src/Control-Monad-Logger.html#runStdoutLoggingT",
        "fct-type": "function",
        "title": "runStdoutLoggingT"
      },
      "index": {
        "description": "Run block using MonadLogger instance which prints to stdout Since",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "runStdoutLoggingT",
        "normalized": "LoggingT a b-\u003ea b",
        "package": "monad-logger",
        "partial": "Stdout Logging",
        "signature": "LoggingT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-logger/docs/Control-Monad-Logger.html#v:withChannelLogger",
      "description": {
        "fct-descr": "\u003cp\u003eWithin the \u003ccode\u003e\u003ca\u003eLoggingT\u003c/a\u003e\u003c/code\u003e monad, capture all log messages to a bounded\n   channel of the indicated size, and only actually log them if there is an\n   exception.\n\u003c/p\u003e\u003cp\u003eSince 0.3.2\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Logger",
        "fct-package": "monad-logger",
        "fct-signature": "Int-\u003e LoggingT m a-\u003e LoggingT m a",
        "fct-type": "function",
        "title": "withChannelLogger"
      },
      "index": {
        "description": "Within the LoggingT monad capture all log messages to bounded channel of the indicated size and only actually log them if there is an exception Since",
        "hierarchy": "Control Monad Logger",
        "module": "Control.Monad.Logger",
        "name": "withChannelLogger",
        "normalized": "Int-\u003eLoggingT a b-\u003eLoggingT a b",
        "package": "monad-logger",
        "partial": "Channel Logger",
        "signature": "Int-\u003eLoggingT m a-\u003eLoggingT m a"
      }
    }
  }
]