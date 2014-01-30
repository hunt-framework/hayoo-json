[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStreaming compression and decompression using conduits.\n\u003c/p\u003e\u003cp\u003eParts of this code were taken from zlib-enum and adapted for conduits.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Zlib",
        "fct-package": "zlib-conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Zlib.html",
        "fct-type": "module",
        "title": "Zlib"
      },
      "index": {
        "description": "Streaming compression and decompression using conduits Parts of this code were taken from zlib-enum and adapted for conduits",
        "hierarchy": "Data Conduit Zlib",
        "module": "Data.Conduit.Zlib",
        "name": "Zlib",
        "normalized": "",
        "package": "zlib-conduit",
        "partial": "Zlib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#t:WindowBits",
      "description": {
        "fct-descr": "\u003cp\u003eThis specifies the size of the compression window. Larger values of this\n parameter result in better compression at the expense of higher memory\n usage.\n\u003c/p\u003e\u003cp\u003eThe compression window size is the value of the the window bits raised to\n the power 2. The window bits must be in the range \u003ccode\u003e8..15\u003c/code\u003e which corresponds\n to compression window sizes of 256b to 32Kb. The default is 15 which is also\n the maximum size.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used depends on the window bits and the\n \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. See the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e for the details.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Zlib",
        "fct-package": "zlib-conduit",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "WindowBits"
      },
      "index": {
        "description": "This specifies the size of the compression window Larger values of this parameter result in better compression at the expense of higher memory usage The compression window size is the value of the the window bits raised to the power The window bits must be in the range which corresponds to compression window sizes of to Kb The default is which is also the maximum size The total amount of memory used depends on the window bits and the MemoryLevel See the MemoryLevel for the details",
        "hierarchy": "Data Conduit Zlib",
        "module": "Data.Conduit.Zlib",
        "name": "WindowBits",
        "normalized": "",
        "package": "zlib-conduit",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:WindowBits",
      "description": {
        "fct-module": "Data.Conduit.Zlib",
        "fct-package": "zlib-conduit",
        "fct-signature": "WindowBits Int",
        "fct-type": "function",
        "title": "WindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Zlib",
        "module": "Data.Conduit.Zlib",
        "name": "WindowBits",
        "normalized": "",
        "package": "zlib-conduit",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompress (deflate) a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es. The \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e also control\n the format (zlib vs. gzip).\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Zlib",
        "fct-package": "zlib-conduit",
        "fct-signature": "Int-\u003e WindowBits-\u003e Conduit ByteString m ByteString",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Compress deflate stream of ByteString The WindowBits also control the format zlib vs gzip",
        "hierarchy": "Data Conduit Zlib",
        "module": "Data.Conduit.Zlib",
        "name": "compress",
        "normalized": "Int-\u003eWindowBits-\u003eConduit ByteString a ByteString",
        "package": "zlib-conduit",
        "partial": "",
        "signature": "Int-\u003eWindowBits-\u003eConduit ByteString m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:compressFlush",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ecompress\u003c/a\u003e\u003c/code\u003e, but allows you to explicitly flush the stream.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Zlib",
        "fct-package": "zlib-conduit",
        "fct-signature": "Int-\u003e WindowBits-\u003e Conduit (Flush ByteString) m (Flush ByteString)",
        "fct-type": "function",
        "title": "compressFlush"
      },
      "index": {
        "description": "Same as compress but allows you to explicitly flush the stream",
        "hierarchy": "Data Conduit Zlib",
        "module": "Data.Conduit.Zlib",
        "name": "compressFlush",
        "normalized": "Int-\u003eWindowBits-\u003eConduit(Flush ByteString)a(Flush ByteString)",
        "package": "zlib-conduit",
        "partial": "Flush",
        "signature": "Int-\u003eWindowBits-\u003eConduit(Flush ByteString)m(Flush ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress (inflate) a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es. For example:\n\u003c/p\u003e\u003cpre\u003e    sourceFile \"test.z\" $= decompress defaultWindowBits $$ sinkFile \"test\"\n\u003c/pre\u003e",
        "fct-module": "Data.Conduit.Zlib",
        "fct-package": "zlib-conduit",
        "fct-signature": "WindowBits-\u003e Conduit ByteString m ByteString",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompress inflate stream of ByteString For example sourceFile test.z decompress defaultWindowBits sinkFile test",
        "hierarchy": "Data Conduit Zlib",
        "module": "Data.Conduit.Zlib",
        "name": "decompress",
        "normalized": "WindowBits-\u003eConduit ByteString a ByteString",
        "package": "zlib-conduit",
        "partial": "",
        "signature": "WindowBits-\u003eConduit ByteString m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:decompressFlush",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e, but allows you to explicitly flush the stream.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Zlib",
        "fct-package": "zlib-conduit",
        "fct-signature": "WindowBits-\u003e Conduit (Flush ByteString) m (Flush ByteString)",
        "fct-type": "function",
        "title": "decompressFlush"
      },
      "index": {
        "description": "Same as decompress but allows you to explicitly flush the stream",
        "hierarchy": "Data Conduit Zlib",
        "module": "Data.Conduit.Zlib",
        "name": "decompressFlush",
        "normalized": "WindowBits-\u003eConduit(Flush ByteString)a(Flush ByteString)",
        "package": "zlib-conduit",
        "partial": "Flush",
        "signature": "WindowBits-\u003eConduit(Flush ByteString)m(Flush ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:defaultWindowBits",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e is 15 which is also the maximum size.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Zlib",
        "fct-package": "zlib-conduit",
        "fct-signature": "WindowBits",
        "fct-type": "function",
        "title": "defaultWindowBits"
      },
      "index": {
        "description": "The default WindowBits is which is also the maximum size",
        "hierarchy": "Data Conduit Zlib",
        "module": "Data.Conduit.Zlib",
        "name": "defaultWindowBits",
        "normalized": "",
        "package": "zlib-conduit",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:gzip",
      "description": {
        "fct-descr": "\u003cp\u003eGzip compression with default parameters.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Zlib",
        "fct-package": "zlib-conduit",
        "fct-signature": "Conduit ByteString m ByteString",
        "fct-source": "src/Data-Conduit-Zlib.html#gzip",
        "fct-type": "function",
        "title": "gzip"
      },
      "index": {
        "description": "Gzip compression with default parameters",
        "hierarchy": "Data Conduit Zlib",
        "module": "Data.Conduit.Zlib",
        "name": "gzip",
        "normalized": "",
        "package": "zlib-conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:ungzip",
      "description": {
        "fct-descr": "\u003cp\u003eGzip decompression with default parameters.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Zlib",
        "fct-package": "zlib-conduit",
        "fct-signature": "Conduit ByteString m ByteString",
        "fct-source": "src/Data-Conduit-Zlib.html#ungzip",
        "fct-type": "function",
        "title": "ungzip"
      },
      "index": {
        "description": "Gzip decompression with default parameters",
        "hierarchy": "Data Conduit Zlib",
        "module": "Data.Conduit.Zlib",
        "name": "ungzip",
        "normalized": "",
        "package": "zlib-conduit",
        "partial": "",
        "signature": ""
      }
    }
  }
]