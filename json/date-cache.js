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
        "word": "date-cache"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormatting time is slow.\n This package provides mechanisms to cache formatted date.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Date.Cache",
          "name": "Cache",
          "package": "date-cache",
          "source": "src/System-Date-Cache.html",
          "type": "module"
        },
        "index": {
          "description": "Formatting time is slow This package provides mechanisms to cache formatted date",
          "hierarchy": "System Date Cache",
          "module": "System.Date.Cache",
          "name": "Cache",
          "package": "date-cache",
          "partial": "Cache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Date.Cache",
          "name": "DateCacheCloser",
          "package": "date-cache",
          "source": "src/System-Date-Cache.html#DateCacheCloser",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Date Cache",
          "module": "System.Date.Cache",
          "name": "DateCacheCloser",
          "package": "date-cache",
          "partial": "Date Cache Closer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#t:DateCacheCloser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Date.Cache",
          "name": "DateCacheConf",
          "package": "date-cache",
          "source": "src/System-Date-Cache.html#DateCacheConf",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Date Cache",
          "module": "System.Date.Cache",
          "name": "DateCacheConf",
          "package": "date-cache",
          "partial": "Date Cache Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#t:DateCacheConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Date.Cache",
          "name": "DateCacheGetter",
          "package": "date-cache",
          "source": "src/System-Date-Cache.html#DateCacheGetter",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Date Cache",
          "module": "System.Date.Cache",
          "name": "DateCacheGetter",
          "package": "date-cache",
          "partial": "Date Cache Getter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#t:DateCacheGetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Date.Cache",
          "name": "DateCacheConf",
          "package": "date-cache",
          "signature": "DateCacheConf",
          "source": "src/System-Date-Cache.html#DateCacheConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Date Cache",
          "module": "System.Date.Cache",
          "name": "DateCacheConf",
          "package": "date-cache",
          "partial": "Date Cache Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#v:DateCacheConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate cacher which gets a time and formatted it every second.\n This returns a getter.\n\u003c/p\u003e",
          "module": "System.Date.Cache",
          "name": "clockDateCacher",
          "package": "date-cache",
          "signature": "DateCacheConf t -\u003e IO (DateCacheGetter, DateCacheCloser)",
          "source": "src/System-Date-Cache.html#clockDateCacher",
          "type": "function"
        },
        "index": {
          "description": "Date cacher which gets time and formatted it every second This returns getter",
          "hierarchy": "System Date Cache",
          "module": "System.Date.Cache",
          "name": "clockDateCacher",
          "normalized": "DateCacheConf a-\u003eIO(DateCacheGetter,DateCacheCloser)",
          "package": "date-cache",
          "partial": "Date Cacher",
          "signature": "DateCacheConf t-\u003eIO(DateCacheGetter,DateCacheCloser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#v:clockDateCacher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to format a time.\n\u003c/p\u003e",
          "module": "System.Date.Cache",
          "name": "formatDate",
          "package": "date-cache",
          "signature": "t -\u003e IO ByteString",
          "source": "src/System-Date-Cache.html#DateCacheConf",
          "type": "function"
        },
        "index": {
          "description": "function to format time",
          "hierarchy": "System Date Cache",
          "module": "System.Date.Cache",
          "name": "formatDate",
          "normalized": "a-\u003eIO ByteString",
          "package": "date-cache",
          "partial": "Date",
          "signature": "t-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#v:formatDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to get a time. E.g \u003ccode\u003eepochTime\u003c/code\u003e and \u003ccode\u003egetCurrentTime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Date.Cache",
          "name": "getTime",
          "package": "date-cache",
          "signature": "IO t",
          "source": "src/System-Date-Cache.html#DateCacheConf",
          "type": "function"
        },
        "index": {
          "description": "function to get time E.g epochTime and getCurrentTime",
          "hierarchy": "System Date Cache",
          "module": "System.Date.Cache",
          "name": "getTime",
          "package": "date-cache",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#v:getTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate cacher which gets a time and formatted it only when\n returned getter is executed.\n\u003c/p\u003e",
          "module": "System.Date.Cache",
          "name": "ondemandDateCacher",
          "package": "date-cache",
          "signature": "DateCacheConf t -\u003e IO (DateCacheGetter, DateCacheCloser)",
          "source": "src/System-Date-Cache.html#ondemandDateCacher",
          "type": "function"
        },
        "index": {
          "description": "Date cacher which gets time and formatted it only when returned getter is executed",
          "hierarchy": "System Date Cache",
          "module": "System.Date.Cache",
          "name": "ondemandDateCacher",
          "normalized": "DateCacheConf a-\u003eIO(DateCacheGetter,DateCacheCloser)",
          "package": "date-cache",
          "partial": "Date Cacher",
          "signature": "DateCacheConf t-\u003eIO(DateCacheGetter,DateCacheCloser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#v:ondemandDateCacher"
      }
    }
  ]
]