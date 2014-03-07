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
        "word": "RFC1751"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRFC-1751 human-readable 128-bit keys\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RFC1751",
          "name": "RFC1751",
          "package": "RFC1751",
          "source": "src/Data-RFC1751.html",
          "type": "module"
        },
        "index": {
          "description": "RFC-1751 human-readable bit keys",
          "hierarchy": "Data RFC1751",
          "module": "Data.RFC1751",
          "name": "RFC1751",
          "package": "RFC1751",
          "partial": "RFC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RFC1751/docs/Data-RFC1751.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing 128-bit keys as 12 English words. Use with\n functions from Data.Binary.\n\u003c/p\u003e",
          "module": "Data.RFC1751",
          "name": "HumanKey",
          "package": "RFC1751",
          "source": "src/Data-RFC1751.html#HumanKey",
          "type": "data"
        },
        "index": {
          "description": "Data type representing bit keys as English words Use with functions from Data.Binary",
          "hierarchy": "Data RFC1751",
          "module": "Data.RFC1751",
          "name": "HumanKey",
          "package": "RFC1751",
          "partial": "Human Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RFC1751/docs/Data-RFC1751.html#t:HumanKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a HumanKey instance. Validates input.\n\u003c/p\u003e",
          "module": "Data.RFC1751",
          "name": "humanKey",
          "package": "RFC1751",
          "signature": "String -\u003e Either String HumanKey",
          "source": "src/Data-RFC1751.html#humanKey",
          "type": "function"
        },
        "index": {
          "description": "Build HumanKey instance Validates input",
          "hierarchy": "Data RFC1751",
          "module": "Data.RFC1751",
          "name": "humanKey",
          "normalized": "String-\u003eEither String HumanKey",
          "package": "RFC1751",
          "partial": "Key",
          "signature": "String-\u003eEither String HumanKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RFC1751/docs/Data-RFC1751.html#v:humanKey"
      }
    }
  ]
]