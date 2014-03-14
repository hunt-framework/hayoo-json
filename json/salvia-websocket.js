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
        "word": "salvia-websocket"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "WebSocket",
          "package": "salvia-websocket",
          "source": "src/Network-Salvia-Handler-WebSocket.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Salvia Handler WebSocket",
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "WebSocket",
          "package": "salvia-websocket",
          "partial": "Web Socket",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/salvia-websocket/docs/Network-Salvia-Handler-WebSocket.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "Protocol",
          "package": "salvia-websocket",
          "source": "src/Network-Salvia-Handler-WebSocket.html#Protocol",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Salvia Handler WebSocket",
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "Protocol",
          "package": "salvia-websocket",
          "partial": "Protocol",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-websocket/docs/Network-Salvia-Handler-WebSocket.html#t:Protocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "WebSocketT",
          "package": "salvia-websocket",
          "source": "src/Network-Salvia-Handler-WebSocket.html#WebSocketT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Salvia Handler WebSocket",
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "WebSocketT",
          "package": "salvia-websocket",
          "partial": "Web Socket",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/salvia-websocket/docs/Network-Salvia-Handler-WebSocket.html#t:WebSocketT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "hOnMessage",
          "package": "salvia-websocket",
          "signature": "Int -\u003e (String -\u003e m ()) -\u003e WebSocketT m ()",
          "source": "src/Network-Salvia-Handler-WebSocket.html#hOnMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Handler WebSocket",
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "hOnMessage",
          "normalized": "Int-\u003e(String-\u003ea())-\u003eWebSocketT a()",
          "package": "salvia-websocket",
          "partial": "On Message",
          "signature": "Int-\u003e(String-\u003em())-\u003eWebSocketT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-websocket/docs/Network-Salvia-Handler-WebSocket.html#v:hOnMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "hOnMessageUpdateTMVar",
          "package": "salvia-websocket",
          "signature": "Int -\u003e (String -\u003e a -\u003e a) -\u003e TMVar a -\u003e WebSocketT m ()",
          "source": "src/Network-Salvia-Handler-WebSocket.html#hOnMessageUpdateTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Handler WebSocket",
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "hOnMessageUpdateTMVar",
          "normalized": "Int-\u003e(String-\u003ea-\u003ea)-\u003eTMVar a-\u003eWebSocketT b()",
          "package": "salvia-websocket",
          "partial": "On Message Update TMVar",
          "signature": "Int-\u003e(String-\u003ea-\u003ea)-\u003eTMVar a-\u003eWebSocketT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-websocket/docs/Network-Salvia-Handler-WebSocket.html#v:hOnMessageUpdateTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "hRecvFrameNonBlocking",
          "package": "salvia-websocket",
          "signature": "Int -\u003e StateT ByteString m (Maybe String)",
          "source": "src/Network-Salvia-Handler-WebSocket.html#hRecvFrameNonBlocking",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Handler WebSocket",
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "hRecvFrameNonBlocking",
          "normalized": "Int-\u003eStateT ByteString a(Maybe String)",
          "package": "salvia-websocket",
          "partial": "Recv Frame Non Blocking",
          "signature": "Int-\u003eStateT ByteString m(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-websocket/docs/Network-Salvia-Handler-WebSocket.html#v:hRecvFrameNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "hSendFrame",
          "package": "salvia-websocket",
          "signature": "String -\u003e m ()",
          "source": "src/Network-Salvia-Handler-WebSocket.html#hSendFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Handler WebSocket",
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "hSendFrame",
          "normalized": "String-\u003ea()",
          "package": "salvia-websocket",
          "partial": "Send Frame",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-websocket/docs/Network-Salvia-Handler-WebSocket.html#v:hSendFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "hSendTMVar",
          "package": "salvia-websocket",
          "signature": "Int -\u003e TMVar a -\u003e (a -\u003e String) -\u003e m ()",
          "source": "src/Network-Salvia-Handler-WebSocket.html#hSendTMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Handler WebSocket",
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "hSendTMVar",
          "normalized": "Int-\u003eTMVar a-\u003e(a-\u003eString)-\u003eb()",
          "package": "salvia-websocket",
          "partial": "Send TMVar",
          "signature": "Int-\u003eTMVar a-\u003e(a-\u003eString)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-websocket/docs/Network-Salvia-Handler-WebSocket.html#v:hSendTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "hWebSocket",
          "package": "salvia-websocket",
          "signature": "Value -\u003e WebSocketT m a -\u003e m a",
          "source": "src/Network-Salvia-Handler-WebSocket.html#hWebSocket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Handler WebSocket",
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "hWebSocket",
          "normalized": "Value-\u003eWebSocketT a b-\u003ea b",
          "package": "salvia-websocket",
          "partial": "Web Socket",
          "signature": "Value-\u003eWebSocketT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-websocket/docs/Network-Salvia-Handler-WebSocket.html#v:hWebSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "wsLocation",
          "package": "salvia-websocket",
          "signature": "Http a :-\u003e Maybe Value",
          "source": "src/Network-Salvia-Handler-WebSocket.html#wsLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Handler WebSocket",
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "wsLocation",
          "normalized": "Http a-\u003eMaybe Value",
          "package": "salvia-websocket",
          "partial": "Location",
          "signature": "Http a-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-websocket/docs/Network-Salvia-Handler-WebSocket.html#v:wsLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "wsOrigin",
          "package": "salvia-websocket",
          "signature": "Http a :-\u003e Maybe Value",
          "source": "src/Network-Salvia-Handler-WebSocket.html#wsOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Handler WebSocket",
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "wsOrigin",
          "normalized": "Http a-\u003eMaybe Value",
          "package": "salvia-websocket",
          "partial": "Origin",
          "signature": "Http a-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-websocket/docs/Network-Salvia-Handler-WebSocket.html#v:wsOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "wsProtocol",
          "package": "salvia-websocket",
          "signature": "Http a :-\u003e Maybe Value",
          "source": "src/Network-Salvia-Handler-WebSocket.html#wsProtocol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Salvia Handler WebSocket",
          "module": "Network.Salvia.Handler.WebSocket",
          "name": "wsProtocol",
          "normalized": "Http a-\u003eMaybe Value",
          "package": "salvia-websocket",
          "partial": "Protocol",
          "signature": "Http a-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/salvia-websocket/docs/Network-Salvia-Handler-WebSocket.html#v:wsProtocol"
      }
    }
  ]
]