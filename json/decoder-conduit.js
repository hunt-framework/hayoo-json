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
        "word": "decoder-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Decoder",
          "name": "Decoder",
          "package": "decoder-conduit",
          "source": "src/Data-Conduit-Decoder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Decoder",
          "module": "Data.Conduit.Decoder",
          "name": "Decoder",
          "package": "decoder-conduit",
          "partial": "Decoder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/decoder-conduit/docs/Data-Conduit-Decoder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic decoder exception\n\u003c/p\u003e",
          "module": "Data.Conduit.Decoder",
          "name": "BinaryDecodeException",
          "package": "decoder-conduit",
          "source": "src/Data-Conduit-Decoder.html#BinaryDecodeException",
          "type": "data"
        },
        "index": {
          "description": "Basic decoder exception",
          "hierarchy": "Data Conduit Decoder",
          "module": "Data.Conduit.Decoder",
          "name": "BinaryDecodeException",
          "package": "decoder-conduit",
          "partial": "Binary Decode Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/decoder-conduit/docs/Data-Conduit-Decoder.html#t:BinaryDecodeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Decoder",
          "name": "BinaryDecodeException",
          "package": "decoder-conduit",
          "signature": "BinaryDecodeException String",
          "source": "src/Data-Conduit-Decoder.html#BinaryDecodeException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Decoder",
          "module": "Data.Conduit.Decoder",
          "name": "BinaryDecodeException",
          "package": "decoder-conduit",
          "partial": "Binary Decode Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/decoder-conduit/docs/Data-Conduit-Decoder.html#v:BinaryDecodeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrementally reads ByteStrings and builds from supplied Get monad.\n Will throw an exception if there was an error parsing\n\u003c/p\u003e",
          "module": "Data.Conduit.Decoder",
          "name": "conduitDecoder",
          "package": "decoder-conduit",
          "signature": "Get a -\u003e Conduit ByteString m a",
          "source": "src/Data-Conduit-Decoder.html#conduitDecoder",
          "type": "function"
        },
        "index": {
          "description": "Incrementally reads ByteStrings and builds from supplied Get monad Will throw an exception if there was an error parsing",
          "hierarchy": "Data Conduit Decoder",
          "module": "Data.Conduit.Decoder",
          "name": "conduitDecoder",
          "normalized": "Get a-\u003eConduit ByteString b a",
          "package": "decoder-conduit",
          "partial": "Decoder",
          "signature": "Get a-\u003eConduit ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/decoder-conduit/docs/Data-Conduit-Decoder.html#v:conduitDecoder"
      }
    }
  ]
]