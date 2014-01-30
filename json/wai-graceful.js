[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cpre\u003e app req = do\n     liftIO $ somethingImportant -- like threadDelay 100000000\n     LBSResponse status200 [(\"Content-Type\", \"text/plain\")] \"Finished!\"\n\n main = do\n     gs \u003c- initGraceful\n\n     forkIO $ run 8000 (graceful gs app)\n\n     waitForTermination \u003e\u003e gracefulShutdown 15 gs\n     putStrLn \"Bye!\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Graceful",
        "fct-package": "wai-graceful",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Graceful.html",
        "fct-type": "module",
        "title": "Graceful"
      },
      "index": {
        "description": "app req do liftIO somethingImportant like threadDelay LBSResponse status200 Content-Type text plain Finished main do gs initGraceful forkIO run graceful gs app waitForTermination gracefulShutdown gs putStrLn Bye",
        "hierarchy": "Network Wai Graceful",
        "module": "Network.Wai.Graceful",
        "name": "Graceful",
        "normalized": "",
        "package": "wai-graceful",
        "partial": "Graceful",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#t:Graceful",
      "description": {
        "fct-module": "Network.Wai.Graceful",
        "fct-package": "wai-graceful",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Graceful.html#Graceful",
        "fct-type": "data",
        "title": "Graceful"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Graceful",
        "module": "Network.Wai.Graceful",
        "name": "Graceful",
        "normalized": "",
        "package": "wai-graceful",
        "partial": "Graceful",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:Graceful",
      "description": {
        "fct-module": "Network.Wai.Graceful",
        "fct-package": "wai-graceful",
        "fct-signature": "Graceful",
        "fct-source": "src/Network-Wai-Graceful.html#Graceful",
        "fct-type": "function",
        "title": "Graceful"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Graceful",
        "module": "Network.Wai.Graceful",
        "name": "Graceful",
        "normalized": "",
        "package": "wai-graceful",
        "partial": "Graceful",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:activeConnections",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai.Graceful",
        "fct-package": "wai-graceful",
        "fct-signature": "MVar Int",
        "fct-source": "src/Network-Wai-Graceful.html#Graceful",
        "fct-type": "function",
        "title": "activeConnections"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Graceful",
        "module": "Network.Wai.Graceful",
        "name": "activeConnections",
        "normalized": "",
        "package": "wai-graceful",
        "partial": "Connections",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:graceful",
      "description": {
        "fct-descr": "\u003cp\u003eWAI Middleware that keeps track of active connections\n   and blocks further requests with HTTP503.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Graceful",
        "fct-package": "wai-graceful",
        "fct-signature": "Graceful -\u003e Application -\u003e Application",
        "fct-source": "src/Network-Wai-Graceful.html#graceful",
        "fct-type": "function",
        "title": "graceful"
      },
      "index": {
        "description": "WAI Middleware that keeps track of active connections and blocks further requests with HTTP503",
        "hierarchy": "Network Wai Graceful",
        "module": "Network.Wai.Graceful",
        "name": "graceful",
        "normalized": "Graceful-\u003eApplication-\u003eApplication",
        "package": "wai-graceful",
        "partial": "",
        "signature": "Graceful-\u003eApplication-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:gracefulShutdown",
      "description": {
        "fct-descr": "\u003cp\u003eTrigger shutdown and monitor progress.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Graceful",
        "fct-package": "wai-graceful",
        "fct-signature": "Int-\u003e Graceful-\u003e IO ()",
        "fct-type": "function",
        "title": "gracefulShutdown"
      },
      "index": {
        "description": "Trigger shutdown and monitor progress",
        "hierarchy": "Network Wai Graceful",
        "module": "Network.Wai.Graceful",
        "name": "gracefulShutdown",
        "normalized": "Int-\u003eGraceful-\u003eIO()",
        "package": "wai-graceful",
        "partial": "Shutdown",
        "signature": "Int-\u003eGraceful-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:initGraceful",
      "description": {
        "fct-module": "Network.Wai.Graceful",
        "fct-package": "wai-graceful",
        "fct-signature": "IO Graceful",
        "fct-source": "src/Network-Wai-Graceful.html#initGraceful",
        "fct-type": "function",
        "title": "initGraceful"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Graceful",
        "module": "Network.Wai.Graceful",
        "name": "initGraceful",
        "normalized": "",
        "package": "wai-graceful",
        "partial": "Graceful",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:shutdownTrigger",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai.Graceful",
        "fct-package": "wai-graceful",
        "fct-signature": "MVar Bool",
        "fct-source": "src/Network-Wai-Graceful.html#Graceful",
        "fct-type": "function",
        "title": "shutdownTrigger"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Graceful",
        "module": "Network.Wai.Graceful",
        "name": "shutdownTrigger",
        "normalized": "",
        "package": "wai-graceful",
        "partial": "Trigger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:waitForTermination",
      "description": {
        "fct-descr": "\u003cp\u003eWait for TERM signal.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Graceful",
        "fct-package": "wai-graceful",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Wai-Graceful.html#waitForTermination",
        "fct-type": "function",
        "title": "waitForTermination"
      },
      "index": {
        "description": "Wait for TERM signal",
        "hierarchy": "Network Wai Graceful",
        "module": "Network.Wai.Graceful",
        "name": "waitForTermination",
        "normalized": "IO()",
        "package": "wai-graceful",
        "partial": "For Termination",
        "signature": "IO()"
      }
    }
  }
]