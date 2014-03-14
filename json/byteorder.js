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
        "word": "byteorder"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ByteOrder",
          "name": "ByteOrder",
          "package": "byteorder",
          "source": "src/System-ByteOrder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System ByteOrder",
          "module": "System.ByteOrder",
          "name": "ByteOrder",
          "package": "byteorder",
          "partial": "Byte Order",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/byteorder/docs/System-ByteOrder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates the byte-ordering for a 4-byte value, where '1'\n indicates the most-significant byte and '4' indicates the\n least significant byte.\n\u003c/p\u003e\u003cp\u003eIn this format, big endian byte order would be represented as:\n (1,2,3,4).\n\u003c/p\u003e\u003cp\u003eFor convinience, the most common cases (BigEndian and LittleEndian)\n are provided their own constructors.\n\u003c/p\u003e",
          "module": "System.ByteOrder",
          "name": "ByteOrder",
          "package": "byteorder",
          "source": "src/System-ByteOrder.html#ByteOrder",
          "type": "data"
        },
        "index": {
          "description": "Indicates the byte-ordering for byte value where indicates the most-significant byte and indicates the least significant byte In this format big endian byte order would be represented as For convinience the most common cases BigEndian and LittleEndian are provided their own constructors",
          "hierarchy": "System ByteOrder",
          "module": "System.ByteOrder",
          "name": "ByteOrder",
          "package": "byteorder",
          "partial": "Byte Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/byteorder/docs/System-ByteOrder.html#t:ByteOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ByteOrder",
          "name": "BigEndian",
          "package": "byteorder",
          "signature": "BigEndian",
          "source": "src/System-ByteOrder.html#ByteOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ByteOrder",
          "module": "System.ByteOrder",
          "name": "BigEndian",
          "package": "byteorder",
          "partial": "Big Endian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/byteorder/docs/System-ByteOrder.html#v:BigEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ByteOrder",
          "name": "LittleEndian",
          "package": "byteorder",
          "signature": "LittleEndian",
          "source": "src/System-ByteOrder.html#ByteOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ByteOrder",
          "module": "System.ByteOrder",
          "name": "LittleEndian",
          "package": "byteorder",
          "partial": "Little Endian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/byteorder/docs/System-ByteOrder.html#v:LittleEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ByteOrder",
          "name": "Mixed",
          "package": "byteorder",
          "signature": "Mixed (Word8, Word8, Word8, Word8)",
          "source": "src/System-ByteOrder.html#ByteOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "System ByteOrder",
          "module": "System.ByteOrder",
          "name": "Mixed",
          "normalized": "Mixed(Word,Word,Word,Word)",
          "package": "byteorder",
          "partial": "Mixed",
          "signature": "Mixed(Word,Word,Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/byteorder/docs/System-ByteOrder.html#v:Mixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the native byte ordering of the system.\n\u003c/p\u003e",
          "module": "System.ByteOrder",
          "name": "byteOrder",
          "package": "byteorder",
          "signature": "ByteOrder",
          "source": "src/System-ByteOrder.html#byteOrder",
          "type": "function"
        },
        "index": {
          "description": "Returns the native byte ordering of the system",
          "hierarchy": "System ByteOrder",
          "module": "System.ByteOrder",
          "name": "byteOrder",
          "package": "byteorder",
          "partial": "Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/byteorder/docs/System-ByteOrder.html#v:byteOrder"
      }
    }
  ]
]