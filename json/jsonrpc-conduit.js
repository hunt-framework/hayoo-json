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
        "word": "jsonrpc-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJSON-RPC methods.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "Methods",
          "package": "jsonrpc-conduit",
          "source": "src/Data-Conduit-JsonRpc-Methods.html",
          "type": "module"
        },
        "index": {
          "description": "JSON-RPC methods",
          "hierarchy": "Data Conduit JsonRpc Methods",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "Methods",
          "package": "jsonrpc-conduit",
          "partial": "Methods",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jsonrpc-conduit/docs/Data-Conduit-JsonRpc-Methods.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper over a monadic function that can either succeed or fail with a\n\u003ccode\u003e\u003ca\u003eMethodError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHides the input and output types.\n\u003c/p\u003e",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "Method",
          "package": "jsonrpc-conduit",
          "source": "src/Data-Conduit-JsonRpc-Methods.html#Method",
          "type": "data"
        },
        "index": {
          "description": "wrapper over monadic function that can either succeed or fail with MethodError Hides the input and output types",
          "hierarchy": "Data Conduit JsonRpc Methods",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "Method",
          "package": "jsonrpc-conduit",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jsonrpc-conduit/docs/Data-Conduit-JsonRpc-Methods.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an error with an integer code and a textual message.\n\u003c/p\u003e",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "MethodError",
          "package": "jsonrpc-conduit",
          "source": "src/Data-Conduit-JsonRpc-Methods.html#MethodError",
          "type": "data"
        },
        "index": {
          "description": "Represents an error with an integer code and textual message",
          "hierarchy": "Data Conduit JsonRpc Methods",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "MethodError",
          "package": "jsonrpc-conduit",
          "partial": "Method Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jsonrpc-conduit/docs/Data-Conduit-JsonRpc-Methods.html#t:MethodError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollection of \u003ccode\u003e\u003ca\u003eNamedMethod\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "Methods",
          "package": "jsonrpc-conduit",
          "source": "src/Data-Conduit-JsonRpc-Methods.html#Methods",
          "type": "data"
        },
        "index": {
          "description": "Collection of NamedMethod",
          "hierarchy": "Data Conduit JsonRpc Methods",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "Methods",
          "package": "jsonrpc-conduit",
          "partial": "Methods",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jsonrpc-conduit/docs/Data-Conduit-JsonRpc-Methods.html#t:Methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMethod\u003c/a\u003e\u003c/code\u003e with a name.\n\u003c/p\u003e",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "NamedMethod",
          "package": "jsonrpc-conduit",
          "source": "src/Data-Conduit-JsonRpc-Methods.html#NamedMethod",
          "type": "data"
        },
        "index": {
          "description": "Method with name",
          "hierarchy": "Data Conduit JsonRpc Methods",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "NamedMethod",
          "package": "jsonrpc-conduit",
          "partial": "Named Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jsonrpc-conduit/docs/Data-Conduit-JsonRpc-Methods.html#t:NamedMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "Method",
          "package": "jsonrpc-conduit",
          "signature": "(i -\u003e m (Either MethodError o)) -\u003e Method m",
          "source": "src/Data-Conduit-JsonRpc-Methods.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit JsonRpc Methods",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "Method",
          "normalized": "(a-\u003eb(Either MethodError c))-\u003eMethod b",
          "package": "jsonrpc-conduit",
          "partial": "Method",
          "signature": "(i-\u003em(Either MethodError o))-\u003eMethod m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsonrpc-conduit/docs/Data-Conduit-JsonRpc-Methods.html#v:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "MethodError",
          "package": "jsonrpc-conduit",
          "signature": "MethodError !Int !Text",
          "source": "src/Data-Conduit-JsonRpc-Methods.html#MethodError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit JsonRpc Methods",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "MethodError",
          "package": "jsonrpc-conduit",
          "partial": "Method Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsonrpc-conduit/docs/Data-Conduit-JsonRpc-Methods.html#v:MethodError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a collection from a list of \u003ccode\u003e\u003ca\u003eNamedMethod\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "fromList",
          "package": "jsonrpc-conduit",
          "signature": "[NamedMethod m] -\u003e Methods m",
          "source": "src/Data-Conduit-JsonRpc-Methods.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Builds collection from list of NamedMethod",
          "hierarchy": "Data Conduit JsonRpc Methods",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "fromList",
          "normalized": "[NamedMethod a]-\u003eMethods a",
          "package": "jsonrpc-conduit",
          "partial": "List",
          "signature": "[NamedMethod m]-\u003eMethods m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsonrpc-conduit/docs/Data-Conduit-JsonRpc-Methods.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up the method corresponding to the given name.\n\u003c/p\u003e",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "lookup",
          "package": "jsonrpc-conduit",
          "signature": "Methods m -\u003e Text -\u003e Maybe (Method m)",
          "source": "src/Data-Conduit-JsonRpc-Methods.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Looks up the method corresponding to the given name",
          "hierarchy": "Data Conduit JsonRpc Methods",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "lookup",
          "normalized": "Methods a-\u003eText-\u003eMaybe(Method a)",
          "package": "jsonrpc-conduit",
          "signature": "Methods m-\u003eText-\u003eMaybe(Method m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsonrpc-conduit/docs/Data-Conduit-JsonRpc-Methods.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eNamedMethod\u003c/a\u003e\u003c/code\u003e given its name and function.\n\u003c/p\u003e\u003cp\u003eUseful in conjuction with \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "method",
          "package": "jsonrpc-conduit",
          "signature": "Text -\u003e (i -\u003e m (Either MethodError o)) -\u003e NamedMethod m",
          "source": "src/Data-Conduit-JsonRpc-Methods.html#method",
          "type": "function"
        },
        "index": {
          "description": "Builds NamedMethod given its name and function Useful in conjuction with fromList",
          "hierarchy": "Data Conduit JsonRpc Methods",
          "module": "Data.Conduit.JsonRpc.Methods",
          "name": "method",
          "normalized": "Text-\u003e(a-\u003eb(Either MethodError c))-\u003eNamedMethod b",
          "package": "jsonrpc-conduit",
          "signature": "Text-\u003e(i-\u003em(Either MethodError o))-\u003eNamedMethod m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsonrpc-conduit/docs/Data-Conduit-JsonRpc-Methods.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJSON-RPC 2.0 server \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.JsonRpc.Server",
          "name": "Server",
          "package": "jsonrpc-conduit",
          "source": "src/Data-Conduit-JsonRpc-Server.html",
          "type": "module"
        },
        "index": {
          "description": "JSON-RPC server Conduit",
          "hierarchy": "Data Conduit JsonRpc Server",
          "module": "Data.Conduit.JsonRpc.Server",
          "name": "Server",
          "package": "jsonrpc-conduit",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jsonrpc-conduit/docs/Data-Conduit-JsonRpc-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e that consumes a stream of JSON-RPC requests, tries to process them\nwith the provided \u003ccode\u003e\u003ca\u003eMethods\u003c/a\u003e\u003c/code\u003e and writes back the results.\n\u003c/p\u003e\u003cp\u003eCurrent limitations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e does not support batch requests\n\u003c/li\u003e\u003cli\u003e it is not possible to set the \u003ccode\u003edata\u003c/code\u003e attribute of error objects\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Conduit.JsonRpc.Server",
          "name": "serve",
          "package": "jsonrpc-conduit",
          "signature": "Methods m -\u003e Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-JsonRpc-Server.html#serve",
          "type": "function"
        },
        "index": {
          "description": "Conduit that consumes stream of JSON-RPC requests tries to process them with the provided Methods and writes back the results Current limitations does not support batch requests it is not possible to set the data attribute of error objects",
          "hierarchy": "Data Conduit JsonRpc Server",
          "module": "Data.Conduit.JsonRpc.Server",
          "name": "serve",
          "normalized": "Methods a-\u003eConduit ByteString a ByteString",
          "package": "jsonrpc-conduit",
          "signature": "Methods m-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsonrpc-conduit/docs/Data-Conduit-JsonRpc-Server.html#v:serve"
      }
    }
  ]
]