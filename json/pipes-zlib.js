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
        "word": "pipes-zlib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports utilities to compress and decompress \u003ccode\u003epipes\u003c/code\u003e streams\n using the zlib compression codec.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Zlib",
          "name": "Zlib",
          "package": "pipes-zlib",
          "source": "src/Pipes-Zlib.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports utilities to compress and decompress pipes streams using the zlib compression codec",
          "hierarchy": "Pipes Zlib",
          "module": "Pipes.Zlib",
          "name": "Zlib",
          "package": "pipes-zlib",
          "partial": "Zlib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe slowest compression method (best compression).\n\u003c/p\u003e",
          "module": "Pipes.Zlib",
          "name": "bestCompression",
          "package": "pipes-zlib",
          "signature": "CompressionLevel",
          "type": "function"
        },
        "index": {
          "description": "The slowest compression method best compression",
          "hierarchy": "Pipes Zlib",
          "module": "Pipes.Zlib",
          "name": "bestCompression",
          "package": "pipes-zlib",
          "partial": "Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:bestCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fastest compression method (less compression)\n\u003c/p\u003e",
          "module": "Pipes.Zlib",
          "name": "bestSpeed",
          "package": "pipes-zlib",
          "signature": "CompressionLevel",
          "type": "function"
        },
        "index": {
          "description": "The fastest compression method less compression",
          "hierarchy": "Pipes Zlib",
          "module": "Pipes.Zlib",
          "name": "bestSpeed",
          "package": "pipes-zlib",
          "partial": "Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:bestSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress bytes flowing from a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee the \u003ca\u003eCodec.Compression.Zlib\u003c/a\u003e module for details about\n \u003ccode\u003e\u003ca\u003eCompressionLevel\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Zlib",
          "name": "compress",
          "package": "pipes-zlib",
          "signature": "CompressionLevel-\u003e WindowBits-\u003e Producer' ByteString m r-\u003e Producer' ByteString m r",
          "type": "function"
        },
        "index": {
          "description": "Compress bytes flowing from Producer See the Codec.Compression.Zlib module for details about CompressionLevel and WindowBits",
          "hierarchy": "Pipes Zlib",
          "module": "Pipes.Zlib",
          "name": "compress",
          "normalized": "CompressionLevel-\u003eWindowBits-\u003eProducer' ByteString a b-\u003eProducer' ByteString a b",
          "package": "pipes-zlib",
          "signature": "CompressionLevel-\u003eWindowBits-\u003eProducer' ByteString m r-\u003eProducer' ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific compression level between 0 and 9.\n\u003c/p\u003e",
          "module": "Pipes.Zlib",
          "name": "compressionLevel",
          "package": "pipes-zlib",
          "signature": "Int -\u003e CompressionLevel",
          "type": "function"
        },
        "index": {
          "description": "specific compression level between and",
          "hierarchy": "Pipes Zlib",
          "module": "Pipes.Zlib",
          "name": "compressionLevel",
          "normalized": "Int-\u003eCompressionLevel",
          "package": "pipes-zlib",
          "partial": "Level",
          "signature": "Int-\u003eCompressionLevel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:compressionLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress bytes flowing from a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee the \u003ca\u003eCodec.Compression.Zlib\u003c/a\u003e module for details about \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Zlib",
          "name": "decompress",
          "package": "pipes-zlib",
          "signature": "WindowBits-\u003e Producer' ByteString m r-\u003e Producer' ByteString m r",
          "type": "function"
        },
        "index": {
          "description": "Decompress bytes flowing from Producer See the Codec.Compression.Zlib module for details about WindowBits",
          "hierarchy": "Pipes Zlib",
          "module": "Pipes.Zlib",
          "name": "decompress",
          "normalized": "WindowBits-\u003eProducer' ByteString a b-\u003eProducer' ByteString a b",
          "package": "pipes-zlib",
          "signature": "WindowBits-\u003eProducer' ByteString m r-\u003eProducer' ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default compression level is 6 (that is, biased towards higher\n compression at expense of speed).\n\u003c/p\u003e",
          "module": "Pipes.Zlib",
          "name": "defaultCompression",
          "package": "pipes-zlib",
          "signature": "CompressionLevel",
          "type": "function"
        },
        "index": {
          "description": "The default compression level is that is biased towards higher compression at expense of speed",
          "hierarchy": "Pipes Zlib",
          "module": "Pipes.Zlib",
          "name": "defaultCompression",
          "package": "pipes-zlib",
          "partial": "Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:defaultCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e is 15 which is also the maximum size.\n\u003c/p\u003e",
          "module": "Pipes.Zlib",
          "name": "defaultWindowBits",
          "package": "pipes-zlib",
          "signature": "WindowBits",
          "type": "function"
        },
        "index": {
          "description": "The default WindowBits is which is also the maximum size",
          "hierarchy": "Pipes Zlib",
          "module": "Pipes.Zlib",
          "name": "defaultWindowBits",
          "package": "pipes-zlib",
          "partial": "Window Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:defaultWindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo compression, just a block copy.\n\u003c/p\u003e",
          "module": "Pipes.Zlib",
          "name": "noCompression",
          "package": "pipes-zlib",
          "signature": "CompressionLevel",
          "type": "function"
        },
        "index": {
          "description": "No compression just block copy",
          "hierarchy": "Pipes Zlib",
          "module": "Pipes.Zlib",
          "name": "noCompression",
          "package": "pipes-zlib",
          "partial": "Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:noCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific compression window size, specified in bits in the range \u003ccode\u003e8..15\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Zlib",
          "name": "windowBits",
          "package": "pipes-zlib",
          "signature": "Int -\u003e WindowBits",
          "type": "function"
        },
        "index": {
          "description": "specific compression window size specified in bits in the range",
          "hierarchy": "Pipes Zlib",
          "module": "Pipes.Zlib",
          "name": "windowBits",
          "normalized": "Int-\u003eWindowBits",
          "package": "pipes-zlib",
          "partial": "Bits",
          "signature": "Int-\u003eWindowBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:windowBits"
      }
    }
  ]
]