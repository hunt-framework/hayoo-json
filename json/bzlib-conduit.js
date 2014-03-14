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
        "word": "bzlib-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.BZlib",
          "name": "BZlib",
          "package": "bzlib-conduit",
          "source": "src/Data-Conduit-BZlib.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "BZlib",
          "package": "bzlib-conduit",
          "partial": "BZlib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompression parameters\n\u003c/p\u003e",
          "module": "Data.Conduit.BZlib",
          "name": "CompressParams",
          "package": "bzlib-conduit",
          "source": "src/Data-Conduit-BZlib.html#CompressParams",
          "type": "data"
        },
        "index": {
          "description": "Compression parameters",
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "CompressParams",
          "package": "bzlib-conduit",
          "partial": "Compress Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#t:CompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompression parameters\n\u003c/p\u003e",
          "module": "Data.Conduit.BZlib",
          "name": "DecompressParams",
          "package": "bzlib-conduit",
          "source": "src/Data-Conduit-BZlib.html#DecompressParams",
          "type": "data"
        },
        "index": {
          "description": "Decompression parameters",
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "DecompressParams",
          "package": "bzlib-conduit",
          "partial": "Decompress Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#t:DecompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.BZlib",
          "name": "CompressParams",
          "package": "bzlib-conduit",
          "signature": "CompressParams",
          "source": "src/Data-Conduit-BZlib.html#CompressParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "CompressParams",
          "package": "bzlib-conduit",
          "partial": "Compress Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#v:CompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.BZlib",
          "name": "DecompressParams",
          "package": "bzlib-conduit",
          "signature": "DecompressParams",
          "source": "src/Data-Conduit-BZlib.html#DecompressParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "DecompressParams",
          "package": "bzlib-conduit",
          "partial": "Decompress Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#v:DecompressParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebzip2 decompression with default parameters.\n\u003c/p\u003e",
          "module": "Data.Conduit.BZlib",
          "name": "bunzip2",
          "package": "bzlib-conduit",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-BZlib.html#bunzip2",
          "type": "function"
        },
        "index": {
          "description": "bzip2 decompression with default parameters",
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "bunzip2",
          "package": "bzlib-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#v:bunzip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebzip2 compression with default parameters.\n\u003c/p\u003e",
          "module": "Data.Conduit.BZlib",
          "name": "bzip2",
          "package": "bzlib-conduit",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-BZlib.html#bzip2",
          "type": "function"
        },
        "index": {
          "description": "bzip2 compression with default parameters",
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "bzip2",
          "package": "bzlib-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#v:bzip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress a stream of ByteStrings.\n\u003c/p\u003e",
          "module": "Data.Conduit.BZlib",
          "name": "compress",
          "package": "bzlib-conduit",
          "signature": "CompressParams-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Compress stream of ByteStrings",
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "compress",
          "normalized": "CompressParams-\u003eConduit ByteString a ByteString",
          "package": "bzlib-conduit",
          "signature": "CompressParams-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress level [1..9]. default is 9.\n\u003c/p\u003e",
          "module": "Data.Conduit.BZlib",
          "name": "cpBlockSize",
          "package": "bzlib-conduit",
          "signature": "Int",
          "source": "src/Data-Conduit-BZlib.html#CompressParams",
          "type": "function"
        },
        "index": {
          "description": "Compress level default is",
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "cpBlockSize",
          "package": "bzlib-conduit",
          "partial": "Block Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#v:cpBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity mode [0..4]. default is 0.\n\u003c/p\u003e",
          "module": "Data.Conduit.BZlib",
          "name": "cpVerbosity",
          "package": "bzlib-conduit",
          "signature": "Int",
          "source": "src/Data-Conduit-BZlib.html#CompressParams",
          "type": "function"
        },
        "index": {
          "description": "Verbosity mode default is",
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "cpVerbosity",
          "package": "bzlib-conduit",
          "partial": "Verbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#v:cpVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWork factor [0..250]. default is 30.\n\u003c/p\u003e",
          "module": "Data.Conduit.BZlib",
          "name": "cpWorkFactor",
          "package": "bzlib-conduit",
          "signature": "Int",
          "source": "src/Data-Conduit-BZlib.html#CompressParams",
          "type": "function"
        },
        "index": {
          "description": "Work factor default is",
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "cpWorkFactor",
          "package": "bzlib-conduit",
          "partial": "Work Factor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#v:cpWorkFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompress a stream of ByteStrings.\n\u003c/p\u003e",
          "module": "Data.Conduit.BZlib",
          "name": "decompress",
          "package": "bzlib-conduit",
          "signature": "DecompressParams-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Decompress stream of ByteStrings",
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "decompress",
          "normalized": "DecompressParams-\u003eConduit ByteString a ByteString",
          "package": "bzlib-conduit",
          "signature": "DecompressParams-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
          "module": "Data.Conduit.BZlib",
          "name": "def",
          "package": "bzlib-conduit",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "The default value for this type",
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "def",
          "package": "bzlib-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#v:def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf True, use an algorithm uses less memory but slow. default is False\n\u003c/p\u003e",
          "module": "Data.Conduit.BZlib",
          "name": "dpSmall",
          "package": "bzlib-conduit",
          "signature": "Bool",
          "source": "src/Data-Conduit-BZlib.html#DecompressParams",
          "type": "function"
        },
        "index": {
          "description": "If True use an algorithm uses less memory but slow default is False",
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "dpSmall",
          "package": "bzlib-conduit",
          "partial": "Small",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#v:dpSmall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbosity mode [0..4]. default is 0\n\u003c/p\u003e",
          "module": "Data.Conduit.BZlib",
          "name": "dpVerbosity",
          "package": "bzlib-conduit",
          "signature": "Int",
          "source": "src/Data-Conduit-BZlib.html#DecompressParams",
          "type": "function"
        },
        "index": {
          "description": "Verbosity mode default is",
          "hierarchy": "Data Conduit BZlib",
          "module": "Data.Conduit.BZlib",
          "name": "dpVerbosity",
          "package": "bzlib-conduit",
          "partial": "Verbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bzlib-conduit/docs/Data-Conduit-BZlib.html#v:dpVerbosity"
      }
    }
  ]
]