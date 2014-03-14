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
        "word": "wai-middleware-cache"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransparent front cache middleware for \u003ccode\u003e\u003ca\u003eWai\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstead caching internal data, this middleware caches entire responses.\n   Of course, this creates additional costs. However, the simplification of \n   the internal structure and concentration of caching in the immediate \n   vicinity of the request is more than redeem them.\n\u003c/p\u003e\u003cpre\u003e cache (debugBackend True)\n       ourFrivolousApplication\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Wai.Middleware.Cache",
          "name": "Cache",
          "package": "wai-middleware-cache",
          "source": "src/Network-Wai-Middleware-Cache.html",
          "type": "module"
        },
        "index": {
          "description": "Transparent front cache middleware for Wai Instead caching internal data this middleware caches entire responses Of course this creates additional costs However the simplification of the internal structure and concentration of caching in the immediate vicinity of the request is more than redeem them cache debugBackend True ourFrivolousApplication",
          "hierarchy": "Network Wai Middleware Cache",
          "module": "Network.Wai.Middleware.Cache",
          "name": "Cache",
          "package": "wai-middleware-cache",
          "partial": "Cache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-cache/docs/Network-Wai-Middleware-Cache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract cache backend. Result may be \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e you need to respond  \n   with status \u003ccode\u003e304 - Not Modified\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Cache",
          "name": "CacheBackend",
          "package": "wai-middleware-cache",
          "source": "src/Network-Wai-Middleware-Cache.html#CacheBackend",
          "type": "type"
        },
        "index": {
          "description": "Abstract cache backend Result may be Nothing you need to respond with status Not Modified",
          "hierarchy": "Network Wai Middleware Cache",
          "module": "Network.Wai.Middleware.Cache",
          "name": "CacheBackend",
          "package": "wai-middleware-cache",
          "partial": "Cache Backend",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-cache/docs/Network-Wai-Middleware-Cache.html#t:CacheBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCache backend can throw errors. For handle this, use, for example,\n   \u003ca\u003eNetwork.Wai.Middleware.Catch\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Cache",
          "name": "CacheBackendError",
          "package": "wai-middleware-cache",
          "source": "src/Network-Wai-Middleware-Cache.html#CacheBackendError",
          "type": "data"
        },
        "index": {
          "description": "Cache backend can throw errors For handle this use for example Network.Wai.Middleware.Catch",
          "hierarchy": "Network Wai Middleware Cache",
          "module": "Network.Wai.Middleware.Cache",
          "name": "CacheBackendError",
          "package": "wai-middleware-cache",
          "partial": "Cache Backend Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-cache/docs/Network-Wai-Middleware-Cache.html#t:CacheBackendError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Cache",
          "name": "CacheBackendError",
          "package": "wai-middleware-cache",
          "signature": "CacheBackendError ByteString",
          "source": "src/Network-Wai-Middleware-Cache.html#CacheBackendError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Cache",
          "module": "Network.Wai.Middleware.Cache",
          "name": "CacheBackendError",
          "package": "wai-middleware-cache",
          "partial": "Cache Backend Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-cache/docs/Network-Wai-Middleware-Cache.html#v:CacheBackendError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCache middleware. Use it with conjuction with \u003ccode\u003e\u003ca\u003eCacheBackend\u003c/a\u003e\u003c/code\u003e and \n   \u003ccode\u003e\u003ca\u003eheaderETag\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003cpre\u003e -- Simplest backend. Suggests @304 - Not Modified@ with site root.\n rootBackend app req = do \n     case rawPathInfo req of\n         \"/\" -\u003e return Nothing\n         _ -\u003e do\n             res \u003c- app req \n             return $ Just res\n app = responseLBS ok200 [] \"someresponse\"\n \n cachedApp = cache rootBackend $ headerETag $ app\n\u003c/pre\u003e",
          "module": "Network.Wai.Middleware.Cache",
          "name": "cache",
          "package": "wai-middleware-cache",
          "signature": "CacheBackend-\u003e Middleware",
          "type": "function"
        },
        "index": {
          "description": "Cache middleware Use it with conjuction with CacheBackend and headerETag Simplest backend Suggests Not Modified with site root rootBackend app req do case rawPathInfo req of return Nothing do res app req return Just res app responseLBS ok200 someresponse cachedApp cache rootBackend headerETag app",
          "hierarchy": "Network Wai Middleware Cache",
          "module": "Network.Wai.Middleware.Cache",
          "name": "cache",
          "normalized": "CacheBackend-\u003eMiddleware",
          "package": "wai-middleware-cache",
          "signature": "CacheBackend-\u003eMiddleware",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-cache/docs/Network-Wai-Middleware-Cache.html#v:cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd \"ETag\" header to response if it not present. Value of header is \n   \u003ccode\u003eMD5\u003c/code\u003e hash of response body.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Cache",
          "name": "headerETag",
          "package": "wai-middleware-cache",
          "signature": "Middleware",
          "source": "src/Network-Wai-Middleware-Cache.html#headerETag",
          "type": "function"
        },
        "index": {
          "description": "Add ETag header to response if it not present Value of header is MD5 hash of response body",
          "hierarchy": "Network Wai Middleware Cache",
          "module": "Network.Wai.Middleware.Cache",
          "name": "headerETag",
          "package": "wai-middleware-cache",
          "partial": "ETag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-cache/docs/Network-Wai-Middleware-Cache.html#v:headerETag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for extract \u003ccode\u003eIf-None-Match\u003c/code\u003e header from \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. Use this with \n   backends.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Cache",
          "name": "lookupETag",
          "package": "wai-middleware-cache",
          "signature": "Request -\u003e Maybe ByteString",
          "source": "src/Network-Wai-Middleware-Cache.html#lookupETag",
          "type": "function"
        },
        "index": {
          "description": "Helper for extract If-None-Match header from Request Use this with backends",
          "hierarchy": "Network Wai Middleware Cache",
          "module": "Network.Wai.Middleware.Cache",
          "name": "lookupETag",
          "normalized": "Request-\u003eMaybe ByteString",
          "package": "wai-middleware-cache",
          "partial": "ETag",
          "signature": "Request-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-cache/docs/Network-Wai-Middleware-Cache.html#v:lookupETag"
      }
    }
  ]
]