[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeoIp/docs/Network-GeoIp-GeoCityIp.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module loads the MaxMind's GeoIp City database.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.GeoIp.GeoCityIp",
        "fct-package": "GeoIp",
        "fct-signature": "module",
        "fct-source": "src/Network-GeoIp-GeoCityIp.html",
        "fct-type": "module",
        "title": "GeoCityIp"
      },
      "index": {
        "description": "This module loads the MaxMind GeoIp City database",
        "hierarchy": "Network GeoIp GeoCityIp",
        "module": "Network.GeoIp.GeoCityIp",
        "name": "GeoCityIp",
        "normalized": "",
        "package": "GeoIp",
        "partial": "Geo City Ip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeoIp/docs/Network-GeoIp-GeoCityIp.html#t:GeoCityDB",
      "description": {
        "fct-module": "Network.GeoIp.GeoCityIp",
        "fct-package": "GeoIp",
        "fct-signature": "data",
        "fct-source": "src/Network-GeoIp-GeoCityIp.html#GeoCityDB",
        "fct-type": "data",
        "title": "GeoCityDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Network GeoIp GeoCityIp",
        "module": "Network.GeoIp.GeoCityIp",
        "name": "GeoCityDB",
        "normalized": "",
        "package": "GeoIp",
        "partial": "Geo City DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeoIp/docs/Network-GeoIp-GeoCityIp.html#v:findLocation",
      "description": {
        "fct-descr": "\u003cp\u003eFind the location of an IP address. The tuple returned is \u003ccode\u003e(latitude, longitude)\u003c/code\u003e.\n   The result is monadic, in most cases you will want to use the Maybe monad.\n\u003c/p\u003e",
        "fct-module": "Network.GeoIp.GeoCityIp",
        "fct-package": "GeoIp",
        "fct-signature": "GeoCityDB -\u003e Integer -\u003e m (Double, Double)",
        "fct-source": "src/Network-GeoIp-GeoCityIp.html#findLocation",
        "fct-type": "function",
        "title": "findLocation"
      },
      "index": {
        "description": "Find the location of an IP address The tuple returned is latitude longitude The result is monadic in most cases you will want to use the Maybe monad",
        "hierarchy": "Network GeoIp GeoCityIp",
        "module": "Network.GeoIp.GeoCityIp",
        "name": "findLocation",
        "normalized": "GeoCityDB-\u003eInteger-\u003ea(Double,Double)",
        "package": "GeoIp",
        "partial": "Location",
        "signature": "GeoCityDB-\u003eInteger-\u003em(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeoIp/docs/Network-GeoIp-GeoCityIp.html#v:findRange",
      "description": {
        "fct-descr": "\u003cp\u003eFind the IP range that the IP address is in.  The result is monadic.\n   In most cases you will want to use the Maybe monad.\n\u003c/p\u003e",
        "fct-module": "Network.GeoIp.GeoCityIp",
        "fct-package": "GeoIp",
        "fct-signature": "GeoCityDB -\u003e Integer -\u003e m (Integer, Integer)",
        "fct-source": "src/Network-GeoIp-GeoCityIp.html#findRange",
        "fct-type": "function",
        "title": "findRange"
      },
      "index": {
        "description": "Find the IP range that the IP address is in The result is monadic In most cases you will want to use the Maybe monad",
        "hierarchy": "Network GeoIp GeoCityIp",
        "module": "Network.GeoIp.GeoCityIp",
        "name": "findRange",
        "normalized": "GeoCityDB-\u003eInteger-\u003ea(Integer,Integer)",
        "package": "GeoIp",
        "partial": "Range",
        "signature": "GeoCityDB-\u003eInteger-\u003em(Integer,Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GeoIp/docs/Network-GeoIp-GeoCityIp.html#v:load",
      "description": {
        "fct-descr": "\u003cp\u003eLoad the city database.  If an error is triggered then\n   Left is returned with an error string.\n\u003c/p\u003e",
        "fct-module": "Network.GeoIp.GeoCityIp",
        "fct-package": "GeoIp",
        "fct-signature": "FilePath -\u003e IO (Either String GeoCityDB)",
        "fct-source": "src/Network-GeoIp-GeoCityIp.html#load",
        "fct-type": "function",
        "title": "load"
      },
      "index": {
        "description": "Load the city database If an error is triggered then Left is returned with an error string",
        "hierarchy": "Network GeoIp GeoCityIp",
        "module": "Network.GeoIp.GeoCityIp",
        "name": "load",
        "normalized": "FilePath-\u003eIO(Either String GeoCityDB)",
        "package": "GeoIp",
        "partial": "",
        "signature": "FilePath-\u003eIO(Either String GeoCityDB)"
      }
    }
  }
]