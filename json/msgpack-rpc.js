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
        "word": "msgpack-rpc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is client library of MessagePack-RPC.\n The specification of MessagePack-RPC is at\n \u003ca\u003ehttp://redmine.msgpack.org/projects/msgpack/wiki/RPCProtocolSpec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA simple example:\n\u003c/p\u003e\u003cpre\u003e import Network.MessagePackRpc.Client\n\n add :: Int -\u003e Int -\u003e Client Int\n add = call \"add\"\n\n main = runClient \"localhost\" 5000 $ do\n   ret \u003c- add 123 456\n   liftIO $ print ret\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.MessagePackRpc.Client",
          "name": "Client",
          "package": "msgpack-rpc",
          "source": "src/Network-MessagePackRpc-Client.html",
          "type": "module"
        },
        "index": {
          "description": "This module is client library of MessagePack-RPC The specification of MessagePack-RPC is at http redmine.msgpack.org projects msgpack wiki RPCProtocolSpec simple example import Network.MessagePackRpc.Client add Int Int Client Int add call add main runClient localhost do ret add liftIO print ret",
          "hierarchy": "Network MessagePackRpc Client",
          "module": "Network.MessagePackRpc.Client",
          "name": "Client",
          "package": "msgpack-rpc",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MessagePackRpc.Client",
          "name": "Client",
          "package": "msgpack-rpc",
          "source": "src/Network-MessagePackRpc-Client.html#Client",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MessagePackRpc Client",
          "module": "Network.MessagePackRpc.Client",
          "name": "Client",
          "package": "msgpack-rpc",
          "partial": "Client",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MessagePackRpc.Client",
          "name": "ClientT",
          "package": "msgpack-rpc",
          "source": "src/Network-MessagePackRpc-Client.html#ClientT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network MessagePackRpc Client",
          "module": "Network.MessagePackRpc.Client",
          "name": "ClientT",
          "package": "msgpack-rpc",
          "partial": "Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#t:ClientT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRPC error type\n\u003c/p\u003e",
          "module": "Network.MessagePackRpc.Client",
          "name": "RpcError",
          "package": "msgpack-rpc",
          "source": "src/Network-MessagePackRpc-Client.html#RpcError",
          "type": "data"
        },
        "index": {
          "description": "RPC error type",
          "hierarchy": "Network MessagePackRpc Client",
          "module": "Network.MessagePackRpc.Client",
          "name": "RpcError",
          "package": "msgpack-rpc",
          "partial": "Rpc Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#t:RpcError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProtocol error\n\u003c/p\u003e",
          "module": "Network.MessagePackRpc.Client",
          "name": "ProtocolError",
          "package": "msgpack-rpc",
          "signature": "ProtocolError String",
          "source": "src/Network-MessagePackRpc-Client.html#RpcError",
          "type": "function"
        },
        "index": {
          "description": "Protocol error",
          "hierarchy": "Network MessagePackRpc Client",
          "module": "Network.MessagePackRpc.Client",
          "name": "ProtocolError",
          "package": "msgpack-rpc",
          "partial": "Protocol Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#v:ProtocolError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult type mismatch\n\u003c/p\u003e",
          "module": "Network.MessagePackRpc.Client",
          "name": "ResultTypeError",
          "package": "msgpack-rpc",
          "signature": "ResultTypeError String",
          "source": "src/Network-MessagePackRpc-Client.html#RpcError",
          "type": "function"
        },
        "index": {
          "description": "Result type mismatch",
          "hierarchy": "Network MessagePackRpc Client",
          "module": "Network.MessagePackRpc.Client",
          "name": "ResultTypeError",
          "package": "msgpack-rpc",
          "partial": "Result Type Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#v:ResultTypeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer error\n\u003c/p\u003e",
          "module": "Network.MessagePackRpc.Client",
          "name": "ServerError",
          "package": "msgpack-rpc",
          "signature": "ServerError Object",
          "source": "src/Network-MessagePackRpc-Client.html#RpcError",
          "type": "function"
        },
        "index": {
          "description": "Server error",
          "hierarchy": "Network MessagePackRpc Client",
          "module": "Network.MessagePackRpc.Client",
          "name": "ServerError",
          "package": "msgpack-rpc",
          "partial": "Server Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#v:ServerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall an RPC Method\n\u003c/p\u003e",
          "module": "Network.MessagePackRpc.Client",
          "name": "call",
          "package": "msgpack-rpc",
          "signature": "String-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Call an RPC Method",
          "hierarchy": "Network MessagePackRpc Client",
          "module": "Network.MessagePackRpc.Client",
          "name": "call",
          "normalized": "String-\u003ea",
          "package": "msgpack-rpc",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MessagePackRpc.Client",
          "name": "runClient",
          "package": "msgpack-rpc",
          "signature": "ByteString -\u003e Int -\u003e ClientT m a -\u003e m ()",
          "source": "src/Network-MessagePackRpc-Client.html#runClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MessagePackRpc Client",
          "module": "Network.MessagePackRpc.Client",
          "name": "runClient",
          "normalized": "ByteString-\u003eInt-\u003eClientT a b-\u003ea()",
          "package": "msgpack-rpc",
          "partial": "Client",
          "signature": "ByteString-\u003eInt-\u003eClientT m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#v:runClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is server library of MessagePack-RPC.\n The specification of MessagePack-RPC is at\n \u003ca\u003ehttp://redmine.msgpack.org/projects/msgpack/wiki/RPCProtocolSpec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA simple example:\n\u003c/p\u003e\u003cpre\u003e import Network.MessagePackRpc.Server\n\n add :: Int -\u003e Int -\u003e Method Int\n add x y = return $ x + y\n\n main = serve 1234 [(\"add\", toMethod add)]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.MessagePackRpc.Server",
          "name": "Server",
          "package": "msgpack-rpc",
          "source": "src/Network-MessagePackRpc-Server.html",
          "type": "module"
        },
        "index": {
          "description": "This module is server library of MessagePack-RPC The specification of MessagePack-RPC is at http redmine.msgpack.org projects msgpack wiki RPCProtocolSpec simple example import Network.MessagePackRpc.Server add Int Int Method Int add return main serve add toMethod add",
          "hierarchy": "Network MessagePackRpc Server",
          "module": "Network.MessagePackRpc.Server",
          "name": "Server",
          "package": "msgpack-rpc",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MessagePackRpc.Server",
          "name": "Method",
          "package": "msgpack-rpc",
          "source": "src/Network-MessagePackRpc-Server.html#Method",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MessagePackRpc Server",
          "module": "Network.MessagePackRpc.Server",
          "name": "Method",
          "package": "msgpack-rpc",
          "partial": "Method",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MessagePackRpc.Server",
          "name": "MethodT",
          "package": "msgpack-rpc",
          "source": "src/Network-MessagePackRpc-Server.html#MethodT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network MessagePackRpc Server",
          "module": "Network.MessagePackRpc.Server",
          "name": "MethodT",
          "package": "msgpack-rpc",
          "partial": "Method",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#t:MethodT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MessagePackRpc.Server",
          "name": "MethodType",
          "package": "msgpack-rpc",
          "source": "src/Network-MessagePackRpc-Server.html#MethodType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network MessagePackRpc Server",
          "module": "Network.MessagePackRpc.Server",
          "name": "MethodType",
          "package": "msgpack-rpc",
          "partial": "Method Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#t:MethodType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MessagePackRpc.Server",
          "name": "RpcMethod",
          "package": "msgpack-rpc",
          "source": "src/Network-MessagePackRpc-Server.html#RpcMethod",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network MessagePackRpc Server",
          "module": "Network.MessagePackRpc.Server",
          "name": "RpcMethod",
          "package": "msgpack-rpc",
          "partial": "Rpc Method",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#t:RpcMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MessagePackRpc.Server",
          "name": "MethodT",
          "package": "msgpack-rpc",
          "signature": "MethodT",
          "source": "src/Network-MessagePackRpc-Server.html#MethodT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MessagePackRpc Server",
          "module": "Network.MessagePackRpc.Server",
          "name": "MethodT",
          "package": "msgpack-rpc",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#v:MethodT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart RPC server with a set of RPC methods.\n\u003c/p\u003e",
          "module": "Network.MessagePackRpc.Server",
          "name": "serve",
          "package": "msgpack-rpc",
          "signature": "Int-\u003e [(String, RpcMethod m)]-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Start RPC server with set of RPC methods",
          "hierarchy": "Network MessagePackRpc Server",
          "module": "Network.MessagePackRpc.Server",
          "name": "serve",
          "normalized": "Int-\u003e[(String,RpcMethod a)]-\u003ea()",
          "package": "msgpack-rpc",
          "signature": "Int-\u003e[(String,RpcMethod m)]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#v:serve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a RPC method from a Hakell function\n\u003c/p\u003e",
          "module": "Network.MessagePackRpc.Server",
          "name": "toMethod",
          "package": "msgpack-rpc",
          "signature": "f -\u003e RpcMethod m",
          "source": "src/Network-MessagePackRpc-Server.html#toMethod",
          "type": "method"
        },
        "index": {
          "description": "Create RPC method from Hakell function",
          "hierarchy": "Network MessagePackRpc Server",
          "module": "Network.MessagePackRpc.Server",
          "name": "toMethod",
          "normalized": "a-\u003eRpcMethod b",
          "package": "msgpack-rpc",
          "partial": "Method",
          "signature": "f-\u003eRpcMethod m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#v:toMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MessagePackRpc.Server",
          "name": "unMethodT",
          "package": "msgpack-rpc",
          "signature": "m a",
          "source": "src/Network-MessagePackRpc-Server.html#MethodT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MessagePackRpc Server",
          "module": "Network.MessagePackRpc.Server",
          "name": "unMethodT",
          "package": "msgpack-rpc",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#v:unMethodT"
      }
    }
  ]
]