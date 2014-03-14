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
        "word": "zlib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompression and decompression of data streams in the gzip format.\n\u003c/p\u003e\u003cp\u003eThe format is described in detail in RFC #1952:\n \u003ca\u003ehttp://www.ietf.org/rfc/rfc1952.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSee also the zlib home page: \u003ca\u003ehttp://zlib.net/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Compression.GZip",
          "name": "GZip",
          "package": "zlib",
          "source": "src/Codec-Compression-GZip.html",
          "type": "module"
        },
        "index": {
          "description": "Compression and decompression of data streams in the gzip format The format is described in detail in RFC http www.ietf.org rfc rfc1952.txt See also the zlib home page http zlib.net",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "GZip",
          "package": "zlib",
          "partial": "GZip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full set of parameters for compression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultCompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer containing\n the compressed data. If you know an approximate upper bound on the size of\n the compressed data then setting this parameter can save memory. The default\n compression output buffer size is \u003ccode\u003e16k\u003c/code\u003e. If your extimate is wrong it does\n not matter too much, the default buffer size will be used for the remaining\n chunks.\n\u003c/p\u003e",
          "module": "Codec.Compression.GZip",
          "name": "CompressParams",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
          "type": "data"
        },
        "index": {
          "description": "The full set of parameters for compression The defaults are defaultCompressParams The compressBufferSize is the size of the first output buffer containing the compressed data If you know an approximate upper bound on the size of the compressed data then setting this parameter can save memory The default compression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "CompressParams",
          "package": "zlib",
          "partial": "Compress Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:CompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compression level parameter controls the amount of compression. This\n is a trade-off between the amount of compression and the time required to do\n the compression.\n\u003c/p\u003e",
          "module": "Codec.Compression.GZip",
          "name": "CompressionLevel",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
          "type": "data"
        },
        "index": {
          "description": "The compression level parameter controls the amount of compression This is trade-off between the amount of compression and the time required to do the compression",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "CompressionLevel",
          "package": "zlib",
          "partial": "Compression Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:CompressionLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy parameter is used to tune the compression algorithm.\n\u003c/p\u003e\u003cp\u003eThe strategy parameter only affects the compression ratio but not the\n correctness of the compressed output even if it is not set appropriately.\n\u003c/p\u003e",
          "module": "Codec.Compression.GZip",
          "name": "CompressionStrategy",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
          "type": "data"
        },
        "index": {
          "description": "The strategy parameter is used to tune the compression algorithm The strategy parameter only affects the compression ratio but not the correctness of the compressed output even if it is not set appropriately",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "CompressionStrategy",
          "package": "zlib",
          "partial": "Compression Strategy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:CompressionStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full set of parameters for decompression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultDecompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer,\n containing the uncompressed data. If you know an exact or approximate upper\n bound on the size of the decompressed data then setting this parameter can\n save memory. The default decompression output buffer size is \u003ccode\u003e32k\u003c/code\u003e. If your\n extimate is wrong it does not matter too much, the default buffer size will\n be used for the remaining chunks.\n\u003c/p\u003e\u003cp\u003eOne particular use case for setting the \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is if you\n know the exact size of the decompressed data and want to produce a strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The compression and deccompression functions\n use lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es but if you set the\n \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e correctly then you can generate a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with exactly one chunk, which can be\n converted to a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eO(1)\u003c/code\u003e time using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.GZip",
          "name": "DecompressParams",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
          "type": "data"
        },
        "index": {
          "description": "The full set of parameters for decompression The defaults are defaultDecompressParams The decompressBufferSize is the size of the first output buffer containing the uncompressed data If you know an exact or approximate upper bound on the size of the decompressed data then setting this parameter can save memory The default decompression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks One particular use case for setting the decompressBufferSize is if you know the exact size of the decompressed data and want to produce strict ByteString The compression and deccompression functions use lazy ByteString but if you set the decompressBufferSize correctly then you can generate lazy ByteString with exactly one chunk which can be converted to strict ByteString in time using concat toChunks",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "DecompressParams",
          "package": "zlib",
          "partial": "Decompress Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:DecompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e parameter specifies how much memory should be allocated\n for the internal compression state. It is a tradoff between memory usage,\n compression ratio and compression speed. Using more memory allows faster\n compression and a better compression ratio.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used for compression depends on the \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e\n and the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. For decompression it depends only on the\n \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e. The totals are given by the functions:\n\u003c/p\u003e\u003cpre\u003e compressTotal windowBits memLevel = 4 * 2^windowBits + 512 * 2^memLevel\n decompressTotal windowBits = 2^windowBits\n\u003c/pre\u003e\u003cp\u003eFor example, for compression with the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e and\n \u003ccode\u003ememLevel = 8\u003c/code\u003e uses \u003ccode\u003e256Kb\u003c/code\u003e. So for example a network server with 100\n concurrent compressed streams would use \u003ccode\u003e25Mb\u003c/code\u003e. The memory per stream can be\n halved (at the cost of somewhat degraded and slower compressionby) by\n reducing the \u003ccode\u003ewindowBits\u003c/code\u003e and \u003ccode\u003ememLevel\u003c/code\u003e by one.\n\u003c/p\u003e\u003cp\u003eDecompression takes less memory, the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e corresponds\n to just \u003ccode\u003e32Kb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.GZip",
          "name": "MemoryLevel",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
          "type": "data"
        },
        "index": {
          "description": "The MemoryLevel parameter specifies how much memory should be allocated for the internal compression state It is tradoff between memory usage compression ratio and compression speed Using more memory allows faster compression and better compression ratio The total amount of memory used for compression depends on the WindowBits and the MemoryLevel For decompression it depends only on the WindowBits The totals are given by the functions compressTotal windowBits memLevel windowBits memLevel decompressTotal windowBits windowBits For example for compression with the default windowBits and memLevel uses Kb So for example network server with concurrent compressed streams would use Mb The memory per stream can be halved at the cost of somewhat degraded and slower compressionby by reducing the windowBits and memLevel by one Decompression takes less memory the default windowBits corresponds to just Kb",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "MemoryLevel",
          "package": "zlib",
          "partial": "Memory Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:MemoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compression method\n\u003c/p\u003e",
          "module": "Codec.Compression.GZip",
          "name": "Method",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#Method",
          "type": "data"
        },
        "index": {
          "description": "The compression method",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "Method",
          "package": "zlib",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis specifies the size of the compression window. Larger values of this\n parameter result in better compression at the expense of higher memory\n usage.\n\u003c/p\u003e\u003cp\u003eThe compression window size is the value of the the window bits raised to\n the power 2. The window bits must be in the range \u003ccode\u003e8..15\u003c/code\u003e which corresponds\n to compression window sizes of 256b to 32Kb. The default is 15 which is also\n the maximum size.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used depends on the window bits and the\n \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. See the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e for the details.\n\u003c/p\u003e",
          "module": "Codec.Compression.GZip",
          "name": "WindowBits",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
          "type": "data"
        },
        "index": {
          "description": "This specifies the size of the compression window Larger values of this parameter result in better compression at the expense of higher memory usage The compression window size is the value of the the window bits raised to the power The window bits must be in the range which corresponds to compression window sizes of to Kb The default is which is also the maximum size The total amount of memory used depends on the window bits and the MemoryLevel See the MemoryLevel for the details",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "WindowBits",
          "package": "zlib",
          "partial": "Window Bits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:WindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use bestCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "BestCompression",
          "package": "zlib",
          "signature": "BestCompression",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:BestCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:BestCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:BestCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:BestCompression\"]"
        },
        "index": {
          "description": "Deprecated Use bestCompression CompressionLevel constructors will be hidden in version",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "BestCompression",
          "package": "zlib",
          "partial": "Best Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:BestCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use bestSpeed. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "BestSpeed",
          "package": "zlib",
          "signature": "BestSpeed",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:BestSpeed\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:BestSpeed\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:BestSpeed\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:BestSpeed\"]"
        },
        "index": {
          "description": "Deprecated Use bestSpeed CompressionLevel constructors will be hidden in version",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "BestSpeed",
          "package": "zlib",
          "partial": "Best Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:BestSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "CompressParams",
          "package": "zlib",
          "signature": "CompressParams",
          "source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:CompressParams\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:CompressParams\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:CompressParams\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:CompressParams\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "CompressParams",
          "package": "zlib",
          "partial": "Compress Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:CompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "CompressionLevel",
          "package": "zlib",
          "signature": "CompressionLevel Int",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:CompressionLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:CompressionLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:CompressionLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:CompressionLevel\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "CompressionLevel",
          "package": "zlib",
          "partial": "Compression Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:CompressionLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "DecompressParams",
          "package": "zlib",
          "signature": "DecompressParams",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DecompressParams\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DecompressParams\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:DecompressParams\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:DecompressParams\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "DecompressParams",
          "package": "zlib",
          "partial": "Decompress Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DecompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "DefaultCompression",
          "package": "zlib",
          "signature": "DefaultCompression",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DefaultCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DefaultCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:DefaultCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:DefaultCompression\"]"
        },
        "index": {
          "description": "Deprecated Use defaultCompression CompressionLevel constructors will be hidden in version",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "DefaultCompression",
          "package": "zlib",
          "partial": "Default Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DefaultCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "DefaultMemoryLevel",
          "package": "zlib",
          "signature": "DefaultMemoryLevel",
          "source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DefaultMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DefaultMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:DefaultMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:DefaultMemoryLevel\"]"
        },
        "index": {
          "description": "Deprecated Use defaultMemoryLevel MemoryLevel constructors will be hidden in version",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "DefaultMemoryLevel",
          "package": "zlib",
          "partial": "Default Memory Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DefaultMemoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "DefaultStrategy",
          "package": "zlib",
          "signature": "DefaultStrategy",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DefaultStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DefaultStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:DefaultStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:DefaultStrategy\"]"
        },
        "index": {
          "description": "Deprecated Use defaultStrategy CompressionStrategy constructors will be hidden in version",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "DefaultStrategy",
          "package": "zlib",
          "partial": "Default Strategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DefaultStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultWindowBits. WindowBits constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "DefaultWindowBits",
          "package": "zlib",
          "signature": "DefaultWindowBits",
          "source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DefaultWindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DefaultWindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:DefaultWindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:DefaultWindowBits\"]"
        },
        "index": {
          "description": "Deprecated Use defaultWindowBits WindowBits constructors will be hidden in version",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "DefaultWindowBits",
          "package": "zlib",
          "partial": "Default Window Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DefaultWindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use deflateMethod. Method constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "Deflated",
          "package": "zlib",
          "signature": "Deflated",
          "source": "src/Codec-Compression-Zlib-Stream.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:Deflated\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:Deflated\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:Deflated\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:Deflated\"]"
        },
        "index": {
          "description": "Deprecated Use deflateMethod Method constructors will be hidden in version",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "Deflated",
          "package": "zlib",
          "partial": "Deflated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:Deflated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use filteredStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "Filtered",
          "package": "zlib",
          "signature": "Filtered",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:Filtered\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:Filtered\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:Filtered\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:Filtered\"]"
        },
        "index": {
          "description": "Deprecated Use filteredStrategy CompressionStrategy constructors will be hidden in version",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "Filtered",
          "package": "zlib",
          "partial": "Filtered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:Filtered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use huffmanOnlyStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "HuffmanOnly",
          "package": "zlib",
          "signature": "HuffmanOnly",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:HuffmanOnly\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:HuffmanOnly\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:HuffmanOnly\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:HuffmanOnly\"]"
        },
        "index": {
          "description": "Deprecated Use huffmanOnlyStrategy CompressionStrategy constructors will be hidden in version",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "HuffmanOnly",
          "package": "zlib",
          "partial": "Huffman Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:HuffmanOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use maxMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "MaxMemoryLevel",
          "package": "zlib",
          "signature": "MaxMemoryLevel",
          "source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:MaxMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:MaxMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:MaxMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:MaxMemoryLevel\"]"
        },
        "index": {
          "description": "Deprecated Use maxMemoryLevel MemoryLevel constructors will be hidden in version",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "MaxMemoryLevel",
          "package": "zlib",
          "partial": "Max Memory Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:MaxMemoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "MemoryLevel",
          "package": "zlib",
          "signature": "MemoryLevel Int",
          "source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:MemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:MemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:MemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:MemoryLevel\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "MemoryLevel",
          "package": "zlib",
          "partial": "Memory Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:MemoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use minMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "MinMemoryLevel",
          "package": "zlib",
          "signature": "MinMemoryLevel",
          "source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:MinMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:MinMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:MinMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:MinMemoryLevel\"]"
        },
        "index": {
          "description": "Deprecated Use minMemoryLevel MemoryLevel constructors will be hidden in version",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "MinMemoryLevel",
          "package": "zlib",
          "partial": "Min Memory Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:MinMemoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use noCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "NoCompression",
          "package": "zlib",
          "signature": "NoCompression",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:NoCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:NoCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:NoCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:NoCompression\"]"
        },
        "index": {
          "description": "Deprecated Use noCompression CompressionLevel constructors will be hidden in version",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "NoCompression",
          "package": "zlib",
          "partial": "No Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:NoCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "WindowBits",
          "package": "zlib",
          "signature": "WindowBits Int",
          "source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:WindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:WindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:WindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:WindowBits\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "WindowBits",
          "package": "zlib",
          "partial": "Window Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:WindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe slowest compression method (best compression).\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "bestCompression",
          "package": "zlib",
          "signature": "CompressionLevel",
          "source": "src/Codec-Compression-Zlib-Stream.html#bestCompression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:bestCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:bestCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:bestCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:bestCompression\"]"
        },
        "index": {
          "description": "The slowest compression method best compression",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "bestCompression",
          "package": "zlib",
          "partial": "Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:bestCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fastest compression method (less compression)\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "bestSpeed",
          "package": "zlib",
          "signature": "CompressionLevel",
          "source": "src/Codec-Compression-Zlib-Stream.html#bestSpeed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:bestSpeed\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:bestSpeed\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:bestSpeed\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:bestSpeed\"]"
        },
        "index": {
          "description": "The fastest compression method less compression",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "bestSpeed",
          "package": "zlib",
          "partial": "Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:bestSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress a stream of data into the gzip format.\n\u003c/p\u003e\u003cp\u003eThis uses the default compression parameters. In partiular it uses the\n default compression level which favours a higher compression ratio over\n compression speed, though it does not use the maximum compression level.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ecompressWith\u003c/a\u003e\u003c/code\u003e to adjust the compression level or other compression\n parameters.\n\u003c/p\u003e",
          "module": "Codec.Compression.GZip",
          "name": "compress",
          "package": "zlib",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-GZip.html#compress",
          "type": "function"
        },
        "index": {
          "description": "Compress stream of data into the gzip format This uses the default compression parameters In partiular it uses the default compression level which favours higher compression ratio over compression speed though it does not use the maximum compression level Use compressWith to adjust the compression level or other compression parameters",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "compress",
          "normalized": "ByteString-\u003eByteString",
          "package": "zlib",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "compressBufferSize",
          "package": "zlib",
          "signature": "Int",
          "source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressBufferSize\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressBufferSize\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressBufferSize\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressBufferSize\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "compressBufferSize",
          "package": "zlib",
          "partial": "Buffer Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "compressDictionary",
          "package": "zlib",
          "signature": "Maybe ByteString",
          "source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressDictionary\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressDictionary\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressDictionary\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressDictionary\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "compressDictionary",
          "package": "zlib",
          "partial": "Dictionary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "compressLevel",
          "package": "zlib",
          "signature": "CompressionLevel",
          "source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressLevel\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "compressLevel",
          "package": "zlib",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "compressMemoryLevel",
          "package": "zlib",
          "signature": "MemoryLevel",
          "source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressMemoryLevel\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "compressMemoryLevel",
          "package": "zlib",
          "partial": "Memory Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressMemoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "compressMethod",
          "package": "zlib",
          "signature": "Method",
          "source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressMethod\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressMethod\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressMethod\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressMethod\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "compressMethod",
          "package": "zlib",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "compressStrategy",
          "package": "zlib",
          "signature": "CompressionStrategy",
          "source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressStrategy\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "compressStrategy",
          "package": "zlib",
          "partial": "Strategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "compressWindowBits",
          "package": "zlib",
          "signature": "WindowBits",
          "source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressWindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressWindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressWindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressWindowBits\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "compressWindowBits",
          "package": "zlib",
          "partial": "Window Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressWindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecompress\u003c/a\u003e\u003c/code\u003e but with the ability to specify various compression\n parameters. Typical usage:\n\u003c/p\u003e\u003cpre\u003e compressWith defaultCompressParams { ... }\n\u003c/pre\u003e\u003cp\u003eIn particular you can set the compression level:\n\u003c/p\u003e\u003cpre\u003e compressWith defaultCompressParams { compressLevel = BestCompression }\n\u003c/pre\u003e",
          "module": "Codec.Compression.GZip",
          "name": "compressWith",
          "package": "zlib",
          "signature": "CompressParams -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-GZip.html#compressWith",
          "type": "function"
        },
        "index": {
          "description": "Like compress but with the ability to specify various compression parameters Typical usage compressWith defaultCompressParams In particular you can set the compression level compressWith defaultCompressParams compressLevel BestCompression",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "compressWith",
          "normalized": "CompressParams-\u003eByteString-\u003eByteString",
          "package": "zlib",
          "partial": "With",
          "signature": "CompressParams-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific compression level between 0 and 9.\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "compressionLevel",
          "package": "zlib",
          "signature": "Int -\u003e CompressionLevel",
          "source": "src/Codec-Compression-Zlib-Stream.html#compressionLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressionLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressionLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressionLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressionLevel\"]"
        },
        "index": {
          "description": "specific compression level between and",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "compressionLevel",
          "normalized": "Int-\u003eCompressionLevel",
          "package": "zlib",
          "partial": "Level",
          "signature": "Int-\u003eCompressionLevel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressionLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress a stream of data in the gzip format.\n\u003c/p\u003e\u003cp\u003eThere are a number of errors that can occur. In each case an exception will\n be thrown. The possible error conditions are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if the stream does not start with a valid gzip header\n\u003c/li\u003e\u003cli\u003e if the compressed stream is corrupted\n\u003c/li\u003e\u003cli\u003e if the compressed stream ends permaturely\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that the decompression is performed \u003cem\u003elazily\u003c/em\u003e. Errors in the data stream\n may not be detected until the end of the stream is demanded (since it is\n only at the end that the final checksum can be checked). If this is\n important to you, you must make sure to consume the whole decompressed\n stream before doing any IO action that depends on it.\n\u003c/p\u003e",
          "module": "Codec.Compression.GZip",
          "name": "decompress",
          "package": "zlib",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-GZip.html#decompress",
          "type": "function"
        },
        "index": {
          "description": "Decompress stream of data in the gzip format There are number of errors that can occur In each case an exception will be thrown The possible error conditions are if the stream does not start with valid gzip header if the compressed stream is corrupted if the compressed stream ends permaturely Note that the decompression is performed lazily Errors in the data stream may not be detected until the end of the stream is demanded since it is only at the end that the final checksum can be checked If this is important to you you must make sure to consume the whole decompressed stream before doing any IO action that depends on it",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "decompress",
          "normalized": "ByteString-\u003eByteString",
          "package": "zlib",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "decompressBufferSize",
          "package": "zlib",
          "signature": "Int",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompressBufferSize\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:decompressBufferSize\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:decompressBufferSize\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:decompressBufferSize\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "decompressBufferSize",
          "package": "zlib",
          "partial": "Buffer Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompressBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "decompressDictionary",
          "package": "zlib",
          "signature": "Maybe ByteString",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompressDictionary\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:decompressDictionary\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:decompressDictionary\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:decompressDictionary\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "decompressDictionary",
          "package": "zlib",
          "partial": "Dictionary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompressDictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "decompressWindowBits",
          "package": "zlib",
          "signature": "WindowBits",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompressWindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:decompressWindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:decompressWindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:decompressWindowBits\"]"
        },
        "index": {
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "decompressWindowBits",
          "package": "zlib",
          "partial": "Window Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompressWindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e but with the ability to specify various decompression\n parameters. Typical usage:\n\u003c/p\u003e\u003cpre\u003e decompressWith defaultCompressParams { ... }\n\u003c/pre\u003e",
          "module": "Codec.Compression.GZip",
          "name": "decompressWith",
          "package": "zlib",
          "signature": "DecompressParams -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-GZip.html#decompressWith",
          "type": "function"
        },
        "index": {
          "description": "Like decompress but with the ability to specify various decompression parameters Typical usage decompressWith defaultCompressParams",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "decompressWith",
          "normalized": "DecompressParams-\u003eByteString-\u003eByteString",
          "package": "zlib",
          "partial": "With",
          "signature": "DecompressParams-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompressWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default set of parameters for compression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific parameters overridden.\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "defaultCompressParams",
          "package": "zlib",
          "signature": "CompressParams",
          "source": "src/Codec-Compression-Zlib-Internal.html#defaultCompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultCompressParams\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:defaultCompressParams\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:defaultCompressParams\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:defaultCompressParams\"]"
        },
        "index": {
          "description": "The default set of parameters for compression This is typically used with the compressWith function with specific parameters overridden",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "defaultCompressParams",
          "package": "zlib",
          "partial": "Compress Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultCompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default compression level is 6 (that is, biased towards higher\n compression at expense of speed).\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "defaultCompression",
          "package": "zlib",
          "signature": "CompressionLevel",
          "source": "src/Codec-Compression-Zlib-Stream.html#defaultCompression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:defaultCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:defaultCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:defaultCompression\"]"
        },
        "index": {
          "description": "The default compression level is that is biased towards higher compression at expense of speed",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "defaultCompression",
          "package": "zlib",
          "partial": "Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default set of parameters for decompression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific parameters overridden.\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "defaultDecompressParams",
          "package": "zlib",
          "signature": "DecompressParams",
          "source": "src/Codec-Compression-Zlib-Internal.html#defaultDecompressParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultDecompressParams\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:defaultDecompressParams\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:defaultDecompressParams\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:defaultDecompressParams\"]"
        },
        "index": {
          "description": "The default set of parameters for decompression This is typically used with the compressWith function with specific parameters overridden",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "defaultDecompressParams",
          "package": "zlib",
          "partial": "Decompress Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultDecompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default memory level. (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 8\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "defaultMemoryLevel",
          "package": "zlib",
          "signature": "MemoryLevel",
          "source": "src/Codec-Compression-Zlib-Stream.html#defaultMemoryLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:defaultMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:defaultMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:defaultMemoryLevel\"]"
        },
        "index": {
          "description": "The default memory level Equivalent to memoryLevel",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "defaultMemoryLevel",
          "package": "zlib",
          "partial": "Memory Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultMemoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this default compression strategy for normal data.\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "defaultStrategy",
          "package": "zlib",
          "signature": "CompressionStrategy",
          "source": "src/Codec-Compression-Zlib-Stream.html#defaultStrategy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:defaultStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:defaultStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:defaultStrategy\"]"
        },
        "index": {
          "description": "Use this default compression strategy for normal data",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "defaultStrategy",
          "package": "zlib",
          "partial": "Strategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e is 15 which is also the maximum size.\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "defaultWindowBits",
          "package": "zlib",
          "signature": "WindowBits",
          "source": "src/Codec-Compression-Zlib-Stream.html#defaultWindowBits",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultWindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:defaultWindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:defaultWindowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:defaultWindowBits\"]"
        },
        "index": {
          "description": "The default WindowBits is which is also the maximum size",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "defaultWindowBits",
          "package": "zlib",
          "partial": "Window Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultWindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'Deflate' is the only method supported in this version of zlib.\n Indeed it is likely to be the only method that ever will be supported.\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "deflateMethod",
          "package": "zlib",
          "signature": "Method",
          "source": "src/Codec-Compression-Zlib-Stream.html#deflateMethod",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:deflateMethod\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:deflateMethod\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:deflateMethod\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:deflateMethod\"]"
        },
        "index": {
          "description": "Deflate is the only method supported in this version of zlib Indeed it is likely to be the only method that ever will be supported",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "deflateMethod",
          "package": "zlib",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:deflateMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the filtered compression strategy for data produced by a filter (or\n predictor). Filtered data consists mostly of small values with a somewhat\n random distribution. In this case, the compression algorithm is tuned to\n compress them better. The effect of this strategy is to force more Huffman\n coding and less string matching; it is somewhat intermediate between\n \u003ccode\u003edefaultCompressionStrategy\u003c/code\u003e and \u003ccode\u003ehuffmanOnlyCompressionStrategy\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "filteredStrategy",
          "package": "zlib",
          "signature": "CompressionStrategy",
          "source": "src/Codec-Compression-Zlib-Stream.html#filteredStrategy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:filteredStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:filteredStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:filteredStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:filteredStrategy\"]"
        },
        "index": {
          "description": "Use the filtered compression strategy for data produced by filter or predictor Filtered data consists mostly of small values with somewhat random distribution In this case the compression algorithm is tuned to compress them better The effect of this strategy is to force more Huffman coding and less string matching it is somewhat intermediate between defaultCompressionStrategy and huffmanOnlyCompressionStrategy",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "filteredStrategy",
          "package": "zlib",
          "partial": "Strategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:filteredStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the Huffman-only compression strategy to force Huffman encoding only\n (no string match).\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "huffmanOnlyStrategy",
          "package": "zlib",
          "signature": "CompressionStrategy",
          "source": "src/Codec-Compression-Zlib-Stream.html#huffmanOnlyStrategy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:huffmanOnlyStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:huffmanOnlyStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:huffmanOnlyStrategy\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:huffmanOnlyStrategy\"]"
        },
        "index": {
          "description": "Use the Huffman-only compression strategy to force Huffman encoding only no string match",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "huffmanOnlyStrategy",
          "package": "zlib",
          "partial": "Only Strategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:huffmanOnlyStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse maximum memory for optimal compression speed.\n (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 9\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "maxMemoryLevel",
          "package": "zlib",
          "signature": "MemoryLevel",
          "source": "src/Codec-Compression-Zlib-Stream.html#maxMemoryLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:maxMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:maxMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:maxMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:maxMemoryLevel\"]"
        },
        "index": {
          "description": "Use maximum memory for optimal compression speed Equivalent to memoryLevel",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "maxMemoryLevel",
          "package": "zlib",
          "partial": "Memory Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:maxMemoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific level in the range \u003ccode\u003e1..9\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "memoryLevel",
          "package": "zlib",
          "signature": "Int -\u003e MemoryLevel",
          "source": "src/Codec-Compression-Zlib-Stream.html#memoryLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:memoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:memoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:memoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:memoryLevel\"]"
        },
        "index": {
          "description": "specific level in the range",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "memoryLevel",
          "normalized": "Int-\u003eMemoryLevel",
          "package": "zlib",
          "partial": "Level",
          "signature": "Int-\u003eMemoryLevel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:memoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse minimum memory. This is slow and reduces the compression ratio.\n (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "minMemoryLevel",
          "package": "zlib",
          "signature": "MemoryLevel",
          "source": "src/Codec-Compression-Zlib-Stream.html#minMemoryLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:minMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:minMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:minMemoryLevel\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:minMemoryLevel\"]"
        },
        "index": {
          "description": "Use minimum memory This is slow and reduces the compression ratio Equivalent to memoryLevel",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "minMemoryLevel",
          "package": "zlib",
          "partial": "Memory Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:minMemoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo compression, just a block copy.\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "noCompression",
          "package": "zlib",
          "signature": "CompressionLevel",
          "source": "src/Codec-Compression-Zlib-Stream.html#noCompression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:noCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:noCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:noCompression\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:noCompression\"]"
        },
        "index": {
          "description": "No compression just block copy",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "noCompression",
          "package": "zlib",
          "partial": "Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:noCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific compression window size, specified in bits in the range \u003ccode\u003e8..15\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Codec.Compression.GZip\",\"Codec.Compression.Zlib.Internal\",\"Codec.Compression.Zlib.Raw\",\"Codec.Compression.Zlib\"]",
          "name": "windowBits",
          "package": "zlib",
          "signature": "Int -\u003e WindowBits",
          "source": "src/Codec-Compression-Zlib-Stream.html#windowBits",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:windowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:windowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:windowBits\",\"http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:windowBits\"]"
        },
        "index": {
          "description": "specific compression window size specified in bits in the range",
          "hierarchy": "Codec Compression GZip",
          "module": "Codec.Compression.GZip",
          "name": "windowBits",
          "normalized": "Int-\u003eWindowBits",
          "package": "zlib",
          "partial": "Bits",
          "signature": "Int-\u003eWindowBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:windowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure stream based interface to lower level zlib wrapper\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "Internal",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Pure stream based interface to lower level zlib wrapper",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "Internal",
          "package": "zlib",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full set of parameters for compression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultCompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer containing\n the compressed data. If you know an approximate upper bound on the size of\n the compressed data then setting this parameter can save memory. The default\n compression output buffer size is \u003ccode\u003e16k\u003c/code\u003e. If your extimate is wrong it does\n not matter too much, the default buffer size will be used for the remaining\n chunks.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "CompressParams",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
          "type": "data"
        },
        "index": {
          "description": "The full set of parameters for compression The defaults are defaultCompressParams The compressBufferSize is the size of the first output buffer containing the compressed data If you know an approximate upper bound on the size of the compressed data then setting this parameter can save memory The default compression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "CompressParams",
          "package": "zlib",
          "partial": "Compress Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:CompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compression level parameter controls the amount of compression. This\n is a trade-off between the amount of compression and the time required to do\n the compression.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "CompressionLevel",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
          "type": "data"
        },
        "index": {
          "description": "The compression level parameter controls the amount of compression This is trade-off between the amount of compression and the time required to do the compression",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "CompressionLevel",
          "package": "zlib",
          "partial": "Compression Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:CompressionLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy parameter is used to tune the compression algorithm.\n\u003c/p\u003e\u003cp\u003eThe strategy parameter only affects the compression ratio but not the\n correctness of the compressed output even if it is not set appropriately.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "CompressionStrategy",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
          "type": "data"
        },
        "index": {
          "description": "The strategy parameter is used to tune the compression algorithm The strategy parameter only affects the compression ratio but not the correctness of the compressed output even if it is not set appropriately",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "CompressionStrategy",
          "package": "zlib",
          "partial": "Compression Strategy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:CompressionStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible error cases when decompressing a stream.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "DecompressError",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressError",
          "type": "data"
        },
        "index": {
          "description": "The possible error cases when decompressing stream",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "DecompressError",
          "package": "zlib",
          "partial": "Decompress Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:DecompressError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full set of parameters for decompression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultDecompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer,\n containing the uncompressed data. If you know an exact or approximate upper\n bound on the size of the decompressed data then setting this parameter can\n save memory. The default decompression output buffer size is \u003ccode\u003e32k\u003c/code\u003e. If your\n extimate is wrong it does not matter too much, the default buffer size will\n be used for the remaining chunks.\n\u003c/p\u003e\u003cp\u003eOne particular use case for setting the \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is if you\n know the exact size of the decompressed data and want to produce a strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The compression and deccompression functions\n use lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es but if you set the\n \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e correctly then you can generate a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with exactly one chunk, which can be\n converted to a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eO(1)\u003c/code\u003e time using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "DecompressParams",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
          "type": "data"
        },
        "index": {
          "description": "The full set of parameters for decompression The defaults are defaultDecompressParams The decompressBufferSize is the size of the first output buffer containing the uncompressed data If you know an exact or approximate upper bound on the size of the decompressed data then setting this parameter can save memory The default decompression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks One particular use case for setting the decompressBufferSize is if you know the exact size of the decompressed data and want to produce strict ByteString The compression and deccompression functions use lazy ByteString but if you set the decompressBufferSize correctly then you can generate lazy ByteString with exactly one chunk which can be converted to strict ByteString in time using concat toChunks",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "DecompressParams",
          "package": "zlib",
          "partial": "Decompress Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:DecompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sequence of chunks of data produced from decompression.\n\u003c/p\u003e\u003cp\u003eThe difference from a simple list is that it contains a representation of\n errors as data rather than as exceptions. This allows you to handle error\n conditions explicitly.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "DecompressStream",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressStream",
          "type": "data"
        },
        "index": {
          "description": "sequence of chunks of data produced from decompression The difference from simple list is that it contains representation of errors as data rather than as exceptions This allows you to handle error conditions explicitly",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "DecompressStream",
          "package": "zlib",
          "partial": "Decompress Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:DecompressStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe format used for compression or decompression. There are three\n variations.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "Format",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#Format",
          "type": "data"
        },
        "index": {
          "description": "The format used for compression or decompression There are three variations",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "Format",
          "package": "zlib",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e parameter specifies how much memory should be allocated\n for the internal compression state. It is a tradoff between memory usage,\n compression ratio and compression speed. Using more memory allows faster\n compression and a better compression ratio.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used for compression depends on the \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e\n and the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. For decompression it depends only on the\n \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e. The totals are given by the functions:\n\u003c/p\u003e\u003cpre\u003e compressTotal windowBits memLevel = 4 * 2^windowBits + 512 * 2^memLevel\n decompressTotal windowBits = 2^windowBits\n\u003c/pre\u003e\u003cp\u003eFor example, for compression with the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e and\n \u003ccode\u003ememLevel = 8\u003c/code\u003e uses \u003ccode\u003e256Kb\u003c/code\u003e. So for example a network server with 100\n concurrent compressed streams would use \u003ccode\u003e25Mb\u003c/code\u003e. The memory per stream can be\n halved (at the cost of somewhat degraded and slower compressionby) by\n reducing the \u003ccode\u003ewindowBits\u003c/code\u003e and \u003ccode\u003ememLevel\u003c/code\u003e by one.\n\u003c/p\u003e\u003cp\u003eDecompression takes less memory, the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e corresponds\n to just \u003ccode\u003e32Kb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "MemoryLevel",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
          "type": "data"
        },
        "index": {
          "description": "The MemoryLevel parameter specifies how much memory should be allocated for the internal compression state It is tradoff between memory usage compression ratio and compression speed Using more memory allows faster compression and better compression ratio The total amount of memory used for compression depends on the WindowBits and the MemoryLevel For decompression it depends only on the WindowBits The totals are given by the functions compressTotal windowBits memLevel windowBits memLevel decompressTotal windowBits windowBits For example for compression with the default windowBits and memLevel uses Kb So for example network server with concurrent compressed streams would use Mb The memory per stream can be halved at the cost of somewhat degraded and slower compressionby by reducing the windowBits and memLevel by one Decompression takes less memory the default windowBits corresponds to just Kb",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "MemoryLevel",
          "package": "zlib",
          "partial": "Memory Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:MemoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compression method\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "Method",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#Method",
          "type": "data"
        },
        "index": {
          "description": "The compression method",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "Method",
          "package": "zlib",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis specifies the size of the compression window. Larger values of this\n parameter result in better compression at the expense of higher memory\n usage.\n\u003c/p\u003e\u003cp\u003eThe compression window size is the value of the the window bits raised to\n the power 2. The window bits must be in the range \u003ccode\u003e8..15\u003c/code\u003e which corresponds\n to compression window sizes of 256b to 32Kb. The default is 15 which is also\n the maximum size.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used depends on the window bits and the\n \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. See the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e for the details.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "WindowBits",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
          "type": "data"
        },
        "index": {
          "description": "This specifies the size of the compression window Larger values of this parameter result in better compression at the expense of higher memory usage The compression window size is the value of the the window bits raised to the power The window bits must be in the range which corresponds to compression window sizes of to Kb The default is which is also the maximum size The total amount of memory used depends on the window bits and the MemoryLevel See the MemoryLevel for the details",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "WindowBits",
          "package": "zlib",
          "partial": "Window Bits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:WindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the compressed data stream is corrupted in any way then you will\n get this error, for example if the input data just isn't a compressed\n zlib data stream. In particular if the data checksum turns out to be\n wrong then you will get all the decompressed data but this error at the\n end, instead of the normal sucessful \u003ccode\u003e\u003ca\u003eStreamEnd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "DataError",
          "package": "zlib",
          "signature": "DataError",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressError",
          "type": "function"
        },
        "index": {
          "description": "If the compressed data stream is corrupted in any way then you will get this error for example if the input data just isn compressed zlib data stream In particular if the data checksum turns out to be wrong then you will get all the decompressed data but this error at the end instead of the normal sucessful StreamEnd",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "DataError",
          "package": "zlib",
          "partial": "Data Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DataError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is possible to do zlib compression with a custom dictionary. This\n allows slightly higher compression ratios for short files. However such\n compressed streams require the same dictionary when decompressing. This\n error is for when we encounter a compressed stream that needs a\n dictionary, and it's not provided.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "DictionaryRequired",
          "package": "zlib",
          "signature": "DictionaryRequired",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressError",
          "type": "function"
        },
        "index": {
          "description": "It is possible to do zlib compression with custom dictionary This allows slightly higher compression ratios for short files However such compressed streams require the same dictionary when decompressing This error is for when we encounter compressed stream that needs dictionary and it not provided",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "DictionaryRequired",
          "package": "zlib",
          "partial": "Dictionary Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DictionaryRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use gzipFormat. Format constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "GZip",
          "package": "zlib",
          "signature": "GZip",
          "source": "src/Codec-Compression-Zlib-Stream.html#Format",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use gzipFormat Format constructors will be hidden in version",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "GZip",
          "package": "zlib",
          "partial": "GZip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:GZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use gzipOrZlibFormat. Format constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "GZipOrZlib",
          "package": "zlib",
          "signature": "GZipOrZlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#Format",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use gzipOrZlibFormat Format constructors will be hidden in version",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "GZipOrZlib",
          "package": "zlib",
          "partial": "GZip Or Zlib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:GZipOrZlib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use rawFormat. Format constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "Raw",
          "package": "zlib",
          "signature": "Raw",
          "source": "src/Codec-Compression-Zlib-Stream.html#Format",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use rawFormat Format constructors will be hidden in version",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "Raw",
          "package": "zlib",
          "partial": "Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:Raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Compression.Zlib.Internal",
          "name": "StreamChunk",
          "package": "zlib",
          "signature": "StreamChunk ByteString DecompressStream",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "StreamChunk",
          "package": "zlib",
          "partial": "Stream Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:StreamChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Compression.Zlib.Internal",
          "name": "StreamEnd",
          "package": "zlib",
          "signature": "StreamEnd",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "StreamEnd",
          "package": "zlib",
          "partial": "Stream End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:StreamEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error code and a human readable error message.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "StreamError",
          "package": "zlib",
          "signature": "StreamError DecompressError String",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressStream",
          "type": "function"
        },
        "index": {
          "description": "An error code and human readable error message",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "StreamError",
          "package": "zlib",
          "partial": "Stream Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:StreamError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compressed data stream ended prematurely. This may happen if the\n input data stream was truncated.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "TruncatedInput",
          "package": "zlib",
          "signature": "TruncatedInput",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressError",
          "type": "function"
        },
        "index": {
          "description": "The compressed data stream ended prematurely This may happen if the input data stream was truncated",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "TruncatedInput",
          "package": "zlib",
          "partial": "Truncated Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:TruncatedInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use zlibFormat. Format constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "Zlib",
          "package": "zlib",
          "signature": "Zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#Format",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use zlibFormat Format constructors will be hidden in version",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "Zlib",
          "package": "zlib",
          "partial": "Zlib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:Zlib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress a data stream.\n\u003c/p\u003e\u003cp\u003eThere are no expected error conditions. All input data streams are valid. It\n is possible for unexpected errors to occur, such as running out of memory,\n or finding the wrong version of the zlib C library, these are thrown as\n exceptions.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "compress",
          "package": "zlib",
          "signature": "Format -\u003e CompressParams -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Zlib-Internal.html#compress",
          "type": "function"
        },
        "index": {
          "description": "Compress data stream There are no expected error conditions All input data streams are valid It is possible for unexpected errors to occur such as running out of memory or finding the wrong version of the zlib library these are thrown as exceptions",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "compress",
          "normalized": "Format-\u003eCompressParams-\u003eByteString-\u003eByteString",
          "package": "zlib",
          "signature": "Format-\u003eCompressParams-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress a data stream.\n\u003c/p\u003e\u003cp\u003eIt will throw an exception if any error is encountered in the input data. If\n you need more control over error handling then use \u003ccode\u003e\u003ca\u003edecompressWithErrors\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "decompress",
          "package": "zlib",
          "signature": "Format -\u003e DecompressParams -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Zlib-Internal.html#decompress",
          "type": "function"
        },
        "index": {
          "description": "Decompress data stream It will throw an exception if any error is encountered in the input data If you need more control over error handling then use decompressWithErrors",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "decompress",
          "normalized": "Format-\u003eDecompressParams-\u003eByteString-\u003eByteString",
          "package": "zlib",
          "signature": "Format-\u003eDecompressParams-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e but returns a \u003ccode\u003e\u003ca\u003eDecompressStream\u003c/a\u003e\u003c/code\u003e data structure that\n contains an explicit representation of the error conditions that one may\n encounter when decompressing.\n\u003c/p\u003e\u003cp\u003eNote that in addition to errors in the input data, it is possible for other\n unexpected errors to occur, such as out of memory, or finding the wrong\n version of the zlib C library, these are still thrown as exceptions (because\n representing them as data would make this function impure).\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "decompressWithErrors",
          "package": "zlib",
          "signature": "Format -\u003e DecompressParams -\u003e ByteString -\u003e DecompressStream",
          "source": "src/Codec-Compression-Zlib-Internal.html#decompressWithErrors",
          "type": "function"
        },
        "index": {
          "description": "Like decompress but returns DecompressStream data structure that contains an explicit representation of the error conditions that one may encounter when decompressing Note that in addition to errors in the input data it is possible for other unexpected errors to occur such as out of memory or finding the wrong version of the zlib library these are still thrown as exceptions because representing them as data would make this function impure",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "decompressWithErrors",
          "normalized": "Format-\u003eDecompressParams-\u003eByteString-\u003eDecompressStream",
          "package": "zlib",
          "partial": "With Errors",
          "signature": "Format-\u003eDecompressParams-\u003eByteString-\u003eDecompressStream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:decompressWithErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold an \u003ccode\u003eDecompressionStream\u003c/code\u003e. Just like \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e but with an extra error\n case. For example to convert to a list and translate the errors into\n exceptions:\n\u003c/p\u003e\u003cpre\u003e foldDecompressStream (:) [] (\\code msg -\u003e error msg)\n\u003c/pre\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "foldDecompressStream",
          "package": "zlib",
          "signature": "(ByteString -\u003e a -\u003e a) -\u003e a -\u003e (DecompressError -\u003e String -\u003e a) -\u003e DecompressStream -\u003e a",
          "source": "src/Codec-Compression-Zlib-Internal.html#foldDecompressStream",
          "type": "function"
        },
        "index": {
          "description": "Fold an DecompressionStream Just like foldr but with an extra error case For example to convert to list and translate the errors into exceptions foldDecompressStream code msg error msg",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "foldDecompressStream",
          "normalized": "(ByteString-\u003ea-\u003ea)-\u003ea-\u003e(DecompressError-\u003eString-\u003ea)-\u003eDecompressStream-\u003ea",
          "package": "zlib",
          "partial": "Decompress Stream",
          "signature": "(ByteString-\u003ea-\u003ea)-\u003ea-\u003e(DecompressError-\u003eString-\u003ea)-\u003eDecompressStream-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:foldDecompressStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eDecompressStream\u003c/a\u003e\u003c/code\u003e to a lazy \u003ccode\u003eByteString\u003c/code\u003e. If any decompression\n errors are encountered then they are thrown as exceptions.\n\u003c/p\u003e\u003cp\u003eThis is a special case of \u003ccode\u003e\u003ca\u003efoldDecompressStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "fromDecompressStream",
          "package": "zlib",
          "signature": "DecompressStream -\u003e ByteString",
          "source": "src/Codec-Compression-Zlib-Internal.html#fromDecompressStream",
          "type": "function"
        },
        "index": {
          "description": "Convert DecompressStream to lazy ByteString If any decompression errors are encountered then they are thrown as exceptions This is special case of foldDecompressStream",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "fromDecompressStream",
          "normalized": "DecompressStream-\u003eByteString",
          "package": "zlib",
          "partial": "Decompress Stream",
          "signature": "DecompressStream-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:fromDecompressStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe gzip format uses a header with a checksum and some optional meta-data\n about the compressed file. It is intended primarily for compressing\n individual files but is also sometimes used for network protocols such as\n HTTP. The format is described in detail in RFC #1952\n \u003ca\u003ehttp://www.ietf.org/rfc/rfc1952.txt\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "gzipFormat",
          "package": "zlib",
          "signature": "Format",
          "source": "src/Codec-Compression-Zlib-Stream.html#gzipFormat",
          "type": "function"
        },
        "index": {
          "description": "The gzip format uses header with checksum and some optional meta-data about the compressed file It is intended primarily for compressing individual files but is also sometimes used for network protocols such as HTTP The format is described in detail in RFC http www.ietf.org rfc rfc1952.txt",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "gzipFormat",
          "package": "zlib",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:gzipFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is not a format as such. It enabled zlib or gzip decoding with\n automatic header detection. This only makes sense for decompression.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "gzipOrZlibFormat",
          "package": "zlib",
          "signature": "Format",
          "source": "src/Codec-Compression-Zlib-Stream.html#gzipOrZlibFormat",
          "type": "function"
        },
        "index": {
          "description": "This is not format as such It enabled zlib or gzip decoding with automatic header detection This only makes sense for decompression",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "gzipOrZlibFormat",
          "package": "zlib",
          "partial": "Or Zlib Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:gzipOrZlibFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 'raw' format is just the compressed data stream without any\n additional header, meta-data or data-integrity checksum. The format is\n described in detail in RFC #1951 \u003ca\u003ehttp://www.ietf.org/rfc/rfc1951.txt\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "rawFormat",
          "package": "zlib",
          "signature": "Format",
          "source": "src/Codec-Compression-Zlib-Stream.html#rawFormat",
          "type": "function"
        },
        "index": {
          "description": "The raw format is just the compressed data stream without any additional header meta-data or data-integrity checksum The format is described in detail in RFC http www.ietf.org rfc rfc1951.txt",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "rawFormat",
          "package": "zlib",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:rawFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe zlib format uses a minimal header with a checksum but no other\n meta-data. It is especially designed for use in network protocols. The\n format is described in detail in RFC #1950\n \u003ca\u003ehttp://www.ietf.org/rfc/rfc1950.txt\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "zlibFormat",
          "package": "zlib",
          "signature": "Format",
          "source": "src/Codec-Compression-Zlib-Stream.html#zlibFormat",
          "type": "function"
        },
        "index": {
          "description": "The zlib format uses minimal header with checksum but no other meta-data It is especially designed for use in network protocols The format is described in detail in RFC http www.ietf.org rfc rfc1950.txt",
          "hierarchy": "Codec Compression Zlib Internal",
          "module": "Codec.Compression.Zlib.Internal",
          "name": "zlibFormat",
          "package": "zlib",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:zlibFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompression and decompression of data streams in the raw deflate format.\n\u003c/p\u003e\u003cp\u003eThe format is described in detail in RFC #1951:\n \u003ca\u003ehttp://www.ietf.org/rfc/rfc1951.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSee also the zlib home page: \u003ca\u003ehttp://zlib.net/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "Raw",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Raw.html",
          "type": "module"
        },
        "index": {
          "description": "Compression and decompression of data streams in the raw deflate format The format is described in detail in RFC http www.ietf.org rfc rfc1951.txt See also the zlib home page http zlib.net",
          "hierarchy": "Codec Compression Zlib Raw",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "Raw",
          "package": "zlib",
          "partial": "Raw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full set of parameters for compression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultCompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer containing\n the compressed data. If you know an approximate upper bound on the size of\n the compressed data then setting this parameter can save memory. The default\n compression output buffer size is \u003ccode\u003e16k\u003c/code\u003e. If your extimate is wrong it does\n not matter too much, the default buffer size will be used for the remaining\n chunks.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "CompressParams",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
          "type": "data"
        },
        "index": {
          "description": "The full set of parameters for compression The defaults are defaultCompressParams The compressBufferSize is the size of the first output buffer containing the compressed data If you know an approximate upper bound on the size of the compressed data then setting this parameter can save memory The default compression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks",
          "hierarchy": "Codec Compression Zlib Raw",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "CompressParams",
          "package": "zlib",
          "partial": "Compress Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:CompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compression level parameter controls the amount of compression. This\n is a trade-off between the amount of compression and the time required to do\n the compression.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "CompressionLevel",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
          "type": "data"
        },
        "index": {
          "description": "The compression level parameter controls the amount of compression This is trade-off between the amount of compression and the time required to do the compression",
          "hierarchy": "Codec Compression Zlib Raw",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "CompressionLevel",
          "package": "zlib",
          "partial": "Compression Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:CompressionLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy parameter is used to tune the compression algorithm.\n\u003c/p\u003e\u003cp\u003eThe strategy parameter only affects the compression ratio but not the\n correctness of the compressed output even if it is not set appropriately.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "CompressionStrategy",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
          "type": "data"
        },
        "index": {
          "description": "The strategy parameter is used to tune the compression algorithm The strategy parameter only affects the compression ratio but not the correctness of the compressed output even if it is not set appropriately",
          "hierarchy": "Codec Compression Zlib Raw",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "CompressionStrategy",
          "package": "zlib",
          "partial": "Compression Strategy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:CompressionStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full set of parameters for decompression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultDecompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer,\n containing the uncompressed data. If you know an exact or approximate upper\n bound on the size of the decompressed data then setting this parameter can\n save memory. The default decompression output buffer size is \u003ccode\u003e32k\u003c/code\u003e. If your\n extimate is wrong it does not matter too much, the default buffer size will\n be used for the remaining chunks.\n\u003c/p\u003e\u003cp\u003eOne particular use case for setting the \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is if you\n know the exact size of the decompressed data and want to produce a strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The compression and deccompression functions\n use lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es but if you set the\n \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e correctly then you can generate a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with exactly one chunk, which can be\n converted to a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eO(1)\u003c/code\u003e time using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "DecompressParams",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
          "type": "data"
        },
        "index": {
          "description": "The full set of parameters for decompression The defaults are defaultDecompressParams The decompressBufferSize is the size of the first output buffer containing the uncompressed data If you know an exact or approximate upper bound on the size of the decompressed data then setting this parameter can save memory The default decompression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks One particular use case for setting the decompressBufferSize is if you know the exact size of the decompressed data and want to produce strict ByteString The compression and deccompression functions use lazy ByteString but if you set the decompressBufferSize correctly then you can generate lazy ByteString with exactly one chunk which can be converted to strict ByteString in time using concat toChunks",
          "hierarchy": "Codec Compression Zlib Raw",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "DecompressParams",
          "package": "zlib",
          "partial": "Decompress Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:DecompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e parameter specifies how much memory should be allocated\n for the internal compression state. It is a tradoff between memory usage,\n compression ratio and compression speed. Using more memory allows faster\n compression and a better compression ratio.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used for compression depends on the \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e\n and the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. For decompression it depends only on the\n \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e. The totals are given by the functions:\n\u003c/p\u003e\u003cpre\u003e compressTotal windowBits memLevel = 4 * 2^windowBits + 512 * 2^memLevel\n decompressTotal windowBits = 2^windowBits\n\u003c/pre\u003e\u003cp\u003eFor example, for compression with the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e and\n \u003ccode\u003ememLevel = 8\u003c/code\u003e uses \u003ccode\u003e256Kb\u003c/code\u003e. So for example a network server with 100\n concurrent compressed streams would use \u003ccode\u003e25Mb\u003c/code\u003e. The memory per stream can be\n halved (at the cost of somewhat degraded and slower compressionby) by\n reducing the \u003ccode\u003ewindowBits\u003c/code\u003e and \u003ccode\u003ememLevel\u003c/code\u003e by one.\n\u003c/p\u003e\u003cp\u003eDecompression takes less memory, the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e corresponds\n to just \u003ccode\u003e32Kb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "MemoryLevel",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
          "type": "data"
        },
        "index": {
          "description": "The MemoryLevel parameter specifies how much memory should be allocated for the internal compression state It is tradoff between memory usage compression ratio and compression speed Using more memory allows faster compression and better compression ratio The total amount of memory used for compression depends on the WindowBits and the MemoryLevel For decompression it depends only on the WindowBits The totals are given by the functions compressTotal windowBits memLevel windowBits memLevel decompressTotal windowBits windowBits For example for compression with the default windowBits and memLevel uses Kb So for example network server with concurrent compressed streams would use Mb The memory per stream can be halved at the cost of somewhat degraded and slower compressionby by reducing the windowBits and memLevel by one Decompression takes less memory the default windowBits corresponds to just Kb",
          "hierarchy": "Codec Compression Zlib Raw",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "MemoryLevel",
          "package": "zlib",
          "partial": "Memory Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:MemoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compression method\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "Method",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#Method",
          "type": "data"
        },
        "index": {
          "description": "The compression method",
          "hierarchy": "Codec Compression Zlib Raw",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "Method",
          "package": "zlib",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis specifies the size of the compression window. Larger values of this\n parameter result in better compression at the expense of higher memory\n usage.\n\u003c/p\u003e\u003cp\u003eThe compression window size is the value of the the window bits raised to\n the power 2. The window bits must be in the range \u003ccode\u003e8..15\u003c/code\u003e which corresponds\n to compression window sizes of 256b to 32Kb. The default is 15 which is also\n the maximum size.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used depends on the window bits and the\n \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. See the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e for the details.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "WindowBits",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
          "type": "data"
        },
        "index": {
          "description": "This specifies the size of the compression window Larger values of this parameter result in better compression at the expense of higher memory usage The compression window size is the value of the the window bits raised to the power The window bits must be in the range which corresponds to compression window sizes of to Kb The default is which is also the maximum size The total amount of memory used depends on the window bits and the MemoryLevel See the MemoryLevel for the details",
          "hierarchy": "Codec Compression Zlib Raw",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "WindowBits",
          "package": "zlib",
          "partial": "Window Bits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:WindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Compression.Zlib.Raw",
          "name": "compress",
          "package": "zlib",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Zlib-Raw.html#compress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Compression Zlib Raw",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "compress",
          "normalized": "ByteString-\u003eByteString",
          "package": "zlib",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Compression.Zlib.Raw",
          "name": "compressWith",
          "package": "zlib",
          "signature": "CompressParams -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Zlib-Raw.html#compressWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Compression Zlib Raw",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "compressWith",
          "normalized": "CompressParams-\u003eByteString-\u003eByteString",
          "package": "zlib",
          "partial": "With",
          "signature": "CompressParams-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Compression.Zlib.Raw",
          "name": "decompress",
          "package": "zlib",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Zlib-Raw.html#decompress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Compression Zlib Raw",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "decompress",
          "normalized": "ByteString-\u003eByteString",
          "package": "zlib",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Compression.Zlib.Raw",
          "name": "decompressWith",
          "package": "zlib",
          "signature": "DecompressParams -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Zlib-Raw.html#decompressWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Compression Zlib Raw",
          "module": "Codec.Compression.Zlib.Raw",
          "name": "decompressWith",
          "normalized": "DecompressParams-\u003eByteString-\u003eByteString",
          "package": "zlib",
          "partial": "With",
          "signature": "DecompressParams-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:decompressWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompression and decompression of data streams in the zlib format.\n\u003c/p\u003e\u003cp\u003eThe format is described in detail in RFC #1950:\n \u003ca\u003ehttp://www.ietf.org/rfc/rfc1950.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSee also the zlib home page: \u003ca\u003ehttp://zlib.net/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Compression.Zlib",
          "name": "Zlib",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib.html",
          "type": "module"
        },
        "index": {
          "description": "Compression and decompression of data streams in the zlib format The format is described in detail in RFC http www.ietf.org rfc rfc1950.txt See also the zlib home page http zlib.net",
          "hierarchy": "Codec Compression Zlib",
          "module": "Codec.Compression.Zlib",
          "name": "Zlib",
          "package": "zlib",
          "partial": "Zlib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full set of parameters for compression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultCompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer containing\n the compressed data. If you know an approximate upper bound on the size of\n the compressed data then setting this parameter can save memory. The default\n compression output buffer size is \u003ccode\u003e16k\u003c/code\u003e. If your extimate is wrong it does\n not matter too much, the default buffer size will be used for the remaining\n chunks.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib",
          "name": "CompressParams",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
          "type": "data"
        },
        "index": {
          "description": "The full set of parameters for compression The defaults are defaultCompressParams The compressBufferSize is the size of the first output buffer containing the compressed data If you know an approximate upper bound on the size of the compressed data then setting this parameter can save memory The default compression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks",
          "hierarchy": "Codec Compression Zlib",
          "module": "Codec.Compression.Zlib",
          "name": "CompressParams",
          "package": "zlib",
          "partial": "Compress Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:CompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compression level parameter controls the amount of compression. This\n is a trade-off between the amount of compression and the time required to do\n the compression.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib",
          "name": "CompressionLevel",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
          "type": "data"
        },
        "index": {
          "description": "The compression level parameter controls the amount of compression This is trade-off between the amount of compression and the time required to do the compression",
          "hierarchy": "Codec Compression Zlib",
          "module": "Codec.Compression.Zlib",
          "name": "CompressionLevel",
          "package": "zlib",
          "partial": "Compression Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:CompressionLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy parameter is used to tune the compression algorithm.\n\u003c/p\u003e\u003cp\u003eThe strategy parameter only affects the compression ratio but not the\n correctness of the compressed output even if it is not set appropriately.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib",
          "name": "CompressionStrategy",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
          "type": "data"
        },
        "index": {
          "description": "The strategy parameter is used to tune the compression algorithm The strategy parameter only affects the compression ratio but not the correctness of the compressed output even if it is not set appropriately",
          "hierarchy": "Codec Compression Zlib",
          "module": "Codec.Compression.Zlib",
          "name": "CompressionStrategy",
          "package": "zlib",
          "partial": "Compression Strategy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:CompressionStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full set of parameters for decompression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultDecompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer,\n containing the uncompressed data. If you know an exact or approximate upper\n bound on the size of the decompressed data then setting this parameter can\n save memory. The default decompression output buffer size is \u003ccode\u003e32k\u003c/code\u003e. If your\n extimate is wrong it does not matter too much, the default buffer size will\n be used for the remaining chunks.\n\u003c/p\u003e\u003cp\u003eOne particular use case for setting the \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is if you\n know the exact size of the decompressed data and want to produce a strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The compression and deccompression functions\n use lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es but if you set the\n \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e correctly then you can generate a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with exactly one chunk, which can be\n converted to a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eO(1)\u003c/code\u003e time using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib",
          "name": "DecompressParams",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
          "type": "data"
        },
        "index": {
          "description": "The full set of parameters for decompression The defaults are defaultDecompressParams The decompressBufferSize is the size of the first output buffer containing the uncompressed data If you know an exact or approximate upper bound on the size of the decompressed data then setting this parameter can save memory The default decompression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks One particular use case for setting the decompressBufferSize is if you know the exact size of the decompressed data and want to produce strict ByteString The compression and deccompression functions use lazy ByteString but if you set the decompressBufferSize correctly then you can generate lazy ByteString with exactly one chunk which can be converted to strict ByteString in time using concat toChunks",
          "hierarchy": "Codec Compression Zlib",
          "module": "Codec.Compression.Zlib",
          "name": "DecompressParams",
          "package": "zlib",
          "partial": "Decompress Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:DecompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e parameter specifies how much memory should be allocated\n for the internal compression state. It is a tradoff between memory usage,\n compression ratio and compression speed. Using more memory allows faster\n compression and a better compression ratio.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used for compression depends on the \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e\n and the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. For decompression it depends only on the\n \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e. The totals are given by the functions:\n\u003c/p\u003e\u003cpre\u003e compressTotal windowBits memLevel = 4 * 2^windowBits + 512 * 2^memLevel\n decompressTotal windowBits = 2^windowBits\n\u003c/pre\u003e\u003cp\u003eFor example, for compression with the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e and\n \u003ccode\u003ememLevel = 8\u003c/code\u003e uses \u003ccode\u003e256Kb\u003c/code\u003e. So for example a network server with 100\n concurrent compressed streams would use \u003ccode\u003e25Mb\u003c/code\u003e. The memory per stream can be\n halved (at the cost of somewhat degraded and slower compressionby) by\n reducing the \u003ccode\u003ewindowBits\u003c/code\u003e and \u003ccode\u003ememLevel\u003c/code\u003e by one.\n\u003c/p\u003e\u003cp\u003eDecompression takes less memory, the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e corresponds\n to just \u003ccode\u003e32Kb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib",
          "name": "MemoryLevel",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
          "type": "data"
        },
        "index": {
          "description": "The MemoryLevel parameter specifies how much memory should be allocated for the internal compression state It is tradoff between memory usage compression ratio and compression speed Using more memory allows faster compression and better compression ratio The total amount of memory used for compression depends on the WindowBits and the MemoryLevel For decompression it depends only on the WindowBits The totals are given by the functions compressTotal windowBits memLevel windowBits memLevel decompressTotal windowBits windowBits For example for compression with the default windowBits and memLevel uses Kb So for example network server with concurrent compressed streams would use Mb The memory per stream can be halved at the cost of somewhat degraded and slower compressionby by reducing the windowBits and memLevel by one Decompression takes less memory the default windowBits corresponds to just Kb",
          "hierarchy": "Codec Compression Zlib",
          "module": "Codec.Compression.Zlib",
          "name": "MemoryLevel",
          "package": "zlib",
          "partial": "Memory Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:MemoryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compression method\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib",
          "name": "Method",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#Method",
          "type": "data"
        },
        "index": {
          "description": "The compression method",
          "hierarchy": "Codec Compression Zlib",
          "module": "Codec.Compression.Zlib",
          "name": "Method",
          "package": "zlib",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis specifies the size of the compression window. Larger values of this\n parameter result in better compression at the expense of higher memory\n usage.\n\u003c/p\u003e\u003cp\u003eThe compression window size is the value of the the window bits raised to\n the power 2. The window bits must be in the range \u003ccode\u003e8..15\u003c/code\u003e which corresponds\n to compression window sizes of 256b to 32Kb. The default is 15 which is also\n the maximum size.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used depends on the window bits and the\n \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. See the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e for the details.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib",
          "name": "WindowBits",
          "package": "zlib",
          "source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
          "type": "data"
        },
        "index": {
          "description": "This specifies the size of the compression window Larger values of this parameter result in better compression at the expense of higher memory usage The compression window size is the value of the the window bits raised to the power The window bits must be in the range which corresponds to compression window sizes of to Kb The default is which is also the maximum size The total amount of memory used depends on the window bits and the MemoryLevel See the MemoryLevel for the details",
          "hierarchy": "Codec Compression Zlib",
          "module": "Codec.Compression.Zlib",
          "name": "WindowBits",
          "package": "zlib",
          "partial": "Window Bits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:WindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress a stream of data into the zlib format.\n\u003c/p\u003e\u003cp\u003eThis uses the default compression parameters. In partiular it uses the\n default compression level which favours a higher compression ratio over\n compression speed, though it does not use the maximum compression level.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ecompressWith\u003c/a\u003e\u003c/code\u003e to adjust the compression level or other compression\n parameters.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib",
          "name": "compress",
          "package": "zlib",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Zlib.html#compress",
          "type": "function"
        },
        "index": {
          "description": "Compress stream of data into the zlib format This uses the default compression parameters In partiular it uses the default compression level which favours higher compression ratio over compression speed though it does not use the maximum compression level Use compressWith to adjust the compression level or other compression parameters",
          "hierarchy": "Codec Compression Zlib",
          "module": "Codec.Compression.Zlib",
          "name": "compress",
          "normalized": "ByteString-\u003eByteString",
          "package": "zlib",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecompress\u003c/a\u003e\u003c/code\u003e but with the ability to specify various compression\n parameters. Typical usage:\n\u003c/p\u003e\u003cpre\u003e compressWith defaultCompressParams { ... }\n\u003c/pre\u003e\u003cp\u003eIn particular you can set the compression level:\n\u003c/p\u003e\u003cpre\u003e compressWith defaultCompressParams { compressLevel = BestCompression }\n\u003c/pre\u003e",
          "module": "Codec.Compression.Zlib",
          "name": "compressWith",
          "package": "zlib",
          "signature": "CompressParams -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Zlib.html#compressWith",
          "type": "function"
        },
        "index": {
          "description": "Like compress but with the ability to specify various compression parameters Typical usage compressWith defaultCompressParams In particular you can set the compression level compressWith defaultCompressParams compressLevel BestCompression",
          "hierarchy": "Codec Compression Zlib",
          "module": "Codec.Compression.Zlib",
          "name": "compressWith",
          "normalized": "CompressParams-\u003eByteString-\u003eByteString",
          "package": "zlib",
          "partial": "With",
          "signature": "CompressParams-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress a stream of data in the zlib format.\n\u003c/p\u003e\u003cp\u003eThere are a number of errors that can occur. In each case an exception will\n be thrown. The possible error conditions are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if the stream does not start with a valid gzip header\n\u003c/li\u003e\u003cli\u003e if the compressed stream is corrupted\n\u003c/li\u003e\u003cli\u003e if the compressed stream ends permaturely\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that the decompression is performed \u003cem\u003elazily\u003c/em\u003e. Errors in the data stream\n may not be detected until the end of the stream is demanded (since it is\n only at the end that the final checksum can be checked). If this is\n important to you, you must make sure to consume the whole decompressed\n stream before doing any IO action that depends on it.\n\u003c/p\u003e",
          "module": "Codec.Compression.Zlib",
          "name": "decompress",
          "package": "zlib",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Zlib.html#decompress",
          "type": "function"
        },
        "index": {
          "description": "Decompress stream of data in the zlib format There are number of errors that can occur In each case an exception will be thrown The possible error conditions are if the stream does not start with valid gzip header if the compressed stream is corrupted if the compressed stream ends permaturely Note that the decompression is performed lazily Errors in the data stream may not be detected until the end of the stream is demanded since it is only at the end that the final checksum can be checked If this is important to you you must make sure to consume the whole decompressed stream before doing any IO action that depends on it",
          "hierarchy": "Codec Compression Zlib",
          "module": "Codec.Compression.Zlib",
          "name": "decompress",
          "normalized": "ByteString-\u003eByteString",
          "package": "zlib",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e but with the ability to specify various decompression\n parameters. Typical usage:\n\u003c/p\u003e\u003cpre\u003e decompressWith defaultCompressParams { ... }\n\u003c/pre\u003e",
          "module": "Codec.Compression.Zlib",
          "name": "decompressWith",
          "package": "zlib",
          "signature": "DecompressParams -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-Compression-Zlib.html#decompressWith",
          "type": "function"
        },
        "index": {
          "description": "Like decompress but with the ability to specify various decompression parameters Typical usage decompressWith defaultCompressParams",
          "hierarchy": "Codec Compression Zlib",
          "module": "Codec.Compression.Zlib",
          "name": "decompressWith",
          "normalized": "DecompressParams-\u003eByteString-\u003eByteString",
          "package": "zlib",
          "partial": "With",
          "signature": "DecompressParams-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:decompressWith"
      }
    }
  ]
]