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
        "word": "quicklz"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a high level \u003ccode\u003eByteString\u003c/code\u003e interface to the\n QuickLZ library. More information about quicklz can be found here:\n \u003ca\u003ehttp://quicklz.com\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eQuickLZ is fast and compresses well.  The library that is bundled\n with this version is QuickLZ v1.5.0, with the compression level set\n to 1.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Compression.QuickLZ",
          "name": "QuickLZ",
          "package": "quicklz",
          "source": "src/Codec-Compression-QuickLZ.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides high level ByteString interface to the QuickLZ library More information about quicklz can be found here http quicklz.com QuickLZ is fast and compresses well The library that is bundled with this version is QuickLZ v1.5.0 with the compression level set to",
          "hierarchy": "Codec Compression QuickLZ",
          "module": "Codec.Compression.QuickLZ",
          "name": "QuickLZ",
          "package": "quicklz",
          "partial": "Quick LZ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/quicklz/docs/Codec-Compression-QuickLZ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompresses the input \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.QuickLZ",
          "name": "compress",
          "package": "quicklz",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-QuickLZ.html#compress",
          "type": "function"
        },
        "index": {
          "description": "Compresses the input ByteString",
          "hierarchy": "Codec Compression QuickLZ",
          "module": "Codec.Compression.QuickLZ",
          "name": "compress",
          "normalized": "ByteString-\u003eByteString",
          "package": "quicklz",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quicklz/docs/Codec-Compression-QuickLZ.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress the input \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.QuickLZ",
          "name": "decompress",
          "package": "quicklz",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-QuickLZ.html#decompress",
          "type": "function"
        },
        "index": {
          "description": "Decompress the input ByteString",
          "hierarchy": "Codec Compression QuickLZ",
          "module": "Codec.Compression.QuickLZ",
          "name": "decompress",
          "normalized": "ByteString-\u003eByteString",
          "package": "quicklz",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quicklz/docs/Codec-Compression-QuickLZ.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress the input \u003ccode\u003eByteString\u003c/code\u003e and save memory via overlapping decompression.\n\u003c/p\u003e",
          "module": "Codec.Compression.QuickLZ",
          "name": "decompress'",
          "package": "quicklz",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-QuickLZ.html#decompress%27",
          "type": "function"
        },
        "index": {
          "description": "Decompress the input ByteString and save memory via overlapping decompression",
          "hierarchy": "Codec Compression QuickLZ",
          "module": "Codec.Compression.QuickLZ",
          "name": "decompress'",
          "normalized": "ByteString-\u003eByteString",
          "package": "quicklz",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quicklz/docs/Codec-Compression-QuickLZ.html#v:decompress-39-"
      }
    }
  ]
]