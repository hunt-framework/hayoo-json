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
        "word": "redis-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is meant to make working with redis in Haskell more simple. It\n is a small layer above the full-blown \u003ccode\u003eredis\u003c/code\u003e package.\n\u003c/p\u003e\u003cp\u003eIt only supports a small subset of the redis features.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Redis.Simple",
          "name": "Simple",
          "package": "redis-simple",
          "source": "src/Database-Redis-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "This module is meant to make working with redis in Haskell more simple It is small layer above the full-blown redis package It only supports small subset of the redis features",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Simple",
          "package": "redis-simple",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for a key in the key-value store\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "Key",
          "package": "redis-simple",
          "source": "src/Database-Redis-Simple.html#Key",
          "type": "newtype"
        },
        "index": {
          "description": "Type for key in the key-value store",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Key",
          "package": "redis-simple",
          "partial": "Key",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "Key",
          "package": "redis-simple",
          "signature": "Key",
          "source": "src/Database-Redis-Simple.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "Key",
          "package": "redis-simple",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete an item in the database\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "itemDelete",
          "package": "redis-simple",
          "signature": "Redis-\u003e Key-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Delete an item in the database",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "itemDelete",
          "normalized": "Redis-\u003eKey-\u003eIO()",
          "package": "redis-simple",
          "partial": "Delete",
          "signature": "Redis-\u003eKey-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:itemDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if an item with a given key exists\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "itemExists",
          "package": "redis-simple",
          "signature": "Redis-\u003e Key-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Checks if an item with given key exists",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "itemExists",
          "normalized": "Redis-\u003eKey-\u003eIO Bool",
          "package": "redis-simple",
          "partial": "Exists",
          "signature": "Redis-\u003eKey-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:itemExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets an item from the database\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "itemGet",
          "package": "redis-simple",
          "signature": "Redis-\u003e Key-\u003e IO (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Gets an item from the database",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "itemGet",
          "normalized": "Redis-\u003eKey-\u003eIO(Maybe a)",
          "package": "redis-simple",
          "partial": "Get",
          "signature": "Redis-\u003eKey-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:itemGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an item in the database\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "itemSet",
          "package": "redis-simple",
          "signature": "Redis-\u003e Key-\u003e a-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set an item in the database",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "itemSet",
          "normalized": "Redis-\u003eKey-\u003ea-\u003eIO()",
          "package": "redis-simple",
          "partial": "Set",
          "signature": "Redis-\u003eKey-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:itemSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an item to a redis set\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "setAdd",
          "package": "redis-simple",
          "signature": "Redis-\u003e Key-\u003e a-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Add an item to redis set",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "setAdd",
          "normalized": "Redis-\u003eKey-\u003ea-\u003eIO()",
          "package": "redis-simple",
          "partial": "Add",
          "signature": "Redis-\u003eKey-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:setAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a set contains a certain item\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "setContains",
          "package": "redis-simple",
          "signature": "Redis-\u003e Key-\u003e a-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if set contains certain item",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "setContains",
          "normalized": "Redis-\u003eKey-\u003ea-\u003eIO Bool",
          "package": "redis-simple",
          "partial": "Contains",
          "signature": "Redis-\u003eKey-\u003ea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:setContains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all items from a set\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "setFindAll",
          "package": "redis-simple",
          "signature": "Redis-\u003e Key-\u003e IO [a]",
          "type": "function"
        },
        "index": {
          "description": "Get all items from set",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "setFindAll",
          "normalized": "Redis-\u003eKey-\u003eIO[a]",
          "package": "redis-simple",
          "partial": "Find All",
          "signature": "Redis-\u003eKey-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:setFindAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an item from a redis set\n\u003c/p\u003e",
          "module": "Database.Redis.Simple",
          "name": "setRemove",
          "package": "redis-simple",
          "signature": "Redis-\u003e Key-\u003e a-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Remove an item from redis set",
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "setRemove",
          "normalized": "Redis-\u003eKey-\u003ea-\u003eIO()",
          "package": "redis-simple",
          "partial": "Remove",
          "signature": "Redis-\u003eKey-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:setRemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Redis.Simple",
          "name": "unKey",
          "package": "redis-simple",
          "signature": "ByteString",
          "source": "src/Database-Redis-Simple.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Redis Simple",
          "module": "Database.Redis.Simple",
          "name": "unKey",
          "package": "redis-simple",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:unKey"
      }
    }
  ]
]