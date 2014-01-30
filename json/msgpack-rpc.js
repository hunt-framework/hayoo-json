[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is client library of MessagePack-RPC.\n The specification of MessagePack-RPC is at\n \u003ca\u003ehttp://redmine.msgpack.org/projects/msgpack/wiki/RPCProtocolSpec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA simple example:\n\u003c/p\u003e\u003cpre\u003e import Network.MessagePackRpc.Client\n\n add :: Int -\u003e Int -\u003e Client Int\n add = call \"add\"\n\n main = runClient \"localhost\" 5000 $ do\n   ret \u003c- add 123 456\n   liftIO $ print ret\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.MessagePackRpc.Client",
        "fct-package": "msgpack-rpc",
        "fct-signature": "module",
        "fct-source": "src/Network-MessagePackRpc-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "This module is client library of MessagePack-RPC The specification of MessagePack-RPC is at http redmine.msgpack.org projects msgpack wiki RPCProtocolSpec simple example import Network.MessagePackRpc.Client add Int Int Client Int add call add main runClient localhost do ret add liftIO print ret",
        "hierarchy": "Network MessagePackRpc Client",
        "module": "Network.MessagePackRpc.Client",
        "name": "Client",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#t:Client",
      "description": {
        "fct-module": "Network.MessagePackRpc.Client",
        "fct-package": "msgpack-rpc",
        "fct-signature": "type",
        "fct-source": "src/Network-MessagePackRpc-Client.html#Client",
        "fct-type": "type",
        "title": "Client"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MessagePackRpc Client",
        "module": "Network.MessagePackRpc.Client",
        "name": "Client",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#t:ClientT",
      "description": {
        "fct-module": "Network.MessagePackRpc.Client",
        "fct-package": "msgpack-rpc",
        "fct-signature": "data",
        "fct-source": "src/Network-MessagePackRpc-Client.html#ClientT",
        "fct-type": "data",
        "title": "ClientT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MessagePackRpc Client",
        "module": "Network.MessagePackRpc.Client",
        "name": "ClientT",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#t:RpcError",
      "description": {
        "fct-descr": "\u003cp\u003eRPC error type\n\u003c/p\u003e",
        "fct-module": "Network.MessagePackRpc.Client",
        "fct-package": "msgpack-rpc",
        "fct-signature": "data",
        "fct-source": "src/Network-MessagePackRpc-Client.html#RpcError",
        "fct-type": "data",
        "title": "RpcError"
      },
      "index": {
        "description": "RPC error type",
        "hierarchy": "Network MessagePackRpc Client",
        "module": "Network.MessagePackRpc.Client",
        "name": "RpcError",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Rpc Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#v:ProtocolError",
      "description": {
        "fct-descr": "\u003cp\u003eProtocol error\n\u003c/p\u003e",
        "fct-module": "Network.MessagePackRpc.Client",
        "fct-package": "msgpack-rpc",
        "fct-signature": "ProtocolError String",
        "fct-source": "src/Network-MessagePackRpc-Client.html#RpcError",
        "fct-type": "function",
        "title": "ProtocolError"
      },
      "index": {
        "description": "Protocol error",
        "hierarchy": "Network MessagePackRpc Client",
        "module": "Network.MessagePackRpc.Client",
        "name": "ProtocolError",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Protocol Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#v:ResultTypeError",
      "description": {
        "fct-descr": "\u003cp\u003eResult type mismatch\n\u003c/p\u003e",
        "fct-module": "Network.MessagePackRpc.Client",
        "fct-package": "msgpack-rpc",
        "fct-signature": "ResultTypeError String",
        "fct-source": "src/Network-MessagePackRpc-Client.html#RpcError",
        "fct-type": "function",
        "title": "ResultTypeError"
      },
      "index": {
        "description": "Result type mismatch",
        "hierarchy": "Network MessagePackRpc Client",
        "module": "Network.MessagePackRpc.Client",
        "name": "ResultTypeError",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Result Type Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#v:ServerError",
      "description": {
        "fct-descr": "\u003cp\u003eServer error\n\u003c/p\u003e",
        "fct-module": "Network.MessagePackRpc.Client",
        "fct-package": "msgpack-rpc",
        "fct-signature": "ServerError Object",
        "fct-source": "src/Network-MessagePackRpc-Client.html#RpcError",
        "fct-type": "function",
        "title": "ServerError"
      },
      "index": {
        "description": "Server error",
        "hierarchy": "Network MessagePackRpc Client",
        "module": "Network.MessagePackRpc.Client",
        "name": "ServerError",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Server Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#v:call",
      "description": {
        "fct-descr": "\u003cp\u003eCall an RPC Method\n\u003c/p\u003e",
        "fct-module": "Network.MessagePackRpc.Client",
        "fct-package": "msgpack-rpc",
        "fct-signature": "String-\u003e a",
        "fct-type": "function",
        "title": "call"
      },
      "index": {
        "description": "Call an RPC Method",
        "hierarchy": "Network MessagePackRpc Client",
        "module": "Network.MessagePackRpc.Client",
        "name": "call",
        "normalized": "String-\u003ea",
        "package": "msgpack-rpc",
        "partial": "",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Client.html#v:runClient",
      "description": {
        "fct-module": "Network.MessagePackRpc.Client",
        "fct-package": "msgpack-rpc",
        "fct-signature": "ByteString -\u003e Int -\u003e ClientT m a -\u003e m ()",
        "fct-source": "src/Network-MessagePackRpc-Client.html#runClient",
        "fct-type": "function",
        "title": "runClient"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MessagePackRpc Client",
        "module": "Network.MessagePackRpc.Client",
        "name": "runClient",
        "normalized": "ByteString-\u003eInt-\u003eClientT a b-\u003ea()",
        "package": "msgpack-rpc",
        "partial": "Client",
        "signature": "ByteString-\u003eInt-\u003eClientT m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is server library of MessagePack-RPC.\n The specification of MessagePack-RPC is at\n \u003ca\u003ehttp://redmine.msgpack.org/projects/msgpack/wiki/RPCProtocolSpec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA simple example:\n\u003c/p\u003e\u003cpre\u003e import Network.MessagePackRpc.Server\n\n add :: Int -\u003e Int -\u003e Method Int\n add x y = return $ x + y\n\n main = serve 1234 [(\"add\", toMethod add)]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.MessagePackRpc.Server",
        "fct-package": "msgpack-rpc",
        "fct-signature": "module",
        "fct-source": "src/Network-MessagePackRpc-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "This module is server library of MessagePack-RPC The specification of MessagePack-RPC is at http redmine.msgpack.org projects msgpack wiki RPCProtocolSpec simple example import Network.MessagePackRpc.Server add Int Int Method Int add return main serve add toMethod add",
        "hierarchy": "Network MessagePackRpc Server",
        "module": "Network.MessagePackRpc.Server",
        "name": "Server",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#t:Method",
      "description": {
        "fct-module": "Network.MessagePackRpc.Server",
        "fct-package": "msgpack-rpc",
        "fct-signature": "type",
        "fct-source": "src/Network-MessagePackRpc-Server.html#Method",
        "fct-type": "type",
        "title": "Method"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MessagePackRpc Server",
        "module": "Network.MessagePackRpc.Server",
        "name": "Method",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#t:MethodT",
      "description": {
        "fct-module": "Network.MessagePackRpc.Server",
        "fct-package": "msgpack-rpc",
        "fct-signature": "newtype",
        "fct-source": "src/Network-MessagePackRpc-Server.html#MethodT",
        "fct-type": "newtype",
        "title": "MethodT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MessagePackRpc Server",
        "module": "Network.MessagePackRpc.Server",
        "name": "MethodT",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#t:MethodType",
      "description": {
        "fct-module": "Network.MessagePackRpc.Server",
        "fct-package": "msgpack-rpc",
        "fct-signature": "class",
        "fct-source": "src/Network-MessagePackRpc-Server.html#MethodType",
        "fct-type": "class",
        "title": "MethodType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MessagePackRpc Server",
        "module": "Network.MessagePackRpc.Server",
        "name": "MethodType",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Method Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#t:RpcMethod",
      "description": {
        "fct-module": "Network.MessagePackRpc.Server",
        "fct-package": "msgpack-rpc",
        "fct-signature": "type",
        "fct-source": "src/Network-MessagePackRpc-Server.html#RpcMethod",
        "fct-type": "type",
        "title": "RpcMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MessagePackRpc Server",
        "module": "Network.MessagePackRpc.Server",
        "name": "RpcMethod",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Rpc Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#v:MethodT",
      "description": {
        "fct-module": "Network.MessagePackRpc.Server",
        "fct-package": "msgpack-rpc",
        "fct-signature": "MethodT",
        "fct-source": "src/Network-MessagePackRpc-Server.html#MethodT",
        "fct-type": "function",
        "title": "MethodT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MessagePackRpc Server",
        "module": "Network.MessagePackRpc.Server",
        "name": "MethodT",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#v:serve",
      "description": {
        "fct-descr": "\u003cp\u003eStart RPC server with a set of RPC methods.\n\u003c/p\u003e",
        "fct-module": "Network.MessagePackRpc.Server",
        "fct-package": "msgpack-rpc",
        "fct-signature": "Int-\u003e [(String, RpcMethod m)]-\u003e m ()",
        "fct-type": "function",
        "title": "serve"
      },
      "index": {
        "description": "Start RPC server with set of RPC methods",
        "hierarchy": "Network MessagePackRpc Server",
        "module": "Network.MessagePackRpc.Server",
        "name": "serve",
        "normalized": "Int-\u003e[(String,RpcMethod a)]-\u003ea()",
        "package": "msgpack-rpc",
        "partial": "",
        "signature": "Int-\u003e[(String,RpcMethod m)]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#v:toMethod",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a RPC method from a Hakell function\n\u003c/p\u003e",
        "fct-module": "Network.MessagePackRpc.Server",
        "fct-package": "msgpack-rpc",
        "fct-signature": "f -\u003e RpcMethod m",
        "fct-source": "src/Network-MessagePackRpc-Server.html#toMethod",
        "fct-type": "method",
        "title": "toMethod"
      },
      "index": {
        "description": "Create RPC method from Hakell function",
        "hierarchy": "Network MessagePackRpc Server",
        "module": "Network.MessagePackRpc.Server",
        "name": "toMethod",
        "normalized": "a-\u003eRpcMethod b",
        "package": "msgpack-rpc",
        "partial": "Method",
        "signature": "f-\u003eRpcMethod m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/msgpack-rpc/docs/Network-MessagePackRpc-Server.html#v:unMethodT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.MessagePackRpc.Server",
        "fct-package": "msgpack-rpc",
        "fct-signature": "m a",
        "fct-source": "src/Network-MessagePackRpc-Server.html#MethodT",
        "fct-type": "function",
        "title": "unMethodT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network MessagePackRpc Server",
        "module": "Network.MessagePackRpc.Server",
        "name": "unMethodT",
        "normalized": "",
        "package": "msgpack-rpc",
        "partial": "Method",
        "signature": ""
      }
    }
  }
]