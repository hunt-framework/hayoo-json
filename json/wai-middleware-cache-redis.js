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
        "word": "wai-middleware-cache-redis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRedis backend for \u003ca\u003eNetwork.Wai.Middleware.Cache\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis backend uses \u003ca\u003eDatabase.Redis.Pile\u003c/a\u003e for low-lewel operations. Main \n   drawback of this backend is the fact that whole response \n   will be consumed in memory.\n\u003c/p\u003e\u003cpre\u003e cache\n     (redisBackend \n         -- use defaults, DB 0 and \"myprefix\" \n         R.defaultConnectInfo 0 \n         \"myprefix\"         -- prefix for caching\n         Nothing            -- no expiration\n         [\"mytag\"]          -- one cache tag\n         (rawPathInfo)      -- URL path as key \n         lookupETag         -- And find \"If-None-Match\"\n     ) app -- our app\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Wai.Middleware.Cache.Redis",
          "name": "Redis",
          "package": "wai-middleware-cache-redis",
          "source": "src/Network-Wai-Middleware-Cache-Redis.html",
          "type": "module"
        },
        "index": {
          "description": "Redis backend for Network.Wai.Middleware.Cache This backend uses Database.Redis.Pile for low-lewel operations Main drawback of this backend is the fact that whole response will be consumed in memory cache redisBackend use defaults DB and myprefix R.defaultConnectInfo myprefix prefix for caching Nothing no expiration mytag one cache tag rawPathInfo URL path as key lookupETag And find If-None-Match app our app",
          "hierarchy": "Network Wai Middleware Cache Redis",
          "module": "Network.Wai.Middleware.Cache.Redis",
          "name": "Redis",
          "package": "wai-middleware-cache-redis",
          "partial": "Redis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-cache-redis/docs/Network-Wai-Middleware-Cache-Redis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedis backend for \u003ca\u003eNetwork.Wai.Middleware.Cache\u003c/a\u003e. \n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Cache.Redis",
          "name": "redisBackend",
          "package": "wai-middleware-cache-redis",
          "signature": "ConnectInfo-\u003e Integer-\u003e ByteString-\u003e Integer-\u003e [ByteString]-\u003e (Request -\u003e ByteString)-\u003e (Request -\u003e Maybe ByteString)-\u003e CacheBackend",
          "type": "function"
        },
        "index": {
          "description": "Redis backend for Network.Wai.Middleware.Cache",
          "hierarchy": "Network Wai Middleware Cache Redis",
          "module": "Network.Wai.Middleware.Cache.Redis",
          "name": "redisBackend",
          "normalized": "ConnectInfo-\u003eInteger-\u003eByteString-\u003eInteger-\u003e[ByteString]-\u003e(Request-\u003eByteString)-\u003e(Request-\u003eMaybe ByteString)-\u003eCacheBackend",
          "package": "wai-middleware-cache-redis",
          "partial": "Backend",
          "signature": "ConnectInfo-\u003eInteger-\u003eByteString-\u003eInteger-\u003e[ByteString]-\u003e(Request-\u003eByteString)-\u003e(Request-\u003eMaybe ByteString)-\u003eCacheBackend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-cache-redis/docs/Network-Wai-Middleware-Cache-Redis.html#v:redisBackend"
      }
    }
  ]
]