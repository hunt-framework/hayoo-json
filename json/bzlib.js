[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure stream based interface to lower level bzlib wrapper\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "module",
        "fct-source": "src/Codec-Compression-BZip-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Pure stream based interface to lower level bzlib wrapper",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "bzlib",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#t:BlockSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe block size affects both the compression ratio achieved, and the amount\n of memory needed for compression and decompression.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eBlockSize\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e through \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBlockSize\u003c/a\u003e\u003c/code\u003e 9\u003c/code\u003e specify the block size to be 100,000\n bytes through 900,000 bytes respectively. The default is to use the maximum\n block size.\n\u003c/p\u003e\u003cp\u003eLarger block sizes give rapidly diminishing marginal returns. Most of the\n compression comes from the first two or three hundred k of block size, a\n fact worth bearing in mind when using bzip2 on small machines. It is also\n important to appreciate that the decompression memory requirement is set at\n compression time by the choice of block size.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e In general, try and use the largest block size memory constraints allow,\n since that maximises the compression achieved.\n\u003c/li\u003e\u003cli\u003e Compression and decompression speed are virtually unaffected by block\n size.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAnother significant point applies to files which fit in a single block -\n that means most files you'd encounter using a large block size. The amount\n of real memory touched is proportional to the size of the file, since the\n file is smaller than a block. For example, compressing a file 20,000 bytes\n long with the flag \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBlockSize\u003c/a\u003e\u003c/code\u003e 9\u003c/code\u003e will cause the compressor to allocate\n around 7600k of memory, but only touch 400k + 20000 * 8 = 560 kbytes of it.\n Similarly, the decompressor will allocate 3700k but only touch 100k + 20000\n * 4 = 180 kbytes.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#BlockSize",
        "fct-type": "data",
        "title": "BlockSize"
      },
      "index": {
        "description": "The block size affects both the compression ratio achieved and the amount of memory needed for compression and decompression BlockSize through BlockSize specify the block size to be bytes through bytes respectively The default is to use the maximum block size Larger block sizes give rapidly diminishing marginal returns Most of the compression comes from the first two or three hundred of block size fact worth bearing in mind when using bzip2 on small machines It is also important to appreciate that the decompression memory requirement is set at compression time by the choice of block size In general try and use the largest block size memory constraints allow since that maximises the compression achieved Compression and decompression speed are virtually unaffected by block size Another significant point applies to files which fit in single block that means most files you encounter using large block size The amount of real memory touched is proportional to the size of the file since the file is smaller than block For example compressing file bytes long with the flag BlockSize will cause the compressor to allocate around of memory but only touch kbytes of it Similarly the decompressor will allocate but only touch kbytes",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "BlockSize",
        "normalized": "",
        "package": "bzlib",
        "partial": "Block Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#t:CompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe full set of parameters for compression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultCompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer containing\n the compressed data. If you know an approximate upper bound on the size of\n the compressed data then setting this parameter can save memory. The default\n compression output buffer size is \u003ccode\u003e16k\u003c/code\u003e. If your extimate is wrong it does\n not matter too much, the default buffer size will be used for the remaining\n chunks.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#CompressParams",
        "fct-type": "data",
        "title": "CompressParams"
      },
      "index": {
        "description": "The full set of parameters for compression The defaults are defaultCompressParams The compressBufferSize is the size of the first output buffer containing the compressed data If you know an approximate upper bound on the size of the compressed data then setting this parameter can save memory The default compression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "CompressParams",
        "normalized": "",
        "package": "bzlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#t:DecompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe full set of parameters for decompression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultDecompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer,\n containing the uncompressed data. If you know an exact or approximate upper\n bound on the size of the decompressed data then setting this parameter can\n save memory. The default decompression output buffer size is \u003ccode\u003e32k\u003c/code\u003e. If your\n extimate is wrong it does not matter too much, the default buffer size will\n be used for the remaining chunks.\n\u003c/p\u003e\u003cp\u003eOne particular use case for setting the \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is if you\n know the exact size of the decompressed data and want to produce a strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The compression and deccompression functions\n use lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es but if you set the\n \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e correctly then you can generate a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with exactly one chunk, which can be\n converted to a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eO(1)\u003c/code\u003e time using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#DecompressParams",
        "fct-type": "data",
        "title": "DecompressParams"
      },
      "index": {
        "description": "The full set of parameters for decompression The defaults are defaultDecompressParams The decompressBufferSize is the size of the first output buffer containing the uncompressed data If you know an exact or approximate upper bound on the size of the decompressed data then setting this parameter can save memory The default decompression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks One particular use case for setting the decompressBufferSize is if you know the exact size of the decompressed data and want to produce strict ByteString The compression and deccompression functions use lazy ByteString but if you set the decompressBufferSize correctly then you can generate lazy ByteString with exactly one chunk which can be converted to strict ByteString in time using concat toChunks",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "DecompressParams",
        "normalized": "",
        "package": "bzlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#t:MemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eFor files compressed with the default 900k block size, decompression will\n require about 3700k to decompress. To support decompression of any file in\n less than 4Mb there is the option to decompress using approximately half\n this amount of memory, about 2300k. Decompression speed is also halved,\n so you should use this option only where necessary. \n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#MemoryLevel",
        "fct-type": "data",
        "title": "MemoryLevel"
      },
      "index": {
        "description": "For files compressed with the default block size decompression will require about to decompress To support decompression of any file in less than Mb there is the option to decompress using approximately half this amount of memory about Decompression speed is also halved so you should use this option only where necessary",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "MemoryLevel",
        "normalized": "",
        "package": "bzlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#t:WorkFactor",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eWorkFactor\u003c/a\u003e\u003c/code\u003e parameter controls how the compression phase behaves when\n presented with worst case, highly repetitive, input data. If compression\n runs into difficulties caused by repetitive data, the library switches from\n the standard sorting algorithm to a fallback algorithm. The fallback is\n slower than the standard algorithm by perhaps a factor of three, but always\n behaves reasonably, no matter how bad the input.\n\u003c/p\u003e\u003cp\u003eLower values of \u003ccode\u003e\u003ca\u003eWorkFactor\u003c/a\u003e\u003c/code\u003e reduce the amount of effort the standard\n algorithm will expend before resorting to the fallback. You should set this\n parameter carefully; too low, and many inputs will be handled by the\n fallback algorithm and so compress rather slowly, too high, and your\n average-to-worst case compression times can become very large. The default\n value of 30 gives reasonable behaviour over a wide range of circumstances.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Note that the compressed output generated is the same regardless of\n whether or not the fallback algorithm is used.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#WorkFactor",
        "fct-type": "data",
        "title": "WorkFactor"
      },
      "index": {
        "description": "The WorkFactor parameter controls how the compression phase behaves when presented with worst case highly repetitive input data If compression runs into difficulties caused by repetitive data the library switches from the standard sorting algorithm to fallback algorithm The fallback is slower than the standard algorithm by perhaps factor of three but always behaves reasonably no matter how bad the input Lower values of WorkFactor reduce the amount of effort the standard algorithm will expend before resorting to the fallback You should set this parameter carefully too low and many inputs will be handled by the fallback algorithm and so compress rather slowly too high and your average-to-worst case compression times can become very large The default value of gives reasonable behaviour over wide range of circumstances Note that the compressed output generated is the same regardless of whether or not the fallback algorithm is used",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "WorkFactor",
        "normalized": "",
        "package": "bzlib",
        "partial": "Work Factor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:BlockSize",
      "description": {
        "fct-descr": "\u003cp\u003eA specific block size between 1 and 9.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "BlockSize Int",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#BlockSize",
        "fct-type": "function",
        "title": "BlockSize"
      },
      "index": {
        "description": "specific block size between and",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "BlockSize",
        "normalized": "",
        "package": "bzlib",
        "partial": "Block Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:CompressParams",
      "description": {
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "CompressParams",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "CompressParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "CompressParams",
        "normalized": "",
        "package": "bzlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:DecompressParams",
      "description": {
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "DecompressParams",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "DecompressParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "DecompressParams",
        "normalized": "",
        "package": "bzlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:DefaultBlockSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe default block size is also the maximum.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "DefaultBlockSize",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#BlockSize",
        "fct-type": "function",
        "title": "DefaultBlockSize"
      },
      "index": {
        "description": "The default block size is also the maximum",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "DefaultBlockSize",
        "normalized": "",
        "package": "bzlib",
        "partial": "Default Block Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:DefaultMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe default.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "DefaultMemoryLevel",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "DefaultMemoryLevel"
      },
      "index": {
        "description": "The default",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "DefaultMemoryLevel",
        "normalized": "",
        "package": "bzlib",
        "partial": "Default Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:DefaultWorkFactor",
      "description": {
        "fct-descr": "\u003cp\u003eThe default work factor is 30.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "DefaultWorkFactor",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#WorkFactor",
        "fct-type": "function",
        "title": "DefaultWorkFactor"
      },
      "index": {
        "description": "The default work factor is",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "DefaultWorkFactor",
        "normalized": "",
        "package": "bzlib",
        "partial": "Default Work Factor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:MinMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eUse minimum memory dusing decompression. This\n   halves the memory needed but also halves the\n   decompression speed.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "MinMemoryLevel",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MinMemoryLevel"
      },
      "index": {
        "description": "Use minimum memory dusing decompression This halves the memory needed but also halves the decompression speed",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "MinMemoryLevel",
        "normalized": "",
        "package": "bzlib",
        "partial": "Min Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:WorkFactor",
      "description": {
        "fct-descr": "\u003cp\u003eAllowable values range from 1 to 250 inclusive.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "WorkFactor Int",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#WorkFactor",
        "fct-type": "function",
        "title": "WorkFactor"
      },
      "index": {
        "description": "Allowable values range from to inclusive",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "WorkFactor",
        "normalized": "",
        "package": "bzlib",
        "partial": "Work Factor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:compress",
      "description": {
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "CompressParams -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "compress",
        "normalized": "CompressParams-\u003eByteString-\u003eByteString",
        "package": "bzlib",
        "partial": "",
        "signature": "CompressParams-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:compressBlockSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "BlockSize",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressBlockSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "compressBlockSize",
        "normalized": "",
        "package": "bzlib",
        "partial": "Block Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:compressBufferSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "Int",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressBufferSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "compressBufferSize",
        "normalized": "",
        "package": "bzlib",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:compressWorkFactor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "WorkFactor",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressWorkFactor"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "compressWorkFactor",
        "normalized": "",
        "package": "bzlib",
        "partial": "Work Factor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:decompress",
      "description": {
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "DecompressParams -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "decompress",
        "normalized": "DecompressParams-\u003eByteString-\u003eByteString",
        "package": "bzlib",
        "partial": "",
        "signature": "DecompressParams-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:decompressBufferSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "Int",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressBufferSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "decompressBufferSize",
        "normalized": "",
        "package": "bzlib",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:decompressMemoryLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressMemoryLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "decompressMemoryLevel",
        "normalized": "",
        "package": "bzlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:defaultCompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of parameters for compression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific paramaters overridden.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "CompressParams",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#defaultCompressParams",
        "fct-type": "function",
        "title": "defaultCompressParams"
      },
      "index": {
        "description": "The default set of parameters for compression This is typically used with the compressWith function with specific paramaters overridden",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "defaultCompressParams",
        "normalized": "",
        "package": "bzlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip-Internal.html#v:defaultDecompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of parameters for decompression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific paramaters overridden.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip.Internal",
        "fct-package": "bzlib",
        "fct-signature": "DecompressParams",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#defaultDecompressParams",
        "fct-type": "function",
        "title": "defaultDecompressParams"
      },
      "index": {
        "description": "The default set of parameters for decompression This is typically used with the compressWith function with specific paramaters overridden",
        "hierarchy": "Codec Compression BZip Internal",
        "module": "Codec.Compression.BZip.Internal",
        "name": "defaultDecompressParams",
        "normalized": "",
        "package": "bzlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompression and decompression of data streams in the bzip2 format.\n\u003c/p\u003e\u003cp\u003ebzip2 is a freely available, patent free, high-quality data compressor. It\n typically compresses files to within 10% to 15% of the best available\n techniques (the PPM family of statistical compressors), whilst being around\n twice as fast at compression and six times faster at decompression.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.bzip.org/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "module",
        "fct-source": "src/Codec-Compression-BZip.html",
        "fct-type": "module",
        "title": "BZip"
      },
      "index": {
        "description": "Compression and decompression of data streams in the bzip2 format bzip2 is freely available patent free high-quality data compressor It typically compresses files to within to of the best available techniques the PPM family of statistical compressors whilst being around twice as fast at compression and six times faster at decompression http www.bzip.org",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "BZip",
        "normalized": "",
        "package": "bzlib",
        "partial": "BZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#t:BlockSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe block size affects both the compression ratio achieved, and the amount\n of memory needed for compression and decompression.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eBlockSize\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e through \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBlockSize\u003c/a\u003e\u003c/code\u003e 9\u003c/code\u003e specify the block size to be 100,000\n bytes through 900,000 bytes respectively. The default is to use the maximum\n block size.\n\u003c/p\u003e\u003cp\u003eLarger block sizes give rapidly diminishing marginal returns. Most of the\n compression comes from the first two or three hundred k of block size, a\n fact worth bearing in mind when using bzip2 on small machines. It is also\n important to appreciate that the decompression memory requirement is set at\n compression time by the choice of block size.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e In general, try and use the largest block size memory constraints allow,\n since that maximises the compression achieved.\n\u003c/li\u003e\u003cli\u003e Compression and decompression speed are virtually unaffected by block\n size.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAnother significant point applies to files which fit in a single block -\n that means most files you'd encounter using a large block size. The amount\n of real memory touched is proportional to the size of the file, since the\n file is smaller than a block. For example, compressing a file 20,000 bytes\n long with the flag \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBlockSize\u003c/a\u003e\u003c/code\u003e 9\u003c/code\u003e will cause the compressor to allocate\n around 7600k of memory, but only touch 400k + 20000 * 8 = 560 kbytes of it.\n Similarly, the decompressor will allocate 3700k but only touch 100k + 20000\n * 4 = 180 kbytes.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#BlockSize",
        "fct-type": "data",
        "title": "BlockSize"
      },
      "index": {
        "description": "The block size affects both the compression ratio achieved and the amount of memory needed for compression and decompression BlockSize through BlockSize specify the block size to be bytes through bytes respectively The default is to use the maximum block size Larger block sizes give rapidly diminishing marginal returns Most of the compression comes from the first two or three hundred of block size fact worth bearing in mind when using bzip2 on small machines It is also important to appreciate that the decompression memory requirement is set at compression time by the choice of block size In general try and use the largest block size memory constraints allow since that maximises the compression achieved Compression and decompression speed are virtually unaffected by block size Another significant point applies to files which fit in single block that means most files you encounter using large block size The amount of real memory touched is proportional to the size of the file since the file is smaller than block For example compressing file bytes long with the flag BlockSize will cause the compressor to allocate around of memory but only touch kbytes of it Similarly the decompressor will allocate but only touch kbytes",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "BlockSize",
        "normalized": "",
        "package": "bzlib",
        "partial": "Block Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#t:CompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe full set of parameters for compression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultCompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer containing\n the compressed data. If you know an approximate upper bound on the size of\n the compressed data then setting this parameter can save memory. The default\n compression output buffer size is \u003ccode\u003e16k\u003c/code\u003e. If your extimate is wrong it does\n not matter too much, the default buffer size will be used for the remaining\n chunks.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#CompressParams",
        "fct-type": "data",
        "title": "CompressParams"
      },
      "index": {
        "description": "The full set of parameters for compression The defaults are defaultCompressParams The compressBufferSize is the size of the first output buffer containing the compressed data If you know an approximate upper bound on the size of the compressed data then setting this parameter can save memory The default compression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "CompressParams",
        "normalized": "",
        "package": "bzlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#t:DecompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe full set of parameters for decompression. The defaults are\n \u003ccode\u003e\u003ca\u003edefaultDecompressParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is the size of the first output buffer,\n containing the uncompressed data. If you know an exact or approximate upper\n bound on the size of the decompressed data then setting this parameter can\n save memory. The default decompression output buffer size is \u003ccode\u003e32k\u003c/code\u003e. If your\n extimate is wrong it does not matter too much, the default buffer size will\n be used for the remaining chunks.\n\u003c/p\u003e\u003cp\u003eOne particular use case for setting the \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e is if you\n know the exact size of the decompressed data and want to produce a strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The compression and deccompression functions\n use lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es but if you set the\n \u003ccode\u003e\u003ca\u003edecompressBufferSize\u003c/a\u003e\u003c/code\u003e correctly then you can generate a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with exactly one chunk, which can be\n converted to a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eO(1)\u003c/code\u003e time using\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoChunks\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#DecompressParams",
        "fct-type": "data",
        "title": "DecompressParams"
      },
      "index": {
        "description": "The full set of parameters for decompression The defaults are defaultDecompressParams The decompressBufferSize is the size of the first output buffer containing the uncompressed data If you know an exact or approximate upper bound on the size of the decompressed data then setting this parameter can save memory The default decompression output buffer size is If your extimate is wrong it does not matter too much the default buffer size will be used for the remaining chunks One particular use case for setting the decompressBufferSize is if you know the exact size of the decompressed data and want to produce strict ByteString The compression and deccompression functions use lazy ByteString but if you set the decompressBufferSize correctly then you can generate lazy ByteString with exactly one chunk which can be converted to strict ByteString in time using concat toChunks",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "DecompressParams",
        "normalized": "",
        "package": "bzlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#t:MemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eFor files compressed with the default 900k block size, decompression will\n require about 3700k to decompress. To support decompression of any file in\n less than 4Mb there is the option to decompress using approximately half\n this amount of memory, about 2300k. Decompression speed is also halved,\n so you should use this option only where necessary. \n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#MemoryLevel",
        "fct-type": "data",
        "title": "MemoryLevel"
      },
      "index": {
        "description": "For files compressed with the default block size decompression will require about to decompress To support decompression of any file in less than Mb there is the option to decompress using approximately half this amount of memory about Decompression speed is also halved so you should use this option only where necessary",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "MemoryLevel",
        "normalized": "",
        "package": "bzlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#t:WorkFactor",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eWorkFactor\u003c/a\u003e\u003c/code\u003e parameter controls how the compression phase behaves when\n presented with worst case, highly repetitive, input data. If compression\n runs into difficulties caused by repetitive data, the library switches from\n the standard sorting algorithm to a fallback algorithm. The fallback is\n slower than the standard algorithm by perhaps a factor of three, but always\n behaves reasonably, no matter how bad the input.\n\u003c/p\u003e\u003cp\u003eLower values of \u003ccode\u003e\u003ca\u003eWorkFactor\u003c/a\u003e\u003c/code\u003e reduce the amount of effort the standard\n algorithm will expend before resorting to the fallback. You should set this\n parameter carefully; too low, and many inputs will be handled by the\n fallback algorithm and so compress rather slowly, too high, and your\n average-to-worst case compression times can become very large. The default\n value of 30 gives reasonable behaviour over a wide range of circumstances.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Note that the compressed output generated is the same regardless of\n whether or not the fallback algorithm is used.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "data",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#WorkFactor",
        "fct-type": "data",
        "title": "WorkFactor"
      },
      "index": {
        "description": "The WorkFactor parameter controls how the compression phase behaves when presented with worst case highly repetitive input data If compression runs into difficulties caused by repetitive data the library switches from the standard sorting algorithm to fallback algorithm The fallback is slower than the standard algorithm by perhaps factor of three but always behaves reasonably no matter how bad the input Lower values of WorkFactor reduce the amount of effort the standard algorithm will expend before resorting to the fallback You should set this parameter carefully too low and many inputs will be handled by the fallback algorithm and so compress rather slowly too high and your average-to-worst case compression times can become very large The default value of gives reasonable behaviour over wide range of circumstances Note that the compressed output generated is the same regardless of whether or not the fallback algorithm is used",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "WorkFactor",
        "normalized": "",
        "package": "bzlib",
        "partial": "Work Factor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:BlockSize",
      "description": {
        "fct-descr": "\u003cp\u003eA specific block size between 1 and 9.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "BlockSize Int",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#BlockSize",
        "fct-type": "function",
        "title": "BlockSize"
      },
      "index": {
        "description": "specific block size between and",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "BlockSize",
        "normalized": "",
        "package": "bzlib",
        "partial": "Block Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:CompressParams",
      "description": {
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "CompressParams",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "CompressParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "CompressParams",
        "normalized": "",
        "package": "bzlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:DecompressParams",
      "description": {
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "DecompressParams",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "DecompressParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "DecompressParams",
        "normalized": "",
        "package": "bzlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:DefaultBlockSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe default block size is also the maximum.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "DefaultBlockSize",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#BlockSize",
        "fct-type": "function",
        "title": "DefaultBlockSize"
      },
      "index": {
        "description": "The default block size is also the maximum",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "DefaultBlockSize",
        "normalized": "",
        "package": "bzlib",
        "partial": "Default Block Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:DefaultMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eThe default.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "DefaultMemoryLevel",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "DefaultMemoryLevel"
      },
      "index": {
        "description": "The default",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "DefaultMemoryLevel",
        "normalized": "",
        "package": "bzlib",
        "partial": "Default Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:DefaultWorkFactor",
      "description": {
        "fct-descr": "\u003cp\u003eThe default work factor is 30.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "DefaultWorkFactor",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#WorkFactor",
        "fct-type": "function",
        "title": "DefaultWorkFactor"
      },
      "index": {
        "description": "The default work factor is",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "DefaultWorkFactor",
        "normalized": "",
        "package": "bzlib",
        "partial": "Default Work Factor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:MinMemoryLevel",
      "description": {
        "fct-descr": "\u003cp\u003eUse minimum memory dusing decompression. This\n   halves the memory needed but also halves the\n   decompression speed.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "MinMemoryLevel",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#MemoryLevel",
        "fct-type": "function",
        "title": "MinMemoryLevel"
      },
      "index": {
        "description": "Use minimum memory dusing decompression This halves the memory needed but also halves the decompression speed",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "MinMemoryLevel",
        "normalized": "",
        "package": "bzlib",
        "partial": "Min Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:WorkFactor",
      "description": {
        "fct-descr": "\u003cp\u003eAllowable values range from 1 to 250 inclusive.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "WorkFactor Int",
        "fct-source": "src/Codec-Compression-BZip-Stream.html#WorkFactor",
        "fct-type": "function",
        "title": "WorkFactor"
      },
      "index": {
        "description": "Allowable values range from to inclusive",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "WorkFactor",
        "normalized": "",
        "package": "bzlib",
        "partial": "Work Factor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompress a stream of data into the bzip2 format.\n\u003c/p\u003e\u003cp\u003eThis uses the default compression level which uses the largest compression\n block size for the highest compression level. Use \u003ccode\u003e\u003ca\u003ecompressWith\u003c/a\u003e\u003c/code\u003e to adjust\n the compression block size.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-BZip.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Compress stream of data into the bzip2 format This uses the default compression level which uses the largest compression block size for the highest compression level Use compressWith to adjust the compression block size",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "compress",
        "normalized": "ByteString-\u003eByteString",
        "package": "bzlib",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:compressBlockSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "BlockSize",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressBlockSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "compressBlockSize",
        "normalized": "",
        "package": "bzlib",
        "partial": "Block Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:compressBufferSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "Int",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressBufferSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "compressBufferSize",
        "normalized": "",
        "package": "bzlib",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:compressWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecompress\u003c/a\u003e\u003c/code\u003e but with the ability to specify compression parameters.\n Typical usage:\n\u003c/p\u003e\u003cpre\u003e compressWith defaultCompressParams { ... }\n\u003c/pre\u003e\u003cp\u003eIn particular you can set the compression block size:\n\u003c/p\u003e\u003cpre\u003e compressWith defaultCompressParams { compressBlockSize = BlockSize 1 }\n\u003c/pre\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "CompressParams -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-BZip.html#compressWith",
        "fct-type": "function",
        "title": "compressWith"
      },
      "index": {
        "description": "Like compress but with the ability to specify compression parameters Typical usage compressWith defaultCompressParams In particular you can set the compression block size compressWith defaultCompressParams compressBlockSize BlockSize",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "compressWith",
        "normalized": "CompressParams-\u003eByteString-\u003eByteString",
        "package": "bzlib",
        "partial": "With",
        "signature": "CompressParams-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:compressWorkFactor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "WorkFactor",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#CompressParams",
        "fct-type": "function",
        "title": "compressWorkFactor"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "compressWorkFactor",
        "normalized": "",
        "package": "bzlib",
        "partial": "Work Factor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress a stream of data in the bzip2 format.\n\u003c/p\u003e\u003cp\u003eThere are a number of errors that can occur. In each case an exception will\n be thrown. The possible error conditions are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if the stream does not start with a valid gzip header\n\u003c/li\u003e\u003cli\u003e if the compressed stream is corrupted\n\u003c/li\u003e\u003cli\u003e if the compressed stream ends permaturely\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that the decompression is performed \u003cem\u003elazily\u003c/em\u003e. Errors in the data stream\n may not be detected until the end of the stream is demanded (since it is\n only at the end that the final checksum can be checked). If this is\n important to you, you must make sure to consume the whole decompressed\n stream before doing any IO action that depends on it.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-BZip.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompress stream of data in the bzip2 format There are number of errors that can occur In each case an exception will be thrown The possible error conditions are if the stream does not start with valid gzip header if the compressed stream is corrupted if the compressed stream ends permaturely Note that the decompression is performed lazily Errors in the data stream may not be detected until the end of the stream is demanded since it is only at the end that the final checksum can be checked If this is important to you you must make sure to consume the whole decompressed stream before doing any IO action that depends on it",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "decompress",
        "normalized": "ByteString-\u003eByteString",
        "package": "bzlib",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:decompressBufferSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "Int",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressBufferSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "decompressBufferSize",
        "normalized": "",
        "package": "bzlib",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:decompressMemoryLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "MemoryLevel",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#DecompressParams",
        "fct-type": "function",
        "title": "decompressMemoryLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "decompressMemoryLevel",
        "normalized": "",
        "package": "bzlib",
        "partial": "Memory Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:decompressWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e but with the ability to specify various decompression\n parameters. Typical usage:\n\u003c/p\u003e\u003cpre\u003e decompressWith defaultDecompressParams { ... }\n\u003c/pre\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "DecompressParams -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Codec-Compression-BZip.html#decompressWith",
        "fct-type": "function",
        "title": "decompressWith"
      },
      "index": {
        "description": "Like decompress but with the ability to specify various decompression parameters Typical usage decompressWith defaultDecompressParams",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "decompressWith",
        "normalized": "DecompressParams-\u003eByteString-\u003eByteString",
        "package": "bzlib",
        "partial": "With",
        "signature": "DecompressParams-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:defaultCompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of parameters for compression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific paramaters overridden.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "CompressParams",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#defaultCompressParams",
        "fct-type": "function",
        "title": "defaultCompressParams"
      },
      "index": {
        "description": "The default set of parameters for compression This is typically used with the compressWith function with specific paramaters overridden",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "defaultCompressParams",
        "normalized": "",
        "package": "bzlib",
        "partial": "Compress Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bzlib/docs/Codec-Compression-BZip.html#v:defaultDecompressParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of parameters for decompression. This is typically used with\n the \u003ccode\u003ecompressWith\u003c/code\u003e function with specific paramaters overridden.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.BZip",
        "fct-package": "bzlib",
        "fct-signature": "DecompressParams",
        "fct-source": "src/Codec-Compression-BZip-Internal.html#defaultDecompressParams",
        "fct-type": "function",
        "title": "defaultDecompressParams"
      },
      "index": {
        "description": "The default set of parameters for decompression This is typically used with the compressWith function with specific paramaters overridden",
        "hierarchy": "Codec Compression BZip",
        "module": "Codec.Compression.BZip",
        "name": "defaultDecompressParams",
        "normalized": "",
        "package": "bzlib",
        "partial": "Decompress Params",
        "signature": ""
      }
    }
  }
]