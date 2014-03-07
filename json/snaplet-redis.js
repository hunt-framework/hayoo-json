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
        "word": "snaplet-redis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRedis DB snaplet.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.RedisDB",
          "name": "RedisDB",
          "package": "snaplet-redis",
          "source": "src/Snap-Snaplet-RedisDB.html",
          "type": "module"
        },
        "index": {
          "description": "Redis DB snaplet",
          "hierarchy": "Snap Snaplet RedisDB",
          "module": "Snap.Snaplet.RedisDB",
          "name": "RedisDB",
          "package": "snaplet-redis",
          "partial": "Redis DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redis/docs/Snap-Snaplet-RedisDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnaplet's state data type\n\u003c/p\u003e",
          "module": "Snap.Snaplet.RedisDB",
          "name": "RedisDB",
          "package": "snaplet-redis",
          "source": "src/Snap-Snaplet-RedisDB.html#RedisDB",
          "type": "data"
        },
        "index": {
          "description": "Snaplet state data type",
          "hierarchy": "Snap Snaplet RedisDB",
          "module": "Snap.Snaplet.RedisDB",
          "name": "RedisDB",
          "package": "snaplet-redis",
          "partial": "Redis DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redis/docs/Snap-Snaplet-RedisDB.html#t:RedisDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens to retrieve the connection to Redis from the \u003ccode\u003e\u003ca\u003eRedisDB\u003c/a\u003e\u003c/code\u003e\n wrapper.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.RedisDB",
          "name": "redisConnection",
          "package": "snaplet-redis",
          "signature": "Simple Lens RedisDB Connection",
          "source": "src/Snap-Snaplet-RedisDB.html#redisConnection",
          "type": "function"
        },
        "index": {
          "description": "lens to retrieve the connection to Redis from the RedisDB wrapper",
          "hierarchy": "Snap Snaplet RedisDB",
          "module": "Snap.Snaplet.RedisDB",
          "name": "redisConnection",
          "package": "snaplet-redis",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redis/docs/Snap-Snaplet-RedisDB.html#v:redisConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake RedisDB snaplet and initialize database connection.\n\u003c/p\u003e\u003cpre\u003e appInit :: SnapletInit MyApp MyApp\n appInit = makeSnaplet \"app\" \"App with Redis child snaplet\" Nothing $\n           do\n             d \u003c- nestSnaplet \"\" database $\n                                 redisDBInit defaultConnectInfo\n             return $ MyApp d\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.RedisDB",
          "name": "redisDBInit",
          "package": "snaplet-redis",
          "signature": "ConnectInfo-\u003e SnapletInit b RedisDB",
          "type": "function"
        },
        "index": {
          "description": "Make RedisDB snaplet and initialize database connection appInit SnapletInit MyApp MyApp appInit makeSnaplet app App with Redis child snaplet Nothing do nestSnaplet database redisDBInit defaultConnectInfo return MyApp",
          "hierarchy": "Snap Snaplet RedisDB",
          "module": "Snap.Snaplet.RedisDB",
          "name": "redisDBInit",
          "normalized": "ConnectInfo-\u003eSnapletInit a RedisDB",
          "package": "snaplet-redis",
          "partial": "DBInit",
          "signature": "ConnectInfo-\u003eSnapletInit b RedisDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redis/docs/Snap-Snaplet-RedisDB.html#v:redisDBInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake RedisDB snaplet and initialize database connection from\n snaplet config file. Options are read from the \u003ca\u003eredis\u003c/a\u003e section of\n the application config (e.g. ./devel.cfg) or from the main section\n of the Redis snaplet config (e.g. .\u003cem\u003esnaplets\u003c/em\u003eredis/devel.cfg).\n\u003c/p\u003e\u003cp\u003eEvery field is optional and defaults to defaultConnectInfo values.\n\u003c/p\u003e\u003cpre\u003e redis {\n     host = \"192.168.0.42\"\n     port = 31415\n     auth = \"i am so secret\"\n     max_connections = 1\n     max_idle_time = 0.5\n }\n\u003c/pre\u003e\u003cpre\u003e appInit :: SnapletInit MyApp MyApp\n appInit = makeSnaplet \"app\" \"App with Redis child snaplet\" Nothing $\n           do\n             d \u003c- nestSnaplet \"redis\" database redisDBInitConf\n             return $ MyApp d\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.RedisDB",
          "name": "redisDBInitConf",
          "package": "snaplet-redis",
          "signature": "SnapletInit b RedisDB",
          "source": "src/Snap-Snaplet-RedisDB.html#redisDBInitConf",
          "type": "function"
        },
        "index": {
          "description": "Make RedisDB snaplet and initialize database connection from snaplet config file Options are read from the redis section of the application config e.g devel.cfg or from the main section of the Redis snaplet config e.g snaplets redis devel.cfg Every field is optional and defaults to defaultConnectInfo values redis host port auth am so secret max connections max idle time appInit SnapletInit MyApp MyApp appInit makeSnaplet app App with Redis child snaplet Nothing do nestSnaplet redis database redisDBInitConf return MyApp",
          "hierarchy": "Snap Snaplet RedisDB",
          "module": "Snap.Snaplet.RedisDB",
          "name": "redisDBInitConf",
          "package": "snaplet-redis",
          "partial": "DBInit Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redis/docs/Snap-Snaplet-RedisDB.html#v:redisDBInitConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform action using Redis connection from RedisDB snaplet pool\n (wrapper for \u003ccode\u003e\u003ca\u003erunRedis\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e runRedisDB database $ do\n   set \"hello\" \"world\"\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.RedisDB",
          "name": "runRedisDB",
          "package": "snaplet-redis",
          "signature": "Simple Lens app (Snaplet RedisDB) -\u003e Redis a -\u003e m a",
          "source": "src/Snap-Snaplet-RedisDB.html#runRedisDB",
          "type": "function"
        },
        "index": {
          "description": "Perform action using Redis connection from RedisDB snaplet pool wrapper for runRedis runRedisDB database do set hello world",
          "hierarchy": "Snap Snaplet RedisDB",
          "module": "Snap.Snaplet.RedisDB",
          "name": "runRedisDB",
          "normalized": "Simple Lens a(Snaplet RedisDB)-\u003eRedis b-\u003ec b",
          "package": "snaplet-redis",
          "partial": "Redis DB",
          "signature": "Simple Lens app(Snaplet RedisDB)-\u003eRedis a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-redis/docs/Snap-Snaplet-RedisDB.html#v:runRedisDB"
      }
    }
  ]
]