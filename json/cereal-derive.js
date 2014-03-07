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
        "word": "cereal-derive"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Derive",
          "name": "Derive",
          "package": "cereal-derive",
          "source": "src/Data-Serialize-Derive.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Serialize Derive",
          "module": "Data.Serialize.Derive",
          "name": "Derive",
          "package": "cereal-derive",
          "partial": "Derive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal-derive/docs/Data-Serialize-Derive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives a \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e value for an instance of Serialize. Normally you won't use\n this from anywhere except that \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e value in your instance declaration.\n\u003c/p\u003e",
          "module": "Data.Serialize.Derive",
          "name": "deriveGet",
          "package": "cereal-derive",
          "signature": "Get t",
          "source": "src/Data-Serialize-Derive.html#deriveGet",
          "type": "function"
        },
        "index": {
          "description": "Derives get value for an instance of Serialize Normally you won use this from anywhere except that get value in your instance declaration",
          "hierarchy": "Data Serialize Derive",
          "module": "Data.Serialize.Derive",
          "name": "deriveGet",
          "package": "cereal-derive",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-derive/docs/Data-Serialize-Derive.html#v:deriveGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives a \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e function for an instance of Serialize. Normally you won't\n call this from anywhere except that \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e function in your instance\n declaration.\n\u003c/p\u003e",
          "module": "Data.Serialize.Derive",
          "name": "derivePut",
          "package": "cereal-derive",
          "signature": "t -\u003e Put",
          "source": "src/Data-Serialize-Derive.html#derivePut",
          "type": "function"
        },
        "index": {
          "description": "Derives put function for an instance of Serialize Normally you won call this from anywhere except that put function in your instance declaration",
          "hierarchy": "Data Serialize Derive",
          "module": "Data.Serialize.Derive",
          "name": "derivePut",
          "normalized": "a-\u003ePut",
          "package": "cereal-derive",
          "partial": "Put",
          "signature": "t-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-derive/docs/Data-Serialize-Derive.html#v:derivePut"
      }
    }
  ]
]