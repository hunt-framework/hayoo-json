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
        "word": "hsdns-cache"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCaching asynchronous DNS resolver built on top of\n  GNU ADNS \u003ca\u003ehttp://www.chiark.greenend.org.uk/~ian/adns/\u003c/a\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Resolves several IP addresses for one host (if available)\n     in round-robin fashion.\n\u003c/li\u003e\u003cli\u003e Throttles number of parallel requests (so DNS resolving continues to work\n     even under heavy load).\n\u003c/li\u003e\u003cli\u003e Errors are cached too (for one minute).\n\u003c/li\u003e\u003cli\u003e Handles CNAMEs (\u003ccode\u003ehsdns\u003c/code\u003e returns error for them).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eYou should link your program with the \u003cem\u003ethreaded\u003c/em\u003e runtime-system\n  when using this module. In GHC, this is accomplished by specifying \u003ccode\u003e-threaded\u003c/code\u003e\n  on the command-line.\n\u003c/p\u003e\u003cp\u003eThis cache is tested in a long running web-crawler\n  (used in \u003ca\u003ehttps://bazqux.com\u003c/a\u003e) so it should be safe to use it in real world\n  applications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADNS.Cache",
          "name": "Cache",
          "package": "hsdns-cache",
          "source": "src/ADNS-Cache.html",
          "type": "module"
        },
        "index": {
          "description": "Caching asynchronous DNS resolver built on top of GNU ADNS http www.chiark.greenend.org.uk ian adns Resolves several IP addresses for one host if available in round-robin fashion Throttles number of parallel requests so DNS resolving continues to work even under heavy load Errors are cached too for one minute Handles CNAMEs hsdns returns error for them You should link your program with the threaded runtime-system when using this module In GHC this is accomplished by specifying threaded on the command-line This cache is tested in long running web-crawler used in https bazqux.com so it should be safe to use it in real world applications",
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "Cache",
          "package": "hsdns-cache",
          "partial": "Cache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsynchronous DNS cache.\n\u003c/p\u003e",
          "module": "ADNS.Cache",
          "name": "DnsCache",
          "package": "hsdns-cache",
          "source": "src/ADNS-Cache.html#DnsCache",
          "type": "data"
        },
        "index": {
          "description": "Asynchronous DNS cache",
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "DnsCache",
          "package": "hsdns-cache",
          "partial": "Dns Cache",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#t:DnsCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDNS cache settings.\n\u003c/p\u003e",
          "module": "ADNS.Cache",
          "name": "DnsCacheSettings",
          "package": "hsdns-cache",
          "source": "src/ADNS-Cache.html#DnsCacheSettings",
          "type": "data"
        },
        "index": {
          "description": "DNS cache settings",
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "DnsCacheSettings",
          "package": "hsdns-cache",
          "partial": "Dns Cache Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#t:DnsCacheSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADNS.Cache",
          "name": "DnsCacheSettings",
          "package": "hsdns-cache",
          "signature": "DnsCacheSettings",
          "source": "src/ADNS-Cache.html#DnsCacheSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "DnsCacheSettings",
          "package": "hsdns-cache",
          "partial": "Dns Cache Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#v:DnsCacheSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrottling of parallel requests. Default: 30\n\u003c/p\u003e",
          "module": "ADNS.Cache",
          "name": "dcsMaxParallelRequests",
          "package": "hsdns-cache",
          "signature": "Int",
          "source": "src/ADNS-Cache.html#DnsCacheSettings",
          "type": "function"
        },
        "index": {
          "description": "Throttling of parallel requests Default",
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "dcsMaxParallelRequests",
          "package": "hsdns-cache",
          "partial": "Max Parallel Requests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#v:dcsMaxParallelRequests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExperimental!\n Delay in microseconds between subsequent requests to smooth load.\n Delay only inserted between real requests to DNS server.\n Cached results are returned immediately.\n Default: \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "ADNS.Cache",
          "name": "dcsRequestDelay",
          "package": "hsdns-cache",
          "signature": "Maybe Int",
          "source": "src/ADNS-Cache.html#DnsCacheSettings",
          "type": "function"
        },
        "index": {
          "description": "Experimental Delay in microseconds between subsequent requests to smooth load Delay only inserted between real requests to DNS server Cached results are returned immediately Default Nothing",
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "dcsRequestDelay",
          "package": "hsdns-cache",
          "partial": "Request Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#v:dcsRequestDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADNS.Cache",
          "name": "defaultDnsCacheSettings",
          "package": "hsdns-cache",
          "signature": "DnsCacheSettings",
          "source": "src/ADNS-Cache.html#defaultDnsCacheSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "defaultDnsCacheSettings",
          "package": "hsdns-cache",
          "partial": "Dns Cache Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#v:defaultDnsCacheSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve A DNS record.\n\u003c/p\u003e",
          "module": "ADNS.Cache",
          "name": "resolveA",
          "package": "hsdns-cache",
          "signature": "DnsCache -\u003e HostName -\u003e IO (Either String HostAddress)",
          "source": "src/ADNS-Cache.html#resolveA",
          "type": "function"
        },
        "index": {
          "description": "Resolve DNS record",
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "resolveA",
          "normalized": "DnsCache-\u003eHostName-\u003eIO(Either String HostAddress)",
          "package": "hsdns-cache",
          "signature": "DnsCache-\u003eHostName-\u003eIO(Either String HostAddress)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#v:resolveA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve cached A DNS record.\n Returns Nothing if host name is not yet cached.\n\u003c/p\u003e",
          "module": "ADNS.Cache",
          "name": "resolveCachedA",
          "package": "hsdns-cache",
          "signature": "DnsCache -\u003e HostName -\u003e IO (Maybe (Either String HostAddress))",
          "source": "src/ADNS-Cache.html#resolveCachedA",
          "type": "function"
        },
        "index": {
          "description": "Resolve cached DNS record Returns Nothing if host name is not yet cached",
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "resolveCachedA",
          "normalized": "DnsCache-\u003eHostName-\u003eIO(Maybe(Either String HostAddress))",
          "package": "hsdns-cache",
          "partial": "Cached",
          "signature": "DnsCache-\u003eHostName-\u003eIO(Maybe(Either String HostAddress))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#v:resolveCachedA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow \u003ccode\u003eHostAddress\u003c/code\u003e in standard 123.45.67.89 format.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003einet_ntoa\u003c/a\u003e\u003c/code\u003e this function is pure and thread-safe.\n\u003c/p\u003e",
          "module": "ADNS.Cache",
          "name": "showHostAddress",
          "package": "hsdns-cache",
          "signature": "HostAddress -\u003e String",
          "source": "src/ADNS-Cache.html#showHostAddress",
          "type": "function"
        },
        "index": {
          "description": "Show HostAddress in standard format Unlike inet ntoa this function is pure and thread-safe",
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "showHostAddress",
          "normalized": "HostAddress-\u003eString",
          "package": "hsdns-cache",
          "partial": "Host Address",
          "signature": "HostAddress-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#v:showHostAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait till all running resolvers are finished and block further resolvers.\n\u003c/p\u003e",
          "module": "ADNS.Cache",
          "name": "stopDnsCache",
          "package": "hsdns-cache",
          "signature": "DnsCache -\u003e IO ()",
          "source": "src/ADNS-Cache.html#stopDnsCache",
          "type": "function"
        },
        "index": {
          "description": "Wait till all running resolvers are finished and block further resolvers",
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "stopDnsCache",
          "normalized": "DnsCache-\u003eIO()",
          "package": "hsdns-cache",
          "partial": "Dns Cache",
          "signature": "DnsCache-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#v:stopDnsCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate cache and run action passed.\n\u003c/p\u003e",
          "module": "ADNS.Cache",
          "name": "withDnsCache",
          "package": "hsdns-cache",
          "signature": "(DnsCache -\u003e IO a) -\u003e IO a",
          "source": "src/ADNS-Cache.html#withDnsCache",
          "type": "function"
        },
        "index": {
          "description": "Create cache and run action passed",
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "withDnsCache",
          "normalized": "(DnsCache-\u003eIO a)-\u003eIO a",
          "package": "hsdns-cache",
          "partial": "Dns Cache",
          "signature": "(DnsCache-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#v:withDnsCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate cache with specified settings and run action passed.\n\u003c/p\u003e",
          "module": "ADNS.Cache",
          "name": "withDnsCacheSettings",
          "package": "hsdns-cache",
          "signature": "DnsCacheSettings -\u003e (DnsCache -\u003e IO a) -\u003e IO a",
          "source": "src/ADNS-Cache.html#withDnsCacheSettings",
          "type": "function"
        },
        "index": {
          "description": "Create cache with specified settings and run action passed",
          "hierarchy": "ADNS Cache",
          "module": "ADNS.Cache",
          "name": "withDnsCacheSettings",
          "normalized": "DnsCacheSettings-\u003e(DnsCache-\u003eIO a)-\u003eIO a",
          "package": "hsdns-cache",
          "partial": "Dns Cache Settings",
          "signature": "DnsCacheSettings-\u003e(DnsCache-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsdns-cache/docs/ADNS-Cache.html#v:withDnsCacheSettings"
      }
    }
  ]
]