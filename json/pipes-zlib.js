[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports utilities to compress and decompress \u003ccode\u003epipes\u003c/code\u003e streams\n using the zlib compression codec.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Zlib",
        "fct-package": "pipes-zlib",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Zlib.html",
        "fct-type": "module",
        "title": "Zlib"
      },
      "index": {
        "description": "This module exports utilities to compress and decompress pipes streams using the zlib compression codec",
        "hierarchy": "Pipes Zlib",
        "module": "Pipes.Zlib",
        "name": "Zlib",
        "normalized": "",
        "package": "pipes-zlib",
        "partial": "Zlib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:bestCompression",
      "description": {
        "fct-module": "Pipes.Zlib",
        "fct-package": "pipes-zlib",
        "fct-signature": "CompressionLevel",
        "fct-type": "function",
        "title": "bestCompression"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Zlib",
        "module": "Pipes.Zlib",
        "name": "bestCompression",
        "normalized": "",
        "package": "pipes-zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:bestSpeed",
      "description": {
        "fct-module": "Pipes.Zlib",
        "fct-package": "pipes-zlib",
        "fct-signature": "CompressionLevel",
        "fct-type": "function",
        "title": "bestSpeed"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Zlib",
        "module": "Pipes.Zlib",
        "name": "bestSpeed",
        "normalized": "",
        "package": "pipes-zlib",
        "partial": "Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompress bytes flowing downstream.\n\u003c/p\u003e\u003cp\u003eSee the \u003ca\u003eCodec.Compression.Zlib\u003c/a\u003e module for details about\n \u003ccode\u003eCompressionLevel\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Zlib",
        "fct-package": "pipes-zlib",
        "fct-signature": "CompressionLevel -\u003e WindowBits -\u003e Pipe ByteString ByteString m r",
        "fct-source": "src/Pipes-Zlib.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Compress bytes flowing downstream See the Codec.Compression.Zlib module for details about CompressionLevel and WindowBits",
        "hierarchy": "Pipes Zlib",
        "module": "Pipes.Zlib",
        "name": "compress",
        "normalized": "CompressionLevel-\u003eWindowBits-\u003ePipe ByteString ByteString a b",
        "package": "pipes-zlib",
        "partial": "",
        "signature": "CompressionLevel-\u003eWindowBits-\u003ePipe ByteString ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:compressionLevel",
      "description": {
        "fct-module": "Pipes.Zlib",
        "fct-package": "pipes-zlib",
        "fct-signature": "Int -\u003e CompressionLevel",
        "fct-type": "function",
        "title": "compressionLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Zlib",
        "module": "Pipes.Zlib",
        "name": "compressionLevel",
        "normalized": "Int-\u003eCompressionLevel",
        "package": "pipes-zlib",
        "partial": "Level",
        "signature": "Int-\u003eCompressionLevel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress bytes flowing downstream.\n\u003c/p\u003e\u003cp\u003eSee the \u003ca\u003eCodec.Compression.Zlib\u003c/a\u003e module for details about \u003ccode\u003e\u003ca\u003eWindowBits\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Zlib",
        "fct-package": "pipes-zlib",
        "fct-signature": "WindowBits -\u003e Pipe ByteString ByteString m r",
        "fct-source": "src/Pipes-Zlib.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompress bytes flowing downstream See the Codec.Compression.Zlib module for details about WindowBits",
        "hierarchy": "Pipes Zlib",
        "module": "Pipes.Zlib",
        "name": "decompress",
        "normalized": "WindowBits-\u003ePipe ByteString ByteString a b",
        "package": "pipes-zlib",
        "partial": "",
        "signature": "WindowBits-\u003ePipe ByteString ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:defaultCompression",
      "description": {
        "fct-module": "Pipes.Zlib",
        "fct-package": "pipes-zlib",
        "fct-signature": "CompressionLevel",
        "fct-type": "function",
        "title": "defaultCompression"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Zlib",
        "module": "Pipes.Zlib",
        "name": "defaultCompression",
        "normalized": "",
        "package": "pipes-zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:defaultWindowBits",
      "description": {
        "fct-module": "Pipes.Zlib",
        "fct-package": "pipes-zlib",
        "fct-signature": "WindowBits",
        "fct-type": "function",
        "title": "defaultWindowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Zlib",
        "module": "Pipes.Zlib",
        "name": "defaultWindowBits",
        "normalized": "",
        "package": "pipes-zlib",
        "partial": "Window Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:noCompression",
      "description": {
        "fct-module": "Pipes.Zlib",
        "fct-package": "pipes-zlib",
        "fct-signature": "CompressionLevel",
        "fct-type": "function",
        "title": "noCompression"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Zlib",
        "module": "Pipes.Zlib",
        "name": "noCompression",
        "normalized": "",
        "package": "pipes-zlib",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-zlib/docs/Pipes-Zlib.html#v:windowBits",
      "description": {
        "fct-module": "Pipes.Zlib",
        "fct-package": "pipes-zlib",
        "fct-signature": "Int -\u003e WindowBits",
        "fct-type": "function",
        "title": "windowBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Zlib",
        "module": "Pipes.Zlib",
        "name": "windowBits",
        "normalized": "Int-\u003eWindowBits",
        "package": "pipes-zlib",
        "partial": "Bits",
        "signature": "Int-\u003eWindowBits"
      }
    }
  }
]