[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "module",
        "fct-source": "src/Database-Redis.html",
        "fct-type": "module",
        "title": "Redis"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Redis",
        "normalized": "",
        "package": "hedis",
        "partial": "Redis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Aggregate",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-ManualCommands.html#Aggregate",
        "fct-type": "data",
        "title": "Aggregate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Aggregate",
        "normalized": "",
        "package": "hedis",
        "partial": "Aggregate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:ConnectInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation for connnecting to a Redis server.\n\u003c/p\u003e\u003cp\u003eIt is recommended to not use the \u003ccode\u003e\u003ca\u003eConnInfo\u003c/a\u003e\u003c/code\u003e data constructor directly.\n Instead use \u003ccode\u003e\u003ca\u003edefaultConnectInfo\u003c/a\u003e\u003c/code\u003e and update it with record syntax. For\n example to connect to a password protected Redis server running on localhost\n and listening to the default port:\n\u003c/p\u003e\u003cpre\u003e\n myConnectInfo :: ConnectInfo\n myConnectInfo = defaultConnectInfo {connectAuth = Just \"secret\"}\n\u003c/pre\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-Core.html#ConnectInfo",
        "fct-type": "data",
        "title": "ConnectInfo"
      },
      "index": {
        "description": "Information for connnecting to Redis server It is recommended to not use the ConnInfo data constructor directly Instead use defaultConnectInfo and update it with record syntax For example to connect to password protected Redis server running on localhost and listening to the default port myConnectInfo ConnectInfo myConnectInfo defaultConnectInfo connectAuth Just secret",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "ConnectInfo",
        "normalized": "",
        "package": "hedis",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eA threadsafe pool of network connections to a Redis server. Use the\n  \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e function to create one.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-Core.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "threadsafe pool of network connections to Redis server Use the connect function to create one",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Connection",
        "normalized": "",
        "package": "hedis",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:ConnectionLostException",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-ProtocolPipelining.html#ConnectionLostException",
        "fct-type": "data",
        "title": "ConnectionLostException"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "ConnectionLostException",
        "normalized": "",
        "package": "hedis",
        "partial": "Connection Lost Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:HostName",
      "description": {
        "fct-descr": "\u003cp\u003eEither a host name e.g., \u003ccode\u003e\"haskell.org\"\u003c/code\u003e or a numeric host\n address string consisting of a dotted decimal IPv4 address or an\n IPv6 address e.g., \u003ccode\u003e\"192.168.0.1\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "HostName"
      },
      "index": {
        "description": "Either host name e.g haskell.org or numeric host address string consisting of dotted decimal IPv4 address or an IPv6 address e.g",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "HostName",
        "normalized": "",
        "package": "hedis",
        "partial": "Host Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Message",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-PubSub.html#Message",
        "fct-type": "data",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Message",
        "normalized": "",
        "package": "hedis",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:MonadRedis",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "class",
        "fct-source": "src/Database-Redis-Core.html#MonadRedis",
        "fct-type": "class",
        "title": "MonadRedis"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "MonadRedis",
        "normalized": "",
        "package": "hedis",
        "partial": "Monad Redis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:PortID",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "PortID"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "PortID",
        "normalized": "",
        "package": "hedis",
        "partial": "Port ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:PubSub",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulates subscription changes. Use \u003ccode\u003e\u003ca\u003esubscribe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunsubscribe\u003c/a\u003e\u003c/code\u003e,\n  \u003ccode\u003e\u003ca\u003epsubscribe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epunsubscribe\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e to construct a value. Combine\n  values by using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e interface, i.e. \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-PubSub.html#PubSub",
        "fct-type": "data",
        "title": "PubSub"
      },
      "index": {
        "description": "Encapsulates subscription changes Use subscribe unsubscribe psubscribe punsubscribe or mempty to construct value Combine values by using the Monoid interface i.e mappend and mconcat",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "PubSub",
        "normalized": "",
        "package": "hedis",
        "partial": "Pub Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Queued",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e value represents the result of a command inside a transaction. It\n  is a proxy object for the \u003cem\u003eactual\u003c/em\u003e result, which will only be available\n  after returning from a \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e transaction.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e values are composable by utilizing the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e or\n  \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e interfaces.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-Transactions.html#Queued",
        "fct-type": "data",
        "title": "Queued"
      },
      "index": {
        "description": "Queued value represents the result of command inside transaction It is proxy object for the actual result which will only be available after returning from multiExec transaction Queued values are composable by utilizing the Functor Applicative or Monad interfaces",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Queued",
        "normalized": "",
        "package": "hedis",
        "partial": "Queued",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Redis",
      "description": {
        "fct-descr": "\u003cp\u003eContext for normal command execution, outside of transactions. Use\n  \u003ccode\u003e\u003ca\u003erunRedis\u003c/a\u003e\u003c/code\u003e to run actions of this type.\n\u003c/p\u003e\u003cp\u003eIn this context, each result is wrapped in an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e to account for the\n  possibility of Redis returning an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e reply.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-Core.html#Redis",
        "fct-type": "data",
        "title": "Redis"
      },
      "index": {
        "description": "Context for normal command execution outside of transactions Use runRedis to run actions of this type In this context each result is wrapped in an Either to account for the possibility of Redis returning an Error reply",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Redis",
        "normalized": "",
        "package": "hedis",
        "partial": "Redis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:RedisCtx",
      "description": {
        "fct-descr": "\u003cp\u003eThis class captures the following behaviour: In a context \u003ccode\u003em\u003c/code\u003e, a command\n  will return it's result wrapped in a \"container\" of type \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePlease refer to the Command Type Signatures section of this page for more\n  information.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "class",
        "fct-source": "src/Database-Redis-Core.html#RedisCtx",
        "fct-type": "class",
        "title": "RedisCtx"
      },
      "index": {
        "description": "This class captures the following behaviour In context command will return it result wrapped in container of type Please refer to the Command Type Signatures section of this page for more information",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "RedisCtx",
        "normalized": "",
        "package": "hedis",
        "partial": "Redis Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:RedisResult",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "class",
        "fct-source": "src/Database-Redis-Types.html#RedisResult",
        "fct-type": "class",
        "title": "RedisResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "RedisResult",
        "normalized": "",
        "package": "hedis",
        "partial": "Redis Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:RedisTx",
      "description": {
        "fct-descr": "\u003cp\u003eCommand-context inside of MULTI/EXEC transactions. Use \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e to run\n  actions of this type.\n\u003c/p\u003e\u003cp\u003eIn the \u003ccode\u003e\u003ca\u003eRedisTx\u003c/a\u003e\u003c/code\u003e context, all commands return a \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e value. It is a\n  proxy object for the \u003cem\u003eactual\u003c/em\u003e result, which will only be available after\n  finishing the transaction.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-Transactions.html#RedisTx",
        "fct-type": "data",
        "title": "RedisTx"
      },
      "index": {
        "description": "Command-context inside of MULTI EXEC transactions Use multiExec to run actions of this type In the RedisTx context all commands return Queued value It is proxy object for the actual result which will only be available after finishing the transaction",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "RedisTx",
        "normalized": "",
        "package": "hedis",
        "partial": "Redis Tx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:RedisType",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-Types.html#RedisType",
        "fct-type": "data",
        "title": "RedisType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "RedisType",
        "normalized": "",
        "package": "hedis",
        "partial": "Redis Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Reply",
      "description": {
        "fct-descr": "\u003cp\u003eLow-level representation of replies from the Redis server.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-Protocol.html#Reply",
        "fct-type": "data",
        "title": "Reply"
      },
      "index": {
        "description": "Low-level representation of replies from the Redis server",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Reply",
        "normalized": "",
        "package": "hedis",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Slowlog",
      "description": {
        "fct-descr": "\u003cp\u003eA single entry from the slowlog.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-ManualCommands.html#Slowlog",
        "fct-type": "data",
        "title": "Slowlog"
      },
      "index": {
        "description": "single entry from the slowlog",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Slowlog",
        "normalized": "",
        "package": "hedis",
        "partial": "Slowlog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:SortOpts",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for the \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e command.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-ManualCommands.html#SortOpts",
        "fct-type": "data",
        "title": "SortOpts"
      },
      "index": {
        "description": "Options for the sort command",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "SortOpts",
        "normalized": "",
        "package": "hedis",
        "partial": "Sort Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:SortOrder",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-ManualCommands.html#SortOrder",
        "fct-type": "data",
        "title": "SortOrder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "SortOrder",
        "normalized": "",
        "package": "hedis",
        "partial": "Sort Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:Status",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-Types.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Status",
        "normalized": "",
        "package": "hedis",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#t:TxResult",
      "description": {
        "fct-descr": "\u003cp\u003eResult of a \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e transaction.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "data",
        "fct-source": "src/Database-Redis-Transactions.html#TxResult",
        "fct-type": "data",
        "title": "TxResult"
      },
      "index": {
        "description": "Result of multiExec transaction",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "TxResult",
        "normalized": "",
        "package": "hedis",
        "partial": "Tx Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Asc",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Asc",
        "fct-source": "src/Database-Redis-ManualCommands.html#SortOrder",
        "fct-type": "function",
        "title": "Asc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Asc",
        "normalized": "",
        "package": "hedis",
        "partial": "Asc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Bulk",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Bulk (Maybe ByteString)",
        "fct-source": "src/Database-Redis-Protocol.html#Reply",
        "fct-type": "function",
        "title": "Bulk"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Bulk",
        "normalized": "",
        "package": "hedis",
        "partial": "Bulk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:ConnInfo",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ConnInfo",
        "fct-source": "src/Database-Redis-Core.html#ConnectInfo",
        "fct-type": "function",
        "title": "ConnInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "ConnInfo",
        "normalized": "",
        "package": "hedis",
        "partial": "Conn Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:ConnectionLost",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ConnectionLost",
        "fct-source": "src/Database-Redis-ProtocolPipelining.html#ConnectionLostException",
        "fct-type": "function",
        "title": "ConnectionLost"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "ConnectionLost",
        "normalized": "",
        "package": "hedis",
        "partial": "Connection Lost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Desc",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Desc",
        "fct-source": "src/Database-Redis-ManualCommands.html#SortOrder",
        "fct-type": "function",
        "title": "Desc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Desc",
        "normalized": "",
        "package": "hedis",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Error",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Error ByteString",
        "fct-source": "src/Database-Redis-Protocol.html#Reply",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Error",
        "normalized": "",
        "package": "hedis",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Hash",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Hash",
        "fct-source": "src/Database-Redis-Types.html#RedisType",
        "fct-type": "function",
        "title": "Hash"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Hash",
        "normalized": "",
        "package": "hedis",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Integer",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Integer Integer",
        "fct-source": "src/Database-Redis-Protocol.html#Reply",
        "fct-type": "function",
        "title": "Integer"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Integer",
        "normalized": "",
        "package": "hedis",
        "partial": "Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:List",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "List",
        "fct-source": "src/Database-Redis-Types.html#RedisType",
        "fct-type": "function",
        "title": "List"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "List",
        "normalized": "",
        "package": "hedis",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Max",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Max",
        "fct-source": "src/Database-Redis-ManualCommands.html#Aggregate",
        "fct-type": "function",
        "title": "Max"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Max",
        "normalized": "",
        "package": "hedis",
        "partial": "Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Message",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Message",
        "fct-source": "src/Database-Redis-PubSub.html#Message",
        "fct-type": "function",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Message",
        "normalized": "",
        "package": "hedis",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Min",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Min",
        "fct-source": "src/Database-Redis-ManualCommands.html#Aggregate",
        "fct-type": "function",
        "title": "Min"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Min",
        "normalized": "",
        "package": "hedis",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:MultiBulk",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "MultiBulk (Maybe [Reply])",
        "fct-source": "src/Database-Redis-Protocol.html#Reply",
        "fct-type": "function",
        "title": "MultiBulk"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "MultiBulk",
        "normalized": "MultiBulk(Maybe[Reply])",
        "package": "hedis",
        "partial": "Multi Bulk",
        "signature": "MultiBulk(Maybe[Reply])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:None",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "None",
        "fct-source": "src/Database-Redis-Types.html#RedisType",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "None",
        "normalized": "",
        "package": "hedis",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Ok",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Ok",
        "fct-source": "src/Database-Redis-Types.html#Status",
        "fct-type": "function",
        "title": "Ok"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Ok",
        "normalized": "",
        "package": "hedis",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:PMessage",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "PMessage",
        "fct-source": "src/Database-Redis-PubSub.html#Message",
        "fct-type": "function",
        "title": "PMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "PMessage",
        "normalized": "",
        "package": "hedis",
        "partial": "PMessage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Pong",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Pong",
        "fct-source": "src/Database-Redis-Types.html#Status",
        "fct-type": "function",
        "title": "Pong"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Pong",
        "normalized": "",
        "package": "hedis",
        "partial": "Pong",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:PortNumber",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "PortNumber PortNumber",
        "fct-type": "function",
        "title": "PortNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "PortNumber",
        "normalized": "",
        "package": "hedis",
        "partial": "Port Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Service",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Service String",
        "fct-type": "function",
        "title": "Service"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Service",
        "normalized": "",
        "package": "hedis",
        "partial": "Service",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Set",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Set",
        "fct-source": "src/Database-Redis-Types.html#RedisType",
        "fct-type": "function",
        "title": "Set"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Set",
        "normalized": "",
        "package": "hedis",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:SingleLine",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "SingleLine ByteString",
        "fct-source": "src/Database-Redis-Protocol.html#Reply",
        "fct-type": "function",
        "title": "SingleLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "SingleLine",
        "normalized": "",
        "package": "hedis",
        "partial": "Single Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Slowlog",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Slowlog",
        "fct-source": "src/Database-Redis-ManualCommands.html#Slowlog",
        "fct-type": "function",
        "title": "Slowlog"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Slowlog",
        "normalized": "",
        "package": "hedis",
        "partial": "Slowlog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:SortOpts",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "SortOpts",
        "fct-source": "src/Database-Redis-ManualCommands.html#SortOpts",
        "fct-type": "function",
        "title": "SortOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "SortOpts",
        "normalized": "",
        "package": "hedis",
        "partial": "Sort Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Status",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Status ByteString",
        "fct-source": "src/Database-Redis-Types.html#Status",
        "fct-type": "function",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Status",
        "normalized": "",
        "package": "hedis",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:String",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "String",
        "fct-source": "src/Database-Redis-Types.html#RedisType",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "String",
        "normalized": "",
        "package": "hedis",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:Sum",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Sum",
        "fct-source": "src/Database-Redis-ManualCommands.html#Aggregate",
        "fct-type": "function",
        "title": "Sum"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "Sum",
        "normalized": "",
        "package": "hedis",
        "partial": "Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:TxAborted",
      "description": {
        "fct-descr": "\u003cp\u003eTransaction aborted due to an earlier \u003ccode\u003e\u003ca\u003ewatch\u003c/a\u003e\u003c/code\u003e command.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "TxAborted",
        "fct-source": "src/Database-Redis-Transactions.html#TxResult",
        "fct-type": "function",
        "title": "TxAborted"
      },
      "index": {
        "description": "Transaction aborted due to an earlier watch command",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "TxAborted",
        "normalized": "",
        "package": "hedis",
        "partial": "Tx Aborted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:TxError",
      "description": {
        "fct-descr": "\u003cp\u003eAt least one of the commands returned an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e reply.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "TxError String",
        "fct-source": "src/Database-Redis-Transactions.html#TxResult",
        "fct-type": "function",
        "title": "TxError"
      },
      "index": {
        "description": "At least one of the commands returned an Error reply",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "TxError",
        "normalized": "",
        "package": "hedis",
        "partial": "Tx Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:TxSuccess",
      "description": {
        "fct-descr": "\u003cp\u003eTransaction completed successfully. The wrapped value corresponds to\n   the \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e value returned from the \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e argument action.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "TxSuccess a",
        "fct-source": "src/Database-Redis-Transactions.html#TxResult",
        "fct-type": "function",
        "title": "TxSuccess"
      },
      "index": {
        "description": "Transaction completed successfully The wrapped value corresponds to the Queued value returned from the multiExec argument action",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "TxSuccess",
        "normalized": "",
        "package": "hedis",
        "partial": "Tx Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:UnixSocket",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "UnixSocket String",
        "fct-type": "function",
        "title": "UnixSocket"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "UnixSocket",
        "normalized": "",
        "package": "hedis",
        "partial": "Unix Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:ZSet",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ZSet",
        "fct-source": "src/Database-Redis-Types.html#RedisType",
        "fct-type": "function",
        "title": "ZSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "ZSet",
        "normalized": "",
        "package": "hedis",
        "partial": "ZSet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:append",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "append",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:auth",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Redis (Either Reply Status)",
        "fct-type": "function",
        "title": "auth"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "auth",
        "normalized": "ByteString-\u003eRedis(Either Reply Status)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eRedis(Either Reply Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bgrewriteaof",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Status)",
        "fct-source": "src/Database-Redis-Commands.html#bgrewriteaof",
        "fct-type": "function",
        "title": "bgrewriteaof"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "bgrewriteaof",
        "normalized": "",
        "package": "hedis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bgsave",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Status)",
        "fct-source": "src/Database-Redis-Commands.html#bgsave",
        "fct-type": "function",
        "title": "bgsave"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "bgsave",
        "normalized": "",
        "package": "hedis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bitcount",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "bitcount"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "bitcount",
        "normalized": "ByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bitcountRange",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "bitcountRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "bitcountRange",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "Range",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bitopAnd",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "bitopAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "bitopAnd",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "And",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bitopNot",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "bitopNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "bitopNot",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "Not",
        "signature": "ByteString-\u003eByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bitopOr",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "bitopOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "bitopOr",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "Or",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:bitopXor",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "bitopXor"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "bitopXor",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "Xor",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:blpop",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e Integer-\u003e m (f (Maybe (ByteString, ByteString)))",
        "fct-type": "function",
        "title": "blpop"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "blpop",
        "normalized": "[ByteString]-\u003eInteger-\u003ea(b(Maybe(ByteString,ByteString)))",
        "package": "hedis",
        "partial": "",
        "signature": "[ByteString]-\u003eInteger-\u003em(f(Maybe(ByteString,ByteString)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:brpop",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e Integer-\u003e m (f (Maybe (ByteString, ByteString)))",
        "fct-type": "function",
        "title": "brpop"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "brpop",
        "normalized": "[ByteString]-\u003eInteger-\u003ea(b(Maybe(ByteString,ByteString)))",
        "package": "hedis",
        "partial": "",
        "signature": "[ByteString]-\u003eInteger-\u003em(f(Maybe(ByteString,ByteString)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:brpoplpush",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Integer-\u003e m (f (Maybe ByteString))",
        "fct-type": "function",
        "title": "brpoplpush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "brpoplpush",
        "normalized": "ByteString-\u003eByteString-\u003eInteger-\u003ea(b(Maybe ByteString))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eInteger-\u003em(f(Maybe ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:configGet",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f [(ByteString, ByteString)])",
        "fct-type": "function",
        "title": "configGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "configGet",
        "normalized": "ByteString-\u003ea(b[(ByteString,ByteString)])",
        "package": "hedis",
        "partial": "Get",
        "signature": "ByteString-\u003em(f[(ByteString,ByteString)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:configResetstat",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Status)",
        "fct-source": "src/Database-Redis-Commands.html#configResetstat",
        "fct-type": "function",
        "title": "configResetstat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "configResetstat",
        "normalized": "",
        "package": "hedis",
        "partial": "Resetstat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:configSet",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Status)",
        "fct-type": "function",
        "title": "configSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "configSet",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Status)",
        "package": "hedis",
        "partial": "Set",
        "signature": "ByteString-\u003eByteString-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e to a Redis server designated by the given\n  \u003ccode\u003e\u003ca\u003eConnectInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ConnectInfo -\u003e IO Connection",
        "fct-source": "src/Database-Redis-Core.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Opens Connection to Redis server designated by the given ConnectInfo",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "connect",
        "normalized": "ConnectInfo-\u003eIO Connection",
        "package": "hedis",
        "partial": "",
        "signature": "ConnectInfo-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connectAuth",
      "description": {
        "fct-descr": "\u003cp\u003eWhen the server is protected by a password, set \u003ccode\u003e\u003ca\u003econnectAuth\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n   the password. Each connection will then authenticate by the \u003ccode\u003e\u003ca\u003eauth\u003c/a\u003e\u003c/code\u003e\n   command.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Database-Redis-Core.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectAuth"
      },
      "index": {
        "description": "When the server is protected by password set connectAuth to Just the password Each connection will then authenticate by the auth command",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "connectAuth",
        "normalized": "",
        "package": "hedis",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connectHost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "HostName",
        "fct-source": "src/Database-Redis-Core.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "connectHost",
        "normalized": "",
        "package": "hedis",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connectMaxConnections",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of connections to keep open. The smallest acceptable\n   value is 1.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Int",
        "fct-source": "src/Database-Redis-Core.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectMaxConnections"
      },
      "index": {
        "description": "Maximum number of connections to keep open The smallest acceptable value is",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "connectMaxConnections",
        "normalized": "",
        "package": "hedis",
        "partial": "Max Connections",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connectMaxIdleTime",
      "description": {
        "fct-descr": "\u003cp\u003eAmount of time for which an unused connection is kept open. The\n   smallest acceptable value is 0.5 seconds. If the \u003ccode\u003etimeout\u003c/code\u003e value in\n   your redis.conf file is non-zero, it should be larger than\n   \u003ccode\u003e\u003ca\u003econnectMaxIdleTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "NominalDiffTime",
        "fct-source": "src/Database-Redis-Core.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectMaxIdleTime"
      },
      "index": {
        "description": "Amount of time for which an unused connection is kept open The smallest acceptable value is seconds If the timeout value in your redis.conf file is non-zero it should be larger than connectMaxIdleTime",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "connectMaxIdleTime",
        "normalized": "",
        "package": "hedis",
        "partial": "Max Idle Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:connectPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "PortID",
        "fct-source": "src/Database-Redis-Core.html#ConnectInfo",
        "fct-type": "function",
        "title": "connectPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "connectPort",
        "normalized": "",
        "package": "hedis",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:dbsize",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Integer)",
        "fct-source": "src/Database-Redis-Commands.html#dbsize",
        "fct-type": "function",
        "title": "dbsize"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "dbsize",
        "normalized": "",
        "package": "hedis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:debugObject",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f ByteString)",
        "fct-type": "function",
        "title": "debugObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "debugObject",
        "normalized": "ByteString-\u003ea(b ByteString)",
        "package": "hedis",
        "partial": "Object",
        "signature": "ByteString-\u003em(f ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:decode",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Reply -\u003e Either Reply a",
        "fct-source": "src/Database-Redis-Types.html#decode",
        "fct-type": "method",
        "title": "decode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "decode",
        "normalized": "Reply-\u003eEither Reply a",
        "package": "hedis",
        "partial": "",
        "signature": "Reply-\u003eEither Reply a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:decr",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "decr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "decr",
        "normalized": "ByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:decrby",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "decrby"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "decrby",
        "normalized": "ByteString-\u003eInteger-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:defaultConnectInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDefault information for connecting:\n\u003c/p\u003e\u003cpre\u003e\n  connectHost           = \"localhost\"\n  connectPort           = PortNumber 6379 -- Redis default port\n  connectAuth           = Nothing         -- No password\n  connectMaxConnections = 50              -- Up to 50 connections\n  connectMaxIdleTime    = 30              -- Keep open for 30 seconds\n\u003c/pre\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ConnectInfo",
        "fct-source": "src/Database-Redis-Core.html#defaultConnectInfo",
        "fct-type": "function",
        "title": "defaultConnectInfo"
      },
      "index": {
        "description": "Default information for connecting connectHost localhost connectPort PortNumber Redis default port connectAuth Nothing No password connectMaxConnections Up to connections connectMaxIdleTime Keep open for seconds",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "defaultConnectInfo",
        "normalized": "",
        "package": "hedis",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:defaultSortOpts",
      "description": {
        "fct-descr": "\u003cp\u003eRedis default \u003ccode\u003e\u003ca\u003eSortOpts\u003c/a\u003e\u003c/code\u003e. Equivalent to omitting all optional parameters.\n\u003c/p\u003e\u003cpre\u003e\n SortOpts\n     { sortBy    = Nothing -- omit the BY option\n     , sortLimit = (0,-1)  -- return entire collection\n     , sortGet   = []      -- omit the GET option\n     , sortOrder = Asc     -- sort in ascending order\n     , sortAlpha = False   -- sort numerically, not lexicographically\n     }\n\u003c/pre\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "SortOpts",
        "fct-source": "src/Database-Redis-ManualCommands.html#defaultSortOpts",
        "fct-type": "function",
        "title": "defaultSortOpts"
      },
      "index": {
        "description": "Redis default SortOpts Equivalent to omitting all optional parameters SortOpts sortBy Nothing omit the BY option sortLimit return entire collection sortGet omit the GET option sortOrder Asc sort in ascending order sortAlpha False sort numerically not lexicographically",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "defaultSortOpts",
        "normalized": "",
        "package": "hedis",
        "partial": "Sort Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:del",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "del"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "del",
        "normalized": "[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:dump",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f ByteString)",
        "fct-type": "function",
        "title": "dump"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "dump",
        "normalized": "ByteString-\u003ea(b ByteString)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:echo",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f ByteString)",
        "fct-type": "function",
        "title": "echo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "echo",
        "normalized": "ByteString-\u003ea(b ByteString)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:eval",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e [ByteString]-\u003e m (f a)",
        "fct-type": "function",
        "title": "eval"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "eval",
        "normalized": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003ea(b c)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003em(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:evalsha",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e [ByteString]-\u003e m (f a)",
        "fct-type": "function",
        "title": "evalsha"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "evalsha",
        "normalized": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003ea(b c)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003em(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:exists",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "exists"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "exists",
        "normalized": "ByteString-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:expire",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "expire"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "expire",
        "normalized": "ByteString-\u003eInteger-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:expireat",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "expireat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "expireat",
        "normalized": "ByteString-\u003eInteger-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:flushall",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Status)",
        "fct-source": "src/Database-Redis-Commands.html#flushall",
        "fct-type": "function",
        "title": "flushall"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "flushall",
        "normalized": "",
        "package": "hedis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:flushdb",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Status)",
        "fct-source": "src/Database-Redis-Commands.html#flushdb",
        "fct-type": "function",
        "title": "flushdb"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "flushdb",
        "normalized": "",
        "package": "hedis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:get",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f (Maybe ByteString))",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "get",
        "normalized": "ByteString-\u003ea(b(Maybe ByteString))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f(Maybe ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:getType",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f RedisType)",
        "fct-type": "function",
        "title": "getType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "getType",
        "normalized": "ByteString-\u003ea(b RedisType)",
        "package": "hedis",
        "partial": "Type",
        "signature": "ByteString-\u003em(f RedisType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:getbit",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "getbit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "getbit",
        "normalized": "ByteString-\u003eInteger-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:getrange",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f ByteString)",
        "fct-type": "function",
        "title": "getrange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "getrange",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b ByteString)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:getset",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f (Maybe ByteString))",
        "fct-type": "function",
        "title": "getset"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "getset",
        "normalized": "ByteString-\u003eByteString-\u003ea(b(Maybe ByteString))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f(Maybe ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hdel",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "hdel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hdel",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hexists",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "hexists"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hexists",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hget",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f (Maybe ByteString))",
        "fct-type": "function",
        "title": "hget"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hget",
        "normalized": "ByteString-\u003eByteString-\u003ea(b(Maybe ByteString))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f(Maybe ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hgetall",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f [(ByteString, ByteString)])",
        "fct-type": "function",
        "title": "hgetall"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hgetall",
        "normalized": "ByteString-\u003ea(b[(ByteString,ByteString)])",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f[(ByteString,ByteString)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hincrby",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Integer-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "hincrby"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hincrby",
        "normalized": "ByteString-\u003eByteString-\u003eInteger-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eInteger-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hincrbyfloat",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Double-\u003e m (f Double)",
        "fct-type": "function",
        "title": "hincrbyfloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hincrbyfloat",
        "normalized": "ByteString-\u003eByteString-\u003eDouble-\u003ea(b Double)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eDouble-\u003em(f Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hkeys",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "hkeys"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hkeys",
        "normalized": "ByteString-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hlen",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "hlen"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hlen",
        "normalized": "ByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hmget",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f [Maybe ByteString])",
        "fct-type": "function",
        "title": "hmget"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hmget",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b[Maybe ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f[Maybe ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hmset",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [(ByteString, ByteString)]-\u003e m (f Status)",
        "fct-type": "function",
        "title": "hmset"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hmset",
        "normalized": "ByteString-\u003e[(ByteString,ByteString)]-\u003ea(b Status)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[(ByteString,ByteString)]-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hset",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "hset"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hset",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hsetnx",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "hsetnx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hsetnx",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:hvals",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "hvals"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "hvals",
        "normalized": "ByteString-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:incr",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "incr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "incr",
        "normalized": "ByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:incrby",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "incrby"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "incrby",
        "normalized": "ByteString-\u003eInteger-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:incrbyfloat",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Double-\u003e m (f Double)",
        "fct-type": "function",
        "title": "incrbyfloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "incrbyfloat",
        "normalized": "ByteString-\u003eDouble-\u003ea(b Double)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eDouble-\u003em(f Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:info",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f ByteString)",
        "fct-source": "src/Database-Redis-Commands.html#info",
        "fct-type": "function",
        "title": "info"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "info",
        "normalized": "",
        "package": "hedis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:keys",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "keys",
        "normalized": "ByteString-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lastsave",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Integer)",
        "fct-source": "src/Database-Redis-Commands.html#lastsave",
        "fct-type": "function",
        "title": "lastsave"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "lastsave",
        "normalized": "",
        "package": "hedis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lindex",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e m (f (Maybe ByteString))",
        "fct-type": "function",
        "title": "lindex"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "lindex",
        "normalized": "ByteString-\u003eInteger-\u003ea(b(Maybe ByteString))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003em(f(Maybe ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:linsertAfter",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "linsertAfter"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "linsertAfter",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "After",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:linsertBefore",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "linsertBefore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "linsertBefore",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "Before",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:llen",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "llen"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "llen",
        "normalized": "ByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lpop",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f (Maybe ByteString))",
        "fct-type": "function",
        "title": "lpop"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "lpop",
        "normalized": "ByteString-\u003ea(b(Maybe ByteString))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f(Maybe ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lpush",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "lpush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "lpush",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lpushx",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "lpushx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "lpushx",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lrange",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "lrange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "lrange",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lrem",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "lrem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "lrem",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:lset",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Status)",
        "fct-type": "function",
        "title": "lset"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "lset",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Status)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:ltrim",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f Status)",
        "fct-type": "function",
        "title": "ltrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "ltrim",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b Status)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:mget",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e m (f [Maybe ByteString])",
        "fct-type": "function",
        "title": "mget"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "mget",
        "normalized": "[ByteString]-\u003ea(b[Maybe ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "[ByteString]-\u003em(f[Maybe ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:migrate",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e Integer-\u003e Integer-\u003e m (f Status)",
        "fct-type": "function",
        "title": "migrate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "migrate",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eInteger-\u003eInteger-\u003ea(b Status)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eInteger-\u003eInteger-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:move",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "move"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "move",
        "normalized": "ByteString-\u003eInteger-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:mset",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[(ByteString, ByteString)]-\u003e m (f Status)",
        "fct-type": "function",
        "title": "mset"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "mset",
        "normalized": "[(ByteString,ByteString)]-\u003ea(b Status)",
        "package": "hedis",
        "partial": "",
        "signature": "[(ByteString,ByteString)]-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:msetnx",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[(ByteString, ByteString)]-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "msetnx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "msetnx",
        "normalized": "[(ByteString,ByteString)]-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "[(ByteString,ByteString)]-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:msgChannel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-Redis-PubSub.html#Message",
        "fct-type": "function",
        "title": "msgChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "msgChannel",
        "normalized": "",
        "package": "hedis",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:msgMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-Redis-PubSub.html#Message",
        "fct-type": "function",
        "title": "msgMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "msgMessage",
        "normalized": "",
        "package": "hedis",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:msgPattern",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-Redis-PubSub.html#Message",
        "fct-type": "function",
        "title": "msgPattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "msgPattern",
        "normalized": "",
        "package": "hedis",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:multiExec",
      "description": {
        "fct-descr": "\u003cp\u003eRun commands inside a transaction. For documentation on the semantics of\n  Redis transaction see \u003ca\u003ehttp://redis.io/topics/transactions\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eInside the transaction block, command functions return their result wrapped\n  in a \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e result is a proxy object for the actual\n  command's result, which will only be available after \u003ccode\u003eEXEC\u003c/code\u003eing the\n  transaction.\n\u003c/p\u003e\u003cp\u003eExample usage (note how \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e 's \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance is used to\n  combine the two individual results):\n\u003c/p\u003e\u003cpre\u003e\n  runRedis conn $ do\n      set \"hello\" \"hello\"\n      set \"world\" \"world\"\n      helloworld \u003c- \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e $ do\n          hello \u003c- get \"hello\"\n          world \u003c- get \"world\"\n          return $ (,) \u003c$\u003e hello \u003c*\u003e world\n      liftIO (print helloworld)\n\u003c/pre\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "RedisTx (Queued a) -\u003e Redis (TxResult a)",
        "fct-source": "src/Database-Redis-Transactions.html#multiExec",
        "fct-type": "function",
        "title": "multiExec"
      },
      "index": {
        "description": "Run commands inside transaction For documentation on the semantics of Redis transaction see http redis.io topics transactions Inside the transaction block command functions return their result wrapped in Queued The Queued result is proxy object for the actual command result which will only be available after EXEC ing the transaction Example usage note how Queued Applicative instance is used to combine the two individual results runRedis conn do set hello hello set world world helloworld multiExec do hello get hello world get world return hello world liftIO print helloworld",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "multiExec",
        "normalized": "RedisTx(Queued a)-\u003eRedis(TxResult a)",
        "package": "hedis",
        "partial": "Exec",
        "signature": "RedisTx(Queued a)-\u003eRedis(TxResult a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:objectEncoding",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f ByteString)",
        "fct-type": "function",
        "title": "objectEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "objectEncoding",
        "normalized": "ByteString-\u003ea(b ByteString)",
        "package": "hedis",
        "partial": "Encoding",
        "signature": "ByteString-\u003em(f ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:objectIdletime",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "objectIdletime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "objectIdletime",
        "normalized": "ByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "Idletime",
        "signature": "ByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:objectRefcount",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "objectRefcount"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "objectRefcount",
        "normalized": "ByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "Refcount",
        "signature": "ByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:persist",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "persist"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "persist",
        "normalized": "ByteString-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:pexpire",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "pexpire"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "pexpire",
        "normalized": "ByteString-\u003eInteger-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:pexpireat",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "pexpireat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "pexpireat",
        "normalized": "ByteString-\u003eInteger-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:ping",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Status)",
        "fct-source": "src/Database-Redis-Commands.html#ping",
        "fct-type": "function",
        "title": "ping"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "ping",
        "normalized": "",
        "package": "hedis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:psetex",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Status)",
        "fct-type": "function",
        "title": "psetex"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "psetex",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Status)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:psubscribe",
      "description": {
        "fct-descr": "\u003cp\u003eListen for messages published to channels matching the given patterns \n  (\u003ca\u003ehttp://redis.io/commands/psubscribe\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e PubSub",
        "fct-type": "function",
        "title": "psubscribe"
      },
      "index": {
        "description": "Listen for messages published to channels matching the given patterns http redis.io commands psubscribe",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "psubscribe",
        "normalized": "[ByteString]-\u003ePubSub",
        "package": "hedis",
        "partial": "",
        "signature": "[ByteString]-\u003ePubSub"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:pttl",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "pttl"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "pttl",
        "normalized": "ByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:pubSub",
      "description": {
        "fct-descr": "\u003cp\u003eListens to published messages on subscribed channels and channels matching\n  the subscribed patterns. For documentation on the semantics of Redis\n  Pub/Sub see \u003ca\u003ehttp://redis.io/topics/pubsub\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe given callback function is called for each received message. \n  Subscription changes are triggered by the returned \u003ccode\u003e\u003ca\u003ePubSub\u003c/a\u003e\u003c/code\u003e. To keep\n  subscriptions unchanged, the callback can return \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample: Subscribe to the \"news\" channel indefinitely.\n\u003c/p\u003e\u003cpre\u003e\n  pubSub (subscribe [\"news\"]) $ \\msg -\u003e do\n      putStrLn $ \"Message from \" ++ show (msgChannel msg)\n      return mempty\n\u003c/pre\u003e\u003cp\u003eExample: Receive a single message from the \"chat\" channel.\n\u003c/p\u003e\u003cpre\u003e\n  pubSub (subscribe [\"chat\"]) $ \\msg -\u003e do\n      putStrLn $ \"Message from \" ++ show (msgChannel msg)\n      return $ unsubscribe [\"chat\"]\n\u003c/pre\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "PubSub-\u003e (Message -\u003e IO PubSub)-\u003e Redis ()",
        "fct-type": "function",
        "title": "pubSub"
      },
      "index": {
        "description": "Listens to published messages on subscribed channels and channels matching the subscribed patterns For documentation on the semantics of Redis Pub Sub see http redis.io topics pubsub The given callback function is called for each received message Subscription changes are triggered by the returned PubSub To keep subscriptions unchanged the callback can return mempty Example Subscribe to the news channel indefinitely pubSub subscribe news msg do putStrLn Message from show msgChannel msg return mempty Example Receive single message from the chat channel pubSub subscribe chat msg do putStrLn Message from show msgChannel msg return unsubscribe chat",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "pubSub",
        "normalized": "PubSub-\u003e(Message-\u003eIO PubSub)-\u003eRedis()",
        "package": "hedis",
        "partial": "Sub",
        "signature": "PubSub-\u003e(Message-\u003eIO PubSub)-\u003eRedis()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:publish",
      "description": {
        "fct-descr": "\u003cp\u003ePost a message to a channel (\u003ca\u003ehttp://redis.io/commands/publish\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "publish"
      },
      "index": {
        "description": "Post message to channel http redis.io commands publish",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "publish",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:punsubscribe",
      "description": {
        "fct-descr": "\u003cp\u003eStop listening for messages posted to channels matching the given patterns \n  (\u003ca\u003ehttp://redis.io/commands/punsubscribe\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e PubSub",
        "fct-type": "function",
        "title": "punsubscribe"
      },
      "index": {
        "description": "Stop listening for messages posted to channels matching the given patterns http redis.io commands punsubscribe",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "punsubscribe",
        "normalized": "[ByteString]-\u003ePubSub",
        "package": "hedis",
        "partial": "",
        "signature": "[ByteString]-\u003ePubSub"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:quit",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Status)",
        "fct-source": "src/Database-Redis-Commands.html#quit",
        "fct-type": "function",
        "title": "quit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "quit",
        "normalized": "",
        "package": "hedis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:randomkey",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f (Maybe ByteString))",
        "fct-source": "src/Database-Redis-Commands.html#randomkey",
        "fct-type": "function",
        "title": "randomkey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "randomkey",
        "normalized": "",
        "package": "hedis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:rename",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Status)",
        "fct-type": "function",
        "title": "rename"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "rename",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Status)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:renamenx",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "renamenx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "renamenx",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:restore",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Status)",
        "fct-type": "function",
        "title": "restore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "restore",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Status)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:rpop",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f (Maybe ByteString))",
        "fct-type": "function",
        "title": "rpop"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "rpop",
        "normalized": "ByteString-\u003ea(b(Maybe ByteString))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f(Maybe ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:rpoplpush",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f (Maybe ByteString))",
        "fct-type": "function",
        "title": "rpoplpush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "rpoplpush",
        "normalized": "ByteString-\u003eByteString-\u003ea(b(Maybe ByteString))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f(Maybe ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:rpush",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "rpush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "rpush",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:rpushx",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "rpushx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "rpushx",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:runRedis",
      "description": {
        "fct-descr": "\u003cp\u003eInteract with a Redis datastore specified by the given \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEach call of \u003ccode\u003e\u003ca\u003erunRedis\u003c/a\u003e\u003c/code\u003e takes a network connection from the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e\n  pool and runs the given \u003ccode\u003e\u003ca\u003eRedis\u003c/a\u003e\u003c/code\u003e action. Calls to \u003ccode\u003e\u003ca\u003erunRedis\u003c/a\u003e\u003c/code\u003e may thus block\n  while all connections from the pool are in use.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Connection -\u003e Redis a -\u003e IO a",
        "fct-source": "src/Database-Redis-Core.html#runRedis",
        "fct-type": "function",
        "title": "runRedis"
      },
      "index": {
        "description": "Interact with Redis datastore specified by the given Connection Each call of runRedis takes network connection from the Connection pool and runs the given Redis action Calls to runRedis may thus block while all connections from the pool are in use",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "runRedis",
        "normalized": "Connection-\u003eRedis a-\u003eIO a",
        "package": "hedis",
        "partial": "Redis",
        "signature": "Connection-\u003eRedis a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sadd",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "sadd"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sadd",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:save",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Status)",
        "fct-source": "src/Database-Redis-Commands.html#save",
        "fct-type": "function",
        "title": "save"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "save",
        "normalized": "",
        "package": "hedis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:scard",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "scard"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "scard",
        "normalized": "ByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:scriptExists",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e m (f [Bool])",
        "fct-type": "function",
        "title": "scriptExists"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "scriptExists",
        "normalized": "[ByteString]-\u003ea(b[Bool])",
        "package": "hedis",
        "partial": "Exists",
        "signature": "[ByteString]-\u003em(f[Bool])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:scriptFlush",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Status)",
        "fct-source": "src/Database-Redis-Commands.html#scriptFlush",
        "fct-type": "function",
        "title": "scriptFlush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "scriptFlush",
        "normalized": "",
        "package": "hedis",
        "partial": "Flush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:scriptKill",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Status)",
        "fct-source": "src/Database-Redis-Commands.html#scriptKill",
        "fct-type": "function",
        "title": "scriptKill"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "scriptKill",
        "normalized": "",
        "package": "hedis",
        "partial": "Kill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:scriptLoad",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f ByteString)",
        "fct-type": "function",
        "title": "scriptLoad"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "scriptLoad",
        "normalized": "ByteString-\u003ea(b ByteString)",
        "package": "hedis",
        "partial": "Load",
        "signature": "ByteString-\u003em(f ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sdiff",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "sdiff"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sdiff",
        "normalized": "[ByteString]-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "[ByteString]-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sdiffstore",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "sdiffstore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sdiffstore",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:select",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Integer-\u003e m (f Status)",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "select",
        "normalized": "Integer-\u003ea(b Status)",
        "package": "hedis",
        "partial": "",
        "signature": "Integer-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sendRequest",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esendRequest\u003c/a\u003e\u003c/code\u003e can be used to implement commands from experimental\n  versions of Redis. An example of how to implement a command is given\n  below.\n\u003c/p\u003e\u003cpre\u003e\n -- |Redis DEBUG OBJECT command\n debugObject :: ByteString -\u003e \u003ccode\u003e\u003ca\u003eRedis\u003c/a\u003e\u003c/code\u003e (Either \u003ccode\u003e\u003ca\u003eReply\u003c/a\u003e\u003c/code\u003e ByteString)\n debugObject key = \u003ccode\u003e\u003ca\u003esendRequest\u003c/a\u003e\u003c/code\u003e [\"DEBUG\", \"OBJECT\", key]\n\u003c/pre\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString] -\u003e m (f a)",
        "fct-source": "src/Database-Redis-Core.html#sendRequest",
        "fct-type": "function",
        "title": "sendRequest"
      },
      "index": {
        "description": "sendRequest can be used to implement commands from experimental versions of Redis An example of how to implement command is given below Redis DEBUG OBJECT command debugObject ByteString Redis Either Reply ByteString debugObject key sendRequest DEBUG OBJECT key",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sendRequest",
        "normalized": "[ByteString]-\u003ea(b c)",
        "package": "hedis",
        "partial": "Request",
        "signature": "[ByteString]-\u003em(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:set",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Status)",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "set",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Status)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:setbit",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "setbit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "setbit",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:setex",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Status)",
        "fct-type": "function",
        "title": "setex"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "setex",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Status)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:setnx",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "setnx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "setnx",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:setrange",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "setrange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "setrange",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sinter",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "sinter"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sinter",
        "normalized": "[ByteString]-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "[ByteString]-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sinterstore",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "sinterstore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sinterstore",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sismember",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "sismember"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sismember",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slaveof",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f Status)",
        "fct-type": "function",
        "title": "slaveof"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "slaveof",
        "normalized": "ByteString-\u003eByteString-\u003ea(b Status)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogCmd",
      "description": {
        "fct-descr": "\u003cp\u003eThe command and it's arguments.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]",
        "fct-source": "src/Database-Redis-ManualCommands.html#Slowlog",
        "fct-type": "function",
        "title": "slowlogCmd"
      },
      "index": {
        "description": "The command and it arguments",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "slowlogCmd",
        "normalized": "[ByteString]",
        "package": "hedis",
        "partial": "Cmd",
        "signature": "[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogGet",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Integer-\u003e m (f [Slowlog])",
        "fct-type": "function",
        "title": "slowlogGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "slowlogGet",
        "normalized": "Integer-\u003ea(b[Slowlog])",
        "package": "hedis",
        "partial": "Get",
        "signature": "Integer-\u003em(f[Slowlog])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogId",
      "description": {
        "fct-descr": "\u003cp\u003eA unique progressive identifier for every slow log entry.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Integer",
        "fct-source": "src/Database-Redis-ManualCommands.html#Slowlog",
        "fct-type": "function",
        "title": "slowlogId"
      },
      "index": {
        "description": "unique progressive identifier for every slow log entry",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "slowlogId",
        "normalized": "",
        "package": "hedis",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogLen",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Integer)",
        "fct-source": "src/Database-Redis-ManualCommands.html#slowlogLen",
        "fct-type": "function",
        "title": "slowlogLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "slowlogLen",
        "normalized": "",
        "package": "hedis",
        "partial": "Len",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogMicros",
      "description": {
        "fct-descr": "\u003cp\u003eThe amount of time needed for its execution, in microseconds.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Integer",
        "fct-source": "src/Database-Redis-ManualCommands.html#Slowlog",
        "fct-type": "function",
        "title": "slowlogMicros"
      },
      "index": {
        "description": "The amount of time needed for its execution in microseconds",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "slowlogMicros",
        "normalized": "",
        "package": "hedis",
        "partial": "Micros",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogReset",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f Status)",
        "fct-source": "src/Database-Redis-ManualCommands.html#slowlogReset",
        "fct-type": "function",
        "title": "slowlogReset"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "slowlogReset",
        "normalized": "",
        "package": "hedis",
        "partial": "Reset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:slowlogTimestamp",
      "description": {
        "fct-descr": "\u003cp\u003eThe unix timestamp at which the logged command was processed.\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Integer",
        "fct-source": "src/Database-Redis-ManualCommands.html#Slowlog",
        "fct-type": "function",
        "title": "slowlogTimestamp"
      },
      "index": {
        "description": "The unix timestamp at which the logged command was processed",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "slowlogTimestamp",
        "normalized": "",
        "package": "hedis",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:smembers",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "smembers"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "smembers",
        "normalized": "ByteString-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:smove",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e m (f Bool)",
        "fct-type": "function",
        "title": "smove"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "smove",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea(b Bool)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em(f Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sort",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e SortOpts-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sort",
        "normalized": "ByteString-\u003eSortOpts-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eSortOpts-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sortAlpha",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Bool",
        "fct-source": "src/Database-Redis-ManualCommands.html#SortOpts",
        "fct-type": "function",
        "title": "sortAlpha"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sortAlpha",
        "normalized": "",
        "package": "hedis",
        "partial": "Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sortBy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Database-Redis-ManualCommands.html#SortOpts",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sortBy",
        "normalized": "",
        "package": "hedis",
        "partial": "By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sortGet",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]",
        "fct-source": "src/Database-Redis-ManualCommands.html#SortOpts",
        "fct-type": "function",
        "title": "sortGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sortGet",
        "normalized": "[ByteString]",
        "package": "hedis",
        "partial": "Get",
        "signature": "[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sortLimit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "(Integer, Integer)",
        "fct-source": "src/Database-Redis-ManualCommands.html#SortOpts",
        "fct-type": "function",
        "title": "sortLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sortLimit",
        "normalized": "(Integer,Integer)",
        "package": "hedis",
        "partial": "Limit",
        "signature": "(Integer,Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sortOrder",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "SortOrder",
        "fct-source": "src/Database-Redis-ManualCommands.html#SortOpts",
        "fct-type": "function",
        "title": "sortOrder"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sortOrder",
        "normalized": "",
        "package": "hedis",
        "partial": "Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sortStore",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e SortOpts-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "sortStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sortStore",
        "normalized": "ByteString-\u003eByteString-\u003eSortOpts-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "Store",
        "signature": "ByteString-\u003eByteString-\u003eSortOpts-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:spop",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f (Maybe ByteString))",
        "fct-type": "function",
        "title": "spop"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "spop",
        "normalized": "ByteString-\u003ea(b(Maybe ByteString))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f(Maybe ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:srandmember",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f (Maybe ByteString))",
        "fct-type": "function",
        "title": "srandmember"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "srandmember",
        "normalized": "ByteString-\u003ea(b(Maybe ByteString))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f(Maybe ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:srem",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "srem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "srem",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:strlen",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "strlen"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "strlen",
        "normalized": "ByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:subscribe",
      "description": {
        "fct-descr": "\u003cp\u003eListen for messages published to the given channels\n  (\u003ca\u003ehttp://redis.io/commands/subscribe\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e PubSub",
        "fct-type": "function",
        "title": "subscribe"
      },
      "index": {
        "description": "Listen for messages published to the given channels http redis.io commands subscribe",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "subscribe",
        "normalized": "[ByteString]-\u003ePubSub",
        "package": "hedis",
        "partial": "",
        "signature": "[ByteString]-\u003ePubSub"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sunion",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "sunion"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sunion",
        "normalized": "[ByteString]-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "[ByteString]-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:sunionstore",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "sunionstore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "sunionstore",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:time",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "m (f (Integer, Integer))",
        "fct-source": "src/Database-Redis-Commands.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "time",
        "normalized": "a(b(Integer,Integer))",
        "package": "hedis",
        "partial": "",
        "signature": "m(f(Integer,Integer))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:ttl",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "ttl"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "ttl",
        "normalized": "ByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:unsubscribe",
      "description": {
        "fct-descr": "\u003cp\u003eStop listening for messages posted to the given channels\n  (\u003ca\u003ehttp://redis.io/commands/unsubscribe\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e PubSub",
        "fct-type": "function",
        "title": "unsubscribe"
      },
      "index": {
        "description": "Stop listening for messages posted to the given channels http redis.io commands unsubscribe",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "unsubscribe",
        "normalized": "[ByteString]-\u003ePubSub",
        "package": "hedis",
        "partial": "",
        "signature": "[ByteString]-\u003ePubSub"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:unwatch",
      "description": {
        "fct-descr": "\u003cp\u003eForget about all watched keys (\u003ca\u003ehttp://redis.io/commands/unwatch\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "Redis (Either Reply Status)",
        "fct-source": "src/Database-Redis-Transactions.html#unwatch",
        "fct-type": "function",
        "title": "unwatch"
      },
      "index": {
        "description": "Forget about all watched keys http redis.io commands unwatch",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "unwatch",
        "normalized": "",
        "package": "hedis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:watch",
      "description": {
        "fct-descr": "\u003cp\u003eWatch the given keys to determine execution of the MULTI/EXEC block\n  (\u003ca\u003ehttp://redis.io/commands/watch\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "[ByteString]-\u003e Redis (Either Reply Status)",
        "fct-type": "function",
        "title": "watch"
      },
      "index": {
        "description": "Watch the given keys to determine execution of the MULTI EXEC block http redis.io commands watch",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "watch",
        "normalized": "[ByteString]-\u003eRedis(Either Reply Status)",
        "package": "hedis",
        "partial": "",
        "signature": "[ByteString]-\u003eRedis(Either Reply Status)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zadd",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [(Double, ByteString)]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "zadd"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zadd",
        "normalized": "ByteString-\u003e[(Double,ByteString)]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[(Double,ByteString)]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zcard",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "zcard"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zcard",
        "normalized": "ByteString-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zcount",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Double-\u003e Double-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "zcount"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zcount",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zincrby",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e ByteString-\u003e m (f Double)",
        "fct-type": "function",
        "title": "zincrby"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zincrby",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea(b Double)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em(f Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zinterstore",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e Aggregate-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "zinterstore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zinterstore",
        "normalized": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zinterstoreWeights",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [(ByteString, Double)]-\u003e Aggregate-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "zinterstoreWeights"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zinterstoreWeights",
        "normalized": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "Weights",
        "signature": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrange",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "zrange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrange",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrangeWithscores",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f [(ByteString, Double)])",
        "fct-type": "function",
        "title": "zrangeWithscores"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrangeWithscores",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b[(ByteString,Double)])",
        "package": "hedis",
        "partial": "Withscores",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f[(ByteString,Double)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrangebyscore",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Double-\u003e Double-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "zrangebyscore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrangebyscore",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrangebyscoreLimit",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Double-\u003e Double-\u003e Integer-\u003e Integer-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "zrangebyscoreLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrangebyscoreLimit",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "Limit",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrangebyscoreWithscores",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Double-\u003e Double-\u003e m (f [(ByteString, Double)])",
        "fct-type": "function",
        "title": "zrangebyscoreWithscores"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrangebyscoreWithscores",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea(b[(ByteString,Double)])",
        "package": "hedis",
        "partial": "Withscores",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em(f[(ByteString,Double)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrangebyscoreWithscoresLimit",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Double-\u003e Double-\u003e Integer-\u003e Integer-\u003e m (f [(ByteString, Double)])",
        "fct-type": "function",
        "title": "zrangebyscoreWithscoresLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrangebyscoreWithscoresLimit",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea(b[(ByteString,Double)])",
        "package": "hedis",
        "partial": "Withscores Limit",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em(f[(ByteString,Double)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrank",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f (Maybe Integer))",
        "fct-type": "function",
        "title": "zrank"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrank",
        "normalized": "ByteString-\u003eByteString-\u003ea(b(Maybe Integer))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f(Maybe Integer))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrem",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "zrem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrem",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zremrangebyrank",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "zremrangebyrank"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zremrangebyrank",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zremrangebyscore",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Double-\u003e Double-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "zremrangebyscore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zremrangebyscore",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrange",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "zrevrange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrevrange",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrangeWithscores",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Integer-\u003e Integer-\u003e m (f [(ByteString, Double)])",
        "fct-type": "function",
        "title": "zrevrangeWithscores"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrevrangeWithscores",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea(b[(ByteString,Double)])",
        "package": "hedis",
        "partial": "Withscores",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em(f[(ByteString,Double)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrangebyscore",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Double-\u003e Double-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "zrevrangebyscore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrevrangebyscore",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrangebyscoreLimit",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Double-\u003e Double-\u003e Integer-\u003e Integer-\u003e m (f [ByteString])",
        "fct-type": "function",
        "title": "zrevrangebyscoreLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrevrangebyscoreLimit",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea(b[ByteString])",
        "package": "hedis",
        "partial": "Limit",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em(f[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrangebyscoreWithscores",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Double-\u003e Double-\u003e m (f [(ByteString, Double)])",
        "fct-type": "function",
        "title": "zrevrangebyscoreWithscores"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrevrangebyscoreWithscores",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea(b[(ByteString,Double)])",
        "package": "hedis",
        "partial": "Withscores",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em(f[(ByteString,Double)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrangebyscoreWithscoresLimit",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e Double-\u003e Double-\u003e Integer-\u003e Integer-\u003e m (f [(ByteString, Double)])",
        "fct-type": "function",
        "title": "zrevrangebyscoreWithscoresLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrevrangebyscoreWithscoresLimit",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea(b[(ByteString,Double)])",
        "package": "hedis",
        "partial": "Withscores Limit",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em(f[(ByteString,Double)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zrevrank",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f (Maybe Integer))",
        "fct-type": "function",
        "title": "zrevrank"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zrevrank",
        "normalized": "ByteString-\u003eByteString-\u003ea(b(Maybe Integer))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f(Maybe Integer))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zscore",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e ByteString-\u003e m (f (Maybe Double))",
        "fct-type": "function",
        "title": "zscore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zscore",
        "normalized": "ByteString-\u003eByteString-\u003ea(b(Maybe Double))",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em(f(Maybe Double))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zunionstore",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [ByteString]-\u003e Aggregate-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "zunionstore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zunionstore",
        "normalized": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003em(f Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis/docs/Database-Redis.html#v:zunionstoreWeights",
      "description": {
        "fct-module": "Database.Redis",
        "fct-package": "hedis",
        "fct-signature": "ByteString-\u003e [(ByteString, Double)]-\u003e Aggregate-\u003e m (f Integer)",
        "fct-type": "function",
        "title": "zunionstoreWeights"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis",
        "module": "Database.Redis",
        "name": "zunionstoreWeights",
        "normalized": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003ea(b Integer)",
        "package": "hedis",
        "partial": "Weights",
        "signature": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003em(f Integer)"
      }
    }
  }
]