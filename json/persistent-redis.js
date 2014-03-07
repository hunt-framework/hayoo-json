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
        "word": "persistent-redis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Redis",
          "name": "Redis",
          "package": "persistent-redis",
          "source": "src/Database-Persist-Redis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "Redis",
          "package": "persistent-redis",
          "partial": "Redis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA threadsafe pool of network connections to a Redis server. Use the\n  \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e function to create one.\n\u003c/p\u003e",
          "module": "Database.Persist.Redis",
          "name": "Connection",
          "package": "persistent-redis",
          "type": "data"
        },
        "index": {
          "description": "threadsafe pool of network connections to Redis server Use the connect function to create one",
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "Connection",
          "package": "persistent-redis",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Redis",
          "name": "PortID",
          "package": "persistent-redis",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "PortID",
          "package": "persistent-redis",
          "partial": "Port ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#t:PortID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext for normal command execution, outside of transactions. Use\n  \u003ccode\u003e\u003ca\u003erunRedis\u003c/a\u003e\u003c/code\u003e to run actions of this type.\n\u003c/p\u003e\u003cp\u003eIn this context, each result is wrapped in an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e to account for the\n  possibility of Redis returning an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e reply.\n\u003c/p\u003e",
          "module": "Database.Persist.Redis",
          "name": "Redis",
          "package": "persistent-redis",
          "type": "data"
        },
        "index": {
          "description": "Context for normal command execution outside of transactions Use runRedis to run actions of this type In this context each result is wrapped in an Either to account for the possibility of Redis returning an Error reply",
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "Redis",
          "package": "persistent-redis",
          "partial": "Redis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#t:Redis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Redis",
          "name": "RedisAuth",
          "package": "persistent-redis",
          "source": "src/Database-Persist-Redis-Config.html#RedisAuth",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "RedisAuth",
          "package": "persistent-redis",
          "partial": "Redis Auth",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#t:RedisAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Redis",
          "name": "RedisBackend",
          "package": "persistent-redis",
          "source": "src/Database-Persist-Redis-Store.html#RedisBackend",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "RedisBackend",
          "package": "persistent-redis",
          "partial": "Redis Backend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#t:RedisBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation required to connect to a Redis server\n\u003c/p\u003e",
          "module": "Database.Persist.Redis",
          "name": "RedisConf",
          "package": "persistent-redis",
          "source": "src/Database-Persist-Redis-Config.html#RedisConf",
          "type": "data"
        },
        "index": {
          "description": "Information required to connect to Redis server",
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "RedisConf",
          "package": "persistent-redis",
          "partial": "Redis Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#t:RedisConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class captures the following behaviour: In a context \u003ccode\u003em\u003c/code\u003e, a command\n  will return it's result wrapped in a \"container\" of type \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePlease refer to the Command Type Signatures section of this page for more\n  information.\n\u003c/p\u003e",
          "module": "Database.Persist.Redis",
          "name": "RedisCtx",
          "package": "persistent-redis",
          "type": "class"
        },
        "index": {
          "description": "This class captures the following behaviour In context command will return it result wrapped in container of type Please refer to the Command Type Signatures section of this page for more information",
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "RedisCtx",
          "package": "persistent-redis",
          "partial": "Redis Ctx",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#t:RedisCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad reader transformer keeping Redis connection through out the work\n\u003c/p\u003e",
          "module": "Database.Persist.Redis",
          "name": "RedisT",
          "package": "persistent-redis",
          "source": "src/Database-Persist-Redis-Config.html#RedisT",
          "type": "newtype"
        },
        "index": {
          "description": "Monad reader transformer keeping Redis connection through out the work",
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "RedisT",
          "package": "persistent-redis",
          "partial": "Redis",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#t:RedisT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Redis",
          "name": "PortNumber",
          "package": "persistent-redis",
          "signature": "PortNumber PortNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "PortNumber",
          "package": "persistent-redis",
          "partial": "Port Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:PortNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Redis",
          "name": "RedisAuth",
          "package": "persistent-redis",
          "signature": "RedisAuth Text",
          "source": "src/Database-Persist-Redis-Config.html#RedisAuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "RedisAuth",
          "package": "persistent-redis",
          "partial": "Redis Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:RedisAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Redis",
          "name": "RedisConf",
          "package": "persistent-redis",
          "signature": "RedisConf",
          "source": "src/Database-Persist-Redis-Config.html#RedisConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "RedisConf",
          "package": "persistent-redis",
          "partial": "Redis Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:RedisConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Redis",
          "name": "RedisT",
          "package": "persistent-redis",
          "signature": "RedisT",
          "source": "src/Database-Persist-Redis-Config.html#RedisT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "RedisT",
          "package": "persistent-redis",
          "partial": "Redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:RedisT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Redis",
          "name": "Service",
          "package": "persistent-redis",
          "signature": "Service String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "Service",
          "package": "persistent-redis",
          "partial": "Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:Service"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Redis",
          "name": "UnixSocket",
          "package": "persistent-redis",
          "signature": "UnixSocket String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "UnixSocket",
          "package": "persistent-redis",
          "partial": "Unix Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:UnixSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute Redis transaction inside RedisT monad transformer\n\u003c/p\u003e",
          "module": "Database.Persist.Redis",
          "name": "execRedisT",
          "package": "persistent-redis",
          "signature": "RedisTx (Queued a) -\u003e RedisT m a",
          "source": "src/Database-Persist-Redis-Store.html#execRedisT",
          "type": "function"
        },
        "index": {
          "description": "Execute Redis transaction inside RedisT monad transformer",
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "execRedisT",
          "normalized": "RedisTx(Queued a)-\u003eRedisT b a",
          "package": "persistent-redis",
          "partial": "Redis",
          "signature": "RedisTx(Queued a)-\u003eRedisT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:execRedisT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuth info\n\u003c/p\u003e",
          "module": "Database.Persist.Redis",
          "name": "rdAuth",
          "package": "persistent-redis",
          "signature": "Maybe RedisAuth",
          "source": "src/Database-Persist-Redis-Config.html#RedisConf",
          "type": "function"
        },
        "index": {
          "description": "Auth info",
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "rdAuth",
          "package": "persistent-redis",
          "partial": "Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:rdAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost\n\u003c/p\u003e",
          "module": "Database.Persist.Redis",
          "name": "rdHost",
          "package": "persistent-redis",
          "signature": "Text",
          "source": "src/Database-Persist-Redis-Config.html#RedisConf",
          "type": "function"
        },
        "index": {
          "description": "Host",
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "rdHost",
          "package": "persistent-redis",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:rdHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of connections\n\u003c/p\u003e",
          "module": "Database.Persist.Redis",
          "name": "rdMaxConn",
          "package": "persistent-redis",
          "signature": "Int",
          "source": "src/Database-Persist-Redis-Config.html#RedisConf",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of connections",
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "rdMaxConn",
          "package": "persistent-redis",
          "partial": "Max Conn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:rdMaxConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort\n\u003c/p\u003e",
          "module": "Database.Persist.Redis",
          "name": "rdPort",
          "package": "persistent-redis",
          "signature": "PortID",
          "source": "src/Database-Persist-Redis-Config.html#RedisConf",
          "type": "function"
        },
        "index": {
          "description": "Port",
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "rdPort",
          "package": "persistent-redis",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:rdPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Redis",
          "name": "runRedisPool",
          "package": "persistent-redis",
          "signature": "RedisT m a -\u003e Connection -\u003e m a",
          "source": "src/Database-Persist-Redis-Config.html#runRedisPool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "runRedisPool",
          "normalized": "RedisT a b-\u003eConnection-\u003ea b",
          "package": "persistent-redis",
          "partial": "Redis Pool",
          "signature": "RedisT m a-\u003eConnection-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:runRedisPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Persist.Redis",
          "name": "runRedisT",
          "package": "persistent-redis",
          "signature": "ReaderT Connection m a",
          "source": "src/Database-Persist-Redis-Config.html#RedisT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "runRedisT",
          "package": "persistent-redis",
          "partial": "Redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:runRedisT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts connection from RedisT monad transformer\n\u003c/p\u003e",
          "module": "Database.Persist.Redis",
          "name": "thisConnection",
          "package": "persistent-redis",
          "signature": "RedisT m Connection",
          "source": "src/Database-Persist-Redis-Config.html#thisConnection",
          "type": "function"
        },
        "index": {
          "description": "Extracts connection from RedisT monad transformer",
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "thisConnection",
          "package": "persistent-redis",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:thisConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a connection reader function against a Redis configuration\n\u003c/p\u003e",
          "module": "Database.Persist.Redis",
          "name": "withRedisConn",
          "package": "persistent-redis",
          "signature": "RedisConf -\u003e (Connection -\u003e m a) -\u003e m a",
          "source": "src/Database-Persist-Redis-Config.html#withRedisConn",
          "type": "function"
        },
        "index": {
          "description": "Run connection reader function against Redis configuration",
          "hierarchy": "Database Persist Redis",
          "module": "Database.Persist.Redis",
          "name": "withRedisConn",
          "normalized": "RedisConf-\u003e(Connection-\u003ea b)-\u003ea b",
          "package": "persistent-redis",
          "partial": "Redis Conn",
          "signature": "RedisConf-\u003e(Connection-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-redis/docs/Database-Persist-Redis.html#v:withRedisConn"
      }
    }
  ]
]