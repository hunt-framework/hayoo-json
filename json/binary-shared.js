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
        "word": "binary-shared"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinary serializing with sharing\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Shared",
          "name": "Shared",
          "package": "binary-shared",
          "source": "src/Data-Binary-Shared.html",
          "type": "module"
        },
        "index": {
          "description": "Binary serializing with sharing",
          "hierarchy": "Data Binary Shared",
          "module": "Data.Binary.Shared",
          "name": "Shared",
          "package": "binary-shared",
          "partial": "Shared",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary-shared/docs/Data-Binary-Shared.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for storing Binary instances with shared nodes.\n Cycles are not supported, cause put and get is a one path process.\n\u003c/p\u003e",
          "module": "Data.Binary.Shared",
          "name": "BinaryShared",
          "package": "binary-shared",
          "source": "src/Data-Binary-Shared.html#BinaryShared",
          "type": "class"
        },
        "index": {
          "description": "class for storing Binary instances with shared nodes Cycles are not supported cause put and get is one path process",
          "hierarchy": "Data Binary Shared",
          "module": "Data.Binary.Shared",
          "name": "BinaryShared",
          "package": "binary-shared",
          "partial": "Binary Shared",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/binary-shared/docs/Data-Binary-Shared.html#t:BinaryShared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Shared",
          "name": "decodeSer",
          "package": "binary-shared",
          "signature": "ByteString -\u003e alpha",
          "source": "src/Data-Binary-Shared.html#decodeSer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Shared",
          "module": "Data.Binary.Shared",
          "name": "decodeSer",
          "normalized": "ByteString-\u003ea",
          "package": "binary-shared",
          "partial": "Ser",
          "signature": "ByteString-\u003ealpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-shared/docs/Data-Binary-Shared.html#v:decodeSer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Shared",
          "name": "encodeFileSer",
          "package": "binary-shared",
          "signature": "FilePath -\u003e a -\u003e IO ()",
          "source": "src/Data-Binary-Shared.html#encodeFileSer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Shared",
          "module": "Data.Binary.Shared",
          "name": "encodeFileSer",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "binary-shared",
          "partial": "File Ser",
          "signature": "FilePath-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-shared/docs/Data-Binary-Shared.html#v:encodeFileSer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Shared",
          "name": "encodeSer",
          "package": "binary-shared",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Binary-Shared.html#encodeSer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Shared",
          "module": "Data.Binary.Shared",
          "name": "encodeSer",
          "normalized": "a-\u003eByteString",
          "package": "binary-shared",
          "partial": "Ser",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary-shared/docs/Data-Binary-Shared.html#v:encodeSer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a value in the Get monad\n\u003c/p\u003e",
          "module": "Data.Binary.Shared",
          "name": "get",
          "package": "binary-shared",
          "signature": "GetShared alpha",
          "source": "src/Data-Binary-Shared.html#get",
          "type": "method"
        },
        "index": {
          "description": "Decode value in the Get monad",
          "hierarchy": "Data Binary Shared",
          "module": "Data.Binary.Shared",
          "name": "get",
          "package": "binary-shared",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-shared/docs/Data-Binary-Shared.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Shared",
          "name": "getShared",
          "package": "binary-shared",
          "signature": "GetShared alpha -\u003e GetShared alpha",
          "source": "src/Data-Binary-Shared.html#getShared",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Shared",
          "module": "Data.Binary.Shared",
          "name": "getShared",
          "normalized": "GetShared a-\u003eGetShared a",
          "package": "binary-shared",
          "partial": "Shared",
          "signature": "GetShared alpha-\u003eGetShared alpha",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-shared/docs/Data-Binary-Shared.html#v:getShared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a value in the Put monad.\n\u003c/p\u003e",
          "module": "Data.Binary.Shared",
          "name": "put",
          "package": "binary-shared",
          "signature": "alpha -\u003e PutShared",
          "source": "src/Data-Binary-Shared.html#put",
          "type": "method"
        },
        "index": {
          "description": "Encode value in the Put monad",
          "hierarchy": "Data Binary Shared",
          "module": "Data.Binary.Shared",
          "name": "put",
          "normalized": "a-\u003ePutShared",
          "package": "binary-shared",
          "signature": "alpha-\u003ePutShared",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-shared/docs/Data-Binary-Shared.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Shared",
          "name": "putShared",
          "package": "binary-shared",
          "signature": "(alpha -\u003e PutShared) -\u003e alpha -\u003e PutShared",
          "source": "src/Data-Binary-Shared.html#putShared",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary Shared",
          "module": "Data.Binary.Shared",
          "name": "putShared",
          "normalized": "(a-\u003ePutShared)-\u003ea-\u003ePutShared",
          "package": "binary-shared",
          "partial": "Shared",
          "signature": "(alpha-\u003ePutShared)-\u003ealpha-\u003ePutShared",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary-shared/docs/Data-Binary-Shared.html#v:putShared"
      }
    }
  ]
]