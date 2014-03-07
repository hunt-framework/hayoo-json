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
        "word": "wai-websockets"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.WebSockets",
          "name": "WebSockets",
          "package": "wai-websockets",
          "source": "src/Network-Wai-Handler-WebSockets.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Handler WebSockets",
          "module": "Network.Wai.Handler.WebSockets",
          "name": "WebSockets",
          "package": "wai-websockets",
          "partial": "Web Sockets",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-websockets/docs/Network-Wai-Handler-WebSockets.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor use with \u003ccode\u003esettingsIntercept\u003c/code\u003e from the Warp web server.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.WebSockets",
          "name": "intercept",
          "package": "wai-websockets",
          "signature": "ServerApp -\u003e Request -\u003e Maybe (Source IO ByteString -\u003e Connection -\u003e IO ())",
          "source": "src/Network-Wai-Handler-WebSockets.html#intercept",
          "type": "function"
        },
        "index": {
          "description": "For use with settingsIntercept from the Warp web server",
          "hierarchy": "Network Wai Handler WebSockets",
          "module": "Network.Wai.Handler.WebSockets",
          "name": "intercept",
          "normalized": "ServerApp-\u003eRequest-\u003eMaybe(Source IO ByteString-\u003eConnection-\u003eIO())",
          "package": "wai-websockets",
          "signature": "ServerApp-\u003eRequest-\u003eMaybe(Source IO ByteString-\u003eConnection-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-websockets/docs/Network-Wai-Handler-WebSockets.html#v:intercept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariation of \u003ccode\u003e\u003ca\u003eintercept\u003c/a\u003e\u003c/code\u003e which allows custom options.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.WebSockets",
          "name": "interceptWith",
          "package": "wai-websockets",
          "signature": "ConnectionOptions -\u003e ServerApp -\u003e Request -\u003e Maybe (Source IO ByteString -\u003e Connection -\u003e IO ())",
          "source": "src/Network-Wai-Handler-WebSockets.html#interceptWith",
          "type": "function"
        },
        "index": {
          "description": "Variation of intercept which allows custom options",
          "hierarchy": "Network Wai Handler WebSockets",
          "module": "Network.Wai.Handler.WebSockets",
          "name": "interceptWith",
          "normalized": "ConnectionOptions-\u003eServerApp-\u003eRequest-\u003eMaybe(Source IO ByteString-\u003eConnection-\u003eIO())",
          "package": "wai-websockets",
          "partial": "With",
          "signature": "ConnectionOptions-\u003eServerApp-\u003eRequest-\u003eMaybe(Source IO ByteString-\u003eConnection-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-websockets/docs/Network-Wai-Handler-WebSockets.html#v:interceptWith"
      }
    }
  ]
]