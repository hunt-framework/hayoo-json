[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snappy/docs/Codec-Compression-Snappy-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides fast, pure zero-copy compression and\n decompression of lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e data using the Snappy format.\n\u003c/p\u003e\u003cp\u003eAlthough these functions operate on lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, they\n consume the data \u003cem\u003estrictly\u003c/em\u003e: they do not produce any output until\n they have consumed all of the input, and they produce the output in\n a single large chunk.\n\u003c/p\u003e\u003cp\u003eIf your data is already in the form of a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, it is\n likely more efficient to use these functions than to convert your\n data to and from strict ByteStrings, as you can avoid the\n additional allocation and copying that would entail.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Snappy.Lazy",
        "fct-package": "snappy",
        "fct-signature": "module",
        "fct-source": "src/Codec-Compression-Snappy-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "This module provides fast pure zero-copy compression and decompression of lazy ByteString data using the Snappy format Although these functions operate on lazy ByteString they consume the data strictly they do not produce any output until they have consumed all of the input and they produce the output in single large chunk If your data is already in the form of lazy ByteString it is likely more efficient to use these functions than to convert your data to and from strict ByteStrings as you can avoid the additional allocation and copying that would entail",
        "hierarchy": "Codec Compression Snappy Lazy",
        "module": "Codec.Compression.Snappy.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "snappy",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snappy/docs/Codec-Compression-Snappy-Lazy.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompress data into the Snappy format.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Snappy.Lazy",
        "fct-package": "snappy",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Snappy-Lazy.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Compress data into the Snappy format",
        "hierarchy": "Codec Compression Snappy Lazy",
        "module": "Codec.Compression.Snappy.Lazy",
        "name": "compress",
        "normalized": "ByteString-\u003eByteString",
        "package": "snappy",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snappy/docs/Codec-Compression-Snappy-Lazy.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress data in the Snappy format.\n\u003c/p\u003e\u003cp\u003eIf the input is not compressed or is corrupt, an exception will be\n thrown.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Snappy.Lazy",
        "fct-package": "snappy",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Snappy-Lazy.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompress data in the Snappy format If the input is not compressed or is corrupt an exception will be thrown",
        "hierarchy": "Codec Compression Snappy Lazy",
        "module": "Codec.Compression.Snappy.Lazy",
        "name": "decompress",
        "normalized": "ByteString-\u003eByteString",
        "package": "snappy",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snappy/docs/Codec-Compression-Snappy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides fast, pure Haskell bindings to Google's\n Snappy compression and decompression library:\n \u003ca\u003ehttp://code.google.com/p/snappy/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThese functions operate on strict bytestrings, and thus use as much\n memory as both the entire compressed and uncompressed data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Snappy",
        "fct-package": "snappy",
        "fct-signature": "module",
        "fct-source": "src/Codec-Compression-Snappy.html",
        "fct-type": "module",
        "title": "Snappy"
      },
      "index": {
        "description": "This module provides fast pure Haskell bindings to Google Snappy compression and decompression library http code.google.com snappy These functions operate on strict bytestrings and thus use as much memory as both the entire compressed and uncompressed data",
        "hierarchy": "Codec Compression Snappy",
        "module": "Codec.Compression.Snappy",
        "name": "Snappy",
        "normalized": "",
        "package": "snappy",
        "partial": "Snappy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snappy/docs/Codec-Compression-Snappy.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompress data into the Snappy format.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Snappy",
        "fct-package": "snappy",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Snappy.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Compress data into the Snappy format",
        "hierarchy": "Codec Compression Snappy",
        "module": "Codec.Compression.Snappy",
        "name": "compress",
        "normalized": "ByteString-\u003eByteString",
        "package": "snappy",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snappy/docs/Codec-Compression-Snappy.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress data in the Snappy format.\n\u003c/p\u003e\u003cp\u003eIf the input is not compressed or is corrupt, an exception will be\n thrown.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Snappy",
        "fct-package": "snappy",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Snappy.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompress data in the Snappy format If the input is not compressed or is corrupt an exception will be thrown",
        "hierarchy": "Codec Compression Snappy",
        "module": "Codec.Compression.Snappy",
        "name": "decompress",
        "normalized": "ByteString-\u003eByteString",
        "package": "snappy",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  }
]