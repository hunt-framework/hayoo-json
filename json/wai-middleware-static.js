[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eServe static files, subject to a policy that can filter or\n   modify incoming URIs. The flow is:\n\u003c/p\u003e\u003cp\u003eincoming request URI ==\u003e policies ==\u003e exists? ==\u003e respond\n\u003c/p\u003e\u003cp\u003eIf any of the polices fail, or the file doesn't\n   exist, then the middleware gives up and calls the inner application.\n   If the file is found, the middleware chooses a content type based\n   on the file extension and returns the file contents as the response.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-Static.html",
        "fct-type": "module",
        "title": "Static"
      },
      "index": {
        "description": "Serve static files subject to policy that can filter or modify incoming URIs The flow is incoming request URI policies exists respond If any of the polices fail or the file doesn exist then the middleware gives up and calls the inner application If the file is found the middleware chooses content type based on the file extension and returns the file contents as the response",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "Static",
        "normalized": "",
        "package": "wai-middleware-static",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#t:Policy",
      "description": {
        "fct-descr": "\u003cp\u003eTake an incoming URI and optionally modify or filter it.\n   The result will be treated as a filepath.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Middleware-Static.html#Policy",
        "fct-type": "data",
        "title": "Policy"
      },
      "index": {
        "description": "Take an incoming URI and optionally modify or filter it The result will be treated as filepath",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "Policy",
        "normalized": "",
        "package": "wai-middleware-static",
        "partial": "Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:-60--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eChoose between two policies. If the first fails, run the second.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "Policy -\u003e Policy -\u003e Policy",
        "fct-source": "src/Network-Wai-Middleware-Static.html#%3C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c|\u003e)"
      },
      "index": {
        "description": "Choose between two policies If the first fails run the second",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "(\u003c|\u003e) \u003c|\u003e",
        "normalized": "Policy-\u003ePolicy-\u003ePolicy",
        "package": "wai-middleware-static",
        "partial": "",
        "signature": "Policy-\u003ePolicy-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:-62--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSequence two policies. They are run from left to right. (Note: this is \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "Policy -\u003e Policy -\u003e Policy",
        "fct-source": "src/Network-Wai-Middleware-Static.html#%3E-%3E",
        "fct-type": "function",
        "title": "(\u003e-\u003e)"
      },
      "index": {
        "description": "Sequence two policies They are run from left to right Note this is mappend",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "(\u003e-\u003e) \u003e-\u003e",
        "normalized": "Policy-\u003ePolicy-\u003ePolicy",
        "package": "wai-middleware-static",
        "partial": "",
        "signature": "Policy-\u003ePolicy-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:addBase",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a base path to the URI\n\u003c/p\u003e\u003cpre\u003e staticPolicy (addBase \"/home/user/files\")\n\u003c/pre\u003e\u003cp\u003eGET \"foo/bar\" looks for \"/home/user/files/foo/bar\"\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "String -\u003e Policy",
        "fct-source": "src/Network-Wai-Middleware-Static.html#addBase",
        "fct-type": "function",
        "title": "addBase"
      },
      "index": {
        "description": "Add base path to the URI staticPolicy addBase home user files GET foo bar looks for home user files foo bar",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "addBase",
        "normalized": "String-\u003ePolicy",
        "package": "wai-middleware-static",
        "partial": "Base",
        "signature": "String-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:addSlash",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an initial slash to to the URI, if not already present.\n\u003c/p\u003e\u003cpre\u003e staticPolicy addSlash\n\u003c/pre\u003e\u003cp\u003eGET \"foo/bar\" looks for \"/foo/bar\"\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "Policy",
        "fct-source": "src/Network-Wai-Middleware-Static.html#addSlash",
        "fct-type": "function",
        "title": "addSlash"
      },
      "index": {
        "description": "Add an initial slash to to the URI if not already present staticPolicy addSlash GET foo bar looks for foo bar",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "addSlash",
        "normalized": "",
        "package": "wai-middleware-static",
        "partial": "Slash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:contains",
      "description": {
        "fct-descr": "\u003cp\u003eAccept only URIs containing given string\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "String -\u003e Policy",
        "fct-source": "src/Network-Wai-Middleware-Static.html#contains",
        "fct-type": "function",
        "title": "contains"
      },
      "index": {
        "description": "Accept only URIs containing given string",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "contains",
        "normalized": "String-\u003ePolicy",
        "package": "wai-middleware-static",
        "partial": "",
        "signature": "String-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:hasPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eAccept only URIs with given prefix\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "String -\u003e Policy",
        "fct-source": "src/Network-Wai-Middleware-Static.html#hasPrefix",
        "fct-type": "function",
        "title": "hasPrefix"
      },
      "index": {
        "description": "Accept only URIs with given prefix",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "hasPrefix",
        "normalized": "String-\u003ePolicy",
        "package": "wai-middleware-static",
        "partial": "Prefix",
        "signature": "String-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:hasSuffix",
      "description": {
        "fct-descr": "\u003cp\u003eAccept only URIs with given suffix\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "String -\u003e Policy",
        "fct-source": "src/Network-Wai-Middleware-Static.html#hasSuffix",
        "fct-type": "function",
        "title": "hasSuffix"
      },
      "index": {
        "description": "Accept only URIs with given suffix",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "hasSuffix",
        "normalized": "String-\u003ePolicy",
        "package": "wai-middleware-static",
        "partial": "Suffix",
        "signature": "String-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:noDots",
      "description": {
        "fct-descr": "\u003cp\u003eReject URIs containing \"..\"\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "Policy",
        "fct-source": "src/Network-Wai-Middleware-Static.html#noDots",
        "fct-type": "function",
        "title": "noDots"
      },
      "index": {
        "description": "Reject URIs containing",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "noDots",
        "normalized": "",
        "package": "wai-middleware-static",
        "partial": "Dots",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:only",
      "description": {
        "fct-descr": "\u003cp\u003eUse URI as the key to an association list, rejecting those not found.\n The policy result is the matching value.\n\u003c/p\u003e\u003cpre\u003e staticPolicy (only [(\"foo/bar\", \"/home/user/files/bar\")])\n\u003c/pre\u003e\u003cp\u003eGET \"foo/bar\" looks for \"/home/user/files/bar\"\n GET \"baz/bar\" doesn't match anything\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "[(String, String)] -\u003e Policy",
        "fct-source": "src/Network-Wai-Middleware-Static.html#only",
        "fct-type": "function",
        "title": "only"
      },
      "index": {
        "description": "Use URI as the key to an association list rejecting those not found The policy result is the matching value staticPolicy only foo bar home user files bar GET foo bar looks for home user files bar GET baz bar doesn match anything",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "only",
        "normalized": "[(String,String)]-\u003ePolicy",
        "package": "wai-middleware-static",
        "partial": "",
        "signature": "[(String,String)]-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:policy",
      "description": {
        "fct-descr": "\u003cp\u003eLift a function into a \u003ccode\u003e\u003ca\u003ePolicy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "(String -\u003e Maybe String) -\u003e Policy",
        "fct-source": "src/Network-Wai-Middleware-Static.html#policy",
        "fct-type": "function",
        "title": "policy"
      },
      "index": {
        "description": "Lift function into Policy",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "policy",
        "normalized": "(String-\u003eMaybe String)-\u003ePolicy",
        "package": "wai-middleware-static",
        "partial": "",
        "signature": "(String-\u003eMaybe String)-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:predicate",
      "description": {
        "fct-descr": "\u003cp\u003eLift a predicate into a \u003ccode\u003e\u003ca\u003ePolicy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "(String -\u003e Bool) -\u003e Policy",
        "fct-source": "src/Network-Wai-Middleware-Static.html#predicate",
        "fct-type": "function",
        "title": "predicate"
      },
      "index": {
        "description": "Lift predicate into Policy",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "predicate",
        "normalized": "(String-\u003eBool)-\u003ePolicy",
        "package": "wai-middleware-static",
        "partial": "",
        "signature": "(String-\u003eBool)-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:static",
      "description": {
        "fct-descr": "\u003cp\u003eServe static files out of the application root (current directory).\n If file is found, it is streamed to the client and no further middleware is run.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "Middleware",
        "fct-source": "src/Network-Wai-Middleware-Static.html#static",
        "fct-type": "function",
        "title": "static"
      },
      "index": {
        "description": "Serve static files out of the application root current directory If file is found it is streamed to the client and no further middleware is run",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "static",
        "normalized": "",
        "package": "wai-middleware-static",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:staticPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eServe static files subject to a \u003ccode\u003e\u003ca\u003ePolicy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "Policy -\u003e Middleware",
        "fct-source": "src/Network-Wai-Middleware-Static.html#staticPolicy",
        "fct-type": "function",
        "title": "staticPolicy"
      },
      "index": {
        "description": "Serve static files subject to Policy",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "staticPolicy",
        "normalized": "Policy-\u003eMiddleware",
        "package": "wai-middleware-static",
        "partial": "Policy",
        "signature": "Policy-\u003eMiddleware"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-static/docs/Network-Wai-Middleware-Static.html#v:tryPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eRun a policy\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Static",
        "fct-package": "wai-middleware-static",
        "fct-signature": "Policy -\u003e String -\u003e Maybe String",
        "fct-source": "src/Network-Wai-Middleware-Static.html#tryPolicy",
        "fct-type": "function",
        "title": "tryPolicy"
      },
      "index": {
        "description": "Run policy",
        "hierarchy": "Network Wai Middleware Static",
        "module": "Network.Wai.Middleware.Static",
        "name": "tryPolicy",
        "normalized": "Policy-\u003eString-\u003eMaybe String",
        "package": "wai-middleware-static",
        "partial": "Policy",
        "signature": "Policy-\u003eString-\u003eMaybe String"
      }
    }
  }
]