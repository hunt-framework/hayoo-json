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
        "word": "wai-graceful"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cpre\u003e app req = do\n     liftIO $ somethingImportant -- like threadDelay 100000000\n     LBSResponse status200 [(\"Content-Type\", \"text/plain\")] \"Finished!\"\n\n main = do\n     gs \u003c- initGraceful\n\n     forkIO $ run 8000 (graceful gs app)\n\n     waitForTermination \u003e\u003e gracefulShutdown 15 gs\n     putStrLn \"Bye!\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Wai.Graceful",
          "name": "Graceful",
          "package": "wai-graceful",
          "source": "src/Network-Wai-Graceful.html",
          "type": "module"
        },
        "index": {
          "description": "app req do liftIO somethingImportant like threadDelay LBSResponse status200 Content-Type text plain Finished main do gs initGraceful forkIO run graceful gs app waitForTermination gracefulShutdown gs putStrLn Bye",
          "hierarchy": "Network Wai Graceful",
          "module": "Network.Wai.Graceful",
          "name": "Graceful",
          "package": "wai-graceful",
          "partial": "Graceful",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Graceful",
          "name": "Graceful",
          "package": "wai-graceful",
          "source": "src/Network-Wai-Graceful.html#Graceful",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Wai Graceful",
          "module": "Network.Wai.Graceful",
          "name": "Graceful",
          "package": "wai-graceful",
          "partial": "Graceful",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#t:Graceful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Graceful",
          "name": "Graceful",
          "package": "wai-graceful",
          "signature": "Graceful",
          "source": "src/Network-Wai-Graceful.html#Graceful",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Graceful",
          "module": "Network.Wai.Graceful",
          "name": "Graceful",
          "package": "wai-graceful",
          "partial": "Graceful",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:Graceful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Graceful",
          "name": "activeConnections",
          "package": "wai-graceful",
          "signature": "MVar Int",
          "source": "src/Network-Wai-Graceful.html#Graceful",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Graceful",
          "module": "Network.Wai.Graceful",
          "name": "activeConnections",
          "package": "wai-graceful",
          "partial": "Connections",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:activeConnections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWAI Middleware that keeps track of active connections\n   and blocks further requests with HTTP503.\n\u003c/p\u003e",
          "module": "Network.Wai.Graceful",
          "name": "graceful",
          "package": "wai-graceful",
          "signature": "Graceful -\u003e Application -\u003e Application",
          "source": "src/Network-Wai-Graceful.html#graceful",
          "type": "function"
        },
        "index": {
          "description": "WAI Middleware that keeps track of active connections and blocks further requests with HTTP503",
          "hierarchy": "Network Wai Graceful",
          "module": "Network.Wai.Graceful",
          "name": "graceful",
          "normalized": "Graceful-\u003eApplication-\u003eApplication",
          "package": "wai-graceful",
          "signature": "Graceful-\u003eApplication-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:graceful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrigger shutdown and monitor progress.\n\u003c/p\u003e",
          "module": "Network.Wai.Graceful",
          "name": "gracefulShutdown",
          "package": "wai-graceful",
          "signature": "Int-\u003e Graceful-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Trigger shutdown and monitor progress",
          "hierarchy": "Network Wai Graceful",
          "module": "Network.Wai.Graceful",
          "name": "gracefulShutdown",
          "normalized": "Int-\u003eGraceful-\u003eIO()",
          "package": "wai-graceful",
          "partial": "Shutdown",
          "signature": "Int-\u003eGraceful-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:gracefulShutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Graceful",
          "name": "initGraceful",
          "package": "wai-graceful",
          "signature": "IO Graceful",
          "source": "src/Network-Wai-Graceful.html#initGraceful",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Graceful",
          "module": "Network.Wai.Graceful",
          "name": "initGraceful",
          "package": "wai-graceful",
          "partial": "Graceful",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:initGraceful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Graceful",
          "name": "shutdownTrigger",
          "package": "wai-graceful",
          "signature": "MVar Bool",
          "source": "src/Network-Wai-Graceful.html#Graceful",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Graceful",
          "module": "Network.Wai.Graceful",
          "name": "shutdownTrigger",
          "package": "wai-graceful",
          "partial": "Trigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:shutdownTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for TERM signal.\n\u003c/p\u003e",
          "module": "Network.Wai.Graceful",
          "name": "waitForTermination",
          "package": "wai-graceful",
          "signature": "IO ()",
          "source": "src/Network-Wai-Graceful.html#waitForTermination",
          "type": "function"
        },
        "index": {
          "description": "Wait for TERM signal",
          "hierarchy": "Network Wai Graceful",
          "module": "Network.Wai.Graceful",
          "name": "waitForTermination",
          "normalized": "IO()",
          "package": "wai-graceful",
          "partial": "For Termination",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-graceful/docs/Network-Wai-Graceful.html#v:waitForTermination"
      }
    }
  ]
]