[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient construction of lazy bytestrings.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "module",
        "fct-source": "src/Data-Serialize-Builder.html",
        "fct-type": "module",
        "title": "Builder"
      },
      "index": {
        "description": "Efficient construction of lazy bytestrings",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "cereal",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#t:Builder",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e is an efficient way to build lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n There are several functions for constructing \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es, but only one\n to inspect them: to extract any data, you have to turn them into lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInternally, a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e constructs a lazy \u003ccode\u003e\u003ca\u003eBytestring\u003c/a\u003e\u003c/code\u003e by filling byte\n arrays piece by piece.  As each buffer is filled, it is 'popped'\n off, to become a new chunk of the resulting lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n All this is hidden from the user of the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "data",
        "fct-source": "src/Data-Serialize-Builder.html#Builder",
        "fct-type": "data",
        "title": "Builder"
      },
      "index": {
        "description": "Builder is an efficient way to build lazy ByteString There are several functions for constructing Builder but only one to inspect them to extract any data you have to turn them into lazy ByteString using toLazyByteString Internally Builder constructs lazy Bytestring by filling byte arrays piece by piece As each buffer is filled it is popped off to become new chunk of the resulting lazy ByteString All this is hidden from the user of the Builder",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "cereal",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The concatenation of two Builders, an associative operation\n with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e x y) = \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e x) (\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e y)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Builder -\u003e Builder -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "The concatenation of two Builders an associative operation with identity empty satisfying toLazyByteString append append toLazyByteString toLazyByteString",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "append",
        "normalized": "Builder-\u003eBuilder-\u003eBuilder",
        "package": "cereal",
        "partial": "",
        "signature": "Builder-\u003eBuilder-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e The empty Builder, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Builder",
        "fct-source": "src/Data-Serialize-Builder.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty Builder satisfying toLazyByteString empty empty",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "empty",
        "normalized": "",
        "package": "cereal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Pop the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e we have constructed so far, if any,\n yielding a new chunk in the result lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Builder",
        "fct-source": "src/Data-Serialize-Builder.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Pop the ByteString we have constructed so far if any yielding new chunk in the result lazy ByteString",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "flush",
        "normalized": "",
        "package": "cereal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:fromByteString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromByteString\u003c/a\u003e\u003c/code\u003e bs) = \u003ccode\u003e\u003ca\u003efromChunks\u003c/a\u003e\u003c/code\u003e [bs]\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#fromByteString",
        "fct-type": "function",
        "title": "fromByteString"
      },
      "index": {
        "description": "Builder taking ByteString satisfying toLazyByteString fromByteString bs fromChunks bs",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "fromByteString",
        "normalized": "ByteString-\u003eBuilder",
        "package": "cereal",
        "partial": "Byte String",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:fromLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromLazyByteString\u003c/a\u003e\u003c/code\u003e bs) = bs\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#fromLazyByteString",
        "fct-type": "function",
        "title": "fromLazyByteString"
      },
      "index": {
        "description": "Builder taking lazy ByteString satisfying toLazyByteString fromLazyByteString bs bs",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "fromLazyByteString",
        "normalized": "ByteString-\u003eBuilder",
        "package": "cereal",
        "partial": "Lazy Byte String",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord16be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word16 in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Word16 -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#putWord16be",
        "fct-type": "function",
        "title": "putWord16be"
      },
      "index": {
        "description": "Write Word16 in big endian format",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "putWord16be",
        "normalized": "Word-\u003eBuilder",
        "package": "cereal",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord16host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word16 in native host order and host endianness.\n 2 bytes will be written, unaligned.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Word16 -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#putWord16host",
        "fct-type": "function",
        "title": "putWord16host"
      },
      "index": {
        "description": "Write Word16 in native host order and host endianness bytes will be written unaligned",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "putWord16host",
        "normalized": "Word-\u003eBuilder",
        "package": "cereal",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord16le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word16 in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Word16 -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#putWord16le",
        "fct-type": "function",
        "title": "putWord16le"
      },
      "index": {
        "description": "Write Word16 in little endian format",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "putWord16le",
        "normalized": "Word-\u003eBuilder",
        "package": "cereal",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord32be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word32 in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Word32 -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#putWord32be",
        "fct-type": "function",
        "title": "putWord32be"
      },
      "index": {
        "description": "Write Word32 in big endian format",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "putWord32be",
        "normalized": "Word-\u003eBuilder",
        "package": "cereal",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord32host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word32 in native host order and host endianness.\n 4 bytes will be written, unaligned.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Word32 -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#putWord32host",
        "fct-type": "function",
        "title": "putWord32host"
      },
      "index": {
        "description": "Write Word32 in native host order and host endianness bytes will be written unaligned",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "putWord32host",
        "normalized": "Word-\u003eBuilder",
        "package": "cereal",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord32le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word32 in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Word32 -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#putWord32le",
        "fct-type": "function",
        "title": "putWord32le"
      },
      "index": {
        "description": "Write Word32 in little endian format",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "putWord32le",
        "normalized": "Word-\u003eBuilder",
        "package": "cereal",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord64be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word64 in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Word64 -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#putWord64be",
        "fct-type": "function",
        "title": "putWord64be"
      },
      "index": {
        "description": "Write Word64 in big endian format",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "putWord64be",
        "normalized": "Word-\u003eBuilder",
        "package": "cereal",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord64host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word64 in native host order.\n On a 32 bit machine we write two host order Word32s, in big endian form.\n 8 bytes will be written, unaligned.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Word64 -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#putWord64host",
        "fct-type": "function",
        "title": "putWord64host"
      },
      "index": {
        "description": "Write Word64 in native host order On bit machine we write two host order Word32s in big endian form bytes will be written unaligned",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "putWord64host",
        "normalized": "Word-\u003eBuilder",
        "package": "cereal",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWord64le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word64 in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Word64 -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#putWord64le",
        "fct-type": "function",
        "title": "putWord64le"
      },
      "index": {
        "description": "Write Word64 in little endian format",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "putWord64le",
        "normalized": "Word-\u003eBuilder",
        "package": "cereal",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:putWordhost",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a single native machine word. The word is\n written in host order, host endian form, for the machine you're on.\n On a 64 bit machine the Word is an 8 byte value, on a 32 bit machine,\n 4 bytes. Values written this way are not portable to\n different endian or word sized machines, without conversion.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Word -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#putWordhost",
        "fct-type": "function",
        "title": "putWordhost"
      },
      "index": {
        "description": "Builder taking single native machine word The word is written in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes Values written this way are not portable to different endian or word sized machines without conversion",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "putWordhost",
        "normalized": "Word-\u003eBuilder",
        "package": "cereal",
        "partial": "Wordhost",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a single byte, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e b) = \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e b\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Word8 -\u003e Builder",
        "fct-source": "src/Data-Serialize-Builder.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Builder taking single byte satisfying toLazyByteString singleton singleton",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "singleton",
        "normalized": "Word-\u003eBuilder",
        "package": "cereal",
        "partial": "",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:toByteString",
      "description": {
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Builder -\u003e ByteString",
        "fct-source": "src/Data-Serialize-Builder.html#toByteString",
        "fct-type": "function",
        "title": "toByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "toByteString",
        "normalized": "Builder-\u003eByteString",
        "package": "cereal",
        "partial": "Byte String",
        "signature": "Builder-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Builder.html#v:toLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Extract a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n The construction work takes place if and when the relevant part of\n the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is demanded.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Builder",
        "fct-package": "cereal",
        "fct-signature": "Builder -\u003e ByteString",
        "fct-source": "src/Data-Serialize-Builder.html#toLazyByteString",
        "fct-type": "function",
        "title": "toLazyByteString"
      },
      "index": {
        "description": "Extract lazy ByteString from Builder The construction work takes place if and when the relevant part of the lazy ByteString is demanded",
        "hierarchy": "Data Serialize Builder",
        "module": "Data.Serialize.Builder",
        "name": "toLazyByteString",
        "normalized": "Builder-\u003eByteString",
        "package": "cereal",
        "partial": "Lazy Byte String",
        "signature": "Builder-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Get monad. A monad for efficiently building structures from\n strict ByteStrings\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "module",
        "fct-source": "src/Data-Serialize-Get.html",
        "fct-type": "module",
        "title": "Get"
      },
      "index": {
        "description": "The Get monad monad for efficiently building structures from strict ByteStrings",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "Get",
        "normalized": "",
        "package": "cereal",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#t:Get",
      "description": {
        "fct-descr": "\u003cp\u003eThe Get monad is an Exception and State monad.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "data",
        "fct-source": "src/Data-Serialize-Get.html#Get",
        "fct-type": "data",
        "title": "Get"
      },
      "index": {
        "description": "The Get monad is an Exception and State monad",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "Get",
        "normalized": "",
        "package": "cereal",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of a parse.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "data",
        "fct-source": "src/Data-Serialize-Get.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "The result of parse",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "Result",
        "normalized": "",
        "package": "cereal",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:Done",
      "description": {
        "fct-descr": "\u003cp\u003eThe parse succeeded.  The \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is the\n   input that had not yet been consumed (if any) when\n   the parse succeeded.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Done r ByteString",
        "fct-source": "src/Data-Serialize-Get.html#Result",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "The parse succeeded The ByteString is the input that had not yet been consumed if any when the parse succeeded",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "Done",
        "normalized": "",
        "package": "cereal",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:Fail",
      "description": {
        "fct-descr": "\u003cp\u003eThe parse failed. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is the\n   message describing the error, if any.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Fail String ByteString",
        "fct-source": "src/Data-Serialize-Get.html#Result",
        "fct-type": "function",
        "title": "Fail"
      },
      "index": {
        "description": "The parse failed The String is the message describing the error if any",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "Fail",
        "normalized": "",
        "package": "cereal",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:Partial",
      "description": {
        "fct-descr": "\u003cp\u003eSupply this continuation with more input so that\n   the parser can resume. To indicate that no more\n   input is available, use an \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e string.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Partial (ByteString -\u003e Result r)",
        "fct-source": "src/Data-Serialize-Get.html#Result",
        "fct-type": "function",
        "title": "Partial"
      },
      "index": {
        "description": "Supply this continuation with more input so that the parser can resume To indicate that no more input is available use an empty string",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "Partial",
        "normalized": "Partial(ByteString-\u003eResult a)",
        "package": "cereal",
        "partial": "Partial",
        "signature": "Partial(ByteString-\u003eResult r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:ensure",
      "description": {
        "fct-descr": "\u003cp\u003eIf at least \u003ccode\u003en\u003c/code\u003e bytes of input are available, return the current\n   input, otherwise fail.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Int -\u003e Get ByteString",
        "fct-source": "src/Data-Serialize-Get.html#ensure",
        "fct-type": "function",
        "title": "ensure"
      },
      "index": {
        "description": "If at least bytes of input are available return the current input otherwise fail",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "ensure",
        "normalized": "Int-\u003eGet ByteString",
        "package": "cereal",
        "partial": "",
        "signature": "Int-\u003eGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getByteString",
      "description": {
        "fct-descr": "\u003cp\u003eAn efficient \u003ccode\u003eget\u003c/code\u003e method for strict ByteStrings. Fails if fewer\n than \u003ccode\u003en\u003c/code\u003e bytes are left in the input. This function creates a fresh\n copy of the underlying bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Int -\u003e Get ByteString",
        "fct-source": "src/Data-Serialize-Get.html#getByteString",
        "fct-type": "function",
        "title": "getByteString"
      },
      "index": {
        "description": "An efficient get method for strict ByteStrings Fails if fewer than bytes are left in the input This function creates fresh copy of the underlying bytes",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getByteString",
        "normalized": "Int-\u003eGet ByteString",
        "package": "cereal",
        "partial": "Byte String",
        "signature": "Int-\u003eGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getBytes",
      "description": {
        "fct-descr": "\u003cp\u003ePull \u003ccode\u003en\u003c/code\u003e bytes from the input, as a strict ByteString.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Int -\u003e Get ByteString",
        "fct-source": "src/Data-Serialize-Get.html#getBytes",
        "fct-type": "function",
        "title": "getBytes"
      },
      "index": {
        "description": "Pull bytes from the input as strict ByteString",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getBytes",
        "normalized": "Int-\u003eGet ByteString",
        "package": "cereal",
        "partial": "Bytes",
        "signature": "Int-\u003eGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getEitherOf",
      "description": {
        "fct-descr": "\u003cp\u003eRead an Either, in the following format:\n   Word8 (0 for Left, anything else for Right)\n   element a when 0, element b otherwise\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e Get b -\u003e Get (Either a b)",
        "fct-source": "src/Data-Serialize-Get.html#getEitherOf",
        "fct-type": "function",
        "title": "getEitherOf"
      },
      "index": {
        "description": "Read an Either in the following format Word8 for Left anything else for Right element when element otherwise",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getEitherOf",
        "normalized": "Get a-\u003eGet b-\u003eGet(Either a b)",
        "package": "cereal",
        "partial": "Either Of",
        "signature": "Get a-\u003eGet b-\u003eGet(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getIArrayOf",
      "description": {
        "fct-descr": "\u003cp\u003eGet an IArray in the following format:\n   index (lower bound)\n   index (upper bound)\n   Word64 (big endian format)\n   element 1\n   ...\n   element n\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get i -\u003e Get e -\u003e Get (a i e)",
        "fct-source": "src/Data-Serialize-Get.html#getIArrayOf",
        "fct-type": "function",
        "title": "getIArrayOf"
      },
      "index": {
        "description": "Get an IArray in the following format index lower bound index upper bound Word64 big endian format element element",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getIArrayOf",
        "normalized": "Get a-\u003eGet b-\u003eGet(c a b)",
        "package": "cereal",
        "partial": "IArray Of",
        "signature": "Get i-\u003eGet e-\u003eGet(a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getIntMapOf",
      "description": {
        "fct-descr": "\u003cp\u003eRead as a list of pairs of int and element.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Int -\u003e Get a -\u003e Get (IntMap a)",
        "fct-source": "src/Data-Serialize-Get.html#getIntMapOf",
        "fct-type": "function",
        "title": "getIntMapOf"
      },
      "index": {
        "description": "Read as list of pairs of int and element",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getIntMapOf",
        "normalized": "Get Int-\u003eGet a-\u003eGet(IntMap a)",
        "package": "cereal",
        "partial": "Int Map Of",
        "signature": "Get Int-\u003eGet a-\u003eGet(IntMap a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getIntSetOf",
      "description": {
        "fct-descr": "\u003cp\u003eRead as a list of ints.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Int -\u003e Get IntSet",
        "fct-source": "src/Data-Serialize-Get.html#getIntSetOf",
        "fct-type": "function",
        "title": "getIntSetOf"
      },
      "index": {
        "description": "Read as list of ints",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getIntSetOf",
        "normalized": "Get Int-\u003eGet IntSet",
        "package": "cereal",
        "partial": "Int Set Of",
        "signature": "Get Int-\u003eGet IntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getLazyByteString",
      "description": {
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Int64 -\u003e Get ByteString",
        "fct-source": "src/Data-Serialize-Get.html#getLazyByteString",
        "fct-type": "function",
        "title": "getLazyByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getLazyByteString",
        "normalized": "Int-\u003eGet ByteString",
        "package": "cereal",
        "partial": "Lazy Byte String",
        "signature": "Int-\u003eGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getListOf",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list in the following format:\n   Word64 (big endian format)\n   element 1\n   ...\n   element n\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e Get [a]",
        "fct-source": "src/Data-Serialize-Get.html#getListOf",
        "fct-type": "function",
        "title": "getListOf"
      },
      "index": {
        "description": "Get list in the following format Word64 big endian format element element",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getListOf",
        "normalized": "Get a-\u003eGet[a]",
        "package": "cereal",
        "partial": "List Of",
        "signature": "Get a-\u003eGet[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getMapOf",
      "description": {
        "fct-descr": "\u003cp\u003eRead as a list of pairs of key and element.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get k -\u003e Get a -\u003e Get (Map k a)",
        "fct-source": "src/Data-Serialize-Get.html#getMapOf",
        "fct-type": "function",
        "title": "getMapOf"
      },
      "index": {
        "description": "Read as list of pairs of key and element",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getMapOf",
        "normalized": "Get a-\u003eGet b-\u003eGet(Map a b)",
        "package": "cereal",
        "partial": "Map Of",
        "signature": "Get k-\u003eGet a-\u003eGet(Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getMaybeOf",
      "description": {
        "fct-descr": "\u003cp\u003eRead in a Maybe in the following format:\n   Word8 (0 for Nothing, anything else for Just)\n   element (when Just)\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e Get (Maybe a)",
        "fct-source": "src/Data-Serialize-Get.html#getMaybeOf",
        "fct-type": "function",
        "title": "getMaybeOf"
      },
      "index": {
        "description": "Read in Maybe in the following format Word8 for Nothing anything else for Just element when Just",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getMaybeOf",
        "normalized": "Get a-\u003eGet(Maybe a)",
        "package": "cereal",
        "partial": "Maybe Of",
        "signature": "Get a-\u003eGet(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getSeqOf",
      "description": {
        "fct-descr": "\u003cp\u003eGet a sequence in the following format:\n   Word64 (big endian format)\n   element 1\n   ...\n   element n\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e Get (Seq a)",
        "fct-source": "src/Data-Serialize-Get.html#getSeqOf",
        "fct-type": "function",
        "title": "getSeqOf"
      },
      "index": {
        "description": "Get sequence in the following format Word64 big endian format element element",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getSeqOf",
        "normalized": "Get a-\u003eGet(Seq a)",
        "package": "cereal",
        "partial": "Seq Of",
        "signature": "Get a-\u003eGet(Seq a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getSetOf",
      "description": {
        "fct-descr": "\u003cp\u003eRead as a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e Get (Set a)",
        "fct-source": "src/Data-Serialize-Get.html#getSetOf",
        "fct-type": "function",
        "title": "getSetOf"
      },
      "index": {
        "description": "Read as list of elements",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getSetOf",
        "normalized": "Get a-\u003eGet(Set a)",
        "package": "cereal",
        "partial": "Set Of",
        "signature": "Get a-\u003eGet(Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getTreeOf",
      "description": {
        "fct-descr": "\u003cp\u003eRead as a list of lists.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e Get (Tree a)",
        "fct-source": "src/Data-Serialize-Get.html#getTreeOf",
        "fct-type": "function",
        "title": "getTreeOf"
      },
      "index": {
        "description": "Read as list of lists",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getTreeOf",
        "normalized": "Get a-\u003eGet(Tree a)",
        "package": "cereal",
        "partial": "Tree Of",
        "signature": "Get a-\u003eGet(Tree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getTwoOf",
      "description": {
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e Get b -\u003e Get (a, b)",
        "fct-source": "src/Data-Serialize-Get.html#getTwoOf",
        "fct-type": "function",
        "title": "getTwoOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getTwoOf",
        "normalized": "Get a-\u003eGet b-\u003eGet(a,b)",
        "package": "cereal",
        "partial": "Two Of",
        "signature": "Get a-\u003eGet b-\u003eGet(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord16be",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Word16 in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Word16",
        "fct-source": "src/Data-Serialize-Get.html#getWord16be",
        "fct-type": "function",
        "title": "getWord16be"
      },
      "index": {
        "description": "Read Word16 in big endian format",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getWord16be",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord16host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a 2 byte Word16 in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Word16",
        "fct-source": "src/Data-Serialize-Get.html#getWord16host",
        "fct-type": "function",
        "title": "getWord16host"
      },
      "index": {
        "description": "Read byte Word16 in native host order and host endianness",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getWord16host",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord16le",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Word16 in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Word16",
        "fct-source": "src/Data-Serialize-Get.html#getWord16le",
        "fct-type": "function",
        "title": "getWord16le"
      },
      "index": {
        "description": "Read Word16 in little endian format",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getWord16le",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord32be",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Word32 in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Word32",
        "fct-source": "src/Data-Serialize-Get.html#getWord32be",
        "fct-type": "function",
        "title": "getWord32be"
      },
      "index": {
        "description": "Read Word32 in big endian format",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getWord32be",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord32host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a Word32 in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Word32",
        "fct-source": "src/Data-Serialize-Get.html#getWord32host",
        "fct-type": "function",
        "title": "getWord32host"
      },
      "index": {
        "description": "Read Word32 in native host order and host endianness",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getWord32host",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord32le",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Word32 in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Word32",
        "fct-source": "src/Data-Serialize-Get.html#getWord32le",
        "fct-type": "function",
        "title": "getWord32le"
      },
      "index": {
        "description": "Read Word32 in little endian format",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getWord32le",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord64be",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Word64 in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Word64",
        "fct-source": "src/Data-Serialize-Get.html#getWord64be",
        "fct-type": "function",
        "title": "getWord64be"
      },
      "index": {
        "description": "Read Word64 in big endian format",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getWord64be",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord64host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a Word64 in native host order and host endianess.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Word64",
        "fct-source": "src/Data-Serialize-Get.html#getWord64host",
        "fct-type": "function",
        "title": "getWord64host"
      },
      "index": {
        "description": "Read Word64 in native host order and host endianess",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getWord64host",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord64le",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Word64 in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Word64",
        "fct-source": "src/Data-Serialize-Get.html#getWord64le",
        "fct-type": "function",
        "title": "getWord64le"
      },
      "index": {
        "description": "Read Word64 in little endian format",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getWord64le",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWord8",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Word8 from the monad state\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Word8",
        "fct-source": "src/Data-Serialize-Get.html#getWord8",
        "fct-type": "function",
        "title": "getWord8"
      },
      "index": {
        "description": "Read Word8 from the monad state",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getWord8",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:getWordhost",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Read a single native machine word. The word is read in\n host order, host endian form, for the machine you're on. On a 64 bit\n machine the Word is an 8 byte value, on a 32 bit machine, 4 bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Word",
        "fct-source": "src/Data-Serialize-Get.html#getWordhost",
        "fct-type": "function",
        "title": "getWordhost"
      },
      "index": {
        "description": "Read single native machine word The word is read in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "getWordhost",
        "normalized": "",
        "package": "cereal",
        "partial": "Wordhost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether all input has been consumed.\n\u003c/p\u003e\u003cp\u003eWARNING: when run with \u003ccode\u003erunGetPartial\u003c/code\u003e, isEmpty will only tell you if you're\n at the end of the current chunk.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Bool",
        "fct-source": "src/Data-Serialize-Get.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Test whether all input has been consumed WARNING when run with runGetPartial isEmpty will only tell you if you re at the end of the current chunk",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "isEmpty",
        "normalized": "",
        "package": "cereal",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:isolate",
      "description": {
        "fct-descr": "\u003cp\u003eIsolate an action to operating within a fixed block of bytes.  The action\n   is required to consume all the bytes that it is isolated to.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Int -\u003e Get a -\u003e Get a",
        "fct-source": "src/Data-Serialize-Get.html#isolate",
        "fct-type": "function",
        "title": "isolate"
      },
      "index": {
        "description": "Isolate an action to operating within fixed block of bytes The action is required to consume all the bytes that it is isolated to",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "isolate",
        "normalized": "Int-\u003eGet a-\u003eGet a",
        "package": "cereal",
        "partial": "",
        "signature": "Int-\u003eGet a-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:label",
      "description": {
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "String -\u003e Get a -\u003e Get a",
        "fct-source": "src/Data-Serialize-Get.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "label",
        "normalized": "String-\u003eGet a-\u003eGet a",
        "package": "cereal",
        "partial": "",
        "signature": "String-\u003eGet a-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:lookAhead",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003ega\u003c/code\u003e, but return without consuming its input.\n Fails if \u003ccode\u003ega\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e Get a",
        "fct-source": "src/Data-Serialize-Get.html#lookAhead",
        "fct-type": "function",
        "title": "lookAhead"
      },
      "index": {
        "description": "Run ga but return without consuming its input Fails if ga fails",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "lookAhead",
        "normalized": "Get a-\u003eGet a",
        "package": "cereal",
        "partial": "Ahead",
        "signature": "Get a-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:lookAheadE",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e, but consume the input if \u003ccode\u003egea\u003c/code\u003e returns 'Right _'.\n Fails if \u003ccode\u003egea\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get (Either a b) -\u003e Get (Either a b)",
        "fct-source": "src/Data-Serialize-Get.html#lookAheadE",
        "fct-type": "function",
        "title": "lookAheadE"
      },
      "index": {
        "description": "Like lookAhead but consume the input if gea returns Right Fails if gea fails",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "lookAheadE",
        "normalized": "Get(Either a b)-\u003eGet(Either a b)",
        "package": "cereal",
        "partial": "Ahead",
        "signature": "Get(Either a b)-\u003eGet(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:lookAheadM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e, but consume the input if \u003ccode\u003egma\u003c/code\u003e returns 'Just _'.\n Fails if \u003ccode\u003egma\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get (Maybe a) -\u003e Get (Maybe a)",
        "fct-source": "src/Data-Serialize-Get.html#lookAheadM",
        "fct-type": "function",
        "title": "lookAheadM"
      },
      "index": {
        "description": "Like lookAhead but consume the input if gma returns Just Fails if gma fails",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "lookAheadM",
        "normalized": "Get(Maybe a)-\u003eGet(Maybe a)",
        "package": "cereal",
        "partial": "Ahead",
        "signature": "Get(Maybe a)-\u003eGet(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:remaining",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of remaining unparsed bytes.  Useful for checking whether\n all input has been consumed.\n\u003c/p\u003e\u003cp\u003eWARNING: when run with \u003ccode\u003erunGetPartial\u003c/code\u003e, remaining will only return the number\n of bytes that are remaining in the current input.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get Int",
        "fct-source": "src/Data-Serialize-Get.html#remaining",
        "fct-type": "function",
        "title": "remaining"
      },
      "index": {
        "description": "Get the number of remaining unparsed bytes Useful for checking whether all input has been consumed WARNING when run with runGetPartial remaining will only return the number of bytes that are remaining in the current input",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "remaining",
        "normalized": "",
        "package": "cereal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:runGet",
      "description": {
        "fct-descr": "\u003cp\u003eRun the Get monad applies a \u003ccode\u003eget\u003c/code\u003e-based parser on the input ByteString\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e ByteString -\u003e Either String a",
        "fct-source": "src/Data-Serialize-Get.html#runGet",
        "fct-type": "function",
        "title": "runGet"
      },
      "index": {
        "description": "Run the Get monad applies get based parser on the input ByteString",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "runGet",
        "normalized": "Get a-\u003eByteString-\u003eEither String a",
        "package": "cereal",
        "partial": "Get",
        "signature": "Get a-\u003eByteString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:runGetLazy",
      "description": {
        "fct-descr": "\u003cp\u003eRun the Get monad over a Lazy ByteString.  Note that this will not run the\n Get parser lazily, but will operate on lazy ByteStrings.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e ByteString -\u003e Either String a",
        "fct-source": "src/Data-Serialize-Get.html#runGetLazy",
        "fct-type": "function",
        "title": "runGetLazy"
      },
      "index": {
        "description": "Run the Get monad over Lazy ByteString Note that this will not run the Get parser lazily but will operate on lazy ByteStrings",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "runGetLazy",
        "normalized": "Get a-\u003eByteString-\u003eEither String a",
        "package": "cereal",
        "partial": "Get Lazy",
        "signature": "Get a-\u003eByteString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:runGetLazyState",
      "description": {
        "fct-descr": "\u003cp\u003eRun the Get monad over a Lazy ByteString.  Note that this does not run the\n Get parser lazily, but will operate on lazy ByteStrings.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e ByteString -\u003e Either String (a, ByteString)",
        "fct-source": "src/Data-Serialize-Get.html#runGetLazyState",
        "fct-type": "function",
        "title": "runGetLazyState"
      },
      "index": {
        "description": "Run the Get monad over Lazy ByteString Note that this does not run the Get parser lazily but will operate on lazy ByteStrings",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "runGetLazyState",
        "normalized": "Get a-\u003eByteString-\u003eEither String(a,ByteString)",
        "package": "cereal",
        "partial": "Get Lazy State",
        "signature": "Get a-\u003eByteString-\u003eEither String(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:runGetPartial",
      "description": {
        "fct-descr": "\u003cp\u003eRun the Get monad applies a \u003ccode\u003eget\u003c/code\u003e-based parser on the input ByteString\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e ByteString -\u003e Result a",
        "fct-source": "src/Data-Serialize-Get.html#runGetPartial",
        "fct-type": "function",
        "title": "runGetPartial"
      },
      "index": {
        "description": "Run the Get monad applies get based parser on the input ByteString",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "runGetPartial",
        "normalized": "Get a-\u003eByteString-\u003eResult a",
        "package": "cereal",
        "partial": "Get Partial",
        "signature": "Get a-\u003eByteString-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:runGetState",
      "description": {
        "fct-descr": "\u003cp\u003eRun the Get monad applies a \u003ccode\u003eget\u003c/code\u003e-based parser on the input\n ByteString. Additional to the result of get it returns the number of\n consumed bytes and the rest of the input.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Get a -\u003e ByteString -\u003e Int -\u003e Either String (a, ByteString)",
        "fct-source": "src/Data-Serialize-Get.html#runGetState",
        "fct-type": "function",
        "title": "runGetState"
      },
      "index": {
        "description": "Run the Get monad applies get based parser on the input ByteString Additional to the result of get it returns the number of consumed bytes and the rest of the input",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "runGetState",
        "normalized": "Get a-\u003eByteString-\u003eInt-\u003eEither String(a,ByteString)",
        "package": "cereal",
        "partial": "Get State",
        "signature": "Get a-\u003eByteString-\u003eInt-\u003eEither String(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:skip",
      "description": {
        "fct-descr": "\u003cp\u003eSkip ahead \u003ccode\u003en\u003c/code\u003e bytes. Fails if fewer than \u003ccode\u003en\u003c/code\u003e bytes are available.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Int -\u003e Get ()",
        "fct-source": "src/Data-Serialize-Get.html#skip",
        "fct-type": "function",
        "title": "skip"
      },
      "index": {
        "description": "Skip ahead bytes Fails if fewer than bytes are available",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "skip",
        "normalized": "Int-\u003eGet()",
        "package": "cereal",
        "partial": "",
        "signature": "Int-\u003eGet()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:uncheckedLookAhead",
      "description": {
        "fct-descr": "\u003cp\u003eGet the next up to \u003ccode\u003en\u003c/code\u003e bytes as a ByteString, without consuming them.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Int -\u003e Get ByteString",
        "fct-source": "src/Data-Serialize-Get.html#uncheckedLookAhead",
        "fct-type": "function",
        "title": "uncheckedLookAhead"
      },
      "index": {
        "description": "Get the next up to bytes as ByteString without consuming them",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "uncheckedLookAhead",
        "normalized": "Int-\u003eGet ByteString",
        "package": "cereal",
        "partial": "Look Ahead",
        "signature": "Int-\u003eGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Get.html#v:uncheckedSkip",
      "description": {
        "fct-descr": "\u003cp\u003eSkip ahead \u003ccode\u003en\u003c/code\u003e bytes. No error if there isn't enough bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Get",
        "fct-package": "cereal",
        "fct-signature": "Int -\u003e Get ()",
        "fct-source": "src/Data-Serialize-Get.html#uncheckedSkip",
        "fct-type": "function",
        "title": "uncheckedSkip"
      },
      "index": {
        "description": "Skip ahead bytes No error if there isn enough bytes",
        "hierarchy": "Data Serialize Get",
        "module": "Data.Serialize.Get",
        "name": "uncheckedSkip",
        "normalized": "Int-\u003eGet()",
        "package": "cereal",
        "partial": "Skip",
        "signature": "Int-\u003eGet()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIEEE-754 parsing, as described in this stack-overflow article:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://stackoverflow.com/questions/6976684/converting-ieee-754-floating-point-in-haskell-word32-64-to-and-from-haskell-float/7002812#7002812\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Serialize.IEEE754",
        "fct-package": "cereal",
        "fct-signature": "module",
        "fct-source": "src/Data-Serialize-IEEE754.html",
        "fct-type": "module",
        "title": "IEEE754"
      },
      "index": {
        "description": "IEEE-754 parsing as described in this stack-overflow article http stackoverflow.com questions converting-ieee-754-floating-point-in-haskell-word32-64-to-and-from-haskell-float",
        "hierarchy": "Data Serialize IEEE754",
        "module": "Data.Serialize.IEEE754",
        "name": "IEEE754",
        "normalized": "",
        "package": "cereal",
        "partial": "IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:getFloat32be",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Float in big endian IEEE-754 format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.IEEE754",
        "fct-package": "cereal",
        "fct-signature": "Get Float",
        "fct-source": "src/Data-Serialize-IEEE754.html#getFloat32be",
        "fct-type": "function",
        "title": "getFloat32be"
      },
      "index": {
        "description": "Read Float in big endian IEEE-754 format",
        "hierarchy": "Data Serialize IEEE754",
        "module": "Data.Serialize.IEEE754",
        "name": "getFloat32be",
        "normalized": "",
        "package": "cereal",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:getFloat32le",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Float in little endian IEEE-754 format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.IEEE754",
        "fct-package": "cereal",
        "fct-signature": "Get Float",
        "fct-source": "src/Data-Serialize-IEEE754.html#getFloat32le",
        "fct-type": "function",
        "title": "getFloat32le"
      },
      "index": {
        "description": "Read Float in little endian IEEE-754 format",
        "hierarchy": "Data Serialize IEEE754",
        "module": "Data.Serialize.IEEE754",
        "name": "getFloat32le",
        "normalized": "",
        "package": "cereal",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:getFloat64be",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Double in big endian IEEE-754 format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.IEEE754",
        "fct-package": "cereal",
        "fct-signature": "Get Double",
        "fct-source": "src/Data-Serialize-IEEE754.html#getFloat64be",
        "fct-type": "function",
        "title": "getFloat64be"
      },
      "index": {
        "description": "Read Double in big endian IEEE-754 format",
        "hierarchy": "Data Serialize IEEE754",
        "module": "Data.Serialize.IEEE754",
        "name": "getFloat64be",
        "normalized": "",
        "package": "cereal",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:getFloat64le",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Double in little endian IEEE-754 format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.IEEE754",
        "fct-package": "cereal",
        "fct-signature": "Get Double",
        "fct-source": "src/Data-Serialize-IEEE754.html#getFloat64le",
        "fct-type": "function",
        "title": "getFloat64le"
      },
      "index": {
        "description": "Read Double in little endian IEEE-754 format",
        "hierarchy": "Data Serialize IEEE754",
        "module": "Data.Serialize.IEEE754",
        "name": "getFloat64le",
        "normalized": "",
        "package": "cereal",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:putFloat32be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Float in big endian IEEE-754 format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.IEEE754",
        "fct-package": "cereal",
        "fct-signature": "Float -\u003e Put",
        "fct-source": "src/Data-Serialize-IEEE754.html#putFloat32be",
        "fct-type": "function",
        "title": "putFloat32be"
      },
      "index": {
        "description": "Write Float in big endian IEEE-754 format",
        "hierarchy": "Data Serialize IEEE754",
        "module": "Data.Serialize.IEEE754",
        "name": "putFloat32be",
        "normalized": "Float-\u003ePut",
        "package": "cereal",
        "partial": "Float",
        "signature": "Float-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:putFloat32le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Float in little endian IEEE-754 format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.IEEE754",
        "fct-package": "cereal",
        "fct-signature": "Float -\u003e Put",
        "fct-source": "src/Data-Serialize-IEEE754.html#putFloat32le",
        "fct-type": "function",
        "title": "putFloat32le"
      },
      "index": {
        "description": "Write Float in little endian IEEE-754 format",
        "hierarchy": "Data Serialize IEEE754",
        "module": "Data.Serialize.IEEE754",
        "name": "putFloat32le",
        "normalized": "Float-\u003ePut",
        "package": "cereal",
        "partial": "Float",
        "signature": "Float-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:putFloat64be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Double in big endian IEEE-754 format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.IEEE754",
        "fct-package": "cereal",
        "fct-signature": "Double -\u003e Put",
        "fct-source": "src/Data-Serialize-IEEE754.html#putFloat64be",
        "fct-type": "function",
        "title": "putFloat64be"
      },
      "index": {
        "description": "Write Double in big endian IEEE-754 format",
        "hierarchy": "Data Serialize IEEE754",
        "module": "Data.Serialize.IEEE754",
        "name": "putFloat64be",
        "normalized": "Double-\u003ePut",
        "package": "cereal",
        "partial": "Float",
        "signature": "Double-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-IEEE754.html#v:putFloat64le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Double in little endian IEEE-754 format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.IEEE754",
        "fct-package": "cereal",
        "fct-signature": "Double -\u003e Put",
        "fct-source": "src/Data-Serialize-IEEE754.html#putFloat64le",
        "fct-type": "function",
        "title": "putFloat64le"
      },
      "index": {
        "description": "Write Double in little endian IEEE-754 format",
        "hierarchy": "Data Serialize IEEE754",
        "module": "Data.Serialize.IEEE754",
        "name": "putFloat64le",
        "normalized": "Double-\u003ePut",
        "package": "cereal",
        "partial": "Float",
        "signature": "Double-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Put monad. A monad for efficiently constructing bytestrings.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "module",
        "fct-source": "src/Data-Serialize-Put.html",
        "fct-type": "module",
        "title": "Put"
      },
      "index": {
        "description": "The Put monad monad for efficiently constructing bytestrings",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "Put",
        "normalized": "",
        "package": "cereal",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#t:Put",
      "description": {
        "fct-descr": "\u003cp\u003ePut merely lifts Builder into a Writer monad, applied to ().\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "type",
        "fct-source": "src/Data-Serialize-Put.html#Put",
        "fct-type": "type",
        "title": "Put"
      },
      "index": {
        "description": "Put merely lifts Builder into Writer monad applied to",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "Put",
        "normalized": "",
        "package": "cereal",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#t:PutM",
      "description": {
        "fct-descr": "\u003cp\u003eThe PutM type. A Writer monad over the efficient Builder monoid.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Serialize-Put.html#PutM",
        "fct-type": "newtype",
        "title": "PutM"
      },
      "index": {
        "description": "The PutM type Writer monad over the efficient Builder monoid",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "PutM",
        "normalized": "",
        "package": "cereal",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#t:Putter",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "type",
        "fct-source": "src/Data-Serialize-Put.html#Putter",
        "fct-type": "type",
        "title": "Putter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "Putter",
        "normalized": "",
        "package": "cereal",
        "partial": "Putter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:Put",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Put",
        "fct-source": "src/Data-Serialize-Put.html#PutM",
        "fct-type": "function",
        "title": "Put"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "Put",
        "normalized": "",
        "package": "cereal",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:execPut",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "PutM a -\u003e Builder",
        "fct-source": "src/Data-Serialize-Put.html#execPut",
        "fct-type": "function",
        "title": "execPut"
      },
      "index": {
        "description": "Run the Put monad",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "execPut",
        "normalized": "PutM a-\u003eBuilder",
        "package": "cereal",
        "partial": "Put",
        "signature": "PutM a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003ePop the ByteString we have constructed so far, if any, yielding a\n new chunk in the result ByteString.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Put",
        "fct-source": "src/Data-Serialize-Put.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Pop the ByteString we have constructed so far if any yielding new chunk in the result ByteString",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "flush",
        "normalized": "",
        "package": "cereal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putBuilder",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Builder",
        "fct-source": "src/Data-Serialize-Put.html#putBuilder",
        "fct-type": "function",
        "title": "putBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putBuilder",
        "normalized": "",
        "package": "cereal",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putByteString",
      "description": {
        "fct-descr": "\u003cp\u003eAn efficient primitive to write a strict ByteString into the output buffer.\n It flushes the current buffer, and writes the argument into a new chunk.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter ByteString",
        "fct-source": "src/Data-Serialize-Put.html#putByteString",
        "fct-type": "function",
        "title": "putByteString"
      },
      "index": {
        "description": "An efficient primitive to write strict ByteString into the output buffer It flushes the current buffer and writes the argument into new chunk",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putByteString",
        "normalized": "",
        "package": "cereal",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putEitherOf",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter a -\u003e Putter b -\u003e Putter (Either a b)",
        "fct-source": "src/Data-Serialize-Put.html#putEitherOf",
        "fct-type": "function",
        "title": "putEitherOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putEitherOf",
        "normalized": "Putter a-\u003ePutter b-\u003ePutter(Either a b)",
        "package": "cereal",
        "partial": "Either Of",
        "signature": "Putter a-\u003ePutter b-\u003ePutter(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putIArrayOf",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter i -\u003e Putter e -\u003e Putter (a i e)",
        "fct-source": "src/Data-Serialize-Put.html#putIArrayOf",
        "fct-type": "function",
        "title": "putIArrayOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putIArrayOf",
        "normalized": "Putter a-\u003ePutter b-\u003ePutter(c a b)",
        "package": "cereal",
        "partial": "IArray Of",
        "signature": "Putter i-\u003ePutter e-\u003ePutter(a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putIntMapOf",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Int -\u003e Putter a -\u003e Putter (IntMap a)",
        "fct-source": "src/Data-Serialize-Put.html#putIntMapOf",
        "fct-type": "function",
        "title": "putIntMapOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putIntMapOf",
        "normalized": "Putter Int-\u003ePutter a-\u003ePutter(IntMap a)",
        "package": "cereal",
        "partial": "Int Map Of",
        "signature": "Putter Int-\u003ePutter a-\u003ePutter(IntMap a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putIntSetOf",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Int -\u003e Putter IntSet",
        "fct-source": "src/Data-Serialize-Put.html#putIntSetOf",
        "fct-type": "function",
        "title": "putIntSetOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putIntSetOf",
        "normalized": "Putter Int-\u003ePutter IntSet",
        "package": "cereal",
        "partial": "Int Set Of",
        "signature": "Putter Int-\u003ePutter IntSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a lazy ByteString efficiently, simply appending the lazy\n ByteString chunks to the output buffer\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter ByteString",
        "fct-source": "src/Data-Serialize-Put.html#putLazyByteString",
        "fct-type": "function",
        "title": "putLazyByteString"
      },
      "index": {
        "description": "Write lazy ByteString efficiently simply appending the lazy ByteString chunks to the output buffer",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putLazyByteString",
        "normalized": "",
        "package": "cereal",
        "partial": "Lazy Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putListOf",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter a -\u003e Putter [a]",
        "fct-source": "src/Data-Serialize-Put.html#putListOf",
        "fct-type": "function",
        "title": "putListOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putListOf",
        "normalized": "Putter a-\u003ePutter[a]",
        "package": "cereal",
        "partial": "List Of",
        "signature": "Putter a-\u003ePutter[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putMapOf",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter k -\u003e Putter a -\u003e Putter (Map k a)",
        "fct-source": "src/Data-Serialize-Put.html#putMapOf",
        "fct-type": "function",
        "title": "putMapOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putMapOf",
        "normalized": "Putter a-\u003ePutter b-\u003ePutter(Map a b)",
        "package": "cereal",
        "partial": "Map Of",
        "signature": "Putter k-\u003ePutter a-\u003ePutter(Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putMaybeOf",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter a -\u003e Putter (Maybe a)",
        "fct-source": "src/Data-Serialize-Put.html#putMaybeOf",
        "fct-type": "function",
        "title": "putMaybeOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putMaybeOf",
        "normalized": "Putter a-\u003ePutter(Maybe a)",
        "package": "cereal",
        "partial": "Maybe Of",
        "signature": "Putter a-\u003ePutter(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putSeqOf",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter a -\u003e Putter (Seq a)",
        "fct-source": "src/Data-Serialize-Put.html#putSeqOf",
        "fct-type": "function",
        "title": "putSeqOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putSeqOf",
        "normalized": "Putter a-\u003ePutter(Seq a)",
        "package": "cereal",
        "partial": "Seq Of",
        "signature": "Putter a-\u003ePutter(Seq a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putSetOf",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter a -\u003e Putter (Set a)",
        "fct-source": "src/Data-Serialize-Put.html#putSetOf",
        "fct-type": "function",
        "title": "putSetOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putSetOf",
        "normalized": "Putter a-\u003ePutter(Set a)",
        "package": "cereal",
        "partial": "Set Of",
        "signature": "Putter a-\u003ePutter(Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putTreeOf",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter a -\u003e Putter (Tree a)",
        "fct-source": "src/Data-Serialize-Put.html#putTreeOf",
        "fct-type": "function",
        "title": "putTreeOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putTreeOf",
        "normalized": "Putter a-\u003ePutter(Tree a)",
        "package": "cereal",
        "partial": "Tree Of",
        "signature": "Putter a-\u003ePutter(Tree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putTwoOf",
      "description": {
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter a -\u003e Putter b -\u003e Putter (a, b)",
        "fct-source": "src/Data-Serialize-Put.html#putTwoOf",
        "fct-type": "function",
        "title": "putTwoOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putTwoOf",
        "normalized": "Putter a-\u003ePutter b-\u003ePutter(a,b)",
        "package": "cereal",
        "partial": "Two Of",
        "signature": "Putter a-\u003ePutter b-\u003ePutter(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord16be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word16 in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Word16",
        "fct-source": "src/Data-Serialize-Put.html#putWord16be",
        "fct-type": "function",
        "title": "putWord16be"
      },
      "index": {
        "description": "Write Word16 in big endian format",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putWord16be",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord16host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a Word16 in native host order and host endianness.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Word16",
        "fct-source": "src/Data-Serialize-Put.html#putWord16host",
        "fct-type": "function",
        "title": "putWord16host"
      },
      "index": {
        "description": "Write Word16 in native host order and host endianness For portability issues see putWordhost",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putWord16host",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord16le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word16 in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Word16",
        "fct-source": "src/Data-Serialize-Put.html#putWord16le",
        "fct-type": "function",
        "title": "putWord16le"
      },
      "index": {
        "description": "Write Word16 in little endian format",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putWord16le",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord32be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word32 in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Word32",
        "fct-source": "src/Data-Serialize-Put.html#putWord32be",
        "fct-type": "function",
        "title": "putWord32be"
      },
      "index": {
        "description": "Write Word32 in big endian format",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putWord32be",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord32host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a Word32 in native host order and host endianness.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Word32",
        "fct-source": "src/Data-Serialize-Put.html#putWord32host",
        "fct-type": "function",
        "title": "putWord32host"
      },
      "index": {
        "description": "Write Word32 in native host order and host endianness For portability issues see putWordhost",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putWord32host",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord32le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word32 in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Word32",
        "fct-source": "src/Data-Serialize-Put.html#putWord32le",
        "fct-type": "function",
        "title": "putWord32le"
      },
      "index": {
        "description": "Write Word32 in little endian format",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putWord32le",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord64be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word64 in big endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Word64",
        "fct-source": "src/Data-Serialize-Put.html#putWord64be",
        "fct-type": "function",
        "title": "putWord64be"
      },
      "index": {
        "description": "Write Word64 in big endian format",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putWord64be",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord64host",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a Word64 in native host order\n On a 32 bit machine we write two host order Word32s, in big endian form.\n For portability issues see \u003ccode\u003eputWordhost\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Word64",
        "fct-source": "src/Data-Serialize-Put.html#putWord64host",
        "fct-type": "function",
        "title": "putWord64host"
      },
      "index": {
        "description": "Write Word64 in native host order On bit machine we write two host order Word32s in big endian form For portability issues see putWordhost",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putWord64host",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord64le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Word64 in little endian format\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Word64",
        "fct-source": "src/Data-Serialize-Put.html#putWord64le",
        "fct-type": "function",
        "title": "putWord64le"
      },
      "index": {
        "description": "Write Word64 in little endian format",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putWord64le",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWord8",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently write a byte into the output buffer\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Word8",
        "fct-source": "src/Data-Serialize-Put.html#putWord8",
        "fct-type": "function",
        "title": "putWord8"
      },
      "index": {
        "description": "Efficiently write byte into the output buffer",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putWord8",
        "normalized": "",
        "package": "cereal",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:putWordhost",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Write a single native machine word. The word is\n written in host order, host endian form, for the machine you're on.\n On a 64 bit machine the Word is an 8 byte value, on a 32 bit machine,\n 4 bytes. Values written this way are not portable to\n different endian or word sized machines, without conversion.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Putter Word",
        "fct-source": "src/Data-Serialize-Put.html#putWordhost",
        "fct-type": "function",
        "title": "putWordhost"
      },
      "index": {
        "description": "Write single native machine word The word is written in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes Values written this way are not portable to different endian or word sized machines without conversion",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "putWordhost",
        "normalized": "",
        "package": "cereal",
        "partial": "Wordhost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:runPut",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Put -\u003e ByteString",
        "fct-source": "src/Data-Serialize-Put.html#runPut",
        "fct-type": "function",
        "title": "runPut"
      },
      "index": {
        "description": "Run the Put monad with serialiser",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "runPut",
        "normalized": "Put-\u003eByteString",
        "package": "cereal",
        "partial": "Put",
        "signature": "Put-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:runPutLazy",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "Put -\u003e ByteString",
        "fct-source": "src/Data-Serialize-Put.html#runPutLazy",
        "fct-type": "function",
        "title": "runPutLazy"
      },
      "index": {
        "description": "Run the Put monad with serialiser",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "runPutLazy",
        "normalized": "Put-\u003eByteString",
        "package": "cereal",
        "partial": "Put Lazy",
        "signature": "Put-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:runPutM",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser and get its result\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "PutM a -\u003e (a, ByteString)",
        "fct-source": "src/Data-Serialize-Put.html#runPutM",
        "fct-type": "function",
        "title": "runPutM"
      },
      "index": {
        "description": "Run the Put monad with serialiser and get its result",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "runPutM",
        "normalized": "PutM a-\u003e(a,ByteString)",
        "package": "cereal",
        "partial": "Put",
        "signature": "PutM a-\u003e(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:runPutMLazy",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser\n\u003c/p\u003e",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "PutM a -\u003e (a, ByteString)",
        "fct-source": "src/Data-Serialize-Put.html#runPutMLazy",
        "fct-type": "function",
        "title": "runPutMLazy"
      },
      "index": {
        "description": "Run the Put monad with serialiser",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "runPutMLazy",
        "normalized": "PutM a-\u003e(a,ByteString)",
        "package": "cereal",
        "partial": "Put MLazy",
        "signature": "PutM a-\u003e(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize-Put.html#v:unPut",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Serialize.Put",
        "fct-package": "cereal",
        "fct-signature": "PairS a",
        "fct-source": "src/Data-Serialize-Put.html#PutM",
        "fct-type": "function",
        "title": "unPut"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize Put",
        "module": "Data.Serialize.Put",
        "name": "unPut",
        "normalized": "",
        "package": "cereal",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#",
      "description": {
        "fct-module": "Data.Serialize",
        "fct-package": "cereal",
        "fct-signature": "module",
        "fct-source": "src/Data-Serialize.html",
        "fct-type": "module",
        "title": "Serialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Serialize",
        "module": "Data.Serialize",
        "name": "Serialize",
        "normalized": "",
        "package": "cereal",
        "partial": "Serialize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#t:Serialize",
      "description": {
        "fct-descr": "\u003cp\u003eIf your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions (\u003ccode\u003eghc \u003e= 7.2.1\u003c/code\u003e), the \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e\n methods will have default generic implementations.\n\u003c/p\u003e\u003cp\u003eTo use this option, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your datatype\n and declare a \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e instance for it without giving a definition for\n \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize",
        "fct-package": "cereal",
        "fct-signature": "class",
        "fct-source": "src/Data-Serialize.html#Serialize",
        "fct-type": "class",
        "title": "Serialize"
      },
      "index": {
        "description": "If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions ghc the put and get methods will have default generic implementations To use this option simply add deriving Generic clause to your datatype and declare Serialize instance for it without giving definition for put and get",
        "hierarchy": "Data Serialize",
        "module": "Data.Serialize",
        "name": "Serialize",
        "normalized": "",
        "package": "cereal",
        "partial": "Serialize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a value from a strict ByteString, reconstructing the original\n structure.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize",
        "fct-package": "cereal",
        "fct-signature": "ByteString -\u003e Either String a",
        "fct-source": "src/Data-Serialize.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode value from strict ByteString reconstructing the original structure",
        "hierarchy": "Data Serialize",
        "module": "Data.Serialize",
        "name": "decode",
        "normalized": "ByteString-\u003eEither String a",
        "package": "cereal",
        "partial": "",
        "signature": "ByteString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#v:decodeLazy",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a value from a lazy ByteString, reconstructing the original\n structure.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize",
        "fct-package": "cereal",
        "fct-signature": "ByteString -\u003e Either String a",
        "fct-source": "src/Data-Serialize.html#decodeLazy",
        "fct-type": "function",
        "title": "decodeLazy"
      },
      "index": {
        "description": "Decode value from lazy ByteString reconstructing the original structure",
        "hierarchy": "Data Serialize",
        "module": "Data.Serialize",
        "name": "decodeLazy",
        "normalized": "ByteString-\u003eEither String a",
        "package": "cereal",
        "partial": "Lazy",
        "signature": "ByteString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a value using binary serialization to a strict ByteString.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize",
        "fct-package": "cereal",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Serialize.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode value using binary serialization to strict ByteString",
        "hierarchy": "Data Serialize",
        "module": "Data.Serialize",
        "name": "encode",
        "normalized": "a-\u003eByteString",
        "package": "cereal",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#v:encodeLazy",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a value using binary serialization to a lazy ByteString.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize",
        "fct-package": "cereal",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Serialize.html#encodeLazy",
        "fct-type": "function",
        "title": "encodeLazy"
      },
      "index": {
        "description": "Encode value using binary serialization to lazy ByteString",
        "hierarchy": "Data Serialize",
        "module": "Data.Serialize",
        "name": "encodeLazy",
        "normalized": "a-\u003eByteString",
        "package": "cereal",
        "partial": "Lazy",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a value in the Get monad\n\u003c/p\u003e",
        "fct-module": "Data.Serialize",
        "fct-package": "cereal",
        "fct-signature": "Get t",
        "fct-source": "src/Data-Serialize.html#get",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "Decode value in the Get monad",
        "hierarchy": "Data Serialize",
        "module": "Data.Serialize",
        "name": "get",
        "normalized": "",
        "package": "cereal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal/docs/Data-Serialize.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a value in the Put monad.\n\u003c/p\u003e",
        "fct-module": "Data.Serialize",
        "fct-package": "cereal",
        "fct-signature": "Putter t",
        "fct-source": "src/Data-Serialize.html#put",
        "fct-type": "method",
        "title": "put"
      },
      "index": {
        "description": "Encode value in the Put monad",
        "hierarchy": "Data Serialize",
        "module": "Data.Serialize",
        "name": "put",
        "normalized": "",
        "package": "cereal",
        "partial": "",
        "signature": ""
      }
    }
  }
]