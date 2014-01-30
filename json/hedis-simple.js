[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-Redis-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:ConnectInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation for connnecting to a Redis server.\n\u003c/p\u003e\u003cp\u003eIt is recommended to not use the \u003ccode\u003e\u003ca\u003eConnInfo\u003c/a\u003e\u003c/code\u003e data constructor directly.\n Instead use \u003ccode\u003e\u003ca\u003edefaultConnectInfo\u003c/a\u003e\u003c/code\u003e and update it with record syntax. For\n example to connect to a password protected Redis server running on localhost\n and listening to the default port:\n\u003c/p\u003e\u003cpre\u003e\n myConnectInfo :: ConnectInfo\n myConnectInfo = defaultConnectInfo {connectAuth = Just \"secret\"}\n\u003c/pre\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ConnectInfo"
      },
      "index": {
        "description": "Information for connnecting to Redis server It is recommended to not use the ConnInfo data constructor directly Instead use defaultConnectInfo and update it with record syntax For example to connect to password protected Redis server running on localhost and listening to the default port myConnectInfo ConnectInfo myConnectInfo defaultConnectInfo connectAuth Just secret",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "ConnectInfo",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eA threadsafe pool of network connections to a Redis server. Use the\n  \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e function to create one.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "threadsafe pool of network connections to Redis server Use the connect function to create one",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Connection",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:ConnectionLostException",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ConnectionLostException"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "ConnectionLostException",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Connection Lost Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:Message",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Message",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:PortID",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "PortID"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "PortID",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Port ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:PubSub",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulates subscription changes. Use \u003ccode\u003e\u003ca\u003esubscribe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunsubscribe\u003c/a\u003e\u003c/code\u003e,\n  \u003ccode\u003e\u003ca\u003epsubscribe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epunsubscribe\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e to construct a value. Combine\n  values by using the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e interface, i.e. \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "PubSub"
      },
      "index": {
        "description": "Encapsulates subscription changes Use subscribe unsubscribe psubscribe punsubscribe or mempty to construct value Combine values by using the Monoid interface i.e mappend and mconcat",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "PubSub",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Pub Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:Redis",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Redis-Simple.html#Redis",
        "fct-type": "newtype",
        "title": "Redis"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Redis",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Redis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:RedisResult",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "RedisResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "RedisResult",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Redis Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:RedisTx",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-Redis-Simple.html#RedisTx",
        "fct-type": "newtype",
        "title": "RedisTx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "RedisTx",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Redis Tx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:Reply",
      "description": {
        "fct-descr": "\u003cp\u003eLow-level representation of replies from the Redis server.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Reply"
      },
      "index": {
        "description": "Low-level representation of replies from the Redis server",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Reply",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:Status",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Status",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#t:TxResult",
      "description": {
        "fct-descr": "\u003cp\u003eResult of a \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e transaction.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "TxResult"
      },
      "index": {
        "description": "Result of multiExec transaction",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "TxResult",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Tx Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:ConnInfo",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ConnInfo",
        "fct-type": "function",
        "title": "ConnInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "ConnInfo",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Conn Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:Message",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Message",
        "fct-type": "function",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Message",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:Ok",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Ok",
        "fct-type": "function",
        "title": "Ok"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Ok",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:PMessage",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "PMessage",
        "fct-type": "function",
        "title": "PMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "PMessage",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "PMessage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:Pong",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Pong",
        "fct-type": "function",
        "title": "Pong"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Pong",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Pong",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:PortNumber",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "PortNumber PortNumber",
        "fct-type": "function",
        "title": "PortNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "PortNumber",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Port Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:Redis",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Redis",
        "fct-source": "src/Database-Redis-Simple.html#Redis",
        "fct-type": "function",
        "title": "Redis"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Redis",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Redis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:RedisTx",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "RedisTx",
        "fct-source": "src/Database-Redis-Simple.html#RedisTx",
        "fct-type": "function",
        "title": "RedisTx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "RedisTx",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Redis Tx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:Service",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Service String",
        "fct-type": "function",
        "title": "Service"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Service",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Service",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:Status",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Status ByteString",
        "fct-type": "function",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "Status",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:TxAborted",
      "description": {
        "fct-descr": "\u003cp\u003eTransaction aborted due to an earlier \u003ccode\u003e\u003ca\u003ewatch\u003c/a\u003e\u003c/code\u003e command.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "TxAborted",
        "fct-type": "function",
        "title": "TxAborted"
      },
      "index": {
        "description": "Transaction aborted due to an earlier watch command",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "TxAborted",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Tx Aborted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:TxError",
      "description": {
        "fct-descr": "\u003cp\u003eAt least one of the commands returned an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e reply.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "TxError String",
        "fct-type": "function",
        "title": "TxError"
      },
      "index": {
        "description": "At least one of the commands returned an Error reply",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "TxError",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Tx Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:TxSuccess",
      "description": {
        "fct-descr": "\u003cp\u003eTransaction completed successfully. The wrapped value corresponds to\n   the \u003ccode\u003e\u003ca\u003eQueued\u003c/a\u003e\u003c/code\u003e value returned from the \u003ccode\u003e\u003ca\u003emultiExec\u003c/a\u003e\u003c/code\u003e argument action.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "TxSuccess a",
        "fct-type": "function",
        "title": "TxSuccess"
      },
      "index": {
        "description": "Transaction completed successfully The wrapped value corresponds to the Queued value returned from the multiExec argument action",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "TxSuccess",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Tx Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:UnixSocket",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "UnixSocket String",
        "fct-type": "function",
        "title": "UnixSocket"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "UnixSocket",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Unix Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:append",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "append",
        "normalized": "ByteString-\u003eByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:auth",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Redis Status",
        "fct-source": "src/Database-Redis-Simple.html#auth",
        "fct-type": "function",
        "title": "auth"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "auth",
        "normalized": "ByteString-\u003eRedis Status",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003eRedis Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bgRewriteAof",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Status",
        "fct-source": "src/Database-Redis-Simple.html#bgRewriteAof",
        "fct-type": "function",
        "title": "bgRewriteAof"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "bgRewriteAof",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Rewrite Aof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bgSave",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Status",
        "fct-source": "src/Database-Redis-Simple.html#bgSave",
        "fct-type": "function",
        "title": "bgSave"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "bgSave",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Save",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bitCount",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#bitCount",
        "fct-type": "function",
        "title": "bitCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "bitCount",
        "normalized": "ByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Count",
        "signature": "ByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bitCountRange",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#bitCountRange",
        "fct-type": "function",
        "title": "bitCountRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "bitCountRange",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Count Range",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bitOpAnd",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#bitOpAnd",
        "fct-type": "function",
        "title": "bitOpAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "bitOpAnd",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Op And",
        "signature": "ByteString-\u003e[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bitOpNot",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#bitOpNot",
        "fct-type": "function",
        "title": "bitOpNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "bitOpNot",
        "normalized": "ByteString-\u003eByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Op Not",
        "signature": "ByteString-\u003eByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bitOpOr",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#bitOpOr",
        "fct-type": "function",
        "title": "bitOpOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "bitOpOr",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Op Or",
        "signature": "ByteString-\u003e[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:bitOpXor",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#bitOpXor",
        "fct-type": "function",
        "title": "bitOpXor"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "bitOpXor",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Op Xor",
        "signature": "ByteString-\u003e[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:blPop",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "[ByteString] -\u003e Integer -\u003e m (Maybe (ByteString, ByteString))",
        "fct-source": "src/Database-Redis-Simple.html#blPop",
        "fct-type": "function",
        "title": "blPop"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "blPop",
        "normalized": "[ByteString]-\u003eInteger-\u003ea(Maybe(ByteString,ByteString))",
        "package": "hedis-simple",
        "partial": "Pop",
        "signature": "[ByteString]-\u003eInteger-\u003em(Maybe(ByteString,ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:brPop",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "[ByteString] -\u003e Integer -\u003e m (Maybe (ByteString, ByteString))",
        "fct-source": "src/Database-Redis-Simple.html#brPop",
        "fct-type": "function",
        "title": "brPop"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "brPop",
        "normalized": "[ByteString]-\u003eInteger-\u003ea(Maybe(ByteString,ByteString))",
        "package": "hedis-simple",
        "partial": "Pop",
        "signature": "[ByteString]-\u003eInteger-\u003em(Maybe(ByteString,ByteString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:brPopLPush",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e Integer -\u003e m (Maybe ByteString)",
        "fct-source": "src/Database-Redis-Simple.html#brPopLPush",
        "fct-type": "function",
        "title": "brPopLPush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "brPopLPush",
        "normalized": "ByteString-\u003eByteString-\u003eInteger-\u003ea(Maybe ByteString)",
        "package": "hedis-simple",
        "partial": "Pop LPush",
        "signature": "ByteString-\u003eByteString-\u003eInteger-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:configGet",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m [(ByteString, ByteString)]",
        "fct-source": "src/Database-Redis-Simple.html#configGet",
        "fct-type": "function",
        "title": "configGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "configGet",
        "normalized": "ByteString-\u003ea[(ByteString,ByteString)]",
        "package": "hedis-simple",
        "partial": "Get",
        "signature": "ByteString-\u003em[(ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:configResetStat",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Status",
        "fct-source": "src/Database-Redis-Simple.html#configResetStat",
        "fct-type": "function",
        "title": "configResetStat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "configResetStat",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Reset Stat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:configSet",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#configSet",
        "fct-type": "function",
        "title": "configSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "configSet",
        "normalized": "ByteString-\u003eByteString-\u003ea Status",
        "package": "hedis-simple",
        "partial": "Set",
        "signature": "ByteString-\u003eByteString-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e to a Redis server designated by the given\n  \u003ccode\u003e\u003ca\u003eConnectInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ConnectInfo -\u003e IO Connection",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Opens Connection to Redis server designated by the given ConnectInfo",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "connect",
        "normalized": "ConnectInfo-\u003eIO Connection",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ConnectInfo-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:connectAuth",
      "description": {
        "fct-descr": "\u003cp\u003eWhen the server is protected by a password, set \u003ccode\u003e\u003ca\u003econnectAuth\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n   the password. Each connection will then authenticate by the \u003ccode\u003e\u003ca\u003eauth\u003c/a\u003e\u003c/code\u003e\n   command.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Maybe ByteString",
        "fct-type": "function",
        "title": "connectAuth"
      },
      "index": {
        "description": "When the server is protected by password set connectAuth to Just the password Each connection will then authenticate by the auth command",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "connectAuth",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:connectHost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "HostName",
        "fct-type": "function",
        "title": "connectHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "connectHost",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:connectMaxConnections",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of connections to keep open. The smallest acceptable\n   value is 1.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Int",
        "fct-type": "function",
        "title": "connectMaxConnections"
      },
      "index": {
        "description": "Maximum number of connections to keep open The smallest acceptable value is",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "connectMaxConnections",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Max Connections",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:connectMaxIdleTime",
      "description": {
        "fct-descr": "\u003cp\u003eAmount of time for which an unused connection is kept open. The\n   smallest acceptable value is 0.5 seconds. If the \u003ccode\u003etimeout\u003c/code\u003e value in\n   your redis.conf file is non-zero, it should be larger than\n   \u003ccode\u003e\u003ca\u003econnectMaxIdleTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "NominalDiffTime",
        "fct-type": "function",
        "title": "connectMaxIdleTime"
      },
      "index": {
        "description": "Amount of time for which an unused connection is kept open The smallest acceptable value is seconds If the timeout value in your redis.conf file is non-zero it should be larger than connectMaxIdleTime",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "connectMaxIdleTime",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Max Idle Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:connectPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "PortID",
        "fct-type": "function",
        "title": "connectPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "connectPort",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:dbSize",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Integer",
        "fct-source": "src/Database-Redis-Simple.html#dbSize",
        "fct-type": "function",
        "title": "dbSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "dbSize",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:debugObject",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m ByteString",
        "fct-source": "src/Database-Redis-Simple.html#debugObject",
        "fct-type": "function",
        "title": "debugObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "debugObject",
        "normalized": "ByteString-\u003ea ByteString",
        "package": "hedis-simple",
        "partial": "Object",
        "signature": "ByteString-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:decode",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Reply -\u003e Either Reply a",
        "fct-type": "method",
        "title": "decode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "decode",
        "normalized": "Reply-\u003eEither Reply a",
        "package": "hedis-simple",
        "partial": "",
        "signature": "Reply-\u003eEither Reply a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:decr",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#decr",
        "fct-type": "function",
        "title": "decr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "decr",
        "normalized": "ByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:decrBy",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#decrBy",
        "fct-type": "function",
        "title": "decrBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "decrBy",
        "normalized": "ByteString-\u003eInteger-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "By",
        "signature": "ByteString-\u003eInteger-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:defaultConnectInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDefault information for connecting:\n\u003c/p\u003e\u003cpre\u003e\n  connectHost           = \"localhost\"\n  connectPort           = PortNumber 6379 -- Redis default port\n  connectAuth           = Nothing         -- No password\n  connectMaxConnections = 50              -- Up to 50 connections\n  connectMaxIdleTime    = 30              -- Keep open for 30 seconds\n\u003c/pre\u003e",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ConnectInfo",
        "fct-type": "function",
        "title": "defaultConnectInfo"
      },
      "index": {
        "description": "Default information for connecting connectHost localhost connectPort PortNumber Redis default port connectAuth Nothing No password connectMaxConnections Up to connections connectMaxIdleTime Keep open for seconds",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "defaultConnectInfo",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:del",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "[ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#del",
        "fct-type": "function",
        "title": "del"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "del",
        "normalized": "[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "",
        "signature": "[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:dump",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m ByteString",
        "fct-source": "src/Database-Redis-Simple.html#dump",
        "fct-type": "function",
        "title": "dump"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "dump",
        "normalized": "ByteString-\u003ea ByteString",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:echo",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m ByteString",
        "fct-source": "src/Database-Redis-Simple.html#echo",
        "fct-type": "function",
        "title": "echo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "echo",
        "normalized": "ByteString-\u003ea ByteString",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:eval",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e [ByteString] -\u003e m a",
        "fct-source": "src/Database-Redis-Simple.html#eval",
        "fct-type": "function",
        "title": "eval"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "eval",
        "normalized": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003ea b",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:evalSha",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e [ByteString] -\u003e m a",
        "fct-source": "src/Database-Redis-Simple.html#evalSha",
        "fct-type": "function",
        "title": "evalSha"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "evalSha",
        "normalized": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003ea b",
        "package": "hedis-simple",
        "partial": "Sha",
        "signature": "ByteString-\u003e[ByteString]-\u003e[ByteString]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:exists",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#exists",
        "fct-type": "function",
        "title": "exists"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "exists",
        "normalized": "ByteString-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:expire",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#expire",
        "fct-type": "function",
        "title": "expire"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "expire",
        "normalized": "ByteString-\u003eInteger-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:expireAt",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#expireAt",
        "fct-type": "function",
        "title": "expireAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "expireAt",
        "normalized": "ByteString-\u003eInteger-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "At",
        "signature": "ByteString-\u003eInteger-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:flushAll",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Status",
        "fct-source": "src/Database-Redis-Simple.html#flushAll",
        "fct-type": "function",
        "title": "flushAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "flushAll",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:flushDb",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Status",
        "fct-source": "src/Database-Redis-Simple.html#flushDb",
        "fct-type": "function",
        "title": "flushDb"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "flushDb",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Db",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:fromRedis",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "EitherT Reply Redis a",
        "fct-source": "src/Database-Redis-Simple.html#Redis",
        "fct-type": "function",
        "title": "fromRedis"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "fromRedis",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Redis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:fromRedisTx",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "RedisTx (Queued a)",
        "fct-source": "src/Database-Redis-Simple.html#RedisTx",
        "fct-type": "function",
        "title": "fromRedisTx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "fromRedisTx",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Redis Tx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:get",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m (Maybe ByteString)",
        "fct-source": "src/Database-Redis-Simple.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "get",
        "normalized": "ByteString-\u003ea(Maybe ByteString)",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:getBit",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#getBit",
        "fct-type": "function",
        "title": "getBit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "getBit",
        "normalized": "ByteString-\u003eInteger-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Bit",
        "signature": "ByteString-\u003eInteger-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:getRange",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m ByteString",
        "fct-source": "src/Database-Redis-Simple.html#getRange",
        "fct-type": "function",
        "title": "getRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "getRange",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea ByteString",
        "package": "hedis-simple",
        "partial": "Range",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:getSet",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m (Maybe ByteString)",
        "fct-source": "src/Database-Redis-Simple.html#getSet",
        "fct-type": "function",
        "title": "getSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "getSet",
        "normalized": "ByteString-\u003eByteString-\u003ea(Maybe ByteString)",
        "package": "hedis-simple",
        "partial": "Set",
        "signature": "ByteString-\u003eByteString-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:getType",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m RedisType",
        "fct-source": "src/Database-Redis-Simple.html#getType",
        "fct-type": "function",
        "title": "getType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "getType",
        "normalized": "ByteString-\u003ea RedisType",
        "package": "hedis-simple",
        "partial": "Type",
        "signature": "ByteString-\u003em RedisType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hDel",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#hDel",
        "fct-type": "function",
        "title": "hDel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hDel",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Del",
        "signature": "ByteString-\u003e[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hExists",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#hExists",
        "fct-type": "function",
        "title": "hExists"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hExists",
        "normalized": "ByteString-\u003eByteString-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "Exists",
        "signature": "ByteString-\u003eByteString-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hGet",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m (Maybe ByteString)",
        "fct-source": "src/Database-Redis-Simple.html#hGet",
        "fct-type": "function",
        "title": "hGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hGet",
        "normalized": "ByteString-\u003eByteString-\u003ea(Maybe ByteString)",
        "package": "hedis-simple",
        "partial": "Get",
        "signature": "ByteString-\u003eByteString-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hGetAll",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m [(ByteString, ByteString)]",
        "fct-source": "src/Database-Redis-Simple.html#hGetAll",
        "fct-type": "function",
        "title": "hGetAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hGetAll",
        "normalized": "ByteString-\u003ea[(ByteString,ByteString)]",
        "package": "hedis-simple",
        "partial": "Get All",
        "signature": "ByteString-\u003em[(ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hIncrBy",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e Integer -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#hIncrBy",
        "fct-type": "function",
        "title": "hIncrBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hIncrBy",
        "normalized": "ByteString-\u003eByteString-\u003eInteger-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Incr By",
        "signature": "ByteString-\u003eByteString-\u003eInteger-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hIncrByFloat",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e Double -\u003e m Double",
        "fct-source": "src/Database-Redis-Simple.html#hIncrByFloat",
        "fct-type": "function",
        "title": "hIncrByFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hIncrByFloat",
        "normalized": "ByteString-\u003eByteString-\u003eDouble-\u003ea Double",
        "package": "hedis-simple",
        "partial": "Incr By Float",
        "signature": "ByteString-\u003eByteString-\u003eDouble-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hKeys",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#hKeys",
        "fct-type": "function",
        "title": "hKeys"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hKeys",
        "normalized": "ByteString-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Keys",
        "signature": "ByteString-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hLen",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#hLen",
        "fct-type": "function",
        "title": "hLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hLen",
        "normalized": "ByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Len",
        "signature": "ByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hMGet",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m [Maybe ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#hMGet",
        "fct-type": "function",
        "title": "hMGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hMGet",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea[Maybe ByteString]",
        "package": "hedis-simple",
        "partial": "MGet",
        "signature": "ByteString-\u003e[ByteString]-\u003em[Maybe ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hMSet",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [(ByteString, ByteString)] -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#hMSet",
        "fct-type": "function",
        "title": "hMSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hMSet",
        "normalized": "ByteString-\u003e[(ByteString,ByteString)]-\u003ea Status",
        "package": "hedis-simple",
        "partial": "MSet",
        "signature": "ByteString-\u003e[(ByteString,ByteString)]-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hSet",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#hSet",
        "fct-type": "function",
        "title": "hSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hSet",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "Set",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hSetNX",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#hSetNX",
        "fct-type": "function",
        "title": "hSetNX"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hSetNX",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "Set NX",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:hVals",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#hVals",
        "fct-type": "function",
        "title": "hVals"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "hVals",
        "normalized": "ByteString-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Vals",
        "signature": "ByteString-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:incr",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#incr",
        "fct-type": "function",
        "title": "incr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "incr",
        "normalized": "ByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:incrBy",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#incrBy",
        "fct-type": "function",
        "title": "incrBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "incrBy",
        "normalized": "ByteString-\u003eInteger-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "By",
        "signature": "ByteString-\u003eInteger-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:incrByFloat",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Double -\u003e m Double",
        "fct-source": "src/Database-Redis-Simple.html#incrByFloat",
        "fct-type": "function",
        "title": "incrByFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "incrByFloat",
        "normalized": "ByteString-\u003eDouble-\u003ea Double",
        "package": "hedis-simple",
        "partial": "By Float",
        "signature": "ByteString-\u003eDouble-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:info",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m ByteString",
        "fct-source": "src/Database-Redis-Simple.html#info",
        "fct-type": "function",
        "title": "info"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "info",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:keys",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "keys",
        "normalized": "ByteString-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lIndex",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e m (Maybe ByteString)",
        "fct-source": "src/Database-Redis-Simple.html#lIndex",
        "fct-type": "function",
        "title": "lIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "lIndex",
        "normalized": "ByteString-\u003eInteger-\u003ea(Maybe ByteString)",
        "package": "hedis-simple",
        "partial": "Index",
        "signature": "ByteString-\u003eInteger-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lInsertAfter",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#lInsertAfter",
        "fct-type": "function",
        "title": "lInsertAfter"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "lInsertAfter",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Insert After",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lInsertBefore",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#lInsertBefore",
        "fct-type": "function",
        "title": "lInsertBefore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "lInsertBefore",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Insert Before",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lLen",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#lLen",
        "fct-type": "function",
        "title": "lLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "lLen",
        "normalized": "ByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Len",
        "signature": "ByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lPop",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m (Maybe ByteString)",
        "fct-source": "src/Database-Redis-Simple.html#lPop",
        "fct-type": "function",
        "title": "lPop"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "lPop",
        "normalized": "ByteString-\u003ea(Maybe ByteString)",
        "package": "hedis-simple",
        "partial": "Pop",
        "signature": "ByteString-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lPush",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#lPush",
        "fct-type": "function",
        "title": "lPush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "lPush",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Push",
        "signature": "ByteString-\u003e[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lPushX",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#lPushX",
        "fct-type": "function",
        "title": "lPushX"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "lPushX",
        "normalized": "ByteString-\u003eByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Push",
        "signature": "ByteString-\u003eByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lRange",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#lRange",
        "fct-type": "function",
        "title": "lRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "lRange",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Range",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lRem",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#lRem",
        "fct-type": "function",
        "title": "lRem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "lRem",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Rem",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lSet",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#lSet",
        "fct-type": "function",
        "title": "lSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "lSet",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Status",
        "package": "hedis-simple",
        "partial": "Set",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lTrim",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#lTrim",
        "fct-type": "function",
        "title": "lTrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "lTrim",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea Status",
        "package": "hedis-simple",
        "partial": "Trim",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:lastSave",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Integer",
        "fct-source": "src/Database-Redis-Simple.html#lastSave",
        "fct-type": "function",
        "title": "lastSave"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "lastSave",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Save",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:mGet",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "[ByteString] -\u003e m [Maybe ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#mGet",
        "fct-type": "function",
        "title": "mGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "mGet",
        "normalized": "[ByteString]-\u003ea[Maybe ByteString]",
        "package": "hedis-simple",
        "partial": "Get",
        "signature": "[ByteString]-\u003em[Maybe ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:mSet",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "[(ByteString, ByteString)] -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#mSet",
        "fct-type": "function",
        "title": "mSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "mSet",
        "normalized": "[(ByteString,ByteString)]-\u003ea Status",
        "package": "hedis-simple",
        "partial": "Set",
        "signature": "[(ByteString,ByteString)]-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:mSetNx",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "[(ByteString, ByteString)] -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#mSetNx",
        "fct-type": "function",
        "title": "mSetNx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "mSetNx",
        "normalized": "[(ByteString,ByteString)]-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "Set Nx",
        "signature": "[(ByteString,ByteString)]-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:migrate",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e Integer -\u003e Integer -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#migrate",
        "fct-type": "function",
        "title": "migrate"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "migrate",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eInteger-\u003eInteger-\u003ea Status",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eInteger-\u003eInteger-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:move",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#move",
        "fct-type": "function",
        "title": "move"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "move",
        "normalized": "ByteString-\u003eInteger-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:msgChannel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "msgChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "msgChannel",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:msgMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "msgMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "msgMessage",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:msgPattern",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString",
        "fct-type": "function",
        "title": "msgPattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "msgPattern",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:multiExec",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "RedisTx a -\u003e Redis (TxResult a)",
        "fct-source": "src/Database-Redis-Simple.html#multiExec",
        "fct-type": "function",
        "title": "multiExec"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "multiExec",
        "normalized": "RedisTx a-\u003eRedis(TxResult a)",
        "package": "hedis-simple",
        "partial": "Exec",
        "signature": "RedisTx a-\u003eRedis(TxResult a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:objectEncoding",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m ByteString",
        "fct-source": "src/Database-Redis-Simple.html#objectEncoding",
        "fct-type": "function",
        "title": "objectEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "objectEncoding",
        "normalized": "ByteString-\u003ea ByteString",
        "package": "hedis-simple",
        "partial": "Encoding",
        "signature": "ByteString-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:objectIdleTime",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#objectIdleTime",
        "fct-type": "function",
        "title": "objectIdleTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "objectIdleTime",
        "normalized": "ByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Idle Time",
        "signature": "ByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:objectRefCount",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#objectRefCount",
        "fct-type": "function",
        "title": "objectRefCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "objectRefCount",
        "normalized": "ByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Ref Count",
        "signature": "ByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:pExpire",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#pExpire",
        "fct-type": "function",
        "title": "pExpire"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "pExpire",
        "normalized": "ByteString-\u003eInteger-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "Expire",
        "signature": "ByteString-\u003eInteger-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:pExpireAt",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#pExpireAt",
        "fct-type": "function",
        "title": "pExpireAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "pExpireAt",
        "normalized": "ByteString-\u003eInteger-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "Expire At",
        "signature": "ByteString-\u003eInteger-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:pSetEx",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#pSetEx",
        "fct-type": "function",
        "title": "pSetEx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "pSetEx",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Status",
        "package": "hedis-simple",
        "partial": "Set Ex",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:pTtl",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#pTtl",
        "fct-type": "function",
        "title": "pTtl"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "pTtl",
        "normalized": "ByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Ttl",
        "signature": "ByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:persist",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#persist",
        "fct-type": "function",
        "title": "persist"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "persist",
        "normalized": "ByteString-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:ping",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Status",
        "fct-source": "src/Database-Redis-Simple.html#ping",
        "fct-type": "function",
        "title": "ping"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "ping",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:pubSub",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "PubSub -\u003e (Message -\u003e IO PubSub) -\u003e Redis ()",
        "fct-source": "src/Database-Redis-Simple.html#pubSub",
        "fct-type": "function",
        "title": "pubSub"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "pubSub",
        "normalized": "PubSub-\u003e(Message-\u003eIO PubSub)-\u003eRedis()",
        "package": "hedis-simple",
        "partial": "Sub",
        "signature": "PubSub-\u003e(Message-\u003eIO PubSub)-\u003eRedis()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:publish",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#publish",
        "fct-type": "function",
        "title": "publish"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "publish",
        "normalized": "ByteString-\u003eByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:quit",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Status",
        "fct-source": "src/Database-Redis-Simple.html#quit",
        "fct-type": "function",
        "title": "quit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "quit",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:rPop",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m (Maybe ByteString)",
        "fct-source": "src/Database-Redis-Simple.html#rPop",
        "fct-type": "function",
        "title": "rPop"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "rPop",
        "normalized": "ByteString-\u003ea(Maybe ByteString)",
        "package": "hedis-simple",
        "partial": "Pop",
        "signature": "ByteString-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:rPopLPush",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m (Maybe ByteString)",
        "fct-source": "src/Database-Redis-Simple.html#rPopLPush",
        "fct-type": "function",
        "title": "rPopLPush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "rPopLPush",
        "normalized": "ByteString-\u003eByteString-\u003ea(Maybe ByteString)",
        "package": "hedis-simple",
        "partial": "Pop LPush",
        "signature": "ByteString-\u003eByteString-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:rPush",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#rPush",
        "fct-type": "function",
        "title": "rPush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "rPush",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Push",
        "signature": "ByteString-\u003e[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:rPushX",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#rPushX",
        "fct-type": "function",
        "title": "rPushX"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "rPushX",
        "normalized": "ByteString-\u003eByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Push",
        "signature": "ByteString-\u003eByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:randomKey",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m (Maybe ByteString)",
        "fct-source": "src/Database-Redis-Simple.html#randomKey",
        "fct-type": "function",
        "title": "randomKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "randomKey",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:rename",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#rename",
        "fct-type": "function",
        "title": "rename"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "rename",
        "normalized": "ByteString-\u003eByteString-\u003ea Status",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:renameNx",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#renameNx",
        "fct-type": "function",
        "title": "renameNx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "renameNx",
        "normalized": "ByteString-\u003eByteString-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "Nx",
        "signature": "ByteString-\u003eByteString-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:restore",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#restore",
        "fct-type": "function",
        "title": "restore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "restore",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Status",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:runRedis",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Connection -\u003e Redis a -\u003e IO (Either Reply a)",
        "fct-source": "src/Database-Redis-Simple.html#runRedis",
        "fct-type": "function",
        "title": "runRedis"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "runRedis",
        "normalized": "Connection-\u003eRedis a-\u003eIO(Either Reply a)",
        "package": "hedis-simple",
        "partial": "Redis",
        "signature": "Connection-\u003eRedis a-\u003eIO(Either Reply a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sAdd",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#sAdd",
        "fct-type": "function",
        "title": "sAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sAdd",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Add",
        "signature": "ByteString-\u003e[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sCard",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#sCard",
        "fct-type": "function",
        "title": "sCard"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sCard",
        "normalized": "ByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Card",
        "signature": "ByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sDiff",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "[ByteString] -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#sDiff",
        "fct-type": "function",
        "title": "sDiff"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sDiff",
        "normalized": "[ByteString]-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Diff",
        "signature": "[ByteString]-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sDiffStore",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#sDiffStore",
        "fct-type": "function",
        "title": "sDiffStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sDiffStore",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Diff Store",
        "signature": "ByteString-\u003e[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sInter",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "[ByteString] -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#sInter",
        "fct-type": "function",
        "title": "sInter"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sInter",
        "normalized": "[ByteString]-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Inter",
        "signature": "[ByteString]-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sInterStore",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#sInterStore",
        "fct-type": "function",
        "title": "sInterStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sInterStore",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Inter Store",
        "signature": "ByteString-\u003e[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sIsMember",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#sIsMember",
        "fct-type": "function",
        "title": "sIsMember"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sIsMember",
        "normalized": "ByteString-\u003eByteString-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "Is Member",
        "signature": "ByteString-\u003eByteString-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sMembers",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#sMembers",
        "fct-type": "function",
        "title": "sMembers"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sMembers",
        "normalized": "ByteString-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Members",
        "signature": "ByteString-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sMove",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#sMove",
        "fct-type": "function",
        "title": "sMove"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sMove",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "Move",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sPop",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m (Maybe ByteString)",
        "fct-source": "src/Database-Redis-Simple.html#sPop",
        "fct-type": "function",
        "title": "sPop"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sPop",
        "normalized": "ByteString-\u003ea(Maybe ByteString)",
        "package": "hedis-simple",
        "partial": "Pop",
        "signature": "ByteString-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sRandMember",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m (Maybe ByteString)",
        "fct-source": "src/Database-Redis-Simple.html#sRandMember",
        "fct-type": "function",
        "title": "sRandMember"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sRandMember",
        "normalized": "ByteString-\u003ea(Maybe ByteString)",
        "package": "hedis-simple",
        "partial": "Rand Member",
        "signature": "ByteString-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sRem",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#sRem",
        "fct-type": "function",
        "title": "sRem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sRem",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Rem",
        "signature": "ByteString-\u003e[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sUnion",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "[ByteString] -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#sUnion",
        "fct-type": "function",
        "title": "sUnion"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sUnion",
        "normalized": "[ByteString]-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Union",
        "signature": "[ByteString]-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sUnionStore",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#sUnionStore",
        "fct-type": "function",
        "title": "sUnionStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sUnionStore",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Union Store",
        "signature": "ByteString-\u003e[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:save",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Status",
        "fct-source": "src/Database-Redis-Simple.html#save",
        "fct-type": "function",
        "title": "save"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "save",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:scriptExists",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "[ByteString] -\u003e m [Bool]",
        "fct-source": "src/Database-Redis-Simple.html#scriptExists",
        "fct-type": "function",
        "title": "scriptExists"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "scriptExists",
        "normalized": "[ByteString]-\u003ea[Bool]",
        "package": "hedis-simple",
        "partial": "Exists",
        "signature": "[ByteString]-\u003em[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:scriptFlush",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Status",
        "fct-source": "src/Database-Redis-Simple.html#scriptFlush",
        "fct-type": "function",
        "title": "scriptFlush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "scriptFlush",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Flush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:scriptKill",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Status",
        "fct-source": "src/Database-Redis-Simple.html#scriptKill",
        "fct-type": "function",
        "title": "scriptKill"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "scriptKill",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Kill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:scriptLoad",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m ByteString",
        "fct-source": "src/Database-Redis-Simple.html#scriptLoad",
        "fct-type": "function",
        "title": "scriptLoad"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "scriptLoad",
        "normalized": "ByteString-\u003ea ByteString",
        "package": "hedis-simple",
        "partial": "Load",
        "signature": "ByteString-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:select",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Integer -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "select",
        "normalized": "Integer-\u003ea Status",
        "package": "hedis-simple",
        "partial": "",
        "signature": "Integer-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sendRequest",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "[ByteString] -\u003e m a",
        "fct-source": "src/Database-Redis-Simple.html#sendRequest",
        "fct-type": "function",
        "title": "sendRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sendRequest",
        "normalized": "[ByteString]-\u003ea b",
        "package": "hedis-simple",
        "partial": "Request",
        "signature": "[ByteString]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:set",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "set",
        "normalized": "ByteString-\u003eByteString-\u003ea Status",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:setBit",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#setBit",
        "fct-type": "function",
        "title": "setBit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "setBit",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Bit",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:setEx",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#setEx",
        "fct-type": "function",
        "title": "setEx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "setEx",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Status",
        "package": "hedis-simple",
        "partial": "Ex",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:setNx",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Bool",
        "fct-source": "src/Database-Redis-Simple.html#setNx",
        "fct-type": "function",
        "title": "setNx"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "setNx",
        "normalized": "ByteString-\u003eByteString-\u003ea Bool",
        "package": "hedis-simple",
        "partial": "Nx",
        "signature": "ByteString-\u003eByteString-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:setRange",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#setRange",
        "fct-type": "function",
        "title": "setRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "setRange",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Range",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:slaveOf",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m Status",
        "fct-source": "src/Database-Redis-Simple.html#slaveOf",
        "fct-type": "function",
        "title": "slaveOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "slaveOf",
        "normalized": "ByteString-\u003eByteString-\u003ea Status",
        "package": "hedis-simple",
        "partial": "Of",
        "signature": "ByteString-\u003eByteString-\u003em Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:slowLogGet",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Integer -\u003e m [Slowlog]",
        "fct-source": "src/Database-Redis-Simple.html#slowLogGet",
        "fct-type": "function",
        "title": "slowLogGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "slowLogGet",
        "normalized": "Integer-\u003ea[Slowlog]",
        "package": "hedis-simple",
        "partial": "Log Get",
        "signature": "Integer-\u003em[Slowlog]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:slowLogLen",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Integer",
        "fct-source": "src/Database-Redis-Simple.html#slowLogLen",
        "fct-type": "function",
        "title": "slowLogLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "slowLogLen",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Log Len",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:slowLogReset",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m Status",
        "fct-source": "src/Database-Redis-Simple.html#slowLogReset",
        "fct-type": "function",
        "title": "slowLogReset"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "slowLogReset",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "Log Reset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sort",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e SortOpts -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#sort",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sort",
        "normalized": "ByteString-\u003eSortOpts-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003eSortOpts-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:sortStore",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e SortOpts -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#sortStore",
        "fct-type": "function",
        "title": "sortStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "sortStore",
        "normalized": "ByteString-\u003eByteString-\u003eSortOpts-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Store",
        "signature": "ByteString-\u003eByteString-\u003eSortOpts-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:strLen",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#strLen",
        "fct-type": "function",
        "title": "strLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "strLen",
        "normalized": "ByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Len",
        "signature": "ByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:time",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "m (Integer, Integer)",
        "fct-source": "src/Database-Redis-Simple.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "time",
        "normalized": "a(Integer,Integer)",
        "package": "hedis-simple",
        "partial": "",
        "signature": "m(Integer,Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:ttl",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#ttl",
        "fct-type": "function",
        "title": "ttl"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "ttl",
        "normalized": "ByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "",
        "signature": "ByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:unwatch",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "Redis Status",
        "fct-source": "src/Database-Redis-Simple.html#unwatch",
        "fct-type": "function",
        "title": "unwatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "unwatch",
        "normalized": "",
        "package": "hedis-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:watch",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "[ByteString] -\u003e Redis Status",
        "fct-source": "src/Database-Redis-Simple.html#watch",
        "fct-type": "function",
        "title": "watch"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "watch",
        "normalized": "[ByteString]-\u003eRedis Status",
        "package": "hedis-simple",
        "partial": "",
        "signature": "[ByteString]-\u003eRedis Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zAdd",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [(Double, ByteString)] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#zAdd",
        "fct-type": "function",
        "title": "zAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zAdd",
        "normalized": "ByteString-\u003e[(Double,ByteString)]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Add",
        "signature": "ByteString-\u003e[(Double,ByteString)]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zCard",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#zCard",
        "fct-type": "function",
        "title": "zCard"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zCard",
        "normalized": "ByteString-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Card",
        "signature": "ByteString-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zCount",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Double -\u003e Double -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#zCount",
        "fct-type": "function",
        "title": "zCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zCount",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Count",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zIncrBy",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e ByteString -\u003e m Double",
        "fct-source": "src/Database-Redis-Simple.html#zIncrBy",
        "fct-type": "function",
        "title": "zIncrBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zIncrBy",
        "normalized": "ByteString-\u003eInteger-\u003eByteString-\u003ea Double",
        "package": "hedis-simple",
        "partial": "Incr By",
        "signature": "ByteString-\u003eInteger-\u003eByteString-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zInterStore",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e Aggregate -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#zInterStore",
        "fct-type": "function",
        "title": "zInterStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zInterStore",
        "normalized": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Inter Store",
        "signature": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zInterStoreWeights",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [(ByteString, Double)] -\u003e Aggregate -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#zInterStoreWeights",
        "fct-type": "function",
        "title": "zInterStoreWeights"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zInterStoreWeights",
        "normalized": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Inter Store Weights",
        "signature": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRange",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#zRange",
        "fct-type": "function",
        "title": "zRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRange",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Range",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRangeByScore",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Double -\u003e Double -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#zRangeByScore",
        "fct-type": "function",
        "title": "zRangeByScore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRangeByScore",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Range By Score",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRangeByScoreLimit",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Double -\u003e Double -\u003e Integer -\u003e Integer -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#zRangeByScoreLimit",
        "fct-type": "function",
        "title": "zRangeByScoreLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRangeByScoreLimit",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Range By Score Limit",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRangeByScoreWithScores",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Double -\u003e Double -\u003e m [(ByteString, Double)]",
        "fct-source": "src/Database-Redis-Simple.html#zRangeByScoreWithScores",
        "fct-type": "function",
        "title": "zRangeByScoreWithScores"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRangeByScoreWithScores",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea[(ByteString,Double)]",
        "package": "hedis-simple",
        "partial": "Range By Score With Scores",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em[(ByteString,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRangeByScoreWithScoresLimit",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Double -\u003e Double -\u003e Integer -\u003e Integer -\u003e m [(ByteString, Double)]",
        "fct-source": "src/Database-Redis-Simple.html#zRangeByScoreWithScoresLimit",
        "fct-type": "function",
        "title": "zRangeByScoreWithScoresLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRangeByScoreWithScoresLimit",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea[(ByteString,Double)]",
        "package": "hedis-simple",
        "partial": "Range By Score With Scores Limit",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em[(ByteString,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRangeWithScores",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m [(ByteString, Double)]",
        "fct-source": "src/Database-Redis-Simple.html#zRangeWithScores",
        "fct-type": "function",
        "title": "zRangeWithScores"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRangeWithScores",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea[(ByteString,Double)]",
        "package": "hedis-simple",
        "partial": "Range With Scores",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em[(ByteString,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRank",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m (Maybe Integer)",
        "fct-source": "src/Database-Redis-Simple.html#zRank",
        "fct-type": "function",
        "title": "zRank"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRank",
        "normalized": "ByteString-\u003eByteString-\u003ea(Maybe Integer)",
        "package": "hedis-simple",
        "partial": "Rank",
        "signature": "ByteString-\u003eByteString-\u003em(Maybe Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRem",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#zRem",
        "fct-type": "function",
        "title": "zRem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRem",
        "normalized": "ByteString-\u003e[ByteString]-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Rem",
        "signature": "ByteString-\u003e[ByteString]-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRemRangeByRank",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#zRemRangeByRank",
        "fct-type": "function",
        "title": "zRemRangeByRank"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRemRangeByRank",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Rem Range By Rank",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRemRangeByScore",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Double -\u003e Double -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#zRemRangeByScore",
        "fct-type": "function",
        "title": "zRemRangeByScore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRemRangeByScore",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Rem Range By Score",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRange",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#zRevRange",
        "fct-type": "function",
        "title": "zRevRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRevRange",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Rev Range",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRangeByScore",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Double -\u003e Double -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#zRevRangeByScore",
        "fct-type": "function",
        "title": "zRevRangeByScore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRevRangeByScore",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Rev Range By Score",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRangeByScoreLimit",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Double -\u003e Double -\u003e Integer -\u003e Integer -\u003e m [ByteString]",
        "fct-source": "src/Database-Redis-Simple.html#zRevRangeByScoreLimit",
        "fct-type": "function",
        "title": "zRevRangeByScoreLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRevRangeByScoreLimit",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea[ByteString]",
        "package": "hedis-simple",
        "partial": "Rev Range By Score Limit",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRangeByScoreWithScores",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Double -\u003e Double -\u003e m [(ByteString, Double)]",
        "fct-source": "src/Database-Redis-Simple.html#zRevRangeByScoreWithScores",
        "fct-type": "function",
        "title": "zRevRangeByScoreWithScores"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRevRangeByScoreWithScores",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003ea[(ByteString,Double)]",
        "package": "hedis-simple",
        "partial": "Rev Range By Score With Scores",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003em[(ByteString,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRangeByScoreWithScoresLimit",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Double -\u003e Double -\u003e Integer -\u003e Integer -\u003e m [(ByteString, Double)]",
        "fct-source": "src/Database-Redis-Simple.html#zRevRangeByScoreWithScoresLimit",
        "fct-type": "function",
        "title": "zRevRangeByScoreWithScoresLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRevRangeByScoreWithScoresLimit",
        "normalized": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003ea[(ByteString,Double)]",
        "package": "hedis-simple",
        "partial": "Rev Range By Score With Scores Limit",
        "signature": "ByteString-\u003eDouble-\u003eDouble-\u003eInteger-\u003eInteger-\u003em[(ByteString,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRangeWithScores",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e Integer -\u003e Integer -\u003e m [(ByteString, Double)]",
        "fct-source": "src/Database-Redis-Simple.html#zRevRangeWithScores",
        "fct-type": "function",
        "title": "zRevRangeWithScores"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRevRangeWithScores",
        "normalized": "ByteString-\u003eInteger-\u003eInteger-\u003ea[(ByteString,Double)]",
        "package": "hedis-simple",
        "partial": "Rev Range With Scores",
        "signature": "ByteString-\u003eInteger-\u003eInteger-\u003em[(ByteString,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zRevRank",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m (Maybe Integer)",
        "fct-source": "src/Database-Redis-Simple.html#zRevRank",
        "fct-type": "function",
        "title": "zRevRank"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zRevRank",
        "normalized": "ByteString-\u003eByteString-\u003ea(Maybe Integer)",
        "package": "hedis-simple",
        "partial": "Rev Rank",
        "signature": "ByteString-\u003eByteString-\u003em(Maybe Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zScore",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e ByteString -\u003e m (Maybe Double)",
        "fct-source": "src/Database-Redis-Simple.html#zScore",
        "fct-type": "function",
        "title": "zScore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zScore",
        "normalized": "ByteString-\u003eByteString-\u003ea(Maybe Double)",
        "package": "hedis-simple",
        "partial": "Score",
        "signature": "ByteString-\u003eByteString-\u003em(Maybe Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zUnionStore",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [ByteString] -\u003e Aggregate -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#zUnionStore",
        "fct-type": "function",
        "title": "zUnionStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zUnionStore",
        "normalized": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Union Store",
        "signature": "ByteString-\u003e[ByteString]-\u003eAggregate-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-simple/docs/Database-Redis-Simple.html#v:zUnionStoreWeights",
      "description": {
        "fct-module": "Database.Redis.Simple",
        "fct-package": "hedis-simple",
        "fct-signature": "ByteString -\u003e [(ByteString, Double)] -\u003e Aggregate -\u003e m Integer",
        "fct-source": "src/Database-Redis-Simple.html#zUnionStoreWeights",
        "fct-type": "function",
        "title": "zUnionStoreWeights"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Redis Simple",
        "module": "Database.Redis.Simple",
        "name": "zUnionStoreWeights",
        "normalized": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003ea Integer",
        "package": "hedis-simple",
        "partial": "Union Store Weights",
        "signature": "ByteString-\u003e[(ByteString,Double)]-\u003eAggregate-\u003em Integer"
      }
    }
  }
]