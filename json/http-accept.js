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
        "word": "http-accept"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Accept",
          "name": "Accept",
          "package": "http-accept",
          "source": "src/Network-HTTP-Accept.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network HTTP Accept",
          "module": "Network.HTTP.Accept",
          "name": "Accept",
          "package": "http-accept",
          "partial": "Accept",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-accept/docs/Network-HTTP-Accept.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect which Accept type to use\n\u003c/p\u003e",
          "module": "Network.HTTP.Accept",
          "name": "selectAcceptType",
          "package": "http-accept",
          "signature": "[String]-\u003e [ByteString]-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Select which Accept type to use",
          "hierarchy": "Network HTTP Accept",
          "module": "Network.HTTP.Accept",
          "name": "selectAcceptType",
          "normalized": "[String]-\u003e[ByteString]-\u003eMaybe String",
          "package": "http-accept",
          "partial": "Accept Type",
          "signature": "[String]-\u003e[ByteString]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-accept/docs/Network-HTTP-Accept.html#v:selectAcceptType"
      }
    }
  ]
]