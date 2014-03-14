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
        "word": "generic-server"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GenericServer",
          "name": "GenericServer",
          "package": "generic-server",
          "source": "src/Network-GenericServer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "GenericServer",
          "package": "generic-server",
          "partial": "Generic Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GenericServer",
          "name": "Server",
          "package": "generic-server",
          "source": "src/Network-GenericServer.html#Server",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "Server",
          "package": "generic-server",
          "partial": "Server",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GenericServer",
          "name": "fromResponse",
          "package": "generic-server",
          "signature": "s -\u003e Response s -\u003e ByteString",
          "source": "src/Network-GenericServer.html#fromResponse",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "fromResponse",
          "normalized": "a-\u003eResponse a-\u003eByteString",
          "package": "generic-server",
          "partial": "Response",
          "signature": "s-\u003eResponse s-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#v:fromResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun TCP/IP server with any worker funciton\n\u003c/p\u003e",
          "module": "Network.GenericServer",
          "name": "genericServer",
          "package": "generic-server",
          "signature": "Int-\u003e (Handle -\u003e IO ByteString)-\u003e (ByteString -\u003e IO ByteString)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Run TCP IP server with any worker funciton",
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "genericServer",
          "normalized": "Int-\u003e(Handle-\u003eIO ByteString)-\u003e(ByteString-\u003eIO ByteString)-\u003eIO()",
          "package": "generic-server",
          "partial": "Server",
          "signature": "Int-\u003e(Handle-\u003eIO ByteString)-\u003e(ByteString-\u003eIO ByteString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#v:genericServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GenericServer",
          "name": "getServer",
          "package": "generic-server",
          "signature": "s -\u003e IO s",
          "source": "src/Network-GenericServer.html#getServer",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "getServer",
          "normalized": "a-\u003eIO a",
          "package": "generic-server",
          "partial": "Server",
          "signature": "s-\u003eIO s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#v:getServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GenericServer",
          "name": "putServer",
          "package": "generic-server",
          "signature": "s -\u003e IO ()",
          "source": "src/Network-GenericServer.html#putServer",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "putServer",
          "normalized": "a-\u003eIO()",
          "package": "generic-server",
          "partial": "Server",
          "signature": "s-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#v:putServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GenericServer",
          "name": "readUntilEmptyLine",
          "package": "generic-server",
          "signature": "Handle -\u003e IO ByteString",
          "source": "src/Network-GenericServer.html#readUntilEmptyLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "readUntilEmptyLine",
          "normalized": "Handle-\u003eIO ByteString",
          "package": "generic-server",
          "partial": "Until Empty Line",
          "signature": "Handle-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#v:readUntilEmptyLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GenericServer",
          "name": "requestReader",
          "package": "generic-server",
          "signature": "s -\u003e Handle -\u003e IO ByteString",
          "source": "src/Network-GenericServer.html#requestReader",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "requestReader",
          "normalized": "a-\u003eHandle-\u003eIO ByteString",
          "package": "generic-server",
          "partial": "Reader",
          "signature": "s-\u003eHandle-\u003eIO ByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#v:requestReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GenericServer",
          "name": "server",
          "package": "generic-server",
          "signature": "s -\u003e Int -\u003e IO ()",
          "source": "src/Network-GenericServer.html#server",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "server",
          "normalized": "a-\u003eInt-\u003eIO()",
          "package": "generic-server",
          "signature": "s-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#v:server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GenericServer",
          "name": "toRequest",
          "package": "generic-server",
          "signature": "s -\u003e ByteString -\u003e Request s",
          "source": "src/Network-GenericServer.html#toRequest",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "toRequest",
          "normalized": "a-\u003eByteString-\u003eRequest a",
          "package": "generic-server",
          "partial": "Request",
          "signature": "s-\u003eByteString-\u003eRequest s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#v:toRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead given amount of bytes from socket\n\u003c/p\u003e",
          "module": "Network.GenericServer",
          "name": "waitData",
          "package": "generic-server",
          "signature": "Int-\u003e Int-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Read given amount of bytes from socket",
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "waitData",
          "normalized": "Int-\u003eInt-\u003eIO ByteString",
          "package": "generic-server",
          "partial": "Data",
          "signature": "Int-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#v:waitData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GenericServer",
          "name": "worker",
          "package": "generic-server",
          "signature": "s -\u003e Request s -\u003e IO (Response s, s)",
          "source": "src/Network-GenericServer.html#worker",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "worker",
          "normalized": "a-\u003eRequest a-\u003eIO(Response a,a)",
          "package": "generic-server",
          "signature": "s-\u003eRequest s-\u003eIO(Response s,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#v:worker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GenericServer",
          "name": "wrap",
          "package": "generic-server",
          "signature": "(a -\u003e IO b) -\u003e s -\u003e a -\u003e IO (b, s)",
          "source": "src/Network-GenericServer.html#wrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network GenericServer",
          "module": "Network.GenericServer",
          "name": "wrap",
          "normalized": "(a-\u003eIO b)-\u003ec-\u003ea-\u003eIO(b,c)",
          "package": "generic-server",
          "signature": "(a-\u003eIO b)-\u003es-\u003ea-\u003eIO(b,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-server/docs/Network-GenericServer.html#v:wrap"
      }
    }
  ]
]