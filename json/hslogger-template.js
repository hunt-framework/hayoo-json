[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger-template/docs/System-Log-Logger-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions that generate hslogger functions using\n Template Haskell.\n\u003c/p\u003e\u003cp\u003eNotes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eSystem.Log.Logger\u003c/a\u003e must be imported qualified, and the qualifier must\n match the qualifier given to \u003ccode\u003ederiveLoggers\u003c/code\u003e and/or \u003ccode\u003ederiveNamedLoggers\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Don't forget to enable Template Haskell preprocessing: specify the pragma\n \u003ccode\u003eLANGUAGE TemplateHaskell\u003c/code\u003e at the top of your source file or\n \u003ccode\u003eextensions: TemplateHaskell\u003c/code\u003e in your cabal file.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "System.Log.Logger.TH",
        "fct-package": "hslogger-template",
        "fct-signature": "module",
        "fct-source": "src/System-Log-Logger-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "This module provides functions that generate hslogger functions using Template Haskell Notes System.Log.Logger must be imported qualified and the qualifier must match the qualifier given to deriveLoggers and or deriveNamedLoggers Don forget to enable Template Haskell preprocessing specify the pragma LANGUAGE TemplateHaskell at the top of your source file or extensions TemplateHaskell in your cabal file",
        "hierarchy": "System Log Logger TH",
        "module": "System.Log.Logger.TH",
        "name": "TH",
        "normalized": "",
        "package": "hslogger-template",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger-template/docs/System-Log-Logger-TH.html#v:deriveLoggers",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate hslogger functions for a list of priorities.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e module Foo.Bar ( ... ) where\n\n import System.Log.Logger.TH (deriveLoggers)\n import qualified System.Log.Logger as HSL\n\n $(deriveLoggers \"HSL\" [HSL.DEBUG, HSL.INFO])\n\u003c/pre\u003e\u003cp\u003eUsed this way, \u003ccode\u003ederiveLoggers\u003c/code\u003e would generate the following functions:\n\u003c/p\u003e\u003cpre\u003e infoM :: MonadIO m =\u003e String -\u003e m ()\n infoM s = liftIO (HSL.infoM \"Foo.Bar\" s)\n\n debugM :: MonadIO m =\u003e String -\u003e m ()\n debugM s = liftIO (HSL.debugM \"Foo.Bar\" s)\n\u003c/pre\u003e\u003cp\u003eThe other hslogger priorities follow the same pattern.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eIn versions prior to 2.0.0, hslogger-template generated functions that\u003c/em\u003e\n \u003cem\u003eprepended the module name to the log message. I no longer feel that this\u003c/em\u003e\n \u003cem\u003eis correct behavior. Instead, please make use of hslogger's formatting\u003c/em\u003e\n \u003cem\u003efunctionality. Example:\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e import System.IO (stderr)\n\n import System.Log.Formatter      (simpleLogFormatter)\n import System.Log.Logger         (rootLoggerName)\n import System.Log.Handler        (setFormatter)\n import System.Log.Handler.Simple (streamHandler)\n import System.Log.Logger.TH      (deriveLoggers)\n\n import qualified System.Log.Logger as HSL\n\n $(deriveLoggers \"HSL\" [HSL.DEBUG, HSL.INFO])\n\n handler \u003c- streamHandler stderr HSL.DEBUG \u003e\u003e= \\h -\u003e return $\n   setFormatter h $ simpleLogFormatter \"$time $loggername $prio $msg\"\n HSL.updateGlobalLogger rootLoggerName (HSL.setLevel HSL.DEBUG . HSL.setHandlers [handler])\n\u003c/pre\u003e",
        "fct-module": "System.Log.Logger.TH",
        "fct-package": "hslogger-template",
        "fct-signature": "String-\u003e [Priority]-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "deriveLoggers"
      },
      "index": {
        "description": "Generate hslogger functions for list of priorities Example usage module Foo.Bar where import System.Log.Logger.TH deriveLoggers import qualified System.Log.Logger as HSL deriveLoggers HSL HSL.DEBUG HSL.INFO Used this way deriveLoggers would generate the following functions infoM MonadIO String infoM liftIO HSL.infoM Foo.Bar debugM MonadIO String debugM liftIO HSL.debugM Foo.Bar The other hslogger priorities follow the same pattern In versions prior to hslogger-template generated functions that prepended the module name to the log message no longer feel that this is correct behavior Instead please make use of hslogger formatting functionality Example import System.IO stderr import System.Log.Formatter simpleLogFormatter import System.Log.Logger rootLoggerName import System.Log.Handler setFormatter import System.Log.Handler.Simple streamHandler import System.Log.Logger.TH deriveLoggers import qualified System.Log.Logger as HSL deriveLoggers HSL HSL.DEBUG HSL.INFO handler streamHandler stderr HSL.DEBUG return setFormatter simpleLogFormatter time loggername prio msg HSL.updateGlobalLogger rootLoggerName HSL.setLevel HSL.DEBUG HSL.setHandlers handler",
        "hierarchy": "System Log Logger TH",
        "module": "System.Log.Logger.TH",
        "name": "deriveLoggers",
        "normalized": "String-\u003e[Priority]-\u003eQ[Dec]",
        "package": "hslogger-template",
        "partial": "Loggers",
        "signature": "String-\u003e[Priority]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger-template/docs/System-Log-Logger-TH.html#v:deriveNamedLoggers",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003ederiveLoggers\u003c/code\u003e, but allows you to specify a message prefix to be\n automatically prepended to every log message.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger.TH",
        "fct-package": "hslogger-template",
        "fct-signature": "String-\u003e String-\u003e [Priority]-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "deriveNamedLoggers"
      },
      "index": {
        "description": "Like deriveLoggers but allows you to specify message prefix to be automatically prepended to every log message",
        "hierarchy": "System Log Logger TH",
        "module": "System.Log.Logger.TH",
        "name": "deriveNamedLoggers",
        "normalized": "String-\u003eString-\u003e[Priority]-\u003eQ[Dec]",
        "package": "hslogger-template",
        "partial": "Named Loggers",
        "signature": "String-\u003eString-\u003e[Priority]-\u003eQ[Dec]"
      }
    }
  }
]