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
        "word": "redis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.ByteStringClass",
          "name": "ByteStringClass",
          "package": "redis",
          "source": "src/Database-Redis-ByteStringClass.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database Redis ByteStringClass",
          "module": "Database.Redis.ByteStringClass",
          "name": "ByteStringClass",
          "package": "redis",
          "partial": "Byte String Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-ByteStringClass.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility class for conversion to and from Strict ByteString\n\u003c/p\u003e",
          "module": "Database.Redis.ByteStringClass",
          "name": "BS",
          "package": "redis",
          "source": "src/Database-Redis-ByteStringClass.html#BS",
          "type": "class"
        },
        "index": {
          "description": "Utility class for conversion to and from Strict ByteString",
          "hierarchy": "Database Redis ByteStringClass",
          "module": "Database.Redis.ByteStringClass",
          "name": "BS",
          "package": "redis",
          "partial": "BS",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-ByteStringClass.html#t:BS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.ByteStringClass",
          "name": "fromBS",
          "package": "redis",
          "signature": "ByteString -\u003e a",
          "source": "src/Database-Redis-ByteStringClass.html#fromBS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Redis ByteStringClass",
          "module": "Database.Redis.ByteStringClass",
          "name": "fromBS",
          "normalized": "ByteString-\u003ea",
          "package": "redis",
          "partial": "BS",
          "signature": "ByteString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-ByteStringClass.html#v:fromBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.ByteStringClass",
          "name": "toBS",
          "package": "redis",
          "signature": "a -\u003e ByteString",
          "source": "src/Database-Redis-ByteStringClass.html#toBS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Redis ByteStringClass",
          "module": "Database.Redis.ByteStringClass",
          "name": "toBS",
          "normalized": "a-\u003eByteString",
          "package": "redis",
          "partial": "BS",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-ByteStringClass.html#v:toBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is mainly an example of posible \u003ccode\u003e\u003ca\u003eWithRedis\u003c/a\u003e\u003c/code\u003e\n implementation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Monad.State",
          "name": "State",
          "package": "redis",
          "source": "src/Database-Redis-Monad-State.html",
          "type": "module"
        },
        "index": {
          "description": "This module is mainly an example of posible WithRedis implementation",
          "hierarchy": "Database Redis Monad State",
          "module": "Database.Redis.Monad.State",
          "name": "State",
          "package": "redis",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrivial WithRedis instance storing Redis descriptor in StateT\n\u003c/p\u003e",
          "module": "Database.Redis.Monad.State",
          "name": "RedisM",
          "package": "redis",
          "source": "src/Database-Redis-Monad-State.html#RedisM",
          "type": "type"
        },
        "index": {
          "description": "Trivial WithRedis instance storing Redis descriptor in StateT",
          "hierarchy": "Database Redis Monad State",
          "module": "Database.Redis.Monad.State",
          "name": "RedisM",
          "package": "redis",
          "partial": "Redis",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad-State.html#t:RedisM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad.State",
          "name": "runWithRedis",
          "package": "redis",
          "signature": "Redis -\u003e RedisM a -\u003e IO a",
          "source": "src/Database-Redis-Monad-State.html#runWithRedis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad State",
          "module": "Database.Redis.Monad.State",
          "name": "runWithRedis",
          "normalized": "Redis-\u003eRedisM a-\u003eIO a",
          "package": "redis",
          "partial": "With Redis",
          "signature": "Redis-\u003eRedisM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad-State.html#v:runWithRedis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic wrapper for \u003ca\u003eDatabase.Redis.Redis\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Monad",
          "name": "Monad",
          "package": "redis",
          "source": "src/Database-Redis-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic wrapper for Database.Redis.Redis",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "Monad",
          "package": "redis",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "Aggregate",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html#Aggregate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "Aggregate",
          "package": "redis",
          "partial": "Aggregate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#t:Aggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterval representation\n\u003c/p\u003e",
          "module": "Database.Redis.Monad",
          "name": "Interval",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html#Interval",
          "type": "data"
        },
        "index": {
          "description": "Interval representation",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "Interval",
          "package": "redis",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for conversion value to \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eDefinied instances is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the Interval itself\n\u003c/li\u003e\u003cli\u003e pair (a,b) for open interval\n\u003c/li\u003e\u003cli\u003e two-member list [a, b] for closed interval (throws runtime error if the list length is different)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Database.Redis.Monad",
          "name": "IsInterval",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html#IsInterval",
          "type": "class"
        },
        "index": {
          "description": "Class for conversion value to Interval Definied instances is the Interval itself pair for open interval two-member list for closed interval throws runtime error if the list length is different",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "IsInterval",
          "package": "redis",
          "partial": "Is Interval",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#t:IsInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "LInsertDirection",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html#LInsertDirection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "LInsertDirection",
          "package": "redis",
          "partial": "LInsert Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#t:LInsertDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "Message",
          "package": "redis",
          "source": "src/Database-Redis-Internal.html#Message",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "Message",
          "package": "redis",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedis connection descriptor\n\u003c/p\u003e",
          "module": "Database.Redis.Monad",
          "name": "Redis",
          "package": "redis",
          "source": "src/Database-Redis-Internal.html#Redis",
          "type": "data"
        },
        "index": {
          "description": "Redis connection descriptor",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "Redis",
          "package": "redis",
          "partial": "Redis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#t:Redis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "RedisInfo",
          "package": "redis",
          "source": "src/Database-Redis-Info.html#RedisInfo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "RedisInfo",
          "package": "redis",
          "partial": "Redis Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#t:RedisInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "RedisKeyType",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html#RedisKeyType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "RedisKeyType",
          "package": "redis",
          "partial": "Redis Key Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#t:RedisKeyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedis reply variants\n\u003c/p\u003e",
          "module": "Database.Redis.Monad",
          "name": "Reply",
          "package": "redis",
          "source": "src/Database-Redis-Internal.html#Reply",
          "type": "data"
        },
        "index": {
          "description": "Redis reply variants",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "Reply",
          "package": "redis",
          "partial": "Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#t:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions data type for the \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e command\n\u003c/p\u003e",
          "module": "Database.Redis.Monad",
          "name": "SortOptions",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html#SortOptions",
          "type": "data"
        },
        "index": {
          "description": "Options data type for the sort command",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "SortOptions",
          "package": "redis",
          "partial": "Sort Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#t:SortOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "WithRedis",
          "package": "redis",
          "source": "src/Database-Redis-Monad.html#WithRedis",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "WithRedis",
          "package": "redis",
          "partial": "With Redis",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#t:WithRedis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "AFTER",
          "package": "redis",
          "signature": "AFTER",
          "source": "src/Database-Redis-Redis.html#LInsertDirection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:AFTER\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:AFTER\"]"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "AFTER",
          "package": "redis",
          "partial": "AFTER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:AFTER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "BEFORE",
          "package": "redis",
          "signature": "BEFORE",
          "source": "src/Database-Redis-Redis.html#LInsertDirection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:BEFORE\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:BEFORE\"]"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "BEFORE",
          "package": "redis",
          "partial": "BEFORE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:BEFORE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclosed interval [a, b]\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "Closed",
          "package": "redis",
          "signature": "Closed a a",
          "source": "src/Database-Redis-Redis.html#Interval",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:Closed\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:Closed\"]"
        },
        "index": {
          "description": "closed interval",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "Closed",
          "package": "redis",
          "partial": "Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:Closed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eleft-open interval (a, b]\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "LeftOpen",
          "package": "redis",
          "signature": "LeftOpen a a",
          "source": "src/Database-Redis-Redis.html#Interval",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:LeftOpen\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:LeftOpen\"]"
        },
        "index": {
          "description": "left-open interval",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "LeftOpen",
          "package": "redis",
          "partial": "Left Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:LeftOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "MAX",
          "package": "redis",
          "signature": "MAX",
          "source": "src/Database-Redis-Redis.html#Aggregate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MAX\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:MAX\"]"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "MAX",
          "package": "redis",
          "partial": "MAX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MAX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "MIN",
          "package": "redis",
          "signature": "MIN",
          "source": "src/Database-Redis-Redis.html#Aggregate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MIN\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:MIN\"]"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "MIN",
          "package": "redis",
          "partial": "MIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emessage recieved\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "MMessage",
          "package": "redis",
          "signature": "MMessage s s",
          "source": "src/Database-Redis-Internal.html#Message",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MMessage\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:MMessage\"]"
        },
        "index": {
          "description": "message recieved",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "MMessage",
          "package": "redis",
          "partial": "MMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emessage recieved by pattern\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "MPMessage",
          "package": "redis",
          "signature": "MPMessage s s s",
          "source": "src/Database-Redis-Internal.html#Message",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MPMessage\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:MPMessage\"]"
        },
        "index": {
          "description": "message recieved by pattern",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "MPMessage",
          "package": "redis",
          "partial": "MPMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MPMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epattern subscribed\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "MPSubscribe",
          "package": "redis",
          "signature": "MPSubscribe s Int",
          "source": "src/Database-Redis-Internal.html#Message",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MPSubscribe\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:MPSubscribe\"]"
        },
        "index": {
          "description": "pattern subscribed",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "MPSubscribe",
          "package": "redis",
          "partial": "MPSubscribe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MPSubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epattern unsubscribed\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "MPUnsubscribe",
          "package": "redis",
          "signature": "MPUnsubscribe s Int",
          "source": "src/Database-Redis-Internal.html#Message",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MPUnsubscribe\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:MPUnsubscribe\"]"
        },
        "index": {
          "description": "pattern unsubscribed",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "MPUnsubscribe",
          "package": "redis",
          "partial": "MPUnsubscribe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MPUnsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubscribed\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "MSubscribe",
          "package": "redis",
          "signature": "MSubscribe s Int",
          "source": "src/Database-Redis-Internal.html#Message",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MSubscribe\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:MSubscribe\"]"
        },
        "index": {
          "description": "subscribed",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "MSubscribe",
          "package": "redis",
          "partial": "MSubscribe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MSubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsubscribed\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "MUnsubscribe",
          "package": "redis",
          "signature": "MUnsubscribe s Int",
          "source": "src/Database-Redis-Internal.html#Message",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MUnsubscribe\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:MUnsubscribe\"]"
        },
        "index": {
          "description": "unsubscribed",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "MUnsubscribe",
          "package": "redis",
          "partial": "MUnsubscribe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:MUnsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eopen interval (a, b)\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "Open",
          "package": "redis",
          "signature": "Open a a",
          "source": "src/Database-Redis-Redis.html#Interval",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:Open\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:Open\"]"
        },
        "index": {
          "description": "open interval",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "Open",
          "package": "redis",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiline reply\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "RBulk",
          "package": "redis",
          "signature": "RBulk (Maybe s)",
          "source": "src/Database-Redis-Internal.html#Reply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RBulk\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RBulk\"]"
        },
        "index": {
          "description": "Multiline reply",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "RBulk",
          "package": "redis",
          "partial": "RBulk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RBulk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome kind of server-side error\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "RError",
          "package": "redis",
          "signature": "RError String",
          "source": "src/Database-Redis-Internal.html#Reply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RError\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RError\"]"
        },
        "index": {
          "description": "Some kind of server-side error",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "RError",
          "package": "redis",
          "partial": "RError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple oneline reply\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "RInline",
          "package": "redis",
          "signature": "RInline s",
          "source": "src/Database-Redis-Internal.html#Reply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RInline\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RInline\"]"
        },
        "index": {
          "description": "Simple oneline reply",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "RInline",
          "package": "redis",
          "partial": "RInline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger reply\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "RInt",
          "package": "redis",
          "signature": "RInt Int",
          "source": "src/Database-Redis-Internal.html#Reply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RInt\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RInt\"]"
        },
        "index": {
          "description": "Integer reply",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "RInt",
          "package": "redis",
          "partial": "RInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex reply. It may consists of various type of replys\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "RMulti",
          "package": "redis",
          "signature": "RMulti (Maybe [Reply s])",
          "source": "src/Database-Redis-Internal.html#Reply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RMulti\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RMulti\"]"
        },
        "index": {
          "description": "Complex reply It may consists of various type of replys",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "RMulti",
          "normalized": "RMulti(Maybe[Reply a])",
          "package": "redis",
          "partial": "RMulti",
          "signature": "RMulti(Maybe[Reply s])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Ok\" reply\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "ROk",
          "package": "redis",
          "signature": "ROk",
          "source": "src/Database-Redis-Internal.html#Reply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:ROk\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:ROk\"]"
        },
        "index": {
          "description": "Ok reply",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "ROk",
          "package": "redis",
          "partial": "ROk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:ROk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError converting value from ByteString. It's a client-side error.\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "RParseError",
          "package": "redis",
          "signature": "RParseError String",
          "source": "src/Database-Redis-Internal.html#Reply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RParseError\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RParseError\"]"
        },
        "index": {
          "description": "Error converting value from ByteString It client-side error",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "RParseError",
          "package": "redis",
          "partial": "RParse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReply for the ping command\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "RPong",
          "package": "redis",
          "signature": "RPong",
          "source": "src/Database-Redis-Internal.html#Reply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RPong\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RPong\"]"
        },
        "index": {
          "description": "Reply for the ping command",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "RPong",
          "package": "redis",
          "partial": "RPong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RPong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed inside multi-exec block\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "RQueued",
          "package": "redis",
          "signature": "RQueued",
          "source": "src/Database-Redis-Internal.html#Reply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RQueued\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RQueued\"]"
        },
        "index": {
          "description": "Used inside multi-exec block",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "RQueued",
          "package": "redis",
          "partial": "RQueued",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RQueued"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimeout. Currently unused\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "RTimeout",
          "package": "redis",
          "signature": "RTimeout",
          "source": "src/Database-Redis-Internal.html#Reply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RTimeout\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RTimeout\"]"
        },
        "index": {
          "description": "Timeout Currently unused",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "RTimeout",
          "package": "redis",
          "partial": "RTimeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "Redis",
          "package": "redis",
          "signature": "Redis",
          "source": "src/Database-Redis-Internal.html#Redis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "Redis",
          "package": "redis",
          "partial": "Redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:Redis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eright-open interval [a, b)\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "RightOpen",
          "package": "redis",
          "signature": "RightOpen a a",
          "source": "src/Database-Redis-Redis.html#Interval",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RightOpen\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RightOpen\"]"
        },
        "index": {
          "description": "right-open interval",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "RightOpen",
          "package": "redis",
          "partial": "Right Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:RightOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "SUM",
          "package": "redis",
          "signature": "SUM",
          "source": "src/Database-Redis-Redis.html#Aggregate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:SUM\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:SUM\"]"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "SUM",
          "package": "redis",
          "partial": "SUM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:SUM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "SortOptions",
          "package": "redis",
          "signature": "SortOptions",
          "source": "src/Database-Redis-Redis.html#SortOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:SortOptions\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:SortOptions\"]"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "SortOptions",
          "package": "redis",
          "partial": "Sort Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:SortOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esort alphabetically\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "alpha",
          "package": "redis",
          "signature": "Bool",
          "source": "src/Database-Redis-Redis.html#SortOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:alpha\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:alpha\"]"
        },
        "index": {
          "description": "sort alphabetically",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "alpha",
          "package": "redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "append",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "append",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "auth",
          "package": "redis",
          "signature": "String -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#auth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "auth",
          "normalized": "String-\u003ea(Reply())",
          "package": "redis",
          "signature": "String-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "bgrewriteaof",
          "package": "redis",
          "signature": "m (Reply ())",
          "source": "src/Database-Redis-Monad.html#bgrewriteaof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "bgrewriteaof",
          "normalized": "a(Reply())",
          "package": "redis",
          "signature": "m(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:bgrewriteaof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "bgsave",
          "package": "redis",
          "signature": "m (Reply ())",
          "source": "src/Database-Redis-Monad.html#bgsave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "bgsave",
          "normalized": "a(Reply())",
          "package": "redis",
          "signature": "m(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:bgsave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "blpop",
          "package": "redis",
          "signature": "[s1] -\u003e Int -\u003e m (Maybe (s1, s2))",
          "source": "src/Database-Redis-Monad.html#blpop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "blpop",
          "normalized": "[a]-\u003eInt-\u003eb(Maybe(a,a))",
          "package": "redis",
          "signature": "[s]-\u003eInt-\u003em(Maybe(s,s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:blpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "brpop",
          "package": "redis",
          "signature": "[s1] -\u003e Int -\u003e m (Maybe (s1, s2))",
          "source": "src/Database-Redis-Monad.html#brpop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "brpop",
          "normalized": "[a]-\u003eInt-\u003eb(Maybe(a,a))",
          "package": "redis",
          "signature": "[s]-\u003eInt-\u003em(Maybe(s,s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:brpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "brpoplpush",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e Int -\u003e m (Maybe (Maybe s3))",
          "source": "src/Database-Redis-Monad.html#brpoplpush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "brpoplpush",
          "normalized": "a-\u003ea-\u003eInt-\u003eb(Maybe(Maybe a))",
          "package": "redis",
          "signature": "s-\u003es-\u003eInt-\u003em(Maybe(Maybe s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:brpoplpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "connect",
          "package": "redis",
          "signature": "String -\u003e String -\u003e m ()",
          "source": "src/Database-Redis-Monad.html#connect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "connect",
          "normalized": "String-\u003eString-\u003ea()",
          "package": "redis",
          "signature": "String-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "dbsize",
          "package": "redis",
          "signature": "m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#dbsize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "dbsize",
          "package": "redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:dbsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "decr",
          "package": "redis",
          "signature": "s -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#decr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "decr",
          "normalized": "a-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:decr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "decrBy",
          "package": "redis",
          "signature": "s -\u003e Int -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#decrBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "decrBy",
          "normalized": "a-\u003eInt-\u003eb(Reply Int)",
          "package": "redis",
          "partial": "By",
          "signature": "s-\u003eInt-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:decrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault Redis port\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "defaultPort",
          "package": "redis",
          "signature": "String",
          "source": "src/Database-Redis-Redis.html#defaultPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:defaultPort\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:defaultPort\"]"
        },
        "index": {
          "description": "default Redis port",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "defaultPort",
          "package": "redis",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:defaultPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "del",
          "package": "redis",
          "signature": "s -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#del",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "del",
          "normalized": "a-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:del"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "del_",
          "package": "redis",
          "signature": "[s] -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#del_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "del_",
          "normalized": "[a]-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "[s]-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:del_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esort with descending order\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "desc",
          "package": "redis",
          "signature": "Bool",
          "source": "src/Database-Redis-Redis.html#SortOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:desc\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:desc\"]"
        },
        "index": {
          "description": "sort with descending order",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "desc",
          "package": "redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "discard",
          "package": "redis",
          "signature": "m (Reply ())",
          "source": "src/Database-Redis-Monad.html#discard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "discard",
          "normalized": "a(Reply())",
          "package": "redis",
          "signature": "m(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:discard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "disconnect",
          "package": "redis",
          "signature": "m ()",
          "source": "src/Database-Redis-Monad.html#disconnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "disconnect",
          "normalized": "a()",
          "package": "redis",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "echo",
          "package": "redis",
          "signature": "s -\u003e m (Reply s)",
          "source": "src/Database-Redis-Monad.html#echo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "echo",
          "normalized": "a-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "exec",
          "package": "redis",
          "signature": "m (Reply s)",
          "source": "src/Database-Redis-Monad.html#exec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "exec",
          "package": "redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "exists",
          "package": "redis",
          "signature": "s -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#exists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "exists",
          "normalized": "a-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "expire",
          "package": "redis",
          "signature": "s -\u003e Int -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#expire",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "expire",
          "normalized": "a-\u003eInt-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003eInt-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:expire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "expireAt",
          "package": "redis",
          "signature": "s -\u003e Int -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#expireAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "expireAt",
          "normalized": "a-\u003eInt-\u003eb(Reply Int)",
          "package": "redis",
          "partial": "At",
          "signature": "s-\u003eInt-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:expireAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "flushAll",
          "package": "redis",
          "signature": "m (Reply ())",
          "source": "src/Database-Redis-Monad.html#flushAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "flushAll",
          "normalized": "a(Reply())",
          "package": "redis",
          "partial": "All",
          "signature": "m(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:flushAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "flushDb",
          "package": "redis",
          "signature": "m (Reply ())",
          "source": "src/Database-Redis-Monad.html#flushDb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "flushDb",
          "normalized": "a(Reply())",
          "package": "redis",
          "partial": "Db",
          "signature": "m(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:flushDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwraps RBulk reply.\n\u003c/p\u003e\u003cp\u003eThrows an exception when called with something different from RBulk\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "fromRBulk",
          "package": "redis",
          "signature": "Reply s -\u003e m (Maybe s)",
          "source": "src/Database-Redis-Redis.html#fromRBulk",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromRBulk\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:fromRBulk\"]"
        },
        "index": {
          "description": "Unwraps RBulk reply Throws an exception when called with something different from RBulk",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "fromRBulk",
          "normalized": "Reply a-\u003eb(Maybe a)",
          "package": "redis",
          "partial": "RBulk",
          "signature": "Reply s-\u003em(Maybe s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromRBulk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwraps RInline reply.\n\u003c/p\u003e\u003cp\u003eThrows an exception when called with something different from RInline\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "fromRInline",
          "package": "redis",
          "signature": "Reply s -\u003e m s",
          "source": "src/Database-Redis-Redis.html#fromRInline",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromRInline\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:fromRInline\"]"
        },
        "index": {
          "description": "Unwraps RInline reply Throws an exception when called with something different from RInline",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "fromRInline",
          "normalized": "Reply a-\u003eb a",
          "package": "redis",
          "partial": "RInline",
          "signature": "Reply s-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromRInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwraps RInt reply\n\u003c/p\u003e\u003cp\u003eThrows an exception when called with something different from RInt\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "fromRInt",
          "package": "redis",
          "signature": "Reply s -\u003e m Int",
          "source": "src/Database-Redis-Redis.html#fromRInt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromRInt\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:fromRInt\"]"
        },
        "index": {
          "description": "Unwraps RInt reply Throws an exception when called with something different from RInt",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "fromRInt",
          "normalized": "Reply a-\u003eb Int",
          "package": "redis",
          "partial": "RInt",
          "signature": "Reply s-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromRInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwraps RMulti reply\n\u003c/p\u003e\u003cp\u003eThrows an exception when called with something different from RMulti\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "fromRMulti",
          "package": "redis",
          "signature": "Reply s -\u003e m (Maybe [Reply s])",
          "source": "src/Database-Redis-Redis.html#fromRMulti",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromRMulti\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:fromRMulti\"]"
        },
        "index": {
          "description": "Unwraps RMulti reply Throws an exception when called with something different from RMulti",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "fromRMulti",
          "normalized": "Reply a-\u003eb(Maybe[Reply a])",
          "package": "redis",
          "partial": "RMulti",
          "signature": "Reply s-\u003em(Maybe[Reply s])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromRMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwraps RMulti reply filled with RBulk\n\u003c/p\u003e\u003cp\u003eThrows an exception when called with something different from RMulti\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "fromRMultiBulk",
          "package": "redis",
          "signature": "Reply s -\u003e m (Maybe [Maybe s])",
          "source": "src/Database-Redis-Redis.html#fromRMultiBulk",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromRMultiBulk\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:fromRMultiBulk\"]"
        },
        "index": {
          "description": "Unwraps RMulti reply filled with RBulk Throws an exception when called with something different from RMulti",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "fromRMultiBulk",
          "normalized": "Reply a-\u003eb(Maybe[Maybe a])",
          "package": "redis",
          "partial": "RMulti Bulk",
          "signature": "Reply s-\u003em(Maybe[Maybe s])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromRMultiBulk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as fromRMultiBulk but with fromJust applied\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "fromRMultiBulk'",
          "package": "redis",
          "signature": "Reply s -\u003e m [s]",
          "source": "src/Database-Redis-Redis.html#fromRMultiBulk%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromRMultiBulk-39-\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:fromRMultiBulk-39-\"]"
        },
        "index": {
          "description": "The same as fromRMultiBulk but with fromJust applied",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "fromRMultiBulk'",
          "normalized": "Reply a-\u003eb[a]",
          "package": "redis",
          "partial": "RMulti Bulk'",
          "signature": "Reply s-\u003em[s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromRMultiBulk-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwraps ROk reply\n\u003c/p\u003e\u003cp\u003eThrows an exception when called with something different from ROk\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "fromROk",
          "package": "redis",
          "signature": "Reply s -\u003e m ()",
          "source": "src/Database-Redis-Redis.html#fromROk",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromROk\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:fromROk\"]"
        },
        "index": {
          "description": "Unwraps ROk reply Throws an exception when called with something different from ROk",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "fromROk",
          "normalized": "Reply a-\u003eb()",
          "package": "redis",
          "partial": "ROk",
          "signature": "Reply s-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:fromROk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "get",
          "package": "redis",
          "signature": "s1 -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "get",
          "normalized": "a-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "getDatabase",
          "package": "redis",
          "signature": "m Int",
          "source": "src/Database-Redis-Monad.html#getDatabase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "getDatabase",
          "package": "redis",
          "partial": "Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:getDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "getRedis",
          "package": "redis",
          "signature": "m Redis",
          "source": "src/Database-Redis-Monad.html#getRedis",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "getRedis",
          "package": "redis",
          "partial": "Redis",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:getRedis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "getServer",
          "package": "redis",
          "signature": "m (String, String)",
          "source": "src/Database-Redis-Monad.html#getServer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "getServer",
          "normalized": "a(String,String)",
          "package": "redis",
          "partial": "Server",
          "signature": "m(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:getServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "getSet",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply s3)",
          "source": "src/Database-Redis-Monad.html#getSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "getSet",
          "normalized": "a-\u003ea-\u003eb(Reply a)",
          "package": "redis",
          "partial": "Set",
          "signature": "s-\u003es-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:getSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "getType",
          "package": "redis",
          "signature": "s1 -\u003e m RedisKeyType",
          "source": "src/Database-Redis-Monad.html#getType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "getType",
          "normalized": "a-\u003eb RedisKeyType",
          "package": "redis",
          "partial": "Type",
          "signature": "s-\u003em RedisKeyType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:getType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn this keys values\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "get_obj",
          "package": "redis",
          "signature": "[s]",
          "source": "src/Database-Redis-Redis.html#SortOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:get_obj\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:get_obj\"]"
        },
        "index": {
          "description": "return this keys values",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "get_obj",
          "normalized": "[a]",
          "package": "redis",
          "signature": "[s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:get_obj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "getbit",
          "package": "redis",
          "signature": "s -\u003e Int -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#getbit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "getbit",
          "normalized": "a-\u003eInt-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003eInt-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:getbit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "getrange",
          "package": "redis",
          "signature": "s1 -\u003e (Int, Int) -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#getrange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "getrange",
          "normalized": "a-\u003e(Int,Int)-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003e(Int,Int)-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:getrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hdel",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#hdel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hdel",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hdel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hdel_",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#hdel_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hdel_",
          "normalized": "a-\u003e[a]-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003e[s]-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hdel_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hexists",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#hexists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hexists",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hexists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hget",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply s3)",
          "source": "src/Database-Redis-Monad.html#hget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hget",
          "normalized": "a-\u003ea-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hgetall",
          "package": "redis",
          "signature": "s1 -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#hgetall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hgetall",
          "normalized": "a-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hgetall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hincrBy",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e Int -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#hincrBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hincrBy",
          "normalized": "a-\u003ea-\u003eInt-\u003eb(Reply Int)",
          "package": "redis",
          "partial": "By",
          "signature": "s-\u003es-\u003eInt-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hincrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hincrByFloat",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e Double -\u003e m (Reply Double)",
          "source": "src/Database-Redis-Monad.html#hincrByFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hincrByFloat",
          "normalized": "a-\u003ea-\u003eDouble-\u003eb(Reply Double)",
          "package": "redis",
          "partial": "By Float",
          "signature": "s-\u003es-\u003eDouble-\u003em(Reply Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hincrByFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hkeys",
          "package": "redis",
          "signature": "s1 -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#hkeys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hkeys",
          "normalized": "a-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hkeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hlen",
          "package": "redis",
          "signature": "s -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#hlen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hlen",
          "normalized": "a-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hmget",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e m (Reply s3)",
          "source": "src/Database-Redis-Monad.html#hmget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hmget",
          "normalized": "a-\u003e[a]-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003e[s]-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hmget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hmset",
          "package": "redis",
          "signature": "s1 -\u003e [(s2, s3)] -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#hmset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hmset",
          "normalized": "a-\u003e[(a,a)]-\u003eb(Reply())",
          "package": "redis",
          "signature": "s-\u003e[(s,s)]-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hmset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hset",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e s3 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#hset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hset",
          "normalized": "a-\u003ea-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "hvals",
          "package": "redis",
          "signature": "s1 -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#hvals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "hvals",
          "normalized": "a-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:hvals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "incr",
          "package": "redis",
          "signature": "s -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#incr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "incr",
          "normalized": "a-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:incr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "incrBy",
          "package": "redis",
          "signature": "s -\u003e Int -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#incrBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "incrBy",
          "normalized": "a-\u003eInt-\u003eb(Reply Int)",
          "package": "redis",
          "partial": "By",
          "signature": "s-\u003eInt-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:incrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "incrByFloat",
          "package": "redis",
          "signature": "s -\u003e Double -\u003e m (Reply Double)",
          "source": "src/Database-Redis-Monad.html#incrByFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "incrByFloat",
          "normalized": "a-\u003eDouble-\u003eb(Reply Double)",
          "package": "redis",
          "partial": "By Float",
          "signature": "s-\u003eDouble-\u003em(Reply Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:incrByFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "info",
          "package": "redis",
          "signature": "m RedisInfo",
          "source": "src/Database-Redis-Monad.html#info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "info",
          "package": "redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "isConnected",
          "package": "redis",
          "signature": "m Bool",
          "source": "src/Database-Redis-Monad.html#isConnected",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "isConnected",
          "package": "redis",
          "partial": "Connected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:isConnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "keys",
          "package": "redis",
          "signature": "s1 -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "keys",
          "normalized": "a-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "lastsave",
          "package": "redis",
          "signature": "m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#lastsave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "lastsave",
          "package": "redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:lastsave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn (from, to) elements\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "limit",
          "package": "redis",
          "signature": "(Int, Int)",
          "source": "src/Database-Redis-Redis.html#SortOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:limit\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:limit\"]"
        },
        "index": {
          "description": "return from to elements",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "limit",
          "normalized": "(Int,Int)",
          "package": "redis",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "lindex",
          "package": "redis",
          "signature": "s1 -\u003e Int -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#lindex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "lindex",
          "normalized": "a-\u003eInt-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003eInt-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:lindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "listRelated",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e (Int, Int) -\u003e m (Reply s3)",
          "source": "src/Database-Redis-Monad.html#listRelated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "listRelated",
          "normalized": "a-\u003ea-\u003e(Int,Int)-\u003eb(Reply a)",
          "package": "redis",
          "partial": "Related",
          "signature": "s-\u003es-\u003e(Int,Int)-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:listRelated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "listen",
          "package": "redis",
          "signature": "Int -\u003e m (Maybe (Message s))",
          "source": "src/Database-Redis-Monad.html#listen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "listen",
          "normalized": "Int-\u003ea(Maybe(Message b))",
          "package": "redis",
          "signature": "Int-\u003em(Maybe(Message s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "llen",
          "package": "redis",
          "signature": "s -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#llen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "llen",
          "normalized": "a-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:llen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ejust a localhost\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "localhost",
          "package": "redis",
          "signature": "String",
          "source": "src/Database-Redis-Redis.html#localhost",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:localhost\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:localhost\"]"
        },
        "index": {
          "description": "just localhost",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "localhost",
          "package": "redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:localhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "lpop",
          "package": "redis",
          "signature": "s1 -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#lpop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "lpop",
          "normalized": "a-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:lpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "lpush",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#lpush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "lpush",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:lpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "lpushx",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#lpushx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "lpushx",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:lpushx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "lrange",
          "package": "redis",
          "signature": "s1 -\u003e (Int, Int) -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#lrange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "lrange",
          "normalized": "a-\u003e(Int,Int)-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003e(Int,Int)-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:lrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "lrem",
          "package": "redis",
          "signature": "s1 -\u003e Int -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#lrem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "lrem",
          "normalized": "a-\u003eInt-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003eInt-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:lrem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "lset",
          "package": "redis",
          "signature": "s1 -\u003e Int -\u003e s2 -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#lset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "lset",
          "normalized": "a-\u003eInt-\u003ea-\u003eb(Reply())",
          "package": "redis",
          "signature": "s-\u003eInt-\u003es-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:lset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "ltrim",
          "package": "redis",
          "signature": "s -\u003e (Int, Int) -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#ltrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "ltrim",
          "normalized": "a-\u003e(Int,Int)-\u003eb(Reply())",
          "package": "redis",
          "signature": "s-\u003e(Int,Int)-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:ltrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "mGet",
          "package": "redis",
          "signature": "[s1] -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#mGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "mGet",
          "normalized": "[a]-\u003eb(Reply a)",
          "package": "redis",
          "partial": "Get",
          "signature": "[s]-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:mGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "mSet",
          "package": "redis",
          "signature": "[(s1, s2)] -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#mSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "mSet",
          "normalized": "[(a,a)]-\u003eb(Reply())",
          "package": "redis",
          "partial": "Set",
          "signature": "[(s,s)]-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:mSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "mSetNx",
          "package": "redis",
          "signature": "[(s1, s2)] -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#mSetNx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "mSetNx",
          "normalized": "[(a,a)]-\u003eb(Reply Int)",
          "package": "redis",
          "partial": "Set Nx",
          "signature": "[(s,s)]-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:mSetNx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "move",
          "package": "redis",
          "signature": "s -\u003e Int -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "move",
          "normalized": "a-\u003eInt-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003eInt-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "multi",
          "package": "redis",
          "signature": "m (Reply ())",
          "source": "src/Database-Redis-Monad.html#multi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "multi",
          "normalized": "a(Reply())",
          "package": "redis",
          "signature": "m(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:multi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwraps every non-error reply\n\u003c/p\u003e\u003cp\u003eThrows an exception when called with something different from RMulti\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "noError",
          "package": "redis",
          "signature": "Reply s -\u003e m ()",
          "source": "src/Database-Redis-Redis.html#noError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:noError\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:noError\"]"
        },
        "index": {
          "description": "Unwraps every non-error reply Throws an exception when called with something different from RMulti",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "noError",
          "normalized": "Reply a-\u003eb()",
          "package": "redis",
          "partial": "Error",
          "signature": "Reply s-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:noError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse Reply as a Message\n\u003c/p\u003e\u003cp\u003eThrows an exception on parse error\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "parseMessage",
          "package": "redis",
          "signature": "Reply ByteString -\u003e m (Message s)",
          "source": "src/Database-Redis-Redis.html#parseMessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:parseMessage\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:parseMessage\"]"
        },
        "index": {
          "description": "Parse Reply as Message Throws an exception on parse error",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "parseMessage",
          "normalized": "Reply ByteString-\u003ea(Message b)",
          "package": "redis",
          "partial": "Message",
          "signature": "Reply ByteString-\u003em(Message s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:parseMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "persist",
          "package": "redis",
          "signature": "s -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#persist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "persist",
          "normalized": "a-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:persist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "ping",
          "package": "redis",
          "signature": "m (Reply ())",
          "source": "src/Database-Redis-Monad.html#ping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "ping",
          "normalized": "a(Reply())",
          "package": "redis",
          "signature": "m(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "psubscribe",
          "package": "redis",
          "signature": "[s1] -\u003e m [Message s2]",
          "source": "src/Database-Redis-Monad.html#psubscribe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "psubscribe",
          "normalized": "[a]-\u003eb[Message a]",
          "package": "redis",
          "signature": "[s]-\u003em[Message s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:psubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "publish",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#publish",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "publish",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:publish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "punsubscribe",
          "package": "redis",
          "signature": "[s1] -\u003e m [Message s2]",
          "source": "src/Database-Redis-Monad.html#punsubscribe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "punsubscribe",
          "normalized": "[a]-\u003eb[Message a]",
          "package": "redis",
          "signature": "[s]-\u003em[Message s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:punsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "quit",
          "package": "redis",
          "signature": "m ()",
          "source": "src/Database-Redis-Monad.html#quit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "quit",
          "normalized": "a()",
          "package": "redis",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "r_lock",
          "package": "redis",
          "signature": "RLock",
          "source": "src/Database-Redis-Internal.html#Redis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "r_lock",
          "package": "redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:r_lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "r_st",
          "package": "redis",
          "signature": "IORef RedisState",
          "source": "src/Database-Redis-Internal.html#Redis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "r_st",
          "package": "redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:r_st"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "randomKey",
          "package": "redis",
          "signature": "m (Reply s)",
          "source": "src/Database-Redis-Monad.html#randomKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "randomKey",
          "package": "redis",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:randomKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "rename",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#rename",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "rename",
          "normalized": "a-\u003ea-\u003eb(Reply())",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "renameCommand",
          "package": "redis",
          "signature": "ByteString -\u003e ByteString -\u003e m ()",
          "source": "src/Database-Redis-Monad.html#renameCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "renameCommand",
          "normalized": "ByteString-\u003eByteString-\u003ea()",
          "package": "redis",
          "partial": "Command",
          "signature": "ByteString-\u003eByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:renameCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "renameNx",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#renameNx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "renameNx",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "partial": "Nx",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:renameNx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "rpop",
          "package": "redis",
          "signature": "s1 -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#rpop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "rpop",
          "normalized": "a-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:rpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "rpoplpush",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply s3)",
          "source": "src/Database-Redis-Monad.html#rpoplpush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "rpoplpush",
          "normalized": "a-\u003ea-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:rpoplpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "rpush",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#rpush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "rpush",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:rpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "rpush_",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#rpush_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "rpush_",
          "normalized": "a-\u003e[a]-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003e[s]-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:rpush_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "rpushx",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#rpushx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "rpushx",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:rpushx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "run_cas",
          "package": "redis",
          "signature": "[s1] -\u003e m a -\u003e m a",
          "source": "src/Database-Redis-Monad.html#run_cas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "run_cas",
          "normalized": "[a]-\u003eb c-\u003eb c",
          "package": "redis",
          "signature": "[s]-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:run_cas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "run_multi",
          "package": "redis",
          "signature": "m () -\u003e m (Reply s)",
          "source": "src/Database-Redis-Monad.html#run_multi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "run_multi",
          "normalized": "a()-\u003ea(Reply b)",
          "package": "redis",
          "signature": "m()-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:run_multi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "sadd",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#sadd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "sadd",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "sadd_",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#sadd_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "sadd_",
          "normalized": "a-\u003e[a]-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003e[s]-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sadd_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "save",
          "package": "redis",
          "signature": "m (Reply ())",
          "source": "src/Database-Redis-Monad.html#save",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "save",
          "normalized": "a(Reply())",
          "package": "redis",
          "signature": "m(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "scard",
          "package": "redis",
          "signature": "s -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#scard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "scard",
          "normalized": "a-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:scard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "sdiff",
          "package": "redis",
          "signature": "[s1] -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#sdiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "sdiff",
          "normalized": "[a]-\u003eb(Reply a)",
          "package": "redis",
          "signature": "[s]-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sdiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "sdiffStore",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#sdiffStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "sdiffStore",
          "normalized": "a-\u003e[a]-\u003eb(Reply())",
          "package": "redis",
          "partial": "Store",
          "signature": "s-\u003e[s]-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sdiffStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "select",
          "package": "redis",
          "signature": "Int -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "select",
          "normalized": "Int-\u003ea(Reply())",
          "package": "redis",
          "signature": "Int-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "set",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "set",
          "normalized": "a-\u003ea-\u003eb(Reply())",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "setEx",
          "package": "redis",
          "signature": "s1 -\u003e Int -\u003e s2 -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#setEx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "setEx",
          "normalized": "a-\u003eInt-\u003ea-\u003eb(Reply())",
          "package": "redis",
          "partial": "Ex",
          "signature": "s-\u003eInt-\u003es-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:setEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "setNx",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#setNx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "setNx",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "partial": "Nx",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:setNx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "setRedis",
          "package": "redis",
          "signature": "Redis -\u003e m ()",
          "source": "src/Database-Redis-Monad.html#setRedis",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "setRedis",
          "normalized": "Redis-\u003ea()",
          "package": "redis",
          "partial": "Redis",
          "signature": "Redis-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:setRedis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "setbit",
          "package": "redis",
          "signature": "s -\u003e Int -\u003e Int -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#setbit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "setbit",
          "normalized": "a-\u003eInt-\u003eInt-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003eInt-\u003eInt-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:setbit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "setrange",
          "package": "redis",
          "signature": "s1 -\u003e Int -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#setrange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "setrange",
          "normalized": "a-\u003eInt-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003eInt-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:setrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "shutdown",
          "package": "redis",
          "signature": "m ()",
          "source": "src/Database-Redis-Monad.html#shutdown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "shutdown",
          "normalized": "a()",
          "package": "redis",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:shutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "sinter",
          "package": "redis",
          "signature": "[s1] -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#sinter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "sinter",
          "normalized": "[a]-\u003eb(Reply a)",
          "package": "redis",
          "signature": "[s]-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "sinterStore",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#sinterStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "sinterStore",
          "normalized": "a-\u003e[a]-\u003eb(Reply())",
          "package": "redis",
          "partial": "Store",
          "signature": "s-\u003e[s]-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sinterStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "sismember",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#sismember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "sismember",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sismember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "smembers",
          "package": "redis",
          "signature": "s1 -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#smembers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "smembers",
          "normalized": "a-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:smembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "smove",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e s3 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#smove",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "smove",
          "normalized": "a-\u003ea-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:smove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "sort",
          "package": "redis",
          "signature": "s1 -\u003e SortOptions s2 -\u003e m (Reply s3)",
          "source": "src/Database-Redis-Monad.html#sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "sort",
          "normalized": "a-\u003eSortOptions a-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003eSortOptions s-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault options for the \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e command\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "sortDefaults",
          "package": "redis",
          "signature": "SortOptions ByteString",
          "source": "src/Database-Redis-Redis.html#sortDefaults",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sortDefaults\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:sortDefaults\"]"
        },
        "index": {
          "description": "Default options for the sort command",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "sortDefaults",
          "package": "redis",
          "partial": "Defaults",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sortDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esort by value from this key\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "sort_by",
          "package": "redis",
          "signature": "s",
          "source": "src/Database-Redis-Redis.html#SortOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sort_by\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:sort_by\"]"
        },
        "index": {
          "description": "sort by value from this key",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "sort_by",
          "package": "redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sort_by"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "spop",
          "package": "redis",
          "signature": "s1 -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#spop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "spop",
          "normalized": "a-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:spop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "srandmember",
          "package": "redis",
          "signature": "s1 -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#srandmember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "srandmember",
          "normalized": "a-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:srandmember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "srem",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#srem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "srem",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:srem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "srem_",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#srem_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "srem_",
          "normalized": "a-\u003e[a]-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003e[s]-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:srem_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estore result to this key\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "store",
          "package": "redis",
          "signature": "s",
          "source": "src/Database-Redis-Redis.html#SortOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:store\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:store\"]"
        },
        "index": {
          "description": "store result to this key",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "store",
          "package": "redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "strlen",
          "package": "redis",
          "signature": "s -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#strlen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "strlen",
          "normalized": "a-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:strlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "subscribe",
          "package": "redis",
          "signature": "[s1] -\u003e m [Message s2]",
          "source": "src/Database-Redis-Monad.html#subscribe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "subscribe",
          "normalized": "[a]-\u003eb[Message a]",
          "package": "redis",
          "signature": "[s]-\u003em[Message s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:subscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "subscribed",
          "package": "redis",
          "signature": "m Int",
          "source": "src/Database-Redis-Monad.html#subscribed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "subscribed",
          "package": "redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:subscribed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "substr",
          "package": "redis",
          "signature": "s1 -\u003e (Int, Int) -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#substr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "substr",
          "normalized": "a-\u003e(Int,Int)-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003e(Int,Int)-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:substr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "sunion",
          "package": "redis",
          "signature": "[s1] -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#sunion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "sunion",
          "normalized": "[a]-\u003eb(Reply a)",
          "package": "redis",
          "signature": "[s]-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sunion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "sunionStore",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#sunionStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "sunionStore",
          "normalized": "a-\u003e[a]-\u003eb(Reply())",
          "package": "redis",
          "partial": "Store",
          "signature": "s-\u003e[s]-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:sunionStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea (0, -1) range - takes all element from a list in lrange, zrange\n and so on\n\u003c/p\u003e",
          "module": "[\"Database.Redis.Monad\",\"Database.Redis.Redis\"]",
          "name": "takeAll",
          "package": "redis",
          "signature": "(Int, Int)",
          "source": "src/Database-Redis-Redis.html#takeAll",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:takeAll\",\"http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:takeAll\"]"
        },
        "index": {
          "description": "range takes all element from list in lrange zrange and so on",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "takeAll",
          "normalized": "(Int,Int)",
          "package": "redis",
          "partial": "All",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:takeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "toInterval",
          "package": "redis",
          "signature": "i -\u003e Interval a",
          "source": "src/Database-Redis-Redis.html#toInterval",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "toInterval",
          "normalized": "a-\u003eInterval b",
          "package": "redis",
          "partial": "Interval",
          "signature": "i-\u003eInterval a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:toInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "ttl",
          "package": "redis",
          "signature": "s -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#ttl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "ttl",
          "normalized": "a-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:ttl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "unsubscribe",
          "package": "redis",
          "signature": "[s1] -\u003e m [Message s2]",
          "source": "src/Database-Redis-Monad.html#unsubscribe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "unsubscribe",
          "normalized": "[a]-\u003eb[Message a]",
          "package": "redis",
          "signature": "[s]-\u003em[Message s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:unsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "unwatch",
          "package": "redis",
          "signature": "m (Reply ())",
          "source": "src/Database-Redis-Monad.html#unwatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "unwatch",
          "normalized": "a(Reply())",
          "package": "redis",
          "signature": "m(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:unwatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "watch",
          "package": "redis",
          "signature": "[s] -\u003e m (Reply ())",
          "source": "src/Database-Redis-Monad.html#watch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "watch",
          "normalized": "[a]-\u003eb(Reply())",
          "package": "redis",
          "signature": "[s]-\u003em(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:watch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zadd",
          "package": "redis",
          "signature": "s1 -\u003e Double -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zadd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zadd",
          "normalized": "a-\u003eDouble-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003eDouble-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zadd_",
          "package": "redis",
          "signature": "s1 -\u003e [(Double, s2)] -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zadd_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zadd_",
          "normalized": "a-\u003e[(Double,a)]-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003e[(Double,s)]-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zadd_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zcard",
          "package": "redis",
          "signature": "s -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zcard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zcard",
          "normalized": "a-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zcard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zcount",
          "package": "redis",
          "signature": "s -\u003e i -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zcount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zcount",
          "normalized": "a-\u003eb-\u003ec(Reply Int)",
          "package": "redis",
          "signature": "s-\u003ei-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zincrBy",
          "package": "redis",
          "signature": "s1 -\u003e Double -\u003e s2 -\u003e m (Reply s3)",
          "source": "src/Database-Redis-Monad.html#zincrBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zincrBy",
          "normalized": "a-\u003eDouble-\u003ea-\u003eb(Reply a)",
          "package": "redis",
          "partial": "By",
          "signature": "s-\u003eDouble-\u003es-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zincrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: ZINTER command was renamed to ZINTERSTORE\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Monad",
          "name": "zinter",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e [Double] -\u003e Aggregate -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zinter",
          "type": "function"
        },
        "index": {
          "description": "Deprecated ZINTER command was renamed to ZINTERSTORE",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zinter",
          "normalized": "a-\u003e[a]-\u003e[Double]-\u003eAggregate-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003e[s]-\u003e[Double]-\u003eAggregate-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zinterStore",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e [Double] -\u003e Aggregate -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zinterStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zinterStore",
          "normalized": "a-\u003e[a]-\u003e[Double]-\u003eAggregate-\u003eb(Reply Int)",
          "package": "redis",
          "partial": "Store",
          "signature": "s-\u003e[s]-\u003e[Double]-\u003eAggregate-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zinterStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zrange",
          "package": "redis",
          "signature": "s1 -\u003e (Int, Int) -\u003e Bool -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#zrange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zrange",
          "normalized": "a-\u003e(Int,Int)-\u003eBool-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003e(Int,Int)-\u003eBool-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zrangebyscore",
          "package": "redis",
          "signature": "s1 -\u003e i -\u003e Maybe (Int, Int) -\u003e Bool -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#zrangebyscore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zrangebyscore",
          "normalized": "a-\u003eb-\u003eMaybe(Int,Int)-\u003eBool-\u003ec(Reply a)",
          "package": "redis",
          "signature": "s-\u003ei-\u003eMaybe(Int,Int)-\u003eBool-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zrangebyscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zrank",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zrank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zrank",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zrank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zrem",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zrem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zrem",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zrem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zrem_",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zrem_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zrem_",
          "normalized": "a-\u003e[a]-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003e[s]-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zrem_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zremrangebyrank",
          "package": "redis",
          "signature": "s -\u003e (Int, Int) -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zremrangebyrank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zremrangebyrank",
          "normalized": "a-\u003e(Int,Int)-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003e(Int,Int)-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zremrangebyrank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zremrangebyscore",
          "package": "redis",
          "signature": "s -\u003e (Double, Double) -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zremrangebyscore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zremrangebyscore",
          "normalized": "a-\u003e(Double,Double)-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003e(Double,Double)-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zremrangebyscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zrevrange",
          "package": "redis",
          "signature": "s1 -\u003e (Int, Int) -\u003e Bool -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#zrevrange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zrevrange",
          "normalized": "a-\u003e(Int,Int)-\u003eBool-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003e(Int,Int)-\u003eBool-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zrevrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zrevrangebyscore",
          "package": "redis",
          "signature": "s1 -\u003e i -\u003e Maybe (Int, Int) -\u003e Bool -\u003e m (Reply s2)",
          "source": "src/Database-Redis-Monad.html#zrevrangebyscore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zrevrangebyscore",
          "normalized": "a-\u003eb-\u003eMaybe(Int,Int)-\u003eBool-\u003ec(Reply a)",
          "package": "redis",
          "signature": "s-\u003ei-\u003eMaybe(Int,Int)-\u003eBool-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zrevrangebyscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zrevrank",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zrevrank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zrevrank",
          "normalized": "a-\u003ea-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zrevrank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zscore",
          "package": "redis",
          "signature": "s1 -\u003e s2 -\u003e m (Reply s3)",
          "source": "src/Database-Redis-Monad.html#zscore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zscore",
          "normalized": "a-\u003ea-\u003eb(Reply a)",
          "package": "redis",
          "signature": "s-\u003es-\u003em(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: ZUNION command was renamed to ZUNIONSTORE\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Monad",
          "name": "zunion",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e [Double] -\u003e Aggregate -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zunion",
          "type": "function"
        },
        "index": {
          "description": "Deprecated ZUNION command was renamed to ZUNIONSTORE",
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zunion",
          "normalized": "a-\u003e[a]-\u003e[Double]-\u003eAggregate-\u003eb(Reply Int)",
          "package": "redis",
          "signature": "s-\u003e[s]-\u003e[Double]-\u003eAggregate-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zunion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Monad",
          "name": "zunionStore",
          "package": "redis",
          "signature": "s1 -\u003e [s2] -\u003e [Double] -\u003e Aggregate -\u003e m (Reply Int)",
          "source": "src/Database-Redis-Monad.html#zunionStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Monad",
          "module": "Database.Redis.Monad",
          "name": "zunionStore",
          "normalized": "a-\u003e[a]-\u003e[Double]-\u003eAggregate-\u003eb(Reply Int)",
          "package": "redis",
          "partial": "Store",
          "signature": "s-\u003e[s]-\u003e[Double]-\u003eAggregate-\u003em(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Monad.html#v:zunionStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain Redis API and protocol implementation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Redis",
          "name": "Redis",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html",
          "type": "module"
        },
        "index": {
          "description": "Main Redis API and protocol implementation",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "Redis",
          "package": "redis",
          "partial": "Redis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Redis",
          "name": "Aggregate",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html#Aggregate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "Aggregate",
          "package": "redis",
          "partial": "Aggregate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#t:Aggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterval representation\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "Interval",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html#Interval",
          "type": "data"
        },
        "index": {
          "description": "Interval representation",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "Interval",
          "package": "redis",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for conversion value to \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eDefinied instances is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the Interval itself\n\u003c/li\u003e\u003cli\u003e pair (a,b) for open interval\n\u003c/li\u003e\u003cli\u003e two-member list [a, b] for closed interval (throws runtime error if the list length is different)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Database.Redis.Redis",
          "name": "IsInterval",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html#IsInterval",
          "type": "class"
        },
        "index": {
          "description": "Class for conversion value to Interval Definied instances is the Interval itself pair for open interval two-member list for closed interval throws runtime error if the list length is different",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "IsInterval",
          "package": "redis",
          "partial": "Is Interval",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#t:IsInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Redis",
          "name": "LInsertDirection",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html#LInsertDirection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "LInsertDirection",
          "package": "redis",
          "partial": "LInsert Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#t:LInsertDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Redis",
          "name": "Message",
          "package": "redis",
          "source": "src/Database-Redis-Internal.html#Message",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "Message",
          "package": "redis",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedis connection descriptor\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "Redis",
          "package": "redis",
          "source": "src/Database-Redis-Internal.html#Redis",
          "type": "data"
        },
        "index": {
          "description": "Redis connection descriptor",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "Redis",
          "package": "redis",
          "partial": "Redis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#t:Redis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Redis",
          "name": "RedisInfo",
          "package": "redis",
          "source": "src/Database-Redis-Info.html#RedisInfo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "RedisInfo",
          "package": "redis",
          "partial": "Redis Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#t:RedisInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Redis",
          "name": "RedisKeyType",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html#RedisKeyType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "RedisKeyType",
          "package": "redis",
          "partial": "Redis Key Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#t:RedisKeyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedis reply variants\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "Reply",
          "package": "redis",
          "source": "src/Database-Redis-Internal.html#Reply",
          "type": "data"
        },
        "index": {
          "description": "Redis reply variants",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "Reply",
          "package": "redis",
          "partial": "Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#t:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions data type for the \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e command\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "SortOptions",
          "package": "redis",
          "source": "src/Database-Redis-Redis.html#SortOptions",
          "type": "data"
        },
        "index": {
          "description": "Options data type for the sort command",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "SortOptions",
          "package": "redis",
          "partial": "Sort Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#t:SortOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Redis",
          "name": "RTHash",
          "package": "redis",
          "signature": "RTHash",
          "source": "src/Database-Redis-Redis.html#RedisKeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "RTHash",
          "package": "redis",
          "partial": "RTHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RTHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Redis",
          "name": "RTList",
          "package": "redis",
          "signature": "RTList",
          "source": "src/Database-Redis-Redis.html#RedisKeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "RTList",
          "package": "redis",
          "partial": "RTList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RTList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Redis",
          "name": "RTNone",
          "package": "redis",
          "signature": "RTNone",
          "source": "src/Database-Redis-Redis.html#RedisKeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "RTNone",
          "package": "redis",
          "partial": "RTNone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RTNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Redis",
          "name": "RTSet",
          "package": "redis",
          "signature": "RTSet",
          "source": "src/Database-Redis-Redis.html#RedisKeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "RTSet",
          "package": "redis",
          "partial": "RTSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RTSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Redis",
          "name": "RTString",
          "package": "redis",
          "signature": "RTString",
          "source": "src/Database-Redis-Redis.html#RedisKeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "RTString",
          "package": "redis",
          "partial": "RTString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RTString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Redis",
          "name": "RTZSet",
          "package": "redis",
          "signature": "RTZSet",
          "source": "src/Database-Redis-Redis.html#RedisKeyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "RTZSet",
          "package": "redis",
          "partial": "RTZSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:RTZSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend string to the string-typed key\n\u003c/p\u003e\u003cp\u003eRInt returned - the length of resulting string\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "append",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Append string to the string-typed key RInt returned the length of resulting string",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "append",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePassword authentication\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "auth",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "Password authentication ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "auth",
          "normalized": "Redis-\u003ea-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrites the Append Only File in background\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "bgrewriteaof",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply ())",
          "source": "src/Database-Redis-Redis.html#bgrewriteaof",
          "type": "function"
        },
        "index": {
          "description": "Rewrites the Append Only File in background ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "bgrewriteaof",
          "normalized": "Redis-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:bgrewriteaof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave the DB in background\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "bgsave",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply ())",
          "source": "src/Database-Redis-Redis.html#bgsave",
          "type": "function"
        },
        "index": {
          "description": "Save the DB in background ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "bgsave",
          "normalized": "Redis-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:bgsave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlocking lpop\n\u003c/p\u003e\u003cp\u003eFor more information see \u003ca\u003ehttp://redis.io/commands/blpop\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eReturn (Just (key, value)) if \u003cem\u003evalue\u003c/em\u003e was successfully popped from \u003cem\u003ekey\u003c/em\u003e list or Nothing of timeout exceeded.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "blpop",
          "package": "redis",
          "signature": "Redis-\u003e [s1]-\u003e Int-\u003e IO (Maybe (s1, s2))",
          "type": "function"
        },
        "index": {
          "description": "Blocking lpop For more information see http redis.io commands blpop Return Just key value if value was successfully popped from key list or Nothing of timeout exceeded",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "blpop",
          "normalized": "Redis-\u003e[a]-\u003eInt-\u003eIO(Maybe(a,a))",
          "package": "redis",
          "signature": "Redis-\u003e[s]-\u003eInt-\u003eIO(Maybe(s,s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:blpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlocking rpop\n\u003c/p\u003e\u003cp\u003eFor more information see \u003ca\u003ehttp://redis.io/commands/brpop\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eReturn (Just (key, value)) if \u003cem\u003evalue\u003c/em\u003e was successfully popped from \u003cem\u003ekey\u003c/em\u003e list or Nothing of timeout exceeded.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "brpop",
          "package": "redis",
          "signature": "Redis-\u003e [s1]-\u003e Int-\u003e IO (Maybe (s1, s2))",
          "type": "function"
        },
        "index": {
          "description": "Blocking rpop For more information see http redis.io commands brpop Return Just key value if value was successfully popped from key list or Nothing of timeout exceeded",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "brpop",
          "normalized": "Redis-\u003e[a]-\u003eInt-\u003eIO(Maybe(a,a))",
          "package": "redis",
          "signature": "Redis-\u003e[s]-\u003eInt-\u003eIO(Maybe(s,s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:brpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlocking rpoplpush\n\u003c/p\u003e\u003cp\u003eFor more information see \u003ca\u003ehttp://redis.io/commands/brpoplpush\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eReturn (Just $ Maybe value) if value was successfully popped or Nothing if timeout exceeded.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "brpoplpush",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e Int-\u003e IO (Maybe (Maybe s3))",
          "type": "function"
        },
        "index": {
          "description": "Blocking rpoplpush For more information see http redis.io commands brpoplpush Return Just Maybe value if value was successfully popped or Nothing if timeout exceeded",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "brpoplpush",
          "normalized": "Redis-\u003ea-\u003ea-\u003eInt-\u003eIO(Maybe(Maybe a))",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eInt-\u003eIO(Maybe(Maybe s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:brpoplpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConects to Redis server and returns connection descriptor\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "connect",
          "package": "redis",
          "signature": "String-\u003e String-\u003e IO Redis",
          "type": "function"
        },
        "index": {
          "description": "Conects to Redis server and returns connection descriptor",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "connect",
          "normalized": "String-\u003eString-\u003eIO Redis",
          "package": "redis",
          "signature": "String-\u003eString-\u003eIO Redis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of keys in the currently selected database\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "dbsize",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply Int)",
          "source": "src/Database-Redis-Redis.html#dbsize",
          "type": "function"
        },
        "index": {
          "description": "Get the number of keys in the currently selected database RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "dbsize",
          "normalized": "Redis-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:dbsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrement the key value by one\n\u003c/p\u003e\u003cp\u003eRInt returned with new key value\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "decr",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Decrement the key value by one RInt returned with new key value",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "decr",
          "normalized": "Redis-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:decr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrement the key value by N\n\u003c/p\u003e\u003cp\u003eRInt returned with new key value\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "decrBy",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e Int-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Decrement the key value by RInt returned with new key value",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "decrBy",
          "normalized": "Redis-\u003ea-\u003eInt-\u003eIO(Reply Int)",
          "package": "redis",
          "partial": "By",
          "signature": "Redis-\u003es-\u003eInt-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:decrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the key\n\u003c/p\u003e\u003cp\u003e(RInt 0) returned if no keys were removed or (RInt n) with removed keys count\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "del",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Remove the key RInt returned if no keys were removed or RInt with removed keys count",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "del",
          "normalized": "Redis-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:del"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariadic form of DEL\n\u003c/p\u003e\u003cp\u003eRInt returned - number of deleted keys\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "del_",
          "package": "redis",
          "signature": "Redis-\u003e [s]-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Variadic form of DEL RInt returned number of deleted keys",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "del_",
          "normalized": "Redis-\u003e[a]-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003e[s]-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:del_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard queued commands without execution\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "discard",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply ())",
          "source": "src/Database-Redis-Redis.html#discard",
          "type": "function"
        },
        "index": {
          "description": "Discard queued commands without execution ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "discard",
          "normalized": "Redis-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:discard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose connection\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "disconnect",
          "package": "redis",
          "signature": "Redis -\u003e IO ()",
          "source": "src/Database-Redis-Redis.html#disconnect",
          "type": "function"
        },
        "index": {
          "description": "Close connection",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "disconnect",
          "normalized": "Redis-\u003eIO()",
          "package": "redis",
          "signature": "Redis-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho the given string\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "echo",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO (Reply s)",
          "type": "function"
        },
        "index": {
          "description": "Echo the given string RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "echo",
          "normalized": "Redis-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute queued commands\n\u003c/p\u003e\u003cp\u003eRMulti returned - replies for all executed commands\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "exec",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply s)",
          "source": "src/Database-Redis-Redis.html#exec",
          "type": "function"
        },
        "index": {
          "description": "Execute queued commands RMulti returned replies for all executed commands",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "exec",
          "normalized": "Redis-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the key exists\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if the key exists and (RInt 0) otherwise\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "exists",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Test if the key exists RInt returned if the key exists and RInt otherwise",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "exists",
          "normalized": "Redis-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:exists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an expiration timeout in seconds on the specified key.\n\u003c/p\u003e\u003cp\u003eFor more information see \u003ca\u003ehttp://redis.io/commands/expire\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if timeout was set and (RInt 0) otherwise\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "expire",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e Int-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Set an expiration timeout in seconds on the specified key For more information see http redis.io commands expire RInt returned if timeout was set and RInt otherwise",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "expire",
          "normalized": "Redis-\u003ea-\u003eInt-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eInt-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:expire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an expiration time in form of UNIX timestamp on the specified key\n\u003c/p\u003e\u003cp\u003eFor more information see \u003ca\u003ehttp://redis.io/commands/expireat\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if timeout was set and (RInt 0) otherwise\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "expireAt",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e Int-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Set an expiration time in form of UNIX timestamp on the specified key For more information see http redis.io commands expireat RInt returned if timeout was set and RInt otherwise",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "expireAt",
          "normalized": "Redis-\u003ea-\u003eInt-\u003eIO(Reply Int)",
          "package": "redis",
          "partial": "At",
          "signature": "Redis-\u003es-\u003eInt-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:expireAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all the keys of all the existing databases\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "flushAll",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply ())",
          "source": "src/Database-Redis-Redis.html#flushAll",
          "type": "function"
        },
        "index": {
          "description": "Delete all the keys of all the existing databases ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "flushAll",
          "normalized": "Redis-\u003eIO(Reply())",
          "package": "redis",
          "partial": "All",
          "signature": "Redis-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:flushAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all the keys of the currently selected DB\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "flushDb",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply ())",
          "source": "src/Database-Redis-Redis.html#flushDb",
          "type": "function"
        },
        "index": {
          "description": "Delete all the keys of the currently selected DB ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "flushDb",
          "normalized": "Redis-\u003eIO(Reply())",
          "package": "redis",
          "partial": "Db",
          "signature": "Redis-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:flushDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as fromRBulk but with fromJust applied\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "fromRBulk'",
          "package": "redis",
          "signature": "Reply s -\u003e m s",
          "source": "src/Database-Redis-Redis.html#fromRBulk%27",
          "type": "function"
        },
        "index": {
          "description": "The same as fromRBulk but with fromJust applied",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "fromRBulk'",
          "normalized": "Reply a-\u003eb a",
          "package": "redis",
          "partial": "RBulk'",
          "signature": "Reply s-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:fromRBulk-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of the specified key.\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "get",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Get the value of the specified key RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "get",
          "normalized": "Redis-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns currently selected database\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "getDatabase",
          "package": "redis",
          "signature": "Redis -\u003e IO Int",
          "source": "src/Database-Redis-Redis.html#getDatabase",
          "type": "function"
        },
        "index": {
          "description": "Returns currently selected database",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "getDatabase",
          "normalized": "Redis-\u003eIO Int",
          "package": "redis",
          "partial": "Database",
          "signature": "Redis-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:getDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns connection host and port\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "getServer",
          "package": "redis",
          "signature": "Redis -\u003e IO (String, String)",
          "source": "src/Database-Redis-Redis.html#getServer",
          "type": "function"
        },
        "index": {
          "description": "Returns connection host and port",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "getServer",
          "normalized": "Redis-\u003eIO(String,String)",
          "package": "redis",
          "partial": "Server",
          "signature": "Redis-\u003eIO(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:getServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically set this value and return the old value\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "getSet",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply s3)",
          "type": "function"
        },
        "index": {
          "description": "Atomically set this value and return the old value RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "getSet",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "partial": "Set",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:getSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the type of the value stored at key in form of a string\n\u003c/p\u003e\u003cp\u003eRedisKeyType returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "getType",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO RedisKeyType",
          "type": "function"
        },
        "index": {
          "description": "Return the type of the value stored at key in form of string RedisKeyType returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "getType",
          "normalized": "Redis-\u003ea-\u003eIO RedisKeyType",
          "package": "redis",
          "partial": "Type",
          "signature": "Redis-\u003es-\u003eIO RedisKeyType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:getType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the bit value at offset in the string value stored at\n key. When offset is beyond the string length, the string is assumed\n to be a contiguous space with 0 bits. When key does not exist it is\n assumed to be an empty string, so offset is always out of range and\n the value is also assumed to be a contiguous space with 0 bits.\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "getbit",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e Int-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Returns the bit value at offset in the string value stored at key When offset is beyond the string length the string is assumed to be contiguous space with bits When key does not exist it is assumed to be an empty string so offset is always out of range and the value is also assumed to be contiguous space with bits RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "getbit",
          "normalized": "Redis-\u003ea-\u003eInt-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eInt-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:getbit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the substring of the string value stored at key,\n determined by the offsets start and end (both are\n inclusive). Negative offsets can be used in order to provide an\n offset starting from the end of the string.\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "getrange",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e (Int, Int)-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Returns the substring of the string value stored at key determined by the offsets start and end both are inclusive Negative offsets can be used in order to provide an offset starting from the end of the string RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "getrange",
          "normalized": "Redis-\u003ea-\u003e(Int,Int)-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e(Int,Int)-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:getrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove field from a hash\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if field was removed and (RInt 0) otherwise\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hdel",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Remove field from hash RInt returned if field was removed and RInt otherwise",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hdel",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hdel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariadic form of HDEL\n\u003c/p\u003e\u003cp\u003eRInt returned - number of fields deleted\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hdel_",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [s2]-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Variadic form of HDEL RInt returned number of fields deleted",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hdel_",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e[s]-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hdel_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if hash contains the specified field\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if fiels exists and (RInt 0) otherwise\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hexists",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Test if hash contains the specified field RInt returned if fiels exists and RInt otherwise",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hexists",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hexists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn value associated with specified field from hash\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hget",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply s3)",
          "type": "function"
        },
        "index": {
          "description": "Return value associated with specified field from hash RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hget",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the field names and associated values the hash holding\n in form of \u003cem\u003e[field1, value1, field2, value2...]\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eRMulti field with RBulk returned. If key doesn't exists (RMulti []) returned.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hgetall",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Return all the field names and associated values the hash holding in form of field1 value1 field2 value2 RMulti field with RBulk returned If key doesn exists RMulti returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hgetall",
          "normalized": "Redis-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hgetall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the field value within a hash by N\n\u003c/p\u003e\u003cp\u003eRInt returned with new key value\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hincrBy",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e Int-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Increment the field value within hash by RInt returned with new key value",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hincrBy",
          "normalized": "Redis-\u003ea-\u003ea-\u003eInt-\u003eIO(Reply Int)",
          "package": "redis",
          "partial": "By",
          "signature": "Redis-\u003es-\u003es-\u003eInt-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hincrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the field value within a hash by N\n\u003c/p\u003e\u003cp\u003e(RBulk Double) returned with new key value\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hincrByFloat",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e Double-\u003e IO (Reply Double)",
          "type": "function"
        },
        "index": {
          "description": "Increment the field value within hash by RBulk Double returned with new key value",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hincrByFloat",
          "normalized": "Redis-\u003ea-\u003ea-\u003eDouble-\u003eIO(Reply Double)",
          "package": "redis",
          "partial": "By Float",
          "signature": "Redis-\u003es-\u003es-\u003eDouble-\u003eIO(Reply Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hincrByFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the field names the hash holding\n\u003c/p\u003e\u003cp\u003eRMulti field with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hkeys",
          "package": "redis",
          "signature": "Redis -\u003e s1 -\u003e IO (Reply s2)",
          "source": "src/Database-Redis-Redis.html#hkeys",
          "type": "function"
        },
        "index": {
          "description": "Return all the field names the hash holding RMulti field with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hkeys",
          "normalized": "Redis-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hkeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of fields contained in the specified hash\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hlen",
          "package": "redis",
          "signature": "Redis -\u003e s -\u003e IO (Reply Int)",
          "source": "src/Database-Redis-Redis.html#hlen",
          "type": "function"
        },
        "index": {
          "description": "Return the number of fields contained in the specified hash RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hlen",
          "normalized": "Redis-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the values of all specified fields from the hash-typed key\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk replies returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hmget",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [s2]-\u003e IO (Reply s3)",
          "type": "function"
        },
        "index": {
          "description": "Get the values of all specified fields from the hash-typed key RMulti filled with RBulk replies returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hmget",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e[s]-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hmget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically sets multiple fields within a hash-typed key\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hmset",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [(s2, s3)]-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "Atomically sets multiple fields within hash-typed key ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hmset",
          "normalized": "Redis-\u003ea-\u003e[(a,a)]-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e[(s,s)]-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hmset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the specified hash field to the specified value\n\u003c/p\u003e\u003cp\u003e(RInt 0 returned if field value was updated and (RInt 1) if new field created\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hset",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e s3-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Set the specified hash field to the specified value RInt returned if field value was updated and RInt if new field created",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hset",
          "normalized": "Redis-\u003ea-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the associated values the hash holding\n\u003c/p\u003e\u003cp\u003eRMulti field with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "hvals",
          "package": "redis",
          "signature": "Redis -\u003e s1 -\u003e IO (Reply s2)",
          "source": "src/Database-Redis-Redis.html#hvals",
          "type": "function"
        },
        "index": {
          "description": "Return all the associated values the hash holding RMulti field with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "hvals",
          "normalized": "Redis-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:hvals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the key value by one\n\u003c/p\u003e\u003cp\u003eRInt returned with new key value\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "incr",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Increment the key value by one RInt returned with new key value",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "incr",
          "normalized": "Redis-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:incr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the key value by N\n\u003c/p\u003e\u003cp\u003eRInt returned with new key value\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "incrBy",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e Int-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Increment the key value by RInt returned with new key value",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "incrBy",
          "normalized": "Redis-\u003ea-\u003eInt-\u003eIO(Reply Int)",
          "package": "redis",
          "partial": "By",
          "signature": "Redis-\u003es-\u003eInt-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:incrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the key value by N\n\u003c/p\u003e\u003cp\u003e(RBulk Double) returned with new key value\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "incrByFloat",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e Double-\u003e IO (Reply Double)",
          "type": "function"
        },
        "index": {
          "description": "Increment the key value by RBulk Double returned with new key value",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "incrByFloat",
          "normalized": "Redis-\u003ea-\u003eDouble-\u003eIO(Reply Double)",
          "package": "redis",
          "partial": "By Float",
          "signature": "Redis-\u003es-\u003eDouble-\u003eIO(Reply Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:incrByFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns different information and statistics about the server\n\u003c/p\u003e\u003cp\u003efor more information see \u003ca\u003ehttp://redis.io/commands/info\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRedisInfo\u003c/a\u003e\u003c/code\u003e returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "info",
          "package": "redis",
          "signature": "Redis -\u003e IO RedisInfo",
          "source": "src/Database-Redis-Redis.html#info",
          "type": "function"
        },
        "index": {
          "description": "Returns different information and statistics about the server for more information see http redis.io commands info RedisInfo returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "info",
          "normalized": "Redis-\u003eIO RedisInfo",
          "package": "redis",
          "signature": "Redis-\u003eIO RedisInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True when connection handler is opened\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "isConnected",
          "package": "redis",
          "signature": "Redis -\u003e IO Bool",
          "source": "src/Database-Redis-Redis.html#isConnected",
          "type": "function"
        },
        "index": {
          "description": "Returns True when connection handler is opened",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "isConnected",
          "normalized": "Redis-\u003eIO Bool",
          "package": "redis",
          "partial": "Connected",
          "signature": "Redis-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:isConnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all the keys matching the glob-style pattern\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "keys",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Returns all the keys matching the glob-style pattern RMulti filled with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "keys",
          "normalized": "Redis-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the UNIX TIME of the last DB save executed with success\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "lastsave",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply Int)",
          "source": "src/Database-Redis-Redis.html#lastsave",
          "type": "function"
        },
        "index": {
          "description": "Return the UNIX TIME of the last DB save executed with success RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "lastsave",
          "normalized": "Redis-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:lastsave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the specified element of the list by its index\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "lindex",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e Int-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Return the specified element of the list by its index RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "lindex",
          "normalized": "Redis-\u003ea-\u003eInt-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eInt-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:lindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts value in the list stored at key either before or after\n the reference value pivot.\n\u003c/p\u003e\u003cp\u003eRInt returned - resulting list length or (RInt -1) if target element was not found.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "linsert",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e LInsertDirection-\u003e s2-\u003e s3-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Inserts value in the list stored at key either before or after the reference value pivot RInt returned resulting list length or RInt if target element was not found",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "linsert",
          "normalized": "Redis-\u003ea-\u003eLInsertDirection-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eLInsertDirection-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:linsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortcut for the \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e with some \u003ccode\u003e\u003ca\u003eget_obj\u003c/a\u003e\u003c/code\u003e and constant\n \u003ccode\u003e\u003ca\u003esort_by\u003c/a\u003e\u003c/code\u003e options\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "listRelated",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e (Int, Int)-\u003e IO (Reply s3)",
          "type": "function"
        },
        "index": {
          "description": "Shortcut for the sort with some get obj and constant sort by options RMulti filled with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "listRelated",
          "normalized": "Redis-\u003ea-\u003ea-\u003e(Int,Int)-\u003eIO(Reply a)",
          "package": "redis",
          "partial": "Related",
          "signature": "Redis-\u003es-\u003es-\u003e(Int,Int)-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:listRelated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a messages.\n\u003c/p\u003e\u003cp\u003eJust Message returned or Nothing if timeout exceeded\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "listen",
          "package": "redis",
          "signature": "Redis-\u003e Int-\u003e IO (Maybe (Message s))",
          "type": "function"
        },
        "index": {
          "description": "Wait for messages Just Message returned or Nothing if timeout exceeded",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "listen",
          "normalized": "Redis-\u003eInt-\u003eIO(Maybe(Message a))",
          "package": "redis",
          "signature": "Redis-\u003eInt-\u003eIO(Maybe(Message s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn lenght of the list. Note that for not-existing keys it\n returns zero length.\n\u003c/p\u003e\u003cp\u003eRInt returned or RError if key is not a list\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "llen",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Return lenght of the list Note that for not-existing keys it returns zero length RInt returned or RError if key is not list",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "llen",
          "normalized": "Redis-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:llen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically return and remove the first element of the list\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "lpop",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Atomically return and remove the first element of the list RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "lpop",
          "normalized": "Redis-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:lpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd string value to the head of the list-type key. New list\n length returned\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "lpush",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Add string value to the head of the list-type key New list length returned RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "lpush",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:lpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariadic form of LPUSH\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "lpush_",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [s2]-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Variadic form of LPUSH RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "lpush_",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e[s]-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:lpush_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd string value to the head of existing list-type key.  New list\n length returned. If such a key was not exists, list is not created\n and (RInt 0) returned.\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "lpushx",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Add string value to the head of existing list-type key New list length returned If such key was not exists list is not created and RInt returned RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "lpushx",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:lpushx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the specified range of list elements. List indexed from 0\n to (llen - 1). lrange returns slice including \"from\" and \"to\"\n elements, eg. lrange 0 2 will return the first three elements of\n the list.\n\u003c/p\u003e\u003cp\u003eParameters \"from\" and \"to\" may also be negative. If so it will counts as\n offset from end ot the list. eg. -1 - is the last element of the\n list, -2 - is the second from the end and so on.\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "lrange",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e (Int, Int)-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Return the specified range of list elements List indexed from to llen lrange returns slice including from and to elements eg lrange will return the first three elements of the list Parameters from and to may also be negative If so it will counts as offset from end ot the list eg is the last element of the list is the second from the end and so on RMulti filled with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "lrange",
          "normalized": "Redis-\u003ea-\u003e(Int,Int)-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e(Int,Int)-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:lrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the first \u003cem\u003ecount\u003c/em\u003e occurrences of the \u003cem\u003evalue\u003c/em\u003e element from the list\n\u003c/p\u003e\u003cp\u003eRInt returned - the number of elements removed\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "lrem",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e Int-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Remove the first count occurrences of the value element from the list RInt returned the number of elements removed",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "lrem",
          "normalized": "Redis-\u003ea-\u003eInt-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eInt-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:lrem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the list's value indexed by an \u003cem\u003eindex\u003c/em\u003e to the new value\n\u003c/p\u003e\u003cp\u003eROk returned if element was set and RError if index is out of\n range or key is not a list\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "lset",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e Int-\u003e s2-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "Set the list value indexed by an index to the new value ROk returned if element was set and RError if index is out of range or key is not list",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "lset",
          "normalized": "Redis-\u003ea-\u003eInt-\u003ea-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eInt-\u003es-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:lset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim list so that it will contain only the specified range of elements.\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "ltrim",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e (Int, Int)-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "Trim list so that it will contain only the specified range of elements ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "ltrim",
          "normalized": "Redis-\u003ea-\u003e(Int,Int)-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e(Int,Int)-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:ltrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the values of all specified keys\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk replies returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "mGet",
          "package": "redis",
          "signature": "Redis-\u003e [s1]-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Get the values of all specified keys RMulti filled with RBulk replies returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "mGet",
          "normalized": "Redis-\u003e[a]-\u003eIO(Reply a)",
          "package": "redis",
          "partial": "Get",
          "signature": "Redis-\u003e[s]-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:mGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically set multiple keys\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "mSet",
          "package": "redis",
          "signature": "Redis-\u003e [(s1, s2)]-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "Atomically set multiple keys ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "mSet",
          "normalized": "Redis-\u003e[(a,a)]-\u003eIO(Reply())",
          "package": "redis",
          "partial": "Set",
          "signature": "Redis-\u003e[(s,s)]-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:mSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically set multiple keys if none of them exists.\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if all keys was set and (RInt 0) otherwise\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "mSetNx",
          "package": "redis",
          "signature": "Redis-\u003e [(s1, s2)]-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Atomically set multiple keys if none of them exists RInt returned if all keys was set and RInt otherwise",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "mSetNx",
          "normalized": "Redis-\u003e[(a,a)]-\u003eIO(Reply Int)",
          "package": "redis",
          "partial": "Set Nx",
          "signature": "Redis-\u003e[(s,s)]-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:mSetNx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the specified key from the currently selected DB to the\n specified destination DB. If such a key is already exists in the\n target DB no data modification performed.\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if the key was moved and (RInt 0) otherwise\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "move",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e Int-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Move the specified key from the currently selected DB to the specified destination DB If such key is already exists in the target DB no data modification performed RInt returned if the key was moved and RInt otherwise",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "move",
          "normalized": "Redis-\u003ea-\u003eInt-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eInt-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin the multi-exec block\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "multi",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply ())",
          "source": "src/Database-Redis-Redis.html#multi",
          "type": "function"
        },
        "index": {
          "description": "Begin the multi-exec block ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "multi",
          "normalized": "Redis-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:multi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the timeout from a key\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if the timeout was removed and (RInt 0) otherwise\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "persist",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Remove the timeout from key RInt returned if the timeout was removed and RInt otherwise",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "persist",
          "normalized": "Redis-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:persist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eping - pong\n\u003c/p\u003e\u003cp\u003eRPong returned if no errors happends\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "ping",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply ())",
          "source": "src/Database-Redis-Redis.html#ping",
          "type": "function"
        },
        "index": {
          "description": "ping pong RPong returned if no errors happends",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "ping",
          "normalized": "Redis-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribe to patterns\n\u003c/p\u003e\u003cp\u003elist of Message with subscribtion information returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "psubscribe",
          "package": "redis",
          "signature": "Redis-\u003e [s1]-\u003e IO [Message s2]",
          "type": "function"
        },
        "index": {
          "description": "Subscribe to patterns list of Message with subscribtion information returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "psubscribe",
          "normalized": "Redis-\u003e[a]-\u003eIO[Message a]",
          "package": "redis",
          "signature": "Redis-\u003e[s]-\u003eIO[Message s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:psubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublish message to target channel\n\u003c/p\u003e\u003cp\u003eRInt returned - a number of clients that recieves the message\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "publish",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Publish message to target channel RInt returned number of clients that recieves the message",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "publish",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:publish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsubscribe from patterns. If called with an empty list then\n unsubscribe all patterns\n\u003c/p\u003e\u003cp\u003elist of Message with subscribtion information returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "punsubscribe",
          "package": "redis",
          "signature": "Redis-\u003e [s1]-\u003e IO [Message s2]",
          "type": "function"
        },
        "index": {
          "description": "Unsubscribe from patterns If called with an empty list then unsubscribe all patterns list of Message with subscribtion information returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "punsubscribe",
          "normalized": "Redis-\u003e[a]-\u003eIO[Message a]",
          "package": "redis",
          "signature": "Redis-\u003e[s]-\u003eIO[Message s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:punsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuit and close connection\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "quit",
          "package": "redis",
          "signature": "Redis -\u003e IO ()",
          "source": "src/Database-Redis-Redis.html#quit",
          "type": "function"
        },
        "index": {
          "description": "Quit and close connection",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "quit",
          "normalized": "Redis-\u003eIO()",
          "package": "redis",
          "signature": "Redis-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn random key name\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "randomKey",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply s)",
          "source": "src/Database-Redis-Redis.html#randomKey",
          "type": "function"
        },
        "index": {
          "description": "Return random key name RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "randomKey",
          "normalized": "Redis-\u003eIO(Reply a)",
          "package": "redis",
          "partial": "Key",
          "signature": "Redis-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:randomKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename the key. If key with that name exists it'll be overwritten.\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "rename",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "Rename the key If key with that name exists it ll be overwritten ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "rename",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds command to renaming map\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "renameCommand",
          "package": "redis",
          "signature": "Redis-\u003e ByteString-\u003e ByteString-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Adds command to renaming map",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "renameCommand",
          "normalized": "Redis-\u003eByteString-\u003eByteString-\u003eIO()",
          "package": "redis",
          "partial": "Command",
          "signature": "Redis-\u003eByteString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:renameCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename the key if no keys with destination name exists.\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if key was renamed and (RInt 0) otherwise\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "renameNx",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Rename the key if no keys with destination name exists RInt returned if key was renamed and RInt otherwise",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "renameNx",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "partial": "Nx",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:renameNx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically return and remove the last element of the list\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "rpop",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Atomically return and remove the last element of the list RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "rpop",
          "normalized": "Redis-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:rpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically return and remove the last (tail) element of the\n source list, and push the element as the first (head) element of\n the destination list\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "rpoplpush",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply s3)",
          "type": "function"
        },
        "index": {
          "description": "Atomically return and remove the last tail element of the source list and push the element as the first head element of the destination list RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "rpoplpush",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:rpoplpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd string value to the tail of the list-type key. New list\n length returned\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "rpush",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Add string value to the tail of the list-type key New list length returned RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "rpush",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:rpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariadic form of rpush\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "rpush_",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [s2]-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Variadic form of rpush RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "rpush_",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e[s]-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:rpush_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd string value to the tail of existing list-type key. New list\n length returned.  If such a key was not exists, list is not created\n and (RInt 0) returned.\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "rpushx",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Add string value to the tail of existing list-type key New list length returned If such key was not exists list is not created and RInt returned RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "rpushx",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:rpushx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun actions in a CAS manner\n\u003c/p\u003e\u003cp\u003eYou have to explicitly add multi/exec commands to an appropriate\n place in an action sequence. Command sequence will be explicitly\n terminated with \u003cem\u003eunwatch\u003c/em\u003e command even if \u003cem\u003eexec\u003c/em\u003e command was sent.\n\u003c/p\u003e\u003cp\u003eResult of user-defined action returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "run_cas",
          "package": "redis",
          "signature": "Redis-\u003e [s1]-\u003e (Redis -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Run actions in CAS manner You have to explicitly add multi exec commands to an appropriate place in an action sequence Command sequence will be explicitly terminated with unwatch command even if exec command was sent Result of user-defined action returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "run_cas",
          "normalized": "Redis-\u003e[a]-\u003e(Redis-\u003eIO b)-\u003eIO b",
          "package": "redis",
          "signature": "Redis-\u003e[s]-\u003e(Redis-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:run_cas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun commands within multi-exec block\n\u003c/p\u003e\u003cp\u003eRMulti returned - replies for all executed commands\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "run_multi",
          "package": "redis",
          "signature": "Redis-\u003e (Redis -\u003e IO ())-\u003e IO (Reply s)",
          "type": "function"
        },
        "index": {
          "description": "Run commands within multi-exec block RMulti returned replies for all executed commands",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "run_multi",
          "normalized": "Redis-\u003e(Redis-\u003eIO())-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003e(Redis-\u003eIO())-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:run_multi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the specified member to the set value stored at key\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if element was added and (RInt 0) if element was\n already a member of the set\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "sadd",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Add the specified member to the set value stored at key RInt returned if element was added and RInt if element was already member of the set",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "sadd",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:sadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariadic form of SADD\n\u003c/p\u003e\u003cp\u003eRInt returned - number of actualy added elements\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "sadd_",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [s2]-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Variadic form of SADD RInt returned number of actualy added elements",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "sadd_",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e[s]-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:sadd_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave the whole dataset on disk\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "save",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply ())",
          "source": "src/Database-Redis-Redis.html#save",
          "type": "function"
        },
        "index": {
          "description": "Save the whole dataset on disk ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "save",
          "normalized": "Redis-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of elements of the set. If key doesn't exists 0\n returned.\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "scard",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Return the number of elements of the set If key doesn exists returned RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "scard",
          "normalized": "Redis-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:scard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the members of a set resulting from the difference between\n the first set provided and all the successive sets\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "sdiff",
          "package": "redis",
          "signature": "Redis-\u003e [s1]-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Return the members of set resulting from the difference between the first set provided and all the successive sets RMulti filled with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "sdiff",
          "normalized": "Redis-\u003e[a]-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003e[s]-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:sdiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003esdiff\u003c/a\u003e\u003c/code\u003e but instead of being returned the resulting\n set is stored\n\u003c/p\u003e\u003cp\u003eRInt returned - resulting set cardinality.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "sdiffStore",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [s2]-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "The same as sdiff but instead of being returned the resulting set is stored RInt returned resulting set cardinality",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "sdiffStore",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003eIO(Reply())",
          "package": "redis",
          "partial": "Store",
          "signature": "Redis-\u003es-\u003e[s]-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:sdiffStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect the DB with the specified zero-based numeric index\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "select",
          "package": "redis",
          "signature": "Redis-\u003e Int-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "Select the DB with the specified zero-based numeric index ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "select",
          "normalized": "Redis-\u003eInt-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003eInt-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the string value as value of the key\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "set",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "Set the string value as value of the key ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "set",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically sets target key value and assigns expiration time. The\n same as \u003cem\u003emulti; set key val; expire key seconds; exec\u003c/em\u003e but faster.\n\u003c/p\u003e\u003cp\u003eArguments order is the same as in Redis protocol.\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "setEx",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e Int-\u003e s2-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "Atomically sets target key value and assigns expiration time The same as multi set key val expire key seconds exec but faster Arguments order is the same as in Redis protocol ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "setEx",
          "normalized": "Redis-\u003ea-\u003eInt-\u003ea-\u003eIO(Reply())",
          "package": "redis",
          "partial": "Ex",
          "signature": "Redis-\u003es-\u003eInt-\u003es-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:setEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the key value if key does not exists\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if key was set and (RInt 0) otherwise\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "setNx",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Set the key value if key does not exists RInt returned if key was set and RInt otherwise",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "setNx",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "partial": "Nx",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:setNx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets or clears the bit at offset in the string value stored at key.\n For more information see \u003ca\u003ehttp://redis.io/commands/setbit\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eRInt returned - the original bit value stored at offset.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "setbit",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e Int-\u003e Int-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Sets or clears the bit at offset in the string value stored at key For more information see http redis.io commands setbit RInt returned the original bit value stored at offset",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "setbit",
          "normalized": "Redis-\u003ea-\u003eInt-\u003eInt-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eInt-\u003eInt-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:setbit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverwrites part of the string stored at key, starting at the\n specified offset, for the entire length of value. If the offset is\n larger than the current length of the string at key, the string is\n padded with zero-bytes to make offset fit. Non-existing keys are\n considered as empty strings, so this command will make sure it\n holds a string large enough to be able to set value at offset.\n\u003c/p\u003e\u003cp\u003eRInt returned - resulting string length.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "setrange",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e Int-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Overwrites part of the string stored at key starting at the specified offset for the entire length of value If the offset is larger than the current length of the string at key the string is padded with zero-bytes to make offset fit Non-existing keys are considered as empty strings so this command will make sure it holds string large enough to be able to set value at offset RInt returned resulting string length",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "setrange",
          "normalized": "Redis-\u003ea-\u003eInt-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eInt-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:setrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop all the clients, save the DB, then quit the server\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "shutdown",
          "package": "redis",
          "signature": "Redis -\u003e IO ()",
          "source": "src/Database-Redis-Redis.html#shutdown",
          "type": "function"
        },
        "index": {
          "description": "Stop all the clients save the DB then quit the server",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "shutdown",
          "normalized": "Redis-\u003eIO()",
          "package": "redis",
          "signature": "Redis-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:shutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the members of a set resulting from the intersection of\n all the specifided sets\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "sinter",
          "package": "redis",
          "signature": "Redis-\u003e [s1]-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Return the members of set resulting from the intersection of all the specifided sets RMulti filled with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "sinter",
          "normalized": "Redis-\u003e[a]-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003e[s]-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:sinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003esinter\u003c/a\u003e\u003c/code\u003e but instead of being returned the resulting set\n is stored\n\u003c/p\u003e\u003cp\u003eRInt returned - resulting set cardinality.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "sinterStore",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [s2]-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "The same as sinter but instead of being returned the resulting set is stored RInt returned resulting set cardinality",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "sinterStore",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003eIO(Reply())",
          "package": "redis",
          "partial": "Store",
          "signature": "Redis-\u003es-\u003e[s]-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:sinterStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if element is member of the set. If key doesn't exists 0\n returned.\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if element is member of the set and (RInt 0) otherwise\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "sismember",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Test if element is member of the set If key doesn exists returned RInt returned if element is member of the set and RInt otherwise",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "sismember",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:sismember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the members (elements) of the set\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "smembers",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Return all the members elements of the set RMulti filled with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "smembers",
          "normalized": "Redis-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:smembers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the specifided member from one set to another\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if element was moved and (RInt 0) if element\n is not a member of the source set\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "smove",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e s3-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Move the specifided member from one set to another RInt returned if element was moved and RInt if element is not member of the source set",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "smove",
          "normalized": "Redis-\u003ea-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:smove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort the elements contained in the List, Set, or Sorted Set\n\u003c/p\u003e\u003cp\u003efor more information see \u003ca\u003ehttp://redis.io/commands/sort\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "sort",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e SortOptions s2-\u003e IO (Reply s3)",
          "type": "function"
        },
        "index": {
          "description": "Sort the elements contained in the List Set or Sorted Set for more information see http redis.io commands sort RMulti filled with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "sort",
          "normalized": "Redis-\u003ea-\u003eSortOptions a-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eSortOptions s-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a random element from a Set returning it as return value\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "spop",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Remove random element from Set returning it as return value RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "spop",
          "normalized": "Redis-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:spop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a random element from a set\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "srandmember",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Return random element from set RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "srandmember",
          "normalized": "Redis-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:srandmember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the specified member from the set value stored at key\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if element was removed and (RInt 0) if element\n is not a member of the set\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "srem",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Remove the specified member from the set value stored at key RInt returned if element was removed and RInt if element is not member of the set",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "srem",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:srem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariadic form of SREM\n\u003c/p\u003e\u003cp\u003eRInt returned - number of removed values\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "srem_",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [s2]-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Variadic form of SREM RInt returned number of removed values",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "srem_",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e[s]-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:srem_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a length of a string-typed key\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "strlen",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Returns length of string-typed key RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "strlen",
          "normalized": "Redis-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:strlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribe to channels\n\u003c/p\u003e\u003cp\u003elist of Message with subscribtion information returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "subscribe",
          "package": "redis",
          "signature": "Redis-\u003e [s1]-\u003e IO [Message s2]",
          "type": "function"
        },
        "index": {
          "description": "Subscribe to channels list of Message with subscribtion information returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "subscribe",
          "normalized": "Redis-\u003e[a]-\u003eIO[Message a]",
          "package": "redis",
          "signature": "Redis-\u003e[s]-\u003eIO[Message s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:subscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a number of subscribed channels on this connection\n\u003c/p\u003e\u003cp\u003eIt doesn't run any redis commands, number of subscribtions is taken\n from internal connection state\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "subscribed",
          "package": "redis",
          "signature": "Redis -\u003e IO Int",
          "source": "src/Database-Redis-Redis.html#subscribed",
          "type": "function"
        },
        "index": {
          "description": "Get number of subscribed channels on this connection It doesn run any redis commands number of subscribtions is taken from internal connection state",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "subscribed",
          "normalized": "Redis-\u003eIO Int",
          "package": "redis",
          "signature": "Redis-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:subscribed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the substring of the string value stored at key,\n determined by the offsets start and end (both are\n inclusive). Negative offsets can be used in order to provide an\n offset starting from the end of the string.\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "substr",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e (Int, Int)-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Returns the substring of the string value stored at key determined by the offsets start and end both are inclusive Negative offsets can be used in order to provide an offset starting from the end of the string RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "substr",
          "normalized": "Redis-\u003ea-\u003e(Int,Int)-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e(Int,Int)-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:substr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the members of a set resulting from the union of all the\n specifided sets\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "sunion",
          "package": "redis",
          "signature": "Redis-\u003e [s1]-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Return the members of set resulting from the union of all the specifided sets RMulti filled with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "sunion",
          "normalized": "Redis-\u003e[a]-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003e[s]-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:sunion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003esunion\u003c/a\u003e\u003c/code\u003e but instead of being returned the resulting set\n is stored\n\u003c/p\u003e\u003cp\u003eRInt returned - resulting set cardinality.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "sunionStore",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [s2]-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "The same as sunion but instead of being returned the resulting set is stored RInt returned resulting set cardinality",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "sunionStore",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003eIO(Reply())",
          "package": "redis",
          "partial": "Store",
          "signature": "Redis-\u003es-\u003e[s]-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:sunionStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Redis",
          "name": "toInterval",
          "package": "redis",
          "signature": "i -\u003e Interval a",
          "source": "src/Database-Redis-Redis.html#toInterval",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "toInterval",
          "normalized": "a-\u003eInterval b",
          "package": "redis",
          "partial": "Interval",
          "signature": "i-\u003eInterval a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:toInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the remining time to live of the key or -1 if key has no\n associated timeout\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "ttl",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Return the remining time to live of the key or if key has no associated timeout RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "ttl",
          "normalized": "Redis-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:ttl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsubscribe from channels. If called with an empty list then\n unsubscribe all channels\n\u003c/p\u003e\u003cp\u003elist of Message with subscribtion information returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "unsubscribe",
          "package": "redis",
          "signature": "Redis-\u003e [s1]-\u003e IO [Message s2]",
          "type": "function"
        },
        "index": {
          "description": "Unsubscribe from channels If called with an empty list then unsubscribe all channels list of Message with subscribtion information returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "unsubscribe",
          "normalized": "Redis-\u003e[a]-\u003eIO[Message a]",
          "package": "redis",
          "signature": "Redis-\u003e[s]-\u003eIO[Message s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:unsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce unwatch all watched keys\n\u003c/p\u003e\u003cp\u003eFor more information see \u003ca\u003ehttp://redis.io/topics/transactions\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "unwatch",
          "package": "redis",
          "signature": "Redis -\u003e IO (Reply ())",
          "source": "src/Database-Redis-Redis.html#unwatch",
          "type": "function"
        },
        "index": {
          "description": "Force unwatch all watched keys For more information see http redis.io topics transactions ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "unwatch",
          "normalized": "Redis-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:unwatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd keys to a watch list for Check-and-Set operation.\n\u003c/p\u003e\u003cp\u003eFor more information see \u003ca\u003ehttp://redis.io/topics/transactions\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eROk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "watch",
          "package": "redis",
          "signature": "Redis-\u003e [s]-\u003e IO (Reply ())",
          "type": "function"
        },
        "index": {
          "description": "Add keys to watch list for Check-and-Set operation For more information see http redis.io topics transactions ROk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "watch",
          "normalized": "Redis-\u003e[a]-\u003eIO(Reply())",
          "package": "redis",
          "signature": "Redis-\u003e[s]-\u003eIO(Reply())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:watch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the specified member having the specifeid score to the sorted\n set\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if new element was added and (RInt 0) if that\n element was already a member of the sortet set and the score was\n updated\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zadd",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e Double-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Add the specified member having the specifeid score to the sorted set RInt returned if new element was added and RInt if that element was already member of the sortet set and the score was updated",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zadd",
          "normalized": "Redis-\u003ea-\u003eDouble-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eDouble-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariadic form of zadd\n\u003c/p\u003e\u003cp\u003eRInt returned - the number of elements actually added. Not\n including elements which scores was just updated.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zadd_",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [(Double, s2)]-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Variadic form of zadd RInt returned the number of elements actually added Not including elements which scores was just updated",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zadd_",
          "normalized": "Redis-\u003ea-\u003e[(Double,a)]-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e[(Double,s)]-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zadd_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the sorted set cardinality (number of elements)\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zcard",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Return the sorted set cardinality number of elements RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zcard",
          "normalized": "Redis-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zcard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount a number of elements of the sorted set with a score that\n lays within a given interval\n\u003c/p\u003e\u003cp\u003eRInt returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zcount",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e i-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Count number of elements of the sorted set with score that lays within given interval RInt returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zcount",
          "normalized": "Redis-\u003ea-\u003eb-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003ei-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003cem\u003emember\u003c/em\u003e already in the sorted set adds the \u003cem\u003eincrement\u003c/em\u003e to its\n score and updates the position of the element in the sorted set\n accordingly. If member does not exist in the sorted set it is added\n with increment as score (that is, like if the previous score was\n virtually zero). The new score of the member is returned.\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zincrBy",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e Double-\u003e s2-\u003e IO (Reply s3)",
          "type": "function"
        },
        "index": {
          "description": "If member already in the sorted set adds the increment to its score and updates the position of the element in the sorted set accordingly If member does not exist in the sorted set it is added with increment as score that is like if the previous score was virtually zero The new score of the member is returned RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zincrBy",
          "normalized": "Redis-\u003ea-\u003eDouble-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "partial": "By",
          "signature": "Redis-\u003es-\u003eDouble-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zincrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: ZINTER command was renamed to ZINTERSTORE\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Redis",
          "name": "zinter",
          "package": "redis",
          "signature": "Redis -\u003e s1 -\u003e [s2] -\u003e [Double] -\u003e Aggregate -\u003e IO (Reply Int)",
          "source": "src/Database-Redis-Redis.html#zinter",
          "type": "function"
        },
        "index": {
          "description": "Deprecated ZINTER command was renamed to ZINTERSTORE",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zinter",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003e[Double]-\u003eAggregate-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e[s]-\u003e[Double]-\u003eAggregate-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an intersectoin of provided sorted sets and store it at destination key\n\u003c/p\u003e\u003cp\u003eIf \u003cem\u003eweights\u003c/em\u003e is not null then scores of sorted sets used with\n corresponding weights. If so lenght of \u003cem\u003eweights\u003c/em\u003e must be the same\n as length of \u003cem\u003esources\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eAggregate is an option how to aggregate resulting scores.\n\u003c/p\u003e\u003cp\u003eRInt returned - the number of elements in the resulting set.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zinterStore",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [s2]-\u003e [Double]-\u003e Aggregate-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Create an intersectoin of provided sorted sets and store it at destination key If weights is not null then scores of sorted sets used with corresponding weights If so lenght of weights must be the same as length of sources Aggregate is an option how to aggregate resulting scores RInt returned the number of elements in the resulting set",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zinterStore",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003e[Double]-\u003eAggregate-\u003eIO(Reply Int)",
          "package": "redis",
          "partial": "Store",
          "signature": "Redis-\u003es-\u003e[s]-\u003e[Double]-\u003eAggregate-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zinterStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the specified elements of the sorted set. Start and end\n are zero-based indexes. WITHSCORES paramenter indicates if it's\n needed to return elements with its scores or not. If WITHSCORES is\n True then the resulting list will be composed of value1, score1,\n value2, score2 and so on.\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zrange",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e (Int, Int)-\u003e Bool-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Return the specified elements of the sorted set Start and end are zero-based indexes WITHSCORES paramenter indicates if it needed to return elements with its scores or not If WITHSCORES is True then the resulting list will be composed of value1 score1 value2 score2 and so on RMulti filled with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zrange",
          "normalized": "Redis-\u003ea-\u003e(Int,Int)-\u003eBool-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e(Int,Int)-\u003eBool-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the all the elements in the sorted set with a score that\n lays within a given interval\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zrangebyscore",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e i-\u003e Maybe (Int, Int)-\u003e Bool-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Return the all the elements in the sorted set with score that lays within given interval RMulti filled with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zrangebyscore",
          "normalized": "Redis-\u003ea-\u003eb-\u003eMaybe(Int,Int)-\u003eBool-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003ei-\u003eMaybe(Int,Int)-\u003eBool-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zrangebyscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the rank of member in the sorted set stored at key, with\n the scores ordered from low to high.\n\u003c/p\u003e\u003cp\u003eRInt returned or (RBulk Nothing) if value is not found in set.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zrank",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Returns the rank of member in the sorted set stored at key with the scores ordered from low to high RInt returned or RBulk Nothing if value is not found in set",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zrank",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zrank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the specified member from the sorted set\n\u003c/p\u003e\u003cp\u003e(RInt 1) returned if element was removed and (RInt 0) if element\n was not a member of the sorted set\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zrem",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Remove the specified member from the sorted set RInt returned if element was removed and RInt if element was not member of the sorted set",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zrem",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zrem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariadic form of zrem\n RInt returned - the number of removed elements\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zrem_",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [s2]-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Variadic form of zrem RInt returned the number of removed elements",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zrem_",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e[s]-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zrem_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove elements from the sorted set with rank lays within a given\n interval.\n\u003c/p\u003e\u003cp\u003eRInt returned - the number of elements removed\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zremrangebyrank",
          "package": "redis",
          "signature": "Redis -\u003e s -\u003e (Int, Int) -\u003e IO (Reply Int)",
          "source": "src/Database-Redis-Redis.html#zremrangebyrank",
          "type": "function"
        },
        "index": {
          "description": "Remove elements from the sorted set with rank lays within given interval RInt returned the number of elements removed",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zremrangebyrank",
          "normalized": "Redis-\u003ea-\u003e(Int,Int)-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e(Int,Int)-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zremrangebyrank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all the elements in the sorted set with a score that lays\n within a given interval. For now this command doesn't supports open\n and semi-open intervals\n\u003c/p\u003e\u003cp\u003eRInt returned - the number of elements removed\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zremrangebyscore",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e (Double, Double)-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Remove all the elements in the sorted set with score that lays within given interval For now this command doesn supports open and semi-open intervals RInt returned the number of elements removed",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zremrangebyscore",
          "normalized": "Redis-\u003ea-\u003e(Double,Double)-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e(Double,Double)-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zremrangebyscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the specified elements of the sorted set at the specified\n key. The elements are considered sorted from the highest to the\n lowerest score\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zrevrange",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e (Int, Int)-\u003e Bool-\u003e IO (Reply s2)",
          "type": "function"
        },
        "index": {
          "description": "Return the specified elements of the sorted set at the specified key The elements are considered sorted from the highest to the lowerest score RMulti filled with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zrevrange",
          "normalized": "Redis-\u003ea-\u003e(Int,Int)-\u003eBool-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e(Int,Int)-\u003eBool-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zrevrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the all the elements in the sorted set with a score that\n lays within a given interval. Elements is ordered from greater\n score to lower. Interval passed into command must be reversed\n (first value is greater then second)\n\u003c/p\u003e\u003cp\u003eRMulti filled with RBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zrevrangebyscore",
          "package": "redis",
          "signature": "Redis -\u003e s1 -\u003e i -\u003e Maybe (Int, Int) -\u003e Bool -\u003e IO (Reply s2)",
          "source": "src/Database-Redis-Redis.html#zrevrangebyscore",
          "type": "function"
        },
        "index": {
          "description": "Return the all the elements in the sorted set with score that lays within given interval Elements is ordered from greater score to lower Interval passed into command must be reversed first value is greater then second RMulti filled with RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zrevrangebyscore",
          "normalized": "Redis-\u003ea-\u003eb-\u003eMaybe(Int,Int)-\u003eBool-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003ei-\u003eMaybe(Int,Int)-\u003eBool-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zrevrangebyscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the rank of member in the sorted set stored at key, with\n the scores ordered from high to low.\n\u003c/p\u003e\u003cp\u003eRInt returned or (RBulk Nothing) if value is not found in set.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zrevrank",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Returns the rank of member in the sorted set stored at key with the scores ordered from high to low RInt returned or RBulk Nothing if value is not found in set",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zrevrank",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zrevrank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the score of the specified element of the sorted set\n\u003c/p\u003e\u003cp\u003eRBulk returned\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zscore",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e s2-\u003e IO (Reply s3)",
          "type": "function"
        },
        "index": {
          "description": "Return the score of the specified element of the sorted set RBulk returned",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zscore",
          "normalized": "Redis-\u003ea-\u003ea-\u003eIO(Reply a)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003es-\u003eIO(Reply s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: ZUNION command was renamed to ZUNIONSTORE\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Redis",
          "name": "zunion",
          "package": "redis",
          "signature": "Redis -\u003e s1 -\u003e [s2] -\u003e [Double] -\u003e Aggregate -\u003e IO (Reply Int)",
          "source": "src/Database-Redis-Redis.html#zunion",
          "type": "function"
        },
        "index": {
          "description": "Deprecated ZUNION command was renamed to ZUNIONSTORE",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zunion",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003e[Double]-\u003eAggregate-\u003eIO(Reply Int)",
          "package": "redis",
          "signature": "Redis-\u003es-\u003e[s]-\u003e[Double]-\u003eAggregate-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zunion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a union of provided sorted sets and store it at \u003cem\u003edestination\u003c/em\u003e key\n\u003c/p\u003e\u003cp\u003eIf \u003cem\u003eweights\u003c/em\u003e is not null then scores of sorted sets used with\n corresponding weights. If so lenght of \u003cem\u003eweights\u003c/em\u003e must be the same\n as length of \u003cem\u003esources\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAggregate\u003c/em\u003e is an option how to aggregate resulting scores.\n\u003c/p\u003e\u003cp\u003eRInt returned - the number of elements in the resulting set.\n\u003c/p\u003e",
          "module": "Database.Redis.Redis",
          "name": "zunionStore",
          "package": "redis",
          "signature": "Redis-\u003e s1-\u003e [s2]-\u003e [Double]-\u003e Aggregate-\u003e IO (Reply Int)",
          "type": "function"
        },
        "index": {
          "description": "Create union of provided sorted sets and store it at destination key If weights is not null then scores of sorted sets used with corresponding weights If so lenght of weights must be the same as length of sources Aggregate is an option how to aggregate resulting scores RInt returned the number of elements in the resulting set",
          "hierarchy": "Database Redis Redis",
          "module": "Database.Redis.Redis",
          "name": "zunionStore",
          "normalized": "Redis-\u003ea-\u003e[a]-\u003e[Double]-\u003eAggregate-\u003eIO(Reply Int)",
          "package": "redis",
          "partial": "Store",
          "signature": "Redis-\u003es-\u003e[s]-\u003e[Double]-\u003eAggregate-\u003eIO(Reply Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Redis.html#v:zunionStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEmulating locking primitives\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Utils.Lock",
          "name": "Lock",
          "package": "redis",
          "source": "src/Database-Redis-Utils-Lock.html",
          "type": "module"
        },
        "index": {
          "description": "Emulating locking primitives",
          "hierarchy": "Database Redis Utils Lock",
          "module": "Database.Redis.Utils.Lock",
          "name": "Lock",
          "package": "redis",
          "partial": "Lock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Utils-Lock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcquire lock. This function is not reentrant so thread can be\n locked by itself if it try to acquire the same lock before it was\n released.\n\u003c/p\u003e",
          "module": "Database.Redis.Utils.Lock",
          "name": "acquire",
          "package": "redis",
          "signature": "Redis-\u003e s-\u003e Int-\u003e Int-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Acquire lock This function is not reentrant so thread can be locked by itself if it try to acquire the same lock before it was released",
          "hierarchy": "Database Redis Utils Lock",
          "module": "Database.Redis.Utils.Lock",
          "name": "acquire",
          "normalized": "Redis-\u003ea-\u003eInt-\u003eInt-\u003eIO Bool",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eInt-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Utils-Lock.html#v:acquire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eacquire with default last parameter set to 50 milliseconds\n\u003c/p\u003e",
          "module": "Database.Redis.Utils.Lock",
          "name": "acquire'",
          "package": "redis",
          "signature": "Redis -\u003e s -\u003e Int -\u003e IO Bool",
          "source": "src/Database-Redis-Utils-Lock.html#acquire%27",
          "type": "function"
        },
        "index": {
          "description": "acquire with default last parameter set to milliseconds",
          "hierarchy": "Database Redis Utils Lock",
          "module": "Database.Redis.Utils.Lock",
          "name": "acquire'",
          "normalized": "Redis-\u003ea-\u003eInt-\u003eIO Bool",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Utils-Lock.html#v:acquire-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to acquire lock once and return result without any timeout\n\u003c/p\u003e",
          "module": "Database.Redis.Utils.Lock",
          "name": "acquireOnce",
          "package": "redis",
          "signature": "Redis -\u003e s1 -\u003e IO Bool",
          "source": "src/Database-Redis-Utils-Lock.html#acquireOnce",
          "type": "function"
        },
        "index": {
          "description": "Try to acquire lock once and return result without any timeout",
          "hierarchy": "Database Redis Utils Lock",
          "module": "Database.Redis.Utils.Lock",
          "name": "acquireOnce",
          "normalized": "Redis-\u003ea-\u003eIO Bool",
          "package": "redis",
          "partial": "Once",
          "signature": "Redis-\u003es-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Utils-Lock.html#v:acquireOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease lock. There is no any guarantees that lock was acquired\n in this thread. Just release this lock and go forth.\n\u003c/p\u003e",
          "module": "Database.Redis.Utils.Lock",
          "name": "release",
          "package": "redis",
          "signature": "Redis -\u003e s -\u003e IO ()",
          "source": "src/Database-Redis-Utils-Lock.html#release",
          "type": "function"
        },
        "index": {
          "description": "Release lock There is no any guarantees that lock was acquired in this thread Just release this lock and go forth",
          "hierarchy": "Database Redis Utils Lock",
          "module": "Database.Redis.Utils.Lock",
          "name": "release",
          "normalized": "Redis-\u003ea-\u003eIO()",
          "package": "redis",
          "signature": "Redis-\u003es-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Utils-Lock.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSame as \u003ca\u003eDatabase.Redis.Utils.Lock\u003c/a\u003e but with monadic wrapped\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Utils.Monad.Lock",
          "name": "Lock",
          "package": "redis",
          "source": "src/Database-Redis-Utils-Monad-Lock.html",
          "type": "module"
        },
        "index": {
          "description": "Same as Database.Redis.Utils.Lock but with monadic wrapped",
          "hierarchy": "Database Redis Utils Monad Lock",
          "module": "Database.Redis.Utils.Monad.Lock",
          "name": "Lock",
          "package": "redis",
          "partial": "Lock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Utils-Monad-Lock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Utils.Monad.Lock",
          "name": "acquire",
          "package": "redis",
          "signature": "s -\u003e Int -\u003e Int -\u003e m Bool",
          "source": "src/Database-Redis-Utils-Monad-Lock.html#acquire",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Utils Monad Lock",
          "module": "Database.Redis.Utils.Monad.Lock",
          "name": "acquire",
          "normalized": "a-\u003eInt-\u003eInt-\u003eb Bool",
          "package": "redis",
          "signature": "s-\u003eInt-\u003eInt-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Utils-Monad-Lock.html#v:acquire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Utils.Monad.Lock",
          "name": "acquire'",
          "package": "redis",
          "signature": "s -\u003e Int -\u003e m Bool",
          "source": "src/Database-Redis-Utils-Monad-Lock.html#acquire%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Utils Monad Lock",
          "module": "Database.Redis.Utils.Monad.Lock",
          "name": "acquire'",
          "normalized": "a-\u003eInt-\u003eb Bool",
          "package": "redis",
          "signature": "s-\u003eInt-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Utils-Monad-Lock.html#v:acquire-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Utils.Monad.Lock",
          "name": "acquireOnce",
          "package": "redis",
          "signature": "b -\u003e m Bool",
          "source": "src/Database-Redis-Utils-Monad-Lock.html#acquireOnce",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Utils Monad Lock",
          "module": "Database.Redis.Utils.Monad.Lock",
          "name": "acquireOnce",
          "normalized": "a-\u003eb Bool",
          "package": "redis",
          "partial": "Once",
          "signature": "b-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Utils-Monad-Lock.html#v:acquireOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Utils.Monad.Lock",
          "name": "release",
          "package": "redis",
          "signature": "s -\u003e m ()",
          "source": "src/Database-Redis-Utils-Monad-Lock.html#release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Utils Monad Lock",
          "module": "Database.Redis.Utils.Monad.Lock",
          "name": "release",
          "normalized": "a-\u003eb()",
          "package": "redis",
          "signature": "s-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis/docs/Database-Redis-Utils-Monad-Lock.html#v:release"
      }
    }
  ]
]