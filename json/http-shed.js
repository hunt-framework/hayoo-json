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
        "word": "http-shed"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA trivial web server, original used in the cherry chess processor.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Shed.Httpd",
          "name": "Httpd",
          "package": "http-shed",
          "source": "src/Network-Shed-Httpd.html",
          "type": "module"
        },
        "index": {
          "description": "trivial web server original used in the cherry chess processor",
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "Httpd",
          "package": "http-shed",
          "partial": "Httpd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "Request",
          "package": "http-shed",
          "source": "src/Network-Shed-Httpd.html#Request",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "Request",
          "package": "http-shed",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "Response",
          "package": "http-shed",
          "source": "src/Network-Shed-Httpd.html#Response",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "Response",
          "package": "http-shed",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "Server",
          "package": "http-shed",
          "source": "src/Network-Shed-Httpd.html#Server",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "Server",
          "package": "http-shed",
          "partial": "Server",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "Request",
          "package": "http-shed",
          "signature": "Request",
          "source": "src/Network-Shed-Httpd.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "Request",
          "package": "http-shed",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "Response",
          "package": "http-shed",
          "signature": "Response",
          "source": "src/Network-Shed-Httpd.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "Response",
          "package": "http-shed",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "initServer",
          "package": "http-shed",
          "signature": "Int-\u003e (Request -\u003e IO Response)-\u003e IO Server",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "initServer",
          "normalized": "Int-\u003e(Request-\u003eIO Response)-\u003eIO Server",
          "package": "http-shed",
          "partial": "Server",
          "signature": "Int-\u003e(Request-\u003eIO Response)-\u003eIO Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#v:initServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an escaped query, optionally starting with \u003ccode\u003e?\u003c/code\u003e, and returns an unescaped index-value list.\n\u003c/p\u003e",
          "module": "Network.Shed.Httpd",
          "name": "queryToArguments",
          "package": "http-shed",
          "signature": "String -\u003e [(String, String)]",
          "source": "src/Network-Shed-Httpd.html#queryToArguments",
          "type": "function"
        },
        "index": {
          "description": "Takes an escaped query optionally starting with and returns an unescaped index-value list",
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "queryToArguments",
          "normalized": "String-\u003e[(String,String)]",
          "package": "http-shed",
          "partial": "To Arguments",
          "signature": "String-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#v:queryToArguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "reqBody",
          "package": "http-shed",
          "signature": "String",
          "source": "src/Network-Shed-Httpd.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "reqBody",
          "package": "http-shed",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#v:reqBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "reqHeaders",
          "package": "http-shed",
          "signature": "[(String, String)]",
          "source": "src/Network-Shed-Httpd.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "reqHeaders",
          "normalized": "[(String,String)]",
          "package": "http-shed",
          "partial": "Headers",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#v:reqHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "reqMethod",
          "package": "http-shed",
          "signature": "String",
          "source": "src/Network-Shed-Httpd.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "reqMethod",
          "package": "http-shed",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#v:reqMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "reqURI",
          "package": "http-shed",
          "signature": "URI",
          "source": "src/Network-Shed-Httpd.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "reqURI",
          "package": "http-shed",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#v:reqURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "resBody",
          "package": "http-shed",
          "signature": "String",
          "source": "src/Network-Shed-Httpd.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "resBody",
          "package": "http-shed",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#v:resBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "resCode",
          "package": "http-shed",
          "signature": "Int",
          "source": "src/Network-Shed-Httpd.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "resCode",
          "package": "http-shed",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#v:resCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Shed.Httpd",
          "name": "resHeaders",
          "package": "http-shed",
          "signature": "[(String, String)]",
          "source": "src/Network-Shed-Httpd.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Shed Httpd",
          "module": "Network.Shed.Httpd",
          "name": "resHeaders",
          "normalized": "[(String,String)]",
          "package": "http-shed",
          "partial": "Headers",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-shed/docs/Network-Shed-Httpd.html#v:resHeaders"
      }
    }
  ]
]