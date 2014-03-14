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
        "word": "hedis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Redis",
          "package": "hedis",
          "source": "src/Database-Redis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Redis",
          "package": "hedis",
          "partial": "Redis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Aggregate",
          "package": "hedis",
          "source": "src/Database-Redis-ManualCommands.html#Aggregate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Aggregate",
          "package": "hedis",
          "partial": "Aggregate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Aggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation for connnecting to a Redis server.\n\u003c/p\u003e\u003cp\u003eIt is recommended to not use the \u003ccode\u003e\u003ca\u003eConnInfo\u003c/a\u003e\u003c/code\u003e data constructor directly.\n Instead use \u003ccode\u003e\u003ca\u003edefaultConnectInfo\u003c/a\u003e\u003c/code\u003e and update it with record syntax. For\n example to connect to a password protected Redis server running on localhost\n and listening to the default port:\n\u003c/p\u003e\u003cpre\u003e\n myConnectInfo :: ConnectInfo\n myConnectInfo = defaultConnectInfo {connectAuth = Just \"secret\"}\n\u003c/pre\u003e",
          "module": "Database.Redis",
          "name": "ConnectInfo",
          "package": "hedis",
          "source": "src/Database-Redis-Core.html#ConnectInfo",
          "type": "data"
        },
        "index": {
          "description": "Information for connnecting to Redis server It is recommended to not use the ConnInfo data constructor directly Instead use defaultConnectInfo and update it with record syntax For example to connect to password protected Redis server running on localhost and listening to the default port myConnectInfo ConnectInfo myConnectInfo defaultConnectInfo connectAuth Just secret",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "ConnectInfo",
          "package": "hedis",
          "partial": "Connect Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:ConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA threadsafe pool of network connections to a Redis server. Use the\n  \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e function to create one.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "Connection",
          "package": "hedis",
          "source": "src/Database-Redis-Core.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "threadsafe pool of network connections to Redis server Use the connect function to create one",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Connection",
          "package": "hedis",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "ConnectionLostException",
          "package": "hedis",
          "source": "src/Database-Redis-ProtocolPipelining.html#ConnectionLostException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "ConnectionLostException",
          "package": "hedis",
          "partial": "Connection Lost Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:ConnectionLostException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither a host name e.g., \u003ccode\u003e\"haskell.org\"\u003c/code\u003e or a numeric host\n address string consisting of a dotted decimal IPv4 address or an\n IPv6 address e.g., \u003ccode\u003e\"192.168.0.1\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "HostName",
          "package": "hedis",
          "type": "type"
        },
        "index": {
          "description": "Either host name e.g haskell.org or numeric host address string consisting of dotted decimal IPv4 address or an IPv6 address e.g",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "HostName",
          "package": "hedis",
          "partial": "Host Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:HostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Message",
          "package": "hedis",
          "source": "src/Database-Redis-PubSub.html#Message",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Message",
          "package": "hedis",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "MonadRedis",
          "package": "hedis",
          "source": "src/Database-Redis-Core.html#MonadRedis",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "MonadRedis",
          "package": "hedis",
          "partial": "Monad Redis",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:MonadRedis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "PortID",
          "package": "hedis",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "PortID",
          "package": "hedis",
          "partial": "Port ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:PortID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulates subscription changes. Use \u003ccode\u003e\u003ca\u003esubscribe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunsubscribe\u003c/a\u003e\u003c/code\u003e,\n  \u003ccode\u003e\u003ca\u003epsubscribe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epunsubscribe\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e to construct a value. Combine\n  values by using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e interface, i.e. \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "PubSub",
          "package": "hedis",
          "source": "src/Database-Redis-PubSub.html#PubSub",
          "type": "data"
        },
        "index": {
          "description": "Encapsulates subscription changes Use subscribe unsubscribe psubscribe punsubscribe or mempty to construct value Combine values by using the Monoid interface i.e mappend and mconcat",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "PubSub",
          "package": "hedis",
          "partial": "Pub Sub",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:PubSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e value represents the result of a command inside a transaction. It\n  is a proxy object for the \u003cem\u003eactual\u003c/em\u003e result, which will only be available\n  after returning from a \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e transaction.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e values are composable by utilizing the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e or\n  \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e interfaces.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "Queued",
          "package": "hedis",
          "source": "src/Database-Redis-Transactions.html#Queued",
          "type": "data"
        },
        "index": {
          "description": "Queued value represents the result of command inside transaction It is proxy object for the actual result which will only be available after returning from multiExec transaction Queued values are composable by utilizing the Functor Applicative or Monad interfaces",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Queued",
          "package": "hedis",
          "partial": "Queued",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Queued"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext for normal command execution, outside of transactions. Use\n  \u003ccode\u003e\u003ca\u003erunRedis\u003c/a\u003e\u003c/code\u003e to run actions of this type.\n\u003c/p\u003e\u003cp\u003eIn this context, each result is wrapped in an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e to account for the\n  possibility of Redis returning an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e reply.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "Redis",
          "package": "hedis",
          "source": "src/Database-Redis-Core.html#Redis",
          "type": "data"
        },
        "index": {
          "description": "Context for normal command execution outside of transactions Use runRedis to run actions of this type In this context each result is wrapped in an Either to account for the possibility of Redis returning an Error reply",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Redis",
          "package": "hedis",
          "partial": "Redis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Redis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class captures the following behaviour: In a context \u003ccode\u003em\u003c/code\u003e, a command\n  will return it's result wrapped in a \"container\" of type \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePlease refer to the Command Type Signatures section of this page for more\n  information.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "RedisCtx",
          "package": "hedis",
          "source": "src/Database-Redis-Core.html#RedisCtx",
          "type": "class"
        },
        "index": {
          "description": "This class captures the following behaviour In context command will return it result wrapped in container of type Please refer to the Command Type Signatures section of this page for more information",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "RedisCtx",
          "package": "hedis",
          "partial": "Redis Ctx",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:RedisCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "RedisResult",
          "package": "hedis",
          "source": "src/Database-Redis-Types.html#RedisResult",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "RedisResult",
          "package": "hedis",
          "partial": "Redis Result",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:RedisResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand-context inside of MULTI/EXEC transactions. Use \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e to run\n  actions of this type.\n\u003c/p\u003e\u003cp\u003eIn the \u003ccode\u003e\u003ca\u003eRedisTx\u003c/a\u003e\u003c/code\u003e context, all commands return a \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e value. It is a\n  proxy object for the \u003cem\u003eactual\u003c/em\u003e result, which will only be available after\n  finishing the transaction.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "RedisTx",
          "package": "hedis",
          "source": "src/Database-Redis-Transactions.html#RedisTx",
          "type": "data"
        },
        "index": {
          "description": "Command-context inside of MULTI EXEC transactions Use multiExec to run actions of this type In the RedisTx context all commands return Queued value It is proxy object for the actual result which will only be available after finishing the transaction",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "RedisTx",
          "package": "hedis",
          "partial": "Redis Tx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:RedisTx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "RedisType",
          "package": "hedis",
          "source": "src/Database-Redis-Types.html#RedisType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "RedisType",
          "package": "hedis",
          "partial": "Redis Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:RedisType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow-level representation of replies from the Redis server.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "Reply",
          "package": "hedis",
          "source": "src/Database-Redis-Protocol.html#Reply",
          "type": "data"
        },
        "index": {
          "description": "Low-level representation of replies from the Redis server",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Reply",
          "package": "hedis",
          "partial": "Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single entry from the slowlog.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "Slowlog",
          "package": "hedis",
          "source": "src/Database-Redis-ManualCommands.html#Slowlog",
          "type": "data"
        },
        "index": {
          "description": "single entry from the slowlog",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Slowlog",
          "package": "hedis",
          "partial": "Slowlog",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Slowlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for the \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e command.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "SortOpts",
          "package": "hedis",
          "source": "src/Database-Redis-ManualCommands.html#SortOpts",
          "type": "data"
        },
        "index": {
          "description": "Options for the sort command",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "SortOpts",
          "package": "hedis",
          "partial": "Sort Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:SortOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "SortOrder",
          "package": "hedis",
          "source": "src/Database-Redis-ManualCommands.html#SortOrder",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "SortOrder",
          "package": "hedis",
          "partial": "Sort Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:SortOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Status",
          "package": "hedis",
          "source": "src/Database-Redis-Types.html#Status",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Status",
          "package": "hedis",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of a \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e transaction.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "TxResult",
          "package": "hedis",
          "source": "src/Database-Redis-Transactions.html#TxResult",
          "type": "data"
        },
        "index": {
          "description": "Result of multiExec transaction",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "TxResult",
          "package": "hedis",
          "partial": "Tx Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:TxResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Asc",
          "package": "hedis",
          "signature": "Asc",
          "source": "src/Database-Redis-ManualCommands.html#SortOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Asc",
          "package": "hedis",
          "partial": "Asc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Asc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Bulk",
          "package": "hedis",
          "signature": "Bulk (Maybe ByteString)",
          "source": "src/Database-Redis-Protocol.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Bulk",
          "package": "hedis",
          "partial": "Bulk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Bulk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "ConnInfo",
          "package": "hedis",
          "signature": "ConnInfo",
          "source": "src/Database-Redis-Core.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "ConnInfo",
          "package": "hedis",
          "partial": "Conn Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:ConnInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "ConnectionLost",
          "package": "hedis",
          "signature": "ConnectionLost",
          "source": "src/Database-Redis-ProtocolPipelining.html#ConnectionLostException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "ConnectionLost",
          "package": "hedis",
          "partial": "Connection Lost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:ConnectionLost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Desc",
          "package": "hedis",
          "signature": "Desc",
          "source": "src/Database-Redis-ManualCommands.html#SortOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Desc",
          "package": "hedis",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Error",
          "package": "hedis",
          "signature": "Error ByteString",
          "source": "src/Database-Redis-Protocol.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Error",
          "package": "hedis",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Hash",
          "package": "hedis",
          "signature": "Hash",
          "source": "src/Database-Redis-Types.html#RedisType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Hash",
          "package": "hedis",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Integer",
          "package": "hedis",
          "signature": "Integer Integer",
          "source": "src/Database-Redis-Protocol.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Integer",
          "package": "hedis",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "List",
          "package": "hedis",
          "signature": "List",
          "source": "src/Database-Redis-Types.html#RedisType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "List",
          "package": "hedis",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Max",
          "package": "hedis",
          "signature": "Max",
          "source": "src/Database-Redis-ManualCommands.html#Aggregate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Max",
          "package": "hedis",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Message",
          "package": "hedis",
          "signature": "Message",
          "source": "src/Database-Redis-PubSub.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Message",
          "package": "hedis",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Min",
          "package": "hedis",
          "signature": "Min",
          "source": "src/Database-Redis-ManualCommands.html#Aggregate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Min",
          "package": "hedis",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "MultiBulk",
          "package": "hedis",
          "signature": "MultiBulk (Maybe [Reply])",
          "source": "src/Database-Redis-Protocol.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "MultiBulk",
          "normalized": "MultiBulk(Maybe[Reply])",
          "package": "hedis",
          "partial": "Multi Bulk",
          "signature": "MultiBulk(Maybe[Reply])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:MultiBulk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "None",
          "package": "hedis",
          "signature": "None",
          "source": "src/Database-Redis-Types.html#RedisType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "None",
          "package": "hedis",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Ok",
          "package": "hedis",
          "signature": "Ok",
          "source": "src/Database-Redis-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Ok",
          "package": "hedis",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "PMessage",
          "package": "hedis",
          "signature": "PMessage",
          "source": "src/Database-Redis-PubSub.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "PMessage",
          "package": "hedis",
          "partial": "PMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:PMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Pong",
          "package": "hedis",
          "signature": "Pong",
          "source": "src/Database-Redis-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Pong",
          "package": "hedis",
          "partial": "Pong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Pong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "PortNumber",
          "package": "hedis",
          "signature": "PortNumber PortNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "PortNumber",
          "package": "hedis",
          "partial": "Port Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:PortNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Service",
          "package": "hedis",
          "signature": "Service String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Service",
          "package": "hedis",
          "partial": "Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Service"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Set",
          "package": "hedis",
          "signature": "Set",
          "source": "src/Database-Redis-Types.html#RedisType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Set",
          "package": "hedis",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "SingleLine",
          "package": "hedis",
          "signature": "SingleLine ByteString",
          "source": "src/Database-Redis-Protocol.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "SingleLine",
          "package": "hedis",
          "partial": "Single Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:SingleLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Slowlog",
          "package": "hedis",
          "signature": "Slowlog",
          "source": "src/Database-Redis-ManualCommands.html#Slowlog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Slowlog",
          "package": "hedis",
          "partial": "Slowlog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Slowlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "SortOpts",
          "package": "hedis",
          "signature": "SortOpts",
          "source": "src/Database-Redis-ManualCommands.html#SortOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "SortOpts",
          "package": "hedis",
          "partial": "Sort Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:SortOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Status",
          "package": "hedis",
          "signature": "Status ByteString",
          "source": "src/Database-Redis-Types.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Status",
          "package": "hedis",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "String",
          "package": "hedis",
          "signature": "String",
          "source": "src/Database-Redis-Types.html#RedisType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "String",
          "package": "hedis",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Sum",
          "package": "hedis",
          "signature": "Sum",
          "source": "src/Database-Redis-ManualCommands.html#Aggregate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Sum",
          "package": "hedis",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransaction aborted due to an earlier \u003ccode\u003e\u003ca\u003ewatch\u003c/a\u003e\u003c/code\u003e command.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "TxAborted",
          "package": "hedis",
          "signature": "TxAborted",
          "source": "src/Database-Redis-Transactions.html#TxResult",
          "type": "function"
        },
        "index": {
          "description": "Transaction aborted due to an earlier watch command",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "TxAborted",
          "package": "hedis",
          "partial": "Tx Aborted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:TxAborted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt least one of the commands returned an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e reply.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "TxError",
          "package": "hedis",
          "signature": "TxError String",
          "source": "src/Database-Redis-Transactions.html#TxResult",
          "type": "function"
        },
        "index": {
          "description": "At least one of the commands returned an Error reply",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "TxError",
          "package": "hedis",
          "partial": "Tx Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:TxError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransaction completed successfully. The wrapped value corresponds to\n   the \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e value returned from the \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e argument action.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "TxSuccess",
          "package": "hedis",
          "signature": "TxSuccess a",
          "source": "src/Database-Redis-Transactions.html#TxResult",
          "type": "function"
        },
        "index": {
          "description": "Transaction completed successfully The wrapped value corresponds to the Queued value returned from the multiExec argument action",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "TxSuccess",
          "package": "hedis",
          "partial": "Tx Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:TxSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "UnixSocket",
          "package": "hedis",
          "signature": "UnixSocket String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "UnixSocket",
          "package": "hedis",
          "partial": "Unix Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:UnixSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "ZSet",
          "package": "hedis",
          "signature": "ZSet",
          "source": "src/Database-Redis-Types.html#RedisType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "ZSet",
          "package": "hedis",
          "partial": "ZSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:ZSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "append",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "append",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "auth",
          "package": "hedis",
          "signature": "ByteString-\u003e Redis (Either Reply Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "auth",
          "normalized": "ByteString-\u003eRedis(Either Reply Status)",
          "package": "hedis",
          "signature": "ByteString-\u003eRedis(Either Reply Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "bgrewriteaof",
          "package": "hedis",
          "signature": "m (f Status)",
          "source": "src/Database-Redis-Commands.html#bgrewriteaof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "bgrewriteaof",
          "package": "hedis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bgrewriteaof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "bgsave",
          "package": "hedis",
          "signature": "m (f Status)",
          "source": "src/Database-Redis-Commands.html#bgsave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "bgsave",
          "package": "hedis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bgsave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "bitcount",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "bitcount",
          "normalized": "ByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bitcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "bitcountRange",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "bitcountRange",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b Integer)",
          "package": "hedis",
          "partial": "Range",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bitcountRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "bitopAnd",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "bitopAnd",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "partial": "And",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bitopAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "bitopNot",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "bitopNot",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Integer)",
          "package": "hedis",
          "partial": "Not",
          "signature": "ByteString-\u003eByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bitopNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "bitopOr",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "bitopOr",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "partial": "Or",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bitopOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "bitopXor",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "bitopXor",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "partial": "Xor",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bitopXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "blpop",
          "package": "hedis",
          "signature": "[ByteString]-\u003e Integer-\u003e m (f (Maybe (ByteString, ByteString)))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "blpop",
          "normalized": "[ByteString]-\u003eInteger-\u003ea(b(Maybe(ByteString,ByteString)))",
          "package": "hedis",
          "signature": "[ByteString]-\u003eInteger-\u003em(f(Maybe(ByteString,ByteString)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:blpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "brpop",
          "package": "hedis",
          "signature": "[ByteString]-\u003e Integer-\u003e m (f (Maybe (ByteString, ByteString)))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "brpop",
          "normalized": "[ByteString]-\u003eInteger-\u003ea(b(Maybe(ByteString,ByteString)))",
          "package": "hedis",
          "signature": "[ByteString]-\u003eInteger-\u003em(f(Maybe(ByteString,ByteString)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:brpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "brpoplpush",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e Integer-\u003e m (f (Maybe ByteString))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "brpoplpush",
          "normalized": "ByteString-\u003eByteString-\u003eInteger-\u003ea(b(Maybe ByteString))",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003eInteger-\u003em(f(Maybe ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:brpoplpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "configGet",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f [(ByteString, ByteString)])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "configGet",
          "normalized": "ByteString-\u003ea(b[(ByteString,ByteString)])",
          "package": "hedis",
          "partial": "Get",
          "signature": "ByteString-\u003em(f[(ByteString,ByteString)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:configGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "configResetstat",
          "package": "hedis",
          "signature": "m (f Status)",
          "source": "src/Database-Redis-Commands.html#configResetstat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "configResetstat",
          "package": "hedis",
          "partial": "Resetstat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:configResetstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "configSet",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "configSet",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Status)",
          "package": "hedis",
          "partial": "Set",
          "signature": "ByteString-\u003eByteString-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:configSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e to a Redis server designated by the given\n  \u003ccode\u003e\u003ca\u003eConnectInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "connect",
          "package": "hedis",
          "signature": "ConnectInfo -\u003e IO Connection",
          "source": "src/Database-Redis-Core.html#connect",
          "type": "function"
        },
        "index": {
          "description": "Opens Connection to Redis server designated by the given ConnectInfo",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "connect",
          "normalized": "ConnectInfo-\u003eIO Connection",
          "package": "hedis",
          "signature": "ConnectInfo-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the server is protected by a password, set \u003ccode\u003e\u003ca\u003econnectAuth\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n   the password. Each connection will then authenticate by the \u003ccode\u003e\u003ca\u003eauth\u003c/a\u003e\u003c/code\u003e\n   command.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "connectAuth",
          "package": "hedis",
          "signature": "Maybe ByteString",
          "source": "src/Database-Redis-Core.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "description": "When the server is protected by password set connectAuth to Just the password Each connection will then authenticate by the auth command",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "connectAuth",
          "package": "hedis",
          "partial": "Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connectAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach connection will \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e the database with the given index.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "connectDatabase",
          "package": "hedis",
          "signature": "Integer",
          "source": "src/Database-Redis-Core.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "description": "Each connection will select the database with the given index",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "connectDatabase",
          "package": "hedis",
          "partial": "Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connectDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "connectHost",
          "package": "hedis",
          "signature": "HostName",
          "source": "src/Database-Redis-Core.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "connectHost",
          "package": "hedis",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connectHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of connections to keep open. The smallest acceptable\n   value is 1.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "connectMaxConnections",
          "package": "hedis",
          "signature": "Int",
          "source": "src/Database-Redis-Core.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of connections to keep open The smallest acceptable value is",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "connectMaxConnections",
          "package": "hedis",
          "partial": "Max Connections",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connectMaxConnections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAmount of time for which an unused connection is kept open. The\n   smallest acceptable value is 0.5 seconds. If the \u003ccode\u003etimeout\u003c/code\u003e value in\n   your redis.conf file is non-zero, it should be larger than\n   \u003ccode\u003e\u003ca\u003econnectMaxIdleTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "connectMaxIdleTime",
          "package": "hedis",
          "signature": "NominalDiffTime",
          "source": "src/Database-Redis-Core.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "description": "Amount of time for which an unused connection is kept open The smallest acceptable value is seconds If the timeout value in your redis.conf file is non-zero it should be larger than connectMaxIdleTime",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "connectMaxIdleTime",
          "package": "hedis",
          "partial": "Max Idle Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connectMaxIdleTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "connectPort",
          "package": "hedis",
          "signature": "PortID",
          "source": "src/Database-Redis-Core.html#ConnectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "connectPort",
          "package": "hedis",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connectPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "dbsize",
          "package": "hedis",
          "signature": "m (f Integer)",
          "source": "src/Database-Redis-Commands.html#dbsize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "dbsize",
          "package": "hedis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:dbsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "debugObject",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "debugObject",
          "normalized": "ByteString-\u003ea(b ByteString)",
          "package": "hedis",
          "partial": "Object",
          "signature": "ByteString-\u003em(f ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:debugObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "decode",
          "package": "hedis",
          "signature": "Reply -\u003e Either Reply a",
          "source": "src/Database-Redis-Types.html#decode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "decode",
          "normalized": "Reply-\u003eEither Reply a",
          "package": "hedis",
          "signature": "Reply-\u003eEither Reply a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "decr",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "decr",
          "normalized": "ByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:decr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "decrby",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "decrby",
          "normalized": "ByteString-\u003eInteger-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:decrby"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault information for connecting:\n\u003c/p\u003e\u003cpre\u003e\n  connectHost           = \"localhost\"\n  connectPort           = PortNumber 6379 -- Redis default port\n  connectAuth           = Nothing         -- No password\n  connectDatabase       = 0               -- SELECT database 0\n  connectMaxConnections = 50              -- Up to 50 connections\n  connectMaxIdleTime    = 30              -- Keep open for 30 seconds\n\u003c/pre\u003e",
          "module": "Database.Redis",
          "name": "defaultConnectInfo",
          "package": "hedis",
          "signature": "ConnectInfo",
          "source": "src/Database-Redis-Core.html#defaultConnectInfo",
          "type": "function"
        },
        "index": {
          "description": "Default information for connecting connectHost localhost connectPort PortNumber Redis default port connectAuth Nothing No password connectDatabase SELECT database connectMaxConnections Up to connections connectMaxIdleTime Keep open for seconds",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "defaultConnectInfo",
          "package": "hedis",
          "partial": "Connect Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:defaultConnectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedis default \u003ccode\u003e\u003ca\u003eSortOpts\u003c/a\u003e\u003c/code\u003e. Equivalent to omitting all optional parameters.\n\u003c/p\u003e\u003cpre\u003e\n SortOpts\n     { sortBy    = Nothing -- omit the BY option\n     , sortLimit = (0,-1)  -- return entire collection\n     , sortGet   = []      -- omit the GET option\n     , sortOrder = Asc     -- sort in ascending order\n     , sortAlpha = False   -- sort numerically, not lexicographically\n     }\n\u003c/pre\u003e",
          "module": "Database.Redis",
          "name": "defaultSortOpts",
          "package": "hedis",
          "signature": "SortOpts",
          "source": "src/Database-Redis-ManualCommands.html#defaultSortOpts",
          "type": "function"
        },
        "index": {
          "description": "Redis default SortOpts Equivalent to omitting all optional parameters SortOpts sortBy Nothing omit the BY option sortLimit return entire collection sortGet omit the GET option sortOrder Asc sort in ascending order sortAlpha False sort numerically not lexicographically",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "defaultSortOpts",
          "package": "hedis",
          "partial": "Sort Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:defaultSortOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "del",
          "package": "hedis",
          "signature": "[ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "del",
          "normalized": "[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:del"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "dump",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "dump",
          "normalized": "ByteString-\u003ea(b ByteString)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:dump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "echo",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "echo",
          "normalized": "ByteString-\u003ea(b ByteString)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "eval",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e [ByteString]-\u003e m (f a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "eval",
          "normalized": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003ea(b c)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003em(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "evalsha",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e [ByteString]-\u003e m (f a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "evalsha",
          "normalized": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003ea(b c)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003em(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:evalsha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "exists",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "exists",
          "normalized": "ByteString-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "expire",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "expire",
          "normalized": "ByteString-\u003eInteger-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:expire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "expireat",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "expireat",
          "normalized": "ByteString-\u003eInteger-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:expireat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "flushall",
          "package": "hedis",
          "signature": "m (f Status)",
          "source": "src/Database-Redis-Commands.html#flushall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "flushall",
          "package": "hedis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:flushall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "flushdb",
          "package": "hedis",
          "signature": "m (f Status)",
          "source": "src/Database-Redis-Commands.html#flushdb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "flushdb",
          "package": "hedis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:flushdb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "get",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f (Maybe ByteString))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "get",
          "normalized": "ByteString-\u003ea(b(Maybe ByteString))",
          "package": "hedis",
          "signature": "ByteString-\u003em(f(Maybe ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "getType",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f RedisType)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "getType",
          "normalized": "ByteString-\u003ea(b RedisType)",
          "package": "hedis",
          "partial": "Type",
          "signature": "ByteString-\u003em(f RedisType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:getType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "getbit",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "getbit",
          "normalized": "ByteString-\u003eInteger-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:getbit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "getrange",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "getrange",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b ByteString)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:getrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "getset",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f (Maybe ByteString))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "getset",
          "normalized": "ByteString-\u003eByteString-\u003ea(b(Maybe ByteString))",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f(Maybe ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:getset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hdel",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hdel",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hdel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hexists",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hexists",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hexists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hget",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f (Maybe ByteString))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hget",
          "normalized": "ByteString-\u003eByteString-\u003ea(b(Maybe ByteString))",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f(Maybe ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hgetall",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f [(ByteString, ByteString)])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hgetall",
          "normalized": "ByteString-\u003ea(b[(ByteString,ByteString)])",
          "package": "hedis",
          "signature": "ByteString-\u003em(f[(ByteString,ByteString)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hgetall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hincrby",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e Integer-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hincrby",
          "normalized": "ByteString-\u003eByteString-\u003eInteger-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003eInteger-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hincrby"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hincrbyfloat",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e Double-\u003e m (f Double)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hincrbyfloat",
          "normalized": "ByteString-\u003eByteString-\u003eDouble-\u003ea(b Double)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003eDouble-\u003em(f Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hincrbyfloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hkeys",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hkeys",
          "normalized": "ByteString-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "ByteString-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hkeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hlen",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hlen",
          "normalized": "ByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hmget",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f [Maybe ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hmget",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b[Maybe ByteString])",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f[Maybe ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hmget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hmset",
          "package": "hedis",
          "signature": "ByteString-\u003e [(ByteString, ByteString)]-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hmset",
          "normalized": "ByteString-\u003e[(ByteString,ByteString)]-\u003ea(b Status)",
          "package": "hedis",
          "signature": "ByteString-\u003e[(ByteString,ByteString)]-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hmset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hset",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hset",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hsetnx",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hsetnx",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hsetnx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "hvals",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "hvals",
          "normalized": "ByteString-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "ByteString-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hvals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "incr",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "incr",
          "normalized": "ByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:incr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "incrby",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "incrby",
          "normalized": "ByteString-\u003eInteger-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:incrby"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "incrbyfloat",
          "package": "hedis",
          "signature": "ByteString-\u003e Double-\u003e m (f Double)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "incrbyfloat",
          "normalized": "ByteString-\u003eDouble-\u003ea(b Double)",
          "package": "hedis",
          "signature": "ByteString-\u003eDouble-\u003em(f Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:incrbyfloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "info",
          "package": "hedis",
          "signature": "m (f ByteString)",
          "source": "src/Database-Redis-Commands.html#info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "info",
          "package": "hedis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "keys",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "keys",
          "normalized": "ByteString-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "ByteString-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "lastsave",
          "package": "hedis",
          "signature": "m (f Integer)",
          "source": "src/Database-Redis-Commands.html#lastsave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "lastsave",
          "package": "hedis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lastsave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "lindex",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e m (f (Maybe ByteString))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "lindex",
          "normalized": "ByteString-\u003eInteger-\u003ea(b(Maybe ByteString))",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003em(f(Maybe ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "linsertAfter",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "linsertAfter",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea(b Integer)",
          "package": "hedis",
          "partial": "After",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:linsertAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "linsertBefore",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "linsertBefore",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea(b Integer)",
          "package": "hedis",
          "partial": "Before",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:linsertBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "llen",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "llen",
          "normalized": "ByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:llen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "lpop",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f (Maybe ByteString))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "lpop",
          "normalized": "ByteString-\u003ea(b(Maybe ByteString))",
          "package": "hedis",
          "signature": "ByteString-\u003em(f(Maybe ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "lpush",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "lpush",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "lpushx",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "lpushx",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lpushx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "lrange",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "lrange",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "lrem",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "lrem",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lrem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "lset",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "lset",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Status)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "ltrim",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "ltrim",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b Status)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:ltrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "mget",
          "package": "hedis",
          "signature": "[ByteString]-\u003e m (f [Maybe ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "mget",
          "normalized": "[ByteString]-\u003ea(b[Maybe ByteString])",
          "package": "hedis",
          "signature": "[ByteString]-\u003em(f[Maybe ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:mget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "migrate",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e Integer-\u003e Integer-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "migrate",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eInteger-\u003eInteger-\u003ea(b Status)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eInteger-\u003eInteger-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:migrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "move",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "move",
          "normalized": "ByteString-\u003eInteger-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "mset",
          "package": "hedis",
          "signature": "[(ByteString, ByteString)]-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "mset",
          "normalized": "[(ByteString,ByteString)]-\u003ea(b Status)",
          "package": "hedis",
          "signature": "[(ByteString,ByteString)]-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:mset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "msetnx",
          "package": "hedis",
          "signature": "[(ByteString, ByteString)]-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "msetnx",
          "normalized": "[(ByteString,ByteString)]-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "[(ByteString,ByteString)]-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:msetnx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "msgChannel",
          "package": "hedis",
          "signature": "ByteString",
          "source": "src/Database-Redis-PubSub.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "msgChannel",
          "package": "hedis",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:msgChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "msgMessage",
          "package": "hedis",
          "signature": "ByteString",
          "source": "src/Database-Redis-PubSub.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "msgMessage",
          "package": "hedis",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:msgMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "msgPattern",
          "package": "hedis",
          "signature": "ByteString",
          "source": "src/Database-Redis-PubSub.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "msgPattern",
          "package": "hedis",
          "partial": "Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:msgPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun commands inside a transaction. For documentation on the semantics of\n  Redis transaction see \u003ca\u003ehttp://redis.io/topics/transactions\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eInside the transaction block, command functions return their result wrapped\n  in a \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e result is a proxy object for the actual\n  command's result, which will only be available after \u003ccode\u003eEXEC\u003c/code\u003eing the\n  transaction.\n\u003c/p\u003e\u003cp\u003eExample usage (note how \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e 's \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance is used to\n  combine the two individual results):\n\u003c/p\u003e\u003cpre\u003e\n  runRedis conn $ do\n      set \"hello\" \"hello\"\n      set \"world\" \"world\"\n      helloworld \u003c- \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e $ do\n          hello \u003c- get \"hello\"\n          world \u003c- get \"world\"\n          return $ (,) \u003c$\u003e hello \u003c*\u003e world\n      liftIO (print helloworld)\n\u003c/pre\u003e",
          "module": "Database.Redis",
          "name": "multiExec",
          "package": "hedis",
          "signature": "RedisTx (Queued a) -\u003e Redis (TxResult a)",
          "source": "src/Database-Redis-Transactions.html#multiExec",
          "type": "function"
        },
        "index": {
          "description": "Run commands inside transaction For documentation on the semantics of Redis transaction see http redis.io topics transactions Inside the transaction block command functions return their result wrapped in Queued The Queued result is proxy object for the actual command result which will only be available after EXEC ing the transaction Example usage note how Queued Applicative instance is used to combine the two individual results runRedis conn do set hello hello set world world helloworld multiExec do hello get hello world get world return hello world liftIO print helloworld",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "multiExec",
          "normalized": "RedisTx(Queued a)-\u003eRedis(TxResult a)",
          "package": "hedis",
          "partial": "Exec",
          "signature": "RedisTx(Queued a)-\u003eRedis(TxResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:multiExec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "objectEncoding",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "objectEncoding",
          "normalized": "ByteString-\u003ea(b ByteString)",
          "package": "hedis",
          "partial": "Encoding",
          "signature": "ByteString-\u003em(f ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:objectEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "objectIdletime",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "objectIdletime",
          "normalized": "ByteString-\u003ea(b Integer)",
          "package": "hedis",
          "partial": "Idletime",
          "signature": "ByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:objectIdletime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "objectRefcount",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "objectRefcount",
          "normalized": "ByteString-\u003ea(b Integer)",
          "package": "hedis",
          "partial": "Refcount",
          "signature": "ByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:objectRefcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "persist",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "persist",
          "normalized": "ByteString-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:persist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "pexpire",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "pexpire",
          "normalized": "ByteString-\u003eInteger-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:pexpire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "pexpireat",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "pexpireat",
          "normalized": "ByteString-\u003eInteger-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:pexpireat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "ping",
          "package": "hedis",
          "signature": "m (f Status)",
          "source": "src/Database-Redis-Commands.html#ping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "ping",
          "package": "hedis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "psetex",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "psetex",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Status)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:psetex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListen for messages published to channels matching the given patterns \n  (\u003ca\u003ehttp://redis.io/commands/psubscribe\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "psubscribe",
          "package": "hedis",
          "signature": "[ByteString]-\u003e PubSub",
          "type": "function"
        },
        "index": {
          "description": "Listen for messages published to channels matching the given patterns http redis.io commands psubscribe",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "psubscribe",
          "normalized": "[ByteString]-\u003ePubSub",
          "package": "hedis",
          "signature": "[ByteString]-\u003ePubSub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:psubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "pttl",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "pttl",
          "normalized": "ByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:pttl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListens to published messages on subscribed channels and channels matching\n  the subscribed patterns. For documentation on the semantics of Redis\n  Pub/Sub see \u003ca\u003ehttp://redis.io/topics/pubsub\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe given callback function is called for each received message. \n  Subscription changes are triggered by the returned \u003ccode\u003e\u003ca\u003ePubSub\u003c/a\u003e\u003c/code\u003e. To keep\n  subscriptions unchanged, the callback can return \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample: Subscribe to the \"news\" channel indefinitely.\n\u003c/p\u003e\u003cpre\u003e\n  pubSub (subscribe [\"news\"]) $ \\msg -\u003e do\n      putStrLn $ \"Message from \" ++ show (msgChannel msg)\n      return mempty\n\u003c/pre\u003e\u003cp\u003eExample: Receive a single message from the \"chat\" channel.\n\u003c/p\u003e\u003cpre\u003e\n  pubSub (subscribe [\"chat\"]) $ \\msg -\u003e do\n      putStrLn $ \"Message from \" ++ show (msgChannel msg)\n      return $ unsubscribe [\"chat\"]\n\u003c/pre\u003e",
          "module": "Database.Redis",
          "name": "pubSub",
          "package": "hedis",
          "signature": "PubSub-\u003e (Message -\u003e IO PubSub)-\u003e Redis ()",
          "type": "function"
        },
        "index": {
          "description": "Listens to published messages on subscribed channels and channels matching the subscribed patterns For documentation on the semantics of Redis Pub Sub see http redis.io topics pubsub The given callback function is called for each received message Subscription changes are triggered by the returned PubSub To keep subscriptions unchanged the callback can return mempty Example Subscribe to the news channel indefinitely pubSub subscribe news msg do putStrLn Message from show msgChannel msg return mempty Example Receive single message from the chat channel pubSub subscribe chat msg do putStrLn Message from show msgChannel msg return unsubscribe chat",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "pubSub",
          "normalized": "PubSub-\u003e(Message-\u003eIO PubSub)-\u003eRedis()",
          "package": "hedis",
          "partial": "Sub",
          "signature": "PubSub-\u003e(Message-\u003eIO PubSub)-\u003eRedis()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:pubSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePost a message to a channel (\u003ca\u003ehttp://redis.io/commands/publish\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "publish",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "description": "Post message to channel http redis.io commands publish",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "publish",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:publish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop listening for messages posted to channels matching the given patterns \n  (\u003ca\u003ehttp://redis.io/commands/punsubscribe\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "punsubscribe",
          "package": "hedis",
          "signature": "[ByteString]-\u003e PubSub",
          "type": "function"
        },
        "index": {
          "description": "Stop listening for messages posted to channels matching the given patterns http redis.io commands punsubscribe",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "punsubscribe",
          "normalized": "[ByteString]-\u003ePubSub",
          "package": "hedis",
          "signature": "[ByteString]-\u003ePubSub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:punsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "quit",
          "package": "hedis",
          "signature": "m (f Status)",
          "source": "src/Database-Redis-Commands.html#quit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "quit",
          "package": "hedis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "randomkey",
          "package": "hedis",
          "signature": "m (f (Maybe ByteString))",
          "source": "src/Database-Redis-Commands.html#randomkey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "randomkey",
          "package": "hedis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:randomkey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "rename",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "rename",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Status)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "renamenx",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "renamenx",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:renamenx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "restore",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "restore",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Status)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "rpop",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f (Maybe ByteString))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "rpop",
          "normalized": "ByteString-\u003ea(b(Maybe ByteString))",
          "package": "hedis",
          "signature": "ByteString-\u003em(f(Maybe ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:rpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "rpoplpush",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f (Maybe ByteString))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "rpoplpush",
          "normalized": "ByteString-\u003eByteString-\u003ea(b(Maybe ByteString))",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f(Maybe ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:rpoplpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "rpush",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "rpush",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:rpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "rpushx",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "rpushx",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:rpushx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteract with a Redis datastore specified by the given \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEach call of \u003ccode\u003e\u003ca\u003erunRedis\u003c/a\u003e\u003c/code\u003e takes a network connection from the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e\n  pool and runs the given \u003ccode\u003e\u003ca\u003eRedis\u003c/a\u003e\u003c/code\u003e action. Calls to \u003ccode\u003e\u003ca\u003erunRedis\u003c/a\u003e\u003c/code\u003e may thus block\n  while all connections from the pool are in use.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "runRedis",
          "package": "hedis",
          "signature": "Connection -\u003e Redis a -\u003e IO a",
          "source": "src/Database-Redis-Core.html#runRedis",
          "type": "function"
        },
        "index": {
          "description": "Interact with Redis datastore specified by the given Connection Each call of runRedis takes network connection from the Connection pool and runs the given Redis action Calls to runRedis may thus block while all connections from the pool are in use",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "runRedis",
          "normalized": "Connection-\u003eRedis a-\u003eIO a",
          "package": "hedis",
          "partial": "Redis",
          "signature": "Connection-\u003eRedis a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:runRedis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sadd",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sadd",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "save",
          "package": "hedis",
          "signature": "m (f Status)",
          "source": "src/Database-Redis-Commands.html#save",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "save",
          "package": "hedis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "scard",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "scard",
          "normalized": "ByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:scard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "scriptExists",
          "package": "hedis",
          "signature": "[ByteString]-\u003e m (f [Bool])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "scriptExists",
          "normalized": "[ByteString]-\u003ea(b[Bool])",
          "package": "hedis",
          "partial": "Exists",
          "signature": "[ByteString]-\u003em(f[Bool])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:scriptExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "scriptFlush",
          "package": "hedis",
          "signature": "m (f Status)",
          "source": "src/Database-Redis-Commands.html#scriptFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "scriptFlush",
          "package": "hedis",
          "partial": "Flush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:scriptFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "scriptKill",
          "package": "hedis",
          "signature": "m (f Status)",
          "source": "src/Database-Redis-Commands.html#scriptKill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "scriptKill",
          "package": "hedis",
          "partial": "Kill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:scriptKill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "scriptLoad",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "scriptLoad",
          "normalized": "ByteString-\u003ea(b ByteString)",
          "package": "hedis",
          "partial": "Load",
          "signature": "ByteString-\u003em(f ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:scriptLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sdiff",
          "package": "hedis",
          "signature": "[ByteString]-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sdiff",
          "normalized": "[ByteString]-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "[ByteString]-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sdiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sdiffstore",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sdiffstore",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sdiffstore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "select",
          "package": "hedis",
          "signature": "Integer-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "select",
          "normalized": "Integer-\u003ea(b Status)",
          "package": "hedis",
          "signature": "Integer-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esendRequest\u003c/a\u003e\u003c/code\u003e can be used to implement commands from experimental\n  versions of Redis. An example of how to implement a command is given\n  below.\n\u003c/p\u003e\u003cpre\u003e\n -- |Redis DEBUG OBJECT command\n debugObject :: ByteString -\u003e \u003ccode\u003e\u003ca\u003eRedis\u003c/a\u003e\u003c/code\u003e (Either \u003ccode\u003e\u003ca\u003eReply\u003c/a\u003e\u003c/code\u003e ByteString)\n debugObject key = \u003ccode\u003e\u003ca\u003esendRequest\u003c/a\u003e\u003c/code\u003e [\"DEBUG\", \"OBJECT\", key]\n\u003c/pre\u003e",
          "module": "Database.Redis",
          "name": "sendRequest",
          "package": "hedis",
          "signature": "[ByteString] -\u003e m (f a)",
          "source": "src/Database-Redis-Core.html#sendRequest",
          "type": "function"
        },
        "index": {
          "description": "sendRequest can be used to implement commands from experimental versions of Redis An example of how to implement command is given below Redis DEBUG OBJECT command debugObject ByteString Redis Either Reply ByteString debugObject key sendRequest DEBUG OBJECT key",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sendRequest",
          "normalized": "[ByteString]-\u003ea(b c)",
          "package": "hedis",
          "partial": "Request",
          "signature": "[ByteString]-\u003em(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sendRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "set",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "set",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Status)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "setbit",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "setbit",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:setbit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "setex",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "setex",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Status)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:setex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "setnx",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "setnx",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:setnx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "setrange",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "setrange",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:setrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sinter",
          "package": "hedis",
          "signature": "[ByteString]-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sinter",
          "normalized": "[ByteString]-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "[ByteString]-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sinterstore",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sinterstore",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sinterstore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sismember",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sismember",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sismember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "slaveof",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f Status)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "slaveof",
          "normalized": "ByteString-\u003eByteString-\u003ea(b Status)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slaveof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe command and it's arguments.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "slowlogCmd",
          "package": "hedis",
          "signature": "[ByteString]",
          "source": "src/Database-Redis-ManualCommands.html#Slowlog",
          "type": "function"
        },
        "index": {
          "description": "The command and it arguments",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "slowlogCmd",
          "normalized": "[ByteString]",
          "package": "hedis",
          "partial": "Cmd",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "slowlogGet",
          "package": "hedis",
          "signature": "Integer-\u003e m (f [Slowlog])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "slowlogGet",
          "normalized": "Integer-\u003ea(b[Slowlog])",
          "package": "hedis",
          "partial": "Get",
          "signature": "Integer-\u003em(f[Slowlog])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA unique progressive identifier for every slow log entry.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "slowlogId",
          "package": "hedis",
          "signature": "Integer",
          "source": "src/Database-Redis-ManualCommands.html#Slowlog",
          "type": "function"
        },
        "index": {
          "description": "unique progressive identifier for every slow log entry",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "slowlogId",
          "package": "hedis",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "slowlogLen",
          "package": "hedis",
          "signature": "m (f Integer)",
          "source": "src/Database-Redis-ManualCommands.html#slowlogLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "slowlogLen",
          "package": "hedis",
          "partial": "Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe amount of time needed for its execution, in microseconds.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "slowlogMicros",
          "package": "hedis",
          "signature": "Integer",
          "source": "src/Database-Redis-ManualCommands.html#Slowlog",
          "type": "function"
        },
        "index": {
          "description": "The amount of time needed for its execution in microseconds",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "slowlogMicros",
          "package": "hedis",
          "partial": "Micros",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogMicros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "slowlogReset",
          "package": "hedis",
          "signature": "m (f Status)",
          "source": "src/Database-Redis-ManualCommands.html#slowlogReset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "slowlogReset",
          "package": "hedis",
          "partial": "Reset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unix timestamp at which the logged command was processed.\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "slowlogTimestamp",
          "package": "hedis",
          "signature": "Integer",
          "source": "src/Database-Redis-ManualCommands.html#Slowlog",
          "type": "function"
        },
        "index": {
          "description": "The unix timestamp at which the logged command was processed",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "slowlogTimestamp",
          "package": "hedis",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "smembers",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "smembers",
          "normalized": "ByteString-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "ByteString-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:smembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "smove",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e m (f Bool)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "smove",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea(b Bool)",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em(f Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:smove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sort",
          "package": "hedis",
          "signature": "ByteString-\u003e SortOpts-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sort",
          "normalized": "ByteString-\u003eSortOpts-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "ByteString-\u003eSortOpts-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sortAlpha",
          "package": "hedis",
          "signature": "Bool",
          "source": "src/Database-Redis-ManualCommands.html#SortOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sortAlpha",
          "package": "hedis",
          "partial": "Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sortAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sortBy",
          "package": "hedis",
          "signature": "Maybe ByteString",
          "source": "src/Database-Redis-ManualCommands.html#SortOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sortBy",
          "package": "hedis",
          "partial": "By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sortGet",
          "package": "hedis",
          "signature": "[ByteString]",
          "source": "src/Database-Redis-ManualCommands.html#SortOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sortGet",
          "normalized": "[ByteString]",
          "package": "hedis",
          "partial": "Get",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sortGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sortLimit",
          "package": "hedis",
          "signature": "(Integer, Integer)",
          "source": "src/Database-Redis-ManualCommands.html#SortOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sortLimit",
          "normalized": "(Integer,Integer)",
          "package": "hedis",
          "partial": "Limit",
          "signature": "(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sortLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sortOrder",
          "package": "hedis",
          "signature": "SortOrder",
          "source": "src/Database-Redis-ManualCommands.html#SortOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sortOrder",
          "package": "hedis",
          "partial": "Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sortOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sortStore",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e SortOpts-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sortStore",
          "normalized": "ByteString-\u003eByteString-\u003eSortOpts-\u003ea(b Integer)",
          "package": "hedis",
          "partial": "Store",
          "signature": "ByteString-\u003eByteString-\u003eSortOpts-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sortStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "spop",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f (Maybe ByteString))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "spop",
          "normalized": "ByteString-\u003ea(b(Maybe ByteString))",
          "package": "hedis",
          "signature": "ByteString-\u003em(f(Maybe ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:spop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "srandmember",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f (Maybe ByteString))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "srandmember",
          "normalized": "ByteString-\u003ea(b(Maybe ByteString))",
          "package": "hedis",
          "signature": "ByteString-\u003em(f(Maybe ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:srandmember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "srem",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "srem",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:srem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "strlen",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "strlen",
          "normalized": "ByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:strlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListen for messages published to the given channels\n  (\u003ca\u003ehttp://redis.io/commands/subscribe\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "subscribe",
          "package": "hedis",
          "signature": "[ByteString]-\u003e PubSub",
          "type": "function"
        },
        "index": {
          "description": "Listen for messages published to the given channels http redis.io commands subscribe",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "subscribe",
          "normalized": "[ByteString]-\u003ePubSub",
          "package": "hedis",
          "signature": "[ByteString]-\u003ePubSub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:subscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sunion",
          "package": "hedis",
          "signature": "[ByteString]-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sunion",
          "normalized": "[ByteString]-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "[ByteString]-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sunion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "sunionstore",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "sunionstore",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sunionstore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "time",
          "package": "hedis",
          "signature": "m (f (Integer, Integer))",
          "source": "src/Database-Redis-Commands.html#time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "time",
          "normalized": "a(b(Integer,Integer))",
          "package": "hedis",
          "signature": "m(f(Integer,Integer))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "ttl",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "ttl",
          "normalized": "ByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:ttl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop listening for messages posted to the given channels\n  (\u003ca\u003ehttp://redis.io/commands/unsubscribe\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "unsubscribe",
          "package": "hedis",
          "signature": "[ByteString]-\u003e PubSub",
          "type": "function"
        },
        "index": {
          "description": "Stop listening for messages posted to the given channels http redis.io commands unsubscribe",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "unsubscribe",
          "normalized": "[ByteString]-\u003ePubSub",
          "package": "hedis",
          "signature": "[ByteString]-\u003ePubSub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:unsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForget about all watched keys (\u003ca\u003ehttp://redis.io/commands/unwatch\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "unwatch",
          "package": "hedis",
          "signature": "Redis (Either Reply Status)",
          "source": "src/Database-Redis-Transactions.html#unwatch",
          "type": "function"
        },
        "index": {
          "description": "Forget about all watched keys http redis.io commands unwatch",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "unwatch",
          "package": "hedis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:unwatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWatch the given keys to determine execution of the MULTI/EXEC block\n  (\u003ca\u003ehttp://redis.io/commands/watch\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Database.Redis",
          "name": "watch",
          "package": "hedis",
          "signature": "[ByteString]-\u003e Redis (Either Reply Status)",
          "type": "function"
        },
        "index": {
          "description": "Watch the given keys to determine execution of the MULTI EXEC block http redis.io commands watch",
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "watch",
          "normalized": "[ByteString]-\u003eRedis(Either Reply Status)",
          "package": "hedis",
          "signature": "[ByteString]-\u003eRedis(Either Reply Status)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:watch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zadd",
          "package": "hedis",
          "signature": "ByteString-\u003e [(Double, ByteString)]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zadd",
          "normalized": "ByteString-\u003e[(Double,ByteString)]-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003e[(Double,ByteString)]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zcard",
          "package": "hedis",
          "signature": "ByteString-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zcard",
          "normalized": "ByteString-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zcard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zcount",
          "package": "hedis",
          "signature": "ByteString-\u003e Double-\u003e Double-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zcount",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zincrby",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Double)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zincrby",
          "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Double)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zincrby"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zinterstore",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e Aggregate-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zinterstore",
          "normalized": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zinterstore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zinterstoreWeights",
          "package": "hedis",
          "signature": "ByteString-\u003e [(ByteString, Double)]-\u003e Aggregate-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zinterstoreWeights",
          "normalized": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003ea(b Integer)",
          "package": "hedis",
          "partial": "Weights",
          "signature": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zinterstoreWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrange",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrange",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrangeWithscores",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f [(ByteString, Double)])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrangeWithscores",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b[(ByteString,Double)])",
          "package": "hedis",
          "partial": "Withscores",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f[(ByteString,Double)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrangeWithscores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrangebyscore",
          "package": "hedis",
          "signature": "ByteString-\u003e Double-\u003e Double-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrangebyscore",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrangebyscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrangebyscoreLimit",
          "package": "hedis",
          "signature": "ByteString-\u003e Double-\u003e Double-\u003e Integer-\u003e Integer-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrangebyscoreLimit",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea(b[ByteString])",
          "package": "hedis",
          "partial": "Limit",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrangebyscoreLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrangebyscoreWithscores",
          "package": "hedis",
          "signature": "ByteString-\u003e Double-\u003e Double-\u003e m (f [(ByteString, Double)])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrangebyscoreWithscores",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea(b[(ByteString,Double)])",
          "package": "hedis",
          "partial": "Withscores",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em(f[(ByteString,Double)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrangebyscoreWithscores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrangebyscoreWithscoresLimit",
          "package": "hedis",
          "signature": "ByteString-\u003e Double-\u003e Double-\u003e Integer-\u003e Integer-\u003e m (f [(ByteString, Double)])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrangebyscoreWithscoresLimit",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea(b[(ByteString,Double)])",
          "package": "hedis",
          "partial": "Withscores Limit",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em(f[(ByteString,Double)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrangebyscoreWithscoresLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrank",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f (Maybe Integer))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrank",
          "normalized": "ByteString-\u003eByteString-\u003ea(b(Maybe Integer))",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f(Maybe Integer))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrem",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrem",
          "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zremrangebyrank",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zremrangebyrank",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zremrangebyrank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zremrangebyscore",
          "package": "hedis",
          "signature": "ByteString-\u003e Double-\u003e Double-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zremrangebyscore",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zremrangebyscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrevrange",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrevrange",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrevrangeWithscores",
          "package": "hedis",
          "signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f [(ByteString, Double)])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrevrangeWithscores",
          "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b[(ByteString,Double)])",
          "package": "hedis",
          "partial": "Withscores",
          "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f[(ByteString,Double)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrangeWithscores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrevrangebyscore",
          "package": "hedis",
          "signature": "ByteString-\u003e Double-\u003e Double-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrevrangebyscore",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea(b[ByteString])",
          "package": "hedis",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrangebyscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrevrangebyscoreLimit",
          "package": "hedis",
          "signature": "ByteString-\u003e Double-\u003e Double-\u003e Integer-\u003e Integer-\u003e m (f [ByteString])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrevrangebyscoreLimit",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea(b[ByteString])",
          "package": "hedis",
          "partial": "Limit",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em(f[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrangebyscoreLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrevrangebyscoreWithscores",
          "package": "hedis",
          "signature": "ByteString-\u003e Double-\u003e Double-\u003e m (f [(ByteString, Double)])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrevrangebyscoreWithscores",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea(b[(ByteString,Double)])",
          "package": "hedis",
          "partial": "Withscores",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em(f[(ByteString,Double)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrangebyscoreWithscores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrevrangebyscoreWithscoresLimit",
          "package": "hedis",
          "signature": "ByteString-\u003e Double-\u003e Double-\u003e Integer-\u003e Integer-\u003e m (f [(ByteString, Double)])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrevrangebyscoreWithscoresLimit",
          "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea(b[(ByteString,Double)])",
          "package": "hedis",
          "partial": "Withscores Limit",
          "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em(f[(ByteString,Double)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrangebyscoreWithscoresLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zrevrank",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f (Maybe Integer))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zrevrank",
          "normalized": "ByteString-\u003eByteString-\u003ea(b(Maybe Integer))",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f(Maybe Integer))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zscore",
          "package": "hedis",
          "signature": "ByteString-\u003e ByteString-\u003e m (f (Maybe Double))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zscore",
          "normalized": "ByteString-\u003eByteString-\u003ea(b(Maybe Double))",
          "package": "hedis",
          "signature": "ByteString-\u003eByteString-\u003em(f(Maybe Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zunionstore",
          "package": "hedis",
          "signature": "ByteString-\u003e [ByteString]-\u003e Aggregate-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zunionstore",
          "normalized": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003ea(b Integer)",
          "package": "hedis",
          "signature": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zunionstore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "zunionstoreWeights",
          "package": "hedis",
          "signature": "ByteString-\u003e [(ByteString, Double)]-\u003e Aggregate-\u003e m (f Integer)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "zunionstoreWeights",
          "normalized": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003ea(b Integer)",
          "package": "hedis",
          "partial": "Weights",
          "signature": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003em(f Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zunionstoreWeights"
      }
    }
  ]
]