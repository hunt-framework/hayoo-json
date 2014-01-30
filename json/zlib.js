[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompression and decompression of data streams in the gzip format.\n\u003c/p\u003e\u003cp\u003eThe format is described in detail in RFC #1952:\n \u003ca\u003ehttp://www.ietf.org/rfc/rfc1952.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSee also the zlib home page: \u003ca\u003ehttp://zlib.net/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "module",
        "fct-source": "src/Codec-Compression-GZip.html",
        "fct-type": "module",
        "title": "GZip"
      },
      "index": {
        "description": "Compression and decompression of data streams in the gzip format The format is described in detail in RFC http www.ietf.org rfc rfc1952.txt See also the zlib home page http zlib.net",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "GZip",
        "normalized": "",
        "package": "zlib",
        "partial": "GZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:CompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe full set of parameters for compression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultCompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer containing\n the compressed data. If you know an approximate upper bound on the size of\n the compressed data then setting this parameter can save memory. The default\n compression output buffer size is \u003ccode\u003e16k\u003c/code\u003e. If your extimate is wrong it does\n not matter too much, the default buffer size will be used for the remaining\n chunks.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "data",
        "title": "CompressParams"
      },
      "index": {
        "description": "The full set of parameters for compression The defaults are defaultCompressParams The compressBufferSize is the size of the first output buffer containing the compressed data If you know an approximate upper bound on the size of the compressed data then setting this parameter can save memory The default compression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "CompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:CompressionLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe compression level parameter controls the amount of compression. This\n is a trade-off between the amount of compression and the time required to do\n the compression.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "data",
        "title": "CompressionLevel"
      },
      "index": {
        "description": "The compression level parameter controls the amount of compression This is trade-off between the amount of compression and the time required to do the compression",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "CompressionLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:CompressionStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eThe strategy parameter is used to tune the compression algorithm.\n\u003c/p\u003e\u003cp\u003eThe strategy parameter only affects the compression ratio but not the\n correctness of the compressed output even if it is not set appropriately.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "data",
        "title": "CompressionStrategy"
      },
      "index": {
        "description": "The strategy parameter is used to tune the compression algorithm The strategy parameter only affects the compression ratio but not the correctness of the compressed output even if it is not set appropriately",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "CompressionStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:DecompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe full set of parameters for decompression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultDecompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer,\n containing the uncompressed data. If you know an exact or approximate upper\n bound on the size of the decompressed data then setting this parameter can\n save memory. The default decompression output buffer size is \u003ccode\u003e32k\u003c/code\u003e. If your\n extimate is wrong it does not matter too much, the default buffer size will\n be used for the remaining chunks.\n\u003c/p\u003e\u003cp\u003eOne particular use case for setting the \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is if you\n know the exact size of the decompressed data and want to produce a strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The compression and deccompression functions\n use lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es but if you set the\n \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e correctly then you can generate a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with exactly one chunk, which can be\n converted to a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eO(1)\u003c/code\u003e time using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "data",
        "title": "DecompressParams"
      },
      "index": {
        "description": "The full set of parameters for decompression The defaults are defaultDecompressParams The decompressBufferSize is the size of the first output buffer containing the uncompressed data If you know an exact or approximate upper bound on the size of the decompressed data then setting this parameter can save memory The default decompression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks One particular use case for setting the decompressBufferSize is if you know the exact size of the decompressed data and want to produce strict ByteString The compression and deccompression functions use lazy ByteString but if you set the decompressBufferSize correctly then you can generate lazy ByteString with exactly one chunk which can be converted to strict ByteString in time using concat toChunks",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "DecompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:MemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e parameter specifies how much memory should be allocated\n for the internal compression state. It is a tradoff between memory usage,\n compression ratio and compression speed. Using more memory allows faster\n compression and a better compression ratio.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used for compression depends on the \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e\n and the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. For decompression it depends only on the\n \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e. The totals are given by the functions:\n\u003c/p\u003e\u003cpre\u003e compressTotal windowBits memLevel = 4 * 2^windowBits + 512 * 2^memLevel\n decompressTotal windowBits = 2^windowBits\n\u003c/pre\u003e\u003cp\u003eFor example, for compression with the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e and\n \u003ccode\u003ememLevel = 8\u003c/code\u003e uses \u003ccode\u003e256Kb\u003c/code\u003e. So for example a network server with 100\n concurrent compressed streams would use \u003ccode\u003e25Mb\u003c/code\u003e. The memory per stream can be\n halved (at the cost of somewhat degraded and slower compressionby) by\n reducing the \u003ccode\u003ewindowBits\u003c/code\u003e and \u003ccode\u003ememLevel\u003c/code\u003e by one.\n\u003c/p\u003e\u003cp\u003eDecompression takes less memory, the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e corresponds\n to just \u003ccode\u003e32Kb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "data",
        "title": "MemoryLevel"
      },
      "index": {
        "description": "The MemoryLevel parameter specifies how much memory should be allocated for the internal compression state It is tradoff between memory usage compression ratio and compression speed Using more memory allows faster compression and better compression ratio The total amount of memory used for compression depends on the WindowBits and the MemoryLevel For decompression it depends only on the WindowBits The totals are given by the functions compressTotal windowBits memLevel windowBits memLevel decompressTotal windowBits windowBits For example for compression with the default windowBits and memLevel uses Kb So for example network server with concurrent compressed streams would use Mb The memory per stream can be halved at the cost of somewhat degraded and slower compressionby by reducing the windowBits and memLevel by one Decompression takes less memory the default windowBits corresponds to just Kb",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "MemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:Method",
      "description": {
        "fct-descr": "\u003cp\u003eThe compression method\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Method",
        "fct-type": "data",
        "title": "Method"
      },
      "index": {
        "description": "The compression method",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "Method",
        "normalized": "",
        "package": "zlib",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#t:WindowBits",
      "description": {
        "fct-descr": "\u003cp\u003eThis specifies the size of the compression window. Larger values of this\n parameter result in better compression at the expense of higher memory\n usage.\n\u003c/p\u003e\u003cp\u003eThe compression window size is the value of the the window bits raised to\n the power 2. The window bits must be in the range \u003ccode\u003e8..15\u003c/code\u003e which corresponds\n to compression window sizes of 256b to 32Kb. The default is 15 which is also\n the maximum size.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used depends on the window bits and the\n \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. See the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e for the details.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
        "fct-type": "data",
        "title": "WindowBits"
      },
      "index": {
        "description": "This specifies the size of the compression window Larger values of this parameter result in better compression at the expense of higher memory usage The compression window size is the value of the the window bits raised to the power The window bits must be in the range which corresponds to compression window sizes of to Kb The default is which is also the maximum size The total amount of memory used depends on the window bits and the MemoryLevel See the MemoryLevel for the details",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "WindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:BestCompression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use bestCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "BestCompression",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "BestCompression"
      },
      "index": {
        "description": "Deprecated Use bestCompression CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "BestCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Best Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:BestSpeed",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use bestSpeed. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "BestSpeed",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "BestSpeed"
      },
      "index": {
        "description": "Deprecated Use bestSpeed CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "BestSpeed",
        "normalized": "",
        "package": "zlib",
        "partial": "Best Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:CompressParams",
      "description": {
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "CompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "CompressParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "CompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:CompressionLevel",
      "description": {
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel Int",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "CompressionLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "CompressionLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DecompressParams",
      "description": {
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "DecompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "DecompressParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "DecompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DefaultCompression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "DefaultCompression",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "DefaultCompression"
      },
      "index": {
        "description": "Deprecated Use defaultCompression CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "DefaultCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DefaultMemoryLevel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "DefaultMemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "DefaultMemoryLevel"
      },
      "index": {
        "description": "Deprecated Use defaultMemoryLevel MemoryLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "DefaultMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DefaultStrategy",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "DefaultStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "function",
        "title": "DefaultStrategy"
      },
      "index": {
        "description": "Deprecated Use defaultStrategy CompressionStrategy constructors will be hidden in version",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "DefaultStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:DefaultWindowBits",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultWindowBits. WindowBits constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "DefaultWindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
        "fct-type": "function",
        "title": "DefaultWindowBits"
      },
      "index": {
        "description": "Deprecated Use defaultWindowBits WindowBits constructors will be hidden in version",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "DefaultWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:Deflated",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use deflateMethod. Method constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "Deflated",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Method",
        "fct-type": "function",
        "title": "Deflated"
      },
      "index": {
        "description": "Deprecated Use deflateMethod Method constructors will be hidden in version",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "Deflated",
        "normalized": "",
        "package": "zlib",
        "partial": "Deflated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:Filtered",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use filteredStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "Filtered",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "function",
        "title": "Filtered"
      },
      "index": {
        "description": "Deprecated Use filteredStrategy CompressionStrategy constructors will be hidden in version",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "Filtered",
        "normalized": "",
        "package": "zlib",
        "partial": "Filtered",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:HuffmanOnly",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use huffmanOnlyStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "HuffmanOnly",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "function",
        "title": "HuffmanOnly"
      },
      "index": {
        "description": "Deprecated Use huffmanOnlyStrategy CompressionStrategy constructors will be hidden in version",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "HuffmanOnly",
        "normalized": "",
        "package": "zlib",
        "partial": "Huffman Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:MaxMemoryLevel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use maxMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "MaxMemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MaxMemoryLevel"
      },
      "index": {
        "description": "Deprecated Use maxMemoryLevel MemoryLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "MaxMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Max Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:MemoryLevel",
      "description": {
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel Int",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MemoryLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "MemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:MinMemoryLevel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use minMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "MinMemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MinMemoryLevel"
      },
      "index": {
        "description": "Deprecated Use minMemoryLevel MemoryLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "MinMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Min Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:NoCompression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use noCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "NoCompression",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "NoCompression"
      },
      "index": {
        "description": "Deprecated Use noCompression CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "NoCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "No Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:WindowBits",
      "description": {
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "WindowBits Int",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
        "fct-type": "function",
        "title": "WindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "WindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:bestCompression",
      "description": {
        "fct-descr": "\u003cp\u003eThe slowest compression method (best compression).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#bestCompression",
        "fct-type": "function",
        "title": "bestCompression"
      },
      "index": {
        "description": "The slowest compression method best compression",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "bestCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:bestSpeed",
      "description": {
        "fct-descr": "\u003cp\u003eThe fastest compression method (less compression)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#bestSpeed",
        "fct-type": "function",
        "title": "bestSpeed"
      },
      "index": {
        "description": "The fastest compression method less compression",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "bestSpeed",
        "normalized": "",
        "package": "zlib",
        "partial": "Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompress a stream of data into the gzip format.\n\u003c/p\u003e\u003cp\u003eThis uses the default compression parameters. In partiular it uses the\n default compression level which favours a higher compression ratio over\n compression speed, though it does not use the maximum compression level.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ecompressWith\u003c/a\u003e\u003c/code\u003e to adjust the compression level or other compression\n parameters.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-GZip.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Compress stream of data into the gzip format This uses the default compression parameters In partiular it uses the default compression level which favours higher compression ratio over compression speed though it does not use the maximum compression level Use compressWith to adjust the compression level or other compression parameters",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "compress",
        "normalized": "ByteString-\u003eByteString",
        "package": "zlib",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressBufferSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressBufferSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "compressBufferSize",
        "normalized": "",
        "package": "zlib",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressDictionary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressDictionary"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "compressDictionary",
        "normalized": "",
        "package": "zlib",
        "partial": "Dictionary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "!CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "compressLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressMemoryLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "!MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressMemoryLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "compressMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "!Method",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "compressMethod",
        "normalized": "",
        "package": "zlib",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressStrategy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "!CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressStrategy"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "compressStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressWindowBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "!WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressWindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "compressWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecompress\u003c/a\u003e\u003c/code\u003e but with the ability to specify various compression\n parameters. Typical usage:\n\u003c/p\u003e\u003cpre\u003e compressWith defaultCompressParams { ... }\n\u003c/pre\u003e\u003cp\u003eIn particular you can set the compression level:\n\u003c/p\u003e\u003cpre\u003e compressWith defaultCompressParams { compressLevel = BestCompression }\n\u003c/pre\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "CompressParams -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-GZip.html#compressWith",
        "fct-type": "function",
        "title": "compressWith"
      },
      "index": {
        "description": "Like compress but with the ability to specify various compression parameters Typical usage compressWith defaultCompressParams In particular you can set the compression level compressWith defaultCompressParams compressLevel BestCompression",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "compressWith",
        "normalized": "CompressParams-\u003eByteString-\u003eByteString",
        "package": "zlib",
        "partial": "With",
        "signature": "CompressParams-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:compressionLevel",
      "description": {
        "fct-descr": "\u003cp\u003eA specific compression level between 0 and 9.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "Int -\u003e CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#compressionLevel",
        "fct-type": "function",
        "title": "compressionLevel"
      },
      "index": {
        "description": "specific compression level between and",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "compressionLevel",
        "normalized": "Int-\u003eCompressionLevel",
        "package": "zlib",
        "partial": "Level",
        "signature": "Int-\u003eCompressionLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress a stream of data in the gzip format.\n\u003c/p\u003e\u003cp\u003eThere are a number of errors that can occur. In each case an exception will\n be thrown. The possible error conditions are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if the stream does not start with a valid gzip header\n\u003c/li\u003e\u003cli\u003e if the compressed stream is corrupted\n\u003c/li\u003e\u003cli\u003e if the compressed stream ends permaturely\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that the decompression is performed \u003cem\u003elazily\u003c/em\u003e. Errors in the data stream\n may not be detected until the end of the stream is demanded (since it is\n only at the end that the final checksum can be checked). If this is\n important to you, you must make sure to consume the whole decompressed\n stream before doing any IO action that depends on it.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-GZip.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompress stream of data in the gzip format There are number of errors that can occur In each case an exception will be thrown The possible error conditions are if the stream does not start with valid gzip header if the compressed stream is corrupted if the compressed stream ends permaturely Note that the decompression is performed lazily Errors in the data stream may not be detected until the end of the stream is demanded since it is only at the end that the final checksum can be checked If this is important to you you must make sure to consume the whole decompressed stream before doing any IO action that depends on it",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "decompress",
        "normalized": "ByteString-\u003eByteString",
        "package": "zlib",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompressBufferSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressBufferSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "decompressBufferSize",
        "normalized": "",
        "package": "zlib",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompressDictionary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressDictionary"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "decompressDictionary",
        "normalized": "",
        "package": "zlib",
        "partial": "Dictionary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompressWindowBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "!WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressWindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "decompressWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:decompressWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e but with the ability to specify various decompression\n parameters. Typical usage:\n\u003c/p\u003e\u003cpre\u003e decompressWith defaultCompressParams { ... }\n\u003c/pre\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "DecompressParams -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-GZip.html#decompressWith",
        "fct-type": "function",
        "title": "decompressWith"
      },
      "index": {
        "description": "Like decompress but with the ability to specify various decompression parameters Typical usage decompressWith defaultCompressParams",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "decompressWith",
        "normalized": "DecompressParams-\u003eByteString-\u003eByteString",
        "package": "zlib",
        "partial": "With",
        "signature": "DecompressParams-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultCompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of parameters for compression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific parameters overridden.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "CompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#defaultCompressParams",
        "fct-type": "function",
        "title": "defaultCompressParams"
      },
      "index": {
        "description": "The default set of parameters for compression This is typically used with the compressWith function with specific parameters overridden",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "defaultCompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultCompression",
      "description": {
        "fct-descr": "\u003cp\u003eThe default compression level is 6 (that is, biased towards higher\n compression at expense of speed).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultCompression",
        "fct-type": "function",
        "title": "defaultCompression"
      },
      "index": {
        "description": "The default compression level is that is biased towards higher compression at expense of speed",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "defaultCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultDecompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of parameters for decompression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific parameters overridden.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "DecompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#defaultDecompressParams",
        "fct-type": "function",
        "title": "defaultDecompressParams"
      },
      "index": {
        "description": "The default set of parameters for decompression This is typically used with the compressWith function with specific parameters overridden",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "defaultDecompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe default memory level. (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 8\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultMemoryLevel",
        "fct-type": "function",
        "title": "defaultMemoryLevel"
      },
      "index": {
        "description": "The default memory level Equivalent to memoryLevel",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "defaultMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse this default compression strategy for normal data.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultStrategy",
        "fct-type": "function",
        "title": "defaultStrategy"
      },
      "index": {
        "description": "Use this default compression strategy for normal data",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "defaultStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:defaultWindowBits",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e is 15 which is also the maximum size.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultWindowBits",
        "fct-type": "function",
        "title": "defaultWindowBits"
      },
      "index": {
        "description": "The default WindowBits is which is also the maximum size",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "defaultWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:deflateMethod",
      "description": {
        "fct-descr": "\u003cp\u003e'Deflate' is the only method supported in this version of zlib.\n Indeed it is likely to be the only method that ever will be supported.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "Method",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#deflateMethod",
        "fct-type": "function",
        "title": "deflateMethod"
      },
      "index": {
        "description": "Deflate is the only method supported in this version of zlib Indeed it is likely to be the only method that ever will be supported",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "deflateMethod",
        "normalized": "",
        "package": "zlib",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:filteredStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse the filtered compression strategy for data produced by a filter (or\n predictor). Filtered data consists mostly of small values with a somewhat\n random distribution. In this case, the compression algorithm is tuned to\n compress them better. The effect of this strategy is to force more Huffman\n coding and less string matching; it is somewhat intermediate between\n \u003ccode\u003edefaultCompressionStrategy\u003c/code\u003e and \u003ccode\u003ehuffmanOnlyCompressionStrategy\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#filteredStrategy",
        "fct-type": "function",
        "title": "filteredStrategy"
      },
      "index": {
        "description": "Use the filtered compression strategy for data produced by filter or predictor Filtered data consists mostly of small values with somewhat random distribution In this case the compression algorithm is tuned to compress them better The effect of this strategy is to force more Huffman coding and less string matching it is somewhat intermediate between defaultCompressionStrategy and huffmanOnlyCompressionStrategy",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "filteredStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:huffmanOnlyStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse the Huffman-only compression strategy to force Huffman encoding only\n (no string match).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#huffmanOnlyStrategy",
        "fct-type": "function",
        "title": "huffmanOnlyStrategy"
      },
      "index": {
        "description": "Use the Huffman-only compression strategy to force Huffman encoding only no string match",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "huffmanOnlyStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Only Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:maxMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eUse maximum memory for optimal compression speed.\n (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 9\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#maxMemoryLevel",
        "fct-type": "function",
        "title": "maxMemoryLevel"
      },
      "index": {
        "description": "Use maximum memory for optimal compression speed Equivalent to memoryLevel",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "maxMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:memoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eA specific level in the range \u003ccode\u003e1..9\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "Int -\u003e MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#memoryLevel",
        "fct-type": "function",
        "title": "memoryLevel"
      },
      "index": {
        "description": "specific level in the range",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "memoryLevel",
        "normalized": "Int-\u003eMemoryLevel",
        "package": "zlib",
        "partial": "Level",
        "signature": "Int-\u003eMemoryLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:minMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eUse minimum memory. This is slow and reduces the compression ratio.\n (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#minMemoryLevel",
        "fct-type": "function",
        "title": "minMemoryLevel"
      },
      "index": {
        "description": "Use minimum memory This is slow and reduces the compression ratio Equivalent to memoryLevel",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "minMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:noCompression",
      "description": {
        "fct-descr": "\u003cp\u003eNo compression, just a block copy.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#noCompression",
        "fct-type": "function",
        "title": "noCompression"
      },
      "index": {
        "description": "No compression just block copy",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "noCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-GZip.html#v:windowBits",
      "description": {
        "fct-descr": "\u003cp\u003eA specific compression window size, specified in bits in the range \u003ccode\u003e8..15\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.GZip",
        "fct-package": "zlib",
        "fct-signature": "Int -\u003e WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#windowBits",
        "fct-type": "function",
        "title": "windowBits"
      },
      "index": {
        "description": "specific compression window size specified in bits in the range",
        "hierarchy": "Codec Compression GZip",
        "module": "Codec.Compression.GZip",
        "name": "windowBits",
        "normalized": "Int-\u003eWindowBits",
        "package": "zlib",
        "partial": "Bits",
        "signature": "Int-\u003eWindowBits"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure stream based interface to lower level zlib wrapper\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "module",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Pure stream based interface to lower level zlib wrapper",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "zlib",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:CompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe full set of parameters for compression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultCompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer containing\n the compressed data. If you know an approximate upper bound on the size of\n the compressed data then setting this parameter can save memory. The default\n compression output buffer size is \u003ccode\u003e16k\u003c/code\u003e. If your extimate is wrong it does\n not matter too much, the default buffer size will be used for the remaining\n chunks.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "data",
        "title": "CompressParams"
      },
      "index": {
        "description": "The full set of parameters for compression The defaults are defaultCompressParams The compressBufferSize is the size of the first output buffer containing the compressed data If you know an approximate upper bound on the size of the compressed data then setting this parameter can save memory The default compression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "CompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:CompressionLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe compression level parameter controls the amount of compression. This\n is a trade-off between the amount of compression and the time required to do\n the compression.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "data",
        "title": "CompressionLevel"
      },
      "index": {
        "description": "The compression level parameter controls the amount of compression This is trade-off between the amount of compression and the time required to do the compression",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "CompressionLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:CompressionStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eThe strategy parameter is used to tune the compression algorithm.\n\u003c/p\u003e\u003cp\u003eThe strategy parameter only affects the compression ratio but not the\n correctness of the compressed output even if it is not set appropriately.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "data",
        "title": "CompressionStrategy"
      },
      "index": {
        "description": "The strategy parameter is used to tune the compression algorithm The strategy parameter only affects the compression ratio but not the correctness of the compressed output even if it is not set appropriately",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "CompressionStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:DecompressError",
      "description": {
        "fct-descr": "\u003cp\u003eThe possible error cases when decompressing a stream.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressError",
        "fct-type": "data",
        "title": "DecompressError"
      },
      "index": {
        "description": "The possible error cases when decompressing stream",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "DecompressError",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:DecompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe full set of parameters for decompression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultDecompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer,\n containing the uncompressed data. If you know an exact or approximate upper\n bound on the size of the decompressed data then setting this parameter can\n save memory. The default decompression output buffer size is \u003ccode\u003e32k\u003c/code\u003e. If your\n extimate is wrong it does not matter too much, the default buffer size will\n be used for the remaining chunks.\n\u003c/p\u003e\u003cp\u003eOne particular use case for setting the \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is if you\n know the exact size of the decompressed data and want to produce a strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The compression and deccompression functions\n use lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es but if you set the\n \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e correctly then you can generate a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with exactly one chunk, which can be\n converted to a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eO(1)\u003c/code\u003e time using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "data",
        "title": "DecompressParams"
      },
      "index": {
        "description": "The full set of parameters for decompression The defaults are defaultDecompressParams The decompressBufferSize is the size of the first output buffer containing the uncompressed data If you know an exact or approximate upper bound on the size of the decompressed data then setting this parameter can save memory The default decompression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks One particular use case for setting the decompressBufferSize is if you know the exact size of the decompressed data and want to produce strict ByteString The compression and deccompression functions use lazy ByteString but if you set the decompressBufferSize correctly then you can generate lazy ByteString with exactly one chunk which can be converted to strict ByteString in time using concat toChunks",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "DecompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:DecompressStream",
      "description": {
        "fct-descr": "\u003cp\u003eA sequence of chunks of data produced from decompression.\n\u003c/p\u003e\u003cp\u003eThe difference from a simple list is that it contains a representation of\n errors as data rather than as exceptions. This allows you to handle error\n conditions explicitly.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressStream",
        "fct-type": "data",
        "title": "DecompressStream"
      },
      "index": {
        "description": "sequence of chunks of data produced from decompression The difference from simple list is that it contains representation of errors as data rather than as exceptions This allows you to handle error conditions explicitly",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "DecompressStream",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:Format",
      "description": {
        "fct-descr": "\u003cp\u003eThe format used for compression or decompression. There are three\n variations.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Format",
        "fct-type": "data",
        "title": "Format"
      },
      "index": {
        "description": "The format used for compression or decompression There are three variations",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "Format",
        "normalized": "",
        "package": "zlib",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:MemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e parameter specifies how much memory should be allocated\n for the internal compression state. It is a tradoff between memory usage,\n compression ratio and compression speed. Using more memory allows faster\n compression and a better compression ratio.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used for compression depends on the \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e\n and the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. For decompression it depends only on the\n \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e. The totals are given by the functions:\n\u003c/p\u003e\u003cpre\u003e compressTotal windowBits memLevel = 4 * 2^windowBits + 512 * 2^memLevel\n decompressTotal windowBits = 2^windowBits\n\u003c/pre\u003e\u003cp\u003eFor example, for compression with the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e and\n \u003ccode\u003ememLevel = 8\u003c/code\u003e uses \u003ccode\u003e256Kb\u003c/code\u003e. So for example a network server with 100\n concurrent compressed streams would use \u003ccode\u003e25Mb\u003c/code\u003e. The memory per stream can be\n halved (at the cost of somewhat degraded and slower compressionby) by\n reducing the \u003ccode\u003ewindowBits\u003c/code\u003e and \u003ccode\u003ememLevel\u003c/code\u003e by one.\n\u003c/p\u003e\u003cp\u003eDecompression takes less memory, the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e corresponds\n to just \u003ccode\u003e32Kb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "data",
        "title": "MemoryLevel"
      },
      "index": {
        "description": "The MemoryLevel parameter specifies how much memory should be allocated for the internal compression state It is tradoff between memory usage compression ratio and compression speed Using more memory allows faster compression and better compression ratio The total amount of memory used for compression depends on the WindowBits and the MemoryLevel For decompression it depends only on the WindowBits The totals are given by the functions compressTotal windowBits memLevel windowBits memLevel decompressTotal windowBits windowBits For example for compression with the default windowBits and memLevel uses Kb So for example network server with concurrent compressed streams would use Mb The memory per stream can be halved at the cost of somewhat degraded and slower compressionby by reducing the windowBits and memLevel by one Decompression takes less memory the default windowBits corresponds to just Kb",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "MemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:Method",
      "description": {
        "fct-descr": "\u003cp\u003eThe compression method\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Method",
        "fct-type": "data",
        "title": "Method"
      },
      "index": {
        "description": "The compression method",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "Method",
        "normalized": "",
        "package": "zlib",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#t:WindowBits",
      "description": {
        "fct-descr": "\u003cp\u003eThis specifies the size of the compression window. Larger values of this\n parameter result in better compression at the expense of higher memory\n usage.\n\u003c/p\u003e\u003cp\u003eThe compression window size is the value of the the window bits raised to\n the power 2. The window bits must be in the range \u003ccode\u003e8..15\u003c/code\u003e which corresponds\n to compression window sizes of 256b to 32Kb. The default is 15 which is also\n the maximum size.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used depends on the window bits and the\n \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. See the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e for the details.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
        "fct-type": "data",
        "title": "WindowBits"
      },
      "index": {
        "description": "This specifies the size of the compression window Larger values of this parameter result in better compression at the expense of higher memory usage The compression window size is the value of the the window bits raised to the power The window bits must be in the range which corresponds to compression window sizes of to Kb The default is which is also the maximum size The total amount of memory used depends on the window bits and the MemoryLevel See the MemoryLevel for the details",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "WindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:BestCompression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use bestCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "BestCompression",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "BestCompression"
      },
      "index": {
        "description": "Deprecated Use bestCompression CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "BestCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Best Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:BestSpeed",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use bestSpeed. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "BestSpeed",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "BestSpeed"
      },
      "index": {
        "description": "Deprecated Use bestSpeed CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "BestSpeed",
        "normalized": "",
        "package": "zlib",
        "partial": "Best Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:CompressParams",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "CompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "CompressParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "CompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:CompressionLevel",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel Int",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "CompressionLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "CompressionLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DataError",
      "description": {
        "fct-descr": "\u003cp\u003eIf the compressed data stream is corrupted in any way then you will\n get this error, for example if the input data just isn't a compressed\n zlib data stream. In particular if the data checksum turns out to be\n wrong then you will get all the decompressed data but this error at the\n end, instead of the normal sucessful \u003ccode\u003e\u003ca\u003eStreamEnd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "DataError",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressError",
        "fct-type": "function",
        "title": "DataError"
      },
      "index": {
        "description": "If the compressed data stream is corrupted in any way then you will get this error for example if the input data just isn compressed zlib data stream In particular if the data checksum turns out to be wrong then you will get all the decompressed data but this error at the end instead of the normal sucessful StreamEnd",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "DataError",
        "normalized": "",
        "package": "zlib",
        "partial": "Data Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DecompressParams",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "DecompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "DecompressParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "DecompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DefaultCompression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "DefaultCompression",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "DefaultCompression"
      },
      "index": {
        "description": "Deprecated Use defaultCompression CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "DefaultCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DefaultMemoryLevel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "DefaultMemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "DefaultMemoryLevel"
      },
      "index": {
        "description": "Deprecated Use defaultMemoryLevel MemoryLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "DefaultMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DefaultStrategy",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "DefaultStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "function",
        "title": "DefaultStrategy"
      },
      "index": {
        "description": "Deprecated Use defaultStrategy CompressionStrategy constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "DefaultStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DefaultWindowBits",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultWindowBits. WindowBits constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "DefaultWindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
        "fct-type": "function",
        "title": "DefaultWindowBits"
      },
      "index": {
        "description": "Deprecated Use defaultWindowBits WindowBits constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "DefaultWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:Deflated",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use deflateMethod. Method constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Deflated",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Method",
        "fct-type": "function",
        "title": "Deflated"
      },
      "index": {
        "description": "Deprecated Use deflateMethod Method constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "Deflated",
        "normalized": "",
        "package": "zlib",
        "partial": "Deflated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:DictionaryRequired",
      "description": {
        "fct-descr": "\u003cp\u003eIt is possible to do zlib compression with a custom dictionary. This\n allows slightly higher compression ratios for short files. However such\n compressed streams require the same dictionary when decompressing. This\n error is for when we encounter a compressed stream that needs a\n dictionary, and it's not provided.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "DictionaryRequired",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressError",
        "fct-type": "function",
        "title": "DictionaryRequired"
      },
      "index": {
        "description": "It is possible to do zlib compression with custom dictionary This allows slightly higher compression ratios for short files However such compressed streams require the same dictionary when decompressing This error is for when we encounter compressed stream that needs dictionary and it not provided",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "DictionaryRequired",
        "normalized": "",
        "package": "zlib",
        "partial": "Dictionary Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:Filtered",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use filteredStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Filtered",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "function",
        "title": "Filtered"
      },
      "index": {
        "description": "Deprecated Use filteredStrategy CompressionStrategy constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "Filtered",
        "normalized": "",
        "package": "zlib",
        "partial": "Filtered",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:GZip",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use gzipFormat. Format constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "GZip",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Format",
        "fct-type": "function",
        "title": "GZip"
      },
      "index": {
        "description": "Deprecated Use gzipFormat Format constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "GZip",
        "normalized": "",
        "package": "zlib",
        "partial": "GZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:GZipOrZlib",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use gzipOrZlibFormat. Format constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "GZipOrZlib",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Format",
        "fct-type": "function",
        "title": "GZipOrZlib"
      },
      "index": {
        "description": "Deprecated Use gzipOrZlibFormat Format constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "GZipOrZlib",
        "normalized": "",
        "package": "zlib",
        "partial": "GZip Or Zlib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:HuffmanOnly",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use huffmanOnlyStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "HuffmanOnly",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "function",
        "title": "HuffmanOnly"
      },
      "index": {
        "description": "Deprecated Use huffmanOnlyStrategy CompressionStrategy constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "HuffmanOnly",
        "normalized": "",
        "package": "zlib",
        "partial": "Huffman Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:MaxMemoryLevel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use maxMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "MaxMemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MaxMemoryLevel"
      },
      "index": {
        "description": "Deprecated Use maxMemoryLevel MemoryLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "MaxMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Max Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:MemoryLevel",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel Int",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MemoryLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "MemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:MinMemoryLevel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use minMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "MinMemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MinMemoryLevel"
      },
      "index": {
        "description": "Deprecated Use minMemoryLevel MemoryLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "MinMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Min Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:NoCompression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use noCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "NoCompression",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "NoCompression"
      },
      "index": {
        "description": "Deprecated Use noCompression CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "NoCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "No Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:Raw",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use rawFormat. Format constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Raw",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Format",
        "fct-type": "function",
        "title": "Raw"
      },
      "index": {
        "description": "Deprecated Use rawFormat Format constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "Raw",
        "normalized": "",
        "package": "zlib",
        "partial": "Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:StreamChunk",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "StreamChunk ByteString DecompressStream",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressStream",
        "fct-type": "function",
        "title": "StreamChunk"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "StreamChunk",
        "normalized": "",
        "package": "zlib",
        "partial": "Stream Chunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:StreamEnd",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "StreamEnd",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressStream",
        "fct-type": "function",
        "title": "StreamEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "StreamEnd",
        "normalized": "",
        "package": "zlib",
        "partial": "Stream End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:StreamError",
      "description": {
        "fct-descr": "\u003cp\u003eAn error code and a human readable error message.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "StreamError DecompressError String",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressStream",
        "fct-type": "function",
        "title": "StreamError"
      },
      "index": {
        "description": "An error code and human readable error message",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "StreamError",
        "normalized": "",
        "package": "zlib",
        "partial": "Stream Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:TruncatedInput",
      "description": {
        "fct-descr": "\u003cp\u003eThe compressed data stream ended prematurely. This may happen if the\n input data stream was truncated.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "TruncatedInput",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressError",
        "fct-type": "function",
        "title": "TruncatedInput"
      },
      "index": {
        "description": "The compressed data stream ended prematurely This may happen if the input data stream was truncated",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "TruncatedInput",
        "normalized": "",
        "package": "zlib",
        "partial": "Truncated Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:WindowBits",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "WindowBits Int",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
        "fct-type": "function",
        "title": "WindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "WindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:Zlib",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use zlibFormat. Format constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Zlib",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Format",
        "fct-type": "function",
        "title": "Zlib"
      },
      "index": {
        "description": "Deprecated Use zlibFormat Format constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "Zlib",
        "normalized": "",
        "package": "zlib",
        "partial": "Zlib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:bestCompression",
      "description": {
        "fct-descr": "\u003cp\u003eThe slowest compression method (best compression).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#bestCompression",
        "fct-type": "function",
        "title": "bestCompression"
      },
      "index": {
        "description": "The slowest compression method best compression",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "bestCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:bestSpeed",
      "description": {
        "fct-descr": "\u003cp\u003eThe fastest compression method (less compression)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#bestSpeed",
        "fct-type": "function",
        "title": "bestSpeed"
      },
      "index": {
        "description": "The fastest compression method less compression",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "bestSpeed",
        "normalized": "",
        "package": "zlib",
        "partial": "Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompress a data stream.\n\u003c/p\u003e\u003cp\u003eThere are no expected error conditions. All input data streams are valid. It\n is possible for unexpected errors to occur, such as running out of memory,\n or finding the wrong version of the zlib C library, these are thrown as\n exceptions.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Format -\u003e CompressParams -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Compress data stream There are no expected error conditions All input data streams are valid It is possible for unexpected errors to occur such as running out of memory or finding the wrong version of the zlib library these are thrown as exceptions",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "compress",
        "normalized": "Format-\u003eCompressParams-\u003eByteString-\u003eByteString",
        "package": "zlib",
        "partial": "",
        "signature": "Format-\u003eCompressParams-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressBufferSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressBufferSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "compressBufferSize",
        "normalized": "",
        "package": "zlib",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressDictionary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressDictionary"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "compressDictionary",
        "normalized": "",
        "package": "zlib",
        "partial": "Dictionary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "!CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "compressLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressMemoryLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "!MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressMemoryLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "compressMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "!Method",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "compressMethod",
        "normalized": "",
        "package": "zlib",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressStrategy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "!CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressStrategy"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "compressStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressWindowBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "!WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressWindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "compressWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:compressionLevel",
      "description": {
        "fct-descr": "\u003cp\u003eA specific compression level between 0 and 9.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Int -\u003e CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#compressionLevel",
        "fct-type": "function",
        "title": "compressionLevel"
      },
      "index": {
        "description": "specific compression level between and",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "compressionLevel",
        "normalized": "Int-\u003eCompressionLevel",
        "package": "zlib",
        "partial": "Level",
        "signature": "Int-\u003eCompressionLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress a data stream.\n\u003c/p\u003e\u003cp\u003eIt will throw an exception if any error is encountered in the input data. If\n you need more control over error handling then use \u003ccode\u003e\u003ca\u003edecompressWithErrors\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Format -\u003e DecompressParams -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompress data stream It will throw an exception if any error is encountered in the input data If you need more control over error handling then use decompressWithErrors",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "decompress",
        "normalized": "Format-\u003eDecompressParams-\u003eByteString-\u003eByteString",
        "package": "zlib",
        "partial": "",
        "signature": "Format-\u003eDecompressParams-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:decompressBufferSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressBufferSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "decompressBufferSize",
        "normalized": "",
        "package": "zlib",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:decompressDictionary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressDictionary"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "decompressDictionary",
        "normalized": "",
        "package": "zlib",
        "partial": "Dictionary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:decompressWindowBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "!WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressWindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "decompressWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:decompressWithErrors",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e but returns a \u003ccode\u003e\u003ca\u003eDecompressStream\u003c/a\u003e\u003c/code\u003e data structure that\n contains an explicit representation of the error conditions that one may\n encounter when decompressing.\n\u003c/p\u003e\u003cp\u003eNote that in addition to errors in the input data, it is possible for other\n unexpected errors to occur, such as out of memory, or finding the wrong\n version of the zlib C library, these are still thrown as exceptions (because\n representing them as data would make this function impure).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Format -\u003e DecompressParams -\u003e ByteString -\u003e DecompressStream",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#decompressWithErrors",
        "fct-type": "function",
        "title": "decompressWithErrors"
      },
      "index": {
        "description": "Like decompress but returns DecompressStream data structure that contains an explicit representation of the error conditions that one may encounter when decompressing Note that in addition to errors in the input data it is possible for other unexpected errors to occur such as out of memory or finding the wrong version of the zlib library these are still thrown as exceptions because representing them as data would make this function impure",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "decompressWithErrors",
        "normalized": "Format-\u003eDecompressParams-\u003eByteString-\u003eDecompressStream",
        "package": "zlib",
        "partial": "With Errors",
        "signature": "Format-\u003eDecompressParams-\u003eByteString-\u003eDecompressStream"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:defaultCompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of parameters for compression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific parameters overridden.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "CompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#defaultCompressParams",
        "fct-type": "function",
        "title": "defaultCompressParams"
      },
      "index": {
        "description": "The default set of parameters for compression This is typically used with the compressWith function with specific parameters overridden",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "defaultCompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:defaultCompression",
      "description": {
        "fct-descr": "\u003cp\u003eThe default compression level is 6 (that is, biased towards higher\n compression at expense of speed).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultCompression",
        "fct-type": "function",
        "title": "defaultCompression"
      },
      "index": {
        "description": "The default compression level is that is biased towards higher compression at expense of speed",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "defaultCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:defaultDecompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of parameters for decompression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific parameters overridden.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "DecompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#defaultDecompressParams",
        "fct-type": "function",
        "title": "defaultDecompressParams"
      },
      "index": {
        "description": "The default set of parameters for decompression This is typically used with the compressWith function with specific parameters overridden",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "defaultDecompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:defaultMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe default memory level. (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 8\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultMemoryLevel",
        "fct-type": "function",
        "title": "defaultMemoryLevel"
      },
      "index": {
        "description": "The default memory level Equivalent to memoryLevel",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "defaultMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:defaultStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse this default compression strategy for normal data.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultStrategy",
        "fct-type": "function",
        "title": "defaultStrategy"
      },
      "index": {
        "description": "Use this default compression strategy for normal data",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "defaultStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:defaultWindowBits",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e is 15 which is also the maximum size.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultWindowBits",
        "fct-type": "function",
        "title": "defaultWindowBits"
      },
      "index": {
        "description": "The default WindowBits is which is also the maximum size",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "defaultWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:deflateMethod",
      "description": {
        "fct-descr": "\u003cp\u003e'Deflate' is the only method supported in this version of zlib.\n Indeed it is likely to be the only method that ever will be supported.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Method",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#deflateMethod",
        "fct-type": "function",
        "title": "deflateMethod"
      },
      "index": {
        "description": "Deflate is the only method supported in this version of zlib Indeed it is likely to be the only method that ever will be supported",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "deflateMethod",
        "normalized": "",
        "package": "zlib",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:filteredStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse the filtered compression strategy for data produced by a filter (or\n predictor). Filtered data consists mostly of small values with a somewhat\n random distribution. In this case, the compression algorithm is tuned to\n compress them better. The effect of this strategy is to force more Huffman\n coding and less string matching; it is somewhat intermediate between\n \u003ccode\u003edefaultCompressionStrategy\u003c/code\u003e and \u003ccode\u003ehuffmanOnlyCompressionStrategy\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#filteredStrategy",
        "fct-type": "function",
        "title": "filteredStrategy"
      },
      "index": {
        "description": "Use the filtered compression strategy for data produced by filter or predictor Filtered data consists mostly of small values with somewhat random distribution In this case the compression algorithm is tuned to compress them better The effect of this strategy is to force more Huffman coding and less string matching it is somewhat intermediate between defaultCompressionStrategy and huffmanOnlyCompressionStrategy",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "filteredStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:foldDecompressStream",
      "description": {
        "fct-descr": "\u003cp\u003eFold an \u003ccode\u003eDecompressionStream\u003c/code\u003e. Just like \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e but with an extra error\n case. For example to convert to a list and translate the errors into\n exceptions:\n\u003c/p\u003e\u003cpre\u003e foldDecompressStream (:) [] (\\code msg -\u003e error msg)\n\u003c/pre\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "(ByteString -\u003e a -\u003e a) -\u003e a -\u003e (DecompressError -\u003e String -\u003e a) -\u003e DecompressStream -\u003e a",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#foldDecompressStream",
        "fct-type": "function",
        "title": "foldDecompressStream"
      },
      "index": {
        "description": "Fold an DecompressionStream Just like foldr but with an extra error case For example to convert to list and translate the errors into exceptions foldDecompressStream code msg error msg",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "foldDecompressStream",
        "normalized": "(ByteString-\u003ea-\u003ea)-\u003ea-\u003e(DecompressError-\u003eString-\u003ea)-\u003eDecompressStream-\u003ea",
        "package": "zlib",
        "partial": "Decompress Stream",
        "signature": "(ByteString-\u003ea-\u003ea)-\u003ea-\u003e(DecompressError-\u003eString-\u003ea)-\u003eDecompressStream-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:fromDecompressStream",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eDecompressStream\u003c/a\u003e\u003c/code\u003e to a lazy \u003ccode\u003eByteString\u003c/code\u003e. If any decompression\n errors are encountered then they are thrown as exceptions.\n\u003c/p\u003e\u003cp\u003eThis is a special case of \u003ccode\u003e\u003ca\u003efoldDecompressStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "DecompressStream -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#fromDecompressStream",
        "fct-type": "function",
        "title": "fromDecompressStream"
      },
      "index": {
        "description": "Convert DecompressStream to lazy ByteString If any decompression errors are encountered then they are thrown as exceptions This is special case of foldDecompressStream",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "fromDecompressStream",
        "normalized": "DecompressStream-\u003eByteString",
        "package": "zlib",
        "partial": "Decompress Stream",
        "signature": "DecompressStream-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:gzipFormat",
      "description": {
        "fct-descr": "\u003cp\u003eThe gzip format uses a header with a checksum and some optional meta-data\n about the compressed file. It is intended primarily for compressing\n individual files but is also sometimes used for network protocols such as\n HTTP. The format is described in detail in RFC #1952\n \u003ca\u003ehttp://www.ietf.org/rfc/rfc1952.txt\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Format",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#gzipFormat",
        "fct-type": "function",
        "title": "gzipFormat"
      },
      "index": {
        "description": "The gzip format uses header with checksum and some optional meta-data about the compressed file It is intended primarily for compressing individual files but is also sometimes used for network protocols such as HTTP The format is described in detail in RFC http www.ietf.org rfc rfc1952.txt",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "gzipFormat",
        "normalized": "",
        "package": "zlib",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:gzipOrZlibFormat",
      "description": {
        "fct-descr": "\u003cp\u003eThis is not a format as such. It enabled zlib or gzip decoding with\n automatic header detection. This only makes sense for decompression.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Format",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#gzipOrZlibFormat",
        "fct-type": "function",
        "title": "gzipOrZlibFormat"
      },
      "index": {
        "description": "This is not format as such It enabled zlib or gzip decoding with automatic header detection This only makes sense for decompression",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "gzipOrZlibFormat",
        "normalized": "",
        "package": "zlib",
        "partial": "Or Zlib Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:huffmanOnlyStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse the Huffman-only compression strategy to force Huffman encoding only\n (no string match).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#huffmanOnlyStrategy",
        "fct-type": "function",
        "title": "huffmanOnlyStrategy"
      },
      "index": {
        "description": "Use the Huffman-only compression strategy to force Huffman encoding only no string match",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "huffmanOnlyStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Only Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:maxMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eUse maximum memory for optimal compression speed.\n (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 9\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#maxMemoryLevel",
        "fct-type": "function",
        "title": "maxMemoryLevel"
      },
      "index": {
        "description": "Use maximum memory for optimal compression speed Equivalent to memoryLevel",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "maxMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:memoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eA specific level in the range \u003ccode\u003e1..9\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Int -\u003e MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#memoryLevel",
        "fct-type": "function",
        "title": "memoryLevel"
      },
      "index": {
        "description": "specific level in the range",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "memoryLevel",
        "normalized": "Int-\u003eMemoryLevel",
        "package": "zlib",
        "partial": "Level",
        "signature": "Int-\u003eMemoryLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:minMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eUse minimum memory. This is slow and reduces the compression ratio.\n (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#minMemoryLevel",
        "fct-type": "function",
        "title": "minMemoryLevel"
      },
      "index": {
        "description": "Use minimum memory This is slow and reduces the compression ratio Equivalent to memoryLevel",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "minMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:noCompression",
      "description": {
        "fct-descr": "\u003cp\u003eNo compression, just a block copy.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#noCompression",
        "fct-type": "function",
        "title": "noCompression"
      },
      "index": {
        "description": "No compression just block copy",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "noCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:rawFormat",
      "description": {
        "fct-descr": "\u003cp\u003eThe 'raw' format is just the compressed data stream without any\n additional header, meta-data or data-integrity checksum. The format is\n described in detail in RFC #1951 \u003ca\u003ehttp://www.ietf.org/rfc/rfc1951.txt\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Format",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#rawFormat",
        "fct-type": "function",
        "title": "rawFormat"
      },
      "index": {
        "description": "The raw format is just the compressed data stream without any additional header meta-data or data-integrity checksum The format is described in detail in RFC http www.ietf.org rfc rfc1951.txt",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "rawFormat",
        "normalized": "",
        "package": "zlib",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:windowBits",
      "description": {
        "fct-descr": "\u003cp\u003eA specific compression window size, specified in bits in the range \u003ccode\u003e8..15\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Int -\u003e WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#windowBits",
        "fct-type": "function",
        "title": "windowBits"
      },
      "index": {
        "description": "specific compression window size specified in bits in the range",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "windowBits",
        "normalized": "Int-\u003eWindowBits",
        "package": "zlib",
        "partial": "Bits",
        "signature": "Int-\u003eWindowBits"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Internal.html#v:zlibFormat",
      "description": {
        "fct-descr": "\u003cp\u003eThe zlib format uses a minimal header with a checksum but no other\n meta-data. It is especially designed for use in network protocols. The\n format is described in detail in RFC #1950\n \u003ca\u003ehttp://www.ietf.org/rfc/rfc1950.txt\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Internal",
        "fct-package": "zlib",
        "fct-signature": "Format",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#zlibFormat",
        "fct-type": "function",
        "title": "zlibFormat"
      },
      "index": {
        "description": "The zlib format uses minimal header with checksum but no other meta-data It is especially designed for use in network protocols The format is described in detail in RFC http www.ietf.org rfc rfc1950.txt",
        "hierarchy": "Codec Compression Zlib Internal",
        "module": "Codec.Compression.Zlib.Internal",
        "name": "zlibFormat",
        "normalized": "",
        "package": "zlib",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompression and decompression of data streams in the raw deflate format.\n\u003c/p\u003e\u003cp\u003eThe format is described in detail in RFC #1951:\n \u003ca\u003ehttp://www.ietf.org/rfc/rfc1951.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSee also the zlib home page: \u003ca\u003ehttp://zlib.net/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "module",
        "fct-source": "src/Codec-Compression-Zlib-Raw.html",
        "fct-type": "module",
        "title": "Raw"
      },
      "index": {
        "description": "Compression and decompression of data streams in the raw deflate format The format is described in detail in RFC http www.ietf.org rfc rfc1951.txt See also the zlib home page http zlib.net",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "Raw",
        "normalized": "",
        "package": "zlib",
        "partial": "Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:CompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe full set of parameters for compression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultCompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer containing\n the compressed data. If you know an approximate upper bound on the size of\n the compressed data then setting this parameter can save memory. The default\n compression output buffer size is \u003ccode\u003e16k\u003c/code\u003e. If your extimate is wrong it does\n not matter too much, the default buffer size will be used for the remaining\n chunks.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "data",
        "title": "CompressParams"
      },
      "index": {
        "description": "The full set of parameters for compression The defaults are defaultCompressParams The compressBufferSize is the size of the first output buffer containing the compressed data If you know an approximate upper bound on the size of the compressed data then setting this parameter can save memory The default compression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "CompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:CompressionLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe compression level parameter controls the amount of compression. This\n is a trade-off between the amount of compression and the time required to do\n the compression.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "data",
        "title": "CompressionLevel"
      },
      "index": {
        "description": "The compression level parameter controls the amount of compression This is trade-off between the amount of compression and the time required to do the compression",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "CompressionLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:CompressionStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eThe strategy parameter is used to tune the compression algorithm.\n\u003c/p\u003e\u003cp\u003eThe strategy parameter only affects the compression ratio but not the\n correctness of the compressed output even if it is not set appropriately.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "data",
        "title": "CompressionStrategy"
      },
      "index": {
        "description": "The strategy parameter is used to tune the compression algorithm The strategy parameter only affects the compression ratio but not the correctness of the compressed output even if it is not set appropriately",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "CompressionStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:DecompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe full set of parameters for decompression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultDecompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer,\n containing the uncompressed data. If you know an exact or approximate upper\n bound on the size of the decompressed data then setting this parameter can\n save memory. The default decompression output buffer size is \u003ccode\u003e32k\u003c/code\u003e. If your\n extimate is wrong it does not matter too much, the default buffer size will\n be used for the remaining chunks.\n\u003c/p\u003e\u003cp\u003eOne particular use case for setting the \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is if you\n know the exact size of the decompressed data and want to produce a strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The compression and deccompression functions\n use lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es but if you set the\n \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e correctly then you can generate a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with exactly one chunk, which can be\n converted to a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eO(1)\u003c/code\u003e time using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "data",
        "title": "DecompressParams"
      },
      "index": {
        "description": "The full set of parameters for decompression The defaults are defaultDecompressParams The decompressBufferSize is the size of the first output buffer containing the uncompressed data If you know an exact or approximate upper bound on the size of the decompressed data then setting this parameter can save memory The default decompression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks One particular use case for setting the decompressBufferSize is if you know the exact size of the decompressed data and want to produce strict ByteString The compression and deccompression functions use lazy ByteString but if you set the decompressBufferSize correctly then you can generate lazy ByteString with exactly one chunk which can be converted to strict ByteString in time using concat toChunks",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "DecompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:MemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e parameter specifies how much memory should be allocated\n for the internal compression state. It is a tradoff between memory usage,\n compression ratio and compression speed. Using more memory allows faster\n compression and a better compression ratio.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used for compression depends on the \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e\n and the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. For decompression it depends only on the\n \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e. The totals are given by the functions:\n\u003c/p\u003e\u003cpre\u003e compressTotal windowBits memLevel = 4 * 2^windowBits + 512 * 2^memLevel\n decompressTotal windowBits = 2^windowBits\n\u003c/pre\u003e\u003cp\u003eFor example, for compression with the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e and\n \u003ccode\u003ememLevel = 8\u003c/code\u003e uses \u003ccode\u003e256Kb\u003c/code\u003e. So for example a network server with 100\n concurrent compressed streams would use \u003ccode\u003e25Mb\u003c/code\u003e. The memory per stream can be\n halved (at the cost of somewhat degraded and slower compressionby) by\n reducing the \u003ccode\u003ewindowBits\u003c/code\u003e and \u003ccode\u003ememLevel\u003c/code\u003e by one.\n\u003c/p\u003e\u003cp\u003eDecompression takes less memory, the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e corresponds\n to just \u003ccode\u003e32Kb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "data",
        "title": "MemoryLevel"
      },
      "index": {
        "description": "The MemoryLevel parameter specifies how much memory should be allocated for the internal compression state It is tradoff between memory usage compression ratio and compression speed Using more memory allows faster compression and better compression ratio The total amount of memory used for compression depends on the WindowBits and the MemoryLevel For decompression it depends only on the WindowBits The totals are given by the functions compressTotal windowBits memLevel windowBits memLevel decompressTotal windowBits windowBits For example for compression with the default windowBits and memLevel uses Kb So for example network server with concurrent compressed streams would use Mb The memory per stream can be halved at the cost of somewhat degraded and slower compressionby by reducing the windowBits and memLevel by one Decompression takes less memory the default windowBits corresponds to just Kb",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "MemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:Method",
      "description": {
        "fct-descr": "\u003cp\u003eThe compression method\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Method",
        "fct-type": "data",
        "title": "Method"
      },
      "index": {
        "description": "The compression method",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "Method",
        "normalized": "",
        "package": "zlib",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#t:WindowBits",
      "description": {
        "fct-descr": "\u003cp\u003eThis specifies the size of the compression window. Larger values of this\n parameter result in better compression at the expense of higher memory\n usage.\n\u003c/p\u003e\u003cp\u003eThe compression window size is the value of the the window bits raised to\n the power 2. The window bits must be in the range \u003ccode\u003e8..15\u003c/code\u003e which corresponds\n to compression window sizes of 256b to 32Kb. The default is 15 which is also\n the maximum size.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used depends on the window bits and the\n \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. See the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e for the details.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
        "fct-type": "data",
        "title": "WindowBits"
      },
      "index": {
        "description": "This specifies the size of the compression window Larger values of this parameter result in better compression at the expense of higher memory usage The compression window size is the value of the the window bits raised to the power The window bits must be in the range which corresponds to compression window sizes of to Kb The default is which is also the maximum size The total amount of memory used depends on the window bits and the MemoryLevel See the MemoryLevel for the details",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "WindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:BestCompression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use bestCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "BestCompression",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "BestCompression"
      },
      "index": {
        "description": "Deprecated Use bestCompression CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "BestCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Best Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:BestSpeed",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use bestSpeed. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "BestSpeed",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "BestSpeed"
      },
      "index": {
        "description": "Deprecated Use bestSpeed CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "BestSpeed",
        "normalized": "",
        "package": "zlib",
        "partial": "Best Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:CompressParams",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "CompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "CompressParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "CompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:CompressionLevel",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel Int",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "CompressionLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "CompressionLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:DecompressParams",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "DecompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "DecompressParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "DecompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:DefaultCompression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "DefaultCompression",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "DefaultCompression"
      },
      "index": {
        "description": "Deprecated Use defaultCompression CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "DefaultCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:DefaultMemoryLevel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "DefaultMemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "DefaultMemoryLevel"
      },
      "index": {
        "description": "Deprecated Use defaultMemoryLevel MemoryLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "DefaultMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:DefaultStrategy",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "DefaultStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "function",
        "title": "DefaultStrategy"
      },
      "index": {
        "description": "Deprecated Use defaultStrategy CompressionStrategy constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "DefaultStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:DefaultWindowBits",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultWindowBits. WindowBits constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "DefaultWindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
        "fct-type": "function",
        "title": "DefaultWindowBits"
      },
      "index": {
        "description": "Deprecated Use defaultWindowBits WindowBits constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "DefaultWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:Deflated",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use deflateMethod. Method constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "Deflated",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Method",
        "fct-type": "function",
        "title": "Deflated"
      },
      "index": {
        "description": "Deprecated Use deflateMethod Method constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "Deflated",
        "normalized": "",
        "package": "zlib",
        "partial": "Deflated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:Filtered",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use filteredStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "Filtered",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "function",
        "title": "Filtered"
      },
      "index": {
        "description": "Deprecated Use filteredStrategy CompressionStrategy constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "Filtered",
        "normalized": "",
        "package": "zlib",
        "partial": "Filtered",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:HuffmanOnly",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use huffmanOnlyStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "HuffmanOnly",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "function",
        "title": "HuffmanOnly"
      },
      "index": {
        "description": "Deprecated Use huffmanOnlyStrategy CompressionStrategy constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "HuffmanOnly",
        "normalized": "",
        "package": "zlib",
        "partial": "Huffman Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:MaxMemoryLevel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use maxMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "MaxMemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MaxMemoryLevel"
      },
      "index": {
        "description": "Deprecated Use maxMemoryLevel MemoryLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "MaxMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Max Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:MemoryLevel",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel Int",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MemoryLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "MemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:MinMemoryLevel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use minMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "MinMemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MinMemoryLevel"
      },
      "index": {
        "description": "Deprecated Use minMemoryLevel MemoryLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "MinMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Min Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:NoCompression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use noCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "NoCompression",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "NoCompression"
      },
      "index": {
        "description": "Deprecated Use noCompression CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "NoCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "No Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:WindowBits",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "WindowBits Int",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
        "fct-type": "function",
        "title": "WindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "WindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:bestCompression",
      "description": {
        "fct-descr": "\u003cp\u003eThe slowest compression method (best compression).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#bestCompression",
        "fct-type": "function",
        "title": "bestCompression"
      },
      "index": {
        "description": "The slowest compression method best compression",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "bestCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:bestSpeed",
      "description": {
        "fct-descr": "\u003cp\u003eThe fastest compression method (less compression)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#bestSpeed",
        "fct-type": "function",
        "title": "bestSpeed"
      },
      "index": {
        "description": "The fastest compression method less compression",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "bestSpeed",
        "normalized": "",
        "package": "zlib",
        "partial": "Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compress",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Raw.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "compress",
        "normalized": "ByteString-\u003eByteString",
        "package": "zlib",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressBufferSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressBufferSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "compressBufferSize",
        "normalized": "",
        "package": "zlib",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressDictionary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressDictionary"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "compressDictionary",
        "normalized": "",
        "package": "zlib",
        "partial": "Dictionary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "!CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "compressLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressMemoryLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "!MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressMemoryLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "compressMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "!Method",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "compressMethod",
        "normalized": "",
        "package": "zlib",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressStrategy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "!CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressStrategy"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "compressStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressWindowBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "!WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressWindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "compressWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressWith",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "CompressParams -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Raw.html#compressWith",
        "fct-type": "function",
        "title": "compressWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "compressWith",
        "normalized": "CompressParams-\u003eByteString-\u003eByteString",
        "package": "zlib",
        "partial": "With",
        "signature": "CompressParams-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:compressionLevel",
      "description": {
        "fct-descr": "\u003cp\u003eA specific compression level between 0 and 9.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "Int -\u003e CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#compressionLevel",
        "fct-type": "function",
        "title": "compressionLevel"
      },
      "index": {
        "description": "specific compression level between and",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "compressionLevel",
        "normalized": "Int-\u003eCompressionLevel",
        "package": "zlib",
        "partial": "Level",
        "signature": "Int-\u003eCompressionLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:decompress",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Raw.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "decompress",
        "normalized": "ByteString-\u003eByteString",
        "package": "zlib",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:decompressBufferSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressBufferSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "decompressBufferSize",
        "normalized": "",
        "package": "zlib",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:decompressDictionary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressDictionary"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "decompressDictionary",
        "normalized": "",
        "package": "zlib",
        "partial": "Dictionary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:decompressWindowBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "!WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressWindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "decompressWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:decompressWith",
      "description": {
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "DecompressParams -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Raw.html#decompressWith",
        "fct-type": "function",
        "title": "decompressWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "decompressWith",
        "normalized": "DecompressParams-\u003eByteString-\u003eByteString",
        "package": "zlib",
        "partial": "With",
        "signature": "DecompressParams-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:defaultCompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of parameters for compression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific parameters overridden.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "CompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#defaultCompressParams",
        "fct-type": "function",
        "title": "defaultCompressParams"
      },
      "index": {
        "description": "The default set of parameters for compression This is typically used with the compressWith function with specific parameters overridden",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "defaultCompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:defaultCompression",
      "description": {
        "fct-descr": "\u003cp\u003eThe default compression level is 6 (that is, biased towards higher\n compression at expense of speed).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultCompression",
        "fct-type": "function",
        "title": "defaultCompression"
      },
      "index": {
        "description": "The default compression level is that is biased towards higher compression at expense of speed",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "defaultCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:defaultDecompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of parameters for decompression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific parameters overridden.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "DecompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#defaultDecompressParams",
        "fct-type": "function",
        "title": "defaultDecompressParams"
      },
      "index": {
        "description": "The default set of parameters for decompression This is typically used with the compressWith function with specific parameters overridden",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "defaultDecompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:defaultMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe default memory level. (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 8\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultMemoryLevel",
        "fct-type": "function",
        "title": "defaultMemoryLevel"
      },
      "index": {
        "description": "The default memory level Equivalent to memoryLevel",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "defaultMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:defaultStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse this default compression strategy for normal data.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultStrategy",
        "fct-type": "function",
        "title": "defaultStrategy"
      },
      "index": {
        "description": "Use this default compression strategy for normal data",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "defaultStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:defaultWindowBits",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e is 15 which is also the maximum size.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultWindowBits",
        "fct-type": "function",
        "title": "defaultWindowBits"
      },
      "index": {
        "description": "The default WindowBits is which is also the maximum size",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "defaultWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:deflateMethod",
      "description": {
        "fct-descr": "\u003cp\u003e'Deflate' is the only method supported in this version of zlib.\n Indeed it is likely to be the only method that ever will be supported.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "Method",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#deflateMethod",
        "fct-type": "function",
        "title": "deflateMethod"
      },
      "index": {
        "description": "Deflate is the only method supported in this version of zlib Indeed it is likely to be the only method that ever will be supported",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "deflateMethod",
        "normalized": "",
        "package": "zlib",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:filteredStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse the filtered compression strategy for data produced by a filter (or\n predictor). Filtered data consists mostly of small values with a somewhat\n random distribution. In this case, the compression algorithm is tuned to\n compress them better. The effect of this strategy is to force more Huffman\n coding and less string matching; it is somewhat intermediate between\n \u003ccode\u003edefaultCompressionStrategy\u003c/code\u003e and \u003ccode\u003ehuffmanOnlyCompressionStrategy\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#filteredStrategy",
        "fct-type": "function",
        "title": "filteredStrategy"
      },
      "index": {
        "description": "Use the filtered compression strategy for data produced by filter or predictor Filtered data consists mostly of small values with somewhat random distribution In this case the compression algorithm is tuned to compress them better The effect of this strategy is to force more Huffman coding and less string matching it is somewhat intermediate between defaultCompressionStrategy and huffmanOnlyCompressionStrategy",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "filteredStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:huffmanOnlyStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse the Huffman-only compression strategy to force Huffman encoding only\n (no string match).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#huffmanOnlyStrategy",
        "fct-type": "function",
        "title": "huffmanOnlyStrategy"
      },
      "index": {
        "description": "Use the Huffman-only compression strategy to force Huffman encoding only no string match",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "huffmanOnlyStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Only Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:maxMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eUse maximum memory for optimal compression speed.\n (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 9\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#maxMemoryLevel",
        "fct-type": "function",
        "title": "maxMemoryLevel"
      },
      "index": {
        "description": "Use maximum memory for optimal compression speed Equivalent to memoryLevel",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "maxMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:memoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eA specific level in the range \u003ccode\u003e1..9\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "Int -\u003e MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#memoryLevel",
        "fct-type": "function",
        "title": "memoryLevel"
      },
      "index": {
        "description": "specific level in the range",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "memoryLevel",
        "normalized": "Int-\u003eMemoryLevel",
        "package": "zlib",
        "partial": "Level",
        "signature": "Int-\u003eMemoryLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:minMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eUse minimum memory. This is slow and reduces the compression ratio.\n (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#minMemoryLevel",
        "fct-type": "function",
        "title": "minMemoryLevel"
      },
      "index": {
        "description": "Use minimum memory This is slow and reduces the compression ratio Equivalent to memoryLevel",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "minMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:noCompression",
      "description": {
        "fct-descr": "\u003cp\u003eNo compression, just a block copy.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#noCompression",
        "fct-type": "function",
        "title": "noCompression"
      },
      "index": {
        "description": "No compression just block copy",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "noCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib-Raw.html#v:windowBits",
      "description": {
        "fct-descr": "\u003cp\u003eA specific compression window size, specified in bits in the range \u003ccode\u003e8..15\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib.Raw",
        "fct-package": "zlib",
        "fct-signature": "Int -\u003e WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#windowBits",
        "fct-type": "function",
        "title": "windowBits"
      },
      "index": {
        "description": "specific compression window size specified in bits in the range",
        "hierarchy": "Codec Compression Zlib Raw",
        "module": "Codec.Compression.Zlib.Raw",
        "name": "windowBits",
        "normalized": "Int-\u003eWindowBits",
        "package": "zlib",
        "partial": "Bits",
        "signature": "Int-\u003eWindowBits"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompression and decompression of data streams in the zlib format.\n\u003c/p\u003e\u003cp\u003eThe format is described in detail in RFC #1950:\n \u003ca\u003ehttp://www.ietf.org/rfc/rfc1950.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSee also the zlib home page: \u003ca\u003ehttp://zlib.net/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "module",
        "fct-source": "src/Codec-Compression-Zlib.html",
        "fct-type": "module",
        "title": "Zlib"
      },
      "index": {
        "description": "Compression and decompression of data streams in the zlib format The format is described in detail in RFC http www.ietf.org rfc rfc1950.txt See also the zlib home page http zlib.net",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "Zlib",
        "normalized": "",
        "package": "zlib",
        "partial": "Zlib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:CompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe full set of parameters for compression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultCompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer containing\n the compressed data. If you know an approximate upper bound on the size of\n the compressed data then setting this parameter can save memory. The default\n compression output buffer size is \u003ccode\u003e16k\u003c/code\u003e. If your extimate is wrong it does\n not matter too much, the default buffer size will be used for the remaining\n chunks.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "data",
        "title": "CompressParams"
      },
      "index": {
        "description": "The full set of parameters for compression The defaults are defaultCompressParams The compressBufferSize is the size of the first output buffer containing the compressed data If you know an approximate upper bound on the size of the compressed data then setting this parameter can save memory The default compression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "CompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:CompressionLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe compression level parameter controls the amount of compression. This\n is a trade-off between the amount of compression and the time required to do\n the compression.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "data",
        "title": "CompressionLevel"
      },
      "index": {
        "description": "The compression level parameter controls the amount of compression This is trade-off between the amount of compression and the time required to do the compression",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "CompressionLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:CompressionStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eThe strategy parameter is used to tune the compression algorithm.\n\u003c/p\u003e\u003cp\u003eThe strategy parameter only affects the compression ratio but not the\n correctness of the compressed output even if it is not set appropriately.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "data",
        "title": "CompressionStrategy"
      },
      "index": {
        "description": "The strategy parameter is used to tune the compression algorithm The strategy parameter only affects the compression ratio but not the correctness of the compressed output even if it is not set appropriately",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "CompressionStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:DecompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe full set of parameters for decompression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultDecompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer,\n containing the uncompressed data. If you know an exact or approximate upper\n bound on the size of the decompressed data then setting this parameter can\n save memory. The default decompression output buffer size is \u003ccode\u003e32k\u003c/code\u003e. If your\n extimate is wrong it does not matter too much, the default buffer size will\n be used for the remaining chunks.\n\u003c/p\u003e\u003cp\u003eOne particular use case for setting the \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is if you\n know the exact size of the decompressed data and want to produce a strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The compression and deccompression functions\n use lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es but if you set the\n \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e correctly then you can generate a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with exactly one chunk, which can be\n converted to a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eO(1)\u003c/code\u003e time using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "data",
        "title": "DecompressParams"
      },
      "index": {
        "description": "The full set of parameters for decompression The defaults are defaultDecompressParams The decompressBufferSize is the size of the first output buffer containing the uncompressed data If you know an exact or approximate upper bound on the size of the decompressed data then setting this parameter can save memory The default decompression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks One particular use case for setting the decompressBufferSize is if you know the exact size of the decompressed data and want to produce strict ByteString The compression and deccompression functions use lazy ByteString but if you set the decompressBufferSize correctly then you can generate lazy ByteString with exactly one chunk which can be converted to strict ByteString in time using concat toChunks",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "DecompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:MemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e parameter specifies how much memory should be allocated\n for the internal compression state. It is a tradoff between memory usage,\n compression ratio and compression speed. Using more memory allows faster\n compression and a better compression ratio.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used for compression depends on the \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e\n and the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. For decompression it depends only on the\n \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e. The totals are given by the functions:\n\u003c/p\u003e\u003cpre\u003e compressTotal windowBits memLevel = 4 * 2^windowBits + 512 * 2^memLevel\n decompressTotal windowBits = 2^windowBits\n\u003c/pre\u003e\u003cp\u003eFor example, for compression with the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e and\n \u003ccode\u003ememLevel = 8\u003c/code\u003e uses \u003ccode\u003e256Kb\u003c/code\u003e. So for example a network server with 100\n concurrent compressed streams would use \u003ccode\u003e25Mb\u003c/code\u003e. The memory per stream can be\n halved (at the cost of somewhat degraded and slower compressionby) by\n reducing the \u003ccode\u003ewindowBits\u003c/code\u003e and \u003ccode\u003ememLevel\u003c/code\u003e by one.\n\u003c/p\u003e\u003cp\u003eDecompression takes less memory, the default \u003ccode\u003ewindowBits = 15\u003c/code\u003e corresponds\n to just \u003ccode\u003e32Kb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "data",
        "title": "MemoryLevel"
      },
      "index": {
        "description": "The MemoryLevel parameter specifies how much memory should be allocated for the internal compression state It is tradoff between memory usage compression ratio and compression speed Using more memory allows faster compression and better compression ratio The total amount of memory used for compression depends on the WindowBits and the MemoryLevel For decompression it depends only on the WindowBits The totals are given by the functions compressTotal windowBits memLevel windowBits memLevel decompressTotal windowBits windowBits For example for compression with the default windowBits and memLevel uses Kb So for example network server with concurrent compressed streams would use Mb The memory per stream can be halved at the cost of somewhat degraded and slower compressionby by reducing the windowBits and memLevel by one Decompression takes less memory the default windowBits corresponds to just Kb",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "MemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:Method",
      "description": {
        "fct-descr": "\u003cp\u003eThe compression method\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Method",
        "fct-type": "data",
        "title": "Method"
      },
      "index": {
        "description": "The compression method",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "Method",
        "normalized": "",
        "package": "zlib",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#t:WindowBits",
      "description": {
        "fct-descr": "\u003cp\u003eThis specifies the size of the compression window. Larger values of this\n parameter result in better compression at the expense of higher memory\n usage.\n\u003c/p\u003e\u003cp\u003eThe compression window size is the value of the the window bits raised to\n the power 2. The window bits must be in the range \u003ccode\u003e8..15\u003c/code\u003e which corresponds\n to compression window sizes of 256b to 32Kb. The default is 15 which is also\n the maximum size.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used depends on the window bits and the\n \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. See the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e for the details.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
        "fct-type": "data",
        "title": "WindowBits"
      },
      "index": {
        "description": "This specifies the size of the compression window Larger values of this parameter result in better compression at the expense of higher memory usage The compression window size is the value of the the window bits raised to the power The window bits must be in the range which corresponds to compression window sizes of to Kb The default is which is also the maximum size The total amount of memory used depends on the window bits and the MemoryLevel See the MemoryLevel for the details",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "WindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:BestCompression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use bestCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "BestCompression",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "BestCompression"
      },
      "index": {
        "description": "Deprecated Use bestCompression CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "BestCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Best Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:BestSpeed",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use bestSpeed. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "BestSpeed",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "BestSpeed"
      },
      "index": {
        "description": "Deprecated Use bestSpeed CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "BestSpeed",
        "normalized": "",
        "package": "zlib",
        "partial": "Best Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:CompressParams",
      "description": {
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "CompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "CompressParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "CompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:CompressionLevel",
      "description": {
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel Int",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "CompressionLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "CompressionLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:DecompressParams",
      "description": {
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "DecompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "DecompressParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "DecompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:DefaultCompression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "DefaultCompression",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "DefaultCompression"
      },
      "index": {
        "description": "Deprecated Use defaultCompression CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "DefaultCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:DefaultMemoryLevel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "DefaultMemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "DefaultMemoryLevel"
      },
      "index": {
        "description": "Deprecated Use defaultMemoryLevel MemoryLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "DefaultMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:DefaultStrategy",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "DefaultStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "function",
        "title": "DefaultStrategy"
      },
      "index": {
        "description": "Deprecated Use defaultStrategy CompressionStrategy constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "DefaultStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:DefaultWindowBits",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use defaultWindowBits. WindowBits constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "DefaultWindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
        "fct-type": "function",
        "title": "DefaultWindowBits"
      },
      "index": {
        "description": "Deprecated Use defaultWindowBits WindowBits constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "DefaultWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Default Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:Deflated",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use deflateMethod. Method constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "Deflated",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#Method",
        "fct-type": "function",
        "title": "Deflated"
      },
      "index": {
        "description": "Deprecated Use deflateMethod Method constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "Deflated",
        "normalized": "",
        "package": "zlib",
        "partial": "Deflated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:Filtered",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use filteredStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "Filtered",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "function",
        "title": "Filtered"
      },
      "index": {
        "description": "Deprecated Use filteredStrategy CompressionStrategy constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "Filtered",
        "normalized": "",
        "package": "zlib",
        "partial": "Filtered",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:HuffmanOnly",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use huffmanOnlyStrategy. CompressionStrategy constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "HuffmanOnly",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionStrategy",
        "fct-type": "function",
        "title": "HuffmanOnly"
      },
      "index": {
        "description": "Deprecated Use huffmanOnlyStrategy CompressionStrategy constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "HuffmanOnly",
        "normalized": "",
        "package": "zlib",
        "partial": "Huffman Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:MaxMemoryLevel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use maxMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "MaxMemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MaxMemoryLevel"
      },
      "index": {
        "description": "Deprecated Use maxMemoryLevel MemoryLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "MaxMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Max Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:MemoryLevel",
      "description": {
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel Int",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MemoryLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "MemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:MinMemoryLevel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use minMemoryLevel. MemoryLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "MinMemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MinMemoryLevel"
      },
      "index": {
        "description": "Deprecated Use minMemoryLevel MemoryLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "MinMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Min Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:NoCompression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use noCompression. CompressionLevel constructors will be hidden in version 0.7\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "NoCompression",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#CompressionLevel",
        "fct-type": "function",
        "title": "NoCompression"
      },
      "index": {
        "description": "Deprecated Use noCompression CompressionLevel constructors will be hidden in version",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "NoCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "No Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:WindowBits",
      "description": {
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "WindowBits Int",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#WindowBits",
        "fct-type": "function",
        "title": "WindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "WindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:bestCompression",
      "description": {
        "fct-descr": "\u003cp\u003eThe slowest compression method (best compression).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#bestCompression",
        "fct-type": "function",
        "title": "bestCompression"
      },
      "index": {
        "description": "The slowest compression method best compression",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "bestCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:bestSpeed",
      "description": {
        "fct-descr": "\u003cp\u003eThe fastest compression method (less compression)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#bestSpeed",
        "fct-type": "function",
        "title": "bestSpeed"
      },
      "index": {
        "description": "The fastest compression method less compression",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "bestSpeed",
        "normalized": "",
        "package": "zlib",
        "partial": "Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompress a stream of data into the zlib format.\n\u003c/p\u003e\u003cp\u003eThis uses the default compression parameters. In partiular it uses the\n default compression level which favours a higher compression ratio over\n compression speed, though it does not use the maximum compression level.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ecompressWith\u003c/a\u003e\u003c/code\u003e to adjust the compression level or other compression\n parameters.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Zlib.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Compress stream of data into the zlib format This uses the default compression parameters In partiular it uses the default compression level which favours higher compression ratio over compression speed though it does not use the maximum compression level Use compressWith to adjust the compression level or other compression parameters",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "compress",
        "normalized": "ByteString-\u003eByteString",
        "package": "zlib",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressBufferSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressBufferSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "compressBufferSize",
        "normalized": "",
        "package": "zlib",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressDictionary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressDictionary"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "compressDictionary",
        "normalized": "",
        "package": "zlib",
        "partial": "Dictionary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "!CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "compressLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressMemoryLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "!MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressMemoryLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "compressMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "!Method",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "compressMethod",
        "normalized": "",
        "package": "zlib",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressStrategy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "!CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressStrategy"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "compressStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressWindowBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "!WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressWindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "compressWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecompress\u003c/a\u003e\u003c/code\u003e but with the ability to specify various compression\n parameters. Typical usage:\n\u003c/p\u003e\u003cpre\u003e compressWith defaultCompressParams { ... }\n\u003c/pre\u003e\u003cp\u003eIn particular you can set the compression level:\n\u003c/p\u003e\u003cpre\u003e compressWith defaultCompressParams { compressLevel = BestCompression }\n\u003c/pre\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "CompressParams -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Zlib.html#compressWith",
        "fct-type": "function",
        "title": "compressWith"
      },
      "index": {
        "description": "Like compress but with the ability to specify various compression parameters Typical usage compressWith defaultCompressParams In particular you can set the compression level compressWith defaultCompressParams compressLevel BestCompression",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "compressWith",
        "normalized": "CompressParams-\u003eByteString-\u003eByteString",
        "package": "zlib",
        "partial": "With",
        "signature": "CompressParams-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:compressionLevel",
      "description": {
        "fct-descr": "\u003cp\u003eA specific compression level between 0 and 9.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "Int -\u003e CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#compressionLevel",
        "fct-type": "function",
        "title": "compressionLevel"
      },
      "index": {
        "description": "specific compression level between and",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "compressionLevel",
        "normalized": "Int-\u003eCompressionLevel",
        "package": "zlib",
        "partial": "Level",
        "signature": "Int-\u003eCompressionLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress a stream of data in the zlib format.\n\u003c/p\u003e\u003cp\u003eThere are a number of errors that can occur. In each case an exception will\n be thrown. The possible error conditions are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if the stream does not start with a valid gzip header\n\u003c/li\u003e\u003cli\u003e if the compressed stream is corrupted\n\u003c/li\u003e\u003cli\u003e if the compressed stream ends permaturely\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that the decompression is performed \u003cem\u003elazily\u003c/em\u003e. Errors in the data stream\n may not be detected until the end of the stream is demanded (since it is\n only at the end that the final checksum can be checked). If this is\n important to you, you must make sure to consume the whole decompressed\n stream before doing any IO action that depends on it.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Zlib.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompress stream of data in the zlib format There are number of errors that can occur In each case an exception will be thrown The possible error conditions are if the stream does not start with valid gzip header if the compressed stream is corrupted if the compressed stream ends permaturely Note that the decompression is performed lazily Errors in the data stream may not be detected until the end of the stream is demanded since it is only at the end that the final checksum can be checked If this is important to you you must make sure to consume the whole decompressed stream before doing any IO action that depends on it",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "decompress",
        "normalized": "ByteString-\u003eByteString",
        "package": "zlib",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:decompressBufferSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "!Int",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressBufferSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "decompressBufferSize",
        "normalized": "",
        "package": "zlib",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:decompressDictionary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressDictionary"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "decompressDictionary",
        "normalized": "",
        "package": "zlib",
        "partial": "Dictionary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:decompressWindowBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "!WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressWindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "decompressWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:decompressWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e but with the ability to specify various decompression\n parameters. Typical usage:\n\u003c/p\u003e\u003cpre\u003e decompressWith defaultCompressParams { ... }\n\u003c/pre\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "DecompressParams -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-Zlib.html#decompressWith",
        "fct-type": "function",
        "title": "decompressWith"
      },
      "index": {
        "description": "Like decompress but with the ability to specify various decompression parameters Typical usage decompressWith defaultCompressParams",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "decompressWith",
        "normalized": "DecompressParams-\u003eByteString-\u003eByteString",
        "package": "zlib",
        "partial": "With",
        "signature": "DecompressParams-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:defaultCompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of parameters for compression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific parameters overridden.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "CompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#defaultCompressParams",
        "fct-type": "function",
        "title": "defaultCompressParams"
      },
      "index": {
        "description": "The default set of parameters for compression This is typically used with the compressWith function with specific parameters overridden",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "defaultCompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:defaultCompression",
      "description": {
        "fct-descr": "\u003cp\u003eThe default compression level is 6 (that is, biased towards higher\n compression at expense of speed).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultCompression",
        "fct-type": "function",
        "title": "defaultCompression"
      },
      "index": {
        "description": "The default compression level is that is biased towards higher compression at expense of speed",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "defaultCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:defaultDecompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of parameters for decompression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific parameters overridden.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "DecompressParams",
        "fct-source": "src/Codec-Compression-Zlib-Internal.html#defaultDecompressParams",
        "fct-type": "function",
        "title": "defaultDecompressParams"
      },
      "index": {
        "description": "The default set of parameters for decompression This is typically used with the compressWith function with specific parameters overridden",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "defaultDecompressParams",
        "normalized": "",
        "package": "zlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:defaultMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe default memory level. (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 8\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultMemoryLevel",
        "fct-type": "function",
        "title": "defaultMemoryLevel"
      },
      "index": {
        "description": "The default memory level Equivalent to memoryLevel",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "defaultMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:defaultStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse this default compression strategy for normal data.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultStrategy",
        "fct-type": "function",
        "title": "defaultStrategy"
      },
      "index": {
        "description": "Use this default compression strategy for normal data",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "defaultStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:defaultWindowBits",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e is 15 which is also the maximum size.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#defaultWindowBits",
        "fct-type": "function",
        "title": "defaultWindowBits"
      },
      "index": {
        "description": "The default WindowBits is which is also the maximum size",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "defaultWindowBits",
        "normalized": "",
        "package": "zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:deflateMethod",
      "description": {
        "fct-descr": "\u003cp\u003e'Deflate' is the only method supported in this version of zlib.\n Indeed it is likely to be the only method that ever will be supported.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "Method",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#deflateMethod",
        "fct-type": "function",
        "title": "deflateMethod"
      },
      "index": {
        "description": "Deflate is the only method supported in this version of zlib Indeed it is likely to be the only method that ever will be supported",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "deflateMethod",
        "normalized": "",
        "package": "zlib",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:filteredStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse the filtered compression strategy for data produced by a filter (or\n predictor). Filtered data consists mostly of small values with a somewhat\n random distribution. In this case, the compression algorithm is tuned to\n compress them better. The effect of this strategy is to force more Huffman\n coding and less string matching; it is somewhat intermediate between\n \u003ccode\u003edefaultCompressionStrategy\u003c/code\u003e and \u003ccode\u003ehuffmanOnlyCompressionStrategy\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#filteredStrategy",
        "fct-type": "function",
        "title": "filteredStrategy"
      },
      "index": {
        "description": "Use the filtered compression strategy for data produced by filter or predictor Filtered data consists mostly of small values with somewhat random distribution In this case the compression algorithm is tuned to compress them better The effect of this strategy is to force more Huffman coding and less string matching it is somewhat intermediate between defaultCompressionStrategy and huffmanOnlyCompressionStrategy",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "filteredStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:huffmanOnlyStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse the Huffman-only compression strategy to force Huffman encoding only\n (no string match).\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "CompressionStrategy",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#huffmanOnlyStrategy",
        "fct-type": "function",
        "title": "huffmanOnlyStrategy"
      },
      "index": {
        "description": "Use the Huffman-only compression strategy to force Huffman encoding only no string match",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "huffmanOnlyStrategy",
        "normalized": "",
        "package": "zlib",
        "partial": "Only Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:maxMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eUse maximum memory for optimal compression speed.\n (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 9\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#maxMemoryLevel",
        "fct-type": "function",
        "title": "maxMemoryLevel"
      },
      "index": {
        "description": "Use maximum memory for optimal compression speed Equivalent to memoryLevel",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "maxMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:memoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eA specific level in the range \u003ccode\u003e1..9\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "Int -\u003e MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#memoryLevel",
        "fct-type": "function",
        "title": "memoryLevel"
      },
      "index": {
        "description": "specific level in the range",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "memoryLevel",
        "normalized": "Int-\u003eMemoryLevel",
        "package": "zlib",
        "partial": "Level",
        "signature": "Int-\u003eMemoryLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:minMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eUse minimum memory. This is slow and reduces the compression ratio.\n (Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememoryLevel\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#minMemoryLevel",
        "fct-type": "function",
        "title": "minMemoryLevel"
      },
      "index": {
        "description": "Use minimum memory This is slow and reduces the compression ratio Equivalent to memoryLevel",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "minMemoryLevel",
        "normalized": "",
        "package": "zlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:noCompression",
      "description": {
        "fct-descr": "\u003cp\u003eNo compression, just a block copy.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "CompressionLevel",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#noCompression",
        "fct-type": "function",
        "title": "noCompression"
      },
      "index": {
        "description": "No compression just block copy",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "noCompression",
        "normalized": "",
        "package": "zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib/docs/Codec-Compression-Zlib.html#v:windowBits",
      "description": {
        "fct-descr": "\u003cp\u003eA specific compression window size, specified in bits in the range \u003ccode\u003e8..15\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.Zlib",
        "fct-package": "zlib",
        "fct-signature": "Int -\u003e WindowBits",
        "fct-source": "src/Codec-Compression-Zlib-Stream.html#windowBits",
        "fct-type": "function",
        "title": "windowBits"
      },
      "index": {
        "description": "specific compression window size specified in bits in the range",
        "hierarchy": "Codec Compression Zlib",
        "module": "Codec.Compression.Zlib",
        "name": "windowBits",
        "normalized": "Int-\u003eWindowBits",
        "package": "zlib",
        "partial": "Bits",
        "signature": "Int-\u003eWindowBits"
      }
    }
  }
]