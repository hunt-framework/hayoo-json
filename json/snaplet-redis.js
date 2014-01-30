[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redis/docs/Snap-Snaplet-RedisDB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRedis DB snaplet.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.RedisDB",
        "fct-package": "snaplet-redis",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-RedisDB.html",
        "fct-type": "module",
        "title": "RedisDB"
      },
      "index": {
        "description": "Redis DB snaplet",
        "hierarchy": "Snap Snaplet RedisDB",
        "module": "Snap.Snaplet.RedisDB",
        "name": "RedisDB",
        "normalized": "",
        "package": "snaplet-redis",
        "partial": "Redis DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redis/docs/Snap-Snaplet-RedisDB.html#t:RedisDB",
      "description": {
        "fct-descr": "\u003cp\u003eSnaplet's state data type\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.RedisDB",
        "fct-package": "snaplet-redis",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-RedisDB.html#RedisDB",
        "fct-type": "data",
        "title": "RedisDB"
      },
      "index": {
        "description": "Snaplet state data type",
        "hierarchy": "Snap Snaplet RedisDB",
        "module": "Snap.Snaplet.RedisDB",
        "name": "RedisDB",
        "normalized": "",
        "package": "snaplet-redis",
        "partial": "Redis DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redis/docs/Snap-Snaplet-RedisDB.html#v:redisConnection",
      "description": {
        "fct-descr": "\u003cp\u003eA lens to retrieve the connection to Redis from the \u003ccode\u003e\u003ca\u003eRedisDB\u003c/a\u003e\u003c/code\u003e\n wrapper.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.RedisDB",
        "fct-package": "snaplet-redis",
        "fct-signature": "Simple Lens RedisDB Connection",
        "fct-source": "src/Snap-Snaplet-RedisDB.html#redisConnection",
        "fct-type": "function",
        "title": "redisConnection"
      },
      "index": {
        "description": "lens to retrieve the connection to Redis from the RedisDB wrapper",
        "hierarchy": "Snap Snaplet RedisDB",
        "module": "Snap.Snaplet.RedisDB",
        "name": "redisConnection",
        "normalized": "",
        "package": "snaplet-redis",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redis/docs/Snap-Snaplet-RedisDB.html#v:redisDBInit",
      "description": {
        "fct-descr": "\u003cp\u003eMake RedisDB snaplet and initialize database connection.\n\u003c/p\u003e\u003cpre\u003e appInit :: SnapletInit MyApp MyApp\n appInit = makeSnaplet \"app\" \"App with Redis child snaplet\" Nothing $\n           do\n             d \u003c- nestSnaplet \"\" database $\n                                 redisDBInit defaultConnectInfo\n             return $ MyApp d\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.RedisDB",
        "fct-package": "snaplet-redis",
        "fct-signature": "ConnectInfo-\u003e SnapletInit b RedisDB",
        "fct-type": "function",
        "title": "redisDBInit"
      },
      "index": {
        "description": "Make RedisDB snaplet and initialize database connection appInit SnapletInit MyApp MyApp appInit makeSnaplet app App with Redis child snaplet Nothing do nestSnaplet database redisDBInit defaultConnectInfo return MyApp",
        "hierarchy": "Snap Snaplet RedisDB",
        "module": "Snap.Snaplet.RedisDB",
        "name": "redisDBInit",
        "normalized": "ConnectInfo-\u003eSnapletInit a RedisDB",
        "package": "snaplet-redis",
        "partial": "DBInit",
        "signature": "ConnectInfo-\u003eSnapletInit b RedisDB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redis/docs/Snap-Snaplet-RedisDB.html#v:redisDBInitConf",
      "description": {
        "fct-descr": "\u003cp\u003eMake RedisDB snaplet and initialize database connection from\n snaplet config file. Options are read from the \u003ca\u003eredis\u003c/a\u003e section of\n the application config (e.g. ./devel.cfg) or from the main section\n of the Redis snaplet config (e.g. .\u003cem\u003esnaplets\u003c/em\u003eredis/devel.cfg).\n\u003c/p\u003e\u003cp\u003eEvery field is optional and defaults to defaultConnectInfo values.\n\u003c/p\u003e\u003cpre\u003e redis {\n     host = \"192.168.0.42\"\n     port = 31415\n     auth = \"i am so secret\"\n     max_connections = 1\n     max_idle_time = 0.5\n }\n\u003c/pre\u003e\u003cpre\u003e appInit :: SnapletInit MyApp MyApp\n appInit = makeSnaplet \"app\" \"App with Redis child snaplet\" Nothing $\n           do\n             d \u003c- nestSnaplet \"redis\" database redisDBInitConf\n             return $ MyApp d\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.RedisDB",
        "fct-package": "snaplet-redis",
        "fct-signature": "SnapletInit b RedisDB",
        "fct-source": "src/Snap-Snaplet-RedisDB.html#redisDBInitConf",
        "fct-type": "function",
        "title": "redisDBInitConf"
      },
      "index": {
        "description": "Make RedisDB snaplet and initialize database connection from snaplet config file Options are read from the redis section of the application config e.g devel.cfg or from the main section of the Redis snaplet config e.g snaplets redis devel.cfg Every field is optional and defaults to defaultConnectInfo values redis host port auth am so secret max connections max idle time appInit SnapletInit MyApp MyApp appInit makeSnaplet app App with Redis child snaplet Nothing do nestSnaplet redis database redisDBInitConf return MyApp",
        "hierarchy": "Snap Snaplet RedisDB",
        "module": "Snap.Snaplet.RedisDB",
        "name": "redisDBInitConf",
        "normalized": "",
        "package": "snaplet-redis",
        "partial": "DBInit Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-redis/docs/Snap-Snaplet-RedisDB.html#v:runRedisDB",
      "description": {
        "fct-descr": "\u003cp\u003ePerform action using Redis connection from RedisDB snaplet pool\n (wrapper for \u003ccode\u003e\u003ca\u003erunRedis\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e runRedisDB database $ do\n   set \"hello\" \"world\"\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.RedisDB",
        "fct-package": "snaplet-redis",
        "fct-signature": "Simple Lens app (Snaplet RedisDB) -\u003e Redis a -\u003e m a",
        "fct-source": "src/Snap-Snaplet-RedisDB.html#runRedisDB",
        "fct-type": "function",
        "title": "runRedisDB"
      },
      "index": {
        "description": "Perform action using Redis connection from RedisDB snaplet pool wrapper for runRedis runRedisDB database do set hello world",
        "hierarchy": "Snap Snaplet RedisDB",
        "module": "Snap.Snaplet.RedisDB",
        "name": "runRedisDB",
        "normalized": "Simple Lens a(Snaplet RedisDB)-\u003eRedis b-\u003ec b",
        "package": "snaplet-redis",
        "partial": "Redis DB",
        "signature": "Simple Lens app(Snaplet RedisDB)-\u003eRedis a-\u003em a"
      }
    }
  }
]