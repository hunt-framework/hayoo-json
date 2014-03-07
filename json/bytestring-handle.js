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
        "word": "bytestring-handle"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ByteString.Handle",
          "name": "Handle",
          "package": "bytestring-handle",
          "source": "src/Data-ByteString-Handle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ByteString Handle",
          "module": "Data.ByteString.Handle",
          "name": "Handle",
          "package": "bytestring-handle",
          "partial": "Handle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-handle/docs/Data-ByteString-Handle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ByteString.Handle",
          "name": "readHandle",
          "package": "bytestring-handle",
          "signature": "Bool -\u003e ByteString -\u003e IO Handle",
          "source": "src/Data-ByteString-Handle-Read.html#readHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ByteString Handle",
          "module": "Data.ByteString.Handle",
          "name": "readHandle",
          "normalized": "Bool-\u003eByteString-\u003eIO Handle",
          "package": "bytestring-handle",
          "partial": "Handle",
          "signature": "Bool-\u003eByteString-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-handle/docs/Data-ByteString-Handle.html#v:readHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ByteString.Handle",
          "name": "writeHandle",
          "package": "bytestring-handle",
          "signature": "Bool -\u003e (Handle -\u003e IO a) -\u003e IO (ByteString, a)",
          "source": "src/Data-ByteString-Handle-Write.html#writeHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ByteString Handle",
          "module": "Data.ByteString.Handle",
          "name": "writeHandle",
          "normalized": "Bool-\u003e(Handle-\u003eIO a)-\u003eIO(ByteString,a)",
          "package": "bytestring-handle",
          "partial": "Handle",
          "signature": "Bool-\u003e(Handle-\u003eIO a)-\u003eIO(ByteString,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-handle/docs/Data-ByteString-Handle.html#v:writeHandle"
      }
    }
  ]
]