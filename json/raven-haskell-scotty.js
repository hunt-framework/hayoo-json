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
        "word": "raven-haskell-scotty"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities to log errors in Scotty actions using raven-haskell.\n\u003c/p\u003e\u003cpre\u003e import Web.Scotty\n\n import System.Log.Raven\n import System.Log.Raven.Transport.HttpConduit (sendRecord)\n import System.Log.Raven.Scotty\n\n main = do\n     raven \u003c- initRaven \"https://&#8230;\" id sendRecord stderrFallback\n     let hereBeDragons = guardIO raven \"my.logger\" (Just \"DragonsError\") (Just \"My.Inner.Dragons\")\n\n     scotty 8000 $ do\n         post \"/some/action/\" $ do\n             arg1 \u003c- param \"arg1\"\n             arg2 \u003c- param \"arg2\"\n             ds \u003c- hereBeDragons $ dragonsIO arg1 arg2\n             if null ds\n                 then text \"no dragons\"\n                 else do\n                     let msg = \"dragons! run!\"\n                     scottyHttpInterface \u003e\u003e= logError raven \"Main.main\" msg\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Log.Raven.Scotty",
          "name": "Scotty",
          "package": "raven-haskell-scotty",
          "source": "src/System-Log-Raven-Scotty.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities to log errors in Scotty actions using raven-haskell import Web.Scotty import System.Log.Raven import System.Log.Raven.Transport.HttpConduit sendRecord import System.Log.Raven.Scotty main do raven initRaven https id sendRecord stderrFallback let hereBeDragons guardIO raven my.logger Just DragonsError Just My.Inner.Dragons scotty do post some action do arg1 param arg1 arg2 param arg2 ds hereBeDragons dragonsIO arg1 arg2 if null ds then text no dragons else do let msg dragons run scottyHttpInterface logError raven Main.main msg",
          "hierarchy": "System Log Raven Scotty",
          "module": "System.Log.Raven.Scotty",
          "name": "Scotty",
          "package": "raven-haskell-scotty",
          "partial": "Scotty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell-scotty/docs/System-Log-Raven-Scotty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA liftIO alternative that logs unhandled exceptions.\n   The function itself is verbose in arguments and designed to be curried and reused.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Scotty",
          "name": "guardIO",
          "package": "raven-haskell-scotty",
          "signature": "SentryService-\u003e String-\u003e Maybe String-\u003e Maybe String-\u003e IO a-\u003e ActionM a",
          "type": "function"
        },
        "index": {
          "description": "liftIO alternative that logs unhandled exceptions The function itself is verbose in arguments and designed to be curried and reused",
          "hierarchy": "System Log Raven Scotty",
          "module": "System.Log.Raven.Scotty",
          "name": "guardIO",
          "normalized": "SentryService-\u003eString-\u003eMaybe String-\u003eMaybe String-\u003eIO a-\u003eActionM a",
          "package": "raven-haskell-scotty",
          "partial": "IO",
          "signature": "SentryService-\u003eString-\u003eMaybe String-\u003eMaybe String-\u003eIO a-\u003eActionM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell-scotty/docs/System-Log-Raven-Scotty.html#v:guardIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog an error in an ActionM monad, collecting request data.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Scotty",
          "name": "logError",
          "package": "raven-haskell-scotty",
          "signature": "SentryService-\u003e String-\u003e String-\u003e (SentryRecord -\u003e SentryRecord)-\u003e ActionM ()",
          "type": "function"
        },
        "index": {
          "description": "Log an error in an ActionM monad collecting request data",
          "hierarchy": "System Log Raven Scotty",
          "module": "System.Log.Raven.Scotty",
          "name": "logError",
          "normalized": "SentryService-\u003eString-\u003eString-\u003e(SentryRecord-\u003eSentryRecord)-\u003eActionM()",
          "package": "raven-haskell-scotty",
          "partial": "Error",
          "signature": "SentryService-\u003eString-\u003eString-\u003e(SentryRecord-\u003eSentryRecord)-\u003eActionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell-scotty/docs/System-Log-Raven-Scotty.html#v:logError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect request parameters for a HTTP sentry interface.\n\u003c/p\u003e",
          "module": "System.Log.Raven.Scotty",
          "name": "scottyHttpInterface",
          "package": "raven-haskell-scotty",
          "signature": "ActionM (SentryRecord -\u003e SentryRecord)",
          "source": "src/System-Log-Raven-Scotty.html#scottyHttpInterface",
          "type": "function"
        },
        "index": {
          "description": "Collect request parameters for HTTP sentry interface",
          "hierarchy": "System Log Raven Scotty",
          "module": "System.Log.Raven.Scotty",
          "name": "scottyHttpInterface",
          "normalized": "ActionM(SentryRecord-\u003eSentryRecord)",
          "package": "raven-haskell-scotty",
          "partial": "Http Interface",
          "signature": "ActionM(SentryRecord-\u003eSentryRecord)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/raven-haskell-scotty/docs/System-Log-Raven-Scotty.html#v:scottyHttpInterface"
      }
    }
  ]
]