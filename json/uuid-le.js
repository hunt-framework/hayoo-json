[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#",
      "description": {
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "module",
        "fct-source": "src/Data-UUID-LittleEndian.html",
        "fct-type": "module",
        "title": "LittleEndian"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "LittleEndian",
        "normalized": "",
        "package": "uuid-le",
        "partial": "Little Endian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#t:UUID",
      "description": {
        "fct-descr": "\u003cp\u003eThe UUID type.  A \u003ccode\u003eRandom\u003c/code\u003e instance is provided which produces\n version 4 UUIDs as specified in RFC 4122.  The \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e instances are compatible with RFC 4122, storing the fields\n in network order as 16 bytes.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "UUID"
      },
      "index": {
        "description": "The UUID type Random instance is provided which produces version UUIDs as specified in RFC The Storable and Binary instances are compatible with RFC storing the fields in network order as bytes",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "UUID",
        "normalized": "",
        "package": "uuid-le",
        "partial": "UUID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:fromASCIIBytes",
      "description": {
        "fct-descr": "\u003cp\u003eIf the passed in \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e can be parsed as an ASCII representation of\n   a \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e, it will be. The hyphens may not be omitted.\n\u003c/p\u003e\u003cp\u003eThis should be equivalent to \u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "ByteString -\u003e Maybe UUID",
        "fct-type": "function",
        "title": "fromASCIIBytes"
      },
      "index": {
        "description": "If the passed in ByteString can be parsed as an ASCII representation of UUID it will be The hyphens may not be omitted This should be equivalent to fromString with unpack",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "fromASCIIBytes",
        "normalized": "ByteString-\u003eMaybe UUID",
        "package": "uuid-le",
        "partial": "ASCIIBytes",
        "signature": "ByteString-\u003eMaybe UUID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:fromByteString",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a UUID from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in little-endian-ish byte order.\n   The argument must be 16 bytes long, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "ByteString -\u003e Maybe UUID",
        "fct-source": "src/Data-UUID-LittleEndian.html#fromByteString",
        "fct-type": "function",
        "title": "fromByteString"
      },
      "index": {
        "description": "Extract UUID from ByteString in little-endian-ish byte order The argument must be bytes long otherwise Nothing is returned",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "fromByteString",
        "normalized": "ByteString-\u003eMaybe UUID",
        "package": "uuid-le",
        "partial": "Byte String",
        "signature": "ByteString-\u003eMaybe UUID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:fromLazyASCIIBytes",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003efromASCIIBytes\u003c/a\u003e\u003c/code\u003e except parses from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "ByteString -\u003e Maybe UUID",
        "fct-type": "function",
        "title": "fromLazyASCIIBytes"
      },
      "index": {
        "description": "Similar to fromASCIIBytes except parses from lazy ByteString",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "fromLazyASCIIBytes",
        "normalized": "ByteString-\u003eMaybe UUID",
        "package": "uuid-le",
        "partial": "Lazy ASCIIBytes",
        "signature": "ByteString-\u003eMaybe UUID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003eIf the passed in \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e can be parsed as a \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e, it will be.\n The hyphens may not be omitted.\n Example:\n\u003c/p\u003e\u003cpre\u003e\n  fromString \"c2cc10e1-57d6-4b6f-9899-38d972112d8c\"\n\u003c/pre\u003e\u003cp\u003eHex digits may be upper or lower-case.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "String -\u003e Maybe UUID",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "If the passed in String can be parsed as UUID it will be The hyphens may not be omitted Example fromString c2cc10e1-57d6-4b6f-9899-38d972112d8c Hex digits may be upper or lower-case",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "fromString",
        "normalized": "String-\u003eMaybe UUID",
        "package": "uuid-le",
        "partial": "String",
        "signature": "String-\u003eMaybe UUID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:fromWords",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a UUID from a sequence of \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e values. The opposite of \u003ccode\u003e\u003ca\u003etoWords\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "Word32 -\u003e Word32 -\u003e Word32 -\u003e Word32 -\u003e UUID",
        "fct-source": "src/Data-UUID-LittleEndian.html#fromWords",
        "fct-type": "function",
        "title": "fromWords"
      },
      "index": {
        "description": "Create UUID from sequence of Word32 values The opposite of toWords",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "fromWords",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eUUID",
        "package": "uuid-le",
        "partial": "Words",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eUUID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:nil",
      "description": {
        "fct-descr": "\u003cp\u003eThe nil UUID, as defined in RFC 4122.\n It is a UUID of all zeros. \u003ccode\u003e\u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e u\u003c/code\u003e iff \u003ccode\u003e\u003ccode\u003eu\u003c/code\u003e == \u003ccode\u003e\u003ca\u003enil\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "UUID",
        "fct-type": "function",
        "title": "nil"
      },
      "index": {
        "description": "The nil UUID as defined in RFC It is UUID of all zeros null iff nil",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "nil",
        "normalized": "",
        "package": "uuid-le",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the passed-in UUID is the \u003ccode\u003e\u003ca\u003enil\u003c/a\u003e\u003c/code\u003e UUID.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "UUID -\u003e Bool",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Returns true if the passed-in UUID is the nil UUID",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "null",
        "normalized": "UUID-\u003eBool",
        "package": "uuid-le",
        "partial": "",
        "signature": "UUID-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:swapListEndianity",
      "description": {
        "fct-descr": "\u003cp\u003eSwaps the endianity of a UUID byte list, if the list is at least eight\n   bytes long. Otherwise, it returns the original list.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "[Word8] -\u003e [Word8]",
        "fct-source": "src/Data-UUID-LittleEndian.html#swapListEndianity",
        "fct-type": "function",
        "title": "swapListEndianity"
      },
      "index": {
        "description": "Swaps the endianity of UUID byte list if the list is at least eight bytes long Otherwise it returns the original list",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "swapListEndianity",
        "normalized": "[Word]-\u003e[Word]",
        "package": "uuid-le",
        "partial": "List Endianity",
        "signature": "[Word]-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:swapTupleEndianity",
      "description": {
        "fct-descr": "\u003cp\u003eSwaps the endianity of a UUID \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e tuple.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "(Word32, Word32, Word32, Word32) -\u003e (Word32, Word32, Word32, Word32)",
        "fct-source": "src/Data-UUID-LittleEndian.html#swapTupleEndianity",
        "fct-type": "function",
        "title": "swapTupleEndianity"
      },
      "index": {
        "description": "Swaps the endianity of UUID Word32 tuple",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "swapTupleEndianity",
        "normalized": "(Word,Word,Word,Word)-\u003e(Word,Word,Word,Word)",
        "package": "uuid-le",
        "partial": "Tuple Endianity",
        "signature": "(Word,Word,Word,Word)-\u003e(Word,Word,Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:toASCIIBytes",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a UUID into a hyphentated string using lower-case letters, packed\n   as ASCII bytes into \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis should be equivalent to \u003ccode\u003e\u003ca\u003etoString\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "UUID -\u003e ByteString",
        "fct-type": "function",
        "title": "toASCIIBytes"
      },
      "index": {
        "description": "Convert UUID into hyphentated string using lower-case letters packed as ASCII bytes into ByteString This should be equivalent to toString with pack",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "toASCIIBytes",
        "normalized": "UUID-\u003eByteString",
        "package": "uuid-le",
        "partial": "ASCIIBytes",
        "signature": "UUID-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:toByteString",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a UUID into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in little-endian-ish byte order.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "UUID -\u003e ByteString",
        "fct-source": "src/Data-UUID-LittleEndian.html#toByteString",
        "fct-type": "function",
        "title": "toByteString"
      },
      "index": {
        "description": "Encode UUID into ByteString in little-endian-ish byte order",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "toByteString",
        "normalized": "UUID-\u003eByteString",
        "package": "uuid-le",
        "partial": "Byte String",
        "signature": "UUID-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:toLazyASCIIBytes",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003etoASCIIBytes\u003c/a\u003e\u003c/code\u003e except we produce a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "UUID -\u003e ByteString",
        "fct-type": "function",
        "title": "toLazyASCIIBytes"
      },
      "index": {
        "description": "Similar to toASCIIBytes except we produce lazy ByteString",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "toLazyASCIIBytes",
        "normalized": "UUID-\u003eByteString",
        "package": "uuid-le",
        "partial": "Lazy ASCIIBytes",
        "signature": "UUID-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a UUID into a hypenated string using lower-case letters.\n Example:\n\u003c/p\u003e\u003cpre\u003e\n  toString \u003c$\u003e fromString \"550e8400-e29b-41d4-a716-446655440000\"\n\u003c/pre\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "UUID -\u003e String",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Convert UUID into hypenated string using lower-case letters Example toString fromString e8400-e29b-41d4-a716-446655440000",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "toString",
        "normalized": "UUID-\u003eString",
        "package": "uuid-le",
        "partial": "String",
        "signature": "UUID-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-le/docs/Data-UUID-LittleEndian.html#v:toWords",
      "description": {
        "fct-descr": "\u003cp\u003eCovert a UUID into a sequence of \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e values. When stored in network\n   byte order, this tuple encodes the UUID in little-endian-ish byte order.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.LittleEndian",
        "fct-package": "uuid-le",
        "fct-signature": "UUID -\u003e (Word32, Word32, Word32, Word32)",
        "fct-source": "src/Data-UUID-LittleEndian.html#toWords",
        "fct-type": "function",
        "title": "toWords"
      },
      "index": {
        "description": "Covert UUID into sequence of Word32 values When stored in network byte order this tuple encodes the UUID in little-endian-ish byte order",
        "hierarchy": "Data UUID LittleEndian",
        "module": "Data.UUID.LittleEndian",
        "name": "toWords",
        "normalized": "UUID-\u003e(Word,Word,Word,Word)",
        "package": "uuid-le",
        "partial": "Words",
        "signature": "UUID-\u003e(Word,Word,Word,Word)"
      }
    }
  }
]