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
        "word": "zlib-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStreaming compression and decompression using conduits.\n\u003c/p\u003e\u003cp\u003eParts of this code were taken from zlib-enum and adapted for conduits.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Zlib",
          "name": "Zlib",
          "package": "zlib-conduit",
          "source": "src/Data-Conduit-Zlib.html",
          "type": "module"
        },
        "index": {
          "description": "Streaming compression and decompression using conduits Parts of this code were taken from zlib-enum and adapted for conduits",
          "hierarchy": "Data Conduit Zlib",
          "module": "Data.Conduit.Zlib",
          "name": "Zlib",
          "package": "zlib-conduit",
          "partial": "Zlib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis specifies the size of the compression window. Larger values of this\n parameter result in better compression at the expense of higher memory\n usage.\n\u003c/p\u003e\u003cp\u003eThe compression window size is the value of the the window bits raised to\n the power 2. The window bits must be in the range \u003ccode\u003e8..15\u003c/code\u003e which corresponds\n to compression window sizes of 256b to 32Kb. The default is 15 which is also\n the maximum size.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used depends on the window bits and the\n \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. See the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e for the details.\n\u003c/p\u003e",
          "module": "Data.Conduit.Zlib",
          "name": "WindowBits",
          "package": "zlib-conduit",
          "type": "data"
        },
        "index": {
          "description": "This specifies the size of the compression window Larger values of this parameter result in better compression at the expense of higher memory usage The compression window size is the value of the the window bits raised to the power The window bits must be in the range which corresponds to compression window sizes of to Kb The default is which is also the maximum size The total amount of memory used depends on the window bits and the MemoryLevel See the MemoryLevel for the details",
          "hierarchy": "Data Conduit Zlib",
          "module": "Data.Conduit.Zlib",
          "name": "WindowBits",
          "package": "zlib-conduit",
          "partial": "Window Bits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#t:WindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Zlib",
          "name": "WindowBits",
          "package": "zlib-conduit",
          "signature": "WindowBits Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Zlib",
          "module": "Data.Conduit.Zlib",
          "name": "WindowBits",
          "package": "zlib-conduit",
          "partial": "Window Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:WindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress (deflate) a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es. The \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e also control\n the format (zlib vs. gzip).\n\u003c/p\u003e",
          "module": "Data.Conduit.Zlib",
          "name": "compress",
          "package": "zlib-conduit",
          "signature": "Int-\u003e WindowBits-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Compress deflate stream of ByteString The WindowBits also control the format zlib vs gzip",
          "hierarchy": "Data Conduit Zlib",
          "module": "Data.Conduit.Zlib",
          "name": "compress",
          "normalized": "Int-\u003eWindowBits-\u003eConduit ByteString a ByteString",
          "package": "zlib-conduit",
          "signature": "Int-\u003eWindowBits-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ecompress\u003c/a\u003e\u003c/code\u003e, but allows you to explicitly flush the stream.\n\u003c/p\u003e",
          "module": "Data.Conduit.Zlib",
          "name": "compressFlush",
          "package": "zlib-conduit",
          "signature": "Int-\u003e WindowBits-\u003e Conduit (Flush ByteString) m (Flush ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Same as compress but allows you to explicitly flush the stream",
          "hierarchy": "Data Conduit Zlib",
          "module": "Data.Conduit.Zlib",
          "name": "compressFlush",
          "normalized": "Int-\u003eWindowBits-\u003eConduit(Flush ByteString)a(Flush ByteString)",
          "package": "zlib-conduit",
          "partial": "Flush",
          "signature": "Int-\u003eWindowBits-\u003eConduit(Flush ByteString)m(Flush ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:compressFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress (inflate) a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es. For example:\n\u003c/p\u003e\u003cpre\u003e    sourceFile \"test.z\" $= decompress defaultWindowBits $$ sinkFile \"test\"\n\u003c/pre\u003e",
          "module": "Data.Conduit.Zlib",
          "name": "decompress",
          "package": "zlib-conduit",
          "signature": "WindowBits-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Decompress inflate stream of ByteString For example sourceFile test.z decompress defaultWindowBits sinkFile test",
          "hierarchy": "Data Conduit Zlib",
          "module": "Data.Conduit.Zlib",
          "name": "decompress",
          "normalized": "WindowBits-\u003eConduit ByteString a ByteString",
          "package": "zlib-conduit",
          "signature": "WindowBits-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e, but allows you to explicitly flush the stream.\n\u003c/p\u003e",
          "module": "Data.Conduit.Zlib",
          "name": "decompressFlush",
          "package": "zlib-conduit",
          "signature": "WindowBits-\u003e Conduit (Flush ByteString) m (Flush ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Same as decompress but allows you to explicitly flush the stream",
          "hierarchy": "Data Conduit Zlib",
          "module": "Data.Conduit.Zlib",
          "name": "decompressFlush",
          "normalized": "WindowBits-\u003eConduit(Flush ByteString)a(Flush ByteString)",
          "package": "zlib-conduit",
          "partial": "Flush",
          "signature": "WindowBits-\u003eConduit(Flush ByteString)m(Flush ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:decompressFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e is 15 which is also the maximum size.\n\u003c/p\u003e",
          "module": "Data.Conduit.Zlib",
          "name": "defaultWindowBits",
          "package": "zlib-conduit",
          "signature": "WindowBits",
          "type": "function"
        },
        "index": {
          "description": "The default WindowBits is which is also the maximum size",
          "hierarchy": "Data Conduit Zlib",
          "module": "Data.Conduit.Zlib",
          "name": "defaultWindowBits",
          "package": "zlib-conduit",
          "partial": "Window Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:defaultWindowBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGzip compression with default parameters.\n\u003c/p\u003e",
          "module": "Data.Conduit.Zlib",
          "name": "gzip",
          "package": "zlib-conduit",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Zlib.html#gzip",
          "type": "function"
        },
        "index": {
          "description": "Gzip compression with default parameters",
          "hierarchy": "Data Conduit Zlib",
          "module": "Data.Conduit.Zlib",
          "name": "gzip",
          "package": "zlib-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:gzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGzip decompression with default parameters.\n\u003c/p\u003e",
          "module": "Data.Conduit.Zlib",
          "name": "ungzip",
          "package": "zlib-conduit",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Zlib.html#ungzip",
          "type": "function"
        },
        "index": {
          "description": "Gzip decompression with default parameters",
          "hierarchy": "Data Conduit Zlib",
          "module": "Data.Conduit.Zlib",
          "name": "ungzip",
          "package": "zlib-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zlib-conduit/docs/Data-Conduit-Zlib.html#v:ungzip"
      }
    }
  ]
]