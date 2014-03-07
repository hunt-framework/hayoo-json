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
        "word": "websockets-snap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSnap integration for the WebSockets library\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.WebSockets.Snap",
          "name": "Snap",
          "package": "websockets-snap",
          "source": "src/Network-WebSockets-Snap.html",
          "type": "module"
        },
        "index": {
          "description": "Snap integration for the WebSockets library",
          "hierarchy": "Network WebSockets Snap",
          "module": "Network.WebSockets.Snap",
          "name": "Snap",
          "package": "websockets-snap",
          "partial": "Snap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/websockets-snap/docs/Network-WebSockets-Snap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe following function escapes from the current \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e handler, and\n continues processing the \u003ccode\u003e\u003ca\u003eWebSockets\u003c/a\u003e\u003c/code\u003e action. The action to be executed\n takes the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e as a parameter, because snap has already read this\n from the socket.\n\u003c/p\u003e",
          "module": "Network.WebSockets.Snap",
          "name": "runWebSocketsSnap",
          "package": "websockets-snap",
          "signature": "ServerApp -\u003e m ()",
          "source": "src/Network-WebSockets-Snap.html#runWebSocketsSnap",
          "type": "function"
        },
        "index": {
          "description": "The following function escapes from the current Snap handler and continues processing the WebSockets action The action to be executed takes the Request as parameter because snap has already read this from the socket",
          "hierarchy": "Network WebSockets Snap",
          "module": "Network.WebSockets.Snap",
          "name": "runWebSocketsSnap",
          "normalized": "ServerApp-\u003ea()",
          "package": "websockets-snap",
          "partial": "Web Sockets Snap",
          "signature": "ServerApp-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/websockets-snap/docs/Network-WebSockets-Snap.html#v:runWebSocketsSnap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003erunWebSocketsSnap\u003c/a\u003e\u003c/code\u003e which allows custom options\n\u003c/p\u003e",
          "module": "Network.WebSockets.Snap",
          "name": "runWebSocketsSnapWith",
          "package": "websockets-snap",
          "signature": "ConnectionOptions -\u003e ServerApp -\u003e m ()",
          "source": "src/Network-WebSockets-Snap.html#runWebSocketsSnapWith",
          "type": "function"
        },
        "index": {
          "description": "Variant of runWebSocketsSnap which allows custom options",
          "hierarchy": "Network WebSockets Snap",
          "module": "Network.WebSockets.Snap",
          "name": "runWebSocketsSnapWith",
          "normalized": "ConnectionOptions-\u003eServerApp-\u003ea()",
          "package": "websockets-snap",
          "partial": "Web Sockets Snap With",
          "signature": "ConnectionOptions-\u003eServerApp-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/websockets-snap/docs/Network-WebSockets-Snap.html#v:runWebSocketsSnapWith"
      }
    }
  ]
]