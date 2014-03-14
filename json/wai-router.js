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
        "word": "wai-router"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Router",
          "name": "Router",
          "package": "wai-router",
          "source": "src/Network-Wai-Middleware-Router.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Router",
          "module": "Network.Wai.Middleware.Router",
          "name": "Router",
          "package": "wai-router",
          "partial": "Router",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-router/docs/Network-Wai-Middleware-Router.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for a function which maps path pieces to applications.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Router",
          "name": "Route",
          "package": "wai-router",
          "source": "src/Network-Wai-Middleware-Router.html#Route",
          "type": "type"
        },
        "index": {
          "description": "Alias for function which maps path pieces to applications",
          "hierarchy": "Network Wai Middleware Router",
          "module": "Network.Wai.Middleware.Router",
          "name": "Route",
          "package": "wai-router",
          "partial": "Route",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-router/docs/Network-Wai-Middleware-Router.html#t:Route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA possible web application if the path matches, nothing otherwise.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Router",
          "name": "dir",
          "package": "wai-router",
          "signature": "Text -\u003e Application -\u003e Route",
          "source": "src/Network-Wai-Middleware-Router.html#dir",
          "type": "function"
        },
        "index": {
          "description": "possible web application if the path matches nothing otherwise",
          "hierarchy": "Network Wai Middleware Router",
          "module": "Network.Wai.Middleware.Router",
          "name": "dir",
          "normalized": "Text-\u003eApplication-\u003eRoute",
          "package": "wai-router",
          "signature": "Text-\u003eApplication-\u003eRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-router/docs/Network-Wai-Middleware-Router.html#v:dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRouter for mapping paths to applications.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e router [ dir \"/foo\" fooApp\n        , dir \"/api\" apiApp \n        ] defaultApp\n\u003c/pre\u003e",
          "module": "Network.Wai.Middleware.Router",
          "name": "router",
          "package": "wai-router",
          "signature": "[Route] -\u003e Application -\u003e Application",
          "source": "src/Network-Wai-Middleware-Router.html#router",
          "type": "function"
        },
        "index": {
          "description": "Router for mapping paths to applications For example router dir foo fooApp dir api apiApp defaultApp",
          "hierarchy": "Network Wai Middleware Router",
          "module": "Network.Wai.Middleware.Router",
          "name": "router",
          "normalized": "[Route]-\u003eApplication-\u003eApplication",
          "package": "wai-router",
          "signature": "[Route]-\u003eApplication-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-router/docs/Network-Wai-Middleware-Router.html#v:router"
      }
    }
  ]
]