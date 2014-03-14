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
        "word": "memcached"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Key",
          "name": "Key",
          "package": "memcached",
          "source": "src/Network-Memcache-Key.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Memcache Key",
          "module": "Network.Memcache.Key",
          "name": "Key",
          "package": "memcached",
          "partial": "Key",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Key.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Key",
          "name": "Key",
          "package": "memcached",
          "source": "src/Network-Memcache-Key.html#Key",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Memcache Key",
          "module": "Network.Memcache.Key",
          "name": "Key",
          "package": "memcached",
          "partial": "Key",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Key.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Key",
          "name": "hash",
          "package": "memcached",
          "signature": "a -\u003e Int",
          "source": "src/Network-Memcache-Key.html#hash",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Memcache Key",
          "module": "Network.Memcache.Key",
          "name": "hash",
          "normalized": "a-\u003eInt",
          "package": "memcached",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Key.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Key",
          "name": "toKey",
          "package": "memcached",
          "signature": "a -\u003e String",
          "source": "src/Network-Memcache-Key.html#toKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Memcache Key",
          "module": "Network.Memcache.Key",
          "name": "toKey",
          "normalized": "a-\u003eString",
          "package": "memcached",
          "partial": "Key",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Key.html#v:toKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Protocol",
          "name": "Protocol",
          "package": "memcached",
          "source": "src/Network-Memcache-Protocol.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Memcache Protocol",
          "module": "Network.Memcache.Protocol",
          "name": "Protocol",
          "package": "memcached",
          "partial": "Protocol",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Protocol.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Protocol",
          "name": "Server",
          "package": "memcached",
          "source": "src/Network-Memcache-Protocol.html#Server",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Memcache Protocol",
          "module": "Network.Memcache.Protocol",
          "name": "Server",
          "package": "memcached",
          "partial": "Server",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Protocol.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Protocol",
          "name": "connect",
          "package": "memcached",
          "signature": "HostName -\u003e PortNumber -\u003e IO Server",
          "source": "src/Network-Memcache-Protocol.html#connect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Memcache Protocol",
          "module": "Network.Memcache.Protocol",
          "name": "connect",
          "normalized": "HostName-\u003ePortNumber-\u003eIO Server",
          "package": "memcached",
          "signature": "HostName-\u003ePortNumber-\u003eIO Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Protocol.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Protocol",
          "name": "disconnect",
          "package": "memcached",
          "signature": "Server -\u003e IO ()",
          "source": "src/Network-Memcache-Protocol.html#disconnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Memcache Protocol",
          "module": "Network.Memcache.Protocol",
          "name": "disconnect",
          "normalized": "Server-\u003eIO()",
          "package": "memcached",
          "signature": "Server-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Protocol.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Protocol",
          "name": "stats",
          "package": "memcached",
          "signature": "Server -\u003e IO [(String, String)]",
          "source": "src/Network-Memcache-Protocol.html#stats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Memcache Protocol",
          "module": "Network.Memcache.Protocol",
          "name": "stats",
          "normalized": "Server-\u003eIO[(String,String)]",
          "package": "memcached",
          "signature": "Server-\u003eIO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Protocol.html#v:stats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Serializable",
          "name": "Serializable",
          "package": "memcached",
          "source": "src/Network-Memcache-Serializable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Memcache Serializable",
          "module": "Network.Memcache.Serializable",
          "name": "Serializable",
          "package": "memcached",
          "partial": "Serializable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Serializable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Serializable",
          "name": "Serializable",
          "package": "memcached",
          "source": "src/Network-Memcache-Serializable.html#Serializable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Memcache Serializable",
          "module": "Network.Memcache.Serializable",
          "name": "Serializable",
          "package": "memcached",
          "partial": "Serializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Serializable.html#t:Serializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Serializable",
          "name": "deserialize",
          "package": "memcached",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Network-Memcache-Serializable.html#deserialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Memcache Serializable",
          "module": "Network.Memcache.Serializable",
          "name": "deserialize",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "memcached",
          "signature": "ByteString-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Serializable.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.Serializable",
          "name": "serialize",
          "package": "memcached",
          "signature": "a -\u003e ByteString",
          "source": "src/Network-Memcache-Serializable.html#serialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Memcache Serializable",
          "module": "Network.Memcache.Serializable",
          "name": "serialize",
          "normalized": "a-\u003eByteString",
          "package": "memcached",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-Serializable.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.ServerPool",
          "name": "ServerPool",
          "package": "memcached",
          "source": "src/Network-Memcache-ServerPool.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Memcache ServerPool",
          "module": "Network.Memcache.ServerPool",
          "name": "ServerPool",
          "package": "memcached",
          "partial": "Server Pool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-ServerPool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.ServerPool",
          "name": "Pool",
          "package": "memcached",
          "source": "src/Network-Memcache-ServerPool.html#Pool",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Memcache ServerPool",
          "module": "Network.Memcache.ServerPool",
          "name": "Pool",
          "package": "memcached",
          "partial": "Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-ServerPool.html#t:Pool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.ServerPool",
          "name": "Server",
          "package": "memcached",
          "source": "src/Network-Memcache-ServerPool.html#Server",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Memcache ServerPool",
          "module": "Network.Memcache.ServerPool",
          "name": "Server",
          "package": "memcached",
          "partial": "Server",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-ServerPool.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.ServerPool",
          "name": "Pool",
          "package": "memcached",
          "signature": "Pool (String -\u003e Int)",
          "source": "src/Network-Memcache-ServerPool.html#Pool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Memcache ServerPool",
          "module": "Network.Memcache.ServerPool",
          "name": "Pool",
          "normalized": "Pool(String-\u003eInt)",
          "package": "memcached",
          "partial": "Pool",
          "signature": "Pool(String-\u003eInt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-ServerPool.html#v:Pool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache.ServerPool",
          "name": "Server",
          "package": "memcached",
          "signature": "Server Server Int",
          "source": "src/Network-Memcache-ServerPool.html#Server",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Memcache ServerPool",
          "module": "Network.Memcache.ServerPool",
          "name": "Server",
          "package": "memcached",
          "partial": "Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache-ServerPool.html#v:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache",
          "name": "Memcache",
          "package": "memcached",
          "source": "src/Network-Memcache.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Memcache",
          "module": "Network.Memcache",
          "name": "Memcache",
          "package": "memcached",
          "partial": "Memcache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache",
          "name": "Memcache",
          "package": "memcached",
          "source": "src/Network-Memcache.html#Memcache",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Memcache",
          "module": "Network.Memcache",
          "name": "Memcache",
          "package": "memcached",
          "partial": "Memcache",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache.html#t:Memcache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache",
          "name": "add",
          "package": "memcached",
          "signature": "a -\u003e k -\u003e s -\u003e IO Bool",
          "source": "src/Network-Memcache.html#add",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Memcache",
          "module": "Network.Memcache",
          "name": "add",
          "normalized": "a-\u003eb-\u003ec-\u003eIO Bool",
          "package": "memcached",
          "signature": "a-\u003ek-\u003es-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache",
          "name": "decr",
          "package": "memcached",
          "signature": "a -\u003e k -\u003e Int -\u003e IO (Maybe Int)",
          "source": "src/Network-Memcache.html#decr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Memcache",
          "module": "Network.Memcache",
          "name": "decr",
          "normalized": "a-\u003eb-\u003eInt-\u003eIO(Maybe Int)",
          "package": "memcached",
          "signature": "a-\u003ek-\u003eInt-\u003eIO(Maybe Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache.html#v:decr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache",
          "name": "delete",
          "package": "memcached",
          "signature": "a -\u003e k -\u003e Int -\u003e IO Bool",
          "source": "src/Network-Memcache.html#delete",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Memcache",
          "module": "Network.Memcache",
          "name": "delete",
          "normalized": "a-\u003eb-\u003eInt-\u003eIO Bool",
          "package": "memcached",
          "signature": "a-\u003ek-\u003eInt-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache",
          "name": "get",
          "package": "memcached",
          "signature": "a -\u003e k -\u003e IO (Maybe s)",
          "source": "src/Network-Memcache.html#get",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Memcache",
          "module": "Network.Memcache",
          "name": "get",
          "normalized": "a-\u003eb-\u003eIO(Maybe c)",
          "package": "memcached",
          "signature": "a-\u003ek-\u003eIO(Maybe s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache",
          "name": "incr",
          "package": "memcached",
          "signature": "a -\u003e k -\u003e Int -\u003e IO (Maybe Int)",
          "source": "src/Network-Memcache.html#incr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Memcache",
          "module": "Network.Memcache",
          "name": "incr",
          "normalized": "a-\u003eb-\u003eInt-\u003eIO(Maybe Int)",
          "package": "memcached",
          "signature": "a-\u003ek-\u003eInt-\u003eIO(Maybe Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache.html#v:incr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache",
          "name": "replace",
          "package": "memcached",
          "signature": "a -\u003e k -\u003e s -\u003e IO Bool",
          "source": "src/Network-Memcache.html#replace",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Memcache",
          "module": "Network.Memcache",
          "name": "replace",
          "normalized": "a-\u003eb-\u003ec-\u003eIO Bool",
          "package": "memcached",
          "signature": "a-\u003ek-\u003es-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Memcache",
          "name": "set",
          "package": "memcached",
          "signature": "a -\u003e k -\u003e s -\u003e IO Bool",
          "source": "src/Network-Memcache.html#set",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Memcache",
          "module": "Network.Memcache",
          "name": "set",
          "normalized": "a-\u003eb-\u003ec-\u003eIO Bool",
          "package": "memcached",
          "signature": "a-\u003ek-\u003es-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/memcached/docs/Network-Memcache.html#v:set"
      }
    }
  ]
]