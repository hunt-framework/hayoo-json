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
        "word": "GeoIp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module loads the MaxMind's GeoIp City database.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.GeoIp.GeoCityIp",
          "name": "GeoCityIp",
          "package": "GeoIp",
          "source": "src/Network-GeoIp-GeoCityIp.html",
          "type": "module"
        },
        "index": {
          "description": "This module loads the MaxMind GeoIp City database",
          "hierarchy": "Network GeoIp GeoCityIp",
          "module": "Network.GeoIp.GeoCityIp",
          "name": "GeoCityIp",
          "package": "GeoIp",
          "partial": "Geo City Ip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GeoIp/docs/Network-GeoIp-GeoCityIp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.GeoIp.GeoCityIp",
          "name": "GeoCityDB",
          "package": "GeoIp",
          "source": "src/Network-GeoIp-GeoCityIp.html#GeoCityDB",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network GeoIp GeoCityIp",
          "module": "Network.GeoIp.GeoCityIp",
          "name": "GeoCityDB",
          "package": "GeoIp",
          "partial": "Geo City DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GeoIp/docs/Network-GeoIp-GeoCityIp.html#t:GeoCityDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the location of an IP address. The tuple returned is \u003ccode\u003e(latitude, longitude)\u003c/code\u003e.\n   The result is monadic, in most cases you will want to use the Maybe monad.\n\u003c/p\u003e",
          "module": "Network.GeoIp.GeoCityIp",
          "name": "findLocation",
          "package": "GeoIp",
          "signature": "GeoCityDB -\u003e Integer -\u003e m (Double, Double)",
          "source": "src/Network-GeoIp-GeoCityIp.html#findLocation",
          "type": "function"
        },
        "index": {
          "description": "Find the location of an IP address The tuple returned is latitude longitude The result is monadic in most cases you will want to use the Maybe monad",
          "hierarchy": "Network GeoIp GeoCityIp",
          "module": "Network.GeoIp.GeoCityIp",
          "name": "findLocation",
          "normalized": "GeoCityDB-\u003eInteger-\u003ea(Double,Double)",
          "package": "GeoIp",
          "partial": "Location",
          "signature": "GeoCityDB-\u003eInteger-\u003em(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GeoIp/docs/Network-GeoIp-GeoCityIp.html#v:findLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the IP range that the IP address is in.  The result is monadic.\n   In most cases you will want to use the Maybe monad.\n\u003c/p\u003e",
          "module": "Network.GeoIp.GeoCityIp",
          "name": "findRange",
          "package": "GeoIp",
          "signature": "GeoCityDB -\u003e Integer -\u003e m (Integer, Integer)",
          "source": "src/Network-GeoIp-GeoCityIp.html#findRange",
          "type": "function"
        },
        "index": {
          "description": "Find the IP range that the IP address is in The result is monadic In most cases you will want to use the Maybe monad",
          "hierarchy": "Network GeoIp GeoCityIp",
          "module": "Network.GeoIp.GeoCityIp",
          "name": "findRange",
          "normalized": "GeoCityDB-\u003eInteger-\u003ea(Integer,Integer)",
          "package": "GeoIp",
          "partial": "Range",
          "signature": "GeoCityDB-\u003eInteger-\u003em(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GeoIp/docs/Network-GeoIp-GeoCityIp.html#v:findRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad the city database.  If an error is triggered then\n   Left is returned with an error string.\n\u003c/p\u003e",
          "module": "Network.GeoIp.GeoCityIp",
          "name": "load",
          "package": "GeoIp",
          "signature": "FilePath -\u003e IO (Either String GeoCityDB)",
          "source": "src/Network-GeoIp-GeoCityIp.html#load",
          "type": "function"
        },
        "index": {
          "description": "Load the city database If an error is triggered then Left is returned with an error string",
          "hierarchy": "Network GeoIp GeoCityIp",
          "module": "Network.GeoIp.GeoCityIp",
          "name": "load",
          "normalized": "FilePath-\u003eIO(Either String GeoCityDB)",
          "package": "GeoIp",
          "signature": "FilePath-\u003eIO(Either String GeoCityDB)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GeoIp/docs/Network-GeoIp-GeoCityIp.html#v:load"
      }
    }
  ]
]