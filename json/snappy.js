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
        "word": "snappy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides fast, pure zero-copy compression and\n decompression of lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e data using the Snappy format.\n\u003c/p\u003e\u003cp\u003eAlthough these functions operate on lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, they\n consume the data \u003cem\u003estrictly\u003c/em\u003e: they do not produce any output until\n they have consumed all of the input, and they produce the output in\n a single large chunk.\n\u003c/p\u003e\u003cp\u003eIf your data is already in the form of a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, it is\n likely more efficient to use these functions than to convert your\n data to and from strict ByteStrings, as you can avoid the\n additional allocation and copying that would entail.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Compression.Snappy.Lazy",
          "name": "Lazy",
          "package": "snappy",
          "source": "src/Codec-Compression-Snappy-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides fast pure zero-copy compression and decompression of lazy ByteString data using the Snappy format Although these functions operate on lazy ByteString they consume the data strictly they do not produce any output until they have consumed all of the input and they produce the output in single large chunk If your data is already in the form of lazy ByteString it is likely more efficient to use these functions than to convert your data to and from strict ByteStrings as you can avoid the additional allocation and copying that would entail",
          "hierarchy": "Codec Compression Snappy Lazy",
          "module": "Codec.Compression.Snappy.Lazy",
          "name": "Lazy",
          "package": "snappy",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snappy/docs/Codec-Compression-Snappy-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress data into the Snappy format.\n\u003c/p\u003e",
          "module": "Codec.Compression.Snappy.Lazy",
          "name": "compress",
          "package": "snappy",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Snappy-Lazy.html#compress",
          "type": "function"
        },
        "index": {
          "description": "Compress data into the Snappy format",
          "hierarchy": "Codec Compression Snappy Lazy",
          "module": "Codec.Compression.Snappy.Lazy",
          "name": "compress",
          "normalized": "ByteString-\u003eByteString",
          "package": "snappy",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snappy/docs/Codec-Compression-Snappy-Lazy.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress data in the Snappy format.\n\u003c/p\u003e\u003cp\u003eIf the input is not compressed or is corrupt, an exception will be\n thrown.\n\u003c/p\u003e",
          "module": "Codec.Compression.Snappy.Lazy",
          "name": "decompress",
          "package": "snappy",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Snappy-Lazy.html#decompress",
          "type": "function"
        },
        "index": {
          "description": "Decompress data in the Snappy format If the input is not compressed or is corrupt an exception will be thrown",
          "hierarchy": "Codec Compression Snappy Lazy",
          "module": "Codec.Compression.Snappy.Lazy",
          "name": "decompress",
          "normalized": "ByteString-\u003eByteString",
          "package": "snappy",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snappy/docs/Codec-Compression-Snappy-Lazy.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides fast, pure Haskell bindings to Google's\n Snappy compression and decompression library:\n \u003ca\u003ehttp://code.google.com/p/snappy/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThese functions operate on strict bytestrings, and thus use as much\n memory as both the entire compressed and uncompressed data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Compression.Snappy",
          "name": "Snappy",
          "package": "snappy",
          "source": "src/Codec-Compression-Snappy.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides fast pure Haskell bindings to Google Snappy compression and decompression library http code.google.com snappy These functions operate on strict bytestrings and thus use as much memory as both the entire compressed and uncompressed data",
          "hierarchy": "Codec Compression Snappy",
          "module": "Codec.Compression.Snappy",
          "name": "Snappy",
          "package": "snappy",
          "partial": "Snappy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snappy/docs/Codec-Compression-Snappy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress data into the Snappy format.\n\u003c/p\u003e",
          "module": "Codec.Compression.Snappy",
          "name": "compress",
          "package": "snappy",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Snappy.html#compress",
          "type": "function"
        },
        "index": {
          "description": "Compress data into the Snappy format",
          "hierarchy": "Codec Compression Snappy",
          "module": "Codec.Compression.Snappy",
          "name": "compress",
          "normalized": "ByteString-\u003eByteString",
          "package": "snappy",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snappy/docs/Codec-Compression-Snappy.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress data in the Snappy format.\n\u003c/p\u003e\u003cp\u003eIf the input is not compressed or is corrupt, an exception will be\n thrown.\n\u003c/p\u003e",
          "module": "Codec.Compression.Snappy",
          "name": "decompress",
          "package": "snappy",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Snappy.html#decompress",
          "type": "function"
        },
        "index": {
          "description": "Decompress data in the Snappy format If the input is not compressed or is corrupt an exception will be thrown",
          "hierarchy": "Codec Compression Snappy",
          "module": "Codec.Compression.Snappy",
          "name": "decompress",
          "normalized": "ByteString-\u003eByteString",
          "package": "snappy",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snappy/docs/Codec-Compression-Snappy.html#v:decompress"
      }
    }
  ]
]