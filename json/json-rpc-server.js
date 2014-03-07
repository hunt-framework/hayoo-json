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
        "word": "json-rpc-server"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for implementing the server side of JSON RPC 2.0.\n   See \u003ca\u003ehttp://www.jsonrpc.org/specification\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "Server",
          "package": "json-rpc-server",
          "source": "src/Network-JsonRpc-Server.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for implementing the server side of JSON RPC See http www.jsonrpc.org specification",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "Server",
          "package": "json-rpc-server",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA node in a type-level linked list of \u003ccode\u003e\u003ca\u003eParameter\u003c/a\u003e\u003c/code\u003e types.  It is right associative.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": ":+:",
          "package": "json-rpc-server",
          "source": "src/Network-JsonRpc-Types.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "node in type-level linked list of Parameter types It is right associative",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": ":+:",
          "package": "json-rpc-server",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle method.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "Method",
          "package": "json-rpc-server",
          "source": "src/Network-JsonRpc-Types.html#Method",
          "type": "data"
        },
        "index": {
          "description": "Single method",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "Method",
          "package": "json-rpc-server",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelationship between a method's function (\u003ccode\u003ef\u003c/code\u003e), parameters (\u003ccode\u003ep\u003c/code\u003e),\n   monad (\u003ccode\u003em\u003c/code\u003e), and return type (\u003ccode\u003er\u003c/code\u003e). \u003ccode\u003ep\u003c/code\u003e has one \u003ccode\u003e\u003ca\u003eParameter\u003c/a\u003e\u003c/code\u003e for\n   every argument of \u003ccode\u003ef\u003c/code\u003e and is terminated by \u003ccode\u003e()\u003c/code\u003e. The return type\n   of \u003ccode\u003ef\u003c/code\u003e is \u003ccode\u003eRpcResult m r\u003c/code\u003e. This class is treated as closed.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "MethodParams",
          "package": "json-rpc-server",
          "source": "src/Network-JsonRpc-Types.html#MethodParams",
          "type": "class"
        },
        "index": {
          "description": "Relationship between method function parameters monad and return type has one Parameter for every argument of and is terminated by The return type of is RpcResult This class is treated as closed",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "MethodParams",
          "package": "json-rpc-server",
          "partial": "Method Params",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#t:MethodParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiple methods.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "Methods",
          "package": "json-rpc-server",
          "source": "src/Network-JsonRpc-Types.html#Methods",
          "type": "data"
        },
        "index": {
          "description": "Multiple methods",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "Methods",
          "package": "json-rpc-server",
          "partial": "Methods",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#t:Methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameter expected by a method.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "Parameter",
          "package": "json-rpc-server",
          "source": "src/Network-JsonRpc-Types.html#Parameter",
          "type": "data"
        },
        "index": {
          "description": "Parameter expected by method",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "Parameter",
          "package": "json-rpc-server",
          "partial": "Parameter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#t:Parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError to be returned to the client.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "RpcError",
          "package": "json-rpc-server",
          "source": "src/Network-JsonRpc-Types.html#RpcError",
          "type": "data"
        },
        "index": {
          "description": "Error to be returned to the client",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "RpcError",
          "package": "json-rpc-server",
          "partial": "Rpc Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#t:RpcError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn type of a method. A method call can either fail with an \u003ccode\u003e\u003ca\u003eRpcError\u003c/a\u003e\u003c/code\u003e\n   or succeed with a result of type \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "RpcResult",
          "package": "json-rpc-server",
          "source": "src/Network-JsonRpc-Types.html#RpcResult",
          "type": "type"
        },
        "index": {
          "description": "Return type of method method call can either fail with an RpcError or succeed with result of type",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "RpcResult",
          "package": "json-rpc-server",
          "partial": "Rpc Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#t:RpcResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JsonRpc.Server",
          "name": ":+:",
          "package": "json-rpc-server",
          "signature": "(Parameter a) :+: ps",
          "source": "src/Network-JsonRpc-Types.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": ":+:",
          "package": "json-rpc-server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#v::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional parameter with a name and default value.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "Optional",
          "package": "json-rpc-server",
          "signature": "Optional Text a",
          "source": "src/Network-JsonRpc-Types.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "Optional parameter with name and default value",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "Optional",
          "package": "json-rpc-server",
          "partial": "Optional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#v:Optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequired parameter with a name.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "Required",
          "package": "json-rpc-server",
          "signature": "Required Text",
          "source": "src/Network-JsonRpc-Types.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "Required parameter with name",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "Required",
          "package": "json-rpc-server",
          "partial": "Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#v:Required"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandles one JSON RPC request. It is the same as\n   \u003ccode\u003ecallWithBatchStrategy sequence\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "call",
          "package": "json-rpc-server",
          "signature": "Methods m-\u003e ByteString-\u003e m (Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Handles one JSON RPC request It is the same as callWithBatchStrategy sequence",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "call",
          "normalized": "Methods a-\u003eByteString-\u003ea(Maybe ByteString)",
          "package": "json-rpc-server",
          "signature": "Methods m-\u003eByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandles one JSON RPC request.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "callWithBatchStrategy",
          "package": "json-rpc-server",
          "signature": "(forall a.  [m a] -\u003e m [a])-\u003e Methods m-\u003e ByteString-\u003e m (Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Handles one JSON RPC request",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "callWithBatchStrategy",
          "normalized": "(a b[c d]-\u003ec[d])-\u003eMethods c-\u003eByteString-\u003ec(Maybe ByteString)",
          "package": "json-rpc-server",
          "partial": "With Batch Strategy",
          "signature": "(forall a.[m a]-\u003em[a])-\u003eMethods m-\u003eByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#v:callWithBatchStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eRpcError\u003c/a\u003e\u003c/code\u003e with the given error code and message.\n   According to the specification, server error codes should be\n   in the range -32099 to -32000, and application defined errors\n   should be outside the range -32768 to -32000.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "rpcError",
          "package": "json-rpc-server",
          "signature": "Int -\u003e Text -\u003e RpcError",
          "source": "src/Network-JsonRpc-Types.html#rpcError",
          "type": "function"
        },
        "index": {
          "description": "Creates an RpcError with the given error code and message According to the specification server error codes should be in the range to and application defined errors should be outside the range to",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "rpcError",
          "normalized": "Int-\u003eText-\u003eRpcError",
          "package": "json-rpc-server",
          "partial": "Error",
          "signature": "Int-\u003eText-\u003eRpcError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#v:rpcError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eRpcError\u003c/a\u003e\u003c/code\u003e with the given code, message, and additional data.\n   See \u003ccode\u003e\u003ca\u003erpcError\u003c/a\u003e\u003c/code\u003e for the recommended error code ranges.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "rpcErrorWithData",
          "package": "json-rpc-server",
          "signature": "Int -\u003e Text -\u003e a -\u003e RpcError",
          "source": "src/Network-JsonRpc-Types.html#rpcErrorWithData",
          "type": "function"
        },
        "index": {
          "description": "Creates an RpcError with the given code message and additional data See rpcError for the recommended error code ranges",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "rpcErrorWithData",
          "normalized": "Int-\u003eText-\u003ea-\u003eRpcError",
          "package": "json-rpc-server",
          "partial": "Error With Data",
          "signature": "Int-\u003eText-\u003ea-\u003eRpcError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#v:rpcErrorWithData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a method from a name, function, and parameter descriptions.\n   The parameter names must be unique.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "toMethod",
          "package": "json-rpc-server",
          "signature": "Text -\u003e f -\u003e p -\u003e Method m",
          "source": "src/Network-JsonRpc-Server.html#toMethod",
          "type": "function"
        },
        "index": {
          "description": "Creates method from name function and parameter descriptions The parameter names must be unique",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "toMethod",
          "normalized": "Text-\u003ea-\u003eb-\u003eMethod c",
          "package": "json-rpc-server",
          "partial": "Method",
          "signature": "Text-\u003ef-\u003ep-\u003eMethod m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#v:toMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a set of methods to be called by name. The names must be unique.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Server",
          "name": "toMethods",
          "package": "json-rpc-server",
          "signature": "[Method m] -\u003e Methods m",
          "source": "src/Network-JsonRpc-Server.html#toMethods",
          "type": "function"
        },
        "index": {
          "description": "Creates set of methods to be called by name The names must be unique",
          "hierarchy": "Network JsonRpc Server",
          "module": "Network.JsonRpc.Server",
          "name": "toMethods",
          "normalized": "[Method a]-\u003eMethods a",
          "package": "json-rpc-server",
          "partial": "Methods",
          "signature": "[Method m]-\u003eMethods m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-rpc-server/docs/Network-JsonRpc-Server.html#v:toMethods"
      }
    }
  ]
]