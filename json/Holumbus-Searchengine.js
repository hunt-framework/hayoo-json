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
        "word": "Holumbus-Searchengine"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map-fold function for performing list folds in parallel.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.MapFold",
          "name": "MapFold",
          "package": "Holumbus-Searchengine",
          "source": "src/Control-Concurrent-MapFold.html",
          "type": "module"
        },
        "index": {
          "description": "map-fold function for performing list folds in parallel",
          "hierarchy": "Control Concurrent MapFold",
          "module": "Control.Concurrent.MapFold",
          "name": "MapFold",
          "package": "Holumbus-Searchengine",
          "partial": "Map Fold",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Control-Concurrent-MapFold.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MapFold",
          "name": "mapFold",
          "package": "Holumbus-Searchengine",
          "signature": "Int -\u003e (a -\u003e IO b) -\u003e (b -\u003e b -\u003e IO b) -\u003e [a] -\u003e IO b",
          "source": "src/Control-Concurrent-MapFold.html#mapFold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MapFold",
          "module": "Control.Concurrent.MapFold",
          "name": "mapFold",
          "normalized": "Int-\u003e(a-\u003eIO b)-\u003e(b-\u003eb-\u003eIO b)-\u003e[a]-\u003eIO b",
          "package": "Holumbus-Searchengine",
          "partial": "Fold",
          "signature": "Int-\u003e(a-\u003eIO b)-\u003e(b-\u003eb-\u003eIO b)-\u003e[a]-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Control-Concurrent-MapFold.html#v:mapFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ReaderStateIO",
          "name": "ReaderStateIO",
          "package": "Holumbus-Searchengine",
          "source": "src/Control-Monad-ReaderStateIO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad ReaderStateIO",
          "module": "Control.Monad.ReaderStateIO",
          "name": "ReaderStateIO",
          "package": "Holumbus-Searchengine",
          "partial": "Reader State IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Control-Monad-ReaderStateIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereader state io monad implemented directly without any monad transformers\n\u003c/p\u003e",
          "module": "Control.Monad.ReaderStateIO",
          "name": "ReaderStateIO",
          "package": "Holumbus-Searchengine",
          "source": "src/Control-Monad-ReaderStateIO.html#ReaderStateIO",
          "type": "newtype"
        },
        "index": {
          "description": "reader state io monad implemented directly without any monad transformers",
          "hierarchy": "Control Monad ReaderStateIO",
          "module": "Control.Monad.ReaderStateIO",
          "name": "ReaderStateIO",
          "package": "Holumbus-Searchengine",
          "partial": "Reader State IO",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Control-Monad-ReaderStateIO.html#t:ReaderStateIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ReaderStateIO",
          "name": "RSIO",
          "package": "Holumbus-Searchengine",
          "signature": "RSIO (env -\u003e state -\u003e IO (res, state))",
          "source": "src/Control-Monad-ReaderStateIO.html#ReaderStateIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ReaderStateIO",
          "module": "Control.Monad.ReaderStateIO",
          "name": "RSIO",
          "normalized": "RSIO(a-\u003eb-\u003eIO(c,b))",
          "package": "Holumbus-Searchengine",
          "partial": "RSIO",
          "signature": "RSIO(env-\u003estate-\u003eIO(res,state))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Control-Monad-ReaderStateIO.html#v:RSIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ReaderStateIO",
          "name": "modifyIO",
          "package": "Holumbus-Searchengine",
          "signature": "(state -\u003e IO state) -\u003e ReaderStateIO env state ()",
          "source": "src/Control-Monad-ReaderStateIO.html#modifyIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ReaderStateIO",
          "module": "Control.Monad.ReaderStateIO",
          "name": "modifyIO",
          "normalized": "(a-\u003eIO a)-\u003eReaderStateIO b a()",
          "package": "Holumbus-Searchengine",
          "partial": "IO",
          "signature": "(state-\u003eIO state)-\u003eReaderStateIO env state()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Control-Monad-ReaderStateIO.html#v:modifyIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ReaderStateIO",
          "name": "runReaderStateIO",
          "package": "Holumbus-Searchengine",
          "signature": "ReaderStateIO env state res -\u003e env -\u003e state -\u003e IO (res, state)",
          "source": "src/Control-Monad-ReaderStateIO.html#runReaderStateIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ReaderStateIO",
          "module": "Control.Monad.ReaderStateIO",
          "name": "runReaderStateIO",
          "normalized": "ReaderStateIO a b c-\u003ea-\u003eb-\u003eIO(c,b)",
          "package": "Holumbus-Searchengine",
          "partial": "Reader State IO",
          "signature": "ReaderStateIO env state res-\u003eenv-\u003estate-\u003eIO(res,state)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Control-Monad-ReaderStateIO.html#v:runReaderStateIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map-fold function for interleaved map and fold.\n   The elements of a list are processed like in a binary tree.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Sequential.MapFoldBinary",
          "name": "MapFoldBinary",
          "package": "Holumbus-Searchengine",
          "source": "src/Control-Sequential-MapFoldBinary.html",
          "type": "module"
        },
        "index": {
          "description": "map-fold function for interleaved map and fold The elements of list are processed like in binary tree",
          "hierarchy": "Control Sequential MapFoldBinary",
          "module": "Control.Sequential.MapFoldBinary",
          "name": "MapFoldBinary",
          "package": "Holumbus-Searchengine",
          "partial": "Map Fold Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Control-Sequential-MapFoldBinary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure version of binary map fold\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003emapFoldBinary id (+) [1..8]\u003c/code\u003e adds the elements of a list in the following order:\n \u003ccode\u003e(((1+2)+(3+4))+((5+6)+(7+8)))\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Sequential.MapFoldBinary",
          "name": "mapFoldBinary",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e b) -\u003e (b -\u003e b -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Control-Sequential-MapFoldBinary.html#mapFoldBinary",
          "type": "function"
        },
        "index": {
          "description": "Pure version of binary map fold mapFoldBinary id adds the elements of list in the following order",
          "hierarchy": "Control Sequential MapFoldBinary",
          "module": "Control.Sequential.MapFoldBinary",
          "name": "mapFoldBinary",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003e[a]-\u003eb",
          "package": "Holumbus-Searchengine",
          "partial": "Fold Binary",
          "signature": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Control-Sequential-MapFoldBinary.html#v:mapFoldBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of a binary map fold\n\u003c/p\u003e\u003cp\u003eThe elements of a list are mapped and folded in the same way as in the pure version.\n The map and fold operations are interleaved. In the above example the expressions are evaluated\n from left to right, folding is performed, as early as possible.\n\u003c/p\u003e",
          "module": "Control.Sequential.MapFoldBinary",
          "name": "mapFoldBinaryM",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e b -\u003e m b) -\u003e [a] -\u003e m b",
          "source": "src/Control-Sequential-MapFoldBinary.html#mapFoldBinaryM",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of binary map fold The elements of list are mapped and folded in the same way as in the pure version The map and fold operations are interleaved In the above example the expressions are evaluated from left to right folding is performed as early as possible",
          "hierarchy": "Control Sequential MapFoldBinary",
          "module": "Control.Sequential.MapFoldBinary",
          "name": "mapFoldBinaryM",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ec-\u003eb c)-\u003e[a]-\u003eb c",
          "package": "Holumbus-Searchengine",
          "partial": "Fold Binary",
          "signature": "(a-\u003em b)-\u003e(b-\u003eb-\u003em b)-\u003e[a]-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Control-Sequential-MapFoldBinary.html#v:mapFoldBinaryM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.CacheCore",
          "name": "CacheCore",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-CacheCore.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler CacheCore",
          "module": "Holumbus.Crawler.CacheCore",
          "name": "CacheCore",
          "package": "Holumbus-Searchengine",
          "partial": "Cache Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-CacheCore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.CacheCore",
          "name": "CacheCrawlerConfig",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-CacheCore.html#CacheCrawlerConfig",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler CacheCore",
          "module": "Holumbus.Crawler.CacheCore",
          "name": "CacheCrawlerConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Cache Crawler Config",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-CacheCore.html#t:CacheCrawlerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.CacheCore",
          "name": "CacheCrawlerState",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-CacheCore.html#CacheCrawlerState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler CacheCore",
          "module": "Holumbus.Crawler.CacheCore",
          "name": "CacheCrawlerState",
          "package": "Holumbus-Searchengine",
          "partial": "Cache Crawler State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-CacheCore.html#t:CacheCrawlerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.CacheCore",
          "name": "CacheState",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-CacheCore.html#CacheState",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Holumbus Crawler CacheCore",
          "module": "Holumbus.Crawler.CacheCore",
          "name": "CacheState",
          "package": "Holumbus-Searchengine",
          "partial": "Cache State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-CacheCore.html#t:CacheState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.CacheCore",
          "name": "CS",
          "package": "Holumbus-Searchengine",
          "signature": "CS ()",
          "source": "src/Holumbus-Crawler-CacheCore.html#CacheState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler CacheCore",
          "module": "Holumbus.Crawler.CacheCore",
          "name": "CS",
          "normalized": "CS()",
          "package": "Holumbus-Searchengine",
          "partial": "CS",
          "signature": "CS()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-CacheCore.html#v:CS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.CacheCore",
          "name": "cacheCrawlerConfig",
          "package": "Holumbus-Searchengine",
          "signature": "SysConfig-\u003e (URI -\u003e Bool)-\u003e CacheCrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler CacheCore",
          "module": "Holumbus.Crawler.CacheCore",
          "name": "cacheCrawlerConfig",
          "normalized": "SysConfig-\u003e(URI-\u003eBool)-\u003eCacheCrawlerConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Config",
          "signature": "SysConfig-\u003e(URI-\u003eBool)-\u003eCacheCrawlerConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-CacheCore.html#v:cacheCrawlerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.CacheCore",
          "name": "emptyCacheState",
          "package": "Holumbus-Searchengine",
          "signature": "CacheState",
          "source": "src/Holumbus-Crawler-CacheCore.html#emptyCacheState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler CacheCore",
          "module": "Holumbus.Crawler.CacheCore",
          "name": "emptyCacheState",
          "package": "Holumbus-Searchengine",
          "partial": "Cache State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-CacheCore.html#v:emptyCacheState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.CacheCore",
          "name": "insertCacheM",
          "package": "Holumbus-Searchengine",
          "signature": "(URI, ()) -\u003e CacheState -\u003e m CacheState",
          "source": "src/Holumbus-Crawler-CacheCore.html#insertCacheM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler CacheCore",
          "module": "Holumbus.Crawler.CacheCore",
          "name": "insertCacheM",
          "normalized": "(URI,())-\u003eCacheState-\u003ea CacheState",
          "package": "Holumbus-Searchengine",
          "partial": "Cache",
          "signature": "(URI,())-\u003eCacheState-\u003em CacheState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-CacheCore.html#v:insertCacheM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.CacheCore",
          "name": "stdCacher",
          "package": "Holumbus-Searchengine",
          "signature": "(Int, Int, Int)-\u003e (Int, String)-\u003e (Priority, Priority)-\u003e SysConfig-\u003e (CacheCrawlerConfig -\u003e CacheCrawlerConfig)-\u003e Maybe String-\u003e [URI]-\u003e (URI -\u003e Bool)-\u003e IO CacheCrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler CacheCore",
          "module": "Holumbus.Crawler.CacheCore",
          "name": "stdCacher",
          "normalized": "(Int,Int,Int)-\u003e(Int,String)-\u003e(Priority,Priority)-\u003eSysConfig-\u003e(CacheCrawlerConfig-\u003eCacheCrawlerConfig)-\u003eMaybe String-\u003e[URI]-\u003e(URI-\u003eBool)-\u003eIO CacheCrawlerState",
          "package": "Holumbus-Searchengine",
          "partial": "Cacher",
          "signature": "(Int,Int,Int)-\u003e(Int,String)-\u003e(Priority,Priority)-\u003eSysConfig-\u003e(CacheCrawlerConfig-\u003eCacheCrawlerConfig)-\u003eMaybe String-\u003e[URI]-\u003e(URI-\u003eBool)-\u003eIO CacheCrawlerState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-CacheCore.html#v:stdCacher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.CacheCore",
          "name": "unionCacheStatesM",
          "package": "Holumbus-Searchengine",
          "signature": "CacheState -\u003e CacheState -\u003e m CacheState",
          "source": "src/Holumbus-Crawler-CacheCore.html#unionCacheStatesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler CacheCore",
          "module": "Holumbus.Crawler.CacheCore",
          "name": "unionCacheStatesM",
          "normalized": "CacheState-\u003eCacheState-\u003ea CacheState",
          "package": "Holumbus-Searchengine",
          "partial": "Cache States",
          "signature": "CacheState-\u003eCacheState-\u003em CacheState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-CacheCore.html#v:unionCacheStatesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Constants",
          "name": "Constants",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Constants.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Constants",
          "module": "Holumbus.Crawler.Constants",
          "name": "Constants",
          "package": "Holumbus-Searchengine",
          "partial": "Constants",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Constants.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Constants",
          "name": "curl_connect_timeout",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-Constants.html#curl_connect_timeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Constants",
          "module": "Holumbus.Crawler.Constants",
          "name": "curl_connect_timeout",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Constants.html#v:curl_connect_timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Constants",
          "name": "curl_location",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-Constants.html#curl_location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Constants",
          "module": "Holumbus.Crawler.Constants",
          "name": "curl_location",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Constants.html#v:curl_location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Constants",
          "name": "curl_max_filesize",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-Constants.html#curl_max_filesize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Constants",
          "module": "Holumbus.Crawler.Constants",
          "name": "curl_max_filesize",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Constants.html#v:curl_max_filesize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Constants",
          "name": "curl_max_redirects",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-Constants.html#curl_max_redirects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Constants",
          "module": "Holumbus.Crawler.Constants",
          "name": "curl_max_redirects",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Constants.html#v:curl_max_redirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Constants",
          "name": "curl_max_time",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-Constants.html#curl_max_time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Constants",
          "module": "Holumbus.Crawler.Constants",
          "name": "curl_max_time",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Constants.html#v:curl_max_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Constants",
          "name": "curl_user_agent",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-Constants.html#curl_user_agent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Constants",
          "module": "Holumbus.Crawler.Constants",
          "name": "curl_user_agent",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Constants.html#v:curl_user_agent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Constants",
          "name": "defaultCrawlerName",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-Constants.html#defaultCrawlerName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Constants",
          "module": "Holumbus.Crawler.Constants",
          "name": "defaultCrawlerName",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Constants.html#v:defaultCrawlerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Constants",
          "name": "http_last_modified",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-Constants.html#http_last_modified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Constants",
          "module": "Holumbus.Crawler.Constants",
          "name": "http_last_modified",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Constants.html#v:http_last_modified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Constants",
          "name": "http_location",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-Constants.html#http_location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Constants",
          "module": "Holumbus.Crawler.Constants",
          "name": "http_location",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Constants.html#v:http_location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "Core",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "Core",
          "package": "Holumbus-Searchengine",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "MapFold",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Core.html#MapFold",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "MapFold",
          "package": "Holumbus-Searchengine",
          "partial": "Map Fold",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#t:MapFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "accumulateRes",
          "package": "Holumbus-Searchengine",
          "signature": "(URI, a) -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#accumulateRes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "accumulateRes",
          "normalized": "(URI,a)-\u003eCrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Res",
          "signature": "(URI,a)-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:accumulateRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "combineDocResults'",
          "package": "Holumbus-Searchengine",
          "signature": "MergeDocResults r -\u003e (URIs, URIsWithLevel, r) -\u003e (URIs, URIsWithLevel, r) -\u003e IO (URIs, URIsWithLevel, r)",
          "source": "src/Holumbus-Crawler-Core.html#combineDocResults%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "combineDocResults'",
          "normalized": "MergeDocResults a-\u003e(URIs,URIsWithLevel,a)-\u003e(URIs,URIsWithLevel,a)-\u003eIO(URIs,URIsWithLevel,a)",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Results'",
          "signature": "MergeDocResults r-\u003e(URIs,URIsWithLevel,r)-\u003e(URIs,URIsWithLevel,r)-\u003eIO(URIs,URIsWithLevel,r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:combineDocResults-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "crawlDocs",
          "package": "Holumbus-Searchengine",
          "signature": "[URI] -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#crawlDocs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "crawlDocs",
          "normalized": "[URI]-\u003eCrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Docs",
          "signature": "[URI]-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:crawlDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecrawl a single doc, mark doc as processed, collect new hrefs and combine doc result with accumulator in state\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Core",
          "name": "crawlNextDoc",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#crawlNextDoc",
          "type": "function"
        },
        "index": {
          "description": "crawl single doc mark doc as processed collect new hrefs and combine doc result with accumulator in state",
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "crawlNextDoc",
          "normalized": "CrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Next Doc",
          "signature": "CrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:crawlNextDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "crawlNextDocs",
          "package": "Holumbus-Searchengine",
          "signature": "MapFold URIWithLevel (URIs, URIsWithLevel, r) -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#crawlNextDocs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "crawlNextDocs",
          "normalized": "MapFold URIWithLevel(URIs,URIsWithLevel,a)-\u003eCrawlerAction b a()",
          "package": "Holumbus-Searchengine",
          "partial": "Next Docs",
          "signature": "MapFold URIWithLevel(URIs,URIsWithLevel,r)-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:crawlNextDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "crawlerCheckSaveState",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#crawlerCheckSaveState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "crawlerCheckSaveState",
          "normalized": "CrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Check Save State",
          "signature": "CrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:crawlerCheckSaveState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "crawlerLoop",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#crawlerLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "crawlerLoop",
          "normalized": "CrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Loop",
          "signature": "CrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:crawlerLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "crawlerResume",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#crawlerResume",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "crawlerResume",
          "normalized": "String-\u003eCrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Resume",
          "signature": "String-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:crawlerResume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "crawlerSaveState",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#crawlerSaveState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "crawlerSaveState",
          "normalized": "CrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Save State",
          "signature": "CrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:crawlerSaveState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "execCrawler",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerAction a r x -\u003e CrawlerConfig a r -\u003e CrawlerState r -\u003e IO (CrawlerState r)",
          "source": "src/Holumbus-Crawler-Core.html#execCrawler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "execCrawler",
          "normalized": "CrawlerAction a b c-\u003eCrawlerConfig a b-\u003eCrawlerState b-\u003eIO(CrawlerState b)",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler",
          "signature": "CrawlerAction a r x-\u003eCrawlerConfig a r-\u003eCrawlerState r-\u003eIO(CrawlerState r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:execCrawler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute the real URI in case of a 301 or 302 response (moved permanently or temporary),\n else the arrow will fail\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Core",
          "name": "getLocationReference",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree String",
          "source": "src/Holumbus-Crawler-Core.html#getLocationReference",
          "type": "function"
        },
        "index": {
          "description": "compute the real URI in case of or response moved permanently or temporary else the arrow will fail",
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "getLocationReference",
          "package": "Holumbus-Searchengine",
          "partial": "Location Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:getLocationReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute the real URI of the document, in case of a move response\n this is contained in the \"http-location\" attribute, else it's the\n tranferURI.\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Core",
          "name": "getRealDocURI",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree String",
          "source": "src/Holumbus-Crawler-Core.html#getRealDocURI",
          "type": "function"
        },
        "index": {
          "description": "compute the real URI of the document in case of move response this is contained in the http-location attribute else it the tranferURI",
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "getRealDocURI",
          "package": "Holumbus-Searchengine",
          "partial": "Real Doc URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:getRealDocURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "initCrawler",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#initCrawler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "initCrawler",
          "normalized": "CrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler",
          "signature": "CrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:initCrawler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter uris rejected by robots.txt\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Core",
          "name": "isAllowedByRobots",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e CrawlerAction a r Bool",
          "source": "src/Holumbus-Crawler-Core.html#isAllowedByRobots",
          "type": "function"
        },
        "index": {
          "description": "filter uris rejected by robots.txt",
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "isAllowedByRobots",
          "normalized": "URI-\u003eCrawlerAction a b Bool",
          "package": "Holumbus-Searchengine",
          "partial": "Allowed By Robots",
          "signature": "URI-\u003eCrawlerAction a r Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:isAllowedByRobots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "loadCrawlerState",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#loadCrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "loadCrawlerState",
          "normalized": "FilePath-\u003eCrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler State",
          "signature": "FilePath-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:loadCrawlerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the process document arrow and prepare results\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Core",
          "name": "processDoc",
          "package": "Holumbus-Searchengine",
          "signature": "URIWithLevel -\u003e CrawlerAction a r (URI, [URIWithLevel], [(URI, a)])",
          "source": "src/Holumbus-Crawler-Core.html#processDoc",
          "type": "function"
        },
        "index": {
          "description": "Run the process document arrow and prepare results",
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "processDoc",
          "normalized": "URIWithLevel-\u003eCrawlerAction a b(URI,[URIWithLevel],[(URI,a)])",
          "package": "Holumbus-Searchengine",
          "partial": "Doc",
          "signature": "URIWithLevel-\u003eCrawlerAction a r(URI,[URIWithLevel],[(URI,a)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:processDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "processDoc'",
          "package": "Holumbus-Searchengine",
          "signature": "URIWithLevel -\u003e CrawlerAction a r (URIs, URIsWithLevel, [(URI, a)])",
          "source": "src/Holumbus-Crawler-Core.html#processDoc%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "processDoc'",
          "normalized": "URIWithLevel-\u003eCrawlerAction a b(URIs,URIsWithLevel,[(URI,a)])",
          "package": "Holumbus-Searchengine",
          "partial": "Doc'",
          "signature": "URIWithLevel-\u003eCrawlerAction a r(URIs,URIsWithLevel,[(URI,a)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:processDoc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom a document two results are computed, 1. the list of all hrefs in the contents,\n and 2. the collected info contained in the page. This result is augmented with the transfer uri\n such that following functions know the source of this contents. The transfer-URI may be another one\n as the input uri, there could happen a redirect in the http request.\n\u003c/p\u003e\u003cp\u003eThe two listA arrows make the whole arrow deterministic, so it never fails\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Core",
          "name": "processDocArrow",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerConfig c r -\u003e URI -\u003e IOSArrow a (URI, ([URI], [(URI, c)]))",
          "source": "src/Holumbus-Crawler-Core.html#processDocArrow",
          "type": "function"
        },
        "index": {
          "description": "From document two results are computed the list of all hrefs in the contents and the collected info contained in the page This result is augmented with the transfer uri such that following functions know the source of this contents The transfer-URI may be another one as the input uri there could happen redirect in the http request The two listA arrows make the whole arrow deterministic so it never fails",
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "processDocArrow",
          "normalized": "CrawlerConfig a b-\u003eURI-\u003eIOSArrow c(URI,([URI],[(URI,a)]))",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Arrow",
          "signature": "CrawlerConfig c r-\u003eURI-\u003eIOSArrow a(URI,([URI],[(URI,c)]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:processDocArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "runCrawler",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerAction a r x -\u003e CrawlerConfig a r -\u003e CrawlerState r -\u003e IO (x, CrawlerState r)",
          "source": "src/Holumbus-Crawler-Core.html#runCrawler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "runCrawler",
          "normalized": "CrawlerAction a b c-\u003eCrawlerConfig a b-\u003eCrawlerState b-\u003eIO(c,CrawlerState b)",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler",
          "signature": "CrawlerAction a r x-\u003eCrawlerConfig a r-\u003eCrawlerState r-\u003eIO(x,CrawlerState r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:runCrawler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "saveCrawlerState",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#saveCrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "saveCrawlerState",
          "normalized": "FilePath-\u003eCrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler State",
          "signature": "FilePath-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:saveCrawlerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "uriAddToRobotsTxt",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#uriAddToRobotsTxt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "uriAddToRobotsTxt",
          "normalized": "URI-\u003eCrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Add To Robots Txt",
          "signature": "URI-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:uriAddToRobotsTxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "uriProcessed",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#uriProcessed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "uriProcessed",
          "normalized": "URI-\u003eCrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Processed",
          "signature": "URI-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:uriProcessed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "uriToBeProcessed",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e Int -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#uriToBeProcessed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "uriToBeProcessed",
          "normalized": "URI-\u003eInt-\u003eCrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "To Be Processed",
          "signature": "URI-\u003eInt-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:uriToBeProcessed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "urisProcessed",
          "package": "Holumbus-Searchengine",
          "signature": "URIs -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#urisProcessed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "urisProcessed",
          "normalized": "URIs-\u003eCrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Processed",
          "signature": "URIs-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:urisProcessed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Core",
          "name": "urisToBeProcessed",
          "package": "Holumbus-Searchengine",
          "signature": "URIsWithLevel -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Core.html#urisToBeProcessed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Core",
          "module": "Holumbus.Crawler.Core",
          "name": "urisToBeProcessed",
          "normalized": "URIsWithLevel-\u003eCrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "To Be Processed",
          "signature": "URIsWithLevel-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Core.html#v:urisToBeProcessed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Html",
          "name": "Html",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Html.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "Html",
          "package": "Holumbus-Searchengine",
          "partial": "Html",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Html",
          "name": "application_pdf",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-Html.html#application_pdf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "application_pdf",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:application_pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the base URI of a HTML page with respect to a possibly\n   given base element in the head element of a html page.\n\u003c/p\u003e\u003cp\u003eStolen from Uwe Schmidt, http://www.haskell.org/haskellwiki/HXT\n   and then stolen back again by Uwe from Holumbus.Utility\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Html",
          "name": "computeDocBase",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree String",
          "source": "src/Holumbus-Crawler-Html.html#computeDocBase",
          "type": "function"
        },
        "index": {
          "description": "Compute the base URI of HTML page with respect to possibly given base element in the head element of html page Stolen from Uwe Schmidt http www.haskell.org haskellwiki HXT and then stolen back again by Uwe from Holumbus.Utility",
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "computeDocBase",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:computeDocBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Html",
          "name": "defaultHtmlCrawlerConfig",
          "package": "Holumbus-Searchengine",
          "signature": "AccumulateDocResult a r -\u003e MergeDocResults r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Html.html#defaultHtmlCrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "defaultHtmlCrawlerConfig",
          "normalized": "AccumulateDocResult a b-\u003eMergeDocResults b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Html Crawler Config",
          "signature": "AccumulateDocResult a r-\u003eMergeDocResults r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:defaultHtmlCrawlerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Html",
          "name": "getAllText",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree XmlTree -\u003e a XmlTree String",
          "source": "src/Holumbus-Crawler-Html.html#getAllText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "getAllText",
          "normalized": "a XmlTree XmlTree-\u003ea XmlTree String",
          "package": "Holumbus-Searchengine",
          "partial": "All Text",
          "signature": "a XmlTree XmlTree-\u003ea XmlTree String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:getAllText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Html",
          "name": "getByPath",
          "package": "Holumbus-Searchengine",
          "signature": "[String] -\u003e a XmlTree XmlTree",
          "source": "src/Holumbus-Crawler-Html.html#getByPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "getByPath",
          "normalized": "[String]-\u003ea XmlTree XmlTree",
          "package": "Holumbus-Searchengine",
          "partial": "By Path",
          "signature": "[String]-\u003ea XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:getByPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Html",
          "name": "getDocReferences",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree URI",
          "source": "src/Holumbus-Crawler-Html.html#getDocReferences",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "getDocReferences",
          "package": "Holumbus-Searchengine",
          "partial": "Doc References",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:getDocReferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Html",
          "name": "getHtmlPlainText",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree String",
          "source": "src/Holumbus-Crawler-Html.html#getHtmlPlainText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "getHtmlPlainText",
          "package": "Holumbus-Searchengine",
          "partial": "Html Plain Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:getHtmlPlainText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect all HTML references to other documents within a, frame and iframe elements\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Html",
          "name": "getHtmlReferences",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree URI",
          "source": "src/Holumbus-Crawler-Html.html#getHtmlReferences",
          "type": "function"
        },
        "index": {
          "description": "Collect all HTML references to other documents within frame and iframe elements",
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "getHtmlReferences",
          "package": "Holumbus-Searchengine",
          "partial": "Html References",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:getHtmlReferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Html",
          "name": "getHtmlTitle",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree String",
          "source": "src/Holumbus-Crawler-Html.html#getHtmlTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "getHtmlTitle",
          "package": "Holumbus-Searchengine",
          "partial": "Html Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:getHtmlTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Html",
          "name": "getTitleOrDocName",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree String",
          "source": "src/Holumbus-Crawler-Html.html#getTitleOrDocName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "getTitleOrDocName",
          "package": "Holumbus-Searchengine",
          "partial": "Title Or Doc Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:getTitleOrDocName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Html",
          "name": "isElemWithAttr",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e String -\u003e (String -\u003e Bool) -\u003e a XmlTree XmlTree",
          "source": "src/Holumbus-Crawler-Html.html#isElemWithAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "isElemWithAttr",
          "normalized": "String-\u003eString-\u003e(String-\u003eBool)-\u003ea XmlTree XmlTree",
          "package": "Holumbus-Searchengine",
          "partial": "Elem With Attr",
          "signature": "String-\u003eString-\u003e(String-\u003eBool)-\u003ea XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:isElemWithAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Html",
          "name": "isHtmlContents",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree XmlTree",
          "source": "src/Holumbus-Crawler-Html.html#isHtmlContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "isHtmlContents",
          "package": "Holumbus-Searchengine",
          "partial": "Html Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:isHtmlContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Html",
          "name": "isPdfContents",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree XmlTree",
          "source": "src/Holumbus-Crawler-Html.html#isPdfContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "isPdfContents",
          "package": "Holumbus-Searchengine",
          "partial": "Pdf Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:isPdfContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etake the first n chars of a string, if the input\n   is too long the cut off is indicated by \"...\" at the end\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Html",
          "name": "limitLength",
          "package": "Holumbus-Searchengine",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Holumbus-Crawler-Html.html#limitLength",
          "type": "function"
        },
        "index": {
          "description": "take the first chars of string if the input is too long the cut off is indicated by at the end",
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "limitLength",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "Holumbus-Searchengine",
          "partial": "Length",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:limitLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enormalize whitespace by splitting a text into words and joining this together with unwords\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Html",
          "name": "normalizeWS",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e String",
          "source": "src/Holumbus-Crawler-Html.html#normalizeWS",
          "type": "function"
        },
        "index": {
          "description": "normalize whitespace by splitting text into words and joining this together with unwords",
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "normalizeWS",
          "normalized": "String-\u003eString",
          "package": "Holumbus-Searchengine",
          "partial": "WS",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:normalizeWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstruct an absolute URI by a base URI and a possibly relative URI\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Html",
          "name": "toAbsRef",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e URI -\u003e URI",
          "source": "src/Holumbus-Crawler-Html.html#toAbsRef",
          "type": "function"
        },
        "index": {
          "description": "construct an absolute URI by base URI and possibly relative URI",
          "hierarchy": "Holumbus Crawler Html",
          "module": "Holumbus.Crawler.Html",
          "name": "toAbsRef",
          "normalized": "URI-\u003eURI-\u003eURI",
          "package": "Holumbus-Searchengine",
          "partial": "Abs Ref",
          "signature": "URI-\u003eURI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Html.html#v:toAbsRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "IndexerCore",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-IndexerCore.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "IndexerCore",
          "package": "Holumbus-Searchengine",
          "partial": "Indexer Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "IndexContextConfig",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-IndexerCore.html#IndexContextConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "IndexContextConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Index Context Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#t:IndexContextConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "IndexCrawlerConfig",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-IndexerCore.html#IndexCrawlerConfig",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "IndexCrawlerConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Index Crawler Config",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#t:IndexCrawlerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "IndexerState",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-IndexerCore.html#IndexerState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "IndexerState",
          "package": "Holumbus-Searchengine",
          "partial": "Indexer State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#t:IndexerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "RawContext",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-IndexerCore.html#RawContext",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "RawContext",
          "package": "Holumbus-Searchengine",
          "partial": "Raw Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#t:RawContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "RawContexts",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-IndexerCore.html#RawContexts",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "RawContexts",
          "package": "Holumbus-Searchengine",
          "partial": "Raw Contexts",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#t:RawContexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "RawDoc",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-IndexerCore.html#RawDoc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "RawDoc",
          "package": "Holumbus-Searchengine",
          "partial": "Raw Doc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#t:RawDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "RawTitle",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-IndexerCore.html#RawTitle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "RawTitle",
          "package": "Holumbus-Searchengine",
          "partial": "Raw Title",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#t:RawTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "RawWord",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-IndexerCore.html#RawWord",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "RawWord",
          "package": "Holumbus-Searchengine",
          "partial": "Raw Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#t:RawWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "RawWords",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-IndexerCore.html#RawWords",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "RawWords",
          "package": "Holumbus-Searchengine",
          "partial": "Raw Words",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#t:RawWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "IndexContextConfig",
          "package": "Holumbus-Searchengine",
          "signature": "IndexContextConfig",
          "source": "src/Holumbus-Crawler-IndexerCore.html#IndexContextConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "IndexContextConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Index Context Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:IndexContextConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "IndexerState",
          "package": "Holumbus-Searchengine",
          "signature": "IndexerState",
          "source": "src/Holumbus-Crawler-IndexerCore.html#IndexerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "IndexerState",
          "package": "Holumbus-Searchengine",
          "partial": "Indexer State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:IndexerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Crawler.IndexerCore\",\"Holumbus.Index.CompactIndex\",\"Holumbus.Index.HashedIndex\"]",
          "name": "emptyIndexerState",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e d c -\u003e IndexerState i d c",
          "source": "src/Holumbus-Crawler-IndexerCore.html#emptyIndexerState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:emptyIndexerState\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:emptyIndexerState\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:emptyIndexerState\"]"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "emptyIndexerState",
          "normalized": "a-\u003eb c-\u003eIndexerState a b c",
          "package": "Holumbus-Searchengine",
          "partial": "Indexer State",
          "signature": "i-\u003ed c-\u003eIndexerState i d c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:emptyIndexerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "indexCrawlerConfig",
          "package": "Holumbus-Searchengine",
          "signature": "SysConfig-\u003e (URI -\u003e Bool)-\u003e Maybe (IOSArrow XmlTree String)-\u003e Maybe (IOSArrow XmlTree XmlTree)-\u003e Maybe (IOSArrow XmlTree String)-\u003e Maybe (IOSArrow XmlTree c)-\u003e [IndexContextConfig]-\u003e IndexCrawlerConfig i d c",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "indexCrawlerConfig",
          "normalized": "SysConfig-\u003e(URI-\u003eBool)-\u003eMaybe(IOSArrow XmlTree String)-\u003eMaybe(IOSArrow XmlTree XmlTree)-\u003eMaybe(IOSArrow XmlTree String)-\u003eMaybe(IOSArrow XmlTree a)-\u003e[IndexContextConfig]-\u003eIndexCrawlerConfig b c a",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Config",
          "signature": "SysConfig-\u003e(URI-\u003eBool)-\u003eMaybe(IOSArrow XmlTree String)-\u003eMaybe(IOSArrow XmlTree XmlTree)-\u003eMaybe(IOSArrow XmlTree String)-\u003eMaybe(IOSArrow XmlTree c)-\u003e[IndexContextConfig]-\u003eIndexCrawlerConfig i d c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:indexCrawlerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "insertRawDocM",
          "package": "Holumbus-Searchengine",
          "signature": "(URI, RawDoc c)-\u003e IndexerState i d c-\u003e m (IndexerState i d c)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "insertRawDocM",
          "normalized": "(URI,RawDoc a)-\u003eIndexerState b c a-\u003ed(IndexerState b c a)",
          "package": "Holumbus-Searchengine",
          "partial": "Raw Doc",
          "signature": "(URI,RawDoc c)-\u003eIndexerState i d c-\u003em(IndexerState i d c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:insertRawDocM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "ixc_boringWord",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e Bool",
          "source": "src/Holumbus-Crawler-IndexerCore.html#IndexContextConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "ixc_boringWord",
          "normalized": "String-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Word",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:ixc_boringWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "ixc_collectText",
          "package": "Holumbus-Searchengine",
          "signature": "IOSArrow XmlTree String",
          "source": "src/Holumbus-Crawler-IndexerCore.html#IndexContextConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "ixc_collectText",
          "package": "Holumbus-Searchengine",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:ixc_collectText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "ixc_name",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-IndexerCore.html#IndexContextConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "ixc_name",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:ixc_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "ixc_textToWords",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e [String]",
          "source": "src/Holumbus-Crawler-IndexerCore.html#IndexContextConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "ixc_textToWords",
          "normalized": "String-\u003e[String]",
          "package": "Holumbus-Searchengine",
          "partial": "To Words",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:ixc_textToWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "ixs_documents",
          "package": "Holumbus-Searchengine",
          "signature": "(d c)",
          "source": "src/Holumbus-Crawler-IndexerCore.html#IndexerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "ixs_documents",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:ixs_documents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "ixs_index",
          "package": "Holumbus-Searchengine",
          "signature": "i",
          "source": "src/Holumbus-Crawler-IndexerCore.html#IndexerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "ixs_index",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:ixs_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "stdIndexer",
          "package": "Holumbus-Searchengine",
          "signature": "IndexCrawlerConfig i d c-\u003e Maybe String-\u003e [URI]-\u003e IndexerState i d c-\u003e IO (IndexCrawlerState i d c)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "stdIndexer",
          "normalized": "IndexCrawlerConfig a b c-\u003eMaybe String-\u003e[URI]-\u003eIndexerState a b c-\u003eIO(IndexCrawlerState a b c)",
          "package": "Holumbus-Searchengine",
          "partial": "Indexer",
          "signature": "IndexCrawlerConfig i d c-\u003eMaybe String-\u003e[URI]-\u003eIndexerState i d c-\u003eIO(IndexCrawlerState i d c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:stdIndexer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "unionIndexerStatesM",
          "package": "Holumbus-Searchengine",
          "signature": "IndexerState i d c -\u003e IndexerState i d c -\u003e m (IndexerState i d c)",
          "source": "src/Holumbus-Crawler-IndexerCore.html#unionIndexerStatesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler IndexerCore",
          "module": "Holumbus.Crawler.IndexerCore",
          "name": "unionIndexerStatesM",
          "normalized": "IndexerState a b c-\u003eIndexerState a b c-\u003ed(IndexerState a b c)",
          "package": "Holumbus-Searchengine",
          "partial": "Indexer States",
          "signature": "IndexerState i d c-\u003eIndexerState i d c-\u003em(IndexerState i d c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-IndexerCore.html#v:unionIndexerStatesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Logger",
          "name": "Logger",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Logger.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Logger",
          "module": "Holumbus.Crawler.Logger",
          "name": "Logger",
          "package": "Holumbus-Searchengine",
          "partial": "Logger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Logger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Logger",
          "name": "debugC",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e [String] -\u003e m ()",
          "source": "src/Holumbus-Crawler-Logger.html#noticeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Logger",
          "module": "Holumbus.Crawler.Logger",
          "name": "debugC",
          "normalized": "String-\u003e[String]-\u003ea()",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003e[String]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Logger.html#v:debugC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Logger",
          "name": "errC",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e [String] -\u003e m ()",
          "source": "src/Holumbus-Crawler-Logger.html#noticeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Logger",
          "module": "Holumbus.Crawler.Logger",
          "name": "errC",
          "normalized": "String-\u003e[String]-\u003ea()",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003e[String]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Logger.html#v:errC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Logger",
          "name": "hxtLoggerName",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-Logger.html#hxtLoggerName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Logger",
          "module": "Holumbus.Crawler.Logger",
          "name": "hxtLoggerName",
          "package": "Holumbus-Searchengine",
          "partial": "Logger Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Logger.html#v:hxtLoggerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Logger",
          "name": "hxtSetErrorLog",
          "package": "Holumbus-Searchengine",
          "signature": "IOStateArrow s b b",
          "source": "src/Holumbus-Crawler-Logger.html#hxtSetErrorLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Logger",
          "module": "Holumbus.Crawler.Logger",
          "name": "hxtSetErrorLog",
          "package": "Holumbus-Searchengine",
          "partial": "Set Error Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Logger.html#v:hxtSetErrorLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Logger",
          "name": "hxtSetLogLevel",
          "package": "Holumbus-Searchengine",
          "signature": "Priority -\u003e IOStateArrow s b b",
          "source": "src/Holumbus-Crawler-Logger.html#hxtSetLogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Logger",
          "module": "Holumbus.Crawler.Logger",
          "name": "hxtSetLogLevel",
          "normalized": "Priority-\u003eIOStateArrow a b b",
          "package": "Holumbus-Searchengine",
          "partial": "Set Log Level",
          "signature": "Priority-\u003eIOStateArrow s b b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Logger.html#v:hxtSetLogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Logger",
          "name": "hxtSetTraceAndErrorLogger",
          "package": "Holumbus-Searchengine",
          "signature": "Priority -\u003e IOStateArrow s b b",
          "source": "src/Holumbus-Crawler-Logger.html#hxtSetTraceAndErrorLogger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Logger",
          "module": "Holumbus.Crawler.Logger",
          "name": "hxtSetTraceAndErrorLogger",
          "normalized": "Priority-\u003eIOStateArrow a b b",
          "package": "Holumbus-Searchengine",
          "partial": "Set Trace And Error Logger",
          "signature": "Priority-\u003eIOStateArrow s b b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Logger.html#v:hxtSetTraceAndErrorLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Logger",
          "name": "infoC",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e [String] -\u003e m ()",
          "source": "src/Holumbus-Crawler-Logger.html#noticeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Logger",
          "module": "Holumbus.Crawler.Logger",
          "name": "infoC",
          "normalized": "String-\u003e[String]-\u003ea()",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003e[String]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Logger.html#v:infoC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet trace level in config\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Logger",
          "name": "logC",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e Priority -\u003e [String] -\u003e m ()",
          "source": "src/Holumbus-Crawler-Logger.html#logC",
          "type": "function"
        },
        "index": {
          "description": "Set trace level in config",
          "hierarchy": "Holumbus Crawler Logger",
          "module": "Holumbus.Crawler.Logger",
          "name": "logC",
          "normalized": "String-\u003ePriority-\u003e[String]-\u003ea()",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003ePriority-\u003e[String]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Logger.html#v:logC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Logger",
          "name": "noticeC",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e [String] -\u003e m ()",
          "source": "src/Holumbus-Crawler-Logger.html#noticeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Logger",
          "module": "Holumbus.Crawler.Logger",
          "name": "noticeC",
          "normalized": "String-\u003e[String]-\u003ea()",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003e[String]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Logger.html#v:noticeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Logger",
          "name": "setLogLevel",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e Priority -\u003e m ()",
          "source": "src/Holumbus-Crawler-Logger.html#setLogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Logger",
          "module": "Holumbus.Crawler.Logger",
          "name": "setLogLevel",
          "normalized": "String-\u003ePriority-\u003ea()",
          "package": "Holumbus-Searchengine",
          "partial": "Log Level",
          "signature": "String-\u003ePriority-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Logger.html#v:setLogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Logger",
          "name": "warnC",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e [String] -\u003e m ()",
          "source": "src/Holumbus-Crawler-Logger.html#noticeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Logger",
          "module": "Holumbus.Crawler.Logger",
          "name": "warnC",
          "normalized": "String-\u003e[String]-\u003ea()",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003e[String]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Logger.html#v:warnC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.PdfToText",
          "name": "PdfToText",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-PdfToText.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler PdfToText",
          "module": "Holumbus.Crawler.PdfToText",
          "name": "PdfToText",
          "package": "Holumbus-Searchengine",
          "partial": "Pdf To Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-PdfToText.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.PdfToText",
          "name": "pdfResource",
          "package": "Holumbus-Searchengine",
          "signature": "MVar (FilePath, FilePath)",
          "source": "src/Holumbus-Crawler-PdfToText.html#pdfResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler PdfToText",
          "module": "Holumbus.Crawler.PdfToText",
          "name": "pdfResource",
          "normalized": "MVar(FilePath,FilePath)",
          "package": "Holumbus-Searchengine",
          "partial": "Resource",
          "signature": "MVar(FilePath,FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-PdfToText.html#v:pdfResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion of pdf data into plain text. The conversion is done\n by calling an external program \u003ccode\u003epdftotext\u003c/code\u003e (contained in linux packages \u003ccode\u003expdf\u003c/code\u003e).\n IO is done via the ByteString API.\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.PdfToText",
          "name": "pdfToText",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e IO String",
          "source": "src/Holumbus-Crawler-PdfToText.html#pdfToText",
          "type": "function"
        },
        "index": {
          "description": "Conversion of pdf data into plain text The conversion is done by calling an external program pdftotext contained in linux packages xpdf IO is done via the ByteString API",
          "hierarchy": "Holumbus Crawler PdfToText",
          "module": "Holumbus.Crawler.PdfToText",
          "name": "pdfToText",
          "normalized": "String-\u003eIO String",
          "package": "Holumbus-Searchengine",
          "partial": "To Text",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-PdfToText.html#v:pdfToText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.PdfToText",
          "name": "pdfToTextA",
          "package": "Holumbus-Searchengine",
          "signature": "IOSArrow String String",
          "source": "src/Holumbus-Crawler-PdfToText.html#pdfToTextA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler PdfToText",
          "module": "Holumbus.Crawler.PdfToText",
          "name": "pdfToTextA",
          "package": "Holumbus-Searchengine",
          "partial": "To Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-PdfToText.html#v:pdfToTextA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.PdfToText",
          "name": "pdfToTextBS",
          "package": "Holumbus-Searchengine",
          "signature": "ByteString -\u003e IO String",
          "source": "src/Holumbus-Crawler-PdfToText.html#pdfToTextBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler PdfToText",
          "module": "Holumbus.Crawler.PdfToText",
          "name": "pdfToTextBS",
          "normalized": "ByteString-\u003eIO String",
          "package": "Holumbus-Searchengine",
          "partial": "To Text BS",
          "signature": "ByteString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-PdfToText.html#v:pdfToTextBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.PdfToText",
          "name": "releasePdf",
          "package": "Holumbus-Searchengine",
          "signature": "(FilePath, FilePath) -\u003e IO ()",
          "source": "src/Holumbus-Crawler-PdfToText.html#releasePdf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler PdfToText",
          "module": "Holumbus.Crawler.PdfToText",
          "name": "releasePdf",
          "normalized": "(FilePath,FilePath)-\u003eIO()",
          "package": "Holumbus-Searchengine",
          "partial": "Pdf",
          "signature": "(FilePath,FilePath)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-PdfToText.html#v:releasePdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.PdfToText",
          "name": "requestPdf",
          "package": "Holumbus-Searchengine",
          "signature": "IO (FilePath, FilePath)",
          "source": "src/Holumbus-Crawler-PdfToText.html#requestPdf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler PdfToText",
          "module": "Holumbus.Crawler.PdfToText",
          "name": "requestPdf",
          "normalized": "IO(FilePath,FilePath)",
          "package": "Holumbus-Searchengine",
          "partial": "Pdf",
          "signature": "IO(FilePath,FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-PdfToText.html#v:requestPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "RobotTypes",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-RobotTypes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "RobotTypes",
          "package": "Holumbus-Searchengine",
          "partial": "Robot Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "AddRobotsAction",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-RobotTypes.html#AddRobotsAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "AddRobotsAction",
          "package": "Holumbus-Searchengine",
          "partial": "Add Robots Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#t:AddRobotsAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "RobotAction",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-RobotTypes.html#RobotAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "RobotAction",
          "package": "Holumbus-Searchengine",
          "partial": "Robot Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#t:RobotAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "RobotRestriction",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-RobotTypes.html#RobotRestriction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "RobotRestriction",
          "package": "Holumbus-Searchengine",
          "partial": "Robot Restriction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#t:RobotRestriction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "RobotSpec",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-RobotTypes.html#RobotSpec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "RobotSpec",
          "package": "Holumbus-Searchengine",
          "partial": "Robot Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#t:RobotSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "Robots",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-RobotTypes.html#Robots",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "Robots",
          "package": "Holumbus-Searchengine",
          "partial": "Robots",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#t:Robots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "Allow",
          "package": "Holumbus-Searchengine",
          "signature": "Allow",
          "source": "src/Holumbus-Crawler-RobotTypes.html#RobotAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "Allow",
          "package": "Holumbus-Searchengine",
          "partial": "Allow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#v:Allow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "Disallow",
          "package": "Holumbus-Searchengine",
          "signature": "Disallow",
          "source": "src/Holumbus-Crawler-RobotTypes.html#RobotAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "Disallow",
          "package": "Holumbus-Searchengine",
          "partial": "Disallow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#v:Disallow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "emptyRobots",
          "package": "Holumbus-Searchengine",
          "signature": "Robots",
          "source": "src/Holumbus-Crawler-RobotTypes.html#emptyRobots",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "emptyRobots",
          "package": "Holumbus-Searchengine",
          "partial": "Robots",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#v:emptyRobots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "robotsExtend",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e AddRobotsAction",
          "source": "src/Holumbus-Crawler-RobotTypes.html#robotsExtend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "robotsExtend",
          "normalized": "String-\u003eAddRobotsAction",
          "package": "Holumbus-Searchengine",
          "partial": "Extend",
          "signature": "String-\u003eAddRobotsAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#v:robotsExtend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "robotsFollow",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e Robots -\u003e Bool",
          "source": "src/Holumbus-Crawler-RobotTypes.html#robotsFollow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "robotsFollow",
          "normalized": "URI-\u003eRobots-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Follow",
          "signature": "URI-\u003eRobots-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#v:robotsFollow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "robotsIndex",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e Robots -\u003e Bool",
          "source": "src/Holumbus-Crawler-RobotTypes.html#robotsIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "robotsIndex",
          "normalized": "URI-\u003eRobots-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Index",
          "signature": "URI-\u003eRobots-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#v:robotsIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "robotsNo",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e LA XmlTree XmlTree",
          "source": "src/Holumbus-Crawler-RobotTypes.html#robotsNo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "robotsNo",
          "normalized": "String-\u003eLA XmlTree XmlTree",
          "package": "Holumbus-Searchengine",
          "partial": "No",
          "signature": "String-\u003eLA XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#v:robotsNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erobots no follow filter. This filter checks HTML documents\n for a \u003cmeta name=\"robots\" content=\"nofollow\"\u003e in the head of the document\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "robotsNoFollow",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree XmlTree",
          "source": "src/Holumbus-Crawler-RobotTypes.html#robotsNoFollow",
          "type": "function"
        },
        "index": {
          "description": "robots no follow filter This filter checks HTML documents for meta name robots content nofollow in the head of the document",
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "robotsNoFollow",
          "package": "Holumbus-Searchengine",
          "partial": "No Follow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#v:robotsNoFollow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erobots no index filter. This filter checks HTML documents\n for a \u003cmeta name=\"robots\" content=\"noindex\"\u003e in the head of the document\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "robotsNoIndex",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree XmlTree",
          "source": "src/Holumbus-Crawler-RobotTypes.html#robotsNoIndex",
          "type": "function"
        },
        "index": {
          "description": "robots no index filter This filter checks HTML documents for meta name robots content noindex in the head of the document",
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "robotsNoIndex",
          "package": "Holumbus-Searchengine",
          "partial": "No Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#v:robotsNoIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "xpRobotRestriction",
          "package": "Holumbus-Searchengine",
          "signature": "PU RobotRestriction",
          "source": "src/Holumbus-Crawler-RobotTypes.html#xpRobotRestriction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "xpRobotRestriction",
          "package": "Holumbus-Searchengine",
          "partial": "Robot Restriction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#v:xpRobotRestriction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "xpRobots",
          "package": "Holumbus-Searchengine",
          "signature": "PU Robots",
          "source": "src/Holumbus-Crawler-RobotTypes.html#xpRobots",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler RobotTypes",
          "module": "Holumbus.Crawler.RobotTypes",
          "name": "xpRobots",
          "package": "Holumbus-Searchengine",
          "partial": "Robots",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-RobotTypes.html#v:xpRobots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Robots",
          "name": "Robots",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Robots.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Robots",
          "module": "Holumbus.Crawler.Robots",
          "name": "Robots",
          "package": "Holumbus-Searchengine",
          "partial": "Robots",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Robots.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisable the evaluation of robots.txt\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Robots",
          "name": "disableRobotsTxt",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerConfig a r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Robots.html#disableRobotsTxt",
          "type": "function"
        },
        "index": {
          "description": "Disable the evaluation of robots.txt",
          "hierarchy": "Holumbus Crawler Robots",
          "module": "Holumbus.Crawler.Robots",
          "name": "disableRobotsTxt",
          "normalized": "CrawlerConfig a b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Robots Txt",
          "signature": "CrawlerConfig a r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Robots.html#v:disableRobotsTxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable the evaluation of robots.txt\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Robots",
          "name": "enableRobotsTxt",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerConfig a r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Robots.html#enableRobotsTxt",
          "type": "function"
        },
        "index": {
          "description": "Enable the evaluation of robots.txt",
          "hierarchy": "Holumbus Crawler Robots",
          "module": "Holumbus.Crawler.Robots",
          "name": "enableRobotsTxt",
          "normalized": "CrawlerConfig a b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Robots Txt",
          "signature": "CrawlerConfig a r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Robots.html#v:enableRobotsTxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the robots.txt, select the crawler specific parts and build a robots restriction value\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Robots",
          "name": "evalRobotsTxt",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e String -\u003e RobotRestriction",
          "source": "src/Holumbus-Crawler-Robots.html#evalRobotsTxt",
          "type": "function"
        },
        "index": {
          "description": "Parse the robots.txt select the crawler specific parts and build robots restriction value",
          "hierarchy": "Holumbus Crawler Robots",
          "module": "Holumbus.Crawler.Robots",
          "name": "evalRobotsTxt",
          "normalized": "String-\u003eString-\u003eRobotRestriction",
          "package": "Holumbus-Searchengine",
          "partial": "Robots Txt",
          "signature": "String-\u003eString-\u003eRobotRestriction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Robots.html#v:evalRobotsTxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the protocol-host-port part of an URI\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Robots",
          "name": "getHost",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e URI",
          "source": "src/Holumbus-Crawler-Robots.html#getHost",
          "type": "function"
        },
        "index": {
          "description": "Get the protocol-host-port part of an URI",
          "hierarchy": "Holumbus Crawler Robots",
          "module": "Holumbus.Crawler.Robots",
          "name": "getHost",
          "normalized": "URI-\u003eURI",
          "package": "Holumbus-Searchengine",
          "partial": "Host",
          "signature": "URI-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Robots.html#v:getHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to get the robots.txt file for a given host.\n If it's not there or any errors occur during access, the empty string is returned\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Robots",
          "name": "getRobotsTxt",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerConfig c r -\u003e URI -\u003e IO String",
          "source": "src/Holumbus-Crawler-Robots.html#getRobotsTxt",
          "type": "function"
        },
        "index": {
          "description": "Try to get the robots.txt file for given host If it not there or any errors occur during access the empty string is returned",
          "hierarchy": "Holumbus Crawler Robots",
          "module": "Holumbus.Crawler.Robots",
          "name": "getRobotsTxt",
          "normalized": "CrawlerConfig a b-\u003eURI-\u003eIO String",
          "package": "Holumbus-Searchengine",
          "partial": "Robots Txt",
          "signature": "CrawlerConfig c r-\u003eURI-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Robots.html#v:getRobotsTxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Robots",
          "name": "getURIPart",
          "package": "Holumbus-Searchengine",
          "signature": "(URI -\u003e String) -\u003e URI -\u003e String",
          "source": "src/Holumbus-Crawler-Robots.html#getURIPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Robots",
          "module": "Holumbus.Crawler.Robots",
          "name": "getURIPart",
          "normalized": "(URI-\u003eString)-\u003eURI-\u003eString",
          "package": "Holumbus-Searchengine",
          "partial": "URIPart",
          "signature": "(URI-\u003eString)-\u003eURI-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Robots.html#v:getURIPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Robots",
          "name": "isRobotsScheme",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e Bool",
          "source": "src/Holumbus-Crawler-Robots.html#isRobotsScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Robots",
          "module": "Holumbus.Crawler.Robots",
          "name": "isRobotsScheme",
          "normalized": "URI-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Robots Scheme",
          "signature": "URI-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Robots.html#v:isRobotsScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a robots.txt description for a given URI, if it's not already there.\n The 1. main function of this module\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Robots",
          "name": "robotsAddHost",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerConfig a r -\u003e AddRobotsAction",
          "source": "src/Holumbus-Crawler-Robots.html#robotsAddHost",
          "type": "function"
        },
        "index": {
          "description": "Add robots.txt description for given URI if it not already there The main function of this module",
          "hierarchy": "Holumbus Crawler Robots",
          "module": "Holumbus.Crawler.Robots",
          "name": "robotsAddHost",
          "normalized": "CrawlerConfig a b-\u003eAddRobotsAction",
          "package": "Holumbus-Searchengine",
          "partial": "Add Host",
          "signature": "CrawlerConfig a r-\u003eAddRobotsAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Robots.html#v:robotsAddHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a robot is not allowed to access a page.\n The 2. main function of this module\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Robots",
          "name": "robotsDisallow",
          "package": "Holumbus-Searchengine",
          "signature": "Robots -\u003e URI -\u003e Bool",
          "source": "src/Holumbus-Crawler-Robots.html#robotsDisallow",
          "type": "function"
        },
        "index": {
          "description": "Check whether robot is not allowed to access page The main function of this module",
          "hierarchy": "Holumbus Crawler Robots",
          "module": "Holumbus.Crawler.Robots",
          "name": "robotsDisallow",
          "normalized": "Robots-\u003eURI-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Disallow",
          "signature": "Robots-\u003eURI-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Robots.html#v:robotsDisallow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Robots",
          "name": "robotsDontAddHost",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerConfig a r -\u003e AddRobotsAction",
          "source": "src/Holumbus-Crawler-Robots.html#robotsDontAddHost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Robots",
          "module": "Holumbus.Crawler.Robots",
          "name": "robotsDontAddHost",
          "normalized": "CrawlerConfig a b-\u003eAddRobotsAction",
          "package": "Holumbus-Searchengine",
          "partial": "Dont Add Host",
          "signature": "CrawlerConfig a r-\u003eAddRobotsAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Robots.html#v:robotsDontAddHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess, parse and evaluate a robots.txt file for a given URI\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Robots",
          "name": "robotsGetSpec",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerConfig a r -\u003e URI -\u003e IO (URI, RobotRestriction)",
          "source": "src/Holumbus-Crawler-Robots.html#robotsGetSpec",
          "type": "function"
        },
        "index": {
          "description": "Access parse and evaluate robots.txt file for given URI",
          "hierarchy": "Holumbus Crawler Robots",
          "module": "Holumbus.Crawler.Robots",
          "name": "robotsGetSpec",
          "normalized": "CrawlerConfig a b-\u003eURI-\u003eIO(URI,RobotRestriction)",
          "package": "Holumbus-Searchengine",
          "partial": "Get Spec",
          "signature": "CrawlerConfig a r-\u003eURI-\u003eIO(URI,RobotRestriction)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Robots.html#v:robotsGetSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "Types",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "Types",
          "package": "Holumbus-Searchengine",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action to combine the result of a single document with the accumulator for the overall crawler result.\n This combining function runs in the IO monad to enable storing parts of the result externally\n but it is not a CrawlerAction, else parallel crawling with forkIO is not longer applicable\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "AccumulateDocResult",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Types.html#AccumulateDocResult",
          "type": "type"
        },
        "index": {
          "description": "The action to combine the result of single document with the accumulator for the overall crawler result This combining function runs in the IO monad to enable storing parts of the result externally but it is not CrawlerAction else parallel crawling with forkIO is not longer applicable",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "AccumulateDocResult",
          "package": "Holumbus-Searchengine",
          "partial": "Accumulate Doc Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#t:AccumulateDocResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe crawler action monad\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "CrawlerAction",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerAction",
          "type": "type"
        },
        "index": {
          "description": "The crawler action monad",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "CrawlerAction",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#t:CrawlerAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe crawler configuration record\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "CrawlerConfig",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "data"
        },
        "index": {
          "description": "The crawler configuration record",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "CrawlerConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#t:CrawlerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe crawler state record\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "CrawlerState",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerState",
          "type": "data"
        },
        "index": {
          "description": "The crawler state record",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "CrawlerState",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#t:CrawlerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe folding operator for merging partial results when working with mapFold and parallel crawling\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "MergeDocResults",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Types.html#MergeDocResults",
          "type": "type"
        },
        "index": {
          "description": "The folding operator for merging partial results when working with mapFold and parallel crawling",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "MergeDocResults",
          "package": "Holumbus-Searchengine",
          "partial": "Merge Doc Results",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#t:MergeDocResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe extractor function for a single document\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "ProcessDocument",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Types.html#ProcessDocument",
          "type": "type"
        },
        "index": {
          "description": "The extractor function for single document",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "ProcessDocument",
          "package": "Holumbus-Searchengine",
          "partial": "Process Document",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#t:ProcessDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe operator for saving intermediate results\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "SavePartialResults",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Types.html#SavePartialResults",
          "type": "type"
        },
        "index": {
          "description": "The operator for saving intermediate results",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "SavePartialResults",
          "package": "Holumbus-Searchengine",
          "partial": "Save Partial Results",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#t:SavePartialResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "CrawlerConfig",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerConfig",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "CrawlerConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:CrawlerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "CrawlerState",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerState",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "CrawlerState",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:CrawlerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a robots no follow filter before thePreRefsFilter\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "addRobotsNoFollow",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerConfig a r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Types.html#addRobotsNoFollow",
          "type": "function"
        },
        "index": {
          "description": "Insert robots no follow filter before thePreRefsFilter",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "addRobotsNoFollow",
          "normalized": "CrawlerConfig a b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Robots No Follow",
          "signature": "CrawlerConfig a r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:addRobotsNoFollow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a robots no follow filter before thePreRefsFilter\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "addRobotsNoIndex",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerConfig a r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Types.html#addRobotsNoIndex",
          "type": "function"
        },
        "index": {
          "description": "Insert robots no follow filter before thePreRefsFilter",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "addRobotsNoIndex",
          "normalized": "CrawlerConfig a b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Robots No Index",
          "signature": "CrawlerConfig a r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:addRobotsNoIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd attributes for accessing documents\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "addSysConfig",
          "package": "Holumbus-Searchengine",
          "signature": "SysConfig -\u003e CrawlerConfig a r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Types.html#addSysConfig",
          "type": "function"
        },
        "index": {
          "description": "Add attributes for accessing documents",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "addSysConfig",
          "normalized": "SysConfig-\u003eCrawlerConfig a b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Sys Config",
          "signature": "SysConfig-\u003eCrawlerConfig a r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:addSysConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_accumulate",
          "package": "Holumbus-Searchengine",
          "signature": "AccumulateDocResult a r",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_accumulate",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_accumulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_addRobotsTxt",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerConfig a r -\u003e AddRobotsAction",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_addRobotsTxt",
          "normalized": "CrawlerConfig a b-\u003eAddRobotsAction",
          "package": "Holumbus-Searchengine",
          "partial": "Robots Txt",
          "signature": "CrawlerConfig a r-\u003eAddRobotsAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_addRobotsTxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_clickLevel",
          "package": "Holumbus-Searchengine",
          "signature": "Int",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_clickLevel",
          "package": "Holumbus-Searchengine",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_clickLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_fold",
          "package": "Holumbus-Searchengine",
          "signature": "MergeDocResults r",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_fold",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_followRef",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e Bool",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_followRef",
          "normalized": "URI-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Ref",
          "signature": "URI-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_followRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_maxNoOfDocs",
          "package": "Holumbus-Searchengine",
          "signature": "Int",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_maxNoOfDocs",
          "package": "Holumbus-Searchengine",
          "partial": "No Of Docs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_maxNoOfDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_maxParDocs",
          "package": "Holumbus-Searchengine",
          "signature": "Int",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_maxParDocs",
          "package": "Holumbus-Searchengine",
          "partial": "Par Docs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_maxParDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_maxParThreads",
          "package": "Holumbus-Searchengine",
          "signature": "Int",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_maxParThreads",
          "package": "Holumbus-Searchengine",
          "partial": "Par Threads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_maxParThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_preDocFilter",
          "package": "Holumbus-Searchengine",
          "signature": "IOSArrow XmlTree XmlTree",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_preDocFilter",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_preDocFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_preRefsFilter",
          "package": "Holumbus-Searchengine",
          "signature": "IOSArrow XmlTree XmlTree",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_preRefsFilter",
          "package": "Holumbus-Searchengine",
          "partial": "Refs Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_preRefsFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_processDoc",
          "package": "Holumbus-Searchengine",
          "signature": "ProcessDocument a",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_processDoc",
          "package": "Holumbus-Searchengine",
          "partial": "Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_processDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_processRefs",
          "package": "Holumbus-Searchengine",
          "signature": "IOSArrow XmlTree URI",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_processRefs",
          "package": "Holumbus-Searchengine",
          "partial": "Refs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_processRefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_saveIntervall",
          "package": "Holumbus-Searchengine",
          "signature": "Int",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_saveIntervall",
          "package": "Holumbus-Searchengine",
          "partial": "Intervall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_saveIntervall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_savePathPrefix",
          "package": "Holumbus-Searchengine",
          "signature": "String",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_savePathPrefix",
          "package": "Holumbus-Searchengine",
          "partial": "Path Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_savePathPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_savePreAction",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_savePreAction",
          "normalized": "FilePath-\u003eCrawlerAction a b()",
          "package": "Holumbus-Searchengine",
          "partial": "Pre Action",
          "signature": "FilePath-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_savePreAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_sysConfig",
          "package": "Holumbus-Searchengine",
          "signature": "SysConfig",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_sysConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_sysConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_traceLevel",
          "package": "Holumbus-Searchengine",
          "signature": "Priority",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_traceLevel",
          "package": "Holumbus-Searchengine",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_traceLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cc_traceLevelHxt",
          "package": "Holumbus-Searchengine",
          "signature": "Priority",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cc_traceLevelHxt",
          "package": "Holumbus-Searchengine",
          "partial": "Level Hxt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cc_traceLevelHxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cs_alreadyProcessed",
          "package": "Holumbus-Searchengine",
          "signature": "URIs",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cs_alreadyProcessed",
          "package": "Holumbus-Searchengine",
          "partial": "Processed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cs_alreadyProcessed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cs_listOfDocsSaved",
          "package": "Holumbus-Searchengine",
          "signature": "[Int]",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cs_listOfDocsSaved",
          "normalized": "[Int]",
          "package": "Holumbus-Searchengine",
          "partial": "Of Docs Saved",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cs_listOfDocsSaved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cs_noOfDocs",
          "package": "Holumbus-Searchengine",
          "signature": "Int",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cs_noOfDocs",
          "package": "Holumbus-Searchengine",
          "partial": "Of Docs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cs_noOfDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cs_noOfDocsSaved",
          "package": "Holumbus-Searchengine",
          "signature": "Int",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cs_noOfDocsSaved",
          "package": "Holumbus-Searchengine",
          "partial": "Of Docs Saved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cs_noOfDocsSaved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cs_resultAccu",
          "package": "Holumbus-Searchengine",
          "signature": "r",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cs_resultAccu",
          "package": "Holumbus-Searchengine",
          "partial": "Accu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cs_resultAccu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cs_resultInit",
          "package": "Holumbus-Searchengine",
          "signature": "r",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cs_resultInit",
          "package": "Holumbus-Searchengine",
          "partial": "Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cs_resultInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cs_robots",
          "package": "Holumbus-Searchengine",
          "signature": "Robots",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cs_robots",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cs_robots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "cs_toBeProcessed",
          "package": "Holumbus-Searchengine",
          "signature": "URIsWithLevel",
          "source": "src/Holumbus-Crawler-Types.html#CrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "cs_toBeProcessed",
          "package": "Holumbus-Searchengine",
          "partial": "Be Processed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:cs_toBeProcessed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "defaultCrawlerConfig",
          "package": "Holumbus-Searchengine",
          "signature": "AccumulateDocResult a r -\u003e MergeDocResults r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Types.html#defaultCrawlerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "defaultCrawlerConfig",
          "normalized": "AccumulateDocResult a b-\u003eMergeDocResults b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Config",
          "signature": "AccumulateDocResult a r-\u003eMergeDocResults r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:defaultCrawlerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a component from the crawler configuration\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "getConf",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) v -\u003e CrawlerAction a r v",
          "source": "src/Holumbus-Crawler-Types.html#getConf",
          "type": "function"
        },
        "index": {
          "description": "Load component from the crawler configuration",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "getConf",
          "normalized": "Selector(CrawlerConfig a b)c-\u003eCrawlerAction a b c",
          "package": "Holumbus-Searchengine",
          "partial": "Conf",
          "signature": "Selector(CrawlerConfig a r)v-\u003eCrawlerAction a r v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:getConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "getCrawlerState",
          "package": "Holumbus-Searchengine",
          "signature": "Get (CrawlerState r)",
          "source": "src/Holumbus-Crawler-Types.html#getCrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "getCrawlerState",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:getCrawlerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "getState",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerState r) v -\u003e CrawlerAction a r v",
          "source": "src/Holumbus-Crawler-Types.html#getState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "getState",
          "normalized": "Selector(CrawlerState a)b-\u003eCrawlerAction c a b",
          "package": "Holumbus-Searchengine",
          "partial": "State",
          "signature": "Selector(CrawlerState r)v-\u003eCrawlerAction a r v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:getState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "initCrawlerState",
          "package": "Holumbus-Searchengine",
          "signature": "r -\u003e CrawlerState r",
          "source": "src/Holumbus-Crawler-Types.html#initCrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "initCrawlerState",
          "normalized": "a-\u003eCrawlerState a",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler State",
          "signature": "r-\u003eCrawlerState r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:initCrawlerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "modifyState",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerState r) v -\u003e (v -\u003e v) -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Types.html#modifyState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "modifyState",
          "normalized": "Selector(CrawlerState a)b-\u003e(b-\u003eb)-\u003eCrawlerAction c a()",
          "package": "Holumbus-Searchengine",
          "partial": "State",
          "signature": "Selector(CrawlerState r)v-\u003e(v-\u003ev)-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:modifyState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "modifyStateIO",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerState r) v -\u003e (v -\u003e IO v) -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Types.html#modifyStateIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "modifyStateIO",
          "normalized": "Selector(CrawlerState a)b-\u003e(b-\u003eIO b)-\u003eCrawlerAction c a()",
          "package": "Holumbus-Searchengine",
          "partial": "State IO",
          "signature": "Selector(CrawlerState r)v-\u003e(v-\u003eIO v)-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:modifyStateIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "putCrawlerState",
          "package": "Holumbus-Searchengine",
          "signature": "CrawlerState r -\u003e Put",
          "source": "src/Holumbus-Crawler-Types.html#putCrawlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "putCrawlerState",
          "normalized": "CrawlerState a-\u003ePut",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler State",
          "signature": "CrawlerState r-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:putCrawlerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "putState",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerState r) v -\u003e v -\u003e CrawlerAction a r ()",
          "source": "src/Holumbus-Crawler-Types.html#putState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "putState",
          "normalized": "Selector(CrawlerState a)b-\u003eb-\u003eCrawlerAction c a()",
          "package": "Holumbus-Searchengine",
          "partial": "State",
          "signature": "Selector(CrawlerState r)v-\u003ev-\u003eCrawlerAction a r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:putState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet max # of steps (clicks) to reach a document\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "setCrawlerClickLevel",
          "package": "Holumbus-Searchengine",
          "signature": "Int -\u003e CrawlerConfig a r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Types.html#setCrawlerClickLevel",
          "type": "function"
        },
        "index": {
          "description": "Set max of steps clicks to reach document",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "setCrawlerClickLevel",
          "normalized": "Int-\u003eCrawlerConfig a b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Click Level",
          "signature": "Int-\u003eCrawlerConfig a r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:setCrawlerClickLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet max # of documents to be crawled\n and max # of documents crawled in parallel\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "setCrawlerMaxDocs",
          "package": "Holumbus-Searchengine",
          "signature": "Int -\u003e Int -\u003e Int -\u003e CrawlerConfig a r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Types.html#setCrawlerMaxDocs",
          "type": "function"
        },
        "index": {
          "description": "Set max of documents to be crawled and max of documents crawled in parallel",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "setCrawlerMaxDocs",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eCrawlerConfig a b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Max Docs",
          "signature": "Int-\u003eInt-\u003eInt-\u003eCrawlerConfig a r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:setCrawlerMaxDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the pre hook filter executed before the hrefs are collected\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "setCrawlerPreRefsFilter",
          "package": "Holumbus-Searchengine",
          "signature": "IOSArrow XmlTree XmlTree -\u003e CrawlerConfig a r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Types.html#setCrawlerPreRefsFilter",
          "type": "function"
        },
        "index": {
          "description": "Set the pre hook filter executed before the hrefs are collected",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "setCrawlerPreRefsFilter",
          "normalized": "IOSArrow XmlTree XmlTree-\u003eCrawlerConfig a b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Pre Refs Filter",
          "signature": "IOSArrow XmlTree XmlTree-\u003eCrawlerConfig a r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:setCrawlerPreRefsFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet action performed before saving crawler state\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "setCrawlerSaveAction",
          "package": "Holumbus-Searchengine",
          "signature": "(FilePath -\u003e CrawlerAction a r ()) -\u003e CrawlerConfig a r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Types.html#setCrawlerSaveAction",
          "type": "function"
        },
        "index": {
          "description": "Set action performed before saving crawler state",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "setCrawlerSaveAction",
          "normalized": "(FilePath-\u003eCrawlerAction a b())-\u003eCrawlerConfig a b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Save Action",
          "signature": "(FilePath-\u003eCrawlerAction a r())-\u003eCrawlerConfig a r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:setCrawlerSaveAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet save intervall in config\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "setCrawlerSaveConf",
          "package": "Holumbus-Searchengine",
          "signature": "Int -\u003e String -\u003e CrawlerConfig a r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Types.html#setCrawlerSaveConf",
          "type": "function"
        },
        "index": {
          "description": "Set save intervall in config",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "setCrawlerSaveConf",
          "normalized": "Int-\u003eString-\u003eCrawlerConfig a b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Save Conf",
          "signature": "Int-\u003eString-\u003eCrawlerConfig a r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:setCrawlerSaveConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the log level\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "setCrawlerTraceLevel",
          "package": "Holumbus-Searchengine",
          "signature": "Priority -\u003e Priority -\u003e CrawlerConfig a r -\u003e CrawlerConfig a r",
          "source": "src/Holumbus-Crawler-Types.html#setCrawlerTraceLevel",
          "type": "function"
        },
        "index": {
          "description": "Set the log level",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "setCrawlerTraceLevel",
          "normalized": "Priority-\u003ePriority-\u003eCrawlerConfig a b-\u003eCrawlerConfig a b",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Trace Level",
          "signature": "Priority-\u003ePriority-\u003eCrawlerConfig a r-\u003eCrawlerConfig a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:setCrawlerTraceLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theAccumulateOp",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) (AccumulateDocResult a r)",
          "source": "src/Holumbus-Crawler-Types.html#theAccumulateOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theAccumulateOp",
          "package": "Holumbus-Searchengine",
          "partial": "Accumulate Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theAccumulateOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theAddRobotsAction",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) (CrawlerConfig a r -\u003e AddRobotsAction)",
          "source": "src/Holumbus-Crawler-Types.html#theAddRobotsAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theAddRobotsAction",
          "normalized": "Selector(CrawlerConfig a b)(CrawlerConfig a b-\u003eAddRobotsAction)",
          "package": "Holumbus-Searchengine",
          "partial": "Add Robots Action",
          "signature": "Selector(CrawlerConfig a r)(CrawlerConfig a r-\u003eAddRobotsAction)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theAddRobotsAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theAlreadyProcessed",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerState r) URIs",
          "source": "src/Holumbus-Crawler-Types.html#theAlreadyProcessed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theAlreadyProcessed",
          "package": "Holumbus-Searchengine",
          "partial": "Already Processed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theAlreadyProcessed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theClickLevel",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) Int",
          "source": "src/Holumbus-Crawler-Types.html#theClickLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theClickLevel",
          "package": "Holumbus-Searchengine",
          "partial": "Click Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theClickLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theConnectTimeout",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) Int",
          "source": "src/Holumbus-Crawler-Types.html#theConnectTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theConnectTimeout",
          "package": "Holumbus-Searchengine",
          "partial": "Connect Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theConnectTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theCrawlerName",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) String",
          "source": "src/Holumbus-Crawler-Types.html#theCrawlerName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theCrawlerName",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theCrawlerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theFoldOp",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) (MergeDocResults r)",
          "source": "src/Holumbus-Crawler-Types.html#theFoldOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theFoldOp",
          "package": "Holumbus-Searchengine",
          "partial": "Fold Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theFoldOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theFollowRef",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) (URI -\u003e Bool)",
          "source": "src/Holumbus-Crawler-Types.html#theFollowRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theFollowRef",
          "normalized": "Selector(CrawlerConfig a b)(URI-\u003eBool)",
          "package": "Holumbus-Searchengine",
          "partial": "Follow Ref",
          "signature": "Selector(CrawlerConfig a r)(URI-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theFollowRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theInputOptions",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) Attributes",
          "source": "src/Holumbus-Crawler-Types.html#theInputOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theInputOptions",
          "package": "Holumbus-Searchengine",
          "partial": "Input Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theInputOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theListOfDocsSaved",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerState r) [Int]",
          "source": "src/Holumbus-Crawler-Types.html#theListOfDocsSaved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theListOfDocsSaved",
          "normalized": "Selector(CrawlerState a)[Int]",
          "package": "Holumbus-Searchengine",
          "partial": "List Of Docs Saved",
          "signature": "Selector(CrawlerState r)[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theListOfDocsSaved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theMaxNoOfDocs",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) Int",
          "source": "src/Holumbus-Crawler-Types.html#theMaxNoOfDocs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theMaxNoOfDocs",
          "package": "Holumbus-Searchengine",
          "partial": "Max No Of Docs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theMaxNoOfDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theMaxParDocs",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) Int",
          "source": "src/Holumbus-Crawler-Types.html#theMaxParDocs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theMaxParDocs",
          "package": "Holumbus-Searchengine",
          "partial": "Max Par Docs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theMaxParDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theMaxParThreads",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) Int",
          "source": "src/Holumbus-Crawler-Types.html#theMaxParThreads",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theMaxParThreads",
          "package": "Holumbus-Searchengine",
          "partial": "Max Par Threads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theMaxParThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theMaxTime",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) Int",
          "source": "src/Holumbus-Crawler-Types.html#theMaxTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theMaxTime",
          "package": "Holumbus-Searchengine",
          "partial": "Max Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theMaxTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theNoOfDocs",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerState r) Int",
          "source": "src/Holumbus-Crawler-Types.html#theNoOfDocs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theNoOfDocs",
          "package": "Holumbus-Searchengine",
          "partial": "No Of Docs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theNoOfDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theNoOfDocsSaved",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerState r) Int",
          "source": "src/Holumbus-Crawler-Types.html#theNoOfDocsSaved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theNoOfDocsSaved",
          "package": "Holumbus-Searchengine",
          "partial": "No Of Docs Saved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theNoOfDocsSaved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "thePreDocFilter",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) (IOSArrow XmlTree XmlTree)",
          "source": "src/Holumbus-Crawler-Types.html#thePreDocFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "thePreDocFilter",
          "package": "Holumbus-Searchengine",
          "partial": "Pre Doc Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:thePreDocFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "thePreRefsFilter",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) (IOSArrow XmlTree XmlTree)",
          "source": "src/Holumbus-Crawler-Types.html#thePreRefsFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "thePreRefsFilter",
          "package": "Holumbus-Searchengine",
          "partial": "Pre Refs Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:thePreRefsFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theProcessDoc",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) (IOSArrow XmlTree a)",
          "source": "src/Holumbus-Crawler-Types.html#theProcessDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theProcessDoc",
          "package": "Holumbus-Searchengine",
          "partial": "Process Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theProcessDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theProcessRefs",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) (IOSArrow XmlTree URI)",
          "source": "src/Holumbus-Crawler-Types.html#theProcessRefs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theProcessRefs",
          "package": "Holumbus-Searchengine",
          "partial": "Process Refs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theProcessRefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theResultAccu",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerState r) r",
          "source": "src/Holumbus-Crawler-Types.html#theResultAccu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theResultAccu",
          "package": "Holumbus-Searchengine",
          "partial": "Result Accu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theResultAccu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theResultInit",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerState r) r",
          "source": "src/Holumbus-Crawler-Types.html#theResultInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theResultInit",
          "package": "Holumbus-Searchengine",
          "partial": "Result Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theResultInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theRobots",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerState r) Robots",
          "source": "src/Holumbus-Crawler-Types.html#theRobots",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theRobots",
          "package": "Holumbus-Searchengine",
          "partial": "Robots",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theRobots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theSaveIntervall",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) Int",
          "source": "src/Holumbus-Crawler-Types.html#theSaveIntervall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theSaveIntervall",
          "package": "Holumbus-Searchengine",
          "partial": "Save Intervall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theSaveIntervall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theSavePathPrefix",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) String",
          "source": "src/Holumbus-Crawler-Types.html#theSavePathPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theSavePathPrefix",
          "package": "Holumbus-Searchengine",
          "partial": "Save Path Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theSavePathPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theSavePreAction",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) (FilePath -\u003e CrawlerAction a r ())",
          "source": "src/Holumbus-Crawler-Types.html#theSavePreAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theSavePreAction",
          "normalized": "Selector(CrawlerConfig a b)(FilePath-\u003eCrawlerAction a b())",
          "package": "Holumbus-Searchengine",
          "partial": "Save Pre Action",
          "signature": "Selector(CrawlerConfig a r)(FilePath-\u003eCrawlerAction a r())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theSavePreAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselector functions for CrawlerConfig\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "theSysConfig",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) SysConfig",
          "source": "src/Holumbus-Crawler-Types.html#theSysConfig",
          "type": "function"
        },
        "index": {
          "description": "selector functions for CrawlerConfig",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theSysConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Sys Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theSysConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselector functions for CrawlerState\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Types",
          "name": "theToBeProcessed",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerState r) URIsWithLevel",
          "source": "src/Holumbus-Crawler-Types.html#theToBeProcessed",
          "type": "function"
        },
        "index": {
          "description": "selector functions for CrawlerState",
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theToBeProcessed",
          "package": "Holumbus-Searchengine",
          "partial": "To Be Processed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theToBeProcessed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theTraceLevel",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) Priority",
          "source": "src/Holumbus-Crawler-Types.html#theTraceLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theTraceLevel",
          "package": "Holumbus-Searchengine",
          "partial": "Trace Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theTraceLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Types",
          "name": "theTraceLevelHxt",
          "package": "Holumbus-Searchengine",
          "signature": "Selector (CrawlerConfig a r) Priority",
          "source": "src/Holumbus-Crawler-Types.html#theTraceLevelHxt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Types",
          "module": "Holumbus.Crawler.Types",
          "name": "theTraceLevelHxt",
          "package": "Holumbus-Searchengine",
          "partial": "Trace Level Hxt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Types.html#v:theTraceLevelHxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "URIs",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-URIs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "URIs",
          "package": "Holumbus-Searchengine",
          "partial": "URIs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn URI is represented as a String\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.URIs",
          "name": "URI",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-URIs.html#URI",
          "type": "type"
        },
        "index": {
          "description": "An URI is represented as String",
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "URI",
          "package": "Holumbus-Searchengine",
          "partial": "URI",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#t:URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "URIWithLevel",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-URIs.html#URIWithLevel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "URIWithLevel",
          "package": "Holumbus-Searchengine",
          "partial": "URIWith Level",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#t:URIWithLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of URIs implemeted as a prefix tree. This implementation\n is space efficient, because of many equal prefixes in the crawled set of URIs\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.URIs",
          "name": "URIs",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-URIs.html#URIs",
          "type": "type"
        },
        "index": {
          "description": "set of URIs implemeted as prefix tree This implementation is space efficient because of many equal prefixes in the crawled set of URIs",
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "URIs",
          "package": "Holumbus-Searchengine",
          "partial": "URIs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#t:URIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "URIs'",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-URIs.html#URIs%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "URIs'",
          "package": "Holumbus-Searchengine",
          "partial": "URIs'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#t:URIs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "URIsWithLevel",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-URIs.html#URIsWithLevel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "URIsWithLevel",
          "package": "Holumbus-Searchengine",
          "partial": "URIs With Level",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#t:URIsWithLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "cardURIs",
          "package": "Holumbus-Searchengine",
          "signature": "URIs' a -\u003e Int",
          "source": "src/Holumbus-Crawler-URIs.html#cardURIs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "cardURIs",
          "normalized": "URIs' a-\u003eInt",
          "package": "Holumbus-Searchengine",
          "partial": "URIs",
          "signature": "URIs' a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:cardURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "deleteURI",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e URIs' a -\u003e URIs' a",
          "source": "src/Holumbus-Crawler-URIs.html#deleteURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "deleteURI",
          "normalized": "URI-\u003eURIs' a-\u003eURIs' a",
          "package": "Holumbus-Searchengine",
          "partial": "URI",
          "signature": "URI-\u003eURIs' a-\u003eURIs' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:deleteURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "deleteURIs",
          "package": "Holumbus-Searchengine",
          "signature": "URIs' b -\u003e URIs' a -\u003e URIs' a",
          "source": "src/Holumbus-Crawler-URIs.html#deleteURIs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "deleteURIs",
          "normalized": "URIs' a-\u003eURIs' b-\u003eURIs' b",
          "package": "Holumbus-Searchengine",
          "partial": "URIs",
          "signature": "URIs' b-\u003eURIs' a-\u003eURIs' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:deleteURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "diffURIs",
          "package": "Holumbus-Searchengine",
          "signature": "URIs' a -\u003e URIs' a -\u003e URIs' a",
          "source": "src/Holumbus-Crawler-URIs.html#diffURIs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "diffURIs",
          "normalized": "URIs' a-\u003eURIs' a-\u003eURIs' a",
          "package": "Holumbus-Searchengine",
          "partial": "URIs",
          "signature": "URIs' a-\u003eURIs' a-\u003eURIs' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:diffURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "emptyURIs",
          "package": "Holumbus-Searchengine",
          "signature": "URIs' a",
          "source": "src/Holumbus-Crawler-URIs.html#emptyURIs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "emptyURIs",
          "package": "Holumbus-Searchengine",
          "partial": "URIs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:emptyURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "foldURIs",
          "package": "Holumbus-Searchengine",
          "signature": "(URI -\u003e b -\u003e b) -\u003e b -\u003e URIs -\u003e b",
          "source": "src/Holumbus-Crawler-URIs.html#foldURIs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "foldURIs",
          "normalized": "(URI-\u003ea-\u003ea)-\u003ea-\u003eURIs-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "URIs",
          "signature": "(URI-\u003eb-\u003eb)-\u003eb-\u003eURIs-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:foldURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "foldURIs'",
          "package": "Holumbus-Searchengine",
          "signature": "(URI -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e URIs' a -\u003e b",
          "source": "src/Holumbus-Crawler-URIs.html#foldURIs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "foldURIs'",
          "normalized": "(URI-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eURIs' a-\u003eb",
          "package": "Holumbus-Searchengine",
          "partial": "URIs'",
          "signature": "(URI-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eURIs' a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:foldURIs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "fromListURIs",
          "package": "Holumbus-Searchengine",
          "signature": "[URI] -\u003e URIs",
          "source": "src/Holumbus-Crawler-URIs.html#fromListURIs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "fromListURIs",
          "normalized": "[URI]-\u003eURIs",
          "package": "Holumbus-Searchengine",
          "partial": "List URIs",
          "signature": "[URI]-\u003eURIs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:fromListURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "fromListURIs'",
          "package": "Holumbus-Searchengine",
          "signature": "[(URI, a)] -\u003e URIs' a",
          "source": "src/Holumbus-Crawler-URIs.html#fromListURIs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "fromListURIs'",
          "normalized": "[(URI,a)]-\u003eURIs' a",
          "package": "Holumbus-Searchengine",
          "partial": "List URIs'",
          "signature": "[(URI,a)]-\u003eURIs' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:fromListURIs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "insertURI",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e URIs -\u003e URIs",
          "source": "src/Holumbus-Crawler-URIs.html#insertURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "insertURI",
          "normalized": "URI-\u003eURIs-\u003eURIs",
          "package": "Holumbus-Searchengine",
          "partial": "URI",
          "signature": "URI-\u003eURIs-\u003eURIs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:insertURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "insertURI'",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e a -\u003e URIs' a -\u003e URIs' a",
          "source": "src/Holumbus-Crawler-URIs.html#insertURI%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "insertURI'",
          "normalized": "URI-\u003ea-\u003eURIs' a-\u003eURIs' a",
          "package": "Holumbus-Searchengine",
          "partial": "URI'",
          "signature": "URI-\u003ea-\u003eURIs' a-\u003eURIs' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:insertURI-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "memberURIs",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e URIs' a -\u003e Bool",
          "source": "src/Holumbus-Crawler-URIs.html#memberURIs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "memberURIs",
          "normalized": "URI-\u003eURIs' a-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "URIs",
          "signature": "URI-\u003eURIs' a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:memberURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "nextURI",
          "package": "Holumbus-Searchengine",
          "signature": "URIs' a -\u003e (URI, a)",
          "source": "src/Holumbus-Crawler-URIs.html#nextURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "nextURI",
          "normalized": "URIs' a-\u003e(URI,a)",
          "package": "Holumbus-Searchengine",
          "partial": "URI",
          "signature": "URIs' a-\u003e(URI,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:nextURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "nextURIs",
          "package": "Holumbus-Searchengine",
          "signature": "Int -\u003e URIs' a -\u003e [(URI, a)]",
          "source": "src/Holumbus-Crawler-URIs.html#nextURIs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "nextURIs",
          "normalized": "Int-\u003eURIs' a-\u003e[(URI,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "URIs",
          "signature": "Int-\u003eURIs' a-\u003e[(URI,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:nextURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "nullURIs",
          "package": "Holumbus-Searchengine",
          "signature": "URIs' a -\u003e Bool",
          "source": "src/Holumbus-Crawler-URIs.html#nullURIs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "nullURIs",
          "normalized": "URIs' a-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "URIs",
          "signature": "URIs' a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:nullURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "singletonURIs",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e URIs",
          "source": "src/Holumbus-Crawler-URIs.html#singletonURIs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "singletonURIs",
          "normalized": "URI-\u003eURIs",
          "package": "Holumbus-Searchengine",
          "partial": "URIs",
          "signature": "URI-\u003eURIs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:singletonURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "singletonURIs'",
          "package": "Holumbus-Searchengine",
          "signature": "URI -\u003e a -\u003e URIs' a",
          "source": "src/Holumbus-Crawler-URIs.html#singletonURIs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "singletonURIs'",
          "normalized": "URI-\u003ea-\u003eURIs' a",
          "package": "Holumbus-Searchengine",
          "partial": "URIs'",
          "signature": "URI-\u003ea-\u003eURIs' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:singletonURIs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "toListURIs",
          "package": "Holumbus-Searchengine",
          "signature": "URIs' a -\u003e [URI]",
          "source": "src/Holumbus-Crawler-URIs.html#toListURIs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "toListURIs",
          "normalized": "URIs' a-\u003e[URI]",
          "package": "Holumbus-Searchengine",
          "partial": "List URIs",
          "signature": "URIs' a-\u003e[URI]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:toListURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "toListURIs'",
          "package": "Holumbus-Searchengine",
          "signature": "URIs' a -\u003e [(URI, a)]",
          "source": "src/Holumbus-Crawler-URIs.html#toListURIs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "toListURIs'",
          "normalized": "URIs' a-\u003e[(URI,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "List URIs'",
          "signature": "URIs' a-\u003e[(URI,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:toListURIs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "unionURIs",
          "package": "Holumbus-Searchengine",
          "signature": "URIs -\u003e URIs -\u003e URIs",
          "source": "src/Holumbus-Crawler-URIs.html#unionURIs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "unionURIs",
          "normalized": "URIs-\u003eURIs-\u003eURIs",
          "package": "Holumbus-Searchengine",
          "partial": "URIs",
          "signature": "URIs-\u003eURIs-\u003eURIs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:unionURIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.URIs",
          "name": "unionURIs'",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e a -\u003e a) -\u003e URIs' a -\u003e URIs' a -\u003e URIs' a",
          "source": "src/Holumbus-Crawler-URIs.html#unionURIs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler URIs",
          "module": "Holumbus.Crawler.URIs",
          "name": "unionURIs'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eURIs' a-\u003eURIs' a-\u003eURIs' a",
          "package": "Holumbus-Searchengine",
          "partial": "URIs'",
          "signature": "(a-\u003ea-\u003ea)-\u003eURIs' a-\u003eURIs' a-\u003eURIs' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-URIs.html#v:unionURIs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Util",
          "name": "Util",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Util",
          "module": "Holumbus.Crawler.Util",
          "name": "Util",
          "package": "Holumbus-Searchengine",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Util",
          "name": "match",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e String -\u003e Bool",
          "source": "src/Holumbus-Crawler-Util.html#match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Util",
          "module": "Holumbus.Crawler.Util",
          "name": "match",
          "normalized": "String-\u003eString-\u003eBool",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Util.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate temp file name\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Util",
          "name": "mkTmpFile",
          "package": "Holumbus-Searchengine",
          "signature": "Int -\u003e String -\u003e Int -\u003e String",
          "source": "src/Holumbus-Crawler-Util.html#mkTmpFile",
          "type": "function"
        },
        "index": {
          "description": "create temp file name",
          "hierarchy": "Holumbus Crawler Util",
          "module": "Holumbus.Crawler.Util",
          "name": "mkTmpFile",
          "normalized": "Int-\u003eString-\u003eInt-\u003eString",
          "package": "Holumbus-Searchengine",
          "partial": "Tmp File",
          "signature": "Int-\u003eString-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Util.html#v:mkTmpFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Util",
          "name": "parseRE",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e Regex",
          "source": "src/Holumbus-Crawler-Util.html#parseRE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Util",
          "module": "Holumbus.Crawler.Util",
          "name": "parseRE",
          "normalized": "String-\u003eRegex",
          "package": "Holumbus-Searchengine",
          "partial": "RE",
          "signature": "String-\u003eRegex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Util.html#v:parseRE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Util",
          "name": "sed",
          "package": "Holumbus-Searchengine",
          "signature": "(String -\u003e String) -\u003e String -\u003e String -\u003e String",
          "source": "src/Holumbus-Crawler-Util.html#sed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Util",
          "module": "Holumbus.Crawler.Util",
          "name": "sed",
          "normalized": "(String-\u003eString)-\u003eString-\u003eString-\u003eString",
          "package": "Holumbus-Searchengine",
          "signature": "(String-\u003eString)-\u003eString-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Util.html#v:sed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple predicate genertor for filtering of URIs\n If the first predicate (isAllowed) holds and the second (isDenied) does not hold\n the predicate holds. This can be used for constructing simple URL filters\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Util",
          "name": "simpleFollowRef",
          "package": "Holumbus-Searchengine",
          "signature": "(String -\u003e Bool) -\u003e (String -\u003e Bool) -\u003e String -\u003e Bool",
          "source": "src/Holumbus-Crawler-Util.html#simpleFollowRef",
          "type": "function"
        },
        "index": {
          "description": "Simple predicate genertor for filtering of URIs If the first predicate isAllowed holds and the second isDenied does not hold the predicate holds This can be used for constructing simple URL filters",
          "hierarchy": "Holumbus Crawler Util",
          "module": "Holumbus.Crawler.Util",
          "name": "simpleFollowRef",
          "normalized": "(String-\u003eBool)-\u003e(String-\u003eBool)-\u003eString-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Follow Ref",
          "signature": "(String-\u003eBool)-\u003e(String-\u003eBool)-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Util.html#v:simpleFollowRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient function, that takes two lists of strings in regexp syntax,\n The first list are the patterns for the allowed strings,\n the second one for the patterns to deny the string.\n Two regular expressions are build from these lists of strings,\n and the string to be tested is matched against both regexes\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.Util",
          "name": "simpleFollowRef'",
          "package": "Holumbus-Searchengine",
          "signature": "[String] -\u003e [String] -\u003e String -\u003e Bool",
          "source": "src/Holumbus-Crawler-Util.html#simpleFollowRef%27",
          "type": "function"
        },
        "index": {
          "description": "convenient function that takes two lists of strings in regexp syntax The first list are the patterns for the allowed strings the second one for the patterns to deny the string Two regular expressions are build from these lists of strings and the string to be tested is matched against both regexes",
          "hierarchy": "Holumbus Crawler Util",
          "module": "Holumbus.Crawler.Util",
          "name": "simpleFollowRef'",
          "normalized": "[String]-\u003e[String]-\u003eString-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Follow Ref'",
          "signature": "[String]-\u003e[String]-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Util.html#v:simpleFollowRef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Util",
          "name": "split",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e String -\u003e (String, String)",
          "source": "src/Holumbus-Crawler-Util.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Util",
          "module": "Holumbus.Crawler.Util",
          "name": "split",
          "normalized": "String-\u003eString-\u003e(String,String)",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003eString-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Util.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.Util",
          "name": "tokenize",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e String -\u003e [String]",
          "source": "src/Holumbus-Crawler-Util.html#tokenize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Crawler Util",
          "module": "Holumbus.Crawler.Util",
          "name": "tokenize",
          "normalized": "String-\u003eString-\u003e[String]",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-Util.html#v:tokenize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler.XmlArrows",
          "name": "XmlArrows",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler-XmlArrows.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler XmlArrows",
          "module": "Holumbus.Crawler.XmlArrows",
          "name": "XmlArrows",
          "package": "Holumbus-Searchengine",
          "partial": "Xml Arrows",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-XmlArrows.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove contents, when document status isn't ok, but remain meta info\n\u003c/p\u003e",
          "module": "Holumbus.Crawler.XmlArrows",
          "name": "checkDocumentStatus",
          "package": "Holumbus-Searchengine",
          "signature": "IOSArrow XmlTree XmlTree",
          "source": "src/Holumbus-Crawler-XmlArrows.html#checkDocumentStatus",
          "type": "function"
        },
        "index": {
          "description": "Remove contents when document status isn ok but remain meta info",
          "hierarchy": "Holumbus Crawler XmlArrows",
          "module": "Holumbus.Crawler.XmlArrows",
          "name": "checkDocumentStatus",
          "package": "Holumbus-Searchengine",
          "partial": "Document Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler-XmlArrows.html#v:checkDocumentStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Crawler",
          "name": "Crawler",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Crawler.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Crawler",
          "module": "Holumbus.Crawler",
          "name": "Crawler",
          "package": "Holumbus-Searchengine",
          "partial": "Crawler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Crawler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module provides compression for streams of 32-bit words. Because of \n  some internal restriction in GHC, which makes all fixed integer size equal\n  in terms of bit-width, the algorithm tries to crunch as much numbers as\n  possible into a single 64-bit word.\n\u003c/p\u003e\u003cp\u003eBased on the Simple9 encoding scheme from this article:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Vo N. Anh, Alstair Moffat,\n      \"\u003cem\u003eInverted Index Compression Using Word-Aligned Binary Codes\u003c/em\u003e\",\n      Information Retrieval, 8 (1), 2005, pages 151-166\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Holumbus.Data.Crunch",
          "name": "Crunch",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-Crunch.html",
          "type": "module"
        },
        "index": {
          "description": "Version This module provides compression for streams of bit words Because of some internal restriction in GHC which makes all fixed integer size equal in terms of bit-width the algorithm tries to crunch as much numbers as possible into single bit word Based on the Simple9 encoding scheme from this article Vo Anh Alstair Moffat Inverted Index Compression Using Word-Aligned Binary Codes Information Retrieval pages",
          "hierarchy": "Holumbus Data Crunch",
          "module": "Holumbus.Data.Crunch",
          "name": "Crunch",
          "package": "Holumbus-Searchengine",
          "partial": "Crunch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-Crunch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCrunching \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e values, defined in terms of \u003ccode\u003e\u003ca\u003ecrunch64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Holumbus.Data.Crunch",
          "name": "crunch16",
          "package": "Holumbus-Searchengine",
          "signature": "[Word16] -\u003e [Word64]",
          "source": "src/Holumbus-Data-Crunch.html#crunch16",
          "type": "function"
        },
        "index": {
          "description": "Crunching Word16 values defined in terms of crunch64",
          "hierarchy": "Holumbus Data Crunch",
          "module": "Holumbus.Data.Crunch",
          "name": "crunch16",
          "normalized": "[Word]-\u003e[Word]",
          "package": "Holumbus-Searchengine",
          "signature": "[Word]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-Crunch.html#v:crunch16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCrunching \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e values, defined in terms of \u003ccode\u003e\u003ca\u003ecrunch64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Holumbus.Data.Crunch",
          "name": "crunch32",
          "package": "Holumbus-Searchengine",
          "signature": "[Word32] -\u003e [Word64]",
          "source": "src/Holumbus-Data-Crunch.html#crunch32",
          "type": "function"
        },
        "index": {
          "description": "Crunching Word32 values defined in terms of crunch64",
          "hierarchy": "Holumbus Data Crunch",
          "module": "Holumbus.Data.Crunch",
          "name": "crunch32",
          "normalized": "[Word]-\u003e[Word]",
          "package": "Holumbus-Searchengine",
          "signature": "[Word]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-Crunch.html#v:crunch32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCrunch some values by encoding several values into one \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e. The values may not exceed\n the upper limit of \u003ccode\u003e(2 ^ 60) - 1\u003c/code\u003e. This precondition is not checked! The compression works\n best on small values, therefore a difference encoding (like the one in \n \u003ca\u003eHolumbus.Data.DiffList\u003c/a\u003e) prior to compression pays off well.\n\u003c/p\u003e",
          "module": "Holumbus.Data.Crunch",
          "name": "crunch64",
          "package": "Holumbus-Searchengine",
          "signature": "[Word64] -\u003e [Word64]",
          "source": "src/Holumbus-Data-Crunch.html#crunch64",
          "type": "function"
        },
        "index": {
          "description": "Crunch some values by encoding several values into one Word64 The values may not exceed the upper limit of This precondition is not checked The compression works best on small values therefore difference encoding like the one in Holumbus.Data.DiffList prior to compression pays off well",
          "hierarchy": "Holumbus Data Crunch",
          "module": "Holumbus.Data.Crunch",
          "name": "crunch64",
          "normalized": "[Word]-\u003e[Word]",
          "package": "Holumbus-Searchengine",
          "signature": "[Word]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-Crunch.html#v:crunch64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCrunching \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e values, defined in terms of \u003ccode\u003e\u003ca\u003ecrunch64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Holumbus.Data.Crunch",
          "name": "crunch8",
          "package": "Holumbus-Searchengine",
          "signature": "[Word8] -\u003e [Word64]",
          "source": "src/Holumbus-Data-Crunch.html#crunch8",
          "type": "function"
        },
        "index": {
          "description": "Crunching Word8 values defined in terms of crunch64",
          "hierarchy": "Holumbus Data Crunch",
          "module": "Holumbus.Data.Crunch",
          "name": "crunch8",
          "normalized": "[Word]-\u003e[Word]",
          "package": "Holumbus-Searchengine",
          "signature": "[Word]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-Crunch.html#v:crunch8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrunching to \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e values, defined in terms of \u003ccode\u003e\u003ca\u003edecrunch64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Holumbus.Data.Crunch",
          "name": "decrunch16",
          "package": "Holumbus-Searchengine",
          "signature": "[Word64] -\u003e [Word16]",
          "source": "src/Holumbus-Data-Crunch.html#decrunch16",
          "type": "function"
        },
        "index": {
          "description": "Decrunching to Word16 values defined in terms of decrunch64",
          "hierarchy": "Holumbus Data Crunch",
          "module": "Holumbus.Data.Crunch",
          "name": "decrunch16",
          "normalized": "[Word]-\u003e[Word]",
          "package": "Holumbus-Searchengine",
          "signature": "[Word]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-Crunch.html#v:decrunch16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrunching to \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e values, defined in terms of \u003ccode\u003e\u003ca\u003edecrunch64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Holumbus.Data.Crunch",
          "name": "decrunch32",
          "package": "Holumbus-Searchengine",
          "signature": "[Word64] -\u003e [Word32]",
          "source": "src/Holumbus-Data-Crunch.html#decrunch32",
          "type": "function"
        },
        "index": {
          "description": "Decrunching to Word32 values defined in terms of decrunch64",
          "hierarchy": "Holumbus Data Crunch",
          "module": "Holumbus.Data.Crunch",
          "name": "decrunch32",
          "normalized": "[Word]-\u003e[Word]",
          "package": "Holumbus-Searchengine",
          "signature": "[Word]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-Crunch.html#v:decrunch32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrunch a list of crunched values. No checking for properly encoded values is done, weird\n results have to be expected if calling this function on a list of arbitrary values.\n\u003c/p\u003e",
          "module": "Holumbus.Data.Crunch",
          "name": "decrunch64",
          "package": "Holumbus-Searchengine",
          "signature": "[Word64] -\u003e [Word64]",
          "source": "src/Holumbus-Data-Crunch.html#decrunch64",
          "type": "function"
        },
        "index": {
          "description": "Decrunch list of crunched values No checking for properly encoded values is done weird results have to be expected if calling this function on list of arbitrary values",
          "hierarchy": "Holumbus Data Crunch",
          "module": "Holumbus.Data.Crunch",
          "name": "decrunch64",
          "normalized": "[Word]-\u003e[Word]",
          "package": "Holumbus-Searchengine",
          "signature": "[Word]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-Crunch.html#v:decrunch64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrunching to \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e values, defined in terms of \u003ccode\u003e\u003ca\u003edecrunch64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Holumbus.Data.Crunch",
          "name": "decrunch8",
          "package": "Holumbus-Searchengine",
          "signature": "[Word64] -\u003e [Word8]",
          "source": "src/Holumbus-Data-Crunch.html#decrunch8",
          "type": "function"
        },
        "index": {
          "description": "Decrunching to Word8 values defined in terms of decrunch64",
          "hierarchy": "Holumbus Data Crunch",
          "module": "Holumbus.Data.Crunch",
          "name": "decrunch8",
          "normalized": "[Word]-\u003e[Word]",
          "package": "Holumbus-Searchengine",
          "signature": "[Word]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-Crunch.html#v:decrunch8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of maps from strings to arbitrary values.\n\u003c/p\u003e\u003cp\u003eValues can associated with an arbitrary byte key. Searching for keys is very fast, but\n  the prefix tree probably consumes more memory than \u003ca\u003eData.Map\u003c/a\u003e. The main differences are the special\n  \u003ccode\u003e\u003ca\u003eprefixFind\u003c/a\u003e\u003c/code\u003e functions, which can be used to perform prefix queries. The interface is\n  heavily borrowed from \u003ca\u003eData.Map\u003c/a\u003e and \u003ca\u003eData.IntMap\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMost other function names clash with \u003ca\u003ePrelude\u003c/a\u003e names, therefore this module is usually\n  imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e import Holumbus.Data.PrefixTree (PrefixTree)\n import qualified Holumbus.Data.PrefixTree as T\n\u003c/pre\u003e\u003cp\u003eMany functions have a worst-case complexity of \u003cem\u003eO(min(n,L))\u003c/em\u003e. This means that the operation\n  can become linear with the number of elements with a maximum of \u003cem\u003eL\u003c/em\u003e, the length of the\n  key (the number of bytes in the list). The functions for searching a prefix have a worst-case\n  complexity of \u003cem\u003eO(max(L,R))\u003c/em\u003e. This means that the operation can become linear with\n  \u003cem\u003eR\u003c/em\u003e, the number of elements found for the prefix, with a minimum of \u003cem\u003eL\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe module exports include the internal data types, their constructors and access\n  functions for ultimate flexibility. Derived modules should not export these \n  (as shown in \u003ca\u003eHolumbus.Data.StrMap\u003c/a\u003e) to provide only a restricted interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Core",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree-Core.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of maps from strings to arbitrary values Values can associated with an arbitrary byte key Searching for keys is very fast but the prefix tree probably consumes more memory than Data.Map The main differences are the special prefixFind functions which can be used to perform prefix queries The interface is heavily borrowed from Data.Map and Data.IntMap Most other function names clash with Prelude names therefore this module is usually imported qualified e.g import Holumbus.Data.PrefixTree PrefixTree import qualified Holumbus.Data.PrefixTree as Many functions have worst-case complexity of min This means that the operation can become linear with the number of elements with maximum of the length of the key the number of bytes in the list The functions for searching prefix have worst-case complexity of max This means that the operation can become linear with the number of elements found for the prefix with minimum of The module exports include the internal data types their constructors and access functions for ultimate flexibility Derived modules should not export these as shown in Holumbus.Data.StrMap to provide only restricted interface",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Core",
          "package": "Holumbus-Searchengine",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estrict list of chars with unpacked fields\n\u003c/p\u003e\u003cp\u003efor internal use in prefix tree to optimize space efficiency\n\u003c/p\u003e",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Key1",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#Key1",
          "type": "data"
        },
        "index": {
          "description": "strict list of chars with unpacked fields for internal use in prefix tree to optimize space efficiency",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Key1",
          "package": "Holumbus-Searchengine",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#t:Key1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "PrefixTree",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "PrefixTree",
          "package": "Holumbus-Searchengine",
          "partial": "Prefix Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#t:PrefixTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "PrefixTreeVisitor",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "PrefixTreeVisitor",
          "package": "Holumbus-Searchengine",
          "partial": "Prefix Tree Visitor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#t:PrefixTreeVisitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value at a key. Calls error when the element can not be found.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "(!)",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e Key -\u003e a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#%21",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:-33-\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:-33-\"]"
        },
        "index": {
          "description": "min Find the value at key Calls error when the element can not be found",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "(!) !",
          "normalized": "PrefixTree a-\u003eKey-\u003ea",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a-\u003eKey-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "(.++.)",
          "package": "Holumbus-Searchengine",
          "signature": "Key1 -\u003e Key1 -\u003e Key1",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#.%2B%2B.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "(.++.) .++.",
          "normalized": "Key-\u003eKey-\u003eKey",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003eKey-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:.-43--43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "BrSeL",
          "package": "Holumbus-Searchengine",
          "signature": "BrSeL",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:BrSeL\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:BrSeL\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "BrSeL",
          "package": "Holumbus-Searchengine",
          "partial": "Br Se",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:BrSeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "BrSeq",
          "package": "Holumbus-Searchengine",
          "signature": "BrSeq",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:BrSeq\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:BrSeq\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "BrSeq",
          "package": "Holumbus-Searchengine",
          "partial": "Br Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:BrSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "BrVal",
          "package": "Holumbus-Searchengine",
          "signature": "BrVal",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:BrVal\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:BrVal\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "BrVal",
          "package": "Holumbus-Searchengine",
          "partial": "Br Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:BrVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "Branch",
          "package": "Holumbus-Searchengine",
          "signature": "Branch",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:Branch\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:Branch\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Branch",
          "package": "Holumbus-Searchengine",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Cons",
          "package": "Holumbus-Searchengine",
          "signature": "Cons !Sym !Key1",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#Key1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Cons",
          "package": "Holumbus-Searchengine",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "Empty",
          "package": "Holumbus-Searchengine",
          "signature": "Empty",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:Empty\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:Empty\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Empty",
          "package": "Holumbus-Searchengine",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "Last",
          "package": "Holumbus-Searchengine",
          "signature": "Last",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:Last\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:Last\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Last",
          "package": "Holumbus-Searchengine",
          "partial": "Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:Last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "Leaf",
          "package": "Holumbus-Searchengine",
          "signature": "Leaf",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:Leaf\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:Leaf\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Leaf",
          "package": "Holumbus-Searchengine",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "LsSeL",
          "package": "Holumbus-Searchengine",
          "signature": "LsSeL",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:LsSeL\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:LsSeL\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "LsSeL",
          "package": "Holumbus-Searchengine",
          "partial": "Ls Se",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:LsSeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "LsSeq",
          "package": "Holumbus-Searchengine",
          "signature": "LsSeq",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:LsSeq\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:LsSeq\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "LsSeq",
          "package": "Holumbus-Searchengine",
          "partial": "Ls Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:LsSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "LsVal",
          "package": "Holumbus-Searchengine",
          "signature": "LsVal",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:LsVal\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:LsVal\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "LsVal",
          "package": "Holumbus-Searchengine",
          "partial": "Ls Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:LsVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Nil",
          "package": "Holumbus-Searchengine",
          "signature": "Nil",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#Key1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Nil",
          "package": "Holumbus-Searchengine",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "PTV",
          "package": "Holumbus-Searchengine",
          "signature": "PTV",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "PTV",
          "package": "Holumbus-Searchengine",
          "partial": "PTV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:PTV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "Val",
          "package": "Holumbus-Searchengine",
          "signature": "Val",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:Val\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:Val\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "Val",
          "package": "Holumbus-Searchengine",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:Val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "branch",
          "package": "Holumbus-Searchengine",
          "signature": "Sym -\u003e PrefixTree v -\u003e PrefixTree v -\u003e PrefixTree v",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#branch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "branch",
          "normalized": "Sym-\u003ePrefixTree a-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "Sym-\u003ePrefixTree v-\u003ePrefixTree v-\u003ePrefixTree v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "brseq",
          "package": "Holumbus-Searchengine",
          "signature": "Key1 -\u003e PrefixTree v -\u003e PrefixTree v -\u003e PrefixTree v",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#brseq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "brseq",
          "normalized": "Key-\u003ePrefixTree a-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003ePrefixTree v-\u003ePrefixTree v-\u003ePrefixTree v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:brseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "child",
          "package": "Holumbus-Searchengine",
          "signature": "(PrefixTree v)",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:child\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:child\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "child",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "cutAllPx'",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixSet -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#cutAllPx%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "cutAllPx'",
          "normalized": "PrefixSet-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "All Px'",
          "signature": "PrefixSet-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:cutAllPx-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "cutPx'",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixSet -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#cutPx%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "cutPx'",
          "normalized": "PrefixSet-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "Px'",
          "signature": "PrefixSet-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:cutPx-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecut off all branches from a tree \u003ccode\u003et2\u003c/code\u003e that are not part of set \u003ccode\u003et1\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ethe following laws must holds\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003elookup' k' . cutPx' (singlePS k) $ t == lookup' k t\u003c/code\u003e for every \u003ccode\u003ek'\u003c/code\u003e with \u003ccode\u003ek\u003c/code\u003e prefix of \u003ccode\u003ek'\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003elookup' k' . cutPx' (singlePS k) $ t == Nothing\u003c/code\u003e for every \u003ccode\u003ek'\u003c/code\u003e with \u003ccode\u003ek\u003c/code\u003e not being a prefix of \u003ccode\u003ek'\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "cutPx''",
          "package": "Holumbus-Searchengine",
          "signature": "(PrefixTree a -\u003e PrefixTree a) -\u003e PrefixSet -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#cutPx%27%27",
          "type": "function"
        },
        "index": {
          "description": "cut off all branches from tree t2 that are not part of set t1 the following laws must holds lookup cutPx singlePS lookup for every with prefix of lookup cutPx singlePS Nothing for every with not being prefix of",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "cutPx''",
          "normalized": "(PrefixTree a-\u003ePrefixTree a)-\u003ePrefixSet-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "Px''",
          "signature": "(PrefixTree a-\u003ePrefixTree a)-\u003ePrefixSet-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:cutPx-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "deepNorm",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree v -\u003e PrefixTree v",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#deepNorm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "deepNorm",
          "normalized": "PrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "Norm",
          "signature": "PrefixTree v-\u003ePrefixTree v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:deepNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Delete an element from the map. If no element exists for the key, the map \n remains unchanged.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "delete",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#delete",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:delete\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:delete\"]"
        },
        "index": {
          "description": "min Delete an element from the map If no element exists for the key the map remains unchanged",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "delete",
          "normalized": "Key-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "diff''",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e b -\u003e Maybe a) -\u003e (Key -\u003e Key) -\u003e PrefixTree a -\u003e PrefixTree b -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#diff%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "diff''",
          "normalized": "(Key-\u003ea-\u003eb-\u003eMaybe a)-\u003e(Key-\u003eKey)-\u003ePrefixTree a-\u003ePrefixTree b-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "(Key-\u003ea-\u003eb-\u003eMaybe a)-\u003e(Key-\u003eKey)-\u003ePrefixTree a-\u003ePrefixTree b-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:diff-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e(O(min(n,m))\u003c/em\u003e Difference between two tries (based on keys).\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "difference",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e PrefixTree b -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#difference",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:difference\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:difference\"]"
        },
        "index": {
          "description": "min Difference between two tries based on keys",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "difference",
          "normalized": "PrefixTree a-\u003ePrefixTree b-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a-\u003ePrefixTree b-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e(O(min(n,m))\u003c/em\u003e Difference with a combining function. If the combining function always returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, this is equal to proper set difference.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "differenceWith",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e b -\u003e Maybe a) -\u003e PrefixTree a -\u003e PrefixTree b -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#differenceWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:differenceWith\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:differenceWith\"]"
        },
        "index": {
          "description": "min Difference with combining function If the combining function always returns Nothing this is equal to proper set difference",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "differenceWith",
          "normalized": "(a-\u003eb-\u003eMaybe a)-\u003ePrefixTree a-\u003ePrefixTree b-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "With",
          "signature": "(a-\u003eb-\u003eMaybe a)-\u003ePrefixTree a-\u003ePrefixTree b-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:differenceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,m))\u003c/em\u003e Difference with a combining function, including the key. If two equal keys are\n encountered, the combining function is applied to the key and both values. If it returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is discarded, if it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a value, the element is updated\n with the new value.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "differenceWithKey",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e b -\u003e Maybe a) -\u003e PrefixTree a -\u003e PrefixTree b -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#differenceWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:differenceWithKey\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:differenceWithKey\"]"
        },
        "index": {
          "description": "min Difference with combining function including the key If two equal keys are encountered the combining function is applied to the key and both values If it returns Nothing the element is discarded if it returns Just value the element is updated with the new value",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "differenceWithKey",
          "normalized": "(Key-\u003ea-\u003eb-\u003eMaybe a)-\u003ePrefixTree a-\u003ePrefixTree b-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003eb-\u003eMaybe a)-\u003ePrefixTree a-\u003ePrefixTree b-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:differenceWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all values.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "elems",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e [a]",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#elems",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:elems\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:elems\"]"
        },
        "index": {
          "description": "Returns all values",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "elems",
          "normalized": "PrefixTree a-\u003e[a]",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "empty",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree v",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:empty\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:empty\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "empty",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value associated with a key. The function will \u003ccode\u003ereturn\u003c/code\u003e the result in\n the monad or \u003ccode\u003efail\u003c/code\u003e in it if the key isn't in the map.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "findWithDefault",
          "package": "Holumbus-Searchengine",
          "signature": "a -\u003e Key -\u003e PrefixTree a -\u003e a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#findWithDefault",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:findWithDefault\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:findWithDefault\"]"
        },
        "index": {
          "description": "min Find the value associated with key The function will return the result in the monad or fail in it if the key isn in the map",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "findWithDefault",
          "normalized": "a-\u003eKey-\u003ePrefixTree a-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "With Default",
          "signature": "a-\u003eKey-\u003ePrefixTree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold over all values in the map.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "fold",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e PrefixTree a -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#fold",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:fold\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:fold\"]"
        },
        "index": {
          "description": "Fold over all values in the map",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ePrefixTree a-\u003eb",
          "package": "Holumbus-Searchengine",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ePrefixTree a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "fold'",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e (Key -\u003e Key) -\u003e PrefixTree a -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#fold%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "fold'",
          "normalized": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003e(Key-\u003eKey)-\u003ePrefixTree a-\u003eb",
          "package": "Holumbus-Searchengine",
          "signature": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003e(Key-\u003eKey)-\u003ePrefixTree a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:fold-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold over all key/value pairs in the map.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "foldWithKey",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e PrefixTree a -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#foldWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:foldWithKey\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:foldWithKey\"]"
        },
        "index": {
          "description": "Fold over all key value pairs in the map",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "foldWithKey",
          "normalized": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003ePrefixTree a-\u003eb",
          "package": "Holumbus-Searchengine",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003ePrefixTree a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:foldWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "fromKey",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e Key1",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#fromKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "fromKey",
          "normalized": "Key-\u003eKey",
          "package": "Holumbus-Searchengine",
          "partial": "Key",
          "signature": "Key-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:fromKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Creates a trie from a list of key/value pairs.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "fromList",
          "package": "Holumbus-Searchengine",
          "signature": "[(Key, a)] -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#fromList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:fromList\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:fromList\"]"
        },
        "index": {
          "description": "Creates trie from list of key value pairs",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "fromList",
          "normalized": "[(Key,a)]-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "List",
          "signature": "[(Key,a)]-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert an ordinary map into a Prefix tree\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "fromMap",
          "package": "Holumbus-Searchengine",
          "signature": "Map Key a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#fromMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:fromMap\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:fromMap\"]"
        },
        "index": {
          "description": "Convert an ordinary map into Prefix tree",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "fromMap",
          "normalized": "Map Key a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "Map",
          "signature": "Map Key a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:fromMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert a new key and value into the map. If the key is already present in\n the map, the associated value will be replaced with the new value.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "insert",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e a -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#insert",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:insert\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:insert\"]"
        },
        "index": {
          "description": "min Insert new key and value into the map If the key is already present in the map the associated value will be replaced with the new value",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "insert",
          "normalized": "Key-\u003ea-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003ea-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "insert'",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Key -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#insert%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "insert'",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eKey-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eKey-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:insert-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert with a combining function. If the key is already present in the map,\n the value of \u003ccode\u003ef new_value old_value\u003c/code\u003e will be inserted.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "insertWith",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e a -\u003e a) -\u003e Key -\u003e a -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#insertWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:insertWith\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:insertWith\"]"
        },
        "index": {
          "description": "min Insert with combining function If the key is already present in the map the value of new value old value will be inserted",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert with a combining function. If the key is already present in the map,\n the value of \u003ccode\u003ef key new_value old_value\u003c/code\u003e will be inserted.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "insertWithKey",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e a -\u003e a) -\u003e Key -\u003e a -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#insertWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:insertWithKey\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:insertWithKey\"]"
        },
        "index": {
          "description": "min Insert with combining function If the key is already present in the map the value of key new value old value will be inserted",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "insertWithKey",
          "normalized": "(Key-\u003ea-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "keyChars",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e Int",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#keyChars",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:keyChars\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:keyChars\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "keyChars",
          "normalized": "PrefixTree a-\u003eInt",
          "package": "Holumbus-Searchengine",
          "partial": "Chars",
          "signature": "PrefixTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:keyChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all values.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "keys",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e [Key]",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#keys",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:keys\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:keys\"]"
        },
        "index": {
          "description": "Returns all values",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "keys",
          "normalized": "PrefixTree a-\u003e[Key]",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a-\u003e[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "length1",
          "package": "Holumbus-Searchengine",
          "signature": "Key1 -\u003e Int",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#length1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "length1",
          "normalized": "Key-\u003eInt",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:length1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value associated with a key. The function will \u003ccode\u003ereturn\u003c/code\u003e the result in\n the monad or \u003ccode\u003efail\u003c/code\u003e in it if the key isn't in the map.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "lookup",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e m a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#lookup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:lookup\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:lookup\"]"
        },
        "index": {
          "description": "min Find the value associated with key The function will return the result in the monad or fail in it if the key isn in the map",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "lookup",
          "normalized": "Key-\u003ePrefixTree a-\u003eb a",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003ePrefixTree a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "lookup'",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e Maybe a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#lookup%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "lookup'",
          "normalized": "Key-\u003ePrefixTree a-\u003eMaybe a",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003ePrefixTree a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:lookup-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "lookupPx'",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#lookupPx%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "lookupPx'",
          "normalized": "Key-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "Px'",
          "signature": "Key-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:lookupPx-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "lsseq",
          "package": "Holumbus-Searchengine",
          "signature": "Key1 -\u003e PrefixTree v -\u003e PrefixTree v",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#lsseq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "lsseq",
          "normalized": "Key-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003ePrefixTree v-\u003ePrefixTree v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:lsseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Map a function over all values in the prefix tree.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "map",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e b) -\u003e PrefixTree a -\u003e PrefixTree b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#map",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:map\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:map\"]"
        },
        "index": {
          "description": "Map function over all values in the prefix tree",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ePrefixTree a-\u003ePrefixTree b",
          "package": "Holumbus-Searchengine",
          "signature": "(a-\u003eb)-\u003ePrefixTree a-\u003ePrefixTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "map'",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e b) -\u003e (Key -\u003e Key) -\u003e PrefixTree a -\u003e PrefixTree b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#map%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "map'",
          "normalized": "(Key-\u003ea-\u003eb)-\u003e(Key-\u003eKey)-\u003ePrefixTree a-\u003ePrefixTree b",
          "package": "Holumbus-Searchengine",
          "signature": "(Key-\u003ea-\u003eb)-\u003e(Key-\u003eKey)-\u003ePrefixTree a-\u003ePrefixTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:map-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "map''",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e b) -\u003e (Key -\u003e Key) -\u003e PrefixTree a -\u003e PrefixTree b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#map%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "map''",
          "normalized": "(Key-\u003ea-\u003eb)-\u003e(Key-\u003eKey)-\u003ePrefixTree a-\u003ePrefixTree b",
          "package": "Holumbus-Searchengine",
          "signature": "(Key-\u003ea-\u003eb)-\u003e(Key-\u003eKey)-\u003ePrefixTree a-\u003ePrefixTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:map-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic map\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "mapM",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e m b) -\u003e PrefixTree a -\u003e m (PrefixTree b)",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#mapM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:mapM\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:mapM\"]"
        },
        "index": {
          "description": "Monadic map",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003ePrefixTree a-\u003eb(PrefixTree c)",
          "package": "Holumbus-Searchengine",
          "signature": "(a-\u003em b)-\u003ePrefixTree a-\u003em(PrefixTree b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "mapM''",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e m b) -\u003e (Key -\u003e Key) -\u003e PrefixTree a -\u003e m (PrefixTree b)",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#mapM%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "mapM''",
          "normalized": "(Key-\u003ea-\u003eb c)-\u003e(Key-\u003eKey)-\u003ePrefixTree a-\u003eb(PrefixTree c)",
          "package": "Holumbus-Searchengine",
          "partial": "M''",
          "signature": "(Key-\u003ea-\u003em b)-\u003e(Key-\u003eKey)-\u003ePrefixTree a-\u003em(PrefixTree b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:mapM-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of map that works on normalized trees\n\u003c/p\u003e",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "mapN",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e b) -\u003e PrefixTree a -\u003e PrefixTree b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#mapN",
          "type": "function"
        },
        "index": {
          "description": "Variant of map that works on normalized trees",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "mapN",
          "normalized": "(a-\u003eb)-\u003ePrefixTree a-\u003ePrefixTree b",
          "package": "Holumbus-Searchengine",
          "signature": "(a-\u003eb)-\u003ePrefixTree a-\u003ePrefixTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:mapN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "mapWithKey",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e b) -\u003e PrefixTree a -\u003e PrefixTree b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#mapWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:mapWithKey\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:mapWithKey\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "mapWithKey",
          "normalized": "(Key-\u003ea-\u003eb)-\u003ePrefixTree a-\u003ePrefixTree b",
          "package": "Holumbus-Searchengine",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003eb)-\u003ePrefixTree a-\u003ePrefixTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic mapWithKey\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "mapWithKeyM",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e m b) -\u003e PrefixTree a -\u003e m (PrefixTree b)",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#mapWithKeyM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:mapWithKeyM\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:mapWithKeyM\"]"
        },
        "index": {
          "description": "Monadic mapWithKey",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "mapWithKeyM",
          "normalized": "(Key-\u003ea-\u003eb c)-\u003ePrefixTree a-\u003eb(PrefixTree c)",
          "package": "Holumbus-Searchengine",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003em b)-\u003ePrefixTree a-\u003em(PrefixTree b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:mapWithKeyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "mapWithKeyN",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e b) -\u003e PrefixTree a -\u003e PrefixTree b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#mapWithKeyN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "mapWithKeyN",
          "normalized": "(Key-\u003ea-\u003eb)-\u003ePrefixTree a-\u003ePrefixTree b",
          "package": "Holumbus-Searchengine",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003eb)-\u003ePrefixTree a-\u003ePrefixTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:mapWithKeyN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Is the key a member of the map?\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "member",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e Bool",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#member",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:member\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:member\"]"
        },
        "index": {
          "description": "min Is the key member of the map",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "member",
          "normalized": "Key-\u003ePrefixTree a-\u003eBool",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003ePrefixTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "next",
          "package": "Holumbus-Searchengine",
          "signature": "(PrefixTree v)",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:next\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:next\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "next",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "norm",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree v -\u003e PrefixTree v",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#norm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "norm",
          "normalized": "PrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree v-\u003ePrefixTree v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "normError",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#normError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "normError",
          "normalized": "String-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Error",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:normError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Is the map empty?\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "null",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e Bool",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:null\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:null\"]"
        },
        "index": {
          "description": "Is the map empty",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "null",
          "normalized": "PrefixTree a-\u003eBool",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "prefixFind",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e [a]",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#prefixFind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:prefixFind\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:prefixFind\"]"
        },
        "index": {
          "description": "max Find all values where the string is prefix of the key",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "prefixFind",
          "normalized": "Key-\u003ePrefixTree a-\u003e[a]",
          "package": "Holumbus-Searchengine",
          "partial": "Find",
          "signature": "Key-\u003ePrefixTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:prefixFind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key and include the keys \n in the result.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "prefixFindWithKey",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e [(Key, a)]",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#prefixFindWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:prefixFindWithKey\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:prefixFindWithKey\"]"
        },
        "index": {
          "description": "max Find all values where the string is prefix of the key and include the keys in the result",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "prefixFindWithKey",
          "normalized": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "Find With Key",
          "signature": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:prefixFindWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key and include the keys \n in the result. The result list contains short words first\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "prefixFindWithKeyBF",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e [(Key, a)]",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#prefixFindWithKeyBF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:prefixFindWithKeyBF\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:prefixFindWithKeyBF\"]"
        },
        "index": {
          "description": "max Find all values where the string is prefix of the key and include the keys in the result The result list contains short words first",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "prefixFindWithKeyBF",
          "normalized": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "Find With Key BF",
          "signature": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:prefixFindWithKeyBF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "rootLabel",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e Key) -\u003e PrefixTree v -\u003e [(Key, v)]",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#rootLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "rootLabel",
          "normalized": "(Key-\u003eKey)-\u003ePrefixTree a-\u003e[(Key,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "Label",
          "signature": "(Key-\u003eKey)-\u003ePrefixTree v-\u003e[(Key,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:rootLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Create a map with a single element.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "singleton",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#singleton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:singleton\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:singleton\"]"
        },
        "index": {
          "description": "Create map with single element",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "singleton",
          "normalized": "Key-\u003ea-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003ea-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "siseq",
          "package": "Holumbus-Searchengine",
          "signature": "Key1 -\u003e PrefixTree v -\u003e PrefixTree v",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#siseq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "siseq",
          "normalized": "Key-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003ePrefixTree v-\u003ePrefixTree v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:siseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The number of elements.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "size",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e Int",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#size",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:size\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:size\"]"
        },
        "index": {
          "description": "The number of elements",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "size",
          "normalized": "PrefixTree a-\u003eInt",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003espace required by a prefix tree (logically)\n\u003c/p\u003e\u003cp\u003eSingletons are counted as 0, all other n-ary constructors\n are counted as n+1 (1 for the constructor and 1 for every field)\n cons nodes of char lists are counted 2, 1 for the cons, 1 for the char\n for values only the ref to the value is counted, not the space for the value itself\n key chars are assumed to be unboxed\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "space",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e Int",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#space",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:space\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:space\"]"
        },
        "index": {
          "description": "space required by prefix tree logically Singletons are counted as all other n-ary constructors are counted as for the constructor and for every field cons nodes of char lists are counted for the cons for the char for values only the ref to the value is counted not the space for the value itself key chars are assumed to be unboxed",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "space",
          "normalized": "PrefixTree a-\u003eInt",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistics about the # of different nodes in an optimized prefix tree\n\u003c/p\u003e",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "stat",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e PrefixTree Int",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#stat",
          "type": "function"
        },
        "index": {
          "description": "statistics about the of different nodes in an optimized prefix tree",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "stat",
          "normalized": "PrefixTree a-\u003ePrefixTree Int",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a-\u003ePrefixTree Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "subForest",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e Key) -\u003e PrefixTree v -\u003e [(Key -\u003e Key, PrefixTree v)]",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#subForest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "subForest",
          "normalized": "(Key-\u003eKey)-\u003ePrefixTree a-\u003e[(Key-\u003eKey,PrefixTree a)]",
          "package": "Holumbus-Searchengine",
          "partial": "Forest",
          "signature": "(Key-\u003eKey)-\u003ePrefixTree v-\u003e[(Key-\u003eKey,PrefixTree v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:subForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the successors of a node\n\u003c/p\u003e",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "succ",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#succ",
          "type": "function"
        },
        "index": {
          "description": "Extract the successors of node",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "succ",
          "normalized": "PrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "sym",
          "package": "Holumbus-Searchengine",
          "signature": "Sym",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:sym\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:sym\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "sym",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "syms",
          "package": "Holumbus-Searchengine",
          "signature": "Key1",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:syms\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:syms\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "syms",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:syms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "toKey",
          "package": "Holumbus-Searchengine",
          "signature": "Key1 -\u003e Key",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#toKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "toKey",
          "normalized": "Key-\u003eKey",
          "package": "Holumbus-Searchengine",
          "partial": "Key",
          "signature": "Key-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:toKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all elements as list of key value pairs,\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "toList",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e [(Key, a)]",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#toList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:toList\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:toList\"]"
        },
        "index": {
          "description": "Returns all elements as list of key value pairs",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "toList",
          "normalized": "PrefixTree a-\u003e[(Key,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "List",
          "signature": "PrefixTree a-\u003e[(Key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns all key-value pairs in breadth first order (short words first)\n this enables prefix search with upper bounds on the size of the result set\n e.g. \u003ccode\u003e search ... \u003e\u003e\u003e toListBF \u003e\u003e\u003e take 1000 \u003c/code\u003e will give the 1000 shortest words\n found in the result set and will ignore all long words\n\u003c/p\u003e\u003cp\u003etoList is derived from the following code found in the net when searching haskell breadth first search\n\u003c/p\u003e\u003cp\u003eHaskell Standard Libraray Implementation\n\u003c/p\u003e\u003cpre\u003e br :: Tree a -\u003e [a]\n br t = map rootLabel $\n        concat $\n        takeWhile (not . null) $                \n        iterate (concatMap subForest) [t]\n\u003c/pre\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "toListBF",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree v -\u003e [(Key, v)]",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#toListBF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:toListBF\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:toListBF\"]"
        },
        "index": {
          "description": "returns all key-value pairs in breadth first order short words first this enables prefix search with upper bounds on the size of the result set e.g search toListBF take will give the shortest words found in the result set and will ignore all long words toList is derived from the following code found in the net when searching haskell breadth first search Haskell Standard Libraray Implementation br Tree br map rootLabel concat takeWhile not null iterate concatMap subForest",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "toListBF",
          "normalized": "PrefixTree a-\u003e[(Key,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "List BF",
          "signature": "PrefixTree v-\u003e[(Key,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:toListBF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert into an ordinary map.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "toMap",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e Map Key a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#toMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:toMap\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:toMap\"]"
        },
        "index": {
          "description": "Convert into an ordinary map",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "toMap",
          "normalized": "PrefixTree a-\u003eMap Key a",
          "package": "Holumbus-Searchengine",
          "partial": "Map",
          "signature": "PrefixTree a-\u003eMap Key a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "tree",
          "package": "Holumbus-Searchengine",
          "signature": "(PrefixTree v)",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:tree\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:tree\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "tree",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Left-biased union of two maps. It prefers the first map when duplicate keys are \n encountered, i.e. (\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "union",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#union",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:union\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:union\"]"
        },
        "index": {
          "description": "Left-biased union of two maps It prefers the first map when duplicate keys are encountered i.e union unionWith const",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "union",
          "normalized": "PrefixTree a-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "union'",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e a -\u003e a) -\u003e PrefixTree a -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#union%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "union'",
          "normalized": "(a-\u003ea-\u003ea)-\u003ePrefixTree a-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "(a-\u003ea-\u003ea)-\u003ePrefixTree a-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:union-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "union''",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e a -\u003e a) -\u003e (Key -\u003e Key) -\u003e PrefixTree a -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#union%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "union''",
          "normalized": "(Key-\u003ea-\u003ea-\u003ea)-\u003e(Key-\u003eKey)-\u003ePrefixTree a-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "(Key-\u003ea-\u003ea-\u003ea)-\u003e(Key-\u003eKey)-\u003ePrefixTree a-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:union-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Union with a combining function.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "unionWith",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e a -\u003e a) -\u003e PrefixTree a -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#unionWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:unionWith\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:unionWith\"]"
        },
        "index": {
          "description": "Union with combining function",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003ePrefixTree a-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ePrefixTree a-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Union with a combining function, including the key.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "unionWithKey",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e a -\u003e a) -\u003e PrefixTree a -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#unionWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:unionWithKey\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:unionWithKey\"]"
        },
        "index": {
          "description": "Union with combining function including the key",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "unionWithKey",
          "normalized": "(Key-\u003ea-\u003ea-\u003ea)-\u003ePrefixTree a-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003ea-\u003ea)-\u003ePrefixTree a-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Updates a value at a given key (if that key is in the trie) or deletes the \n element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. If the key is not found, the trie\n is returned unchanged.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "update",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e Maybe a) -\u003e Key -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#update",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:update\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:update\"]"
        },
        "index": {
          "description": "min Updates value at given key if that key is in the trie or deletes the element if the result of the updating function is Nothing If the key is not found the trie is returned unchanged",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eKey-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "(a-\u003eMaybe a)-\u003eKey-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "update'",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e Maybe a) -\u003e Key -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#update%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "update'",
          "normalized": "(a-\u003eMaybe a)-\u003eKey-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "(a-\u003eMaybe a)-\u003eKey-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:update-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Updates a value at a given key (if that key is in the trie) or deletes the \n element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. If the key is not found, the trie\n is returned unchanged.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "updateWithKey",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e a -\u003e Maybe a) -\u003e Key -\u003e PrefixTree a -\u003e PrefixTree a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#updateWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:updateWithKey\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:updateWithKey\"]"
        },
        "index": {
          "description": "min Updates value at given key if that key is in the trie or deletes the element if the result of the updating function is Nothing If the key is not found the trie is returned unchanged",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "updateWithKey",
          "normalized": "(Key-\u003ea-\u003eMaybe a)-\u003eKey-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003eMaybe a)-\u003eKey-\u003ePrefixTree a-\u003ePrefixTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:updateWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_branch",
          "package": "Holumbus-Searchengine",
          "signature": "Sym -\u003e b -\u003e b -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_branch",
          "normalized": "Sym-\u003ea-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "signature": "Sym-\u003eb-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:v_branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_brsel",
          "package": "Holumbus-Searchengine",
          "signature": "Key1 -\u003e a -\u003e b -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_brsel",
          "normalized": "Key-\u003ea-\u003eb-\u003eb",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003ea-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:v_brsel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_brseq",
          "package": "Holumbus-Searchengine",
          "signature": "Key1 -\u003e b -\u003e b -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_brseq",
          "normalized": "Key-\u003ea-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003eb-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:v_brseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_brval",
          "package": "Holumbus-Searchengine",
          "signature": "Sym -\u003e a -\u003e b -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_brval",
          "normalized": "Sym-\u003ea-\u003eb-\u003eb",
          "package": "Holumbus-Searchengine",
          "signature": "Sym-\u003ea-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:v_brval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_empty",
          "package": "Holumbus-Searchengine",
          "signature": "b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_empty",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:v_empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_last",
          "package": "Holumbus-Searchengine",
          "signature": "Sym -\u003e b -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_last",
          "normalized": "Sym-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "signature": "Sym-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:v_last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_leaf",
          "package": "Holumbus-Searchengine",
          "signature": "a -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_leaf",
          "normalized": "a-\u003eb",
          "package": "Holumbus-Searchengine",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:v_leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_lssel",
          "package": "Holumbus-Searchengine",
          "signature": "Key1 -\u003e a -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_lssel",
          "normalized": "Key-\u003ea-\u003eb",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:v_lssel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_lsseq",
          "package": "Holumbus-Searchengine",
          "signature": "Key1 -\u003e b -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_lsseq",
          "normalized": "Key-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "signature": "Key-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:v_lsseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_lsval",
          "package": "Holumbus-Searchengine",
          "signature": "Sym -\u003e a -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_lsval",
          "normalized": "Sym-\u003ea-\u003eb",
          "package": "Holumbus-Searchengine",
          "signature": "Sym-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:v_lsval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_val",
          "package": "Holumbus-Searchengine",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTreeVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "v_val",
          "normalized": "a-\u003eb-\u003eb",
          "package": "Holumbus-Searchengine",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:v_val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "val",
          "package": "Holumbus-Searchengine",
          "signature": "v -\u003e PrefixTree v -\u003e PrefixTree v",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "val",
          "normalized": "a-\u003ePrefixTree a-\u003ePrefixTree a",
          "package": "Holumbus-Searchengine",
          "signature": "v-\u003ePrefixTree v-\u003ePrefixTree v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the value of a node (if there is one)\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "value",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a -\u003e m a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:value\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:value\"]"
        },
        "index": {
          "description": "Extract the value of node if there is one",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "value",
          "normalized": "PrefixTree a-\u003eb a",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTree a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "value'",
          "package": "Holumbus-Searchengine",
          "signature": "v",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:value-39-\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:value-39-\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "value'",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:value-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the value of a node or return a default value if no value exists.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.Core\",\"Holumbus.Data.PrefixTree\"]",
          "name": "valueWithDefault",
          "package": "Holumbus-Searchengine",
          "signature": "a -\u003e PrefixTree a -\u003e a",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#valueWithDefault",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:valueWithDefault\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:valueWithDefault\"]"
        },
        "index": {
          "description": "Extract the value of node or return default value if no value exists",
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "valueWithDefault",
          "normalized": "a-\u003ePrefixTree a-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "With Default",
          "signature": "a-\u003ePrefixTree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:valueWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "visit",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTreeVisitor a b -\u003e PrefixTree a -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#visit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Core",
          "module": "Holumbus.Data.PrefixTree.Core",
          "name": "visit",
          "normalized": "PrefixTreeVisitor a b-\u003ePrefixTree a-\u003eb",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixTreeVisitor a b-\u003ePrefixTree a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Core.html#v:visit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for fuzzy search in a prefix tree\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "FuzzySearch",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for fuzzy search in prefix tree",
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "FuzzySearch",
          "package": "Holumbus-Searchengine",
          "partial": "Fuzzy Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.FuzzySearch\",\"Holumbus.Data.PrefixTree\"]",
          "name": "lookupNoCase",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e [(Key, a)]",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html#lookupNoCase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:lookupNoCase\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:lookupNoCase\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "lookupNoCase",
          "normalized": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "No Case",
          "signature": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:lookupNoCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.FuzzySearch\",\"Holumbus.Data.PrefixTree\"]",
          "name": "lookupNoCaseBF",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e [(Key, a)]",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html#lookupNoCaseBF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:lookupNoCaseBF\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:lookupNoCaseBF\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "lookupNoCaseBF",
          "normalized": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "No Case BF",
          "signature": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:lookupNoCaseBF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "noCaseKeys",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html#noCaseKeys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "noCaseKeys",
          "normalized": "Key-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "Case Keys",
          "signature": "Key-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:noCaseKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "noCasePS",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixSet -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html#noCasePS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "noCasePS",
          "normalized": "PrefixSet-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "Case PS",
          "signature": "PrefixSet-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:noCasePS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "noLowerCaseKeys",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html#noLowerCaseKeys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "noLowerCaseKeys",
          "normalized": "Key-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "Lower Case Keys",
          "signature": "Key-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:noLowerCaseKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "noLowerCasePS",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixSet -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html#noLowerCasePS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "noLowerCasePS",
          "normalized": "PrefixSet-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "Lower Case PS",
          "signature": "PrefixSet-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:noLowerCasePS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "noUmlautPS",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixSet -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html#noUmlautPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "noUmlautPS",
          "normalized": "PrefixSet-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "Umlaut PS",
          "signature": "PrefixSet-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:noUmlautPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.FuzzySearch\",\"Holumbus.Data.PrefixTree\"]",
          "name": "prefixFindCaseWithKey",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e [(Key, a)]",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html#prefixFindCaseWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:prefixFindCaseWithKey\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:prefixFindCaseWithKey\"]"
        },
        "index": {
          "description": "max Find all values where the string is prefix of the key",
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "prefixFindCaseWithKey",
          "normalized": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "Find Case With Key",
          "signature": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:prefixFindCaseWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n Breadth first variant, short words first in the result list\n\u003c/p\u003e",
          "module": "[\"Holumbus.Data.PrefixTree.FuzzySearch\",\"Holumbus.Data.PrefixTree\"]",
          "name": "prefixFindCaseWithKeyBF",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e [(Key, a)]",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html#prefixFindCaseWithKeyBF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:prefixFindCaseWithKeyBF\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:prefixFindCaseWithKeyBF\"]"
        },
        "index": {
          "description": "max Find all values where the string is prefix of the key Breadth first variant short words first in the result list",
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "prefixFindCaseWithKeyBF",
          "normalized": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "Find Case With Key BF",
          "signature": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:prefixFindCaseWithKeyBF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.FuzzySearch\",\"Holumbus.Data.PrefixTree\"]",
          "name": "prefixFindNoCase",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e [a]",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html#prefixFindNoCase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:prefixFindNoCase\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:prefixFindNoCase\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "prefixFindNoCase",
          "normalized": "Key-\u003ePrefixTree a-\u003e[a]",
          "package": "Holumbus-Searchengine",
          "partial": "Find No Case",
          "signature": "Key-\u003ePrefixTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:prefixFindNoCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.FuzzySearch\",\"Holumbus.Data.PrefixTree\"]",
          "name": "prefixFindNoCaseWithKey",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e [(Key, a)]",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html#prefixFindNoCaseWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:prefixFindNoCaseWithKey\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:prefixFindNoCaseWithKey\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "prefixFindNoCaseWithKey",
          "normalized": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "Find No Case With Key",
          "signature": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:prefixFindNoCaseWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Holumbus.Data.PrefixTree.FuzzySearch\",\"Holumbus.Data.PrefixTree\"]",
          "name": "prefixFindNoCaseWithKeyBF",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixTree a -\u003e [(Key, a)]",
          "source": "src/Holumbus-Data-PrefixTree-FuzzySearch.html#prefixFindNoCaseWithKeyBF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:prefixFindNoCaseWithKeyBF\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#v:prefixFindNoCaseWithKeyBF\"]"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree FuzzySearch",
          "module": "Holumbus.Data.PrefixTree.FuzzySearch",
          "name": "prefixFindNoCaseWithKeyBF",
          "normalized": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "Find No Case With Key BF",
          "signature": "Key-\u003ePrefixTree a-\u003e[(Key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-FuzzySearch.html#v:prefixFindNoCaseWithKeyBF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simplified version of PrefixTree for implementing sets.\n\u003c/p\u003e\u003cp\u003eThere is one important difference to the PrefixTree implementation:\n  The fields are not marked to be strict. This enables building the\n  set on the fly.\n\u003c/p\u003e\u003cp\u003eThis feature is used in fuzzy search, when an index tree is restricted\n  to a set of keys, e.g. the set of all none case significant keys\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "PrefixSet",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html",
          "type": "module"
        },
        "index": {
          "description": "simplified version of PrefixTree for implementing sets There is one important difference to the PrefixTree implementation The fields are not marked to be strict This enables building the set on the fly This feature is used in fuzzy search when an index tree is restricted to set of keys e.g the set of all none case significant keys",
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "PrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "Prefix Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of strings implemented as lazy prefix tree.\n \u003ccode\u003etype PrefixSet = PrefixTree ()\u003c/code\u003e is not feasable because of the strict fields in the PrefixTree definition\n\u003c/p\u003e",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "PrefixSet",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#PrefixSet",
          "type": "data"
        },
        "index": {
          "description": "Set of strings implemented as lazy prefix tree type PrefixSet PrefixTree is not feasable because of the strict fields in the PrefixTree definition",
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "PrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "Prefix Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#t:PrefixSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "PSelem",
          "package": "Holumbus-Searchengine",
          "signature": "PSelem PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#PrefixSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "PSelem",
          "package": "Holumbus-Searchengine",
          "partial": "PSelem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:PSelem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "PSempty",
          "package": "Holumbus-Searchengine",
          "signature": "PSempty",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#PrefixSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "PSempty",
          "package": "Holumbus-Searchengine",
          "partial": "PSempty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:PSempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "PSnext",
          "package": "Holumbus-Searchengine",
          "signature": "PSnext Sym PrefixSet PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#PrefixSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "PSnext",
          "package": "Holumbus-Searchengine",
          "partial": "PSnext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:PSnext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "elem0PS",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#elem0PS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "elem0PS",
          "package": "Holumbus-Searchengine",
          "partial": "PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:elem0PS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "elemPS",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixSet -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#elemPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "elemPS",
          "normalized": "PrefixSet-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "PS",
          "signature": "PrefixSet-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:elemPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "elemsPS",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixSet -\u003e [Key]",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#elemsPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "elemsPS",
          "normalized": "PrefixSet-\u003e[Key]",
          "package": "Holumbus-Searchengine",
          "partial": "PS",
          "signature": "PrefixSet-\u003e[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:elemsPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "emptyPS",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#emptyPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "emptyPS",
          "package": "Holumbus-Searchengine",
          "partial": "PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:emptyPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "foldPS",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e b -\u003e b) -\u003e b -\u003e (Key -\u003e Key) -\u003e PrefixSet -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#foldPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "foldPS",
          "normalized": "(Key-\u003ea-\u003ea)-\u003ea-\u003e(Key-\u003eKey)-\u003ePrefixSet-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "PS",
          "signature": "(Key-\u003eb-\u003eb)-\u003eb-\u003e(Key-\u003eKey)-\u003ePrefixSet-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:foldPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "foldWithKeyPS",
          "package": "Holumbus-Searchengine",
          "signature": "(Key -\u003e b -\u003e b) -\u003e b -\u003e PrefixSet -\u003e b",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#foldWithKeyPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "foldWithKeyPS",
          "normalized": "(Key-\u003ea-\u003ea)-\u003ea-\u003ePrefixSet-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "With Key PS",
          "signature": "(Key-\u003eb-\u003eb)-\u003eb-\u003ePrefixSet-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:foldWithKeyPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "fuzzyCharPS",
          "package": "Holumbus-Searchengine",
          "signature": "(Sym -\u003e [Sym]) -\u003e PrefixSet -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#fuzzyCharPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "fuzzyCharPS",
          "normalized": "(Sym-\u003e[Sym])-\u003ePrefixSet-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "Char PS",
          "signature": "(Sym-\u003e[Sym])-\u003ePrefixSet-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:fuzzyCharPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "fuzzyCharsPS",
          "package": "Holumbus-Searchengine",
          "signature": "(Sym -\u003e [Key]) -\u003e PrefixSet -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#fuzzyCharsPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "fuzzyCharsPS",
          "normalized": "(Sym-\u003e[Key])-\u003ePrefixSet-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "Chars PS",
          "signature": "(Sym-\u003e[Key])-\u003ePrefixSet-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:fuzzyCharsPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "lastPS",
          "package": "Holumbus-Searchengine",
          "signature": "Sym -\u003e PrefixSet -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#lastPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "lastPS",
          "normalized": "Sym-\u003ePrefixSet-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "PS",
          "signature": "Sym-\u003ePrefixSet-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:lastPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "nextPS",
          "package": "Holumbus-Searchengine",
          "signature": "Sym -\u003e PrefixSet -\u003e PrefixSet -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#nextPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "nextPS",
          "normalized": "Sym-\u003ePrefixSet-\u003ePrefixSet-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "PS",
          "signature": "Sym-\u003ePrefixSet-\u003ePrefixSet-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:nextPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "nullPS",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixSet -\u003e Bool",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#nullPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "nullPS",
          "normalized": "PrefixSet-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "PS",
          "signature": "PrefixSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:nullPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "prefixPS",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#prefixPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "prefixPS",
          "normalized": "Key-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "PS",
          "signature": "Key-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:prefixPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "singlePS",
          "package": "Holumbus-Searchengine",
          "signature": "Key -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#singlePS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "singlePS",
          "normalized": "Key-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "PS",
          "signature": "Key-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:singlePS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "unionPS",
          "package": "Holumbus-Searchengine",
          "signature": "PrefixSet -\u003e PrefixSet -\u003e PrefixSet",
          "source": "src/Holumbus-Data-PrefixTree-PrefixSet.html#unionPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree PrefixSet",
          "module": "Holumbus.Data.PrefixTree.PrefixSet",
          "name": "unionPS",
          "normalized": "PrefixSet-\u003ePrefixSet-\u003ePrefixSet",
          "package": "Holumbus-Searchengine",
          "partial": "PS",
          "signature": "PrefixSet-\u003ePrefixSet-\u003ePrefixSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-PrefixSet.html#v:unionPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types used in all PrefixTree modules\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Data.PrefixTree.Types",
          "name": "Types",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Data types used in all PrefixTree modules",
          "hierarchy": "Holumbus Data PrefixTree Types",
          "module": "Holumbus.Data.PrefixTree.Types",
          "name": "Types",
          "package": "Holumbus-Searchengine",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Types",
          "name": "Key",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree-Types.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Types",
          "module": "Holumbus.Data.PrefixTree.Types",
          "name": "Key",
          "package": "Holumbus-Searchengine",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Types.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree.Types",
          "name": "Sym",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree-Types.html#Sym",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree Types",
          "module": "Holumbus.Data.PrefixTree.Types",
          "name": "Sym",
          "package": "Holumbus-Searchengine",
          "partial": "Sym",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree-Types.html#t:Sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFacade for prefix tree implementation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Data.PrefixTree",
          "name": "PrefixTree",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree.html",
          "type": "module"
        },
        "index": {
          "description": "Facade for prefix tree implementation",
          "hierarchy": "Holumbus Data PrefixTree",
          "module": "Holumbus.Data.PrefixTree",
          "name": "PrefixTree",
          "package": "Holumbus-Searchengine",
          "partial": "Prefix Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree",
          "name": "Key",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree-Types.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree",
          "module": "Holumbus.Data.PrefixTree",
          "name": "Key",
          "package": "Holumbus-Searchengine",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Data.PrefixTree",
          "name": "PrefixTree",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Data-PrefixTree-Core.html#PrefixTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus Data PrefixTree",
          "module": "Holumbus.Data.PrefixTree",
          "name": "PrefixTree",
          "package": "Holumbus-Searchengine",
          "partial": "Prefix Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Data-PrefixTree.html#t:PrefixTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic data types for index\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "BasicTypes",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-BasicTypes.html",
          "type": "module"
        },
        "index": {
          "description": "Basic data types for index",
          "hierarchy": "Holumbus Index Common BasicTypes",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "BasicTypes",
          "package": "Holumbus-Searchengine",
          "partial": "Basic Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-BasicTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe content of a document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "Content",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-BasicTypes.html#Content",
          "type": "type"
        },
        "index": {
          "description": "The content of document",
          "hierarchy": "Holumbus Index Common BasicTypes",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "Content",
          "package": "Holumbus-Searchengine",
          "partial": "Content",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-BasicTypes.html#t:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a context.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "Context",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-BasicTypes.html#Context",
          "type": "type"
        },
        "index": {
          "description": "The name of context",
          "hierarchy": "Holumbus Index Common BasicTypes",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "Context",
          "package": "Holumbus-Searchengine",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-BasicTypes.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe position of a word in the document.\ntype Position                 = Int\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "Position",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-BasicTypes.html#Position",
          "type": "type"
        },
        "index": {
          "description": "The position of word in the document type Position Int",
          "hierarchy": "Holumbus Index Common BasicTypes",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "Position",
          "package": "Holumbus-Searchengine",
          "partial": "Position",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-BasicTypes.html#t:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe title of a document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "Title",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-BasicTypes.html#Title",
          "type": "type"
        },
        "index": {
          "description": "The title of document",
          "hierarchy": "Holumbus Index Common BasicTypes",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "Title",
          "package": "Holumbus-Searchengine",
          "partial": "Title",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-BasicTypes.html#t:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe URI describing the location of the original document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "URI",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-BasicTypes.html#URI",
          "type": "type"
        },
        "index": {
          "description": "The URI describing the location of the original document",
          "hierarchy": "Holumbus Index Common BasicTypes",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "URI",
          "package": "Holumbus-Searchengine",
          "partial": "URI",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-BasicTypes.html#t:URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single word.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "Word",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-BasicTypes.html#Word",
          "type": "type"
        },
        "index": {
          "description": "single word",
          "hierarchy": "Holumbus Index Common BasicTypes",
          "module": "Holumbus.Index.Common.BasicTypes",
          "name": "Word",
          "package": "Holumbus-Searchengine",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-BasicTypes.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eProviding space efficient difference encoding for lists of integers. The encoded\n  lists are compressed using \u003ca\u003eHolumbus.Data.Crunch\u003c/a\u003e to save even more space. For\n  convenience, conversion functions for \u003ca\u003eData.IntSet\u003c/a\u003e are provided. Only works\n  for non-negative integers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "DiffList",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-DiffList.html",
          "type": "module"
        },
        "index": {
          "description": "Version Providing space efficient difference encoding for lists of integers The encoded lists are compressed using Holumbus.Data.Crunch to save even more space For convenience conversion functions for Data.IntSet are provided Only works for non-negative integers",
          "hierarchy": "Holumbus Index Common DiffList",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "DiffList",
          "package": "Holumbus-Searchengine",
          "partial": "Diff List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DiffList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of differences.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "DiffList",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-DiffList.html#DiffList",
          "type": "type"
        },
        "index": {
          "description": "list of differences",
          "hierarchy": "Holumbus Index Common DiffList",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "DiffList",
          "package": "Holumbus-Searchengine",
          "partial": "Diff List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DiffList.html#t:DiffList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all differences. Used for debugging purposes.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "diffs",
          "package": "Holumbus-Searchengine",
          "signature": "DiffList -\u003e [Word32]",
          "source": "src/Holumbus-Index-Common-DiffList.html#diffs",
          "type": "function"
        },
        "index": {
          "description": "Returns all differences Used for debugging purposes",
          "hierarchy": "Holumbus Index Common DiffList",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "diffs",
          "normalized": "DiffList-\u003e[Word]",
          "package": "Holumbus-Searchengine",
          "signature": "DiffList-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DiffList.html#v:diffs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of positions into a list of difference encoded values.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "fromList",
          "package": "Holumbus-Searchengine",
          "signature": "[Position] -\u003e DiffList",
          "source": "src/Holumbus-Index-Common-DiffList.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list of positions into list of difference encoded values",
          "hierarchy": "Holumbus Index Common DiffList",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "fromList",
          "normalized": "[Position]-\u003eDiffList",
          "package": "Holumbus-Searchengine",
          "partial": "List",
          "signature": "[Position]-\u003eDiffList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DiffList.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a set of integers into a list of difference encoded values.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "fromPositions",
          "package": "Holumbus-Searchengine",
          "signature": "Positions -\u003e DiffList",
          "source": "src/Holumbus-Index-Common-DiffList.html#fromPositions",
          "type": "function"
        },
        "index": {
          "description": "Convert set of integers into list of difference encoded values",
          "hierarchy": "Holumbus Index Common DiffList",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "fromPositions",
          "normalized": "Positions-\u003eDiffList",
          "package": "Holumbus-Searchengine",
          "partial": "Positions",
          "signature": "Positions-\u003eDiffList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DiffList.html#v:fromPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the difference encoded values to a list of integers.\n The resulting list will be\n sorted in ascending order\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "toList",
          "package": "Holumbus-Searchengine",
          "signature": "DiffList -\u003e [Position]",
          "source": "src/Holumbus-Index-Common-DiffList.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert the difference encoded values to list of integers The resulting list will be sorted in ascending order",
          "hierarchy": "Holumbus Index Common DiffList",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "toList",
          "normalized": "DiffList-\u003e[Position]",
          "package": "Holumbus-Searchengine",
          "partial": "List",
          "signature": "DiffList-\u003e[Position]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DiffList.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the difference encoded values to a list of integers.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "toPositions",
          "package": "Holumbus-Searchengine",
          "signature": "DiffList -\u003e Positions",
          "source": "src/Holumbus-Index-Common-DiffList.html#toPositions",
          "type": "function"
        },
        "index": {
          "description": "Convert the difference encoded values to list of integers",
          "hierarchy": "Holumbus Index Common DiffList",
          "module": "Holumbus.Index.Common.DiffList",
          "name": "toPositions",
          "normalized": "DiffList-\u003ePositions",
          "package": "Holumbus-Searchengine",
          "partial": "Positions",
          "signature": "DiffList-\u003ePositions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DiffList.html#v:toPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe document identifier type DocId\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.Common.DocId",
          "name": "DocId",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-DocId.html",
          "type": "module"
        },
        "index": {
          "description": "The document identifier type DocId",
          "hierarchy": "Holumbus Index Common DocId",
          "module": "Holumbus.Index.Common.DocId",
          "name": "DocId",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocId.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unique identifier of a document\n (created upon insertion into the document table).\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.DocId",
          "name": "DocId",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-DocId.html#DocId",
          "type": "newtype"
        },
        "index": {
          "description": "The unique identifier of document created upon insertion into the document table",
          "hierarchy": "Holumbus Index Common DocId",
          "module": "Holumbus.Index.Common.DocId",
          "name": "DocId",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocId.html#t:DocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocId",
          "name": "DocId",
          "package": "Holumbus-Searchengine",
          "signature": "DocId",
          "source": "src/Holumbus-Index-Common-DocId.html#DocId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocId",
          "module": "Holumbus.Index.Common.DocId",
          "name": "DocId",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocId.html#v:DocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocId",
          "name": "addDocId",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e DocId -\u003e DocId",
          "source": "src/Holumbus-Index-Common-DocId.html#addDocId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocId",
          "module": "Holumbus.Index.Common.DocId",
          "name": "addDocId",
          "normalized": "DocId-\u003eDocId-\u003eDocId",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id",
          "signature": "DocId-\u003eDocId-\u003eDocId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocId.html#v:addDocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocId",
          "name": "firstDocId",
          "package": "Holumbus-Searchengine",
          "signature": "DocId",
          "source": "src/Holumbus-Index-Common-DocId.html#firstDocId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocId",
          "module": "Holumbus.Index.Common.DocId",
          "name": "firstDocId",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocId.html#v:firstDocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocId",
          "name": "incrDocId",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e DocId",
          "source": "src/Holumbus-Index-Common-DocId.html#incrDocId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocId",
          "module": "Holumbus.Index.Common.DocId",
          "name": "incrDocId",
          "normalized": "DocId-\u003eDocId",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id",
          "signature": "DocId-\u003eDocId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocId.html#v:incrDocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocId",
          "name": "mkDocId",
          "package": "Holumbus-Searchengine",
          "signature": "Integer -\u003e DocId",
          "source": "src/Holumbus-Index-Common-DocId.html#mkDocId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocId",
          "module": "Holumbus.Index.Common.DocId",
          "name": "mkDocId",
          "normalized": "Integer-\u003eDocId",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id",
          "signature": "Integer-\u003eDocId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocId.html#v:mkDocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocId",
          "name": "nullDocId",
          "package": "Holumbus-Searchengine",
          "signature": "DocId",
          "source": "src/Holumbus-Index-Common-DocId.html#nullDocId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocId",
          "module": "Holumbus.Index.Common.DocId",
          "name": "nullDocId",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocId.html#v:nullDocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocId",
          "name": "subDocId",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e DocId -\u003e DocId",
          "source": "src/Holumbus-Index-Common-DocId.html#subDocId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocId",
          "module": "Holumbus.Index.Common.DocId",
          "name": "subDocId",
          "normalized": "DocId-\u003eDocId-\u003eDocId",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id",
          "signature": "DocId-\u003eDocId-\u003eDocId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocId.html#v:subDocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocId",
          "name": "theDocId",
          "package": "Holumbus-Searchengine",
          "signature": "Int64",
          "source": "src/Holumbus-Index-Common-DocId.html#DocId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocId",
          "module": "Holumbus.Index.Common.DocId",
          "name": "theDocId",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocId.html#v:theDocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocId",
          "name": "xpDocId",
          "package": "Holumbus-Searchengine",
          "signature": "PU DocId",
          "source": "src/Holumbus-Index-Common-DocId.html#xpDocId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocId",
          "module": "Holumbus.Index.Common.DocId",
          "name": "xpDocId",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocId.html#v:xpDocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDocId maps\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "DocIdMap",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-DocIdMap.html",
          "type": "module"
        },
        "index": {
          "description": "DocId maps",
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "DocIdMap",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "DocIdMap",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#DocIdMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "DocIdMap",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#t:DocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "deleteDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e DocIdMap v -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#deleteDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "deleteDocIdMap",
          "normalized": "DocId-\u003eDocIdMap a-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "DocId-\u003eDocIdMap v-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:deleteDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "differenceDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap v -\u003e DocIdMap v -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#differenceDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "differenceDocIdMap",
          "normalized": "DocIdMap a-\u003eDocIdMap a-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "DocIdMap v-\u003eDocIdMap v-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:differenceDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "differenceWithDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "(v -\u003e v -\u003e Maybe v) -\u003e DocIdMap v -\u003e DocIdMap v -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#differenceWithDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "differenceWithDocIdMap",
          "normalized": "(a-\u003ea-\u003eMaybe a)-\u003eDocIdMap a-\u003eDocIdMap a-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "With Doc Id Map",
          "signature": "(v-\u003ev-\u003eMaybe v)-\u003eDocIdMap v-\u003eDocIdMap v-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:differenceWithDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "elemsDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap v -\u003e [v]",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#elemsDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "elemsDocIdMap",
          "normalized": "DocIdMap a-\u003e[a]",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "DocIdMap v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:elemsDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "emptyDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#emptyDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "emptyDocIdMap",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:emptyDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "filterDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "(v -\u003e Bool) -\u003e DocIdMap v -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#filterDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "filterDocIdMap",
          "normalized": "(a-\u003eBool)-\u003eDocIdMap a-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "(v-\u003eBool)-\u003eDocIdMap v-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:filterDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "filterWithKeyDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "(DocId -\u003e v -\u003e Bool) -\u003e DocIdMap v -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#filterWithKeyDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "filterWithKeyDocIdMap",
          "normalized": "(DocId-\u003ea-\u003eBool)-\u003eDocIdMap a-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "With Key Doc Id Map",
          "signature": "(DocId-\u003ev-\u003eBool)-\u003eDocIdMap v-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:filterWithKeyDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "foldDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "(v -\u003e b -\u003e b) -\u003e b -\u003e DocIdMap v -\u003e b",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#foldDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "foldDocIdMap",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eDocIdMap a-\u003eb",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "(v-\u003eb-\u003eb)-\u003eb-\u003eDocIdMap v-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:foldDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "foldWithKeyDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "(DocId -\u003e v -\u003e b -\u003e b) -\u003e b -\u003e DocIdMap v -\u003e b",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#foldWithKeyDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "foldWithKeyDocIdMap",
          "normalized": "(DocId-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eDocIdMap a-\u003eb",
          "package": "Holumbus-Searchengine",
          "partial": "With Key Doc Id Map",
          "signature": "(DocId-\u003ev-\u003eb-\u003eb)-\u003eb-\u003eDocIdMap v-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:foldWithKeyDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "fromListDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "[(DocId, v)] -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#fromListDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "fromListDocIdMap",
          "normalized": "[(DocId,a)]-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "List Doc Id Map",
          "signature": "[(DocId,v)]-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:fromListDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "insertDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e v -\u003e DocIdMap v -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#insertDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "insertDocIdMap",
          "normalized": "DocId-\u003ea-\u003eDocIdMap a-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "DocId-\u003ev-\u003eDocIdMap v-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:insertDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "insertWithDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "(v -\u003e v -\u003e v) -\u003e DocId -\u003e v -\u003e DocIdMap v -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#insertWithDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "insertWithDocIdMap",
          "normalized": "(a-\u003ea-\u003ea)-\u003eDocId-\u003ea-\u003eDocIdMap a-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "With Doc Id Map",
          "signature": "(v-\u003ev-\u003ev)-\u003eDocId-\u003ev-\u003eDocIdMap v-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:insertWithDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "intersectionDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap v -\u003e DocIdMap v -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#intersectionDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "intersectionDocIdMap",
          "normalized": "DocIdMap a-\u003eDocIdMap a-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "DocIdMap v-\u003eDocIdMap v-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:intersectionDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "intersectionWithDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "(v -\u003e v -\u003e v) -\u003e DocIdMap v -\u003e DocIdMap v -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#intersectionWithDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "intersectionWithDocIdMap",
          "normalized": "(a-\u003ea-\u003ea)-\u003eDocIdMap a-\u003eDocIdMap a-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "With Doc Id Map",
          "signature": "(v-\u003ev-\u003ev)-\u003eDocIdMap v-\u003eDocIdMap v-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:intersectionWithDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "isIntervallDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap v -\u003e Bool",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#isIntervallDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "isIntervallDocIdMap",
          "normalized": "DocIdMap a-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Intervall Doc Id Map",
          "signature": "DocIdMap v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:isIntervallDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "keysDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap v -\u003e [DocId]",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#keysDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "keysDocIdMap",
          "normalized": "DocIdMap a-\u003e[DocId]",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "DocIdMap v-\u003e[DocId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:keysDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "lookupDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e DocIdMap v -\u003e Maybe v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#lookupDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "lookupDocIdMap",
          "normalized": "DocId-\u003eDocIdMap a-\u003eMaybe a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "DocId-\u003eDocIdMap v-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:lookupDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "mapDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "(v -\u003e r) -\u003e DocIdMap v -\u003e DocIdMap r",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#mapDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "mapDocIdMap",
          "normalized": "(a-\u003eb)-\u003eDocIdMap a-\u003eDocIdMap b",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "(v-\u003er)-\u003eDocIdMap v-\u003eDocIdMap r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:mapDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "mapWithKeyDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "(DocId -\u003e v -\u003e r) -\u003e DocIdMap v -\u003e DocIdMap r",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#mapWithKeyDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "mapWithKeyDocIdMap",
          "normalized": "(DocId-\u003ea-\u003eb)-\u003eDocIdMap a-\u003eDocIdMap b",
          "package": "Holumbus-Searchengine",
          "partial": "With Key Doc Id Map",
          "signature": "(DocId-\u003ev-\u003er)-\u003eDocIdMap v-\u003eDocIdMap r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:mapWithKeyDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "maxKeyDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap v -\u003e DocId",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#maxKeyDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "maxKeyDocIdMap",
          "normalized": "DocIdMap a-\u003eDocId",
          "package": "Holumbus-Searchengine",
          "partial": "Key Doc Id Map",
          "signature": "DocIdMap v-\u003eDocId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:maxKeyDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "memberDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e DocIdMap v -\u003e Bool",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#memberDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "memberDocIdMap",
          "normalized": "DocId-\u003eDocIdMap a-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "DocId-\u003eDocIdMap v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:memberDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "minKeyDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap v -\u003e DocId",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#minKeyDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "minKeyDocIdMap",
          "normalized": "DocIdMap a-\u003eDocId",
          "package": "Holumbus-Searchengine",
          "partial": "Key Doc Id Map",
          "signature": "DocIdMap v-\u003eDocId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:minKeyDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "nullDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap v -\u003e Bool",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#nullDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "nullDocIdMap",
          "normalized": "DocIdMap a-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "DocIdMap v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:nullDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "singletonDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e v -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#singletonDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "singletonDocIdMap",
          "normalized": "DocId-\u003ea-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "DocId-\u003ev-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:singletonDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "sizeDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap v -\u003e Int",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#sizeDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "sizeDocIdMap",
          "normalized": "DocIdMap a-\u003eInt",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "DocIdMap v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:sizeDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "toListDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap v -\u003e [(DocId, v)]",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#toListDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "toListDocIdMap",
          "normalized": "DocIdMap a-\u003e[(DocId,a)]",
          "package": "Holumbus-Searchengine",
          "partial": "List Doc Id Map",
          "signature": "DocIdMap v-\u003e[(DocId,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:toListDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "unionDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap v -\u003e DocIdMap v -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#unionDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "unionDocIdMap",
          "normalized": "DocIdMap a-\u003eDocIdMap a-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Map",
          "signature": "DocIdMap v-\u003eDocIdMap v-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:unionDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "unionWithDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "(v -\u003e v -\u003e v) -\u003e DocIdMap v -\u003e DocIdMap v -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#unionWithDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "unionWithDocIdMap",
          "normalized": "(a-\u003ea-\u003ea)-\u003eDocIdMap a-\u003eDocIdMap a-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "With Doc Id Map",
          "signature": "(v-\u003ev-\u003ev)-\u003eDocIdMap v-\u003eDocIdMap v-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:unionWithDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "unionsWithDocIdMap",
          "package": "Holumbus-Searchengine",
          "signature": "(v -\u003e v -\u003e v) -\u003e [DocIdMap v] -\u003e DocIdMap v",
          "source": "src/Holumbus-Index-Common-DocIdMap.html#unionsWithDocIdMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common DocIdMap",
          "module": "Holumbus.Index.Common.DocIdMap",
          "name": "unionsWithDocIdMap",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[DocIdMap a]-\u003eDocIdMap a",
          "package": "Holumbus-Searchengine",
          "partial": "With Doc Id Map",
          "signature": "(v-\u003ev-\u003ev)-\u003e[DocIdMap v]-\u003eDocIdMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-DocIdMap.html#v:unionsWithDocIdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Document datatype\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.Common.Document",
          "name": "Document",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-Document.html",
          "type": "module"
        },
        "index": {
          "description": "The Document datatype",
          "hierarchy": "Holumbus Index Common Document",
          "module": "Holumbus.Index.Common.Document",
          "name": "Document",
          "package": "Holumbus-Searchengine",
          "partial": "Document",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Document.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA document consists of a title and its unique identifier (URI)\n and a customizable component\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.Document",
          "name": "Document",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-Document.html#Document",
          "type": "data"
        },
        "index": {
          "description": "document consists of title and its unique identifier URI and customizable component",
          "hierarchy": "Holumbus Index Common Document",
          "module": "Holumbus.Index.Common.Document",
          "name": "Document",
          "package": "Holumbus-Searchengine",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Document.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Document",
          "name": "Document",
          "package": "Holumbus-Searchengine",
          "signature": "Document",
          "source": "src/Holumbus-Index-Common-Document.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Document",
          "module": "Holumbus.Index.Common.Document",
          "name": "Document",
          "package": "Holumbus-Searchengine",
          "partial": "Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Document.html#v:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Document",
          "name": "custom",
          "package": "Holumbus-Searchengine",
          "signature": "(Maybe a)",
          "source": "src/Holumbus-Index-Common-Document.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Document",
          "module": "Holumbus.Index.Common.Document",
          "name": "custom",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Document.html#v:custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Document",
          "name": "title",
          "package": "Holumbus-Searchengine",
          "signature": "Title",
          "source": "src/Holumbus-Index-Common-Document.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Document",
          "module": "Holumbus.Index.Common.Document",
          "name": "title",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Document.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Document",
          "name": "uri",
          "package": "Holumbus-Searchengine",
          "signature": "URI",
          "source": "src/Holumbus-Index-Common-Document.html#Document",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Document",
          "module": "Holumbus.Index.Common.Document",
          "name": "uri",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Document.html#v:uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLoad and store indexes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.Common.LoadStore",
          "name": "LoadStore",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-LoadStore.html",
          "type": "module"
        },
        "index": {
          "description": "Load and store indexes",
          "hierarchy": "Holumbus Index Common LoadStore",
          "module": "Holumbus.Index.Common.LoadStore",
          "name": "LoadStore",
          "package": "Holumbus-Searchengine",
          "partial": "Load Store",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-LoadStore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad from a binary file.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.LoadStore",
          "name": "loadFromBinFile",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e IO a",
          "source": "src/Holumbus-Index-Common-LoadStore.html#loadFromBinFile",
          "type": "function"
        },
        "index": {
          "description": "Load from binary file",
          "hierarchy": "Holumbus Index Common LoadStore",
          "module": "Holumbus.Index.Common.LoadStore",
          "name": "loadFromBinFile",
          "normalized": "FilePath-\u003eIO a",
          "package": "Holumbus-Searchengine",
          "partial": "From Bin File",
          "signature": "FilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-LoadStore.html#v:loadFromBinFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to determine the file type automatically. The file is loaded as XML if the filename\n ends with \".xml\" and otherwise is loaded as binary file.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.LoadStore",
          "name": "loadFromFile",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e IO a",
          "source": "src/Holumbus-Index-Common-LoadStore.html#loadFromFile",
          "type": "function"
        },
        "index": {
          "description": "Try to determine the file type automatically The file is loaded as XML if the filename ends with xml and otherwise is loaded as binary file",
          "hierarchy": "Holumbus Index Common LoadStore",
          "module": "Holumbus.Index.Common.LoadStore",
          "name": "loadFromFile",
          "normalized": "FilePath-\u003eIO a",
          "package": "Holumbus-Searchengine",
          "partial": "From File",
          "signature": "FilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-LoadStore.html#v:loadFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad from XML file.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.LoadStore",
          "name": "loadFromXmlFile",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e IO a",
          "source": "src/Holumbus-Index-Common-LoadStore.html#loadFromXmlFile",
          "type": "function"
        },
        "index": {
          "description": "Load from XML file",
          "hierarchy": "Holumbus Index Common LoadStore",
          "module": "Holumbus.Index.Common.LoadStore",
          "name": "loadFromXmlFile",
          "normalized": "FilePath-\u003eIO a",
          "package": "Holumbus-Searchengine",
          "partial": "From Xml File",
          "signature": "FilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-LoadStore.html#v:loadFromXmlFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to a binary file.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.LoadStore",
          "name": "writeToBinFile",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e a -\u003e IO ()",
          "source": "src/Holumbus-Index-Common-LoadStore.html#writeToBinFile",
          "type": "function"
        },
        "index": {
          "description": "Write to binary file",
          "hierarchy": "Holumbus Index Common LoadStore",
          "module": "Holumbus.Index.Common.LoadStore",
          "name": "writeToBinFile",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "Holumbus-Searchengine",
          "partial": "To Bin File",
          "signature": "FilePath-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-LoadStore.html#v:writeToBinFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to XML file.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.LoadStore",
          "name": "writeToXmlFile",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e a -\u003e IO ()",
          "source": "src/Holumbus-Index-Common-LoadStore.html#writeToXmlFile",
          "type": "function"
        },
        "index": {
          "description": "Write to XML file",
          "hierarchy": "Holumbus Index Common LoadStore",
          "module": "Holumbus.Index.Common.LoadStore",
          "name": "writeToXmlFile",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "Holumbus-Searchengine",
          "partial": "To Xml File",
          "signature": "FilePath-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-LoadStore.html#v:writeToXmlFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Occurences data type\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "Occurences",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-Occurences.html",
          "type": "module"
        },
        "index": {
          "description": "The Occurences data type",
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "Occurences",
          "package": "Holumbus-Searchengine",
          "partial": "Occurences",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe occurrences in a number of documents.\n A mapping from document ids to the positions in the document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "Occurrences",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-Occurences.html#Occurrences",
          "type": "type"
        },
        "index": {
          "description": "The occurrences in number of documents mapping from document ids to the positions in the document",
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "Occurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#t:Occurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe positions of the word in the document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "Positions",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-Occurences.html#Positions",
          "type": "type"
        },
        "index": {
          "description": "The positions of the word in the document",
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "Positions",
          "package": "Holumbus-Searchengine",
          "partial": "Positions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#t:Positions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Occurences",
          "name": "deleteOccurrence",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e Position -\u003e Occurrences -\u003e Occurrences",
          "source": "src/Holumbus-Index-Common-Occurences.html#deleteOccurrence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "deleteOccurrence",
          "normalized": "DocId-\u003ePosition-\u003eOccurrences-\u003eOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrence",
          "signature": "DocId-\u003ePosition-\u003eOccurrences-\u003eOccurrences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:deleteOccurrence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Occurences",
          "name": "diffOccurrences",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e Occurrences -\u003e Occurrences",
          "source": "src/Holumbus-Index-Common-Occurences.html#diffOccurrences",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "diffOccurrences",
          "normalized": "Occurrences-\u003eOccurrences-\u003eOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "signature": "Occurrences-\u003eOccurrences-\u003eOccurrences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:diffOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty set of positions.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "emptyOccurrences",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences",
          "source": "src/Holumbus-Index-Common-Occurences.html#emptyOccurrences",
          "type": "function"
        },
        "index": {
          "description": "Create an empty set of positions",
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "emptyOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:emptyOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Occurences",
          "name": "emptyPos",
          "package": "Holumbus-Searchengine",
          "signature": "Positions",
          "source": "src/Holumbus-Index-Common-Occurences.html#emptyPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "emptyPos",
          "package": "Holumbus-Searchengine",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:emptyPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Occurences",
          "name": "foldPos",
          "package": "Holumbus-Searchengine",
          "signature": "(Position -\u003e r -\u003e r) -\u003e r -\u003e Positions -\u003e r",
          "source": "src/Holumbus-Index-Common-Occurences.html#foldPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "foldPos",
          "normalized": "(Position-\u003ea-\u003ea)-\u003ea-\u003ePositions-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Pos",
          "signature": "(Position-\u003er-\u003er)-\u003er-\u003ePositions-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:foldPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Occurences",
          "name": "fromListPos",
          "package": "Holumbus-Searchengine",
          "signature": "[Position] -\u003e Positions",
          "source": "src/Holumbus-Index-Common-Occurences.html#fromListPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "fromListPos",
          "normalized": "[Position]-\u003ePositions",
          "package": "Holumbus-Searchengine",
          "partial": "List Pos",
          "signature": "[Position]-\u003ePositions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:fromListPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Occurences",
          "name": "insertOccurrence",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e Position -\u003e Occurrences -\u003e Occurrences",
          "source": "src/Holumbus-Index-Common-Occurences.html#insertOccurrence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "insertOccurrence",
          "normalized": "DocId-\u003ePosition-\u003eOccurrences-\u003eOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrence",
          "signature": "DocId-\u003ePosition-\u003eOccurrences-\u003eOccurrences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:insertOccurrence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Occurences",
          "name": "memberPos",
          "package": "Holumbus-Searchengine",
          "signature": "Position -\u003e Positions -\u003e Bool",
          "source": "src/Holumbus-Index-Common-Occurences.html#memberPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "memberPos",
          "normalized": "Position-\u003ePositions-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Pos",
          "signature": "Position-\u003ePositions-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:memberPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two occurrences.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "mergeOccurrences",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e Occurrences -\u003e Occurrences",
          "source": "src/Holumbus-Index-Common-Occurences.html#mergeOccurrences",
          "type": "function"
        },
        "index": {
          "description": "Merge two occurrences",
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "mergeOccurrences",
          "normalized": "Occurrences-\u003eOccurrences-\u003eOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "signature": "Occurrences-\u003eOccurrences-\u003eOccurrences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:mergeOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest on empty set of positions.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "nullOccurrences",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e Bool",
          "source": "src/Holumbus-Index-Common-Occurences.html#nullOccurrences",
          "type": "function"
        },
        "index": {
          "description": "Test on empty set of positions",
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "nullOccurrences",
          "normalized": "Occurrences-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "signature": "Occurrences-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:nullOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty set of positions.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "singletonOccurrence",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e Position -\u003e Occurrences",
          "source": "src/Holumbus-Index-Common-Occurences.html#singletonOccurrence",
          "type": "function"
        },
        "index": {
          "description": "Create an empty set of positions",
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "singletonOccurrence",
          "normalized": "DocId-\u003ePosition-\u003eOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrence",
          "signature": "DocId-\u003ePosition-\u003eOccurrences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:singletonOccurrence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Occurences",
          "name": "singletonPos",
          "package": "Holumbus-Searchengine",
          "signature": "Position -\u003e Positions",
          "source": "src/Holumbus-Index-Common-Occurences.html#singletonPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "singletonPos",
          "normalized": "Position-\u003ePositions",
          "package": "Holumbus-Searchengine",
          "partial": "Pos",
          "signature": "Position-\u003ePositions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:singletonPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the number of positions in a set of occurrences.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "sizeOccurrences",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e Int",
          "source": "src/Holumbus-Index-Common-Occurences.html#sizeOccurrences",
          "type": "function"
        },
        "index": {
          "description": "Determine the number of positions in set of occurrences",
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "sizeOccurrences",
          "normalized": "Occurrences-\u003eInt",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "signature": "Occurrences-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:sizeOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Occurences",
          "name": "sizePos",
          "package": "Holumbus-Searchengine",
          "signature": "Positions -\u003e Int",
          "source": "src/Holumbus-Index-Common-Occurences.html#sizePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "sizePos",
          "normalized": "Positions-\u003eInt",
          "package": "Holumbus-Searchengine",
          "partial": "Pos",
          "signature": "Positions-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:sizePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstract occurrences from some other occurrences.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "substractOccurrences",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e Occurrences -\u003e Occurrences",
          "source": "src/Holumbus-Index-Common-Occurences.html#substractOccurrences",
          "type": "function"
        },
        "index": {
          "description": "Substract occurrences from some other occurrences",
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "substractOccurrences",
          "normalized": "Occurrences-\u003eOccurrences-\u003eOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "signature": "Occurrences-\u003eOccurrences-\u003eOccurrences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:substractOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Occurences",
          "name": "toAscListPos",
          "package": "Holumbus-Searchengine",
          "signature": "Positions -\u003e [Position]",
          "source": "src/Holumbus-Index-Common-Occurences.html#toAscListPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "toAscListPos",
          "normalized": "Positions-\u003e[Position]",
          "package": "Holumbus-Searchengine",
          "partial": "Asc List Pos",
          "signature": "Positions-\u003e[Position]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:toAscListPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Occurences",
          "name": "unionPos",
          "package": "Holumbus-Searchengine",
          "signature": "Positions -\u003e Positions -\u003e Positions",
          "source": "src/Holumbus-Index-Common-Occurences.html#unionPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "unionPos",
          "normalized": "Positions-\u003ePositions-\u003ePositions",
          "package": "Holumbus-Searchengine",
          "partial": "Pos",
          "signature": "Positions-\u003ePositions-\u003ePositions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:unionPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common.Occurences",
          "name": "updateOccurrences",
          "package": "Holumbus-Searchengine",
          "signature": "(DocId -\u003e DocId) -\u003e Occurrences -\u003e Occurrences",
          "source": "src/Holumbus-Index-Common-Occurences.html#updateOccurrences",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "updateOccurrences",
          "normalized": "(DocId-\u003eDocId)-\u003eOccurrences-\u003eOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "signature": "(DocId-\u003eDocId)-\u003eOccurrences-\u003eOccurrences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:updateOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe XML pickler for the occurrences of a word.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "xpOccurrences",
          "package": "Holumbus-Searchengine",
          "signature": "PU Occurrences",
          "source": "src/Holumbus-Index-Common-Occurences.html#xpOccurrences",
          "type": "function"
        },
        "index": {
          "description": "The XML pickler for the occurrences of word",
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "xpOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:xpOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe XML pickler for a set of positions.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "xpPositions",
          "package": "Holumbus-Searchengine",
          "signature": "PU Positions",
          "source": "src/Holumbus-Index-Common-Occurences.html#xpPositions",
          "type": "function"
        },
        "index": {
          "description": "The XML pickler for set of positions",
          "hierarchy": "Holumbus Index Common Occurences",
          "module": "Holumbus.Index.Common.Occurences",
          "name": "xpPositions",
          "package": "Holumbus-Searchengine",
          "partial": "Positions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-Occurences.html#v:xpPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe RawResult data type\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.Common.RawResult",
          "name": "RawResult",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-RawResult.html",
          "type": "module"
        },
        "index": {
          "description": "The RawResult data type",
          "hierarchy": "Holumbus Index Common RawResult",
          "module": "Holumbus.Index.Common.RawResult",
          "name": "RawResult",
          "package": "Holumbus-Searchengine",
          "partial": "Raw Result",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-RawResult.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe raw result returned when searching the index.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.RawResult",
          "name": "RawResult",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-RawResult.html#RawResult",
          "type": "type"
        },
        "index": {
          "description": "The raw result returned when searching the index",
          "hierarchy": "Holumbus Index Common RawResult",
          "module": "Holumbus.Index.Common.RawResult",
          "name": "RawResult",
          "package": "Holumbus-Searchengine",
          "partial": "Raw Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-RawResult.html#t:RawResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the raw result into a tree structure ordered by document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.RawResult",
          "name": "resultByDocument",
          "package": "Holumbus-Searchengine",
          "signature": "Context -\u003e RawResult -\u003e DocIdMap (Map Context (Map Word Positions))",
          "source": "src/Holumbus-Index-Common-RawResult.html#resultByDocument",
          "type": "function"
        },
        "index": {
          "description": "Transform the raw result into tree structure ordered by document",
          "hierarchy": "Holumbus Index Common RawResult",
          "module": "Holumbus.Index.Common.RawResult",
          "name": "resultByDocument",
          "normalized": "Context-\u003eRawResult-\u003eDocIdMap(Map Context(Map Word Positions))",
          "package": "Holumbus-Searchengine",
          "partial": "By Document",
          "signature": "Context-\u003eRawResult-\u003eDocIdMap(Map Context(Map Word Positions))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-RawResult.html#v:resultByDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the raw result into a tree structure ordered by word.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common.RawResult",
          "name": "resultByWord",
          "package": "Holumbus-Searchengine",
          "signature": "Context -\u003e RawResult -\u003e Map Word (Map Context Occurrences)",
          "source": "src/Holumbus-Index-Common-RawResult.html#resultByWord",
          "type": "function"
        },
        "index": {
          "description": "Transform the raw result into tree structure ordered by word",
          "hierarchy": "Holumbus Index Common RawResult",
          "module": "Holumbus.Index.Common.RawResult",
          "name": "resultByWord",
          "normalized": "Context-\u003eRawResult-\u003eMap Word(Map Context Occurrences)",
          "package": "Holumbus-Searchengine",
          "partial": "By Word",
          "signature": "Context-\u003eRawResult-\u003eMap Word(Map Context Occurrences)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common-RawResult.html#v:resultByWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon data types shared by all index types and a unified interface for\n  all different index types. This module defines the common interfaces of\n  indexes and their document tables as well as full-text caches.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.Common",
          "name": "Common",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Common data types shared by all index types and unified interface for all different index types This module defines the common interfaces of indexes and their document tables as well as full-text caches",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "Common",
          "package": "Holumbus-Searchengine",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common",
          "name": "HolCache",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common.html#HolCache",
          "type": "class"
        },
        "index": {
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "HolCache",
          "package": "Holumbus-Searchengine",
          "partial": "Hol Cache",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#t:HolCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common",
          "name": "HolDocIndex",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common.html#HolDocIndex",
          "type": "class"
        },
        "index": {
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "HolDocIndex",
          "package": "Holumbus-Searchengine",
          "partial": "Hol Doc Index",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#t:HolDocIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common",
          "name": "HolDocuments",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common.html#HolDocuments",
          "type": "class"
        },
        "index": {
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "HolDocuments",
          "package": "Holumbus-Searchengine",
          "partial": "Hol Documents",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#t:HolDocuments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class provides a generic interface to different types of index implementations.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "HolIndex",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common.html#HolIndex",
          "type": "class"
        },
        "index": {
          "description": "This class provides generic interface to different types of index implementations",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "HolIndex",
          "package": "Holumbus-Searchengine",
          "partial": "Hol Index",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#t:HolIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class provides a generic interface to different monadic types of index implementations.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "HolIndexM",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common.html#HolIndexM",
          "type": "class"
        },
        "index": {
          "description": "This class provides generic interface to different monadic types of index implementations",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "HolIndexM",
          "package": "Holumbus-Searchengine",
          "partial": "Hol Index",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#t:HolIndexM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the occurrences for every word. A potentially expensive operation.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "allWords",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Context -\u003e RawResult",
          "source": "src/Holumbus-Index-Common.html#allWords",
          "type": "method"
        },
        "index": {
          "description": "Returns the occurrences for every word potentially expensive operation",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "allWords",
          "normalized": "a-\u003eContext-\u003eRawResult",
          "package": "Holumbus-Searchengine",
          "partial": "Words",
          "signature": "i-\u003eContext-\u003eRawResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:allWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the occurrences for every word. A potentially expensive operation.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "allWordsM",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Context -\u003e m RawResult",
          "source": "src/Holumbus-Index-Common.html#allWordsM",
          "type": "method"
        },
        "index": {
          "description": "Returns the occurrences for every word potentially expensive operation",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "allWordsM",
          "normalized": "a-\u003eContext-\u003eb RawResult",
          "package": "Holumbus-Searchengine",
          "partial": "Words",
          "signature": "i-\u003eContext-\u003em RawResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:allWordsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all contexts avaliable in the index.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "contexts",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e [Context]",
          "source": "src/Holumbus-Index-Common.html#contexts",
          "type": "method"
        },
        "index": {
          "description": "Returns list of all contexts avaliable in the index",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "contexts",
          "normalized": "a-\u003e[Context]",
          "package": "Holumbus-Searchengine",
          "signature": "i-\u003e[Context]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:contexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all contexts avaliable in the index.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "contextsM",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e m [Context]",
          "source": "src/Holumbus-Index-Common.html#contextsM",
          "type": "method"
        },
        "index": {
          "description": "Returns list of all contexts avaliable in the index",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "contextsM",
          "normalized": "a-\u003eb[Context]",
          "package": "Holumbus-Searchengine",
          "signature": "i-\u003em[Context]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:contextsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefragment a doctable and index, useful when the doc ids are\n organized as an intervall of ints.\n\u003c/p\u003e\u003cp\u003eDefault implementation is the identity\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "defragmentDocIndex",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e i -\u003e (d a, i)",
          "source": "src/Holumbus-Index-Common.html#defragmentDocIndex",
          "type": "method"
        },
        "index": {
          "description": "Defragment doctable and index useful when the doc ids are organized as an intervall of ints Default implementation is the identity",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "defragmentDocIndex",
          "normalized": "a b-\u003ec-\u003e(a b,c)",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Index",
          "signature": "d a-\u003ei-\u003e(d a,i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:defragmentDocIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete occurrences.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "deleteOccurrences",
          "package": "Holumbus-Searchengine",
          "signature": "Context -\u003e Word -\u003e Occurrences -\u003e i -\u003e i",
          "source": "src/Holumbus-Index-Common.html#deleteOccurrences",
          "type": "method"
        },
        "index": {
          "description": "Delete occurrences",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "deleteOccurrences",
          "normalized": "Context-\u003eWord-\u003eOccurrences-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "signature": "Context-\u003eWord-\u003eOccurrences-\u003ei-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:deleteOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete occurrences.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "deleteOccurrencesM",
          "package": "Holumbus-Searchengine",
          "signature": "Context -\u003e Word -\u003e Occurrences -\u003e i -\u003e m i",
          "source": "src/Holumbus-Index-Common.html#deleteOccurrencesM",
          "type": "method"
        },
        "index": {
          "description": "Delete occurrences",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "deleteOccurrencesM",
          "normalized": "Context-\u003eWord-\u003eOccurrences-\u003ea-\u003eb a",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "signature": "Context-\u003eWord-\u003eOccurrences-\u003ei-\u003em i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:deleteOccurrencesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a position for a single document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "deletePosition",
          "package": "Holumbus-Searchengine",
          "signature": "Context -\u003e Word -\u003e DocId -\u003e Position -\u003e i -\u003e i",
          "source": "src/Holumbus-Index-Common.html#deletePosition",
          "type": "method"
        },
        "index": {
          "description": "Delete position for single document",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "deletePosition",
          "normalized": "Context-\u003eWord-\u003eDocId-\u003ePosition-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Position",
          "signature": "Context-\u003eWord-\u003eDocId-\u003ePosition-\u003ei-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:deletePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a position for a single document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "deletePositionM",
          "package": "Holumbus-Searchengine",
          "signature": "Context -\u003e Word -\u003e DocId -\u003e Position -\u003e i -\u003e m i",
          "source": "src/Holumbus-Index-Common.html#deletePositionM",
          "type": "method"
        },
        "index": {
          "description": "Delete position for single document",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "deletePositionM",
          "normalized": "Context-\u003eWord-\u003eDocId-\u003ePosition-\u003ea-\u003eb a",
          "package": "Holumbus-Searchengine",
          "partial": "Position",
          "signature": "Context-\u003eWord-\u003eDocId-\u003ePosition-\u003ei-\u003em i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:deletePositionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the doc ids of both tables are disjoint\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "disjointDocs",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e d a -\u003e Bool",
          "source": "src/Holumbus-Index-Common.html#disjointDocs",
          "type": "method"
        },
        "index": {
          "description": "Test whether the doc ids of both tables are disjoint",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "disjointDocs",
          "normalized": "a b-\u003ea b-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Docs",
          "signature": "d a-\u003ed a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:disjointDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEdit document ids\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "editDocIds",
          "package": "Holumbus-Searchengine",
          "signature": "(DocId -\u003e DocId) -\u003e d a -\u003e d a",
          "source": "src/Holumbus-Index-Common.html#editDocIds",
          "type": "method"
        },
        "index": {
          "description": "Edit document ids",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "editDocIds",
          "normalized": "(DocId-\u003eDocId)-\u003ea b-\u003ea b",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Ids",
          "signature": "(DocId-\u003eDocId)-\u003ed a-\u003ed a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:editDocIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common",
          "name": "filterDocuments",
          "package": "Holumbus-Searchengine",
          "signature": "(Document a -\u003e Bool) -\u003e d a -\u003e d a",
          "source": "src/Holumbus-Index-Common.html#filterDocuments",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "filterDocuments",
          "normalized": "(Document a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "Holumbus-Searchengine",
          "partial": "Documents",
          "signature": "(Document a-\u003eBool)-\u003ed a-\u003ed a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:filterDocuments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common",
          "name": "fromList",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e [(Context, Word, Occurrences)] -\u003e i",
          "source": "src/Holumbus-Index-Common.html#fromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "fromList",
          "normalized": "a-\u003e[(Context,Word,Occurrences)]-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "List",
          "signature": "i-\u003e[(Context,Word,Occurrences)]-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common",
          "name": "fromListM",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e [(Context, Word, Occurrences)] -\u003e m i",
          "source": "src/Holumbus-Index-Common.html#fromListM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "fromListM",
          "normalized": "a-\u003e[(Context,Word,Occurrences)]-\u003eb a",
          "package": "Holumbus-Searchengine",
          "partial": "List",
          "signature": "i-\u003e[(Context,Word,Occurrences)]-\u003em i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:fromListM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a document table from a single map.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "fromMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap (Document a) -\u003e d a",
          "source": "src/Holumbus-Index-Common.html#fromMap",
          "type": "method"
        },
        "index": {
          "description": "Create document table from single map",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "fromMap",
          "normalized": "DocIdMap(Document a)-\u003eb a",
          "package": "Holumbus-Searchengine",
          "partial": "Map",
          "signature": "DocIdMap(Document a)-\u003ed a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:fromMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the full text of a document for a given context. Will never throw any exception,\n upon failure or if no text found for the document, \u003ccode\u003eNothing\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "getDocText",
          "package": "Holumbus-Searchengine",
          "signature": "c -\u003e Context -\u003e DocId -\u003e IO (Maybe Content)",
          "source": "src/Holumbus-Index-Common.html#getDocText",
          "type": "method"
        },
        "index": {
          "description": "Retrieves the full text of document for given context Will never throw any exception upon failure or if no text found for the document Nothing is returned",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "getDocText",
          "normalized": "a-\u003eContext-\u003eDocId-\u003eIO(Maybe Content)",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Text",
          "signature": "c-\u003eContext-\u003eDocId-\u003eIO(Maybe Content)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:getDocText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a document into the table. Returns a tuple of the id for that document and the \n new table. If a document with the same URI is already present, its id will be returned \n and the table is returned unchanged.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "insertDoc",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e Document a -\u003e (DocId, d a)",
          "source": "src/Holumbus-Index-Common.html#insertDoc",
          "type": "method"
        },
        "index": {
          "description": "Insert document into the table Returns tuple of the id for that document and the new table If document with the same URI is already present its id will be returned and the table is returned unchanged",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "insertDoc",
          "normalized": "a b-\u003eDocument b-\u003e(DocId,a b)",
          "package": "Holumbus-Searchengine",
          "partial": "Doc",
          "signature": "d a-\u003eDocument a-\u003e(DocId,d a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:insertDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert occurrences.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "insertOccurrences",
          "package": "Holumbus-Searchengine",
          "signature": "Context -\u003e Word -\u003e Occurrences -\u003e i -\u003e i",
          "source": "src/Holumbus-Index-Common.html#insertOccurrences",
          "type": "method"
        },
        "index": {
          "description": "Insert occurrences",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "insertOccurrences",
          "normalized": "Context-\u003eWord-\u003eOccurrences-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "signature": "Context-\u003eWord-\u003eOccurrences-\u003ei-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:insertOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert occurrences.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "insertOccurrencesM",
          "package": "Holumbus-Searchengine",
          "signature": "Context -\u003e Word -\u003e Occurrences -\u003e i -\u003e m i",
          "source": "src/Holumbus-Index-Common.html#insertOccurrencesM",
          "type": "method"
        },
        "index": {
          "description": "Insert occurrences",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "insertOccurrencesM",
          "normalized": "Context-\u003eWord-\u003eOccurrences-\u003ea-\u003eb a",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "signature": "Context-\u003eWord-\u003eOccurrences-\u003ei-\u003em i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:insertOccurrencesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a position for a single document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "insertPosition",
          "package": "Holumbus-Searchengine",
          "signature": "Context -\u003e Word -\u003e DocId -\u003e Position -\u003e i -\u003e i",
          "source": "src/Holumbus-Index-Common.html#insertPosition",
          "type": "method"
        },
        "index": {
          "description": "Insert position for single document",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "insertPosition",
          "normalized": "Context-\u003eWord-\u003eDocId-\u003ePosition-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Position",
          "signature": "Context-\u003eWord-\u003eDocId-\u003ePosition-\u003ei-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:insertPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a position for a single document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "insertPositionM",
          "package": "Holumbus-Searchengine",
          "signature": "Context -\u003e Word -\u003e DocId -\u003e Position -\u003e i -\u003e m i",
          "source": "src/Holumbus-Index-Common.html#insertPositionM",
          "type": "method"
        },
        "index": {
          "description": "Insert position for single document",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "insertPositionM",
          "normalized": "Context-\u003eWord-\u003eDocId-\u003ePosition-\u003ea-\u003eb a",
          "package": "Holumbus-Searchengine",
          "partial": "Position",
          "signature": "Context-\u003eWord-\u003eDocId-\u003ePosition-\u003ei-\u003em i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:insertPositionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a document by its id.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "lookupById",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e DocId -\u003e m (Document a)",
          "source": "src/Holumbus-Index-Common.html#lookupById",
          "type": "method"
        },
        "index": {
          "description": "Lookup document by its id",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "lookupById",
          "normalized": "a b-\u003eDocId-\u003ec(Document b)",
          "package": "Holumbus-Searchengine",
          "partial": "By Id",
          "signature": "d a-\u003eDocId-\u003em(Document a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:lookupById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the id of a document by an URI.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "lookupByURI",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e URI -\u003e m DocId",
          "source": "src/Holumbus-Index-Common.html#lookupByURI",
          "type": "method"
        },
        "index": {
          "description": "Lookup the id of document by an URI",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "lookupByURI",
          "normalized": "a b-\u003eURI-\u003ec DocId",
          "package": "Holumbus-Searchengine",
          "partial": "By URI",
          "signature": "d a-\u003eURI-\u003em DocId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:lookupByURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches for and exact word in a given context (case-sensitive).\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "lookupCase",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Context -\u003e String -\u003e RawResult",
          "source": "src/Holumbus-Index-Common.html#lookupCase",
          "type": "method"
        },
        "index": {
          "description": "Searches for and exact word in given context case-sensitive",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "lookupCase",
          "normalized": "a-\u003eContext-\u003eString-\u003eRawResult",
          "package": "Holumbus-Searchengine",
          "partial": "Case",
          "signature": "i-\u003eContext-\u003eString-\u003eRawResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:lookupCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches for and exact word in a given context (case-sensitive).\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "lookupCaseM",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Context -\u003e String -\u003e m RawResult",
          "source": "src/Holumbus-Index-Common.html#lookupCaseM",
          "type": "method"
        },
        "index": {
          "description": "Searches for and exact word in given context case-sensitive",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "lookupCaseM",
          "normalized": "a-\u003eContext-\u003eString-\u003eb RawResult",
          "package": "Holumbus-Searchengine",
          "partial": "Case",
          "signature": "i-\u003eContext-\u003eString-\u003em RawResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:lookupCaseM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches for and exact word in a given context (case-insensitive).\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "lookupNoCase",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Context -\u003e String -\u003e RawResult",
          "source": "src/Holumbus-Index-Common.html#lookupNoCase",
          "type": "method"
        },
        "index": {
          "description": "Searches for and exact word in given context case-insensitive",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "lookupNoCase",
          "normalized": "a-\u003eContext-\u003eString-\u003eRawResult",
          "package": "Holumbus-Searchengine",
          "partial": "No Case",
          "signature": "i-\u003eContext-\u003eString-\u003eRawResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:lookupNoCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches for and exact word in a given context (case-insensitive).\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "lookupNoCaseM",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Context -\u003e String -\u003e m RawResult",
          "source": "src/Holumbus-Index-Common.html#lookupNoCaseM",
          "type": "method"
        },
        "index": {
          "description": "Searches for and exact word in given context case-insensitive",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "lookupNoCaseM",
          "normalized": "a-\u003eContext-\u003eString-\u003eb RawResult",
          "package": "Holumbus-Searchengine",
          "partial": "No Case",
          "signature": "i-\u003eContext-\u003eString-\u003em RawResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:lookupNoCaseM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an empty document table. The input parameter is taken to identify the typeclass\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "makeEmpty",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e d a",
          "source": "src/Holumbus-Index-Common.html#makeEmpty",
          "type": "method"
        },
        "index": {
          "description": "Return an empty document table The input parameter is taken to identify the typeclass",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "makeEmpty",
          "normalized": "a b-\u003ea b",
          "package": "Holumbus-Searchengine",
          "partial": "Empty",
          "signature": "d a-\u003ed a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:makeEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two caches in the way that everything that is in the second cache is inserted into the\n   first one.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "mergeCaches",
          "package": "Holumbus-Searchengine",
          "signature": "c -\u003e c -\u003e IO c",
          "source": "src/Holumbus-Index-Common.html#mergeCaches",
          "type": "method"
        },
        "index": {
          "description": "Merge two caches in the way that everything that is in the second cache is inserted into the first one",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "mergeCaches",
          "normalized": "a-\u003ea-\u003eIO a",
          "package": "Holumbus-Searchengine",
          "partial": "Caches",
          "signature": "c-\u003ec-\u003eIO c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:mergeCaches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two indexes. \n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "mergeIndexes",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e i -\u003e i",
          "source": "src/Holumbus-Index-Common.html#mergeIndexes",
          "type": "method"
        },
        "index": {
          "description": "Merges two indexes",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "mergeIndexes",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Indexes",
          "signature": "i-\u003ei-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:mergeIndexes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two indexes. \n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "mergeIndexesM",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e i -\u003e m i",
          "source": "src/Holumbus-Index-Common.html#mergeIndexesM",
          "type": "method"
        },
        "index": {
          "description": "Merges two indexes",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "mergeIndexesM",
          "normalized": "a-\u003ea-\u003eb a",
          "package": "Holumbus-Searchengine",
          "partial": "Indexes",
          "signature": "i-\u003ei-\u003em i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:mergeIndexesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoctable empty?\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "nullDocs",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e Bool",
          "source": "src/Holumbus-Index-Common.html#nullDocs",
          "type": "method"
        },
        "index": {
          "description": "doctable empty",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "nullDocs",
          "normalized": "a b-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Docs",
          "signature": "d a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:nullDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches for words beginning with the prefix in a given context (case-sensitive).\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "prefixCase",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Context -\u003e String -\u003e RawResult",
          "source": "src/Holumbus-Index-Common.html#prefixCase",
          "type": "method"
        },
        "index": {
          "description": "Searches for words beginning with the prefix in given context case-sensitive",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "prefixCase",
          "normalized": "a-\u003eContext-\u003eString-\u003eRawResult",
          "package": "Holumbus-Searchengine",
          "partial": "Case",
          "signature": "i-\u003eContext-\u003eString-\u003eRawResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:prefixCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches for words beginning with the prefix in a given context (case-sensitive).\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "prefixCaseM",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Context -\u003e String -\u003e m RawResult",
          "source": "src/Holumbus-Index-Common.html#prefixCaseM",
          "type": "method"
        },
        "index": {
          "description": "Searches for words beginning with the prefix in given context case-sensitive",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "prefixCaseM",
          "normalized": "a-\u003eContext-\u003eString-\u003eb RawResult",
          "package": "Holumbus-Searchengine",
          "partial": "Case",
          "signature": "i-\u003eContext-\u003eString-\u003em RawResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:prefixCaseM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches for words beginning with the prefix in a given context (case-insensitive).\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "prefixNoCase",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Context -\u003e String -\u003e RawResult",
          "source": "src/Holumbus-Index-Common.html#prefixNoCase",
          "type": "method"
        },
        "index": {
          "description": "Searches for words beginning with the prefix in given context case-insensitive",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "prefixNoCase",
          "normalized": "a-\u003eContext-\u003eString-\u003eRawResult",
          "package": "Holumbus-Searchengine",
          "partial": "No Case",
          "signature": "i-\u003eContext-\u003eString-\u003eRawResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:prefixNoCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearches for words beginning with the prefix in a given context (case-insensitive).\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "prefixNoCaseM",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Context -\u003e String -\u003e m RawResult",
          "source": "src/Holumbus-Index-Common.html#prefixNoCaseM",
          "type": "method"
        },
        "index": {
          "description": "Searches for words beginning with the prefix in given context case-insensitive",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "prefixNoCaseM",
          "normalized": "a-\u003eContext-\u003eString-\u003eb RawResult",
          "package": "Holumbus-Searchengine",
          "partial": "No Case",
          "signature": "i-\u003eContext-\u003eString-\u003em RawResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:prefixNoCaseM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore the full text of a document for a given context. May throw an exception if the \n storage of the text failed.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "putDocText",
          "package": "Holumbus-Searchengine",
          "signature": "c -\u003e Context -\u003e DocId -\u003e Content -\u003e IO ()",
          "source": "src/Holumbus-Index-Common.html#putDocText",
          "type": "method"
        },
        "index": {
          "description": "Store the full text of document for given context May throw an exception if the storage of the text failed",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "putDocText",
          "normalized": "a-\u003eContext-\u003eDocId-\u003eContent-\u003eIO()",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Text",
          "signature": "c-\u003eContext-\u003eDocId-\u003eContent-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:putDocText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the document with the specified id from the table.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "removeById",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e DocId -\u003e d a",
          "source": "src/Holumbus-Index-Common.html#removeById",
          "type": "method"
        },
        "index": {
          "description": "Removes the document with the specified id from the table",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "removeById",
          "normalized": "a b-\u003eDocId-\u003ea b",
          "package": "Holumbus-Searchengine",
          "partial": "By Id",
          "signature": "d a-\u003eDocId-\u003ed a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:removeById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the document with the specified URI from the table.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "removeByURI",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e URI -\u003e d a",
          "source": "src/Holumbus-Index-Common.html#removeByURI",
          "type": "method"
        },
        "index": {
          "description": "Removes the document with the specified URI from the table",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "removeByURI",
          "normalized": "a b-\u003eURI-\u003ea b",
          "package": "Holumbus-Searchengine",
          "partial": "By URI",
          "signature": "d a-\u003eURI-\u003ed a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:removeByURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of unique documents in the table.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "sizeDocs",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e Int",
          "source": "src/Holumbus-Index-Common.html#sizeDocs",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of unique documents in the table",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "sizeDocs",
          "normalized": "a b-\u003eInt",
          "package": "Holumbus-Searchengine",
          "partial": "Docs",
          "signature": "d a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:sizeDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of unique words in the index.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "sizeWords",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Int",
          "source": "src/Holumbus-Index-Common.html#sizeWords",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of unique words in the index",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "sizeWords",
          "normalized": "a-\u003eInt",
          "package": "Holumbus-Searchengine",
          "partial": "Words",
          "signature": "i-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:sizeWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of unique words in the index.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "sizeWordsM",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e m Int",
          "source": "src/Holumbus-Index-Common.html#sizeWordsM",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of unique words in the index",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "sizeWordsM",
          "normalized": "a-\u003eb Int",
          "package": "Holumbus-Searchengine",
          "partial": "Words",
          "signature": "i-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:sizeWordsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting an index by its contexts.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "splitByContexts",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Int -\u003e [i]",
          "source": "src/Holumbus-Index-Common.html#splitByContexts",
          "type": "method"
        },
        "index": {
          "description": "Splitting an index by its contexts",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "splitByContexts",
          "normalized": "a-\u003eInt-\u003e[a]",
          "package": "Holumbus-Searchengine",
          "partial": "By Contexts",
          "signature": "i-\u003eInt-\u003e[i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:splitByContexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting an index by its documents.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "splitByDocuments",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Int -\u003e [i]",
          "source": "src/Holumbus-Index-Common.html#splitByDocuments",
          "type": "method"
        },
        "index": {
          "description": "Splitting an index by its documents",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "splitByDocuments",
          "normalized": "a-\u003eInt-\u003e[a]",
          "package": "Holumbus-Searchengine",
          "partial": "By Documents",
          "signature": "i-\u003eInt-\u003e[i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:splitByDocuments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting an index by its words.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "splitByWords",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e Int -\u003e [i]",
          "source": "src/Holumbus-Index-Common.html#splitByWords",
          "type": "method"
        },
        "index": {
          "description": "Splitting an index by its words",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "splitByWords",
          "normalized": "a-\u003eInt-\u003e[a]",
          "package": "Holumbus-Searchengine",
          "partial": "By Words",
          "signature": "i-\u003eInt-\u003e[i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:splitByWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstract one index from another.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "substractIndexes",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e i -\u003e i",
          "source": "src/Holumbus-Index-Common.html#substractIndexes",
          "type": "method"
        },
        "index": {
          "description": "Substract one index from another",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "substractIndexes",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Indexes",
          "signature": "i-\u003ei-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:substractIndexes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common",
          "name": "toList",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e [(Context, Word, Occurrences)]",
          "source": "src/Holumbus-Index-Common.html#toList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "toList",
          "normalized": "a-\u003e[(Context,Word,Occurrences)]",
          "package": "Holumbus-Searchengine",
          "partial": "List",
          "signature": "i-\u003e[(Context,Word,Occurrences)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Common",
          "name": "toListM",
          "package": "Holumbus-Searchengine",
          "signature": "i -\u003e m [(Context, Word, Occurrences)]",
          "source": "src/Holumbus-Index-Common.html#toListM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "toListM",
          "normalized": "a-\u003eb[(Context,Word,Occurrences)]",
          "package": "Holumbus-Searchengine",
          "partial": "List",
          "signature": "i-\u003em[(Context,Word,Occurrences)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:toListM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert document table to a single map\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "toMap",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e DocIdMap (Document a)",
          "source": "src/Holumbus-Index-Common.html#toMap",
          "type": "method"
        },
        "index": {
          "description": "Convert document table to single map",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "toMap",
          "normalized": "a b-\u003eDocIdMap(Document b)",
          "package": "Holumbus-Searchengine",
          "partial": "Map",
          "signature": "d a-\u003eDocIdMap(Document a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two doctables and indexes together into a single doctable and index\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "unionDocIndex",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e i -\u003e d a -\u003e i -\u003e (d a, i)",
          "source": "src/Holumbus-Index-Common.html#unionDocIndex",
          "type": "method"
        },
        "index": {
          "description": "Merge two doctables and indexes together into single doctable and index",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "unionDocIndex",
          "normalized": "a b-\u003ec-\u003ea b-\u003ec-\u003e(a b,c)",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Index",
          "signature": "d a-\u003ei-\u003ed a-\u003ei-\u003e(d a,i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:unionDocIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of two disjoint document tables. It is assumed, that the DocIds and the document uris\n of both indexes are disjoint. If only the sets of uris are disjoint, the DocIds can be made\n disjoint by adding maxDocId of one to the DocIds of the second, e.g. with editDocIds\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "unionDocs",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e d a -\u003e d a",
          "source": "src/Holumbus-Index-Common.html#unionDocs",
          "type": "method"
        },
        "index": {
          "description": "Union of two disjoint document tables It is assumed that the DocIds and the document uris of both indexes are disjoint If only the sets of uris are disjoint the DocIds can be made disjoint by adding maxDocId of one to the DocIds of the second e.g with editDocIds",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "unionDocs",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "Holumbus-Searchengine",
          "partial": "Docs",
          "signature": "d a-\u003ed a-\u003ed a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:unionDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate a document with a certain DocId. \n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "updateDoc",
          "package": "Holumbus-Searchengine",
          "signature": "d a -\u003e DocId -\u003e Document a -\u003e d a",
          "source": "src/Holumbus-Index-Common.html#updateDoc",
          "type": "method"
        },
        "index": {
          "description": "Update document with certain DocId",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "updateDoc",
          "normalized": "a b-\u003eDocId-\u003eDocument b-\u003ea b",
          "package": "Holumbus-Searchengine",
          "partial": "Doc",
          "signature": "d a-\u003eDocId-\u003eDocument a-\u003ed a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:updateDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate document id's (e.g. for renaming documents). If the function maps two different id's\n to the same new id, the two sets of word positions will be merged if both old id's are present\n in the occurrences for a word in a specific context.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "updateDocIds",
          "package": "Holumbus-Searchengine",
          "signature": "(Context -\u003e Word -\u003e DocId -\u003e DocId) -\u003e i -\u003e i",
          "source": "src/Holumbus-Index-Common.html#updateDocIds",
          "type": "method"
        },
        "index": {
          "description": "Update document id e.g for renaming documents If the function maps two different id to the same new id the two sets of word positions will be merged if both old id are present in the occurrences for word in specific context",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "updateDocIds",
          "normalized": "(Context-\u003eWord-\u003eDocId-\u003eDocId)-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Ids",
          "signature": "(Context-\u003eWord-\u003eDocId-\u003eDocId)-\u003ei-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:updateDocIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate document id's with a simple injective editing function.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "updateDocIds'",
          "package": "Holumbus-Searchengine",
          "signature": "(DocId -\u003e DocId) -\u003e i -\u003e i",
          "source": "src/Holumbus-Index-Common.html#updateDocIds%27",
          "type": "method"
        },
        "index": {
          "description": "Update document id with simple injective editing function",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "updateDocIds'",
          "normalized": "(DocId-\u003eDocId)-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Ids'",
          "signature": "(DocId-\u003eDocId)-\u003ei-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:updateDocIds-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate document id's (e.g. for renaming documents). If the function maps two different id's\n to the same new id, the two sets of word positions will be merged if both old id's are present\n in the occurrences for a word in a specific context.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "updateDocIdsM",
          "package": "Holumbus-Searchengine",
          "signature": "(Context -\u003e Word -\u003e DocId -\u003e DocId) -\u003e i -\u003e m i",
          "source": "src/Holumbus-Index-Common.html#updateDocIdsM",
          "type": "method"
        },
        "index": {
          "description": "Update document id e.g for renaming documents If the function maps two different id to the same new id the two sets of word positions will be merged if both old id are present in the occurrences for word in specific context",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "updateDocIdsM",
          "normalized": "(Context-\u003eWord-\u003eDocId-\u003eDocId)-\u003ea-\u003eb a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Ids",
          "signature": "(Context-\u003eWord-\u003eDocId-\u003eDocId)-\u003ei-\u003em i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:updateDocIdsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate document id's with an simple injective editing function.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "updateDocIdsM'",
          "package": "Holumbus-Searchengine",
          "signature": "(DocId -\u003e DocId) -\u003e i -\u003e m i",
          "source": "src/Holumbus-Index-Common.html#updateDocIdsM%27",
          "type": "method"
        },
        "index": {
          "description": "Update document id with an simple injective editing function",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "updateDocIdsM'",
          "normalized": "(DocId-\u003eDocId)-\u003ea-\u003eb a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Ids M'",
          "signature": "(DocId-\u003eDocId)-\u003ei-\u003em i",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:updateDocIdsM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate documents (through mapping over all documents).\n\u003c/p\u003e",
          "module": "Holumbus.Index.Common",
          "name": "updateDocuments",
          "package": "Holumbus-Searchengine",
          "signature": "(Document a -\u003e Document a) -\u003e d a -\u003e d a",
          "source": "src/Holumbus-Index-Common.html#updateDocuments",
          "type": "method"
        },
        "index": {
          "description": "Update documents through mapping over all documents",
          "hierarchy": "Holumbus Index Common",
          "module": "Holumbus.Index.Common",
          "name": "updateDocuments",
          "normalized": "(Document a-\u003eDocument a)-\u003eb a-\u003eb a",
          "package": "Holumbus-Searchengine",
          "partial": "Documents",
          "signature": "(Document a-\u003eDocument a)-\u003ed a-\u003ed a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Common.html#v:updateDocuments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA more space efficient substitute for Holumbus.Index.Documents\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "CompactDocuments",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactDocuments.html",
          "type": "module"
        },
        "index": {
          "description": "more space efficient substitute for Holumbus.Index.Documents",
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "CompactDocuments",
          "package": "Holumbus-Searchengine",
          "partial": "Compact Documents",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactDocuments",
          "name": "CompressedDoc",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactDocuments.html#CompressedDoc",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "CompressedDoc",
          "package": "Holumbus-Searchengine",
          "partial": "Compressed Doc",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#t:CompressedDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactDocuments",
          "name": "DocMap",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactDocuments.html#DocMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "DocMap",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#t:DocMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactDocuments",
          "name": "Documents",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactDocuments.html#Documents",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "Documents",
          "package": "Holumbus-Searchengine",
          "partial": "Documents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#t:Documents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe table which is used to map a document to an artificial id and vice versa.\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "URIMap",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactDocuments.html#URIMap",
          "type": "type"
        },
        "index": {
          "description": "The table which is used to map document to an artificial id and vice versa",
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "URIMap",
          "package": "Holumbus-Searchengine",
          "partial": "URIMap",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#t:URIMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactDocuments",
          "name": "CDoc",
          "package": "Holumbus-Searchengine",
          "signature": "CDoc",
          "source": "src/Holumbus-Index-CompactDocuments.html#CompressedDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "CDoc",
          "package": "Holumbus-Searchengine",
          "partial": "CDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:CDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactDocuments",
          "name": "Documents",
          "package": "Holumbus-Searchengine",
          "signature": "Documents",
          "source": "src/Holumbus-Index-CompactDocuments.html#Documents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "Documents",
          "package": "Holumbus-Searchengine",
          "partial": "Documents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:Documents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space efficient mapping from\n   the URI of a document to its id.\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "docToId",
          "package": "Holumbus-Searchengine",
          "signature": "URIMap",
          "source": "src/Holumbus-Index-CompactDocuments.html#Documents",
          "type": "function"
        },
        "index": {
          "description": "space efficient mapping from the URI of document to its id",
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "docToId",
          "package": "Holumbus-Searchengine",
          "partial": "To Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:docToId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty table.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Index.CompactDocuments\",\"Holumbus.Index.CompactIndex\"]",
          "name": "emptyDocuments",
          "package": "Holumbus-Searchengine",
          "signature": "Documents a",
          "source": "src/Holumbus-Index-CompactDocuments.html#emptyDocuments",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:emptyDocuments\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:emptyDocuments\"]"
        },
        "index": {
          "description": "Create an empty table",
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "emptyDocuments",
          "package": "Holumbus-Searchengine",
          "partial": "Documents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:emptyDocuments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactDocuments",
          "name": "fromDocMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocMap a -\u003e DocIdMap (Document a)",
          "source": "src/Holumbus-Index-CompactDocuments.html#fromDocMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "fromDocMap",
          "normalized": "DocMap a-\u003eDocIdMap(Document a)",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Map",
          "signature": "DocMap a-\u003eDocIdMap(Document a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:fromDocMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactDocuments",
          "name": "fromDocument",
          "package": "Holumbus-Searchengine",
          "signature": "Document a -\u003e CompressedDoc a",
          "source": "src/Holumbus-Index-CompactDocuments.html#fromDocument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "fromDocument",
          "normalized": "Document a-\u003eCompressedDoc a",
          "package": "Holumbus-Searchengine",
          "partial": "Document",
          "signature": "Document a-\u003eCompressedDoc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:fromDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from a document id to\n   the document itself.\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "idToDoc",
          "package": "Holumbus-Searchengine",
          "signature": "(DocMap a)",
          "source": "src/Holumbus-Index-CompactDocuments.html#Documents",
          "type": "function"
        },
        "index": {
          "description": "mapping from document id to the document itself",
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "idToDoc",
          "package": "Holumbus-Searchengine",
          "partial": "To Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:idToDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last used document id.\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "lastDocId",
          "package": "Holumbus-Searchengine",
          "signature": "DocId",
          "source": "src/Holumbus-Index-CompactDocuments.html#Documents",
          "type": "function"
        },
        "index": {
          "description": "The last used document id",
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "lastDocId",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:lastDocId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplify a document table by transforming the custom information into a string.\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "simplify",
          "package": "Holumbus-Searchengine",
          "signature": "Documents a -\u003e Documents String",
          "source": "src/Holumbus-Index-CompactDocuments.html#simplify",
          "type": "function"
        },
        "index": {
          "description": "Simplify document table by transforming the custom information into string",
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "simplify",
          "normalized": "Documents a-\u003eDocuments String",
          "package": "Holumbus-Searchengine",
          "signature": "Documents a-\u003eDocuments String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:simplify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a document table containing a single document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "singleton",
          "package": "Holumbus-Searchengine",
          "signature": "Document a -\u003e Documents a",
          "source": "src/Holumbus-Index-CompactDocuments.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create document table containing single document",
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "singleton",
          "normalized": "Document a-\u003eDocuments a",
          "package": "Holumbus-Searchengine",
          "signature": "Document a-\u003eDocuments a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactDocuments",
          "name": "toDocMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap (Document a) -\u003e DocMap a",
          "source": "src/Holumbus-Index-CompactDocuments.html#toDocMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "toDocMap",
          "normalized": "DocIdMap(Document a)-\u003eDocMap a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Map",
          "signature": "DocIdMap(Document a)-\u003eDocMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:toDocMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactDocuments",
          "name": "toDocument",
          "package": "Holumbus-Searchengine",
          "signature": "CompressedDoc a -\u003e Document a",
          "source": "src/Holumbus-Index-CompactDocuments.html#toDocument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "toDocument",
          "normalized": "CompressedDoc a-\u003eDocument a",
          "package": "Holumbus-Searchengine",
          "partial": "Document",
          "signature": "CompressedDoc a-\u003eDocument a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:toDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactDocuments",
          "name": "unCDoc",
          "package": "Holumbus-Searchengine",
          "signature": "ByteString",
          "source": "src/Holumbus-Index-CompactDocuments.html#CompressedDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactDocuments",
          "module": "Holumbus.Index.CompactDocuments",
          "name": "unCDoc",
          "package": "Holumbus-Searchengine",
          "partial": "CDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactDocuments.html#v:unCDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "CompactIndex",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactIndex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "CompactIndex",
          "package": "Holumbus-Searchengine",
          "partial": "Compact Index",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "CompactInverted",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactIndex.html#CompactInverted",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "CompactInverted",
          "package": "Holumbus-Searchengine",
          "partial": "Compact Inverted",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#t:CompactInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA document consists of a title and its unique identifier (URI)\n and a customizable component\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactIndex",
          "name": "Document",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-Document.html#Document",
          "type": "data"
        },
        "index": {
          "description": "document consists of title and its unique identifier URI and customizable component",
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "Document",
          "package": "Holumbus-Searchengine",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "Documents",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactDocuments.html#Documents",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "Documents",
          "package": "Holumbus-Searchengine",
          "partial": "Documents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#t:Documents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "HolumbusConfig",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactIndex.html#HolumbusConfig",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "HolumbusConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Holumbus Config",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#t:HolumbusConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "HolumbusState",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactIndex.html#HolumbusState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "HolumbusState",
          "package": "Holumbus-Searchengine",
          "partial": "Holumbus State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#t:HolumbusState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "Inverted",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactIndex.html#Inverted",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "Inverted",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#t:Inverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe table to store the document descriptions\n\u003c/p\u003e\u003cp\u003eThis table does not contain the reverse map from URIs do DocIds,\n this reverse map is only needed when crawling, not for searching the index.\n As a consequence, most of the indes operations are not implemented\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003eDocuments\u003c/a\u003e\u003c/code\u003e data type\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactIndex",
          "name": "SmallDocuments",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactSmallDocuments.html#SmallDocuments",
          "type": "data"
        },
        "index": {
          "description": "The table to store the document descriptions This table does not contain the reverse map from URIs do DocIds this reverse map is only needed when crawling not for searching the index As consequence most of the indes operations are not implemented see also Documents data type",
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "SmallDocuments",
          "package": "Holumbus-Searchengine",
          "partial": "Small Documents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#t:SmallDocuments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "defragmentHolumbusState",
          "package": "Holumbus-Searchengine",
          "signature": "HolumbusState di -\u003e HolumbusState di",
          "source": "src/Holumbus-Index-CompactIndex.html#defragmentHolumbusState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "defragmentHolumbusState",
          "normalized": "HolumbusState a-\u003eHolumbusState a",
          "package": "Holumbus-Searchengine",
          "partial": "Holumbus State",
          "signature": "HolumbusState di-\u003eHolumbusState di",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:defragmentHolumbusState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "emptyCompactInverted",
          "package": "Holumbus-Searchengine",
          "signature": "CompactInverted",
          "source": "src/Holumbus-Index-CompactIndex.html#emptyCompactInverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "emptyCompactInverted",
          "package": "Holumbus-Searchengine",
          "partial": "Compact Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:emptyCompactInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "emptyHolumbusState",
          "package": "Holumbus-Searchengine",
          "signature": "HolumbusState di",
          "source": "src/Holumbus-Index-CompactIndex.html#emptyHolumbusState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "emptyHolumbusState",
          "package": "Holumbus-Searchengine",
          "partial": "Holumbus State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:emptyHolumbusState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "emptyInverted",
          "package": "Holumbus-Searchengine",
          "signature": "Inverted",
          "source": "src/Holumbus-Index-CompactIndex.html#emptyInverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "emptyInverted",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:emptyInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "inverted2compactInverted",
          "package": "Holumbus-Searchengine",
          "signature": "Inverted -\u003e CompactInverted",
          "source": "src/Holumbus-Index-CompactIndex.html#inverted2compactInverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "inverted2compactInverted",
          "normalized": "Inverted-\u003eCompactInverted",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "signature": "Inverted-\u003eCompactInverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:inverted2compactInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "mergeAndWritePartialRes'",
          "package": "Holumbus-Searchengine",
          "signature": "(SmallDocuments i -\u003e SmallDocuments i) -\u003e [String] -\u003e String -\u003e m ()",
          "source": "src/Holumbus-Index-CompactIndex.html#mergeAndWritePartialRes%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "mergeAndWritePartialRes'",
          "normalized": "(SmallDocuments a-\u003eSmallDocuments a)-\u003e[String]-\u003eString-\u003eb()",
          "package": "Holumbus-Searchengine",
          "partial": "And Write Partial Res'",
          "signature": "(SmallDocuments i-\u003eSmallDocuments i)-\u003e[String]-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:mergeAndWritePartialRes-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "removeDocIdsInverted",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e Inverted -\u003e Inverted",
          "source": "src/Holumbus-Index-CompactIndex.html#removeDocIdsInverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "removeDocIdsInverted",
          "normalized": "Occurrences-\u003eInverted-\u003eInverted",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Ids Inverted",
          "signature": "Occurrences-\u003eInverted-\u003eInverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:removeDocIdsInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "writeBin",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e a -\u003e m ()",
          "source": "src/Holumbus-Index-CompactIndex.html#writeBin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "writeBin",
          "normalized": "FilePath-\u003ea-\u003eb()",
          "package": "Holumbus-Searchengine",
          "partial": "Bin",
          "signature": "FilePath-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:writeBin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "writePartialIndex",
          "package": "Holumbus-Searchengine",
          "signature": "Bool -\u003e FilePath -\u003e CrawlerAction a (HolumbusState c) ()",
          "source": "src/Holumbus-Index-CompactIndex.html#writePartialIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "writePartialIndex",
          "normalized": "Bool-\u003eFilePath-\u003eCrawlerAction a(HolumbusState b)()",
          "package": "Holumbus-Searchengine",
          "partial": "Partial Index",
          "signature": "Bool-\u003eFilePath-\u003eCrawlerAction a(HolumbusState c)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:writePartialIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "writeSearchBin",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e HolumbusState c -\u003e m ()",
          "source": "src/Holumbus-Index-CompactIndex.html#writeSearchBin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "writeSearchBin",
          "normalized": "FilePath-\u003eHolumbusState a-\u003eb()",
          "package": "Holumbus-Searchengine",
          "partial": "Search Bin",
          "signature": "FilePath-\u003eHolumbusState c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:writeSearchBin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactIndex",
          "name": "writeXml",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e a -\u003e m ()",
          "source": "src/Holumbus-Index-CompactIndex.html#writeXml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactIndex",
          "module": "Holumbus.Index.CompactIndex",
          "name": "writeXml",
          "normalized": "FilePath-\u003ea-\u003eb()",
          "package": "Holumbus-Searchengine",
          "partial": "Xml",
          "signature": "FilePath-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactIndex.html#v:writeXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple version of Holumbus.Index.Documents.\n  This implementation is only for reading a document table in the search part of an application.\n  The mapping of URIs to DocIds is only required during index building, not when accessing the index.\n  So this 2. mapping is removed in this implementation for saving space\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "CompactSmallDocuments",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactSmallDocuments.html",
          "type": "module"
        },
        "index": {
          "description": "simple version of Holumbus.Index.Documents This implementation is only for reading document table in the search part of an application The mapping of URIs to DocIds is only required during index building not when accessing the index So this mapping is removed in this implementation for saving space",
          "hierarchy": "Holumbus Index CompactSmallDocuments",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "CompactSmallDocuments",
          "package": "Holumbus-Searchengine",
          "partial": "Compact Small Documents",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactSmallDocuments.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe table to store the document descriptions\n\u003c/p\u003e\u003cp\u003eThis table does not contain the reverse map from URIs do DocIds,\n this reverse map is only needed when crawling, not for searching the index.\n As a consequence, most of the indes operations are not implemented\n\u003c/p\u003e\u003cp\u003esee also \u003ccode\u003e\u003ca\u003eDocuments\u003c/a\u003e\u003c/code\u003e data type\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "SmallDocuments",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-CompactSmallDocuments.html#SmallDocuments",
          "type": "newtype"
        },
        "index": {
          "description": "The table to store the document descriptions This table does not contain the reverse map from URIs do DocIds this reverse map is only needed when crawling not for searching the index As consequence most of the indes operations are not implemented see also Documents data type",
          "hierarchy": "Holumbus Index CompactSmallDocuments",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "SmallDocuments",
          "package": "Holumbus-Searchengine",
          "partial": "Small Documents",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactSmallDocuments.html#t:SmallDocuments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "SmallDocuments",
          "package": "Holumbus-Searchengine",
          "signature": "SmallDocuments",
          "source": "src/Holumbus-Index-CompactSmallDocuments.html#SmallDocuments",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index CompactSmallDocuments",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "SmallDocuments",
          "package": "Holumbus-Searchengine",
          "partial": "Small Documents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactSmallDocuments.html#v:SmallDocuments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Compact document table into a small compact document table.\n Called at the end of building an index\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "docTable2smallDocTable",
          "package": "Holumbus-Searchengine",
          "signature": "Documents a -\u003e SmallDocuments a",
          "source": "src/Holumbus-Index-CompactSmallDocuments.html#docTable2smallDocTable",
          "type": "function"
        },
        "index": {
          "description": "Convert Compact document table into small compact document table Called at the end of building an index",
          "hierarchy": "Holumbus Index CompactSmallDocuments",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "docTable2smallDocTable",
          "normalized": "Documents a-\u003eSmallDocuments a",
          "package": "Holumbus-Searchengine",
          "partial": "Table Doc Table",
          "signature": "Documents a-\u003eSmallDocuments a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactSmallDocuments.html#v:docTable2smallDocTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty table.\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "emptyDocuments",
          "package": "Holumbus-Searchengine",
          "signature": "SmallDocuments a",
          "source": "src/Holumbus-Index-CompactSmallDocuments.html#emptyDocuments",
          "type": "function"
        },
        "index": {
          "description": "Create an empty table",
          "hierarchy": "Holumbus Index CompactSmallDocuments",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "emptyDocuments",
          "package": "Holumbus-Searchengine",
          "partial": "Documents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactSmallDocuments.html#v:emptyDocuments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from a doc id\n   to the document itself.\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "idToSmallDoc",
          "package": "Holumbus-Searchengine",
          "signature": "DocMap a",
          "source": "src/Holumbus-Index-CompactSmallDocuments.html#SmallDocuments",
          "type": "function"
        },
        "index": {
          "description": "mapping from doc id to the document itself",
          "hierarchy": "Holumbus Index CompactSmallDocuments",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "idToSmallDoc",
          "package": "Holumbus-Searchengine",
          "partial": "To Small Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactSmallDocuments.html#v:idToSmallDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a document table containing a single document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "singleton",
          "package": "Holumbus-Searchengine",
          "signature": "Document a -\u003e SmallDocuments a",
          "source": "src/Holumbus-Index-CompactSmallDocuments.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create document table containing single document",
          "hierarchy": "Holumbus Index CompactSmallDocuments",
          "module": "Holumbus.Index.CompactSmallDocuments",
          "name": "singleton",
          "normalized": "Document a-\u003eSmallDocuments a",
          "package": "Holumbus-Searchengine",
          "signature": "Document a-\u003eSmallDocuments a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-CompactSmallDocuments.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module provides several specific compression mechanisms for different\n  parts of indexes. Right now, just a general compression scheme for \n  the \u003ccode\u003e\u003ca\u003eOccurrences\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePositions\u003c/a\u003e\u003c/code\u003e are provided.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.Compression",
          "name": "Compression",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Compression.html",
          "type": "module"
        },
        "index": {
          "description": "Version This module provides several specific compression mechanisms for different parts of indexes Right now just general compression scheme for the Occurrences and Positions are provided",
          "hierarchy": "Holumbus Index Compression",
          "module": "Holumbus.Index.Compression",
          "name": "Compression",
          "package": "Holumbus-Searchengine",
          "partial": "Compression",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Compression.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Compression",
          "name": "CompressedOccurrences",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Compression.html#CompressedOccurrences",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Index Compression",
          "module": "Holumbus.Index.Compression",
          "name": "CompressedOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Compressed Occurrences",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Compression.html#t:CompressedOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Compression",
          "name": "CompressedPositions",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Compression.html#CompressedPositions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Index Compression",
          "module": "Holumbus.Index.Compression",
          "name": "CompressedPositions",
          "package": "Holumbus-Searchengine",
          "partial": "Compressed Positions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Compression.html#t:CompressedPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress the occurrences by just compressing all contained positions.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Compression",
          "name": "deflateOcc",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e CompressedOccurrences",
          "source": "src/Holumbus-Index-Compression.html#deflateOcc",
          "type": "function"
        },
        "index": {
          "description": "Compress the occurrences by just compressing all contained positions",
          "hierarchy": "Holumbus Index Compression",
          "module": "Holumbus.Index.Compression",
          "name": "deflateOcc",
          "normalized": "Occurrences-\u003eCompressedOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occ",
          "signature": "Occurrences-\u003eCompressedOccurrences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Compression.html#v:deflateOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave some memory on the positions by just saving their differences and compressing these.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Compression",
          "name": "deflatePos",
          "package": "Holumbus-Searchengine",
          "signature": "Positions -\u003e CompressedPositions",
          "source": "src/Holumbus-Index-Compression.html#deflatePos",
          "type": "function"
        },
        "index": {
          "description": "Save some memory on the positions by just saving their differences and compressing these",
          "hierarchy": "Holumbus Index Compression",
          "module": "Holumbus.Index.Compression",
          "name": "deflatePos",
          "normalized": "Positions-\u003eCompressedPositions",
          "package": "Holumbus-Searchengine",
          "partial": "Pos",
          "signature": "Positions-\u003eCompressedPositions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Compression.html#v:deflatePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompressing the occurrences by just decompressing all contained positions.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Compression",
          "name": "inflateOcc",
          "package": "Holumbus-Searchengine",
          "signature": "CompressedOccurrences -\u003e Occurrences",
          "source": "src/Holumbus-Index-Compression.html#inflateOcc",
          "type": "function"
        },
        "index": {
          "description": "Decompressing the occurrences by just decompressing all contained positions",
          "hierarchy": "Holumbus Index Compression",
          "module": "Holumbus.Index.Compression",
          "name": "inflateOcc",
          "normalized": "CompressedOccurrences-\u003eOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occ",
          "signature": "CompressedOccurrences-\u003eOccurrences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Compression.html#v:inflateOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the compressed differences back to a set of integers.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Compression",
          "name": "inflatePos",
          "package": "Holumbus-Searchengine",
          "signature": "CompressedPositions -\u003e Positions",
          "source": "src/Holumbus-Index-Compression.html#inflatePos",
          "type": "function"
        },
        "index": {
          "description": "Convert the compressed differences back to set of integers",
          "hierarchy": "Holumbus Index Compression",
          "module": "Holumbus.Index.Compression",
          "name": "inflatePos",
          "normalized": "CompressedPositions-\u003ePositions",
          "package": "Holumbus-Searchengine",
          "partial": "Pos",
          "signature": "CompressedPositions-\u003ePositions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Compression.html#v:inflatePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA more space efficient substitute for Holumbus.Index.Documents\n  and a more flexible implementation than Holumbus.Index.CompactDocuments.\n\u003c/p\u003e\u003cp\u003eDocIds are computed by a hash function, so the inverse map from URIs to DocIds\n  is substituted by the hash function\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "HashedDocuments",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-HashedDocuments.html",
          "type": "module"
        },
        "index": {
          "description": "more space efficient substitute for Holumbus.Index.Documents and more flexible implementation than Holumbus.Index.CompactDocuments DocIds are computed by hash function so the inverse map from URIs to DocIds is substituted by the hash function",
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "HashedDocuments",
          "package": "Holumbus-Searchengine",
          "partial": "Hashed Documents",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedDocuments",
          "name": "CompressedDoc",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-HashedDocuments.html#CompressedDoc",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "CompressedDoc",
          "package": "Holumbus-Searchengine",
          "partial": "Compressed Doc",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#t:CompressedDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe table which is used to map a document to an artificial id and vice versa.\n\u003c/p\u003e",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "DocMap",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-HashedDocuments.html#DocMap",
          "type": "type"
        },
        "index": {
          "description": "The table which is used to map document to an artificial id and vice versa",
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "DocMap",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#t:DocMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedDocuments",
          "name": "Documents",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-HashedDocuments.html#Documents",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "Documents",
          "package": "Holumbus-Searchengine",
          "partial": "Documents",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#t:Documents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedDocuments",
          "name": "CDoc",
          "package": "Holumbus-Searchengine",
          "signature": "CDoc",
          "source": "src/Holumbus-Index-HashedDocuments.html#CompressedDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "CDoc",
          "package": "Holumbus-Searchengine",
          "partial": "CDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#v:CDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from a document id to\n   the document itself.\n\u003c/p\u003e",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "Documents",
          "package": "Holumbus-Searchengine",
          "signature": "Documents",
          "source": "src/Holumbus-Index-HashedDocuments.html#Documents",
          "type": "function"
        },
        "index": {
          "description": "mapping from document id to the document itself",
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "Documents",
          "package": "Holumbus-Searchengine",
          "partial": "Documents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#v:Documents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty table.\n\u003c/p\u003e",
          "module": "[\"Holumbus.Index.HashedDocuments\",\"Holumbus.Index.HashedIndex\"]",
          "name": "emptyDocuments",
          "package": "Holumbus-Searchengine",
          "signature": "Documents a",
          "source": "src/Holumbus-Index-HashedDocuments.html#emptyDocuments",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#v:emptyDocuments\",\"http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:emptyDocuments\"]"
        },
        "index": {
          "description": "Create an empty table",
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "emptyDocuments",
          "package": "Holumbus-Searchengine",
          "partial": "Documents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#v:emptyDocuments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedDocuments",
          "name": "fromDocMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocMap a -\u003e DocIdMap (Document a)",
          "source": "src/Holumbus-Index-HashedDocuments.html#fromDocMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "fromDocMap",
          "normalized": "DocMap a-\u003eDocIdMap(Document a)",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Map",
          "signature": "DocMap a-\u003eDocIdMap(Document a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#v:fromDocMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedDocuments",
          "name": "fromDocument",
          "package": "Holumbus-Searchengine",
          "signature": "Document a -\u003e CompressedDoc a",
          "source": "src/Holumbus-Index-HashedDocuments.html#fromDocument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "fromDocument",
          "normalized": "Document a-\u003eCompressedDoc a",
          "package": "Holumbus-Searchengine",
          "partial": "Document",
          "signature": "Document a-\u003eCompressedDoc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#v:fromDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedDocuments",
          "name": "idToDoc",
          "package": "Holumbus-Searchengine",
          "signature": "DocMap a",
          "source": "src/Holumbus-Index-HashedDocuments.html#Documents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "idToDoc",
          "package": "Holumbus-Searchengine",
          "partial": "To Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#v:idToDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a document table containing a single document.\n\u003c/p\u003e",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "singleton",
          "package": "Holumbus-Searchengine",
          "signature": "Document a -\u003e Documents a",
          "source": "src/Holumbus-Index-HashedDocuments.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create document table containing single document",
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "singleton",
          "normalized": "Document a-\u003eDocuments a",
          "package": "Holumbus-Searchengine",
          "signature": "Document a-\u003eDocuments a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedDocuments",
          "name": "toDocMap",
          "package": "Holumbus-Searchengine",
          "signature": "DocIdMap (Document a) -\u003e DocMap a",
          "source": "src/Holumbus-Index-HashedDocuments.html#toDocMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "toDocMap",
          "normalized": "DocIdMap(Document a)-\u003eDocMap a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Map",
          "signature": "DocIdMap(Document a)-\u003eDocMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#v:toDocMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedDocuments",
          "name": "toDocument",
          "package": "Holumbus-Searchengine",
          "signature": "CompressedDoc a -\u003e Document a",
          "source": "src/Holumbus-Index-HashedDocuments.html#toDocument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "toDocument",
          "normalized": "CompressedDoc a-\u003eDocument a",
          "package": "Holumbus-Searchengine",
          "partial": "Document",
          "signature": "CompressedDoc a-\u003eDocument a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#v:toDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedDocuments",
          "name": "unCDoc",
          "package": "Holumbus-Searchengine",
          "signature": "ByteString",
          "source": "src/Holumbus-Index-HashedDocuments.html#CompressedDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedDocuments",
          "module": "Holumbus.Index.HashedDocuments",
          "name": "unCDoc",
          "package": "Holumbus-Searchengine",
          "partial": "CDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedDocuments.html#v:unCDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "HashedIndex",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-HashedIndex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "HashedIndex",
          "package": "Holumbus-Searchengine",
          "partial": "Hashed Index",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "CompactInverted",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-HashedIndex.html#CompactInverted",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "CompactInverted",
          "package": "Holumbus-Searchengine",
          "partial": "Compact Inverted",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#t:CompactInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA document consists of a title and its unique identifier (URI)\n and a customizable component\n\u003c/p\u003e",
          "module": "Holumbus.Index.HashedIndex",
          "name": "Document",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Common-Document.html#Document",
          "type": "data"
        },
        "index": {
          "description": "document consists of title and its unique identifier URI and customizable component",
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "Document",
          "package": "Holumbus-Searchengine",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "Documents",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-HashedDocuments.html#Documents",
          "type": "data"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "Documents",
          "package": "Holumbus-Searchengine",
          "partial": "Documents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#t:Documents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "HolumbusConfig",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-HashedIndex.html#HolumbusConfig",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "HolumbusConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Holumbus Config",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#t:HolumbusConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "HolumbusState",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-HashedIndex.html#HolumbusState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "HolumbusState",
          "package": "Holumbus-Searchengine",
          "partial": "Holumbus State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#t:HolumbusState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "Inverted",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-HashedIndex.html#Inverted",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "Inverted",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#t:Inverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "SmallDocuments",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-HashedIndex.html#SmallDocuments",
          "type": "type"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "SmallDocuments",
          "package": "Holumbus-Searchengine",
          "partial": "Small Documents",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#t:SmallDocuments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "defragmentHolumbusState",
          "package": "Holumbus-Searchengine",
          "signature": "HolumbusState di -\u003e HolumbusState di",
          "source": "src/Holumbus-Index-HashedIndex.html#defragmentHolumbusState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "defragmentHolumbusState",
          "normalized": "HolumbusState a-\u003eHolumbusState a",
          "package": "Holumbus-Searchengine",
          "partial": "Holumbus State",
          "signature": "HolumbusState di-\u003eHolumbusState di",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:defragmentHolumbusState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "emptyCompactInverted",
          "package": "Holumbus-Searchengine",
          "signature": "CompactInverted",
          "source": "src/Holumbus-Index-HashedIndex.html#emptyCompactInverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "emptyCompactInverted",
          "package": "Holumbus-Searchengine",
          "partial": "Compact Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:emptyCompactInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "emptyHolumbusState",
          "package": "Holumbus-Searchengine",
          "signature": "HolumbusState di",
          "source": "src/Holumbus-Index-HashedIndex.html#emptyHolumbusState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "emptyHolumbusState",
          "package": "Holumbus-Searchengine",
          "partial": "Holumbus State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:emptyHolumbusState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "emptyInverted",
          "package": "Holumbus-Searchengine",
          "signature": "Inverted",
          "source": "src/Holumbus-Index-HashedIndex.html#emptyInverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "emptyInverted",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:emptyInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "inverted2compactInverted",
          "package": "Holumbus-Searchengine",
          "signature": "Inverted -\u003e CompactInverted",
          "source": "src/Holumbus-Index-HashedIndex.html#inverted2compactInverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "inverted2compactInverted",
          "normalized": "Inverted-\u003eCompactInverted",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "signature": "Inverted-\u003eCompactInverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:inverted2compactInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "mergeAndWritePartialRes'",
          "package": "Holumbus-Searchengine",
          "signature": "(SmallDocuments i -\u003e SmallDocuments i) -\u003e [String] -\u003e String -\u003e m ()",
          "source": "src/Holumbus-Index-HashedIndex.html#mergeAndWritePartialRes%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "mergeAndWritePartialRes'",
          "normalized": "(SmallDocuments a-\u003eSmallDocuments a)-\u003e[String]-\u003eString-\u003eb()",
          "package": "Holumbus-Searchengine",
          "partial": "And Write Partial Res'",
          "signature": "(SmallDocuments i-\u003eSmallDocuments i)-\u003e[String]-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:mergeAndWritePartialRes-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "removeDocIdsInverted",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e Inverted -\u003e Inverted",
          "source": "src/Holumbus-Index-HashedIndex.html#removeDocIdsInverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "removeDocIdsInverted",
          "normalized": "Occurrences-\u003eInverted-\u003eInverted",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Ids Inverted",
          "signature": "Occurrences-\u003eInverted-\u003eInverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:removeDocIdsInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "writeBin",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e a -\u003e m ()",
          "source": "src/Holumbus-Index-HashedIndex.html#writeBin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "writeBin",
          "normalized": "FilePath-\u003ea-\u003eb()",
          "package": "Holumbus-Searchengine",
          "partial": "Bin",
          "signature": "FilePath-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:writeBin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "writePartialIndex",
          "package": "Holumbus-Searchengine",
          "signature": "Bool -\u003e FilePath -\u003e CrawlerAction a (HolumbusState c) ()",
          "source": "src/Holumbus-Index-HashedIndex.html#writePartialIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "writePartialIndex",
          "normalized": "Bool-\u003eFilePath-\u003eCrawlerAction a(HolumbusState b)()",
          "package": "Holumbus-Searchengine",
          "partial": "Partial Index",
          "signature": "Bool-\u003eFilePath-\u003eCrawlerAction a(HolumbusState c)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:writePartialIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "writeSearchBin",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e HolumbusState c -\u003e m ()",
          "source": "src/Holumbus-Index-HashedIndex.html#writeSearchBin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "writeSearchBin",
          "normalized": "FilePath-\u003eHolumbusState a-\u003eb()",
          "package": "Holumbus-Searchengine",
          "partial": "Search Bin",
          "signature": "FilePath-\u003eHolumbusState c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:writeSearchBin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.HashedIndex",
          "name": "writeXml",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e a -\u003e m ()",
          "source": "src/Holumbus-Index-HashedIndex.html#writeXml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index HashedIndex",
          "module": "Holumbus.Index.HashedIndex",
          "name": "writeXml",
          "normalized": "FilePath-\u003ea-\u003eb()",
          "package": "Holumbus-Searchengine",
          "partial": "Xml",
          "signature": "FilePath-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-HashedIndex.html#v:writeXml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "CompressedPrefixMem",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "CompressedPrefixMem",
          "package": "Holumbus-Searchengine",
          "partial": "Compressed Prefix Mem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "ComprOccurrences",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#ComprOccurrences",
          "type": "class"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "ComprOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Compr Occurrences",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#t:ComprOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe index consists of a table which maps documents to ids and a number of index parts.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "Inverted",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#Inverted",
          "type": "newtype"
        },
        "index": {
          "description": "The index consists of table which maps documents to ids and number of index parts",
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "Inverted",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#t:Inverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pure inverted index implemented as a prefix tree without any space optimizations.\n This may be taken as a reference for space and time measurements for the other index structures\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "Inverted0",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#Inverted0",
          "type": "type"
        },
        "index": {
          "description": "The pure inverted index implemented as prefix tree without any space optimizations This may be taken as reference for space and time measurements for the other index structures",
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "Inverted0",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#t:Inverted0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverted index with serialized occurence maps with simple-9 encoded sets\n and with the serialized bytestrings compressed with bzip2\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "InvertedCSerialized",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#InvertedCSerialized",
          "type": "type"
        },
        "index": {
          "description": "The inverted index with serialized occurence maps with simple-9 encoded sets and with the serialized bytestrings compressed with bzip2",
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "InvertedCSerialized",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted CSerialized",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#t:InvertedCSerialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverted index with simple-9 encoding of the occurence sets\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "InvertedCompressed",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#InvertedCompressed",
          "type": "type"
        },
        "index": {
          "description": "The inverted index with simple-9 encoding of the occurence sets",
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "InvertedCompressed",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted Compressed",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#t:InvertedCompressed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pure inverted index with serialized occurence maps\n and with the serialized bytestrings compressed with bzip2, no simple-9 encoding.\n This is the most space efficient index of the 5 variants, even a few percent smaller\n then InvertedCSerialized, and a few percent faster in lookup\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "InvertedOSerialized",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#InvertedOSerialized",
          "type": "type"
        },
        "index": {
          "description": "The pure inverted index with serialized occurence maps and with the serialized bytestrings compressed with bzip2 no simple-9 encoding This is the most space efficient index of the variants even few percent smaller then InvertedCSerialized and few percent faster in lookup",
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "InvertedOSerialized",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted OSerialized",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#t:InvertedOSerialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverted index with serialized occurence maps with simple-9 encoded sets\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "InvertedSerialized",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#InvertedSerialized",
          "type": "type"
        },
        "index": {
          "description": "The inverted index with serialized occurence maps with simple-9 encoded sets",
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "InvertedSerialized",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted Serialized",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#t:InvertedSerialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe index part is the real inverted index. Words are mapped to their occurrences.\n The part is implemented as a prefix tree\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "Part",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#Part",
          "type": "type"
        },
        "index": {
          "description": "The index part is the real inverted index Words are mapped to their occurrences The part is implemented as prefix tree",
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "Part",
          "package": "Holumbus-Searchengine",
          "partial": "Part",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#t:Part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe index parts are identified by a name, which should denote the context of the words.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "Parts",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#Parts",
          "type": "type"
        },
        "index": {
          "description": "The index parts are identified by name which should denote the context of the words",
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "Parts",
          "package": "Holumbus-Searchengine",
          "partial": "Parts",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#t:Parts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "Sizeof",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#Sizeof",
          "type": "class"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "Sizeof",
          "package": "Holumbus-Searchengine",
          "partial": "Sizeof",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#t:Sizeof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "Inverted",
          "package": "Holumbus-Searchengine",
          "signature": "Inverted",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#Inverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "Inverted",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:Inverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "deleteDocIds",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e s -\u003e s",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#deleteDocIds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "deleteDocIds",
          "normalized": "Occurrences-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Ids",
          "signature": "Occurrences-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:deleteDocIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "deletePosOcc",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e Position -\u003e s -\u003e s",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#deletePosOcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "deletePosOcc",
          "normalized": "DocId-\u003ePosition-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Pos Occ",
          "signature": "DocId-\u003ePosition-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:deletePosOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "diffOcc",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e s -\u003e s",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#diffOcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "diffOcc",
          "normalized": "Occurrences-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Occ",
          "signature": "Occurrences-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:diffOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "emptyInverted0",
          "package": "Holumbus-Searchengine",
          "signature": "Inverted0",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#emptyInverted0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "emptyInverted0",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:emptyInverted0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "emptyInvertedCSerialized",
          "package": "Holumbus-Searchengine",
          "signature": "InvertedCSerialized",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#emptyInvertedCSerialized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "emptyInvertedCSerialized",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted CSerialized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:emptyInvertedCSerialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "emptyInvertedCompressed",
          "package": "Holumbus-Searchengine",
          "signature": "InvertedCompressed",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#emptyInvertedCompressed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "emptyInvertedCompressed",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted Compressed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:emptyInvertedCompressed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "emptyInvertedOSerialized",
          "package": "Holumbus-Searchengine",
          "signature": "InvertedOSerialized",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#emptyInvertedOSerialized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "emptyInvertedOSerialized",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted OSerialized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:emptyInvertedOSerialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "emptyInvertedSerialized",
          "package": "Holumbus-Searchengine",
          "signature": "InvertedSerialized",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#emptyInvertedSerialized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "emptyInvertedSerialized",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted Serialized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:emptyInvertedSerialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "emptyOcc",
          "package": "Holumbus-Searchengine",
          "signature": "s",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#emptyOcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "emptyOcc",
          "package": "Holumbus-Searchengine",
          "partial": "Occ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:emptyOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "fromOccurrences",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e s",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#fromOccurrences",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "fromOccurrences",
          "normalized": "Occurrences-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "signature": "Occurrences-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:fromOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "insertPosOcc",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e Position -\u003e s -\u003e s",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#insertPosOcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "insertPosOcc",
          "normalized": "DocId-\u003ePosition-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Pos Occ",
          "signature": "DocId-\u003ePosition-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:insertPosOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "mapOcc",
          "package": "Holumbus-Searchengine",
          "signature": "(Occurrences -\u003e Occurrences) -\u003e s -\u003e s",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#mapOcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "mapOcc",
          "normalized": "(Occurrences-\u003eOccurrences)-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Occ",
          "signature": "(Occurrences-\u003eOccurrences)-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:mapOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "nullOcc",
          "package": "Holumbus-Searchengine",
          "signature": "s -\u003e Bool",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#nullOcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "nullOcc",
          "normalized": "a-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "Occ",
          "signature": "s-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:nullOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove DocIds from index\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "removeDocIdsInverted",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e Inverted i -\u003e Inverted i",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#removeDocIdsInverted",
          "type": "function"
        },
        "index": {
          "description": "Remove DocIds from index",
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "removeDocIdsInverted",
          "normalized": "Occurrences-\u003eInverted a-\u003eInverted a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Ids Inverted",
          "signature": "Occurrences-\u003eInverted i-\u003eInverted i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:removeDocIdsInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "sizeof",
          "package": "Holumbus-Searchengine",
          "signature": "a -\u003e Int64",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#sizeof",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "sizeof",
          "normalized": "a-\u003eInt",
          "package": "Holumbus-Searchengine",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:sizeof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "sizeofAttrsInverted",
          "package": "Holumbus-Searchengine",
          "signature": "Inverted i -\u003e Int64",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#sizeofAttrsInverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "sizeofAttrsInverted",
          "normalized": "Inverted a-\u003eInt",
          "package": "Holumbus-Searchengine",
          "partial": "Attrs Inverted",
          "signature": "Inverted i-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:sizeofAttrsInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "theOcc",
          "package": "Holumbus-Searchengine",
          "signature": "s -\u003e Occurrences",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#theOcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "theOcc",
          "normalized": "a-\u003eOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occ",
          "signature": "s-\u003eOccurrences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:theOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "toOccurrences",
          "package": "Holumbus-Searchengine",
          "signature": "s -\u003e Occurrences",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#toOccurrences",
          "type": "method"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "toOccurrences",
          "normalized": "a-\u003eOccurrences",
          "package": "Holumbus-Searchengine",
          "partial": "Occurrences",
          "signature": "s-\u003eOccurrences",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:toOccurrences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parts of the index, each representing one context.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "unInverted",
          "package": "Holumbus-Searchengine",
          "signature": "Parts occ",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#Inverted",
          "type": "function"
        },
        "index": {
          "description": "The parts of the index each representing one context",
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "unInverted",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:unInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "unionOcc",
          "package": "Holumbus-Searchengine",
          "signature": "Occurrences -\u003e s -\u003e s",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#unionOcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "unionOcc",
          "normalized": "Occurrences-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Occ",
          "signature": "Occurrences-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:unionOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "updateDocIdOcc",
          "package": "Holumbus-Searchengine",
          "signature": "(DocId -\u003e DocId) -\u003e s -\u003e s",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#updateDocIdOcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "updateDocIdOcc",
          "normalized": "(DocId-\u003eDocId)-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Id Occ",
          "signature": "(DocId-\u003eDocId)-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:updateDocIdOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "zipOcc",
          "package": "Holumbus-Searchengine",
          "signature": "(Occurrences -\u003e Occurrences -\u003e Occurrences) -\u003e s -\u003e s -\u003e s",
          "source": "src/Holumbus-Index-Inverted-CompressedPrefixMem.html#zipOcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted CompressedPrefixMem",
          "module": "Holumbus.Index.Inverted.CompressedPrefixMem",
          "name": "zipOcc",
          "normalized": "(Occurrences-\u003eOccurrences-\u003eOccurrences)-\u003ea-\u003ea-\u003ea",
          "package": "Holumbus-Searchengine",
          "partial": "Occ",
          "signature": "(Occurrences-\u003eOccurrences-\u003eOccurrences)-\u003es-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-CompressedPrefixMem.html#v:zipOcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA variant of the Inverted.Memory index with an optimized prefix tree\n  instead of a trie as central data structure. This version should be\n  more space efficient as the trie and more runtime efficient when combining\n  whole indexes.\n\u003c/p\u003e\u003cp\u003eFor switching from Memory to this module, only the import has to be modified\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "PrefixMem",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-PrefixMem.html",
          "type": "module"
        },
        "index": {
          "description": "variant of the Inverted.Memory index with an optimized prefix tree instead of trie as central data structure This version should be more space efficient as the trie and more runtime efficient when combining whole indexes For switching from Memory to this module only the import has to be modified",
          "hierarchy": "Holumbus Index Inverted PrefixMem",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "PrefixMem",
          "package": "Holumbus-Searchengine",
          "partial": "Prefix Mem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-PrefixMem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe index consists of a table which maps documents to ids and a number of index parts.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "Inverted",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-PrefixMem.html#Inverted",
          "type": "newtype"
        },
        "index": {
          "description": "The index consists of table which maps documents to ids and number of index parts",
          "hierarchy": "Holumbus Index Inverted PrefixMem",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "Inverted",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-PrefixMem.html#t:Inverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe index part is the real inverted index. Words are mapped to their occurrences.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "Part",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-PrefixMem.html#Part",
          "type": "type"
        },
        "index": {
          "description": "The index part is the real inverted index Words are mapped to their occurrences",
          "hierarchy": "Holumbus Index Inverted PrefixMem",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "Part",
          "package": "Holumbus-Searchengine",
          "partial": "Part",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-PrefixMem.html#t:Part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe index parts are identified by a name, which should denote the context of the words.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "Parts",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Index-Inverted-PrefixMem.html#Parts",
          "type": "type"
        },
        "index": {
          "description": "The index parts are identified by name which should denote the context of the words",
          "hierarchy": "Holumbus Index Inverted PrefixMem",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "Parts",
          "package": "Holumbus-Searchengine",
          "partial": "Parts",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-PrefixMem.html#t:Parts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "Inverted",
          "package": "Holumbus-Searchengine",
          "signature": "Inverted",
          "source": "src/Holumbus-Index-Inverted-PrefixMem.html#Inverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted PrefixMem",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "Inverted",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-PrefixMem.html#v:Inverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty index.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "emptyInverted",
          "package": "Holumbus-Searchengine",
          "signature": "Inverted",
          "source": "src/Holumbus-Index-Inverted-PrefixMem.html#emptyInverted",
          "type": "function"
        },
        "index": {
          "description": "Create an empty index",
          "hierarchy": "Holumbus Index Inverted PrefixMem",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "emptyInverted",
          "package": "Holumbus-Searchengine",
          "partial": "Inverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-PrefixMem.html#v:emptyInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "indexParts",
          "package": "Holumbus-Searchengine",
          "signature": "Parts",
          "source": "src/Holumbus-Index-Inverted-PrefixMem.html#Inverted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Index Inverted PrefixMem",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "indexParts",
          "package": "Holumbus-Searchengine",
          "partial": "Parts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-PrefixMem.html#v:indexParts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an index with just one word in one context.\n\u003c/p\u003e",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "singleton",
          "package": "Holumbus-Searchengine",
          "signature": "Context -\u003e String -\u003e Occurrences -\u003e Inverted",
          "source": "src/Holumbus-Index-Inverted-PrefixMem.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create an index with just one word in one context",
          "hierarchy": "Holumbus Index Inverted PrefixMem",
          "module": "Holumbus.Index.Inverted.PrefixMem",
          "name": "singleton",
          "normalized": "Context-\u003eString-\u003eOccurrences-\u003eInverted",
          "package": "Holumbus-Searchengine",
          "signature": "Context-\u003eString-\u003eOccurrences-\u003eInverted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Index-Inverted-PrefixMem.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.2\n\u003c/p\u003e\u003cp\u003eThe unique Holumbus mechanism for generating fuzzy sets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "Fuzzy",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Fuzzy.html",
          "type": "module"
        },
        "index": {
          "description": "Version The unique Holumbus mechanism for generating fuzzy sets",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "Fuzzy",
          "package": "Holumbus-Searchengine",
          "partial": "Fuzzy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe configuration of a fuzzy query.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "FuzzyConfig",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Fuzzy.html#FuzzyConfig",
          "type": "data"
        },
        "index": {
          "description": "The configuration of fuzzy query",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "FuzzyConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Fuzzy Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#t:FuzzyConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe score indicating an amount of fuzziness. \n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "FuzzyScore",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Fuzzy.html#FuzzyScore",
          "type": "type"
        },
        "index": {
          "description": "The score indicating an amount of fuzziness",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "FuzzyScore",
          "package": "Holumbus-Searchengine",
          "partial": "Fuzzy Score",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#t:FuzzyScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of string which have been \u003ca\u003efuzzed\u003c/a\u003e with an associated score.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "FuzzySet",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Fuzzy.html#FuzzySet",
          "type": "type"
        },
        "index": {
          "description": "set of string which have been fuzzed with an associated score",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "FuzzySet",
          "package": "Holumbus-Searchengine",
          "partial": "Fuzzy Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#t:FuzzySet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single replacements, where the first will be replaced by the second and vice versa in\n the target string. The score indicates the amount of fuzzines that one single application\n of this replacement in just one direction will cause on the target string.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "Replacement",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Fuzzy.html#Replacement",
          "type": "type"
        },
        "index": {
          "description": "single replacements where the first will be replaced by the second and vice versa in the target string The score indicates the amount of fuzzines that one single application of this replacement in just one direction will cause on the target string",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "Replacement",
          "package": "Holumbus-Searchengine",
          "partial": "Replacement",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#t:Replacement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome replacements which can be applied to a string to generate a \u003ccode\u003e\u003ca\u003eFuzzySet\u003c/a\u003e\u003c/code\u003e. The scores of\n the replacements will be normalized to a maximum of 1.0.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "Replacements",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Fuzzy.html#Replacements",
          "type": "type"
        },
        "index": {
          "description": "Some replacements which can be applied to string to generate FuzzySet The scores of the replacements will be normalized to maximum of",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "Replacements",
          "package": "Holumbus-Searchengine",
          "partial": "Replacements",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#t:Replacements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Query.Fuzzy",
          "name": "FuzzyConfig",
          "package": "Holumbus-Searchengine",
          "signature": "FuzzyConfig",
          "source": "src/Holumbus-Query-Fuzzy.html#FuzzyConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "FuzzyConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Fuzzy Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#v:FuzzyConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether the replacements should be applied.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "applyReplacements",
          "package": "Holumbus-Searchengine",
          "signature": "Bool",
          "source": "src/Holumbus-Query-Fuzzy.html#FuzzyConfig",
          "type": "function"
        },
        "index": {
          "description": "Indicates whether the replacements should be applied",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "applyReplacements",
          "package": "Holumbus-Searchengine",
          "partial": "Replacements",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#v:applyReplacements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether the swapping of adjacent characters should be applied.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "applySwappings",
          "package": "Holumbus-Searchengine",
          "signature": "Bool",
          "source": "src/Holumbus-Query-Fuzzy.html#FuzzyConfig",
          "type": "function"
        },
        "index": {
          "description": "Indicates whether the swapping of adjacent characters should be applied",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "applySwappings",
          "package": "Holumbus-Searchengine",
          "partial": "Swappings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#v:applySwappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe replacements that should be applied.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "customReplacements",
          "package": "Holumbus-Searchengine",
          "signature": "Replacements",
          "source": "src/Holumbus-Query-Fuzzy.html#FuzzyConfig",
          "type": "function"
        },
        "index": {
          "description": "The replacements that should be applied",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "customReplacements",
          "package": "Holumbus-Searchengine",
          "partial": "Replacements",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#v:customReplacements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome default replacements for the english language.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "englishReplacements",
          "package": "Holumbus-Searchengine",
          "signature": "Replacements",
          "source": "src/Holumbus-Query-Fuzzy.html#englishReplacements",
          "type": "function"
        },
        "index": {
          "description": "Some default replacements for the english language",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "englishReplacements",
          "package": "Holumbus-Searchengine",
          "partial": "Replacements",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#v:englishReplacements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinue fuzzing a string with the an explicitly specified list of replacements until \n a given score threshold is reached.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "fuzz",
          "package": "Holumbus-Searchengine",
          "signature": "FuzzyConfig -\u003e String -\u003e FuzzySet",
          "source": "src/Holumbus-Query-Fuzzy.html#fuzz",
          "type": "function"
        },
        "index": {
          "description": "Continue fuzzing string with the an explicitly specified list of replacements until given score threshold is reached",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "fuzz",
          "normalized": "FuzzyConfig-\u003eString-\u003eFuzzySet",
          "package": "Holumbus-Searchengine",
          "signature": "FuzzyConfig-\u003eString-\u003eFuzzySet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#v:fuzz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome default replacements for the german language.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "germanReplacements",
          "package": "Holumbus-Searchengine",
          "signature": "Replacements",
          "source": "src/Holumbus-Query-Fuzzy.html#germanReplacements",
          "type": "function"
        },
        "index": {
          "description": "Some default replacements for the german language",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "germanReplacements",
          "package": "Holumbus-Searchengine",
          "partial": "Replacements",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#v:germanReplacements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum allowed fuzziness.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "maxFuzziness",
          "package": "Holumbus-Searchengine",
          "signature": "FuzzyScore",
          "source": "src/Holumbus-Query-Fuzzy.html#FuzzyConfig",
          "type": "function"
        },
        "index": {
          "description": "The maximum allowed fuzziness",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "maxFuzziness",
          "package": "Holumbus-Searchengine",
          "partial": "Fuzziness",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#v:maxFuzziness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a fuzzy set into a list (ordered by score).\n\u003c/p\u003e",
          "module": "Holumbus.Query.Fuzzy",
          "name": "toList",
          "package": "Holumbus-Searchengine",
          "signature": "FuzzySet -\u003e [(String, FuzzyScore)]",
          "source": "src/Holumbus-Query-Fuzzy.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Transform fuzzy set into list ordered by score",
          "hierarchy": "Holumbus Query Fuzzy",
          "module": "Holumbus.Query.Fuzzy",
          "name": "toList",
          "normalized": "FuzzySet-\u003e[(String,FuzzyScore)]",
          "package": "Holumbus-Searchengine",
          "partial": "List",
          "signature": "FuzzySet-\u003e[(String,FuzzyScore)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Fuzzy.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.3\n\u003c/p\u003e\u003cp\u003eThe data type for intermediate results occuring during query processing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Query.Intermediate",
          "name": "Intermediate",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Intermediate.html",
          "type": "module"
        },
        "index": {
          "description": "Version The data type for intermediate results occuring during query processing",
          "hierarchy": "Holumbus Query Intermediate",
          "module": "Holumbus.Query.Intermediate",
          "name": "Intermediate",
          "package": "Holumbus-Searchengine",
          "partial": "Intermediate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Intermediate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe intermediate result used during query processing.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Intermediate",
          "name": "Intermediate",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Intermediate.html#Intermediate",
          "type": "type"
        },
        "index": {
          "description": "The intermediate result used during query processing",
          "hierarchy": "Holumbus Query Intermediate",
          "module": "Holumbus.Query.Intermediate",
          "name": "Intermediate",
          "package": "Holumbus-Searchengine",
          "partial": "Intermediate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Intermediate.html#t:Intermediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstract two sets of intermediate results.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Intermediate",
          "name": "difference",
          "package": "Holumbus-Searchengine",
          "signature": "Intermediate -\u003e Intermediate -\u003e Intermediate",
          "source": "src/Holumbus-Query-Intermediate.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Substract two sets of intermediate results",
          "hierarchy": "Holumbus Query Intermediate",
          "module": "Holumbus.Query.Intermediate",
          "name": "difference",
          "normalized": "Intermediate-\u003eIntermediate-\u003eIntermediate",
          "package": "Holumbus-Searchengine",
          "signature": "Intermediate-\u003eIntermediate-\u003eIntermediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Intermediate.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty intermediate result.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Intermediate",
          "name": "emptyIntermediate",
          "package": "Holumbus-Searchengine",
          "signature": "Intermediate",
          "source": "src/Holumbus-Query-Intermediate.html#emptyIntermediate",
          "type": "function"
        },
        "index": {
          "description": "Create an empty intermediate result",
          "hierarchy": "Holumbus Query Intermediate",
          "module": "Holumbus.Query.Intermediate",
          "name": "emptyIntermediate",
          "package": "Holumbus-Searchengine",
          "partial": "Intermediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Intermediate.html#v:emptyIntermediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an intermediate result from a list of words and their occurrences.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Intermediate",
          "name": "fromList",
          "package": "Holumbus-Searchengine",
          "signature": "Word -\u003e Context -\u003e RawResult -\u003e Intermediate",
          "source": "src/Holumbus-Query-Intermediate.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create an intermediate result from list of words and their occurrences",
          "hierarchy": "Holumbus Query Intermediate",
          "module": "Holumbus.Query.Intermediate",
          "name": "fromList",
          "normalized": "Word-\u003eContext-\u003eRawResult-\u003eIntermediate",
          "package": "Holumbus-Searchengine",
          "partial": "List",
          "signature": "Word-\u003eContext-\u003eRawResult-\u003eIntermediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Intermediate.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersect two sets of intermediate results.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Intermediate",
          "name": "intersection",
          "package": "Holumbus-Searchengine",
          "signature": "Intermediate -\u003e Intermediate -\u003e Intermediate",
          "source": "src/Holumbus-Query-Intermediate.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Intersect two sets of intermediate results",
          "hierarchy": "Holumbus Query Intermediate",
          "module": "Holumbus.Query.Intermediate",
          "name": "intersection",
          "normalized": "Intermediate-\u003eIntermediate-\u003eIntermediate",
          "package": "Holumbus-Searchengine",
          "signature": "Intermediate-\u003eIntermediate-\u003eIntermediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Intermediate.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the intermediate result is empty.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Intermediate",
          "name": "null",
          "package": "Holumbus-Searchengine",
          "signature": "Intermediate -\u003e Bool",
          "source": "src/Holumbus-Query-Intermediate.html#null",
          "type": "function"
        },
        "index": {
          "description": "Check if the intermediate result is empty",
          "hierarchy": "Holumbus Query Intermediate",
          "module": "Holumbus.Query.Intermediate",
          "name": "null",
          "normalized": "Intermediate-\u003eBool",
          "package": "Holumbus-Searchengine",
          "signature": "Intermediate-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Intermediate.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of documents in the intermediate result.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Intermediate",
          "name": "sizeIntermediate",
          "package": "Holumbus-Searchengine",
          "signature": "Intermediate -\u003e Int",
          "source": "src/Holumbus-Query-Intermediate.html#sizeIntermediate",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of documents in the intermediate result",
          "hierarchy": "Holumbus Query Intermediate",
          "module": "Holumbus.Query.Intermediate",
          "name": "sizeIntermediate",
          "normalized": "Intermediate-\u003eInt",
          "package": "Holumbus-Searchengine",
          "partial": "Intermediate",
          "signature": "Intermediate-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Intermediate.html#v:sizeIntermediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to a \u003ccode\u003eResult\u003c/code\u003e by generating the \u003ccode\u003e\u003ca\u003eWordHits\u003c/a\u003e\u003c/code\u003e structure.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Intermediate",
          "name": "toResult",
          "package": "Holumbus-Searchengine",
          "signature": "d c -\u003e Intermediate -\u003e Result c",
          "source": "src/Holumbus-Query-Intermediate.html#toResult",
          "type": "function"
        },
        "index": {
          "description": "Convert to Result by generating the WordHits structure",
          "hierarchy": "Holumbus Query Intermediate",
          "module": "Holumbus.Query.Intermediate",
          "name": "toResult",
          "normalized": "a b-\u003eIntermediate-\u003eResult b",
          "package": "Holumbus-Searchengine",
          "partial": "Result",
          "signature": "d c-\u003eIntermediate-\u003eResult c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Intermediate.html#v:toResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion two sets of intermediate results.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Intermediate",
          "name": "union",
          "package": "Holumbus-Searchengine",
          "signature": "Intermediate -\u003e Intermediate -\u003e Intermediate",
          "source": "src/Holumbus-Query-Intermediate.html#union",
          "type": "function"
        },
        "index": {
          "description": "Union two sets of intermediate results",
          "hierarchy": "Holumbus Query Intermediate",
          "module": "Holumbus.Query.Intermediate",
          "name": "union",
          "normalized": "Intermediate-\u003eIntermediate-\u003eIntermediate",
          "package": "Holumbus-Searchengine",
          "signature": "Intermediate-\u003eIntermediate-\u003eIntermediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Intermediate.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges a bunch of intermediate results into one intermediate result by unioning them.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Intermediate",
          "name": "unions",
          "package": "Holumbus-Searchengine",
          "signature": "[Intermediate] -\u003e Intermediate",
          "source": "src/Holumbus-Query-Intermediate.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Merges bunch of intermediate results into one intermediate result by unioning them",
          "hierarchy": "Holumbus Query Intermediate",
          "module": "Holumbus.Query.Intermediate",
          "name": "unions",
          "normalized": "[Intermediate]-\u003eIntermediate",
          "package": "Holumbus-Searchengine",
          "signature": "[Intermediate]-\u003eIntermediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Intermediate.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.2\n\u003c/p\u003e\u003cp\u003eThe Holumbus query language definition. \n\u003c/p\u003e\u003cp\u003eThe specific syntax of any query language can be designed independently \n  by creating appropriate parsers. Also see \u003ca\u003eHolumbus.Query.Language.Parser\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Grammar",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Language-Grammar.html",
          "type": "module"
        },
        "index": {
          "description": "Version The Holumbus query language definition The specific syntax of any query language can be designed independently by creating appropriate parsers Also see Holumbus.Query.Language.Parser",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Grammar",
          "package": "Holumbus-Searchengine",
          "partial": "Grammar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA binary operation.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "BinOp",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Language-Grammar.html#BinOp",
          "type": "data"
        },
        "index": {
          "description": "binary operation",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "BinOp",
          "package": "Holumbus-Searchengine",
          "partial": "Bin Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#t:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe query language.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Query",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Language-Grammar.html#Query",
          "type": "data"
        },
        "index": {
          "description": "The query language",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Query",
          "package": "Holumbus-Searchengine",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersect two queries.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "And",
          "package": "Holumbus-Searchengine",
          "signature": "And",
          "source": "src/Holumbus-Query-Language-Grammar.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "Intersect two queries",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "And",
          "package": "Holumbus-Searchengine",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two queries through a binary operation.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "BinQuery",
          "package": "Holumbus-Searchengine",
          "signature": "BinQuery BinOp Query Query",
          "source": "src/Holumbus-Query-Language-Grammar.html#Query",
          "type": "function"
        },
        "index": {
          "description": "Combine two queries through binary operation",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "BinQuery",
          "package": "Holumbus-Searchengine",
          "partial": "Bin Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:BinQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter a query by another, \u003ccode\u003eq1 BUT q2\u003c/code\u003e is equivalent to \u003ccode\u003eq1 AND NOT q2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "But",
          "package": "Holumbus-Searchengine",
          "signature": "But",
          "source": "src/Holumbus-Query-Language-Grammar.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "Filter query by another q1 BUT q2 is equivalent to q1 AND NOT q2",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "But",
          "package": "Holumbus-Searchengine",
          "partial": "But",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:But"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle case-sensitive phrase.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "CasePhrase",
          "package": "Holumbus-Searchengine",
          "signature": "CasePhrase String",
          "source": "src/Holumbus-Query-Language-Grammar.html#Query",
          "type": "function"
        },
        "index": {
          "description": "Single case-sensitive phrase",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "CasePhrase",
          "package": "Holumbus-Searchengine",
          "partial": "Case Phrase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:CasePhrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle case-sensitive word.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "CaseWord",
          "package": "Holumbus-Searchengine",
          "signature": "CaseWord String",
          "source": "src/Holumbus-Query-Language-Grammar.html#Query",
          "type": "function"
        },
        "index": {
          "description": "Single case-sensitive word",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "CaseWord",
          "package": "Holumbus-Searchengine",
          "partial": "Case Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:CaseWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle fuzzy word.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "FuzzyWord",
          "package": "Holumbus-Searchengine",
          "signature": "FuzzyWord String",
          "source": "src/Holumbus-Query-Language-Grammar.html#Query",
          "type": "function"
        },
        "index": {
          "description": "Single fuzzy word",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "FuzzyWord",
          "package": "Holumbus-Searchengine",
          "partial": "Fuzzy Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:FuzzyWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegate the query.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Negation",
          "package": "Holumbus-Searchengine",
          "signature": "Negation Query",
          "source": "src/Holumbus-Query-Language-Grammar.html#Query",
          "type": "function"
        },
        "index": {
          "description": "Negate the query",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Negation",
          "package": "Holumbus-Searchengine",
          "partial": "Negation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:Negation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion two queries.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Or",
          "package": "Holumbus-Searchengine",
          "signature": "Or",
          "source": "src/Holumbus-Query-Language-Grammar.html#BinOp",
          "type": "function"
        },
        "index": {
          "description": "Union two queries",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Or",
          "package": "Holumbus-Searchengine",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle case-insensitive phrase.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Phrase",
          "package": "Holumbus-Searchengine",
          "signature": "Phrase String",
          "source": "src/Holumbus-Query-Language-Grammar.html#Query",
          "type": "function"
        },
        "index": {
          "description": "Single case-insensitive phrase",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Phrase",
          "package": "Holumbus-Searchengine",
          "partial": "Phrase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:Phrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict query to a list of contexts.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Specifier",
          "package": "Holumbus-Searchengine",
          "signature": "Specifier [Context] Query",
          "source": "src/Holumbus-Query-Language-Grammar.html#Query",
          "type": "function"
        },
        "index": {
          "description": "Restrict query to list of contexts",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Specifier",
          "normalized": "Specifier[Context]Query",
          "package": "Holumbus-Searchengine",
          "partial": "Specifier",
          "signature": "Specifier[Context]Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:Specifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle case-insensitive word.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Word",
          "package": "Holumbus-Searchengine",
          "signature": "Word String",
          "source": "src/Holumbus-Query-Language-Grammar.html#Query",
          "type": "function"
        },
        "index": {
          "description": "Single case-insensitive word",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "Word",
          "package": "Holumbus-Searchengine",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the query arguments comply with some custom predicate.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "checkWith",
          "package": "Holumbus-Searchengine",
          "signature": "(String -\u003e Bool) -\u003e Query -\u003e Bool",
          "source": "src/Holumbus-Query-Language-Grammar.html#checkWith",
          "type": "function"
        },
        "index": {
          "description": "Check if the query arguments comply with some custom predicate",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "checkWith",
          "normalized": "(String-\u003eBool)-\u003eQuery-\u003eBool",
          "package": "Holumbus-Searchengine",
          "partial": "With",
          "signature": "(String-\u003eBool)-\u003eQuery-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:checkWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all terms in the query.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "extractTerms",
          "package": "Holumbus-Searchengine",
          "signature": "Query -\u003e [String]",
          "source": "src/Holumbus-Query-Language-Grammar.html#extractTerms",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all terms in the query",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "extractTerms",
          "normalized": "Query-\u003e[String]",
          "package": "Holumbus-Searchengine",
          "partial": "Terms",
          "signature": "Query-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:extractTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms all \u003ccode\u003e(BinQuery And q1 q2)\u003c/code\u003e where one of \u003ccode\u003eq1\u003c/code\u003e or \u003ccode\u003eq2\u003c/code\u003e is a \u003ccode\u003eNegation\u003c/code\u003e into\n \u003ccode\u003eBinQuery Filter q1 q2\u003c/code\u003e or \u003ccode\u003eBinQuery Filter q2 q1\u003c/code\u003e respectively.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "optimize",
          "package": "Holumbus-Searchengine",
          "signature": "Query -\u003e Query",
          "source": "src/Holumbus-Query-Language-Grammar.html#optimize",
          "type": "function"
        },
        "index": {
          "description": "Transforms all BinQuery And q1 q2 where one of q1 or q2 is Negation into BinQuery Filter q1 q2 or BinQuery Filter q2 q1 respectively",
          "hierarchy": "Holumbus Query Language Grammar",
          "module": "Holumbus.Query.Language.Grammar",
          "name": "optimize",
          "normalized": "Query-\u003eQuery",
          "package": "Holumbus-Searchengine",
          "signature": "Query-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Grammar.html#v:optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.2\n\u003c/p\u003e\u003cp\u003eThe Holumbus query parser, based on the famous Parsec library.\n\u003c/p\u003e\u003cp\u003eThe parser implements a default syntax for the query grammar which exposes\n  all possible query types and operators to the user.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Query.Language.Parser",
          "name": "Parser",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Language-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Version The Holumbus query parser based on the famous Parsec library The parser implements default syntax for the query grammar which exposes all possible query types and operators to the user",
          "hierarchy": "Holumbus Query Language Parser",
          "module": "Holumbus.Query.Language.Parser",
          "name": "Parser",
          "package": "Holumbus-Searchengine",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a query using the default syntax provided by the Holumbus framework.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Language.Parser",
          "name": "parseQuery",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e Either String Query",
          "source": "src/Holumbus-Query-Language-Parser.html#parseQuery",
          "type": "function"
        },
        "index": {
          "description": "Parse query using the default syntax provided by the Holumbus framework",
          "hierarchy": "Holumbus Query Language Parser",
          "module": "Holumbus.Query.Language.Parser",
          "name": "parseQuery",
          "normalized": "String-\u003eEither String Query",
          "package": "Holumbus-Searchengine",
          "partial": "Query",
          "signature": "String-\u003eEither String Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Language-Parser.html#v:parseQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Holumbus query processor. Supports exact word or phrase queries as well\n  as fuzzy word and case-insensitive word and phrase queries. Boolean\n  operators like AND, OR and NOT are supported. Context specifiers and\n  priorities are supported, too.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Query.Processor",
          "name": "Processor",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Processor.html",
          "type": "module"
        },
        "index": {
          "description": "The Holumbus query processor Supports exact word or phrase queries as well as fuzzy word and case-insensitive word and phrase queries Boolean operators like AND OR and NOT are supported Context specifiers and priorities are supported too",
          "hierarchy": "Holumbus Query Processor",
          "module": "Holumbus.Query.Processor",
          "name": "Processor",
          "package": "Holumbus-Searchengine",
          "partial": "Processor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Processor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe configuration for the query processor.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Processor",
          "name": "ProcessConfig",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Processor.html#ProcessConfig",
          "type": "data"
        },
        "index": {
          "description": "The configuration for the query processor",
          "hierarchy": "Holumbus Query Processor",
          "module": "Holumbus.Query.Processor",
          "name": "ProcessConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Process Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Processor.html#t:ProcessConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Query.Processor",
          "name": "ProcessConfig",
          "package": "Holumbus-Searchengine",
          "signature": "ProcessConfig",
          "source": "src/Holumbus-Query-Processor.html#ProcessConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Query Processor",
          "module": "Holumbus.Query.Processor",
          "name": "ProcessConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Process Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Processor.html#v:ProcessConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum number of documents taken into account. Zero switches off limiting.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Processor",
          "name": "docLimit",
          "package": "Holumbus-Searchengine",
          "signature": "Int",
          "source": "src/Holumbus-Query-Processor.html#ProcessConfig",
          "type": "function"
        },
        "index": {
          "description": "The maximum number of documents taken into account Zero switches off limiting",
          "hierarchy": "Holumbus Query Processor",
          "module": "Holumbus.Query.Processor",
          "name": "docLimit",
          "package": "Holumbus-Searchengine",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Processor.html#v:docLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe configuration for fuzzy queries.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Processor",
          "name": "fuzzyConfig",
          "package": "Holumbus-Searchengine",
          "signature": "FuzzyConfig",
          "source": "src/Holumbus-Query-Processor.html#ProcessConfig",
          "type": "function"
        },
        "index": {
          "description": "The configuration for fuzzy queries",
          "hierarchy": "Holumbus Query Processor",
          "module": "Holumbus.Query.Processor",
          "name": "fuzzyConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Processor.html#v:fuzzyConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimize the query before processing.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Processor",
          "name": "optimizeQuery",
          "package": "Holumbus-Searchengine",
          "signature": "Bool",
          "source": "src/Holumbus-Query-Processor.html#ProcessConfig",
          "type": "function"
        },
        "index": {
          "description": "Optimize the query before processing",
          "hierarchy": "Holumbus Query Processor",
          "module": "Holumbus.Query.Processor",
          "name": "optimizeQuery",
          "package": "Holumbus-Searchengine",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Processor.html#v:optimizeQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a query only partially in terms of a distributed index. Only the intermediate \n result will be returned.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Processor",
          "name": "processPartial",
          "package": "Holumbus-Searchengine",
          "signature": "ProcessConfig -\u003e i -\u003e Int -\u003e Query -\u003e Intermediate",
          "source": "src/Holumbus-Query-Processor.html#processPartial",
          "type": "function"
        },
        "index": {
          "description": "Process query only partially in terms of distributed index Only the intermediate result will be returned",
          "hierarchy": "Holumbus Query Processor",
          "module": "Holumbus.Query.Processor",
          "name": "processPartial",
          "normalized": "ProcessConfig-\u003ea-\u003eInt-\u003eQuery-\u003eIntermediate",
          "package": "Holumbus-Searchengine",
          "partial": "Partial",
          "signature": "ProcessConfig-\u003ei-\u003eInt-\u003eQuery-\u003eIntermediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Processor.html#v:processPartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003eprocessPartial\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Processor",
          "name": "processPartialM",
          "package": "Holumbus-Searchengine",
          "signature": "ProcessConfig -\u003e i -\u003e Int -\u003e Query -\u003e m Intermediate",
          "source": "src/Holumbus-Query-Processor.html#processPartialM",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of processPartial",
          "hierarchy": "Holumbus Query Processor",
          "module": "Holumbus.Query.Processor",
          "name": "processPartialM",
          "normalized": "ProcessConfig-\u003ea-\u003eInt-\u003eQuery-\u003eb Intermediate",
          "package": "Holumbus-Searchengine",
          "partial": "Partial",
          "signature": "ProcessConfig-\u003ei-\u003eInt-\u003eQuery-\u003em Intermediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Processor.html#v:processPartialM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a query on a specific index with regard to the configuration.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Processor",
          "name": "processQuery",
          "package": "Holumbus-Searchengine",
          "signature": "ProcessConfig -\u003e i -\u003e d c -\u003e Query -\u003e Result c",
          "source": "src/Holumbus-Query-Processor.html#processQuery",
          "type": "function"
        },
        "index": {
          "description": "Process query on specific index with regard to the configuration",
          "hierarchy": "Holumbus Query Processor",
          "module": "Holumbus.Query.Processor",
          "name": "processQuery",
          "normalized": "ProcessConfig-\u003ea-\u003eb c-\u003eQuery-\u003eResult c",
          "package": "Holumbus-Searchengine",
          "partial": "Query",
          "signature": "ProcessConfig-\u003ei-\u003ed c-\u003eQuery-\u003eResult c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Processor.html#v:processQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003eprocessQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Processor",
          "name": "processQueryM",
          "package": "Holumbus-Searchengine",
          "signature": "ProcessConfig -\u003e i -\u003e d c -\u003e Query -\u003e m (Result c)",
          "source": "src/Holumbus-Query-Processor.html#processQueryM",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of processQuery",
          "hierarchy": "Holumbus Query Processor",
          "module": "Holumbus.Query.Processor",
          "name": "processQueryM",
          "normalized": "ProcessConfig-\u003ea-\u003eb c-\u003eQuery-\u003ed(Result c)",
          "package": "Holumbus-Searchengine",
          "partial": "Query",
          "signature": "ProcessConfig-\u003ei-\u003ed c-\u003eQuery-\u003em(Result c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Processor.html#v:processQueryM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum number of words used from a prefix. Zero switches off limiting.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Processor",
          "name": "wordLimit",
          "package": "Holumbus-Searchengine",
          "signature": "Int",
          "source": "src/Holumbus-Query-Processor.html#ProcessConfig",
          "type": "function"
        },
        "index": {
          "description": "The maximum number of words used from prefix Zero switches off limiting",
          "hierarchy": "Holumbus Query Processor",
          "module": "Holumbus.Query.Processor",
          "name": "wordLimit",
          "package": "Holumbus-Searchengine",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Processor.html#v:wordLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.3\n\u003c/p\u003e\u003cp\u003eThe ranking mechanism for Holumbus. \n\u003c/p\u003e\u003cp\u003eCustomized ranking functions for both documents and suggested words can be \n  provided by the user. Some predefined ranking functions are avaliable, too.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Query.Ranking",
          "name": "Ranking",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Ranking.html",
          "type": "module"
        },
        "index": {
          "description": "Version The ranking mechanism for Holumbus Customized ranking functions for both documents and suggested words can be provided by the user Some predefined ranking functions are avaliable too",
          "hierarchy": "Holumbus Query Ranking",
          "module": "Holumbus.Query.Ranking",
          "name": "Ranking",
          "package": "Holumbus-Searchengine",
          "partial": "Ranking",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Ranking.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe signature of a function to determine the score of a document.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Ranking",
          "name": "DocRanking",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Ranking.html#DocRanking",
          "type": "type"
        },
        "index": {
          "description": "The signature of function to determine the score of document",
          "hierarchy": "Holumbus Query Ranking",
          "module": "Holumbus.Query.Ranking",
          "name": "DocRanking",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Ranking",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Ranking.html#t:DocRanking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe configuration of the ranking mechanism.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Ranking",
          "name": "RankConfig",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Ranking.html#RankConfig",
          "type": "data"
        },
        "index": {
          "description": "The configuration of the ranking mechanism",
          "hierarchy": "Holumbus Query Ranking",
          "module": "Holumbus.Query.Ranking",
          "name": "RankConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Rank Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Ranking.html#t:RankConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe signature of a function to determine the score of a word.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Ranking",
          "name": "WordRanking",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Ranking.html#WordRanking",
          "type": "type"
        },
        "index": {
          "description": "The signature of function to determine the score of word",
          "hierarchy": "Holumbus Query Ranking",
          "module": "Holumbus.Query.Ranking",
          "name": "WordRanking",
          "package": "Holumbus-Searchengine",
          "partial": "Word Ranking",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Ranking.html#t:WordRanking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Query.Ranking",
          "name": "RankConfig",
          "package": "Holumbus-Searchengine",
          "signature": "RankConfig",
          "source": "src/Holumbus-Query-Ranking.html#RankConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Query Ranking",
          "module": "Holumbus.Query.Ranking",
          "name": "RankConfig",
          "package": "Holumbus-Searchengine",
          "partial": "Rank Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Ranking.html#v:RankConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRank documents by count.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Ranking",
          "name": "docRankByCount",
          "package": "Holumbus-Searchengine",
          "signature": "DocId -\u003e DocInfo a -\u003e DocContextHits -\u003e Score",
          "source": "src/Holumbus-Query-Ranking.html#docRankByCount",
          "type": "function"
        },
        "index": {
          "description": "Rank documents by count",
          "hierarchy": "Holumbus Query Ranking",
          "module": "Holumbus.Query.Ranking",
          "name": "docRankByCount",
          "normalized": "DocId-\u003eDocInfo a-\u003eDocContextHits-\u003eScore",
          "package": "Holumbus-Searchengine",
          "partial": "Rank By Count",
          "signature": "DocId-\u003eDocInfo a-\u003eDocContextHits-\u003eScore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Ranking.html#v:docRankByCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRank documents by context-weighted count. The weights will be normalized to a maximum of 1.0.\n Contexts with no weight (or a weight of zero) will be ignored.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Ranking",
          "name": "docRankWeightedByCount",
          "package": "Holumbus-Searchengine",
          "signature": "[(Context, Score)] -\u003e DocId -\u003e DocInfo a -\u003e DocContextHits -\u003e Score",
          "source": "src/Holumbus-Query-Ranking.html#docRankWeightedByCount",
          "type": "function"
        },
        "index": {
          "description": "Rank documents by context-weighted count The weights will be normalized to maximum of Contexts with no weight or weight of zero will be ignored",
          "hierarchy": "Holumbus Query Ranking",
          "module": "Holumbus.Query.Ranking",
          "name": "docRankWeightedByCount",
          "normalized": "[(Context,Score)]-\u003eDocId-\u003eDocInfo a-\u003eDocContextHits-\u003eScore",
          "package": "Holumbus-Searchengine",
          "partial": "Rank Weighted By Count",
          "signature": "[(Context,Score)]-\u003eDocId-\u003eDocInfo a-\u003eDocContextHits-\u003eScore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Ranking.html#v:docRankWeightedByCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to determine the score of a document.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Ranking",
          "name": "docRanking",
          "package": "Holumbus-Searchengine",
          "signature": "DocRanking a",
          "source": "src/Holumbus-Query-Ranking.html#RankConfig",
          "type": "function"
        },
        "index": {
          "description": "function to determine the score of document",
          "hierarchy": "Holumbus Query Ranking",
          "module": "Holumbus.Query.Ranking",
          "name": "docRanking",
          "package": "Holumbus-Searchengine",
          "partial": "Ranking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Ranking.html#v:docRanking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRank the result with custom ranking functions.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Ranking",
          "name": "rank",
          "package": "Holumbus-Searchengine",
          "signature": "RankConfig a -\u003e Result a -\u003e Result a",
          "source": "src/Holumbus-Query-Ranking.html#rank",
          "type": "function"
        },
        "index": {
          "description": "Rank the result with custom ranking functions",
          "hierarchy": "Holumbus Query Ranking",
          "module": "Holumbus.Query.Ranking",
          "name": "rank",
          "normalized": "RankConfig a-\u003eResult a-\u003eResult a",
          "package": "Holumbus-Searchengine",
          "signature": "RankConfig a-\u003eResult a-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Ranking.html#v:rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRank words by count.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Ranking",
          "name": "wordRankByCount",
          "package": "Holumbus-Searchengine",
          "signature": "Word -\u003e WordInfo -\u003e WordContextHits -\u003e Score",
          "source": "src/Holumbus-Query-Ranking.html#wordRankByCount",
          "type": "function"
        },
        "index": {
          "description": "Rank words by count",
          "hierarchy": "Holumbus Query Ranking",
          "module": "Holumbus.Query.Ranking",
          "name": "wordRankByCount",
          "normalized": "Word-\u003eWordInfo-\u003eWordContextHits-\u003eScore",
          "package": "Holumbus-Searchengine",
          "partial": "Rank By Count",
          "signature": "Word-\u003eWordInfo-\u003eWordContextHits-\u003eScore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Ranking.html#v:wordRankByCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRank words by context-weighted count. The weights will be normalized to a maximum of 1.0.\n Contexts with no weight (or a weight of zero) will be ignored.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Ranking",
          "name": "wordRankWeightedByCount",
          "package": "Holumbus-Searchengine",
          "signature": "[(Context, Score)] -\u003e Word -\u003e WordInfo -\u003e WordContextHits -\u003e Score",
          "source": "src/Holumbus-Query-Ranking.html#wordRankWeightedByCount",
          "type": "function"
        },
        "index": {
          "description": "Rank words by context-weighted count The weights will be normalized to maximum of Contexts with no weight or weight of zero will be ignored",
          "hierarchy": "Holumbus Query Ranking",
          "module": "Holumbus.Query.Ranking",
          "name": "wordRankWeightedByCount",
          "normalized": "[(Context,Score)]-\u003eWord-\u003eWordInfo-\u003eWordContextHits-\u003eScore",
          "package": "Holumbus-Searchengine",
          "partial": "Rank Weighted By Count",
          "signature": "[(Context,Score)]-\u003eWord-\u003eWordInfo-\u003eWordContextHits-\u003eScore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Ranking.html#v:wordRankWeightedByCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA funciton to determine the score of a word.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Ranking",
          "name": "wordRanking",
          "package": "Holumbus-Searchengine",
          "signature": "WordRanking",
          "source": "src/Holumbus-Query-Ranking.html#RankConfig",
          "type": "function"
        },
        "index": {
          "description": "funciton to determine the score of word",
          "hierarchy": "Holumbus Query Ranking",
          "module": "Holumbus.Query.Ranking",
          "name": "wordRanking",
          "package": "Holumbus-Searchengine",
          "partial": "Ranking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Ranking.html#v:wordRanking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe data type for results of Holumbus queries.\n\u003c/p\u003e\u003cp\u003eThe result of a query is defined in terms of two partial results, \n  the documents containing the search terms and the words which \n  are possible completions of the serach terms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Query.Result",
          "name": "Result",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Result.html",
          "type": "module"
        },
        "index": {
          "description": "The data type for results of Holumbus queries The result of query is defined in terms of two partial results the documents containing the search terms and the words which are possible completions of the serach terms",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "Result",
          "package": "Holumbus-Searchengine",
          "partial": "Result",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from a context to the words of the document that were found in this context.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "DocContextHits",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Result.html#DocContextHits",
          "type": "type"
        },
        "index": {
          "description": "mapping from context to the words of the document that were found in this context",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "DocContextHits",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Context Hits",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#t:DocContextHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from a document to it's score and the contexts where it was found.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "DocHits",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Result.html#DocHits",
          "type": "type"
        },
        "index": {
          "description": "mapping from document to it score and the contexts where it was found",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "DocHits",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Hits",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#t:DocHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about an document.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "DocInfo",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Result.html#DocInfo",
          "type": "data"
        },
        "index": {
          "description": "Information about an document",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "DocInfo",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#t:DocInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from a word of the document in a specific context to it's positions.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "DocWordHits",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Result.html#DocWordHits",
          "type": "type"
        },
        "index": {
          "description": "mapping from word of the document in specific context to it positions",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "DocWordHits",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Word Hits",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#t:DocWordHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe combined result type for Holumbus queries.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "Result",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Result.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The combined result type for Holumbus queries",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "Result",
          "package": "Holumbus-Searchengine",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe score of a hit (either a document hit or a word hit).\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "Score",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Result.html#Score",
          "type": "type"
        },
        "index": {
          "description": "The score of hit either document hit or word hit",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "Score",
          "package": "Holumbus-Searchengine",
          "partial": "Score",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#t:Score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from a context to the documents that contain the word that were found in this context.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "WordContextHits",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Result.html#WordContextHits",
          "type": "type"
        },
        "index": {
          "description": "mapping from context to the documents that contain the word that were found in this context",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "WordContextHits",
          "package": "Holumbus-Searchengine",
          "partial": "Word Context Hits",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#t:WordContextHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from a document containing the word to the positions of the word.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "WordDocHits",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Result.html#WordDocHits",
          "type": "type"
        },
        "index": {
          "description": "mapping from document containing the word to the positions of the word",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "WordDocHits",
          "package": "Holumbus-Searchengine",
          "partial": "Word Doc Hits",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#t:WordDocHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from a word to it's score and the contexts where it was found.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "WordHits",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Result.html#WordHits",
          "type": "type"
        },
        "index": {
          "description": "mapping from word to it score and the contexts where it was found",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "WordHits",
          "package": "Holumbus-Searchengine",
          "partial": "Word Hits",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#t:WordHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a word.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "WordInfo",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Query-Result.html#WordInfo",
          "type": "data"
        },
        "index": {
          "description": "Information about word",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "WordInfo",
          "package": "Holumbus-Searchengine",
          "partial": "Word Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#t:WordInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Query.Result",
          "name": "DocInfo",
          "package": "Holumbus-Searchengine",
          "signature": "DocInfo",
          "source": "src/Holumbus-Query-Result.html#DocInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "DocInfo",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:DocInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Query.Result",
          "name": "Result",
          "package": "Holumbus-Searchengine",
          "signature": "Result",
          "source": "src/Holumbus-Query-Result.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "Result",
          "package": "Holumbus-Searchengine",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Query.Result",
          "name": "WordInfo",
          "package": "Holumbus-Searchengine",
          "signature": "WordInfo",
          "source": "src/Holumbus-Query-Result.html#WordInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "WordInfo",
          "package": "Holumbus-Searchengine",
          "partial": "Word Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:WordInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe documents matching the query.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "docHits",
          "package": "Holumbus-Searchengine",
          "signature": "DocHits a",
          "source": "src/Holumbus-Query-Result.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The documents matching the query",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "docHits",
          "package": "Holumbus-Searchengine",
          "partial": "Hits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:docHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe score for the document (initial score for all documents is \u003ccode\u003e0.0\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "docScore",
          "package": "Holumbus-Searchengine",
          "signature": "Score",
          "source": "src/Holumbus-Query-Result.html#DocInfo",
          "type": "function"
        },
        "index": {
          "description": "The score for the document initial score for all documents is",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "docScore",
          "package": "Holumbus-Searchengine",
          "partial": "Score",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:docScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document itself.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "document",
          "package": "Holumbus-Searchengine",
          "signature": "Document a",
          "source": "src/Holumbus-Query-Result.html#DocInfo",
          "type": "function"
        },
        "index": {
          "description": "The document itself",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "document",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty result.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "emptyResult",
          "package": "Holumbus-Searchengine",
          "signature": "Result a",
          "source": "src/Holumbus-Query-Result.html#emptyResult",
          "type": "function"
        },
        "index": {
          "description": "Create an empty result",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "emptyResult",
          "package": "Holumbus-Searchengine",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:emptyResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all documents from a result\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "getDocuments",
          "package": "Holumbus-Searchengine",
          "signature": "Result a -\u003e [Document a]",
          "source": "src/Holumbus-Query-Result.html#getDocuments",
          "type": "function"
        },
        "index": {
          "description": "Extract all documents from result",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "getDocuments",
          "normalized": "Result a-\u003e[Document a]",
          "package": "Holumbus-Searchengine",
          "partial": "Documents",
          "signature": "Result a-\u003e[Document a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:getDocuments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the maximum score of the documents.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "maxScoreDocHits",
          "package": "Holumbus-Searchengine",
          "signature": "Result a -\u003e Score",
          "source": "src/Holumbus-Query-Result.html#maxScoreDocHits",
          "type": "function"
        },
        "index": {
          "description": "Query the maximum score of the documents",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "maxScoreDocHits",
          "normalized": "Result a-\u003eScore",
          "package": "Holumbus-Searchengine",
          "partial": "Score Doc Hits",
          "signature": "Result a-\u003eScore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:maxScoreDocHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the maximum score of the words.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "maxScoreWordHits",
          "package": "Holumbus-Searchengine",
          "signature": "Result a -\u003e Score",
          "source": "src/Holumbus-Query-Result.html#maxScoreWordHits",
          "type": "function"
        },
        "index": {
          "description": "Query the maximum score of the words",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "maxScoreWordHits",
          "normalized": "Result a-\u003eScore",
          "package": "Holumbus-Searchengine",
          "partial": "Score Word Hits",
          "signature": "Result a-\u003eScore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:maxScoreWordHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the result contains anything.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "null",
          "package": "Holumbus-Searchengine",
          "signature": "Result a -\u003e Bool",
          "source": "src/Holumbus-Query-Result.html#null",
          "type": "function"
        },
        "index": {
          "description": "Test if the result contains anything",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "null",
          "normalized": "Result a-\u003eBool",
          "package": "Holumbus-Searchengine",
          "signature": "Result a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the score in a document info.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "setDocScore",
          "package": "Holumbus-Searchengine",
          "signature": "Score -\u003e DocInfo a -\u003e DocInfo a",
          "source": "src/Holumbus-Query-Result.html#setDocScore",
          "type": "function"
        },
        "index": {
          "description": "Set the score in document info",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "setDocScore",
          "normalized": "Score-\u003eDocInfo a-\u003eDocInfo a",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Score",
          "signature": "Score-\u003eDocInfo a-\u003eDocInfo a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:setDocScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the score in a word info.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "setWordScore",
          "package": "Holumbus-Searchengine",
          "signature": "Score -\u003e WordInfo -\u003e WordInfo",
          "source": "src/Holumbus-Query-Result.html#setWordScore",
          "type": "function"
        },
        "index": {
          "description": "Set the score in word info",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "setWordScore",
          "normalized": "Score-\u003eWordInfo-\u003eWordInfo",
          "package": "Holumbus-Searchengine",
          "partial": "Word Score",
          "signature": "Score-\u003eWordInfo-\u003eWordInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:setWordScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the number of documents in a result.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "sizeDocHits",
          "package": "Holumbus-Searchengine",
          "signature": "Result a -\u003e Int",
          "source": "src/Holumbus-Query-Result.html#sizeDocHits",
          "type": "function"
        },
        "index": {
          "description": "Query the number of documents in result",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "sizeDocHits",
          "normalized": "Result a-\u003eInt",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Hits",
          "signature": "Result a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:sizeDocHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the number of documents in a result.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "sizeWordHits",
          "package": "Holumbus-Searchengine",
          "signature": "Result a -\u003e Int",
          "source": "src/Holumbus-Query-Result.html#sizeWordHits",
          "type": "function"
        },
        "index": {
          "description": "Query the number of documents in result",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "sizeWordHits",
          "normalized": "Result a-\u003eInt",
          "package": "Holumbus-Searchengine",
          "partial": "Word Hits",
          "signature": "Result a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:sizeWordHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe search terms that led to this very word.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "terms",
          "package": "Holumbus-Searchengine",
          "signature": "Terms",
          "source": "src/Holumbus-Query-Result.html#WordInfo",
          "type": "function"
        },
        "index": {
          "description": "The search terms that led to this very word",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "terms",
          "package": "Holumbus-Searchengine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:terms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe words which are completions of the query terms.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "wordHits",
          "package": "Holumbus-Searchengine",
          "signature": "WordHits",
          "source": "src/Holumbus-Query-Result.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The words which are completions of the query terms",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "wordHits",
          "package": "Holumbus-Searchengine",
          "partial": "Hits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:wordHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe frequency of the word in the document for a context.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "wordScore",
          "package": "Holumbus-Searchengine",
          "signature": "Score",
          "source": "src/Holumbus-Query-Result.html#WordInfo",
          "type": "function"
        },
        "index": {
          "description": "The frequency of the word in the document for context",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "wordScore",
          "package": "Holumbus-Searchengine",
          "partial": "Score",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:wordScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe XML pickler for the document hits. Will be sorted by score.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "xpDocHits",
          "package": "Holumbus-Searchengine",
          "signature": "PU (DocHits a)",
          "source": "src/Holumbus-Query-Result.html#xpDocHits",
          "type": "function"
        },
        "index": {
          "description": "The XML pickler for the document hits Will be sorted by score",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "xpDocHits",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Hits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:xpDocHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe XML pickler for the word hits. Will be sorted alphabetically by the words.\n\u003c/p\u003e",
          "module": "Holumbus.Query.Result",
          "name": "xpWordHits",
          "package": "Holumbus-Searchengine",
          "signature": "PU WordHits",
          "source": "src/Holumbus-Query-Result.html#xpWordHits",
          "type": "function"
        },
        "index": {
          "description": "The XML pickler for the word hits Will be sorted alphabetically by the words",
          "hierarchy": "Holumbus Query Result",
          "module": "Holumbus.Query.Result",
          "name": "xpWordHits",
          "package": "Holumbus-Searchengine",
          "partial": "Word Hits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Query-Result.html#v:xpWordHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eSmall utility functions which are probably useful somewhere else, too.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Holumbus.Utility",
          "name": "Utility",
          "package": "Holumbus-Searchengine",
          "source": "src/Holumbus-Utility.html",
          "type": "module"
        },
        "index": {
          "description": "Version Small utility functions which are probably useful somewhere else too",
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "Utility",
          "package": "Holumbus-Searchengine",
          "partial": "Utility",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the base of a webpage\n   stolen from Uwe Schmidt, http://www.haskell.org/haskellwiki/HXT\n\u003c/p\u003e",
          "module": "Holumbus.Utility",
          "name": "computeDocBase",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree String",
          "source": "src/Holumbus-Utility.html#computeDocBase",
          "type": "function"
        },
        "index": {
          "description": "Compute the base of webpage stolen from Uwe Schmidt http www.haskell.org haskellwiki HXT",
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "computeDocBase",
          "package": "Holumbus-Searchengine",
          "partial": "Doc Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:computeDocBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes non-alphanumeric or space characters in a String\n\u003c/p\u003e",
          "module": "Holumbus.Utility",
          "name": "escape",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e String",
          "source": "src/Holumbus-Utility.html#escape",
          "type": "function"
        },
        "index": {
          "description": "Escapes non-alphanumeric or space characters in String",
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "escape",
          "normalized": "String-\u003eString",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Utility",
          "name": "getByPath",
          "package": "Holumbus-Searchengine",
          "signature": "[String] -\u003e a XmlTree XmlTree",
          "source": "src/Holumbus-Utility.html#getByPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "getByPath",
          "normalized": "[String]-\u003ea XmlTree XmlTree",
          "package": "Holumbus-Searchengine",
          "partial": "By Path",
          "signature": "[String]-\u003ea XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:getByPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin with a seperating character sequence.\n\u003c/p\u003e",
          "module": "Holumbus.Utility",
          "name": "join",
          "package": "Holumbus-Searchengine",
          "signature": "[a] -\u003e [[a]] -\u003e [a]",
          "source": "src/Holumbus-Utility.html#join",
          "type": "function"
        },
        "index": {
          "description": "Join with seperating character sequence",
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "join",
          "normalized": "[a]-\u003e[[a]]-\u003e[a]",
          "package": "Holumbus-Searchengine",
          "signature": "[a]-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epartition the list of input data into a list of a specified number of input data lists with \n   approximately the same length\n\u003c/p\u003e",
          "module": "Holumbus.Utility",
          "name": "partitionListByCount",
          "package": "Holumbus-Searchengine",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/Holumbus-Utility.html#partitionListByCount",
          "type": "function"
        },
        "index": {
          "description": "partition the list of input data into list of specified number of input data lists with approximately the same length",
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "partitionListByCount",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "Holumbus-Searchengine",
          "partial": "List By Count",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:partitionListByCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epartition the list of input data into a list of input data lists of\n   approximately the same specified length\n\u003c/p\u003e",
          "module": "Holumbus.Utility",
          "name": "partitionListByLength",
          "package": "Holumbus-Searchengine",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/Holumbus-Utility.html#partitionListByLength",
          "type": "function"
        },
        "index": {
          "description": "partition the list of input data into list of input data lists of approximately the same specified length",
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "partitionListByLength",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "Holumbus-Searchengine",
          "partial": "List By Length",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:partitionListByLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Utility",
          "name": "robotsNo",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e LA XmlTree XmlTree",
          "source": "src/Holumbus-Utility.html#robotsNo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "robotsNo",
          "normalized": "String-\u003eLA XmlTree XmlTree",
          "package": "Holumbus-Searchengine",
          "partial": "No",
          "signature": "String-\u003eLA XmlTree XmlTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:robotsNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Utility",
          "name": "robotsNoFollow",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree XmlTree",
          "source": "src/Holumbus-Utility.html#robotsNoFollow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "robotsNoFollow",
          "package": "Holumbus-Searchengine",
          "partial": "No Follow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:robotsNoFollow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Utility",
          "name": "robotsNoIndex",
          "package": "Holumbus-Searchengine",
          "signature": "a XmlTree XmlTree",
          "source": "src/Holumbus-Utility.html#robotsNoIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "robotsNoIndex",
          "package": "Holumbus-Searchengine",
          "partial": "No Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:robotsNoIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into seperate strings at a specific character sequence.\n\u003c/p\u003e",
          "module": "Holumbus.Utility",
          "name": "split",
          "package": "Holumbus-Searchengine",
          "signature": "[a] -\u003e [a] -\u003e [[a]]",
          "source": "src/Holumbus-Utility.html#split",
          "type": "function"
        },
        "index": {
          "description": "Split string into seperate strings at specific character sequence",
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "split",
          "normalized": "[a]-\u003e[a]-\u003e[[a]]",
          "package": "Holumbus-Searchengine",
          "signature": "[a]-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efound on the haskell cafe mailing list\n   (\u003ca\u003ehttp://www.haskell.org/pipermail/haskell-cafe/2008-April/041970.html\u003c/a\u003e).\n   Depends on bytestring \u003e= 0.9.0.4 (?) \n\u003c/p\u003e",
          "module": "Holumbus.Utility",
          "name": "strictDecodeFile",
          "package": "Holumbus-Searchengine",
          "signature": "FilePath -\u003e IO a",
          "source": "src/Holumbus-Utility.html#strictDecodeFile",
          "type": "function"
        },
        "index": {
          "description": "found on the haskell cafe mailing list http www.haskell.org pipermail haskell-cafe April html Depends on bytestring",
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "strictDecodeFile",
          "normalized": "FilePath-\u003eIO a",
          "package": "Holumbus-Searchengine",
          "partial": "Decode File",
          "signature": "FilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:strictDecodeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves leading and trailing whitespace from a string.\n\u003c/p\u003e",
          "module": "Holumbus.Utility",
          "name": "strip",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e String",
          "source": "src/Holumbus-Utility.html#strip",
          "type": "function"
        },
        "index": {
          "description": "Removes leading and trailing whitespace from string",
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "strip",
          "normalized": "String-\u003eString",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:strip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrip leading and trailing elements matching a predicate.\n\u003c/p\u003e",
          "module": "Holumbus.Utility",
          "name": "stripWith",
          "package": "Holumbus-Searchengine",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Holumbus-Utility.html#stripWith",
          "type": "function"
        },
        "index": {
          "description": "Strip leading and trailing elements matching predicate",
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "stripWith",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "Holumbus-Searchengine",
          "partial": "With",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:stripWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves leading whitespace from a string.\n\u003c/p\u003e",
          "module": "Holumbus.Utility",
          "name": "stripl",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e String",
          "source": "src/Holumbus-Utility.html#stripl",
          "type": "function"
        },
        "index": {
          "description": "Removes leading whitespace from string",
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "stripl",
          "normalized": "String-\u003eString",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:stripl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves trailing whitespace from a string.\n\u003c/p\u003e",
          "module": "Holumbus.Utility",
          "name": "stripr",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e String",
          "source": "src/Holumbus-Utility.html#stripr",
          "type": "function"
        },
        "index": {
          "description": "Removes trailing whitespace from string",
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "stripr",
          "normalized": "String-\u003eString",
          "package": "Holumbus-Searchengine",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:stripr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Utility",
          "name": "traceOffset",
          "package": "Holumbus-Searchengine",
          "signature": "Int",
          "source": "src/Holumbus-Utility.html#traceOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "traceOffset",
          "package": "Holumbus-Searchengine",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:traceOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Holumbus.Utility",
          "name": "trcMsg",
          "package": "Holumbus-Searchengine",
          "signature": "String -\u003e IO ()",
          "source": "src/Holumbus-Utility.html#trcMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Holumbus Utility",
          "module": "Holumbus.Utility",
          "name": "trcMsg",
          "normalized": "String-\u003eIO()",
          "package": "Holumbus-Searchengine",
          "partial": "Msg",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Holumbus-Searchengine/docs/Holumbus-Utility.html#v:trcMsg"
      }
    }
  ]
]