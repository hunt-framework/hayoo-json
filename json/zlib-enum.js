[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-enum/docs/Codec-Zlib-Enum.html#",
      "description": {
        "fct-module": "Codec.Zlib.Enum",
        "fct-package": "zlib-enum",
        "fct-signature": "module",
        "fct-source": "src/Codec-Zlib-Enum.html",
        "fct-type": "module",
        "title": "Enum"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Zlib Enum",
        "module": "Codec.Zlib.Enum",
        "name": "Enum",
        "normalized": "",
        "package": "zlib-enum",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-enum/docs/Codec-Zlib-Enum.html#t:WindowBits",
      "description": {
        "fct-descr": "\u003cp\u003eThis specifies the size of the compression window. Larger values of this\n parameter result in better compression at the expense of higher memory\n usage.\n\u003c/p\u003e\u003cp\u003eThe compression window size is the value of the the window bits raised to\n the power 2. The window bits must be in the range \u003ccode\u003e8..15\u003c/code\u003e which corresponds\n to compression window sizes of 256b to 32Kb. The default is 15 which is also\n the maximum size.\n\u003c/p\u003e\u003cp\u003eThe total amount of memory used depends on the window bits and the\n \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e. See the \u003ccode\u003e\u003ca\u003eMemoryLevel\u003c/a\u003e\u003c/code\u003e for the details.\n\u003c/p\u003e",
        "fct-module": "Codec.Zlib.Enum",
        "fct-package": "zlib-enum",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "WindowBits"
      },
      "index": {
        "description": "This specifies the size of the compression window Larger values of this parameter result in better compression at the expense of higher memory usage The compression window size is the value of the the window bits raised to the power The window bits must be in the range which corresponds to compression window sizes of to Kb The default is which is also the maximum size The total amount of memory used depends on the window bits and the MemoryLevel See the MemoryLevel for the details",
        "hierarchy": "Codec Zlib Enum",
        "module": "Codec.Zlib.Enum",
        "name": "WindowBits",
        "normalized": "",
        "package": "zlib-enum",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-enum/docs/Codec-Zlib-Enum.html#t:ZlibException",
      "description": {
        "fct-descr": "\u003cp\u003eException that can be thrown from the FFI code. The parameter is the\n numerical error code from the zlib library. Quoting the zlib.h file\n directly:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e #define Z_OK            0\n\u003c/li\u003e\u003cli\u003e #define Z_STREAM_END    1\n\u003c/li\u003e\u003cli\u003e #define Z_NEED_DICT     2\n\u003c/li\u003e\u003cli\u003e #define Z_ERRNO        (-1)\n\u003c/li\u003e\u003cli\u003e #define Z_STREAM_ERROR (-2)\n\u003c/li\u003e\u003cli\u003e #define Z_DATA_ERROR   (-3)\n\u003c/li\u003e\u003cli\u003e #define Z_MEM_ERROR    (-4)\n\u003c/li\u003e\u003cli\u003e #define Z_BUF_ERROR    (-5)\n\u003c/li\u003e\u003cli\u003e #define Z_VERSION_ERROR (-6)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Zlib.Enum",
        "fct-package": "zlib-enum",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ZlibException"
      },
      "index": {
        "description": "Exception that can be thrown from the FFI code The parameter is the numerical error code from the zlib library Quoting the zlib.h file directly define OK define STREAM END define NEED DICT define ERRNO define STREAM ERROR define DATA ERROR define MEM ERROR define BUF ERROR define VERSION ERROR",
        "hierarchy": "Codec Zlib Enum",
        "module": "Codec.Zlib.Enum",
        "name": "ZlibException",
        "normalized": "",
        "package": "zlib-enum",
        "partial": "Zlib Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-enum/docs/Codec-Zlib-Enum.html#v:WindowBits",
      "description": {
        "fct-module": "Codec.Zlib.Enum",
        "fct-package": "zlib-enum",
        "fct-signature": "WindowBits Int",
        "fct-type": "function",
        "title": "WindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Zlib Enum",
        "module": "Codec.Zlib.Enum",
        "name": "WindowBits",
        "normalized": "",
        "package": "zlib-enum",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-enum/docs/Codec-Zlib-Enum.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompress (deflate) a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es. The \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e also control\n the format (zlib vs. gzip).\n\u003c/p\u003e",
        "fct-module": "Codec.Zlib.Enum",
        "fct-package": "zlib-enum",
        "fct-signature": "Int-\u003e WindowBits-\u003e Enumeratee ByteString ByteString m a",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Compress deflate stream of ByteString The WindowBits also control the format zlib vs gzip",
        "hierarchy": "Codec Zlib Enum",
        "module": "Codec.Zlib.Enum",
        "name": "compress",
        "normalized": "Int-\u003eWindowBits-\u003eEnumeratee ByteString ByteString a b",
        "package": "zlib-enum",
        "partial": "",
        "signature": "Int-\u003eWindowBits-\u003eEnumeratee ByteString ByteString m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-enum/docs/Codec-Zlib-Enum.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress (inflate) a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es. For example:\n\u003c/p\u003e\u003cpre\u003e    run $ enumFile \"test.z\" $$ decompress defaultWindowBits $$ printChunks True\n\u003c/pre\u003e",
        "fct-module": "Codec.Zlib.Enum",
        "fct-package": "zlib-enum",
        "fct-signature": "WindowBits-\u003e Enumeratee ByteString ByteString m a",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompress inflate stream of ByteString For example run enumFile test.z decompress defaultWindowBits printChunks True",
        "hierarchy": "Codec Zlib Enum",
        "module": "Codec.Zlib.Enum",
        "name": "decompress",
        "normalized": "WindowBits-\u003eEnumeratee ByteString ByteString a b",
        "package": "zlib-enum",
        "partial": "",
        "signature": "WindowBits-\u003eEnumeratee ByteString ByteString m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-enum/docs/Codec-Zlib-Enum.html#v:defaultWindowBits",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e is 15 which is also the maximum size.\n\u003c/p\u003e",
        "fct-module": "Codec.Zlib.Enum",
        "fct-package": "zlib-enum",
        "fct-signature": "WindowBits",
        "fct-type": "function",
        "title": "defaultWindowBits"
      },
      "index": {
        "description": "The default WindowBits is which is also the maximum size",
        "hierarchy": "Codec Zlib Enum",
        "module": "Codec.Zlib.Enum",
        "name": "defaultWindowBits",
        "normalized": "",
        "package": "zlib-enum",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-enum/docs/Codec-Zlib-Enum.html#v:gzip",
      "description": {
        "fct-descr": "\u003cp\u003eGzip compression with default parameters.\n\u003c/p\u003e",
        "fct-module": "Codec.Zlib.Enum",
        "fct-package": "zlib-enum",
        "fct-signature": "Enumeratee ByteString ByteString m a",
        "fct-source": "src/Codec-Zlib-Enum.html#gzip",
        "fct-type": "function",
        "title": "gzip"
      },
      "index": {
        "description": "Gzip compression with default parameters",
        "hierarchy": "Codec Zlib Enum",
        "module": "Codec.Zlib.Enum",
        "name": "gzip",
        "normalized": "",
        "package": "zlib-enum",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zlib-enum/docs/Codec-Zlib-Enum.html#v:ungzip",
      "description": {
        "fct-descr": "\u003cp\u003eGzip decompression with default parameters.\n\u003c/p\u003e",
        "fct-module": "Codec.Zlib.Enum",
        "fct-package": "zlib-enum",
        "fct-signature": "Enumeratee ByteString ByteString m a",
        "fct-source": "src/Codec-Zlib-Enum.html#ungzip",
        "fct-type": "function",
        "title": "ungzip"
      },
      "index": {
        "description": "Gzip decompression with default parameters",
        "hierarchy": "Codec Zlib Enum",
        "module": "Codec.Zlib.Enum",
        "name": "ungzip",
        "normalized": "",
        "package": "zlib-enum",
        "partial": "",
        "signature": ""
      }
    }
  }
]