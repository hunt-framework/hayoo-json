[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-digestive-functors/docs/Network-Wai-Digestive.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelpers to bind 'digestive-functors' onto a \u003ccode\u003ewai\u003c/code\u003e request\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Digestive",
        "fct-package": "wai-digestive-functors",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Digestive.html",
        "fct-type": "module",
        "title": "Digestive"
      },
      "index": {
        "description": "Helpers to bind digestive-functors onto wai request",
        "hierarchy": "Network Wai Digestive",
        "module": "Network.Wai.Digestive",
        "name": "Digestive",
        "normalized": "",
        "package": "wai-digestive-functors",
        "partial": "Digestive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-digestive-functors/docs/Network-Wai-Digestive.html#v:bodyFormEnv",
      "description": {
        "fct-descr": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e from a request body\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Digestive",
        "fct-package": "wai-digestive-functors",
        "fct-signature": "BackEnd FilePath -\u003e Request -\u003e ResourceT IO (Env m)",
        "fct-source": "src/Network-Wai-Digestive.html#bodyFormEnv",
        "fct-type": "function",
        "title": "bodyFormEnv"
      },
      "index": {
        "description": "Build an Env from request body",
        "hierarchy": "Network Wai Digestive",
        "module": "Network.Wai.Digestive",
        "name": "bodyFormEnv",
        "normalized": "BackEnd FilePath-\u003eRequest-\u003eResourceT IO(Env a)",
        "package": "wai-digestive-functors",
        "partial": "Form Env",
        "signature": "BackEnd FilePath-\u003eRequest-\u003eResourceT IO(Env m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-digestive-functors/docs/Network-Wai-Digestive.html#v:bodyFormEnv_",
      "description": {
        "fct-descr": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e from a request body\n\u003c/p\u003e\u003cp\u003eUses a default temporary file \u003ccode\u003e\u003ca\u003eBackEnd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Digestive",
        "fct-package": "wai-digestive-functors",
        "fct-signature": "Request -\u003e ResourceT IO (Env m)",
        "fct-source": "src/Network-Wai-Digestive.html#bodyFormEnv_",
        "fct-type": "function",
        "title": "bodyFormEnv_"
      },
      "index": {
        "description": "Build an Env from request body Uses default temporary file BackEnd",
        "hierarchy": "Network Wai Digestive",
        "module": "Network.Wai.Digestive",
        "name": "bodyFormEnv_",
        "normalized": "Request-\u003eResourceT IO(Env a)",
        "package": "wai-digestive-functors",
        "partial": "Form Env",
        "signature": "Request-\u003eResourceT IO(Env m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-digestive-functors/docs/Network-Wai-Digestive.html#v:queryFormEnv",
      "description": {
        "fct-descr": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e from a query\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Digestive",
        "fct-package": "wai-digestive-functors",
        "fct-signature": "q -\u003e Env m",
        "fct-source": "src/Network-Wai-Digestive.html#queryFormEnv",
        "fct-type": "function",
        "title": "queryFormEnv"
      },
      "index": {
        "description": "Build an Env from query",
        "hierarchy": "Network Wai Digestive",
        "module": "Network.Wai.Digestive",
        "name": "queryFormEnv",
        "normalized": "a-\u003eEnv b",
        "package": "wai-digestive-functors",
        "partial": "Form Env",
        "signature": "q-\u003eEnv m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-digestive-functors/docs/Network-Wai-Digestive.html#v:requestFormEnv",
      "description": {
        "fct-descr": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e from request body and query string\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Digestive",
        "fct-package": "wai-digestive-functors",
        "fct-signature": "BackEnd FilePath -\u003e Request -\u003e ResourceT IO (Env m)",
        "fct-source": "src/Network-Wai-Digestive.html#requestFormEnv",
        "fct-type": "function",
        "title": "requestFormEnv"
      },
      "index": {
        "description": "Build an Env from request body and query string",
        "hierarchy": "Network Wai Digestive",
        "module": "Network.Wai.Digestive",
        "name": "requestFormEnv",
        "normalized": "BackEnd FilePath-\u003eRequest-\u003eResourceT IO(Env a)",
        "package": "wai-digestive-functors",
        "partial": "Form Env",
        "signature": "BackEnd FilePath-\u003eRequest-\u003eResourceT IO(Env m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-digestive-functors/docs/Network-Wai-Digestive.html#v:requestFormEnv_",
      "description": {
        "fct-descr": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e from request body and query string\n\u003c/p\u003e\u003cp\u003eUses a default temporary file \u003ccode\u003e\u003ca\u003eBackEnd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Digestive",
        "fct-package": "wai-digestive-functors",
        "fct-signature": "Request -\u003e ResourceT IO (Env m)",
        "fct-source": "src/Network-Wai-Digestive.html#requestFormEnv_",
        "fct-type": "function",
        "title": "requestFormEnv_"
      },
      "index": {
        "description": "Build an Env from request body and query string Uses default temporary file BackEnd",
        "hierarchy": "Network Wai Digestive",
        "module": "Network.Wai.Digestive",
        "name": "requestFormEnv_",
        "normalized": "Request-\u003eResourceT IO(Env a)",
        "package": "wai-digestive-functors",
        "partial": "Form Env",
        "signature": "Request-\u003eResourceT IO(Env m)"
      }
    }
  }
]