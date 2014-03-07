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
        "word": "total-map"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFinitely represented \u003cem\u003etotal\u003c/em\u003e maps. Represented by as a partial map and\n a default value. Has Applicative and Monad instances (unlike \u003ca\u003eData.Map\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.TotalMap",
          "name": "TotalMap",
          "package": "total-map",
          "source": "src/Data-TotalMap.html",
          "type": "module"
        },
        "index": {
          "description": "Finitely represented total maps Represented by as partial map and default value Has Applicative and Monad instances unlike Data.Map",
          "hierarchy": "Data TotalMap",
          "module": "Data.TotalMap",
          "name": "TotalMap",
          "package": "total-map",
          "partial": "Total Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/total-map/docs/Data-TotalMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal map\n\u003c/p\u003e",
          "module": "Data.TotalMap",
          "name": "TMap",
          "package": "total-map",
          "source": "src/Data-TotalMap.html#TMap",
          "type": "data"
        },
        "index": {
          "description": "Total map",
          "hierarchy": "Data TotalMap",
          "module": "Data.TotalMap",
          "name": "TMap",
          "package": "total-map",
          "partial": "TMap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/total-map/docs/Data-TotalMap.html#t:TMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a total map. Semantic function.\n\u003c/p\u003e",
          "module": "Data.TotalMap",
          "name": "(!)",
          "package": "total-map",
          "signature": "TMap k v -\u003e k -\u003e v",
          "source": "src/Data-TotalMap.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Sample total map Semantic function",
          "hierarchy": "Data TotalMap",
          "module": "Data.TotalMap",
          "name": "(!) !",
          "normalized": "TMap a b-\u003ea-\u003eb",
          "package": "total-map",
          "signature": "TMap k v-\u003ek-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/total-map/docs/Data-TotalMap.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a total map, given a default value, a set of keys, and a\n function to sample over that set. You might want to \u003ccode\u003e\u003ca\u003etrim\u003c/a\u003e\u003c/code\u003e the result.\n\u003c/p\u003e",
          "module": "Data.TotalMap",
          "name": "tabulate",
          "package": "total-map",
          "signature": "v -\u003e Set k -\u003e (k -\u003e v) -\u003e TMap k v",
          "source": "src/Data-TotalMap.html#tabulate",
          "type": "function"
        },
        "index": {
          "description": "Construct total map given default value set of keys and function to sample over that set You might want to trim the result",
          "hierarchy": "Data TotalMap",
          "module": "Data.TotalMap",
          "name": "tabulate",
          "normalized": "a-\u003eSet b-\u003e(b-\u003ea)-\u003eTMap b a",
          "package": "total-map",
          "signature": "v-\u003eSet k-\u003e(k-\u003ev)-\u003eTMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/total-map/docs/Data-TotalMap.html#v:tabulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimize a \u003ccode\u003e\u003ca\u003eTMap\u003c/a\u003e\u003c/code\u003e, weeding out any explicit default values.\n A semantic no-op, i.e., \u003ccode\u003e(!) . trim == (!)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.TotalMap",
          "name": "trim",
          "package": "total-map",
          "signature": "TMap k v -\u003e TMap k v",
          "source": "src/Data-TotalMap.html#trim",
          "type": "function"
        },
        "index": {
          "description": "Optimize TMap weeding out any explicit default values semantic no-op i.e trim",
          "hierarchy": "Data TotalMap",
          "module": "Data.TotalMap",
          "name": "trim",
          "normalized": "TMap a b-\u003eTMap a b",
          "package": "total-map",
          "signature": "TMap k v-\u003eTMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/total-map/docs/Data-TotalMap.html#v:trim"
      }
    }
  ]
]