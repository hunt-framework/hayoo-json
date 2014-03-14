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
        "word": "wai-digestive-functors"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelpers to bind 'digestive-functors' onto a \u003ccode\u003ewai\u003c/code\u003e request\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Digestive",
          "name": "Digestive",
          "package": "wai-digestive-functors",
          "source": "src/Network-Wai-Digestive.html",
          "type": "module"
        },
        "index": {
          "description": "Helpers to bind digestive-functors onto wai request",
          "hierarchy": "Network Wai Digestive",
          "module": "Network.Wai.Digestive",
          "name": "Digestive",
          "package": "wai-digestive-functors",
          "partial": "Digestive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-digestive-functors/docs/Network-Wai-Digestive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e from a request body\n\u003c/p\u003e",
          "module": "Network.Wai.Digestive",
          "name": "bodyFormEnv",
          "package": "wai-digestive-functors",
          "signature": "BackEnd FilePath -\u003e Request -\u003e ResourceT IO (Env m)",
          "source": "src/Network-Wai-Digestive.html#bodyFormEnv",
          "type": "function"
        },
        "index": {
          "description": "Build an Env from request body",
          "hierarchy": "Network Wai Digestive",
          "module": "Network.Wai.Digestive",
          "name": "bodyFormEnv",
          "normalized": "BackEnd FilePath-\u003eRequest-\u003eResourceT IO(Env a)",
          "package": "wai-digestive-functors",
          "partial": "Form Env",
          "signature": "BackEnd FilePath-\u003eRequest-\u003eResourceT IO(Env m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-digestive-functors/docs/Network-Wai-Digestive.html#v:bodyFormEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e from a request body\n\u003c/p\u003e\u003cp\u003eUses a default temporary file \u003ccode\u003e\u003ca\u003eBackEnd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Digestive",
          "name": "bodyFormEnv_",
          "package": "wai-digestive-functors",
          "signature": "Request -\u003e ResourceT IO (Env m)",
          "source": "src/Network-Wai-Digestive.html#bodyFormEnv_",
          "type": "function"
        },
        "index": {
          "description": "Build an Env from request body Uses default temporary file BackEnd",
          "hierarchy": "Network Wai Digestive",
          "module": "Network.Wai.Digestive",
          "name": "bodyFormEnv_",
          "normalized": "Request-\u003eResourceT IO(Env a)",
          "package": "wai-digestive-functors",
          "partial": "Form Env",
          "signature": "Request-\u003eResourceT IO(Env m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-digestive-functors/docs/Network-Wai-Digestive.html#v:bodyFormEnv_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e from a query\n\u003c/p\u003e",
          "module": "Network.Wai.Digestive",
          "name": "queryFormEnv",
          "package": "wai-digestive-functors",
          "signature": "q -\u003e Env m",
          "source": "src/Network-Wai-Digestive.html#queryFormEnv",
          "type": "function"
        },
        "index": {
          "description": "Build an Env from query",
          "hierarchy": "Network Wai Digestive",
          "module": "Network.Wai.Digestive",
          "name": "queryFormEnv",
          "normalized": "a-\u003eEnv b",
          "package": "wai-digestive-functors",
          "partial": "Form Env",
          "signature": "q-\u003eEnv m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-digestive-functors/docs/Network-Wai-Digestive.html#v:queryFormEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e from request body and query string\n\u003c/p\u003e",
          "module": "Network.Wai.Digestive",
          "name": "requestFormEnv",
          "package": "wai-digestive-functors",
          "signature": "BackEnd FilePath -\u003e Request -\u003e ResourceT IO (Env m)",
          "source": "src/Network-Wai-Digestive.html#requestFormEnv",
          "type": "function"
        },
        "index": {
          "description": "Build an Env from request body and query string",
          "hierarchy": "Network Wai Digestive",
          "module": "Network.Wai.Digestive",
          "name": "requestFormEnv",
          "normalized": "BackEnd FilePath-\u003eRequest-\u003eResourceT IO(Env a)",
          "package": "wai-digestive-functors",
          "partial": "Form Env",
          "signature": "BackEnd FilePath-\u003eRequest-\u003eResourceT IO(Env m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-digestive-functors/docs/Network-Wai-Digestive.html#v:requestFormEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e from request body and query string\n\u003c/p\u003e\u003cp\u003eUses a default temporary file \u003ccode\u003e\u003ca\u003eBackEnd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Digestive",
          "name": "requestFormEnv_",
          "package": "wai-digestive-functors",
          "signature": "Request -\u003e ResourceT IO (Env m)",
          "source": "src/Network-Wai-Digestive.html#requestFormEnv_",
          "type": "function"
        },
        "index": {
          "description": "Build an Env from request body and query string Uses default temporary file BackEnd",
          "hierarchy": "Network Wai Digestive",
          "module": "Network.Wai.Digestive",
          "name": "requestFormEnv_",
          "normalized": "Request-\u003eResourceT IO(Env a)",
          "package": "wai-digestive-functors",
          "partial": "Form Env",
          "signature": "Request-\u003eResourceT IO(Env m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-digestive-functors/docs/Network-Wai-Digestive.html#v:requestFormEnv_"
      }
    }
  ]
]