[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/total-map/docs/Data-TotalMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFinitely represented \u003cem\u003etotal\u003c/em\u003e maps. Represented by as a partial map and\n a default value. Has Applicative and Monad instances (unlike \u003ca\u003eData.Map\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.TotalMap",
        "fct-package": "total-map",
        "fct-signature": "module",
        "fct-source": "src/Data-TotalMap.html",
        "fct-type": "module",
        "title": "TotalMap"
      },
      "index": {
        "description": "Finitely represented total maps Represented by as partial map and default value Has Applicative and Monad instances unlike Data.Map",
        "hierarchy": "Data TotalMap",
        "module": "Data.TotalMap",
        "name": "TotalMap",
        "normalized": "",
        "package": "total-map",
        "partial": "Total Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/total-map/docs/Data-TotalMap.html#t:TMap",
      "description": {
        "fct-descr": "\u003cp\u003eTotal map\n\u003c/p\u003e",
        "fct-module": "Data.TotalMap",
        "fct-package": "total-map",
        "fct-signature": "data",
        "fct-source": "src/Data-TotalMap.html#TMap",
        "fct-type": "data",
        "title": "TMap"
      },
      "index": {
        "description": "Total map",
        "hierarchy": "Data TotalMap",
        "module": "Data.TotalMap",
        "name": "TMap",
        "normalized": "",
        "package": "total-map",
        "partial": "TMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/total-map/docs/Data-TotalMap.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eSample a total map. Semantic function.\n\u003c/p\u003e",
        "fct-module": "Data.TotalMap",
        "fct-package": "total-map",
        "fct-signature": "TMap k v -\u003e k -\u003e v",
        "fct-source": "src/Data-TotalMap.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "Sample total map Semantic function",
        "hierarchy": "Data TotalMap",
        "module": "Data.TotalMap",
        "name": "(!) !",
        "normalized": "TMap a b-\u003ea-\u003eb",
        "package": "total-map",
        "partial": "",
        "signature": "TMap k v-\u003ek-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/total-map/docs/Data-TotalMap.html#v:tabulate",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a total map, given a default value, a set of keys, and a\n function to sample over that set. You might want to \u003ccode\u003e\u003ca\u003etrim\u003c/a\u003e\u003c/code\u003e the result.\n\u003c/p\u003e",
        "fct-module": "Data.TotalMap",
        "fct-package": "total-map",
        "fct-signature": "v -\u003e Set k -\u003e (k -\u003e v) -\u003e TMap k v",
        "fct-source": "src/Data-TotalMap.html#tabulate",
        "fct-type": "function",
        "title": "tabulate"
      },
      "index": {
        "description": "Construct total map given default value set of keys and function to sample over that set You might want to trim the result",
        "hierarchy": "Data TotalMap",
        "module": "Data.TotalMap",
        "name": "tabulate",
        "normalized": "a-\u003eSet b-\u003e(b-\u003ea)-\u003eTMap b a",
        "package": "total-map",
        "partial": "",
        "signature": "v-\u003eSet k-\u003e(k-\u003ev)-\u003eTMap k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/total-map/docs/Data-TotalMap.html#v:trim",
      "description": {
        "fct-descr": "\u003cp\u003eOptimize a \u003ccode\u003e\u003ca\u003eTMap\u003c/a\u003e\u003c/code\u003e, weeding out any explicit default values.\n A semantic no-op, i.e., \u003ccode\u003e(!) . trim == (!)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.TotalMap",
        "fct-package": "total-map",
        "fct-signature": "TMap k v -\u003e TMap k v",
        "fct-source": "src/Data-TotalMap.html#trim",
        "fct-type": "function",
        "title": "trim"
      },
      "index": {
        "description": "Optimize TMap weeding out any explicit default values semantic no-op i.e trim",
        "hierarchy": "Data TotalMap",
        "module": "Data.TotalMap",
        "name": "trim",
        "normalized": "TMap a b-\u003eTMap a b",
        "package": "total-map",
        "partial": "",
        "signature": "TMap k v-\u003eTMap k v"
      }
    }
  }
]