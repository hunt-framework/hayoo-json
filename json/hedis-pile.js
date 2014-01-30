[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-pile/docs/Database-Redis-Pile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSolution for caching mandatory data with Redis.\n\u003c/p\u003e\u003cp\u003eIn many cases, requires not just pick up or put the data into the cache.\n   As a rule, data are required. \n\u003c/p\u003e\u003cp\u003e... check the cache ... if the value is missing, run the calculations ... \n   put value to cache ... Tedious\n\u003c/p\u003e\u003cp\u003eSolution is quite simple - collapse all of these steps in one operation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Redis.Pile",
        "fct-package": "hedis-pile",
        "fct-signature": "module",
        "fct-source": "src/Database-Redis-Pile.html",
        "fct-type": "module",
        "title": "Pile"
      },
      "index": {
        "description": "Solution for caching mandatory data with Redis In many cases requires not just pick up or put the data into the cache As rule data are required check the cache if the value is missing run the calculations put value to cache Tedious Solution is quite simple collapse all of these steps in one operation",
        "hierarchy": "Database Redis Pile",
        "module": "Database.Redis.Pile",
        "name": "Pile",
        "normalized": "",
        "package": "hedis-pile",
        "partial": "Pile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hedis-pile/docs/Database-Redis-Pile.html#v:pile",
      "description": {
        "fct-descr": "\u003cp\u003eStores computation results in Redis. Computation fires only  \n   if data absent in cache. Of course, to refresh the data, they must first \n   remove it from the cache.\n\u003c/p\u003e\u003cp\u003eComputation controls everything except prefix and key.\n\u003c/p\u003e\u003cp\u003eIn background data is stored in Redis as HashSet with two fields: \u003ccode\u003ed\u003c/code\u003e \n   for serialized data and \u003ccode\u003ee\u003c/code\u003e for expect field.\n\u003c/p\u003e\u003cp\u003eTime complexity depends on the situation. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eO(2)\u003c/code\u003e data exists in cache, expect matches. \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eO(2)\u003c/code\u003e data exists in cache, expect value is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eO(3)\u003c/code\u003e data exists in cache, but expect value not matches value \n     in cache.\n\u003c/li\u003e\u003cli\u003e In all other cases time complexity does not make sense\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Database.Redis.Pile",
        "fct-package": "hedis-pile",
        "fct-signature": "mb (d, ByteString, [ByteString], Integer))-\u003e ma (Maybe d)",
        "fct-type": "function",
        "title": "pile"
      },
      "index": {
        "description": "Stores computation results in Redis Computation fires only if data absent in cache Of course to refresh the data they must first remove it from the cache Computation controls everything except prefix and key In background data is stored in Redis as HashSet with two fields for serialized data and for expect field Time complexity depends on the situation data exists in cache expect matches data exists in cache expect value is Nothing data exists in cache but expect value not matches value in cache In all other cases time complexity does not make sense",
        "hierarchy": "Database Redis Pile",
        "module": "Database.Redis.Pile",
        "name": "pile",
        "normalized": "a(b,ByteString,[ByteString],Integer))-\u003ec(Maybe b)",
        "package": "hedis-pile",
        "partial": "",
        "signature": "mb(d,ByteString,[ByteString],Integer))-\u003ema(Maybe d)"
      }
    }
  }
]