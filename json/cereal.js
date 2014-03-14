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
        "word": "cereal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient construction of lazy bytestrings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Serialize.Builder",
          "name": "Builder",
          "package": "cereal",
          "source": "src/Data-Serialize-Builder.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient construction of lazy bytestrings",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "Builder",
          "package": "cereal",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e is an efficient way to build lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n There are several functions for constructing \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es, but only one\n to inspect them: to extract any data, you have to turn them into lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInternally, a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e constructs a lazy \u003ccode\u003e\u003ca\u003eBytestring\u003c/a\u003e\u003c/code\u003e by filling byte\n arrays piece by piece.  As each buffer is filled, it is 'popped'\n off, to become a new chunk of the resulting lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n All this is hidden from the user of the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "Builder",
          "package": "cereal",
          "source": "src/Data-Serialize-Builder.html#Builder",
          "type": "data"
        },
        "index": {
          "description": "Builder is an efficient way to build lazy ByteString There are several functions for constructing Builder but only one to inspect them to extract any data you have to turn them into lazy ByteString using toLazyByteString Internally Builder constructs lazy Bytestring by filling byte arrays piece by piece As each buffer is filled it is popped off to become new chunk of the resulting lazy ByteString All this is hidden from the user of the Builder",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "Builder",
          "package": "cereal",
          "partial": "Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#t:Builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The concatenation of two Builders, an associative operation\n with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e x y) = \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e x) (\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e y)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Serialize.Builder",
          "name": "append",
          "package": "cereal",
          "signature": "Builder -\u003e Builder -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#append",
          "type": "function"
        },
        "index": {
          "description": "The concatenation of two Builders an associative operation with identity empty satisfying toLazyByteString append append toLazyByteString toLazyByteString",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "append",
          "normalized": "Builder-\u003eBuilder-\u003eBuilder",
          "package": "cereal",
          "signature": "Builder-\u003eBuilder-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The empty Builder, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Serialize.Builder",
          "name": "empty",
          "package": "cereal",
          "signature": "Builder",
          "source": "src/Data-Serialize-Builder.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty Builder satisfying toLazyByteString empty empty",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "empty",
          "package": "cereal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Pop the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e we have constructed so far, if any,\n yielding a new chunk in the result lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "flush",
          "package": "cereal",
          "signature": "Builder",
          "source": "src/Data-Serialize-Builder.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Pop the ByteString we have constructed so far if any yielding new chunk in the result lazy ByteString",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "flush",
          "package": "cereal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromByteString\u003c/a\u003e\u003c/code\u003e bs) = \u003ccode\u003e\u003ca\u003efromChunks\u003c/a\u003e\u003c/code\u003e [bs]\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Serialize.Builder",
          "name": "fromByteString",
          "package": "cereal",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#fromByteString",
          "type": "function"
        },
        "index": {
          "description": "Builder taking ByteString satisfying toLazyByteString fromByteString bs fromChunks bs",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "fromByteString",
          "normalized": "ByteString-\u003eBuilder",
          "package": "cereal",
          "partial": "Byte String",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromLazyByteString\u003c/a\u003e\u003c/code\u003e bs) = bs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Serialize.Builder",
          "name": "fromLazyByteString",
          "package": "cereal",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#fromLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "Builder taking lazy ByteString satisfying toLazyByteString fromLazyByteString bs bs",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "fromLazyByteString",
          "normalized": "ByteString-\u003eBuilder",
          "package": "cereal",
          "partial": "Lazy Byte String",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:fromLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word16 in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "putWord16be",
          "package": "cereal",
          "signature": "Word16 -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#putWord16be",
          "type": "function"
        },
        "index": {
          "description": "Write Word16 in big endian format",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "putWord16be",
          "normalized": "Word-\u003eBuilder",
          "package": "cereal",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word16 in native host order and host endianness.\n 2 bytes will be written, unaligned.\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "putWord16host",
          "package": "cereal",
          "signature": "Word16 -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#putWord16host",
          "type": "function"
        },
        "index": {
          "description": "Write Word16 in native host order and host endianness bytes will be written unaligned",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "putWord16host",
          "normalized": "Word-\u003eBuilder",
          "package": "cereal",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word16 in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "putWord16le",
          "package": "cereal",
          "signature": "Word16 -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#putWord16le",
          "type": "function"
        },
        "index": {
          "description": "Write Word16 in little endian format",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "putWord16le",
          "normalized": "Word-\u003eBuilder",
          "package": "cereal",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word32 in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "putWord32be",
          "package": "cereal",
          "signature": "Word32 -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#putWord32be",
          "type": "function"
        },
        "index": {
          "description": "Write Word32 in big endian format",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "putWord32be",
          "normalized": "Word-\u003eBuilder",
          "package": "cereal",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word32 in native host order and host endianness.\n 4 bytes will be written, unaligned.\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "putWord32host",
          "package": "cereal",
          "signature": "Word32 -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#putWord32host",
          "type": "function"
        },
        "index": {
          "description": "Write Word32 in native host order and host endianness bytes will be written unaligned",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "putWord32host",
          "normalized": "Word-\u003eBuilder",
          "package": "cereal",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word32 in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "putWord32le",
          "package": "cereal",
          "signature": "Word32 -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#putWord32le",
          "type": "function"
        },
        "index": {
          "description": "Write Word32 in little endian format",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "putWord32le",
          "normalized": "Word-\u003eBuilder",
          "package": "cereal",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word64 in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "putWord64be",
          "package": "cereal",
          "signature": "Word64 -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#putWord64be",
          "type": "function"
        },
        "index": {
          "description": "Write Word64 in big endian format",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "putWord64be",
          "normalized": "Word-\u003eBuilder",
          "package": "cereal",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word64 in native host order.\n On a 32 bit machine we write two host order Word32s, in big endian form.\n 8 bytes will be written, unaligned.\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "putWord64host",
          "package": "cereal",
          "signature": "Word64 -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#putWord64host",
          "type": "function"
        },
        "index": {
          "description": "Write Word64 in native host order On bit machine we write two host order Word32s in big endian form bytes will be written unaligned",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "putWord64host",
          "normalized": "Word-\u003eBuilder",
          "package": "cereal",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word64 in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "putWord64le",
          "package": "cereal",
          "signature": "Word64 -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#putWord64le",
          "type": "function"
        },
        "index": {
          "description": "Write Word64 in little endian format",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "putWord64le",
          "normalized": "Word-\u003eBuilder",
          "package": "cereal",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a single native machine word. The word is\n written in host order, host endian form, for the machine you're on.\n On a 64 bit machine the Word is an 8 byte value, on a 32 bit machine,\n 4 bytes. Values written this way are not portable to\n different endian or word sized machines, without conversion.\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "putWordhost",
          "package": "cereal",
          "signature": "Word -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#putWordhost",
          "type": "function"
        },
        "index": {
          "description": "Builder taking single native machine word The word is written in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes Values written this way are not portable to different endian or word sized machines without conversion",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "putWordhost",
          "normalized": "Word-\u003eBuilder",
          "package": "cereal",
          "partial": "Wordhost",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a single byte, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e b) = \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e b\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Serialize.Builder",
          "name": "singleton",
          "package": "cereal",
          "signature": "Word8 -\u003e Builder",
          "source": "src/Data-Serialize-Builder.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Builder taking single byte satisfying toLazyByteString singleton singleton",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "singleton",
          "normalized": "Word-\u003eBuilder",
          "package": "cereal",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Builder",
          "name": "toByteString",
          "package": "cereal",
          "signature": "Builder -\u003e ByteString",
          "source": "src/Data-Serialize-Builder.html#toByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "toByteString",
          "normalized": "Builder-\u003eByteString",
          "package": "cereal",
          "partial": "Byte String",
          "signature": "Builder-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Extract a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n The construction work takes place if and when the relevant part of\n the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is demanded.\n\u003c/p\u003e",
          "module": "Data.Serialize.Builder",
          "name": "toLazyByteString",
          "package": "cereal",
          "signature": "Builder -\u003e ByteString",
          "source": "src/Data-Serialize-Builder.html#toLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "Extract lazy ByteString from Builder The construction work takes place if and when the relevant part of the lazy ByteString is demanded",
          "hierarchy": "Data Serialize Builder",
          "module": "Data.Serialize.Builder",
          "name": "toLazyByteString",
          "normalized": "Builder-\u003eByteString",
          "package": "cereal",
          "partial": "Lazy Byte String",
          "signature": "Builder-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:toLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Get monad. A monad for efficiently building structures from\n strict ByteStrings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Serialize.Get",
          "name": "Get",
          "package": "cereal",
          "source": "src/Data-Serialize-Get.html",
          "type": "module"
        },
        "index": {
          "description": "The Get monad monad for efficiently building structures from strict ByteStrings",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "Get",
          "package": "cereal",
          "partial": "Get",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Get monad is an Exception and State monad.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "Get",
          "package": "cereal",
          "source": "src/Data-Serialize-Get.html#Get",
          "type": "data"
        },
        "index": {
          "description": "The Get monad is an Exception and State monad",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "Get",
          "package": "cereal",
          "partial": "Get",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#t:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a parse.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "Result",
          "package": "cereal",
          "source": "src/Data-Serialize-Get.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of parse",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "Result",
          "package": "cereal",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse succeeded.  The \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is the\n   input that had not yet been consumed (if any) when\n   the parse succeeded.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "Done",
          "package": "cereal",
          "signature": "Done r ByteString",
          "source": "src/Data-Serialize-Get.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The parse succeeded The ByteString is the input that had not yet been consumed if any when the parse succeeded",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "Done",
          "package": "cereal",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse failed. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is the\n   message describing the error, if any.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "Fail",
          "package": "cereal",
          "signature": "Fail String ByteString",
          "source": "src/Data-Serialize-Get.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The parse failed The String is the message describing the error if any",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "Fail",
          "package": "cereal",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply this continuation with more input so that\n   the parser can resume. To indicate that no more\n   input is available, use an \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e string.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "Partial",
          "package": "cereal",
          "signature": "Partial (ByteString -\u003e Result r)",
          "source": "src/Data-Serialize-Get.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Supply this continuation with more input so that the parser can resume To indicate that no more input is available use an empty string",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "Partial",
          "normalized": "Partial(ByteString-\u003eResult a)",
          "package": "cereal",
          "partial": "Partial",
          "signature": "Partial(ByteString-\u003eResult r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf at least \u003ccode\u003en\u003c/code\u003e bytes of input are available, return the current\n   input, otherwise fail.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "ensure",
          "package": "cereal",
          "signature": "Int -\u003e Get ByteString",
          "source": "src/Data-Serialize-Get.html#ensure",
          "type": "function"
        },
        "index": {
          "description": "If at least bytes of input are available return the current input otherwise fail",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "ensure",
          "normalized": "Int-\u003eGet ByteString",
          "package": "cereal",
          "signature": "Int-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:ensure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient \u003ccode\u003eget\u003c/code\u003e method for strict ByteStrings. Fails if fewer\n than \u003ccode\u003en\u003c/code\u003e bytes are left in the input. This function creates a fresh\n copy of the underlying bytes.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getByteString",
          "package": "cereal",
          "signature": "Int -\u003e Get ByteString",
          "source": "src/Data-Serialize-Get.html#getByteString",
          "type": "function"
        },
        "index": {
          "description": "An efficient get method for strict ByteStrings Fails if fewer than bytes are left in the input This function creates fresh copy of the underlying bytes",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getByteString",
          "normalized": "Int-\u003eGet ByteString",
          "package": "cereal",
          "partial": "Byte String",
          "signature": "Int-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull \u003ccode\u003en\u003c/code\u003e bytes from the input, as a strict ByteString.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getBytes",
          "package": "cereal",
          "signature": "Int -\u003e Get ByteString",
          "source": "src/Data-Serialize-Get.html#getBytes",
          "type": "function"
        },
        "index": {
          "description": "Pull bytes from the input as strict ByteString",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getBytes",
          "normalized": "Int-\u003eGet ByteString",
          "package": "cereal",
          "partial": "Bytes",
          "signature": "Int-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an Either, in the following format:\n   Word8 (0 for Left, anything else for Right)\n   element a when 0, element b otherwise\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getEitherOf",
          "package": "cereal",
          "signature": "Get a -\u003e Get b -\u003e Get (Either a b)",
          "source": "src/Data-Serialize-Get.html#getEitherOf",
          "type": "function"
        },
        "index": {
          "description": "Read an Either in the following format Word8 for Left anything else for Right element when element otherwise",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getEitherOf",
          "normalized": "Get a-\u003eGet b-\u003eGet(Either a b)",
          "package": "cereal",
          "partial": "Either Of",
          "signature": "Get a-\u003eGet b-\u003eGet(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getEitherOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an IArray in the following format:\n   index (lower bound)\n   index (upper bound)\n   Word64 (big endian format)\n   element 1\n   ...\n   element n\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getIArrayOf",
          "package": "cereal",
          "signature": "Get i -\u003e Get e -\u003e Get (a i e)",
          "source": "src/Data-Serialize-Get.html#getIArrayOf",
          "type": "function"
        },
        "index": {
          "description": "Get an IArray in the following format index lower bound index upper bound Word64 big endian format element element",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getIArrayOf",
          "normalized": "Get a-\u003eGet b-\u003eGet(c a b)",
          "package": "cereal",
          "partial": "IArray Of",
          "signature": "Get i-\u003eGet e-\u003eGet(a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getIArrayOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead as a list of pairs of int and element.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getIntMapOf",
          "package": "cereal",
          "signature": "Get Int -\u003e Get a -\u003e Get (IntMap a)",
          "source": "src/Data-Serialize-Get.html#getIntMapOf",
          "type": "function"
        },
        "index": {
          "description": "Read as list of pairs of int and element",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getIntMapOf",
          "normalized": "Get Int-\u003eGet a-\u003eGet(IntMap a)",
          "package": "cereal",
          "partial": "Int Map Of",
          "signature": "Get Int-\u003eGet a-\u003eGet(IntMap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getIntMapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead as a list of ints.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getIntSetOf",
          "package": "cereal",
          "signature": "Get Int -\u003e Get IntSet",
          "source": "src/Data-Serialize-Get.html#getIntSetOf",
          "type": "function"
        },
        "index": {
          "description": "Read as list of ints",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getIntSetOf",
          "normalized": "Get Int-\u003eGet IntSet",
          "package": "cereal",
          "partial": "Int Set Of",
          "signature": "Get Int-\u003eGet IntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getIntSetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Get",
          "name": "getLazyByteString",
          "package": "cereal",
          "signature": "Int64 -\u003e Get ByteString",
          "source": "src/Data-Serialize-Get.html#getLazyByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getLazyByteString",
          "normalized": "Int-\u003eGet ByteString",
          "package": "cereal",
          "partial": "Lazy Byte String",
          "signature": "Int-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list in the following format:\n   Word64 (big endian format)\n   element 1\n   ...\n   element n\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getListOf",
          "package": "cereal",
          "signature": "Get a -\u003e Get [a]",
          "source": "src/Data-Serialize-Get.html#getListOf",
          "type": "function"
        },
        "index": {
          "description": "Get list in the following format Word64 big endian format element element",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getListOf",
          "normalized": "Get a-\u003eGet[a]",
          "package": "cereal",
          "partial": "List Of",
          "signature": "Get a-\u003eGet[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getListOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead as a list of pairs of key and element.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getMapOf",
          "package": "cereal",
          "signature": "Get k -\u003e Get a -\u003e Get (Map k a)",
          "source": "src/Data-Serialize-Get.html#getMapOf",
          "type": "function"
        },
        "index": {
          "description": "Read as list of pairs of key and element",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getMapOf",
          "normalized": "Get a-\u003eGet b-\u003eGet(Map a b)",
          "package": "cereal",
          "partial": "Map Of",
          "signature": "Get k-\u003eGet a-\u003eGet(Map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getMapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a Maybe in the following format:\n   Word8 (0 for Nothing, anything else for Just)\n   element (when Just)\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getMaybeOf",
          "package": "cereal",
          "signature": "Get a -\u003e Get (Maybe a)",
          "source": "src/Data-Serialize-Get.html#getMaybeOf",
          "type": "function"
        },
        "index": {
          "description": "Read in Maybe in the following format Word8 for Nothing anything else for Just element when Just",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getMaybeOf",
          "normalized": "Get a-\u003eGet(Maybe a)",
          "package": "cereal",
          "partial": "Maybe Of",
          "signature": "Get a-\u003eGet(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getMaybeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a sequence in the following format:\n   Word64 (big endian format)\n   element 1\n   ...\n   element n\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getSeqOf",
          "package": "cereal",
          "signature": "Get a -\u003e Get (Seq a)",
          "source": "src/Data-Serialize-Get.html#getSeqOf",
          "type": "function"
        },
        "index": {
          "description": "Get sequence in the following format Word64 big endian format element element",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getSeqOf",
          "normalized": "Get a-\u003eGet(Seq a)",
          "package": "cereal",
          "partial": "Seq Of",
          "signature": "Get a-\u003eGet(Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getSeqOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead as a list of elements.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getSetOf",
          "package": "cereal",
          "signature": "Get a -\u003e Get (Set a)",
          "source": "src/Data-Serialize-Get.html#getSetOf",
          "type": "function"
        },
        "index": {
          "description": "Read as list of elements",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getSetOf",
          "normalized": "Get a-\u003eGet(Set a)",
          "package": "cereal",
          "partial": "Set Of",
          "signature": "Get a-\u003eGet(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getSetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead as a list of lists.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getTreeOf",
          "package": "cereal",
          "signature": "Get a -\u003e Get (Tree a)",
          "source": "src/Data-Serialize-Get.html#getTreeOf",
          "type": "function"
        },
        "index": {
          "description": "Read as list of lists",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getTreeOf",
          "normalized": "Get a-\u003eGet(Tree a)",
          "package": "cereal",
          "partial": "Tree Of",
          "signature": "Get a-\u003eGet(Tree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getTreeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Get",
          "name": "getTwoOf",
          "package": "cereal",
          "signature": "Get a -\u003e Get b -\u003e Get (a, b)",
          "source": "src/Data-Serialize-Get.html#getTwoOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getTwoOf",
          "normalized": "Get a-\u003eGet b-\u003eGet(a,b)",
          "package": "cereal",
          "partial": "Two Of",
          "signature": "Get a-\u003eGet b-\u003eGet(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getTwoOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word16 in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getWord16be",
          "package": "cereal",
          "signature": "Get Word16",
          "source": "src/Data-Serialize-Get.html#getWord16be",
          "type": "function"
        },
        "index": {
          "description": "Read Word16 in big endian format",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getWord16be",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a 2 byte Word16 in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getWord16host",
          "package": "cereal",
          "signature": "Get Word16",
          "source": "src/Data-Serialize-Get.html#getWord16host",
          "type": "function"
        },
        "index": {
          "description": "Read byte Word16 in native host order and host endianness",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getWord16host",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word16 in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getWord16le",
          "package": "cereal",
          "signature": "Get Word16",
          "source": "src/Data-Serialize-Get.html#getWord16le",
          "type": "function"
        },
        "index": {
          "description": "Read Word16 in little endian format",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getWord16le",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word32 in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getWord32be",
          "package": "cereal",
          "signature": "Get Word32",
          "source": "src/Data-Serialize-Get.html#getWord32be",
          "type": "function"
        },
        "index": {
          "description": "Read Word32 in big endian format",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getWord32be",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a Word32 in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getWord32host",
          "package": "cereal",
          "signature": "Get Word32",
          "source": "src/Data-Serialize-Get.html#getWord32host",
          "type": "function"
        },
        "index": {
          "description": "Read Word32 in native host order and host endianness",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getWord32host",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word32 in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getWord32le",
          "package": "cereal",
          "signature": "Get Word32",
          "source": "src/Data-Serialize-Get.html#getWord32le",
          "type": "function"
        },
        "index": {
          "description": "Read Word32 in little endian format",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getWord32le",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word64 in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getWord64be",
          "package": "cereal",
          "signature": "Get Word64",
          "source": "src/Data-Serialize-Get.html#getWord64be",
          "type": "function"
        },
        "index": {
          "description": "Read Word64 in big endian format",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getWord64be",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a Word64 in native host order and host endianess.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getWord64host",
          "package": "cereal",
          "signature": "Get Word64",
          "source": "src/Data-Serialize-Get.html#getWord64host",
          "type": "function"
        },
        "index": {
          "description": "Read Word64 in native host order and host endianess",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getWord64host",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word64 in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getWord64le",
          "package": "cereal",
          "signature": "Get Word64",
          "source": "src/Data-Serialize-Get.html#getWord64le",
          "type": "function"
        },
        "index": {
          "description": "Read Word64 in little endian format",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getWord64le",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word8 from the monad state\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getWord8",
          "package": "cereal",
          "signature": "Get Word8",
          "source": "src/Data-Serialize-Get.html#getWord8",
          "type": "function"
        },
        "index": {
          "description": "Read Word8 from the monad state",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getWord8",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a single native machine word. The word is read in\n host order, host endian form, for the machine you're on. On a 64 bit\n machine the Word is an 8 byte value, on a 32 bit machine, 4 bytes.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "getWordhost",
          "package": "cereal",
          "signature": "Get Word",
          "source": "src/Data-Serialize-Get.html#getWordhost",
          "type": "function"
        },
        "index": {
          "description": "Read single native machine word The word is read in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "getWordhost",
          "package": "cereal",
          "partial": "Wordhost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether all input has been consumed.\n\u003c/p\u003e\u003cp\u003eWARNING: when run with \u003ccode\u003erunGetPartial\u003c/code\u003e, isEmpty will only tell you if you're\n at the end of the current chunk.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "isEmpty",
          "package": "cereal",
          "signature": "Get Bool",
          "source": "src/Data-Serialize-Get.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Test whether all input has been consumed WARNING when run with runGetPartial isEmpty will only tell you if you re at the end of the current chunk",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "isEmpty",
          "package": "cereal",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsolate an action to operating within a fixed block of bytes.  The action\n   is required to consume all the bytes that it is isolated to.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "isolate",
          "package": "cereal",
          "signature": "Int -\u003e Get a -\u003e Get a",
          "source": "src/Data-Serialize-Get.html#isolate",
          "type": "function"
        },
        "index": {
          "description": "Isolate an action to operating within fixed block of bytes The action is required to consume all the bytes that it is isolated to",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "isolate",
          "normalized": "Int-\u003eGet a-\u003eGet a",
          "package": "cereal",
          "signature": "Int-\u003eGet a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:isolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Get",
          "name": "label",
          "package": "cereal",
          "signature": "String -\u003e Get a -\u003e Get a",
          "source": "src/Data-Serialize-Get.html#label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "label",
          "normalized": "String-\u003eGet a-\u003eGet a",
          "package": "cereal",
          "signature": "String-\u003eGet a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003ega\u003c/code\u003e, but return without consuming its input.\n Fails if \u003ccode\u003ega\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "lookAhead",
          "package": "cereal",
          "signature": "Get a -\u003e Get a",
          "source": "src/Data-Serialize-Get.html#lookAhead",
          "type": "function"
        },
        "index": {
          "description": "Run ga but return without consuming its input Fails if ga fails",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "lookAhead",
          "normalized": "Get a-\u003eGet a",
          "package": "cereal",
          "partial": "Ahead",
          "signature": "Get a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e, but consume the input if \u003ccode\u003egea\u003c/code\u003e returns 'Right _'.\n Fails if \u003ccode\u003egea\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "lookAheadE",
          "package": "cereal",
          "signature": "Get (Either a b) -\u003e Get (Either a b)",
          "source": "src/Data-Serialize-Get.html#lookAheadE",
          "type": "function"
        },
        "index": {
          "description": "Like lookAhead but consume the input if gea returns Right Fails if gea fails",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "lookAheadE",
          "normalized": "Get(Either a b)-\u003eGet(Either a b)",
          "package": "cereal",
          "partial": "Ahead",
          "signature": "Get(Either a b)-\u003eGet(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:lookAheadE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e, but consume the input if \u003ccode\u003egma\u003c/code\u003e returns 'Just _'.\n Fails if \u003ccode\u003egma\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "lookAheadM",
          "package": "cereal",
          "signature": "Get (Maybe a) -\u003e Get (Maybe a)",
          "source": "src/Data-Serialize-Get.html#lookAheadM",
          "type": "function"
        },
        "index": {
          "description": "Like lookAhead but consume the input if gma returns Just Fails if gma fails",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "lookAheadM",
          "normalized": "Get(Maybe a)-\u003eGet(Maybe a)",
          "package": "cereal",
          "partial": "Ahead",
          "signature": "Get(Maybe a)-\u003eGet(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:lookAheadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of remaining unparsed bytes.  Useful for checking whether\n all input has been consumed.\n\u003c/p\u003e\u003cp\u003eWARNING: when run with \u003ccode\u003erunGetPartial\u003c/code\u003e, remaining will only return the number\n of bytes that are remaining in the current input.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "remaining",
          "package": "cereal",
          "signature": "Get Int",
          "source": "src/Data-Serialize-Get.html#remaining",
          "type": "function"
        },
        "index": {
          "description": "Get the number of remaining unparsed bytes Useful for checking whether all input has been consumed WARNING when run with runGetPartial remaining will only return the number of bytes that are remaining in the current input",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "remaining",
          "package": "cereal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:remaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the Get monad applies a \u003ccode\u003eget\u003c/code\u003e-based parser on the input ByteString\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "runGet",
          "package": "cereal",
          "signature": "Get a -\u003e ByteString -\u003e Either String a",
          "source": "src/Data-Serialize-Get.html#runGet",
          "type": "function"
        },
        "index": {
          "description": "Run the Get monad applies get based parser on the input ByteString",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "runGet",
          "normalized": "Get a-\u003eByteString-\u003eEither String a",
          "package": "cereal",
          "partial": "Get",
          "signature": "Get a-\u003eByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:runGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the Get monad over a Lazy ByteString.  Note that this will not run the\n Get parser lazily, but will operate on lazy ByteStrings.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "runGetLazy",
          "package": "cereal",
          "signature": "Get a -\u003e ByteString -\u003e Either String a",
          "source": "src/Data-Serialize-Get.html#runGetLazy",
          "type": "function"
        },
        "index": {
          "description": "Run the Get monad over Lazy ByteString Note that this will not run the Get parser lazily but will operate on lazy ByteStrings",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "runGetLazy",
          "normalized": "Get a-\u003eByteString-\u003eEither String a",
          "package": "cereal",
          "partial": "Get Lazy",
          "signature": "Get a-\u003eByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:runGetLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the Get monad over a Lazy ByteString.  Note that this does not run the\n Get parser lazily, but will operate on lazy ByteStrings.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "runGetLazyState",
          "package": "cereal",
          "signature": "Get a -\u003e ByteString -\u003e Either String (a, ByteString)",
          "source": "src/Data-Serialize-Get.html#runGetLazyState",
          "type": "function"
        },
        "index": {
          "description": "Run the Get monad over Lazy ByteString Note that this does not run the Get parser lazily but will operate on lazy ByteStrings",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "runGetLazyState",
          "normalized": "Get a-\u003eByteString-\u003eEither String(a,ByteString)",
          "package": "cereal",
          "partial": "Get Lazy State",
          "signature": "Get a-\u003eByteString-\u003eEither String(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:runGetLazyState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the Get monad applies a \u003ccode\u003eget\u003c/code\u003e-based parser on the input ByteString\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "runGetPartial",
          "package": "cereal",
          "signature": "Get a -\u003e ByteString -\u003e Result a",
          "source": "src/Data-Serialize-Get.html#runGetPartial",
          "type": "function"
        },
        "index": {
          "description": "Run the Get monad applies get based parser on the input ByteString",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "runGetPartial",
          "normalized": "Get a-\u003eByteString-\u003eResult a",
          "package": "cereal",
          "partial": "Get Partial",
          "signature": "Get a-\u003eByteString-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:runGetPartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the Get monad applies a \u003ccode\u003eget\u003c/code\u003e-based parser on the input\n ByteString. Additional to the result of get it returns the number of\n consumed bytes and the rest of the input.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "runGetState",
          "package": "cereal",
          "signature": "Get a -\u003e ByteString -\u003e Int -\u003e Either String (a, ByteString)",
          "source": "src/Data-Serialize-Get.html#runGetState",
          "type": "function"
        },
        "index": {
          "description": "Run the Get monad applies get based parser on the input ByteString Additional to the result of get it returns the number of consumed bytes and the rest of the input",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "runGetState",
          "normalized": "Get a-\u003eByteString-\u003eInt-\u003eEither String(a,ByteString)",
          "package": "cereal",
          "partial": "Get State",
          "signature": "Get a-\u003eByteString-\u003eInt-\u003eEither String(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:runGetState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip ahead \u003ccode\u003en\u003c/code\u003e bytes. Fails if fewer than \u003ccode\u003en\u003c/code\u003e bytes are available.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "skip",
          "package": "cereal",
          "signature": "Int -\u003e Get ()",
          "source": "src/Data-Serialize-Get.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Skip ahead bytes Fails if fewer than bytes are available",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "skip",
          "normalized": "Int-\u003eGet()",
          "package": "cereal",
          "signature": "Int-\u003eGet()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next up to \u003ccode\u003en\u003c/code\u003e bytes as a ByteString, without consuming them.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "uncheckedLookAhead",
          "package": "cereal",
          "signature": "Int -\u003e Get ByteString",
          "source": "src/Data-Serialize-Get.html#uncheckedLookAhead",
          "type": "function"
        },
        "index": {
          "description": "Get the next up to bytes as ByteString without consuming them",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "uncheckedLookAhead",
          "normalized": "Int-\u003eGet ByteString",
          "package": "cereal",
          "partial": "Look Ahead",
          "signature": "Int-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:uncheckedLookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip ahead \u003ccode\u003en\u003c/code\u003e bytes. No error if there isn't enough bytes.\n\u003c/p\u003e",
          "module": "Data.Serialize.Get",
          "name": "uncheckedSkip",
          "package": "cereal",
          "signature": "Int -\u003e Get ()",
          "source": "src/Data-Serialize-Get.html#uncheckedSkip",
          "type": "function"
        },
        "index": {
          "description": "Skip ahead bytes No error if there isn enough bytes",
          "hierarchy": "Data Serialize Get",
          "module": "Data.Serialize.Get",
          "name": "uncheckedSkip",
          "normalized": "Int-\u003eGet()",
          "package": "cereal",
          "partial": "Skip",
          "signature": "Int-\u003eGet()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:uncheckedSkip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIEEE-754 parsing, as described in this stack-overflow article:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://stackoverflow.com/questions/6976684/converting-ieee-754-floating-point-in-haskell-word32-64-to-and-from-haskell-float/7002812#7002812\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "IEEE754",
          "package": "cereal",
          "source": "src/Data-Serialize-IEEE754.html",
          "type": "module"
        },
        "index": {
          "description": "IEEE-754 parsing as described in this stack-overflow article http stackoverflow.com questions converting-ieee-754-floating-point-in-haskell-word32-64-to-and-from-haskell-float",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "IEEE754",
          "package": "cereal",
          "partial": "IEEE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Float in big endian IEEE-754 format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat32be",
          "package": "cereal",
          "signature": "Get Float",
          "source": "src/Data-Serialize-IEEE754.html#getFloat32be",
          "type": "function"
        },
        "index": {
          "description": "Read Float in big endian IEEE-754 format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat32be",
          "package": "cereal",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:getFloat32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Float in little endian IEEE-754 format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat32le",
          "package": "cereal",
          "signature": "Get Float",
          "source": "src/Data-Serialize-IEEE754.html#getFloat32le",
          "type": "function"
        },
        "index": {
          "description": "Read Float in little endian IEEE-754 format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat32le",
          "package": "cereal",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:getFloat32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Double in big endian IEEE-754 format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat64be",
          "package": "cereal",
          "signature": "Get Double",
          "source": "src/Data-Serialize-IEEE754.html#getFloat64be",
          "type": "function"
        },
        "index": {
          "description": "Read Double in big endian IEEE-754 format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat64be",
          "package": "cereal",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:getFloat64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Double in little endian IEEE-754 format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat64le",
          "package": "cereal",
          "signature": "Get Double",
          "source": "src/Data-Serialize-IEEE754.html#getFloat64le",
          "type": "function"
        },
        "index": {
          "description": "Read Double in little endian IEEE-754 format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat64le",
          "package": "cereal",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:getFloat64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Float in big endian IEEE-754 format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat32be",
          "package": "cereal",
          "signature": "Float -\u003e Put",
          "source": "src/Data-Serialize-IEEE754.html#putFloat32be",
          "type": "function"
        },
        "index": {
          "description": "Write Float in big endian IEEE-754 format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat32be",
          "normalized": "Float-\u003ePut",
          "package": "cereal",
          "partial": "Float",
          "signature": "Float-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:putFloat32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Float in little endian IEEE-754 format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat32le",
          "package": "cereal",
          "signature": "Float -\u003e Put",
          "source": "src/Data-Serialize-IEEE754.html#putFloat32le",
          "type": "function"
        },
        "index": {
          "description": "Write Float in little endian IEEE-754 format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat32le",
          "normalized": "Float-\u003ePut",
          "package": "cereal",
          "partial": "Float",
          "signature": "Float-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:putFloat32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Double in big endian IEEE-754 format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat64be",
          "package": "cereal",
          "signature": "Double -\u003e Put",
          "source": "src/Data-Serialize-IEEE754.html#putFloat64be",
          "type": "function"
        },
        "index": {
          "description": "Write Double in big endian IEEE-754 format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat64be",
          "normalized": "Double-\u003ePut",
          "package": "cereal",
          "partial": "Float",
          "signature": "Double-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:putFloat64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Double in little endian IEEE-754 format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat64le",
          "package": "cereal",
          "signature": "Double -\u003e Put",
          "source": "src/Data-Serialize-IEEE754.html#putFloat64le",
          "type": "function"
        },
        "index": {
          "description": "Write Double in little endian IEEE-754 format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat64le",
          "normalized": "Double-\u003ePut",
          "package": "cereal",
          "partial": "Float",
          "signature": "Double-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:putFloat64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Put monad. A monad for efficiently constructing bytestrings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Serialize.Put",
          "name": "Put",
          "package": "cereal",
          "source": "src/Data-Serialize-Put.html",
          "type": "module"
        },
        "index": {
          "description": "The Put monad monad for efficiently constructing bytestrings",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "Put",
          "package": "cereal",
          "partial": "Put",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut merely lifts Builder into a Writer monad, applied to ().\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "Put",
          "package": "cereal",
          "source": "src/Data-Serialize-Put.html#Put",
          "type": "type"
        },
        "index": {
          "description": "Put merely lifts Builder into Writer monad applied to",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "Put",
          "package": "cereal",
          "partial": "Put",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#t:Put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe PutM type. A Writer monad over the efficient Builder monoid.\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "PutM",
          "package": "cereal",
          "source": "src/Data-Serialize-Put.html#PutM",
          "type": "newtype"
        },
        "index": {
          "description": "The PutM type Writer monad over the efficient Builder monoid",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "PutM",
          "package": "cereal",
          "partial": "Put",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#t:PutM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "Putter",
          "package": "cereal",
          "source": "src/Data-Serialize-Put.html#Putter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "Putter",
          "package": "cereal",
          "partial": "Putter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#t:Putter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "Put",
          "package": "cereal",
          "signature": "Put",
          "source": "src/Data-Serialize-Put.html#PutM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "Put",
          "package": "cereal",
          "partial": "Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:Put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "execPut",
          "package": "cereal",
          "signature": "PutM a -\u003e Builder",
          "source": "src/Data-Serialize-Put.html#execPut",
          "type": "function"
        },
        "index": {
          "description": "Run the Put monad",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "execPut",
          "normalized": "PutM a-\u003eBuilder",
          "package": "cereal",
          "partial": "Put",
          "signature": "PutM a-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:execPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop the ByteString we have constructed so far, if any, yielding a\n new chunk in the result ByteString.\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "flush",
          "package": "cereal",
          "signature": "Put",
          "source": "src/Data-Serialize-Put.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Pop the ByteString we have constructed so far if any yielding new chunk in the result ByteString",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "flush",
          "package": "cereal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "putBuilder",
          "package": "cereal",
          "signature": "Putter Builder",
          "source": "src/Data-Serialize-Put.html#putBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putBuilder",
          "package": "cereal",
          "partial": "Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient primitive to write a strict ByteString into the output buffer.\n It flushes the current buffer, and writes the argument into a new chunk.\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putByteString",
          "package": "cereal",
          "signature": "Putter ByteString",
          "source": "src/Data-Serialize-Put.html#putByteString",
          "type": "function"
        },
        "index": {
          "description": "An efficient primitive to write strict ByteString into the output buffer It flushes the current buffer and writes the argument into new chunk",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putByteString",
          "package": "cereal",
          "partial": "Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "putEitherOf",
          "package": "cereal",
          "signature": "Putter a -\u003e Putter b -\u003e Putter (Either a b)",
          "source": "src/Data-Serialize-Put.html#putEitherOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putEitherOf",
          "normalized": "Putter a-\u003ePutter b-\u003ePutter(Either a b)",
          "package": "cereal",
          "partial": "Either Of",
          "signature": "Putter a-\u003ePutter b-\u003ePutter(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putEitherOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "putIArrayOf",
          "package": "cereal",
          "signature": "Putter i -\u003e Putter e -\u003e Putter (a i e)",
          "source": "src/Data-Serialize-Put.html#putIArrayOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putIArrayOf",
          "normalized": "Putter a-\u003ePutter b-\u003ePutter(c a b)",
          "package": "cereal",
          "partial": "IArray Of",
          "signature": "Putter i-\u003ePutter e-\u003ePutter(a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putIArrayOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "putIntMapOf",
          "package": "cereal",
          "signature": "Putter Int -\u003e Putter a -\u003e Putter (IntMap a)",
          "source": "src/Data-Serialize-Put.html#putIntMapOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putIntMapOf",
          "normalized": "Putter Int-\u003ePutter a-\u003ePutter(IntMap a)",
          "package": "cereal",
          "partial": "Int Map Of",
          "signature": "Putter Int-\u003ePutter a-\u003ePutter(IntMap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putIntMapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "putIntSetOf",
          "package": "cereal",
          "signature": "Putter Int -\u003e Putter IntSet",
          "source": "src/Data-Serialize-Put.html#putIntSetOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putIntSetOf",
          "normalized": "Putter Int-\u003ePutter IntSet",
          "package": "cereal",
          "partial": "Int Set Of",
          "signature": "Putter Int-\u003ePutter IntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putIntSetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a lazy ByteString efficiently, simply appending the lazy\n ByteString chunks to the output buffer\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putLazyByteString",
          "package": "cereal",
          "signature": "Putter ByteString",
          "source": "src/Data-Serialize-Put.html#putLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "Write lazy ByteString efficiently simply appending the lazy ByteString chunks to the output buffer",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putLazyByteString",
          "package": "cereal",
          "partial": "Lazy Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "putListOf",
          "package": "cereal",
          "signature": "Putter a -\u003e Putter [a]",
          "source": "src/Data-Serialize-Put.html#putListOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putListOf",
          "normalized": "Putter a-\u003ePutter[a]",
          "package": "cereal",
          "partial": "List Of",
          "signature": "Putter a-\u003ePutter[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putListOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "putMapOf",
          "package": "cereal",
          "signature": "Putter k -\u003e Putter a -\u003e Putter (Map k a)",
          "source": "src/Data-Serialize-Put.html#putMapOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putMapOf",
          "normalized": "Putter a-\u003ePutter b-\u003ePutter(Map a b)",
          "package": "cereal",
          "partial": "Map Of",
          "signature": "Putter k-\u003ePutter a-\u003ePutter(Map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putMapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "putMaybeOf",
          "package": "cereal",
          "signature": "Putter a -\u003e Putter (Maybe a)",
          "source": "src/Data-Serialize-Put.html#putMaybeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putMaybeOf",
          "normalized": "Putter a-\u003ePutter(Maybe a)",
          "package": "cereal",
          "partial": "Maybe Of",
          "signature": "Putter a-\u003ePutter(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putMaybeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "putSeqOf",
          "package": "cereal",
          "signature": "Putter a -\u003e Putter (Seq a)",
          "source": "src/Data-Serialize-Put.html#putSeqOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putSeqOf",
          "normalized": "Putter a-\u003ePutter(Seq a)",
          "package": "cereal",
          "partial": "Seq Of",
          "signature": "Putter a-\u003ePutter(Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putSeqOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "putSetOf",
          "package": "cereal",
          "signature": "Putter a -\u003e Putter (Set a)",
          "source": "src/Data-Serialize-Put.html#putSetOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putSetOf",
          "normalized": "Putter a-\u003ePutter(Set a)",
          "package": "cereal",
          "partial": "Set Of",
          "signature": "Putter a-\u003ePutter(Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putSetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "putTreeOf",
          "package": "cereal",
          "signature": "Putter a -\u003e Putter (Tree a)",
          "source": "src/Data-Serialize-Put.html#putTreeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putTreeOf",
          "normalized": "Putter a-\u003ePutter(Tree a)",
          "package": "cereal",
          "partial": "Tree Of",
          "signature": "Putter a-\u003ePutter(Tree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putTreeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "putTwoOf",
          "package": "cereal",
          "signature": "Putter a -\u003e Putter b -\u003e Putter (a, b)",
          "source": "src/Data-Serialize-Put.html#putTwoOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putTwoOf",
          "normalized": "Putter a-\u003ePutter b-\u003ePutter(a,b)",
          "package": "cereal",
          "partial": "Two Of",
          "signature": "Putter a-\u003ePutter b-\u003ePutter(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putTwoOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word16 in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putWord16be",
          "package": "cereal",
          "signature": "Putter Word16",
          "source": "src/Data-Serialize-Put.html#putWord16be",
          "type": "function"
        },
        "index": {
          "description": "Write Word16 in big endian format",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putWord16be",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a Word16 in native host order and host endianness.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putWord16host",
          "package": "cereal",
          "signature": "Putter Word16",
          "source": "src/Data-Serialize-Put.html#putWord16host",
          "type": "function"
        },
        "index": {
          "description": "Write Word16 in native host order and host endianness For portability issues see putWordhost",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putWord16host",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word16 in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putWord16le",
          "package": "cereal",
          "signature": "Putter Word16",
          "source": "src/Data-Serialize-Put.html#putWord16le",
          "type": "function"
        },
        "index": {
          "description": "Write Word16 in little endian format",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putWord16le",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word32 in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putWord32be",
          "package": "cereal",
          "signature": "Putter Word32",
          "source": "src/Data-Serialize-Put.html#putWord32be",
          "type": "function"
        },
        "index": {
          "description": "Write Word32 in big endian format",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putWord32be",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a Word32 in native host order and host endianness.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putWord32host",
          "package": "cereal",
          "signature": "Putter Word32",
          "source": "src/Data-Serialize-Put.html#putWord32host",
          "type": "function"
        },
        "index": {
          "description": "Write Word32 in native host order and host endianness For portability issues see putWordhost",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putWord32host",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word32 in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putWord32le",
          "package": "cereal",
          "signature": "Putter Word32",
          "source": "src/Data-Serialize-Put.html#putWord32le",
          "type": "function"
        },
        "index": {
          "description": "Write Word32 in little endian format",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putWord32le",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word64 in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putWord64be",
          "package": "cereal",
          "signature": "Putter Word64",
          "source": "src/Data-Serialize-Put.html#putWord64be",
          "type": "function"
        },
        "index": {
          "description": "Write Word64 in big endian format",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putWord64be",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a Word64 in native host order\n On a 32 bit machine we write two host order Word32s, in big endian form.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putWord64host",
          "package": "cereal",
          "signature": "Putter Word64",
          "source": "src/Data-Serialize-Put.html#putWord64host",
          "type": "function"
        },
        "index": {
          "description": "Write Word64 in native host order On bit machine we write two host order Word32s in big endian form For portability issues see putWordhost",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putWord64host",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word64 in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putWord64le",
          "package": "cereal",
          "signature": "Putter Word64",
          "source": "src/Data-Serialize-Put.html#putWord64le",
          "type": "function"
        },
        "index": {
          "description": "Write Word64 in little endian format",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putWord64le",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently write a byte into the output buffer\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putWord8",
          "package": "cereal",
          "signature": "Putter Word8",
          "source": "src/Data-Serialize-Put.html#putWord8",
          "type": "function"
        },
        "index": {
          "description": "Efficiently write byte into the output buffer",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putWord8",
          "package": "cereal",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a single native machine word. The word is\n written in host order, host endian form, for the machine you're on.\n On a 64 bit machine the Word is an 8 byte value, on a 32 bit machine,\n 4 bytes. Values written this way are not portable to\n different endian or word sized machines, without conversion.\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "putWordhost",
          "package": "cereal",
          "signature": "Putter Word",
          "source": "src/Data-Serialize-Put.html#putWordhost",
          "type": "function"
        },
        "index": {
          "description": "Write single native machine word The word is written in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes Values written this way are not portable to different endian or word sized machines without conversion",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "putWordhost",
          "package": "cereal",
          "partial": "Wordhost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "runPut",
          "package": "cereal",
          "signature": "Put -\u003e ByteString",
          "source": "src/Data-Serialize-Put.html#runPut",
          "type": "function"
        },
        "index": {
          "description": "Run the Put monad with serialiser",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "runPut",
          "normalized": "Put-\u003eByteString",
          "package": "cereal",
          "partial": "Put",
          "signature": "Put-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:runPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "runPutLazy",
          "package": "cereal",
          "signature": "Put -\u003e ByteString",
          "source": "src/Data-Serialize-Put.html#runPutLazy",
          "type": "function"
        },
        "index": {
          "description": "Run the Put monad with serialiser",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "runPutLazy",
          "normalized": "Put-\u003eByteString",
          "package": "cereal",
          "partial": "Put Lazy",
          "signature": "Put-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:runPutLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser and get its result\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "runPutM",
          "package": "cereal",
          "signature": "PutM a -\u003e (a, ByteString)",
          "source": "src/Data-Serialize-Put.html#runPutM",
          "type": "function"
        },
        "index": {
          "description": "Run the Put monad with serialiser and get its result",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "runPutM",
          "normalized": "PutM a-\u003e(a,ByteString)",
          "package": "cereal",
          "partial": "Put",
          "signature": "PutM a-\u003e(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:runPutM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser\n\u003c/p\u003e",
          "module": "Data.Serialize.Put",
          "name": "runPutMLazy",
          "package": "cereal",
          "signature": "PutM a -\u003e (a, ByteString)",
          "source": "src/Data-Serialize-Put.html#runPutMLazy",
          "type": "function"
        },
        "index": {
          "description": "Run the Put monad with serialiser",
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "runPutMLazy",
          "normalized": "PutM a-\u003e(a,ByteString)",
          "package": "cereal",
          "partial": "Put MLazy",
          "signature": "PutM a-\u003e(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:runPutMLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.Put",
          "name": "unPut",
          "package": "cereal",
          "signature": "PairS a",
          "source": "src/Data-Serialize-Put.html#PutM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Serialize Put",
          "module": "Data.Serialize.Put",
          "name": "unPut",
          "package": "cereal",
          "partial": "Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:unPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize",
          "name": "Serialize",
          "package": "cereal",
          "source": "src/Data-Serialize.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Serialize",
          "module": "Data.Serialize",
          "name": "Serialize",
          "package": "cereal",
          "partial": "Serialize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions (\u003ccode\u003eghc \u003e= 7.2.1\u003c/code\u003e), the \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e\n methods will have default generic implementations.\n\u003c/p\u003e\u003cp\u003eTo use this option, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your datatype\n and declare a \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e instance for it without giving a definition for\n \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Serialize",
          "name": "Serialize",
          "package": "cereal",
          "source": "src/Data-Serialize.html#Serialize",
          "type": "class"
        },
        "index": {
          "description": "If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions ghc the put and get methods will have default generic implementations To use this option simply add deriving Generic clause to your datatype and declare Serialize instance for it without giving definition for put and get",
          "hierarchy": "Data Serialize",
          "module": "Data.Serialize",
          "name": "Serialize",
          "package": "cereal",
          "partial": "Serialize",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#t:Serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a value from a strict ByteString, reconstructing the original\n structure.\n\u003c/p\u003e",
          "module": "Data.Serialize",
          "name": "decode",
          "package": "cereal",
          "signature": "ByteString -\u003e Either String a",
          "source": "src/Data-Serialize.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode value from strict ByteString reconstructing the original structure",
          "hierarchy": "Data Serialize",
          "module": "Data.Serialize",
          "name": "decode",
          "normalized": "ByteString-\u003eEither String a",
          "package": "cereal",
          "signature": "ByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a value from a lazy ByteString, reconstructing the original\n structure.\n\u003c/p\u003e",
          "module": "Data.Serialize",
          "name": "decodeLazy",
          "package": "cereal",
          "signature": "ByteString -\u003e Either String a",
          "source": "src/Data-Serialize.html#decodeLazy",
          "type": "function"
        },
        "index": {
          "description": "Decode value from lazy ByteString reconstructing the original structure",
          "hierarchy": "Data Serialize",
          "module": "Data.Serialize",
          "name": "decodeLazy",
          "normalized": "ByteString-\u003eEither String a",
          "package": "cereal",
          "partial": "Lazy",
          "signature": "ByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#v:decodeLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a value using binary serialization to a strict ByteString.\n\u003c/p\u003e",
          "module": "Data.Serialize",
          "name": "encode",
          "package": "cereal",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Serialize.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode value using binary serialization to strict ByteString",
          "hierarchy": "Data Serialize",
          "module": "Data.Serialize",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "cereal",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a value using binary serialization to a lazy ByteString.\n\u003c/p\u003e",
          "module": "Data.Serialize",
          "name": "encodeLazy",
          "package": "cereal",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Serialize.html#encodeLazy",
          "type": "function"
        },
        "index": {
          "description": "Encode value using binary serialization to lazy ByteString",
          "hierarchy": "Data Serialize",
          "module": "Data.Serialize",
          "name": "encodeLazy",
          "normalized": "a-\u003eByteString",
          "package": "cereal",
          "partial": "Lazy",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#v:encodeLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a value in the Get monad\n\u003c/p\u003e",
          "module": "Data.Serialize",
          "name": "get",
          "package": "cereal",
          "signature": "Get t",
          "source": "src/Data-Serialize.html#get",
          "type": "method"
        },
        "index": {
          "description": "Decode value in the Get monad",
          "hierarchy": "Data Serialize",
          "module": "Data.Serialize",
          "name": "get",
          "package": "cereal",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a value in the Put monad.\n\u003c/p\u003e",
          "module": "Data.Serialize",
          "name": "put",
          "package": "cereal",
          "signature": "Putter t",
          "source": "src/Data-Serialize.html#put",
          "type": "method"
        },
        "index": {
          "description": "Encode value in the Put monad",
          "hierarchy": "Data Serialize",
          "module": "Data.Serialize",
          "name": "put",
          "package": "cereal",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#v:put"
      }
    }
  ]
]