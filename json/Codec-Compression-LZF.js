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
        "word": "Codec-Compression-LZF"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Compression.LZF",
          "name": "LZF",
          "package": "Codec-Compression-LZF",
          "source": "src/Codec-Compression-LZF.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Compression LZF",
          "module": "Codec.Compression.LZF",
          "name": "LZF",
          "package": "Codec-Compression-LZF",
          "partial": "LZF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Codec-Compression-LZF/docs/Codec-Compression-LZF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress a block of data. The length of data is \n not recorded. Returns the length of output or 0\n if it is longer than the size of the output buffer.\n\u003c/p\u003e",
          "module": "Codec.Compression.LZF",
          "name": "compress",
          "package": "Codec-Compression-LZF",
          "signature": "Ptr a -\u003e Int -\u003e Ptr b -\u003e Int -\u003e IO Int",
          "source": "src/Codec-Compression-LZF.html#compress",
          "type": "function"
        },
        "index": {
          "description": "Compress block of data The length of data is not recorded Returns the length of output or if it is longer than the size of the output buffer",
          "hierarchy": "Codec Compression LZF",
          "module": "Codec.Compression.LZF",
          "name": "compress",
          "normalized": "Ptr a-\u003eInt-\u003ePtr b-\u003eInt-\u003eIO Int",
          "package": "Codec-Compression-LZF",
          "signature": "Ptr a-\u003eInt-\u003ePtr b-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Codec-Compression-LZF/docs/Codec-Compression-LZF.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress a string with worst case length = original + 1.\n The first char of the string contains the length of the original.\n\u003c/p\u003e",
          "module": "Codec.Compression.LZF",
          "name": "compressString",
          "package": "Codec-Compression-LZF",
          "signature": "String -\u003e IO String",
          "source": "src/Codec-Compression-LZF.html#compressString",
          "type": "function"
        },
        "index": {
          "description": "Compress string with worst case length original The first char of the string contains the length of the original",
          "hierarchy": "Codec Compression LZF",
          "module": "Codec.Compression.LZF",
          "name": "compressString",
          "normalized": "String-\u003eIO String",
          "package": "Codec-Compression-LZF",
          "partial": "String",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Codec-Compression-LZF/docs/Codec-Compression-LZF.html#v:compressString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress a block of data. Returns the length\n of data uncompressed or 0 on error.\n\u003c/p\u003e",
          "module": "Codec.Compression.LZF",
          "name": "decompress",
          "package": "Codec-Compression-LZF",
          "signature": "Ptr a -\u003e Int -\u003e Ptr b -\u003e Int -\u003e IO Int",
          "source": "src/Codec-Compression-LZF.html#decompress",
          "type": "function"
        },
        "index": {
          "description": "Decompress block of data Returns the length of data uncompressed or on error",
          "hierarchy": "Codec Compression LZF",
          "module": "Codec.Compression.LZF",
          "name": "decompress",
          "normalized": "Ptr a-\u003eInt-\u003ePtr b-\u003eInt-\u003eIO Int",
          "package": "Codec-Compression-LZF",
          "signature": "Ptr a-\u003eInt-\u003ePtr b-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Codec-Compression-LZF/docs/Codec-Compression-LZF.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress a string compressed with compressString.\n\u003c/p\u003e",
          "module": "Codec.Compression.LZF",
          "name": "decompressString",
          "package": "Codec-Compression-LZF",
          "signature": "String -\u003e IO String",
          "source": "src/Codec-Compression-LZF.html#decompressString",
          "type": "function"
        },
        "index": {
          "description": "Decompress string compressed with compressString",
          "hierarchy": "Codec Compression LZF",
          "module": "Codec.Compression.LZF",
          "name": "decompressString",
          "normalized": "String-\u003eIO String",
          "package": "Codec-Compression-LZF",
          "partial": "String",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Codec-Compression-LZF/docs/Codec-Compression-LZF.html#v:decompressString"
      }
    }
  ]
]