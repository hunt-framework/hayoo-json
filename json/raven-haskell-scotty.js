[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/raven-haskell-scotty/docs/System-Log-Raven-Scotty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities to log errors in Scotty actions using raven-haskell.\n\u003c/p\u003e\u003cpre\u003e import Web.Scotty\n\n import System.Log.Raven\n import System.Log.Raven.Transport.HttpConduit (sendRecord)\n import System.Log.Raven.Scotty\n\n main = do\n     raven \u003c- initRaven \"https://&#8230;\" id sendRecord stderrFallback\n     let hereBeDragons = guardIO raven \"my.logger\" (Just \"DragonsError\") (Just \"My.Inner.Dragons\")\n\n     scotty 8000 $ do\n         post \"/some/action/\" $ do\n             arg1 \u003c- param \"arg1\"\n             arg2 \u003c- param \"arg2\"\n             ds \u003c- hereBeDragons $ dragonsIO arg1 arg2\n             if null ds\n                 then text \"no dragons\"\n                 else do\n                     let msg = \"dragons! run!\"\n                     scottyHttpInterface \u003e\u003e= logError raven \"Main.main\" msg\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Log.Raven.Scotty",
        "fct-package": "raven-haskell-scotty",
        "fct-signature": "module",
        "fct-source": "src/System-Log-Raven-Scotty.html",
        "fct-type": "module",
        "title": "Scotty"
      },
      "index": {
        "description": "Utilities to log errors in Scotty actions using raven-haskell import Web.Scotty import System.Log.Raven import System.Log.Raven.Transport.HttpConduit sendRecord import System.Log.Raven.Scotty main do raven initRaven https id sendRecord stderrFallback let hereBeDragons guardIO raven my.logger Just DragonsError Just My.Inner.Dragons scotty do post some action do arg1 param arg1 arg2 param arg2 ds hereBeDragons dragonsIO arg1 arg2 if null ds then text no dragons else do let msg dragons run scottyHttpInterface logError raven Main.main msg",
        "hierarchy": "System Log Raven Scotty",
        "module": "System.Log.Raven.Scotty",
        "name": "Scotty",
        "normalized": "",
        "package": "raven-haskell-scotty",
        "partial": "Scotty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/raven-haskell-scotty/docs/System-Log-Raven-Scotty.html#v:guardIO",
      "description": {
        "fct-descr": "\u003cp\u003eA liftIO alternative that logs unhandled exceptions.\n   The function itself is verbose in arguments and designed to be curried and reused.\n\u003c/p\u003e",
        "fct-module": "System.Log.Raven.Scotty",
        "fct-package": "raven-haskell-scotty",
        "fct-signature": "SentryService-\u003e String-\u003e Maybe String-\u003e Maybe String-\u003e IO a-\u003e ActionM a",
        "fct-type": "function",
        "title": "guardIO"
      },
      "index": {
        "description": "liftIO alternative that logs unhandled exceptions The function itself is verbose in arguments and designed to be curried and reused",
        "hierarchy": "System Log Raven Scotty",
        "module": "System.Log.Raven.Scotty",
        "name": "guardIO",
        "normalized": "SentryService-\u003eString-\u003eMaybe String-\u003eMaybe String-\u003eIO a-\u003eActionM a",
        "package": "raven-haskell-scotty",
        "partial": "IO",
        "signature": "SentryService-\u003eString-\u003eMaybe String-\u003eMaybe String-\u003eIO a-\u003eActionM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/raven-haskell-scotty/docs/System-Log-Raven-Scotty.html#v:logError",
      "description": {
        "fct-descr": "\u003cp\u003eLog an error in an ActionM monad, collecting request data.\n\u003c/p\u003e",
        "fct-module": "System.Log.Raven.Scotty",
        "fct-package": "raven-haskell-scotty",
        "fct-signature": "SentryService-\u003e String-\u003e String-\u003e (SentryRecord -\u003e SentryRecord)-\u003e ActionM ()",
        "fct-type": "function",
        "title": "logError"
      },
      "index": {
        "description": "Log an error in an ActionM monad collecting request data",
        "hierarchy": "System Log Raven Scotty",
        "module": "System.Log.Raven.Scotty",
        "name": "logError",
        "normalized": "SentryService-\u003eString-\u003eString-\u003e(SentryRecord-\u003eSentryRecord)-\u003eActionM()",
        "package": "raven-haskell-scotty",
        "partial": "Error",
        "signature": "SentryService-\u003eString-\u003eString-\u003e(SentryRecord-\u003eSentryRecord)-\u003eActionM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/raven-haskell-scotty/docs/System-Log-Raven-Scotty.html#v:scottyHttpInterface",
      "description": {
        "fct-descr": "\u003cp\u003eCollect request parameters for a HTTP sentry interface.\n\u003c/p\u003e",
        "fct-module": "System.Log.Raven.Scotty",
        "fct-package": "raven-haskell-scotty",
        "fct-signature": "ActionM (SentryRecord -\u003e SentryRecord)",
        "fct-source": "src/System-Log-Raven-Scotty.html#scottyHttpInterface",
        "fct-type": "function",
        "title": "scottyHttpInterface"
      },
      "index": {
        "description": "Collect request parameters for HTTP sentry interface",
        "hierarchy": "System Log Raven Scotty",
        "module": "System.Log.Raven.Scotty",
        "name": "scottyHttpInterface",
        "normalized": "ActionM(SentryRecord-\u003eSentryRecord)",
        "package": "raven-haskell-scotty",
        "partial": "Http Interface",
        "signature": "ActionM(SentryRecord-\u003eSentryRecord)"
      }
    }
  }
]