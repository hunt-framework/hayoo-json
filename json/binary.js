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
        "word": "binary"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing semi-public \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e internals that exposes\n low level construction functions.  Modules which extend the\n \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e system will need to use this module while ideally most\n users will be able to make do with the public interface modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Builder.Internal",
          "name": "Internal",
          "package": "binary",
          "source": "src/Data-Binary-Builder-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "module containing semi-public Builder internals that exposes low level construction functions Modules which extend the Builder system will need to use this module while ideally most users will be able to make do with the public interface modules",
          "hierarchy": "Data Binary Builder Internal",
          "module": "Data.Binary.Builder.Internal",
          "name": "Internal",
          "package": "binary",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure that \u003ccode\u003en\u003c/code\u003e bytes are available, and then use \u003ccode\u003ef\u003c/code\u003e to write at\n most \u003ccode\u003en\u003c/code\u003e bytes into memory.  \u003ccode\u003ef\u003c/code\u003e must return the actual number of\n bytes written.\n\u003c/p\u003e",
          "module": "Data.Binary.Builder.Internal",
          "name": "writeAtMost",
          "package": "binary",
          "signature": "Int -\u003e (Ptr Word8 -\u003e IO Int) -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#writeAtMost",
          "type": "function"
        },
        "index": {
          "description": "Ensure that bytes are available and then use to write at most bytes into memory must return the actual number of bytes written",
          "hierarchy": "Data Binary Builder Internal",
          "module": "Data.Binary.Builder.Internal",
          "name": "writeAtMost",
          "normalized": "Int-\u003e(Ptr Word-\u003eIO Int)-\u003eBuilder",
          "package": "binary",
          "partial": "At Most",
          "signature": "Int-\u003e(Ptr Word-\u003eIO Int)-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder-Internal.html#v:writeAtMost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure that \u003ccode\u003en\u003c/code\u003e bytes are available, and then use \u003ccode\u003ef\u003c/code\u003e to write\n exactly \u003ccode\u003en\u003c/code\u003e bytes into memory.\n\u003c/p\u003e",
          "module": "Data.Binary.Builder.Internal",
          "name": "writeN",
          "package": "binary",
          "signature": "Int -\u003e (Ptr Word8 -\u003e IO ()) -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#writeN",
          "type": "function"
        },
        "index": {
          "description": "Ensure that bytes are available and then use to write exactly bytes into memory",
          "hierarchy": "Data Binary Builder Internal",
          "module": "Data.Binary.Builder.Internal",
          "name": "writeN",
          "normalized": "Int-\u003e(Ptr Word-\u003eIO())-\u003eBuilder",
          "package": "binary",
          "signature": "Int-\u003e(Ptr Word-\u003eIO())-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder-Internal.html#v:writeN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient construction of lazy bytestrings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Builder",
          "name": "Builder",
          "package": "binary",
          "source": "src/Data-Binary-Builder.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient construction of lazy bytestrings",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "Builder",
          "package": "binary",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e is an efficient way to build lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n There are several functions for constructing \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es, but only one\n to inspect them: to extract any data, you have to turn them into lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInternally, a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e constructs a lazy \u003ccode\u003e\u003ca\u003eBytestring\u003c/a\u003e\u003c/code\u003e by filling byte\n arrays piece by piece.  As each buffer is filled, it is 'popped'\n off, to become a new chunk of the resulting lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n All this is hidden from the user of the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "Builder",
          "package": "binary",
          "source": "src/Data-Binary-Builder-Base.html#Builder",
          "type": "data"
        },
        "index": {
          "description": "Builder is an efficient way to build lazy ByteString There are several functions for constructing Builder but only one to inspect them to extract any data you have to turn them into lazy ByteString using toLazyByteString Internally Builder constructs lazy Bytestring by filling byte arrays piece by piece As each buffer is filled it is popped off to become new chunk of the resulting lazy ByteString All this is hidden from the user of the Builder",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "Builder",
          "package": "binary",
          "partial": "Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#t:Builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The concatenation of two Builders, an associative operation\n with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e x y) = \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e x) (\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e y)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Binary.Builder",
          "name": "append",
          "package": "binary",
          "signature": "Builder -\u003e Builder -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#append",
          "type": "function"
        },
        "index": {
          "description": "The concatenation of two Builders an associative operation with identity empty satisfying toLazyByteString append append toLazyByteString toLazyByteString",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "append",
          "normalized": "Builder-\u003eBuilder-\u003eBuilder",
          "package": "binary",
          "signature": "Builder-\u003eBuilder-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The empty Builder, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Binary.Builder",
          "name": "empty",
          "package": "binary",
          "signature": "Builder",
          "source": "src/Data-Binary-Builder-Base.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty Builder satisfying toLazyByteString empty empty",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "empty",
          "package": "binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Pop the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e we have constructed so far, if any,\n yielding a new chunk in the result lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "flush",
          "package": "binary",
          "signature": "Builder",
          "source": "src/Data-Binary-Builder-Base.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Pop the ByteString we have constructed so far if any yielding new chunk in the result lazy ByteString",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "flush",
          "package": "binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromByteString\u003c/a\u003e\u003c/code\u003e bs) = \u003ccode\u003e\u003ca\u003efromChunks\u003c/a\u003e\u003c/code\u003e [bs]\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Binary.Builder",
          "name": "fromByteString",
          "package": "binary",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#fromByteString",
          "type": "function"
        },
        "index": {
          "description": "Builder taking ByteString satisfying toLazyByteString fromByteString bs fromChunks bs",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "fromByteString",
          "normalized": "ByteString-\u003eBuilder",
          "package": "binary",
          "partial": "Byte String",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromLazyByteString\u003c/a\u003e\u003c/code\u003e bs) = bs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Binary.Builder",
          "name": "fromLazyByteString",
          "package": "binary",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#fromLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "Builder taking lazy ByteString satisfying toLazyByteString fromLazyByteString bs bs",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "fromLazyByteString",
          "normalized": "ByteString-\u003eBuilder",
          "package": "binary",
          "partial": "Lazy Byte String",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:fromLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character using UTF-8 encoding.\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "putCharUtf8",
          "package": "binary",
          "signature": "Char -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#putCharUtf8",
          "type": "function"
        },
        "index": {
          "description": "Write character using UTF-8 encoding",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "putCharUtf8",
          "normalized": "Char-\u003eBuilder",
          "package": "binary",
          "partial": "Char Utf",
          "signature": "Char-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:putCharUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word16 in big endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "putWord16be",
          "package": "binary",
          "signature": "Word16 -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#putWord16be",
          "type": "function"
        },
        "index": {
          "description": "Write Word16 in big endian format",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "putWord16be",
          "normalized": "Word-\u003eBuilder",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:putWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word16 in native host order and host endianness.\n 2 bytes will be written, unaligned.\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "putWord16host",
          "package": "binary",
          "signature": "Word16 -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#putWord16host",
          "type": "function"
        },
        "index": {
          "description": "Write Word16 in native host order and host endianness bytes will be written unaligned",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "putWord16host",
          "normalized": "Word-\u003eBuilder",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:putWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word16 in little endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "putWord16le",
          "package": "binary",
          "signature": "Word16 -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#putWord16le",
          "type": "function"
        },
        "index": {
          "description": "Write Word16 in little endian format",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "putWord16le",
          "normalized": "Word-\u003eBuilder",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:putWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word32 in big endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "putWord32be",
          "package": "binary",
          "signature": "Word32 -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#putWord32be",
          "type": "function"
        },
        "index": {
          "description": "Write Word32 in big endian format",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "putWord32be",
          "normalized": "Word-\u003eBuilder",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:putWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word32 in native host order and host endianness.\n 4 bytes will be written, unaligned.\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "putWord32host",
          "package": "binary",
          "signature": "Word32 -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#putWord32host",
          "type": "function"
        },
        "index": {
          "description": "Write Word32 in native host order and host endianness bytes will be written unaligned",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "putWord32host",
          "normalized": "Word-\u003eBuilder",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:putWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word32 in little endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "putWord32le",
          "package": "binary",
          "signature": "Word32 -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#putWord32le",
          "type": "function"
        },
        "index": {
          "description": "Write Word32 in little endian format",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "putWord32le",
          "normalized": "Word-\u003eBuilder",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:putWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word64 in big endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "putWord64be",
          "package": "binary",
          "signature": "Word64 -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#putWord64be",
          "type": "function"
        },
        "index": {
          "description": "Write Word64 in big endian format",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "putWord64be",
          "normalized": "Word-\u003eBuilder",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:putWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word64 in native host order.\n On a 32 bit machine we write two host order Word32s, in big endian form.\n 8 bytes will be written, unaligned.\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "putWord64host",
          "package": "binary",
          "signature": "Word64 -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#putWord64host",
          "type": "function"
        },
        "index": {
          "description": "Write Word64 in native host order On bit machine we write two host order Word32s in big endian form bytes will be written unaligned",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "putWord64host",
          "normalized": "Word-\u003eBuilder",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:putWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word64 in little endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "putWord64le",
          "package": "binary",
          "signature": "Word64 -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#putWord64le",
          "type": "function"
        },
        "index": {
          "description": "Write Word64 in little endian format",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "putWord64le",
          "normalized": "Word-\u003eBuilder",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:putWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a single native machine word. The word is\n written in host order, host endian form, for the machine you're on.\n On a 64 bit machine the Word is an 8 byte value, on a 32 bit machine,\n 4 bytes. Values written this way are not portable to\n different endian or word sized machines, without conversion.\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "putWordhost",
          "package": "binary",
          "signature": "Word -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#putWordhost",
          "type": "function"
        },
        "index": {
          "description": "Builder taking single native machine word The word is written in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes Values written this way are not portable to different endian or word sized machines without conversion",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "putWordhost",
          "normalized": "Word-\u003eBuilder",
          "package": "binary",
          "partial": "Wordhost",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:putWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a single byte, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e b) = \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e b\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Binary.Builder",
          "name": "singleton",
          "package": "binary",
          "signature": "Word8 -\u003e Builder",
          "source": "src/Data-Binary-Builder-Base.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Builder taking single byte satisfying toLazyByteString singleton singleton",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "singleton",
          "normalized": "Word-\u003eBuilder",
          "package": "binary",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Extract a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n The construction work takes place if and when the relevant part of\n the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is demanded.\n\u003c/p\u003e",
          "module": "Data.Binary.Builder",
          "name": "toLazyByteString",
          "package": "binary",
          "signature": "Builder -\u003e ByteString",
          "source": "src/Data-Binary-Builder-Base.html#toLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "Extract lazy ByteString from Builder The construction work takes place if and when the relevant part of the lazy ByteString is demanded",
          "hierarchy": "Data Binary Builder",
          "module": "Data.Binary.Builder",
          "name": "toLazyByteString",
          "normalized": "Builder-\u003eByteString",
          "package": "binary",
          "partial": "Lazy Byte String",
          "signature": "Builder-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Builder.html#v:toLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Get.Internal",
          "name": "Internal",
          "package": "binary",
          "source": "src/Data-Binary-Get-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "Internal",
          "package": "binary",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA decoder produced by running a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.Binary.Get.Internal",
          "name": "Decoder",
          "package": "binary",
          "source": "src/Data-Binary-Get-Internal.html#Decoder",
          "type": "data"
        },
        "index": {
          "description": "decoder produced by running Get monad",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "Decoder",
          "package": "binary",
          "partial": "Decoder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#t:Decoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Get.Internal",
          "name": "Get",
          "package": "binary",
          "source": "src/Data-Binary-Get-Internal.html#Get",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "Get",
          "package": "binary",
          "partial": "Get",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#t:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe decoder needs to know the current position in the input.\n Given the number of bytes remaning in the decoder, the outer\n decoder runner needs to calculate the position and\n resume the decoding.\n\u003c/p\u003e",
          "module": "Data.Binary.Get.Internal",
          "name": "BytesRead",
          "package": "binary",
          "signature": "BytesRead !Int64 (Int64 -\u003e Decoder a)",
          "source": "src/Data-Binary-Get-Internal.html#Decoder",
          "type": "function"
        },
        "index": {
          "description": "The decoder needs to know the current position in the input Given the number of bytes remaning in the decoder the outer decoder runner needs to calculate the position and resume the decoding",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "BytesRead",
          "normalized": "BytesRead Int(Int-\u003eDecoder a)",
          "package": "binary",
          "partial": "Bytes Read",
          "signature": "BytesRead Int(Int-\u003eDecoder a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:BytesRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe decoder has successfully finished. Except for the\n output value you also get the unused input.\n\u003c/p\u003e",
          "module": "Data.Binary.Get.Internal",
          "name": "Done",
          "package": "binary",
          "signature": "Done !ByteString a",
          "source": "src/Data-Binary-Get-Internal.html#Decoder",
          "type": "function"
        },
        "index": {
          "description": "The decoder has successfully finished Except for the output value you also get the unused input",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "Done",
          "package": "binary",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe decoder ran into an error. The decoder either used\n \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e or was not provided enough input.\n\u003c/p\u003e",
          "module": "Data.Binary.Get.Internal",
          "name": "Fail",
          "package": "binary",
          "signature": "Fail !ByteString String",
          "source": "src/Data-Binary-Get-Internal.html#Decoder",
          "type": "function"
        },
        "index": {
          "description": "The decoder ran into an error The decoder either used fail or was not provided enough input",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "Fail",
          "package": "binary",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe decoder has consumed the available input and needs\n more to continue. Provide \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e if more input is available\n and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise, and you will get a new \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Get.Internal",
          "name": "Partial",
          "package": "binary",
          "signature": "Partial (Maybe ByteString -\u003e Decoder a)",
          "source": "src/Data-Binary-Get-Internal.html#Decoder",
          "type": "function"
        },
        "index": {
          "description": "The decoder has consumed the available input and needs more to continue Provide Just if more input is available and Nothing otherwise and you will get new Decoder",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "Partial",
          "normalized": "Partial(Maybe ByteString-\u003eDecoder a)",
          "package": "binary",
          "partial": "Partial",
          "signature": "Partial(Maybe ByteString-\u003eDecoder a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the total number of bytes read to this point.\n\u003c/p\u003e",
          "module": "[\"Data.Binary.Get.Internal\",\"Data.Binary.Get\"]",
          "name": "bytesRead",
          "package": "binary",
          "signature": "Get Int64",
          "source": "src/Data-Binary-Get-Internal.html#bytesRead",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:bytesRead\",\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:bytesRead\"]"
        },
        "index": {
          "description": "Get the total number of bytes read to this point",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "bytesRead",
          "package": "binary",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:bytesRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemand more input. If none available, fail.\n\u003c/p\u003e",
          "module": "Data.Binary.Get.Internal",
          "name": "demandInput",
          "package": "binary",
          "signature": "Get ()",
          "source": "src/Data-Binary-Get-Internal.html#demandInput",
          "type": "function"
        },
        "index": {
          "description": "Demand more input If none available fail",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "demandInput",
          "normalized": "Get()",
          "package": "binary",
          "partial": "Input",
          "signature": "Get()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:demandInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure that there are at least \u003ccode\u003en\u003c/code\u003e bytes available. If not, the\n computation will escape with \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Get.Internal",
          "name": "ensureN",
          "package": "binary",
          "signature": "Int -\u003e Get ()",
          "source": "src/Data-Binary-Get-Internal.html#ensureN",
          "type": "function"
        },
        "index": {
          "description": "Ensure that there are at least bytes available If not the computation will escape with Partial",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "ensureN",
          "normalized": "Int-\u003eGet()",
          "package": "binary",
          "signature": "Int-\u003eGet()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:ensureN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current chunk.\n\u003c/p\u003e",
          "module": "Data.Binary.Get.Internal",
          "name": "get",
          "package": "binary",
          "signature": "Get ByteString",
          "source": "src/Data-Binary-Get-Internal.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get the current chunk",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "get",
          "package": "binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient get method for strict ByteStrings. Fails if fewer than \u003ccode\u003en\u003c/code\u003e\n bytes are left in the input. If \u003ccode\u003en \u003c= 0\u003c/code\u003e then the empty string is returned.\n\u003c/p\u003e",
          "module": "[\"Data.Binary.Get.Internal\",\"Data.Binary.Get\"]",
          "name": "getByteString",
          "package": "binary",
          "signature": "Int -\u003e Get ByteString",
          "source": "src/Data-Binary-Get-Internal.html#getByteString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:getByteString\",\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getByteString\"]"
        },
        "index": {
          "description": "An efficient get method for strict ByteStrings Fails if fewer than bytes are left in the input If then the empty string is returned",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "getByteString",
          "normalized": "Int-\u003eGet ByteString",
          "package": "binary",
          "partial": "Byte String",
          "signature": "Int-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:getByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003egetByteString\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003egetBytes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED. Same as \u003ccode\u003e\u003ca\u003egetByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Binary.Get.Internal\",\"Data.Binary.Get\"]",
          "name": "getBytes",
          "package": "binary",
          "signature": "Int -\u003e Get ByteString",
          "source": "src/Data-Binary-Get-Internal.html#getBytes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:getBytes\",\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getBytes\"]"
        },
        "index": {
          "description": "Deprecated Use getByteString instead of getBytes DEPRECATED Same as getByteString",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "getBytes",
          "normalized": "Int-\u003eGet ByteString",
          "package": "binary",
          "partial": "Bytes",
          "signature": "Int-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:getBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether all input has been consumed, i.e. there are no remaining\n undecoded bytes.\n\u003c/p\u003e",
          "module": "[\"Data.Binary.Get.Internal\",\"Data.Binary.Get\"]",
          "name": "isEmpty",
          "package": "binary",
          "signature": "Get Bool",
          "source": "src/Data-Binary-Get-Internal.html#isEmpty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:isEmpty\",\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:isEmpty\"]"
        },
        "index": {
          "description": "Test whether all input has been consumed i.e there are no remaining undecoded bytes",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "isEmpty",
          "package": "binary",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given decoder, but without consuming its input. If the given\n decoder fails, then so will this function.\n\u003c/p\u003e",
          "module": "[\"Data.Binary.Get.Internal\",\"Data.Binary.Get\"]",
          "name": "lookAhead",
          "package": "binary",
          "signature": "Get a -\u003e Get a",
          "source": "src/Data-Binary-Get-Internal.html#lookAhead",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:lookAhead\",\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:lookAhead\"]"
        },
        "index": {
          "description": "Run the given decoder but without consuming its input If the given decoder fails then so will this function",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "lookAhead",
          "normalized": "Get a-\u003eGet a",
          "package": "binary",
          "partial": "Ahead",
          "signature": "Get a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given decoder, and only consume its input if it returns \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e.\n If \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e is returned, the input will be unconsumed.\n If the given decoder fails, then so will this function.\n\u003c/p\u003e",
          "module": "[\"Data.Binary.Get.Internal\",\"Data.Binary.Get\"]",
          "name": "lookAheadE",
          "package": "binary",
          "signature": "Get (Either a b) -\u003e Get (Either a b)",
          "source": "src/Data-Binary-Get-Internal.html#lookAheadE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:lookAheadE\",\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:lookAheadE\"]"
        },
        "index": {
          "description": "Run the given decoder and only consume its input if it returns Right If Left is returned the input will be unconsumed If the given decoder fails then so will this function",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "lookAheadE",
          "normalized": "Get(Either a b)-\u003eGet(Either a b)",
          "package": "binary",
          "partial": "Ahead",
          "signature": "Get(Either a b)-\u003eGet(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:lookAheadE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given decoder, and only consume its input if it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned, the input will be unconsumed.\n If the given decoder fails, then so will this function.\n\u003c/p\u003e",
          "module": "[\"Data.Binary.Get.Internal\",\"Data.Binary.Get\"]",
          "name": "lookAheadM",
          "package": "binary",
          "signature": "Get (Maybe a) -\u003e Get (Maybe a)",
          "source": "src/Data-Binary-Get-Internal.html#lookAheadM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:lookAheadM\",\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:lookAheadM\"]"
        },
        "index": {
          "description": "Run the given decoder and only consume its input if it returns Just If Nothing is returned the input will be unconsumed If the given decoder fails then so will this function",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "lookAheadM",
          "normalized": "Get(Maybe a)-\u003eGet(Maybe a)",
          "package": "binary",
          "partial": "Ahead",
          "signature": "Get(Maybe a)-\u003eGet(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:lookAheadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the current chunk.\n\u003c/p\u003e",
          "module": "Data.Binary.Get.Internal",
          "name": "put",
          "package": "binary",
          "signature": "ByteString -\u003e Get ()",
          "source": "src/Data-Binary-Get-Internal.html#put",
          "type": "function"
        },
        "index": {
          "description": "Replace the current chunk",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "put",
          "normalized": "ByteString-\u003eGet()",
          "package": "binary",
          "signature": "ByteString-\u003eGet()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn at least \u003ccode\u003en\u003c/code\u003e bytes, maybe more. If not enough data is available\n the computation will escape with \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Get.Internal",
          "name": "readN",
          "package": "binary",
          "signature": "Int -\u003e (ByteString -\u003e a) -\u003e Get a",
          "source": "src/Data-Binary-Get-Internal.html#readN",
          "type": "function"
        },
        "index": {
          "description": "Return at least bytes maybe more If not enough data is available the computation will escape with Partial",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "readN",
          "normalized": "Int-\u003e(ByteString-\u003ea)-\u003eGet a",
          "package": "binary",
          "signature": "Int-\u003e(ByteString-\u003ea)-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:readN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Get.Internal",
          "name": "readNWith",
          "package": "binary",
          "signature": "Int -\u003e (Ptr a -\u003e IO a) -\u003e Get a",
          "source": "src/Data-Binary-Get-Internal.html#readNWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "readNWith",
          "normalized": "Int-\u003e(Ptr a-\u003eIO a)-\u003eGet a",
          "package": "binary",
          "partial": "NWith",
          "signature": "Int-\u003e(Ptr a-\u003eIO a)-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:readNWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: This will force all remaining input, don't use it.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED. Get the number of bytes of remaining input.\n Note that this is an expensive function to use as in order to calculate how\n much input remains, all input has to be read and kept in-memory.\n The decoder keeps the input as a strict bytestring, so you are likely better\n off by calculating the remaining input in another way.\n\u003c/p\u003e",
          "module": "[\"Data.Binary.Get.Internal\",\"Data.Binary.Get\"]",
          "name": "remaining",
          "package": "binary",
          "signature": "Get Int64",
          "source": "src/Data-Binary-Get-Internal.html#remaining",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:remaining\",\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:remaining\"]"
        },
        "index": {
          "description": "Deprecated This will force all remaining input don use it DEPRECATED Get the number of bytes of remaining input Note that this is an expensive function to use as in order to calculate how much input remains all input has to be read and kept in-memory The decoder keeps the input as strict bytestring so you are likely better off by calculating the remaining input in another way",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "remaining",
          "package": "binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:remaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Get.Internal",
          "name": "runCont",
          "package": "binary",
          "signature": "Get a -\u003e forall r.  ByteString -\u003e Success a r -\u003e Decoder r",
          "source": "src/Data-Binary-Get-Internal.html#runCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "runCont",
          "normalized": "Get a-\u003eb c ByteString-\u003eSuccess a d-\u003eDecoder d",
          "package": "binary",
          "partial": "Cont",
          "signature": "Get a-\u003eforall r. ByteString-\u003eSuccess a r-\u003eDecoder r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:runCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad. See \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e for what to do next, like providing\n input, handling decoding errors and to get the output value.\n\u003c/p\u003e",
          "module": "Data.Binary.Get.Internal",
          "name": "runGetIncremental",
          "package": "binary",
          "signature": "Get a -\u003e Decoder a",
          "source": "src/Data-Binary-Get-Internal.html#runGetIncremental",
          "type": "function"
        },
        "index": {
          "description": "Run Get monad See Decoder for what to do next like providing input handling decoding errors and to get the output value",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "runGetIncremental",
          "normalized": "Get a-\u003eDecoder a",
          "package": "binary",
          "partial": "Get Incremental",
          "signature": "Get a-\u003eDecoder a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:runGetIncremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip ahead \u003ccode\u003en\u003c/code\u003e bytes. Fails if fewer than \u003ccode\u003en\u003c/code\u003e bytes are available.\n\u003c/p\u003e",
          "module": "[\"Data.Binary.Get.Internal\",\"Data.Binary.Get\"]",
          "name": "skip",
          "package": "binary",
          "signature": "Int -\u003e Get ()",
          "source": "src/Data-Binary-Get-Internal.html#skip",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:skip\",\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:skip\"]"
        },
        "index": {
          "description": "Skip ahead bytes Fails if fewer than bytes are available",
          "hierarchy": "Data Binary Get Internal",
          "module": "Data.Binary.Get.Internal",
          "name": "skip",
          "normalized": "Int-\u003eGet()",
          "package": "binary",
          "signature": "Int-\u003eGet()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get-Internal.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad. A monad for efficiently building structures from\n encoded lazy ByteStrings.\n\u003c/p\u003e\u003cp\u003ePrimitives are available to decode words of various sizes, both big and\n little endian.\n\u003c/p\u003e\u003cp\u003eLet's decode binary data representing illustrated here.\n In this example the values are in little endian.\n\u003c/p\u003e\u003cpre\u003e +------------------+--------------+-----------------+\n | 32 bit timestamp | 32 bit price | 16 bit quantity |\n +------------------+--------------+-----------------+\n\u003c/pre\u003e\u003cp\u003eA corresponding Haskell value looks like this:\n\u003c/p\u003e\u003cpre\u003e\n data Trade = Trade\n   { timestamp :: !\u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\n   , price     :: !\u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\n   , qty       :: !\u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e\n   } deriving (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e\u003cp\u003eThe fields in \u003ccode\u003eTrade\u003c/code\u003e are marked as strict (using \u003ccode\u003e!\u003c/code\u003e) since we don't need\n laziness here. In practise, you would probably consider using the UNPACK\n pragma as well.\n \u003ca\u003ehttp://www.haskell.org/ghc/docs/latest/html/users_guide/pragmas.html#unpack-pragma\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eNow, let's have a look at a decoder for this format.\n\u003c/p\u003e\u003cpre\u003e\n getTrade :: \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e Trade\n getTrade = do\n   timestamp \u003c- \u003ccode\u003e\u003ca\u003egetWord32le\u003c/a\u003e\u003c/code\u003e\n   price     \u003c- \u003ccode\u003e\u003ca\u003egetWord32le\u003c/a\u003e\u003c/code\u003e\n   quantity  \u003c- \u003ccode\u003e\u003ca\u003egetWord16le\u003c/a\u003e\u003c/code\u003e\n   return \u003ccode\u003e\u003ca\u003e$!\u003c/a\u003e\u003c/code\u003e Trade timestamp price quantity\n\u003c/pre\u003e\u003cp\u003eOr even simpler using applicative style:\n\u003c/p\u003e\u003cpre\u003e\n getTrade' :: \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e Trade\n getTrade' = Trade \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetWord32le\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetWord32le\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetWord16le\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe applicative style can sometimes result in faster code, as \u003ccode\u003ebinary\u003c/code\u003e\n will try to optimize the code by grouping the reads together.\n\u003c/p\u003e\u003cp\u003eThere are two kinds of ways to execute this decoder, the lazy input\n method and the incremental input method. Here we will use the lazy\n input method.\n\u003c/p\u003e\u003cp\u003eLet's first define a function that decodes many \u003ccode\u003eTrade\u003c/code\u003es.\n\u003c/p\u003e\u003cpre\u003e\n getTrades :: Get [\u003ccode\u003eTrade\u003c/code\u003e]\n getTrades = do\n   empty \u003c- \u003ccode\u003e\u003ca\u003eisEmpty\u003c/a\u003e\u003c/code\u003e\n   if empty\n     then return []\n     else do trade \u003c- getTrade\n             trades \u003c- getTrades\n             return (trade:trades)\n\u003c/pre\u003e\u003cp\u003eFinally, we run the decoder:\n\u003c/p\u003e\u003cpre\u003e\n example :: IO ()\n example = do\n  input \u003c- BL.readFile \"trades.bin\"\n  let trades = runGet getTrades input \n  print trades\n\u003c/pre\u003e\u003cp\u003eThis decoder has the downside that it will need to read all the input before\n it can return. On the other hand, it will not return anything until\n it knows it could decode without any decoder errors.\n\u003c/p\u003e\u003cp\u003eYou could also refactor to a left-fold, to decode in a more streaming fashion,\n and get the following decoder. It will start to return data without knowning\n that it can decode all input.\n\u003c/p\u003e\u003cpre\u003e\n example2 :: BL.ByteString -\u003e [Trade]\n example2 input\n   | BL.null input = []\n   | otherwise =\n      let (trade, rest, _) = \u003ccode\u003e\u003ca\u003erunGetState\u003c/a\u003e\u003c/code\u003e getTrade input 0\n      in trade : example2 rest\n\u003c/pre\u003e\u003cp\u003eBoth these examples use lazy I/O to read the file from the disk, which is\n not suitable in all applications, and certainly not if you need to read\n from a socket which has higher likelihood to fail. To address these needs,\n use the incremental input method.\n For an example of this, see the implementation of \u003ccode\u003edecodeFileOrFail\u003c/code\u003e in\n \u003ca\u003eData.Binary\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Get",
          "name": "Get",
          "package": "binary",
          "source": "src/Data-Binary-Get.html",
          "type": "module"
        },
        "index": {
          "description": "The Get monad monad for efficiently building structures from encoded lazy ByteStrings Primitives are available to decode words of various sizes both big and little endian Let decode binary data representing illustrated here In this example the values are in little endian bit timestamp bit price bit quantity corresponding Haskell value looks like this data Trade Trade timestamp Word32 price Word32 qty Word16 deriving Show The fields in Trade are marked as strict using since we don need laziness here In practise you would probably consider using the UNPACK pragma as well http www.haskell.org ghc docs latest html users guide pragmas.html unpack-pragma Now let have look at decoder for this format getTrade Get Trade getTrade do timestamp getWord32le price getWord32le quantity getWord16le return Trade timestamp price quantity Or even simpler using applicative style getTrade Get Trade getTrade Trade getWord32le getWord32le getWord16le The applicative style can sometimes result in faster code as binary will try to optimize the code by grouping the reads together There are two kinds of ways to execute this decoder the lazy input method and the incremental input method Here we will use the lazy input method Let first define function that decodes many Trade getTrades Get Trade getTrades do empty isEmpty if empty then return else do trade getTrade trades getTrades return trade trades Finally we run the decoder example IO example do input BL.readFile trades.bin let trades runGet getTrades input print trades This decoder has the downside that it will need to read all the input before it can return On the other hand it will not return anything until it knows it could decode without any decoder errors You could also refactor to left-fold to decode in more streaming fashion and get the following decoder It will start to return data without knowning that it can decode all input example2 BL.ByteString Trade example2 input BL.null input otherwise let trade rest runGetState getTrade input in trade example2 rest Both these examples use lazy to read the file from the disk which is not suitable in all applications and certainly not if you need to read from socket which has higher likelihood to fail To address these needs use the incremental input method For an example of this see the implementation of decodeFileOrFail in Data.Binary",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "Get",
          "package": "binary",
          "partial": "Get",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn offset, counted in bytes.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "ByteOffset",
          "package": "binary",
          "source": "src/Data-Binary-Get.html#ByteOffset",
          "type": "type"
        },
        "index": {
          "description": "An offset counted in bytes",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "ByteOffset",
          "package": "binary",
          "partial": "Byte Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#t:ByteOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA decoder procuced by running a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "Decoder",
          "package": "binary",
          "source": "src/Data-Binary-Get.html#Decoder",
          "type": "data"
        },
        "index": {
          "description": "decoder procuced by running Get monad",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "Decoder",
          "package": "binary",
          "partial": "Decoder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#t:Decoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Get",
          "name": "Get",
          "package": "binary",
          "source": "src/Data-Binary-Get-Internal.html#Get",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "Get",
          "package": "binary",
          "partial": "Get",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#t:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe decoder has successfully finished. Except for the\n output value you also get any unused input as well as the\n number of bytes consumed.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "Done",
          "package": "binary",
          "signature": "Done !ByteString !ByteOffset a",
          "source": "src/Data-Binary-Get.html#Decoder",
          "type": "function"
        },
        "index": {
          "description": "The decoder has successfully finished Except for the output value you also get any unused input as well as the number of bytes consumed",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "Done",
          "package": "binary",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe decoder ran into an error. The decoder either used\n \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e or was not provided enough input. Contains any\n unconsumed input and the number of bytes consumed.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "Fail",
          "package": "binary",
          "signature": "Fail !ByteString !ByteOffset String",
          "source": "src/Data-Binary-Get.html#Decoder",
          "type": "function"
        },
        "index": {
          "description": "The decoder ran into an error The decoder either used fail or was not provided enough input Contains any unconsumed input and the number of bytes consumed",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "Fail",
          "package": "binary",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe decoder has consumed the available input and needs\n more to continue. Provide \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e if more input is available\n and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise, and you will get a new \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "Partial",
          "package": "binary",
          "signature": "Partial (Maybe ByteString -\u003e Decoder a)",
          "source": "src/Data-Binary-Get.html#Decoder",
          "type": "function"
        },
        "index": {
          "description": "The decoder has consumed the available input and needs more to continue Provide Just if more input is available and Nothing otherwise and you will get new Decoder",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "Partial",
          "normalized": "Partial(Maybe ByteString-\u003eDecoder a)",
          "package": "binary",
          "partial": "Partial",
          "signature": "Partial(Maybe ByteString-\u003eDecoder a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient get method for lazy ByteStrings. Fails if fewer than \u003ccode\u003en\u003c/code\u003e\n bytes are left in the input.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getLazyByteString",
          "package": "binary",
          "signature": "Int64 -\u003e Get ByteString",
          "source": "src/Data-Binary-Get.html#getLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "An efficient get method for lazy ByteStrings Fails if fewer than bytes are left in the input",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getLazyByteString",
          "normalized": "Int-\u003eGet ByteString",
          "package": "binary",
          "partial": "Lazy Byte String",
          "signature": "Int-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a lazy ByteString that is terminated with a NUL byte.\n The returned string does not contain the NUL byte. Fails\n if it reaches the end of input without finding a NUL.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getLazyByteStringNul",
          "package": "binary",
          "signature": "Get ByteString",
          "source": "src/Data-Binary-Get.html#getLazyByteStringNul",
          "type": "function"
        },
        "index": {
          "description": "Get lazy ByteString that is terminated with NUL byte The returned string does not contain the NUL byte Fails if it reaches the end of input without finding NUL",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getLazyByteStringNul",
          "package": "binary",
          "partial": "Lazy Byte String Nul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getLazyByteStringNul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the remaining bytes as a lazy ByteString.\n Note that this can be an expensive function to use as it forces reading\n all input and keeping the string in-memory.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getRemainingLazyByteString",
          "package": "binary",
          "signature": "Get ByteString",
          "source": "src/Data-Binary-Get.html#getRemainingLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "Get the remaining bytes as lazy ByteString Note that this can be an expensive function to use as it forces reading all input and keeping the string in-memory",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getRemainingLazyByteString",
          "package": "binary",
          "partial": "Remaining Lazy Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getRemainingLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word16 in big endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getWord16be",
          "package": "binary",
          "signature": "Get Word16",
          "source": "src/Data-Binary-Get.html#getWord16be",
          "type": "function"
        },
        "index": {
          "description": "Read Word16 in big endian format",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getWord16be",
          "package": "binary",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a 2 byte Word16 in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getWord16host",
          "package": "binary",
          "signature": "Get Word16",
          "source": "src/Data-Binary-Get.html#getWord16host",
          "type": "function"
        },
        "index": {
          "description": "Read byte Word16 in native host order and host endianness",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getWord16host",
          "package": "binary",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word16 in little endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getWord16le",
          "package": "binary",
          "signature": "Get Word16",
          "source": "src/Data-Binary-Get.html#getWord16le",
          "type": "function"
        },
        "index": {
          "description": "Read Word16 in little endian format",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getWord16le",
          "package": "binary",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word32 in big endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getWord32be",
          "package": "binary",
          "signature": "Get Word32",
          "source": "src/Data-Binary-Get.html#getWord32be",
          "type": "function"
        },
        "index": {
          "description": "Read Word32 in big endian format",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getWord32be",
          "package": "binary",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a Word32 in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getWord32host",
          "package": "binary",
          "signature": "Get Word32",
          "source": "src/Data-Binary-Get.html#getWord32host",
          "type": "function"
        },
        "index": {
          "description": "Read Word32 in native host order and host endianness",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getWord32host",
          "package": "binary",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word32 in little endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getWord32le",
          "package": "binary",
          "signature": "Get Word32",
          "source": "src/Data-Binary-Get.html#getWord32le",
          "type": "function"
        },
        "index": {
          "description": "Read Word32 in little endian format",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getWord32le",
          "package": "binary",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word64 in big endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getWord64be",
          "package": "binary",
          "signature": "Get Word64",
          "source": "src/Data-Binary-Get.html#getWord64be",
          "type": "function"
        },
        "index": {
          "description": "Read Word64 in big endian format",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getWord64be",
          "package": "binary",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a Word64 in native host order and host endianess.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getWord64host",
          "package": "binary",
          "signature": "Get Word64",
          "source": "src/Data-Binary-Get.html#getWord64host",
          "type": "function"
        },
        "index": {
          "description": "Read Word64 in native host order and host endianess",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getWord64host",
          "package": "binary",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word64 in little endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getWord64le",
          "package": "binary",
          "signature": "Get Word64",
          "source": "src/Data-Binary-Get.html#getWord64le",
          "type": "function"
        },
        "index": {
          "description": "Read Word64 in little endian format",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getWord64le",
          "package": "binary",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Word8 from the monad state\n\u003c/p\u003e",
          "module": "[\"Data.Binary.Get\",\"Data.Binary\"]",
          "name": "getWord8",
          "package": "binary",
          "signature": "Get Word8",
          "source": "src/Data-Binary-Get.html#getWord8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getWord8\",\"http://hackage.haskell.org/package/binary/docs/Data-Binary.html#v:getWord8\"]"
        },
        "index": {
          "description": "Read Word8 from the monad state",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getWord8",
          "package": "binary",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a single native machine word. The word is read in\n host order, host endian form, for the machine you're on. On a 64 bit\n machine the Word is an 8 byte value, on a 32 bit machine, 4 bytes.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "getWordhost",
          "package": "binary",
          "signature": "Get Word",
          "source": "src/Data-Binary-Get.html#getWordhost",
          "type": "function"
        },
        "index": {
          "description": "Read single native machine word The word is read in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "getWordhost",
          "package": "binary",
          "partial": "Wordhost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:getWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e with more input. If the \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e it\n will add the input to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e of unconsumed input.\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003erunGetIncremental\u003c/a\u003e\u003c/code\u003e myParser `pushChunk` myInput1 `pushChunk` myInput2\n\u003c/pre\u003e",
          "module": "Data.Binary.Get",
          "name": "pushChunk",
          "package": "binary",
          "signature": "Decoder a -\u003e ByteString -\u003e Decoder a",
          "source": "src/Data-Binary-Get.html#pushChunk",
          "type": "function"
        },
        "index": {
          "description": "Feed Decoder with more input If the Decoder is Done or Fail it will add the input to ByteString of unconsumed input runGetIncremental myParser pushChunk myInput1 pushChunk myInput2",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "pushChunk",
          "normalized": "Decoder a-\u003eByteString-\u003eDecoder a",
          "package": "binary",
          "partial": "Chunk",
          "signature": "Decoder a-\u003eByteString-\u003eDecoder a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:pushChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e with more input. If the \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e it\n will add the input to \u003ccode\u003eByteString\u003c/code\u003e of unconsumed input.\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003erunGetIncremental\u003c/a\u003e\u003c/code\u003e myParser `pushChunks` myLazyByteString\n\u003c/pre\u003e",
          "module": "Data.Binary.Get",
          "name": "pushChunks",
          "package": "binary",
          "signature": "Decoder a -\u003e ByteString -\u003e Decoder a",
          "source": "src/Data-Binary-Get.html#pushChunks",
          "type": "function"
        },
        "index": {
          "description": "Feed Decoder with more input If the Decoder is Done or Fail it will add the input to ByteString of unconsumed input runGetIncremental myParser pushChunks myLazyByteString",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "pushChunks",
          "normalized": "Decoder a-\u003eByteString-\u003eDecoder a",
          "package": "binary",
          "partial": "Chunks",
          "signature": "Decoder a-\u003eByteString-\u003eDecoder a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:pushChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell a \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e that there is no more input. This passes \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to a\n \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e decoder, otherwise returns the decoder unchanged.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "pushEndOfInput",
          "package": "binary",
          "signature": "Decoder a -\u003e Decoder a",
          "source": "src/Data-Binary-Get.html#pushEndOfInput",
          "type": "function"
        },
        "index": {
          "description": "Tell Decoder that there is no more input This passes Nothing to Partial decoder otherwise returns the decoder unchanged",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "pushEndOfInput",
          "normalized": "Decoder a-\u003eDecoder a",
          "package": "binary",
          "partial": "End Of Input",
          "signature": "Decoder a-\u003eDecoder a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:pushEndOfInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simplest interface to run a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e decoder. If the decoder runs into\n an error, calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e, or runs out of input, it will call \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "runGet",
          "package": "binary",
          "signature": "Get a -\u003e ByteString -\u003e a",
          "source": "src/Data-Binary-Get.html#runGet",
          "type": "function"
        },
        "index": {
          "description": "The simplest interface to run Get decoder If the decoder runs into an error calls fail or runs out of input it will call error",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "runGet",
          "normalized": "Get a-\u003eByteString-\u003ea",
          "package": "binary",
          "partial": "Get",
          "signature": "Get a-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:runGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad. See \u003ccode\u003e\u003ca\u003eDecoder\u003c/a\u003e\u003c/code\u003e for what to do next, like providing\n input, handling decoder errors and to get the output value.\n Hint: Use the helper functions \u003ccode\u003e\u003ca\u003epushChunk\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epushChunks\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003epushEndOfInput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "runGetIncremental",
          "package": "binary",
          "signature": "Get a -\u003e Decoder a",
          "source": "src/Data-Binary-Get.html#runGetIncremental",
          "type": "function"
        },
        "index": {
          "description": "Run Get monad See Decoder for what to do next like providing input handling decoder errors and to get the output value Hint Use the helper functions pushChunk pushChunks and pushEndOfInput",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "runGetIncremental",
          "normalized": "Get a-\u003eDecoder a",
          "package": "binary",
          "partial": "Get Incremental",
          "signature": "Get a-\u003eDecoder a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:runGetIncremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad and return \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e on failure and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e on\n success. In both cases any unconsumed input and the number of bytes\n consumed is returned. In the case of failure, a human-readable\n error message is included as well.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "runGetOrFail",
          "package": "binary",
          "signature": "Get a -\u003e ByteString -\u003e Either (ByteString, ByteOffset, String) (ByteString, ByteOffset, a)",
          "source": "src/Data-Binary-Get.html#runGetOrFail",
          "type": "function"
        },
        "index": {
          "description": "Run Get monad and return Left on failure and Right on success In both cases any unconsumed input and the number of bytes consumed is returned In the case of failure human-readable error message is included as well",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "runGetOrFail",
          "normalized": "Get a-\u003eByteString-\u003eEither(ByteString,ByteOffset,String)(ByteString,ByteOffset,a)",
          "package": "binary",
          "partial": "Get Or Fail",
          "signature": "Get a-\u003eByteString-\u003eEither(ByteString,ByteOffset,String)(ByteString,ByteOffset,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:runGetOrFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use runGetIncremental instead. This function will be removed.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED. Provides compatibility with previous versions of this library.\n Run a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad and return a tuple with thee values.\n The first value is the result of the decoder. The second and third are the\n unused input, and the number of consumed bytes.\n\u003c/p\u003e",
          "module": "Data.Binary.Get",
          "name": "runGetState",
          "package": "binary",
          "signature": "Get a -\u003e ByteString -\u003e ByteOffset -\u003e (a, ByteString, ByteOffset)",
          "source": "src/Data-Binary-Get.html#runGetState",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use runGetIncremental instead This function will be removed DEPRECATED Provides compatibility with previous versions of this library Run Get monad and return tuple with thee values The first value is the result of the decoder The second and third are the unused input and the number of consumed bytes",
          "hierarchy": "Data Binary Get",
          "module": "Data.Binary.Get",
          "name": "runGetState",
          "normalized": "Get a-\u003eByteString-\u003eByteOffset-\u003e(a,ByteString,ByteOffset)",
          "package": "binary",
          "partial": "Get State",
          "signature": "Get a-\u003eByteString-\u003eByteOffset-\u003e(a,ByteString,ByteOffset)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Get.html#v:runGetState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Put monad. A monad for efficiently constructing lazy bytestrings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary.Put",
          "name": "Put",
          "package": "binary",
          "source": "src/Data-Binary-Put.html",
          "type": "module"
        },
        "index": {
          "description": "The Put monad monad for efficiently constructing lazy bytestrings",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "Put",
          "package": "binary",
          "partial": "Put",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut merely lifts Builder into a Writer monad, applied to ().\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "Put",
          "package": "binary",
          "source": "src/Data-Binary-Put.html#Put",
          "type": "type"
        },
        "index": {
          "description": "Put merely lifts Builder into Writer monad applied to",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "Put",
          "package": "binary",
          "partial": "Put",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#t:Put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe PutM type. A Writer monad over the efficient Builder monoid.\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "PutM",
          "package": "binary",
          "source": "src/Data-Binary-Put.html#PutM",
          "type": "newtype"
        },
        "index": {
          "description": "The PutM type Writer monad over the efficient Builder monoid",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "PutM",
          "package": "binary",
          "partial": "Put",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#t:PutM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Put",
          "name": "Put",
          "package": "binary",
          "signature": "Put",
          "source": "src/Data-Binary-Put.html#PutM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "Put",
          "package": "binary",
          "partial": "Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:Put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "execPut",
          "package": "binary",
          "signature": "PutM a -\u003e Builder",
          "source": "src/Data-Binary-Put.html#execPut",
          "type": "function"
        },
        "index": {
          "description": "Run the Put monad",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "execPut",
          "normalized": "PutM a-\u003eBuilder",
          "package": "binary",
          "partial": "Put",
          "signature": "PutM a-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:execPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop the ByteString we have constructed so far, if any, yielding a\n new chunk in the result ByteString.\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "flush",
          "package": "binary",
          "signature": "Put",
          "source": "src/Data-Binary-Put.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Pop the ByteString we have constructed so far if any yielding new chunk in the result ByteString",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "flush",
          "package": "binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Put",
          "name": "putBuilder",
          "package": "binary",
          "signature": "Builder -\u003e Put",
          "source": "src/Data-Binary-Put.html#putBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putBuilder",
          "normalized": "Builder-\u003ePut",
          "package": "binary",
          "partial": "Builder",
          "signature": "Builder-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient primitive to write a strict ByteString into the output buffer.\n It flushes the current buffer, and writes the argument into a new chunk.\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "putByteString",
          "package": "binary",
          "signature": "ByteString -\u003e Put",
          "source": "src/Data-Binary-Put.html#putByteString",
          "type": "function"
        },
        "index": {
          "description": "An efficient primitive to write strict ByteString into the output buffer It flushes the current buffer and writes the argument into new chunk",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putByteString",
          "normalized": "ByteString-\u003ePut",
          "package": "binary",
          "partial": "Byte String",
          "signature": "ByteString-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a lazy ByteString efficiently, simply appending the lazy\n ByteString chunks to the output buffer\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "putLazyByteString",
          "package": "binary",
          "signature": "ByteString -\u003e Put",
          "source": "src/Data-Binary-Put.html#putLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "Write lazy ByteString efficiently simply appending the lazy ByteString chunks to the output buffer",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putLazyByteString",
          "normalized": "ByteString-\u003ePut",
          "package": "binary",
          "partial": "Lazy Byte String",
          "signature": "ByteString-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word16 in big endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "putWord16be",
          "package": "binary",
          "signature": "Word16 -\u003e Put",
          "source": "src/Data-Binary-Put.html#putWord16be",
          "type": "function"
        },
        "index": {
          "description": "Write Word16 in big endian format",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putWord16be",
          "normalized": "Word-\u003ePut",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a Word16 in native host order and host endianness.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "putWord16host",
          "package": "binary",
          "signature": "Word16 -\u003e Put",
          "source": "src/Data-Binary-Put.html#putWord16host",
          "type": "function"
        },
        "index": {
          "description": "Write Word16 in native host order and host endianness For portability issues see putWordhost",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putWord16host",
          "normalized": "Word-\u003ePut",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word16 in little endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "putWord16le",
          "package": "binary",
          "signature": "Word16 -\u003e Put",
          "source": "src/Data-Binary-Put.html#putWord16le",
          "type": "function"
        },
        "index": {
          "description": "Write Word16 in little endian format",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putWord16le",
          "normalized": "Word-\u003ePut",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word32 in big endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "putWord32be",
          "package": "binary",
          "signature": "Word32 -\u003e Put",
          "source": "src/Data-Binary-Put.html#putWord32be",
          "type": "function"
        },
        "index": {
          "description": "Write Word32 in big endian format",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putWord32be",
          "normalized": "Word-\u003ePut",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a Word32 in native host order and host endianness.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "putWord32host",
          "package": "binary",
          "signature": "Word32 -\u003e Put",
          "source": "src/Data-Binary-Put.html#putWord32host",
          "type": "function"
        },
        "index": {
          "description": "Write Word32 in native host order and host endianness For portability issues see putWordhost",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putWord32host",
          "normalized": "Word-\u003ePut",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word32 in little endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "putWord32le",
          "package": "binary",
          "signature": "Word32 -\u003e Put",
          "source": "src/Data-Binary-Put.html#putWord32le",
          "type": "function"
        },
        "index": {
          "description": "Write Word32 in little endian format",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putWord32le",
          "normalized": "Word-\u003ePut",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word64 in big endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "putWord64be",
          "package": "binary",
          "signature": "Word64 -\u003e Put",
          "source": "src/Data-Binary-Put.html#putWord64be",
          "type": "function"
        },
        "index": {
          "description": "Write Word64 in big endian format",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putWord64be",
          "normalized": "Word-\u003ePut",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a Word64 in native host order\n On a 32 bit machine we write two host order Word32s, in big endian form.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "putWord64host",
          "package": "binary",
          "signature": "Word64 -\u003e Put",
          "source": "src/Data-Binary-Put.html#putWord64host",
          "type": "function"
        },
        "index": {
          "description": "Write Word64 in native host order On bit machine we write two host order Word32s in big endian form For portability issues see putWordhost",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putWord64host",
          "normalized": "Word-\u003ePut",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Word64 in little endian format\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "putWord64le",
          "package": "binary",
          "signature": "Word64 -\u003e Put",
          "source": "src/Data-Binary-Put.html#putWord64le",
          "type": "function"
        },
        "index": {
          "description": "Write Word64 in little endian format",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putWord64le",
          "normalized": "Word-\u003ePut",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently write a byte into the output buffer\n\u003c/p\u003e",
          "module": "[\"Data.Binary.Put\",\"Data.Binary\"]",
          "name": "putWord8",
          "package": "binary",
          "signature": "Word8 -\u003e Put",
          "source": "src/Data-Binary-Put.html#putWord8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putWord8\",\"http://hackage.haskell.org/package/binary/docs/Data-Binary.html#v:putWord8\"]"
        },
        "index": {
          "description": "Efficiently write byte into the output buffer",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putWord8",
          "normalized": "Word-\u003ePut",
          "package": "binary",
          "partial": "Word",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a single native machine word. The word is\n written in host order, host endian form, for the machine you're on.\n On a 64 bit machine the Word is an 8 byte value, on a 32 bit machine,\n 4 bytes. Values written this way are not portable to\n different endian or word sized machines, without conversion.\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "putWordhost",
          "package": "binary",
          "signature": "Word -\u003e Put",
          "source": "src/Data-Binary-Put.html#putWordhost",
          "type": "function"
        },
        "index": {
          "description": "Write single native machine word The word is written in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes Values written this way are not portable to different endian or word sized machines without conversion",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "putWordhost",
          "normalized": "Word-\u003ePut",
          "package": "binary",
          "partial": "Wordhost",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:putWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "runPut",
          "package": "binary",
          "signature": "Put -\u003e ByteString",
          "source": "src/Data-Binary-Put.html#runPut",
          "type": "function"
        },
        "index": {
          "description": "Run the Put monad with serialiser",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "runPut",
          "normalized": "Put-\u003eByteString",
          "package": "binary",
          "partial": "Put",
          "signature": "Put-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:runPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser and get its result\n\u003c/p\u003e",
          "module": "Data.Binary.Put",
          "name": "runPutM",
          "package": "binary",
          "signature": "PutM a -\u003e (a, ByteString)",
          "source": "src/Data-Binary-Put.html#runPutM",
          "type": "function"
        },
        "index": {
          "description": "Run the Put monad with serialiser and get its result",
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "runPutM",
          "normalized": "PutM a-\u003e(a,ByteString)",
          "package": "binary",
          "partial": "Put",
          "signature": "PutM a-\u003e(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:runPutM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary.Put",
          "name": "unPut",
          "package": "binary",
          "signature": "PairS a",
          "source": "src/Data-Binary-Put.html#PutM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Binary Put",
          "module": "Data.Binary.Put",
          "name": "unPut",
          "package": "binary",
          "partial": "Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary-Put.html#v:unPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinary serialisation of Haskell values to and from lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n The Binary library provides methods for encoding Haskell values as\n streams of bytes directly in memory. The resulting \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e can\n then be written to disk, sent over the network, or further processed\n (for example, compressed with gzip).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ebinary\u003c/code\u003e package is notable in that it provides both pure, and\n high performance serialisation.\n\u003c/p\u003e\u003cp\u003eValues encoded using the \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e class are always encoded in network order\n (big endian) form, and encoded data should be portable across\n machine endianness, word size, or compiler version. For example,\n data encoded using the \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e class could be written on any machine,\n and read back on any another.\n\u003c/p\u003e\u003cp\u003eIf the specifics of the data format is not important to you, for example,\n you are more interested in serializing and deserializing values than\n in which format will be used, it is possible to derive \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e\n instances using the generic support. See \u003ccode\u003e\u003ca\u003eGBinary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you have specific requirements about the encoding format, you can use\n the encoding and decoding primitives directly, see the modules\n \u003ca\u003eData.Binary.Get\u003c/a\u003e and \u003ca\u003eData.Binary.Put\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Binary",
          "name": "Binary",
          "package": "binary",
          "source": "src/Data-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Binary serialisation of Haskell values to and from lazy ByteString The Binary library provides methods for encoding Haskell values as streams of bytes directly in memory The resulting ByteString can then be written to disk sent over the network or further processed for example compressed with gzip The binary package is notable in that it provides both pure and high performance serialisation Values encoded using the Binary class are always encoded in network order big endian form and encoded data should be portable across machine endianness word size or compiler version For example data encoded using the Binary class could be written on any machine and read back on any another If the specifics of the data format is not important to you for example you are more interested in serializing and deserializing values than in which format will be used it is possible to derive Binary instances using the generic support See GBinary If you have specific requirements about the encoding format you can use the encoding and decoding primitives directly see the modules Data.Binary.Get and Data.Binary.Put",
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "Binary",
          "package": "binary",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e class provides \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, methods to encode and\n decode a Haskell value to a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. It mirrors the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e classes for textual representation of Haskell types, and is\n suitable for serialising Haskell values to disk, over the network.\n\u003c/p\u003e\u003cp\u003eFor decoding and generating simple external binary formats (e.g. C\n structures), Binary may be used, but in general is not suitable\n for complex protocols. Instead use the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e primitives\n directly.\n\u003c/p\u003e\u003cp\u003eInstances of Binary should satisfy the following property:\n\u003c/p\u003e\u003cpre\u003e decode . encode == id\n\u003c/pre\u003e\u003cp\u003eThat is, the \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e methods should be the inverse of each\n other. A range of instances are provided for basic Haskell types.\n\u003c/p\u003e",
          "module": "Data.Binary",
          "name": "Binary",
          "package": "binary",
          "source": "src/Data-Binary-Class.html#Binary",
          "type": "class"
        },
        "index": {
          "description": "The Binary class provides put and get methods to encode and decode Haskell value to lazy ByteString It mirrors the Read and Show classes for textual representation of Haskell types and is suitable for serialising Haskell values to disk over the network For decoding and generating simple external binary formats e.g structures Binary may be used but in general is not suitable for complex protocols Instead use the Put and Get primitives directly Instances of Binary should satisfy the following property decode encode id That is the get and put methods should be the inverse of each other range of instances are provided for basic Haskell types",
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "Binary",
          "package": "binary",
          "partial": "Binary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#t:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary",
          "name": "GBinary",
          "package": "binary",
          "source": "src/Data-Binary-Class.html#GBinary",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "GBinary",
          "package": "binary",
          "partial": "GBinary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#t:GBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary",
          "name": "Get",
          "package": "binary",
          "source": "src/Data-Binary-Get-Internal.html#Get",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "Get",
          "package": "binary",
          "partial": "Get",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#t:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut merely lifts Builder into a Writer monad, applied to ().\n\u003c/p\u003e",
          "module": "Data.Binary",
          "name": "Put",
          "package": "binary",
          "source": "src/Data-Binary-Put.html#Put",
          "type": "type"
        },
        "index": {
          "description": "Put merely lifts Builder into Writer monad applied to",
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "Put",
          "package": "binary",
          "partial": "Put",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#t:Put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a value from a lazy ByteString, reconstructing the original structure.\n\u003c/p\u003e",
          "module": "Data.Binary",
          "name": "decode",
          "package": "binary",
          "signature": "ByteString -\u003e a",
          "source": "src/Data-Binary.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode value from lazy ByteString reconstructing the original structure",
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "decode",
          "normalized": "ByteString-\u003ea",
          "package": "binary",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a value from a file. In case of errors, \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e will\n be called with the error message.\n\u003c/p\u003e",
          "module": "Data.Binary",
          "name": "decodeFile",
          "package": "binary",
          "signature": "FilePath -\u003e IO a",
          "source": "src/Data-Binary.html#decodeFile",
          "type": "function"
        },
        "index": {
          "description": "Decode value from file In case of errors error will be called with the error message",
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "decodeFile",
          "normalized": "FilePath-\u003eIO a",
          "package": "binary",
          "partial": "File",
          "signature": "FilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#v:decodeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a value from a file. In case of success, the value will be returned\n in \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e. In case of decoder errors, the error message together with\n the byte offset will be returned.\n\u003c/p\u003e",
          "module": "Data.Binary",
          "name": "decodeFileOrFail",
          "package": "binary",
          "signature": "FilePath -\u003e IO (Either (ByteOffset, String) a)",
          "source": "src/Data-Binary.html#decodeFileOrFail",
          "type": "function"
        },
        "index": {
          "description": "Decode value from file In case of success the value will be returned in Right In case of decoder errors the error message together with the byte offset will be returned",
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "decodeFileOrFail",
          "normalized": "FilePath-\u003eIO(Either(ByteOffset,String)a)",
          "package": "binary",
          "partial": "File Or Fail",
          "signature": "FilePath-\u003eIO(Either(ByteOffset,String)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#v:decodeFileOrFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a value from a lazy ByteString. Returning \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e on failure and\n \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e on success. In both cases the unconsumed input and the number of\n consumed bytes is returned. In case of failure, a human-readable error\n message will be returned as well.\n\u003c/p\u003e",
          "module": "Data.Binary",
          "name": "decodeOrFail",
          "package": "binary",
          "signature": "ByteString -\u003e Either (ByteString, ByteOffset, String) (ByteString, ByteOffset, a)",
          "source": "src/Data-Binary.html#decodeOrFail",
          "type": "function"
        },
        "index": {
          "description": "Decode value from lazy ByteString Returning Left on failure and Right on success In both cases the unconsumed input and the number of consumed bytes is returned In case of failure human-readable error message will be returned as well",
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "decodeOrFail",
          "normalized": "ByteString-\u003eEither(ByteString,ByteOffset,String)(ByteString,ByteOffset,a)",
          "package": "binary",
          "partial": "Or Fail",
          "signature": "ByteString-\u003eEither(ByteString,ByteOffset,String)(ByteString,ByteOffset,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#v:decodeOrFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a value using binary serialisation to a lazy ByteString.\n\u003c/p\u003e",
          "module": "Data.Binary",
          "name": "encode",
          "package": "binary",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Binary.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode value using binary serialisation to lazy ByteString",
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "binary",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily serialise a value to a file.\n\u003c/p\u003e\u003cp\u003eThis is just a convenience function, it's defined simply as:\n\u003c/p\u003e\u003cpre\u003e encodeFile f = B.writeFile f . encode\n\u003c/pre\u003e\u003cp\u003eSo for example if you wanted to compress as well, you could use:\n\u003c/p\u003e\u003cpre\u003e B.writeFile f . compress . encode\n\u003c/pre\u003e",
          "module": "Data.Binary",
          "name": "encodeFile",
          "package": "binary",
          "signature": "FilePath -\u003e a -\u003e IO ()",
          "source": "src/Data-Binary.html#encodeFile",
          "type": "function"
        },
        "index": {
          "description": "Lazily serialise value to file This is just convenience function it defined simply as encodeFile B.writeFile encode So for example if you wanted to compress as well you could use B.writeFile compress encode",
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "encodeFile",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "binary",
          "partial": "File",
          "signature": "FilePath-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#v:encodeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a value in the Get monad\n\u003c/p\u003e",
          "module": "Data.Binary",
          "name": "get",
          "package": "binary",
          "signature": "Get t",
          "source": "src/Data-Binary-Class.html#get",
          "type": "method"
        },
        "index": {
          "description": "Decode value in the Get monad",
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "get",
          "package": "binary",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary",
          "name": "gget",
          "package": "binary",
          "signature": "Get (f t)",
          "source": "src/Data-Binary-Class.html#gget",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "gget",
          "package": "binary",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#v:gget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binary",
          "name": "gput",
          "package": "binary",
          "signature": "f t -\u003e Put",
          "source": "src/Data-Binary-Class.html#gput",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "gput",
          "normalized": "a b-\u003ePut",
          "package": "binary",
          "signature": "f t-\u003ePut",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#v:gput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a value in the Put monad.\n\u003c/p\u003e",
          "module": "Data.Binary",
          "name": "put",
          "package": "binary",
          "signature": "t -\u003e Put",
          "source": "src/Data-Binary-Class.html#put",
          "type": "method"
        },
        "index": {
          "description": "Encode value in the Put monad",
          "hierarchy": "Data Binary",
          "module": "Data.Binary",
          "name": "put",
          "normalized": "a-\u003ePut",
          "package": "binary",
          "signature": "t-\u003ePut",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binary/docs/Data-Binary.html#v:put"
      }
    }
  ]
]