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
        "word": "BitSyntax"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains fuctions and templates for building up and breaking\n   down packed bit structures. It's something like Erlang's bit-syntax (or,\n   actually, more like Python's struct module).\n\u003c/p\u003e\u003cp\u003eThis code uses Data.ByteString which is included in GHC 6.5 and you can\n   get it for 6.4 at \u003ca\u003ehttp://www.cse.unsw.edu.au/~dons/fps.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BitSyntax",
          "name": "BitSyntax",
          "package": "BitSyntax",
          "source": "src/Data-BitSyntax.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains fuctions and templates for building up and breaking down packed bit structures It something like Erlang bit-syntax or actually more like Python struct module This code uses Data.ByteString which is included in GHC and you can get it for at http www.cse.unsw.edu.au dons fps.html",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "BitSyntax",
          "package": "BitSyntax",
          "partial": "Bit Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSyntax",
          "name": "BitBlock",
          "package": "BitSyntax",
          "source": "src/Data-BitSyntax.html#BitBlock",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "BitBlock",
          "package": "BitSyntax",
          "partial": "Bit Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#t:BitBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSyntax",
          "name": "ReadType",
          "package": "BitSyntax",
          "source": "src/Data-BitSyntax.html#ReadType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "ReadType",
          "package": "BitSyntax",
          "partial": "Read Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#t:ReadType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike variable, but the decoding function is passed the\n   entire result tuple so far. Thus the function whose name\n   passed has type\n   \u003ccode\u003eMonad m =\u003e ByteString -\u003e (...) -\u003e m (v, ByteString)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "Context",
          "package": "BitSyntax",
          "signature": "Context Name",
          "source": "src/Data-BitSyntax.html#ReadType",
          "type": "function"
        },
        "index": {
          "description": "Like variable but the decoding function is passed the entire result tuple so far Thus the function whose name passed has type Monad ByteString ByteString",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "Context",
          "package": "BitSyntax",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed size field, the result of which is a ByteString\n   of that length.\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "Fixed",
          "package": "BitSyntax",
          "signature": "Fixed Integer",
          "source": "src/Data-BitSyntax.html#ReadType",
          "type": "function"
        },
        "index": {
          "description": "fixed size field the result of which is ByteString of that length",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "Fixed",
          "package": "BitSyntax",
          "partial": "Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Fixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a value and ignore it (the result will not be part\n   of the returned tuple)\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "Ignore",
          "package": "BitSyntax",
          "signature": "Ignore ReadType",
          "source": "src/Data-BitSyntax.html#ReadType",
          "type": "function"
        },
        "index": {
          "description": "Decode value and ignore it the result will not be part of the returned tuple",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "Ignore",
          "package": "BitSyntax",
          "partial": "Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Ignore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the most recent element of the result tuple and\n   interprets it as the length of this field. Results in\n   a ByteString\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "LengthPrefixed",
          "package": "BitSyntax",
          "signature": "LengthPrefixed",
          "source": "src/Data-BitSyntax.html#ReadType",
          "type": "function"
        },
        "index": {
          "description": "Takes the most recent element of the result tuple and interprets it as the length of this field Results in ByteString",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "LengthPrefixed",
          "package": "BitSyntax",
          "partial": "Length Prefixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:LengthPrefixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends the string with a trailing NUL byte\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "NullTerminated",
          "package": "BitSyntax",
          "signature": "NullTerminated String",
          "source": "src/Data-BitSyntax.html#BitBlock",
          "type": "function"
        },
        "index": {
          "description": "Appends the string with trailing NUL byte",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "NullTerminated",
          "package": "BitSyntax",
          "partial": "Null Terminated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:NullTerminated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePacks a series of bit fields together. The argument is\n   a list of pairs where the first element is the size\n   (in bits) and the second is the value. The sum of the\n   sizes for a given PackBits must be a multiple of 8\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "PackBits",
          "package": "BitSyntax",
          "signature": "PackBits [(Int, Int)]",
          "source": "src/Data-BitSyntax.html#BitBlock",
          "type": "function"
        },
        "index": {
          "description": "Packs series of bit fields together The argument is list of pairs where the first element is the size in bits and the second is the value The sum of the sizes for given PackBits must be multiple of",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "PackBits",
          "normalized": "PackBits[(Int,Int)]",
          "package": "BitSyntax",
          "partial": "Pack Bits",
          "signature": "PackBits[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:PackBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a series of bit fields, results in a list of\n   Integers. Each element of the argument is the length of\n   the bit field. The sums of the lengths must be a multiple\n   of 8\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "PackedBits",
          "package": "BitSyntax",
          "signature": "PackedBits [Integer]",
          "source": "src/Data-BitSyntax.html#ReadType",
          "type": "function"
        },
        "index": {
          "description": "Decode series of bit fields results in list of Integers Each element of the argument is the length of the bit field The sums of the lengths must be multiple of",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "PackedBits",
          "normalized": "PackedBits[Integer]",
          "package": "BitSyntax",
          "partial": "Packed Bits",
          "signature": "PackedBits[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:PackedBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends a ByteString\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "RawByteString",
          "package": "BitSyntax",
          "signature": "RawByteString ByteString",
          "source": "src/Data-BitSyntax.html#BitBlock",
          "type": "function"
        },
        "index": {
          "description": "Appends ByteString",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "RawByteString",
          "package": "BitSyntax",
          "partial": "Raw Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:RawByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends the string without any terminator\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "RawString",
          "package": "BitSyntax",
          "signature": "RawString String",
          "source": "src/Data-BitSyntax.html#BitBlock",
          "type": "function"
        },
        "index": {
          "description": "Appends the string without any terminator",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "RawString",
          "package": "BitSyntax",
          "partial": "Raw String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:RawString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResults in a ByteString containing the undecoded bytes so\n   far. Generally used at the end to return the trailing body\n   of a structure, it can actually be used at any point in the\n   decoding to return the trailing part at that point.\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "Rest",
          "package": "BitSyntax",
          "signature": "Rest",
          "source": "src/Data-BitSyntax.html#ReadType",
          "type": "function"
        },
        "index": {
          "description": "Results in ByteString containing the undecoded bytes so far Generally used at the end to return the trailing body of structure it can actually be used at any point in the decoding to return the trailing part at that point",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "Rest",
          "package": "BitSyntax",
          "partial": "Rest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip some number of bytes\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "Skip",
          "package": "BitSyntax",
          "signature": "Skip Integer",
          "source": "src/Data-BitSyntax.html#ReadType",
          "type": "function"
        },
        "index": {
          "description": "Skip some number of bytes",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "Skip",
          "package": "BitSyntax",
          "partial": "Skip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned 16-bit int\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "U16",
          "package": "BitSyntax",
          "signature": "U16 Int",
          "source": "src/Data-BitSyntax.html#BitBlock",
          "type": "function"
        },
        "index": {
          "description": "Unsigned bit int",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "U16",
          "package": "BitSyntax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:U16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLittle-endian, unsigned 16-bit int\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "U16LE",
          "package": "BitSyntax",
          "signature": "U16LE Int",
          "source": "src/Data-BitSyntax.html#BitBlock",
          "type": "function"
        },
        "index": {
          "description": "Little-endian unsigned bit int",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "U16LE",
          "package": "BitSyntax",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:U16LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned 32-bit int\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "U32",
          "package": "BitSyntax",
          "signature": "U32 Int",
          "source": "src/Data-BitSyntax.html#BitBlock",
          "type": "function"
        },
        "index": {
          "description": "Unsigned bit int",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "U32",
          "package": "BitSyntax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:U32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLittle-endian, unsigned 32-bit int\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "U32LE",
          "package": "BitSyntax",
          "signature": "U32LE Int",
          "source": "src/Data-BitSyntax.html#BitBlock",
          "type": "function"
        },
        "index": {
          "description": "Little-endian unsigned bit int",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "U32LE",
          "package": "BitSyntax",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:U32LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned 8-bit int\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "U8",
          "package": "BitSyntax",
          "signature": "U8 Int",
          "source": "src/Data-BitSyntax.html#BitBlock",
          "type": "function"
        },
        "index": {
          "description": "Unsigned bit int",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "U8",
          "package": "BitSyntax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:U8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unsigned number of some number of bytes. Valid\n   arguments are 1, 2 and 4\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "Unsigned",
          "package": "BitSyntax",
          "signature": "Unsigned Integer",
          "source": "src/Data-BitSyntax.html#ReadType",
          "type": "function"
        },
        "index": {
          "description": "An unsigned number of some number of bytes Valid arguments are and",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "Unsigned",
          "package": "BitSyntax",
          "partial": "Unsigned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Unsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unsigned, little-endian integer of some number of\n   bytes. Valid arguments are 2 and 4\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "UnsignedLE",
          "package": "BitSyntax",
          "signature": "UnsignedLE Integer",
          "source": "src/Data-BitSyntax.html#ReadType",
          "type": "function"
        },
        "index": {
          "description": "An unsigned little-endian integer of some number of bytes Valid arguments are and",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "UnsignedLE",
          "package": "BitSyntax",
          "partial": "Unsigned LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:UnsignedLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable length element to be decoded by a custom\n   function. The function's name is given as the single\n   argument and should have type\n   \u003ccode\u003eMonad m =\u003e ByteString -\u003e m (v, ByteString)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "Variable",
          "package": "BitSyntax",
          "signature": "Variable Name",
          "source": "src/Data-BitSyntax.html#ReadType",
          "type": "function"
        },
        "index": {
          "description": "variable length element to be decoded by custom function The function name is given as the single argument and should have type Monad ByteString ByteString",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "Variable",
          "package": "BitSyntax",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSyntax",
          "name": "bitSyn",
          "package": "BitSyntax",
          "signature": "[ReadType] -\u003e Q Exp",
          "source": "src/Data-BitSyntax.html#bitSyn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "bitSyn",
          "normalized": "[ReadType]-\u003eQ Exp",
          "package": "BitSyntax",
          "partial": "Syn",
          "signature": "[ReadType]-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:bitSyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSyntax",
          "name": "decodeU16",
          "package": "BitSyntax",
          "signature": "ByteString -\u003e Word16",
          "source": "src/Data-BitSyntax.html#decodeU16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "decodeU16",
          "normalized": "ByteString-\u003eWord",
          "package": "BitSyntax",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:decodeU16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSyntax",
          "name": "decodeU16LE",
          "package": "BitSyntax",
          "signature": "ByteString -\u003e Word16",
          "source": "src/Data-BitSyntax.html#decodeU16LE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "decodeU16LE",
          "normalized": "ByteString-\u003eWord",
          "package": "BitSyntax",
          "partial": "LE",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:decodeU16LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSyntax",
          "name": "decodeU32",
          "package": "BitSyntax",
          "signature": "ByteString -\u003e Word32",
          "source": "src/Data-BitSyntax.html#decodeU32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "decodeU32",
          "normalized": "ByteString-\u003eWord",
          "package": "BitSyntax",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:decodeU32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSyntax",
          "name": "decodeU32LE",
          "package": "BitSyntax",
          "signature": "ByteString -\u003e Word32",
          "source": "src/Data-BitSyntax.html#decodeU32LE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "decodeU32LE",
          "normalized": "ByteString-\u003eWord",
          "package": "BitSyntax",
          "partial": "LE",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:decodeU32LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitSyntax",
          "name": "decodeU8",
          "package": "BitSyntax",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-BitSyntax.html#decodeU8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "decodeU8",
          "normalized": "ByteString-\u003eWord",
          "package": "BitSyntax",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:decodeU8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a binary string from the list of elements given\n\u003c/p\u003e",
          "module": "Data.BitSyntax",
          "name": "makeBits",
          "package": "BitSyntax",
          "signature": "[BitBlock] -\u003e ByteString",
          "source": "src/Data-BitSyntax.html#makeBits",
          "type": "function"
        },
        "index": {
          "description": "Make binary string from the list of elements given",
          "hierarchy": "Data BitSyntax",
          "module": "Data.BitSyntax",
          "name": "makeBits",
          "normalized": "[BitBlock]-\u003eByteString",
          "package": "BitSyntax",
          "partial": "Bits",
          "signature": "[BitBlock]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BitSyntax/docs/Data-BitSyntax.html#v:makeBits"
      }
    }
  ]
]