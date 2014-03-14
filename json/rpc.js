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
        "word": "rpc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Send",
          "name": "Send",
          "package": "rpc",
          "source": "src/Data-Serialize-Send.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Serialize Send",
          "module": "Data.Serialize.Send",
          "name": "Send",
          "package": "rpc",
          "partial": "Send",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rpc/docs/Data-Serialize-Send.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserializes an object to the given handle\n\u003c/p\u003e",
          "module": "Data.Serialize.Send",
          "name": "hDeserialize",
          "package": "rpc",
          "signature": "Handle -\u003e IO a",
          "source": "src/Data-Serialize-Send.html#hDeserialize",
          "type": "function"
        },
        "index": {
          "description": "Deserializes an object to the given handle",
          "hierarchy": "Data Serialize Send",
          "module": "Data.Serialize.Send",
          "name": "hDeserialize",
          "normalized": "Handle-\u003eIO a",
          "package": "rpc",
          "partial": "Deserialize",
          "signature": "Handle-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpc/docs/Data-Serialize-Send.html#v:hDeserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerializes an object to the given handle\n\u003c/p\u003e",
          "module": "Data.Serialize.Send",
          "name": "hSerialize",
          "package": "rpc",
          "signature": "Handle -\u003e a -\u003e IO ()",
          "source": "src/Data-Serialize-Send.html#hSerialize",
          "type": "function"
        },
        "index": {
          "description": "Serializes an object to the given handle",
          "hierarchy": "Data Serialize Send",
          "module": "Data.Serialize.Send",
          "name": "hSerialize",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "rpc",
          "partial": "Serialize",
          "signature": "Handle-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpc/docs/Data-Serialize-Send.html#v:hSerialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.RPC.Client",
          "name": "Client",
          "package": "rpc",
          "source": "src/Network-RPC-Client.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network RPC Client",
          "module": "Network.RPC.Client",
          "name": "Client",
          "package": "rpc",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rpc/docs/Network-RPC-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.RPC.Client",
          "name": "Address",
          "package": "rpc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network RPC Client",
          "module": "Network.RPC.Client",
          "name": "Address",
          "package": "rpc",
          "partial": "Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rpc/docs/Network-RPC-Client.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost name and port, either IPv4 or IPv6.\n\u003c/p\u003e",
          "module": "Network.RPC.Client",
          "name": "IP",
          "package": "rpc",
          "signature": "IP HostName Int",
          "type": "function"
        },
        "index": {
          "description": "Host name and port either IPv4 or IPv6",
          "hierarchy": "Network RPC Client",
          "module": "Network.RPC.Client",
          "name": "IP",
          "package": "rpc",
          "partial": "IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpc/docs/Network-RPC-Client.html#v:IP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost name and port, only IPv4.\n\u003c/p\u003e",
          "module": "Network.RPC.Client",
          "name": "IPv4",
          "package": "rpc",
          "signature": "IPv4 HostName Int",
          "type": "function"
        },
        "index": {
          "description": "Host name and port only IPv4",
          "hierarchy": "Network RPC Client",
          "module": "Network.RPC.Client",
          "name": "IPv4",
          "package": "rpc",
          "partial": "IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpc/docs/Network-RPC-Client.html#v:IPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost name and port, only IPv6\n\u003c/p\u003e",
          "module": "Network.RPC.Client",
          "name": "IPv6",
          "package": "rpc",
          "signature": "IPv6 HostName Int",
          "type": "function"
        },
        "index": {
          "description": "Host name and port only IPv6",
          "hierarchy": "Network RPC Client",
          "module": "Network.RPC.Client",
          "name": "IPv6",
          "package": "rpc",
          "partial": "IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpc/docs/Network-RPC-Client.html#v:IPv6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal unix socket, not supported on Windows.\n\u003c/p\u003e",
          "module": "Network.RPC.Client",
          "name": "Unix",
          "package": "rpc",
          "signature": "Unix FilePath",
          "type": "function"
        },
        "index": {
          "description": "Local unix socket not supported on Windows",
          "hierarchy": "Network RPC Client",
          "module": "Network.RPC.Client",
          "name": "Unix",
          "package": "rpc",
          "partial": "Unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpc/docs/Network-RPC-Client.html#v:Unix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplices in rpc calls to a given IP.  Function names and types will remain the same as\n on the server side, with the result encapsulated in the IO monad.  Usage:\n\u003c/p\u003e\u003cpre\u003e    $(fetch (IP \"127.0.0.1\" 9000))\n\u003c/pre\u003e",
          "module": "Network.RPC.Client",
          "name": "fetch",
          "package": "rpc",
          "signature": "Address -\u003e Q [Dec]",
          "source": "src/Network-RPC-Client.html#fetch",
          "type": "function"
        },
        "index": {
          "description": "Splices in rpc calls to given IP Function names and types will remain the same as on the server side with the result encapsulated in the IO monad Usage fetch IP",
          "hierarchy": "Network RPC Client",
          "module": "Network.RPC.Client",
          "name": "fetch",
          "normalized": "Address-\u003eQ[Dec]",
          "package": "rpc",
          "signature": "Address-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpc/docs/Network-RPC-Client.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.RPC.Server",
          "name": "Server",
          "package": "rpc",
          "source": "src/Network-RPC-Server.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network RPC Server",
          "module": "Network.RPC.Server",
          "name": "Server",
          "package": "rpc",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rpc/docs/Network-RPC-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate haskell magic to share a set of functions on a given port to be spliced into a main declaration.  \n This function never returns.  For example:\n\u003c/p\u003e\u003cpre\u003e    main = $(share 9000 [ 'fn1, 'fn2, 'fn3 ])\n\u003c/pre\u003e",
          "module": "Network.RPC.Server",
          "name": "share",
          "package": "rpc",
          "signature": "Int -\u003e [Name] -\u003e Q Exp",
          "source": "src/Network-RPC-Server.html#share",
          "type": "function"
        },
        "index": {
          "description": "Template haskell magic to share set of functions on given port to be spliced into main declaration This function never returns For example main share fn1 fn2 fn3",
          "hierarchy": "Network RPC Server",
          "module": "Network.RPC.Server",
          "name": "share",
          "normalized": "Int-\u003e[Name]-\u003eQ Exp",
          "package": "rpc",
          "signature": "Int-\u003e[Name]-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rpc/docs/Network-RPC-Server.html#v:share"
      }
    }
  ]
]