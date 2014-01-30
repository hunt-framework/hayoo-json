[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Codec-Compression-LZF/docs/Codec-Compression-LZF.html#",
      "description": {
        "fct-module": "Codec.Compression.LZF",
        "fct-package": "Codec-Compression-LZF",
        "fct-signature": "module",
        "fct-source": "src/Codec-Compression-LZF.html",
        "fct-type": "module",
        "title": "LZF"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression LZF",
        "module": "Codec.Compression.LZF",
        "name": "LZF",
        "normalized": "",
        "package": "Codec-Compression-LZF",
        "partial": "LZF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Codec-Compression-LZF/docs/Codec-Compression-LZF.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompress a block of data. The length of data is \n not recorded. Returns the length of output or 0\n if it is longer than the size of the output buffer.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.LZF",
        "fct-package": "Codec-Compression-LZF",
        "fct-signature": "Ptr a -\u003e Int -\u003e Ptr b -\u003e Int -\u003e IO Int",
        "fct-source": "src/Codec-Compression-LZF.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Compress block of data The length of data is not recorded Returns the length of output or if it is longer than the size of the output buffer",
        "hierarchy": "Codec Compression LZF",
        "module": "Codec.Compression.LZF",
        "name": "compress",
        "normalized": "Ptr a-\u003eInt-\u003ePtr b-\u003eInt-\u003eIO Int",
        "package": "Codec-Compression-LZF",
        "partial": "",
        "signature": "Ptr a-\u003eInt-\u003ePtr b-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Codec-Compression-LZF/docs/Codec-Compression-LZF.html#v:compressString",
      "description": {
        "fct-descr": "\u003cp\u003eCompress a string with worst case length = original + 1.\n The first char of the string contains the length of the original.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.LZF",
        "fct-package": "Codec-Compression-LZF",
        "fct-signature": "String -\u003e IO String",
        "fct-source": "src/Codec-Compression-LZF.html#compressString",
        "fct-type": "function",
        "title": "compressString"
      },
      "index": {
        "description": "Compress string with worst case length original The first char of the string contains the length of the original",
        "hierarchy": "Codec Compression LZF",
        "module": "Codec.Compression.LZF",
        "name": "compressString",
        "normalized": "String-\u003eIO String",
        "package": "Codec-Compression-LZF",
        "partial": "String",
        "signature": "String-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Codec-Compression-LZF/docs/Codec-Compression-LZF.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress a block of data. Returns the length\n of data uncompressed or 0 on error.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.LZF",
        "fct-package": "Codec-Compression-LZF",
        "fct-signature": "Ptr a -\u003e Int -\u003e Ptr b -\u003e Int -\u003e IO Int",
        "fct-source": "src/Codec-Compression-LZF.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompress block of data Returns the length of data uncompressed or on error",
        "hierarchy": "Codec Compression LZF",
        "module": "Codec.Compression.LZF",
        "name": "decompress",
        "normalized": "Ptr a-\u003eInt-\u003ePtr b-\u003eInt-\u003eIO Int",
        "package": "Codec-Compression-LZF",
        "partial": "",
        "signature": "Ptr a-\u003eInt-\u003ePtr b-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Codec-Compression-LZF/docs/Codec-Compression-LZF.html#v:decompressString",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress a string compressed with compressString.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.LZF",
        "fct-package": "Codec-Compression-LZF",
        "fct-signature": "String -\u003e IO String",
        "fct-source": "src/Codec-Compression-LZF.html#decompressString",
        "fct-type": "function",
        "title": "decompressString"
      },
      "index": {
        "description": "Decompress string compressed with compressString",
        "hierarchy": "Codec Compression LZF",
        "module": "Codec.Compression.LZF",
        "name": "decompressString",
        "normalized": "String-\u003eIO String",
        "package": "Codec-Compression-LZF",
        "partial": "String",
        "signature": "String-\u003eIO String"
      }
    }
  }
]