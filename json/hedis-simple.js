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
        "word": "hedis-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "Simple",
          "package": "hedis-simple",
          "source": "src/Database-Redis-Simple.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Simple",
          "package": "hedis-simple",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation for connnecting to a Redis server.\n\u003c/p\u003e\u003cp\u003eIt is recommended to not use the \u003ccode\u003e\u003ca\u003eConnInfo\u003c/a\u003e\u003c/code\u003e data constructor directly.\n Instead use \u003ccode\u003e\u003ca\u003edefaultConnectInfo\u003c/a\u003e\u003c/code\u003e and update it with record syntax. For\n example to connect to a password protected Redis server running on localhost\n and listening to the default port:\n\u003c/p\u003e\u003cpre\u003e\n myConnectInfo :: ConnectInfo\n myConnectInfo = defaultConnectInfo {connectAuth = Just \"secret\"}\n\u003c/pre\u003e",
          "module": "Database.Redis.Simple",
          "name": "ConnectInfo",
          "package": "hedis-simple",
          "type": "data"
        },
        "index": {
          "description": "Information for connnecting to Redis server It is recommended to not use the ConnInfo data constructor directly Instead use defaultConnectInfo and update it with record syntax For example to connect to password protected Redis server running on localhost and listening to the default port myConnectInfo ConnectInfo myConnectInfo defaultConnectInfo connectAuth Just secret",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "ConnectInfo",
          "package": "hedis-simple",
          "partial": "Connect Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:ConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA threadsafe pool of network connections to a Redis server. Use the\n  \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e function to create one.\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "Connection",
          "package": "hedis-simple",
          "type": "data"
        },
        "index": {
          "description": "threadsafe pool of network connections to Redis server Use the connect function to create one",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Connection",
          "package": "hedis-simple",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "ConnectionLostException",
          "package": "hedis-simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "ConnectionLostException",
          "package": "hedis-simple",
          "partial": "Connection Lost Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:ConnectionLostException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "Message",
          "package": "hedis-simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Message",
          "package": "hedis-simple",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "PortID",
          "package": "hedis-simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "PortID",
          "package": "hedis-simple",
          "partial": "Port ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:PortID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulates subscription changes. Use \u003ccode\u003e\u003ca\u003esubscribe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunsubscribe\u003c/a\u003e\u003c/code\u003e,\n  \u003ccode\u003e\u003ca\u003epsubscribe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epunsubscribe\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e to construct a value. Combine\n  values by using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e interface, i.e. \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "PubSub",
          "package": "hedis-simple",
          "type": "data"
        },
        "index": {
          "description": "Encapsulates subscription changes Use subscribe unsubscribe psubscribe punsubscribe or mempty to construct value Combine values by using the Monoid interface i.e mappend and mconcat",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "PubSub",
          "package": "hedis-simple",
          "partial": "Pub Sub",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:PubSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "Redis",
          "package": "hedis-simple",
          "source": "src/Database-Redis-Simple.html#Redis",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Redis",
          "package": "hedis-simple",
          "partial": "Redis",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:Redis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "RedisResult",
          "package": "hedis-simple",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "RedisResult",
          "package": "hedis-simple",
          "partial": "Redis Result",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:RedisResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "RedisTx",
          "package": "hedis-simple",
          "source": "src/Database-Redis-Simple.html#RedisTx",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "RedisTx",
          "package": "hedis-simple",
          "partial": "Redis Tx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:RedisTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow-level representation of replies from the Redis server.\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "Reply",
          "package": "hedis-simple",
          "type": "data"
        },
        "index": {
          "description": "Low-level representation of replies from the Redis server",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Reply",
          "package": "hedis-simple",
          "partial": "Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "Status",
          "package": "hedis-simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Status",
          "package": "hedis-simple",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of a \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e transaction.\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "TxResult",
          "package": "hedis-simple",
          "type": "data"
        },
        "index": {
          "description": "Result of multiExec transaction",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "TxResult",
          "package": "hedis-simple",
          "partial": "Tx Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:TxResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "ConnInfo",
          "package": "hedis-simple",
          "signature": "ConnInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "ConnInfo",
          "package": "hedis-simple",
          "partial": "Conn Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:ConnInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "Message",
          "package": "hedis-simple",
          "signature": "Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Message",
          "package": "hedis-simple",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "Ok",
          "package": "hedis-simple",
          "signature": "Ok",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Ok",
          "package": "hedis-simple",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "PMessage",
          "package": "hedis-simple",
          "signature": "PMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "PMessage",
          "package": "hedis-simple",
          "partial": "PMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:PMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "Pong",
          "package": "hedis-simple",
          "signature": "Pong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Pong",
          "package": "hedis-simple",
          "partial": "Pong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:Pong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "PortNumber",
          "package": "hedis-simple",
          "signature": "PortNumber PortNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "PortNumber",
          "package": "hedis-simple",
          "partial": "Port Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:PortNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "Redis",
          "package": "hedis-simple",
          "signature": "Redis",
          "source": "src/Database-Redis-Simple.html#Redis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Redis",
          "package": "hedis-simple",
          "partial": "Redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:Redis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "RedisTx",
          "package": "hedis-simple",
          "signature": "RedisTx",
          "source": "src/Database-Redis-Simple.html#RedisTx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "RedisTx",
          "package": "hedis-simple",
          "partial": "Redis Tx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:RedisTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "Service",
          "package": "hedis-simple",
          "signature": "Service String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Service",
          "package": "hedis-simple",
          "partial": "Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:Service"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "Status",
          "package": "hedis-simple",
          "signature": "Status ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Status",
          "package": "hedis-simple",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransaction aborted due to an earlier \u003ccode\u003e\u003ca\u003ewatch\u003c/a\u003e\u003c/code\u003e command.\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "TxAborted",
          "package": "hedis-simple",
          "signature": "TxAborted",
          "type": "function"
        },
        "index": {
          "description": "Transaction aborted due to an earlier watch command",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "TxAborted",
          "package": "hedis-simple",
          "partial": "Tx Aborted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:TxAborted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt least one of the commands returned an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e reply.\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "TxError",
          "package": "hedis-simple",
          "signature": "TxError String",
          "type": "function"
        },
        "index": {
          "description": "At least one of the commands returned an Error reply",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "TxError",
          "package": "hedis-simple",
          "partial": "Tx Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:TxError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransaction completed successfully. The wrapped value corresponds to\n   the \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e value returned from the \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e argument action.\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "TxSuccess",
          "package": "hedis-simple",
          "signature": "TxSuccess a",
          "type": "function"
        },
        "index": {
          "description": "Transaction completed successfully The wrapped value corresponds to the Queued value returned from the multiExec argument action",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "TxSuccess",
          "package": "hedis-simple",
          "partial": "Tx Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:TxSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "UnixSocket",
          "package": "hedis-simple",
          "signature": "UnixSocket String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "UnixSocket",
          "package": "hedis-simple",
          "partial": "Unix Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:UnixSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "append",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "append",
          "normalized": "ByteString-\u003eByteString-\u003ea Integer",
          "package": "hedis-simple",
          "signature": "ByteString-\u003eByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "auth",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Redis Status",
          "source": "src/Database-Redis-Simple.html#auth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "auth",
          "normalized": "ByteString-\u003eRedis Status",
          "package": "hedis-simple",
          "signature": "ByteString-\u003eRedis Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "bgRewriteAof",
          "package": "hedis-simple",
          "signature": "m Status",
          "source": "src/Database-Redis-Simple.html#bgRewriteAof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "bgRewriteAof",
          "package": "hedis-simple",
          "partial": "Rewrite Aof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bgRewriteAof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "bgSave",
          "package": "hedis-simple",
          "signature": "m Status",
          "source": "src/Database-Redis-Simple.html#bgSave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "bgSave",
          "package": "hedis-simple",
          "partial": "Save",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bgSave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "bitCount",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#bitCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "bitCount",
          "normalized": "ByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Count",
          "signature": "ByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bitCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "bitCountRange",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#bitCountRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "bitCountRange",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Count Range",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bitCountRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "bitOpAnd",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#bitOpAnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "bitOpAnd",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Op And",
          "signature": "ByteString-\u003e[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bitOpAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "bitOpNot",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#bitOpNot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "bitOpNot",
          "normalized": "ByteString-\u003eByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Op Not",
          "signature": "ByteString-\u003eByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bitOpNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "bitOpOr",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#bitOpOr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "bitOpOr",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Op Or",
          "signature": "ByteString-\u003e[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bitOpOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "bitOpXor",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#bitOpXor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "bitOpXor",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Op Xor",
          "signature": "ByteString-\u003e[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bitOpXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "blPop",
          "package": "hedis-simple",
          "signature": "[ByteString] -\u003e Integer -\u003e m (Maybe (ByteString, ByteString))",
          "source": "src/Database-Redis-Simple.html#blPop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "blPop",
          "normalized": "[ByteString]-\u003eInteger-\u003ea(Maybe(ByteString,ByteString))",
          "package": "hedis-simple",
          "partial": "Pop",
          "signature": "[ByteString]-\u003eInteger-\u003em(Maybe(ByteString,ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:blPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "brPop",
          "package": "hedis-simple",
          "signature": "[ByteString] -\u003e Integer -\u003e m (Maybe (ByteString, ByteString))",
          "source": "src/Database-Redis-Simple.html#brPop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "brPop",
          "normalized": "[ByteString]-\u003eInteger-\u003ea(Maybe(ByteString,ByteString))",
          "package": "hedis-simple",
          "partial": "Pop",
          "signature": "[ByteString]-\u003eInteger-\u003em(Maybe(ByteString,ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:brPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "brPopLPush",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e Integer -\u003e m (Maybe ByteString)",
          "source": "src/Database-Redis-Simple.html#brPopLPush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "brPopLPush",
          "normalized": "ByteString-\u003eByteString-\u003eInteger-\u003ea(Maybe ByteString)",
          "package": "hedis-simple",
          "partial": "Pop LPush",
          "signature": "ByteString-\u003eByteString-\u003eInteger-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:brPopLPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "configGet",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m [(ByteString, ByteString)]",
          "source": "src/Database-Redis-Simple.html#configGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "configGet",
          "normalized": "ByteString-\u003ea[(ByteString,ByteString)]",
          "package": "hedis-simple",
          "partial": "Get",
          "signature": "ByteString-\u003em[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:configGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "configResetStat",
          "package": "hedis-simple",
          "signature": "m Status",
          "source": "src/Database-Redis-Simple.html#configResetStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "configResetStat",
          "package": "hedis-simple",
          "partial": "Reset Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:configResetStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "configSet",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#configSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "configSet",
          "normalized": "ByteString-\u003eByteString-\u003ea Status",
          "package": "hedis-simple",
          "partial": "Set",
          "signature": "ByteString-\u003eByteString-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:configSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e to a Redis server designated by the given\n  \u003ccode\u003e\u003ca\u003eConnectInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "connect",
          "package": "hedis-simple",
          "signature": "ConnectInfo -\u003e IO Connection",
          "type": "function"
        },
        "index": {
          "description": "Opens Connection to Redis server designated by the given ConnectInfo",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "connect",
          "normalized": "ConnectInfo-\u003eIO Connection",
          "package": "hedis-simple",
          "signature": "ConnectInfo-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the server is protected by a password, set \u003ccode\u003e\u003ca\u003econnectAuth\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n   the password. Each connection will then authenticate by the \u003ccode\u003e\u003ca\u003eauth\u003c/a\u003e\u003c/code\u003e\n   command.\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "connectAuth",
          "package": "hedis-simple",
          "signature": "Maybe ByteString",
          "type": "function"
        },
        "index": {
          "description": "When the server is protected by password set connectAuth to Just the password Each connection will then authenticate by the auth command",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "connectAuth",
          "package": "hedis-simple",
          "partial": "Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:connectAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "connectHost",
          "package": "hedis-simple",
          "signature": "HostName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "connectHost",
          "package": "hedis-simple",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:connectHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of connections to keep open. The smallest acceptable\n   value is 1.\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "connectMaxConnections",
          "package": "hedis-simple",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of connections to keep open The smallest acceptable value is",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "connectMaxConnections",
          "package": "hedis-simple",
          "partial": "Max Connections",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:connectMaxConnections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAmount of time for which an unused connection is kept open. The\n   smallest acceptable value is 0.5 seconds. If the \u003ccode\u003etimeout\u003c/code\u003e value in\n   your redis.conf file is non-zero, it should be larger than\n   \u003ccode\u003e\u003ca\u003econnectMaxIdleTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "connectMaxIdleTime",
          "package": "hedis-simple",
          "signature": "NominalDiffTime",
          "type": "function"
        },
        "index": {
          "description": "Amount of time for which an unused connection is kept open The smallest acceptable value is seconds If the timeout value in your redis.conf file is non-zero it should be larger than connectMaxIdleTime",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "connectMaxIdleTime",
          "package": "hedis-simple",
          "partial": "Max Idle Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:connectMaxIdleTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "connectPort",
          "package": "hedis-simple",
          "signature": "PortID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "connectPort",
          "package": "hedis-simple",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:connectPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "dbSize",
          "package": "hedis-simple",
          "signature": "m Integer",
          "source": "src/Database-Redis-Simple.html#dbSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "dbSize",
          "package": "hedis-simple",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:dbSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "debugObject",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m ByteString",
          "source": "src/Database-Redis-Simple.html#debugObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "debugObject",
          "normalized": "ByteString-\u003ea ByteString",
          "package": "hedis-simple",
          "partial": "Object",
          "signature": "ByteString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:debugObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "decode",
          "package": "hedis-simple",
          "signature": "Reply -\u003e Either Reply a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "decode",
          "normalized": "Reply-\u003eEither Reply a",
          "package": "hedis-simple",
          "signature": "Reply-\u003eEither Reply a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "decr",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#decr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "decr",
          "normalized": "ByteString-\u003ea Integer",
          "package": "hedis-simple",
          "signature": "ByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:decr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "decrBy",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#decrBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "decrBy",
          "normalized": "ByteString-\u003eInteger-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "By",
          "signature": "ByteString-\u003eInteger-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:decrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault information for connecting:\n\u003c/p\u003e\u003cpre\u003e\n  connectHost           = \"localhost\"\n  connectPort           = PortNumber 6379 -- Redis default port\n  connectAuth           = Nothing         -- No password\n  connectMaxConnections = 50              -- Up to 50 connections\n  connectMaxIdleTime    = 30              -- Keep open for 30 seconds\n\u003c/pre\u003e",
          "module": "Database.Redis.Simple",
          "name": "defaultConnectInfo",
          "package": "hedis-simple",
          "signature": "ConnectInfo",
          "type": "function"
        },
        "index": {
          "description": "Default information for connecting connectHost localhost connectPort PortNumber Redis default port connectAuth Nothing No password connectMaxConnections Up to connections connectMaxIdleTime Keep open for seconds",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "defaultConnectInfo",
          "package": "hedis-simple",
          "partial": "Connect Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:defaultConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "del",
          "package": "hedis-simple",
          "signature": "[ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#del",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "del",
          "normalized": "[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "signature": "[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:del"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "dump",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m ByteString",
          "source": "src/Database-Redis-Simple.html#dump",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "dump",
          "normalized": "ByteString-\u003ea ByteString",
          "package": "hedis-simple",
          "signature": "ByteString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:dump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "echo",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m ByteString",
          "source": "src/Database-Redis-Simple.html#echo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "echo",
          "normalized": "ByteString-\u003ea ByteString",
          "package": "hedis-simple",
          "signature": "ByteString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "eval",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e [ByteString] -\u003e m a",
          "source": "src/Database-Redis-Simple.html#eval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "eval",
          "normalized": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003ea b",
          "package": "hedis-simple",
          "signature": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "evalSha",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e [ByteString] -\u003e m a",
          "source": "src/Database-Redis-Simple.html#evalSha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "evalSha",
          "normalized": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003ea b",
          "package": "hedis-simple",
          "partial": "Sha",
          "signature": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:evalSha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "exists",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#exists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "exists",
          "normalized": "ByteString-\u003ea Bool",
          "package": "hedis-simple",
          "signature": "ByteString-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "expire",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#expire",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "expire",
          "normalized": "ByteString-\u003eInteger-\u003ea Bool",
          "package": "hedis-simple",
          "signature": "ByteString-\u003eInteger-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:expire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "expireAt",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#expireAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "expireAt",
          "normalized": "ByteString-\u003eInteger-\u003ea Bool",
          "package": "hedis-simple",
          "partial": "At",
          "signature": "ByteString-\u003eInteger-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:expireAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "flushAll",
          "package": "hedis-simple",
          "signature": "m Status",
          "source": "src/Database-Redis-Simple.html#flushAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "flushAll",
          "package": "hedis-simple",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:flushAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "flushDb",
          "package": "hedis-simple",
          "signature": "m Status",
          "source": "src/Database-Redis-Simple.html#flushDb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "flushDb",
          "package": "hedis-simple",
          "partial": "Db",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:flushDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "fromRedis",
          "package": "hedis-simple",
          "signature": "EitherT Reply Redis a",
          "source": "src/Database-Redis-Simple.html#Redis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "fromRedis",
          "package": "hedis-simple",
          "partial": "Redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:fromRedis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "fromRedisTx",
          "package": "hedis-simple",
          "signature": "RedisTx (Queued a)",
          "source": "src/Database-Redis-Simple.html#RedisTx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "fromRedisTx",
          "package": "hedis-simple",
          "partial": "Redis Tx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:fromRedisTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "get",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m (Maybe ByteString)",
          "source": "src/Database-Redis-Simple.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "get",
          "normalized": "ByteString-\u003ea(Maybe ByteString)",
          "package": "hedis-simple",
          "signature": "ByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "getBit",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#getBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "getBit",
          "normalized": "ByteString-\u003eInteger-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Bit",
          "signature": "ByteString-\u003eInteger-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:getBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "getRange",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m ByteString",
          "source": "src/Database-Redis-Simple.html#getRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "getRange",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea ByteString",
          "package": "hedis-simple",
          "partial": "Range",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:getRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "getSet",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m (Maybe ByteString)",
          "source": "src/Database-Redis-Simple.html#getSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "getSet",
          "normalized": "ByteString-\u003eByteString-\u003ea(Maybe ByteString)",
          "package": "hedis-simple",
          "partial": "Set",
          "signature": "ByteString-\u003eByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:getSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "getType",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m RedisType",
          "source": "src/Database-Redis-Simple.html#getType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "getType",
          "normalized": "ByteString-\u003ea RedisType",
          "package": "hedis-simple",
          "partial": "Type",
          "signature": "ByteString-\u003em RedisType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:getType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hDel",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#hDel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hDel",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Del",
          "signature": "ByteString-\u003e[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hDel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hExists",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#hExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hExists",
          "normalized": "ByteString-\u003eByteString-\u003ea Bool",
          "package": "hedis-simple",
          "partial": "Exists",
          "signature": "ByteString-\u003eByteString-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hGet",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m (Maybe ByteString)",
          "source": "src/Database-Redis-Simple.html#hGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hGet",
          "normalized": "ByteString-\u003eByteString-\u003ea(Maybe ByteString)",
          "package": "hedis-simple",
          "partial": "Get",
          "signature": "ByteString-\u003eByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hGetAll",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m [(ByteString, ByteString)]",
          "source": "src/Database-Redis-Simple.html#hGetAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hGetAll",
          "normalized": "ByteString-\u003ea[(ByteString,ByteString)]",
          "package": "hedis-simple",
          "partial": "Get All",
          "signature": "ByteString-\u003em[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hGetAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hIncrBy",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e Integer -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#hIncrBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hIncrBy",
          "normalized": "ByteString-\u003eByteString-\u003eInteger-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Incr By",
          "signature": "ByteString-\u003eByteString-\u003eInteger-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hIncrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hIncrByFloat",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e Double -\u003e m Double",
          "source": "src/Database-Redis-Simple.html#hIncrByFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hIncrByFloat",
          "normalized": "ByteString-\u003eByteString-\u003eDouble-\u003ea Double",
          "package": "hedis-simple",
          "partial": "Incr By Float",
          "signature": "ByteString-\u003eByteString-\u003eDouble-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hIncrByFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hKeys",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#hKeys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hKeys",
          "normalized": "ByteString-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Keys",
          "signature": "ByteString-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hLen",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#hLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hLen",
          "normalized": "ByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Len",
          "signature": "ByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hMGet",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m [Maybe ByteString]",
          "source": "src/Database-Redis-Simple.html#hMGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hMGet",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea[Maybe ByteString]",
          "package": "hedis-simple",
          "partial": "MGet",
          "signature": "ByteString-\u003e[ByteString]-\u003em[Maybe ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hMGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hMSet",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [(ByteString, ByteString)] -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#hMSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hMSet",
          "normalized": "ByteString-\u003e[(ByteString,ByteString)]-\u003ea Status",
          "package": "hedis-simple",
          "partial": "MSet",
          "signature": "ByteString-\u003e[(ByteString,ByteString)]-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hMSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hSet",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#hSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hSet",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea Bool",
          "package": "hedis-simple",
          "partial": "Set",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hSetNX",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#hSetNX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hSetNX",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea Bool",
          "package": "hedis-simple",
          "partial": "Set NX",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hSetNX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "hVals",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#hVals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "hVals",
          "normalized": "ByteString-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Vals",
          "signature": "ByteString-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "incr",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#incr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "incr",
          "normalized": "ByteString-\u003ea Integer",
          "package": "hedis-simple",
          "signature": "ByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:incr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "incrBy",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#incrBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "incrBy",
          "normalized": "ByteString-\u003eInteger-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "By",
          "signature": "ByteString-\u003eInteger-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:incrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "incrByFloat",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Double -\u003e m Double",
          "source": "src/Database-Redis-Simple.html#incrByFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "incrByFloat",
          "normalized": "ByteString-\u003eDouble-\u003ea Double",
          "package": "hedis-simple",
          "partial": "By Float",
          "signature": "ByteString-\u003eDouble-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:incrByFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "info",
          "package": "hedis-simple",
          "signature": "m ByteString",
          "source": "src/Database-Redis-Simple.html#info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "info",
          "package": "hedis-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "keys",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "keys",
          "normalized": "ByteString-\u003ea[ByteString]",
          "package": "hedis-simple",
          "signature": "ByteString-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "lIndex",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e m (Maybe ByteString)",
          "source": "src/Database-Redis-Simple.html#lIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "lIndex",
          "normalized": "ByteString-\u003eInteger-\u003ea(Maybe ByteString)",
          "package": "hedis-simple",
          "partial": "Index",
          "signature": "ByteString-\u003eInteger-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "lInsertAfter",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#lInsertAfter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "lInsertAfter",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Insert After",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lInsertAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "lInsertBefore",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#lInsertBefore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "lInsertBefore",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Insert Before",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lInsertBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "lLen",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#lLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "lLen",
          "normalized": "ByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Len",
          "signature": "ByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "lPop",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m (Maybe ByteString)",
          "source": "src/Database-Redis-Simple.html#lPop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "lPop",
          "normalized": "ByteString-\u003ea(Maybe ByteString)",
          "package": "hedis-simple",
          "partial": "Pop",
          "signature": "ByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "lPush",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#lPush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "lPush",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Push",
          "signature": "ByteString-\u003e[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "lPushX",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#lPushX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "lPushX",
          "normalized": "ByteString-\u003eByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Push",
          "signature": "ByteString-\u003eByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lPushX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "lRange",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#lRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "lRange",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Range",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "lRem",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#lRem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "lRem",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Rem",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "lSet",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#lSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "lSet",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Status",
          "package": "hedis-simple",
          "partial": "Set",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "lTrim",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#lTrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "lTrim",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea Status",
          "package": "hedis-simple",
          "partial": "Trim",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lTrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "lastSave",
          "package": "hedis-simple",
          "signature": "m Integer",
          "source": "src/Database-Redis-Simple.html#lastSave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "lastSave",
          "package": "hedis-simple",
          "partial": "Save",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lastSave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "mGet",
          "package": "hedis-simple",
          "signature": "[ByteString] -\u003e m [Maybe ByteString]",
          "source": "src/Database-Redis-Simple.html#mGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "mGet",
          "normalized": "[ByteString]-\u003ea[Maybe ByteString]",
          "package": "hedis-simple",
          "partial": "Get",
          "signature": "[ByteString]-\u003em[Maybe ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:mGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "mSet",
          "package": "hedis-simple",
          "signature": "[(ByteString, ByteString)] -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#mSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "mSet",
          "normalized": "[(ByteString,ByteString)]-\u003ea Status",
          "package": "hedis-simple",
          "partial": "Set",
          "signature": "[(ByteString,ByteString)]-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:mSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "mSetNx",
          "package": "hedis-simple",
          "signature": "[(ByteString, ByteString)] -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#mSetNx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "mSetNx",
          "normalized": "[(ByteString,ByteString)]-\u003ea Bool",
          "package": "hedis-simple",
          "partial": "Set Nx",
          "signature": "[(ByteString,ByteString)]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:mSetNx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "migrate",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e Integer -\u003e Integer -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#migrate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "migrate",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eInteger-\u003eInteger-\u003ea Status",
          "package": "hedis-simple",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eInteger-\u003eInteger-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:migrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "move",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "move",
          "normalized": "ByteString-\u003eInteger-\u003ea Bool",
          "package": "hedis-simple",
          "signature": "ByteString-\u003eInteger-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "msgChannel",
          "package": "hedis-simple",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "msgChannel",
          "package": "hedis-simple",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:msgChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "msgMessage",
          "package": "hedis-simple",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "msgMessage",
          "package": "hedis-simple",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:msgMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "msgPattern",
          "package": "hedis-simple",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "msgPattern",
          "package": "hedis-simple",
          "partial": "Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:msgPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "multiExec",
          "package": "hedis-simple",
          "signature": "RedisTx a -\u003e Redis (TxResult a)",
          "source": "src/Database-Redis-Simple.html#multiExec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "multiExec",
          "normalized": "RedisTx a-\u003eRedis(TxResult a)",
          "package": "hedis-simple",
          "partial": "Exec",
          "signature": "RedisTx a-\u003eRedis(TxResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:multiExec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "objectEncoding",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m ByteString",
          "source": "src/Database-Redis-Simple.html#objectEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "objectEncoding",
          "normalized": "ByteString-\u003ea ByteString",
          "package": "hedis-simple",
          "partial": "Encoding",
          "signature": "ByteString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:objectEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "objectIdleTime",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#objectIdleTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "objectIdleTime",
          "normalized": "ByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Idle Time",
          "signature": "ByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:objectIdleTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "objectRefCount",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#objectRefCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "objectRefCount",
          "normalized": "ByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Ref Count",
          "signature": "ByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:objectRefCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "pExpire",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#pExpire",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "pExpire",
          "normalized": "ByteString-\u003eInteger-\u003ea Bool",
          "package": "hedis-simple",
          "partial": "Expire",
          "signature": "ByteString-\u003eInteger-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:pExpire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "pExpireAt",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#pExpireAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "pExpireAt",
          "normalized": "ByteString-\u003eInteger-\u003ea Bool",
          "package": "hedis-simple",
          "partial": "Expire At",
          "signature": "ByteString-\u003eInteger-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:pExpireAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "pSetEx",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#pSetEx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "pSetEx",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Status",
          "package": "hedis-simple",
          "partial": "Set Ex",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:pSetEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "pTtl",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#pTtl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "pTtl",
          "normalized": "ByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Ttl",
          "signature": "ByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:pTtl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "persist",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#persist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "persist",
          "normalized": "ByteString-\u003ea Bool",
          "package": "hedis-simple",
          "signature": "ByteString-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:persist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "ping",
          "package": "hedis-simple",
          "signature": "m Status",
          "source": "src/Database-Redis-Simple.html#ping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "ping",
          "package": "hedis-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "pubSub",
          "package": "hedis-simple",
          "signature": "PubSub -\u003e (Message -\u003e IO PubSub) -\u003e Redis ()",
          "source": "src/Database-Redis-Simple.html#pubSub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "pubSub",
          "normalized": "PubSub-\u003e(Message-\u003eIO PubSub)-\u003eRedis()",
          "package": "hedis-simple",
          "partial": "Sub",
          "signature": "PubSub-\u003e(Message-\u003eIO PubSub)-\u003eRedis()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:pubSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "publish",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#publish",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "publish",
          "normalized": "ByteString-\u003eByteString-\u003ea Integer",
          "package": "hedis-simple",
          "signature": "ByteString-\u003eByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:publish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "quit",
          "package": "hedis-simple",
          "signature": "m Status",
          "source": "src/Database-Redis-Simple.html#quit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "quit",
          "package": "hedis-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "rPop",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m (Maybe ByteString)",
          "source": "src/Database-Redis-Simple.html#rPop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "rPop",
          "normalized": "ByteString-\u003ea(Maybe ByteString)",
          "package": "hedis-simple",
          "partial": "Pop",
          "signature": "ByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:rPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "rPopLPush",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m (Maybe ByteString)",
          "source": "src/Database-Redis-Simple.html#rPopLPush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "rPopLPush",
          "normalized": "ByteString-\u003eByteString-\u003ea(Maybe ByteString)",
          "package": "hedis-simple",
          "partial": "Pop LPush",
          "signature": "ByteString-\u003eByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:rPopLPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "rPush",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#rPush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "rPush",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Push",
          "signature": "ByteString-\u003e[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:rPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "rPushX",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#rPushX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "rPushX",
          "normalized": "ByteString-\u003eByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Push",
          "signature": "ByteString-\u003eByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:rPushX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "randomKey",
          "package": "hedis-simple",
          "signature": "m (Maybe ByteString)",
          "source": "src/Database-Redis-Simple.html#randomKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "randomKey",
          "package": "hedis-simple",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:randomKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "rename",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#rename",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "rename",
          "normalized": "ByteString-\u003eByteString-\u003ea Status",
          "package": "hedis-simple",
          "signature": "ByteString-\u003eByteString-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "renameNx",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#renameNx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "renameNx",
          "normalized": "ByteString-\u003eByteString-\u003ea Bool",
          "package": "hedis-simple",
          "partial": "Nx",
          "signature": "ByteString-\u003eByteString-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:renameNx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "restore",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#restore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "restore",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Status",
          "package": "hedis-simple",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "runRedis",
          "package": "hedis-simple",
          "signature": "Connection -\u003e Redis a -\u003e IO (Either Reply a)",
          "source": "src/Database-Redis-Simple.html#runRedis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "runRedis",
          "normalized": "Connection-\u003eRedis a-\u003eIO(Either Reply a)",
          "package": "hedis-simple",
          "partial": "Redis",
          "signature": "Connection-\u003eRedis a-\u003eIO(Either Reply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:runRedis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sAdd",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#sAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sAdd",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Add",
          "signature": "ByteString-\u003e[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sCard",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#sCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sCard",
          "normalized": "ByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Card",
          "signature": "ByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sDiff",
          "package": "hedis-simple",
          "signature": "[ByteString] -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#sDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sDiff",
          "normalized": "[ByteString]-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Diff",
          "signature": "[ByteString]-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sDiffStore",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#sDiffStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sDiffStore",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Diff Store",
          "signature": "ByteString-\u003e[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sDiffStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sInter",
          "package": "hedis-simple",
          "signature": "[ByteString] -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#sInter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sInter",
          "normalized": "[ByteString]-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Inter",
          "signature": "[ByteString]-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sInter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sInterStore",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#sInterStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sInterStore",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Inter Store",
          "signature": "ByteString-\u003e[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sInterStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sIsMember",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#sIsMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sIsMember",
          "normalized": "ByteString-\u003eByteString-\u003ea Bool",
          "package": "hedis-simple",
          "partial": "Is Member",
          "signature": "ByteString-\u003eByteString-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sIsMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sMembers",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#sMembers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sMembers",
          "normalized": "ByteString-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Members",
          "signature": "ByteString-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sMembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sMove",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#sMove",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sMove",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea Bool",
          "package": "hedis-simple",
          "partial": "Move",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sPop",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m (Maybe ByteString)",
          "source": "src/Database-Redis-Simple.html#sPop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sPop",
          "normalized": "ByteString-\u003ea(Maybe ByteString)",
          "package": "hedis-simple",
          "partial": "Pop",
          "signature": "ByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sRandMember",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m (Maybe ByteString)",
          "source": "src/Database-Redis-Simple.html#sRandMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sRandMember",
          "normalized": "ByteString-\u003ea(Maybe ByteString)",
          "package": "hedis-simple",
          "partial": "Rand Member",
          "signature": "ByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sRandMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sRem",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#sRem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sRem",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Rem",
          "signature": "ByteString-\u003e[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sUnion",
          "package": "hedis-simple",
          "signature": "[ByteString] -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#sUnion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sUnion",
          "normalized": "[ByteString]-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Union",
          "signature": "[ByteString]-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sUnionStore",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#sUnionStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sUnionStore",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Union Store",
          "signature": "ByteString-\u003e[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sUnionStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "save",
          "package": "hedis-simple",
          "signature": "m Status",
          "source": "src/Database-Redis-Simple.html#save",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "save",
          "package": "hedis-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "scriptExists",
          "package": "hedis-simple",
          "signature": "[ByteString] -\u003e m [Bool]",
          "source": "src/Database-Redis-Simple.html#scriptExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "scriptExists",
          "normalized": "[ByteString]-\u003ea[Bool]",
          "package": "hedis-simple",
          "partial": "Exists",
          "signature": "[ByteString]-\u003em[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:scriptExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "scriptFlush",
          "package": "hedis-simple",
          "signature": "m Status",
          "source": "src/Database-Redis-Simple.html#scriptFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "scriptFlush",
          "package": "hedis-simple",
          "partial": "Flush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:scriptFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "scriptKill",
          "package": "hedis-simple",
          "signature": "m Status",
          "source": "src/Database-Redis-Simple.html#scriptKill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "scriptKill",
          "package": "hedis-simple",
          "partial": "Kill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:scriptKill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "scriptLoad",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m ByteString",
          "source": "src/Database-Redis-Simple.html#scriptLoad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "scriptLoad",
          "normalized": "ByteString-\u003ea ByteString",
          "package": "hedis-simple",
          "partial": "Load",
          "signature": "ByteString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:scriptLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "select",
          "package": "hedis-simple",
          "signature": "Integer -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "select",
          "normalized": "Integer-\u003ea Status",
          "package": "hedis-simple",
          "signature": "Integer-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sendRequest",
          "package": "hedis-simple",
          "signature": "[ByteString] -\u003e m a",
          "source": "src/Database-Redis-Simple.html#sendRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sendRequest",
          "normalized": "[ByteString]-\u003ea b",
          "package": "hedis-simple",
          "partial": "Request",
          "signature": "[ByteString]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sendRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "set",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "set",
          "normalized": "ByteString-\u003eByteString-\u003ea Status",
          "package": "hedis-simple",
          "signature": "ByteString-\u003eByteString-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "setBit",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#setBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "setBit",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Bit",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:setBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "setEx",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#setEx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "setEx",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Status",
          "package": "hedis-simple",
          "partial": "Ex",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:setEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "setNx",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Bool",
          "source": "src/Database-Redis-Simple.html#setNx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "setNx",
          "normalized": "ByteString-\u003eByteString-\u003ea Bool",
          "package": "hedis-simple",
          "partial": "Nx",
          "signature": "ByteString-\u003eByteString-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:setNx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "setRange",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#setRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "setRange",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Range",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:setRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "slaveOf",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m Status",
          "source": "src/Database-Redis-Simple.html#slaveOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "slaveOf",
          "normalized": "ByteString-\u003eByteString-\u003ea Status",
          "package": "hedis-simple",
          "partial": "Of",
          "signature": "ByteString-\u003eByteString-\u003em Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:slaveOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "slowLogGet",
          "package": "hedis-simple",
          "signature": "Integer -\u003e m [Slowlog]",
          "source": "src/Database-Redis-Simple.html#slowLogGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "slowLogGet",
          "normalized": "Integer-\u003ea[Slowlog]",
          "package": "hedis-simple",
          "partial": "Log Get",
          "signature": "Integer-\u003em[Slowlog]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:slowLogGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "slowLogLen",
          "package": "hedis-simple",
          "signature": "m Integer",
          "source": "src/Database-Redis-Simple.html#slowLogLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "slowLogLen",
          "package": "hedis-simple",
          "partial": "Log Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:slowLogLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "slowLogReset",
          "package": "hedis-simple",
          "signature": "m Status",
          "source": "src/Database-Redis-Simple.html#slowLogReset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "slowLogReset",
          "package": "hedis-simple",
          "partial": "Log Reset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:slowLogReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sort",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e SortOpts -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sort",
          "normalized": "ByteString-\u003eSortOpts-\u003ea[ByteString]",
          "package": "hedis-simple",
          "signature": "ByteString-\u003eSortOpts-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "sortStore",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e SortOpts -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#sortStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "sortStore",
          "normalized": "ByteString-\u003eByteString-\u003eSortOpts-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Store",
          "signature": "ByteString-\u003eByteString-\u003eSortOpts-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sortStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "strLen",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#strLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "strLen",
          "normalized": "ByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Len",
          "signature": "ByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:strLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "time",
          "package": "hedis-simple",
          "signature": "m (Integer, Integer)",
          "source": "src/Database-Redis-Simple.html#time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "time",
          "normalized": "a(Integer,Integer)",
          "package": "hedis-simple",
          "signature": "m(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "ttl",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#ttl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "ttl",
          "normalized": "ByteString-\u003ea Integer",
          "package": "hedis-simple",
          "signature": "ByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:ttl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "unwatch",
          "package": "hedis-simple",
          "signature": "Redis Status",
          "source": "src/Database-Redis-Simple.html#unwatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "unwatch",
          "package": "hedis-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:unwatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "watch",
          "package": "hedis-simple",
          "signature": "[ByteString] -\u003e Redis Status",
          "source": "src/Database-Redis-Simple.html#watch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "watch",
          "normalized": "[ByteString]-\u003eRedis Status",
          "package": "hedis-simple",
          "signature": "[ByteString]-\u003eRedis Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:watch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zAdd",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [(Double, ByteString)] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#zAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zAdd",
          "normalized": "ByteString-\u003e[(Double,ByteString)]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Add",
          "signature": "ByteString-\u003e[(Double,ByteString)]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zCard",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#zCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zCard",
          "normalized": "ByteString-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Card",
          "signature": "ByteString-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zCount",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Double -\u003e Double -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#zCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zCount",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Count",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zIncrBy",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Double",
          "source": "src/Database-Redis-Simple.html#zIncrBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zIncrBy",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Double",
          "package": "hedis-simple",
          "partial": "Incr By",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zIncrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zInterStore",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e Aggregate -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#zInterStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zInterStore",
          "normalized": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Inter Store",
          "signature": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zInterStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zInterStoreWeights",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [(ByteString, Double)] -\u003e Aggregate -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#zInterStoreWeights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zInterStoreWeights",
          "normalized": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Inter Store Weights",
          "signature": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zInterStoreWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRange",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#zRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRange",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Range",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRangeByScore",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Double -\u003e Double -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#zRangeByScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRangeByScore",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Range By Score",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRangeByScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRangeByScoreLimit",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Double -\u003e Double -\u003e Integer -\u003e Integer -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#zRangeByScoreLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRangeByScoreLimit",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Range By Score Limit",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRangeByScoreLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRangeByScoreWithScores",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Double -\u003e Double -\u003e m [(ByteString, Double)]",
          "source": "src/Database-Redis-Simple.html#zRangeByScoreWithScores",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRangeByScoreWithScores",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea[(ByteString,Double)]",
          "package": "hedis-simple",
          "partial": "Range By Score With Scores",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em[(ByteString,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRangeByScoreWithScores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRangeByScoreWithScoresLimit",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Double -\u003e Double -\u003e Integer -\u003e Integer -\u003e m [(ByteString, Double)]",
          "source": "src/Database-Redis-Simple.html#zRangeByScoreWithScoresLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRangeByScoreWithScoresLimit",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea[(ByteString,Double)]",
          "package": "hedis-simple",
          "partial": "Range By Score With Scores Limit",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em[(ByteString,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRangeByScoreWithScoresLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRangeWithScores",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m [(ByteString, Double)]",
          "source": "src/Database-Redis-Simple.html#zRangeWithScores",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRangeWithScores",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea[(ByteString,Double)]",
          "package": "hedis-simple",
          "partial": "Range With Scores",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em[(ByteString,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRangeWithScores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRank",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m (Maybe Integer)",
          "source": "src/Database-Redis-Simple.html#zRank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRank",
          "normalized": "ByteString-\u003eByteString-\u003ea(Maybe Integer)",
          "package": "hedis-simple",
          "partial": "Rank",
          "signature": "ByteString-\u003eByteString-\u003em(Maybe Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRem",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#zRem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRem",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Rem",
          "signature": "ByteString-\u003e[ByteString]-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRemRangeByRank",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#zRemRangeByRank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRemRangeByRank",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Rem Range By Rank",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRemRangeByRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRemRangeByScore",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Double -\u003e Double -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#zRemRangeByScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRemRangeByScore",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Rem Range By Score",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRemRangeByScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRevRange",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#zRevRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRevRange",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Rev Range",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRevRangeByScore",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Double -\u003e Double -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#zRevRangeByScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRevRangeByScore",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Rev Range By Score",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRangeByScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRevRangeByScoreLimit",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Double -\u003e Double -\u003e Integer -\u003e Integer -\u003e m [ByteString]",
          "source": "src/Database-Redis-Simple.html#zRevRangeByScoreLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRevRangeByScoreLimit",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea[ByteString]",
          "package": "hedis-simple",
          "partial": "Rev Range By Score Limit",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRangeByScoreLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRevRangeByScoreWithScores",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Double -\u003e Double -\u003e m [(ByteString, Double)]",
          "source": "src/Database-Redis-Simple.html#zRevRangeByScoreWithScores",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRevRangeByScoreWithScores",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea[(ByteString,Double)]",
          "package": "hedis-simple",
          "partial": "Rev Range By Score With Scores",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em[(ByteString,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRangeByScoreWithScores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRevRangeByScoreWithScoresLimit",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Double -\u003e Double -\u003e Integer -\u003e Integer -\u003e m [(ByteString, Double)]",
          "source": "src/Database-Redis-Simple.html#zRevRangeByScoreWithScoresLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRevRangeByScoreWithScoresLimit",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea[(ByteString,Double)]",
          "package": "hedis-simple",
          "partial": "Rev Range By Score With Scores Limit",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em[(ByteString,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRangeByScoreWithScoresLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRevRangeWithScores",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m [(ByteString, Double)]",
          "source": "src/Database-Redis-Simple.html#zRevRangeWithScores",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRevRangeWithScores",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea[(ByteString,Double)]",
          "package": "hedis-simple",
          "partial": "Rev Range With Scores",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em[(ByteString,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRangeWithScores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zRevRank",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m (Maybe Integer)",
          "source": "src/Database-Redis-Simple.html#zRevRank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zRevRank",
          "normalized": "ByteString-\u003eByteString-\u003ea(Maybe Integer)",
          "package": "hedis-simple",
          "partial": "Rev Rank",
          "signature": "ByteString-\u003eByteString-\u003em(Maybe Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zScore",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e ByteString -\u003e m (Maybe Double)",
          "source": "src/Database-Redis-Simple.html#zScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zScore",
          "normalized": "ByteString-\u003eByteString-\u003ea(Maybe Double)",
          "package": "hedis-simple",
          "partial": "Score",
          "signature": "ByteString-\u003eByteString-\u003em(Maybe Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zUnionStore",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [ByteString] -\u003e Aggregate -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#zUnionStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zUnionStore",
          "normalized": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Union Store",
          "signature": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zUnionStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "zUnionStoreWeights",
          "package": "hedis-simple",
          "signature": "ByteString -\u003e [(ByteString, Double)] -\u003e Aggregate -\u003e m Integer",
          "source": "src/Database-Redis-Simple.html#zUnionStoreWeights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "zUnionStoreWeights",
          "normalized": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003ea Integer",
          "package": "hedis-simple",
          "partial": "Union Store Weights",
          "signature": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zUnionStoreWeights"
      }
    }
  ]
]