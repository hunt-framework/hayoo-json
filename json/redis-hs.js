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
        "word": "redis-hs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule containing all the functions necessary to make a connection to\n an active Redis server.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Connection",
          "name": "Connection",
          "package": "redis-hs",
          "source": "src/Database-Redis-Connection.html",
          "type": "module"
        },
        "index": {
          "description": "Module containing all the functions necessary to make connection to an active Redis server",
          "hierarchy": "Database Redis Connection",
          "module": "Database.Redis.Connection",
          "name": "Connection",
          "package": "redis-hs",
          "partial": "Connection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Connection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Connection",
          "name": "connect",
          "package": "redis-hs",
          "signature": "HostName-\u003e PortNumber-\u003e IO Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Connection",
          "module": "Database.Redis.Connection",
          "name": "connect",
          "normalized": "HostName-\u003ePortNumber-\u003eIO Handle",
          "package": "redis-hs",
          "signature": "HostName-\u003ePortNumber-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Connection.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number \u003ccode\u003e6379\u003c/code\u003e as a Network \u003ccode\u003e\u003ca\u003ePortNumber\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Redis.Connection",
          "name": "defaultPort",
          "package": "redis-hs",
          "signature": "PortNumber",
          "source": "src/Database-Redis-Connection.html#defaultPort",
          "type": "function"
        },
        "index": {
          "description": "The number as Network PortNumber",
          "hierarchy": "Database Redis Connection",
          "module": "Database.Redis.Connection",
          "name": "defaultPort",
          "package": "redis-hs",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Connection.html#v:defaultPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Connection",
          "name": "disconnect",
          "package": "redis-hs",
          "signature": "Handle -\u003e IO ()",
          "source": "src/Database-Redis-Connection.html#disconnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Connection",
          "module": "Database.Redis.Connection",
          "name": "disconnect",
          "normalized": "Handle-\u003eIO()",
          "package": "redis-hs",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Connection.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe string \u003ccode\u003e127.0.0.1\u003c/code\u003e as a Network \u003ccode\u003e\u003ca\u003eHostName\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.Redis.Connection",
          "name": "localhost",
          "package": "redis-hs",
          "signature": "HostName",
          "source": "src/Database-Redis-Connection.html#localhost",
          "type": "function"
        },
        "index": {
          "description": "The string as Network HostName",
          "hierarchy": "Database Redis Connection",
          "module": "Database.Redis.Connection",
          "name": "localhost",
          "package": "redis-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Connection.html#v:localhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.General",
          "name": "General",
          "package": "redis-hs",
          "source": "src/Database-Redis-General.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "General",
          "package": "redis-hs",
          "partial": "General",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDBSIZE\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "databaseSize",
          "package": "redis-hs",
          "signature": "Handle -\u003e IO (Maybe RedisReply)",
          "source": "src/Database-Redis-General.html#databaseSize",
          "type": "function"
        },
        "index": {
          "description": "DBSIZE",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "databaseSize",
          "normalized": "Handle-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Size",
          "signature": "Handle-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:databaseSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFLUSHALL\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "flushAll",
          "package": "redis-hs",
          "signature": "Handle -\u003e IO (Maybe RedisReply)",
          "source": "src/Database-Redis-General.html#flushAll",
          "type": "function"
        },
        "index": {
          "description": "FLUSHALL",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "flushAll",
          "normalized": "Handle-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "All",
          "signature": "Handle-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:flushAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFLUSHDB\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "flushDB",
          "package": "redis-hs",
          "signature": "Handle -\u003e IO (Maybe RedisReply)",
          "source": "src/Database-Redis-General.html#flushDB",
          "type": "function"
        },
        "index": {
          "description": "FLUSHDB",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "flushDB",
          "normalized": "Handle-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "DB",
          "signature": "Handle-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:flushDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eDEL\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/DelCommand\u003c/a\u003e) with a\n list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e arguments.\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keyDelete",
          "package": "redis-hs",
          "signature": "Handle-\u003e [String]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls DEL http code.google.com redis wiki DelCommand with list of String arguments",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyDelete",
          "normalized": "Handle-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Delete",
          "signature": "Handle-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eDEL\u003c/code\u003e with a list of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e arguments.\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keyDeleteB",
          "package": "redis-hs",
          "signature": "Handle-\u003e [ByteString]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls DEL with list of ByteString arguments",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyDeleteB",
          "normalized": "Handle-\u003e[ByteString]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Delete",
          "signature": "Handle-\u003e[ByteString]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyDeleteB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eEXISTS\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/ExistsCommand\u003c/a\u003e)\n with a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keyExists",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls EXISTS http code.google.com redis wiki ExistsCommand with String argument",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyExists",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Exists",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eEXISTS\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keyExistsB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls EXISTS with ByteString argument",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyExistsB",
          "normalized": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Exists",
          "signature": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyExistsB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEXPIRE\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keyExpire",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "EXPIRE",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyExpire",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Expire",
          "signature": "Handle-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyExpire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEXPIREAT\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keyExpireAt",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "EXPIREAT",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyExpireAt",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Expire At",
          "signature": "Handle-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyExpireAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.General",
          "name": "keyMove",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyMove",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Move",
          "signature": "Handle-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePERSIST\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keyPersist",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "PERSIST",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyPersist",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Persist",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eRANDOMKEY\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/RandomkeyCommand\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keyRandom",
          "package": "redis-hs",
          "signature": "Handle -\u003e IO (Maybe RedisReply)",
          "source": "src/Database-Redis-General.html#keyRandom",
          "type": "function"
        },
        "index": {
          "description": "Calls RANDOMKEY http code.google.com redis wiki RandomkeyCommand",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyRandom",
          "normalized": "Handle-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Random",
          "signature": "Handle-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eRENAME\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/RenameCommand\u003c/a\u003e) with\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e arguments.\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keyRename",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls RENAME http code.google.com redis wiki RenameCommand with String arguments",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyRename",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Rename",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyRename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls  \u003ccode\u003eRENAMENX\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/RenamenxCommand\u003c/a\u003e)\n with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e arguments.\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keyRenameNX",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls RENAMENX http code.google.com redis wiki RenamenxCommand with String arguments",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyRenameNX",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Rename NX",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyRenameNX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.General",
          "name": "keyTimeToLive",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyTimeToLive",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Time To Live",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyTimeToLive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eTYPE\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/TypeCommand\u003c/a\u003e) with a\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keyType",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls TYPE http code.google.com redis wiki TypeCommand with String argument",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyType",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Type",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eTYPE\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/TypeCommand\u003c/a\u003e) with a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keyTypeB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls TYPE http code.google.com redis wiki TypeCommand with ByteString argument",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keyTypeB",
          "normalized": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Type",
          "signature": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keyTypeB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eKEYS\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/KeysCommand\u003c/a\u003e) with a\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keys",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls KEYS http code.google.com redis wiki KeysCommand with String argument",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keys",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eKEYS\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "keysB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls KEYS with ByteString argument",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "keysB",
          "normalized": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "signature": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:keysB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe PING command should return PONG\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "ping",
          "package": "redis-hs",
          "signature": "Handle -\u003e IO (Maybe RedisReply)",
          "source": "src/Database-Redis-General.html#ping",
          "type": "function"
        },
        "index": {
          "description": "The PING command should return PONG",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "ping",
          "normalized": "Handle-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "signature": "Handle-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eSELECT\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/SelectCommand\u003c/a\u003e)\n with an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "select",
          "package": "redis-hs",
          "signature": "Handle-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls SELECT http code.google.com redis wiki SelectCommand with an Int argument",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "select",
          "normalized": "Handle-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "signature": "Handle-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlaceholder for a better-designed function\n\u003c/p\u003e",
          "module": "Database.Redis.General",
          "name": "unwrapReply",
          "package": "redis-hs",
          "signature": "Maybe RedisReply -\u003e [String]",
          "source": "src/Database-Redis-General.html#unwrapReply",
          "type": "function"
        },
        "index": {
          "description": "Placeholder for better-designed function",
          "hierarchy": "Database Redis General",
          "module": "Database.Redis.General",
          "name": "unwrapReply",
          "normalized": "Maybe RedisReply-\u003e[String]",
          "package": "redis-hs",
          "partial": "Reply",
          "signature": "Maybe RedisReply-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-General.html#v:unwrapReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Hash",
          "name": "Hash",
          "package": "redis-hs",
          "source": "src/Database-Redis-Hash.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "Hash",
          "package": "redis-hs",
          "partial": "Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eHDEL\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/HdelCommand\u003c/a\u003e)\n with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashDelete",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HDEL http code.google.com redis wiki HdelCommand with String arguments",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashDelete",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Delete",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eHEXISTS\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/HexistsCommand\u003c/a\u003e)\n with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashExists",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HEXISTS http code.google.com redis wiki HexistsCommand with String arguments",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashExists",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Exists",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eHGET\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashGet",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HGET with ByteString arguments",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashGet",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Get",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eHGETALL\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/HgetallCommand\u003c/a\u003e)\n with a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashGetAll",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HGETALL http code.google.com redis wiki HgetallCommand with String argument",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashGetAll",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Get All",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashGetAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eHGET\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashGetB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HGET with ByteString arguments",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashGetB",
          "normalized": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Get",
          "signature": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashGetB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eHINCRBY\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashIncrementBy",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HINCRBY with String and Int arguments",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashIncrementBy",
          "normalized": "Handle-\u003eString-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Increment By",
          "signature": "Handle-\u003eString-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashIncrementBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eHKEYS\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/HkeysCommand\u003c/a\u003e)\n with a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument. N.B. despite its name, it returns fields.\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashKeys",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HKEYS http code.google.com redis wiki HkeysCommand with String argument N.B despite its name it returns fields",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashKeys",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Keys",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eHLEN\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/HlenCommand\u003c/a\u003e)\n with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashLength",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HLEN http code.google.com redis wiki HlenCommand with String arguments",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashLength",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Length",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eHMGET\u003c/code\u003e \u003ca\u003ehttp://code.google.com/p/redis/wiki/HmgetCommand\u003c/a\u003e  with a\n list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashMultiGet",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e [String]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HMGET http code.google.com redis wiki HmgetCommand with list of String",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashMultiGet",
          "normalized": "Handle-\u003eString-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Multi Get",
          "signature": "Handle-\u003eString-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashMultiGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls  \u003ccode\u003eHMSET\u003c/code\u003e \u003ca\u003ehttp://code.google.com/p/redis/wiki/HmsetCommand\u003c/a\u003e  with a\n list of tuples (key, value)\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashMultiSet",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e [(String, String)]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HMSET http code.google.com redis wiki HmsetCommand with list of tuples key value",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashMultiSet",
          "normalized": "Handle-\u003eString-\u003e[(String,String)]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Multi Set",
          "signature": "Handle-\u003eString-\u003e[(String,String)]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashMultiSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eHSET\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashSet",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HSET with String arguments",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashSet",
          "normalized": "Handle-\u003eString-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set",
          "signature": "Handle-\u003eString-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eHSET\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashSetB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e ByteString-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HSET with ByteString arguments",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashSetB",
          "normalized": "Handle-\u003eByteString-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set",
          "signature": "Handle-\u003eByteString-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashSetB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eHVALS\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/HvalsCommand\u003c/a\u003e)\n with a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Database.Redis.Hash",
          "name": "hashValues",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls HVALS http code.google.com redis wiki HvalsCommand with String argument",
          "hierarchy": "Database Redis Hash",
          "module": "Database.Redis.Hash",
          "name": "hashValues",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Values",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Hash.html#v:hashValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis  module processes  requests and replies,  and contains  some utility\n functions. The  methods by which  requests are processed  are stylistically\n modified versions of  those found in Alexander  Bogdanov's \u003ccode\u003eredis\u003c/code\u003e package,\n which can be found on hackage at \u003ca\u003ehttp://hackage.haskell.org/package/redis\u003c/a\u003e\n I have found  them faster for operations on UTF8  encoded text than \u003ccode\u003eredis\u003c/code\u003e\n package, but your mileage may vary.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Internal",
          "name": "Internal",
          "package": "redis-hs",
          "source": "src/Database-Redis-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module processes requests and replies and contains some utility functions The methods by which requests are processed are stylistically modified versions of those found in Alexander Bogdanov redis package which can be found on hackage at http hackage.haskell.org package redis have found them faster for operations on UTF8 encoded text than redis package but your mileage may vary",
          "hierarchy": "Database Redis Internal",
          "module": "Database.Redis.Internal",
          "name": "Internal",
          "package": "redis-hs",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Database.Redis.Internal",
          "name": "ByteString",
          "package": "redis-hs",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Database Redis Internal",
          "module": "Database.Redis.Internal",
          "name": "ByteString",
          "package": "redis-hs",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Internal.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Internal",
          "name": "RedisReply",
          "package": "redis-hs",
          "source": "src/Database-Redis-Internal.html#RedisReply",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Internal",
          "module": "Database.Redis.Internal",
          "name": "RedisReply",
          "package": "redis-hs",
          "partial": "Redis Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Internal.html#t:RedisReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Internal",
          "name": "RedisBulk",
          "package": "redis-hs",
          "signature": "RedisBulk [Maybe RedisReply]",
          "source": "src/Database-Redis-Internal.html#RedisReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Internal",
          "module": "Database.Redis.Internal",
          "name": "RedisBulk",
          "normalized": "RedisBulk[Maybe RedisReply]",
          "package": "redis-hs",
          "partial": "Redis Bulk",
          "signature": "RedisBulk[Maybe RedisReply]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Internal.html#v:RedisBulk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Internal",
          "name": "RedisError",
          "package": "redis-hs",
          "signature": "RedisError ByteString",
          "source": "src/Database-Redis-Internal.html#RedisReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Internal",
          "module": "Database.Redis.Internal",
          "name": "RedisError",
          "package": "redis-hs",
          "partial": "Redis Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Internal.html#v:RedisError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Internal",
          "name": "RedisInteger",
          "package": "redis-hs",
          "signature": "RedisInteger Int",
          "source": "src/Database-Redis-Internal.html#RedisReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Internal",
          "module": "Database.Redis.Internal",
          "name": "RedisInteger",
          "package": "redis-hs",
          "partial": "Redis Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Internal.html#v:RedisInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Internal",
          "name": "RedisSingle",
          "package": "redis-hs",
          "signature": "RedisSingle ByteString",
          "source": "src/Database-Redis-Internal.html#RedisReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Internal",
          "module": "Database.Redis.Internal",
          "name": "RedisSingle",
          "package": "redis-hs",
          "partial": "Redis Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Internal.html#v:RedisSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for \"rn\". Redis uses CRLF.\n\u003c/p\u003e",
          "module": "Database.Redis.Internal",
          "name": "crlf",
          "package": "redis-hs",
          "signature": "String",
          "source": "src/Database-Redis-Internal.html#crlf",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for rn Redis uses CRLF",
          "hierarchy": "Database Redis Internal",
          "module": "Database.Redis.Internal",
          "name": "crlf",
          "package": "redis-hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Internal.html#v:crlf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot strictly necessary, but can add readability\n\u003c/p\u003e",
          "module": "Database.Redis.Internal",
          "name": "fromUTF8",
          "package": "redis-hs",
          "signature": "ByteString -\u003e String",
          "source": "src/Database-Redis-Internal.html#fromUTF8",
          "type": "function"
        },
        "index": {
          "description": "Not strictly necessary but can add readability",
          "hierarchy": "Database Redis Internal",
          "module": "Database.Redis.Internal",
          "name": "fromUTF8",
          "normalized": "ByteString-\u003eString",
          "package": "redis-hs",
          "partial": "UTF",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Internal.html#v:fromUTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a list of pair tuples into a list\n\u003c/p\u003e",
          "module": "Database.Redis.Internal",
          "name": "pairsToList",
          "package": "redis-hs",
          "signature": "[(a, a)] -\u003e [a]",
          "source": "src/Database-Redis-Internal.html#pairsToList",
          "type": "function"
        },
        "index": {
          "description": "Turns list of pair tuples into list",
          "hierarchy": "Database Redis Internal",
          "module": "Database.Redis.Internal",
          "name": "pairsToList",
          "normalized": "[(a,a)]-\u003e[a]",
          "package": "redis-hs",
          "partial": "To List",
          "signature": "[(a,a)]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Internal.html#v:pairsToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats and sends the request\n\u003c/p\u003e",
          "module": "Database.Redis.Internal",
          "name": "request",
          "package": "redis-hs",
          "signature": "Handle-\u003e [ByteString]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Formats and sends the request",
          "hierarchy": "Database Redis Internal",
          "module": "Database.Redis.Internal",
          "name": "request",
          "normalized": "Handle-\u003e[ByteString]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "signature": "Handle-\u003e[ByteString]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Internal.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot strictly necessary, but can add readability\n\u003c/p\u003e",
          "module": "Database.Redis.Internal",
          "name": "toUTF8",
          "package": "redis-hs",
          "signature": "String -\u003e ByteString",
          "source": "src/Database-Redis-Internal.html#toUTF8",
          "type": "function"
        },
        "index": {
          "description": "Not strictly necessary but can add readability",
          "hierarchy": "Database Redis Internal",
          "module": "Database.Redis.Internal",
          "name": "toUTF8",
          "normalized": "String-\u003eByteString",
          "package": "redis-hs",
          "partial": "UTF",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Internal.html#v:toUTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.List",
          "name": "List",
          "package": "redis-hs",
          "source": "src/Database-Redis-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "List",
          "package": "redis-hs",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBLPOP\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listBlockHeadPop",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "BLPOP",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listBlockHeadPop",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Block Head Pop",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listBlockHeadPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBRPOP\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listBlockTailPop",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "BRPOP",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listBlockTailPop",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Block Tail Pop",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listBlockTailPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLPOP\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listHeadPop",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "LPOP",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listHeadPop",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Head Pop",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listHeadPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eLINDEX\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listIndex",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls LINDEX with String and Int arguments",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listIndex",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Index",
          "signature": "Handle-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eLINDEX\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listIndexB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls LINDEX with ByteString and Int arguments",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listIndexB",
          "normalized": "Handle-\u003eByteString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Index",
          "signature": "Handle-\u003eByteString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listIndexB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eLPUSH\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listLeftPush",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls LPUSH with String arguments",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listLeftPush",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Left Push",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listLeftPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eLPUSH\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listLeftPushB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls LPUSH with ByteString arguments",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listLeftPushB",
          "normalized": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Left Push",
          "signature": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listLeftPushB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eLLEN\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listLength",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls LLEN with String argument",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listLength",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Length",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eLLEN\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listLengthB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls LLEN with ByteString argument",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listLengthB",
          "normalized": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Length",
          "signature": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listLengthB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRPOPLPUSH\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listRPopLPush",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "RPOPLPUSH",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listRPopLPush",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "RPop LPush",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listRPopLPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eLRANGE\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listRange",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls LRANGE with String argument",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listRange",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Range",
          "signature": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eLRANGE\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listRangeB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e Int-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls LRANGE with ByteString argument",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listRangeB",
          "normalized": "Handle-\u003eByteString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Range",
          "signature": "Handle-\u003eByteString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listRangeB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eLREM\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e arguments.  This command deletes\n values matching the \u003ccode\u003evalue\u003c/code\u003e parameter. A negative \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument deletes\n starting at the tail and moving towards the head (or from right to left,\n after the push commands). A positive argument deletes from left to right.\n Zero deletes all the elements.  Returns the number of elements deleted\n (which should match the number) or 0 on failure.\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listRemove",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls LREM with String and Int arguments This command deletes values matching the value parameter negative Int argument deletes starting at the tail and moving towards the head or from right to left after the push commands positive argument deletes from left to right Zero deletes all the elements Returns the number of elements deleted which should match the number or on failure",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listRemove",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Remove",
          "signature": "Handle-\u003eString-\u003eInt-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listRemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eLREM\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e arguments.\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listRemoveB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e Int-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls LREM with ByteString and Int arguments",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listRemoveB",
          "normalized": "Handle-\u003eByteString-\u003eInt-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Remove",
          "signature": "Handle-\u003eByteString-\u003eInt-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listRemoveB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eRPUSH\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listRightPush",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls RPUSH with String arguments",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listRightPush",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Right Push",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listRightPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eRPUSH\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listRightPushB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls RPUSH with ByteString arguments",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listRightPushB",
          "normalized": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Right Push",
          "signature": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listRightPushB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.List",
          "name": "listSet",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listSet",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set",
          "signature": "Handle-\u003eString-\u003eInt-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRPOP\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listTailPop",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "RPOP",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listTailPop",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Tail Pop",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listTailPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLTRIM\n\u003c/p\u003e",
          "module": "Database.Redis.List",
          "name": "listTrim",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "LTRIM",
          "hierarchy": "Database Redis List",
          "module": "Database.Redis.List",
          "name": "listTrim",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Trim",
          "signature": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-List.html#v:listTrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Set",
          "name": "Set",
          "package": "redis-hs",
          "source": "src/Database-Redis-Set.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "Set",
          "package": "redis-hs",
          "partial": "Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSADD\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setAdd",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SADD",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setAdd",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Add",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSADD\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setAddB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SADD",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setAddB",
          "normalized": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Add",
          "signature": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setAddB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSCARD\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setCardinality",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SCARD",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setCardinality",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Cardinality",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setCardinality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSDIFF\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setDiff",
          "package": "redis-hs",
          "signature": "Handle-\u003e [String]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SDIFF",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setDiff",
          "normalized": "Handle-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Diff",
          "signature": "Handle-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSDIFFSTORE\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setDiffStore",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e [String]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SDIFFSTORE",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setDiffStore",
          "normalized": "Handle-\u003eString-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Diff Store",
          "signature": "Handle-\u003eString-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setDiffStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSINTER\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setIntersect",
          "package": "redis-hs",
          "signature": "Handle-\u003e [String]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SINTER",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setIntersect",
          "normalized": "Handle-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Intersect",
          "signature": "Handle-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSINTERSTORE\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setIntersectStore",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e [String]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SINTERSTORE",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setIntersectStore",
          "normalized": "Handle-\u003eString-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Intersect Store",
          "signature": "Handle-\u003eString-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setIntersectStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSISMEMBER\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setIsMember",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SISMEMBER",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setIsMember",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Is Member",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setIsMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSISMEMBER\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setIsMemberB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SISMEMBER",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setIsMemberB",
          "normalized": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Is Member",
          "signature": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setIsMemberB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSMEMBERS\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setMembers",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SMEMBERS",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setMembers",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Members",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setMembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSMEMBERS\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setMembersB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SMEMBERS",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setMembersB",
          "normalized": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Members",
          "signature": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setMembersB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSMOVE\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setMove",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SMOVE",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setMove",
          "normalized": "Handle-\u003eString-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Move",
          "signature": "Handle-\u003eString-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSPOP\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setPop",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SPOP",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setPop",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Pop",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSRANDMEMBER\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setRandMember",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SRANDMEMBER",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setRandMember",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Rand Member",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setRandMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSRANDMEMBER\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setRandMemberB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SRANDMEMBER",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setRandMemberB",
          "normalized": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Rand Member",
          "signature": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setRandMemberB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSREM\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setRemove",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SREM",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setRemove",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Remove",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setRemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSREM\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setRemoveB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SREM",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setRemoveB",
          "normalized": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Remove",
          "signature": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setRemoveB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSUNION\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setUnion",
          "package": "redis-hs",
          "signature": "Handle-\u003e [String]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SUNION",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setUnion",
          "normalized": "Handle-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Union",
          "signature": "Handle-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSUNIONSTORE\n\u003c/p\u003e",
          "module": "Database.Redis.Set",
          "name": "setUnionStore",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e [String]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SUNIONSTORE",
          "hierarchy": "Database Redis Set",
          "module": "Database.Redis.Set",
          "name": "setUnionStore",
          "normalized": "Handle-\u003eString-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Union Store",
          "signature": "Handle-\u003eString-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Set.html#v:setUnionStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.SortedSet",
          "name": "SortedSet",
          "package": "redis-hs",
          "source": "src/Database-Redis-SortedSet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "SortedSet",
          "package": "redis-hs",
          "partial": "Sorted Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZADD\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetAdd",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZADD",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetAdd",
          "normalized": "Handle-\u003eString-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Add",
          "signature": "Handle-\u003eString-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZADD\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetAddB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e ByteString-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZADD",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetAddB",
          "normalized": "Handle-\u003eByteString-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Add",
          "signature": "Handle-\u003eByteString-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetAddB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZCARD\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetCardinality",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZCARD",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetCardinality",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Cardinality",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetCardinality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZCOUNT\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetCount",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZCOUNT",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetCount",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Count",
          "signature": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZINCRBY\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetIncrementBy",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZINCRBY",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetIncrementBy",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Increment By",
          "signature": "Handle-\u003eString-\u003eInt-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetIncrementBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZRANGE (does not yet include WITHSCORES)\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetRange",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZRANGE does not yet include WITHSCORES",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetRange",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Range",
          "signature": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZRANGEBYSCORE\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetRangeByScore",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZRANGEBYSCORE",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetRangeByScore",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Range By Score",
          "signature": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetRangeByScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZRANK\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetRank",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZRANK",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetRank",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Rank",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZREMRANGEBYRANK\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetRemRangeByRank",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZREMRANGEBYRANK",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetRemRangeByRank",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Rem Range By Rank",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetRemRangeByRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZREMRANGEBYSCORE\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetRemRangeByScore",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZREMRANGEBYSCORE",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetRemRangeByScore",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Rem Range By Score",
          "signature": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetRemRangeByScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZREM\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetRemove",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZREM",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetRemove",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Remove",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetRemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZREVRANGE (does not yet include WITHSCORES)\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetReverseRange",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZREVRANGE does not yet include WITHSCORES",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetReverseRange",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Reverse Range",
          "signature": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetReverseRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZREVRANK\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetReverseRank",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZREVRANK",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetReverseRank",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Reverse Rank",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetReverseRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZSCORE\n\u003c/p\u003e",
          "module": "Database.Redis.SortedSet",
          "name": "zSetScore",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "ZSCORE",
          "hierarchy": "Database Redis SortedSet",
          "module": "Database.Redis.SortedSet",
          "name": "zSetScore",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set Score",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-SortedSet.html#v:zSetScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis  module  has  nothing  to do  with  Haskell  \u003ccode\u003eString\u003c/code\u003es;  the  Redis\n Command  Reference (\u003ca\u003ehttp://code.google.com/p/redis/wiki/CommandReference\u003c/a\u003e)\n confusingly refers  to its simple  key/value pairing as strings,  even when\n those strings can be incremented. Unfortunately,  I can't think of a better\n name.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.String",
          "name": "String",
          "package": "redis-hs",
          "source": "src/Database-Redis-String.html",
          "type": "module"
        },
        "index": {
          "description": "This module has nothing to do with Haskell String the Redis Command Reference http code.google.com redis wiki CommandReference confusingly refers to its simple key value pairing as strings even when those strings can be incremented Unfortunately can think of better name",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "String",
          "package": "redis-hs",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDECR\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "decrement",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "DECR",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "decrement",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:decrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.String",
          "name": "decrementBy",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "decrementBy",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "By",
          "signature": "Handle-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:decrementBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eINCR\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "increment",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "INCR",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "increment",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:increment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eINCRBY\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "incrementBy",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "INCRBY",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "incrementBy",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "By",
          "signature": "Handle-\u003eString-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:incrementBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAPPEND for \u003ccode\u003eString\u003c/code\u003e arguments\n \u003ca\u003ehttp://code.google.com/p/redis/wiki/AppendCommand\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "itemAppend",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "APPEND for String arguments http code.google.com redis wiki AppendCommand",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "itemAppend",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Append",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:itemAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGET for a \u003ccode\u003eString\u003c/code\u003e argument\n \u003ca\u003ehttp://code.google.com/p/redis/wiki/GetCommand\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "itemGet",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "GET for String argument http code.google.com redis wiki GetCommand",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "itemGet",
          "normalized": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Get",
          "signature": "Handle-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:itemGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGET for a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "itemGetB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "GET for ByteString argument",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "itemGetB",
          "normalized": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Get",
          "signature": "Handle-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:itemGetB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGETSET for \u003ccode\u003eString\u003c/code\u003e arguments\n \u003ca\u003ehttp://code.google.com/p/redis/wiki/GetsetCommand\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "itemGetSet",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "GETSET for String arguments http code.google.com redis wiki GetsetCommand",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "itemGetSet",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Get Set",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:itemGetSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSET for \u003ccode\u003eString\u003c/code\u003e arguments\n \u003ca\u003ehttp://code.google.com/p/redis/wiki/SetCommand\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "itemSet",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SET for String arguments http code.google.com redis wiki SetCommand",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "itemSet",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:itemSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSET for ByteString input\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "itemSetB",
          "package": "redis-hs",
          "signature": "Handle-\u003e ByteString-\u003e ByteString-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SET for ByteString input",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "itemSetB",
          "normalized": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set",
          "signature": "Handle-\u003eByteString-\u003eByteString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:itemSetB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSETEX\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "itemSetEX",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SETEX",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "itemSetEX",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set EX",
          "signature": "Handle-\u003eString-\u003eInt-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:itemSetEX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSETNX for \u003ccode\u003eString\u003c/code\u003e arguments\n \u003ca\u003ehttp://code.google.com/p/redis/wiki/SetnxCommand\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "itemSetNX",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e String-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SETNX for String arguments http code.google.com redis wiki SetnxCommand",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "itemSetNX",
          "normalized": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set NX",
          "signature": "Handle-\u003eString-\u003eString-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:itemSetNX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.String",
          "name": "multiGet",
          "package": "redis-hs",
          "signature": "Handle-\u003e [String]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "multiGet",
          "normalized": "Handle-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Get",
          "signature": "Handle-\u003e[String]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:multiGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls  \u003ccode\u003eMSET\u003c/code\u003e \u003ca\u003ehttp://code.google.com/p/redis/wiki/MsetCommand\u003c/a\u003e  with  a\n list of tuples (key, value)\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "multiSet",
          "package": "redis-hs",
          "signature": "Handle-\u003e [(String, String)]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls MSET http code.google.com redis wiki MsetCommand with list of tuples key value",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "multiSet",
          "normalized": "Handle-\u003e[(String,String)]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set",
          "signature": "Handle-\u003e[(String,String)]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:multiSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eMSETNX\u003c/code\u003e (\u003ca\u003ehttp://code.google.com/p/redis/wiki/MsetnxCommand\u003c/a\u003e) with\n a list of tuples (key, value)\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "multiSetNX",
          "package": "redis-hs",
          "signature": "Handle-\u003e [(String, String)]-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "Calls MSETNX http code.google.com redis wiki MsetnxCommand with list of tuples key value",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "multiSetNX",
          "normalized": "Handle-\u003e[(String,String)]-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "partial": "Set NX",
          "signature": "Handle-\u003e[(String,String)]-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:multiSetNX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSUBSTR\n\u003c/p\u003e",
          "module": "Database.Redis.String",
          "name": "substring",
          "package": "redis-hs",
          "signature": "Handle-\u003e String-\u003e Int-\u003e Int-\u003e IO (Maybe RedisReply)",
          "type": "function"
        },
        "index": {
          "description": "SUBSTR",
          "hierarchy": "Database Redis String",
          "module": "Database.Redis.String",
          "name": "substring",
          "normalized": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "signature": "Handle-\u003eString-\u003eInt-\u003eInt-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-String.html#v:substring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module  corresponds to the transaction commands  introduced in Redis\n 2.0, explained at \u003ca\u003ehttp://code.google.com/p/redis/wiki/MultiExecCommand\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Transaction",
          "name": "Transaction",
          "package": "redis-hs",
          "source": "src/Database-Redis-Transaction.html",
          "type": "module"
        },
        "index": {
          "description": "This module corresponds to the transaction commands introduced in Redis explained at http code.google.com redis wiki MultiExecCommand",
          "hierarchy": "Database Redis Transaction",
          "module": "Database.Redis.Transaction",
          "name": "Transaction",
          "package": "redis-hs",
          "partial": "Transaction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Transaction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEXEC, execute the transaction\n\u003c/p\u003e",
          "module": "Database.Redis.Transaction",
          "name": "exec",
          "package": "redis-hs",
          "signature": "Handle -\u003e IO (Maybe RedisReply)",
          "source": "src/Database-Redis-Transaction.html#exec",
          "type": "function"
        },
        "index": {
          "description": "EXEC execute the transaction",
          "hierarchy": "Database Redis Transaction",
          "module": "Database.Redis.Transaction",
          "name": "exec",
          "normalized": "Handle-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "signature": "Handle-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Transaction.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMULTI, begin a transaction\n\u003c/p\u003e",
          "module": "Database.Redis.Transaction",
          "name": "multi",
          "package": "redis-hs",
          "signature": "Handle -\u003e IO (Maybe RedisReply)",
          "source": "src/Database-Redis-Transaction.html#multi",
          "type": "function"
        },
        "index": {
          "description": "MULTI begin transaction",
          "hierarchy": "Database Redis Transaction",
          "module": "Database.Redis.Transaction",
          "name": "multi",
          "normalized": "Handle-\u003eIO(Maybe RedisReply)",
          "package": "redis-hs",
          "signature": "Handle-\u003eIO(Maybe RedisReply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis-Transaction.html#v:multi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis",
          "name": "Redis",
          "package": "redis-hs",
          "source": "src/Database-Redis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Redis",
          "module": "Database.Redis",
          "name": "Redis",
          "package": "redis-hs",
          "partial": "Redis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis-hs/docs/Database-Redis.html#"
      }
    }
  ]
]