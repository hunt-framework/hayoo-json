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
        "word": "binary-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Serialization.Binary",
          "name": "Binary",
          "package": "binary-conduit",
          "source": "src/Data-Conduit-Serialization-Binary.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "Binary",
          "package": "binary-conduit",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Serialization.Binary",
          "name": "ParseError",
          "package": "binary-conduit",
          "source": "src/Data-Conduit-Serialization-Binary.html#ParseError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "ParseError",
          "package": "binary-conduit",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Serialization.Binary",
          "name": "ParseError",
          "package": "binary-conduit",
          "signature": "ParseError",
          "source": "src/Data-Conduit-Serialization-Binary.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "ParseError",
          "package": "binary-conduit",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns default \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e repeatedly on a input stream.\n\u003c/p\u003e",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitDecode",
          "package": "binary-conduit",
          "signature": "Conduit ByteString m b",
          "source": "src/Data-Conduit-Serialization-Binary.html#conduitDecode",
          "type": "function"
        },
        "index": {
          "description": "Runs default Decoder repeatedly on input stream",
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitDecode",
          "package": "binary-conduit",
          "partial": "Decode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:conduitDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns default encoder on a input stream.\n\u003c/p\u003e",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitEncode",
          "package": "binary-conduit",
          "signature": "Conduit b m ByteString",
          "source": "src/Data-Conduit-Serialization-Binary.html#conduitEncode",
          "type": "function"
        },
        "index": {
          "description": "Runs default encoder on input stream",
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitEncode",
          "package": "binary-conduit",
          "partial": "Encode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:conduitEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns getter repeatedly on a input stream.\n\u003c/p\u003e",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitGet",
          "package": "binary-conduit",
          "signature": "Get b -\u003e Conduit ByteString m b",
          "source": "src/Data-Conduit-Serialization-Binary.html#conduitGet",
          "type": "function"
        },
        "index": {
          "description": "Runs getter repeatedly on input stream",
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitGet",
          "normalized": "Get a-\u003eConduit ByteString b a",
          "package": "binary-conduit",
          "partial": "Get",
          "signature": "Get b-\u003eConduit ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:conduitGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns putter repeatedly on a input stream.\n\u003c/p\u003e",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitPut",
          "package": "binary-conduit",
          "signature": "Conduit Put m ByteString",
          "source": "src/Data-Conduit-Serialization-Binary.html#conduitPut",
          "type": "function"
        },
        "index": {
          "description": "Runs putter repeatedly on input stream",
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitPut",
          "package": "binary-conduit",
          "partial": "Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:conduitPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns putter repeatedly on a input stream.\n Returns a lazy butestring so it's possible to use vectorized\n IO on the result either by calling' LBS.toChunks' or by \n calling \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitPutLBS",
          "package": "binary-conduit",
          "signature": "Conduit Put m ByteString",
          "source": "src/Data-Conduit-Serialization-Binary.html#conduitPutLBS",
          "type": "function"
        },
        "index": {
          "description": "Runs putter repeatedly on input stream Returns lazy butestring so it possible to use vectorized IO on the result either by calling LBS.toChunks or by calling send",
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitPutLBS",
          "package": "binary-conduit",
          "partial": "Put LBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:conduitPutLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVectorized variant of \u003ccode\u003e\u003ca\u003econduitPut\u003c/a\u003e\u003c/code\u003e returning list contains\n all chunks from one element representation\n\u003c/p\u003e",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitPutList",
          "package": "binary-conduit",
          "signature": "Conduit Put m [ByteString]",
          "source": "src/Data-Conduit-Serialization-Binary.html#conduitPutList",
          "type": "function"
        },
        "index": {
          "description": "Vectorized variant of conduitPut returning list contains all chunks from one element representation",
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitPutList",
          "normalized": "Conduit Put a[ByteString]",
          "package": "binary-conduit",
          "partial": "Put List",
          "signature": "Conduit Put m[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:conduitPutList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVectorized variant of \u003ccode\u003e\u003ca\u003econduitPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitPutMany",
          "package": "binary-conduit",
          "signature": "Conduit Put m (Vector ByteString)",
          "source": "src/Data-Conduit-Serialization-Binary.html#conduitPutMany",
          "type": "function"
        },
        "index": {
          "description": "Vectorized variant of conduitPut",
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "conduitPutMany",
          "package": "binary-conduit",
          "partial": "Put Many",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:conduitPutMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError content.\n\u003c/p\u003e",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "content",
          "package": "binary-conduit",
          "signature": "String",
          "source": "src/Data-Conduit-Serialization-Binary.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "Error content",
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "content",
          "package": "binary-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of bytes consumed from single stream input value.\n\u003c/p\u003e",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "offset",
          "package": "binary-conduit",
          "signature": "ByteOffset",
          "source": "src/Data-Conduit-Serialization-Binary.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "Number of bytes consumed from single stream input value",
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "offset",
          "package": "binary-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode message from input stream.\n\u003c/p\u003e",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "sinkGet",
          "package": "binary-conduit",
          "signature": "Get b -\u003e Consumer ByteString m b",
          "source": "src/Data-Conduit-Serialization-Binary.html#sinkGet",
          "type": "function"
        },
        "index": {
          "description": "Decode message from input stream",
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "sinkGet",
          "normalized": "Get a-\u003eConsumer ByteString b a",
          "package": "binary-conduit",
          "partial": "Get",
          "signature": "Get b-\u003eConsumer ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:sinkGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate stream of strict bytestrings from \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "sourcePut",
          "package": "binary-conduit",
          "signature": "Put -\u003e Producer m ByteString",
          "source": "src/Data-Conduit-Serialization-Binary.html#sourcePut",
          "type": "function"
        },
        "index": {
          "description": "Create stream of strict bytestrings from Put value",
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "sourcePut",
          "normalized": "Put-\u003eProducer a ByteString",
          "package": "binary-conduit",
          "partial": "Put",
          "signature": "Put-\u003eProducer m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:sourcePut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData left unconsumed in single stream input value.\n\u003c/p\u003e",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "unconsumed",
          "package": "binary-conduit",
          "signature": "ByteString",
          "source": "src/Data-Conduit-Serialization-Binary.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "Data left unconsumed in single stream input value",
          "hierarchy": "Data Conduit Serialization Binary",
          "module": "Data.Conduit.Serialization.Binary",
          "name": "unconsumed",
          "package": "binary-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-conduit/docs/Data-Conduit-Serialization-Binary.html#v:unconsumed"
      }
    }
  ]
]