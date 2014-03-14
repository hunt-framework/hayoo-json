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
        "word": "pastis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pastis",
          "name": "Pastis",
          "package": "pastis",
          "source": "src/Network-Pastis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Pastis",
          "module": "Network.Pastis",
          "name": "Pastis",
          "package": "pastis",
          "partial": "Pastis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pastis/docs/Network-Pastis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse pastisURL to shorten a URL. If an error occurs, the function returns \u003ccode\u003eurl\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Pastis",
          "name": "pastisURL",
          "package": "pastis",
          "signature": "String -\u003e IO String",
          "source": "src/Network-Pastis.html#pastisURL",
          "type": "function"
        },
        "index": {
          "description": "Use pastisURL to shorten URL If an error occurs the function returns url",
          "hierarchy": "Network Pastis",
          "module": "Network.Pastis",
          "name": "pastisURL",
          "normalized": "String-\u003eIO String",
          "package": "pastis",
          "partial": "URL",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pastis/docs/Network-Pastis.html#v:pastisURL"
      }
    }
  ]
]