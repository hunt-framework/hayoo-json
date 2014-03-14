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
        "word": "spool"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert between \u003ccode\u003eByteString\u003c/code\u003e and \u003ccode\u003eVector.Storable\u003c/code\u003e\n without copying.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "ByteString",
          "package": "spool",
          "source": "src/Data-Vector-Storable-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Convert between ByteString and Vector.Storable without copying",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "ByteString",
          "package": "spool",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/spool/docs/Data-Vector-Storable-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function can produce \u003ccode\u003e\u003ccode\u003eVector\u003c/code\u003e\u003c/code\u003es which do not obey\n architectural alignment requirements.  On \u003ccode\u003ex86\u003c/code\u003e this should\n not be an issue.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "byteStringToVector",
          "package": "spool",
          "signature": "ByteString -\u003e Vector a",
          "source": "src/Data-Vector-Storable-ByteString.html#byteStringToVector",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString to Vector This function can produce Vector which do not obey architectural alignment requirements On x86 this should not be an issue",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "byteStringToVector",
          "normalized": "ByteString-\u003eVector a",
          "package": "spool",
          "partial": "String To Vector",
          "signature": "ByteString-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spool/docs/Data-Vector-Storable-ByteString.html#v:byteStringToVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.ByteString",
          "name": "vectorToByteString",
          "package": "spool",
          "signature": "Vector a -\u003e ByteString",
          "source": "src/Data-Vector-Storable-ByteString.html#vectorToByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert Vector to ByteString",
          "hierarchy": "Data Vector Storable ByteString",
          "module": "Data.Vector.Storable.ByteString",
          "name": "vectorToByteString",
          "normalized": "Vector a-\u003eByteString",
          "package": "spool",
          "partial": "To Byte String",
          "signature": "Vector a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spool/docs/Data-Vector-Storable-ByteString.html#v:vectorToByteString"
      }
    }
  ]
]