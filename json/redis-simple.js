[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is meant to make working with redis in Haskell more simple. It\n is a small layer above the full-blown \u003ccode\u003eredis\u003c/code\u003e package.\n\u003c/p\u003e\u003cp\u003eIt only supports a small subset of the redis features.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "redis-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-Redis-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "This module is meant to make working with redis in Haskell more simple It is small layer above the full-blown redis package It only supports small subset of the redis features",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "redis-simple",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eType for a key in the key-value store\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "redis-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Redis-Simple.html#Key",
        "fct-type": "newtype",
        "title": "Key"
      },
      "index": {
        "description": "Type for key in the key-value store",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Key",
        "normalized": "",
        "package": "redis-simple",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:Key",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "redis-simple",
        "fct-signature": "Key",
        "fct-source": "src/Database-Redis-Simple.html#Key",
        "fct-type": "function",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Key",
        "normalized": "",
        "package": "redis-simple",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:itemDelete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete an item in the database\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "redis-simple",
        "fct-signature": "Redis-\u003e Key-\u003e IO ()",
        "fct-type": "function",
        "title": "itemDelete"
      },
      "index": {
        "description": "Delete an item in the database",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "itemDelete",
        "normalized": "Redis-\u003eKey-\u003eIO()",
        "package": "redis-simple",
        "partial": "Delete",
        "signature": "Redis-\u003eKey-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:itemExists",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if an item with a given key exists\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "redis-simple",
        "fct-signature": "Redis-\u003e Key-\u003e IO Bool",
        "fct-type": "function",
        "title": "itemExists"
      },
      "index": {
        "description": "Checks if an item with given key exists",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "itemExists",
        "normalized": "Redis-\u003eKey-\u003eIO Bool",
        "package": "redis-simple",
        "partial": "Exists",
        "signature": "Redis-\u003eKey-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:itemGet",
      "description": {
        "fct-descr": "\u003cp\u003eGets an item from the database\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "redis-simple",
        "fct-signature": "Redis-\u003e Key-\u003e IO (Maybe a)",
        "fct-type": "function",
        "title": "itemGet"
      },
      "index": {
        "description": "Gets an item from the database",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "itemGet",
        "normalized": "Redis-\u003eKey-\u003eIO(Maybe a)",
        "package": "redis-simple",
        "partial": "Get",
        "signature": "Redis-\u003eKey-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:itemSet",
      "description": {
        "fct-descr": "\u003cp\u003eSet an item in the database\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "redis-simple",
        "fct-signature": "Redis-\u003e Key-\u003e a-\u003e IO ()",
        "fct-type": "function",
        "title": "itemSet"
      },
      "index": {
        "description": "Set an item in the database",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "itemSet",
        "normalized": "Redis-\u003eKey-\u003ea-\u003eIO()",
        "package": "redis-simple",
        "partial": "Set",
        "signature": "Redis-\u003eKey-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:setAdd",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an item to a redis set\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "redis-simple",
        "fct-signature": "Redis-\u003e Key-\u003e a-\u003e IO ()",
        "fct-type": "function",
        "title": "setAdd"
      },
      "index": {
        "description": "Add an item to redis set",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "setAdd",
        "normalized": "Redis-\u003eKey-\u003ea-\u003eIO()",
        "package": "redis-simple",
        "partial": "Add",
        "signature": "Redis-\u003eKey-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:setContains",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a set contains a certain item\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "redis-simple",
        "fct-signature": "Redis-\u003e Key-\u003e a-\u003e IO Bool",
        "fct-type": "function",
        "title": "setContains"
      },
      "index": {
        "description": "Check if set contains certain item",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "setContains",
        "normalized": "Redis-\u003eKey-\u003ea-\u003eIO Bool",
        "package": "redis-simple",
        "partial": "Contains",
        "signature": "Redis-\u003eKey-\u003ea-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:setFindAll",
      "description": {
        "fct-descr": "\u003cp\u003eGet all items from a set\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "redis-simple",
        "fct-signature": "Redis-\u003e Key-\u003e IO [a]",
        "fct-type": "function",
        "title": "setFindAll"
      },
      "index": {
        "description": "Get all items from set",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "setFindAll",
        "normalized": "Redis-\u003eKey-\u003eIO[a]",
        "package": "redis-simple",
        "partial": "Find All",
        "signature": "Redis-\u003eKey-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:setRemove",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an item from a redis set\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "redis-simple",
        "fct-signature": "Redis-\u003e Key-\u003e a-\u003e IO ()",
        "fct-type": "function",
        "title": "setRemove"
      },
      "index": {
        "description": "Remove an item from redis set",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "setRemove",
        "normalized": "Redis-\u003eKey-\u003ea-\u003eIO()",
        "package": "redis-simple",
        "partial": "Remove",
        "signature": "Redis-\u003eKey-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/redis-simple/docs/Database-Redis-Simple.html#v:unKey",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "redis-simple",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-Redis-Simple.html#Key",
        "fct-type": "function",
        "title": "unKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "unKey",
        "normalized": "",
        "package": "redis-simple",
        "partial": "Key",
        "signature": ""
      }
    }
  }
]