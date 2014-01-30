[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormatting time is slow.\n This package provides mechanisms to cache formatted date.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Date.Cache",
        "fct-package": "date-cache",
        "fct-signature": "module",
        "fct-source": "src/System-Date-Cache.html",
        "fct-type": "module",
        "title": "Cache"
      },
      "index": {
        "description": "Formatting time is slow This package provides mechanisms to cache formatted date",
        "hierarchy": "System Date Cache",
        "module": "System.Date.Cache",
        "name": "Cache",
        "normalized": "",
        "package": "date-cache",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#t:DateCacheCloser",
      "description": {
        "fct-module": "System.Date.Cache",
        "fct-package": "date-cache",
        "fct-signature": "type",
        "fct-source": "src/System-Date-Cache.html#DateCacheCloser",
        "fct-type": "type",
        "title": "DateCacheCloser"
      },
      "index": {
        "description": "",
        "hierarchy": "System Date Cache",
        "module": "System.Date.Cache",
        "name": "DateCacheCloser",
        "normalized": "",
        "package": "date-cache",
        "partial": "Date Cache Closer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#t:DateCacheConf",
      "description": {
        "fct-module": "System.Date.Cache",
        "fct-package": "date-cache",
        "fct-signature": "data",
        "fct-source": "src/System-Date-Cache.html#DateCacheConf",
        "fct-type": "data",
        "title": "DateCacheConf"
      },
      "index": {
        "description": "",
        "hierarchy": "System Date Cache",
        "module": "System.Date.Cache",
        "name": "DateCacheConf",
        "normalized": "",
        "package": "date-cache",
        "partial": "Date Cache Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#t:DateCacheGetter",
      "description": {
        "fct-module": "System.Date.Cache",
        "fct-package": "date-cache",
        "fct-signature": "type",
        "fct-source": "src/System-Date-Cache.html#DateCacheGetter",
        "fct-type": "type",
        "title": "DateCacheGetter"
      },
      "index": {
        "description": "",
        "hierarchy": "System Date Cache",
        "module": "System.Date.Cache",
        "name": "DateCacheGetter",
        "normalized": "",
        "package": "date-cache",
        "partial": "Date Cache Getter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#v:DateCacheConf",
      "description": {
        "fct-module": "System.Date.Cache",
        "fct-package": "date-cache",
        "fct-signature": "DateCacheConf",
        "fct-source": "src/System-Date-Cache.html#DateCacheConf",
        "fct-type": "function",
        "title": "DateCacheConf"
      },
      "index": {
        "description": "",
        "hierarchy": "System Date Cache",
        "module": "System.Date.Cache",
        "name": "DateCacheConf",
        "normalized": "",
        "package": "date-cache",
        "partial": "Date Cache Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#v:clockDateCacher",
      "description": {
        "fct-descr": "\u003cp\u003eDate cacher which gets a time and formatted it every second.\n This returns a getter.\n\u003c/p\u003e",
        "fct-module": "System.Date.Cache",
        "fct-package": "date-cache",
        "fct-signature": "DateCacheConf t -\u003e IO (DateCacheGetter, DateCacheCloser)",
        "fct-source": "src/System-Date-Cache.html#clockDateCacher",
        "fct-type": "function",
        "title": "clockDateCacher"
      },
      "index": {
        "description": "Date cacher which gets time and formatted it every second This returns getter",
        "hierarchy": "System Date Cache",
        "module": "System.Date.Cache",
        "name": "clockDateCacher",
        "normalized": "DateCacheConf a-\u003eIO(DateCacheGetter,DateCacheCloser)",
        "package": "date-cache",
        "partial": "Date Cacher",
        "signature": "DateCacheConf t-\u003eIO(DateCacheGetter,DateCacheCloser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#v:formatDate",
      "description": {
        "fct-descr": "\u003cp\u003eA function to format a time.\n\u003c/p\u003e",
        "fct-module": "System.Date.Cache",
        "fct-package": "date-cache",
        "fct-signature": "t -\u003e IO ByteString",
        "fct-source": "src/System-Date-Cache.html#DateCacheConf",
        "fct-type": "function",
        "title": "formatDate"
      },
      "index": {
        "description": "function to format time",
        "hierarchy": "System Date Cache",
        "module": "System.Date.Cache",
        "name": "formatDate",
        "normalized": "a-\u003eIO ByteString",
        "package": "date-cache",
        "partial": "Date",
        "signature": "t-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#v:getTime",
      "description": {
        "fct-descr": "\u003cp\u003eA function to get a time. E.g \u003ccode\u003eepochTime\u003c/code\u003e and \u003ccode\u003egetCurrentTime\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Date.Cache",
        "fct-package": "date-cache",
        "fct-signature": "IO t",
        "fct-source": "src/System-Date-Cache.html#DateCacheConf",
        "fct-type": "function",
        "title": "getTime"
      },
      "index": {
        "description": "function to get time E.g epochTime and getCurrentTime",
        "hierarchy": "System Date Cache",
        "module": "System.Date.Cache",
        "name": "getTime",
        "normalized": "",
        "package": "date-cache",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/date-cache/docs/System-Date-Cache.html#v:ondemandDateCacher",
      "description": {
        "fct-descr": "\u003cp\u003eDate cacher which gets a time and formatted it only when\n returned getter is executed.\n\u003c/p\u003e",
        "fct-module": "System.Date.Cache",
        "fct-package": "date-cache",
        "fct-signature": "DateCacheConf t -\u003e IO (DateCacheGetter, DateCacheCloser)",
        "fct-source": "src/System-Date-Cache.html#ondemandDateCacher",
        "fct-type": "function",
        "title": "ondemandDateCacher"
      },
      "index": {
        "description": "Date cacher which gets time and formatted it only when returned getter is executed",
        "hierarchy": "System Date Cache",
        "module": "System.Date.Cache",
        "name": "ondemandDateCacher",
        "normalized": "DateCacheConf a-\u003eIO(DateCacheGetter,DateCacheCloser)",
        "package": "date-cache",
        "partial": "Date Cacher",
        "signature": "DateCacheConf t-\u003eIO(DateCacheGetter,DateCacheCloser)"
      }
    }
  }
]