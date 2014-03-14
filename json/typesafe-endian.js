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
        "word": "typesafe-endian"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Endian.Unsafe",
          "name": "Unsafe",
          "package": "typesafe-endian",
          "source": "src/Data-Endian-Unsafe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Endian Unsafe",
          "module": "Data.Endian.Unsafe",
          "name": "Unsafe",
          "package": "typesafe-endian",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper, guaranteeing enclosed type is big-endian\n\u003c/p\u003e",
          "module": "Data.Endian.Unsafe",
          "name": "BigEndian",
          "package": "typesafe-endian",
          "source": "src/Data-Endian-Wrap.html#BigEndian",
          "type": "data"
        },
        "index": {
          "description": "Wrapper guaranteeing enclosed type is big-endian",
          "hierarchy": "Data Endian Unsafe",
          "module": "Data.Endian.Unsafe",
          "name": "BigEndian",
          "package": "typesafe-endian",
          "partial": "Big Endian",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian-Unsafe.html#t:BigEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper, guaranteeing enclosed type is little-endian\n\u003c/p\u003e",
          "module": "Data.Endian.Unsafe",
          "name": "LittleEndian",
          "package": "typesafe-endian",
          "source": "src/Data-Endian-Wrap.html#LittleEndian",
          "type": "data"
        },
        "index": {
          "description": "Wrapper guaranteeing enclosed type is little-endian",
          "hierarchy": "Data Endian Unsafe",
          "module": "Data.Endian.Unsafe",
          "name": "LittleEndian",
          "package": "typesafe-endian",
          "partial": "Little Endian",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian-Unsafe.html#t:LittleEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert the the endianness of the argument\n\u003c/p\u003e",
          "module": "Data.Endian.Unsafe",
          "name": "swapEndian",
          "package": "typesafe-endian",
          "signature": "α -\u003e α",
          "source": "src/Data-Endian-Internal.html#swapEndian",
          "type": "function"
        },
        "index": {
          "description": "Invert the the endianness of the argument",
          "hierarchy": "Data Endian Unsafe",
          "module": "Data.Endian.Unsafe",
          "name": "swapEndian",
          "normalized": "a-\u003ea",
          "package": "typesafe-endian",
          "partial": "Endian",
          "signature": "α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian-Unsafe.html#v:swapEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eput in BigEndian newtype without any swapping\n\u003c/p\u003e",
          "module": "Data.Endian.Unsafe",
          "name": "unsafeAssertBigEndian",
          "package": "typesafe-endian",
          "signature": "α -\u003e BigEndian α",
          "source": "src/Data-Endian-Unsafe.html#unsafeAssertBigEndian",
          "type": "function"
        },
        "index": {
          "description": "put in BigEndian newtype without any swapping",
          "hierarchy": "Data Endian Unsafe",
          "module": "Data.Endian.Unsafe",
          "name": "unsafeAssertBigEndian",
          "normalized": "a-\u003eBigEndian a",
          "package": "typesafe-endian",
          "partial": "Assert Big Endian",
          "signature": "α-\u003eBigEndian α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian-Unsafe.html#v:unsafeAssertBigEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eput in LittleEndian newtype without any swapping\n\u003c/p\u003e",
          "module": "Data.Endian.Unsafe",
          "name": "unsafeAssertLittleEndian",
          "package": "typesafe-endian",
          "signature": "α -\u003e LittleEndian α",
          "source": "src/Data-Endian-Unsafe.html#unsafeAssertLittleEndian",
          "type": "function"
        },
        "index": {
          "description": "put in LittleEndian newtype without any swapping",
          "hierarchy": "Data Endian Unsafe",
          "module": "Data.Endian.Unsafe",
          "name": "unsafeAssertLittleEndian",
          "normalized": "a-\u003eLittleEndian a",
          "package": "typesafe-endian",
          "partial": "Assert Little Endian",
          "signature": "α-\u003eLittleEndian α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian-Unsafe.html#v:unsafeAssertLittleEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epull out of BigEndian newtype without any swapping\n\u003c/p\u003e",
          "module": "Data.Endian.Unsafe",
          "name": "unsafeUnwrapBigEndian",
          "package": "typesafe-endian",
          "signature": "BigEndian α -\u003e α",
          "source": "src/Data-Endian-Unsafe.html#unsafeUnwrapBigEndian",
          "type": "function"
        },
        "index": {
          "description": "pull out of BigEndian newtype without any swapping",
          "hierarchy": "Data Endian Unsafe",
          "module": "Data.Endian.Unsafe",
          "name": "unsafeUnwrapBigEndian",
          "normalized": "BigEndian a-\u003ea",
          "package": "typesafe-endian",
          "partial": "Unwrap Big Endian",
          "signature": "BigEndian α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian-Unsafe.html#v:unsafeUnwrapBigEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epull out of LittleEndian newtype without any swapping\n\u003c/p\u003e",
          "module": "Data.Endian.Unsafe",
          "name": "unsafeUnwrapLittleEndian",
          "package": "typesafe-endian",
          "signature": "LittleEndian α -\u003e α",
          "source": "src/Data-Endian-Unsafe.html#unsafeUnwrapLittleEndian",
          "type": "function"
        },
        "index": {
          "description": "pull out of LittleEndian newtype without any swapping",
          "hierarchy": "Data Endian Unsafe",
          "module": "Data.Endian.Unsafe",
          "name": "unsafeUnwrapLittleEndian",
          "normalized": "LittleEndian a-\u003ea",
          "package": "typesafe-endian",
          "partial": "Unwrap Little Endian",
          "signature": "LittleEndian α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian-Unsafe.html#v:unsafeUnwrapLittleEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Endian",
          "name": "Endian",
          "package": "typesafe-endian",
          "source": "src/Data-Endian.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Endian",
          "module": "Data.Endian",
          "name": "Endian",
          "package": "typesafe-endian",
          "partial": "Endian",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper, guaranteeing enclosed type is big-endian\n\u003c/p\u003e",
          "module": "Data.Endian",
          "name": "BigEndian",
          "package": "typesafe-endian",
          "source": "src/Data-Endian-Wrap.html#BigEndian",
          "type": "data"
        },
        "index": {
          "description": "Wrapper guaranteeing enclosed type is big-endian",
          "hierarchy": "Data Endian",
          "module": "Data.Endian",
          "name": "BigEndian",
          "package": "typesafe-endian",
          "partial": "Big Endian",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian.html#t:BigEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw, endian-sensitive data\n\u003c/p\u003e",
          "module": "Data.Endian",
          "name": "EndianSensitive",
          "package": "typesafe-endian",
          "source": "src/Data-Endian-Internal.html#EndianSensitive",
          "type": "class"
        },
        "index": {
          "description": "Raw endian-sensitive data",
          "hierarchy": "Data Endian",
          "module": "Data.Endian",
          "name": "EndianSensitive",
          "package": "typesafe-endian",
          "partial": "Endian Sensitive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian.html#t:EndianSensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper, guaranteeing enclosed type is little-endian\n\u003c/p\u003e",
          "module": "Data.Endian",
          "name": "LittleEndian",
          "package": "typesafe-endian",
          "source": "src/Data-Endian-Wrap.html#LittleEndian",
          "type": "data"
        },
        "index": {
          "description": "Wrapper guaranteeing enclosed type is little-endian",
          "hierarchy": "Data Endian",
          "module": "Data.Endian",
          "name": "LittleEndian",
          "package": "typesafe-endian",
          "partial": "Little Endian",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian.html#t:LittleEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from big-endian to the native format\n\u003c/p\u003e",
          "module": "Data.Endian",
          "name": "fromBigEndian",
          "package": "typesafe-endian",
          "signature": "BigEndian α -\u003e α",
          "source": "src/Data-Endian.html#fromBigEndian",
          "type": "function"
        },
        "index": {
          "description": "Convert from big-endian to the native format",
          "hierarchy": "Data Endian",
          "module": "Data.Endian",
          "name": "fromBigEndian",
          "normalized": "BigEndian a-\u003ea",
          "package": "typesafe-endian",
          "partial": "Big Endian",
          "signature": "BigEndian α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian.html#v:fromBigEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from little-endian to the native format\n\u003c/p\u003e",
          "module": "Data.Endian",
          "name": "fromLittleEndian",
          "package": "typesafe-endian",
          "signature": "LittleEndian α -\u003e α",
          "source": "src/Data-Endian.html#fromLittleEndian",
          "type": "function"
        },
        "index": {
          "description": "Convert from little-endian to the native format",
          "hierarchy": "Data Endian",
          "module": "Data.Endian",
          "name": "fromLittleEndian",
          "normalized": "LittleEndian a-\u003ea",
          "package": "typesafe-endian",
          "partial": "Little Endian",
          "signature": "LittleEndian α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian.html#v:fromLittleEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from the native format to big-endian\n\u003c/p\u003e",
          "module": "Data.Endian",
          "name": "toBigEndian",
          "package": "typesafe-endian",
          "signature": "α -\u003e BigEndian α",
          "source": "src/Data-Endian.html#toBigEndian",
          "type": "function"
        },
        "index": {
          "description": "Convert from the native format to big-endian",
          "hierarchy": "Data Endian",
          "module": "Data.Endian",
          "name": "toBigEndian",
          "normalized": "a-\u003eBigEndian a",
          "package": "typesafe-endian",
          "partial": "Big Endian",
          "signature": "α-\u003eBigEndian α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian.html#v:toBigEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from the native format to little-endian\n\u003c/p\u003e",
          "module": "Data.Endian",
          "name": "toLittleEndian",
          "package": "typesafe-endian",
          "signature": "α -\u003e LittleEndian α",
          "source": "src/Data-Endian.html#toLittleEndian",
          "type": "function"
        },
        "index": {
          "description": "Convert from the native format to little-endian",
          "hierarchy": "Data Endian",
          "module": "Data.Endian",
          "name": "toLittleEndian",
          "normalized": "a-\u003eLittleEndian a",
          "package": "typesafe-endian",
          "partial": "Little Endian",
          "signature": "α-\u003eLittleEndian α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typesafe-endian/docs/Data-Endian.html#v:toLittleEndian"
      }
    }
  ]
]